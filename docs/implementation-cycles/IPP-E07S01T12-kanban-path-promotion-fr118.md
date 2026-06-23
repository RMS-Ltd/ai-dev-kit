---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T13:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S01:T12 — Planning: Kanban path promotion (IPW / FR-118)

**Host Task:** [`T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md`](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md) **(E07:S01:T12)**  
**Planning for:** [FR-118](../kanban/fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md)  
**Status:** Approved (planning complete — implementation authorized)

> **IPW:** Consolidated IPP per [FR-042](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md). Bidirectional wiring to host task **Input** and **References** is mandatory before implementation.

---

## 1. Requirements (ascertained baseline)

### Functional

| ID | Requirement | Source |
|----|-------------|--------|
| RF1 | Phase 0 inventory with maintainer sign-off **before** any `git mv` | FR-118-F1, AC0 |
| RF2 | Delete `docs/project-management/rituals/` after active-surface link sweep | FR-118-F3 |
| RF3 | Canonical Kanban root = `docs/kanban/` via `git mv` (~1,100 files) | FR-118-F4 |
| RF4 | `rw-config.yaml`: `kanban_root: docs/kanban`, `fbu_root: docs/kanban/fbu` | FR-118-F5 |
| RF5 | Rewire agent bootstrap: `AGENTS.md`, `CLAUDE.md`, `project-agent-manifest.json`, `.cursorrules` | FR-118 |
| RF6 | Framework installer default `docs/kanban` | FR-118-F6 |
| RF7 | Sync workflow YAMLs, validators, tests, CI (~180 touchpoints) | FR-118 |
| RF8 | `sync_greenfield_install.py` + greenfield copies aligned | FR-118-F6 |
| RF9 | Active-surface `rg`: zero `kanban` (changelog archive exempt) | FR-118-F7 |
| RF10 | Adopter migration in `INSTALL_IN_YOUR_PROJECT.md` | FR-118-F8 |
| RF11 | IPP linked; phased RW — no single-commit full rewire | FR-118-NF3 |

### Non-functional

| ID | Requirement |
|----|-------------|
| RNF1 | `git mv` preserves history |
| RNF2 | Legacy stubs per ADR-007 if retained |
| RNF3 | `validate_actions_ci_parity --strict --all` each wave |
| RNF4 | No `git tag -f` on release tags (BR-097) |
| RNF5 | Link sweep: active surfaces only; exclude changelog archive, kb-migration-mcp-args, Notion stubs |

---

## 2. Specification

### Goal

Collapse the vestigial `docs/project-management/` wrapper so book-repo Kanban work lives at **`docs/kanban/`**, with runtime config, framework defaults, agents, and CI aligned.

### Constraints

- Implementation commits **only via RW** on `E07:S01:T12 --art` (one RW per wave minimum).
- Post-ship waves: **`RW E07:S01:T12 --art` only** (BUILD +1); never `--dpz` for follow-on waves.
- Wave B: `git mv` + `rw-config` flip in **one atomic commit**.

### Status transition intent

- **Current:** `TODO` (kanban-init `v0.7.1.12+1`).
- **Step 1:** `TODO` → `IN PROGRESS`.
- **COMPLETE:** FR-118 AC0–AC4 + T12 AC0–AC5; forensic `✅ COMPLETE (v{version})`; FR-118 → IMPLEMENTED.

### ADR necessity — REQUIRED

Update [ADR-007](../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md) for `docs/kanban/` as book Kanban SoT and retirement of `project-management/` shell.

---

## 3. Test design

| Test ID | Type | Exercises |
|---------|------|-----------|
| TST-1 | Validator | `validate_release_readiness.py` after Wave B |
| TST-2 | Validator | `validate_version_bump.py --strict --requested E07:S01:T12 --art` |
| TST-3 | `rg` gate | `kanban` on active paths |
| TST-4 | Pytest | `tests/kanban/test_install_*` |
| TST-5 | Pytest | `tests/test_install_release_workflow_rw_config.py` |
| TST-6 | CI parity | `validate_actions_ci_parity.py --strict --all` each wave |
| TST-7 | Portal | `tests/test_portal_*` if paths referenced |

