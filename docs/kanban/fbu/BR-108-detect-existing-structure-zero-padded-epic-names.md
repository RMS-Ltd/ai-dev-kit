---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-108: `detect_existing_structure.py` Fails on Zero-Padded Legacy Epic Filenames

**Bug ID:** BR-108  
**Priority:** MEDIUM  
**Severity:** MEDIUM (migration detection false negative)  
**Status:** IN PROGRESS (fix shipped v0.6.9.32+1 — operator SBL verification pending)  
**Source finding:** **F23** (Starborn Legacy install attempt 06)  
**Related:** [FR-127](FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) · [UXR-017](UXR-017-kanban-epic-story-path-lowercase-naming.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)  
**Implementing Task:** [E06:S09:T32](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md)  
**SBL evidence:** `adk-install-into-sbl/attempt-06/feedback-package/kanban-migration-experiment-report.md` · `feedback-payload.json` (`requested_improvements[2]`)

---

## Summary

`detect_existing_structure.py` does not recognise legacy epic documents named `Epic-01.md` … `Epic-09.md`. Normalisation via `int('01')` → `1` causes the detector to look for `epic-1*` paths that do not match on-disk `epic-01` layout — epic docs for E01–E09 go undetected.

---

## Observed (attempt 06 migration experiment)

- Epics detected: 19/19 (directory level)
- Stories detected: **0/80+** (naming mismatch + padding bug)
- Legacy files use `Epic-01.md` in overview dirs; detector expects unpadded or different patterns

---

## Expected

Detector matches zero-padded legacy epic filenames and normalises to canonical `epic-{nn}` for comparison without false negatives.

---

## Acceptance criteria

- [x] `Epic-01.md` … `Epic-09.md` detected and mapped to epic 1–9. (v0.6.9.32+1 — unit tests)
- [x] Unit test with SBL-style legacy layout fixture. (v0.6.9.32+1)
- [x] No regression on unpadded `Epic-1.md` / lowercase `epic-01` layouts. (v0.6.9.32+1)

**Fix attempt:** [E06:S09:T32](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md) @ `v0.6.9.32+1` — awaiting operator SBL re-run for end-to-end verification.
