---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S08:T06 — Planning: ADR-026 + git-maintainer authoring bootstrap (FR-121)

**Host Task:** [`T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md`](../kanban/epics/epic-05/story-08-knowledge-base/T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md) **(E05:S08:T06)**  
**Planning for:** [FR-121](../kanban/fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) (F2–F4 partial, F7; NF1, NF3)  
**Status:** Draft — ready for IDW

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094. Wave 2 follows [IPP-E05S08T05](IPP-E05S08T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) (corpus restored @ v0.5.8.5+2).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Publish **ADR-026** — two publish surfaces (git maintainer SoT + Docusaurus adopter-public); Obsidian as optional editor profile only (policy; install deferred T07) | FR-121-F2; T06 D1 |
| RF2 | Replace **`P-NOTION-FIRST`** with **`P-GIT-MAINTAINER`** in `AGENTS.md` and `project-agent-manifest.json` | FR-121-F3; T06 D2–D3 |
| RF3 | Rewire **`maintainer-kb`** track: `loadFirst` → ADR-026 + `docs/knowledge/README.md`; keywords de-emphasize Notion as default | FR-121-F3; T06 AC2 |
| RF4 | Remove Notion-first anti-patterns from `AGENTS.md` and `docs/project-agent-index.md` | FR-121-F3; T06 AC2 |
| RF5 | Extend **`rw-config.yaml`** with documented `documentation_surfaces` + `maintainer_editor_profile` schema; default `maintainer_kb.sot: git` | FR-121-F4; T06 D4 |
| RF6 | Add **ADR-024 partial-supersession banner** + cross-links to ADR-026 / FR-121 | FR-121-F7; T06 D5; T06 AC4 |
| RF7 | Add **FR-114 supersession banner** referencing FR-121 / ADR-026 (maintainer SoT only) | FR-121-F7; T06 AC4 |
| RF8 | Manifest **`canon[]`** includes `C-ADR-026`; retain `C-ADR-024` with superseded maintainer scope note | T06 AC3 |
| RF9 | Update **`documentationSurfaces`** in manifest to reflect git SoT + optional Notion archive URLs | T06 D3 |
| RF10 | Bidirectional IPP ↔ task wiring | FR-042 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | `AGENTS.md` stays ≤ **150 lines** (ADR-012) | ADR-012 |
| RNF2 | Manifest paths validate (`validate-project-agent-manifest-paths.py` + jsonschema) | FR-103 |
| RNF3 | Docusaurus exclude globs unchanged; portal build green | FR-121-NF1 |
| RNF4 | No new maintainer content on Docusaurus allowlist | FR-114 retain |
| RNF5 | Post-ship: `RW E05:S08:T06 --art` only | BR-097 |
| RNF6 | Binding ADRs remain full text in git | T05 invariant |

### 1.3 Invariants and boundaries

- **Invariants:** T05 restored corpus unchanged; IPP/ICW full text in git; cold-start reads `AGENTS.md` only.
- **In scope:** ADR-026, bootstrap rewire (AGENTS, manifest, index), `rw-config` schema block + inline comments, ADR-024/FR-114 banners, pytest updates, `docs/knowledge/README.md` ADR-026 pointer.
- **Out of scope:** Obsidian install profiles / greenfield prompts (**E05:S08:T07**); Notion workspace decommission; `.cursorrules` full rewrite (pointer swap only if `P-NOTION-FIRST` cited); re-publishing maintainer trees on Docusaurus; kanban-v2 Notion stubs (outside FR-114 manifest).

---

## 2. Specification

### 2.1 Goal

Publish the authoritative **two-surface** documentation model (git maintainer SoT + Docusaurus adopter-public) and rewire agent cold-start so maintainers and agents without Notion MCP author and read maintainer KB at **repo paths** — completing FR-121 policy wave after T05 corpus restoration.

### 2.2 Specification mapping from ascertained requirements

| Surface | Authority (post ADR-026) | Agent default |
| ------- | ------------------------ | ------------- |
| **Git** | Maintainer KB, kanban, FR/BR, IPP, binding ADRs, adopter source docs | **Author here** (`docs/knowledge/`, `docs/maintenance/`, `docs/analysis/`, …) |
| **Docusaurus** | Allowlisted adopter-public paths only | Read for adopter-docs track; do not publish maintainer churn |
| **Notion** | Optional archive (URLs in `rw-config.yaml`) | Not cold-start; not SoT |
| **Obsidian** | Editor UX on git vault only | T07 install; never SoT |

