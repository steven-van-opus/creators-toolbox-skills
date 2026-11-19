# Product logo grid hover

## Input

"On the Creators Toolbox caption-tools guide, let the fictional FrameKit logo wave gently when its link is hovered or focused. Keep all six tool names readable. Each logo sits in a 160 by 96 slot. No continuous animation across the whole grid."

## Expected output

Start from `wave-study.html?mode=flag` and reuse its fragment logic for one shared decorative canvas over the active logo slot. Use an authorized logo texture when one is supplied; the study's embedded artwork is only a stand-in. Parameters: amplitude 0.006 of slot height, frequency 3 cycles across width, speed 0.4 cycles per second, direction `(1, 0)`, falloff 5 (unused by flag mode), anchor left edge. Multiply displacement by `uv.x * uv.x`.

Keep the original logo and the HTML name in the link. Cover only the logo artwork with the decorative canvas while active. Pointer leave or blur removes the duplicate and stops its loop. Keyboard focus starts the same preview but keeps the focus outline above the canvas. Reduced motion keeps the original logo with an ordinary outline; no preview loop starts. Avoid six contexts and six idle loops.

Expected output files for an implementation: `logo-grid-wave.html` with embedded code and a short verification note. Check first and last logo slots, tab navigation, hover exit, 390px wrapping, and reduced motion. The standalone study demonstrates flag math; the grid lifecycle described here is the scoped adaptation, not a claim that the study is already a grid.
