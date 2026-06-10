---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: README Python prerequisites contradict 3.11 policy

**Type:** User Experience Research (UXR)  
**ID:** UXR-026  
**Submitted:** 2026-06-10  
**Submitted By:** User  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Status:** IMPLEMENTED (v0.8.3.20+1 — E08:S03:T20 MWF delivery)  
**Version:** v0.8.3.20+1  
**Implementing Task:** [E08:S03:T20](../epics/epic-08/story-03-automation-scripts/T20-readme-python-prerequisites-uxr026.md)  
**Planning package:** [IPP-E08S03T20](../../implementation-cycles/IPP-E08S03T20-readme-python-prerequisites-uxr026.md)

**Related:** [FR-104](FR-104-python-minimum-version-policy-alignment.md) · [BR-077](BR-077-documented-python-38-contradicts-repo-310-requirement.md) · [E08:S03:T05](../epics/epic-08/story-03-automation-scripts/T05-python-minimum-version-fr104-br077.md) · [README.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/README.md#roadmap)

---

## Summary

The public **README** on GitHub advertises **Python 3.11+** in the badge and **Built With** section, but **Getting Started → Prerequisites** still says **Python 3.8 or newer** — contradicting the repo’s declared **3.11** floor (`setup.py` `python_requires>=3.11`, `.python-version`, CI).

---

## Research Objective

**Primary question:** Does the first-screen README give adopters a trustworthy, single Python minimum version?

**Context:** User flagged the inconsistency while reviewing [README #roadmap](https://github.com/RMS-Ltd/ai-dev-kit#roadmap) (anchor lands on Getting Started / Prerequisites on the rendered page).

---

## Methodology

**Research Method:** Maintainer / adopter spot-check — compare README sections and packaging metadata.  
**Artifacts reviewed:**

| Surface | States |
|--------|--------|
| README badge | `python-3.11+` |
| README **Built With** | Python 3.11+ |
| README **Prerequisites** | **Python 3.8 or newer** ← mismatch |
| `setup.py` | `python_requires=">=3.11"` |
| `.python-version` | `3.11` |
| CI (`tests.yml`, `framework-release.yml`) | Python 3.11 |

---

## Key Findings

### Finding 1: Same-page contradiction erodes trust (Severity: Medium)

A reader scrolling from **Built With** to **Prerequisites** sees two different floors in adjacent sections. The lower number (3.8) is the actionable install prerequisite — likely to be followed.

### Finding 2: Regression from FR-104 / E08:S03:T05 closure (Severity: Low)

[FR-104](FR-104-python-minimum-version-policy-alignment.md) and [E08:S03:T05](../epics/epic-08/story-03-automation-scripts/T05-python-minimum-version-fr104-br077.md) marked README prerequisites aligned at **v0.8.3.5+2**, but the **Prerequisites** bullet was not updated (or was reintroduced). [BR-077](BR-077-documented-python-38-contradicts-repo-310-requirement.md) may have been closed prematurely for README scope.

### Finding 3: Residual “3.8+” may exist outside README (Severity: Low)

Grep shows at least [`packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`](../../packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md) still mentions **Python 3.8+** — sweep recommended in delivery task.

---

## User Pain Points

- Adopters may install Python 3.8–3.10 and hit obscure failures despite the project policy.
- Public GitHub landing page undermines confidence in documentation hygiene.
- Re-opened confusion after BR-077 was marked RESOLVED.

---

## Recommendations

1. **README Prerequisites:** Change to **Python 3.11 or newer** (match badge, Built With, `setup.py`).
2. **Grep sweep:** Fix remaining canonical “3.8+” callouts (install guides, framework package docs); exclude changelog archive.
3. **Verification:** Add or extend a lightweight doc/policy check so FR-104 acceptance cannot pass with split README floors (optional follow-on).

---

## Acceptance Criteria (delivery task)

- [x] README **Prerequisites** states **Python 3.11+** (or “3.11 or newer”).
- [x] No contradictory Python version strings on README (badge, Built With, Prerequisites consistent).
- [x] Canonical install paths grep-clean for stale “3.8+” (per FR-104 AC3 scope).
- [x] UXR-026 ↔ E08:S03:T20 bidirectional links; board row updated on RW.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-10  
**Decision:** Follow-on to **E08:S03** (same policy lane as FR-104) — new task **E08:S03:T20**.

**Assigned To:**

- Epic: E08 — Tooling & Automation
- Story: E08:S03 — Automation Scripts
- Task: E08:S03:T20 — README Python prerequisites alignment (UXR-026)

---

## References

- [README — Getting Started / Prerequisites](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/README.md#getting-started)
- [FR-104 — Python minimum version policy alignment](FR-104-python-minimum-version-policy-alignment.md)
- [BR-077 — Documented Python 3.8+ contradicts repo requirement](BR-077-documented-python-38-contradicts-repo-310-requirement.md)
