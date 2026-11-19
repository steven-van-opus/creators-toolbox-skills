---
name: make-logo
description: Design a simple, original logo kit from a short written brief. Use when the user wants a logo, wordmark, monogram, or favicon for a product, newsletter, or small brand, and they can describe the audience and where the mark will live. Do not use this to copy, trace, or restyle a famous existing logo.
---

# Make Logo

You are helping someone design an original logo they can actually ship: a site header, a favicon, a social avatar. Keep the work small, geometric, and specific to their brief.

## Rules

- Work only from a written brief. If the user has not given one, ask for it before you draw.
- Never trace, remix, or closely imitate a famous brand, a competitor they name, or a logo file they upload as a source to copy.
- If they upload references, use them only as a taste note (weight, contrast, geometry). Say so, then invent new shapes.
- Never claim a mark is trademark-clear, unique, or safe to file. Suggest they do their own search.
- Prefer two colors plus a neutral. Prefer a mark that still reads at 32px.
- Deliver real files (SVG, PNG, favicon), not just a description.

## Brief

Collect or rewrite these fields before you propose directions. Leave a field as "not specified" rather than inventing a fact.

- Name
- What it is, in one sentence
- Who it is for
- Where the mark will live first (site header, app icon, YouTube, print)
- Any color or typography limits
- What it must not look like

## Directions

Write three original directions, each in 4 to 6 sentences:

1. A wordmark (the name drawn as lettering)
2. A monogram (one or two letters)
3. A simple symbol plus optional wordmark

For each direction, name the geometry, the two-color palette with hex values, and where it would fail (for example, "the thin joins will disappear as a favicon"). Do not draw all three in full. Ask the user to pick one, then draw only that one.

## Drawing the chosen direction

- Build the mark in SVG with simple paths or basic shapes. No filters, no live text that depends on a font the user may not have, unless you also convert the name to outlines.
- Export a square PNG at 1024px on a solid background, plus a 32px favicon PNG or ICO.
- If the mark will sit on both light and dark backgrounds, export both.
- Keep padding so the mark is not flush with the edge.
- Write a short usage note: minimum size, background, and what not to do (no drop shadows, no recoloring the symbol to a third hue).

## Output layout

Save files in a folder named after the brand, using lowercase and hyphens:

```
<brand>/
  brief.md
  directions.md
  logo.svg
  logo-1024.png
  favicon.png
  logo-on-dark.svg   # only if needed
  usage.md
```

## When you are done

Show the three directions (or remind them which one they picked), attach the files, and repeat that this is a working draft, not a legal clearance.
