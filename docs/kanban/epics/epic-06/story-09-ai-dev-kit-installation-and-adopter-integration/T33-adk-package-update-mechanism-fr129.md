---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T33 — ADK package update mechanism (FR-129)

**Task ID:** E06:S09:T33  
**Status:** COMPLETE  
**Priority:** HIGH (**Must Have**)  
**Created:** 2026-06-11  
**Last updated:** 2026-06-11 (**v0.6.9.33+2** — task-touch SemVer tag resolution fix; SBL AC1 replay validated)  
**Code:** E06S09T33  
**Version anchor:** **v0.6.9.33+2** (SemVer **v0.4.1146+2**)

**Planning:** [`IPP-E06S09T33-adk-package-update-mechanism-fr129.md`](../../../../implementation-cycles/IPP-E06S09T33-adk-package-update-mechanism-fr129.md)

**Upstream:** [FR-129](../../../fr-br/FR-129-adk-package-update-mechanism-fr129.md)

**Related:** [FR-030](../../../fr-br/FR-030-ai-dev-kit-cli-tool.md) · [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [FR-128](../../../fr-br/FR-128-environment-aware-workflow-execution.md) · [T26](T26-starborn-legacy-adk-install-program.md)

---

## Scope

Design and deliver a **productized update mechanism** for all ADK packages so client repos can upgrade in place (vendor sync, manifest, verification, host-scaffold reporting) — **not** uninstall/reinstall or full greenfield replay.

Motivated by SBL vendor bump gap after FR-128 and FR-110 NF2 "submodule bump" without orchestration.

---

## Input

- [FR-129](../../../fr-br/FR-129-adk-package-update-mechanism-fr129.md)
- [FR-030](../../../fr-br/FR-030-ai-dev-kit-cli-tool.md) — CLI update/check sketch (E06:S08)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) — manual update notes only today
- SBL attempt 06 pin → FR-128 upgrade path (manual)

---

## Deliverable

1. Install manifest schema (packages, channel, pinned version).
2. Update command (`adk update` / installer `--update`) with dry-run/check modes.
3. Vendor-layer sync from release tag/tarball/GHCR.
4. Host-scaffold drift report (+ optional idempotent patch apply for safe excerpts).
5. Post-update verification integration (`verify_vendor_tree`, smoke validators).
6. INSTALL + brownfield docs for update procedure.
7. CI smoke on fixture adopter repo.

---

## Acceptance criteria

- [x] **AC4:** Check mode reports available upstream release.
- [x] **AC5:** INSTALL documents submodule, tarball, GHCR update paths.
- [x] **AC6:** CI update dry-run smoke passes (`test_update_adk_packages.py`).
- [x] **AC1:** SBL fixture: `v0.4.1140+2` → `v0.4.1145+1` via one command; `verify_vendor_tree` pass (**validated 2026-06-11** @ `v0.6.9.33+2` tag-resolution fix).
- [x] **AC2:** Host scaffold report for IPW/IDW command files when not auto-patched.
- [x] **AC3:** RW-only brownfield updates workflow-mgt without Kanban re-fresh (vendor packages scope only).

---

## Approach

1. Inventory acquisition channels and host/vendor file boundaries (FR-110, FR-081).
2. Define manifest + align with FR-030 CLI or ship minimal `update_adk_packages.py` v1.
3. Implement vendor sync (reuse `sync_greenfield_install` patterns inverted for adopter pull).
4. Scaffold drift detector (compare checksums vs release manifest).
5. Wire verification + ADK error codes.
6. Document; replay SBL FR-128 bump as acceptance fixture.

---

## Dependencies

**Depends on:** FR-110 vendor tree (shipped), FR-111 verify_vendor_tree (shipped)

**Blocks:** Sustainable adopter upgrades; FR-128 rollout to SBL without manual runbooks

**Parallel:** FR-030 CLI (E06:S08) — coordinate to avoid duplicate update CLIs

---

## Associated feature requests

- [FR-129 — ADK package update mechanism](../../../fr-br/FR-129-adk-package-update-mechanism-fr129.md) (primary)
