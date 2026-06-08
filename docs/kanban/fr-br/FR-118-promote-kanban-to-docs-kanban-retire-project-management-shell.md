---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T13:30:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-118: Promote Kanban to `docs/kanban/` and retire `project-management/` shell

**Type:** Feature Request (FR)  
**ID:** FR-118  
**Submitted:** 2026-06-08  
**Submitted By:** Maintainer  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** IMPLEMENTED — **v0.7.1.12+2** (FR-118 phased rewire complete; see [KANBAN-REHOUSING-INVENTORY.md](../../governance/KANBAN-REHOUSING-INVENTORY.md) §4)

**Implementing Task:** [E07:S01:T12](../epics/epic-07/story-01-codebase-maintenance-tasks/T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md)

**Related:** [FR-101](FR-101-consolidate-governance-under-docs-governance.md), [UXR-013](UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md), [FR-039](FR-039-ai-dev-kit-project-review-and-legacy-clean-up.md), [ADR-007](../../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md), [ADR-018](../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md), [UXR-017](UXR-017-kanban-epic-story-path-lowercase-naming.md), [E07:S01:T11](../epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)

---

## Summary

Eliminate legacy **`docs/project-management/`** structural debt before RC by:

1. **Phase A** — Remove `docs/project-management/rituals/` (redirect stubs only; policy already in `docs/governance/kanban/`).
2. **Phase B** — **`git mv`** `docs/kanban/` → **`docs/kanban/`** and retire the `project-management/` wrapper.
3. **Phase C** — Repository-wide rewire: `rw-config.yaml`, agent bootstrap, framework defaults, validators, workflows, CI, Docusaurus, greenfield-install, and adopter migration guidance.

Execution follows **inventory-first** discipline (same pattern as [FR-101](FR-101-consolidate-governance-under-docs-governance.md)): **no `git mv` before maintainer-approved inventory sign-off** and **IPW** (`IPP-E07S01T12`).

---

## Problem Statement

`docs/project-management/` was intended for rituals + operational PM policy + Kanban. After [FR-101](FR-101-consolidate-governance-under-docs-governance.md):

- Governance lives under **`docs/governance/`**.
- **`rituals/`** holds only three MOVED stubs (no active content).
- **`kanban/`** (~1,100 files) is the sole substantive subtree.

The extra directory level (`kanban`) adds path length, confuses agents and adopters, and preserves a vestigial name with no remaining semantic value. Near RC, shipping with this structure embeds avoidable tech debt in every hardcoded path, installer default, and framework KB example.

---

## Scope

### In scope

| Phase | Work |
| ----- | ---- |
| **0 — Inventory** | `docs/governance/KANBAN-REHOUSING-INVENTORY.md` (or `docs/maintenance/`) — every reference to `kanban`, `project-management/rituals`, disposition **MOVE / REWRITE / STUB / OUT**; maintainer sign-off before moves |
| **A — Rituals removal** | Link sweep on **active surfaces** → delete `docs/project-management/rituals/`; update `project-management/README.md` |
| **B — Kanban promotion** | `git mv docs/kanban` → `docs/kanban`; remove empty `docs/project-management/` (or single root stub README → `docs/kanban/`) |
| **C — Config & runtime** | `rw-config.yaml` (`kanban_root`, `fr_br_root`); `.cursorrules`, `AGENTS.md`, `CLAUDE.md`, `project-agent-manifest.json`; pre-commit hooks |
| **D — Framework package** | Default `--kanban-path` in `install_kanban_framework.py`; example `rw-config` YAMLs; workflow YAMLs; framework KB docs; `greenfield-install` sync |
| **E — Verification** | `validate_release_readiness`, install tests, `validate_actions_ci_parity`, Docusaurus link check; `rg` hygiene gate on legacy paths |
| **F — Adopter migration** | `INSTALL_IN_YOUR_PROJECT.md` + short migration note for projects on default path (optional scripted helper, precedent: `apply_e6s07_path_migration_3b.py`) |

### Out of scope

- Changing Kanban **content** (epic/story/task semantics, MoSCOW policy) — path-only migration.
- Moving `docs/governance/` or `docs/architecture/`.
- Rewriting changelog archive historical links (immutable; stubs suffice).
- Notion maintainer KB bulk migration ([FR-114](FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)) — only git paths that reference old kanban root.

