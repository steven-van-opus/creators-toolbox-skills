# Scout card spacing

## Input

Local page: `http://localhost:3000/scout`. Select `[data-ct-edit="scout-story-042"] .summary`. Request: "Tighten the space below this summary without shrinking the source link's tap area." Fixture story: FrameKit adds transcript search, with a two-line summary and a source row.

Fixture component: `src/components/ScoutCard.tsx`. Fixture styles:

```css
.scoutCard .summary { margin: 0 0 24px; }
.scoutCard .source { min-height: 44px; display: flex; align-items: center; }
```

## Expected output

The spacing rule is shared by all Scout cards. The requested scope is this card, so propose a local compact modifier instead of changing the shared margin. If the user meant the whole feed, state that assumption before expanding the diff.

```diff
-<article className="scoutCard" data-ct-edit="scout-story-042">
+<article className="scoutCard scoutCardCompact" data-ct-edit="scout-story-042">
```

```diff
+.scoutCardCompact .summary { margin-bottom: 12px; }
```

Screenshot targets: the selected card and its neighbor at 1280 by 900 and 390 by 844. Expected result: 12px below the summary, neighboring cards unchanged, source row at least 44px high, long titles wrap without clipping. Check keyboard focus on the source link. Return actual observations and screenshot paths in a live run; these are expected outcomes for the fixture.
