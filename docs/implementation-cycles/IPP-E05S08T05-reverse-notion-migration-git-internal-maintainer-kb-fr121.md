---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S08:T05 — Planning: Reverse Notion migration — git-internal maintainer KB (FR-121)

**Host Task:** [`T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md`](../kanban/epics/epic-05/story-08-knowledge-base/T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md) **(E05:S08:T05)**  
**Planning for:** [FR-121](../kanban/fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) (F1, F6 partial, NF1–NF3)  
**Status:** Active — implementation authorized

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Restore **full markdown** at every manifest `source_path` where `stub_applied: true` | FR-121-F1; T05 AC1 |
| RF2 | Emit **reverse migration manifest** (`source_path`, export timestamp, restore status, link-repair notes, `exclusion_reason` when applicable) | T05 D1; T05 AC4 |
| RF3 | Remove `notion_sot: true` stub indirection from restored files | FR-121-F1; T05 D3 |
| RF4 | Update `docs/knowledge/README.md` — git is SoT; Notion demoted to optional archive | T05 AC2; FR-121-F6 |
| RF5 | Regenerate KB index via `scripts/kb_index.py` | T05 D4 |
| RF6 | Best-effort internal link repair; document remainder in reverse manifest | T05 D5 |
| RF7 | Bidirectional IPP ↔ task wiring | FR-042 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Docusaurus production build stays green — maintainer trees remain excluded | FR-121-NF1; T05 AC3 |
| RNF2 | Restored files retain valid lifecycle frontmatter where present | FR-121-NF2 |
| RNF3 | No Notion MCP / private workspace required to complete restoration | FR-121-NF3 |
| RNF4 | Post-ship verification: `RW E05:S08:T05 --art` only | BR-097 |

### 1.3 Invariants and boundaries

- **Invariants:** Binding ADRs and IPP/ICW files remain full text in git; portal exclude globs unchanged.
- **In scope:** Corpus restoration, reverse manifest, KB index, README, tests, link hygiene.
- **Out of scope:** ADR-026, `AGENTS.md` bootstrap rewire, `rw-config.yaml` schema, Obsidian profiles (T06/T07).

---

## 2. Specification

### 2.1 Goal

Reverse FR-114 git stubs for all 218 manifest entries so OSS contributors and agents without Notion access can read and edit the full maintainer KB in-repo, while preserving FR-114 Docusaurus CI wins (exclude globs unchanged).

### 2.2 Specification mapping from ascertained requirements

Primary restore method: deterministic `git show 6b563cdf^:docs/{source_path}` for all 218 entries (verified full non-stub content at pre-migration parent commit). Notion export is fallback only for entries lacking git ancestry (none today).

### 2.3 Constraints

