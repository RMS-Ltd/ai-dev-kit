---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 20: README Python prerequisites alignment (UXR-026)

**Task ID:** E08:S03:T20  
**Status:** ✅ COMPLETE (v0.8.3.20+1)  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10 (v0.8.3.20+1 – MWF delivery)  
**Version:** v0.8.3.20+1  
**Version Anchor:** v0.8.3.20+1  
**Code:** E08S03T20

**Upstream:** [UXR-026 — README Python prerequisites contradict 3.11 policy](../../../fr-br/UXR-026-readme-python-prerequisites-contradicts-311-policy.md)  
**Planning:** [IPP-E08S03T20](../../../../implementation-cycles/IPP-E08S03T20-readme-python-prerequisites-uxr026.md)  
**Related:** [FR-104](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md) · [BR-077](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md) · [E08:S03:T05](T05-python-minimum-version-fr104-br077.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Fix **README** and any remaining canonical install docs that still advertise **Python 3.8+** after the **3.11** policy delivered in **E08:S03:T05**. Restore single-version messaging on the public GitHub landing page.

---

## Problem

| README section | Current |
|----------------|---------|
| Badge / Built With | Python **3.11+** |
| Prerequisites | Python **3.8** or newer ← **wrong** |

Repo policy: `setup.py` `python_requires>=3.11`, `.python-version` = `3.11`, CI on 3.11.

---

## Input

- [UXR-026](../../../fr-br/UXR-026-readme-python-prerequisites-contradicts-311-policy.md)
- [IPP-E08S03T20](../../../../implementation-cycles/IPP-E08S03T20-readme-python-prerequisites-uxr026.md)
- [FR-104](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md) · [BR-077](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)
- [`README.md`](../../../../../README.md) · [`PACKAGE_INSTALLATION_GUIDE.md`](../../../../../packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md)

---

## Deliverable

1. Update README **Prerequisites** to **Python 3.11 or newer** (consistent with badge and Built With).
2. Grep sweep for stale **3.8+** in canonical install paths (e.g. `PACKAGE_INSTALLATION_GUIDE.md`, `INSTALL_IN_YOUR_PROJECT.md`, user-docs install guides); fix or scope with CLI-only footnote per FR-104.
3. Greenfield mirror sync if framework package docs change (FR-110).
4. On RW: reconcile UXR-026 status; note BR-077 README regression if applicable.

---

## Acceptance Criteria

- [x] **AC1:** README Prerequisites matches **3.11+** policy; no intra-README contradiction.
- [x] **AC2:** Grep for `3.8` / `3.8+` in canonical install docs resolved (changelog archive excluded).
- [x] **AC3:** UXR-026 marked IMPLEMENTED on delivery RW; bidirectional links verified.

---

## Associated User Experience Research

- [UXR-026 — README Python prerequisites contradict 3.11 policy](../../../fr-br/UXR-026-readme-python-prerequisites-contradicts-311-policy.md) (primary)

---

## References

- [FR-104 — Python minimum version policy alignment](../../../fr-br/FR-104-python-minimum-version-policy-alignment.md)
- [BR-077 — Documented Python 3.8+ contradicts repo requirement](../../../fr-br/BR-077-documented-python-38-contradicts-repo-310-requirement.md)
- [E08:S03:T05 — Python minimum version policy alignment](T05-python-minimum-version-fr104-br077.md)
