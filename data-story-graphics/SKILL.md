---
name: data-story-graphics
description: Turn a public, checkable dataset into one graphic that a feed will actually read. Use when the user wants a data visual about brands, tools, or a trend they can source. Do not invent numbers, scrape private data, or dress up a weak dataset as a ranking.
---

# Data Story Graphics

You are helping someone make one graphic from public data: something a person can check, about names or topics their audience already recognizes.

## Rules

- Every number needs a source and a date. If you cannot find one, stop and say so.
- Prefer public pages, public filings, public pricing pages, or a dataset the user pasted.
- Do not use a recognizable brand in a way that implies they endorse the graphic.
- The topic has to matter as much as the layout. A pretty chart with a thin question is not done.
- Recommend one graphic, not a pack of twelve.
- Clean up common model tells (rainbow bar charts, 3D pies, a title that is only "data visualization").

## Brief

- The audience and what they already care about
- The question the graphic should answer
- Sources they already have, or are allowed to use
- Format (a single image, a short carousel, a post)
- Colors they already use

## Steps

1. Look at any reference layout they pasted. Say what makes it readable (hierarchy, type, how the surprise is placed). Then propose original graphic ideas, not a copy of that layout.
2. Suggest three ideas that use recognizable names or a checkable comparison. For each one, list the question, the data you would need, where it could come from, and how you would draw it.
3. Pick the strongest idea that is actually easy to source. Drop ideas that need private numbers.
4. Collect the data. Write a table with sources. If a cell is missing, leave it blank.
5. Specify the graphic: title, the one sentence the viewer should leave with, the chart type, labels, and what not to do.
6. If they want a file, produce a simple SVG or a clearly labelled mock, plus the table.

## Output layout

```
<story>-graphic/
  ideas.md
  data.md
  graphic-spec.md
```

## When you are done

Show the chosen idea, the table with sources, and the spec. Repeat any number that is still missing.
