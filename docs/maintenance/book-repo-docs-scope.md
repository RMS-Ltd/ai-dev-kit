---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T21:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Book repository documentation scope

**Purpose:** Classify top-level `docs/` trees for the maintainer book workspace ([ADR-006](../architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md), [FR-101](../project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md)).

**Task:** [E7:S01:T11](../project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)

---

## Scope table

| Path | Disposition | Notes |
|------|-------------|-------|
| `docs/governance/` | **KEEP** | Book-active governance hub ([README](../governance/README.md)); standards, kanban, principles |
| `docs/architecture/` | **KEEP** | ADRs, INDEX-only references; stubs point to `docs/governance/` for moved policies |
| `docs/project-management/` | **KEEP** | Kanban, rituals stubs, FR/BR/UXR |
| `docs/implementation-cycles/` | **KEEP** | IPP / ICW planning packages |
| `docs/maintenance/` | **KEEP** | Runbooks and scope docs (this file) |
| `docs/changelog-and-release-notes/` | **KEEP** | Changelog archive |
| `docs/documentation/` | **KEEP** | User-facing adopters docs |
| `docs/knowledge/` | **KEEP** | KB and use cases |
| `packages/frameworks/` | **KEEP** | Framework SoT for adopters |

---

## Governance hub

Canonical book policies: [docs/governance/README.md](../governance/README.md)  
Topology: [ADR-007](../architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md)
