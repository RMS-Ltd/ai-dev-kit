# Release v0.10.1.6+4 — E10:S01:T06 post-RC CI and portal link hygiene

**Release Date:** 2026-06-06 15:29:11 UTC  
**Epic:** 10 | **Story:** 01 | **Task:** 06  
**SemVer:** v0.4.1019+4  
**Branch:** `epic/10-doc-lifecycle-framework`  
**RW mode:** `--art`

---

## Summary

**Change implemented:** Release three post-RC commits that were pushed directly for CI green — Docusaurus build link/MDX fixes, BR-068 publish-scope link corrections, validator `yaml` import guards, and greenfield-install mirror sync.

---

## Change implemented

### CI / portal hygiene (follow-on to T06 APPROVE @ v0.10.1.6+3)

- **Docusaurus build:** Fixed broken relative links across E10 kanban/IPP docs, GitHub blob URLs for `packages/` and excluded `changelog-archive/` targets, MDX `<` parsing in `IPP-E08S03T17`, stale anchor in `IPP-E08S03T12`, FR-113/E08:T17 path corrections
- **BR-068:** Publish-scope monorepo link test green — corrected out-of-plugin relative links in E10 story artefacts
- **Validators:** Added missing `yaml` import guards in `validate_adk_ecc_skill_pack.py` and `validate_ecc_adk_bridge.py`; synced to `greenfield-install/`
- **Kanban:** FR-113 filename correction in `kanban-completed.md`

### Kanban reconciliation

- T06 task doc version anchor `0.10.1.6+4`; Story E10:S01 and Epic 10 metadata refreshed

---

## Verification

- `validate_branch_context.py --strict --requested E10:S01:T06 --art` — PASS
- `validate_rw_task_complete.py --requested E10:S01:T06` — PASS
- `validate_rw_task_intent.py --requested E10:S01:T06 --art` — PASS
- `resolve_rw_build.py --requested E10:S01:T06 --art` — next_build 4
- Local `npx docusaurus build` — PASS (pre-RW)
- `pytest tests/test_portal_br068_monorepo_links.py` — PASS (pre-RW)

---

## References

- [T06 task doc](../../../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [IPP-E10S01T06-rc-sign-off-remediation.md](../../../implementation-cycles/IPP-E10S01T06-rc-sign-off-remediation.md)
