# A calmer saved-links screen

This is a fictional example, not a claim about a real product.

## Request

“My saved links screen is overwhelming. I want it calmer, but do not change the colors or remove search.”

## Interpretations

1. Progressive disclosure: keep search visible and put optional filters behind a Filters button.
2. Density control: keep every control visible but give each link more room.
3. Collections first: make users choose a collection before seeing links, changing the navigation.

The user selects the first option. The brief must not silently add the other two.

## Brief

Goal: Keep saved links easy to find while reducing the number of visible controls.

Behavior: Keep the current search field visible. Move the existing optional filters into a disclosure opened by Filters. Preserve selected filters when the disclosure closes. Display an active-filter count and a Clear filters action beside the button so a hidden selection remains understandable.

Constraints: Keep existing colors, data, card density and search behavior. No new collection hierarchy or account features.

Acceptance criteria:

- Search works while the filter disclosure is closed.
- The Filters button exposes whether its content is expanded.
- Closing and reopening the disclosure retains a selected tag.
- Clearing filters resets optional filters while keeping the search query.
- Keyboard users can open the disclosure and reach its controls in a sensible order.

Unknown: Whether current filter state is reflected in the URL. Inspect the existing implementation before changing that behavior.

## Build prompt

“Keep this saved-links screen's search, colors and card layout. Move only its existing optional filters behind a Filters disclosure, retain their state while closed, and show an active count plus Clear filters outside it. Clear filters must not clear the search query. Preserve existing URL behavior after inspecting it, and verify keyboard navigation and the selected-filter empty state.”
