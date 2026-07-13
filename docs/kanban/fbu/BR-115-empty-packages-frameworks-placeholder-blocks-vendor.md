---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-13T15:19:33Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-115: Empty placeholder `packages/frameworks/` blocks vendor fallthrough

**Type:** Bug Report (BR)  
**Bug ID:** BR-115  
**Submitted:** 2026-07-13  
**Submitted By:** earlution / fynd.deals UAT ([#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90))  
**Priority:** HIGH  
**Severity:** HIGH (hard-stop on first greenfield orchestrator run until layout workaround)  
**Status:** OPEN  
**GitHub Issue:** [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90)  
**Implementing Task:** [E06:S09:T46](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T46-fynd-deals-greenfield-kma-l1-fb-intake.md)  
**Source FB:** [FB-ADK-FYND-GREENFIELD-KMA-L1](FB-ADK-FYND-GREENFIELD-KMA-L1.md)  
**Created:** 2026-07-13  
**Last updated:** 2026-07-13 (RW -k E06:S09:T46 — **v0.6.9.46+0** / SemVer v0.4.1250)  
**Version:** v0.6.9.46+0  
**Kanban init:** v0.6.9.46+0  

**Related:** [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [FR-135](FR-135-guided-install-orchestrator-zero-manual-steps.md) · [FR-080](FR-080-greenfield-installation-process.md) · [BR-112](BR-112-greenfield-orchestrator-install-rc-gaps.md)

---

## Summary

Greenfield orchestrator treats an empty project-root `packages/frameworks/` tree (e.g. `.gitkeep` placeholder) as authoritative and fails instead of falling through to `vendor/ai-dev-kit/`.

---

## Description

**What should happen:** When project `packages/frameworks/` exists but has no usable framework packages (empty dir / placeholder only), install path resolution should warn and fall through to the lean vendor tree.

**What actually happens:** First orchestrator run fails until the operator removes `packages/` (`rm -rf packages`), then retry succeeds against vendor.

**When:** fynd.deals Arm B greenfield + KMA L1 on ADK **v0.4.1247** (2026-07-09).

**Who is affected:** Adopters preparing a repo with an empty `packages/` scaffold before ADK install (common greenfield-prep pattern).

---

## Affected Component

**Primary Component:** Greenfield orchestrator / vendor package resolution (lean FR-110 path)  
**Affected Areas:**
- [x] Integration/External Service (install tooling)
- [x] Documentation
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Other: path precedence / vendor fallthrough

**Root Cause (if known):** Project-root `packages/` presence wins over vendor even when the tree is non-authoritative (empty / `.gitkeep` only). Not covered by BR-082 / BR-083 / BR-086.

---

## Steps to Reproduce

1. Prepare adopter repo with empty `packages/frameworks/` (or `.gitkeep` only).
2. Extract ADK lean vendor to `vendor/ai-dev-kit/` (v0.4.1247).
3. Run greenfield orchestrator / guided install with vendor verify.
4. **Expected:** Warn that project `packages/` is empty/placeholder; use `vendor/ai-dev-kit/`.
5. **Actual:** Orchestrator fails until `packages/` is removed.

---

## Environment

**Environment:** Development (adopter product repo)  
**Version:** ADK SemVer v0.4.1247  
**OS:** macOS (fynd.deals operator session)

---

## Impact

**User Impact:**
- [x] High - Major functionality broken (first-pass hard stop; workaround exists)

**Business Impact:** Blocks greenfield + KMA L1 first attempt on prep repos that already have a `packages/` placeholder; inflates Install RC diary with retry noise.

**Workaround:**

```bash
rm -rf packages
# then re-run orchestrator against vendor/
```

---

## Acceptance Criteria (Fix Requirements)

- [ ] **AC1:** Empty or placeholder-only `packages/frameworks/` is detected as non-authoritative.
- [ ] **AC2:** Install path resolution warns and falls through to `vendor/ai-dev-kit/` (or configured vendor root).
- [ ] **AC3:** Regression test covers empty-`packages/` + populated vendor (no hard-stop).
- [ ] **AC4:** Operator docs / Install RC guidance mention the placeholder trap and expected fallthrough.

**Verification Method:**
- [x] Test suite execution
- [x] Manual testing (fynd replay or fixture)

**Fix Verification Status:**
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

### Fix Attempts

_(none yet — intake 2026-07-13)_

---

## Related Work

- [FB-ADK-FYND-GREENFIELD-KMA-L1](FB-ADK-FYND-GREENFIELD-KMA-L1.md) — F1  
- [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90)  
- [E06:S09:T46](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T46-fynd-deals-greenfield-kma-l1-fb-intake.md)
