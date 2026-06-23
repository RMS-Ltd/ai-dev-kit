---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-007: Book workspace governance document topology

**Status:** Accepted  
**Date:** 2026-05-29  
**Decision owner:** Maintainer  
**Implementing work:** [FR-101](../../kanban/fbu/FR-101-consolidate-governance-under-docs-governance.md) · [E7:S01:T11](../../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md) · [IPP-E7S1T11](../../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md) · [FR-118](../../kanban/fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md) · [E07:S01:T12](../../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md)

**Related:** [ADR-006](ADR-006-book-project-private-repository-spin-off.md) (book vs public repo split), [GOVERNANCE-REHOUSING-INVENTORY.md](../../governance/GOVERNANCE-REHOUSING-INVENTORY.md), [KANBAN-REHOUSING-INVENTORY.md](../../governance/KANBAN-REHOUSING-INVENTORY.md)

---

## Context

After [ADR-006](ADR-006-book-project-private-repository-spin-off.md), the maintainer book workspace (`RMS-Ltd/ai-dev-kit-book` / local `main`) hosted **book-active** governance policies under legacy `docs/project-management/rituals/policy/` and `docs/architecture/standards-and-adrs/`. [FR-101](../../kanban/fbu/FR-101-consolidate-governance-under-docs-governance.md) rehoused policies into `docs/governance/`. [FR-118](../../kanban/fbu/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md) promotes the Kanban work tree to **`docs/kanban/`** and retires the `project-management/` wrapper (`rw-config.yaml` `kanban_root`).

---

## Decision

### Three-layer topology

| Layer | Canonical location | Role |
|-------|-------------------|------|
| **Framework (adopter SoT)** | `packages/frameworks/{kanban,workflow mgt,...}/` | Portable policies, validators, templates for installed projects |
| **Book governance (maintainer SoT)** | `docs/governance/{kanban,standards,principles}/` | Book-workspace copies and promoted principles used by RW/IPW/UKW on this repo |
| **Book Kanban (maintainer SoT)** | `docs/kanban/` | Boards, epics/stories/tasks, `fbu/` intake queue for this repo (`kanban_root` in `rw-config.yaml`) |
| **Architecture (ADR + INDEX)** | `docs/architecture/standards-and-adrs/` | ADRs, operational reference guides, and **INDEX-only** docs cross-linked from `docs/governance/README.md` |

### Disposition rules

| Code | Rule |
|------|------|
| **MOVE** | `git mv` to `docs/governance/`; **stub** at legacy path with “Moved to” banner and framework SoT link where applicable |
| **INDEX** | File stays in `docs/architecture/standards-and-adrs/`; `docs/governance/README.md` links prominently |
| **OUT** | Boards, epic/story/task trees, `fbu/` intake queue (except stub after principle MOVE), `vendor/`, framework packages |
| **STUB** | Legacy path retained ≥ one release cycle (FR-101-NF1) |

### Stub policy

- Stubs use evergreen frontmatter and a single banner pointing to the new canonical path.
- Kanban policy stub **must** cite `packages/frameworks/kanban/policies/kanban-governance-policy.md` as adopter framework SoT.
- Do **not** bulk-rewrite changelog archives or `docs/knowledge/kb-migration-mcp-args/`; update **active surfaces** only (inventory §2).

### Active surfaces (link sweep scope)

`.cursorrules`, `.claude/commands/*`, `AGENTS.md`, `kanban-board-guide.md`, portable RW excerpt (`cursorrules-rw-trigger-section.md`), `docs/architecture/README.md`, `docs/governance/README.md`, and inbound links from moved policy bodies.

---

## Consequences

### Positive

- One hub (`docs/governance/README.md`) for book-active governance.
- Clear separation: framework vs book vs ADR/index layers.
- Preserves git history via `git mv`.

### Negative / costs

- Large reference surface; stubs required during transition.
- Dual maintenance of book copy vs framework SoT until adopters sync from packages only.

---

## Compliance

- Execution traceability: [GOVERNANCE-REHOUSING-INVENTORY.md](../../governance/GOVERNANCE-REHOUSING-INVENTORY.md) §4 execution log.
- Verification: IPP-E7S1T11 tests T1–T7.
