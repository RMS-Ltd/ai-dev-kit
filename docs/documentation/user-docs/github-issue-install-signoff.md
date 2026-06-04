---
lifecycle: evergreen
created_at: 2026-06-04T20:00:00Z
housekeeping_policy: keep
---

# GitHub Issue install sign-off

Prevents **orphaned** `ai-dev-kit` GitHub Issues that wait for adopter install verification (e.g. [#12](https://github.com/RMS-Ltd/ai-dev-kit/issues/12)–[#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16)).

## How it works

1. **Contract** — `packages/frameworks/workflow-mgt/config/github-issue-install-signoff-contract.yaml` lists each trackable issue and **when_all** checks (rw-config keys, validators, padding scan, etc.).
2. **After install** — `install_kanban_framework.py` and `install_release_workflow.py` run `install_github_issue_signoff.py` (report only by default).
3. **Close (optional)** — Pass `--close-github-issues` when `gh` is authenticated to comment and close **ready** issues on `RMS-Ltd/ai-dev-kit`.

## Maintainer: add a new issue

1. Create the GitHub issue; add label **`awaiting-adopter-signoff`**.
2. Add a contract entry with `id`, `number`, `when_all` checks, and `close_comment`.
3. Link from the BR/UXR doc: `**GitHub Issue:** [#N](...)`.

## Adopter: Expenses Tracker (fresh repo)

After kanban + RW install:

```bash
# Report which upstream issues are ready to close (no side effects)
python vendor/ai-dev-kit/packages/frameworks/workflow\ mgt/scripts/install_github_issue_signoff.py \
  --project-root . \
  --list-open-awaiting

# Optional: close ready issues on ai-dev-kit (maintainer/adopter with gh auth)
python vendor/ai-dev-kit/packages/frameworks/workflow\ mgt/scripts/install_github_issue_signoff.py \
  --project-root . \
  --close-github-issues
```

Or re-run installers with sign-off baked in:

```bash
python .../install_release_workflow.py --mode c
python .../install_kanban_framework.py --mode fresh
# Sign-off report prints at end; add --close-github-issues to close
```

Report JSON: `logs/ai-dev-kit/install/signoff-report.json`

## Check types

| Type | Meaning |
|------|---------|
| `rw_config_patterns` | `rw-config.yaml` has required kanban keys and substring patterns |
| `command` | Subprocess exits 0 (e.g. `--check-deps`) |
| `no_capitalised_kanban_segments` | No `Epic-` / `Story-` under `kanban/epics/` |
| `kanban_paths_padding` | ADR-015 padded lowercase segments; optional strict validator |
| `note` | Manual close only (`kit_only` scope) |

## Orphan detection

With `--list-open-awaiting`, open issues labelled **`awaiting-adopter-signoff`** that are **not** in the contract are listed as orphan risks — add a contract entry or remove the label.

## Safety

- **Default:** never closes issues; only prints READY / NOT READY.
- **Close:** requires explicit `--close-github-issues` and `gh` CLI.
- Issues with `number: null` in the contract (e.g. UXR-017 until a GH issue is filed) can show READY but are not auto-closed.
