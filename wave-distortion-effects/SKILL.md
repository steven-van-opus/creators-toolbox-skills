---
name: wave-distortion-effects
description: Build sine displacement, pointer ripples, or flag waves on an image in a single HTML file with an original WebGL fragment shader and CSS/SVG fallback. Use when a visual reference needs a controlled distortion effect with performance and reduced-motion behavior.
---

# Wave Distortion Effects

Describe the reference before coding. Name what moves, what stays anchored, where distortion begins, and how it ends. Keep headings, navigation, form controls, and source links outside the distorted artwork.

## Reference and parameters

Use [examples/wave-study.html](./examples/wave-study.html) as the dependency-free starting point. It makes its own texture in memory; replace that texture with a licensed local image only when needed. A flag wave means 2D image displacement here, not a cloth simulation.

Record all six parameters with units:

| Parameter | Meaning | Starting range |
| --- | --- | --- |
| Amplitude | Peak displacement as a fraction of image height | 0.003 to 0.02 |
| Frequency | Cycles across the image width, or radial UV distance | 2 to 8 |
| Speed | Cycles per second | 0.1 to 0.6 |
| Direction | Unit vector controlling phase travel | `(1, 0)` for horizontal travel |
| Falloff | Radial exponential attenuation coefficient | 3 to 8 |
| Anchor | Edge or region with no displacement | Left edge for a flag |

Choose one mode first. Sine displaces Y by a periodic function of position and time. Ripple displaces radially around the pointer with distance decay; guard the zero-length direction at the center. Flag grows displacement toward the free edge. Clamp texture coordinates with a half-texel inset and leave padding for movement so edge smearing does not become the main visual.

## Build and verify

1. Restate the reference using rhythm, direction, and anchored regions. Do not copy source shaders or a reference site's assets.
2. Set the six parameters. Use one texture, one fragment pass, and one requestAnimationFrame loop. Show the quietest version first.
3. Keep the effect decorative and pointer-transparent. Use real HTML for the title, links, and logo labels. On a logo grid, show a temporary decorative duplicate only during hover or keyboard focus; never distort the only readable logo or hide its accessible name.
4. If WebGL or shader compilation fails, retain the CSS background with a static inline SVG `feTurbulence` plus `feDisplacementMap` filter. Treat it as an approximation, not a pixel match. If SVG filters are unsupported, the undistorted CSS artwork remains usable.
5. Reduced motion removes the filter and animation, shows the undistorted artwork, and schedules no recurring draws. Listen for preference changes. Include pause for looping decorative motion. Pause when hidden or outside the viewport and cap device pixel ratio at 1.5.
6. Inspect the real layout at desktop and phone widths. Check texture seams, pointer center, edges, text legibility, focus, touch scrolling, reduced motion, and a forced no-WebGL fallback. Profile on a target device; aim under 16.7ms per frame for 60fps and lower resolution or stop motion when that budget is missed. Never infer performance from a still.

For an uploaded texture, handle image decoding errors and CORS explicitly. Keep the fallback visible until the texture uploads and the first draw succeeds. An iframe cannot read pointer events from its parent without an explicit integration.

## When you are done

Deliver one HTML file, reference description, parameter table, fallback notes, and observed verification. Include actual screenshots when available and mark missing checks as pending. Worked examples: [newsletter header](./examples/newsletter-header.md), [logo grid](./examples/product-logo-grid.md).
