---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T34 — Kanban v3.5 packaged catalog (Small tier)

**Task ID:** E06:S09:T34  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-12  
**Last updated:** 2026-06-12 (**v0.6.9.34+1** — v3.5 fresh-install catalog shipped)  
**Code:** E06S09T34  
**Version anchor:** **v0.6.9.34+1** (SemVer **v0.4.1159+1**)

**Predecessor:** [E06:S09:T27](T27-kanban-v32-package-rewrite-installer-f9-f17.md) (v3.2) · v3.3/v3.4 increments in same branch session

**Analysis / delta docs:**
- [10-v33-catalog-delta-versioning-under-e01s02.md](../../../../knowledge/analysis/kanban-v2/10-v33-catalog-delta-versioning-under-e01s02.md)
- [11-v34-catalog-delta-testing-under-e01s03.md](../../../../knowledge/analysis/kanban-v2/11-v34-catalog-delta-testing-under-e01s03.md)
- [12-v35-catalog-delta-bootstrap-stories.md](../../../../knowledge/analysis/kanban-v2/12-v35-catalog-delta-bootstrap-stories.md)

**Package SoT:** `packages/frameworks/kanban/scripts/kanban_v35_catalog.py`

---

## Scope

Ship **Kanban v3.5.0** packaged fresh-install catalog for the **Small tier (E01–E08)**: bootstrap stories, perpetual + finite task docs on install, installer task copy, fingerprint validator, and naming SOP (scaffold vs bootstrap).

Extends v3.2 (T27) → v3.3 (versioning under E01:S02) → v3.4 (testing under E01:S03, E07–E08 renumber) → **v3.5** (E04–E08:S01 scaffolds, E01:S01 perpetual tasks, `_install_core_tasks`).

**Out of scope:** ai-dev-kit live `docs/kanban/` migration (maintainer dogfood); brownfield KMA.

---

## Input

- [E06:S09:T27](T27-kanban-v32-package-rewrite-installer-f9-f17.md) (v3.2 baseline)
- [10-v33-catalog-delta-versioning-under-e01s02.md](../../../../knowledge/analysis/kanban-v2/10-v33-catalog-delta-versioning-under-e01s02.md)
- [11-v34-catalog-delta-testing-under-e01s03.md](../../../../knowledge/analysis/kanban-v2/11-v34-catalog-delta-testing-under-e01s03.md)
- [12-v35-catalog-delta-bootstrap-stories.md](../../../../knowledge/analysis/kanban-v2/12-v35-catalog-delta-bootstrap-stories.md)
- Scaffold vs bootstrap naming SOP (session design)

---

## Deliverable

1. **`kanban_v35_catalog.py`** — 15 fresh-install stories; `V35_FRESH_TASK_STORIES`; `assert_v35_fingerprint`.
2. **Installer** — `migrate_structure._install_core_tasks()`; `install_canonical_epics_only` installs stories + tasks; v34 shim delegates to v35.
3. **Templates** — E01:S01 T01–T06 perpetual; E01:S02/S03 task docs; E04–E08:S01 story + task scaffolds; E08:S02 review & upkeep (ex-S01).
4. **E05:S01** — T04 AGENTS.md bootstrap / T05 docs tree (order swap).
5. **Naming SOP** — scaffold (E04–E08:S01), bootstrap (E02:S02 + AGENTS T04), infrastructure setup prose (E01:S02–S03).
6. **Tests** — `tests/kanban/test_kanban_v35_fresh_install.py`; v34 fingerprint test updated.
7. **Greenfield mirror** — `greenfield-install/packages/frameworks/kanban/` synced.
8. **Legacy cleanup** — v1 FR/BR story templates → `templates/deprecated/`.

---

## Acceptance criteria

- [x] **AC1:** `--mode fresh` installs **8 epics**, **15 stories**, **36 task docs** (per smoke test).
- [x] **AC2:** `assert_v35_fingerprint` passes on clean fresh-install output.
- [x] **AC3:** E01:S01 perpetual task dir `story-01-perpetual-operations/T*.md` (6 tasks).
- [x] **AC4:** E05:S01 obligatory doc tasks (5); E08:S01 CodeQL scaffold + E08:S02 upkeep (4 tasks).
- [x] **AC5:** `pytest` / inline test runner passes for `test_kanban_v35_fresh_install.py` and updated v34 tests.
- [x] **AC6:** RW release @ **E06:S09:T34** (version, changelog, kanban Step 7, commit, tag).

---

## RW trigger

```
RW E06:S09:T34
```

---

## Verification

```bash
PYTHONPATH=packages/frameworks/kanban/scripts python3 -c "
from pathlib import Path
import tempfile
from migrate_structure import install_canonical_epics_only
from kanban_v35_catalog import assert_v35_fingerprint
with tempfile.TemporaryDirectory() as tmp:
    p = Path(tmp)/'kanban'
    install_canonical_epics_only(p)
    ok, errs = assert_v35_fingerprint(p)
    assert ok, errs
print('v3.5 fingerprint OK')
"
```
