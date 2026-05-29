# Changelog v0.5.1.39+2

**Release Date:** 2026-02-19 14:00:00 UTC  
**Epic:** Epic 5 - Documentation Management and Maintenance (FR Repo)  
**Story:** Story 1 - FR Repo (PERPETUAL)  
**Task:** Task 39 - AI Dev Kit Project Review and Legacy Clean-Up  
**Build:** 2

---

## Summary

Second build for E5:S01:T39: adopts the **latest-only** main changelog pattern. `CHANGELOG.md` now retains only the `Unreleased` section and the single most recent release entry; all older entries are archived by CMW. Policy, config, and CMW logic updated to support this mode and to document it as the AI Dev Kit pattern.

---

## Changes

### Changelog Policy: Latest-Only Mode

- **`docs/architecture/standards-and-adrs/changelog-archival-policy.md`**
  - Documented **Mode B: Latest-Only (AI Dev Kit Pattern)**.
  - Main changelog defined as: Unreleased + newest concrete release only; all older releases archived.
  - Retained Mode A (Hybrid size/time/version-count) as the framework default for adopters.

### Config and CMW Behaviour

- **`rw-config.yaml`**
  - Added `changelog_archival.mode: latest_only` so CMW keeps only the latest release in `CHANGELOG.md`.

- **`packages/frameworks/workflow mgt/scripts/changelog/identify_archival_entries.py`**
  - When `policy['mode'] == 'latest_only'`, keep only the newest concrete release entry and archive all others.
  - Unreleased section is unchanged (not part of versioned entries).

- **`packages/frameworks/workflow mgt/scripts/changelog/README.md`**
  - Documented `mode: latest_only` vs `hybrid` and noted ai-dev-kit use of latest_only.

### Changelog State After CMW

- **`CHANGELOG.md`**
  - Reduced to Unreleased + latest release entry (v0.5.1.39+1 at time of run); 97 older entries archived.

- **`docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md`**
  - Received archived entries from main changelog (history preserved).

---

## Related Work

- **Task:** E5:S01:T39 – AI Dev Kit Project Review and Legacy Clean-Up.  
- **Feature Request:** FR-039 – AI Dev Kit Project Review and Legacy Clean-Up.  
- **Policy:** `docs/architecture/standards-and-adrs/changelog-archival-policy.md` (Mode B).

