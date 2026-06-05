---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T06 — Planning: validate_version_bump story auto-detection (IPW)

**Host Task:** [`story-01-rw-agent-execution-and-docs.md`](../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md) **(E02:S01:T06)**  
**Planning for:** [BR-001](../project-management/kanban/fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md)  
**Status:** Approved  
**Functional release target:** `v0.2.1.6+{N}` via `RW E02:S01:T06 --art` (BUILD +1)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `find_story_file()` must resolve Epic/Story from file path before reading content | BR-001 AC1 |
| RF2 | Code field (`**Code:** E{epic}S{story}`) is secondary fallback when path extraction is ambiguous | BR-001 AC2 |
| RF3 | Content must not use first `Epic N` occurrence (References cross-links must not poison detection) | BR-001 root cause |
| RF4 | Legacy lowercase paths `epic-{NN}/stories/story-{NNN}-*` must resolve correctly | BR-001 steps to reproduce |
| RF5 | Standard ai-dev-kit paths `epic-{NN}/story-{NN}-*` continue to work | Regression guard |
| RF6 | Pytest coverage for path, Code-field, and References-poison scenarios | BR-001 verification |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | No change to RW Step 9 validator invocation contract |
| RNF2 | Idempotent: same inputs → same story file path |
| RNF3 | Framework package only — no adopter config schema change |

### 1.3 Invariants and boundaries

- **In scope:** `extract_epic_story_from_path()`, `find_story_file()`, pytest, BR-001 fix-attempt history, task doc wiring.
- **Out of scope:** BR-002 changelog ordering (separate wave if needed); broad kanban path migration.

---

## 2. Specification

### 2.1 Goal

Restore reliable Epic/Story auto-detection in `validate_version_bump.py` so RW Step 9 passes without `--story-file` when Story files reference other Epics in References.

### 2.2 Detection priority (canonical)

1. **Path** — `epic-{N}/story-{NN}`, `epic-{N}/stories/story-{NNN}`, `Epic-{N}/Story-{NNN}`, `Epic-{N}/stories/Story-{NNN}`
2. **Code field** — `**Code:** E{epic}S{story}`
3. **No content-based Epic regex** — never scan body/References for `Epic N`

### 2.3 Constraints

- Preserve existing `fr-repo` disambiguation when multiple path matches exist.
- Fallback glob patterns must include lowercase kanban layouts.

### 2.4 Status transition intent

- **Current:** IN PROGRESS (REOPENED)
- **→ COMPLETE:** When RF1–RF6 evidenced by pytest + RW release

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single obvious fix: path-first detection |
| T2 | Reversibility | N | Localized validator change |
| T3 | Blast radius | N | One script + tests |
| T4 | Precedent | N | Restores documented three-tier strategy |
| T5 | Constraint trade-off | N | No trade-off among governance axes |
| T6 | Governance contract | N | Bug fix within existing validator contract |
| T7 | Supersedes | N | Aligns with BR-001 attempt 1 intent |

**Outcome:** `EXEMPT` — task-scoped bug fix; no new ADR.

---

## 3. Test design

| ID | Requirement | Test | Expected |
| -- | ----------- | ---- | -------- |
| T1 | RF1, RF4 | `test_extract_epic_story_from_path_legacy_stories_subdir` | `(3, 3)` from `epic-03/stories/story-003-*.md` |
| T2 | RF1, RF5 | `test_extract_epic_story_from_path_lowercase_flat` | `(2, 1)` from `epic-02/story-01-*.md` |
| T3 | RF3, RF4 | `test_find_story_file_ignores_references_epic_mismatch` | Returns correct file despite `Epic 4` in References |
| T4 | RF2 | `test_find_story_file_code_field_fallback` | Resolves via `**Code:** E3S03` when path is non-standard |
| T5 | RF6 | `test_find_story_file_no_match_returns_none` | `None` for non-existent E/S |
| T6 | RNF2 | Existing `test_validate_version_bump_*` suite | All pass (regression) |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Confirm `IN PROGRESS`; update `Last updated` | Task doc §T06 |
| 2 | Add failing tests T1–T5 (Red) | `test_validate_version_bump.py` |
| 3 | Extend `extract_epic_story_from_path()` patterns (legacy `stories/` + mixed case) | `validate_version_bump.py` |
| 4 | Add lowercase fallback globs; remove content Epic regex from `find_story_file()` | `validate_version_bump.py` |
| 5 | Run pytest — all green (Green) | Test evidence |
| 6 | Update BR-001 fix-attempt history | `BR-001-*.md` |
| 7 | `RW E02:S01:T06 --art` → functional release | Version, changelog, kanban |
| **8** | **[MANDATORY]** Reconcile T06 → `COMPLETE` + forensic marker | Task doc, kboard, BR-001 |

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Scope |
| ------ | ---- | ------ | ----- |
| D-IPP | `docs/implementation-cycles/IPP-E02S01T06-validate-version-bump-story-detection-br001.md` | CREATE | This plan |
| D-TASK | `story-01-rw-agent-execution-and-docs.md` §T06 | UPDATE | IPP link, BR-001 scope, status |
| D-BR | `BR-001-validate-version-bump-epic-story-detection-bug.md` | UPDATE | Fix attempt #2 |
| D-TRBL | `integration-troubleshooting-guide.md` Issue 7 | NONE | Already documents path-first strategy |

---

## 6. Documentation housing

| Doc ID | Target path | Publication |
| ------ | ----------- | ----------- |
| D-IPP | `docs/implementation-cycles/` | NOT_APPLICABLE (planning artifact) |
| D-BR | `docs/project-management/kanban/fr-br/` | NOT_APPLICABLE |

---

## 7. Success / verification criteria

- [ ] Tests T1–T6 pass
- [ ] `find_story_file(config, 3, 3)` resolves epic-03 story without `--story-file`
- [ ] BR-001 acceptance criteria checked
- [ ] `RW E02:S01:T06 --art` completes with pushed tags

---

## References

- [BR-001](../project-management/kanban/fr-br/BR-001-validate-version-bump-epic-story-detection-bug.md)
- [BR-002](../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md) (out of scope this wave)
- `packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py`
