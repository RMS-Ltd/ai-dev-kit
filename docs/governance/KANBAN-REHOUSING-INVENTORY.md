---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T13:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Kanban rehousing inventory (Phase 0)

**FR:** [FR-118](../kanban/fr-br/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md)  
**Task:** [E07:S01:T12](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md)  
**IPP:** [IPP-E07S01T12](../implementation-cycles/IPP-E07S01T12-kanban-path-promotion-fr118.md)  
**Status:** APPROVED — execution in progress (2026-06-08)

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Maintainer | RMS | 2026-06-08 | ☑ |

---

## Disposition legend

| Code | Meaning |
|------|---------|
| **MOVE** | `git mv` to `docs/kanban/` |
| **DELETE** | Remove vestigial path after link sweep |
| **STUB** | Banner → new canonical location |
| **REWRITE** | Active-surface path string update (no tree move) |
| **OUT** | Exempt (changelog archive, kb-migration snapshots) |

---

## §0 — Baseline counts (pre-move)

| Surface class | Metric | Count |
|---------------|--------|-------|
| Active surfaces (dry-run) | Files with planned edits | 1,366 |
| Active surfaces | `docs/kanban` + relative replacements | 5,173 |
| `*.py` / `*.yaml` | Files listing old absolute path | ~180 |
| `rituals/` | Active refs in `docs` + `packages` | ~18 (framework KB) |
| Kanban tree | Files under `docs/kanban/` | ~1,100 |

**Helper:** `python packages/frameworks/workflow-mgt/scripts/kanban/apply_kanban_root_migration_fr118.py --dry-run`

---

## §1 — Candidate paths

| Current path | Disposition | Target / action |
|--------------|-------------|-----------------|
| `docs/kanban/` | **MOVE** | `docs/kanban/` (entire tree) |
| `docs/project-management/rituals/` | **DELETE** | After link sweep → `docs/governance/kanban/` |
| `docs/project-management/README.md` | **STUB** | Point to `docs/kanban/` |
| `rw-config.yaml` `kanban_root` / `fr_br_root` | **REWRITE** | `docs/kanban`, `docs/kanban/fr-br` |
| `packages/frameworks/kanban/scripts/install_kanban_framework.py` | **REWRITE** | Default `docs/kanban` |
| `greenfield-install/**` | **REWRITE** | Sync via `sync_greenfield_install.py` |
| `docs/changelog-and-release-notes/changelog-archive/` | **OUT** | Historical paths retained |
| `docs/knowledge/kb-migration-mcp-args/` | **OUT** | Migration snapshots |

---

## §2 — Active surfaces (link sweep)

- `rw-config.yaml`
- `AGENTS.md`, `CLAUDE.md`, `docs/project-agent-manifest.json`, `docs/project-agent-index.md`
- `.cursorrules`, `packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md`
- `.github/workflows/`, `.pre-commit-config.yaml`
- `packages/frameworks/**` (workflow YAMLs, validators, KB, installer)
- `scripts/kb_stub_sweep.py`, `scripts/sync_greenfield_install.py`
- `greenfield-install/**`, `portal/`, `INSTALL_IN_YOUR_PROJECT.md`
- `docs/implementation-cycles/IPP-*.md` (active cross-links)
- `tests/**` (install, portal, rw scenarios)

---

## §3 — Verification commands

```bash
# After Wave B + migration script
python packages/frameworks/workflow-mgt/scripts/kanban/apply_kanban_root_migration_fr118.py --dry-run
# Expect after=0 on active surfaces

rg 'kanban' docs packages scripts .github AGENTS.md CLAUDE.md .cursorrules rw-config.yaml \
  --glob '!docs/changelog-and-release-notes/changelog-archive/**'

python packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py --strict --all
pytest tests/kanban/test_install_fresh_validation.py tests/kanban/test_install_kanban_path_resolution.py -q
```

---

## §4 — Execution log

| Wave | Action | Version | Notes |
|------|--------|---------|-------|
| 0 | Inventory + IPP filed | — | Sign-off 2026-06-08 |
| A | Rituals link sweep + delete | v0.7.1.12+2 | 18 framework KB refs; rituals/ removed |
| B | `git mv` + `rw-config` atomic | v0.7.1.12+2 | `docs/kanban/` (~1,100 files) |
| C–D | Migration script + installer + greenfield | v0.7.1.12+2 | 5,166+ replacements; `sync_greenfield_install.py` |
| E–F | Docs sweep, ADR-007, closure | v0.7.1.12+2 | INSTALL migration §; FR-118 IMPLEMENTED |