- Do not modify portal exclude globs or allowlist.
- Do not change binding ADRs listed in `fr114-notion-migration-manifest.json`.
- Policy/bootstrap changes deferred to E05:S08:T06.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1).
- **Transition trigger to COMPLETE:** All acceptance criteria evidenced + `RW E05:S08:T05 --art`.
- **Atomic propagation requirement:** Task doc status and kboard row status update in same RW change set.
- **Owner:** Implementation execution (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Restore path fixed: git tree at `6b563cdf^` |
| T2 | Reversibility | N | Operational undo of stubs; policy ADR is T06 |
| T3 | Blast radius | N | Maintainer doc content only; bootstrap unchanged until T06 |
| T4 | Precedent | N | Implements FR-121-F1; no new governance pattern |
| T5 | Constraint trade-off | N | No new surface trade-off in T05 |
| T6 | Governance contract | N | ADR-026 deferred to T06 per FR-121 waves |
| T7 | Supersedes | N | Partial FR-114 reversal is operational; ADR supersession is T06 |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | FR-121 + T05 task doc |
| E2 | No new options | Y | Git restore prescribed |
| E3 | Reversible in one task | Y | Could re-apply stubs (undesired) |
| E4 | Spec elsewhere | Y | FR-121 wave table + T03 IPP inverse |
| E5 | Documented NONE | Y | ADR-026 explicitly T06 |

**§5.3 governing doc:** [FR-121](../kanban/fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md) wave 1; ADR creation deferred to [E05:S08:T06](../kanban/epics/epic-05/story-08-knowledge-base/T06-adr-026-git-maintainer-authoring-bootstrap-fr121.md).

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Reverse manifest schema | `schema == fr121-reverse-migration-v1`; required keys; `entry_count` matches | RF2 |
| T2 | Corpus completeness | Every fr114 entry has `restore_status: restored` OR `exclusion_reason` | RF1 |
| T3 | No stub frontmatter | Zero `notion_sot: true` in manifest-listed paths | RF3 |
| T4 | Content substance | Restored files exceed stub template size | RF1 |
| T5 | Binding ADRs untouched | `binding_adrs_retained` paths lack `notion_sot` | RNF2 |
| T6 | IPP/ICW not stubbed | `IPP-*` / `ICW-*` remain full text | invariant |
| T7 | KB index regen | `python scripts/kb_index.py` exits 0 | RF5 |
| T8 | Portal CI | `npm run build` in `portal/` | RNF1 |

**Module:** `tests/test_reverse_notion_migration_fr121.py`

**Update:** `tests/test_notion_migration_fr114_manifest.py` — gate stub assertions behind `reverse_migration_complete` flag.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E05:S08:T05` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Add `scripts/reverse_notion_migration_fr121.py` | Restore script with `--dry-run` |
| 3 | Default `source_commit` = `6b563cdf^`; CLI override | Documented constant |
| 4 | Emit `docs/knowledge/fr121-reverse-migration-manifest.json` | Reverse manifest |
| 5 | Update `fr114-notion-migration-manifest.json`: `stub_applied: false`, `reverse_migration_complete: true` | Forward manifest reconciliation |
| 6 | Run restore (non-dry-run) | 218 restored files |
| 7 | Link hygiene pass; log remainder in reverse manifest | RF6 |
| 8 | Run `python scripts/kb_index.py` | KB-INDEX updated |
| 9 | Update `docs/knowledge/README.md` | Git SoT stated |
| 10 | Deprecation comment on `scripts/apply_notion_stubs.py` | FR-121-F6 partial |
| 11 | Implement tests; run pytest + portal build | Green CI |
| 12 | `RW E05:S08:T05 --art` | Versioned release |
| **N** | **[MANDATORY] Reconcile task `E05:S08:T05` status** to actual state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied. Update `Last updated`. | Task doc status reflects actual state |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E05:S08:T05 --art`** only.

### 4.1 Files to create or modify

- **Create:** `scripts/reverse_notion_migration_fr121.py`, `docs/knowledge/fr121-reverse-migration-manifest.json`, `tests/test_reverse_notion_migration_fr121.py`
- **Modify:** ~218 markdown paths, `fr114-notion-migration-manifest.json`, `docs/knowledge/README.md`, `KB-INDEX.md` + `.json`, FR-114 tests, task doc

### 4.2 Dependency order

1. Script + reverse manifest schema
2. Bulk restore
3. Index + README + tests
4. RW + kanban reconciliation

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/step) |
| ------ | ---- | --------------- | ------------------- |
| D-U1 | `docs/knowledge/fr114-notion-migration-manifest.json` | `stub_applied: false`, restore metadata | Step 5 |
| D-U2 | `docs/knowledge/README.md` | Git SoT; deprecate Notion-first stub workflow | RF4 |
| D-U3 | `docs/knowledge/KB-INDEX.md` + `.json` | Regenerated inventory | RF5 |
| D-U4 | ~218 restored markdown files | Full text from git; no `notion_sot` | RF1, RF3 |
| D-U5 | `tests/test_notion_migration_fr114_manifest.py` | Gate stub assertions | T8 |
| D-U6 | Task T05 doc | IPP links; status | Phase 8 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/step) |
| ------ | --------------------- | ------- | ------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S08T05-*.md` | This IPP | RF7 |
| D-C2 | `docs/knowledge/fr121-reverse-migration-manifest.json` | Reverse migration evidence | RF2 |
| D-C3 | `scripts/reverse_notion_migration_fr121.py` | Deterministic restore tool | Step 2 |
| D-C4 | `tests/test_reverse_notion_migration_fr121.py` | FR-121 contract tests | §3 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| ADR-026 git-maintainer policy | NONE — E05:S08:T06 |
| AGENTS.md bootstrap rewire | NONE — E05:S08:T06 |
| Adopter-public portal docs | NONE — exclude globs unchanged; no portal path edits |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E05S08T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md` | NOT_APPLICABLE | Planning artifact | evergreen | T05 Input/References |
| D-C2 | `docs/knowledge/fr121-reverse-migration-manifest.json` | NOT_APPLICABLE | Maintainer KB metadata | evergreen | `docs/knowledge/README.md` |
| D-C3 | `scripts/reverse_notion_migration_fr121.py` | NOT_APPLICABLE | Tooling | — | README scripts table |
| D-U2 | `docs/knowledge/README.md` | NOT_APPLICABLE | Maintainer KB index | evergreen | T06 will wire AGENTS.md |

---

## 7. Success / verification criteria

- [ ] All 218 manifest entries restored or `exclusion_reason` documented
- [ ] Zero `notion_sot: true` in restored manifest paths
- [ ] `fr121-reverse-migration-manifest.json` committed under `docs/knowledge/`
- [ ] `docs/knowledge/README.md` states git SoT
- [ ] `pytest tests/test_reverse_notion_migration_fr121.py` green
- [ ] `npm run build` in `portal/` green
- [ ] All §5 UPDATE/CREATE items implemented
- [ ] `RW E05:S08:T05 --art` complete

---

## References

- [FR-121](../kanban/fbu/FR-121-git-internal-maintainer-kb-oss-documentation-surfaces.md)
- [T05 task doc](../kanban/epics/epic-05/story-08-knowledge-base/T05-reverse-notion-migration-git-internal-maintainer-kb-fr121.md)
- [IPP-E05S08T03](IPP-E05S08T03-big-bang-notion-migration-maintainer-kb-fr114.md) (forward migration inverse)
- [FR-114](../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [ADR-024](../architecture/standards-and-adrs/ADR-024-documentation-surfaces-three-surface-model-fr114.md)
