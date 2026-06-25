---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-25T12:45:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T41 — Planning: External adopter archetype corpus (IPW)

**Host Task:** [`T41-external-adopter-archetype-corpus-fr142.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md) **(E06:S09:T41)**  
**Planning for:** [FR-142](../kanban/fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) · [UXR-029](../kanban/fbu/UXR-029-adk-install-path-experiment.md) · [E06:S09:T26](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) (Phase 5)  
**Status:** Approved

---

## §1 — Requirements (Ascertained Baseline)

### §1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Publish **adopter diversity matrix** — dimensions (PM shape, doc topology, stack, repo age, CI, engagement) with **3–5 named archetypes** and selection criteria | FR-142-F1, AC1 |
| RF2 | Document **Phase 5 sequencing** in install programme: after UXR-029 Phase 4; does not block fynd.deals / Confidentia | FR-142-F2 (partial @ v0.6.9.41+0 preflight/UXR pointer) |
| RF3 | **Recon-first protocol:** local clone → structure map → Install RC **pre-score** → full install only when novel gap predicted | FR-142-F3 |
| RF4 | Maintainer index **`adk-install-external/`** mirroring `adk-install-into-sbl/attempt-NN/` — archetype id, recon report, optional FR-079 package | FR-142-F4 |
| RF5 | **Fixture extraction:** anonymized mini-trees under test/fixture scope; KMA ingest or Install RC profile inputs; no secrets | FR-142-F5, AC4 |
| RF6 | Wire findings to **Install RC rows**, **ADR-030** path selector, **FR-133** depth model when gaps are path-agnostic vs path-specific | FR-142-F6 |
| RF7 | Document **ethics / ops:** local-only clones; no third-party commits; anonymize write-ups; permissive-license preference for full-install subjects | FR-142-F7, T41 AC2 |
| RF8 | **≥3 archetype recon reports** with Install RC pre-score JSON or checklist artifact | FR-142 AC2 |
| RF9 | **≥1 full install attempt** where recon predicted novel gap; maintainer synthesis or FR-079-style package | FR-142 AC3 |
| RF10 | **UXR-029 coverage synthesis** — operator-owned vs external-archetype coverage note (beyond Phase 5 pointer @ 0.6.9.41+0) | FR-142 AC5, T41 deliverable 7 |

### §1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Archetype count **3–5** initial; expand only with synthesis justification | FR-142-NF1 |
| RNF2 | Each archetype produces **actionable** output (FR/BR/UXR intake, Install RC row proposal, or fixture) — not diary-only | FR-142-NF2, T41 AC3 |
| RNF3 | Programme **maintainer-operated**; external repos are subjects, not cooperative adopters | FR-142-NF3 |
| RNF4 | Fixtures **CI-runnable**, size-bounded, no network at test time | FR-142-NF4 |
| RNF5 | Maintainer KB in **git** per ADR-026 — not Docusaurus, not Notion SoT | ADR-026 |
| RNF6 | Adopter-public guide edits use **GitHub blob URLs** (BR-068) | adopter-public-documentation-authoring |
| RNF7 | **Gate:** full external installs after UXR-029 **Phase 4** unless operator waives in task doc | FR-142 Dependencies, T41 sequencing |

### §1.3 Invariants and boundaries

- **Invariants:**
  - Does **not** replace UXR-029 controlled repos (SBL, fynd.deals, Confidentia).
  - No commits or PRs to third-party repositories.
  - Install RC remains authoritative for install-complete; recon pre-score is **non-blocking** maintainer evidence.
  - SBL programme (T26) remains closed; T41 is **Phase 5 extension** only.
- **In scope:**
  - Diversity matrix + recon protocol (maintainer KB).
  - `adk-install-external/` index tree + templates.
  - Three recon waves + one full-install wave (post-gate).
  - Anonymized fixture(s) + pytest hook.
  - UXR-029 synthesis paragraph + optional Install RC row proposals filed as separate FR/BR if kit changes needed.
- **Out of scope:**
  - GitHub trawl automation / crawler.
  - fynd.deals / Confidentia Arm A execution (UXR-029 AC6 — separate work).
  - Installer/orchestrator code changes (file as **follow-on tasks** when recon/install proves gap).
  - Cooperative adopter onboarding for external subjects.

### §1.4 Programme gate (planning decision)

| Gate | Condition | Waive |
| ---- | --------- | ----- |
| **G1 — UXR-029 Phase 4** | At least one **Arm A** attempt (fynd.deals or Confidentia) complete with scorecard; path-selector synthesis recorded | Operator documents waiver in T41 task doc → Wave 3 may proceed early |
| **G2 — Recon before install** | Each full install preceded by recon report with explicit **novel gap hypothesis** | N/A |
| **G3 — Ethics** | `adk-install-external/README.md` ethics section published before first clone | N/A |

**Recommended archetype set (v1):** **A1** (issues-only OSS), **A2** (docs sprawl brownfield), **A5** (minimal non-empty). Defer **A3** (monorepo) and **A4** (stale) to Wave 2 expansion unless recon capacity allows five.

---

## §2 — Specification

### §2.1 Goal

Establish a **typed external adopter archetype programme** so ADK install validation generalizes beyond operator-owned repositories: recon-first evidence, selective full installs, anonymized fixtures in CI, and actionable intake back to the kit — without replacing the controlled UXR-029 three-repo experiment.

**Evidence baseline:** SBL attempts 1–10 (homogeneous operator context); Expenses Tracker (external shape → BR-087, UXR-016, UXR-017).

### §2.2 Specification mapping

| RF/RNF | Deliverable |
| ------ | ----------- |
| RF1, RF2 | `docs/knowledge/analysis/projects/external-adopter-diversity-matrix.md` + preflight §8 cross-link |
| RF3, RF7 | `adk-install-external/RECON-PROTOCOL.md` + per-archetype recon reports |
| RF4 | `adk-install-external/README.md` + `archetype-{id}/recon-NN/README.md` template |
| RF5, RNF4 | `tests/fixtures/adopter-corpora/{archetype-id}/` + pytest ingest/RC smoke |
| RF6, RF9 | Gap intake table in synthesis doc → new FR/BR or Install RC row PRs |
| RF8 | Three recon READMEs under `adk-install-external/archetype-*/` |
| RF10 | UXR-029 § synthesis paragraph + maintainer coverage table |

### §2.3 Constraints

- External repo identifiers: **anonymized** in published kit artifacts (`subject-A1`, not project name) unless permissive OSS explicitly named with license note.
- Recon clones live under **`temp/`** or operator worktree — **not** committed.
- Full installs use **pinned ADK tarball** same as SBL attempts; record pin in attempt README.
- Post-ship verification waves: **`RW E06:S09:T41 --art`** only (BR-097).

### §2.4 Status transition intent

- **Current task status:** `TODO` (@ v0.6.9.41+0 kanban init)
- **→ IN PROGRESS:** First implementation wave lands (diversity matrix or `adk-install-external/` scaffold) per §4 Step 1.
- **→ COMPLETE:** FR-142 AC1–AC5 satisfied with evidence links in task doc; or operator-signed deferrals documented.
- **Owner:** IDW execution; IPW does not transition status.

### §2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single programme pattern: extend SBL `adk-install-into-sbl/` index model |
| T2 | Reversibility | N | Docs + fixtures; no irreversible API |
| T3 | Blast radius | N | Bounded to maintainer KB + `adk-install-external/` + test fixtures |
| T4 | Precedent | N | Matrix is maintainer KB policy, not cross-cutting architecture |
| T5 | Constraint trade-off | N | No new semantic trade-off beyond FR-142 |
| T6 | Governance contract | N | Does not change RW/IPW/UKW gates (may **propose** Install RC rows separately) |
| T7 | Supersedes | N | Complements ADR-030 / UXR-029 |

**Outcome:** **EXEMPT**

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Y | Maintainer KB + `adk-install-external/` |
| E2 | No new options | Y | Recon-first mirrors existing attempt index pattern |
| E3 | Reversible in one task | Y | No schema migrations |
| E4 | Spec elsewhere | Y | FR-142 + this IPP |
| E5 | Documented NONE | Y | §2.5 recorded |

**Governing docs:** [ADR-030](../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) (paths), [FR-142](../kanban/fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) (programme), [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) (housing).

---

## §3 — Test design

| ID | Behavior / layer | Expected check | RF/RNF |
| -- | ---------------- | -------------- | ------ |
| T1 | Recon report template completeness | Manual checklist: structure map, RC pre-score table, novel-gap hypothesis, ethics fields present | RF3, RF8 |
| T2 | Anonymized fixture — KMA ingest | `pytest tests/kanban/test_kma_*` or new `tests/fixtures/adopter-corpora/test_archetype_*.py` — ingest returns non-empty proposal skeleton without network | RF5, RNF4 |
| T3 | Install RC pre-score artifact | Recon README links valid JSON or checklist; `validate_install_rc.py --help` documents profile if new row added | RF8 |
| T4 | Portal link hygiene | `pytest tests/test_portal_br068_monorepo_links.py tests/test_portal_fr114_allowlist.py` when `docs/guides/adopter-install-attempt-preflight.md` touched | RNF6 |
| T5 | Ethics doc | `adk-install-external/README.md` contains local-only + no-third-party-commits bullets | RF7, AC2 |
| T6 | Fixture size bound | Fixture tree ≤ 500 KB total; no `.env`, keys, or PII filenames (script or manual gate in recon protocol) | RNF4 |

**Not applicable:** End-to-end install RC PASS on external repo in CI (maintainer-operated, local-only).

---

## §4 — Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition `E06:S09:T41` `TODO → IN PROGRESS`** in task doc. Update `Last updated`. | Task doc |
| 2 | Confirm **G1** (UXR-029 Phase 4 / AC6) or record operator **waiver** in task doc | Gate note |
| 3 | Publish **diversity matrix** `docs/knowledge/analysis/projects/external-adopter-diversity-matrix.md` (dimensions + A1/A2/A5 selection rationale) | D1 |
| 4 | Create **`adk-install-external/README.md`** (programme overview, ethics, index pattern) + **`RECON-PROTOCOL.md`** + `archetype-*/recon-template/README.md` | D2–D4 |
| 5 | Extend **`docs/guides/adopter-install-attempt-preflight.md`** §8 with recon pointer (GitHub blob links only) | D5 |
| 6 | **Wave 2 — Recon:** Run recon for **A1, A2, A5** (local clone → structure map → Install RC pre-score); write three attempt READMEs | RF8 |
| 7 | **Wave 3 — Full install (post-G1):** Pick highest-signal archetype; one full install in maintainer worktree; synthesis or FR-079-style package under `adk-install-external/` | RF9 |
| 8 | **Wave 4 — Fixture:** Extract one anonymized mini-tree from best recon/install; add pytest per T2; document in matrix | RF5, AC4 |
| 9 | **Synthesis:** Update UXR-029 with coverage table (operator repos vs archetypes); file FR/BR/Install RC proposals for confirmed gaps | RF6, RF10 |
| 10 | Update FR-142 requirement checkboxes + task deliverable table statuses | FR/task sync |
| 11 | **`RW E06:S09:T41 --art`** per wave with material deliverables (matrix wave, recon wave, install wave, fixture wave) | Releases |
| **12** | **[MANDATORY] Reconcile task status** to `COMPLETE` / `IN PROGRESS` / `BLOCKED` per evidence | Task doc |

### §4.1 Files to create or modify

**CREATE**

- `docs/knowledge/analysis/projects/external-adopter-diversity-matrix.md`
- `adk-install-external/README.md`
- `adk-install-external/RECON-PROTOCOL.md`
- `adk-install-external/archetype-a1-issues-only/recon-01/README.md` (and a2, a5)
- `adk-install-external/archetype-*/install-01/` (optional, post-G1)
- `tests/fixtures/adopter-corpora/{archetype-id}/` (anonymized)
- `tests/fixtures/adopter-corpora/test_archetype_fixture_smoke.py` (or extend existing KMA tests)

**UPDATE**

- `docs/guides/adopter-install-attempt-preflight.md` (§8 recon link)
- `docs/kanban/fbu/UXR-029-adk-install-path-experiment.md` (coverage synthesis)
- `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-*.md`
- `docs/maintenance/repository-path-manifest.json` (register `adk-install-external` if IA policy requires)
- `docs/kanban/fbu/FR-142-*.md` (status/evidence on closure)

**NONE (reviewed)**

- `packages/frameworks/**` — no installer changes in v1 unless Wave 3 proves gap (separate task)
- Docusaurus / `portal/` — maintainer programme; not adopter-public

### §4.2 Dependency order

1. G1 check or waiver → Step 2  
2. Matrix + ethics + index scaffold (Steps 3–4) — **may start before G1**  
3. Recon x3 (Step 6) — **may parallel Phase 2–3 UXR-029**  
4. Full install (Step 7) — **after G1** unless waived  
5. Fixture + pytest (Step 8) — after best recon/install signal  
6. Synthesis + intake (Step 9) — last  

### §4.3 Documentation implementation steps

- Register `adk-install-external/` in path manifest per FR-140 class (maintainer programme index, same class as `adk-install-into-sbl`).
- Mirror pointer in `docs/adk-feedback/` only if operator wants FR-079-style discoverability (optional; NONE default).

---

## §5 — Documentation deliverables

| Doc ID | Path | Action | Scope | Tied to |
| ------ | ---- | ------ | ----- | ------- |
| D1 | `docs/knowledge/analysis/projects/external-adopter-diversity-matrix.md` | CREATE | Dimensions, archetypes A1–A5, selection criteria, ethics summary | RF1, AC1 |
| D2 | `adk-install-external/README.md` | CREATE | Programme index, ethics, link to matrix | RF4, RF7 |
| D3 | `adk-install-external/RECON-PROTOCOL.md` | CREATE | Recon-first steps, RC pre-score, anonymization rules | RF3 |
| D4 | `adk-install-external/archetype-*/recon-01/README.md` | CREATE | Per-archetype recon reports (×3) | RF8 |
| D5 | `docs/guides/adopter-install-attempt-preflight.md` | UPDATE | §8 link to matrix + recon protocol (blob URLs) | RF2, RNF6 |
| D6 | `docs/kanban/fbu/UXR-029-adk-install-path-experiment.md` | UPDATE | Coverage synthesis table (operator vs external) | RF10, AC5 |
| D7 | `docs/maintenance/repository-path-manifest.json` | UPDATE | Register `adk-install-external` | IA policy |
| D8 | Host task + FR-142 | UPDATE | Evidence links, deliverable statuses, gate/waiver | Steps 10–12 |
| D9 | `INSTALL_IN_YOUR_PROJECT.md` | NONE | No adopter-facing install change in v1 | — |
| D10 | ADR | NONE | EXEMPT per §2.5 | — |

---

## §6 — Documentation housing

| Doc ID | Target path | Publication | Lifecycle | Inbound links |
| ------ | ----------- | ----------- | --------- | ------------- |
| D1 | `docs/knowledge/analysis/projects/` | NOT_APPLICABLE (maintainer KB) | evergreen | Matrix linked from D2, D5, task doc |
| D2–D4 | `adk-install-external/` | NOT_APPLICABLE | evergreen | T41, FR-142, UXR-029 |
| D5 | `docs/guides/` | PUBLISHED (Docusaurus allowlist) | evergreen | Preflight already in portal scope |
| D6 | `docs/kanban/fbu/` | NOT_APPLICABLE | evergreen | UXR-029 related block |
| D7 | `docs/maintenance/` | NOT_APPLICABLE | evergreen | FR-140 |

**IPP:** `docs/implementation-cycles/IPP-E06S09T41-external-adopter-archetype-corpus-fr142.md` — wired from task **Input** / **References**.

---

## §7 — Success / verification criteria

| AC | Criterion | Verification |
| -- | --------- | ------------ |
| AC1 | Diversity matrix + Phase 5 sequencing in maintainer KB + preflight | D1 exists; D5 links via blob URLs; T4 pytest pass |
| AC2 | ≥3 recon reports with Install RC pre-score | D4 ×3; T1 checklist |
| AC3 | ≥1 full install with synthesis / FR-079 package | `adk-install-external/.../install-01/` or waiver with recon-only justification |
| AC4 | ≥1 anonymized fixture + pytest | T2 pass; fixture size T6 |
| AC5 | UXR-029 coverage synthesis | D6 updated |
| AC6 | Ethics: no third-party repo modified | T5; operator attestation in install README |
| AC7 | Portal hygiene on guide edits | T4 pytest |
| AC8 | Task status reconciled | Step 12 |

**RW waves (BR-097):** `RW E06:S09:T41 --art` after matrix scaffold, after recon batch, after install/fixture waves — **no `--dpz`** on follow-on waves.

---

## References

- [FR-142](../kanban/fbu/FR-142-external-adopter-archetype-corpus-install-validation.md)
- [E06:S09:T41](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md)
- [UXR-029](../kanban/fbu/UXR-029-adk-install-path-experiment.md)
- [E06:S09:T26](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)
- [adopter-install-attempt-preflight.md](../guides/adopter-install-attempt-preflight.md)
- [starborn-legacy-install-triage-matrix.md](../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)
- [attempt-10 index](../../adk-install-into-sbl/attempt-10/README.md) (pattern reference)
- [ADR-030](../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md)
- [ADR-026](../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md)
