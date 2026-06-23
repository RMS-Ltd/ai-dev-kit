---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E21:S01:T07 — Planning: FR-006 Phase 1 E2E tests (IPW)

**Host Task:** [`T07-test-ukus-english-selection-and-content-generation.md`](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T07-test-ukus-english-selection-and-content-generation.md) **(E21:S01:T07)**  
**Planning for:** [FR-006 Phase 1](../project-management/kanban/fbu/FR-006-localization-language-selection-uk-us-english.md) · [IPP-E21S01T06](IPP-E21S01T06-content-generation-locale-wiring.md)  
**Status:** Complete — released `v0.21.1.7+1` (`RW E21:S01:T07 --art`)  
**Branch:** `epic/21-internationalisation-localisation`

---

## Scope decision

**Test-only.** Consolidated E2E pytest across setup paths + content generation. Closes E21:S01 (last task).

---

## 1. Requirements (summary)

| ID | Requirement |
| -- | ----------- |
| RF1 | UK/US selection persists across RW + CLI paths |
| RF2 | Changelog reflects configured language |
| RF3 | All 8 intake template keys locale-aware |
| RF4 | Default en-GB |
| RF5 | `--force` re-selection |
| RF6 | T01 static contract (Step 0 + example config) |
| RF7 | Test matrix documentation |
| RF8 | Full FR-006 regression bundle |

---

## 2. Specification

New module: [`tests/test_fr006_phase1_e2e_localisation.py`](../../tests/test_fr006_phase1_e2e_localisation.py) (E1–E8).

**ADR:** EXEMPT.

---

## 3. Test design (full matrix)

| Layer | Module | IDs |
| ----- | ------ | --- |
| Corpus | `test_locale_content_manifest.py` | T1–T7 |
| Read/resolve | `test_localisation_config_read_resolve.py` | T1–T10 |
| RW selection | `test_install_release_workflow_localisation.py` | T1–T9 |
| CLI init | `test_commands.py` (`TestInitCommand`) | T1–T8 |
| Content wiring | `test_content_generation_locale_wiring.py` | T1–T10 |
| **E2E** | `test_fr006_phase1_e2e_localisation.py` | E1–E8 |

**Regression command:**

```bash
pytest tests/test_fr006_phase1_e2e_localisation.py \
  tests/test_install_release_workflow_localisation.py \
  tests/test_localisation_config_read_resolve.py \
  tests/test_content_generation_locale_wiring.py \
  tests/test_locale_content_manifest.py \
  tests/test_commands.py -k "localisation or en_gb or en_us or language or init_non_interactive or init_language"
```

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T07 `IN PROGRESS` |
| 2 | IPP + task doc link |
| 3 | E2E tests E1–E8 |
| 4 | Test matrix README + post-template guide hygiene |
| 5 | Full regression pytest |
| 6 | `RW E21:S01:T07 --art` → `v0.21.1.7+1` |
| **N** | T07 + E21:S01 story `COMPLETE` |

---

## 5–7. Deliverables / success / handoff

- E1–E8 green; test matrix in kanban locales README
- E21:S01 all T01–T07 COMPLETE — Phase 1 host story closure
- Post-T07: E21:S02 internationalisation infrastructure (Phase 2)

---

## References

- [localisation_config.py](../../packages/frameworks/workflow-mgt/scripts/localisation_config.py)
- [framework-dependency-post-template-setup-guide.md](../../docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md)
