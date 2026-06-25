---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-24T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S08:T08 — Adopter documentation profile greenfield default (FR-141)

**Task ID:** E05:S08:T08  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-24  
**Last updated:** 2026-06-25 (✅ COMPLETE v0.5.8.8+1 — FR-141 git-native default)  
**Code:** E05S08T08

**Upstream:** [FR-141](../../../fbu/FR-141-adopter-documentation-profile-greenfield-default.md)  
**Related:** [FR-121](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) · [E05:S08:T07](T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md) · [ADR-026](../../../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

**Evidence:** [attempt-11 FB](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-adopter-documentation-profile-obsidian-default.md)

---

## Summary

FR-121 wave 4: change greenfield default `documentation_surfaces` from maintainer-shaped Docusaurus to **Obsidian/git-native adopter docs**; tighten `rc-docs-schema` for implementability; orchestrate phase 3½ scaffolding accordingly.

---

## Input

- [IPP-E05S08T08 — Adopter documentation profile greenfield default](../../../../implementation-cycles/IPP-E05S08T08-adopter-documentation-profile-greenfield-default.md)
- [FR-141](../../../fbu/FR-141-adopter-documentation-profile-greenfield-default.md)
- [FR-121](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [ADR-026](../../../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- [E05:S08:T07](T07-optional-obsidian-editor-profiles-greenfield-install-fr121.md)

---

## Scope

- `install_release_workflow.py` / `rw-config.yaml` default `documentation_surfaces`
- `validate_install_rc.py` `rc-docs-schema` row semantics
- INSTALL profile selection docs
- Optional Docusaurus opt-in path

---

## Acceptance criteria

- [x] **AC1:** Private adopter fresh install: default profile is git/Obsidian-oriented; no phantom `portal/` requirement.
- [x] **AC2:** `rc-docs-schema` blocks or fails when declared Docusaurus surface lacks allowlist/portal tree.
- [x] **AC3:** SBL attempt 11 class replay: Install RC PASS with coherent on-disk docs scaffold (git-native `documentation_surfaces`; pytest evidence).

---

## Deliverables

1. **Installer default** — `documentation_surfaces.adopter_public.sot: git` without `allowlist_ref`; `--adopter-public-sot` CLI flag.
2. **Install RC semantic validation** — `validate_install_rc.py` coherence checks for git vs Docusaurus profiles.
3. **Schema/docs** — `rw-config-schema.md`, `INSTALL_IN_YOUR_PROJECT.md`, installer quickstart, ADR-026 FR-141 note.
4. **Tests** — installer defaults, RC validator, greenfield orchestration forwarding.
5. **Greenfield sync** — mirror per P-GREENFIELD-SYNC.

---

## Associated FR

[FR-141](../../../fbu/FR-141-adopter-documentation-profile-greenfield-default.md)

---

## Version Anchor

**Forensic marker:** ✅ COMPLETE (**v0.5.8.8+1** — FR-141: git-native adopter docs greenfield default)

---

## References

- [IPP-E05S08T08 — Adopter documentation profile greenfield default](../../../../implementation-cycles/IPP-E05S08T08-adopter-documentation-profile-greenfield-default.md)
- [FR-141](../../../fbu/FR-141-adopter-documentation-profile-greenfield-default.md)
- [FR-121](../../../fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [ADR-026](../../../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
- [SBL attempt 11 feedback](../../../../../../adk-install-into-sbl/attempt-11/feedback-package/FB-ADK-adopter-documentation-profile-obsidian-default.md)
