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

**ADK pin:** Attempt 1 — `v0.4.1063` tarball · Attempt 2 — `main` @ `97ff2834` sparse clone · Attempt 3 — `v0.4.13` tarball (internal `0.4.1098+1`) · **Project:** Starborn Legacy (`starborn_legacy`)

**Task (attempt 3+):** [E06:S09:T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

**Attempt artifacts:** [attempt-02](../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) · [attempt-03](../../../../adk-install-into-sbl/attempt-03/README.md) · [FB package](../../../../starborn-legacy-adk-feedback-attempt03/SUBMISSION.md) (repo root)

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
| F9 | `--mode fresh` installs **v1** packaged epic catalog (1–8, 10, 18, 22, 23), not Kanban v2/v3 (v3.2 Scenario A) — **attempts 1–3** | **CRITICAL** | **BLOCKER** + **DOC** | No installer path to v3.2; [migration blueprint](../kanban-v2/07-package-migration-blueprint.md) not executed; INSTALL must warn v1-only; sign-off should fingerprint v1 catalog (**F17**) |
| F10 | Option A only obvious path — orchestrator cannot skip Kanban; RW-only misread as “no ADK kanban ever” | HIGH | **DOC + CODE** | Document migration-test-bed sequence; orchestrator `--skip-kanban` or honor `use_kanban: false` |
| F11 | `use_kanban: false` post-install — no `docs/` dir; deferred vs excluded confusion | HIGH | **DOC + UX** | Post-install hint when Kanban deferred |
| F12 | Legacy `KB/` vs ADK `docs/kanban/` not explained at install time | MEDIUM | **DOC** | FR-081 / INSTALL: source vs target roots (Starborn example) |
| F13 | Agent restored legacy only when adopter needed ADK target tree | MEDIUM | **DOC** | Playbook: dual-tree requirement before migration |
| F14 | Dual kanban test bed required manual 4-step sequence (3a→restore→3b→3c) | MEDIUM | **DOC + CODE** | Documented profile or orchestrator phases |
| F15 | Migration not started — `KB/` → `docs/kanban` detector pending | INFO | **RECORD** | Next SBL session |
| F16 | Fresh install = v1 catalog; adopter diary labels “ADK v3 Kanban” (consumer layout ≠ v3.2 spec) | MEDIUM | **DOC** | Terminology: `docs/kanban/` layout vs Kanban v3.2 package rewrite |
| F17 | Attempt 03 installed v1 again — `E05 FR Implementation` on disk; blocks SBL → v3.2 migration test | **CRITICAL** | **PRODUCT** | Same root cause as F9; third independent proof @ `v0.4.13` |

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
| F9 | Phase 6 (attempt 1); attempt 2 Phase 6; attempt 3 phase3b + `migrate_structure._install_canonical_epics` | Same 12 epics all runs; v1 templates not [v3.2 executive summary](../kanban-v2/08-executive-summary.md) |
| F10 | Attempt 3 `phase3-rw-only` transcript | Orchestrator bypassed; Option A chosen to avoid Kanban fresh |
| F11 | Attempt 3 phase 3a exit — no `docs/kanban/epics` | Adopter: “there's no docs/ dir” |
| F12 | Attempt 3 `restore-legacy-kanban` transcript | `KB/PM_and_Portfolio/` vs `docs/kanban/` |
| F13 | Adopter correction after legacy-only restore | Needed both trees for migration test |
| F14 | Attempt 3 phase3b + phase3c transcripts | Manual RW defer → restore → kanban → RW mode C |
| F15 | Attempt 3 diary Phase 5 | Migration exercise not started |
| F16 | Attempt 3 diary “ADK v3 Kanban fresh” wording | Consumer path label vs v3.2 catalog spec |
| F17 | [FB evidence excerpt](../../../../starborn-legacy-adk-feedback-attempt03/evidence/docs/kanban/epics/epic-05/epic-05.md); phase3b transcript | Title “Epic 5: FR Implementation”; v3.2 expects FR at **E04:S02** |

---

## Attempt 2 addendum (2026-06-09)

| Topic | Result |
|-------|--------|
| UXR-025 fixes (F4/F5) | Verified on `main` @ `97ff2834` |
| Adopter intent | **Failed** — Kanban fresh still ran despite legacy E/S/T scope notes |
| Catalog generation (F9) | Unchanged — still v1 packaged templates, not v2/v3 |

---

## Attempt 3 addendum (2026-06-09) — [E06:S09:T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

| Topic | Result |
|-------|--------|
| ADK pin | `v0.4.13` greenfield tarball (SemVer release; internal **`0.4.1098+1`**) |
| Orchestrator | **Not invoked** — adopter used Option A (RW-only) then manual dual-tree sequence |
| Dual kanban test bed | **PASS** — `KB/PM_and_Portfolio/` (legacy source) + `docs/kanban/` (ADK target) coexist |
| Catalog generation (F9/F17) | **BLOCKER** — v1 packaged templates again; SBL → v3.2 migration test **cannot proceed** |
| Sign-off (post 3c) | 6 READY, 1 SKIP, 1 NOT READY (BR-086 pattern padding) |
| FB package | [starborn-legacy-adk-feedback-attempt03](../../../../starborn-legacy-adk-feedback-attempt03/SUBMISSION.md) — FR-079 intake **accepted** |

### F17 — v1 vs v3.2 fingerprint (on disk)

| Signal | Installed (v1) | Expected (v3.2 Scenario A) |
|--------|----------------|----------------------------|
| Epic 5 | Standalone **FR Implementation** | FR intake is **E04:S02** story, not epic 5 |
| Epic 6–7 | BR, UXR standalone epics | **E04:S03–S04** stories |
| Catalog | 1–8, 10, 18, 22, 23 from `_install_canonical_epics` | v3.2 remap per [07-package-migration-blueprint](../kanban-v2/07-package-migration-blueprint.md) |

**Requested maintainer actions:** INSTALL v1-only warning; orchestrator skip-Kanban (F10); migration-test-bed recipe (F12–F14); optional sign-off v1 fingerprint gate.

---

## Adopter decision (not upstream defects)

Starborn Legacy **closed** install attempts 1 and 2 without adopting ADK template kanban (v1 or v3). Attempt 3 built a **dual-tree migration test bed** but **cannot run** legacy → v3.2 migration until ADK ships the package rewrite. RW scaffold may be reused in a future brownfield pass per [FR-081](../../../kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md). **F9/F17** are upstream **product lag** (installer vs ratified v3.2 spec), not SBL-specific defects.
