---
name: anti-slop-ui-review
description: Audit a UI draft for generic AI visual choices, vague copy, invented evidence, inconsistent tokens, and missing interaction states. Use for a scored review with concrete fixes and a recommendation of two or three complementary design skills.
---

# Anti Slop UI Review

Review what the screen helps someone do. A purple gradient, centered heading, or card is not evidence of poor work by itself. Identify the mismatch with the user's task, existing design system, or actual content. Preserve deliberate brand choices and explain exceptions.

## Evidence first

Record the URL or draft, main user task, audience, viewport, real content source, and whether you have source access or only screenshots. Read the relevant components and tokens. Review desktop and phone layouts and try keyboard navigation, invalid input, pending, empty, failure, retry, and success states when applicable. Do not mark a state as tested from a screenshot.

## Score

Give each row 0 (clear problem), 1 (partly works), or 2 (works for this task). Every number needs one observable reason. Use `unknown` when evidence is unavailable and `N/A` with a reason when the check cannot apply. Higher scores mean fewer issues. Report points earned / maximum for assessed rows, plus coverage as assessed / applicable rows. Never rank a partial screenshot review above a fully tested screen by raw percentage alone.

| Check | Evidence to seek | Concrete repair when it fails |
| --- | --- | --- |
| Color and effect purpose | Default purple gradient, glows, or glass with no product reason | Reuse an existing surface and action color; reserve effects for a named purpose. |
| Heading signals | Emoji headings distract or vary between platforms | Use text hierarchy; use a consistent icon only if it conveys meaning. |
| Content structure | Uniform card grid treats unlike content as equal | Group by the visitor's decision; use a comparison table, list, or featured item where it helps. |
| Alignment and hierarchy | Centered paragraphs or everything competing for attention | Align reading text to its start edge; give one next action priority. |
| Microcopy | Vague labels or benefits hide what will happen | Name the action and its consequence using actual product terms. |
| States and recovery | Missing focus, pending, error, empty, or success behavior | Define each applicable state and test a recovery path. |
| Truth and provenance | Fake metrics, logos, quotes, prices, or testimonial names | Remove unverified claims; use labeled fixture data in drafts and real sources before publication. |
| Radius and spacing | Arbitrary values break related component relationships | Reuse the existing spacing and radius scale; record justified exceptions. |
| Motion purpose | Loops distract, transitions hide latency, reduced motion ignored | Tie motion to a state change, add pause where needed, and provide reduced motion. |
| Access and small screens | Low contrast, lost focus, clipped copy, tiny controls | Check contrast, keyboard flow, zoom, touch areas, and phone wrapping with real content. |

Do not claim the checklist detects whether a human or AI made the page. It evaluates choices and behavior, not authorship or accessibility certification.

## Output

Write `<screen>-ui-review.md` with the task, evidence limits, ten-row scorecard, coverage, and three prioritized fixes. Each fix needs a source location or selected region, a replacement value or copy sample, why it helps the task, and an acceptance check. Treat fabricated claims and blocked actions before decoration even if their score contribution is equal. Give a target score after fixes as a target only; score again from observed results.

A review request authorizes a report. If changes are also requested, apply focused fixes and compare screenshots at the same dimensions. Preserve valid links, handlers, semantics, and truthful content.

## Choose two or three skills

Read [references/skill-options.md](./references/skill-options.md) when making a recommendation. It credits every entry in the inspiration roundup and has a case-based decision table. Select one primary design direction and one implementation or review complement; add a third only for a distinct need. Explain what each will do for this screen and where their opinions might conflict. Recommendations are not permission to install anything. Use each project's current installation instructions if installation is requested.

## When you are done

Return the report, the three largest fixes, and the selected two or three with reasons. State what remains unverified. Worked examples: [Get listed pricing](./examples/get-listed-pricing.md), [newsletter landing page](./examples/creator-newsletter.md).
