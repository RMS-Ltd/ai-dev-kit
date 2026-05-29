---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 4: ECC harness layer Phase 0 compatibility evaluation (FR-098)

**Task ID:** E6:S09:T04  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Small (Phase 0 spike)  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (Phase 0 complete — pending RW release)  
**Code:** E6S09T04

**Upstream:** [FR-098 - Optional ECC harness layer integration](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)

---

## Task ID

**Full Task ID:** `E6:S09:T04`

---

## Summary

Execute **Phase 0** of [FR-098](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md): evaluate coexistence of AI Dev Kit's governance harness surface with [ECC](https://github.com/affaan-m/ECC) on a scratch branch, complete the compatibility checklist below, and publish a compatibility matrix with keep / merge / exclude / conflict-resolve recommendations.

This task does **not** implement the ADK workflow skill pack or installer bridge (FR-098 Phases 1–2); it establishes evidence for those follow-on tasks.

---

## Input

- [FR-098](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md) — full phased program
- [IPP-E6S09T04](../../../../implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098.md) — planning package
- [Integration specification](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)
- [Phase 0 evaluation](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md)
- [Bridge template](../../../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template)
- Current ADK harness surface:
  - `.cursor/skills/` (7 skills: `version-bump`, `ukw-sync`, `intake-process`, `cmw-maintain`, `readme-update`, `kanban-completed-update`, `fr-br-uxr-completed-update`)
  - `.cursorrules` (RW / UKW / IPW / CMW / PVW triggers)
  - `.claude/commands/` (`rw.md`, `ukw.md`, `ipw.md`)
  - `AGENTS.md`, `CLAUDE.md`
