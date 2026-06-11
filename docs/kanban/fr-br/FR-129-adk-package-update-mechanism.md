---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-129: ADK package update mechanism (all frameworks)

**Type:** Feature Request (FR)  
**ID:** FR-129  
**Submitted:** 2026-06-11  
**Submitted By:** Operator (post FR-128 / SBL vendor-bump gap)  
**Priority:** HIGH (**Must Have** — MoSCOW **M**)  
**Status:** IMPLEMENTED (v1 — **v0.6.9.33+1** / **v0.4.1145+1**; SBL fixture replay pending operator verify)

**Implementing Task:** [E06:S09:T33](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T33-adk-package-update-mechanism-fr129.md)

**Related:** [FR-030](FR-030-ai-dev-kit-cli-tool.md) · [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [FR-081](FR-081-brownfield-modular-adopter-integration.md) · [FR-082](FR-082-installation-distribution-canonical-repo-alignment.md) · [FR-128](FR-128-environment-aware-workflow-execution.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

---

## Summary

Deliver a **first-class, repeatable update path** for every ADK package (workflow-mgt, kanban, lean vendor tree, and future frameworks) so adopters can **upgrade in place** without uninstalling ADK or re-running full greenfield from scratch.

---

## Problem statement

Install story is mature ([FR-080](FR-080-greenfield-installation-process.md), [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md), [FR-081](FR-081-brownfield-modular-adopter-integration.md)). **Update story is not.**

Today adopters are expected to:

- Manually `git fetch && git checkout tags/v…` on a vendor submodule, **or**
- Re-download a tarball/GHCR image and replace `vendor/ai-dev-kit/`, **or**
- Re-run greenfield orchestration and hope host scaffolds do not regress

None of these is a **productized update mechanism**. They do not:

1. Record **which packages** are installed and **how** (submodule, tarball, GHCR, copy).
2. Distinguish **vendor-owned** files (framework scripts) from **host-owned** scaffolds (`rw-config.yaml`, `.cursorrules`, task docs).
3. **Merge or prompt** for host trigger docs (`.claude/commands/`, IPW sections) when upstream changes (e.g. [FR-128](FR-128-environment-aware-workflow-execution.md)).
4. Run **post-update verification** (`verify_vendor_tree`, smoke validators, drift report).
5. Offer **rollback** or pin downgrade without wiping the repo.

**Starborn Legacy (attempt 06)** pinned `v0.4.1140+2`. To get FR-128 IPW hardening at `v0.4.1144+1`, maintainers documented a **manual vendor bump + host doc merge** — proof the gap is real. Expecting clients to **uninstall and reinstall ADK** is not a viable lifecycle.

[FR-030](FR-030-ai-dev-kit-cli-tool.md) sketches `ai-dev-kit check` / `update` but does not deliver a **package-aware update contract** integrated with installers and lean vendor layout.

[FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) NF2 claims "update path = submodule bump or copy refresh" — **necessary but insufficient** without orchestration, manifest, and host-file policy.

---

## Goals

1. **Single operator command** (CLI or installer subcommand) to update one or all installed ADK packages to a target SemVer/tag.
2. **Manifest** — record installed packages, acquisition channel, pinned version, install date (`.ai-dev-kit.yaml` or extension of existing config).
3. **Layered update policy:**
   - **Vendor layer** — replace/sync `packages/frameworks/**` (and `greenfield-install/` mirror) deterministically.
   - **Host scaffold layer** — detect drift; apply **safe auto-merge** (RW excerpt) vs **report-only** (`.cursorrules` IPW blocks, `rw-config.yaml` user edits).
4. **Verification gate** — post-update: `verify_vendor_tree`, package smoke tests, optional `validate_branch_context` dry-run.
5. **Documented brownfield + greenfield** paths in `INSTALL_IN_YOUR_PROJECT.md`.

---

## Requirements

### Functional

- [ ] **FR-129-F1:** Update command accepts target version (SemVer tag, internal tag, or `latest` within channel) and package selector (`workflow-mgt`, `kanban`, `all`).
- [ ] **FR-129-F2:** Read install manifest; refuse or warn when acquisition method unsupported for automated update.
- [ ] **FR-129-F3:** Vendor-tree sync replaces framework files from pinned release without deleting host project content outside vendor root.
- [ ] **FR-129-F4:** Host scaffold report lists upstream files with merge guidance (e.g. `.claude/commands/ipw.md`, `.cursorrules` RW section) — optional `--apply-scaffold-patches` for idempotent excerpts only.
- [ ] **FR-129-F5:** Post-update verification script exits non-zero on failure; prints ADK SemVer banner + `ADK-*` codes on error ([FR-108](FR-108-install-setup-error-code-registry-and-emission.md)).
- [ ] **FR-129-F6:** `check` / dry-run mode shows available updates and breaking-change notes from release metadata when present.
- [ ] **FR-129-F7:** Works for lean vendor layout ([FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)) and legacy full-repo submodule paths.

### Non-functional

- [ ] **FR-129-NF1:** Update must be **idempotent** — re-running at same pin is no-op.
- [ ] **FR-129-NF2:** No silent overwrite of host-edited `rw-config.yaml` or kanban content.
- [ ] **FR-129-NF3:** Disk/network failure mid-update leaves repo in recoverable state (transaction log or staged temp dir).
- [ ] **FR-129-NF4:** Integrates with or supersedes FR-030 update commands — single SoT, no duplicate CLIs.

---

## Acceptance criteria

- [ ] **AC1:** SBL-style vendor install at `v0.4.1140+2` updates to `v0.4.1144+1` via one documented command; `verify_vendor_tree` passes; `workflow_env.py` present.
- [ ] **AC2:** Update report lists host files needing manual review for FR-128 IPW gate (when scaffold patches not applied).
- [ ] **AC3:** Brownfield RW-only project updates `workflow-mgt` without re-running Kanban fresh install.
- [ ] **AC4:** `ai-dev-kit check` (or equivalent) shows outdated packages when upstream release exists.
- [ ] **AC5:** INSTALL guide documents update procedure for submodule, tarball, and GHCR acquisition paths.
- [ ] **AC6:** CI smoke: update dry-run on fixture repo passes in ai-dev-kit Actions parity.

---

## Scope analysis

**Problem domain:** Framework distribution — adopter lifecycle (install → **update** → verify)  
**Affected areas:**
- [x] Install/CLI scripts (`packages/frameworks/workflow-mgt/scripts/`, future `ai-dev-kit` CLI)
- [x] Documentation (`INSTALL_IN_YOUR_PROJECT.md`, framework READMEs)
- [x] Config manifest (`.ai-dev-kit.yaml` / install metadata)
- [ ] Kanban templates (update via package sync only — no forced re-fresh)

**Estimated complexity:** Complex (2+ weeks) — manifest, multi-channel acquisition, host/vendor boundary, verification.

**Out of scope (v1):** Automatic merge of host kanban content; cross-major breaking migrations without operator confirm.

---

## Dependencies

**Blocks:**
- Sustainable adopter upgrades (SBL FR-128 rollout, all future framework fixes)
- FR-030 CLI delivery (update leg should align or merge)

**Blocked by:** None (can ship incremental v1: vendor sync + verify + report)

**Related work:**
- [FR-030](FR-030-ai-dev-kit-cli-tool.md) — CLI `check` / `update` (E06:S08)
- [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — vendor tree SoT
- [FR-128](FR-128-environment-aware-workflow-execution.md) — exemplar "why update matters"

---

## Intake decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-11  
**Intake By:** Intake Agent

**Decision flow:** Story match — Epic 6, Story 9 (installation & adopter integration) → Task 33

**Assigned to:**
- Epic: 6 — ADK implementation / distribution
- Story: 9 — AI Dev Kit installation and adopter integration
- Task: 33 — ADK package update mechanism (FR-129)
- Version: `0.6.9.33+1` (on first RW)

**Kanban links:**
- Epic: [`epic-06.md`](../epics/epic-06/epic-06.md)
- Story: [`story-09-ai-dev-kit-installation-and-adopter-integration.md`](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md)
- Task: [`T33-adk-package-update-mechanism-fr129.md`](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T33-adk-package-update-mechanism-fr129.md)

---

## References

- [INSTALL_IN_YOUR_PROJECT.md — Update upstream](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
- [Framework dependency integration guide](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/documentation/user-docs/framework-dependency-integration-guide.md)
- [SBL attempt 06 preflight](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/adk-install-into-sbl/attempt-06-preflight-checklist.md)
