---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Governance documentation (book workspace)

**Status:** Active (FR-101 complete **v0.7.1.11+8**) — [ADR-007](../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md) · [FR-101](../kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md)

---

## Purpose

**Install failures:** stable `ADK-*` codes and troubleshooting — [ADR-016](../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) · [framework-dependency-troubleshooting-guide.md § Install error codes](../documentation/user-docs/framework-dependency-troubleshooting-guide.md#install-error-codes-adk).

Single navigation entry for **book-active** governance: Kanban rules, versioning/changelog policy, IPW/IPP packaging, principles, and cross-links to ADRs and reference guides under `docs/architecture/`.

**Framework SoT:** Packaged policies under `packages/frameworks/` remain authoritative for adopters. This tree holds **maintainer book workspace** copies; stubs at legacy paths point here.

---

## Standards (`governance/standards/`)

- [dev-kit-versioning-policy.md](standards/dev-kit-versioning-policy.md)
- [changelog-archival-policy.md](standards/changelog-archival-policy.md)
- [specification-and-planning-artifacts-policy.md](standards/specification-and-planning-artifacts-policy.md)
- [dev-kit-ipw-ipp-vs-icw-artifacts.md](standards/dev-kit-ipw-ipp-vs-icw-artifacts.md)

### Locale and translation (FR-006 / Epic 21)

- [translation-workflow-and-review.md](standards/translation-workflow-and-review.md)
- [translatable-content-inventory.md](standards/translatable-content-inventory.md)
- [locale-rollout-matrix.md](standards/locale-rollout-matrix.md)
- [locale-key-conventions.md](standards/locale-key-conventions.md)
- [locale-file-structure-conventions.md](standards/locale-file-structure-conventions.md)
- [locale-fallback-conventions.md](standards/locale-fallback-conventions.md)

---

## Kanban (`governance/kanban/`)

- [kanban-governance-policy.md](kanban/kanban-governance-policy.md) · [README](kanban/README.md)

---

## Principles (`governance/principles/`)

- [bidirectional-wiring-principle.md](principles/bidirectional-wiring-principle.md)

---

## Index-only (remain in `docs/architecture/standards-and-adrs/`)

- [ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md)
- [ADR-007](../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md)
- [ADR-012](../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md) — agent bootstrap and task routing (manifest + slim `AGENTS.md`)
- [ADR-013](../architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md) — IDE command allowlist catalog ([guide](../developer-tools/ide-whitelist-guide.md))
- [ADR-014](../architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md) — repository vs abstract-space Kanban model (FR-072 Approach D)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [Workflow flaws reference](../architecture/standards-and-adrs/workflow-flaws-reference-guide.md)
- [Versioning error reference](../architecture/standards-and-adrs/versioning-error-reference-guide.md)

---

## Book Kanban work (`docs/kanban/`)

- **Board:** [kboard.md](../kanban/kboard.md) · **Intake:** [fr-br/](../kanban/fr-br/)
- **Kanban rehousing (FR-118):** [KANBAN-REHOUSING-INVENTORY.md](KANBAN-REHOUSING-INVENTORY.md) · [IPP-E07S01T12](../implementation-cycles/IPP-E07S01T12-kanban-path-promotion-fr118.md)

---

## Inventory and task

- **Phase 0 SoT:** [GOVERNANCE-REHOUSING-INVENTORY.md](GOVERNANCE-REHOUSING-INVENTORY.md)
- **IPP:** [IPP-E7S1T11](../implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance.md)
