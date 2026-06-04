---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T02 — Planning: Perpetual task inventory and classification (IPP)

**Host Task:** [`T02-inventory-and-classify-workflow-perpetual-tasks.md`](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) **(E02:S16:T02)**  
**Planning for:** Exhaustive inventory, disposition, ID map, and tiered reference map for workflow-related perpetual anchors (unblocks [IPP-E2S16T03 §7 Tranche 3B](IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md))  
**Upstream:** [FR-088](../project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md), [IPP-E2S16T01](IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md), [E4S19T03 investigation report](E4S19T03-e6s07-default-housing-investigation-report.md)  
**Status:** Published (inventory artifact; execution of link edits is **T03 Tranche 3B**)

---

## 1. Requirements (ascertained baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| ---- | ------------- | ------ |
| RF1 | Exhaustive inventory of workflow-related perpetual anchors and mis-housed candidates | T02 AC1 |
| RF2 | Each row: disposition (`migrate_to_S16` / `retain_with_rationale` / `deprecate_or_redirect`) + rationale | T02 AC2, IPP-E2S16T01 §2.3 |
| RF3 | Old→new ID map for migrations, including `T101`/`T102`/`T103` and E6:S07 supersede chains | T02 AC3, IPP-E2S16T01 §2.4 |
| RF4 | Reference map: surfaces + edit policy per surface class | T02 AC4 |
| RF5 | Artifact linked from T01/T02; ready for T03 3B execution | T02 AC5 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| ---- | ------------- | ------ |
| RNF1 | Preserve historical anchors; no changelog tag rewrites | IPP-E2S16T01 RNF1 |
| RNF2 | Reference map tiers: **ACTIVE_FIX** vs **ARCHIVE_STUB** vs **DEFER** (changelog archive not bulk-rewritten in 3B) | IPP-E2S16T03 §5.3 |

### 1.3 Invariants and boundaries

- **In scope:** Inventory tables, disposition taxonomy, migration ID map, tiered reference map with evidence counts, discovery methodology, optional discovery script output.
- **Out of scope:** Executing link edits (T03 Tranche 3B); validator code changes; new ADR; splitting T03 into per-workflow lanes.

### 1.4 Referenced sources

