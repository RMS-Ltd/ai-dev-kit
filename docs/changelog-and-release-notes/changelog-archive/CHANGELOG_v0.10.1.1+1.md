# Release v0.10.1.1+1 — E10:S01:T01 Expectations baseline for Document Lifecycle package

**Release Date:** 2026-06-06 14:45:56 UTC  
**Epic:** 10 | **Story:** 01 | **Task:** 01  
**SemVer:** v0.4.1005+1  
**Branch:** `epic/10-doc-lifecycle-framework`  
**RW mode:** `--art`

---

## Summary

Wave 2A gate release for **E10:S01:T01** — authoritative expectations baseline for the Document Lifecycle framework package (`packages/frameworks/doc-lifecycle/`). Companion artefact created; task doc fleshed; V1–V8 verification passed. Unblocks Wave 2B (T02 ∥ T03 ∥ T04).

---

## Change implemented

### Expectations baseline (E10:S01:T01)

- Created companion [`expectations-baseline.md`](../../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md) with six baseline sections per IPP §2.2
- Core operating principles: modularity, copy pattern, 10/10 independence, customization boundaries
- Expected lifecycle behaviors: classification, TTL, reference-aware cleanup, protection rules, agent requirements
- Integration expectations: Kanban + Workflow Management (optional standalone)
- Package composition: 13 on-disk files + documented-future workflows/scripts noted
- Policy salience docs included in baseline scope
- V1–V8 verification evidence recorded in companion footer

### Task doc (D-U1)

- Fleshed Scope, Input, Deliverable, Acceptance Criteria, References
- Bidirectional links: task ↔ IPP ↔ companion baseline
- Status reconciled to COMPLETE with forensic marker `v0.10.1.1+1`

### Version

- Internal: `0.10.1.7+2` → `0.10.1.1+1` (`--art` adoption)
- SemVer (task_touch): `v0.4.1005+1`

---

## Files touched

- `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md` (CREATE)
- `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T01-establish-expectations-baseline-for-document-lifecycle-packa.md` (UPDATE)
- `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md` (UPDATE)
- `docs/project-management/kanban/epics/epic-10/epic-10.md` (UPDATE)
- `docs/project-management/kanban/kboard.md` (UPDATE)
- `src/ai_dev_kit/version.py` (UPDATE)
- `semver-registry.yaml` (UPDATE)
- `CHANGELOG.md` (UPDATE)
- `README.md` (UPDATE)

---

## Verification

- V1–V8 checklist: all PASS (see companion baseline footer)
- No package code edits (`packages/frameworks/doc-lifecycle/` unchanged)
- No inventory gap tables (T02 scope)
- No repo frontmatter audit (T03 scope)