**Mechanical migration:** `packages/frameworks/workflow-mgt/scripts/kanban/apply_kanban_root_migration_fr118.py` (`--dry-run` / `--apply`).

---

## 4. Implementation plan (phased waves)

### Step 1 (mandatory first)

Transition **E07:S01:T12** `TODO` → `IN PROGRESS`; refresh `Last updated`.

### Wave 0 — Inventory

Create [KANBAN-REHOUSING-INVENTORY.md](../governance/KANBAN-REHOUSING-INVENTORY.md); maintainer sign-off blocks moves.

### Wave A — Rituals removal

Link sweep `rituals/policy/` → `docs/governance/kanban/`; update `kb_stub_sweep.py`; delete `docs/project-management/rituals/`; **`RW E07:S01:T12 --art`**.

### Wave B — Core `git mv`

`git mv docs/kanban docs/kanban`; same commit: `rw-config.yaml`; `project-management/README.md` stub; **`RW E07:S01:T12 --art`**.

### Wave C — Agent bootstrap

`AGENTS.md`, `CLAUDE.md`, `project-agent-manifest.json`, `.cursorrules`, dual-source parity excerpt, `.pre-commit-config.yaml`.

### Wave D — Framework + greenfield

`install_kanban_framework.py`, workflow YAMLs, example configs, validators, `sync_greenfield_install.py`; run `apply_kanban_root_migration_fr118.py --apply`; **`RW E07:S01:T12 --art`**.

### Wave E — Docs sweep

`INSTALL_IN_YOUR_PROJECT.md`, active IPP cross-links, portal audit.

### Wave F — Closure

Adopter migration section; `book-repo-docs-scope` / governance README; ADR-007 update; final `rg` + pytest; **`RW E07:S01:T12 --art`**; FR-118 IMPLEMENTED.

### Final step (mandatory last)

Reconcile task status; Step 7 four-surface report.

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
|--------|------|--------|
| D1 | `docs/implementation-cycles/IPP-E07S01T12-kanban-path-promotion-fr118.md` | CREATE (this file) |
| D2 | `docs/governance/KANBAN-REHOUSING-INVENTORY.md` | CREATE |
| D3 | `docs/architecture/standards-and-adrs/ADR-007-*.md` | UPDATE |
| D4 | `docs/maintenance/book-repo-docs-scope.md` | UPDATE (Notion stub + governance README) |
| D5 | `INSTALL_IN_YOUR_PROJECT.md` | UPDATE |
| D6 | T12 task doc | UPDATE |
| D7 | FR-118 | UPDATE on closure |
| D8 | `apply_kanban_root_migration_fr118.py` | CREATE |

---

## 6. Documentation housing

| Deliverable | Canonical path | Publication |
|-------------|----------------|-------------|
| IPP | `docs/implementation-cycles/IPP-E07S01T12-kanban-path-promotion-fr118.md` | NOT_APPLICABLE |
| Inventory | `docs/governance/KANBAN-REHOUSING-INVENTORY.md` | NOT_APPLICABLE |
| ADR | `docs/architecture/standards-and-adrs/` | evergreen |

---

## 7. Success / verification criteria

- [ ] AC0: Inventory signed off
- [ ] AC1: FR-118-F1..F8 with wave evidence in inventory §4
- [ ] AC2: IPP linked from T12 (`—IPP—` on kboard)
- [ ] AC3: `kanban_root: docs/kanban`; Step 7 passes
- [ ] AC4: CI parity green; install tests pass
- [ ] Active-surface `rg` clean (TST-3)

---

## References

- [FR-118](../kanban/fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md)
- [GOVERNANCE-REHOUSING-INVENTORY.md](../governance/GOVERNANCE-REHOUSING-INVENTORY.md) (methodology)
- [IPP-E7S01T11](IPP-E7S01T11-consolidate-governance-under-docs-governance.md) (precedent)
- [ADR-007](../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md)
- [apply_kanban_root_migration_fr118.py](../../packages/frameworks/workflow-mgt/scripts/kanban/apply_kanban_root_migration_fr118.py)
