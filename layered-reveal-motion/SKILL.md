---
name: layered-reveal-motion
description: Explain how an assembly fits together with an exploded product view or a short layer-by-layer reveal. Use for a focused teardown diagram, a browser toggle between assembled and exploded states, or an exported reveal cut.
---

# Layered Reveal Motion

Start with the question someone should be able to answer after seeing the reveal. For real products, derive the order, seams, and extraction paths from supplied CAD, service diagrams, or approved photographs. Label a speculative drawing as a concept. Use the user's existing visual assets and rendering system where they suit the output.

## Establish two readable stills

Build the assembled view using a shared origin and camera. Keep each moving part in its own group. Assign a rest position, a travel direction that follows the connection, and a final offset based on the room the part and its label actually need. Keep attachment points visible and neighboring pieces in order.

Make the exploded still at the smallest intended size. Check alignment, contrast, and placement of callouts. Use a text list for names when leaders crowd the picture. For an assembly whose clearest view needs genuine perspective changes, use 3D geometry and inspect the path between both states from the intended angles.

## Make the state easy to change

For a flat browser diagram, transition each group's transform from a single reveal state. Use a native button with a stable label and `aria-pressed`. Let repeat input update the target immediately. Under reduced motion, change positions without animated travel. Keep labels accessible as ordinary text and preserve keyboard focus.

For video, set a fixed timeline. Hold the assembled view long enough to register the object and the separated view long enough to read the relationship. Review the actual in-between frames for pieces crossing, clipping, or covering labels before exporting. Keep the assembled and exploded artwork available separately when the user needs stills.

## Verify the output

Inspect both states and the transition on the narrowest screen or crop. Test keyboard operation, rapid reversal, and reduced motion for interactive work. Report what was verified about the assembly separately from what was checked in the animation. Use the dependency-free [trail lantern diagram](examples/trail-lantern.html) to see how the same four parts move together along one assembly axis.
