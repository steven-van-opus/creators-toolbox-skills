---
name: software-product-shots
description: Turn an authorized app or website capture into a device mockup for a launch, store listing, or product story. Use for matching the viewport, choosing perspective, lighting the scene, and checking legibility at delivery size.
---

# Software product shots

Make a device mockup that shows one recognizable product moment. Keep the supplied interface pixels intact and work on the scene around them.

## Choose the crop first

- Identify the target canvas, placement, and UI detail a viewer should recognize. A feed thumbnail and a full-width page hero can need different exports from the same scene.
- Use a supplied capture or capture the authorized URL at a viewport that matches the intended device. Wait for fonts and key content, remove temporary browser overlays, and choose a public or demo state without private information.
- Fit the image to the active screen's proportions, preserving its aspect ratio. If cropping hides a control, capture again at the matching viewport or use a frame with a better fit.

## Build the shot

- Put the screen and bezel in one transform or 3D group. Tilt the group, then bring the more distant side back toward the viewer until the smallest important label holds up in the thumbnail. For a first HTML pass, try about 12° of yaw, then inspect before adding any roll.
- Put one light source outside the most readable part of the screen. Set the soft shadow on the far side of that light and connect the device to a surface with a tighter contact shadow. Keep window reflections faint enough that a repeated row or outline can still be read through them.
- Keep the screen layer sharp for a flat composite. Soften foreground objects and backdrop separately. For a real 3D scene, set the focus target on the UI feature and render an in-focus reference alongside the depth-of-field version so you can see what the lens lost.
- Render the composition with the project's available tools. For a browser composite, group the bezel and capture in an HTML fixture, put the perspective on their parent, then export using the browser's screenshot function.

## Check the exports

Open the exact file at full resolution and at the intended thumbnail size. Look for cropped text, visibly stretched icons, shadows that disagree with the light, and bright props that pull the eye away from the screen. If a viewer cannot identify the UI at that size, enlarge the screen or reduce the angle before raising contrast. Export a clean PNG for detailed text or a reviewed compressed image for web delivery. Keep the untouched capture next to the editable scene so you can reframe without repeatedly encoding the source.
