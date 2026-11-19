---
name: click-to-edit-site
description: Edit a local website from a selected element, CSS selector, or data attribute. Use for a focused label, spacing, color, or component change with a scoped source diff and screenshot verification.
---

# Click to Edit Site

Turn the user's selection into one source edit. Keep the change tied to the selected element and the user's requested outcome.

## Selection

Collect the local URL, viewport, selector, and requested change. Accept a CSS selector or a stable data attribute. If the user wants to click, offer [examples/picker.js](./examples/picker.js) in their local browser console. It intercepts one click, logs a selector, and exits; Escape cancels. It sends nothing over the network. Run it only on the local development page. Do not persist it in shipped code.

Prefer a unique `data-ct-edit` value or authored ID. The picker uses a structural selector only as a last resort and labels it as temporary. Confirm `document.querySelectorAll(selector).length === 1`. Scope repeated cards by a stable item key. SVG children can be selected; use their nearest actionable ancestor if the requested change concerns a button. An iframe or shadow root requires selecting within that document or root explicitly; do not pretend a document selector crosses it.

## Find the source

1. Capture the selected region and its surrounding layout before editing.
2. Search filenames and the exact data attribute or text with `rg`. Read only the owning component and the style rules it uses, including the specific token definitions needed to resolve those rules.
3. Check whether the component is shared. Read the relevant caller or data entry when a label comes from a prop, translation, or content file. Change the local input rather than every instance. Expand scope only when this dependency requires it, and explain why.
4. Record the selector, component path, current value, desired value, and any shared consumers affected. Never infer a source file solely from the DOM tag.

## Edit and verify

Show the proposed unified diff before applying it. When the request already authorizes the edit, continue without another permission round. Keep unrelated formatting and layout out of the diff. Preserve event handlers, accessible names, focus states, analytics hooks, and links. For label changes, check any separate `aria-label` and translation key.

Apply the diff, run the existing relevant check if needed, then inspect an after screenshot at the same URL, viewport, scroll position, and state. Include enough surrounding content to catch wrapping or spacing changes. Check a narrow width when geometry changes. Use the control once to verify its behavior and keyboard focus. Remove the picker if still active with `window.ctStopPicker()`.

If screenshot tools are unavailable, deliver the source diff and exact reproduction steps, label visual verification as pending, and never invent a screenshot result.

## Why the scope helps

Reading one component and its dependencies keeps unrelated routes, large stylesheets, and repeated page descriptions out of the prompt. A selector also replaces a long explanation of where the change belongs. That can reduce input tokens and accidental edits. Savings depend on the codebase and tool context; do not promise a fixed multiplier. Log actual files or line spans read if the user wants a comparison.

## When you are done

Return the selection, changed paths, concise diff, screenshot locations or pending checks, and any shared impact. Worked examples: [product hero](./examples/product-hero.md) and [Scout card](./examples/scout-card.md).
