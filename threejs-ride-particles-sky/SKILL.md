---
name: threejs-ride-particles-sky
description: Build windborne particles and a moving cloud sky around a Three.js camera path. Use for drifting pollen, sea spray, dust, rain, or a day-to-night atmosphere during a ride.
---

# Three.js Ride Particles and Sky

Block in the main scene before adding atmosphere. Identify a silhouette the atmosphere should help reveal and a stretch of screen that should remain quiet. Start with a shallow moving field near the route and a separate sky at world distance.

## Keep particle work bounded

Create a fixed population with seeded positions and a compact depth interval. Flow it through the volume from elapsed time or route distance. Give each edge a fade band so a particle is invisible when its depth wraps. Use a buffer of points for tiny grains. Choose instanced billboards when a grain needs a streak shape, texture, or more screen coverage than the device's point-size limit permits. Preserve opaque depth tests and disable depth writes for soft transparent grains. For large overlapping transparent regions, inspect sorting and overdraw from more than one angle.

## Give the sky its own clock

Keep wind and cloud drift independent of the ground loop. Begin with textured cards or sprites when the view mainly looks toward the horizon. Use a depth-aware volumetric pass when orbiting through clouds or light shafts is central to the scene. Change light color, fog and cloud tint together from one weather parameter so changing the sky does not detach it from the ground. Keep horizontal seams away from clear view.

## Check motion and contrast

Pause the camera and scrub the light. Confirm the particle wrap fades at both edges, opaque objects still cover the spray and bright grains stay readable without hiding the subject. Inspect overdraw and pixel ratio on a phone before increasing the count or adding a cloud pass. Provide a still state for reduced motion and keep weather controls usable in it.

Open [Wind over the Breakwater](examples/wind-over-the-breakwater.html) for a fixed pool of shader-driven spray, softly textured clouds, and a daylight control that also changes fog and scene lighting.
