---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Starborn Legacy greenfield install diary

**Type:** User Experience Research (UXR)  
**ID:** UXR-025  
**Submitted:** 2026-06-09  
**Submitted By:** User (Starborn Legacy greenfield install session)  
**Priority:** HIGH (Should Have — MoSCOW **S**)  
**Status:** OPEN  
**Version:** v0.6.9.25+1 (intake RW -k)  
**Implementing Task:** [E06:S09:T25](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)

**Related:** [FR-080](FR-080-greenfield-installation-process.md) · [FR-081](FR-081-brownfield-modular-adopter-integration.md) · [FR-108](FR-108-install-setup-error-code-registry-and-emission.md) · [FR-111](FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md) · [UXR-021](UXR-021-greenfield-install-github-packages-delivery-channel.md) · [starborn-legacy-greenfield-install-diary](../../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md)

---

## Summary

First **documented client greenfield install** of the lean `greenfield-install/` bundle on **Starborn Legacy** (`v0.4.1063` tarball). Acquisition and Kanban fresh install **succeeded** after workarounds; the greenfield **orchestrator** failed in `--non-interactive` mode (`ADK-I01.S01`). Adopter **closed the attempt** without adopting ADK template kanban — legacy E/S/T PM retained ([FR-081](FR-081-brownfield-modular-adopter-integration.md) deferred).

---

## Research Objective

**Primary question:** What upstream gaps block a reproducible lean greenfield path for real client repos, and what maintainer reactions (docs, BR/FR, installer fixes) are required?

**Secondary questions:**

1. Is the **release tarball** path sufficient when disk is constrained (sparse clone failed)?
2. Why does `--vendor-root` not propagate to orchestrator subprocess installer paths?
3. Why does `--non-interactive` orchestration still block on RW `Project name`?
4. How should maintainers record **adopter scope closure** (install exercise vs full kanban adoption)?

---

## Methodology

**Research Method:** Adopter install diary — phased execution on wiped working tree with session logs.  
**Context:** Starborn Legacy `ai-dev-kit` branch; official [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) path.  
**Artifact:** [starborn-legacy-greenfield-install-diary.md](../../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md)

---

## Key findings

| ID | Phase | Finding | Severity | Maintainer reaction (T25 scope) |
|----|-------|---------|----------|--------------------------------|
| F1 | 1a | Submodule add failed — `.gitmodules` absent after index wipe | LOW | Doc: preflight / clean-tree guidance |
| F2 | 1b | Sparse clone failed — disk full (~116 MiB free) | MEDIUM | Doc: prefer tarball on constrained disks ([UXR-021](UXR-021-greenfield-install-github-packages-delivery-channel.md)) |
| F3 | 1c | Release tarball + `verify_vendor_tree` — **SUCCESS** | — | Positive signal |
| F4 | 4 | Orchestrator `--non-interactive` → `ADK-I01.S01` (RW hung on `Project name`) | **HIGH** | Installer fix or `--config` forwarding; tests |
| F5 | 3–4 | `--vendor-root` only affects preflight; subprocesses use project-root `packages/` | **HIGH** | Vendor-aware paths or documented `packages` symlink contract |
| F6 | 5 | RW mode C **PARTIAL** — no local `workflows/` (expected lean) | LOW | Confirm docs set expectations |
| F7 | 6 | Kanban fresh + sign-off **ALL READY** | — | Positive signal (UXR-017/BR-083–086) |
| F8 | 8 | Adopter retains legacy E/S/T kanban — scope closure | INFO | FR-081 brownfield note; not a defect |

---

## Acceptance Criteria (UXR closure)

- [ ] **AC1:** Triage matrix published with disposition per finding (fix / doc / defer / adopter decision).
- [ ] **AC2:** Actionable F4/F5 items filed or implemented with traceability (BR or task children).
- [ ] **AC3:** `INSTALL_IN_YOUR_PROJECT.md` (or greenfield README) updated for tarball + `packages` symlink when using vendor-only layout.
- [ ] **AC4:** Diary canonical path linked from UXR, task, and (if applicable) install feedback guide ([FR-079](FR-079-install-feedback-submission-path-and-governance.md)).

---

## Out of scope

- Starborn Legacy app restore, legacy kanban brownfield migration, or RW commit in SBL repo (deferred per diary Phase 8).
- Replacing SBL legacy PM with ADK template kanban (adopter decision).
