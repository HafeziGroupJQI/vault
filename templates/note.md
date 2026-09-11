<%*
const title = await tp.system.prompt("Title");
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
await tp.file.rename(slug);
-%>
---
title: "<% title %>"
date: <% tp.date.now("YYYY-MM-DD") %>
modified: <% tp.date.now("YYYY-MM-DD") %>
type: note
tags: []
draft: true
---

