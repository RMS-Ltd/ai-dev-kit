---
lifecycle: project
ttl_days: 365
created_at: 2026-03-15T16:40:00Z
expires_at: 2027-03-15T16:40:00Z
housekeeping_policy: archive
policy_salience:
  policy_id: ucw-test-2026
  type: implementation-cycle
  domain:
    primary: release-governance
    secondary: ["documentation"]
  audience: ["documentation-agent", "release-workflow-agent", "qa"]
---

# ICW Test Design – E7:S01:T06 (Update Changelog Workflow)

## 1. Test Strategy

Manual scenario-driven validation proving that UCW delivers consistent, human-performed changelog stewardship while CI hooks verify evidence. Tests emphasize traceability, retention discipline, and archive integrity instead of automated mutations.

## 2. Test Matrix

| ID | Scenario | Purpose | Owner |
| --- | --- | --- | --- |
| UCW-T01 | Retention Compliance Drill | Ensure operator trims to retention threshold and archives excess entries | Documentation Agent |
| UCW-T02 | Ordering & Format Review | Confirm manual edits preserve Keep-a-Changelog format and canonical ordering | Release Engineer |
| UCW-T03 | Archive Integrity | Validate backlinks, metadata, and archive file updates | Documentation Agent |
| UCW-T04 | Evidence & CI Hook | Verify UCW checklist, diff artifacts, and CI verification gating RW | RW Agent |

## 3. Detailed Scenarios

### UCW-T01 Retention Compliance Drill

- **Preconditions:** `CHANGELOG.md` contains ≥25 entries; UCW checklist template prepared; archive path writable.

- **Steps:**

  1. Documentation Agent enumerates newest 20 releases.
  2. Manually edit changelog keeping only top 20 entries; move remainder to archive file.
  3. Insert placeholder section in main changelog referencing archive file.
  4. Record edits in UCW checklist (versions moved, operator signature, reviewer).

- **Expected Results:**

  - Main changelog lists exactly 20 entries.
  - Archive file contains moved versions with metadata + backlinks.
  - Checklist stored under `docs/maintenance/logs/ucw/`.

- **Validation Tools:** Read-only retention validator (counts entries), markdownlint, git diff screenshot.

### UCW-T02 Ordering & Format Review

- **Preconditions:** UCW-T01 complete; diff available.

- **Steps:**

  1. Release Engineer verifies each remaining entry follows RC.E.S.T+BUILD descending order and correct `DD-MM-YY` dates.
  2. Run ordering validator script (read-only) to confirm no duplicates or gaps.
  3. Document findings in UCW log.

- **Expected Results:**

  - No ordering violations or formatting errors.
  - Validator output attached to UCW log.

- **Validation Tools:** `scripts/documentation/check_changelog_order.py` (read-only), manual checklist.

### UCW-T03 Archive Integrity

- **Preconditions:** Archive file updated via UCW-T01.

- **Steps:**

  1. Documentation Agent ensures each archived entry lists version, date, epic/story/task summary, and backlink to main changelog.
  2. Cross-check that main changelog contains pointer to archive section.
  3. Auditor spot-checks previous archive entries for consistency.

- **Expected Results:**

  - Every archived version has proper metadata and backlinks.
  - No orphaned versions; archive diff committed with UCW log reference.

- **Validation Tools:** Manual review, link checker.

### UCW-T04 Evidence & CI Hook

- **Preconditions:** Checklists + diffs from prior scenarios stored.

- **Steps:**

  1. RW Agent runs CI job `ucw-verification` (read-only) ensuring log file + retention evidence exist.
  2. CI job confirms presence of `docs/maintenance/logs/ucw/UCW-<date>.md`, diff attachment, reviewer signature.
  3. RW Step 8 proceeds only if CI job passes.

- **Expected Results:**

  - CI job succeeds when UCW evidence exists; fails otherwise.
  - RW log references UCW checklist ID.

- **Validation Tools:** CI pipeline logs, RW checklist template.

## 4. Test Data

- Copy of current `CHANGELOG.md` with ≥25 entries.
- Archive directory `docs/changelog-and-release-notes/changelog-archive/` and placeholder file for this run.
- UCW checklist template (Markdown) capturing operator, reviewer, retention count, archive file paths.

## 5. Environment & Tooling

- Standard dev workstation with markdownlint, git, read-only validation scripts.
- CI environment capable of running `ucw-verification` job (no write permissions to changelog files).

## 6. Reporting

- Results logged under `docs/maintenance/logs/ucw/UCW-<date>-test.md` with pass/fail per scenario, evidence links, and remediation notes.
- Failures must include corrective action and responsible owner before RW resumes.

## 7. Exit Criteria

- All four scenarios executed with PASS status.
- UCW checklist + CI log attached to RW documentation.
- Stakeholders (Documentation Agent, Release Engineer) sign off on test run.
