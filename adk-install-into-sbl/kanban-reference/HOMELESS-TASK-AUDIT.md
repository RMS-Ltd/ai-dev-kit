---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-25T16:34:55Z
expires_at: null
housekeeping_policy: keep
---

# Homeless task audit — pass 2 (E01:S99 consolidation)

**Role:** Manifest of every task moved to temporary holding `E01:S99`.
**Governance:** Final homes assigned via [E04:S09:T06](../../docs/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) / [FR-010](../../docs/kanban/fbu/FR-010-implement-actual-agentic-intelligence-task-mapping.md).
**Overlay:** [OPTIMISED-SBL-KANBAN-STRUCTURE.md](OPTIMISED-SBL-KANBAN-STRUCTURE.md) · **TSP:** [TARGET-EST-TREE.md](TARGET-EST-TREE.md)

| Metric | Count |
|--------|------:|
| Tasks in E01:S99 | 0 (cleared pass 3) |
| Unique tasks (repo-wide) | 342 |
| Pass 2 moves (historical) | 109 → S99 |
| Pass 3 + follow-up outcome | See [PASS-3-REDISTRIBUTION.md](PASS-3-REDISTRIBUTION.md) |

> **Superseded:** This audit documents pass 2 consolidation only. Pass 3 cleared `E01:S99` and applied [PASS-3-REDISTRIBUTION.md](PASS-3-REDISTRIBUTION.md).

## Audit criteria

1. **Story-home mismatch** — native `S` token does not match story section header (E01:S01↔S02 swap).
2. **Core-band contamination** — game/domain work filed under E01–E07 infra epics.
3. **Infra in domain** — repository hygiene tasks under E35.
4. **Duplicate / cross-epic** — same work duplicated or canonically owned elsewhere (e.g. E38:S07 ↔ E33:S07).
5. **Wrong story header** — section title references a different epic/story band.
6. **Unresolved** — no title; homeless pending M04 enrichment.
7. **UAT token mismatch** — E08-native tokens displayed under E41 band pending renumber.
8. **Megastory overflow** — oversized stories consolidated for triage (E34:S01, E40:S01/S02/S03).

## Pass 2 moves by category

### Legacy E01:S07 bug-fix bucket (retained as historical context) (24 tasks)

