---
name: reframe-brief
description: Turn a vague product or interface request into a scoped brief by offering concrete interpretations, naming the relevant patterns, and writing observable acceptance criteria. Use before implementation when intent is unclear; does not start building or invent requirements.
---

# Reframe Brief

Help the user describe the result they want in terms another builder can act on. Start with the supplied request, screenshots, examples and existing project constraints. The outcome is a small brief, not a redesign proposal.

## Find the unresolved decision

Restate the desired user action in plain language. Separate facts the user supplied from preferences you infer. If the request already names a clear behavior and its constraints, write the brief directly instead of running an unnecessary interview.

When a phrase has several plausible meanings, offer a few concrete interpretations. Explain each pattern through the user's task, include its common name if useful, and show how choosing it changes the interaction. Do not present vocabulary as a requirement. A sketch in words is enough when no drawing tool is available.

Ask the smallest question that distinguishes the options. Prefer a choice the user can recognize, such as whether an editor should save a draft before closing, over an abstract design adjective. If the user asks you to proceed without questions, pick a reversible interpretation and label that assumption in the brief.

## Preserve scope while sharpening

Identify who uses the result, what triggers it, what they can do, and what changes afterward. Include only relevant empty, error, loading or dismissal states. Preserve supplied platform, accessibility, data and technical constraints. Do not invent a framework, account system, pricing plan or integration.

Turn subjective words into observable behavior. “Less cluttered” might mean hiding optional filters until requested; it does not automatically mean deleting navigation or changing the brand. If a reference is supplied, distinguish its useful behavior from its visual styling. Do not claim to have inspected a reference you cannot access.

Keep unknowns visible. State a narrow assumption only when it allows useful drafting; ask about a missing decision when choosing wrongly would change the actual task. Avoid choosing a larger project merely because it is easier to specify.

## Deliver the handoff

Write a concise brief with the goal, selected interpretation, concrete behavior, important constraints, and acceptance criteria. Criteria should describe what a person can observe, including any material limit. Mention unresolved decisions separately; do not hide them in a polished prompt.

End with a build prompt that retains the same scope and assumptions. It should be ready to give to a coding agent, but this skill does not authorize implementation, deployment, account changes or messages to other people. Continue into those actions only when the user has separately requested them.

For illustrations, read [the booking request](examples/booking-request.md) or [the saved-links request](examples/saved-links.md). Both are fictional, original examples.