ADR-026 **supersedes** ADR-024 §§1–3 maintainer/Notion SoT and **P-NOTION-FIRST**. ADR-024 **retains** Docusaurus allowlist topology, git-stub historical note (deprecated post reverse migration), binding ADR policy, and RC ≥ 1 release-notes rules where still valid.

### 2.3 Constraints

- Swap `P-NOTION-FIRST` → `P-GIT-MAINTAINER` in `AGENTS.md` binding table and manifest `protocol[]` in the **same change set**.
- `maintainer-kb` `loadFirst`: `docs/knowledge/README.md`, `ADR-026`, `rw-config.yaml` (order: README → ADR-026 → config).
- Manifest schema: extend `documentationSurfaces` with optional `maintainerKbSot: "git"` (and document in schema JSON); keep existing Notion URL fields as **archive** metadata.
- ADR-024 header gains **Partially superseded** banner (pattern: ADR-024-docusaurus FR-066 supersession).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (IPP Step 1).
- **Transition trigger to COMPLETE:** All acceptance criteria evidenced + `RW E05:S08:T06 --art`.
- **Atomic propagation requirement:** Task doc status and kboard row update in same RW Step 7 change set.
- **Owner:** IDW implementation execution.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Git vs Notion vs Docusaurus per doc class — operator chose git-internal OSS |
| T2 | Reversibility | Y | Bootstrap routing affects every agent session |
| T3 | Blast radius | Y | Cold-start contract + all maintainer authoring |
| T4 | Precedent | Y | Supersedes ADR-024 maintainer policy; extends ADR-012 |
| T5 | Constraint trade-off | Y | OSS openness vs private Notion tier |
| T6 | Governance contract | Y | New binding rule P-GIT-MAINTAINER |
| T7 | Supersedes | Y | Partial supersession of ADR-024 / FR-114 maintainer SoT |

