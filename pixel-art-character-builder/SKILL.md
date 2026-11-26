---
name: pixel-art-character-builder
description: Build a rotatable pixel-art character from a shared voxel model, then make action frames or an editable 3D handoff. Use for pixel-stacked turntables, sprite sheets, and original voxel mascots.
---

# Pixel Art Character Builder

Ask which output the project needs: a turntable, an engine-ready sprite sheet, or a mesh. Use the project's expected format, cell size, scale and axis convention. A single approved character design can supply all three.

## Fix the silhouette

Identify the features that should survive at the smallest display size. Write their positions relative to the same origin and mark the front, ground plane, and moving pivots. Use source views or quick sketches to check proportions. Decide where the silhouette can legitimately change with the camera.

Start with an editable color-indexed 3D grid. Author height slices from soles to crown, leaving explicit air for recesses or limb clearance. Keep moving groups in local coordinates around named pivots. Use a separate compositing layer for ground shadows and effects. Inspect the neutral shape at native size before making variants.

## Rotate the camera and then move the parts

Draw into a small fixed pixel buffer. Resolve visible surface depth before placing outlines, then enlarge with nearest-neighbor scaling. Keep the camera's framing and lighting consistent across the turn. Capture front, side, back and intermediate views from the same model. Fix view-dependent artifacts while there is still just one pose.

For each action, mark contact, anticipation, extreme and recovery where they apply. Swap or transform only affected geometry around its pivot. Give leaps headroom and keep planted limbs on a common baseline. Export a fixed-size diagnostic sheet and verify the seam for looping clips. Record per-frame durations and any origin offsets if the consuming engine needs them.

For 3D delivery, keep collision volumes and surface geometry separate. Preserve silhouette and joints when adding bevels, materials or rigging. Reopen a test export in the target viewer and verify scale, orientation, clips and clearance during motion.

## Deliver and check

Before depending on the output, check the crest and widest pose from several angles for cropping, compare the 0° and 360° seam, and inspect transparency at native scale. Report the format, pivot, pose count and limitations observed. For an original working study, open [Parcel the mailbox](examples/parcel.html). It uses native Canvas pixels and a shared voxel volume, with a fixed diagnostic sheet beside its controls.
