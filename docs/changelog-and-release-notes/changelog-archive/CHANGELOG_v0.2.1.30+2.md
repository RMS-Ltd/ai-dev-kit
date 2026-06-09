# Changelog v0.2.1.30+2

**Release Date:** 2026-06-09 15:53:06 UTC  
**Epic:** 2 | **Story:** 1 | **Task:** 30 | **Build:** 2  
**SemVer:** v0.4.1097+2

---

## Summary

FR-122 Wave 1 — RW Step 1e/1f preflight gates: `validate_allocator_health.py`, `validate_git_tag_occupancy.py`, policy parity (`.cursorrules`, `rw.md`, `canonical-rw-steps.yaml`, `rw-config.yaml`).

---

## Changes

### Added

- `validate_allocator_health.py` — SAA DB health preflight (max_patch floor, counter sync, injectivity)
- `validate_git_tag_occupancy.py` — predicted SemVer core tag occupancy check
- Unit tests for both validators

### Changed

- `.cursorrules` / `.claude/commands/rw.md` — Steps 1e/1f mandatory gates
- `canonical-rw-steps.yaml` — `preflight_gates` section (1b–1f)
- `rw-config.yaml` — `allocator_health`, `git_tag_occupancy` keys
- `docs/maintenance/saa-operator-verification-e03s02t14.md` — Step 1e cross-link
- Gap matrix + contract doc — C-F7/C-F8 MET

### Attempted Fixes

_None — preventive gates; verification pending in production RW streak._

---

## References

- [FR-122](../../kanban/fr-br/FR-122-release-workflow-architectural-contract-release-transaction.md)
- [ADR-027](../../architecture/standards-and-adrs/ADR-027-rw-release-transaction-contract.md)
