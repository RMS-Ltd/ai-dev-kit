---
lifecycle: transient
created_at: 2026-06-16T00:00:00Z
housekeeping_policy: delete
---

# Starborn Legacy — operator-tweaked Kanban E/S/T tree (full tasks)

**Source:** SBL attempt-09 operator freeze — [`KMA-REFERENCE-EST-TREE-ATTEMPT-09.md`](../adk-install-into-sbl/attempt-09/feedback-package/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md) (aka `TARGET-ES-TREE-E30-RATIONALISED.md` in adopter logs).

**Drafted:** ai-dev-kit maintainer mirror in `temp/` for local reference (not repo SoT).

| Field | Value |
|-------|-------|
| SBL HEAD (freeze) | `7a08a906` |
| `kanban_root` | `docs/kanban/` |
| Epics | 19 |
| Stories | 105 |
| Tasks (`E:S:T`) | 473 |
| **CORE** | E01–E09 |
| **ANCILLARY** (empty) | E10–E22 |
| **RESERVED** (empty) | E23–E29 |
| **DOMAIN** | E30–E40 |

## Operator tweaks (summary)

1. **Domain band at E30+** — game vertical avoids v4 `E24` placeholder collision.
2. **Legacy PM/ADK absorbed into core** — old E15/E17 kanban work maps into E01–E08, not duplicate framework epics.
3. **Megastories dismantled** — 19 legacy epics rationalized into semantic domain epics E30–E40.
4. **Forensic fidelity** — this tree preserves migration-ingest quirks (duplicate story slots, cross-epic token refs) for attempt-10 KMA scoring; do not treat as clean numbering policy.

## Task title legend

- **Bold `E:S:T`** — canonical token from operator freeze.
- *Italic suffix* — human title when known (38 titles from SBL `dev` task docs; remainder are legacy inline tokens without separate task files at freeze time).

---

## E01 — Repository Infrastructure & Maintenance (6S · 46T)

### Epic 01, Story 01: Perpetual Operations [E01:S01]
- **E01:S01:T01** — *CMW and PVW operations*
- **E01:S01:T02** — *Update Kanban Workflow (UKW)*
- **E01:S01:T03** — *Documentation hygiene*
- **E01:S01:T04** — *Infrastructure maintenance*
- **E01:S01:T05** — *CI pipeline health*
- **E01:S01:T06** — *Security scan hygiene*

### E01:S02 – AI Dev Kit Integration (Lane B Greenfield) [E01:S02]
- **E01:S02:T01** — *Define versioning schema (RC.EPIC.STORY.TASK+BUILD)*
- **E01:S02:T02** — *Document versioning policy*
- **E01:S02:T03** — *Create version file structure*
- **E01:S02:T04** — *Set up version tracking tools*
- **E01:S02:T05** — *Wire branch context and bump validators*
- **E01:S02:T06** — *Create version bump automation*
- **E01:S02:T07** — *Set up changelog generation*

### Epic 01, Story 02: Versioning & Release Numbering [E01:S02]
- **E01:S02:T01** — *Define versioning schema (RC.EPIC.STORY.TASK+BUILD)*
- **E01:S02:T02** — *Document versioning policy*

### E01:S03 – Release Versioning Hardening (Dual-Version Model) [E01:S03]
- **E01:S03:T01** — *Test runner and project layout*
- **E01:S03:T02** — *CI test job wiring*
- **E01:S03:T03** — *Coverage and quality gates*
- **E01:S03:T04** — *Document test conventions*
- **E01:S03:T05**

### Epic 01, Story 03: Test Harness & Gates [E01:S03]
- **E01:S03:T01** — *Test runner and project layout*
- **E01:S03:T02** — *CI test job wiring*

### E1:S07 – Bug Fixes [E01:S07]
- **E01:S07:T01**
- **E01:S07:T02**
- **E01:S07:T03**
- **E01:S07:T04**
- **E01:S07:T05**
- **E01:S07:T06**
- **E01:S07:T07**
- **E01:S07:T08**
- **E01:S07:T09**
- **E01:S07:T10**
- **E01:S07:T11**
- **E01:S07:T12**
- **E01:S07:T13**
- **E01:S07:T14**
- **E01:S07:T15**
- **E01:S07:T16**
- **E01:S07:T17**
- **E01:S07:T18**
- **E01:S07:T19**
- **E01:S07:T20**
- **E01:S07:T21**
- **E01:S07:T22**
- **E01:S07:T23**
- **E01:S07:T24**

