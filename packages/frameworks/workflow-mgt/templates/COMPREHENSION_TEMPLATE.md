---
lifecycle: evergreen
created_at: 2026-06-15T20:00:00Z
housekeeping_policy: keep
---

# ADK install comprehension (copy to repo root as `COMPREHENSION.md`)

**Purpose:** Install RC evidence — states what ran, what did **not** run, and migration depth achieved.  
**Template:** [COMPREHENSION_TEMPLATE.md](COMPREHENSION_TEMPLATE.md) (workflow-mgt) · [FR-133](../../../docs/kanban/fbu/FR-133-kanban-migration-depth-rationalization-adopter-guide.md)

> Copy this file to your repository root as `COMPREHENSION.md` and fill every section before Install RC.

---

## Install summary

| Field | Value |
| ----- | ----- |
| **Adoption path** | `arm-b` / `arm-a` / `strangler` |
| **Orchestrator** | `install_greenfield_path.py` flags used |
| **Install date** | YYYY-MM-DD |
| **Operator** | Name or team |

---

## Kanban root and docs authority

| Question | Answer |
| -------- | ------ |
| **Canonical `kanban_root`** | e.g. `docs/kanban` |
| **Legacy archive location** | e.g. `docs-pre-ai-dev-kit/` (read-only) |
| **Docs authority** | Which tree is SoT for PM/kanban after install |
| **Dual-tree eliminated?** | Yes / No — if No, block install-complete |

---

## Version truth

| Field | Value |
| ----- | ----- |
| **Version file path** | e.g. `src/{project}/version.py` |
| **Allocator mode** | SQLite / YAML registry |
| **First RW task** | e.g. `E24:S01:T01` |

---

## Restore ≠ migrate

State explicitly:

- [ ] Legacy tree was **archived**, not deleted (git history preserved)
- [ ] KMA did **not** edit legacy root in place
- [ ] Restore from archive is possible without re-running KMA

---

## Migration depth (FR-133)

| Field | Value |
| ----- | ----- |
| **Depth achieved** | **L1** (default) / L2 / L3 |
| **KMA mode** | Blind kit first pass / operator-assisted |
| **Ad-hoc migration scripts** | **0** (required for painless bar) |

### Performed

- [ ] Orchestrator layered install (steps 0–4)
- [ ] KMA ingest → propose → sign-off → synthesise
- [ ] Install RC strict PASS (`validate_install_rc.py`)
- [ ] First domain RW

### Not performed (default L1 — expected)

- [ ] L2 hygiene pass (collision renames beyond proposal, board deep hygiene)
- [ ] L3 rationalization (megastory split, task fan-out, structural scorecard)
- [ ] Maintainer reference-tree compare
- [ ] Custom `scripts/*kma*` or invented phase scripts

> **L1 is valid for shipping.** Items under “Not performed” are opt-in second passes — see [KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md](../../kanban/guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md).

---

## Sign-off

| Role | Name | Date |
| ---- | ---- | ---- |
| Operator | | |
| Agent session ID (optional) | | |
