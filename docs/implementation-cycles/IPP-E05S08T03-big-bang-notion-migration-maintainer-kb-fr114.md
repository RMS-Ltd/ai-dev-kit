---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E05:S08:T03 — Planning: Big-bang Notion migration of maintainer KB (FR-114)

**Host Task:** [`T03-big-bang-notion-migration-maintainer-kb-fr114.md`](../kanban/epics/epic-05/story-08-knowledge-base/T03-big-bang-notion-migration-maintainer-kb-fr114.md) **(E05:S08:T03)**  
**Planning for:** [FR-114](../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md) (F3, NF3)  
**Status:** Active — implementation authorized

> **IPW (Implementation Planning Workflow):** Consolidated IPP per FR-042 / FR-094.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Notion clean slate — fresh hub + Engineering KB on `rmearssolutions@gmail.com` | T03 D1; FR-114 #6 |
| RF2 | Update `notion_hub_url` and `notion_kb_url` in `rw-config.yaml` | T03 D2 |
| RF3 | Migration manifest: `source_path → notion_url → stub_path` | T03 D3; FR-114-F3 |
| RF4 | Notion IA: Decisions, Reference, Investigations, Records | T03 D4 |
| RF5 | Bulk import scoped maintainer corpora via Notion MCP | T03 D5 |
| RF6 | Git stubs with SoT pointers for migrated paths | T03 D6; FR-114-NF3 |
| RF7 | Do not migrate adopter-public allowlist paths | T03 AC5; T15 |
| RF8 | Keep `IPP-*` and `ICW-*` full text in git | User decision; FR-083 |
| RF9 | Regenerate `KB-INDEX.md` + `.json` | T03 AC6 |
| RF10 | Supersede legacy `kb-migration-map.json` | T02 cleanup |
| RF11 | Bidirectional IPP ↔ task wiring | FR-042 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Stubs must not break validators / allowlisted link checks | FR-114-NF3 |
| RNF2 | Notion KB private; Docusaurus allowlist public | FR-114-NF2 |
| RNF3 | Post-ship: `RW E05:S08:T03 --art` only | BR-097 |

### 1.3 Migration corpus

**Migrate:** `knowledge/` (excl. index/manifest), `analysis/`, `maintenance/`, `journals/`, non-binding `architecture/`, non-IPP/ICW `implementation-cycles/`.

**Keep in git:** Kanban, guides, documentation, governance, changelogs, IPP/ICW, binding ADRs.

---

## 2. Specification

### 2.1 Goal

Establish Notion as canonical home for maintainer investigations and records while git retains workflow SoT.

### 2.4 Status transition intent

- **Current:** IN PROGRESS (v0.5.8.3+2)
- **COMPLETE:** When all AC evidenced + `RW E05:S08:T03 --art`

### 2.5 ADR necessity decision

**Outcome:** `EXEMPT` — implements [FR-114](../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md). Three-surface ADR is **E05:S08:T04** (F5).

---

## 3. Test design

| ID | Check | Covers |
| -- | ----- | ------ |
| T1 | Manifest JSON schema (required keys) | RF3 |
| T2 | No allowlist / IPP / ICW entries in manifest | RF7, RF8 |
| T3 | Stubbed files contain `notion_sot: true` + Notion URL | RF6 |
| T4 | Allowlisted corpus links to stubbed paths resolve | RNF1 |
| T5 | `rw-config.yaml` Notion URLs valid | RF2 |
| T6 | `kb_index.py` exits 0 | RF9 |
| T7 | `npm run build` in `portal/` | RF7 |

**Module:** `tests/test_notion_migration_fr114_manifest.py`

---

## 4. Implementation plan

1. **Step 1 (mandatory first):** Confirm E05:S08:T03 IN PROGRESS; update Last updated.
2. Wave 0: Notion clean slate + config URLs.
3. Wave 1: `notion_migration_manifest.py` + manifest; deprecate `kb-migration-map.json`.
4. Wave 2: Pilot import analysis/maintenance/journals + stubs.
5. Wave 3: knowledge/ import + stubs.
6. Wave 4: Selective architecture/ (non-binding ADRs).
7. Wave 5: implementation-cycles non-IPP/ICW + stubs.
8. Wave 6: Link audit + KB-INDEX regen.
9. Wave 7: Tests + portal build green.
10. `RW E05:S08:T03 --art`.
11. **Final step:** Reconcile status → COMPLETE if AC satisfied.

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `docs/implementation-cycles/IPP-E05S08T03-*.md` | CREATE |
| D2 | `rw-config.yaml` | UPDATE |
| D3 | `docs/knowledge/fr114-notion-migration-manifest.json` | CREATE |
| D4 | `docs/knowledge/kb-migration-map.json` | UPDATE (deprecate) |
| D5 | `docs/knowledge/KB-INDEX.md` + `.json` | UPDATE |
| D6 | `scripts/notion_migration_manifest.py` | CREATE |
| D7 | `scripts/apply_notion_stubs.py` | CREATE |
| D8 | Migrated markdown stubs | UPDATE |
| D9 | `tests/test_notion_migration_fr114_manifest.py` | CREATE |
| D10 | `docs/knowledge/README.md` | CREATE/UPDATE |

---

## 6. Documentation housing

| Deliverable | Publication | Lifecycle |
| ----------- | ----------- | --------- |
| IPP | NOT_APPLICABLE | evergreen |
| Manifest / stubs | NOT_APPLICABLE | evergreen |
| Notion pages | Private Engineering KB | evergreen |

---

## 7. Success / verification criteria

- [ ] Fresh Notion URLs in `rw-config.yaml`
- [ ] `fr114-notion-migration-manifest.json` complete
- [ ] Git stubs applied; IPP/ICW + binding ADRs unchanged
- [ ] `npm run build` green
- [ ] `KB-INDEX` regenerated
- [ ] IPP wired; kboard `—IPP—` on release
- [ ] `RW E05:S08:T03 --art` complete

---

## References

- [FR-114](../kanban/fbu/FR-114-split-documentation-surfaces-docusaurus-public-notion-maintainer-kb.md)
- [T03 task doc](../kanban/epics/epic-05/story-08-knowledge-base/T03-big-bang-notion-migration-maintainer-kb-fr114.md)
- [E05:S09:T15](../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T15-docusaurus-adopter-public-publish-allowlist-fr114.md) (allowlist dependency)