## E02 — Workflow Management (4S · 6T)

### E2:S01 – Release Workflow Rw [E02:S01]
- **E02:S01:T04**
- **E02:S01:T05**
- **E02:S01:T06**

### Story 5: Release Workflow & Versioning Infrastructure v2 [E02:S01]
- **E02:S01:T01**

### Epic 02, Story 01: Workflow Definitions & Patterns [E02:S01]
-

### Epic 02, Story 02: Repository Bootstrap [E02:S02]
- **E02:S02:T01** — *Arm B install completion (attempt 10)*
- **E02:S02:T02**

## E03 — Kanban Framework (8S · 12T)

### Epic 03, Story 01: Board Setup & Governance [E03:S01]
-

### E03:S01 – Kanban Board Info-Only Split [E03:S01]
- **E03:S01:T01**
- **E03:S01:T02**
- **E03:S01:T03**

### Epic 03, Story 02: FR Implementation [E03:S02]
-

### Epic 03, Story 03: BR Implementation [E03:S03]
-

### Epic 03, Story 04: UXR Implementation [E03:S04]
-

### Story 4: Kanban Process Governance [E03:S05]
- **E03:S05:T01**
- **E03:S05:T02**
- **E03:S05:T03**
- **E03:S05:T04**
- **E03:S05:T05**

### E03:S06 – Kanban Documentation Standardization [E03:S06]
- **E03:S06:T01**

### Story 1: Feature Ideas Capture & Organization [E03:S01]
- **E03:S01:T01**
- **E03:S01:T02**
- **E03:S01:T03**

## E04 — Project Architecture (1S · 2T)

### Epic 04, Story 01: ADR Scaffold & Architecture Layout [E04:S01]
- **E04:S01:T01** — *ADR template*
- **E04:S01:T02** — *docs/architecture layout*

## E05 — Documentation (5S · 16T)

### Epic 05, Story 01: Documentation Scaffold [E05:S01]
- **E05:S01:T01** — *README scaffold*
- **E05:S01:T02** — *CONTRIBUTING guide*

### Story 1: Migrate all documentation from docs/ to docs-pre-adk/KB/ and retire docs/ [E05:S01]
- **E05:S01:T00**
- **E05:S01:T01** — *README scaffold*
- **E05:S01:T02** — *CONTRIBUTING guide*
- **E05:S01:T03** — *LICENSE and legal metadata*
- **E05:S01:T04** — *AGENTS.md bootstrap*
- **E05:S01:T05** — *docs tree (governance vs user-docs)*
- **E05:S01:T06**
- **E05:S01:T07**
- **E05:S01:T08**
- **E05:S01:T09**
- **E05:S01:T10**

### Epic 05, Story 02: Maintainer Knowledge Base [E05:S02]
-

### Story 2: Ad-Hoc Documentation Updates [E05:S02]
- **E05:S02:T01**

### E5:S03 – Documentation Governance [E05:S03]
- **E05:S03:T01**
- **E05:S03:T02**

## E06 — Process Automation & CI/CD (3S · 4T)

### Epic 06, Story 01: CI/CD Pipeline Scaffold [E06:S01]
- **E06:S01:T01** — *Primary CI workflow*
- **E06:S01:T02** — *Lint and typecheck job*

### E06:S01 – Developer Tooling & Automation [E06:S01]
- **E06:S01:T01** — *Primary CI workflow*

### E06:S02 – CI Badge Enhancements [E06:S02]
- **E06:S02:T01**

## E07 — Security (1S · 2T)

### Epic 07, Story 01: Security Baseline [E07:S01]
- **E07:S01:T01** — *SECURITY.md*
- **E07:S01:T02** — *Dependency scanning workflow*

## E08 — Code Quality (7S · 30T)

### Epic 08, Story 01: Code Quality Scaffold [E08:S01]
- **E08:S01:T01** — *Static analysis scaffold (CodeQL)*
- **E08:S01:T02**

### Epic 08, Story 02: Review & Upkeep [E08:S02]
- **E08:S02:T01** — *Pre-commit hooks*
- **E08:S02:T02** — *Code review standards*

