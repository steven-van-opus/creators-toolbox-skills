# Creator newsletter signup rewrite

## Input

Rewrite a generated signup card on the Creators Toolbox newsletter page. The supplied fictional brief confirms a weekly email with creator tools, Scout news, and practical guides. No publication day or subscriber count is confirmed. The host screen has no other primary action. Keep its existing React, Tailwind, and font setup.

The service adapter is supplied as `subscribe(email)`. Its promise resolves only after subscription is confirmed, returning `{ status: "subscribed" }` or `{ status: "already-subscribed" }`. It rejects on failure. The adapter is outside this component; no mailing service is invented here. The fixture reference notes describe Buttondown's signup form as a reading column with a visible label and a direct submit action.

## Before JSX

```jsx
export function NewsletterCard({ subscribe }) {
  return (
    <div className="w-[520px] rounded-[36px] bg-gradient-to-r from-pink-100 to-violet-100 p-[31px] text-center shadow-2xl">
      <h2 className="text-4xl font-black">Your creative journey starts here</h2>
      <p className="mt-[11px]">Join the ultimate community of visionary creators.</p>
      <input id="newsletter-email" placeholder="Email address" className="mt-[21px] rounded-full p-3" />
      <button className="mt-[17px] rounded-full bg-violet-700 p-3 text-white"
        onClick={() => subscribe(document.getElementById("newsletter-email").value)}>
        Unlock inspiration
      </button>
      <a href="/tools" className="block rounded-full bg-pink-700 p-3 text-white">Explore now</a>
    </div>
  );
}
```

## Rewrite decisions, in order

1. Reference: Buttondown, based on the supplied notes, without a live inspection. The provisional direction borrows exactly three traits: a single reading column to connect copy and input; a visible field label instead of placeholder-only instruction; one submit action immediately after the field. No copied layout, assets, or source.
2. Type: heading 24/32 at weight 600; body, field, and button 16/24 at 400 or 600; label 14/20 at 600. Spacing: 8, 16, 24, 32px, applied to related copy, field groups, card padding, and form separation. Keep the host font and use existing Tailwind utilities.
3. Remove the gradient and large shadow. Replace the fixed width with `w-full max-w-md`. Keep a border around the card to separate it from the surrounding page.
4. Use "Get the weekly creator digest" and "Subscribe to the digest". Name the actual contents. Add no unconfirmed day, subscriber count, or claim about results.
5. Signup is the only primary action. Remove the duplicate Tools destination because the fixture header already links to `/tools`.
6. The empty form invites an email address; native email validation handles invalid or missing input. Pending blocks repeated requests. Failure preserves the email and changes the same button to retry. Confirmed success and already subscribed responses replace the form with a status message. Unknown response shapes follow the failure path.
7. Phone acceptance check: at 360px, use one column, full-width input and button, 24px card padding, and wrapping text. Check long addresses, pending, failure, and success as well as the default state. Browser rendering, contrast, and keyboard checks remain unverified in this text-only example.

## After JSX

Complete replacement component, using the adapter contract above.

```jsx
import { useId, useState } from "react";

export function NewsletterCard({ subscribe }) {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    if (state === "pending") return;
    setState("pending");
    try {
      const result = await subscribe(email.trim());
      if (result.status !== "subscribed" && result.status !== "already-subscribed") {
        throw new Error("Unexpected subscription response");
      }
      setState(result.status);
    } catch {
      setState("error");
    }
  }

  const complete = state === "subscribed" || state === "already-subscribed";

  return (
    <section className="w-full max-w-md rounded-lg border border-neutral-300 bg-white p-6 text-left text-neutral-900">
      <h2 className="text-2xl font-semibold leading-8">Get the weekly creator digest</h2>
      <p className="mt-2 text-base leading-6">Creator tools, Scout news, and practical guides in one weekly email.</p>
      <div role="status" className="mt-4 text-base leading-6">
        {state === "pending" && "Sending your signup..."}
        {state === "subscribed" && "You're subscribed to the weekly creator digest."}
        {state === "already-subscribed" && "This email is already subscribed to the weekly creator digest."}
      </div>
      {!complete && (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor={emailId} className="block text-sm font-semibold leading-5">Email address</label>
            <input id={emailId} name="email" type="email" autoComplete="email" required
              value={email} readOnly={state === "pending"}
              onChange={(event) => { setEmail(event.target.value); setState("idle"); }}
              className="mt-2 min-h-12 w-full min-w-0 rounded-lg border border-neutral-500 px-4 py-2 text-base leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" />
          </div>
          {state === "error" && (
            <p role="alert" className="text-base leading-6">Signup could not be confirmed. Your email is still here. Try again.</p>
          )}
          <button type="submit" disabled={state === "pending"}
            className="min-h-12 w-full rounded-lg bg-neutral-900 px-4 py-2 text-base font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60">
            {state === "pending" ? "Subscribing..." : state === "error" ? "Retry signup" : "Subscribe to the digest"}
          </button>
        </form>
      )}
    </section>
  );
}
```

## Before/after diff

The [complete unified diff](./creator-newsletter.diff) compares the exact JSX blocks above.

Focused excerpt of separate changed regions; the complete replacement above includes the async handler and all state branches.

```diff
- <h2 className="text-4xl font-black">Your creative journey starts here</h2>
- <p className="mt-[11px]">Join the ultimate community of visionary creators.</p>
+ <h2 className="text-2xl font-semibold leading-8">Get the weekly creator digest</h2>
+ <p className="mt-2 text-base leading-6">Creator tools, Scout news, and practical guides in one weekly email.</p>
- onClick={() => subscribe(document.getElementById("newsletter-email").value)}
+ <form onSubmit={handleSubmit} className="mt-8 space-y-4">
- Unlock inspiration
+ {state === "pending" ? "Subscribing..." : state === "error" ? "Retry signup" : "Subscribe to the digest"}
- <a href="/tools" className="block rounded-full bg-pink-700 p-3 text-white">Explore now</a>
```

## Change log

- The heading and supporting sentence explain what arrives and how often.
- One signup action follows a visible email label with native validation.
- Pending, failure, and confirmed subscription states replace an unhandled request.
- A fluid reading column and consistent type and spacing replace the fixed-width card.

## Verification and gaps

Source walkthrough only. Proposed checks: empty and malformed values trigger native validation without calling the adapter; a pending promise disables submission; a rejected promise retains the address and permits retry; both confirmed response variants replace the form with the correct announcement. Wire the real adapter, verify repeat submission behavior, and test focus after form replacement in the host app. No request was sent and no browser test is claimed. The weekly frequency is a sample brief fact and needs editorial confirmation before publication.
