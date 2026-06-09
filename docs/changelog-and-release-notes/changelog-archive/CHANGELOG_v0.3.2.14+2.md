# Changelog v0.3.2.14+2

**Release Date:** 2026-06-09 12:37:18 UTC  
**Epic:** 3 | **Story:** 2 | **Task:** 14  
**SemVer:** v0.4.1099+2 (internal: v0.3.2.14+2)

---

## Summary

E03:S02:T14 — **Change implemented:** SemVer allocator repair — re-import `semver-registry-legacy-final.yaml` into `.adk/release-state.db` (counter restored to 1095+); correct external SemVer for `v0.3.2.14+1` → **v0.4.1096+1** (was erroneous `v0.4.12+1` from truncated SQLite bootstrap).

---

## Fixed

- **Allocator state:** Full legacy import (`359` mappings, `task_touch_counter=1095` baseline); post-import allocations for `0.3.2.14+1`, `0.2.16.7+2`, `0.6.9.26+1` at patches 1096–1098.
- **README / CHANGELOG_v0.3.2.14+1:** SemVer text corrected to `v0.4.1096+1`.

---

## References

- [FR-120](../../kanban/fr-br/FR-120-semver-allocation-authority-transactional-mapping-black-box.md)
- [saa-operator-verification-e03s02t14.md](../../maintenance/saa-operator-verification-e03s02t14.md)
