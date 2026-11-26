---
name: threejs-endless-parallax-ride
description: Build an endless Three.js road, rail, or walk with recycled foreground scenery and slower distant landmarks. Use when a continuous journey needs depth and a stable scene size.
---

# Three.js Endless Parallax Ride

Pick the reference frame first. A chase scene can keep the camera and vehicle near the origin while roadside objects pass through it. A free camera may need world-origin rebasing instead. Use one travel distance for all features that should line up, such as lane stripes, roadside posts, and wheel rotation.

## Build the loop with markers

Draw a plain ground plane and distinct temporary markers at the near, middle and far distances. Move the camera sideways a small amount and compare the projected offsets. Perspective already gives closer objects more apparent movement. Treat additional layer motion as an art direction control and preserve contact between items that share a surface.

Choose a repeat length and allocate enough tiles to cover the visible corridor plus a buffer at each end. Reposition the existing tiles from their local offset and distance modulo the repeat length. Put the near wrap behind the camera and the far wrap beyond clear visibility. Keep each tile's geometry, attachments and variants keyed to a stable identity or real world station. If reverse travel is supported, use positive modulo for negative offsets and inspect both directions.

## Test travel before dressing the scene

Move between two fixed stations, then advance just across the wrap. Check that no item disappears in clear view and verify that repeated passage does not increase the object count. Use elapsed time for continuous motion and reset accumulated frame time when the page returns from the background. With scroll input, map to a deterministic distance so revisiting a section restores the same arrangement.

Use [Salt Flat Crossing](examples/salt-flat-crossing.html) to inspect a small fixed pool of roadside markers, static deep ridges and a mild lateral camera drift. The reset and pause controls let you stay at one view. For a reproducible still, open the path with `?still&station=59`.
