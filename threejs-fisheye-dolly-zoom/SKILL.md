---
name: threejs-fisheye-dolly-zoom
description: Build a Three.js dolly zoom that keeps a subject framed as scroll opens the field of view. Use for an interactive lens reveal, a portrait with shifting perspective, or a restrained fisheye effect.
---

# Three.js Fisheye Dolly Zoom

Pick one anchor and one visible measurement on the subject, such as a ring diameter or the height between two landmarks. Set the starting lens and composition before connecting any input. Start with a perspective camera and some long lines near the edges so the change is visible.

## Drive the camera from a single input

Map a native scroll range to a clamped progress value. Provide a keyboard-operable control if the interaction needs precise stops. Let ordinary page scroll and browser zoom keep their usual behavior. Rebuild the camera from a saved reference pose on every update.

Convert the camera's vertical field of view to radians before calculating its half-angle tangent. Keep the product of that tangent and the axial distance to the subject roughly constant as the field of view changes. A wider lens needs a shorter distance for the same projected size. Adjust the projection after changing the field of view or aspect ratio. Check camera clearance at the closest point. An object with considerable depth can still change in apparent size at the edges.

## Bend the frame only if the scene needs it

Build and test the perspective-only effect first. When edge curvature matters, render the scene to a texture and apply a radial sampling pass. Correct the radius for aspect ratio. Leave enough source image around the final crop and compensate for the pass's magnification near the anchor. Keep HTML controls out of the distortion pass. A lens change without a distortion pass widens the view and leaves straight lines straight.

## Verify framing and recovery

Compare the subject at the narrow, middle and wide stops at both desktop and phone aspect ratios. Measure across the same visible landmarks on each frame. Reverse the input and check that the start frame returns without drift. Test keyboard operation and offer a stable still or deliberate manual adjustment when reduced motion is requested.

Open [Observatory Lens](examples/observatory-lens.html) for a framed detector, a native scroll track, and a toggle-free width control that also works with reduced motion.
