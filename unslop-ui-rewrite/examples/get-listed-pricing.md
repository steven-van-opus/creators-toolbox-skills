# Get listed pricing rewrite

## Input

Rewrite a generated Creators Toolbox `/get-listed` section so a maker can choose a listing and continue to submission. The supplied fictional terms are Free listing at $0 and Featured listing at $49 one time. Both require editorial review. Payment timing and approval are handled by the existing submission flow. These are sample terms, not the live offer.

The host screen has no other primary action. React and Tailwind already exist in this fixture. The parent supplies `plans`, `loadState`, `onReload`, and `onContinue`. Plan objects have unique `id`, `name`, and `priceLabel` fields. `plans` contains the two confirmed offers. `loadState` is `loading`, `ready`, or `error`; the parent must handle failures from `onReload` and set it accordingly. `onContinue(id)` resolves when the submission flow opens and rejects if it cannot open. It does not charge a card.

## Before JSX

```jsx
export function ListingPricing({ plans, onContinue }) {
  return (
    <section className="rounded-[30px] bg-gradient-to-br from-violet-100 to-pink-100 p-[29px] text-center shadow-xl">
      <h2 className="text-5xl font-black">Unlock your tool's potential</h2>
      <p className="mt-[13px]">The ultimate home for your next big thing.</p>
      <div className="mt-[27px] flex gap-[19px]">
        {plans.map((plan) => (
          <div key={plan.id} className="w-80 rounded-full bg-white p-[23px]">
            <h3>{plan.name}</h3>
            <p>{plan.priceLabel}</p>
            <button onClick={() => onContinue(plan.id)}
              className="animate-pulse rounded-full bg-violet-700 p-4 text-white">
              Unlock growth
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## Rewrite decisions, in order

1. Reference: GitHub settings, using supplied visual notes as a provisional direction, without a live inspection. Borrow three traits: a left-aligned reading column for the offer terms; outlined rows for mutually exclusive choices; a single action after the choices. No GitHub branding or source is used.
2. Type: heading 24/32 at weight 600; body and controls 16/24 at 400 and 600; conditions 14/20 at 400. Spacing: 8, 16, 24, 32px. Use 8 between related lines, 16 between choices, 24 inside the section, and 32 before the action. Tailwind's existing utility scale supplies these values. Keep the host font.
3. Remove the gradient, large shadow, pulse, pill-shaped offer containers, and arbitrary spacing. A border still separates selectable rows; focus rings still identify keyboard position.
4. Use "Get listed on Creators Toolbox", show price terms as supplied, and place the editorial review condition above selection. The action says "Continue with Free listing" or the selected offer's name. It does not promise approval or immediate publication.
5. Replace per-offer buttons with a radio group and one Continue button. In a load failure the retry button replaces selection and Continue.
6. Implement loading, empty offers, load error, opening, and opening failure. Keep the selected offer on failure and reuse Continue for retry. Handle an offer disappearing during refresh without sending its old ID.
7. Phone acceptance check: at 360px the section has 24px padding, one column, wrapping labels, and no fixed card widths. Exercise all branches with long price labels and both options. Rendered overflow, keyboard behavior, and contrast remain unverified in this text-only example.

## After JSX

The following is the complete replacement component. It uses the parent contract above, with no new service or dependency.

```jsx
import { useId, useState } from "react";