### Story 1: UAT Readiness Assessment & Blocker Resolution [E08:S01]
- **E08:S01:T01** — *Static analysis scaffold (CodeQL)*
- **E08:S01:T02**
- **E08:S01:T03**
- **E08:S01:T04**
- **E08:S01:T05**
- **E08:S01:T06**

### Story 2: Playability Audit & Critical Path Analysis [E08:S02]
- **E08:S02:T01** — *Pre-commit hooks*
- **E08:S02:T02** — *Code review standards*
- **E08:S02:T03** — *Refactor and upkeep cadence*
- **E08:S02:T04**
- **E08:S02:T05**

### Story 3: Usability Testing & UX Issues [E08:S03]
- **E08:S03:T01**
- **E08:S03:T02**
- **E08:S03:T03**
- **E08:S03:T04**
- **E08:S03:T05**

### Story 4: Game Balance & Economics Review [E08:S04]
- **E08:S04:T01**
- **E08:S04:T02**
- **E08:S04:T03**
- **E08:S04:T04**
- **E08:S04:T05**

### Story 5: UAT Feedback Integration & Prioritization [E08:S05]
- **E08:S05:T01**
- **E08:S05:T02**
- **E08:S05:T03**
- **E08:S05:T04**
- **E08:S05:T05**

## E30 — Galaxy, Map & Navigation (2S · 5T)

### E30:S04 – Galaxy & Environment Features [E30:S04]
- **E30:S04:T01**

### E30:S08 – Galaxy & Map Features [E30:S08]
- **E30:S08:T01**
- **E30:S08:T02**
- **E30:S08:T03**
- **E30:S08:T04**

## E31 — Ships & Fleet Movement (1S · 1T)

### E31:S03 – Ship Cargo Capacity [E31:S03]
- **E31:S03:T01**

## E32 — Economy & Resources (6S · 18T)

### E32:S02 – Localized Resource Production [E32:S02]
- **E32:S02:T01**

### E32:S03 – Localized Consumption [E32:S03]
- **E32:S03:T01**
- **E32:S03:T02**
- **E32:S03:T03**

### E32:S04 – Entity-Local Storage Model [E32:S04]
- **E32:S04:T01**
- **E32:S04:T02**
- **E32:S04:T03**

### E32:S05 – Resource Transfer System [E32:S05]
- **E32:S05:T01**
- **E32:S05:T02**
- **E32:S05:T03**
- **E32:S05:T04**
- **E32:S05:T05**
- **E32:S05:T06**
- **E32:S05:T07**
- **E32:S05:T08**
- **E32:S05:T09**

### E32:S06 – Save/Load Localized Storage [E32:S06]
- **E32:S06:T01**

### E32:S07 – Localized Migration Tests [E32:S07]
- **E32:S07:T01**

## E33 — Colonies & Population (11S · 38T)

### E33:S01 Colony Model & Data Structures [E33:S01]
-

### E33:S02 Colony Establishment System [E33:S02]
-

### E33:S03 Building System Foundation [E33:S03]
-

### E33:S04 Population Growth System [E33:S04]
-

### E33:S05 Colony Management Interface [E33:S05]
-

### E33:S06 Colony Establishment UI [E33:S06]
-

### E33:S07 – Indigenous Population Model & Data Structures [E33:S07]
- **E33:S07:T01**
- **E33:S07:T02**
- **E33:S07:T03**
- **E33:S07:T04**
- **E33:S07:T05**
- **E33:S07:T06**
- **E33:S07:T07**

### E33:S08 – Indigenous Population Taxation & Supply Generation [E33:S08]
- **E33:S08:T01**
- **E33:S08:T02**
- **E33:S08:T03**
- **E33:S08:T04**
- **E33:S08:T05**
- **E33:S08:T06**
- **E33:S08:T07**

### E33:S09 – Indigenous Population Tech Bonuses & System TL [E33:S09]
- **E33:S09:T01**
- **E33:S09:T02**
- **E33:S09:T03**
- **E33:S09:T04**
- **E33:S09:T05**
- **E33:S09:T06**
- **E33:S09:T07**
- **E33:S09:T08**
- **E33:S09:T09**

### E33:S10 – Playable Races & Archetypes [E33:S10]
- **E33:S10:T01**
- **E33:S10:T02**
- **E33:S10:T03**
- **E33:S10:T04**
- **E33:S10:T05**
- **E33:S10:T06**
- **E33:S10:T07**
- **E33:S10:T08**
- **E33:S10:T09**
- **E33:S10:T10**

