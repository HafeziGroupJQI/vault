---
title: Photonic Material Database
navTitle: Materials Database
order: 8
---

Optical properties of the material platforms the group works with — SiN,
thin-film lithium niobate (TFLN), lithium tantalate, InGaP, GaAs/AlGaAs, and
silicon — compiled from our lab experiments and the literature. This page is
generated from a single data file (`src/_data/materials.yaml`); edit that file
to add a material, a column, or a correction. A work in progress.

{% macro proptable(t, cls) %}
<div class="table-wrap">
<table class="{{ cls }}">
  <thead><tr>{% for c in t.columns %}<th>{{ c }}</th>{% endfor %}</tr></thead>
  <tbody>
  {%- for row in t.rows %}
    <tr>{% for cell in row %}{% if loop.first %}<td><strong>{{ cell }}</strong></td>{% else %}<td>{{ cell }}</td>{% endif %}{% endfor %}</tr>
  {%- endfor %}
  </tbody>
</table>
</div>
{% endmacro %}

## {{ materials.linear.title }}

{{ proptable(materials.linear, "materials-linear") }}

## {{ materials.nonlinear.title }}

{{ proptable(materials.nonlinear, "materials-nonlinear") }}

## {{ materials.eo.title }}

{{ proptable(materials.eo, "materials-eo") }}

## Sources

{% for s in materials.sources %}
### {{ s.heading }}

{% for item in s.items %}- {{ item }}
{% endfor %}
{% endfor %}
