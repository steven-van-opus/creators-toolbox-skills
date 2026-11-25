---
name: draw-icons
description: Draw or revise a small set of original SVG interface icons that match a product's existing visual language and remain recognizable at the sizes where they ship.
---

# Draw Icons

## Start with the controls

Identify the control each icon belongs to, its visible label or accessible name, and the smallest displayed size. Read nearby UI or SVG files when available. Use that evidence to choose a view box, stroke or fill treatment, cap and corner style, and optical padding. If the project has no icon system, a 24 × 24 view box with a 2-unit rounded stroke and `currentColor` is a starting point.

Choose a concrete silhouette for each control. If two adjacent icons look alike, give one a different primary shape before adding detail. Reserve a secondary mark such as a plus or arrow for an action the base shape does not convey.

## Draw the set

- Work on one representative icon first. Check its weight, alignment and apparent size beside a nearby icon or beside its label before applying the style to the rest.
- Use simple SVG shapes and paths. Share the view box and drawing conventions across the set, then adjust each shape's visible mass and margins so they feel balanced in a row.
- Keep standalone files free of external assets and presentation tied to a single background. When inlining a decorative icon beside text, hide it from assistive technology. Give the control itself an accessible name when it has no visible label.

## Check it in context

Render the set at the smallest intended size and at the normal size. Check it on the supported backgrounds and in a row with real labels. Look for clipped strokes, holes that close at small sizes and icons that seem interchangeable. If a small-size check fails, simplify the geometry and render it again.

Deliver the SVG files with a short mapping of each filename to its purpose. State which sizes and states you actually checked.

See the [Tidepool field log brief](examples/tidepool-field-log.md) for four worked SVGs and their design decisions.
