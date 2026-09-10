# Hafezi Group Onboarding Site

A static site for the Hafezi group's onboarding documentation, built from plain
Markdown files with [Eleventy](https://www.11ty.dev/). The generated pages use
the exact stylesheet, fonts, and page structure of
[hafezi.jqi.umd.edu](https://hafezi.jqi.umd.edu/), so the output can be dropped
into the main site as an `/onboarding/` subsection or hosted standalone.

## Quick start

```sh
npm install
npm run serve        # dev server at http://localhost:8080/onboarding/
npm run build        # static output in _site/
```

## Editing content

- **Add or edit a page:** drop a `.md` file under `src/`. Front matter controls
  the page:

  ```yaml
  ---
  title: My Page
  order: 5        # position in the sidebar (lower = higher)
  draft: true     # optional: shows a "draft, needs group review" banner
  ---
  ```

  Everything below the front matter is ordinary Markdown.

- **Directory data:** `src/_data/people.yaml` is the single source of truth for
  person ↔ role ↔ office ↔ contact ↔ "ask me about" scope. The
  [directory page](src/directory.md) renders from it. Fill in `TBD` fields as
  they get confirmed.

- **Materials database:** `src/_data/materials.yaml` holds the photonic
  material property tables (linear, nonlinear, electro/acousto-optic) and the
  sources list. The [materials page](src/materials.md) renders from it.

- **Unverified facts:** wrap them in the verify callout so readers know:

  ```html
  <div class="callout callout--verify"><p>…needs verification…</p></div>
  ```

## Theme

`src/assets/theme/` holds a vendored copy of the main site's stylesheet, fonts,
and logos, rewritten to relative paths. To refresh it after the main site
changes:

```sh
npm run sync-theme
```

## Layout

`src/_includes/layouts/base.njk` reproduces the main site's DOM: header with
main-site nav, this section's sidebar nav, breadcrumb, page body, footer.
Top-nav links point at the live site; sidebar links stay within this section.
