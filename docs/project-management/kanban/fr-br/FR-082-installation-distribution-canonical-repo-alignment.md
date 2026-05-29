---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-082: Installation distribution canonical repository alignment

**Type:** Feature Request (FR)  
**ID:** FR-082  
**Submitted:** 2026-04-19  
**Submitted By:** Maintainer (design session)  
**Priority:** MEDIUM  
**Severity:** LOW  
**Status:** OPEN

**Implementing Task:** [E6:S09:T03](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082.md)

---

## Summary

Align **installation scripts, defaults, and documentation examples** with the **canonical GitHub repository** for AI Dev Kit (`earlution/ai-dev-kit`) so adopters do not download from incorrect or placeholder `owner/repo` values.

---

## Problem Statement

`install_package_from_release.py` and some package installation docs use **placeholder** or **incorrect** GitHub coordinates (e.g. defaults or examples pointing at `ai-dev-kit/ai-dev-kit`). That creates **silent wrong-target** risk for automated installs and undermines trust in the greenfield path ([FR-080](./FR-080-greenfield-installation-process.md)).

---

## Requirements

### Functional Requirements

- [ ] **FR-082-F1:** Set **default `--repo`** (and any equivalent config) on `install_package_from_release.py` to the **canonical** public repository, or require an **explicit** `--repo` with no unsafe default (decision recorded in task).
- [ ] **FR-082-F2:** Audit and fix **PACKAGE_INSTALLATION_GUIDE** and related user-facing URLs so release examples resolve to **real** release locations for this monorepo.
- [ ] **FR-082-F3:** Align **cross-references** in `INSTALL_IN_YOUR_PROJECT.md` / quick starts so `python install_package_from_release.py` examples use working defaults or copy-paste-safe explicit `--repo earlution/ai-dev-kit`.

### Non-Functional Requirements

- [ ] **FR-082-NF1:** Changes must not break adopters who intentionally mirror to a fork (override path remains documented).

---

## Acceptance Criteria

- A clean download using documented default flags targets the **intended** public repo (or fails fast with a clear message if no default is chosen).
- Guide examples do not contain **known-bad** org/repo URLs.
- Task documents any **backward-compatibility** note if default behavior changes.

---

## Scope Analysis

**Problem Domain:** Tooling hygiene, documentation accuracy  
**Affected Areas:**

- [x] `packages/frameworks/workflow mgt/scripts/install_package_from_release.py`  
- [x] `packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`  
- [x] `INSTALL_IN_YOUR_PROJECT.md` (as needed)

**Estimated Complexity:**

- [x] Simple (1-3 days)
- [ ] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Related

- [FR-080](./FR-080-greenfield-installation-process.md) — Greenfield process (consumer of correct defaults)  
- [PACKAGE_INSTALLATION_GUIDE.md](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/docs/PACKAGE_INSTALLATION_GUIDE.md)  
