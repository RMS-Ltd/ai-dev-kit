# IPP — E08:S03:T20 — UXR-026 README Python prerequisites alignment

**Host task:** E08:S03:T20  
**Status:** APPROVED FOR IMPLEMENTATION  
**Created:** 2026-06-10

---

## 1. Goal

Eliminate stale **Python 3.8** messaging on the public README and canonical install docs; align all surfaces with the **3.11+** policy from [E08:S03:T05](docs/kanban/epics/epic-08/story-03-automation-scripts/T05-python-minimum-version-fr104-br077.md).

---

## 2. Specification

### Functional

1. README **Prerequisites** states **Python 3.11 or newer** (consistent with badge and Built With).
2. `packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md` updated to **3.11+**.
3. Greenfield mirror synced (FR-110).

### Non-functional

- Exclude changelog archive and historical kanban version strings from grep scope.
- Doc-only; no `setup.py` change (already `>=3.11`).

### Out of scope

- New validator for doc Python version consistency (optional follow-on).
- Portal/Docusaurus publish (README is GitHub-native).

---

## 3. Test design

| ID | Verification | Pass criteria |
| -- | ------------ | ------------- |
| T1 | `rg '3\.8' README.md` | No Python 3.8 prerequisite line |
| T2 | `rg '3\.8\+' packages/.../PACKAGE_INSTALLATION_GUIDE.md` | No match |
| T3 | Greenfield mirror | `sync_greenfield_install.py` exit 0 |

---

## 4. Implementation plan

1. **TODO → IN PROGRESS** on E08:S03:T20; link this IPP.
2. Fix README Prerequisites → **3.11 or newer**.
3. Fix `PACKAGE_INSTALLATION_GUIDE.md` → **3.11+**.
4. Run `scripts/sync_greenfield_install.py`.
5. Grep canonical install paths; confirm clean.
6. Mark UXR-026 IMPLEMENTED; reconcile T20 **COMPLETE**.
7. **RW E08:S03:T20 --art**.

---

## 5. Documentation

- Task doc, UXR-026, kboard row (RW Step 7).

---

## 6. Housing

- `README.md`
- `packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`
- `greenfield-install/...` mirror

---

## 7. Verification

- [ ] README intra-doc Python version consistent
- [ ] PACKAGE_INSTALLATION_GUIDE 3.11+
- [ ] Greenfield sync committed