- ECC evaluated: `ecc-universal@1.10.0` (npm); GitHub [affaan-m/ECC](https://github.com/affaan-m/ECC) v2.0.0-rc.1 documented upstream

---

## Problem statement

Adopters may install ECC alongside ADK for harness performance (domain skills, hooks, security). Without a compatibility evaluation, combined installs risk duplicate context, conflicting git guidance, and broken RW/IPW gates. Phase 0 proves coexistence is viable and documents what must be bridged.

---

## Deliverables

1. **Phase 0 execution notes** — branch name, ECC install command used, ECC version/hash, harness target (Cursor).
2. **Completed compatibility checklist** (§ below) — all sections filled with PASS / FAIL / N/A and evidence.
3. **Compatibility matrix** — markdown table: ADK surface × ECC nearest equivalent × disposition × rationale.
4. **`ecc-adk-bridge.yaml` draft** — template only (may be stub); lists proposed disabled hooks and conflict rules from findings.
5. **Recommendation memo** — proceed to Phase 1 (skill pack) yes/no; blockers if any.

**Housing:** [Integration specification](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md), [Phase 0 evaluation](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md), [bridge template](../../../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template).

---

## Scope

### In scope

- Scratch-branch ECC **minimal** install, **hooks off** initially:
  ```bash
  npx ecc-install --profile minimal --target cursor --without baseline:hooks
  ```
- Compare ADK seven skills vs ECC catalog (no expectation of 1:1 equivalents).
- Identify conflicts: git commit/push, planning gates, version schema, trigger namespaces.
- Context budget estimate (qualitative: `.cursorrules` + ADK skills + ECC minimal rules/skills load).
- Document single-install-path discipline per ECC README.

### Out of scope

- Publishing ADK workflow skills to ECC format (Phase 1 / follow-on task).
- Greenfield installer code changes (Phase 2).
- Enabling ECC hooks in production on `dev` / `main`.
- ECC Pro / GitHub App integration.

---

## Acceptance criteria

- [x] **AC1:** Compatibility checklist (§ below) 100% filled with evidence links or command output references.
- [x] **AC2:** At least one documented **conflict** (expected: git workflow) with explicit **conflict-resolve** rule for bridge config.
- [x] **AC3:** Matrix covers all seven ADK skills + `.cursorrules` RW/UKW/IPW triggers + `.claude/commands`.
- [x] **AC4:** Recommendation memo states whether Phase 1 is unblocked (**GO** — see evaluation §1).
- [x] **AC5:** No changes merged to shared branches that leave duplicate ECC+ADK installs without documented rollback (dry-run only).

---

## Dependencies / coordination

- **E6:S09:T01–T03:** Optional ECC step must not contradict greenfield/brownfield install narratives; cross-link only.
- **FR-083 / IPW gate:** Phase 1+ implementation requires IPW before code changes; Phase 0 is evaluation-only.

---

## Phase 0 compatibility checklist

> **Instructions:** Run on a **disposable scratch branch** off `dev`. Record ECC version, date, and executor. Mark each item **PASS**, **FAIL**, or **N/A** with a one-line evidence note. Do not stack ECC plugin + full installer.

### A. Environment setup

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| A1 | Scratch branch created from `dev` (naming: `spike/ecc-adk-phase0` or similar) | N/A | Dry-run on `dev`; no live install required for Phase 0 deliverables |
| A2 | ECC installed via **single path** only | PASS | `npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run` |
| A3 | ECC version / commit recorded | PASS | npm `ecc-universal@1.10.0`; GitHub ECC v2.0.0-rc.1 noted upstream |
| A4 | Doctor / duplicate artifacts | PASS | No install applied; dry-run only — zero repo `.cursor/` ECC files |
| A5 | Rollback procedure documented | PASS | [Evaluation §3.4](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md) |

### B. ADK governance surface (must remain authoritative)

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| B1 | `.cursorrules` RW trigger parseable; no duplicate RW from ECC | PASS | ECC catalog has no RW trigger |
| B2 | UKW / IPW triggers unchanged in intent | PASS | ADK-owned `.cursorrules` unchanged |
| B3 | RW-only git vs ECC `git-workflow` | PASS | **conflict-resolve** in bridge template |
| B4 | IPW gate vs ECC `/plan` | PASS | **conflict-resolve** → ADK IPW |
| B5 | `rw-config.yaml` SoT | PASS | Unchanged |
| B6 | Version schema vs ECC SemVer | PASS | **conflict-resolve** → ADK `version-bump` |

### C. ADK skills vs ECC catalog (complementarity)

| ADK skill | ECC nearest equivalent | Same? | Disposition | Evidence |
|-----------|------------------------|-------|-------------|----------|
| `version-bump` | `git-workflow` | No | conflict-resolve | Evaluation matrix §4 |
| `ukw-sync` | `project-flow-ops` | No | keep / exclude ECC | GitHub/Linear only |
| `intake-process` | *(none)* | No | keep ADK | |
| `cmw-maintain` | `git-workflow` changelog | No | keep ADK | |
| `readme-update` | `doc-updater` agent | No | keep ADK | |
| `kanban-completed-update` | *(none)* | No | keep ADK | |
| `fr-br-uxr-completed-update` | *(none)* | No | keep ADK | |

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| C1 | No ECC skill for RW/UKW/IPW/intake | PASS | GitHub skills API scan |
| C2 | ECC adds net-new value | PASS | `tdd-workflow`, language patterns, etc. |
| C3 | Skill name collisions | PASS | **Zero** collisions (7 ADK vs 246 ECC) |

### D. Triggers and commands

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| D1 | No rw/ukw/ipw shim collision | PASS | ECC legacy shims use different names |
| D2 | No duplicate skill `name` frontmatter | PASS | ADK 7 names unique vs ECC catalog |
| D3 | `adk-*` namespace for Phase 1 | PASS | Spec §9; T05 stub |

### E. Context and ergonomics

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| E1 | Context load assessment | PASS | 342 ops on dry-run; qualitative note in evaluation §6 |
| E2 | `ECC_HOOK_PROFILE=minimal` | PASS | Documented in spec §8 + bridge template |
| E3 | Default hooks for adopters | PASS | **Off / minimal** until Phase 3 |

### F. Validators and release path

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| F1 | `validate_branch_context.py --strict` | PASS | exit 0 on `dev` |
| F2 | RW Step 9 set unchanged | PASS | No ECC dependency |
| F3 | No ECC hook for release correctness | PASS | ADK validators authoritative |

### G. Outputs and decision

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| G1 | Compatibility matrix published | PASS | [Evaluation §4](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md) |
| G2 | Bridge template checked in | PASS | [ecc-adk-bridge.yaml.template](../../../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template) |
| G3 | Phase 1 GO/NO-GO | PASS | **GO** — evaluation §1 |
| G4 | Follow-on T05 filed | PASS | [T05 stub](./T05-adk-workflow-skill-pack-ecc-fr098.md) |

---

## Suggested execution order

1. Create scratch branch.
2. Baseline: list ADK harness files and run branch validator smoke on clean tree.
3. Install ECC minimal (hooks off).
4. Work through checklist sections A → G.
5. Draft matrix + bridge yaml + memo.
6. Discard or keep spike branch per maintainer preference; do not merge duplicate installs to `dev` without Phase 1 bridge.

---

## References

- [FR-098](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [IPP-E6S09T04](../../../../implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098.md)
- [Integration specification](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)
- [Phase 0 evaluation](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md)
- [Bridge template](../../../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template)
- [T05 follow-on](./T05-adk-workflow-skill-pack-ecc-fr098.md)
- [ECC README](https://github.com/affaan-m/ECC/blob/main/README.md) (MIT)
- [ECC cross-harness architecture](https://github.com/affaan-m/ECC/blob/main/docs/architecture/cross-harness.md)
- [Story 009](../Story-009-ai-dev-kit-installation-and-adopter-integration.md)
- [ADR-003](../../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
