---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-13T15:19:33Z
expires_at: null
housekeeping_policy: keep
---

# User Acceptance Testing (UAT) Report: fynd.deals greenfield + KMA L1 on ADK v0.4.1247

**Type:** User Acceptance Testing (UAT) / Feedback (FB)  
**ID:** FB-ADK-FYND-GREENFIELD-KMA-L1  
**Submitted:** 2026-07-13  
**Submitted By:** earlution / fynd.deals (RMS-Ltd adopter)  
**Priority:** MEDIUM  
**Status:** INTAKE  
**UAT Scope:** Greenfield orchestrator, lean vendor tree, kanban v4 fresh, KMA L1, Install RC, GitHub adopter sign-off, RW config/scripts path  

**GitHub Issue:** [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90)  
**Implementing Task:** [E06:S09:T46](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T46-fynd-deals-greenfield-kma-l1-fb-intake.md)  
**AI Dev Kit version (SemVer):** v0.4.1247 (`greenfield-install-v0.4.1247.tar.gz` → `vendor/ai-dev-kit/`)  
**Install error code (ADK-*):** N/A (install succeeded on retry)

**Related:** [UXR-029](UXR-029-adk-install-path-experiment.md) · [FR-079](FR-079-install-feedback-submission-path-and-governance.md) · [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [FR-135](FR-135-guided-install-orchestrator-zero-manual-steps.md) · [BR-115](BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md) · [BR-082](BR-082-rw-install-missing-pyyaml-preflight.md) · [BR-083](BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) · [BR-086](BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)

---

## Summary

Greenfield ADK v0.4.1247 install on **fynd.deals** reached Install RC **PASS** and KMA L1 synthesise, but first-pass orchestrator and sign-off hit reproducible friction (empty `packages/` precedence, PyYAML, pattern padding, bare `python` PATH, lean RW workflow YAML PARTIAL).

---

## UAT Context

**Project/Organization:** fynd.deals (RMS-Ltd adopter)  
**Project type:** Existing product repo — **Arm B** (legacy archived, greenfield ADK + KMA L1)  
**Component Tested:** Multiple — greenfield orchestrator, lean vendor tree (FR-110), kanban v4 fresh, KMA L1, Install RC, GitHub adopter sign-off, RW config/scripts path  
**Version Tested:** v0.4.1247  
**Testing Period:** 2026-07-09 to 2026-07-13  
**Team size:** 1 operator + agent sessions  
**Profile:** `adk-install/install-profile.yaml` (`adoption_path: greenfield`, `kanban_catalog: v4`, `install_rc_strict: true`)  
**Full FB pack (adopter repo):** `adk-install/feedback-package/FB-ADK-FYND-GREENFIELD-KMA-L1.md`

**UAT Methodology:**
- [x] Functional Testing
- [x] Integration Testing
- [x] Adoption Testing
- [x] End-to-End Testing

**Acceptance Criteria Tested:**
1. Vendor verify + greenfield orchestrator completes
2. Install RC strict PASS with receipt
3. Kanban v4 core (E01–E08) at configured `kanban_root`
4. GitHub adopter sign-off reaches READY
5. KMA L1 ingest → sign-off → synthesise without in-place legacy edits
6. Lean install leaves RW usable from vendor paths

---

## UAT Results

### Acceptance Criteria Results

**Criterion 1: Orchestrator completes** — PARTIAL → PASS (retry)  
- Evidence: first run failed (missing PyYAML + empty `packages/frameworks/` blocked vendor); retry PASS after `rm -rf packages` + `pip install 'pyyaml>=6.0'`

**Criterion 2: Install RC strict PASS** — PASS  
- Evidence: `logs/ai-dev-kit/install/guided-install-2026-07-09T151140Z.json` (9/10, 1 skipped)

**Criterion 3: Kanban v4 core scaffolded** — PASS  
- Evidence: `docs/kanban/` E01–E08; later KMA synthesise → E24–E26 heritage

**Criterion 4: GitHub sign-off READY** — PARTIAL → PASS (manual fixes)  
- Evidence: `logs/ai-dev-kit/install/signoff-report.json` initially failed BR-083/BR-086 (`story_doc_pattern` without `:02d`/`:03d`) and BR-082/BR-083 (`python` not found); fixed `rw-config` padding + venv `python`

**Criterion 5: KMA L1** — PASS  
- Evidence: ingest 13 epics / 31 stories → synthesise E24 (18) / E25 (3) / E26 (12); legacy not edited in place

**Criterion 6: Lean RW workflow YAML** — PARTIAL  
- Evidence: install reported PARTIAL (workflow YAML not at project root); day-to-day RW uses vendor `scripts_path` successfully

### Test Results Summary

**Total Criteria Tested:** 6  
**Passed (strict):** 3  
**Passed after workaround:** 2  
**Failed (hard stop):** 0  
**Partial remaining:** 1 (lean RW YAML at project root)

### What Worked as Expected

- Vendor SHA-256 + lean extract; `verify_vendor_tree.py` PASS
- Non-interactive orchestrator with sqlite release state + kanban-completed DB + comprehension scaffold
- Install RC strict PASS with durable JSON receipt
- KMA blind L1 DUPLICATE_EPIC_POLICY (keep E01–E08; domain E24+) without mashup
- Dual SemVer / `task_touch` baseline wiring post-install

### Issues Found (Failures)

| ID | Severity | Topic | Routing |
|----|----------|-------|---------|
| **F1** | HIGH | Empty project-root `packages/frameworks/` (`.gitkeep`) precedes vendor | **[BR-115](BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md)** / T46 |
| **F2** | MEDIUM | PyYAML missing before orchestrator | [BR-082](BR-082-rw-install-missing-pyyaml-preflight.md) family — re-exercise on greenfield path |
| **F3** | MEDIUM | RW install wrote unpadded `story_doc_pattern` | [BR-083](BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) / [BR-086](BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md) — regression on orchestrator path |
| **F4** | LOW–MEDIUM | Sign-off invokes bare `python` | BR-082 family |
| **F5** | LOW–MEDIUM | Lean RW workflow YAML PARTIAL | FR-110 semantics clarity (T46 triage) |

### Overall UAT Assessment

- [x] Mostly works (minor issues, non-critical criteria failed)

**UAT Recommendation:**
- [x] ACCEPT WITH CAVEATS - Usable but with known issues

---

## Specific Findings

### Functionality

Empty `packages/` placeholder is a silent trap on greenfield prep repos; orchestrator retry after layout fix is reliable.

### Usability

Diary + receipt pattern made UAT reproducible; recommend documenting “re-run GitHub sign-off after `rw-config` edits”.

### Documentation

Lean FR-110 (workflows stay in vendor) should be SUCCESS + guidance, not ambiguous PARTIAL, when vendor scripts path is configured.

---

## Use Case Details

**Primary Use Case:** Brownfield product adopting ADK via greenfield + archive legacy + KMA L1  
**Project Size:** Medium (legacy ~13 epics / 31 stories)  
**Duration of Use:** Install week 2026-07-09; RW/UKW through 2026-07-13

---

## Supporting Evidence

Full pack in adopter repo (fynd.deals):

- `adk-install/feedback-package/FB-ADK-FYND-GREENFIELD-KMA-L1.md`
- `adk-install/DIARY.md`
- `COMPREHENSION.md`
- `logs/ai-dev-kit/install/guided-install-2026-07-09T151140Z.json`
- `logs/ai-dev-kit/install/signoff-report.json`
- `adk-install/migration-proposal.md`

Related ADK items exercised by sign-off: BR-082, BR-083 (#15), BR-086 (#17), BR-084 (#16), BR-088 (#18)

---

## Impact Assessment

**Impact on Project:**
- [x] Medium - Moderate impact (workarounds available; Install RC PASS after retry)

**Impact on Team:**
- [x] Medium - Moderate team impact (first-pass friction + manual sign-off fixes)

---

## Recommendations

1. **HIGH:** Treat empty/placeholder `packages/frameworks/` as non-authoritative; warn and fall through to vendor → **BR-115**
2. **MEDIUM:** Emit zero-padded epic/story/task patterns from RW install mode C (BR-083 / BR-086 regression check)
3. **MEDIUM:** Phase 0 PyYAML + prefer `python3`/venv over bare `python` (BR-082 family)
4. **LOW–MEDIUM:** Clarify lean RW YAML semantics (SUCCESS + docs vs optional symlink)
5. **LOW:** Document re-run of GitHub sign-off after adopter `rw-config` fixes

---

## Related Work

**Related BRs:** [BR-115](BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md) (new); BR-082 / BR-083 / BR-086 (re-exercised)  
**Related FRs:** FR-110 (lean YAML PARTIAL semantics); FR-135 (orchestrator)  
**Related UXR:** [UXR-029](UXR-029-adk-install-path-experiment.md) — fynd Arm B evidence (programme table still lists fynd as Arm A control; this pack is Arm B)

---

## Intake Decision

**Intake Status:** INTAKE  
**Intake Date:** 2026-07-13  
**Intake By:** Agent (kanban intake)

**Decision Flow Results:**
- [x] Story Match Found: Epic 6, Story 09 → Task T46

**Assigned To:**
- Epic: E06
- Story: S09 — AI Dev Kit installation and adopter integration
- Task: E06:S09:T46

**Version:** v0.6.9.46+0 (RW -k kanban init / SemVer v0.4.1250)

---

## Notes

- Remaining fynd.deals board work (LICENSE, ADR, tests, security, quality) is **adopter bootstrap**, not install defects.
- Intake automation note from submitter: expect **manual** FB intake (FR/BR→kanban Actions disabled per submission guide).
