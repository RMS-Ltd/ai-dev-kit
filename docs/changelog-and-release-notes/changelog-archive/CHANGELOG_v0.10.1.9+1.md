# Release v0.10.1.9+1 — E10:S01:T09 Architecture ADR dual SoT sync

**Release Date:** 2026-06-06 15:06:47 UTC  
**Epic:** 10 | **Story:** 01 | **Task:** 09  
**SemVer:** v0.4.1017+1  
**Branch:** `epic/10-doc-lifecycle-framework`  
**RW mode:** `--art`

---

## Summary

**Change implemented:** Establish Document Lifecycle package `policies/` as framework SoT with dev-kit architecture mirrors — ADR-023, `policy-salience-schema.md` packaged, mirror banners, salience cross-links, `adr-dual-sot-parity.md` maintainer checklist, kb-structure link fix, greenfield-install FR-110 re-sync.

Closes **GAP-DOCLIFE-INTG-001** (T06 remediation R2).

---

## Change implemented

### ADR and SoT contract

- **ADR-023** — package SoT vs architecture mirror decision record with per-file table
- **`docs/adr-dual-sot-parity.md`** — maintainer dual-source parity checklist (precedent: `rw-trigger-dual-source-parity.md`)

### Package policies (framework SoT)

- Added `policies/policy-salience-schema.md` (portable SoT; was architecture-only)
- Updated `doc-lifecycle-metadata-spec.md` and `doc-lifecycle-policy.md` — removed broken `kb-structure-overview.md` link; dev-kit pointer to `ultimate-canonical-kb-structure.md`; SoT footers

### Architecture mirrors

- Synced `doc-lifecycle-metadata-spec.md`, `doc-lifecycle-policy.md`, `policy-salience-schema.md` with mirror banners from package SoT

### Cross-links and docs

- `policy-salience-guide.md`, `policy-salience-agent-parser.md`, `POLICY_SALIENCE_TEMPLATE.md` — primary link → package `../policies/policy-salience-schema.md`
- `README.md` — package structure lists salience schema + ADR-023 / parity doc links
- `PACKAGE_PROPOSAL.md` — related links → package `policies/` SoT

### Mirror (FR-110)

- `rsync` canonical → `greenfield-install/packages/frameworks/doc-lifecycle/` (`diff -rq` exit 0)

### Kanban / gap tracking

- T04 domains 5–6 re-validated **ALIGNED** on T09 verification table
- T05 Gap 4 (GAP-DOCLIFE-INTG-001) tracking → **COMPLETE** @ v0.10.1.9+1

---

## References

- [IPP-E10S01T09](../../implementation-cycles/IPP-E10S01T09-sync-architecture-adr-dual-sot.md)
- [ADR-023](../../architecture/standards-and-adrs/ADR-023-doc-lifecycle-package-architecture-dual-sot.md)
- [T09 task doc](../../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T09-sync-architecture-adr-dual-sot.md)