- Host: [`T02`](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md)
- Policy IPP: [`IPP-E2S16T01`](IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
- Re-house IPP: [`IPP-E2S16T03`](IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md)
- E6:S07 drift: [`E4S19T03-e6s07-default-housing-investigation-report.md`](E4S19T03-e6s07-default-housing-investigation-report.md)

---

## 2. Specification

### 2.1 Goal

Produce the authoritative inventory and reference map so **T03 Tranche 3B** can apply path migrations deterministically without guessing disposition or rewriting changelog history.

### 2.2 Discovery methodology (AC1)

Two-pass merge (reproducible):

1. **Marker scan** — task docs under `docs/project-management/kanban/epics/**/T*.md` for `Task Type: Perpetual Maintenance`, `perpetual_task: true`, `Historical Anchor:`, `SUPERSEDED`.
2. **Workflow-keyword scan** — UKW, CMW, RW maintenance, kanban hygiene, perpetual workflow (catch mis-housed candidates without marker).
3. **Seed merge** — IPP-E2S16T01 §2.4; story-016 T03/T04/T05/T10; E4S19 report §5; epic-06 story-007 checklist rows tagged UKW/CMW/perpetual.

**Helper (2026-06-03):** `packages/frameworks/workflow mgt/scripts/kanban/discover_perpetual_task_candidates.py --json`  
**Run evidence:** `marker_count=6`, `keyword_count=65`, `unique_candidates=65` (keyword pass is broad; inventory table below is the curated authoritative set).

### 2.3 Disposition taxonomy (AC2)

Uses IPP-E2S16T01 definitions unchanged:

| Disposition | Meaning |
| ----------- | ------- |
| `migrate_to_S16` | Move active anchor to Story 016 (or alias-only for legacy `T101+`) |
| `retain_with_rationale` | Stays in current story with documented reason |
| `deprecate_or_redirect` | Superseded; redirect to canonical task; doc may keep `Historical Anchor:` |

### 2.4 Inventory and disposition table (curated)

| Candidate / legacy | Current location | Disposition | Canonical target | Rationale |
| ------------------ | ---------------- | ----------- | ---------------- | --------- |
| `T101` (UKW) | Historical / E6:S06 legacy | `migrate_to_S16` (alias) | `E02:S16:T03` | IPP-E2S16T01 §2.4; RW attribution → umbrella |
| `T102` (CMW) | Historical / E6:S06 legacy | `migrate_to_S16` (alias) | `E02:S16:T03` | Same |
| `T103` (RW maint.) | Historical / E6:S06 legacy | `migrate_to_S16` (alias) | `E02:S16:T03` | Same |
| `E02:S16:T03` | story-016 | `retain_with_rationale` | — | Workflow-maintenance umbrella (perpetual) |
| `E02:S16:T04` | story-016 | `retain_with_rationale` | — | Kanban hygiene lane |
| `E02:S16:T05` | story-016 | `retain_with_rationale` | — | Markdown hygiene lane |
| `E02:S16:T10` | story-016 | `retain_with_rationale` | — | Repo infrastructure perpetual lane |
| `E06:S06:T101` | epic-06 (UKW perpetual) | `deprecate_or_redirect` | `E02:S16:T03` | Superseded by S16 policy; historical BUILD preserved |
| `E06:S06:T102` | epic-06 (CMW perpetual) | `deprecate_or_redirect` | `E02:S16:T03` | Same |
| `E06:S07:T11` | epic-06 (UKW doc) | `deprecate_or_redirect` | `E02:S16:T03` | Tranche 1 re-house (IPP-E2S16T03) |
| `E06:S07:T13` | epic-06 (CMW doc) | `deprecate_or_redirect` | `E02:S16:T03` | Tranche 1 |
| `E06:S07:T16` | epic-06 (CMW) | `deprecate_or_redirect` | `E02:S16:T03` | Tranche 1 |
| `E06:S07:T106` | epic-06 | `deprecate_or_redirect` | `E02:S16:T03` | SUPERSEDED → T03 (Tranche 1) |
| `E06:S07:T108` | epic-06 | `deprecate_or_redirect` | `E02:S16:T07` | FR-050 UKW extension; **re-housed** |
| `E06:S07:T109` | epic-06 | `deprecate_or_redirect` | `E02:S16:T13` | BR-059 UKW MoSCOW; **re-housed** |
| `E06:S07:T116` | epic-06 | `deprecate_or_redirect` | `E02:S16:T06` | FR-085 `--rp`; **re-housed** |
| `E06:S07:T18` | epic-06 (active) | `migrate_to_S16` | `E02:S01:T23` | Workflow step tracking; E4S19 §5.2 — **done** at T23 |
| `E06:S07:T107` | epic-06 (borderline) | `retain_with_rationale` | `E06:S07:T107` | IDE whitelist / tooling; in-scope for S07 until FR-087 closure |
| `E06:S07:T110` | epic-06 (COMPLETE) | `deprecate_or_redirect` | `E02:S16:T03` or archive-only | Out-of-scope UKW meta; 3B: path stubs only |
| `E06:S07:T113` | epic-06 (COMPLETE) | `deprecate_or_redirect` | `E02:S16:T03` | RW parser hardening meta; 3B archive tier |
| `E06:S07:T114` | epic-06 (COMPLETE) | `deprecate_or_redirect` | `E02:S16:T03` | ICW trio; 3B archive tier |
| `E06:S07:T115` | epic-06 (COMPLETE) | `deprecate_or_redirect` | `E02:S16:T03` | ICW trio; 3B archive tier |
| `E02:S01:T23` | epic-02 S01 | `retain_with_rationale` | — | Canonical host for step-tracking (from T18) |
| `E02:S16:T06`–`T09`, `T13`–`T17` | story-016 | `retain_with_rationale` | — | Delivery/governance tasks under perpetual story (not all perpetual type) |
| `E06:S07:T104`, `T105` | epic-06 | `retain_with_rationale` | — | ADK/package analysis in-scope per FR-087 narrowed charter |

### 2.5 Migration ID map (AC3)

| Legacy ID | Canonical ID | Map type | Notes |
| --------- | ------------ | -------- | ----- |
| `T101` | `E02:S16:T03` | alias | No doc rename of historical version strings |
| `T102` | `E02:S16:T03` | alias | CMW releases → T03 BUILD |
| `T103` | `E02:S16:T03` | alias | RW maintenance → T03 BUILD |
| `E06:S07:T18` | `E02:S01:T23` | migrate | Re-house complete; 3B updates residual paths |
| `E06:S07:T106` | `E02:S16:T03` | redirect | SUPERSEDED banner on S07 doc |
| `E06:S07:T108` | `E02:S16:T07` | migrate | Complete |
| `E06:S07:T109` | `E02:S16:T13` | migrate | Complete |
| `E06:S07:T116` | `E02:S16:T06` | migrate | Complete |
| `E06:S06:T101` | `E02:S16:T03` | redirect | UKW perpetual wiring |
| `E06:S06:T102` | `E02:S16:T03` | redirect | CMW perpetual wiring |

### 2.6 Reference map — surface classes (AC4)

| Policy | Pattern / surfaces | Count (2026-06-03) | T03 3B action | Owner |
| ------ | ------------------ | ------------------- | ------------- | ----- |
| **ACTIVE_FIX** | `docs/project-management/kanban/**` | **35** occurrences in **22** files | Rewrite paths to canonical S16/S01 targets per §2.5 | `E02:S16:T03` |
| **ACTIVE_FIX** | `docs/project-management/kanban/fr-br/**` (open/active) | subset of above | Same; preserve terminal FR status | `E02:S16:T03` |
| **ACTIVE_FIX** | `packages/frameworks/**` (KB, workflow mgt docs) | **4** occurrences in **3** files | Update active KB links only | `E02:S16:T03` |
| **ACTIVE_FIX** | `docs/guides/**`, `docs/architecture/**` (non-archive) | **3** occurrences in **2** files | Fix when touched in 3B | `E02:S16:T03` |
| **ARCHIVE_STUB** | `docs/changelog-and-release-notes/changelog-archive/**` | **62** in **53** files | One-line redirect comment if file edited; **no mass rewrite** | `E02:S16:T03` |
| **ARCHIVE_STUB** | `docs/implementation-cycles/ICW-E6S07*` / `IPW-E6S07*` (historical) | **39** in **19** files | Stub only; retain forensic IDs | `E02:S16:T03` |
| **DEFER** | `docs/knowledge/KB-INDEX.md`, `KB-INDEX.json` | **24** in **2** files | Record count; defer unless maintainer opts in | optional / T05 |

**Baseline command (full tree):**

```bash
python3 -c "from pathlib import Path
t,f=0,0
for p in Path('docs').rglob('*'):
    if p.is_file():
        try: n=p.read_text(encoding='utf-8',errors='replace').count('epic-06/story-007')
        except: continue
        if n: t+=n; f+=1
print(t,f)"
# → 167 occurrences, 101 files
```

### 2.7 ADR checklist (§2.5 scoring)

| ADR criterion | Score | Notes |
| ------------- | ----- | ----- |
| New architectural decision required? | No | Executes FR-088 / IPP-E2S16T01 |
| Cross-cutting runtime behavior change? | No | Doc inventory only |
| **ADR outcome** | **EXEMPT** | Inventory implements existing policy |

---

## 3. Test design

Doc-only task — tests validate **inventory artifact integrity**:

| ID | Test | Maps to |
| ---- | ------ | ------- |
| T1 | IPP contains sections 1–7 + inventory tables | FR-042 |
| T2 | Every inventory row has disposition + non-empty rationale | AC2 |
| T3 | Every `migrate_to_S16` / redirect row has legacy + canonical IDs in §2.5 | AC3 |
| T4 | Reference map lists ≥3 surface classes with policy | AC4 |
| T5 | `discover_perpetual_task_candidates.py` exits 0; `unique_candidates ≥ 6` | RF1 guard |

---

## 4. Implementation plan

1. **[MANDATORY]** T02 **IN PROGRESS**; refresh `Last updated` at IPW start.
2. **IPW Phases 0–7:** Produce this IPP (ADR §2.7 **EXEMPT**).
3. **Discovery pass:** Marker + keyword scans; merge seeds into §2.4–§2.5.
4. **Reference map:** Count `epic-06/story-007` per tier; document §2.6.
5. **Wire:** T01 AC3, T02, T03 §7 3B gate, story-016 checklist, `kboard.md`.
6. **Verification:** T02 AC1–AC5 checked with evidence in task doc.
7. **[MANDATORY final step]** T02 → **COMPLETE**; version anchor on `RW E02:S16:T02 --art`.

**Post-IPW (separate authorization):** T03 **Tranche 3B** per [IPP-E2S16T03 §4.4 Step 5](IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md).

---

## 5. Documentation deliverables

| Action | Path |
| ------ | ---- |
| CREATE | `docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md` (this file) |
| CREATE | `packages/frameworks/workflow mgt/scripts/kanban/discover_perpetual_task_candidates.py` |
| UPDATE | T02, T01, T03, story-016, `kboard.md` |
| NONE | New ADR; portal sidebar beyond standard `docs/` IPP |

---

## 6. Housing and publication

| Field | Value |
| ----- | ----- |
| **Publication Status** | `NOT_APPLICABLE` |
| **Rationale** | Governance/planning inventory; consolidated IPP satisfies FR-042 for T02 |
| **Docusaurus** | Standard `docs/implementation-cycles/` path (no extra sidebar entry required) |

---

## 7. Verification

| Check | Evidence | Result |
| ----- | -------- | ------ |
| Seed rows + curated inventory in §2.4 | 24+ rows | PASS |
| Disposition + rationale on every row | §2.4 table | PASS |
| Migration map includes T101+ and E6:S07 chain | §2.5 | PASS |
| Reference map ≥3 tiers with counts | §2.6 | PASS |
| Discovery script | `discover_perpetual_task_candidates.py --json` → `unique_candidates=65` | PASS |
| `epic-06/story-007` baseline | 167 / 101 files under `docs/` | PASS |
| T01 links inventory IPP | T01 AC3 (updated on RW) | PASS (on wire) |
| T03 §7 3B gate | Inventory exists → gate **satisfied** | PASS |
| `validate_ipw_publication_wiring.py --requested E02:S16:T02` | NOT_APPLICABLE + IPP link | PASS (on RW) |

**3B entry gate (for T03):** This artifact is the required precondition for exhaustive path migration in Tranche 3B. Do not start 3B bulk edits until T02 is **COMPLETE** and this IPP is linked from T03.

---

**End of IPP — E02:S16:T02**
