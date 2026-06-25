---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-24T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-141: Adopter documentation profile — Obsidian/git greenfield default (not Docusaurus)

**Type:** Feature Request (FR)  
**ID:** FR-141  
**Submitted:** 2026-06-24  
**Submitted By:** Maintainer (SBL attempt 11 intake / #85)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** COMPLETE  
**Implementing Task:** [E05:S08:T08](../epics/epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md)  
**Evidence:** [FB mirror](../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-adopter-documentation-profile-obsidian-default.md) · maintainer intake @ **v0.6.9.26+7** · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) · **v0.5.8.8+1** @ E05:S08:T08

**Related:** [FR-121](FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) · [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) · [E05:S08:T07](../epics/epic-05/story-08-knowledge-base/T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md) · [FR-080](FR-080-greenfield-installation-process.md) · [attempt-09 FB](../../../adk-install-into-sbl/attempt-09/FB-ADK-canonical-maintainer-documentation-schema.md)

---

## Summary

Greenfield RW install (mode C) defaults `documentation_surfaces.adopter_public` to **Docusaurus** with `allowlist_ref: portal/docusaurus.config.js` while private adopters (e.g. Starborn Legacy) have **no** `portal/` tree. Install RC **`rc-docs-schema` PASS** checks key presence only — false precision that asserts a publishing stack the adopter did not receive.

**Ask:** Default **application** install profile to **Obsidian-oriented, in-repo Markdown** (git SoT); tighten `rc-docs-schema` for implementability; optional Docusaurus profile for adopters who opt in.

---

## Problem statement

| Declared (install) | On disk (SBL) | RC |
|--------------------|---------------|-----|
| `adopter_public.sot: docusaurus` | No `portal/` | PASS |
| `allowlist_ref: portal/docusaurus.config.js` | Missing | not validated |
| `maintainer_editor_profile: none` | No `.obsidian/` scaffold | not validated |

FR-121 wave 3 shipped **optional** Obsidian editor profiles but left **Docusaurus** as the default `adopter_public` surface — wrong for private repos without a publish pipeline.

---

## Requirements

### Functional

- [x] **FR-141-F1:** Greenfield default `documentation_surfaces` uses **git-native adopter docs** profile (not Docusaurus) for private/application installs.
- [x] **FR-141-F2:** `rc-docs-schema` validates declared surface is **implementable** (or explicitly `deferred` with documented opt-in path).
- [x] **FR-141-F3:** Install orchestrator phase 3½ scaffolds coherent docs topology (authority, entry points) matching declared profile.
- [x] **FR-141-F4:** Docusaurus profile remains **opt-in** for adopters with `portal/` intent.

### Non-functional

- [x] **FR-141-NF1:** No breaking change for ai-dev-kit maintainer repo (explicit maintainer profile separate from adopter default).
- [x] **FR-141-NF2:** Align with [ADR-026](../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) git SoT principles.

---

## Acceptance criteria

- [x] SBL-class private adopter: fresh install emits Obsidian/git-default `documentation_surfaces`; `rc-docs-schema` PASS with on-disk scaffolding.
- [x] Install RC fails (or warns blocking) when `adopter_public: docusaurus` declared without `portal/` or allowlist ref.
- [x] INSTALL documents profile choice and migration path to Docusaurus when needed.
