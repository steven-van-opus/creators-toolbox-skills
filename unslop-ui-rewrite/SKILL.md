---
name: unslop-ui-rewrite
description: Rewrite a generated page or component with a deliberate visual direction, consistent type and spacing, specific product copy, one primary action, and real interaction states. Use when edits and a before/after diff are wanted. For a scored audit, use anti-slop-ui-review.
---

# Unslop UI Rewrite

Apply a designer-style pass to the supplied page or component. Change the UI, then show the patch and a short change log. For scoring first, use the companion [anti-slop-ui-review](../anti-slop-ui-review/SKILL.md). A review is optional, not a dependency or an installation step.

## Establish the target

Read the target component, its styles, nearby components, and existing state handlers. Record the visitor's task, the main action, confirmed product facts, and the files to edit. Keep existing routes, analytics, data contracts, translations, and useful accessibility behavior. Do not change unrelated screens.

If only an image is supplied, produce a proposed replacement component and label it as a draft. Do not claim to have changed or tested the source. Use supplied prices, benefits, frequency, and policies; mark missing facts rather than inventing them.

## Rewrite in this order

1. **Choose one reference product.** Prefer a supplied reference or inspect one relevant screen. Write the product name, the source or screenshot, and exactly three traits to borrow. Translate each trait into a decision for this UI, such as left-aligned offer details or a form that stays in one reading column. Borrow relationships, not branding, copy, assets, or a whole layout. If inspection is unavailable, label the direction provisional. Do not stall the rewrite or claim a current visual inspection.
2. **Set the type and spacing scales.** Map heading, body, label, and control roles to existing tokens first. If none exist, declare a small local scale with font sizes, line heights, weights, spacing steps, and where each applies. Use it in the edited styles. Do not replace the site's font or token system for one component.
3. **Remove decoration without a job.** For each effect, badge, icon, or wrapper, ask what it communicates or helps someone do. Remove it when there is no answer. Keep meaningful status, brand details, focus indicators, and separation between distinct choices. Clean up unused styles and imports.
4. **Rewrite headings and buttons.** Name the product object and the action's actual outcome. Replace vague promises with confirmed terms. Keep visible field labels and relevant conditions near the action. Write plain product language, without hype, first-person singular, or em or en dash characters.
5. **Make one action primary per screen.** Consolidate competing purchase or signup buttons into one next step where appropriate. Offer selection can use radios; supporting destinations can stay as quiet links. Count primary actions across the host screen, not just inside the edited component. An error can replace the primary action with recovery rather than add another competing button.
6. **Implement the states.** Cover empty, loading, and error using actual data and request state. An empty offer list needs an explanation, not a purchase button. An untouched signup form needs a visible label and clear input guidance. Block duplicate submissions while pending, retain input on failure, provide a working retry path, and show success only after a confirmed response. Use the existing service contract. If it is unavailable, expose an explicit callback or state contract and report the integration gap. Do not add a timer or an always-success mock and call it working behavior. Keep keyboard focus visible and announce pending, error, and success messages appropriately.
7. **Check phone width.** Inspect at 360px and the project's desktop width with realistic long text. Check wrapping, horizontal overflow, price conditions, labels, touch controls, focus order, and all applicable states. Use the project's existing checks for changed behavior. Record what was actually rendered or exercised. If no runner is available, inspect the source and leave rendering and interaction checks explicitly unverified.

## Deliver

- Edited files, or a clearly labeled replacement draft when source access is missing.
- The reference and three traits, plus the type and spacing decisions.
- A before/after unified diff for the target files. A focused excerpt is fine if labeled and accompanied by the complete edited files. Include behavior changes, not only copy edits.
- A short change log explaining the three to five changes that matter most to the visitor.
- Checks performed and remaining integration or content gaps. Separate observed results from proposed acceptance checks. Do not substitute a scorecard for the rewrite.

Worked examples: [Get listed pricing](./examples/get-listed-pricing.md) and [newsletter signup card](./examples/creator-newsletter.md). Read the relevant example when matching that kind of component.

## Credit

Inspired by [Unslop UI](https://github.com/felipebasurto/unslop-ui) by Felipe Basurto ([@fildotai](https://x.com/fildotai)). These instructions, workflow, and examples are original Creators Toolbox work. The linked project is MIT licensed; no source prompts, code, or prose are included here.
