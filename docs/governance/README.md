---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Governance documentation (book workspace)

**Status:** 🚧 **Bootstrap** — hub created by [FR-101](../project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md) intake ([E7:S01:T11](../project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)). Policies are **not yet moved**; see [GOVERNANCE-REHOUSING-INVENTORY.md](./GOVERNANCE-REHOUSING-INVENTORY.md).

---

## Purpose

Single navigation entry for **book-active** governance: Kanban rules, versioning/changelog policy, IPW/IPP packaging, and cross-links to ADRs and reference guides that stay under `docs/architecture/`.

**Framework SoT:** Packaged policies under `packages/frameworks/` remain authoritative for adopters. This tree holds **maintainer book workspace** copies and stubs where the book diverges.

---

## Planned layout (post FR-101 execution)

| Path | Content |
|------|---------|
| `governance/kanban/` | Book Kanban governance policy (from `rituals/policy/`) |
| `governance/standards/` | Versioning, changelog archival, specification/planning, IPW vs ICW |
| `governance/principles/` | Optional home for promoted principles (e.g. bidirectional wiring) |

---

## Index-only (remain in `docs/architecture/`)

- [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- [Workflow flaws reference](../architecture/standards-and-adrs/workflow-flaws-reference-guide.md)
- [Versioning error reference](../architecture/standards-and-adrs/versioning-error-reference-guide.md)

---

## Inventory and task

- **Phase 0 SoT:** [GOVERNANCE-REHOUSING-INVENTORY.md](./GOVERNANCE-REHOUSING-INVENTORY.md)
- **FR:** [FR-101](../project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md)
- **Task:** [E7:S01:T11](../project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)
