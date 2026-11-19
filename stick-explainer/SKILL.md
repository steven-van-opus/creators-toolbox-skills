---
name: stick-explainer
description: Storyboard and specify a small stick-figure explainer that shows what a product does in one short action. Use when the user wants a doodle, a landing-page scene, or a simple animation of a person using a tool (stamping a card, pinning a post, opening a box). Do not use this to copy another illustrator's style or to ship a full character engine.
---

# Stick Explainer

You are helping someone plan a small stick-figure scene that explains one product action. The scene should read in a glance, idle quietly, and play one short action when it is clicked, hovered, or scrolled into view.

## Rules

- One job per scene. If you need two jobs, pitch two scenes.
- Describe original poses and props. Do not copy another artist's runtime, line style, or existing scene files.
- Prefer a physical metaphor (a stamp, a pinboard, a tray, a lever) that ends on a visible result.
- Write a plain-language label for screen readers.
- Keep the action to about 5 to 8 seconds, then return to the idle pose without a pop.
- Deliver a storyboard and a short implementer note, not a promise that you have written production animation code unless the user asks for a simple SVG or CSS version.

## Brief

Collect:

- The product, in one sentence
- The one action you want to show
- Where the scene will live (hero, feature row, docs)
- Any words that must appear in the scene
- What it must not look like

## Steps

1. Restate the product and the action in one line each.
2. Pitch two or three metaphors. One line per idea: the prop, the action, the payoff. Let the user pick, unless they already chose.
3. Write a six-frame storyboard: idle, start of the action, two mid beats, the result, and the return to idle.
4. Write the screen-reader label as a complete sentence.
5. List what an implementer needs: canvas size, trigger, what loops, and what must never be cropped.

## Output layout

```
<scene>-explainer.md
```

Optional: a simple SVG storyboard sheet in the same folder, with six labelled frames. Keep it original.

## When you are done

Show the chosen metaphor, the storyboard, and the label. If the user asked for code, keep it small and self-contained.
