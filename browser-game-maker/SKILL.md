---
name: browser-game-maker
description: Turn one sentence into a small, playable, single-file HTML5 canvas browser game. Use when the user types "/game [idea]", or asks to "make me a browser game about...", "build a quick arcade game where...", "turn this idea into a game I can play on my phone", or wants a tiny web game prototype with no build step. Do not use for large multi-level games, 3D engines, multiplayer servers, or games that need downloaded art or audio.
---

# Browser Game Maker

You are turning a one-sentence idea into a tiny game someone can open, play, lose, and replay within a minute. The result is one HTML file with no dependencies. Small and finished beats big and broken.

## Rules

- One file. HTML, CSS, and JavaScript all inline. No CDNs, no image files, no fonts, no audio files, no network requests. Draw everything with canvas shapes and text.
- One core loop. Pick the single action the player repeats (dodge, jump, flap, catch, aim) and build around it. Cut everything else.
- Original work. Do not copy code, art, names, or text from an existing game. If the idea names a famous game, borrow the feel only and say so.
- Keyboard and touch both work from the first version. Never ship a game that needs a keyboard on a phone.
- Sound is optional and off until the player acts. Never autoplay audio.
- You must play the game yourself before you hand it over (see Self-check).

## 1. Read the idea

Rewrite the user's sentence into a short pitch before you code. Leave a field as "not specified" rather than inventing a requirement.

- **Player:** what the player controls
- **Verb:** the one input action (move left and right, tap to lift, hold to charge)
- **Threat:** what ends the run
- **Score:** what earns points (time survived, items caught, gaps passed)
- **Ramp:** what gets harder over time (speed, spawn rate, gap size)
- **Theme:** colors and a one-line vibe

If the idea suggests two loops ("a racing game where you also build a city"), pick the one that fits a 30-second session and mention the other as a follow-up.

## 2. Controls

Map one verb to every input type:

| Verb | Keyboard | Touch / mouse |
| --- | --- | --- |
| Move left and right | Arrow keys and A / D | Drag, or hold the left or right half of the screen |
| Jump, flap, fire | Space, Up, W | Tap anywhere |
| Start and restart | Space or Enter | Tap |

- Use `pointerdown`, `pointermove`, and `pointerup` so mouse, pen, and touch share one path.
- Call `preventDefault()` on Space and arrow keys so the page does not scroll.
- Ignore inputs for about 400 ms after game over so a held key or a frantic tap does not skip the game-over screen.

## 3. States

Use a single `state` variable with exactly these values:

- `start`: title, one-line instructions for both keyboard and touch, best score, "Tap or press Space to start"
- `playing`: the loop runs, score is shown
- `over`: final score, best score, "new best" when it applies, "Tap or press Space to play again"

Restart must reset every piece of run state (position, velocity, entities, particles, timers, speed, score) in one `reset()` function. Bugs in restart usually come from state that lives outside `reset()`.

## 4. Score

- Show the score during play, large and high contrast.
- Save the best score in `localStorage` under a key named after the game slug. Wrap reads and writes in `try`/`catch`, since private browsing can throw.

## 5. Juice

Add a little feedback for every important event. Keep each effect short (under 300 ms) so it reads as response, not noise.

- **Screen shake** on hits or game over: offset the camera by a random amount that decays to zero.
- **Particles** on scoring and crashes: a small array of dots with velocity, gravity, and a life timer. Cap the count.
- **Squash and stretch** on jumps, landings, or flaps: scale the player sprite on one axis and ease back.
- **Hit flash** on a crash: draw a white or red full-screen rectangle with fading alpha.
- **Sound (optional):** short WebAudio oscillator beeps. Create the `AudioContext` lazily inside the first user input handler, include a visible mute toggle (M key and a small on-screen button), and wrap everything so a missing or blocked audio API never breaks the game.
- Respect `prefers-reduced-motion` by turning screen shake off.

## 6. Mobile and scaling

- Add `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`.
- Size the canvas to the viewport and multiply its backing store by `devicePixelRatio` (cap at 2 or 3), then `ctx.setTransform(dpr, 0, 0, dpr, 0, 0)` so you draw in CSS pixels.
- Keep a fixed logical world size (for example 400 by 700) and scale it to fit the screen with letterboxing, or design the game to adapt to any aspect ratio. Either way, nothing important may be cut off on a 375 by 667 phone.
- On the canvas and body set `touch-action: none`, `overscroll-behavior: none`, `user-select: none`, `overflow: hidden`, and `margin: 0` so touch never scrolls, zooms, or selects text.
- Handle `resize` and `orientationchange`.

## 7. Loop

- Use `requestAnimationFrame` and a delta time in seconds, clamped to about 1/30 so a background tab does not teleport the player.
- Pause when `document.hidden` is true.
- Use simple collision shapes (circles or boxes) that are slightly smaller than the drawn sprite. Players forgive near misses, not unfair hits.

## 8. Self-check (required)

Before you reply, open the file in a browser and play it. Use a headless browser such as Playwright or Puppeteer if you have one, or Chrome headless with `--screenshot` at minimum. Confirm each item and note how you checked it:

1. The page loads with no console errors and no failed network requests.
2. The start screen appears with instructions and best score.
3. Pressing Space (and, separately, a tap or pointer event) starts the game.
4. Input moves the player: compare the player position before and after a key press or drag.
5. Score increases during play.
6. Game over triggers when the player hits a threat or stops playing.
7. Restart returns to a fresh run with score 0, and the best score persists after a reload.
8. At a phone viewport (375 by 667, device scale factor 2 or 3) the whole play area is visible, and the page does not scroll.

Exposing a tiny debug handle such as `window.__game = { get state() {...}, get score() {...} }` makes these checks scriptable. Keep it harmless and read-only.

If a check fails, fix the game and run the checks again. Do not hand over a game you have not seen working. If you truly cannot run a browser, say so plainly and list which checks you could not do.

## Output contract

Save one file:

```
games/<slug>.html
```

`<slug>` is lowercase with hyphens, taken from the game's name (for example `games/dodge-the-falling-tacos.html`). Then reply with:

- The pitch from step 1, in five short lines
- How to play (keyboard and touch)
- The self-check results, one line each
- One or two ideas for the next version

## Checklist

- [ ] One HTML file, no external URLs or assets
- [ ] One core loop that matches the pitch
- [ ] Keyboard and touch controls, page never scrolls
- [ ] Start, playing, game over, restart
- [ ] Score on screen, best score saved
- [ ] At least three juice effects, sound muted-safe
- [ ] Crisp on high-DPI screens, fits a phone viewport
- [ ] Played in a browser with no console errors
