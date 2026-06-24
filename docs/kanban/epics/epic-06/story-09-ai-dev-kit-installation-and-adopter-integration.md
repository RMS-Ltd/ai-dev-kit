---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 009 – AI Dev Kit installation and adopter integration

**Status:** IN PROGRESS
**Completed:** —
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-19  
**Last updated:** 2026-06-24 (v0.6.9.40+1 – Kanban documentation setup)
**Version:** v0.6.9.40+1
**Code:** E6S09

---

## Task Checklist

- [x] **E06:S09:T01 – Greenfield installation process (FR-080)** - COMPLETE (HIGH — **FR-080** IMPLEMENTED **v0.6.9.1+8**; Waves 1–5 + evidence)
  - Task: [`T01-greenfield-installation-process-fr080.md`](story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md) | [FR-080](../../fbu/FR-080-greenfield-installation-process.md)
  - IPW: [`IPW-E6S9T1-greenfield-installation-fr080.md`](../../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)

- [x] **E06:S09:T02 – Brownfield modular adopter integration (FR-081)** - ✅ COMPLETE (MEDIUM — INSTALL brownfield chapter, matrices, worked example, installer messaging; **v0.6.9.2+2**)
  - Task: [`T02-brownfield-modular-adopter-integration-fr081.md`](story-09-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md) | [FR-081](../../fbu/FR-081-brownfield-modular-adopter-integration.md) | [IPP-E6S9T2](../../../implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)

- [x] **E06:S09:T03 – Installation canonical repository alignment (FR-082)** - ✅ COMPLETE (MEDIUM — public bootstrap + canonical `RMS-Ltd/ai-dev-kit` defaults/docs; RW **`v0.6.9.3+2`**)
  - Task: [`T03-installation-canonical-repo-alignment-fr082.md`](story-09-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082.md) | [FR-082](../../fbu/FR-082-installation-distribution-canonical-repo-alignment.md)

- [x] **E06:S09:T04 – ECC harness layer Phase 0 compatibility evaluation (FR-098)** - COMPLETE (MEDIUM — Phase 0 spec, evaluation, bridge template; Phase 1 GO)
  - Task: [`T04-ecc-harness-layer-phase0-compatibility-fr098.md`](story-09-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md) | [FR-098](../../fbu/FR-098-ecc-optional-harness-layer-integration.md)
  - IPP: [`IPP-E6S9T4`](../../../implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098.md)

- [x] **E06:S09:T05 – ADK workflow skill pack for ECC harness layer (FR-098 Phase 1)** — ✅ COMPLETE (MEDIUM — **v0.6.9.5+4** dev consolidation; skill pack **v0.6.9.5+2**)
  - Task: [`T05-adk-workflow-skill-pack-ecc-fr098.md`](story-09-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md) | [FR-098](../../fbu/FR-098-ecc-optional-harness-layer-integration.md)
  - IPP: [`IPP-E6S9T5`](../../../implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md)

- [x] **E06:S09:T06 – ECC harness phases 2–5 (FR-098)** — ✅ COMPLETE (HIGH — **v0.6.9.6+3** phases 2–5 + dogfood T8)
  - Task: [`T06-ecc-harness-phases-2-5-fr098.md`](story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098.md) | [FR-098](../../fbu/FR-098-ecc-optional-harness-layer-integration.md)
  - IPP: [`IPP-E6S9T6`](../../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md)

