# Field Notes archive: save an issue

This is a fictional newsletter interface created for this skill.

| Input | State | Visual response | Interruption |
| --- | --- | --- | --- |
| Click or keyboard activate Save issue | Saved immediately | Label becomes Saved; bookmark settles upward | Another activation removes the save immediately |
| Activate while saved | Unsaved immediately | Label becomes Save issue; bookmark returns | Another activation saves immediately |
| Reduced motion | Same saved behavior | Labels and color change with no icon travel or transition | No delayed state to cancel |

The animation takes 180 milliseconds with a simple ease-out curve. These values are choices for this small example, not universal timing rules. Native CSS transitions retarget from their current position when a class changes. There is no timer or animation-finished event that can overwrite newer input.

Keep the button node in place. A polite status message confirms the result, and `aria-pressed` communicates whether this issue is saved. The interface keeps no persistent data.

To check: Tab to the button and press Space. Click twice quickly, then three times quickly. Verify the final label, `aria-pressed` and status against the last action. Repeat with the operating system's reduced-motion setting enabled. Change that setting while the icon is moving; it should settle without travel. At narrow widths, inspect the full title and status for clipping. This sample does not test a backend save or network error.
