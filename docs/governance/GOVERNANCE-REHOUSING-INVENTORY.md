---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Governance rehousing inventory (Phase 0)

**FR:** [FR-101](../project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance.md)  
**Task:** [E7:S01:T11](../project-management/kanban/epics/Epic-7/Story-001-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101.md)  
**Status:** APPROVED — execution in progress (AC0 satisfied 2026-05-29)

---

## Sign-off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Maintainer | RMS | 2026-05-29 | ☑ |

---

## Disposition legend

| Code | Meaning |
|------|---------|
| **MOVE** | Relocate to `docs/governance/`; stub at old path |
| **STUB** | Keep path; banner → new canonical location |
| **INDEX** | Stay in place; link from `governance/README.md` only |
| **OUT** | Not governance hub scope; no move |
| **FIX** | Broken or ambiguous link; restore or repoint before Phase 2 |

---

## §1 — Candidate documents

| Current path | Disposition | Target / action | Notes |
|--------------|-------------|-----------------|-------|
| `docs/project-management/rituals/policy/kanban-governance-policy.md` | **MOVE** | `docs/governance/kanban/kanban-governance-policy.md` | Book-local policy; cite framework SoT in stub |
| `docs/project-management/rituals/policy/README.md` | **MOVE** | Merge into `docs/governance/kanban/README.md` | Rituals README content absorbed |
| `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` | **MOVE** | `docs/governance/standards/dev-kit-versioning-policy.md` | RW/version.py SoT for book |
| `docs/architecture/standards-and-adrs/changelog-archival-policy.md` | **MOVE** | `docs/governance/standards/changelog-archival-policy.md` | Pairs with `rw-config.yaml` |
| `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md` | **MOVE** | `docs/governance/standards/specification-and-planning-artifacts-policy.md` | IPW/ICW housing |
| `docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md` | **MOVE** | `docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md` | IPP vs ICW matrix |
| `docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md` | **INDEX** | — | Link from governance hub; stays with ADR-adjacent docs |
| `docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md` | **INDEX** | — | Repo-boundary ADR |
| `docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md` | **INDEX** | — | Operational reference |
| `docs/architecture/standards-and-adrs/versioning-error-reference-guide.md` | **INDEX** | — | Operational reference |
| `docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md` | **MOVE** | `docs/governance/principles/bidirectional-wiring-principle.md` | Maintainer decision (IPW E7:S01:T11): promote to principles; stub at `fr-br/`; update templates, `fbu-open-taskless-queue.md`, cross-wiring SoP |
| `packages/frameworks/kanban/policies/kanban-governance-policy.md` | **OUT** | — | Framework SoT; book stub points here |
| `docs/project-management/kanban/kboard.md` | **OUT** | — | Board surface |
| `docs/project-management/kanban/fbuboard.md` | **OUT** | — | Board surface |
| `docs/project-management/kanban/fr-br/` (intake queue) | **OUT** | — | Except principles promoted per FIX row |
| `docs/maintenance/*` | **OUT** | — | Runbooks; index-only from governance README |
| `docs/maintenance/book-repo-docs-scope.md` | **FIX** | Create/update in Phase 2 | AC3: add `docs/governance/` **KEEP** |

---

## §2 — Active surfaces requiring link sweep (Phase 3)

- `.cursorrules` — versioning policy, kanban governance paths
- `.claude/commands/ipw.md`, `rw.md`, `ukw.md`
- `docs/project-management/kanban/kanban-board-guide.md`
- `rw-config.yaml` comments / doc pointers (if any)
- Top-level `fr-br/` cross-links in open FRs
- `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` (portable excerpt)

---

## §3 — Verification commands (Phase 3)

```bash
# Expect stub-only hits or zero after Phase 2
rg 'rituals/policy/kanban-governance-policy' docs .cursorrules .claude
rg 'standards-and-adrs/dev-kit-versioning-policy' docs .cursorrules
```

---

## §4 — Execution log (Phase 2)

| Item | `git mv` commit | Stub added | Links swept |
|------|-----------------|------------|-------------|
| *(populate during execution)* | | | |
