# Browser Game Maker

A Creators Toolbox agent skill that turns one sentence into a small, playable browser game: one HTML file, a canvas, no dependencies.

It picks a single core loop from your idea, wires up keyboard and touch controls, adds start, game over, and restart screens, keeps a best score, and adds a little juice (screen shake, particles, squash, hit flash, optional beeps). Then it opens the game in a browser and plays it before handing it over, so you get something that works on a phone, not just code that looks right.

## Install

```bash
npx skills add steven-van-opus/creators-toolbox-skills --skill browser-game-maker
```

Or copy this folder into your project's `.agents/skills/` or `.claude/skills/` directory.

Then ask your agent: "/game a raccoon dodging recycling bins on a Toronto sidewalk."

## Example prompts

- "/game dodge falling tacos"
- "Make me a browser game about a paper plane flying over Toronto rooftops."
- "/game catch coffee beans in a mug before they hit the floor, gets faster every 10 beans"
- "Make me a one-button game where a frog hops between lily pads."
- "Turn this into a game I can play on my phone: a snail racing a sunset."

## What you get

- A five-line pitch: player, verb, threat, score, ramp
- `games/<slug>.html`, a single file you can open by double-clicking or host anywhere
- Keyboard and touch controls, crisp on high-DPI screens, sized for phones
- Self-check results from actually playing the game in a browser

## Examples

Two games written from scratch for this skill. Open either file in a browser to play.

- [examples/dodge-the-falling-tacos.html](./examples/dodge-the-falling-tacos.html): slide left and right to dodge falling tacos. They fall faster the longer you last.
- [examples/paper-plane-toronto.html](./examples/paper-plane-toronto.html): tap or press Space to lift a paper plane through gaps in a Toronto skyline, CN Tower included.

## Guide

For a walkthrough of how the skill works and how to extend the games, read the companion guide: [Browser game skill](https://creatorstoolbox.com/@steven/post/g_browser-game-skill).

## Credit

Inspired by [Goofy Fish](https://github.com/nilbuild/goofyfish) by nilbuild, which showed how much fun a tiny one-file browser game can be. Inspiration only: this skill, its wording, and both example games are our own work, written from scratch.

## License

MIT. Part of [creators-toolbox-skills](https://github.com/steven-van-opus/creators-toolbox-skills). The MIT license covers this folder's original work only; linked projects retain their own terms.
