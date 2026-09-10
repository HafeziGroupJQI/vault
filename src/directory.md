---
title: Directory
navTitle: Directory
order: 7
---

One row per current member: person ↔ role ↔ office ↔ contact ↔ what to ask
them about. This table is generated from a single data file
(`src/_data/people.yaml`) — edit that file, not this page. Names link to each
member's page on the [main People page]({{ site.mainSite }}/people). Alumni
are listed there as well.

<div class="callout callout--verify"><p>Office numbers and "ask me about"
scopes are mostly unconfirmed (<em>TBD</em>). As of the last check, only
Mohammad's office is listed on the main site. Please fill in your own row.</p></div>

{% for groupName in people.groups %}

## {{ groupName }}

<div class="table-wrap">
<table>
  <thead>
    <tr><th>Name</th><th>Role</th><th>Building</th><th>Office</th><th>Email</th><th>Ask me about</th></tr>
  </thead>
  <tbody>
  {%- for p in people.members %}{% if p.group == groupName %}
    <tr>
      <td><a href="{{ p.profile }}">{{ p.name }}</a></td>
      <td>{{ p.role }}</td>
      <td>{{ p.building }}</td>
      <td>{{ p.office }}</td>
      <td>{% if p.email != "TBD" %}<a href="mailto:{{ p.email }}">{{ p.email }}</a>{% else %}TBD{% endif %}</td>
      <td class="directory-scope">{{ p.scope }}</td>
    </tr>
  {% endif %}{%- endfor %}
  </tbody>
</table>
</div>
{% endfor %}

## By building

{% for g in people.members | groupByKey("building") %}
- **{{ g.name }}**: {% for p in g.members %}{{ p.name }}{% if p.office != "TBD" %} ({{ p.office }}){% endif %}{% if not loop.last %}, {% endif %}{% endfor %}
{% endfor %}
