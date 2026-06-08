---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S08:T04 — Planning: Agent Notion-first authoring and bootstrap routing (FR-114)

**Host Task:** [`T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md`](../kanban/epics/epic-05/story-08-knowledge-base/T04-agent-notion-first-authoring-and-bootstrap-routing-fr114.md) **(E05:S08:T04)**  
**Planning for:** [FR-114](../kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) (F4, F5)  
**Status:** Active — implementation complete @ v0.5.8.4+2

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Publish binding **ADR-024** documenting three-surface model + per-doc-type SoT rules | T04 D1; FR-114-F5 |
| RF2 | Add **`maintainer-kb`** track to `AGENTS.md`: Notion-first default; when git stubs required | T04 D2; FR-114-F4 |
| RF3 | Mirror routing + Notion URLs in `project-agent-manifest.json` | T04 D3; FR-114-F4 |
| RF4 | Canonical **stub template** (align with `apply_notion_stubs.py`) | T04 D4 |
| RF5 | Update **ultimate-canonical-kb-structure** — logical pillars ≠ single publish tree | T04 D5; FR-114 AC |
| RF6 | Cross-link RC ≥ 1 release-notes policy (T15) from ADR | T04 AC5 |
| RF7 | Bidirectional IPP ↔ task wiring | FR-042 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | `AGENTS.md` stays ≤ **150 lines** (ADR-012) | ADR-012 |
| RNF2 | Manifest paths validate (path validator + jsonschema) | FR-103 |
| RNF3 | Binding ADRs remain full text in git (not stubbed) | T03 RF8 |
| RNF4 | Post-ship: `RW E05:S08:T04 --art` only | BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** IPP/ICW and binding ADRs stay full text in git; cold-start reads `AGENTS.md` only.
- **In scope:** ADR-024, bootstrap routing, manifest, knowledge README, pytest, FR-114 F4/F5 closure.
- **Out of scope:** Notion migration waves (T03); Docusaurus allowlist (T15); `.cursorrules` rewrite.

---

## 2. Specification

### 2.1 Goal

Agents cold-starting on maintainer documentation work route to **Notion MCP first** via a dedicated track, with git used only for workflow binding artifacts. ADR-024 is the authoritative SoT decision record for all three surfaces.

### 2.2 Specification mapping

Requirements RF1–RF6 map to ADR-024 (policy), `AGENTS.md` + manifest (routing), knowledge README (stub pointer), and Notion/git stub for ultimate-canonical-kb-structure.

### 2.3 Constraints

- New track: `maintainer-kb` with keywords and loadFirst per operator choice.
- Binding rule `P-NOTION-FIRST` points to ADR-024.
- Manifest optional `documentationSurfaces` synced from `rw-config.yaml`.

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** at implementation Step 1
- **COMPLETE:** When all AC evidenced + `RW E05:S08:T04 --art`

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Notion vs git vs Docusaurus per doc class |
| T2 | Reversibility | Y | Post-migration routing affects all agent sessions |
| T3 | Blast radius | Y | Cold-start contract + maintainer authoring |
| T4 | Precedent | Y | New three-surface governance; extends ADR-012 |
| T5 | Constraint trade-off | Y | Notion MCP vs git-only workflows |
| T6 | Governance contract | Y | Binding SoT per doc type |
| T7 | Supersedes | Y | Partially supersedes FR-066 publish-scope assumptions |

**Outcome:** `REQUIRED` — ADR-024 CREATE.

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | `AGENTS.md` routing | `maintainer-kb` track + `P-NOTION-FIRST` |
| T2 | ADR-012 line budget | `AGENTS.md` ≤ 150 lines |
| T3 | Manifest routing | `intent: maintainer-kb` with keywords/loadFirst |
| T4 | Manifest Notion URLs | Match `rw-config.yaml` |
| T5 | ADR-024 content | Accepted; three-surface + stub template sections |
| T6 | Binding ADR policy | ADR-024 not stubbed |
| T7 | Knowledge README | References ADR-024 for stub format |
| T8 | Path validator | `validate-project-agent-manifest-paths.py` exit 0 |
| T9 | jsonschema | Manifest validates against schema |
| T10 | Stub contract | ADR frontmatter keys match `apply_notion_stubs.py` |

