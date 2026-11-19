# Skill options and source notes

Checked 2026-11-19 against project pages, repository READMEs, and available license files. The X roundup was unavailable; the ten names and its advice to choose two or three were supplied in the task. These summaries are ours. No source skill instructions are bundled here.

## The ten options

| # | Original | Honest summary and limit | License found |
| --- | --- | --- | --- |
| 1 | [Anti UI Slop, Uizze](https://uizze.com/ai-ui-slop) | Starts with existing UI rules and flags generic defaults and missing behavior; the paid reference service is separate from the free skill. | No skill reuse license verified on the public pages; link only. |
| 2 | [Impeccable](https://impeccable.style), [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Offers design vocabulary and directed review or polish commands; requires product context to choose the right direction. | [Apache-2.0](https://github.com/pbakaus/impeccable/blob/main/LICENSE). |
| 3 | [Taste Skill, Leonxlnx](https://github.com/Leonxlnx/taste-skill) | Guides frontend art direction and reference-led output; its taste decisions still need checking against the product. | [MIT](https://github.com/Leonxlnx/taste-skill/blob/main/LICENSE). |
| 4 | [Emil Design Engineering, Emil Kowalski](https://github.com/emilkowalski/skills) | Focuses on interface craft, feedback, and motion decisions; it does not supply your product's information architecture. | [MIT](https://github.com/emilkowalski/skills/blob/main/LICENSE). |
| 5 | [Vercel Web Design Guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) | Reviews UI code against live Web Interface Guidelines; it is a review tool rather than an art direction system. | No license file found in the current agent-skills tree; link only. |
| 6 | [Frontend Design, Anthropic](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Encourages a specific visual direction grounded in the subject; distinctive choices still need functional verification. | [Apache-2.0 for this skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/LICENSE.txt); the repository has mixed terms. |
| 7 | [Hallmark, Nutlope](https://github.com/Nutlope/hallmark) | Provides page directions, redesign modes, and checks for common defaults; its themed workflow is more involved than a short review. | [MIT](https://github.com/Nutlope/hallmark/blob/main/LICENSE). |
| 8 | [Make Interfaces Feel Better, Jakub Krehel](https://github.com/jakubkrehel/make-interfaces-feel-better) | Reviews details such as optical alignment, hit areas, corners, and motion; use after the main flow works. | [MIT](https://github.com/jakubkrehel/make-interfaces-feel-better/blob/main/LICENSE). |
| 9 | [UI UX Pro Max, nextlevelbuilder](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Offers searchable style and UI guidance across many scenarios; choose selectively to avoid treating a style catalog as user research. | [MIT](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/LICENSE). |
| 10 | [Stageshow, Benji Taylor](https://github.com/benjitaylor/skills/tree/main/stageshow) | Builds framed faux product UI and animated demos for marketing; it is not the production app or proof of real customer activity. | [MIT for Stageshow](https://github.com/benjitaylor/skills/blob/main/stageshow/LICENSE). |

All eight GitHub repositories above were verified to exist. The truncated nextlevelbuild name resolves to `nextlevelbuilder/ui-ux-pro-max-skill`; Stageshow lives inside `benjitaylor/skills`. Uizze and Impeccable's public sites were also checked. Free availability does not establish a reuse license.

## Which two or three for this case?

These are role-based recommendations, not head-to-head performance results. Recheck the linked installation instructions before installing. Do not install the whole roundup or let multiple skills replace the same visual system.

| Case | Choose | Division of work |
| --- | --- | --- |
| Existing directory or pricing flow | Uizze Anti UI Slop + Vercel Web Design Guidelines | Review existing design consistency, then code behavior and access. Add Jakub Krehel only when fine polish remains. |
| Newsletter landing page needs a direction | Anthropic Frontend Design + Impeccable | Establish a subject-specific direction, then critique hierarchy and copy. Add Vercel for a code review before release. |
| Existing app interaction feels rough | Emil Design Engineering + Make Interfaces Feel Better | Work on feedback and timing, then small control and typography details; agree one motion specification. |
| New product site with several plausible looks | Taste Skill + Vercel Web Design Guidelines | Choose one art direction, then audit implementation. Add UI UX Pro Max only for a specific unanswered component or style question. |
| Themed marketing redesign with a product demo | Hallmark + Stageshow + Vercel Web Design Guidelines | Let Hallmark own page structure, Stageshow own a clearly illustrative demo, and Vercel review the actual page controls. |
| Many screen types need a starting vocabulary | UI UX Pro Max + Impeccable | Use the catalog for relevant options and critique the selected system. Confirm it with real content before extending it. |

When two tools disagree, preserve the product's established tokens, truthful content, and accessible behavior. Record the selected direction in the project rather than stacking contradictory instructions.
