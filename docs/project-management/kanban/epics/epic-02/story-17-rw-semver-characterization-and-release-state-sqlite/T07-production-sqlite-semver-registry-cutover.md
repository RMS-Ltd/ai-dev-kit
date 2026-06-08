---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S17:T07 — Production SQLite semver-registry cutover

**Task ID:** E02:S17:T07  
**Status:** COMPLETE  
**Priority:** CRITICAL  
**Estimated Effort:** Medium  
**Created:** 2026-06-08  
**Last updated:** 2026-06-08 (RW v0.2.17.7+1 — cutover COMPLETE)  
**Version Anchor:** v0.2.17.7+1  
**Code:** E02S17T07

Publication Status: NOT_APPLICABLE

---

## Scope

Production cutover of task_touch SemVer registry from root `semver-registry.yaml` to `.adk/release-state.db` per E02:S17 T04–T06 parity sign-off.

**In scope:**

- Import production YAML into SQLite (`import_legacy.py --validate`)
- Archive frozen YAML: `docs/changelog-and-release-notes/changelog-archive/semver-registry-legacy-final.yaml`
- Flip `release_state_backend: sqlite` in `rw-config.yaml`
- `.gitignore` exception for `!.adk/release-state.db`
- Remove root `semver-registry.yaml` from git; stage DB on each RW
- First sqlite-mode RW release with validators green

**Out of scope:**

- Changelog MD → SQLite (T04 phase 2)
- FR-115/116 ingest job retargeting (follow-on)
- Deleting archive YAML

---

## Input

- [IPP-E02S17T07-sqlite-semver-registry-cutover.md](../../../../implementation-cycles/IPP-E02S17T07-sqlite-semver-registry-cutover.md)
- Production `semver-registry.yaml` (pre-cutover) · T04–T06 parity sign-off
- [`migration-manifest.md`](migration-manifest.md)

---

## Deliverable

1. `.adk/release-state.db` as transactional SoT (staged each RW)
2. Archived `semver-registry-legacy-final.yaml`; root YAML removed
3. `release_state_backend: sqlite` in `rw-config.yaml`
4. Cutover RW `v0.2.17.7+1` with validators green

---

## Rollback (BR-097)

1. Set `release_state_backend: legacy` in `rw-config.yaml`
2. Restore root `semver-registry.yaml` from `semver-registry-legacy-final.yaml` or `export_legacy.py`
3. Stop staging `.adk/release-state.db`
4. New BUILD RW — never force-move release tags

---

## Acceptance Criteria

- [x] AC1: `import_legacy.py --validate` passes on production YAML before config flip
- [x] AC2: Root `semver-registry.yaml` removed; archive copy present with recorded sha256
- [x] AC3: `release_state_backend: sqlite`; RW finalize writes DB only (no YAML mutation)
- [x] AC4: `validate_semver_registry_injective.py` + `validate_task_touch_release_contract.py --strict` pass with staged DB
- [x] AC5: Cutover RW complete (local commit + tags)

---

## Forensic record

| Field | Value |
| ----- | ----- |
| Archive path | `docs/changelog-and-release-notes/changelog-archive/semver-registry-legacy-final.yaml` |
| DB path | `.adk/release-state.db` |
| YAML sha256 | `647d9fcc46304c08e7a014dfc2d128248cdd48d902d50732326b4ea98b622e5d` |
| Import audit | counter=1058 mappings=323 (2026-06-08) |
