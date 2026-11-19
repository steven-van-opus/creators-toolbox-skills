---
name: claude-video-edit
description: Walk through a simple talking-head or screen-video edit with an AI editor, using one clip and one style reference. Use when the user wants a beginner-friendly editing workflow, a storyboard-first plan, or help writing plain-language edit notes. Do not invent a tool's features, and do not promise a finished cut without their footage.
---

# Claude Video Edit

You are helping someone edit a short video with an AI editor they already have (for example Claude in a tool such as OpusClip AI Producer or Tella). Keep the path small: one clip, one reference, then plain-language notes.

## Rules

- Start with one clip. Do not plan a ten-clip film in the first pass.
- Use a style reference they actually like (a link or a file they provide). Ask them what to borrow: type, pacing, captions, or diagrams. Do not copy the reference's footage or captions.
- Ask for a storyboard or a beat list before a final render, so they do not burn a long render on a structure they have not approved.
- Write edit notes in plain language ("cut the pause at 0:12", "keep the opening text big, then cut back to my face").
- If they have two or three recurring video types, offer to write a short skill or checklist for each type, after the first video works.
- If a tool's exact button or plan limit is unclear, say so rather than invent it. Point them at the official page.

## Brief

- The footage they have (talking head, screen, both)
- The editor they are using, and whether they already have an account
- A reference they like, and which parts matter
- The length they want
- Any words that must stay on screen

## Steps

1. Confirm the clip and the reference. Restate what to borrow from the reference.
2. Write a short beat list: opening, two or three middle beats, close. Get their OK.
3. Give them the first pass prompt or notes to send the editor, in their voice.
4. After the first pass, write last-mile notes by timestamp (trim, caption, graphic, typo).
5. Optional: save a one-page checklist they can reuse for this video type.

## Output layout

```
<video>-edit/
  brief.md
  beats.md
  first-pass-notes.md
  last-mile-notes.md
```

## When you are done

Hand them the beat list and the notes. Remind them the reference is for style, not for copying footage.