- [x] **E06:S09:T07 – Kanban fresh install structure template missing (BR-078)** - ✅ COMPLETE (**v0.6.9.7+2**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T07-kanban-fresh-install-structure-template-missing-br078.md) | [BR-078](../../fbu/BR-078-kanban-fresh-install-structure-template-missing.md) | [IPP-E6S9T7](../../../implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing.md) | [#10](https://github.com/RMS-Ltd/ai-dev-kit/issues/10)

- [x] **E06:S09:T08 – Kanban fresh install Epic 22/23 templates (BR-079)** - COMPLETE (**v0.6.9.8+2**, pending verification) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T08-kanban-fresh-install-epic-22-23-templates-br079.md) | [BR-079](../../fbu/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md) | [IPP-E6S9T8](../../../implementation-cycles/IPP-E06S09T08-br079-epic-22-23-install-templates.md) | [#11](https://github.com/RMS-Ltd/ai-dev-kit/issues/11)

- [x] **E06:S09:T09 – Kanban fresh mode validation on empty repo (BR-080)** - ✅ COMPLETE (**v0.6.9.9+2**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T09-kanban-fresh-mode-validation-br080.md) | [BR-080](../../fbu/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md) | [IPP-E6S9T9](../../../implementation-cycles/IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md) | [#12](https://github.com/RMS-Ltd/ai-dev-kit/issues/12)

- [x] **E06:S09:T10 – Kanban install `utcnow()` deprecation (BR-081)** - ✅ COMPLETE (**v0.6.9.10+2**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T10-kanban-install-datetime-utcnow-br081.md) | [BR-081](../../fbu/BR-081-kanban-install-datetime-utcnow-deprecated.md) | [IPP](../../../implementation-cycles/IPP-E06S09T10-br081-kanban-install-datetime-utcnow.md) | [#13](https://github.com/RMS-Ltd/ai-dev-kit/issues/13)

- [x] **E06:S09:T11 – RW install PyYAML preflight (BR-082)** - ✅ COMPLETE (**v0.6.9.11+2**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T11-rw-install-pyyaml-preflight-br082.md) | [BR-082](../../fbu/BR-082-rw-install-missing-pyyaml-preflight.md) | [IPP-E6S9T11](../../../implementation-cycles/IPP-E06S09T11-br082-rw-install-pyyaml-preflight.md) | [#14](https://github.com/RMS-Ltd/ai-dev-kit/issues/14)

- [x] **E06:S09:T12 – RW install rw-config pattern defaults (BR-083)** - COMPLETE (**v0.6.9.12+2**, verified **v0.6.9.14+2** ExpensesTracker T03 replay) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T12-rw-install-pattern-defaults-br083.md) | [BR-083](../../fbu/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) | [IPP-E6S9T12](../../../implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md) | [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15)

- [x] **E06:S09:T13 – RW install Mode C rw-config generation (BR-084)** - COMPLETE (**v0.6.9.13+2**, verified **v0.6.9.14+2** ExpensesTracker T03 replay) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T13-rw-install-mode-c-rw-config-generation-br084.md) | [BR-084](../../fbu/BR-084-rw-install-mode-c-missing-task-doc-pattern.md) | [IPP-E6S9T13](../../../implementation-cycles/IPP-E06S09T13-br084-rw-config-generation.md) | [#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16)

- [x] **E06:S09:T14 – RW install story pattern prompt loop (BR-085)** - ✅ COMPLETE (v0.6.9.14+2 — fix **+1**, ExpensesTracker verification **+2**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T14-rw-install-story-pattern-loop-br085.md) | [BR-085](../../fbu/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md)

- [x] **E06:S09:T15 – Install/setup interactive feedback external SemVer (UXR-016)** - ✅ COMPLETE (v0.6.9.15+1) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T15-install-setup-interactive-feedback-external-semver-uxr016.md) | [UXR-016](../../fbu/UXR-016-install-setup-interactive-feedback-external-semver-version.md) | [IPP-E6S9T15](../../../implementation-cycles/IPP-E06S09T15-install-setup-interactive-feedback-external-semver.md)

- [x] **E06:S09:T16 – RW install lowercase fresh kanban patterns & sign-off (BR-086)** - ✅ COMPLETE (v0.6.9.16+3 — [#17](https://github.com/RMS-Ltd/ai-dev-kit/issues/17) closed; UKW `-c` archived) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T16-rw-install-lowercase-fresh-kanban-patterns-br086.md) | [BR-086](../../fbu/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md)

- [x] **E06:S09:T17 – Framework install directory slugs (BR-087)** - ✅ COMPLETE (**v0.6.9.17+1** — slug archives, extract rename, migration script, tests) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087.md) | [BR-087](../../fbu/BR-087-framework-install-directory-slug-mismatch.md)

- [x] **E06:S09:T18 – BR-087 framework slug install closure (wave 2)** - ✅ COMPLETE (**v0.6.9.18+2** — maintainer slug dirs, install warnings, registry/GitHub release) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure.md) | [IPP-E6S9T18](../../../implementation-cycles/IPP-E06S09T18-br087-framework-slug-install-closure.md) | [BR-087](../../fbu/BR-087-framework-install-directory-slug-mismatch.md) | [UXR-016](../../fbu/UXR-016-install-setup-interactive-feedback-external-semver-version.md)

- [x] **E06:S09:T19 – RW install version_file scaffold (BR-088)** - ✅ COMPLETE (**v0.6.9.19+1** — mode C version_file prompt + stub) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088.md) | [IPP-E6S9T19](../../../implementation-cycles/IPP-E06S09T19-br088-version-file-scaffold.md) | [BR-088](../../fbu/BR-088-rw-install-mode-c-missing-version-file-scaffold.md) | [#18](https://github.com/RMS-Ltd/ai-dev-kit/issues/18)

- [x] **E06:S09:T20 – Install/setup error code registry (FR-108)** - ✅ COMPLETE (**v0.6.9.20+2** — ADK-* registry + emitters + docs; IPP sync) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108.md) | [IPP-E6S9T20](../../../implementation-cycles/IPP-E06S09T20-install-setup-error-code-registry-fr108.md) | [FR-108](../../fbu/FR-108-install-setup-error-code-registry-and-emission.md)

- [x] **E06:S09:T21 – Lean adopter distribution footprint (FR-110)** - ✅ COMPLETE (**v0.6.9.21+5** — Wave 5: git-index sync hardening) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md) | [FR-110](../../fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)

