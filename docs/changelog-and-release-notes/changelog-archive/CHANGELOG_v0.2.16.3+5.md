# Changelog Entry — v0.2.16.3+5

**Internal Version:** 0.2.16.3+5
**SemVer:** v0.4.791+5
**Release Date:** 2026-05-20
**Epic:** E2 — Workflow Management Frameworks
**Story:** S16 — Perpetual Ongoing Workflow Operations
**Task:** T03 — Workflow maintenance (Perpetual)

---

## Summary

IPW implementation for E2:S16:T03 — closes acceptance-criteria gap between implemented Waves 2 & 3 guardrail/discoverability work and documented evidence. Fixes four test fixture bugs in `test_validate_version_bump.py`. Archives legacy `IPW-E6S07T103` draft. Adopted via `--art` from T10.

## Changes

### `packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py`

- **Bug 1 (T1):** Fixed assertion in `test_task_id_extraction_prefers_canonical_section` to expect `(2, 16, 3)` matching mock content `**Value:** E2:S16:T03`.
- **Bug 2 (T4):** Renamed mock task file from `T03-*.md` to `T101-*.md` so `locate_task_doc` discovers it correctly under Epic-6/Story-007 for `VERSION_TASK = 101`.
- **Bug 3 (T6):** Renamed mock task file from `T03-*.md` to `T101-*.md` for build-increment test under `VERSION_TASK = 101`.
- **Bug 4 (T7):** Renamed mock task file from `T03-*.md` to `T103-*.md` so `locate_task_doc` discovers it correctly under Epic-6/Story-007 for `VERSION_TASK = 103`.
- Added `Historical Anchor:` and `Perpetual Override Rationale:` markers to mock task docs for guardrail compliance.
- Added canonical T03 mock doc under Epic-2/Story-016 for `--art` test coverage.
- Fixed `story_path` in doc-policy-zero test to point to Epic-2 Story-016.

### `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`

- Updated `Last updated` to 2026-05-19.
- Added `## Verification Evidence` section with Wave 2/3 details and AC5 validator/test output.
- AC1–AC3 marked COMPLETE with evidence annotations.
- AC4 marked PARTIAL (guardrails pass; exhaustive reference migration BLOCKED on T02 inventory).
- AC5 marked COMPLETE with 14/14 test pass evidence.

### `docs/implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual.md`

- Added deprecation banner at top (after frontmatter).
- Updated Status to `Deprecated (superseded by E2:S16:T03; canonical policy in IPP-E2S16T01)`.

### `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md`

- Updated T03 checklist: Wave 2/3 COMPLETE, AC1–AC3/AC5 satisfied, AC4 PARTIAL.
- Updated `Last updated` and `Version` to v0.2.16.10+2.

### `docs/project-management/kanban/kboard.md`

- Updated header `Last Updated` to reflect T03 work.

### `docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md`

- Created from IPW plan file.

## Verification

- `pytest packages/frameworks/workflow\ mgt/scripts/validation/test_validate_version_bump.py -x` → 14 passed, 0 failed.
- `python packages/frameworks/workflow\ mgt/scripts/validation/validate_version_bump.py --strict --requested E2:S16:T03 --art` → Exit 0.

## Related

- E2:S16:T03 — Workflow maintenance (Perpetual)
- IPP-E2S16T03 — Implementation plan
- Previous release: v0.2.16.10+2 (SemVer registry sync under T10)