### E33:S12 – Colony Establishment Resources [E33:S12]
- **E33:S12:T01**
- **E33:S12:T02**
- **E33:S12:T03**
- **E33:S12:T04**
- **E33:S12:T05**

## E34 — Ship Design & Construction (8S · 49T)

### Story 1: Ship Design Data Model [E34:S01]
- **E34:S01:T01**
- **E34:S01:T02**
- **E34:S01:T03**
- **E34:S01:T04**
- **E34:S01:T05**
- **E34:S01:T06**
- **E34:S01:T07**
- **E34:S01:T08**

### Story 2: Component System & Prerequisites [E34:S02]
- **E34:S02:T01**
- **E34:S02:T02**
- **E34:S02:T03**
- **E34:S02:T04**
- **E34:S02:T05**
- **E34:S02:T06**

### Story 3: Ship Design Manager [E34:S03]
- **E34:S03:T01**
- **E34:S03:T02**
- **E34:S03:T03**
- **E34:S03:T04**
- **E34:S03:T05**
- **E34:S03:T06**
- **E34:S03:T07**

### Story 4: Ship Construction Integration [E34:S04]
- **E34:S04:T01**
- **E34:S04:T02**
- **E34:S04:T03**
- **E34:S04:T04**
- **E34:S04:T05**
- **E34:S04:T06**

### Story 5: Ship Design UI [E34:S05]
- **E34:S05:T01**
- **E34:S05:T02**
- **E34:S05:T03**
- **E34:S05:T04**
- **E34:S05:T05**
- **E34:S05:T06**
- **E34:S05:T07**
- **E34:S05:T08**
- **E34:S05:T09**
- **E34:S05:T10**

### E34:S07 – Vgap Starbase Construction Ui [E34:S07]
- **E34:S07:T01**
- **E34:S07:T02**
- **E34:S07:T03**
- **E34:S07:T04**
- **E34:S07:T05**
- **E34:S07:T06**
- **E34:S07:T07**
- **E34:S07:T08**

### E34:S08 – Starting Fleet Construction [E34:S08]
- **E34:S08:T01**
- **E34:S08:T02**

### E34:S09 – Ship Construction Resource Fixes [E34:S09]
- **E34:S09:T01**
- **E34:S09:T02**

## E35 — Warfare, AI & Turn Loop (4S · 23T)

### E34:S01 – Ai Player Foundation [E34:S01]
- **E34:S01:T01**
- **E34:S01:T02**
- **E34:S01:T03**
- **E34:S01:T04**

### E35:S02 – AI Full Gameplay Implementation [E35:S02]
- **E35:S02:T01**
- **E35:S02:T02**
- **E35:S02:T03**
- **E35:S02:T04**
- **E35:S02:T05**
- **E35:S02:T06**
- **E35:S02:T07**
- **E35:S02:T08**
- **E35:S02:T09**
- **E35:S02:T10**

### E34:S03 – Ship Mission System [E34:S03]
- **E34:S03:T01**
- **E34:S03:T02**
- **E34:S03:T03**
- **E34:S03:T04**
- **E34:S03:T05**

### E34:S04 – Combat Resolution And Reports [E34:S04]
- **E34:S04:T01**
- **E34:S04:T02**
- **E34:S04:T03**
- **E34:S04:T04**

## E36 — Intelligence, Sensors & Diplomacy (5S · 0T)

### E34:S01 Design alliance & diplomacy system [E34:S01]
-

### E34:S02 Implement alliance data models [E34:S02]
-

### E34:S03 Implement intel sharing mechanics [E34:S03]
-

### E34:S04 Implement alliance UI (formation, management) [E34:S04]
-

### E34:S05 Integrate with sensor/visibility system [E34:S05]
-

## E37 — Session, Scenario & Starting Conditions (6S · 32T)

### Story 1: Design Homeworld and Starting Conditions System [E34:S01]
- **E34:S01:T01**
- **E34:S01:T02**
- **E34:S01:T03**
- **E34:S01:T04**
- **E34:S01:T05**
- **E34:S01:T06**
- **E34:S01:T07**

### Story 2: Implement Homeworld Infrastructure [E34:S02]
- **E34:S02:T01**
- **E34:S02:T02**
- **E34:S02:T03**
- **E34:S02:T04**
- **E34:S02:T05**
- **E34:S02:T06**

