---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-098: Optional ECC harness layer integration for AI Dev Kit adopters

**Type:** Feature Request (FR)  
**ID:** FR-098  
**Submitted:** 2026-05-26  
**Submitted By:** Maintainer (architecture review session)  
**Priority:** HIGH (MoSCOW **Must Have** — board reprioritized **v0.2.16.4+12**)  
**Severity:** LOW  
**Status:** ACCEPTED

**Implementing Tasks:** [E6:S09:T04](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md) (Phase 0), [E6:S09:T05](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md) (Phase 1+)

---

## Summary

Define and deliver an **optional, complementary integration** between AI Dev Kit (project governance layer) and [ECC](https://github.com/affaan-m/ECC) (harness execution layer) so adopters can augment agent performance without duplicating or conflicting with ADK workflows (RW, UKW, IPW, Kanban, forensic versioning).

---

## Problem Statement

AI Dev Kit provides a **thin harness surface** (seven project-specific skills, `.cursorrules` workflow triggers, Claude slash commands) focused on **project infrastructure and governance**. [ECC](https://github.com/affaan-m/ECC) provides a **broad harness execution layer** (246+ skills, hooks, instincts, security scanning, cross-IDE portability) focused on **agent performance and coding craft**.

These systems are **genuinely complementary**:

- ADK owns *what* work exists, *how* it is governed, and *how* it ships.
- ECC owns *how well* agents execute domain work in the harness.

Today there is **no documented integration path**, no compatibility contract, and no ADK-authored workflow skills in ECC's portable `SKILL.md` format. Adopters who install both stacks risk **context bloat**, **duplicate triggers**, and **conflicting git rules** (ECC generic commit workflow vs ADK RW-only commit/push policy).

---

## Requirements

### Functional Requirements

- [x] **FR-098-F1:** Execute **Phase 0 compatibility evaluation** on ai-dev-kit (and document reproducible procedure for adopters) using ECC minimal profile without hooks-first stacking.
- [x] **FR-098-F2:** Produce a **compatibility matrix** classifying ADK vs ECC surfaces as *keep*, *merge*, *exclude*, or *conflict-resolve*.
- [x] **FR-098-F3:** Define **`ecc-adk-bridge.yaml`** template (hook profile, disabled hooks, conflict rules, ADK skill pack path, pinned ECC version).
- [ ] **FR-098-F4:** Publish **ADK workflow skill pack** in ECC-compatible `SKILL.md` format (minimum: `adk-release-workflow`; target set: RW, UKW, IPW, intake, version bump).
- [ ] **FR-098-F5:** Extend **greenfield/brownfield install docs** with optional "Harness Execution Layer (ECC)" step—clearly optional, not required for ADK correctness.
- [ ] **FR-098-F6:** Document **layered architecture** (ADK = project OS; ECC = harness OS) in adopter-facing user-docs and vision cross-links.

### Non-Functional Requirements

- [x] **FR-098-NF1:** Integration must remain **optional**; full ADK adoption must not require ECC.
- [x] **FR-098-NF2:** ADK validators and IPW/RW gates remain **authoritative**; ECC hooks are advisory or pre-flight unless explicitly promoted to CI.
- [x] **FR-098-NF3:** Do **not** vendor-fork ECC; reference upstream MIT repo and pin version in bridge config.
- [x] **FR-098-NF4:** Follow ECC install discipline (**single install path**; no plugin + full installer stacking).
- [x] **FR-098-NF5:** **SemVer discipline (task_touch):** ECC integration releases use normal **PATCH** advancement per RW (`task_touch_counter`); do **not** hand-bump **MINOR** for optional ECC phases alone. **MINOR** advances only at **Epic 6 sign-off** (`epic_count` increment in `semver-registry.yaml`) or a separate **product milestone** (e.g. public `ai-dev-kit` genesis per FR-099), not per FR-098 phase.

---

## Release / SemVer strategy (maintainer decision — 2026-05-26)

ADK uses **`semver_mapping_strategy: task_touch`** ([dev-kit-versioning-policy](../../../architecture/standards-and-adrs/dev-kit-versioning-policy.md), ADR-002):

| SemVer part | Driver | ECC integration guidance |
|-------------|--------|---------------------------|
| **PATCH** | `task_touch_counter` (+1 per RW) | Each shipped FR-098 phase (T04, T05, installer bridge, …) releases via RW → PATCH only (e.g. `0.4.796` → `0.4.797`). |
| **MINOR** | `epic_count` (epics signed off) | Bump when **Epic 6** (installation & adopter integration) is signed off — signals “integration epic complete,” not “ECC optional layer added.” |
| **MAJOR** | RC / breaking policy | Reserved for breaking adoption or governance changes (e.g. ECC becomes required, RW rules change). |

**Rationale:** ECC is **optional and backward-compatible**. Release notes and install docs carry the harness-layer signal; SemVer PATCH reflects incremental delivery without inflating MINOR for every phase.

**Out of scope for FR-098 SemVer:** Public repo rebirth ([FR-099](./FR-099-spin-off-book-epic-to-private-repository.md) Phase 3) — version that cut on the **new public** repo policy, not as an ECC MINOR bump on the private lineage.

---

## Scope Analysis

**Problem Domain:** Framework adoption, harness/agent integration, installation ergonomics  
**Affected Areas:**

- [x] Installation and adopter integration (Epic 6, Story 9)
- [x] Workflow management skills and agent execution guides
- [x] `.cursor/skills/`, `.cursorrules`, `.claude/commands/`
- [x] User-docs (`INSTALL_IN_YOUR_PROJECT.md`, framework dependency guides)
- [ ] Kanban/versioning core logic (unchanged)
- [ ] ECC upstream repository (reference only)

**Estimated Complexity:**

- [ ] Simple (1-3 days) — Phase 0 only
- [x] Medium (1–2 weeks) — Phase 0 + bridge template + initial skill pack
- [ ] Complex (2+ weeks) — full installer orchestration + AgentShield bridge + hook integration
- [ ] Very Complex (1+ month)

---

## Phased Delivery

| Phase | Name | Primary deliverable | Task anchor |
|-------|------|---------------------|-------------|
| **0** | Compatibility spike | Compatibility matrix + procedure | **E6:S09:T04** (this intake) |
| **1** | ADK workflow skill pack | ECC-format skills for RW/UKW/IPW/intake | Follow-on task (T05+) |
| **2** | Installer bridge | Optional greenfield step + `ecc-adk-bridge.yaml` | Follow-on task |
| **3** | Hook alignment | SessionStart context, quality-gate pre-RW | Follow-on task |
| **4** | AgentShield bridge | Optional RW Step 9 security scan | Follow-on task |
| **5** | Book / public positioning | Head First AI-Assisted Development sidebar | Follow-on task |

---

## Use Cases

**Primary use case:** A greenfield adopter installs ADK (Kanban + RW + validators), then optionally adds ECC minimal profile for TDD, language patterns, and harness hooks—without breaking RW-only git policy.

**Additional use cases:**

- Existing ADK project adds ECC for agent performance without re-homing Kanban governance.
- Book/tutorial reader follows ADK full stack, then optional 15-minute ECC harness sidebar.
- Maintainer dogfoods combined stack on ai-dev-kit before documenting for adopters.

---

## Acceptance Criteria

- [x] **AC1:** Phase 0 compatibility matrix exists with explicit conflict resolutions (git, planning, release).
- [x] **AC2:** ADK remains fully functional with **zero ECC install** (regression documented).
- [x] **AC3:** Optional ECC path documented; adopters can reproduce Phase 0 on a scratch branch.
- [ ] **AC4:** At least one ADK workflow skill (`adk-release-workflow`) exists in ECC-compatible format (Phase 1 gate; may follow T04).
- [x] **AC5:** No duplicate RW/UKW/IPW triggers introduced by default ECC minimal install.

---

## Dependencies

**Blocks:**

- Optional harness-layer installer step (FR-098-F5) should not block FR-080/FR-081 closure.

**Blocked By:**

- None for Phase 0.

**Related Work:**

- [FR-080](./FR-080-greenfield-installation-process.md) — Greenfield install (optional ECC step extends this)
- [FR-081](./FR-081-brownfield-modular-adopter-integration.md) — Brownfield modular adoption (ECC as optional surface)
- [FR-041](./FR-041-windsurf-investigate-agents-skills-for-workflows.md) — Prior harness/skills investigation (CLOSED; Cursor skills pattern)
- [ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) — Adoption policy
- External: [affaan-m/ECC](https://github.com/affaan-m/ECC) (MIT, harness-native operator system)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-05-26  
**Intake By:** Agent (maintainer-directed intake)

**Decision Flow Results:**

- [x] Story Match Found: Epic 6, Story 9 (AI Dev Kit installation and adopter integration) → Task **T04**

**Assigned To:**

- Epic: Epic 6 — Framework Management
- Story: Story 9 — AI Dev Kit installation and adopter integration
- Task: T04 — ECC harness layer Phase 0 compatibility evaluation (FR-098)
- Version: **v0.6.9.5+1** (intermediate doc release — SemVer strategy; E6:S09:T05 `--art`)

**Kanban Links:**

- Epic: [`docs/project-management/kanban/epics/Epic-6/Epic-6.md`](../epics/Epic-6/Epic-6.md)
- Story: [`docs/project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md`](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md)
- Task: [`T04-ecc-harness-layer-phase0-compatibility-fr098.md`](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md)

---

## Notes

- ECC does **not** provide equivalent skills to ADK's seven governance skills (`version-bump`, `ukw-sync`, `intake-process`, etc.); integration is additive.
- Closest ECC surfaces (`git-workflow`, `/plan`, `project-flow-ops`) are generic and may **conflict** with ADK rules—bridge config must defer to ADK for git and release semantics.
- ECC Pro / GitHub App is out of scope for OSS integration docs unless explicitly requested later.

### Phase 0 implementation evidence (E6:S09:T04)

- [Integration specification](../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md) — normative contract + MIT attribution
- [Phase 0 evaluation](../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md) — matrix, procedure, **GO** for Phase 1
- [Bridge template](../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template)
- [IPP-E6S09T04](../../../implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098.md)
- Phase 1 follow-on: [E6:S09:T05](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md)
- Adopter quick-start: [ECC + ADK integration cheatsheet](../../../documentation/user-docs/ecc-adk-integration-cheatsheet.md) (linked **v0.2.16.4+12**)

### Board prioritization (E2:S16:T04 — v0.2.16.4+12)

- **kboard.md** / **fbuboard.md** — FR-098 / E6:S09:T05 at **top of Must Have** for phases 2–5 delivery focus.

---

## References

- [ECC repository](https://github.com/affaan-m/ECC)
- [ECC cross-harness architecture](https://github.com/affaan-m/ECC/blob/main/docs/architecture/cross-harness.md)
- [AI Dev Kit vision and purpose](../../../documentation/ai-dev-kit-vision-and-purpose.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