**Module:** `tests/test_agent_bootstrap_fr114_notion_routing.py`

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E05:S08:T04 `TODO → IN PROGRESS`**; update Last updated | Task doc |
| 2 | Draft **ADR-024** | `docs/architecture/standards-and-adrs/ADR-024-*.md` |
| 3 | Update **`AGENTS.md`**: `maintainer-kb`, `P-NOTION-FIRST`, anti-patterns | `AGENTS.md` |
| 4 | Update **manifest + schema** | `project-agent-manifest.json`, `.schema.json` |
| 5 | Update **`project-agent-index.md`** | Human mirror |
| 6 | Update **`docs/knowledge/README.md`** | Stub → ADR-024 |
| 7 | Update **ultimate-canonical-kb-structure** Notion + git stub | Notion + stub |
| 8 | Add **pytest**; run validators | `tests/test_agent_bootstrap_fr114_notion_routing.py` |
| 9 | Update **FR-114** F4/F5; RW Step 7 four-surface | Kanban |
| 10 | **`RW E05:S08:T04 --art`** | Release |
| **N** | **[MANDATORY] Reconcile status** → `COMPLETE` + forensic marker if AC satisfied | Task doc |

**RW rule (BR-097):** Post-ship verification prescribes `RW E05:S08:T04 --art` only.

### 4.1 Files to create or modify

- CREATE: IPP (this file), ADR-024, pytest module
- UPDATE: AGENTS.md, manifest, schema, index, knowledge README, ultimate-canonical-kb-structure stub, task/story/kboard/FR-114

### 4.2 Dependency order

1. ADR-024 → 2. AGENTS.md + manifest (atomic) → 3. knowledge docs → 4. tests → 5. RW

---

## 5. Documentation deliverables

| Doc ID | Path | Action | Tied to |
| ------ | ---- | ------ | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S08T04-*.md` | CREATE | RF7 |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-024-*.md` | CREATE | RF1 |
| D-C3 | `tests/test_agent_bootstrap_fr114_notion_routing.py` | CREATE | §3 |
| D-U1 | `AGENTS.md` | UPDATE | RF2 |
| D-U2–U4 | manifest, schema, index | UPDATE | RF3 |
| D-U5 | `docs/knowledge/README.md` | UPDATE | RF4 |
| D-U6 | ultimate-canonical-kb-structure stub | UPDATE | RF5 |
| D-N1 | `.cursorrules` | NONE | ADR-024 sufficient |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S08T04-*.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-024-*.md` | NOT_APPLICABLE (GitHub SoT) | evergreen |
| D-U6 | Notion + git stub | PUBLISHED (Notion) / stub (git) | evergreen |

---

## 7. Success / verification criteria

- [ ] ADR-024 published; three-surface + SoT matrix + stub template present
- [ ] `AGENTS.md` has `maintainer-kb` track and `P-NOTION-FIRST`; ≤150 lines
- [ ] Manifest synced; jsonschema + path validator green
- [ ] All pytest checks pass
- [ ] FR-114 F4/F5 complete with version anchor
- [ ] IPP bidirectionally linked; kboard shows —IPP—
- [ ] `RW E05:S08:T04 --art` completes locally

---

## References

- [FR-114](../kanban/fr-br/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [E05:S08:T03 IPP](IPP-E05S08T03-big-bang-notion-migration-maintainer-kb-fr114.md)
- [E05:S09:T15 IPP](IPP-E05S09T15-docusaurus-adopter-public-publish-allowlist-fr114.md)
- [ADR-012](../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)
