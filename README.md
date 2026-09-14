# Hafezi Group vault

The group's public knowledge base: onboarding pages, lab and equipment records, and notes,
kept as plain Markdown and Quarto files so anyone can edit them in Obsidian or on GitHub.
Everything under `content/` is **public** and is built into
the group site by [HafeziGroupJQI/hafezigroupjqi.github.io](https://github.com/HafeziGroupJQI/hafezigroupjqi.github.io)
on every push. Internal notes belong in the private `vault-private` repository, never here.

## Layout

| Path | What lives there |
| --- | --- |
| `content/index.md` | Landing page |
| `content/onboarding/` | Checklists, buildings and access, safety, glossary, resources, current directions |
| `content/people/` | One record per member (`type: person`) plus `directory.base`, the filterable directory |
| `content/equipment/` | One record per instrument (`type: equipment`) plus `equipment.base` and the overview |
| `content/setups/` | One record per experimental setup (`type: setup`) linking its equipment |
| `content/lab/` | Long-form lab notes and walkthroughs |
| `content/materials/` | Photonic material property tables |
| `content/publications/`, `news/`, `research/` | Migrated from hafezi.jqi.umd.edu (see `source:` in each page) |
| `content/assets/` | Images, grouped by section |
| `schema/` | JSON schemas for the typed records above; CI validates against them |
| `templates/` | Obsidian Templater templates for new notes and records |
| `_quarto.yml`, `requirements.txt` | Quarto project used by the site build to render `.qmd` files |

## Editing

- Open the repository root as an Obsidian vault (plugins: Templater, Linter). Wikilinks
  (`[[equipment/santec-tsl]]`) and callouts (`> [!note]`) render on the site as they do in Obsidian.
- Every page starts with frontmatter. Minimum: `title`, `type`, `tags`. Set `draft: true` to
  keep a page out of the site while you work on it (it is still visible on GitHub).
- Typed records (`person`, `equipment`, `setup`, `publication`) must match `schema/*.json`;
  run `npm run validate` before pushing, or let CI tell you.
- `.qmd` files: write Quarto as usual. Put PDF-only options under `format: pdf:` so the site
  build (which renders to markdown) ignores them. Code cells are executed at build time;
  commit the `_freeze/` cache so CI only re-runs what changed.
- Images: drop them in `content/assets/<section>/` and embed with `![[assets/<section>/file.jpg]]`.

## Adding things

- **A new instrument**: `templates/equipment.md` (Templater) or copy an existing record. Set
  `driver` to the command-and-control driver name once one exists; leave `null` otherwise.
- **A new setup**: `templates/setup.md`; list its equipment as `[[equipment/<id>]]` links.
- **Your own directory entry**: edit `content/people/<your-name>.md`.

## How the site is built

Pushes to `main` run `tools/validate.mjs`, then send a `repository_dispatch` to the website
repository, which checks out `content/`, renders the `.qmd` files with Quarto, builds the site
with Quartz, and deploys to GitHub Pages. The secret `VAULT_DISPATCH_TOKEN` (fine-grained PAT
with contents read/write on the website repo) makes that dispatch possible.

## TODO after migration

- People records carry `building`, `office`, and `scope` as `TBD` unless already known; members fill in their own page.
- Two news posts and the positions page lost inline images that the JQI Drupal host no longer serves.
- Setup records were inferred from the September 3, 2026 walkthrough; owners should correct them.
