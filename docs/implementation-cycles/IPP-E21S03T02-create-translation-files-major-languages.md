---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S03:T02 — Planning: Create translation files for major languages (IPW)

**Host Task:** [`T02-create-translation-files-for-major-languages.md`](../project-management/kanban/epics/epic-21/story-03-translation-and-localisation/T02-create-translation-files-for-major-languages.md) **(E21:S03:T02)**  
**Planning for:** [FR-006 Phase 3+](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S03T01](IPP-E21S03T01-identify-extract-translatable-content.md)  
**Status:** Complete — released `v0.21.3.2+1` (`RW E21:S03:T02 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

**Scope:** Scaffold only — en-GB interim copy; linguistic translation in E21:S05–S07.

---

## 1. Requirements

RF1–RF7: Physical locale trees for 9 codes; manifest registration; rollout matrix; registry update; greenfield sync; fallback-safe scaffold.

## 2. Specification

Implements ADR-024 §6. ADR outcome: `ALREADY_COVERED`.

## 3. Test design

`tests/test_locale_scaffold_major_languages.py`; extended `test_locale_structure_v2.py`; `pytest -m fr006`.

## 4. Implementation plan

Scaffold script → 9 locales × 2 packages → rollout matrix → tests → `RW E21:S03:T02 --art`.

## 5. Documentation deliverables

- [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md)
- Updated registry + inventory

## 7. Success criteria

- [x] All 9 locale trees on disk
- [x] Manifest blocks registered
- [x] Rollout matrix published
- [x] Registry updated
- [x] Tests pass; fr006 green
- [x] RW complete

---

## References

- [locale-rollout-matrix.md](../governance/standards/locale-rollout-matrix.md)
- [scaffold_locale_trees.py](../../packages/frameworks/workflow-mgt/scripts/scaffold_locale_trees.py)
