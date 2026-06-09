---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Starborn Legacy greenfield install — triage matrix

**Source diary:** [starborn-legacy-greenfield-install-diary.md](starborn-legacy-greenfield-install-diary.md)  
**UXR:** [UXR-025](../../../kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md)  
**Task:** [E06:S09:T25](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)  
**IPP:** [IPP-E06S09T25](../../../implementation-cycles/IPP-E06S09T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)

**ADK pin:** Attempt 1 — `v0.4.1063` tarball · Attempt 2 — `main` @ `97ff2834` sparse clone · **Project:** Starborn Legacy (`starborn_legacy`)

**Attempt artifacts:** [attempt-02](../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) (ai-dev-kit repo)

---

## Disposition summary

| ID | Finding | Severity | Disposition | Outcome (E06:S09:T25) |
|----|---------|----------|-------------|------------------------|
| F1 | Submodule add failed — `.gitmodules` absent after index wipe | LOW | **DOC** | INSTALL: clean working tree before submodule add |
| F2 | Sparse clone failed — disk full (~116 MiB free) | MEDIUM | **DOC** | INSTALL: prefer release tarball when disk-constrained |
| F3 | Release tarball + `verify_vendor_tree` succeeded | — | **RECORD** | Positive signal; keep tarball path prominent |
| F4 | Orchestrator `--non-interactive` → RW hung on `Project name` (`ADK-I01.S01`) | HIGH | **CODE** | `install_greenfield_path.py`: forward `--non-interactive` + `--config` to RW |
| F5 | `--vendor-root` only affected preflight; subprocesses used project-root `packages/` | HIGH | **CODE** | `resolve_frameworks_base()` + absolute installer paths under vendor |
| F6 | RW mode C partial — no local `workflows/` (expected lean) | LOW | **DOC** | INSTALL: lean RW expectation documented |
| F7 | Kanban fresh + sign-off ALL READY | — | **RECORD** | Installer contract only (BR-083–086, UXR-017 path casing) — see **F9** for catalog generation |
| F8 | Adopter retains legacy E/S/T kanban — scope closure | INFO | **DOC** | FR-081 brownfield deferral; not a greenfield defect |
| F9 | `--mode fresh` installs **v1** packaged epic catalog (1–8, 10, 18, 22, 23), not Kanban v2/v3 (v3.2 Scenario A) — **both attempts** | MEDIUM | **DEFER** + **DOC** | Record until [migration blueprint waves](../kanban-v2/07-package-migration-blueprint.md); INSTALL must not imply v3.2 or SBL-correct PM |

---

## Evidence links

| ID | Diary section | Error / signal |
|----|---------------|----------------|
| F1 | Phase 1a | `fatal: please make sure that the .gitmodules file is in the working tree` |
| F2 | Phase 1b | `No space left on device` |
| F3 | Phase 1c | `verify_vendor_tree` → Vendor tree OK |
| F4 | Phase 4 | `ADK-I01.S01` after `--non-interactive` orchestrator |
| F5 | Phase 3–4 | Manual `ln -sf vendor/ai-dev-kit/packages packages` workaround |
| F6 | Phase 5 | Missing `workflows/release-workflow/release-workflow.yaml` locally |
| F7 | Phase 6 (attempt 1); attempt 2 orchestrator transcript | `signoff-report.json` ALL READY |
| F8 | Phase 8 (attempt 1); attempt 2 Phase 6 | Legacy `KB/PM_and_Portfolio/` retained; ADK kanban exercise only |
| F9 | Phase 6 (attempt 1); attempt 2 Phase 6 + `migrate_structure._install_canonical_epics` | Same 12 epics both runs; v1 templates not [v3.2 executive summary](../kanban-v2/08-executive-summary.md) |

---

## Attempt 2 addendum (2026-06-09)

| Topic | Result |
|-------|--------|
| UXR-025 fixes (F4/F5) | Verified on `main` @ `97ff2834` |
| Adopter intent | **Failed** — Kanban fresh still ran despite legacy E/S/T scope notes |
| Catalog generation (F9) | Unchanged — still v1 packaged templates, not v2/v3 |

---

## Adopter decision (not upstream defects)

Starborn Legacy **closed** install attempts 1 and 2 without adopting ADK template kanban (v1 or v3). RW scaffold may be reused in a future brownfield pass per [FR-081](../../../kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md). F9 is an upstream **product lag** (installer vs ratified v3.2 spec), not an SBL-specific defect.