export function ListingPricing({ plans, loadState, onReload, onContinue }) {
  const groupId = useId();
  const [selectedId, setSelectedId] = useState(null);
  const [opening, setOpening] = useState(false);
  const [error, setError] = useState("");
  const selected = plans.find((plan) => plan.id === selectedId);
  const button = "min-h-12 w-full rounded-lg bg-neutral-900 px-4 py-2 text-base font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

  async function continueToSubmission() {
    if (!selected || opening) return;
    setError("");
    setOpening(true);
    try {
      await onContinue(selected.id);
    } catch {
      setError("The submission form could not open. Try again with the same listing option.");
    } finally {
      setOpening(false);
    }
  }

  return (
    <section className="mx-auto max-w-xl rounded-lg border border-neutral-300 bg-white p-6 text-left text-neutral-900">
      <h2 className="text-2xl font-semibold leading-8">Get listed on Creators Toolbox</h2>
      <p className="mt-2 text-base leading-6">Choose how to submit your creator tool.</p>
      <p className="mt-2 text-sm leading-5">All listings require editorial review. Featured placement costs $49 one time.</p>
      {loadState === "loading" ? (
        <p role="status" className="mt-6 text-base leading-6">Loading listing options...</p>
      ) : loadState === "error" ? (
        <div className="mt-6 space-y-4">
          <p role="alert" className="text-base leading-6">Listing options could not load.</p>
          <button type="button" className={button} onClick={onReload}>Retry loading options</button>
        </div>
      ) : plans.length === 0 ? (
        <p role="status" className="mt-6 text-base leading-6">No listing options are available. Check back later.</p>
      ) : (
        <>
          <fieldset disabled={opening} className="mt-6 space-y-4">
            <legend className="mb-2 text-base font-semibold leading-6">Listing option</legend>
            {plans.map((plan) => (
              <label key={plan.id} className="flex min-h-12 items-start gap-4 rounded-lg border border-neutral-300 p-4">
                <input type="radio" name={groupId} value={plan.id}
                  checked={selectedId === plan.id}
                  onChange={() => { setSelectedId(plan.id); setError(""); }}
                  className="mt-2 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" />
                <span className="min-w-0 break-words text-base leading-6">
                  <span className="block font-semibold">{plan.name}</span>
                  <span className="block">{plan.priceLabel}</span>
                </span>
              </label>
            ))}
          </fieldset>
          {error && <p role="alert" className="mt-4 text-base leading-6">{error}</p>}
          <button type="button" disabled={!selected || opening}
            onClick={continueToSubmission} className={`mt-8 ${button}`}>
            {opening ? "Opening submission form..." : selected ? `Continue with ${selected.name}` : "Choose a listing option"}
          </button>
          <p role="status" className="mt-2 text-sm leading-5">
            {opening ? "Opening submission form. Please wait." : ""}
          </p>
        </>
      )}
    </section>
  );
}
```

## Before/after diff

The [complete unified diff](./get-listed-pricing.diff) compares the exact JSX blocks above.

Focused excerpt; the complete replacement is above. The snippets below summarize separate changed regions, not a patch to apply on its own.

```diff
- <h2 className="text-5xl font-black">Unlock your tool's potential</h2>
+ <h2 className="text-2xl font-semibold leading-8">Get listed on Creators Toolbox</h2>
- <button onClick={() => onContinue(plan.id)}
-   className="animate-pulse rounded-full bg-violet-700 p-4 text-white">
-   Unlock growth
- </button>
+ <input type="radio" name={groupId} value={plan.id}
+   checked={selectedId === plan.id}
+   onChange={() => { setSelectedId(plan.id); setError(""); }}
+   className="mt-2 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" />
+ <button type="button" disabled={!selected || opening}
+   onClick={continueToSubmission} className={`mt-8 ${button}`}>
+   {opening ? "Opening submission form..." : selected ? `Continue with ${selected.name}` : "Choose a listing option"}
+ </button>
```

## Change log

- Offer terms and review conditions now precede the decision.
- One radio selection and one next step replace competing offer buttons.
- Consistent type, spacing, and wrapping replace fixed-width decorative cards.
- Loading, no offers, and failures have distinct branches; continuation failures retain selection and permit retry.

## Verification and gaps

Source walkthrough only. Proposed checks: `loading` shows no purchase action; `ready` with `[]` shows the empty state; `error` offers reload; selecting Featured then rejecting `onContinue` retains Featured and allows retry. A removed plan disables Continue. Confirm the real parent updates `loadState` on reload and opens the existing submission flow. No browser run or service integration is claimed. Confirm sample prices before using this on a live page.