**Outcome:** `REQUIRED` — **CREATE** `docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1–E5 | — | N/A | T1–T7 not all N |

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | `AGENTS.md` routing | `maintainer-kb` track; **`P-GIT-MAINTAINER`**; no **`P-NOTION-FIRST`** | RF2, RF3 |
| T2 | ADR-012 line budget | `AGENTS.md` ≤ 150 lines | RNF1 |
| T3 | Manifest protocol | `P-GIT-MAINTAINER` present; `P-NOTION-FIRST` absent | RF2 |
| T4 | Manifest routing | `maintainer-kb` loadFirst includes ADR-026 + knowledge README; Notion not required in loadFirst | RF3 |
| T5 | Manifest canon | `C-ADR-026` in `canon[]` | RF8 |
| T6 | ADR-026 content | Accepted; two-surface model; git authoring default | RF1 |
| T7 | ADR-024 supersession | Banner references ADR-026 / FR-121 | RF6 |
| T8 | FR-114 supersession | Banner references FR-121 maintainer SoT reversal | RF7 |
| T9 | `rw-config.yaml` | `documentation_surfaces.maintainer_kb.sot: git` present | RF5 |
| T10 | Path + schema validators | `validate-project-agent-manifest-paths.py` + jsonschema exit 0 | RNF2 |
| T11 | Portal CI | `npm run build` in `portal/` (unchanged excludes) | RNF3 |
| T12 | Knowledge README | Points to ADR-026 as policy SoT | RF1 |

**Module:** extend [`tests/test_agent_bootstrap_fr114_notion_routing.py`](../tests/test_agent_bootstrap_fr114_notion_routing.py) → rename or add [`tests/test_agent_bootstrap_fr121_git_maintainer.py`](../tests/test_agent_bootstrap_fr121_git_maintainer.py) with FR-121 assertions; gate legacy Notion-first tests behind absence of `P-GIT-MAINTAINER` or delete inverted tests.

**Structural / doc-only:** No `--skip-tests` — pytest coverage is lightweight and required for bootstrap contract regression.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E05:S08:T06` status `TODO → IN PROGRESS`** in task doc. Update `Last updated`. | Task doc |
| 2 | Draft **ADR-026** (two surfaces, SoT matrix, git authoring, Obsidian policy deferral, enterprise escape hatch) | `ADR-026-git-internal-maintainer-kb-fr121.md` |
| 3 | Add **ADR-024 supersession banner** + version row; narrow retained sections | ADR-024 UPDATE |
| 4 | Add **FR-114 supersession banner** (maintainer SoT only) | FR-114 UPDATE |
| 5 | Update **`AGENTS.md`**: `maintainer-kb` track, `P-GIT-MAINTAINER`, anti-patterns (git paths not Notion) | AGENTS.md |
| 6 | Update **`project-agent-manifest.json`**: protocol, routing, canon, documentationSurfaces | manifest |
| 7 | Update **`project-agent-manifest.schema.json`** if `documentationSurfaces` extended | schema |
| 8 | Update **`docs/project-agent-index.md`** track summary + anti-patterns | index |
| 9 | Add **`documentation_surfaces`** + **`maintainer_editor_profile`** to `rw-config.yaml` with comments | rw-config.yaml |
| 10 | Update **`docs/knowledge/README.md`** — ADR-026 as policy SoT link | README |
| 11 | Implement **pytest** module; run validators + portal build | tests green |
| 12 | Sync **`docs/project-agent-manifest.json`** openWork if needed (optional) | manifest hygiene |
| 13 | **`RW E05:S08:T06 --art`** | Release |
| **N** | **[MANDATORY] Reconcile task `E05:S08:T06` status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied. Update `Last updated`. | Task doc + story + kboard |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E05:S08:T06 --art`** only.

### 4.1 Files to create or modify

**Create:**

- `docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md`
- `tests/test_agent_bootstrap_fr121_git_maintainer.py` (or extend FR-114 test module)

**Modify:**

- `AGENTS.md`
- `docs/project-agent-manifest.json`
- `docs/project-agent-manifest.schema.json` (if extended)
- `docs/project-agent-index.md`
- `rw-config.yaml`
- `docs/architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md`
- `docs/kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md`
- `docs/knowledge/README.md`
- Task T06 doc (IPP links, status)
- Story checklist row (RW Step 7)

**Optional minimal pointer (same change set if cited):**

- `.cursorrules` binding table: `P-NOTION-FIRST` → `P-GIT-MAINTAINER` pointer only

**Do not modify in T06:**

- `portal/docusaurus.config.js` exclude globs (verify only)
- Greenfield Obsidian scaffolds (T07)
- `packages/frameworks/**` (no greenfield sync)

### 4.2 Dependency order

1. ADR-026 draft (step 2)
2. Supersession banners on ADR-024 + FR-114 (steps 3–4)
3. Bootstrap files AGENTS + manifest + index (steps 5–8)
4. rw-config schema block (step 9)
5. Tests + validators (step 11)
6. RW + kanban (steps 13, N)

### 4.3 ADR-026 outline (implementation content guide)

1. **Context** — FR-121, T05 restoration, OSS mismatch with Notion SoT
2. **Decision** — Two publish surfaces; git authority for maintainer corpora
3. **SoT matrix** — Updated from ADR-024 (Notion column → git; archive optional)
4. **Agent authoring** — Git paths; **P-GIT-MAINTAINER**
5. **Docusaurus** — Retain FR-114 allowlist (pointer to ADR-024/T15)
6. **Obsidian** — Editor profile only; T07 implements install
7. **Notion** — Optional archive; not required for ADK SoT
8. **Consequences** — Positive: OSS contributors; Negative: no private maintainer tier
9. **Supersedes** — ADR-024 maintainer/Notion sections; partial FR-114

### 4.4 `rw-config.yaml` schema (documented block)

```yaml
# FR-121 / ADR-026 (E05:S08:T06) — documentation surface authority
documentation_surfaces:
  maintainer_kb:
    sot: git  # git | external (non-default)
  adopter_public:
    sot: docusaurus
    allowlist_ref: portal/docusaurus.config.js
  external_kb:  # optional enterprise; not used by ai-dev-kit
    provider: none  # none | notion
maintainer_editor_profile: none  # none | obsidian-personal | obsidian-team (T07 install)
```

Notion URLs (`notion_hub_url`, `notion_kb_url`) remain as **optional archive** pointers — not SoT.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/step) |
| ------ | ---- | --------------- | ------------------- |
| D-U1 | `docs/architecture/standards-and-adrs/ADR-024-*.md` | Partial supersession banner; historical Notion sections annotated | RF6; step 3 |
| D-U2 | `docs/kanban/fr-br/FR-114-*.md` | Supersession banner (maintainer SoT) | RF7; step 4 |
| D-U3 | `AGENTS.md` | Track, binding rule, anti-patterns | RF2–RF4; step 5 |
| D-U4 | `docs/project-agent-manifest.json` | protocol, routing, canon, surfaces | RF2, RF8, RF9; step 6 |
| D-U5 | `docs/project-agent-manifest.schema.json` | Optional `maintainerKbSot` on documentationSurfaces | RF5; step 7 |
| D-U6 | `docs/project-agent-index.md` | maintainer-kb track label + anti-patterns | RF4; step 8 |
| D-U7 | `rw-config.yaml` | `documentation_surfaces` block | RF5; step 9 |
| D-U8 | `docs/knowledge/README.md` | ADR-026 policy link | RF1; step 10 |
| D-U9 | `tests/test_agent_bootstrap_fr114_notion_routing.py` | Invert/gate Notion-first assertions | §3 |
| D-U10 | Task T06 doc | IPP links; status | Phase 8 |
| D-U11 | `.cursorrules` | P-GIT-MAINTAINER pointer (if P-NOTION-FIRST cited) | RF2 optional |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/step) |
| ------ | ------------- | ------- | ------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S08T06-*.md` | This IPP | RF10 |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md` | Binding two-surface ADR | RF1; step 2 |
| D-C3 | `tests/test_agent_bootstrap_fr121_git_maintainer.py` | FR-121 bootstrap contract | §3 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Obsidian install docs | NONE — E05:S08:T07 |
| Notion decommission runbook | NONE — operator archive acceptable |
| Adopter-public portal paths | NONE — verify only (RNF3) |
| `packages/frameworks/**` | NONE — no framework code changes |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Lifecycle | Inbound links |
| ------ | -------------- | ------------------ | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S08T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md` | NOT_APPLICABLE | evergreen | T06 Input/References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md` | NOT_APPLICABLE | evergreen | AGENTS.md, manifest canon, FR-121 |
| D-C2 | ADR-026 | PUBLISHED (binding ADR — full text in git) | evergreen | `C-ADR-026` in manifest |
| D-U3 | `AGENTS.md` | NOT_APPLICABLE | evergreen | ADR-012, cold start |
| D-U7 | `rw-config.yaml` | NOT_APPLICABLE | evergreen | ADR-026 § schema |

No `docs/guides/**` or `docs/documentation/**` adopter-public edits → **no portal pytest AC** for new prose (verify build only).

No `packages/frameworks/**` → **no greenfield sync**.

---

## 7. Success / verification criteria

- [ ] ADR-026 published and Accepted under `docs/architecture/standards-and-adrs/`
- [ ] No `P-NOTION-FIRST` in `AGENTS.md` or manifest `protocol[]`
- [ ] `P-GIT-MAINTAINER` present; `maintainer-kb` loadFirst uses ADR-026
- [ ] `C-ADR-026` in manifest `canon[]`
- [ ] ADR-024 and FR-114 supersession banners present
- [ ] `documentation_surfaces.maintainer_kb.sot: git` in `rw-config.yaml`
- [ ] `pytest tests/test_agent_bootstrap_fr121_git_maintainer.py` (and updated FR-114 tests) green
- [ ] `validate-project-agent-manifest-paths.py` + jsonschema green
- [ ] `npm run build` in `portal/` green
- [ ] `RW E05:S08:T06 --art` complete
- [ ] All §5 UPDATE/CREATE rows implemented

---

## References

- [FR-121](../kanban/fr-br/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [T06 task doc](../kanban/epics/epic-05/story-08-knowledge-base/T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md)
- [IPP-E05S08T05](IPP-E05S08T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) (wave 1 corpus)
- [IPP-E05S08T04](IPP-E05S08T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md) (inverse — Notion-first)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md)
- [ADR-012](../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)
- [FR-103](../kanban/fr-br/FR-103-agent-bootstrap-and-task-routing.md)