### Story 3: Implement Starting Ships with Proper Components [E34:S03]
- **E34:S03:T01**
- **E34:S03:T02**
- **E34:S03:T03**
- **E34:S03:T04**
- **E34:S03:T05**
- **E34:S03:T06**

### Story 4: Refactor Game Initialization System [E34:S04]
- **E34:S04:T01**
- **E34:S04:T02**
- **E34:S04:T03**
- **E34:S04:T04**
- **E34:S04:T05**
- **E34:S04:T06**
- **E34:S04:T07**
- **E34:S04:T08**
- **E34:S04:T09**
- **E34:S04:T10**

### E37:S09 – Homeworld & Session Resource Init [E37:S09]
- **E37:S09:T01**
- **E37:S09:T02**

### E34:S11 – Starting Conditions Improvements [E34:S11]
- **E34:S11:T01**

## E38 — Player UI & Experience (10S · 47T)

### E34:S04 – Rich Ship Screen [E34:S04]
- **E34:S04:T01**
- **E34:S04:T02**
- **E34:S04:T03**
- **E34:S04:T04**
- **E34:S04:T05**
- **E34:S04:T06**
- **E38:S04:T07**

### E34:S05 – Rich Planet Colony Screen [E34:S05]
- **E34:S05:T01**

### E34:S05 – UI/UX Enhancements [E34:S05]
- **E34:S05:T01**
- **E34:S05:T02**
- **E34:S05:T03**
- **E34:S05:T04**
- **E34:S05:T05**
- **E34:S05:T06**
- **E34:S05:T07**
- **E34:S05:T08**
- **E34:S05:T09**
- **E34:S05:T10**
- **E34:S05:T11**
- **E34:S05:T12**
- **E34:S05:T13**
- **E34:S05:T14**
- **E34:S05:T15**
- **E34:S05:T16**
- **E34:S05:T17**
- **E34:S05:T18**

### E34:S06 – Ai Visibility In Player Ui [E34:S06]
- **E34:S06:T01**
- **E34:S06:T02**

### Story 6: UI Navigation Improvements - Ships and Colonies Menu Buttons [E34:S06]
- **E34:S06:T01**
- **E34:S06:T02**
- **E34:S06:T03**
- **E34:S06:T04**
- **E34:S06:T05**
- **E34:S06:T06**

### E34:S07 - Galaxy View Navigation & Waypoint UX Improvements [E34:S07]
-

### E38:S07 – Resource Economy UI [E38:S07]
- **E38:S07:T01**
- **E38:S07:T02**
- **E38:S07:T03**
- **E38:S07:T04**
- **E38:S07:T05**
- **E38:S07:T06**
- **E38:S07:T07**

### E34:S08 - HUD Settings System (Sensor Overlay Toggle) [E34:S08]
-

### E34:S09 - Ship Visibility: Own Ships Only (Quick Fix) [E34:S09]
-

### Story 10: UI/UX Polish & Improvements [E34:S10]
- **E34:S10:T01**
- **E34:S10:T02**
- **E34:S10:T03**
- **E34:S10:T04**
- **E34:S10:T05**
- **E34:S10:T06**

## E39 — Game Balance Platform (GBP) (14S · 78T)

### E34:S01 – Colony & Resource Features [E34:S01]
- **E34:S01:T01**
- **E34:S01:T02**
- **E34:S01:T03**
- **E34:S01:T04**
- **E34:S01:T05**
- **E34:S01:T06**
- **E34:S01:T07**
- **E34:S01:T08**
- **E34:S01:T09**

### E34:S01 – Hull Parameter Specifications [E34:S01]
- **E34:S01:T01**
- **E34:S01:T02**
- **E34:S01:T03**
- **E34:S01:T04**
- **E34:S01:T05**
- **E34:S01:T06**
- **E34:S01:T07**
- **E34:S01:T08**
- **E34:S01:T09**
- **E34:S01:T10**
- **E34:S01:T11**
- **E34:S01:T12**
- **E34:S01:T13**
- **E34:S01:T14**
- **E34:S01:T15**
- **E34:S01:T16**
- **E34:S01:T17**
- **E34:S01:T18**
- **E34:S01:T19**
- **E34:S01:T20**
- **E34:S01:T21**
- **E34:S01:T22**
- **E34:S01:T23**
- **E34:S01:T24**
- **E34:S01:T25**
- **E34:S01:T26**
- **E34:S01:T27**
- **E34:S01:T28**
- **E34:S01:T29**
- **E34:S01:T30**

