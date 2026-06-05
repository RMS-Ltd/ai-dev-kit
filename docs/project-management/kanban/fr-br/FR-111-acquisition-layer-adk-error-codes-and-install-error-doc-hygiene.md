---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-111: Acquisition-layer ADK error codes and install error documentation hygiene

**Type:** Feature Request (FR)  
**ID:** FR-111  
**Submitted:** 2026-06-05  
**Submitted By:** Maintainer (design session — greenfield lean delivery + FR-108 gap analysis)  
**Priority:** MEDIUM (Should Have — MoSCOW **S**)  
**Status:** ACCEPTED

**Implementing Task:** [E06:S09:T24](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T24-acquisition-layer-adk-error-codes-fr111.md)

---

## Summary

Extend the FR-108 **`ADK-*` install error code registry** with process **I05** (lean-tree **acquisition** before installers run), add process **I06** for CLI install failures, and close **documentation hygiene gaps** so the lean `greenfield-install/` vendor path, GHCR channel, and troubleshooting appendix stay aligned with the registry SoT.

---

## Problem Statement

[FR-108](FR-108-install-setup-error-code-registry-and-emission.md) (v1.0.0, **E06:S09:T20**) delivers stable `ADK-I01`–`ADK-I04` codes for **installer scripts** (`install_greenfield_path.py`, RW, Kanban, sign-off). That covers failures **after** the adopter has a valid vendor tree.

The **new greenfield lean path** ([FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md), [ADR-021](../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md)) adds acquisition steps that run **before** those installers:

| Acquisition path | Typical failure | Current reporting |
| ---------------- | --------------- | ----------------- |
| Sparse submodule / copy `greenfield-install/` | Wrong tag, incomplete sparse cone, empty `vendor/` | Shell/git prose only |
| Release tarball + `.sha256` | Checksum mismatch, corrupt archive | Exit code + tar message |
| GHCR `docker pull` + `docker cp` | Auth denied, image not found, Docker unavailable | Docker CLI output |
| Incomplete vendor tree | Missing `install_greenfield_path.py` or `install-error-codes.yaml` | Python `FileNotFoundError` or import failure |

