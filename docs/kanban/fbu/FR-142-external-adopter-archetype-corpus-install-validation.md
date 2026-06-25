---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-24T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-142: External adopter archetype corpus for install validation diversity

**Type:** Feature Request (FR)  
**ID:** FR-142  
**Submitted:** 2026-06-24  
**Submitted By:** Maintainer (operator strategy — post-SBL install programme)  
**Priority:** MEDIUM (Should Have — MoSCOW **S**)  
**Status:** OPEN  
**Version anchor:** v0.6.9.41+0 (RW -k kanban init)

**Implementing Task:** [E06:S09:T41](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md)

**Related:** [UXR-029](UXR-029-adk-install-path-experiment.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) · [E06:S09:T36](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) · [FR-079](FR-079-install-feedback-submission-path-and-governance.md) · [FR-081](FR-081-brownfield-modular-adopter-integration.md) · [FR-133](FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) · [adopter-install-attempt-preflight](../../guides/adopter-install-attempt-preflight.md) · [Expenses Tracker fresh-repo guide](../../guides/adk-install-expenses-tracker-fresh-repo.md)

**Precedent:** Expenses Tracker (external adopter) surfaced BR-087, UXR-016, UXR-017 — failure modes distinct from the Starborn Legacy ten-attempt arc.

---

## Summary

After the controlled **UXR-029** three-repo programme (SBL, fynd.deals, Confidentia) completes, establish a **maintainer-owned external adopter archetype corpus**: a typed set of real-world repository patterns (not random “mess”) used for **recon-first** Install RC gap discovery, selective full install attempts, and **anonymized fixture extraction** — so ADK install hardening generalizes beyond operator-owned repositories.

---

## Problem Statement

The SBL install programme (attempts 1–10) and planned Arm A controls (fynd.deals, Confidentia) share **operator context, documentation habits, git discipline, and governance assumptions**. That homogeneity is valuable for **converging** the install path but creates **blind spots** for:

| Blind spot | Symptom on real adopters |
| -------- | ------------------------ |
| No kanban tree (Issues-only, Notion export, flat TODO) | KMA ingest + path selector misfires |
| Inconsistent doc topology (`doc/` vs `docs/`, wiki layouts) | Structure detection / BR-108-class heuristics fail |
| Monorepo / polyglot roots | `rw-config.yaml` and version file discovery break |
| Existing CI / hooks | Install RC and first-RW friction without operator patches |
| Zero maintainer engagement | Comprehension docs and FR-079 path untested self-service |

Expenses Tracker already proved that **one external shape** finds bugs operator repos miss. A **deliberate archetype programme** scales that lesson without replacing the controlled UXR-029 experiment.

---

## Requirements

### Functional

- [ ] **FR-142-F1:** Publish an **adopter diversity matrix** — dimensions (PM shape, doc topology, stack, repo age, CI, engagement level) with **3–5 named archetypes** and selection criteria (not “maximum entropy” trawling).
- [ ] **FR-142-F2:** Define **Phase 5 sequencing** in the install programme: runs **after** UXR-029 Phase 4 synthesis (Arm A attempts + path selector at RC); does **not** block fynd.deals / Confidentia work.
- [ ] **FR-142-F3:** **Recon-first protocol** per archetype: local clone → structure map → Install RC checklist **pre-score** → full install attempt only when recon predicts a **novel** gap class.
- [ ] **FR-142-F4:** Maintainer index layout for external attempts (mirror `adk-install-into-sbl/attempt-NN/` pattern): `adk-install-external/` or equivalent with archetype id, recon report, optional FR-079 package.
- [ ] **FR-142-F5:** **Fixture extraction pipeline** — anonymized mini-trees under repo test/fixture scope (e.g. KMA ingest corpora, Install RC profile inputs) derived from archetype patterns; no secrets or project-identifying content in kit.
- [ ] **FR-142-F6:** Cross-link archetype findings back to **Install RC rows**, path selector (ADR-030), and KMA depth model (FR-133) when gaps are path-agnostic vs path-specific.
- [ ] **FR-142-F7:** Document **ethics / ops constraints**: local-only clones; no commits to third-party repos; anonymize published write-ups; permissive-license preference for full-install archetypes.

### Non-functional

- [ ] **FR-142-NF1:** Archetype count capped (**3–5** initial; expand only with synthesis justification) — avoid unbounded GH trawl debt.
- [ ] **FR-142-NF2:** Each archetype attempt produces **actionable** output: FR/BR/UXR intake, Install RC row proposal, or fixture — not diary-only noise.
- [ ] **FR-142-NF3:** Programme remains **maintainer-operated**; external repos are **subjects**, not cooperative adopters (FR-079 optional, not required).
- [ ] **FR-142-NF4:** Fixtures must be **CI-runnable** (size-bounded, no network at test time).

---

## Proposed archetypes (initial — refine in IPW)

| ID | Archetype | Primary stress |
| -- | --------- | -------------- |
| **A1** | Issues-only OSS | No `docs/kanban`; path selector + greenfield default |
| **A2** | Docs sprawl brownfield | Multiple PM trees, inconsistent naming |
| **A3** | Monorepo / ambiguous root | Project root, `version.py`, `rw-config` placement |
| **A4** | Stale brownfield | Old tags, minimal docs, structure detection |
| **A5** | Minimal non-empty | README + LICENSE only (FR-080 control vs operator repos) |

---

## Acceptance criteria

- [ ] **AC1:** Diversity matrix + Phase 5 sequencing documented in maintainer KB and linked from [adopter-install-attempt-preflight](../../guides/adopter-install-attempt-preflight.md).
- [ ] **AC2:** At least **3** archetypes recon-scored against Install RC; recon reports in maintainer index.
- [ ] **AC3:** At least **1** full install attempt on an archetype where recon predicted a novel gap; outcome filed (FR-079-style package or maintainer synthesis).
- [ ] **AC4:** At least **1** anonymized fixture tree committed (or staged behind IPW) with pytest or Install RC hook referencing it.
- [ ] **AC5:** UXR-029 updated with Phase 5 pointer and synthesis note on operator-repo vs external-archetype coverage.

---

## Out of scope

- Replacing UXR-029 controlled repos (SBL / fynd.deals / Confidentia).
- Public GitHub “drive-by” installs or PRs into third-party repositories.
- Mandatory cooperative adopter onboarding for archetype subjects.
- Infinite GH search automation (no crawler / bot trawl).

---

## Dependencies

- **Gate:** UXR-029 Phase 4 synthesis (recommended; Phase 2–3 Arm A recon may run in parallel with early recon-only work if maintainer capacity allows — full installs gated).
- **Leverages:** Install RC (`validate_install_rc.py`), FR-079 feedback schema, KMA agentic path (FR-127), migration depth (FR-133), Adopter Path Selector (T36).