### E34:S02 – Game Balance & Configuration [E34:S02]
- **E34:S02:T01**
- **E34:S02:T02**
- **E34:S02:T03**
- **E34:S02:T04**
- **E34:S02:T05**
- **E34:S02:T06**
- **E34:S02:T07**

### E34:S03 – Resource Model Features [E34:S03]
- **E34:S03:T01**
- **E34:S03:T02**
- **E34:S03:T03**
- **E34:S03:T04**
- **E34:S03:T05**
- **E34:S03:T06**
- **E34:S03:T07**

### E39:S04 – Story 4 [E39:S04]
- **E39:S04:T01**

### E34:S06 – GBP Technology Models (TL & Research Vision) [E34:S06]
- **E34:S06:T01**

### E34:S12 – Simplify Tech System to VGAP Model [E34:S12]
- **E34:S12:T01**
- **E34:S12:T02**
- **E34:S12:T03**
- **E34:S12:T04**
- **E34:S12:T05**
- **E34:S12:T06**
- **E34:S12:T07**
- **E34:S12:T08**
- **E34:S12:T09**

### E34:S07 – Story 07 [E34:S07]
- **E34:S07:T10**

### E34:S08 – Story 08 [E34:S08]
- **E34:S08:T01**

### E34:S09 – Ship Design & Combat Features [E34:S09]
- **E34:S09:T01**
- **E34:S09:T02**
- **E34:S09:T03**
- **E34:S09:T04**
- **E34:S09:T05**
- **E34:S09:T06**

### E34:S09 – Story 09 [E34:S09]
- **E34:S09:T01**

### E34:S10 – Story 10 [E34:S10]
- **E34:S10:T01**

### E34:S13 – VGAP Production Features [E34:S13]
- **E34:S13:T01**

### E34:S14 – Minimal VGAP Playtestable Model [E34:S14]
- **E34:S14:T01**
- **E34:S14:T02**
- **E34:S14:T03**

## E40 — Narrative & Races (3S · 64T)

### Story 1: Productivity Efficiency & Happiness System Design [E40:S01]
- **E40:S01:T01**
- **E40:S01:T02**
- **E40:S01:T03**
- **E40:S01:T04**
- **E40:S01:T05**
- **E40:S01:T06**
- **E40:S01:T07**
- **E40:S01:T08**
- **E40:S01:T09**
- **E40:S01:T10**
- **E40:S01:T11**
- **E40:S01:T12**
- **E40:S01:T13**
- **E40:S01:T14**
- **E40:S01:T15**
- **E40:S01:T16**
- **E40:S01:T17**
- **E40:S01:T18**
- **E40:S01:T19**
- **E40:S01:T20**
- **E40:S01:T21**
- **E40:S01:T22**
- **E40:S01:T23**

### Story 2: Extreme Race System Implementation [E40:S02]
- **E40:S02:T01**
- **E40:S02:T02**
- **E40:S02:T03**
- **E40:S02:T04**
- **E40:S02:T05**
- **E40:S02:T06**
- **E40:S02:T07**
- **E40:S02:T08**
- **E40:S02:T09**
- **E40:S02:T10**
- **E40:S02:T11**
- **E40:S02:T12**
- **E40:S02:T13**
- **E40:S02:T14**
- **E40:S02:T15**

### Story 3: Computational Research & Empirical Validation [E40:S03]
- **E40:S03:T01**
- **E40:S03:T02**
- **E40:S03:T03**
- **E40:S03:T04**
- **E40:S03:T05**
- **E40:S03:T06**
- **E40:S03:T07**
- **E40:S03:T08**
- **E40:S03:T09**
- **E40:S03:T10**
- **E40:S03:T11**
- **E40:S03:T12**
- **E40:S03:T13**
- **E40:S03:T14**
- **E40:S03:T15**
- **E40:S03:T16**
- **E40:S03:T17**
- **E40:S03:T18**
- **E40:S03:T19**
- **E40:S03:T20**
- **E40:S03:T21**
- **E40:S03:T22**
- **E40:S03:T23**
- **E40:S03:T24**
- **E40:S03:T25**
- **E40:S03:T26**

