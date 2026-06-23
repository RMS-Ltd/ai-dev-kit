# Changelog v0.8.3.23+3

**Release Date:** 2026-06-17 14:42:19 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 23  
**SemVer:** v0.4.1195+3

---

## Summary

Forensic closure release on **E08:S03:T23** for [BR-110](../../../kanban/fr-br/BR-110-rw-k-dpz-rejection-doc-init-build-zero-guard-mismatch.md): attributing the filed implementing task with a dedicated commit/tag on the correct anchor. Resolver/validator fix shipped in **v0.6.9.38+0** (E06:S09:T38); this release records kanban/traceability alignment without re-shipping that code.

---

## Change implemented

### Kanban / traceability

- Updated [E08:S03:T23](../../../kanban/epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md) version anchor and BR-110 forensic closure note.
- Updated [BR-110](../../../kanban/fr-br/BR-110-rw-k-dpz-rejection-doc-init-build-zero-guard-mismatch.md) with closure release cross-reference (`v0.8.3.23+3` on filed task; implementation @ `v0.6.9.38+0`).
- Story checklist row reconciled for T23 forensic `+3` release.

### Workflow validation (minor)

- `validate_branch_context.py` doc-init gate now inspects **staged** files only (parity with `validate_version_bump.py`), so unrelated unstaged/untracked tree noise does not block Step 1 when HEAD is at BUILD `+0`.

---

## Related

- [BR-110](../../../kanban/fr-br/BR-110-rw-k-dpz-rejection-doc-init-build-zero-guard-mismatch.md)
- [E08:S03:T23](../../../kanban/epics/epic-08/story-03-automation-scripts/T23-greenfield-sync-autofix-ci-hardening-br109.md)
- [CHANGELOG v0.6.9.38+0](CHANGELOG_v0.6.9.38+0.md) (BR-110 `art_doc_policy_zero` implementation)
