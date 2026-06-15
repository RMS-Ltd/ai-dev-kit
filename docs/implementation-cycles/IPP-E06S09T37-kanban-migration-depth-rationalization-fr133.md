---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T37 — Planning: Painless adopter kanban migration workflow (IPW)

**Host Task:** [`T37-kanban-migration-depth-rationalization-fr133.md`](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md) **(E06:S09:T37)**  
**Planning for:** [FR-133](../kanban/fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · SBL attempt 10 evidence · [E06:S09:T36](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) · [E06:S09:T31](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md)  
**Status:** Approved

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Document **one Arm B migration journey** (install → archive → orchestrator → KMA → RC → first RW) as the primary adopter surface | FR-133-F1, AC1, T37 deliverable 1 |
| RF2 | **Default migration depth = L1** (route & preserve): legacy routed via DUPLICATE_EPIC_POLICY; forensic tokens preserved; Install RC PASS = migration-complete for shipping | FR-133-F2, AC5 |
| RF3 | **L2/L3 rationalization opt-in** with separate operator sign-off; never block Install RC or first domain RW on L2/L3 | FR-133-F3, AC6 |
| RF4 | Adopter-facing **“you are done”** checklist: RC PASS + comprehension doc + zero ad-hoc `*kma*` / `*migrate*kanban*` scripts | FR-133-F4, AC5 |
| RF5 | **Collision playbook** — fresh Core template vs legacy import filename class (`story-{nn}-legacy-*` or equivalent); linked from KMA guides | FR-133-F5, AC4 |
| RF6 | **Megastory policy** — default preserve at L1; document when/how to split at L3; no forced fan-out on install path | FR-133-F6, AC4 |
| RF7 | Define **L1/L2/L3** with entry/exit criteria (internal depth model + agent appendix) | FR-133-F7 |
| RF8 | Publish abstract playbook `KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` (no project-specific routing tables) | FR-133-F8, T37 deliverable 2 |
| RF9 | Parameterized epic band model (Core E01–E10 / Ancillary E11–E20 / Domain E24+) filled from ingest + DUPLICATE_EPIC_POLICY | FR-133-F9 |
| RF10 | Cross-link INSTALL, KMA execution, `LEGACY_KANBAN_MIGRATION.md`, `DUPLICATE_EPIC_POLICY.md`, depth guide | FR-133-F10 |
| RF11 | Ship **COMPREHENSION.md depth template** with L1 default, depth achieved, and explicit **not performed** list | FR-133-F11, AC3, T37 deliverable 4 |
| RF12 | **KMA / `kma.md` load order** — painless-default path and depth guide before deep policy corpora | T37 deliverable 5 |
| RF13 | Optional templates: `migration-rationalization.md` stub for L2/L3 second pass | FR-133-F11 (optional) |
| RF14 | FR-079 feedback payload may record `migration_depth` field when adopter submits install evidence | FR-133-F11, FR-079 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Painlessness metric:** Arm B completes with **0** ad-hoc KMA scripts; kit orchestrator + KMA only (SBL attempt 10 bar) | FR-133-NF1, AC5 |
| RNF2 | Guide usable with **zero** prior knowledge of any single adopter project (abstract examples only) | FR-133-NF2 |
| RNF3 | Depth model **orthogonal** to Install RC — do not add L3 rows to RC blocking set | FR-133-NF3 |
| RNF4 | **Progressive disclosure** — INSTALL Arm B prose stays simple; depth detail in framework guide | FR-133-NF4 |
| RNF5 | Greenfield mirror sync when touching `packages/frameworks/**` | FR-110, T37 AC6 |
| RNF6 | Consistency with FR-127 KMA, ADR-028, ADR-030 Path 2, UXR-029 programme | FR-133 AC6 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - KMA Step 3 sign-off gate unchanged (FR-127-F3).
  - Install RC `arm-b` profile blocking rows unchanged except comprehension template **content** guidance (no new L3 blocking rows).
  - Legacy root remains read-only; writes to `kanban_root` only.
  - Blind KMA contract preserved: no pre-authored target E/S tree, no held-out reference tree in agent context for first pass (attempt-10 preflight).
- **In scope:**
  - INSTALL **“Migrate (default)”** subsection under Path 2 (Arm B).
  - New framework guide `KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md`.
  - Collision + megastory defaults in KMA execution guide, adopter playbook, `LEGACY_KANBAN_MIGRATION.md`, and/or `DUPLICATE_EPIC_POLICY.md`.
  - `COMPREHENSION_TEMPLATE.md` (or equivalent) under workflow-mgt templates.
  - `.claude/commands/kma.md` load-order reorder.
  - Cross-links from existing INSTALL Path 2 / layered sequence to new subsection.
  - FR-133 status/evidence updates on delivery.
- **Out of scope (unless IDW proves doc-only insufficient for RNF1):**
  - Mandatory L3 rationalization for RC PASS.
  - SBL-specific routing tables or attempt-09 reference tree in kit docs.
  - Maintainer reference trees in KMA agent context.
  - Orchestrator `--migration-depth` flag (FR-133 future — defer unless IDW blocked).
  - `validate_migration_depth.py` (FR-133 future — defer).
  - Automated KMA collision rename scripts (FR-133 future — defer).

### 1.4 Phase 1 planning decisions (continuous — FR-133 + attempt 10 evidence)

| Gap | Decision |
| --- | -------- |
| L1/L2/L3 definitions | **L1** = route & preserve (blind KMA + sign-off + synthesise; megastories/inline tasks kept). **L2** = post-ship hygiene (collision renames, board stubs, validator fixes) — optional second signed-off pass. **L3** = rationalize (megastory split, task fan-out, structural scorecard) — optional; never RC-blocking. |
| Doc-only vs tooling | **Doc-only primary** — attempt 10 proved L1 blind KMA + RC PASS shippable without new scripts. Tooling triage: **NONE** in v1 unless IDW finds RNF1 gap. |
| COMPREHENSION template home | `packages/frameworks/workflow-mgt/templates/COMPREHENSION_TEMPLATE.md` — Install RC + orchestrator already reference repo-root `COMPREHENSION.md`; template lives with install contract. |
| INSTALL subsection placement | New **`### Migrate (default)`** immediately under **Path 2 — Shell + selective migration (Arm B)** — progressive disclosure; links to depth guide for agents. |
| Collision pattern class | Document abstract pattern: when fresh v4 Core `story-{nn}-*.md` collides with legacy-import target, use **`story-{nn}-legacy-{slug}.md`** (or archive-suffixed slug) per attempt-10 FB class — no SBL filenames in kit. |
| Megastory default | **Preserve at L1** — inline `E:S:T` tokens and multi-task story bodies remain unless operator opts into L3 proposal. |
| ADR | **EXEMPT** — depth model governed by new framework guide + FR-133; ADR-028 (KMA) and ADR-030 (paths) already cover architecture. |

---

## 2. Specification

### 2.1 Goal

Package the **default painless migration path** for mature-repo adopters (Arm B): one kit-owned journey from legacy archive through orchestrator layered install, blind KMA at **L1**, Install RC PASS, and first domain RW — with an abstract agent playbook for optional **L2/L3** rationalization. Adopters and agents should know **when they are done** (RC + comprehension + zero ad-hoc scripts) without maintainer KB, reference trees, or mandatory structural optimization.

**Evidence:** SBL attempt 10 — orchestrator `arm-b` + blind kit KMA + **0** ad-hoc scripts + Install RC strict PASS + first RW; phase-2 structural compare is maintainer-only and **optional** for shipping.

### 2.2 Specification mapping from ascertained requirements

| RF/RNF | Specification element |
| ------ | ---------------------- |
| RF1, RF10 | INSTALL `Migrate (default)` subsection: numbered journey mirroring layered sequence steps 0–7; single entry point before KMA deep docs |
| RF2, RF7 | Depth guide §2 L1 criteria: DUPLICATE_EPIC_POLICY routing, preserve megastories, RC PASS = ship |
| RF3, RF7 | Depth guide §3 L2/L3 opt-in: separate `migration-rationalization.md` proposal; explicit “not performed” in comprehension |
| RF4, RF11 | `COMPREHENSION_TEMPLATE.md`: kanban root, docs authority, version truth, restore ≠ migrate, **depth achieved**, **not performed** bullets |
| RF5 | Collision playbook subsection in depth guide + KMA Step 2 checklist bullet; cross-link DUPLICATE_EPIC_POLICY |
| RF6 | Megastory policy in depth guide + KMA propose-step default (“preserve unless L3 signed off”) |
| RF8, RF9 | `KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` — full depth model, epic bands, agent appendix |
| RF12 | `kma.md` + adopter playbook load order: depth guide → painless INSTALL pointer → execution guide → policies |
| RF13 | Optional `migration-rationalization-template.md` under kanban templates |
| RNF1–RNF4 | Progressive disclosure; no RC changes for L3; abstract examples only |
| RNF5 | `sync_greenfield_install.py` in implementation commit |

### 2.3 Constraints

- No weakening of `validate_install_rc.py` `arm-b` blocking semantics.
- No project-specific epic maps (SBL E/S trees) in kit docs.
- BR-097: post-ship verification / FBU waves prescribe **`RW E06:S09:T37 --art`** only.
- BR-068: if adopter-public paths under `docs/guides/` are touched, use GitHub blob URLs for cross-surface links.
- KMA Step 3 blocking gate is non-negotiable.

### 2.4 Status transition intent (mandatory)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (§4 Step 1).
- **Transition trigger to COMPLETE:** AC1–AC6 satisfied with structural verification evidence in task doc.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same RW Step 7 change set.
- **Owner:** IDW implementation execution (not this IPW).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **N** | FR-133 already selected L1 default + opt-in L2/L3; IPP implements prescribed model |
| T2 | Reversibility | **N** | Documentation-only delivery; revert is normal git revert |
| T3 | Blast radius | **N** | Confined to INSTALL + `packages/frameworks/kanban|workflow-mgt` docs/templates per §4.1 |
| T4 | Precedent | **N** | Precedent artifact is framework guide per FR-133-F8; extends ADR-028/030 without new architectural fork |
| T5 | Constraint trade-off | **N** | Documents existing trade-off (L1 ship vs L3 optimize); does not change runtime contracts |
| T6 | Governance contract | **N** | Does not alter RW/IPW/UKW/validator gates |
| T7 | Supersedes | **N** | Extends ADR-028 KMA + ADR-030 Path 2; no contradiction |

**Outcome:** **EXEMPT**

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | **Y** | §4.1 file list only |
| E2 | No new options | **Y** | Implements FR-133 + ADR-028 + ADR-030 Path 2 only |
| E3 | Reversible in one task | **Y** | Doc/template revert without migration |
| E4 | Spec elsewhere | **Y** | FR-133 + this IPP §2 |
| E5 | Documented NONE | **Y** | §5.3 cites FR-133, ADR-028, ADR-030 |

---

## 3. Test design

**`--skip-tests` justification:** Primary deliverables are **documentation and install UX templates** — no new executable migration logic, validators, or installer behaviour changes in v1. SBL attempt 10 already validated the painless bar operationally. Verification is **structural inspection**: required sections present, cross-links resolve, INSTALL subsection discoverable, KMA load order lists depth guide first, COMPREHENSION template includes depth + not-performed fields, and greenfield mirror parity. Existing `test_kma_agentic_vs_automated.py` remains unchanged. Optional doc-contract pytest (`test_install_brownfield_docs.py` extension) is **deferred** unless IDW adds it for regression guard — not required for AC satisfaction.

| ID | Behavior / layer | Expected check | RF |
| -- | ---------------- | -------------- | -- |
| V1 | INSTALL Migrate (default) | Path 2 contains dedicated subsection; numbered journey 0–7; links to depth guide + KMA | RF1 |
| V2 | Depth guide exists | `KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` defines L1/L2/L3 entry/exit; L1 default stated | RF2, RF7, RF8 |
| V3 | L2/L3 opt-in | Depth guide states separate sign-off; RC not blocked on L3 | RF3 |
| V4 | COMPREHENSION template | Template includes depth achieved (default L1), not-performed list, RC fields | RF11, AC3 |
| V5 | Collision playbook | Abstract `story-*-legacy-*` class documented; linked from KMA Step 2 | RF5 |
| V6 | Megastory default | L1 preserve documented; L3 split criteria documented | RF6 |
| V7 | KMA load order | `kma.md` lists depth guide + painless path before execution guide deep dive | RF12 |
| V8 | Cross-links | INSTALL ↔ depth guide ↔ LEGACY_KANBAN_MIGRATION ↔ DUPLICATE_EPIC_POLICY ↔ kma.md | RF10 |
| V9 | Painlessness bar | Depth guide + INSTALL state 0 ad-hoc scripts + RC PASS sufficient | RF4, RNF1 |
| V10 | Greenfield sync | `python scripts/sync_greenfield_install.py --check` green after framework edits | RNF5 |
| V11 | No SBL routing tables | Grep kit docs — no attempt-09 E/S reference tree embedded | RNF2, out of scope |
| V12 | Install RC unchanged | `install-rc-checklist.yaml` arm-b blocking set has no new L3-only rows | RNF3 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E06:S09:T37` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. Confirm IPP bidirectional links. | Task doc `Status` = `IN PROGRESS` |
| 2 | Author **`KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md`** — L1/L2/L3 model, epic bands, painless bar, collision + megastory sections, agent appendix, cross-links | Framework guide (CREATE) |
| 3 | Add INSTALL **`### Migrate (default)`** under Path 2 — single journey prose; “you are done” checklist; link depth guide | `INSTALL_IN_YOUR_PROJECT.md` |
| 4 | Create **`COMPREHENSION_TEMPLATE.md`** — RC fields + depth achieved + not performed + restore ≠ migrate | `packages/frameworks/workflow-mgt/templates/` |
| 5 | Update **KMA collision + megastory defaults** — Step 2 checklist in execution guide; preserve-at-L1 in propose step; link collision playbook | `kanban-migration-agent-execution.md`, `ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md`, `LEGACY_KANBAN_MIGRATION.md` |
| 6 | Extend **`DUPLICATE_EPIC_POLICY.md`** — short collision filename pointer to depth guide § (if not fully covered in step 2) | Policy guide |
| 7 | Reorder **`.claude/commands/kma.md`** load list — depth guide + INSTALL Migrate (default) first; painless path before policies | `kma.md` |
| 8 | Optional: **`migration-rationalization-template.md`** for L2/L3 second-pass proposal | `packages/frameworks/kanban/templates/` |
| 9 | Update **`install_greenfield_path.py`** post-install hint to reference COMPREHENSION template path (one-line; optional) | Orchestrator UX hint |
| 10 | Update **FR-133** — implementing-task evidence links; status progression when ACs met | FR doc |
| 11 | Run **`python scripts/sync_greenfield_install.py`** + commit `greenfield-install/` mirror | FR-110 parity |
| 12 | Run **V1–V12** structural verification; record evidence table in task doc | Verification notes |
| 13 | **`RW E06:S09:T37 --art`** — version, changelog, kanban Step 7 four-surface sync, commit, tag | Local release |
| 14 | Post-ship: confirm attempt-10 painless bar documented; no ad-hoc-script regression in prose | AC5 evidence |
| **15** | **[MANDATORY] Reconcile task `E06:S09:T37` status** to actual implementation state: if all ACs satisfied → `COMPLETE` + `✅ COMPLETE (v{version})`; if ongoing → `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. Sync `kboard.md` row. Update FR-133 status when AC-complete. | Task doc status reflects actual state |

**RW verification rule (BR-097):** Steps 13–14 use **`RW E06:S09:T37 --art`** only. No `--doc-policy-zero`.

### 4.1 Files to create or modify

**Create:**

- `packages/frameworks/kanban/guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md`
- `packages/frameworks/workflow-mgt/templates/COMPREHENSION_TEMPLATE.md`
- `packages/frameworks/kanban/templates/MIGRATION_RATIONALIZATION_TEMPLATE.md` (optional L2/L3 — step 8)

**Modify:**

- `INSTALL_IN_YOUR_PROJECT.md` — Path 2 `Migrate (default)` subsection + cross-links
- `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md` — collision, megastory, depth cross-links
- `packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md` — load order, L1 default pointer
- `packages/frameworks/kanban/guides/LEGACY_KANBAN_MIGRATION.md` — depth model pointer, collision checklist
- `packages/frameworks/kanban/guides/DUPLICATE_EPIC_POLICY.md` — collision filename cross-link
- `.claude/commands/kma.md` — load order
- `packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py` — COMPREHENSION template hint (optional)
- `docs/kanban/fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md` — evidence/status
- `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md` — AC checkboxes, verification
- `docs/kanban/kboard.md` — Step 7 scoped row (RW)
- `greenfield-install/` — mirror of touched framework paths

**NONE (reviewed):**

- `install-rc-checklist.yaml` — RC semantics already sufficient; comprehension **content** guided by template only (RNF3)
- `validate_migration_depth.py` — deferred per FR-133 future scope
- Orchestrator `--migration-depth` — deferred unless IDW blocked

### 4.2 Dependency order

1. Depth guide (step 2) — authoritative L1/L2/L3 definitions for all other docs.
2. COMPREHENSION template (step 4) — references depth labels from guide.
3. INSTALL subsection (step 3) — links to depth guide + existing layered sequence.
4. KMA docs + `kma.md` load order (steps 5–7) — consume depth guide terminology.
5. Greenfield sync (step 11) — after all `packages/frameworks/**` edits.
6. Verification + RW (steps 12–13) — after content complete.

### 4.3 Documentation implementation steps

1. Write `KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` (skeleton: goal → L1 default journey → depth table → collision → megastory → painless bar → agent appendix → links).
2. Add INSTALL `Migrate (default)` — keep under ~40 lines; defer depth to framework guide (RNF4).
3. Add COMPREHENSION template — copy-friendly markdown adopter fills at repo root.
4. Patch KMA execution guide Step 2 — collision + megastory bullets before epic map.
5. Reorder `kma.md` — depth guide first load instruction.
6. Cross-link sweep — bidirectional where practical.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/step) |
| ------ | ---- | --------------- | ----------------- |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | Add `### Migrate (default)` under Path 2; painless journey + done checklist | RF1, step 3 |
| D-U2 | `packages/frameworks/kanban/KB/Documentation/Developer_Docs/kanban-migration-agent-execution.md` | Collision + megastory Step 2 defaults; depth guide link | RF5, RF6, step 5 |
| D-U3 | `packages/frameworks/kanban/guides/ADK_KANBAN_MIGRATION_FOR_ADOPTER_AGENTS.md` | L1 default; load order; depth guide link | RF12, step 5 |
| D-U4 | `packages/frameworks/kanban/guides/LEGACY_KANBAN_MIGRATION.md` | Depth model + collision checklist pointer | RF10, step 5 |
| D-U5 | `packages/frameworks/kanban/guides/DUPLICATE_EPIC_POLICY.md` | Collision filename cross-link to depth guide | RF5, step 6 |
| D-U6 | `.claude/commands/kma.md` | Load order: depth guide → INSTALL Migrate → execution guide | RF12, step 7 |
| D-U7 | `packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py` | Hint: copy COMPREHENSION template | RF11, step 9 |
| D-U8 | `docs/kanban/fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md` | Status/evidence on delivery | step 10 |
| D-U9 | `docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-*.md` | AC evidence, status | steps 1, 15 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/step) |
| ------ | ------------- | ------- | ----------------- |
| D-C1 | `packages/frameworks/kanban/guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` | Canonical depth model + agent playbook | RF7–RF9, step 2 |
| D-C2 | `packages/frameworks/workflow-mgt/templates/COMPREHENSION_TEMPLATE.md` | Install RC comprehension with depth + not-performed | RF11, step 4 |
| D-C3 | `packages/frameworks/kanban/templates/MIGRATION_RATIONALIZATION_TEMPLATE.md` | Optional L2/L3 second-pass proposal stub | RF13, step 8 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| ADR for depth model | **NONE** — governed by FR-133 + D-C1 + ADR-028 + ADR-030 (§2.5 EXEMPT) |
| Install RC new blocking rows for L3 | **NONE** — RNF3; template content only |
| `validate_migration_depth.py` | **NONE** — FR-133 future; defer to follow-on task if needed |
| Orchestrator `--migration-depth` | **NONE** in v1 — doc-only sufficient per attempt 10 |
| SBL reference E/S tree in kit | **NONE** — out of scope; maintainer-only phase 2 |
| Portal publish of framework guides | **NONE** — framework package docs not Docusaurus allowlist; INSTALL is repo-root (not portal i18n) |
| `docs/guides/adopter-install-attempt-preflight.md` | **UPDATE optional** — one-line link to depth guide if IDW touches preflight |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `packages/frameworks/kanban/guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md` | NOT_APPLICABLE | Framework package doc; linked from INSTALL + KMA | evergreen | INSTALL Path 2, kma.md, T37, FR-133 |
| D-C2 | `packages/frameworks/workflow-mgt/templates/COMPREHENSION_TEMPLATE.md` | NOT_APPLICABLE | Adopter copies to repo root; orchestrator hint | evergreen | INSTALL, install-rc-checklist.md, preflight |
| D-C3 | `packages/frameworks/kanban/templates/MIGRATION_RATIONALIZATION_TEMPLATE.md` | NOT_APPLICABLE | Optional L2/L3 artifact | evergreen | Depth guide § L2/L3 |
| D-U1 | `INSTALL_IN_YOUR_PROJECT.md` | NOT_APPLICABLE | Repo-root adopter doc (not Docusaurus corpus) | evergreen | FR-133, T37, depth guide |
| D-U2–D-U6 | `packages/frameworks/kanban/**`, `.claude/commands/kma.md` | NOT_APPLICABLE | Framework / command docs | evergreen | Depth guide, INSTALL |
| IPP | `docs/implementation-cycles/IPP-E06S09T37-kanban-migration-depth-rationalization-fr133.md` | NOT_APPLICABLE | Planning artifact (maintainer) | evergreen | T37 Input/References |

---

## 7. Success / verification criteria

- [ ] **AC1:** Adopter can follow INSTALL `Migrate (default)` + KMA only — no maintainer KB (V1, V7, V8)
- [ ] **AC2:** Depth guide published; KMA load path lists painless-default first (V2, V7)
- [ ] **AC3:** COMPREHENSION template ships with L1 default + not-performed list (V4)
- [ ] **AC4:** Collision + megastory guidance present in KMA docs (V5, V6)
- [ ] **AC5:** Painlessness bar documented — 0 ad-hoc scripts + RC PASS (V9)
- [ ] **AC6:** Greenfield mirror synced (V10)
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason in task doc
- [ ] §4 Step 1 (`TODO → IN PROGRESS`) executed at IDW start; Step 15 reconciliation at IDW end
- [ ] **Greenfield:** `python scripts/sync_greenfield_install.py --check` green; mirror in same commit
- [ ] Structural verification V1–V12 recorded in task doc before RW
- [ ] Post-ship verification: **`RW E06:S09:T37 --art`** only (BR-097)

---

## References

- [FR-133](../kanban/fr-br/FR-133-kanban-migration-depth-rationalization-adopter-guide.md)
- [E06:S09:T37](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T37-kanban-migration-depth-rationalization-fr133.md)
- [E06:S09:T36](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md)
- [E06:S09:T31](../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md)
- [IPP-E06S09T31](IPP-E06S09T31-agentic-kanban-migration-agent-fr127.md)
- [ADR-028](../architecture/standards-and-adrs/ADR-028-agentic-kanban-migration-brownfield-fr127.md)
- [ADR-030](../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md)
- [SBL attempt 10 index](../../adk-install-into-sbl/attempt-10/README.md)
- [install-rc-checklist.md](../governance/standards/install-rc-checklist.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [specification-and-planning-artifacts-policy.md](../governance/standards/specification-and-planning-artifacts-policy.md)
