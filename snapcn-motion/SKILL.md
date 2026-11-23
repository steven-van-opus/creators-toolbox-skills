---
name: snapcn-motion
description: Plan and build a short Remotion product clip with Claude or another coding agent, selecting verified snapcn components and checking the rendered timeline. Use for code-based product motion, rather than ordinary interactive UI animations.
---

# snapcn Motion Brief

Make the viewer understand one product action. Begin with the user's existing React and [Remotion](https://creatorstoolbox.com/products/remotion) project and supplied assets. This is an original Creators Toolbox workflow, independent of [snapcn](https://creatorstoolbox.com/products/snapcn)'s official skill.

## Choose the action before the component

Write a sentence with an input, an action and a visible result. For example: "A gardener adds a watering reminder, then sees it in today's list." Use a fictional example when real product footage is unavailable and label it in both the brief and the rendered clip. Never present a simulation as proof of working software.

Make a beat table with start frame, end frame (exclusive), copy, asset and purpose. Budget at least one motion-free reading hold after the important action. Keep the aspect ratio and fps explicit. See [examples/brief.md](./examples/brief.md) for an original 12-second example.

## Verify the library instead of guessing

Read the [current component table](https://snapcn.dev/llms-components.txt) and the exact component's documentation before adding it. Record its install name, real props, default duration and license tier. If the page is unavailable, inspect the installed local source or state that the integration is unverified. A component's name alone does not establish its props.

An existing [Remotion](https://creatorstoolbox.com/products/remotion) project needs a `components.json` and a matching `@/` alias in TypeScript and [Remotion](https://creatorstoolbox.com/products/remotion)'s bundler. Follow the current [installation documentation](https://snapcn.dev/docs/getting-started/installation); preserve the project's existing bundler options. The registry namespace is `@snapcn`, without a hyphen. Installing a component copies source into the project. Add only components needed for the chosen beats and review the changed files.

The upstream agent skill is separate: `npx skills add snapcndev/snapcn --skill snapcn`. This skill does not bundle that skill, any [snapcn](https://creatorstoolbox.com/products/snapcn) source or Pro components. Check the current component license and [Remotion](https://creatorstoolbox.com/products/remotion)'s own license before using either in client work. A free component does not imply every tool or rendering service is free.

## Build from the frame clock

Use `useCurrentFrame()` and `useVideoConfig()` for motion. Derive positions and visibility from the current frame; no timers, CSS keyframe animations, mutable counters or unseeded randomness. Inside a [Remotion](https://creatorstoolbox.com/products/remotion) Sequence, frames are local. Make that time basis explicit when passing frame values into helpers.

The [original sample composition](./examples/SeedlingMotion.tsx) and [timing helper](./examples/timing.ts) demonstrate a fictional reminder moving into a list. They use [Remotion](https://creatorstoolbox.com/products/remotion) primitives rather than copied library code. Keep that distinction when describing the example. Adapt or replace one beat with a verified installed [snapcn](https://creatorstoolbox.com/products/snapcn) component when the project calls for it.

## Inspect the result

Use the project's own typecheck and render commands. Confirm first frame, action start, settled result and last frame in rendered output. Read the text at the size it will appear in the feed. Look for clipped text, missing fonts/assets, unreadable contrast, movement during a reading hold and accidental gaps or overlaps between beats. Inspect an actual exported clip before calling the render verified.

Deliver the beat table, changed source, exported file or exact render command, component/license notes and observed checks. Distinguish syntax checks and timing checks from a completed video render. Keep account connections, paid rendering and public publishing within the user's requested scope.
