---
name: launch-greeting-card
description: Plan and write a simple interactive greeting card for a product launch, a listing, a thank you, or a holiday note. Use when the user has a picture and a short message and wants a card page they can send or host. Do not use this to copy another card's 3D engine or to claim a finished WebGL implementation you have not built.
---

# Launch Greeting Card

You are helping someone turn a picture and a short message into a digital card. The card should feel worth opening: a front, an inside message, and a back, with a simple motion on the front (a tilt, a light, or a small looping detail).

## Rules

- Work from their picture and their words. If either is missing, ask before you invent a photo or a message in their voice.
- Keep the message short enough to read in one look. Do not write a newsletter inside the card.
- Describe original motion and layout. Do not copy another skill's renderer, shaders, or bundled assets.
- Prefer one self-contained HTML file if they ask for something they can send. If you cannot honestly build the motion they want, deliver a clear spec and a static front/inside/back instead of a broken file.
- Credit the photo to the person who made it.

## Brief

- Occasion (listed on a site, thank you, birthday, holiday, other)
- The picture, and who made it
- The message, in their words
- The name that should appear on the card
- Where it will be opened (a link, an email, a file)
- Any colors they already use

## Steps

1. Restate the occasion and the message. Do not "improve" their wording unless they ask.
2. Propose a front, an inside, and a back. One or two sentences each.
3. Propose one motion on the front that fits the occasion (a gentle tilt, a soft light, a small repeating detail). Skip anything that hides the picture or the name.
4. If they want a file, build a simple HTML card with those three faces, or write a spec another tool can follow.
5. Write a short alt text for the front.

## Output layout

```
<name>-card/
  brief.md
  card-spec.md
  card.html      # only if you built it
```

## When you are done

Show the three faces, the motion, and the alt text. If you built a file, tell them how to open it (drop it in a browser, no server required when it is self-contained).
