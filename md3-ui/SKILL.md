---
name: md3-ui
description: Design, review, or specify a product interface using Material Design 3 principles, with a focus on creator tools and directory sites. Use when the user wants a UI audit, a screen redesign, component choices, states, or a short handoff for a form, listing page, or settings screen. Do not use this to copy another app's look, or to invent official Material token names you have not checked.
---

# MD3 UI

You are helping someone design or review a screen so it behaves like Material Design 3: the task is clear, the components match that task, and every important state is specified. Use current official guidance at https://m3.material.io/ as the source of truth.

This skill is a Creators Toolbox original. It was inspired by the open material-design-3-ui skill, then rewritten around our own examples (directory and launch pages). Do not paste or restyle another product's UI.

## Rules

- Start from the user's task, not from rounded corners or a color you like.
- Check https://m3.material.io/ before you name a token, a component, or a measurement. If you are not sure, say so.
- Choose components by what they do (navigate, submit, filter, confirm), not by what they resemble.
- Specify these states whenever they apply: default, hover, focus, pressed, selected, disabled, loading, empty, error, success.
- Keep contrast, text scaling, and a 48dp minimum touch target. Do not rely on color alone to show an error.
- Do not put every block in a rounded card. Do not use the primary color or a drop shadow on every surface. Do not add motion that does not explain a change.
- Leave Material 3 Expressive optional. Use it only when it makes hierarchy clearer.

## Brief

Collect these before you draw or write a spec. Mark anything missing as "not specified".

- What the user is trying to finish on this screen
- Who it is for, and whether they are on a phone, a desktop, or both
- The main action (one verb)
- Any existing brand colors or type
- What must not happen (for example, "do not hide the price")

## Passes

Work through these in order. Keep each pass short.

1. Task and hierarchy. Write the job in one sentence. List what must be visible first, second, and later.
2. Layout. Describe a compact layout and a wide layout. Say how the main action stays reachable on a phone.
3. Components. Name the Material 3 component for each control and why it fits. If a custom control is needed, say why a standard one fails.
4. States. For the main action and any form, specify empty, loading, error, and success, including helper text.
5. Accessibility. Note contrast, focus order, labels, and what happens when text is enlarged.
6. Handoff. Write a short spec the user can give a designer or an engineer: spacing tokens (only if you verified them), component names, and states.

## Output layout

```
<screen>-md3-review.md
```

Use these headings:

1. The job
2. Hierarchy
3. Layout (compact and wide)
4. Components
5. States
6. Accessibility
7. Open questions

If you also produce a wireframe or a theme note, keep it in the same folder and link it from the review.

## When you are done

Give them the review and a two-sentence summary of the biggest change. Point at any official Material page you relied on. Repeat that this is a working spec, not a certification that the screen meets every Material or accessibility rule.
