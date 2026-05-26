---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T22 — RW perpetual-task BUILD must persist in `version.py` (BR-075)

**Task ID:** E2:S01:T22  
**Status:** TODO  
**Priority:** LOW  
**Estimated Effort:** Small  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (**v0.2.1.22+1** — BR-075 intake; RW `-k` `--art`)  
**Version Anchor:** v0.2.1.22+1  
**Code:** E2S01T22

---

## Summary

Close the gap where RW (especially **`RW -k`**) on perpetual maintenance tasks can advance kanban/changelog version markers **before** `version_file` reflects the incremented **`VERSION_BUILD`**, causing forensic drift and operator confusion.

---

## Input

- [BR-075](../../../fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md)
- `rw-config.yaml` → `version_file: src/ai_dev_kit/version.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py` (`kanban_init`)
- `.cursor/skills/version-bump/SKILL.md` (legacy path hazard)
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

---

## Deliverable

1. **Validator hardening** — fail closed when same-task perpetual RW does not increment `VERSION_BUILD` in `version_file` (pre-commit / Step 9).
2. **Kanban init ordering** — ensure `update_kanban_docs.py` never advertises a version ahead of `version_file` on perpetual lanes.
3. **Documentation** — RW guide + `.cursorrules` Step 2-before-Step-7 note for perpetual tasks and `RW -k`.
4. **Skill alignment** — `version-bump` skill resolves path from `rw-config.yaml`.
5. **Regression test** — fixture for E2:S16:T04-style perpetual release.

---

## Acceptance Criteria

- [ ] **AC1:** Running validators after a simulated perpetual RW with unchanged `VERSION_BUILD` exits non-zero with actionable message.
- [ ] **AC2:** `RW -k` on E2:S16:T04 (and other Story-016 perpetual lanes) documented as requiring Step 2 version-file write before Step 7.
- [ ] **AC3:** `version-bump` skill references config-driven `version_file`, not hardcoded `src/fynd_deals/version.py`.
- [ ] **AC4:** Regression test covers kanban_init-before-bump ordering failure.
- [ ] **AC5:** BR-075 marked RESOLVED with fix version after RW ships the change.

---

## References

- [BR-075](../../../fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md)
- [E2:S16:T04 — Perpetual UKW/kanban lane](../Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
- [dev-kit-versioning-policy.md](../../../../architecture/standards-and-adrs/dev-kit-versioning-policy.md)