- [x] **E06:S09:T22 – Package documentation greenfield-install alignment (FR-110)** - ✅ COMPLETE (**v0.6.9.22+1** — framework READMEs + install guides) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T22-package-documentation-greenfield-install-alignment-fr110.md) | [FR-110](../../fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)

- [x] **E06:S09:T23 – Greenfield lean tree GitHub Packages delivery (UXR-021)** - ✅ COMPLETE (**v0.6.9.23+3** — GHCR + FR-110-F5 tarball; ADR-021; Linux drift + release workflow fix) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T23-greenfield-install-github-packages-delivery-uxr021.md) | [IPP-E06S09T23](../../../implementation-cycles/IPP-E06S09T23-greenfield-install-github-packages-delivery-uxr021.md) | [UXR-021](../../fbu/UXR-021-greenfield-install-github-packages-delivery-channel.md)

- [x] **E06:S09:T24 – Acquisition-layer ADK error codes (FR-111)** - ✅ COMPLETE (**v0.6.9.24+3** — registry 1.1.0 I05/I06, verify_vendor_tree, doc sync + link hygiene) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T24-acquisition-layer-adk-error-codes-fr111.md) | [IPP-E06S09T24](../../../implementation-cycles/IPP-E06S09T24-acquisition-layer-adk-error-codes-fr111.md) | [FR-111](../../fbu/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md)

- [x] **E06:S09:T25 – Starborn Legacy greenfield install diary — triage & upstream reaction (UXR-025)** - ✅ COMPLETE (HIGH, **v0.6.9.25+3** — F4/F5 fix **+2**; attempt 2 closure + F9 v1 catalog triage **+3**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) | [UXR-025](../../fbu/UXR-025-starborn-legacy-greenfield-install-diary.md) | [IPP](../../../implementation-cycles/IPP-E06S09T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) | [Triage](../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) | [Attempt 02](../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md)

