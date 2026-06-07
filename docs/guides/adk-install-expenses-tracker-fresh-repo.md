---
lifecycle: evergreen
created_at: 2026-06-04T18:00:00Z
housekeeping_policy: keep
---

# ADK install — Expenses Tracker (fresh repository)

Use this checklist when starting from a **new blank GitHub repository** (no prior kanban tree). Validates [UXR-017](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md) / [E04:S19:T11](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md) AC5.

## Prerequisites

- ADK workflow/kanban packages installed per your project’s installer (submodule, copy, or `install_release_workflow.py` flow).
- `rw-config.yaml` at project root with kanban enabled.

## Expected kanban path layout (write-default)

```text
docs/project-management/kanban/epics/epic-04/epic-04.md
docs/project-management/kanban/epics/epic-04/story-19-{slug}.md
docs/project-management/kanban/epics/epic-04/story-19-{slug}/T11-{slug}.md
```

Rules (ADR-015):

- Lowercase `epic-*`, `story-*`, `T*` filename prefixes.
- **2-digit** epic/story/task segments when ID ≤ 99 (`epic-04`, `story-19`, `T11`).
- **3-digit** when ID > 99 (`T101`, `story-100`, etc.).

## rw-config.yaml (minimum)

```yaml
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/epic-{epic:02d}/epic-{epic:02d}.md
story_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*.md
task_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*/T{task:02d}-*.md
```

## Verification commands (from repo root)

```bash
# No capitalised Epic-/Story- path segments; padded lowercase segments
python packages/frameworks/workflow\ mgt/scripts/validation/validate_kanban_naming.py --strict

# RW task resolution (example task after you file one)
python packages/frameworks/workflow\ mgt/scripts/validation/validate_rw_task_intent.py --requested "E04:S19:T11"
```

## GitHub Issue sign-off (upstream ai-dev-kit)

After install, the RW/kanban installers print a **contract-driven** report of which `RMS-Ltd/ai-dev-kit` issues are ready to close (BR-083/084/082, UXR-017 paths, etc.). See [github-issue-install-signoff.md](../documentation/user-docs/github-issue-install-signoff.md).

```bash
python packages/frameworks/workflow\ mgt/scripts/install_github_issue_signoff.py \
  --project-root . --list-open-awaiting
```

Use `--close-github-issues` only when you intend to close ready issues via `gh` (requires auth).

## Record evidence

Paste `ls docs/project-management/kanban/epics/epic-*` (first epic), `rw-config.yaml` kanban patterns, and `logs/ai-dev-kit/install/signoff-report.json` into T11 **Expenses Tracker verification (AC5)** when done.
