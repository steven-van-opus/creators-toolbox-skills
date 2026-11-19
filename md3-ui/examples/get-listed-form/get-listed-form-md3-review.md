# Get Listed form: MD3 review

A sample review for a "submit a tool" form on a creator directory, written for the md3-ui skill. This is a worked example, not a live audit of production.

## 1. The job

A maker adds their tool to the directory. They should finish a complete submission without guessing which fields block a review.

## 2. Hierarchy

First: the tool name, the live URL, and a one-sentence description. Second: category, pricing, and a logo. Later: optional screenshots, a launch date, and a note for the reviewer. The primary action is "Submit for review", always visible at the bottom of the form on a phone and in the footer of the wide layout.

## 3. Layout (compact and wide)

Compact: one column, labels above fields, the submit button pinned in a bottom bar. Wide: the form in a 640px column, with a short "what happens next" panel to the right (review time, what you need, a link to guidelines).

## 4. Components

- Text fields for name, URL, and description (outlined, with a visible label).
- A dropdown or filter chip group for category, because the list is known.
- Radio buttons for pricing (Free, Free plan, Paid), since the choice is small and exclusive.
- A file picker for the logo, plus a preview tile.
- A filled button for "Submit for review", and a text button for "Save draft".

## 5. States

- Empty: helper text under the URL field, "Use the public homepage, not a login URL."
- Loading: the submit button shows a spinner and is disabled. Draft saves do not clear the form.
- Error: if the URL is unreachable or the name is already listed, show the error under that field, not only at the top. Keep the values they typed.
- Success: a short confirmation, "We have your submission. We will email you when it is reviewed." Do not reset the page into a blank form without that message.

## 6. Accessibility

Every field has a label, not only a placeholder. Error text is tied to the field. The submit button is at least 48dp tall. Focus order follows the visual order. The error color is paired with the word "Error" so color is not the only signal.

## 7. Open questions

- What is the actual review time to print in the side panel? Do not invent it.
- Should a logged-out visitor be asked to sign in before the form, or after they start a draft?