- [x] **E06:S09:T26 – Starborn Legacy ADK install program** - ✅ COMPLETE (**v0.6.9.26+5** — operator-rework archive; attempt 10 Arm B PASS; programme Phase 1 closed) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) | [operator-rework-archive](../../../../adk-install-into-sbl/attempt-10/operator-rework-archive/) | [attempt-10 index](../../../../adk-install-into-sbl/attempt-10/README.md) | [Triage matrix](../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)

- [x] **E06:S09:T31 – Agentic kanban migration agent (FR-127 / F22)** - ✅ COMPLETE (v0.6.9.31+1 — KMA workflow + gated installer) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md) | [FR-127](../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) | [IPP](../../../implementation-cycles/IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md)

- [x] **E06:S09:T32 – Detect structure zero-padded epic names (BR-108 / F23)** - ✅ COMPLETE (v0.6.9.32+1) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md) | [BR-108](../../fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md) | [IPP](../../implementation-cycles/IPP-E06S09T32-detect-structure-zero-padded-epic-br108.md)

- [x] **E06:S09:T33 – ADK package update mechanism (FR-129)** — ✅ COMPLETE (**v0.6.9.33+2** — tag-resolution fix; SBL AC1 validated) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T33-adk-package-update-mechanism-fr129.md) | [FR-129](../../fbu/FR-129-adk-package-update-mechanism-fr129.md) | [IPP-E06S09T33](../../../implementation-cycles/IPP-E06S09T33-adk-package-update-mechanism-fr129.md)

- [x] **E06:S09:T27 – Kanban v3.2 package rewrite for installer (F9/F17)** - ✅ COMPLETE (CRITICAL, **v0.6.9.27+2** — v3.2 installer + fingerprint validator fix; SemVer **v0.4.1133+2**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T27-kanban-v32-package-rewrite-installer-f9-f17.md) | [IPP](../../../implementation-cycles/IPP-E06S09T27-kanban-v32-package-rewrite-installer-f9-f17.md)

- [x] **E06:S09:T28 – v3.2 fresh install sign-off story padding (BR-105 / F18)** - ✅ COMPLETE (v0.6.9.28+2 — contract alignment) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T28-v32-fresh-install-signoff-story-padding-br105.md) | [BR-105](../../fbu/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md)

- [x] **E06:S09:T29 – RW install non-interactive CHANGELOG prompt (BR-106 / F19)** - ✅ COMPLETE (**v0.6.9.29+2** — scaffold_interactive wiring) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T29-rw-install-non-interactive-changelog-prompt-br106.md) | [BR-106](../../fbu/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) | [IPP](../../../implementation-cycles/IPP-E06S09T29-br106-non-interactive-changelog-scaffold.md)

- [x] **E06:S09:T30 – Kanban installer log epic path padding (BR-107 / F21)** - ✅ COMPLETE (**v0.6.9.30+2** — padded log paths via kanban_paths) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md) | [BR-107](../../fbu/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) | [IPP](../../../implementation-cycles/IPP-E06S09T30-kanban-installer-log-epic-path-padding-br107.md)

- [x] **E06:S09:T34 – Kanban v3.5 packaged catalog (Small tier)** - ✅ COMPLETE (**v0.6.9.34+1** — v3.5 fresh-install catalog + task installer; SemVer **v0.4.1159+1**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T34-kanban-v35-packaged-catalog-small-tier.md) | [12-v35 delta](../../../knowledge/analysis/kanban-v2/12-v35-catalog-delta-bootstrap-stories.md) | —No IPP—
- [x] **E06:S09:T35 – Kanban v4 three-tier catalogue (FR-132)** - ✅ COMPLETE (**v0.6.9.35+2** — v4 catalog + agentic KMA UAT/benchmark; SemVer **v0.4.1164+2**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T35-kanban-v4-three-tier-catalogue-fr132.md) | [FR-132](../../fbu/FR-132-kanban-v4-three-tier-catalogue.md) | [FR-131](../../fbu/FR-131-canonical-abstract-task-library-catl.md) | [13-v4 spec](../../../knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md)

