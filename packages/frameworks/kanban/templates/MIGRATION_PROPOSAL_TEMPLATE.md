---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T10:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Migration Proposal

**Project:** {PROJECT_NAME}  
**Legacy root:** `{LEGACY_KANBAN_ROOT}` (read-only)  
**Target root:** `{KANBAN_ROOT}`  
**Prepared:** {YYYY-MM-DD}  
**Agent session:** {SESSION_ID or N/A}

---

## Ingest summary

| Metric | Count |
| ------ | ----- |
| Epics detected | |
| Stories detected | |
| Inline task tokens | |
| Board files | |

**Naming patterns observed:** {e.g. `E{n}-S{m}.md` in `stories/`, inline E:S:T}

---

## Epic map

| Legacy | Target | Action | Rationale |
| ------ | ------ | ------ | --------- |
| E01 — … | E21 — … | merge | Domain epic; absorbs … |
| | | | |

**Legend:** keep · merge · drop · rename

---

## Keep

- {Item} — {why retained}

---

## Drop

- {Item} — {why removed; zombie/duplicate rationale}

---

## Merge

- {Source epics/stories} → {Target epic} — {synthesis notes}

---

## Domain rationale

{Why canonical E01–E10 shell + domain E21+ vs canonical-only copy}

---

## Execution plan (post sign-off)

1. Create target epic directories under `{KANBAN_ROOT}`
2. Synthesise epic overviews from legacy sources
3. Migrate/rename stories to v3.2 paths
4. Update `kboard.md` / board skeleton
5. Run `validate_installation.py`

---

## Operator sign-off

- [ ] I have reviewed this proposal and authorize migration file writes (Step 4).

**Signed off by:** _______________  
**Date:** _______________
