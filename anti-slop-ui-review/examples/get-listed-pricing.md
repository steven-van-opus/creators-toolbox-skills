# Get listed pricing draft

## Input

Creators Toolbox draft at `/get-listed`, reviewed as supplied fixture HTML at 1440px and 390px. The maker must understand the listing options and submit a tool. Fictional draft terms supplied for this example: Free listing, $0; Featured listing, $49 one time, subject to editorial review. These are sample prices, not Creators Toolbox's live offer.

Draft: purple glowing CTA, emoji section headings, three equal cards including an unexplained "Enterprise" option, centered multi-line comparisons, all buttons say "Unlock growth", a fake "12,000 makers" claim, five radius values, a pulsing CTA, and a form with no failed-payment feedback. Phone layout and keyboard focus work in the fixture. The fixture contains no evidence for the audience claim.

## Expected output

Job: help a maker choose a listing option without implying a purchase guarantees editorial approval.

| Check | Score | Evidence |
| --- | --- | --- |
| Color and effect purpose | 0 | Glow and gradient lack a stated brand purpose. |
| Heading signals | 0 | Emoji add no meaning to listing choices. |
| Content structure | 0 | Third card invents an undefined tier. |
| Alignment and hierarchy | 1 | Price is visible, comparison text is hard to scan. |
| Microcopy | 0 | Unlock growth does not name the action. |
| States and recovery | 0 | No failure or retry state. |
| Truth and provenance | 0 | Audience number is unsupported. |
| Radius and spacing | 1 | Repeated controls use different radii. |
| Motion purpose | 0 | CTA pulses before any user action. |
| Access and small screens | 2 | Fixture checks show readable wrapping and keyboard focus. |

Score: 4/20, coverage 10/10. This is a fictional fixture assessment, not a live audit.

Three prioritized fixes:

1. Remove "12,000 makers" and the invented tier from `PricingOptions`. Use the two supplied sample options and state "Featured placement is subject to editorial review." Acceptance: every offer and claim traces to the supplied terms; no approval guarantee appears.
2. Replace Free CTA with "Submit a free listing" and Featured CTA with "Request featured placement". In `ListingCheckout`, add pending text "Preparing checkout", failure "Checkout could not open. Your tool has not been charged.", and Retry, using the actual payment outcome before showing any charge claim. Acceptance: rejected and successful checkout paths produce accurate feedback with keyboard access.
3. Replace equal cards with a two-row comparison on wide screens and stacked labeled rows on phones. Reuse the existing button, radius, and spacing tokens; remove pulse and emoji. Acceptance: prices, billing period, and review condition stay visible at 390px and 200 percent zoom; reduced motion has no loop.

Choose Uizze Anti UI Slop and Vercel Web Design Guidelines. The first aligns the draft with existing UI rules; the second checks the actual controls and semantics. Add Make Interfaces Feel Better only after the offer and checkout behavior are correct. Target 18/20 after repairs, subject to a new observed review. No skills were installed by this example.
