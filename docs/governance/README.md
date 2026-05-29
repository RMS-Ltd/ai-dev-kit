---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Governance documentation (book workspace)

**Status:** Active — [ADR-007](../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md) · [FR-101](../project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md) · [E7:S01:T11](../project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)

---

## Purpose

Single navigation entry for **book-active** governance: Kanban rules, versioning/changelog policy, IPW/IPP packaging, principles, and cross-links to ADRs and reference guides under `docs/architecture/`.

**Framework SoT:** Packaged policies under `packages/frameworks/` remain authoritative for adopters. This tree holds **maintainer book workspace** copies; stubs at legacy paths point here.

---

## Standards (`governance/standards/`)

- [dev-kit-versioning-policy.md](standards/dev-kit-versioning-policy.md)
- [changelog-archival-policy.md](standards/changelog-archival-policy.md)
- [specification-and-planning-artifacts-policy.md](standards/specification-and-planning-artifacts-policy.md)
- [dev-kit-ipw-ipp-vs-icw-artifacts.md](standards/dev-kit-ipw-ipp-vs-icw-artifacts.md)

---

## Kanban (`governance/kanban/`)

- *(pending Wave C)* [kanban-governance-policy.md](kanban/kanban-governance-policy.md)

---

## Principles (`governance/principles/`)

- *(pending Wave D)* [bidirectional-wiring-principle.md](principles/bidirectional-wiring-principle.md)

---

## Index-only (remain in `docs/architecture/standards-and-adrs/`)

- [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- [ADR-007](../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [Workflow flaws reference](../architecture/standards-and-adrs/workflow-flaws-reference-guide.md)
- [Versioning error reference](../architecture/standards-and-adrs/versioning-error-reference-guide.md)

---

## Inventory and task

- **Phase 0 SoT:** [GOVERNANCE-REHOUSING-INVENTORY.md](./GOVERNANCE-REHOUSING-INVENTORY.md)
- **IPP:** [IPP-E7S01T11](../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md)