- [ ] **E06:S09:T36 – Adopter Path Selector + Install RC (UXR-029)** - ⏳ SHIPPED (HIGH — **v0.6.9.36+3** INSTALL + orchestrator blind KMA; AC7 pending) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) | [UXR-029](../../fbu/UXR-029-adk-install-path-experiment.md) | [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) | [attempt-10](../../../../adk-install-into-sbl/attempt-10/README.md)

- [x] **E06:S09:T37 – Painless adopter kanban migration workflow (FR-133)** - ✅ COMPLETE (v0.6.9.37+2 — FR-133 depth guide, INSTALL Migrate default, COMPREHENSION template) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md) | [FR-133](../../fbu/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) | [IPP](../../implementation-cycles/IPP-E06S09T37-kanban-migration-depth-rationalization-fr133.md)

- [x] **E06:S09:T38 – Guided install orchestrator (FR-135)** - ✅ COMPLETE (**v0.6.9.38+1** — guided v2 profile + phases A–F; AC2/AC3 SBL replay pending) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) | [FR-135](../../fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) | [IPP-E06S09T38](../../../implementation-cycles/IPP-E06S09T38-guided-install-orchestrator-fr135.md) | [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

- [x] **E06:S09:T39 – Guided KMA Target Structure Pack (FR-136)** - ✅ COMPLETE (**v0.6.9.39+1** — guided/score modes, TSP pack, scorer, pytest; **adopter replay validated** @ attempt 11 **93.99%**) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T39-guided-kma-target-structure-pack-fr136.md) | [IPP-E06S09T39](../../../implementation-cycles/IPP-E06S09T39-guided-kma-target-structure-pack-fr136.md) | [FR-136](../../fbu/FR-136-guided-kma-target-structure-pack.md) | [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

- [ ] **E06:S09:T40 – Greenfield orchestrator Install RC gaps (BR-112)** - 🔄 IN PROGRESS (CRITICAL — BR-112 attempted fix @ **v0.6.9.40+1**; SBL replay pending) — [Task](story-09-ai-dev-kit-installation-and-adopter-integration/T40-greenfield-orchestrator-install-rc-gaps-br112.md) | [BR-112](../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) | [IPP](../../../implementation-cycles/IPP-E06S09T40-greenfield-orchestrator-install-rc-gaps-br112.md) | [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)

---

## Overview

This story owns **design and delivery** of how AI Dev Kit is installed and integrated into **recipient** repositories: a **complete greenfield** first-run path (FR-080), **brownfield** modular adoption aligned with [ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) (FR-081), and **tooling/doc accuracy** for canonical distribution coordinates (FR-082).

Work is tracked in **Epic 6** because this is **framework distribution and adoption mechanics**, not documentation-only maintenance.

---

## Goal

- **Greenfield:** Opinionated, reproducible install → configure → verify for new or template projects.  
- **Brownfield:** Contract-first, optional surfaces; host project owns architecture.  
- **Hygiene:** Install scripts and docs reference the correct public GitHub repository by default.
- **Optional harness layer (FR-098):** ECC integration ships in phases; each phase releases via RW with **PATCH-only** SemVer under `task_touch`. **MINOR** advances at **Epic 6 sign-off** (`epic_count`), not per ECC phase — see [FR-098 SemVer strategy](../../fbu/FR-098-ecc-optional-harness-layer-integration.md#release--semver-strategy-maintainer-decision--2026-05-26).

---

## Related

- [ADR-003](../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [FR-080](../../fbu/FR-080-greenfield-installation-process.md) · [FR-081](../../fbu/FR-081-brownfield-modular-adopter-integration.md) · [FR-082](../../fbu/FR-082-installation-distribution-canonical-repo-alignment.md) · [FR-098](../../fbu/FR-098-ecc-optional-harness-layer-integration.md) · [FR-108](../../fbu/FR-108-install-setup-error-code-registry-and-emission.md) · [FR-110](../../fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [FR-111](../../fbu/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
