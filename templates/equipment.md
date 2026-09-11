<%*
const title = await tp.system.prompt("Instrument (make + model)");
const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
await tp.file.rename(id);
-%>
---
title: "<% title %>"
type: equipment
id: <% id %>
make: ""
model: ""
category: other
interface: none
driver: null
manual: null
setups: []
controls: []
controlled_by: []
status_endpoint: null
owner: TBD
location: TBD
tags: [equipment, equipment/other]
---

What it is, what it is used for, and how it is controlled.

