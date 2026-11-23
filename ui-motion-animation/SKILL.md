---
name: ui-motion-animation
description: Add or refine motion for a concrete interface action, including interrupted input and reduced-motion behavior. Use for live UI transitions, state feedback, and a small motion plan; route exported video and 3D work to the project's rendering tools.
---

# UI Motion Animation

Make one state change easier to follow. Preserve the user's existing framework, design system and animation dependencies. This is an original Creators Toolbox workflow, not a bundle of other authors' skills.

## Define the behavior before choosing an effect

Inspect the component, its callers and the current interaction. State the trigger, starting state, destination and interruption rule. Include the text or non-motion signal that communicates the result. A bookmark, for example, should update its saved state immediately while any decorative motion follows it.

Choose the smallest implementation that explains that change. A color/opacity transition may need only CSS. Layout movement or an interruptible spring may justify the animation library already installed. An effect reference is a visual direction, not evidence of its API or license. Read the current documentation or installed source before copying a component contract.

For an existing React Motion project, consult [layout animation](https://motion.dev/docs/react-layout-animations) and [accessibility](https://motion.dev/docs/react-accessibility). Do not install another library just to reproduce a short transition. [Emil Kowalski's skills](https://aiforui.dev/skills) can help with a dedicated motion review; [DesignBookmark Motion](https://designbookmark.com/motion) offers live component references. Review any third-party code and its license before bringing it into the project.

## Keep behavior independent of timing

Commit application state from the actual user action or successful operation. Do not use an animation completion callback to decide whether a save, payment, upload or navigation succeeded. Preserve error, pending and cancellation behavior.

For rapid input, let the current visual state move toward the latest valid target, or explicitly cancel and replace the decorative animation. Avoid queued transitions and stale callbacks that restore an older state. Do not disable a working control merely to finish its animation. Keep focus on the real control; changing text or moving an icon should not remount it.

Respect `prefers-reduced-motion` in both CSS and JavaScript-driven effects. Remove unnecessary travel, scaling and loops while retaining state labels and useful feedback. Handle preference changes during a running effect. Animation must not be the sole status signal.

Prefer transforms and opacity for simple movement. Check layout and paint behavior when animating dimensions or filters. Do not add `will-change` across the whole interface by default. Define how any observer, listener or running animation is cleaned up when a component unmounts.

## Match the output to its clock

Live interfaces react to input and can be interrupted. An exported demo has a fixed timeline and should use the renderer's time source. [HyperFrames](https://creatorstoolbox.com/products/hyperframes) renders HTML projects to video; [Remotion](https://creatorstoolbox.com/products/remotion) is an option for React video projects; [Motion Canvas](https://motioncanvas.io) uses TypeScript for animated explainers. Do not transplant a timer-driven UI demo into a video renderer and assume frames will be deterministic. Label simulated interfaces as illustrative concepts.

For a 3D object or rendered scene, use the existing 3D workflow. [Blender Agent Skills](https://github.com/EL4CTEO/blender-skills) is a separate third-party collection that requires Blender. This skill does not install or run any of those tools.

## Verify the interaction

Test the action by pointer and keyboard, repeat it before the first transition ends, and confirm that the final state matches the last input. Check the reduced-motion path, including switching the preference mid-animation. Inspect at the intended viewport and with longer copy. For loading/error work, verify the real operation and failure path as well as the effect.

Report the changed behavior and checks actually observed. Include a short state table when the interaction is complex. Distinguish a live browser test from a syntax check or an exported-video render. See the [original bookmark brief](examples/brief.md) and [dependency-free example](examples/bookmark.html).