| Task | Title |
|------|-------|
| E01:S07:T01 | *Fix BR-041: Colonizer Ships Cannot Move - ✅ COMPLETE* |
| E01:S07:T02 | *Fix BR-042: Game Hangs During Startup at "Setting homeworld resources..." - ✅ COMPLETE* |
| E01:S07:T03 | *Fix BR-043: Fuel Capacity Validation Error During Game Initialization - ✅ COMPLETE* |
| E01:S07:T04 | *Fix BR-045: Ship Construction Dialog - System Tech Levels Section Right Overflow – ✅ COMPLETE (Implementation Complete, |
| E01:S07:T05 | *Update Kanban Board with E17:S12 Tasks – ✅ COMPLETE (Implementation Complete, v0.15.7.5+1)* |
| E01:S07:T06 | *Add EC Sub 1 Galaxy Preset and Pre-Game Selection Support – ✅ COMPLETE (Implementation Complete, v0.15.7.6+1)* |
| E01:S07:T07 | *Add Text Field Inputs to Pre-Game Environmental Parameters (FR-067) – ✅ COMPLETE (Implementation Complete, v0.15.7.7+1) |
| E01:S07:T08 | *Fix BR-046: Pre-Game Environmental Parameters Text Fields Become Uninteractable – ✅ COMPLETE (Implementation Complete,  |
| E01:S07:T09 | *Fix BR-047: EC Sub 1 Preset Selection Still Produces Full Echo Cluster – ✅ COMPLETE (Implementation Complete, v0.15.7.1 |
| E01:S07:T10 | *Fix BR-048: Mine and Factory Building Not Working on New Colonies - ⚠️ PARTIAL (Building sync fix implemented in v0.15. |
| E01:S07:T11 | *Fix BR-048 (Continued): Mine and Factory Building Still Not Working on New Colonies - ✅ COMPLETE (Investigation Task Cr |
| E01:S07:T12 | *Fix BR-049: Mines on Homeworld Do Not Extract Fuel - ✅ COMPLETE (Implementation Complete, v0.15.7.12+1)* |
| E01:S07:T13 | *Add Galaxy Size and Star Count Controls to Environmental Parameters (FR-068) - ✅ COMPLETE (Implementation Complete, v0. |
| E01:S07:T14 | *Fix BR-051: Lower Bound Value Erased When Setting Upper Bound in Range Parameters - ✅ COMPLETE* |
| E01:S07:T15 | *Implement FR-069: Remember Window Position Across App Restarts - ✅ COMPLETE (Implementation Complete, v0.15.7.18+1)* |
| E01:S07:T16 | *Fix BR-048 (Continued): Mine and Factory Building Still Not Working on New Colonies - ✅ COMPLETE (Implementation Comple |
| E01:S07:T17 | *Fix BR-052: Remove Research Lab and Farm from Game - ✅ COMPLETE (Implementation Complete, v0.15.7.17+2)* |
| E01:S07:T18 | *Implement FR-071: Pre-Game Configuration Settings Persistence - ✅ COMPLETE* |
| E01:S07:T19 | *Fix BR-048: Building Construction Not Working on New Colonies* |
| E01:S07:T20 | *Fix BR-047 (Continued): EC Sub 1 Preset Hangs During Galaxy Generation - ❌ CLOSED (Out of Date - 2026-01-22)* |
| E01:S07:T21 | *Fix FR-071: Mineral Density and Starting Resources Not Persisting - ✅ COMPLETE (Implementation Complete)* |
| E01:S07:T22 | *Fix BR-048 (Continued): Building Construction Still Not Working on New Colonies - ✅ COMPLETE (Implementation Complete)* |
| E01:S07:T23 | *Update Bug Reports and Tasks (BR-048, BR-054) - ✅ COMPLETE (Documentation Update)* |
| E01:S07:T24 | *Fix BR-048: Colony Population Not Updated When Colonists Transferred - ✅ COMPLETE (Implementation Complete)* |

### Megastory overflow from E34:S01 — Ship Design Data Model / Hull Parameters (30 tasks)

| Task | Title |
|------|-------|
| E34:S01:T01 | *Create `HullType` enum with basic hull types and properties* |
| E34:S01:T02 | *Create `ComponentType` enum and `ComponentCategory` enum* |
| E34:S01:T03 | *Create `ShipComponent` model with tech prerequisites* |
| E34:S01:T04 | *Create `ShipDesign` model with hull and component selections* |
| E34:S01:T05 | *Implement JSON serialization for `ShipDesign`* |
| E34:S01:T06 | *Create design template system* |
| E34:S01:T07 | *Write unit tests for all models* |
| E34:S01:T08 | *Add Hauler hull types (Small, Medium, Large Deep Space Hauler)* |
| E34:S01:T09 | *Implement Scoring System (FR-024)* |
| E34:S01:T10 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T11 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T12 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T13 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T14 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T15 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T16 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T17 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T18 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T19 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T20 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T21 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T22 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T23 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T24 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T25 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T26 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T27 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T28 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T29 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |
| E34:S01:T30 | *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)* |

### Megastory overflow from E40:S01 — Productivity Efficiency & Happiness System Design (23 tasks)

| Task | Title |
|------|-------|
| E40:S01:T01 | *PE/PEV Mechanic Design* |
| E40:S01:T02 | *Happiness Mechanic Design* |
| E40:S01:T03 | *Political Archetypes System* |
| E40:S01:T04 | *Extreme Race Design* |
| E40:S01:T05 | *Narrative-Driven Counter-Effects* |
| E40:S01:T06 | *Balance Constraints* |
| E40:S01:T07 | *Balance Validation System Design* |
| E40:S01:T08 | *Extreme Race UI Mockups* |
| E40:S01:T09 | *Narrative Template System* |
| E40:S01:T10 | *Implementation Story E18:S02* |
| E40:S01:T11 | *Computational Research Framework* |
| E40:S01:T12 | *Python Implementation Skeleton* |
| E40:S01:T13 | *Visualization Examples* |
| E40:S01:T14 | *Combined Paper Outline* |
| E40:S01:T15 | *Python Implementation Skeleton* |
| E40:S01:T16 | *Visualization Examples* |
| E40:S01:T17 | *Expanded Methodology* |
| E40:S01:T18 | *Combined Paper Outline Final* |
| E40:S01:T19 | *Research Execution Plan* |
| E40:S01:T20 | *Analysis Environment Setup* |
| E40:S01:T21 | *Playtesting Framework* |
| E40:S01:T22 | *Formula Comparison Study* |
| E40:S01:T23 | *Environment Isolation Setup* |

### Megastory overflow from E40:S03 — Computational Research & Empirical Validation (26 tasks)

| Task | Title |
|------|-------|
| E40:S03:T01 | *Set Up Analysis Environment* |
| E40:S03:T02 | *Formula Comparison Study* |
| E40:S03:T03 | *Run Configuration Space Analysis* |
| E40:S03:T04 | *Run Configuration Space Analysis* |
| E40:S03:T05 | *Perform Clustering Analysis* |
| E40:S03:T06 | *Discover Patterns* |
| E40:S03:T07 | *Generate Visualizations* |
| E40:S03:T08 | *Analyze and Document Results* |
| E40:S03:T09 | *Create Implementation Plan* |
| E40:S03:T10 | *Create Narrative Templates* |
| E40:S03:T11 | *Implement PE/H System Core* |
| E40:S03:T12 | *Implement Discovered Race Patterns* |
| E40:S03:T13 | *Implement Counter-Effects System* |
| E40:S03:T14 | *Implement Balance Validation* |
| E40:S03:T15 | *Create UI for Race Selection* |
| E40:S03:T16 | *Integration Testing* |
| E40:S03:T17 | *Design Playtest Framework* |
| E40:S03:T18 | *Set Up Analytics* |
| E40:S03:T19 | *Internal Testing Phase* |
| E40:S03:T20 | *Closed Beta Phase* |
| E40:S03:T21 | *Open Beta Phase* |
| E40:S03:T22 | *Data Analysis* |
| E40:S03:T23 | *Write Results Section* |
| E40:S03:T24 | *Update Discussion Section* |
| E40:S03:T25 | *Create Visualizations for Paper* |
| E40:S03:T26 | *Finalize Paper* |

### E01:S01/S02 story-home mismatch (pending native renumber) (13 tasks)

| Task | Title |
|------|-------|
| E01:S01:T01 | *CMW and PVW operations* |
| E01:S01:T02 | *Update Kanban Workflow (UKW)* |
| E01:S01:T03 | *Documentation hygiene* |
| E01:S01:T04 | *Infrastructure maintenance* |
| E01:S01:T05 | *CI pipeline health* |
| E01:S01:T06 | *Security scan hygiene* |
| E01:S02:T01 | *Define versioning schema (e.g., RC.EPIC.STORY.TASK+BUILD)* |
| E01:S02:T02 | *Document versioning policy* |
| E01:S02:T03 | *Create version file structure* |
| E01:S02:T04 | *Set up version tracking tools* |
| E01:S02:T05 | *Integrate versioning with release workflow* |
| E01:S02:T06 | *Create version bump automation* |
| E01:S02:T07 | *Set up changelog generation* |

### Core-band game contamination (E01–E07 mis-routed domain work) (19 tasks)

| Task | Title |
|------|-------|
| E01:S03:T05 | *Add unit tests for waypoint system* |
| E02:S01:T01 | *Improve coordinate conversion logic* |
| E02:S01:T04 | *Add unit tests for coordinate conversion* |
| E02:S01:T05 | *Fix BR-002: Waypoint offset after reset - MOVED to Epic 12 (Game Init & Maps) (2025-12-11, v0.15.4.1+2) - Migrated from |
| E02:S02:T02 | *Add per-turn movement range validation* |
| E03:S01:T01 | *Position model tests (100% coverage)* |
| E03:S01:T02 | *Ship model tests (100% coverage)* |
| E03:S01:T03 | *Galaxy generator tests (100% coverage)* |
| E03:S05:T01 | *Default Colony Establishment Location (FR-014)* |
| E03:S05:T02 | *Star System Name Formatting (FR-015)* |
| E03:S05:T03 | *Colony Establishment Validation (FR-016)* |
| E03:S05:T04 | *Fleet Roster Rename (FR-017)* |
| E03:S05:T05 | *Ship Construction Notifications (FR-018)* |
| E03:S06:T01 | *Fix Sensor Report Player Colony Detection (BR-033)* |
| E05:S01:T06 | *Add unit tests for queue manager* |
| E05:S02:T01 | *Create PathExecutionCoordinator interface* |
| E05:S03:T01 | *Create MovementAnimationManager interface* |
| E05:S03:T02 | *Implement synchronized ship movements* |
| E06:S02:T01 | *Define resource costs for ship movement* |

### Infra tasks mis-housed in domain epic E35 (3 tasks)

| Task | Title |
|------|-------|
| E35:S02:T01 | *Pre-commit hooks* |
| E35:S02:T02 | *Code review standards* |
| E35:S02:T03 | *Refactor and upkeep cadence* |

### Duplicate or cross-epic mis-housing (canonical copy retained at source epic) (14 tasks)

| Task | Title |
|------|-------|
| E38:S07:T01 | *Create IndigenousSpecies enum* |
| E38:S07:T02 | *Create IndigenousPopulation model* |
| E38:S07:T03 | *Add environmental tolerance system* |
| E38:S07:T04 | *Implement environmental tolerance system per species* |
| E38:S07:T05 | *Create species tech bonus definitions* |
| E38:S07:T06 | *Implement JSON serialization for indigenous population* |
| E38:S07:T07 | *Write unit tests for all models* |
| E37:S09:T01 | *Implement VGAP Hulls (FR-055)* |
| E37:S09:T02 | *Implement VGAP Weapons (FR-056) - ✅ COMPLETE (2026-01-18, v0.17.9.2+1)* |
| E33:S12:T01 | *(unresolved — story context: *E33:S12 – Colony Establishment Resources*)* |
| E33:S12:T02 | *Cap Tech Levels at 10 — ✅ COMPLETE (v0.17.12.2+1) - 2026-01-23 16:51:39 UTC* |
| E33:S12:T03 | *Remove Research Labs Dependency — ✅ COMPLETE (v0.17.12.3+1) - 2026-01-23 21:00:00 UTC* |
| E33:S12:T04 | *Replace Research Points with Direct Resource Payment — ✅ COMPLETE (v0.17.12.4+1) - 2026-01-23 21:25:00 UTC* |
| E33:S12:T05 | *Update Component Unlock Logic for 4 Fields — ✅ COMPLETE (v0.17.12.5+1) - 2026-01-23 22:05:00 UTC* |

### Wrong story header band (E38:S04 titled as E34:S04) (1 tasks)

| Task | Title |
|------|-------|
| E38:S04:T07 | *(unresolved — story context: *E34:S04 – Rich Ship Screen*)* |

### Unresolved titles (homeless pending M04) (18 tasks)

| Task | Title |
|------|-------|
| E30:S08:T01 | *(unresolved — story context: *E30:S08 – Galaxy & Map Features*)* |
| E30:S08:T02 | *(unresolved — story context: *E30:S08 – Galaxy & Map Features*)* |
| E30:S08:T03 | *(unresolved — story context: *E30:S08 – Galaxy & Map Features*)* |
| E30:S08:T04 | *(unresolved — story context: *E30:S08 – Galaxy & Map Features*)* |
| E32:S05:T05 | *(unresolved — story context: *E32:S05 – Resource Transfer System*)* |
| E32:S05:T06 | *(unresolved — story context: *E32:S05 – Resource Transfer System*)* |
| E32:S05:T07 | *(unresolved — story context: *E32:S05 – Resource Transfer System*)* |
| E32:S05:T08 | *(unresolved — story context: *E32:S05 – Resource Transfer System*)* |
| E32:S05:T09 | *(unresolved — story context: *E32:S05 – Resource Transfer System*)* |
| E32:S06:T01 | *(unresolved — story context: *E32:S06 – Save/Load Localized Storage*)* |
| E32:S07:T01 | *(unresolved — story context: *E32:S07 – Localized Migration Tests*)* |
| E34:S04:T07 | *(unresolved — story context: *Story 4: Refactor Game Initialization System*)* |
| E34:S06:T04 | *(unresolved — story context: *Story 6: UI Navigation Improvements - Ships and Colonies Menu Buttons*)* |
| E34:S06:T05 | *(unresolved — story context: *Story 6: UI Navigation Improvements - Ships and Colonies Menu Buttons*)* |
| E34:S06:T06 | *(unresolved — story context: *Story 6: UI Navigation Improvements - Ships and Colonies Menu Buttons*)* |
| E35:S02:T08 | *(unresolved — story context: *E35:S02 – AI Full Gameplay Implementation*)* |
| E35:S02:T09 | *(unresolved — story context: *E35:S02 – AI Full Gameplay Implementation*)* |
| E35:S02:T10 | *(unresolved — story context: *E35:S02 – AI Full Gameplay Implementation*)* |

### UAT tasks with native E08 tokens under E41 band (pending renumber) (26 tasks)

| Task | Title |
|------|-------|
| E08:S01:T01 | *Static analysis scaffold (CodeQL)* |
| E08:S01:T02 | *(Additional tasks per CATL manifest)** |
| E08:S01:T03 | *Document blocker resolution plan and prioritize* |
| E08:S01:T04 | *Implement minimal viable implementations for critical blockers* |
| E08:S01:T05 | *Create UAT test scenarios and playthrough scripts* |
| E08:S01:T06 | *Verify save/load functionality works for UAT sessions* |
| E08:S02:T01 | *Pre-commit hooks* |
| E08:S02:T02 | *Code review standards* |
| E08:S02:T03 | *Refactor and upkeep cadence* |
| E08:S02:T04 | *Document unclear objectives, missing feedback, or confusing flows* |
| E08:S02:T05 | *Create playability audit report with findings and recommendations* |
| E08:S03:T01 | *Create usability test scenarios for each major UI component* |
| E08:S03:T02 | *Test UI components with focus on discoverability and clarity* |
| E08:S03:T03 | *Document UX issues (confusing labels, unclear feedback, poor navigation)* |
| E08:S03:T04 | *Test onboarding experience for new players* |
| E08:S03:T05 | *Create UX improvement backlog prioritized by impact* |
| E08:S04:T01 | *Audit all resource costs and production rates - ✅ COMPLETE* |
| E08:S04:T02 | *Test colony growth rates and building costs - ✅ COMPLETE* |
| E08:S04:T03 | *Review research costs and unlock pacing — OBSOLETE (VGAP adoption)* |
| E08:S04:T04 | *Test ship design costs and construction economics* |
| E08:S04:T05 | *Create balance recommendations document* |
| E08:S05:T01 | *Compile all UAT findings from previous stories* |
| E08:S05:T02 | *Prioritize findings by severity and impact* |
| E08:S05:T03 | *Create improvement backlog with estimated effort* |
| E08:S05:T04 | *Define "UAT Ready" criteria for future releases* |
| E08:S05:T05 | *Plan next epic priorities based on UAT findings* |

### Megastory overflow from E40:S02 — Extreme Race System Implementation (15 tasks)

| Task | Title |
|------|-------|
| E40:S02:T01 | *Create Balance Validation Framework* |
| E40:S02:T02 | *Implement Configuration-Time Validation* |
| E40:S02:T03 | *Implement Runtime Validation* |
| E40:S02:T04 | *Create Balance Reporting System* |
| E40:S02:T05 | *Create Race Selection Screen Foundation* |
| E40:S02:T06 | *Implement Extreme Race Card Component* |
| E40:S02:T07 | *Create Detail Panels* |
| E40:S02:T08 | *Implement Balance Status Display* |
| E40:S02:T09 | *Add Responsive Design* |
| E40:S02:T10 | *Create Narrative Template System* |
| E40:S02:T11 | *Implement Narrative Display* |
| E40:S02:T12 | *Create Narrative Editor Tools* |
| E40:S02:T13 | *Integrate with Game Initialization* |
| E40:S02:T14 | *Create Integration Tests* |
| E40:S02:T15 | *Documentation & Examples* |
