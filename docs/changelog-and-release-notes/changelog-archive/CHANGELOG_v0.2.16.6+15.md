# Changelog v0.2.16.6+15

**Release Date:** 2026-06-16 09:39:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6  
**SemVer:** v0.4.1184+15

---

## Summary

E02:S16:T06 follow-on — keep the greenfield installer current by making `greenfield-install/README.md` version pins dynamic during sync. This removes stale hard-coded SemVer examples and keeps vendor instructions aligned to the latest release.

---

## Change implemented

### Greenfield sync pipeline

- Updated `scripts/sync_greenfield_install.py` to resolve the current internal version from `version.py`, convert to SemVer core, and render README download/tag examples using that value.
- Replaced static README pins and SHA example text with release-relative guidance (`v{semver}` and matching `.sha256` sidecar).
- Regenerated `greenfield-install/README.md` and `greenfield-install/FOOTPRINT.md` via `python3 scripts/sync_greenfield_install.py`.

### Verification (local)

| Check | Result |
| ----- | ------ |
| `python3 scripts/sync_greenfield_install.py` | SUCCESS |
| `python3 scripts/sync_greenfield_install.py --check` | `greenfield-install/ in sync with sources` |

---

## Related

- [E02:S16:T06 — GitHub Security & Code Quality health (Perpetual)](../../../kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md)
- [CHANGELOG v0.2.16.6+14](CHANGELOG_v0.2.16.6+14.md)
