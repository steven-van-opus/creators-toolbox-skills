# A class timetable instead of a long list

All names and requirements in this example are fictional.

## Request

“Our community pottery studio has a long list of classes. Make it feel like a timetable so people can find a class after work. Keep the existing booking links.”

## The useful decision

A weekly time grid puts weekdays across the top and start times down the side. It makes overlapping sessions visible, but becomes hard to scan on a narrow phone screen. A day agenda groups the same sessions under each date and keeps the booking action beside each class. A filterable list can answer “after 5 pm” without changing the layout.

Question: “Is the main job comparing the week at once, or finding the next evening class?”

Chosen answer: Find the next evening class.

## Brief

Goal: Help a visitor choose an evening pottery class and reach its existing booking page.

Interpretation: A day agenda with an optional evening filter. A full calendar grid is outside this request.

Behavior: Group upcoming sessions by local date. Show title, start and end time, remaining places when provided by the existing data, and the current booking link. An “After 5 pm” control limits results to sessions starting at 17:00 or later in the studio's existing timezone.

Constraints: Keep current class data and URLs. Do not add sign-in or a checkout. If availability is absent, omit the count rather than inventing one.

Acceptance criteria:

- Turning on “After 5 pm” hides a 16:30 start and keeps a 17:00 start.
- Date headings remain visible in the phone layout.
- Each listed class opens its existing booking URL.
- No matching sessions produces a useful empty state with a way to clear the filter.

Unresolved: The existing data's timezone must be checked before implementation. No timezone is assumed from a visitor's browser.

## Build prompt

“Update the current classes view to a day agenda with an optional After 5 pm filter. Keep the existing data and booking URLs. Group by the studio's existing local timezone; confirm where that timezone is defined before implementing the filter. Show the current class title and times, and only show availability if present. Keep it usable on phones and include a clear empty state. Do not add accounts, checkout or a calendar grid.”
