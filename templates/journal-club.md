<%*
const n = await tp.system.prompt("Session number (e.g. 02)");
await tp.file.rename("session-" + n + "-notes");
-%>
---
title: "Session <% n %> discussion notes"
date: <% tp.date.now("YYYY-MM-DD") %>
type: journal-club
tags: [journal-club]
---

Paper:

Presenter:

## Discussion