Adopters who **only** vendor the lean tree ([`greenfield-install/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/greenfield-install/README.md)) are not told to report `ADK-*` codes when acquisition fails. The two-token rule (SemVer banner + ADK code) from [UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) therefore breaks at the first step of the happy path.

Separately, **documentation drift** undermines the registry as SoT:

- [`framework-dependency-troubleshooting-guide.md`](../../../documentation/user-docs/framework-dependency-troubleshooting-guide.md) § Install error codes is **hand-summarized** — missing anchors, full remediation bullets, `symptom` fields, and code **`ADK-I03.E90:W01`** present in YAML.
- [FR-108](FR-108-install-setup-error-code-registry-and-emission.md) taxonomy diagram uses `ADK-{DOMAIN}.{PROCESS}` (extra dot); canonical shape per [ADR-016](../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) is `ADK-{DOMAIN}{PROCESS}.{SUB}` (e.g. `ADK-I03.E04`).
- CLI `adk install` maps **all** failures to `ADK-I02.E01` (Kanban installer semantics) — misleading for triage.
- Brownfield adopters use the same RW/Kanban emitters but INSTALL docs frame codes mainly under greenfield.
- No CI guard ensures `generate_install_error_docs.py` output matches the committed troubleshooting appendix.

---

## Goals

| Audience | Outcome |
| -------- | ------- |
| Lean-tree / GHCR adopters | Paste `ADK-I05.*` + SemVer when acquisition fails — before running installers |
| Book readers | Appendix covers acquisition failures without repo-layout assumptions |
| Maintainers | Registry minor bump + regen docs; CI catches appendix drift |
| Brownfield adopters | Clear that `ADK-I02`/`ADK-I03` apply to RW/Kanban installer failures on existing repos |

---

## Proposed taxonomy extension (registry 1.1.0)

Per [ADR-016](../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) — **amend process table** (no shape change):

| Process | Scope | Entry points (proposed) |
| ------- | ----- | ----------------------- |
| **I05** | Lean-tree acquisition / vendor integrity | `verify_vendor_tree.py` (new or extended), GHCR helper script, tarball verify hook, preflight in `install_greenfield_path.py` when `--vendor-root` incomplete |
| **I06** | CLI framework install | `cli/commands/install.py` — replace coarse `ADK-I02.E01` mapping |

**Seed sub-codes (illustrative v1.1 — finalize in IPP):**

| Situation | Code |
| --------- | ---- |
| GHCR image pull failed (auth, not found, network) | `ADK-I05.E01` |
| GHCR extract / `docker cp` failed | `ADK-I05.E02` |
| Release tarball checksum mismatch | `ADK-I05.E03` |
| Vendor tree missing required install entrypoints | `ADK-I05.E04` |
| Vendor tree present but registry/emitter modules missing | `ADK-I05.E05` |
| Sparse submodule / git acquisition failed (documented helper) | `ADK-I05.E06` |
| CLI `adk install` generic failure | `ADK-I06.E01` |
| CLI install: framework not found / version unavailable | `ADK-I06.E02` |

**Governance:** Bump `registry_version` to **1.1.0** (minor — additive codes only). Never reassign I01–I04 semantics.

**Out of scope (this FR):**

- `ADK-V*` post-install validation catalog (defer until unified greenfield verification gate).
- `ADK-R*` RW runtime errors (FR-108 phase 2).
- `adk doctor --explain` (FR-108 optional follow-up).
- Emitting codes from raw `git`/`docker` without a thin ADK wrapper (document prose fallback in INSTALL until wrapper exists).

---

## Requirements

### Functional Requirements

- [ ] **FR-111-F1:** Add process **I05** and seed sub-codes to `install-error-codes.yaml`; bump `registry_version` to **1.1.0**; update [ADR-016](../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) process table.
- [ ] **FR-111-F2:** Provide at least one **adopter-runnable acquisition preflight** that emits registered `ADK-I05.*` codes (Python preferred — reuses `adk_install_errors.emit_install_error`).
- [ ] **FR-111-F3:** Document acquisition failure reporting in **`INSTALL_IN_YOUR_PROJECT.md`** lean vendor section and **`greenfield-install/README.md`** (two-token rule + link to troubleshooting anchors).
- [ ] **FR-111-F4:** Regenerate troubleshooting guide § Install error codes from `generate_install_error_docs.py` (full symptom, remediation, anchors); include all **1.1.0** codes.
- [ ] **FR-111-F5:** Add **CI or test guard** that fails when generated appendix diverges from committed troubleshooting section (or commits generator output in RW step).
- [ ] **FR-111-F6:** Add process **I06** + sub-codes; wire `cli/commands/install.py` to emit **I06** codes instead of `ADK-I02.E01` for CLI-specific failures.
- [ ] **FR-111-F7:** Brownfield callout in INSTALL: install error codes apply to RW/Kanban installer failures on brownfield paths (link troubleshooting §).
- [ ] **FR-111-F8:** Correct [FR-108](FR-108-install-setup-error-code-registry-and-emission.md) taxonomy diagram to match ADR-016 (`ADK-I03.E04` not `ADK-I.03.E04`).
- [ ] **FR-111-F9:** Extend [install-error-codes-book-integration.md](../../../book-project/install-error-codes-book-integration.md) §6 catalog and sync playbook for **1.1.0**; note acquisition spine placement.
- [ ] **FR-111-F10:** Static emitter test coverage includes new I05/I06 literals; every new code has registry row + at least one test or fixture path.

### Non-Functional Requirements

- [ ] **FR-111-NF1:** Acquisition codes must not embed host paths, tokens, or image digests in the code string (details in separate log/stderr lines per FR-108-NF2).
- [ ] **FR-111-NF2:** Lean `greenfield-install/` sync (`sync_greenfield_install.py`) continues to copy updated registry + emitters without manual duplicate edits.
- [ ] **FR-111-NF3:** v1.1 seed catalog bounded (~6–8 new sub-codes); avoid per-flavor explosion (one GHCR pull code, not per HTTP status).

### Documentation deliverables (no new adopter-facing doc tree)

- [ ] **FR-111-D1:** Optional one-line cross-link in [`docs/governance/README.md`](../../../governance/README.md) — install failures → ADR-016 / troubleshooting § ADK.
- [ ] **FR-111-D2:** Update [installation-paths-matrix.md](../epics/epic-02/story-14-workflow-management-package-installation-evaluation/installation-paths-matrix.md) — document I05 acquisition row; mark OPT-INSTALL-ERRORS as documented.

---

## Acceptance Criteria

- [ ] **AC1:** Registry `1.1.0` includes I05 and I06 with seed codes; ADR-016 process table updated.
- [ ] **AC2:** At least two acquisition failure paths emit registered `ADK-I05.*` in tests (e.g. missing vendor entrypoint, checksum mismatch fixture).
- [ ] **AC3:** `greenfield-install/README.md` and INSTALL lean section mention SemVer + ADK reporting for acquisition and install failures.
- [ ] **AC4:** Troubleshooting § Install error codes matches generator output for `1.1.0` (CI enforced).
- [ ] **AC5:** CLI install failures emit `ADK-I06.*` (not `ADK-I02.E01`) in tests.
- [ ] **AC6:** Book integration doc lists new codes; FR-111 ↔ implementing task bidirectional links; FR status → ACCEPTED on intake, IMPLEMENTED on RW delivery.

---

## Dependencies

**Builds on:**

- [FR-108](FR-108-install-setup-error-code-registry-and-emission.md) — registry, emitter, tests (COMPLETE)
- [ADR-016](../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) — taxonomy shape
- [FR-110](FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — `greenfield-install/` vendor tree
- [ADR-021](../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md) — GHCR acquisition path
- [FR-080](FR-080-greenfield-installation-process.md) — greenfield process boundaries
- [UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) — SemVer banner pairing

**Blocked by (implementation):**

- [FR-083](FR-083-global-ipw-gated-implementation-contract.md) — IPP + explicit user authorization before code changes

**Related (optional coupling):**

- [E06:S09:T22](T22-package-documentation-greenfield-install-alignment-fr110.md) — package README alignment (may absorb part of FR-111-F3)
- [E06:S09:T23](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T23-greenfield-install-github-packages-delivery-uxr021.md) — GHCR delivery (I05.E01/E02 map to this channel)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-05  
**Intake By:** Agent (Cursor — RW -k E06:S09:T24)

**Assigned To:**

- Epic: **6** — Framework Management  
- Story: **9** — AI Dev Kit installation and adopter integration  
- Task: **E06:S09:T24** — Acquisition-layer ADK error codes and install error doc hygiene (FR-111)

**Kanban links:**

- Story: [`story-09-ai-dev-kit-installation-and-adopter-integration.md`](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md)
- Task: [`T24-acquisition-layer-adk-error-codes-fr111.md`](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T24-acquisition-layer-adk-error-codes-fr111.md)

---

## References

- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
- [greenfield-install/README.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/greenfield-install/README.md)
- [install-error-codes.yaml](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/install-error-codes.yaml)
- [framework-dependency-troubleshooting-guide.md](../../../documentation/user-docs/framework-dependency-troubleshooting-guide.md)
- [install-error-codes-book-integration.md](../../../book-project/install-error-codes-book-integration.md)
- [E06:S09:T20](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108.md)
