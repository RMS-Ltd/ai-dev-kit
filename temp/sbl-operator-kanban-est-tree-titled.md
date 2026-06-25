---
lifecycle: evergreen
created_at: 2026-06-16T12:00:00Z
housekeeping_policy: keep
---

# Starborn Legacy — operator-tweaked Kanban E/S/T tree (titled)

**Canonical ADK mirror:** [`adk-install-into-sbl/attempt-10/operator-rework-archive/OPERATOR-REWORKED-EST-TREE.md`](../adk-install-into-sbl/attempt-10/operator-rework-archive/OPERATOR-REWORKED-EST-TREE.md)

**Supersedes:** [`sbl-operator-kanban-est-tree-full.md`](sbl-operator-kanban-est-tree-full.md)

**Sources:** Operator freeze [`KMA-REFERENCE-EST-TREE-ATTEMPT-09.md`](https://github.com/RMS-Ltd/starborn-legacy/blob/dev/docs/adk-feedback/attempt-09/KMA-REFERENCE-EST-TREE-ATTEMPT-09.md); titles from SBL legacy archive `docs-pre-ai-dev-kit/project-management/kanban/` (+ `docs/kanban/`, `plan_archive/`) @ `dev`.

| Metric | Count |
|--------|------:|
| Task lines | 473 |
| **Named** | **432** (91.3%) |
| Unresolved | 41 |
| Legacy title index | 724 |

Resolution order: direct `E:S:T` match → operator-epic→legacy-epic remap (same S,T) → fuzzy story-title match within mapped epics → unique (S,T) disambiguation. Unresolved rows include operator story-section context where available.

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
- **E01:S02:T01** — *Define versioning schema (e.g., RC.EPIC.STORY.TASK+BUILD)*
- **E01:S02:T02** — *Document versioning policy*
- **E01:S02:T03** — *Create version file structure*
- **E01:S02:T04** — *Set up version tracking tools*
- **E01:S02:T05** — *Integrate versioning with release workflow*
- **E01:S02:T06** — *Create version bump automation*
- **E01:S02:T07** — *Set up changelog generation*

### Epic 01, Story 02: Versioning & Release Numbering [E01:S02]
- **E01:S02:T01** — *Define versioning schema (e.g., RC.EPIC.STORY.TASK+BUILD)*
- **E01:S02:T02** — *Document versioning policy*

### E01:S03 – Release Versioning Hardening (Dual-Version Model) [E01:S03]
- **E01:S03:T01** — *Test runner and project layout*
- **E01:S03:T02** — *CI test job wiring*
- **E01:S03:T03** — *Coverage and quality gates*
- **E01:S03:T04** — *Document test conventions*
- **E01:S03:T05** — *Add unit tests for waypoint system*

### Epic 01, Story 03: Test Harness & Gates [E01:S03]
- **E01:S03:T01** — *Test runner and project layout*
- **E01:S03:T02** — *CI test job wiring*

### E1:S07 – Bug Fixes [E01:S07]
- **E01:S07:T01** — *Fix BR-041: Colonizer Ships Cannot Move - ✅ COMPLETE*
- **E01:S07:T02** — *Fix BR-042: Game Hangs During Startup at "Setting homeworld resources..." - ✅ COMPLETE*
- **E01:S07:T03** — *Fix BR-043: Fuel Capacity Validation Error During Game Initialization - ✅ COMPLETE*
- **E01:S07:T04** — *Fix BR-045: Ship Construction Dialog - System Tech Levels Section Right Overflow – ✅ COMPLETE (Implementation Complete, v0.15.7.4+1)*
- **E01:S07:T05** — *Update Kanban Board with E17:S12 Tasks – ✅ COMPLETE (Implementation Complete, v0.15.7.5+1)*
- **E01:S07:T06** — *Add EC Sub 1 Galaxy Preset and Pre-Game Selection Support – ✅ COMPLETE (Implementation Complete, v0.15.7.6+1)*
- **E01:S07:T07** — *Add Text Field Inputs to Pre-Game Environmental Parameters (FR-067) – ✅ COMPLETE (Implementation Complete, v0.15.7.7+1)*
- **E01:S07:T08** — *Fix BR-046: Pre-Game Environmental Parameters Text Fields Become Uninteractable – ✅ COMPLETE (Implementation Complete, v0.15.7.8+1)*
- **E01:S07:T09** — *Fix BR-047: EC Sub 1 Preset Selection Still Produces Full Echo Cluster – ✅ COMPLETE (Implementation Complete, v0.15.7.10+1)*
- **E01:S07:T10** — *Fix BR-048: Mine and Factory Building Not Working on New Colonies - ⚠️ PARTIAL (Building sync fix implemented in v0.15.7.10+3, but issue persists - continued in T011)*
- **E01:S07:T11** — *Fix BR-048 (Continued): Mine and Factory Building Still Not Working on New Colonies - ✅ COMPLETE (Investigation Task Created, v0.15.7.11+1)*
- **E01:S07:T12** — *Fix BR-049: Mines on Homeworld Do Not Extract Fuel - ✅ COMPLETE (Implementation Complete, v0.15.7.12+1)*
- **E01:S07:T13** — *Add Galaxy Size and Star Count Controls to Environmental Parameters (FR-068) - ✅ COMPLETE (Implementation Complete, v0.15.7.13+3, BR-050 fixed)*
- **E01:S07:T14** — *Fix BR-051: Lower Bound Value Erased When Setting Upper Bound in Range Parameters - ✅ COMPLETE*
- **E01:S07:T15** — *Implement FR-069: Remember Window Position Across App Restarts - ✅ COMPLETE (Implementation Complete, v0.15.7.18+1)*
- **E01:S07:T16** — *Fix BR-048 (Continued): Mine and Factory Building Still Not Working on New Colonies - ✅ COMPLETE (Implementation Complete, v0.15.7.18+1)*
- **E01:S07:T17** — *Fix BR-052: Remove Research Lab and Farm from Game - ✅ COMPLETE (Implementation Complete, v0.15.7.17+2)*
- **E01:S07:T18** — *Implement FR-071: Pre-Game Configuration Settings Persistence - ✅ COMPLETE*
- **E01:S07:T19** — *Fix BR-048: Building Construction Not Working on New Colonies*
- **E01:S07:T20** — *Fix BR-047 (Continued): EC Sub 1 Preset Hangs During Galaxy Generation - ❌ CLOSED (Out of Date - 2026-01-22)*
- **E01:S07:T21** — *Fix FR-071: Mineral Density and Starting Resources Not Persisting - ✅ COMPLETE (Implementation Complete)*
- **E01:S07:T22** — *Fix BR-048 (Continued): Building Construction Still Not Working on New Colonies - ✅ COMPLETE (Implementation Complete)*
- **E01:S07:T23** — *Update Bug Reports and Tasks (BR-048, BR-054) - ✅ COMPLETE (Documentation Update)*
- **E01:S07:T24** — *Fix BR-048: Colony Population Not Updated When Colonists Transferred - ✅ COMPLETE (Implementation Complete)*

## E02 — Workflow Management (4S · 6T)

### E2:S01 – Release Workflow Rw [E02:S01]
- **E02:S01:T04** — *Add unit tests for coordinate conversion*
- **E02:S01:T05** — *Fix BR-002: Waypoint offset after reset - MOVED to Epic 12 (Game Init & Maps) (2025-12-11, v0.15.4.1+2) - Migrated from E15:S01 - Navigation bug fix, not release workflow. See: docs/e15-s01-scope-drift-analysis-2025-12-1*
- **E02:S01:T06** — *Create version renumbering strategy document*

### Story 5: Release Workflow & Versioning Infrastructure v2 [E02:S01]
- **E02:S01:T01** — *Improve coordinate conversion logic*

### Epic 02, Story 01: Workflow Definitions & Patterns [E02:S01]
-

### Epic 02, Story 02: Repository Bootstrap [E02:S02]
- **E02:S02:T01** — *Arm B install completion (attempt 10)*
- **E02:S02:T02** — *Add per-turn movement range validation*

## E03 — Kanban Framework (8S · 12T)

### Epic 03, Story 01: Board Setup & Governance [E03:S01]
-

### E03:S01 – Kanban Board Info-Only Split [E03:S01]
- **E03:S01:T01** — *Position model tests (100% coverage)*
- **E03:S01:T02** — *Ship model tests (100% coverage)*
- **E03:S01:T03** — *Galaxy generator tests (100% coverage)*

### Epic 03, Story 02: FR Implementation [E03:S02]
-

### Epic 03, Story 03: BR Implementation [E03:S03]
-

### Epic 03, Story 04: UXR Implementation [E03:S04]
-

### Story 4: Kanban Process Governance [E03:S05]
- **E03:S05:T01** — *Default Colony Establishment Location (FR-014)*
- **E03:S05:T02** — *Star System Name Formatting (FR-015)*
- **E03:S05:T03** — *Colony Establishment Validation (FR-016)*
- **E03:S05:T04** — *Fleet Roster Rename (FR-017)*
- **E03:S05:T05** — *Ship Construction Notifications (FR-018)*

### E03:S06 – Kanban Documentation Standardization [E03:S06]
- **E03:S06:T01** — *Fix Sensor Report Player Colony Detection (BR-033)*

### Story 1: Feature Ideas Capture & Organization [E03:S01]
- **E03:S01:T01** — *Position model tests (100% coverage)*
- **E03:S01:T02** — *Ship model tests (100% coverage)*
- **E03:S01:T03** — *Galaxy generator tests (100% coverage)*

## E04 — Project Architecture (1S · 2T)

### Epic 04, Story 01: ADR Scaffold & Architecture Layout [E04:S01]
- **E04:S01:T01** — *ADR template*
- **E04:S01:T02** — *docs/architecture layout*

## E05 — Documentation (5S · 16T)

### Epic 05, Story 01: Documentation Scaffold [E05:S01]
- **E05:S01:T01** — *README scaffold*
- **E05:S01:T02** — *CONTRIBUTING guide*

### Story 1: Migrate all documentation from docs/ to docs-pre-adk/KB/ and retire docs/ [E05:S01]
- **E05:S01:T00** — *Documentation: Resource Model, Monetization Strategy, and Copyright Research*
- **E05:S01:T01** — *README scaffold*
- **E05:S01:T02** — *CONTRIBUTING guide*
- **E05:S01:T03** — *LICENSE and legal metadata*
- **E05:S01:T04** — *AGENTS.md bootstrap*
- **E05:S01:T05** — *docs tree (governance vs user-docs)*
- **E05:S01:T06** — *Add unit tests for queue manager*
- **E05:S01:T07** — *Update all file references (links, imports, cross-references)*
- **E05:S01:T08** — *Update code/config that references docs/ paths*
- **E05:S01:T09** — *Verify all migrated documentation is accessible*
- **E05:S01:T10** — *Retire docs/ directory (delete or mark as deprecated)*

### Epic 05, Story 02: Maintainer Knowledge Base [E05:S02]
-

### Story 2: Ad-Hoc Documentation Updates [E05:S02]
- **E05:S02:T01** — *Create PathExecutionCoordinator interface*

### E5:S03 – Documentation Governance [E05:S03]
- **E05:S03:T01** — *Create MovementAnimationManager interface*
- **E05:S03:T02** — *Implement synchronized ship movements*

## E06 — Process Automation & CI/CD (3S · 4T)

### Epic 06, Story 01: CI/CD Pipeline Scaffold [E06:S01]
- **E06:S01:T01** — *Primary CI workflow*
- **E06:S01:T02** — *Lint and typecheck job*

### E06:S01 – Developer Tooling & Automation [E06:S01]
- **E06:S01:T01** — *Primary CI workflow*

### E06:S02 – CI Badge Enhancements [E06:S02]
- **E06:S02:T01** — *Define resource costs for ship movement*

## E07 — Security (1S · 2T)

### Epic 07, Story 01: Security Baseline [E07:S01]
- **E07:S01:T01** — *SECURITY.md*
- **E07:S01:T02** — *Dependency scanning workflow*

## E08 — Code Quality (7S · 30T)

### Epic 08, Story 01: Code Quality Scaffold [E08:S01]
- **E08:S01:T01** — *Static analysis scaffold (CodeQL)*
- **E08:S01:T02** — *(Additional tasks per CATL manifest)**

### Epic 08, Story 02: Review & Upkeep [E08:S02]
- **E08:S02:T01** — *Pre-commit hooks*
- **E08:S02:T02** — *Code review standards*

### Story 1: UAT Readiness Assessment & Blocker Resolution [E08:S01]
- **E08:S01:T01** — *Static analysis scaffold (CodeQL)*
- **E08:S01:T02** — *(Additional tasks per CATL manifest)**
- **E08:S01:T03** — *Document blocker resolution plan and prioritize*
- **E08:S01:T04** — *Implement minimal viable implementations for critical blockers*
- **E08:S01:T05** — *Create UAT test scenarios and playthrough scripts*
- **E08:S01:T06** — *Verify save/load functionality works for UAT sessions*

### Story 2: Playability Audit & Critical Path Analysis [E08:S02]
- **E08:S02:T01** — *Pre-commit hooks*
- **E08:S02:T02** — *Code review standards*
- **E08:S02:T03** — *Refactor and upkeep cadence*
- **E08:S02:T04** — *Document unclear objectives, missing feedback, or confusing flows*
- **E08:S02:T05** — *Create playability audit report with findings and recommendations*

### Story 3: Usability Testing & UX Issues [E08:S03]
- **E08:S03:T01** — *Create usability test scenarios for each major UI component*
- **E08:S03:T02** — *Test UI components with focus on discoverability and clarity*
- **E08:S03:T03** — *Document UX issues (confusing labels, unclear feedback, poor navigation)*
- **E08:S03:T04** — *Test onboarding experience for new players*
- **E08:S03:T05** — *Create UX improvement backlog prioritized by impact*

### Story 4: Game Balance & Economics Review [E08:S04]
- **E08:S04:T01** — *Audit all resource costs and production rates - ✅ COMPLETE*
- **E08:S04:T02** — *Test colony growth rates and building costs - ✅ COMPLETE*
- **E08:S04:T03** — *Review research costs and unlock pacing — OBSOLETE (VGAP adoption)*
- **E08:S04:T04** — *Test ship design costs and construction economics*
- **E08:S04:T05** — *Create balance recommendations document*

### Story 5: UAT Feedback Integration & Prioritization [E08:S05]
- **E08:S05:T01** — *Compile all UAT findings from previous stories*
- **E08:S05:T02** — *Prioritize findings by severity and impact*
- **E08:S05:T03** — *Create improvement backlog with estimated effort*
- **E08:S05:T04** — *Define "UAT Ready" criteria for future releases*
- **E08:S05:T05** — *Plan next epic priorities based on UAT findings*

## E30 — Galaxy, Map & Navigation (2S · 5T)

### E30:S04 – Galaxy & Environment Features [E30:S04]
- **E30:S04:T01** — *Implement turn counter*

### E30:S08 – Galaxy & Map Features [E30:S08]
- **E30:S08:T01** — *(unresolved — story context: *E30:S08 – Galaxy & Map Features*)*
- **E30:S08:T02** — *(unresolved — story context: *E30:S08 – Galaxy & Map Features*)*
- **E30:S08:T03** — *(unresolved — story context: *E30:S08 – Galaxy & Map Features*)*
- **E30:S08:T04** — *(unresolved — story context: *E30:S08 – Galaxy & Map Features*)*

## E31 — Ships & Fleet Movement (1S · 1T)

### E31:S03 – Ship Cargo Capacity [E31:S03]
- **E31:S03:T01** — *Clear movement path visualization*

## E32 — Economy & Resources (6S · 18T)

### E32:S02 – Localized Resource Production [E32:S02]
- **E32:S02:T01** — *Define resource costs for ship movement*

### E32:S03 – Localized Consumption [E32:S03]
- **E32:S03:T01** — *Add ResourceStorage to Ship model*
- **E32:S03:T02** — *Add ResourceStorage to Planet model*
- **E32:S03:T03** — *Update ResourceManager to support entity storage*

### E32:S04 – Entity-Local Storage Model [E32:S04]
- **E32:S04:T01** — *Create ResourceTransfer interface*
- **E32:S04:T02** — *Implement SimpleResourceTransfer*
- **E32:S04:T03** — *Add transfer validation (capacity, availability)*

### E32:S05 – Resource Transfer System [E32:S05]
- **E32:S05:T01** — *Add production indicators to ResourceDisplay*
- **E32:S05:T02** — *Add consumption indicators to ResourceDisplay*
- **E32:S05:T03** — *Add production/consumption summary panel*
- **E32:S05:T04** — *Add visual feedback for insufficient resources*
- **E32:S05:T05** — *(unresolved — story context: *E32:S05 – Resource Transfer System*)*
- **E32:S05:T06** — *(unresolved — story context: *E32:S05 – Resource Transfer System*)*
- **E32:S05:T07** — *(unresolved — story context: *E32:S05 – Resource Transfer System*)*
- **E32:S05:T08** — *(unresolved — story context: *E32:S05 – Resource Transfer System*)*
- **E32:S05:T09** — *(unresolved — story context: *E32:S05 – Resource Transfer System*)*

### E32:S06 – Save/Load Localized Storage [E32:S06]
- **E32:S06:T01** — *(unresolved — story context: *E32:S06 – Save/Load Localized Storage*)*

### E32:S07 – Localized Migration Tests [E32:S07]
- **E32:S07:T01** — *(unresolved — story context: *E32:S07 – Localized Migration Tests*)*

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
- **E33:S07:T01** — *Create IndigenousSpecies enum*
- **E33:S07:T02** — *Create IndigenousPopulation model*
- **E33:S07:T03** — *Add environmental tolerance system*
- **E33:S07:T04** — *Implement environmental tolerance system per species*
- **E33:S07:T05** — *Create species tech bonus definitions*
- **E33:S07:T06** — *Implement JSON serialization for indigenous population*
- **E33:S07:T07** — *Write unit tests for all models*

### E33:S08 – Indigenous Population Taxation & Supply Generation [E33:S08]
- **E33:S08:T01** — *Create indigenous taxation system*
- **E33:S08:T02** — *Implement supply generation from productivity*
- **E33:S08:T03** — *Add taxation UI controls (tax rate slider)*
- **E33:S08:T04** — *Integrate taxation into turn processing*
- **E33:S08:T05** — *Add pacification mechanics (hostile vs. pacified)*
- **E33:S08:T06** — *Implement happiness/unrest system for indigenous populations - DEFERRED (future story)*
- **E33:S08:T07** — *Write comprehensive unit tests*

### E33:S09 – Indigenous Population Tech Bonuses & System TL [E33:S09]
- **E33:S09:T01** — *Design per-system TL tracking system*
- **E33:S09:T02** — *Create SystemTL model*
- **E33:S09:T03** — *Create SystemTLManager interface and implementation*
- **E33:S09:T04** — *Implement tech bonus application*
- **E33:S09:T05** — *Add system TL display in UI*
- **E33:S09:T06** — *Integrate system TL with component unlocks*
- **E33:S09:T07** — *Write comprehensive unit tests*
- **E33:S09:T08** — *Implement Food resource type for Farm building production*
- **E33:S09:T09** — *Implement Research resource type for Research Lab building production*

### E33:S10 – Playable Races & Archetypes [E33:S10]
- **E33:S10:T01** — *Create `PlayableRace` enum with race archetypes*
- **E33:S10:T02** — *Create `RaceTrait` model with bonuses and abilities*
- **E33:S10:T03** — *Design race archetypes inspired by VGA Planets*
- **E33:S10:T04** — *Implement race-specific bonuses and abilities*
- **E33:S10:T05** — *Create race selection UI (game setup)*
- **E33:S10:T06** — *Add custom race naming system*
- **E33:S10:T07** — *Implement customizable grammatical forms*
- **E33:S10:T08** — *Integrate race traits with colony management*
- **E33:S10:T09** — *Integrate race traits with research/ship design*
- **E33:S10:T10** — *Write comprehensive unit tests*

### E33:S12 – Colony Establishment Resources [E33:S12]
- **E33:S12:T01** — *(unresolved — story context: *E33:S12 – Colony Establishment Resources*)*
- **E33:S12:T02** — *Cap Tech Levels at 10 — ✅ COMPLETE (v0.17.12.2+1) - 2026-01-23 16:51:39 UTC*
- **E33:S12:T03** — *Remove Research Labs Dependency — ✅ COMPLETE (v0.17.12.3+1) - 2026-01-23 21:00:00 UTC*
- **E33:S12:T04** — *Replace Research Points with Direct Resource Payment — ✅ COMPLETE (v0.17.12.4+1) - 2026-01-23 21:25:00 UTC*
- **E33:S12:T05** — *Update Component Unlock Logic for 4 Fields — ✅ COMPLETE (v0.17.12.5+1) - 2026-01-23 22:05:00 UTC*

## E34 — Ship Design & Construction (8S · 49T)

### Story 1: Ship Design Data Model [E34:S01]
- **E34:S01:T01** — *Create `HullType` enum with basic hull types and properties*
- **E34:S01:T02** — *Create `ComponentType` enum and `ComponentCategory` enum*
- **E34:S01:T03** — *Create `ShipComponent` model with tech prerequisites*
- **E34:S01:T04** — *Create `ShipDesign` model with hull and component selections*
- **E34:S01:T05** — *Implement JSON serialization for `ShipDesign`*
- **E34:S01:T06** — *Create design template system*
- **E34:S01:T07** — *Write unit tests for all models*
- **E34:S01:T08** — *Add Hauler hull types (Small, Medium, Large Deep Space Hauler)*

### Story 2: Component System & Prerequisites [E34:S02]
- **E34:S02:T01** — *Create `ComponentCatalog` class with component definitions*
- **E34:S02:T02** — *Create `ComponentValidator` interface for prerequisite checking*
- **E34:S02:T03** — *Implement `SimpleComponentValidator` with ResearchManager integration*
- **E34:S02:T04** — *Implement slot system validation methods*
- **E34:S02:T05** — *Add component filtering methods (by availability, category)*
- **E34:S02:T06** — *Write comprehensive unit tests for validation logic*

### Story 3: Ship Design Manager [E34:S03]
- **E34:S03:T01** — *Create `ShipDesignManager` class structure with dependencies*
- **E34:S03:T02** — *Implement design creation methods (from scratch, from template)*
- **E34:S03:T03** — *Integrate design validation using `IComponentValidator`*
- **E34:S03:T04** — *Implement design cost calculation methods*
- **E34:S03:T05** — *Add saved designs CRUD operations (create, read, update, delete)*
- **E34:S03:T06** — *Implement JSON serialization/deserialization for manager state*
- **E34:S03:T07** — *Write comprehensive unit tests for all manager operations*

### Story 4: Ship Construction Integration [E34:S04]
- **E34:S04:T01** — *Design ship construction integration with colony system*
- **E34:S04:T02** — *Extend GameStateManager with ship construction method*
- **E34:S04:T03** — *Integrate ShipDesignManager with colony construction*
- **E34:S04:T04** — *Implement ship creation from design at colony*
- **E34:S04:T05** — *Add ship construction UI to colony management panel*
- **E34:S04:T06** — *Write unit tests for ship construction*

### Story 5: Ship Design UI [E34:S05]
- **E34:S05:T01** — *Design ship design UI structure and user flow*
- **E34:S05:T02** — *Create ship design creation screen/dialog*
- **E34:S05:T03** — *Implement hull type selection UI*
- **E34:S05:T04** — *Implement component selection UI by category*
- **E34:S05:T05** — *Add design validation feedback display*
- **E34:S05:T06** — *Implement design preview with stats and cost*
- **E34:S05:T07** — *Add design save/load functionality in UI*
- **E34:S05:T08** — *Integrate design UI into main game interface*
- **E34:S05:T09** — *Write widget tests for design UI components*
- **E34:S05:T10** — *Add confirmation dialog for hull type change with existing components*

### E34:S07 – Vgap Starbase Construction Ui [E34:S07]
- **E34:S07:T01** — *Implement AI Player/Race System for Combat Testing (FR-052) - ✅ COMPLETE (Phases 1-5 Complete, v0.17.7.1+5)*
- **E34:S07:T02** — *Filter AI Ships from Player UI - ✅ COMPLETE*
- **E34:S07:T03** — *Implement Configurable AI Player Count in Pre-Game Settings (FR-070, BR-053) — ✅ COMPLETE (verified complete in v0.17.7.19+1) - 2026-02-09 13:44:16 UTC*
- **E34:S07:T04** — *Fix BR-054: AI Players Not Appearing in 10-Star System Galaxy — ✅ COMPLETE (Implementation Complete, version unknown)*
- **E34:S07:T05** — *Fix BR-055: Combat Interaction Not Working with AI Ships — ✅ COMPLETE (Implementation Complete, version unknown)*
- **E34:S07:T06** — *Fix BR-056: Sensor Scans Not Detecting AI Colonies — ✅ COMPLETE (Implementation Complete, version unknown)*
- **E34:S07:T07** — *Fix AI Colony Establishment and Ship Interaction - ✅ COMPLETE (Implementation Complete)*
- **E34:S07:T08** — *Implement Ship Mission System: Data Model (FR-072) — ✅ COMPLETE (v0.17.7.8+1) - 2026-01-23 12:00:00 UTC*

### E34:S08 – Starting Fleet Construction [E34:S08]
- **E34:S08:T01** — *Implement Galaxy Creation Control via GBP (FR-054) - ✅ COMPLETE (v0.17.8.1+1) - Implementation Complete - Created `config/galaxy.yaml` with galaxy generation parameters (temperature, mineral density, starting resources).*
- **E34:S08:T02** — *Add Tests for GalaxyConfig and Preset-Based Generation (FR-054) - ✅ COMPLETE (v0.17.8.2+1) - Testing Complete - Created comprehensive unit tests for GalaxyConfig (load, defaultConfig, copyWith). Created preset-based gene*

### E34:S09 – Ship Construction Resource Fixes [E34:S09]
- **E34:S09:T01** — *Implement VGAP Hulls (FR-055)*
- **E34:S09:T02** — *Implement VGAP Weapons (FR-056) - ✅ COMPLETE (2026-01-18, v0.17.9.2+1)*

## E35 — Warfare, AI & Turn Loop (4S · 23T)

### E34:S01 – Ai Player Foundation [E34:S01]
- **E34:S01:T01** — *Create `HullType` enum with basic hull types and properties*
- **E34:S01:T02** — *Create `ComponentType` enum and `ComponentCategory` enum*
- **E34:S01:T03** — *Create `ShipComponent` model with tech prerequisites*
- **E34:S01:T04** — *Create `ShipDesign` model with hull and component selections*

### E35:S02 – AI Full Gameplay Implementation [E35:S02]
- **E35:S02:T01** — *Pre-commit hooks*
- **E35:S02:T02** — *Code review standards*
- **E35:S02:T03** — *Refactor and upkeep cadence*
- **E35:S02:T04** — *Analyze Current GBP System and Identify Limitations (FR-061) - ✅ COMPLETE*
- **E35:S02:T05** — *Design Tech Level-Based Component Support (FR-061) - ✅ COMPLETE*
- **E35:S02:T06** — *Design Rule Set Configuration and FSM Integration (FR-061) - ✅ COMPLETE*
- **E35:S02:T07** — *Create Comprehensive Design Document and Migration Path (FR-061) - ✅ COMPLETE*
- **E35:S02:T08** — *(unresolved — story context: *E35:S02 – AI Full Gameplay Implementation*)*
- **E35:S02:T09** — *(unresolved — story context: *E35:S02 – AI Full Gameplay Implementation*)*
- **E35:S02:T10** — *(unresolved — story context: *E35:S02 – AI Full Gameplay Implementation*)*

### E34:S03 – Ship Mission System [E34:S03]
- **E34:S03:T01** — *Create `ShipDesignManager` class structure with dependencies*
- **E34:S03:T02** — *Implement design creation methods (from scratch, from template)*
- **E34:S03:T03** — *Integrate design validation using `IComponentValidator`*
- **E34:S03:T04** — *Implement design cost calculation methods*
- **E34:S03:T05** — *Add saved designs CRUD operations (create, read, update, delete)*

### E34:S04 – Combat Resolution And Reports [E34:S04]
- **E34:S04:T01** — *Design ship construction integration with colony system*
- **E34:S04:T02** — *Extend GameStateManager with ship construction method*
- **E34:S04:T03** — *Integrate ShipDesignManager with colony construction*
- **E34:S04:T04** — *Implement ship creation from design at colony*

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
- **E34:S01:T01** — *Create `HullType` enum with basic hull types and properties*
- **E34:S01:T02** — *Create `ComponentType` enum and `ComponentCategory` enum*
- **E34:S01:T03** — *Create `ShipComponent` model with tech prerequisites*
- **E34:S01:T04** — *Create `ShipDesign` model with hull and component selections*
- **E34:S01:T05** — *Implement JSON serialization for `ShipDesign`*
- **E34:S01:T06** — *Create design template system*
- **E34:S01:T07** — *Write unit tests for all models*

### Story 2: Implement Homeworld Infrastructure [E34:S02]
- **E34:S02:T01** — *Create `ComponentCatalog` class with component definitions*
- **E34:S02:T02** — *Create `ComponentValidator` interface for prerequisite checking*
- **E34:S02:T03** — *Implement `SimpleComponentValidator` with ResearchManager integration*
- **E34:S02:T04** — *Implement slot system validation methods*
- **E34:S02:T05** — *Add component filtering methods (by availability, category)*
- **E34:S02:T06** — *Write comprehensive unit tests for validation logic*

### Story 3: Implement Starting Ships with Proper Components [E34:S03]
- **E34:S03:T01** — *Create `ShipDesignManager` class structure with dependencies*
- **E34:S03:T02** — *Implement design creation methods (from scratch, from template)*
- **E34:S03:T03** — *Integrate design validation using `IComponentValidator`*
- **E34:S03:T04** — *Implement design cost calculation methods*
- **E34:S03:T05** — *Add saved designs CRUD operations (create, read, update, delete)*
- **E34:S03:T06** — *Implement JSON serialization/deserialization for manager state*

### Story 4: Refactor Game Initialization System [E34:S04]
- **E34:S04:T01** — *Design ship construction integration with colony system*
- **E34:S04:T02** — *Extend GameStateManager with ship construction method*
- **E34:S04:T03** — *Integrate ShipDesignManager with colony construction*
- **E34:S04:T04** — *Implement ship creation from design at colony*
- **E34:S04:T05** — *Add ship construction UI to colony management panel*
- **E34:S04:T06** — *Write unit tests for ship construction*
- **E34:S04:T07** — *(unresolved — story context: *Story 4: Refactor Game Initialization System*)*
- **E34:S04:T08** — *Implement ECHO Cluster as Default Starborn Galaxy Map*
- **E34:S04:T09** — *Pre-Game Configuration Screen (FR-034)*
- **E34:S04:T10** — *Vanilla VGA Planets ECHO Cluster and Homeworld Fixes*

### E37:S09 – Homeworld & Session Resource Init [E37:S09]
- **E37:S09:T01** — *Implement VGAP Hulls (FR-055)*
- **E37:S09:T02** — *Implement VGAP Weapons (FR-056) - ✅ COMPLETE (2026-01-18, v0.17.9.2+1)*

### E34:S11 – Starting Conditions Improvements [E34:S11]
- **E34:S11:T01** — *Improve Starting Ship Fuel Initialization - ✅ COMPLETE (Implementation Complete, v0.17.11.1+1)*

## E38 — Player UI & Experience (10S · 47T)

### E34:S04 – Rich Ship Screen [E34:S04]
- **E34:S04:T01** — *Design ship construction integration with colony system*
- **E34:S04:T02** — *Extend GameStateManager with ship construction method*
- **E34:S04:T03** — *Integrate ShipDesignManager with colony construction*
- **E34:S04:T04** — *Implement ship creation from design at colony*
- **E34:S04:T05** — *Add ship construction UI to colony management panel*
- **E34:S04:T06** — *Write unit tests for ship construction*
- **E38:S04:T07** — *(unresolved — story context: *E34:S04 – Rich Ship Screen*)*

### E34:S05 – Rich Planet Colony Screen [E34:S05]
- **E34:S05:T01** — *Design ship design UI structure and user flow*

### E34:S05 – UI/UX Enhancements [E34:S05]
- **E34:S05:T01** — *Design ship design UI structure and user flow*
- **E34:S05:T02** — *Create ship design creation screen/dialog*
- **E34:S05:T03** — *Implement hull type selection UI*
- **E34:S05:T04** — *Implement component selection UI by category*
- **E34:S05:T05** — *Add design validation feedback display*
- **E34:S05:T06** — *Implement design preview with stats and cost*
- **E34:S05:T07** — *Add design save/load functionality in UI*
- **E34:S05:T08** — *Integrate design UI into main game interface*
- **E34:S05:T09** — *Write widget tests for design UI components*
- **E34:S05:T10** — *Add confirmation dialog for hull type change with existing components*
- **E34:S05:T11** — *Remove Redundant SnackBar Notifications*
- **E34:S05:T12** — *Transfer All Button in Resource Transfer Dialog (FR-042)*
- **E34:S05:T13** — *Edit and Delete Ship Designs from Design List (FR-043)*
- **E34:S05:T14** — *Rename Individual Ships (FR-044)*
- **E34:S05:T15** — *Remove Energy as Shippable Resource (FR-045)*
- **E34:S05:T16** — *Simplified Resource Model: Minerals, Materials, Colonists (FR-046)*
- **E34:S05:T17** — *Galaxy Painter Enemy/Ally Visualization (FR-048)*
- **E34:S05:T18** — *Resource Display Production/Consumption Calculation (FR-049)*

### E34:S06 – Ai Visibility In Player Ui [E34:S06]
- **E34:S06:T01** — *Fix Sensor Report Player Colony Detection (BR-033)*
- **E34:S06:T02** — *Create FR-047: Basic Scanners Show Colony Presence Only (Not Ownership)*

### Story 6: UI Navigation Improvements - Ships and Colonies Menu Buttons [E34:S06]
- **E34:S06:T01** — *Fix Sensor Report Player Colony Detection (BR-033)*
- **E34:S06:T02** — *Create FR-047: Basic Scanners Show Colony Presence Only (Not Ownership)*
- **E34:S06:T03** — *Implement FR-047: Basic Scanners Show Colony Presence Only (Not Ownership) - ✅ COMPLETE*
- **E34:S06:T04** — *(unresolved — story context: *Story 6: UI Navigation Improvements - Ships and Colonies Menu Buttons*)*
- **E34:S06:T05** — *(unresolved — story context: *Story 6: UI Navigation Improvements - Ships and Colonies Menu Buttons*)*
- **E34:S06:T06** — *(unresolved — story context: *Story 6: UI Navigation Improvements - Ships and Colonies Menu Buttons*)*

### E34:S07 - Galaxy View Navigation & Waypoint UX Improvements [E34:S07]
-

### E38:S07 – Resource Economy UI [E38:S07]
- **E38:S07:T01** — *Create IndigenousSpecies enum*
- **E38:S07:T02** — *Create IndigenousPopulation model*
- **E38:S07:T03** — *Add environmental tolerance system*
- **E38:S07:T04** — *Implement environmental tolerance system per species*
- **E38:S07:T05** — *Create species tech bonus definitions*
- **E38:S07:T06** — *Implement JSON serialization for indigenous population*
- **E38:S07:T07** — *Write unit tests for all models*

### E34:S08 - HUD Settings System (Sensor Overlay Toggle) [E34:S08]
-

### E34:S09 - Ship Visibility: Own Ships Only (Quick Fix) [E34:S09]
-

### Story 10: UI/UX Polish & Improvements [E34:S10]
- **E34:S10:T01** — *Implement Combat Detection — ✅ COMPLETE (v0.17.10.1+1) - 2026-01-18 16:22:55 UTC*
- **E34:S10:T02** — *Implement Combat Triggering & Resolution — ✅ COMPLETE (v0.17.10.2+1) - 2026-01-18 16:24:48 UTC*
- **E34:S10:T03** — *Create AI Controller Interface — ✅ COMPLETE (v0.17.10.3+1) - 2026-01-18 16:25:15 UTC*
- **E34:S10:T04** — *Implement Basic AI Decision Maker — ✅ COMPLETE (v0.17.10.4+1) - 2026-01-18 16:28:05 UTC*
- **E34:S10:T05** — *Implement AI Controller — ✅ COMPLETE (v0.17.10.5+1) - 2026-01-18 16:29:40 UTC*
- **E34:S10:T06** — *Integrate AI Turn Processing into Game Loop — ✅ COMPLETE (v0.17.10.6+1) - 2026-01-18 16:31:00 UTC*

## E39 — Game Balance Platform (GBP) (14S · 78T)

### E34:S01 – Colony & Resource Features [E34:S01]
- **E34:S01:T01** — *Create `HullType` enum with basic hull types and properties*
- **E34:S01:T02** — *Create `ComponentType` enum and `ComponentCategory` enum*
- **E34:S01:T03** — *Create `ShipComponent` model with tech prerequisites*
- **E34:S01:T04** — *Create `ShipDesign` model with hull and component selections*
- **E34:S01:T05** — *Implement JSON serialization for `ShipDesign`*
- **E34:S01:T06** — *Create design template system*
- **E34:S01:T07** — *Write unit tests for all models*
- **E34:S01:T08** — *Add Hauler hull types (Small, Medium, Large Deep Space Hauler)*
- **E34:S01:T09** — *Implement Scoring System (FR-024)*

### E34:S01 – Hull Parameter Specifications [E34:S01]
- **E34:S01:T01** — *Create `HullType` enum with basic hull types and properties*
- **E34:S01:T02** — *Create `ComponentType` enum and `ComponentCategory` enum*
- **E34:S01:T03** — *Create `ShipComponent` model with tech prerequisites*
- **E34:S01:T04** — *Create `ShipDesign` model with hull and component selections*
- **E34:S01:T05** — *Implement JSON serialization for `ShipDesign`*
- **E34:S01:T06** — *Create design template system*
- **E34:S01:T07** — *Write unit tests for all models*
- **E34:S01:T08** — *Add Hauler hull types (Small, Medium, Large Deep Space Hauler)*
- **E34:S01:T09** — *Implement Scoring System (FR-024)*
- **E34:S01:T10** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T11** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T12** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T13** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T14** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T15** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T16** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T17** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T18** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T19** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T20** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T21** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T22** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T23** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T24** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T25** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T26** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T27** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T28** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T29** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*
- **E34:S01:T30** — *(unresolved — story context: *E34:S01 – Hull Parameter Specifications*)*

### E34:S02 – Game Balance & Configuration [E34:S02]
- **E34:S02:T01** — *Create `ComponentCatalog` class with component definitions*
- **E34:S02:T02** — *Create `ComponentValidator` interface for prerequisite checking*
- **E34:S02:T03** — *Implement `SimpleComponentValidator` with ResearchManager integration*
- **E34:S02:T04** — *Implement slot system validation methods*
- **E34:S02:T05** — *Add component filtering methods (by availability, category)*
- **E34:S02:T06** — *Write comprehensive unit tests for validation logic*
- **E34:S02:T07** — *Create Comprehensive Design Document and Migration Path (FR-061) - ✅ COMPLETE*

### E34:S03 – Resource Model Features [E34:S03]
- **E34:S03:T01** — *Create `ShipDesignManager` class structure with dependencies*
- **E34:S03:T02** — *Implement design creation methods (from scratch, from template)*
- **E34:S03:T03** — *Integrate design validation using `IComponentValidator`*
- **E34:S03:T04** — *Implement design cost calculation methods*
- **E34:S03:T05** — *Add saved designs CRUD operations (create, read, update, delete)*
- **E34:S03:T06** — *Implement JSON serialization/deserialization for manager state*
- **E34:S03:T07** — *Write comprehensive unit tests for all manager operations*

### E39:S04 – Story 4 [E39:S04]
- **E39:S04:T01** — *Galaxy Customization (Premium DLC) (FR-031)*

### E34:S06 – GBP Technology Models (TL & Research Vision) [E34:S06]
- **E34:S06:T01** — *Fix Sensor Report Player Colony Detection (BR-033)*

### E34:S12 – Simplify Tech System to VGAP Model [E34:S12]
- **E34:S12:T01** — *Reduce Research Fields to 4 VGAP Fields — ✅ COMPLETE (v0.17.12.1+1) - 2026-01-23 16:30:00 UTC*
- **E34:S12:T02** — *Cap Tech Levels at 10 — ✅ COMPLETE (v0.17.12.2+1) - 2026-01-23 16:51:39 UTC*
- **E34:S12:T03** — *Remove Research Labs Dependency — ✅ COMPLETE (v0.17.12.3+1) - 2026-01-23 21:00:00 UTC*
- **E34:S12:T04** — *Replace Research Points with Direct Resource Payment — ✅ COMPLETE (v0.17.12.4+1) - 2026-01-23 21:25:00 UTC*
- **E34:S12:T05** — *Update Component Unlock Logic for 4 Fields — ✅ COMPLETE (v0.17.12.5+1) - 2026-01-23 22:05:00 UTC*
- **E34:S12:T06** — *Update UI for Simplified Tech System — ✅ COMPLETE (v0.17.12.6+1) - 2026-01-23 22:20:00 UTC*
- **E34:S12:T07** — *Update Game Initialization for VGAP Tech — ✅ COMPLETE (v0.17.12.7+1) - 2026-01-23 21:45:00 UTC*
- **E34:S12:T08** — *Testing & Validation — ✅ COMPLETE (v0.17.12.8+1) - 2026-01-23 22:40:00 UTC*
- **E34:S12:T09** — *Gate TL Upgrades on Space Station (VGAP) — ✅ COMPLETE (v0.17.12.9+1) - 2026-01-23 20:15:00 UTC*

### E34:S07 – Story 07 [E34:S07]
- **E34:S07:T10** — *Implement Ship Mission System: Mission Execution (FR-072) — ✅ COMPLETE (v0.17.7.10+2) - 2026-02-09 14:05:39 UTC*

### E34:S08 – Story 08 [E34:S08]
- **E34:S08:T01** — *Implement Galaxy Creation Control via GBP (FR-054) - ✅ COMPLETE (v0.17.8.1+1) - Implementation Complete - Created `config/galaxy.yaml` with galaxy generation parameters (temperature, mineral density, starting resources).*

### E34:S09 – Ship Design & Combat Features [E34:S09]
- **E34:S09:T01** — *Implement VGAP Hulls (FR-055)*
- **E34:S09:T02** — *Implement VGAP Weapons (FR-056) - ✅ COMPLETE (2026-01-18, v0.17.9.2+1)*
- **E34:S09:T03** — *Implement VGAP Engines (FR-057) - ✅ COMPLETE*
- **E34:S09:T04** — *Implement VGAP Torpedoes (FR-060) - ✅ COMPLETE*
- **E34:S09:T05** — *Implement VGAP Hull Tech Model (FR-058) - ✅ COMPLETE*
- **E34:S09:T06** — *Implement VGAP Beam Tech Model (FR-059) - ✅ COMPLETE*

### E34:S09 – Story 09 [E34:S09]
- **E34:S09:T01** — *Implement VGAP Hulls (FR-055)*

### E34:S10 – Story 10 [E34:S10]
- **E34:S10:T01** — *Implement Combat Detection — ✅ COMPLETE (v0.17.10.1+1) - 2026-01-18 16:22:55 UTC*

### E34:S13 – VGAP Production Features [E34:S13]
- **E34:S13:T01** — *Implement Mines Extract Fuel (FR-064) - ✅ COMPLETE (Implementation Complete, v0.17.13.1+2)*

### E34:S14 – Minimal VGAP Playtestable Model [E34:S14]
- **E34:S14:T01** — *Fix BR-044: Planetary Capacity Too Low for VGAP Flow – ✅ COMPLETE (Implementation Complete, v0.17.14.1+1)*
- **E34:S14:T02** — *Minimal VGAP Economy & Colony Bootstrap – ✅ COMPLETE (Implementation Complete, v0.17.14.2+1)*
- **E34:S14:T03** — *Fixed Baseline Tech & Components for Minimal VGAP Model – ✅ COMPLETE (Implementation Complete, v0.17.14.3+1)*

## E40 — Narrative & Races (3S · 64T)

### Story 1: Productivity Efficiency & Happiness System Design [E40:S01]
- **E40:S01:T01** — *PE/PEV Mechanic Design*
- **E40:S01:T02** — *Happiness Mechanic Design*
- **E40:S01:T03** — *Political Archetypes System*
- **E40:S01:T04** — *Extreme Race Design*
- **E40:S01:T05** — *Narrative-Driven Counter-Effects*
- **E40:S01:T06** — *Balance Constraints*
- **E40:S01:T07** — *Balance Validation System Design*
- **E40:S01:T08** — *Extreme Race UI Mockups*
- **E40:S01:T09** — *Narrative Template System*
- **E40:S01:T10** — *Implementation Story E18:S02*
- **E40:S01:T11** — *Computational Research Framework*
- **E40:S01:T12** — *Python Implementation Skeleton*
- **E40:S01:T13** — *Visualization Examples*
- **E40:S01:T14** — *Combined Paper Outline*
- **E40:S01:T15** — *Python Implementation Skeleton*
- **E40:S01:T16** — *Visualization Examples*
- **E40:S01:T17** — *Expanded Methodology*
- **E40:S01:T18** — *Combined Paper Outline Final*
- **E40:S01:T19** — *Research Execution Plan*
- **E40:S01:T20** — *Analysis Environment Setup*
- **E40:S01:T21** — *Playtesting Framework*
- **E40:S01:T22** — *Formula Comparison Study*
- **E40:S01:T23** — *Environment Isolation Setup*

### Story 2: Extreme Race System Implementation [E40:S02]
- **E40:S02:T01** — *Create Balance Validation Framework*
- **E40:S02:T02** — *Implement Configuration-Time Validation*
- **E40:S02:T03** — *Implement Runtime Validation*
- **E40:S02:T04** — *Create Balance Reporting System*
- **E40:S02:T05** — *Create Race Selection Screen Foundation*
- **E40:S02:T06** — *Implement Extreme Race Card Component*
- **E40:S02:T07** — *Create Detail Panels*
- **E40:S02:T08** — *Implement Balance Status Display*
- **E40:S02:T09** — *Add Responsive Design*
- **E40:S02:T10** — *Create Narrative Template System*
- **E40:S02:T11** — *Implement Narrative Display*
- **E40:S02:T12** — *Create Narrative Editor Tools*
- **E40:S02:T13** — *Integrate with Game Initialization*
- **E40:S02:T14** — *Create Integration Tests*
- **E40:S02:T15** — *Documentation & Examples*

### Story 3: Computational Research & Empirical Validation [E40:S03]
- **E40:S03:T01** — *Set Up Analysis Environment*
- **E40:S03:T02** — *Formula Comparison Study*
- **E40:S03:T03** — *Run Configuration Space Analysis*
- **E40:S03:T04** — *Run Configuration Space Analysis*
- **E40:S03:T05** — *Perform Clustering Analysis*
- **E40:S03:T06** — *Discover Patterns*
- **E40:S03:T07** — *Generate Visualizations*
- **E40:S03:T08** — *Analyze and Document Results*
- **E40:S03:T09** — *Create Implementation Plan*
- **E40:S03:T10** — *Create Narrative Templates*
- **E40:S03:T11** — *Implement PE/H System Core*
- **E40:S03:T12** — *Implement Discovered Race Patterns*
- **E40:S03:T13** — *Implement Counter-Effects System*
- **E40:S03:T14** — *Implement Balance Validation*
- **E40:S03:T15** — *Create UI for Race Selection*
- **E40:S03:T16** — *Integration Testing*
- **E40:S03:T17** — *Design Playtest Framework*
- **E40:S03:T18** — *Set Up Analytics*
- **E40:S03:T19** — *Internal Testing Phase*
- **E40:S03:T20** — *Closed Beta Phase*
- **E40:S03:T21** — *Open Beta Phase*
- **E40:S03:T22** — *Data Analysis*
- **E40:S03:T23** — *Write Results Section*
- **E40:S03:T24** — *Update Discussion Section*
- **E40:S03:T25** — *Create Visualizations for Paper*
- **E40:S03:T26** — *Finalize Paper*

