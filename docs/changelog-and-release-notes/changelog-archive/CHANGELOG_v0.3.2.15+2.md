# Changelog v0.3.2.15+2

**Release Date:** 2026-06-23 10:16:11 UTC  
**SemVer (task_touch):** v0.4.1202  
**Internal:** v0.3.2.15+2  
**Epic:** 3 | **Story:** 2 | **Task:** 15

---

## Summary

E03:S02:T15 — **SemVer core-only external display (ADR-031 Option A):** README, RW commit subjects, and changelog SemVer lines now emit SemVer **core only**; `+BUILD` remains on internal version, internal Git tag, and allocator `semver_full`. Coherence validators compare `semver_core`.

---

## Changed

### Attempted resolution (UXR-031 follow-on)

- **`semver_converter.py`:** `external_display_semver()` / `semver_display` on `get_rw_tag_info()`.
- **`build_rw_commit_message.py`:** Actions run title / commit subject uses core-only SemVer.
- **`validate_release_coherence.py`**, **`validate_rw_split_brain_streak.py`:** README/changelog coherence against `semver_core`.
- **Policy:** ADR-031 amended from Option B → Option A; versioning policy §2.1.1 and decision memo updated.
- **RW guide:** Step 2.5 / Step 5 SemVer display guidance aligned.
- **Greenfield mirror** synced.

---

## References

- [UXR-031](../../kanban/fr-br/UXR-031-semver-plusbuild-redundancy-in-task-touch.md)
- [ADR-031](../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md)
- [semver-external-display-policy-decision.md](../../kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/semver-external-display-policy-decision.md)