---

## Functional Requirements

- [ ] **FR-118-F1 (Phase 0):** Kanban rehousing inventory complete with disposition table and **maintainer-approved** sign-off row before any `git mv`.
- [ ] **FR-118-F2 (Phase 1):** **IPW** produces `IPP-E07S01T12-*.md` under `docs/implementation-cycles/` (phased waves, test design, rollback).
- [ ] **FR-118-F3 (Phase A):** `docs/project-management/rituals/` deleted; active links repointed to `docs/governance/kanban/` (and framework SoT where cited).
- [ ] **FR-118-F4 (Phase B):** Canonical book-repo Kanban root is **`docs/kanban/`**; `docs/kanban/` absent or stub-only.
- [ ] **FR-118-F5 (Phase C):** `rw-config.yaml` `kanban_root: docs/kanban` and `fr_br_root: docs/kanban/fr-br`; RW/UKW/intake validators pass on `dev`.
- [ ] **FR-118-F6 (Phase D):** Framework installer default `docs/kanban`; example configs and greenfield-install aligned; coordinated framework package version note if default changes.
- [ ] **FR-118-F7 (Phase E):** `rg 'kanban' docs packages .cursorrules AGENTS.md CLAUDE.md rw-config.yaml .github` on **active** surfaces returns zero false positives (changelog archive exempt).
- [ ] **FR-118-F8 (Phase F):** Adopter migration section documents manual `rw-config` update and optional migration script usage.

---

## Non-Functional Requirements

- [ ] **FR-118-NF1:** Prefer **`git mv`** over copy-delete to preserve file history for the kanban tree.
- [ ] **FR-118-NF2:** Stubs at legacy paths (if any retained) use MOVED banners per [ADR-007](../../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md); minimum retention ≥ one release cycle OR until layout verifier passes.
- [ ] **FR-118-NF3:** Phased RW releases — do not combine inventory + full rewire in a single unreviewed commit; wave boundaries documented in IPP.
- [ ] **FR-118-NF4:** No force-push or tag rewrite ([BR-097](BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md)).

---

## Acceptance Criteria (closure)

- [ ] **AC0:** Inventory signed off before moves.
- [ ] **AC1:** FR-118-F1..F8 satisfied.
- [ ] **AC2:** IPP linked from [E07:S01:T12](../epics/epic-07/story-01-codebase-maintenance-tasks/T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md) before implementation waves.
- [ ] **AC3:** `docs/maintenance/book-repo-docs-scope.md` (or Notion stub successor) lists `docs/kanban/` as **KEEP** and `docs/project-management/` as **RETIRED**.
- [ ] **AC4:** CI parity green on `dev` after final wave; install smoke tests pass with new default path.

---

## Target layout (post-migration)

```
docs/
├── governance/          # policies (existing — FR-101)
├── kanban/              # NEW canonical root (promoted from kanban)
│   ├── kboard.md
│   ├── fr-br/
│   ├── epics/
│   └── …
└── project-management/  # RETIRED — delete or single README stub → docs/kanban/
```

---

## Deliverable phases

| Phase | Output |
| ----- | ------ |
| **0 — Inventory** | `KANBAN-REHOUSING-INVENTORY.md` + sign-off |
| **1 — IPW** | `IPP-E07S01T12-*.md` |
| **A** | Rituals deleted; link sweep wave 1 |
| **B** | `git mv` kanban tree |
| **C–D** | Config, agents, framework, greenfield |
| **E** | Validators + `rg` gate |
| **F** | Adopter migration docs |
| **Close** | RW on E07:S01:T12; FR-118 → IMPLEMENTED |

---

## References

- [FR-101](FR-101-consolidate-governance-under-docs-governance.md) — governance rehousing precedent
- [GOVERNANCE-REHOUSING-INVENTORY.md](../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) — inventory methodology
- [packages/frameworks/kanban/scripts/install_kanban_framework.py](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py) — default `--kanban-path`
- Task: [E07:S01:T12](../epics/epic-07/story-01-codebase-maintenance-tasks/T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md)
