---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T32 — Planning: Zero-padded legacy epic detection (BR-108 / IPW)

**Host Task:** [`T32-detect-structure-zero-padded-epic-br108.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md) **(E06:S09:T32)**  
**Planning for:** [BR-108](../kanban/fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md)  
**Status:** Approved (MWF delivery — implementation authorized)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `_find_epic_document` detects `Epic-01.md` … `Epic-09.md` when directory is `Epic-01` … `Epic-09` | BR-108 AC1, task AC1 |
| RF2 | Epic number in report remains canonical integer (1–9), not padded string | BR-108 Expected |
| RF3 | Unit test with SBL-style legacy layout fixture (`Epic-0N/Epic-0N.md`) | BR-108 AC2, task AC2 |
| RF4 | No regression on unpadded `Epic-1.md` / existing detector behaviour | BR-108 AC3, task AC3 |
| RF5 | Greenfield mirror synced after `packages/frameworks/kanban/` change | FR-110 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Minimal diff — fix document lookup only; no installer API change | Task scope |
| RNF2 | Changelog: "Change implemented" until operator verifies on SBL | RW policy |

### 1.3 Invariants and boundaries

- **Root cause:** `_find_epic_document` builds glob `Epic-{int}.md` after `int('01')` → 1, missing on-disk `Epic-01.md`.
- **In scope:** `detect_existing_structure.py`, new unit test, greenfield sync, BR-108 status, kanban Step 7.
- **Out of scope:** Story filename padding (separate finding); migration agent (FR-127); ADR.

---

## 2. Specification

### 2.1 Goal

Eliminate false-negative epic-document detection for zero-padded legacy epic filenames so SBL-style kanban trees report `epic_document` for E01–E09.

### 2.2 Technical approach

Extend `_find_epic_document` to try unpadded and two-digit zero-padded basename patterns, then fall back to a filename regex that normalises `Epic-0*N` to the integer epic number.

### 2.3 Constraints

- Preserve existing `epic_number` integer semantics from directory parsing.
- Release via **`RW E06:S09:T32`** (first ship on task).

### 2.4 Status transition intent

- **Step 1:** `TODO` → `IN PROGRESS` on first implementation edit.
- **Final:** `COMPLETE` + `✅ COMPLETE (v{version})` when AC1–AC3 pass and RW completes.

### 2.5 ADR necessity decision (IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | New architectural pattern | N | Bugfix in existing detector |
| T2 | Cross-cutting policy change | N | Local script fix |
| T3 | Security boundary | N | N/A |
| T4 | Versioning schema change | N | N/A |
| T5 | New workflow contract | N | N/A |
| T6 | Breaking public API | N | Internal migration utility |
| T7 | Multi-repo adoption | N | N/A |

**Outcome:** EXEMPT (all T1–T7 = N).

---

## 3. Test Design

| Test ID | Requirement | Description |
| ------- | ----------- | ----------- |
| T1 | RF1, RF2 | Fixture: `epics/Epic-01/Epic-01.md`, `Epic-09/Epic-09.md` → `epic_document` set, `epic_number` 1 and 9 |
| T2 | RF4 | Fixture: `epics/Epic-1/Epic-1.md` → still detected |
| T3 | RF4 | Fixture: ai-dev-kit style lowercase `epic-06` if covered by directory pattern — directory `Epic-06` + `Epic-06.md` |

**Coverage:** `packages/frameworks/kanban/scripts/test_detect_existing_structure.py` (new).

---

## 4. Implementation Plan

1. Transition task **E06:S09:T32** status `TODO` → `IN PROGRESS`; update `Last updated`.
2. Patch `_find_epic_document` in `packages/frameworks/kanban/scripts/detect_existing_structure.py` with padded + regex fallback.
3. Add `test_detect_existing_structure.py` with SBL-style legacy fixture (T1–T2).
4. Run `pytest packages/frameworks/kanban/scripts/test_detect_existing_structure.py`.
5. Run `python scripts/sync_greenfield_install.py`; stage `greenfield-install/` mirror.
6. Reconcile task status → `COMPLETE` with forensic marker after RW Step 7.

---

## 5. Documentation Deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D1 | `docs/implementation-cycles/IPP-E06S09T32-*.md` | CREATE | This IPP |
| D2 | Task doc T32 | UPDATE | IPP link, status, version marker |
| D3 | `BR-108` | UPDATE | Fix verification status post-RW |
| D4 | `packages/frameworks/kanban/scripts/README.md` | NONE | Behaviour unchanged at CLI level |

---

## 6. Documentation Housing

| Doc ID | Target path | Publication |
| ------ | ----------- | ----------- |
| D1 | `docs/implementation-cycles/IPP-E06S09T32-detect-structure-zero-padded-epic-br108.md` | NOT_APPLICABLE (maintainer) |
| D2 | `docs/kanban/epics/epic-06/story-09-.../T32-*.md` | NOT_APPLICABLE |
| D3 | `docs/kanban/fbu/BR-108-*.md` | NOT_APPLICABLE |

---

## 7. Success / Verification Criteria

- [ ] AC1: `Epic-01.md`–`Epic-09.md` detected (`pytest` T1).
- [ ] AC2: Unit test passes in `packages/frameworks/kanban/scripts/`.
- [ ] AC3: Unpadded regression test passes (T2).
- [ ] `python scripts/sync_greenfield_install.py` — no drift.
- [ ] **`RW E06:S09:T32`** local-complete.

---

## References

- [BR-108](../kanban/fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md)
- [E06:S09:T32](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md)
- [E06:S09:T26](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)
