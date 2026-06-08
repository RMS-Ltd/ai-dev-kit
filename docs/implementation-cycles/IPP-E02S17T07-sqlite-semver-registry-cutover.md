---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S17:T07 — Planning: Production SQLite semver-registry cutover (IPW)

**Host Task:** [`T07-production-sqlite-semver-registry-cutover.md`](../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/T07-production-sqlite-semver-registry-cutover.md) **(E02:S17:T07)**  
**Planning for:** [E02:S17](../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite.md) · T04–T06 parity sign-off  
**Status:** Approved (execution authorized)  
**Functional release target:** `RW E02:S17:T07 --art`

---

## 1. Requirements

| ID | Requirement |
| -- | ----------- |
| RF1 | Import production `semver-registry.yaml` into `.adk/release-state.db` with `validate_import` exit 0 |
| RF2 | Archive YAML to `changelog-archive/semver-registry-legacy-final.yaml`; remove root copy from git |
| RF3 | Set `release_state_backend: sqlite` in `rw-config.yaml` |
| RF4 | Add `!.adk/release-state.db` to `.gitignore` |
| RF5 | RW Step 8 stages DB; Step 2.5 finalize writes DB only |
| RF6 | Validators pass: injective + task_touch contract (staged DB) |

---

## 2. Specification

Pre-RW: `import_legacy.py --validate` → archive copy → config flip during RW Step 2.

Post-cutover: `save_semver_registry()` uses SQLite path only (`semver_converter.py`).

---

## 3. Test design

| Test | Method |
| ---- | ------ |
| Import | `import_legacy.py --validate` |
| Round-trip | `pytest tests/release_state/test_import_export_roundtrip.py` |
| SQLite RW AC | `pytest tests/release_state/test_sqlite_mode_rw_ac.py` |
| RW Step 9 | `validate_semver_registry_injective.py`, `validate_task_touch_release_contract.py --strict` |

---

## 4. Implementation plan

1. Transition task E02:S17:T07 → IN PROGRESS
2. Fix `.gitignore` for staged DB
3. Run import + validate + archive YAML
4. Execute `RW E02:S17:T07 --art` (version bump, config, finalize, changelog, kanban, git rm yaml, stage db, validators, commit, tag)
5. Reconcile task → COMPLETE; update migration-manifest + release-state-sqlite-mode.md
6. Status reconciliation to actual state

---

## 5. Documentation deliverables

- T07 task doc (this host)
- Changelog entry for cutover RW
- `migration-manifest.md` preconditions checked
- `release-state-sqlite-mode.md` marked production default for ai-dev-kit
