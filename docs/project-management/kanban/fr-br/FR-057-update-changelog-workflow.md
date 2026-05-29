---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-15T14:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Update Changelog Workflow (UCW)

**Type:** Feature Request (FR)  
**Submitted:** 2026-03-15  
**Submitted By:** AI Assistant (per user directive)  
**Priority:** HIGH  
**Status:** PROPOSED

**Implementing Task:** [E7:S01:T06](../epics/Epic-7/Story-001-codebase-maintenance-tasks.md)

---

## Summary

Define and implement a deterministic **Update Changelog Workflow (UCW)** that keeps `CHANGELOG.md` lean (latest N entries) while automatically archiving older releases, enforcing canonical ordering, and integrating with Release Workflow (RW) validation. UCW replaces the missing/misplaced workflow that historically handled changelog curation.

---

## Problem Statement

- Current `CHANGELOG.md` still contains historical sections out of order, repeatedly blocking RW validators.  
- Prior UCW artifacts are missing; responsibilities defaulted to manual cleanup, which is error-prone and slow.  
- Without UCW, the "latest-only" policy can’t be enforced consistently, causing validator failures and inconsistent release comms.  
- Archival files exist but there is no automated agent preserving the contract (main changelog ≤ N entries, archives hold history).

---

## Goals / Responsibilities

UCW must:

1. **Enforce Latest-Only Main Changelog**  
   - Keep configurable N recent releases (default 20) in `CHANGELOG.md`.  
   - Replace trimmed sections with archive pointers referencing detailed files.

2. **Automated Archival**  
   - Move trimmed entries to `docs/changelog-and-release-notes/changelog-archive/`.  
   - Maintain metadata (version, date, epic/story/task) and ensure links remain valid.

3. **Ordering + Format Validation**  
   - Guarantee canonical RC.EPIC.STORY.TASK+BUILD ordering (newest first in main file before trimming, proper lexical ordering inside archive).  
   - Ensure date format compliance (`DD-MM-YY`).  
   - Detect duplicate versions or missing archive files.

4. **Release Workflow Integration**  
   - Provide RW hook/command (e.g., `UCW` or `python ... ucw.py`) that runs after changelog edits but before validators.  
   - Emit machine-readable summary for RW log (versions archived, entries retained).

5. **Manual & Scheduled Entry Points**  
   - CLI entry for ad-hoc runs (e.g., `UCW --dry-run`).  
   - Optional scheduled mode (cron) to keep archives tidy even outside RW runs.

6. **Reporting & Safety**  
   - Output summary: retention count, archived files, warnings.  
   - Dry-run diff preview to prevent accidental data loss.  
   - Abort if archive write fails or if versions would be orphaned.

---

## Proposed Scope

- Create `packages/frameworks/workflow mgt/workflows/update-changelog-workflow/` with README, workflow YAML, config.  
- Implement Python entry script (e.g., `scripts/update_changelog_docs.py`) handling retention + archival.  
- Wire UCW into RW optional step (similar to CMW).  
- Document SOP in `docs/maintenance/release-runbook.md` + `CHANGELOG.md` policy section.  
- Provide regression tests covering retention thresholds, ordering enforcement, archive integrity.

---

## Acceptance Criteria

1. Running UCW on current tree trims `CHANGELOG.md` to last N releases, moves remainder to archive, and validator passes.  
2. UCW command supports `--retention`, `--dry-run`, `--auto` flags.  
3. Archive entries get automatic backlinks to main changelog (and vice versa).  
4. RW docs describe when to run UCW; RW automated path can invoke UCW when changelog exceeds retention.  
5. Tests cover: ordering enforcement, retention boundaries, duplicate detection, missing archive references, dry-run preview, and failure modes.  
6. README documents responsibilities so future agents don’t misattribute UCW vs UKW.

---

## Dependencies & References

- **FR-025** (Changelog Management & Archival Workflow) — UCW is the concrete implementation fulfilling this FR requirement.  
- **FR-026** (Perpetual task for changelog maintenance) — UCW operationalizes the perpetual task.  
- **Release Workflow** — UCW integrates post-Step 3 (detailed changelog) and pre-validation.  
- **Documentation Agent policy** — Ensure archive file ownership aligns with doc agent responsibilities.

---

## Next Steps

1. Approve FR and assign to Documentation/RW agent collaboration.  
2. Implement UCW workflow + scripts.  
3. Update RW runbooks and validators to rely on UCW output.  
4. Backfill missing archival runs once tooling is ready.
