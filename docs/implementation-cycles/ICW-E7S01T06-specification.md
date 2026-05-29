---
lifecycle: project
ttl_days: 365
created_at: 2026-03-15T16:30:00Z
expires_at: 2027-03-15T16:30:00Z
housekeeping_policy: archive
policy_salience:
  policy_id: ucw-spec-2026
  type: implementation-cycle
  domain:
    primary: release-governance
    secondary: ["documentation"]
  audience: ["Documentation Agent", "Release Workflow Agent", "UKW Agent"]
---

# ICW Specification – E7:S01:T06 (Update Changelog Workflow)

## 1. Executive Summary

Define the Update Changelog Workflow (UCW) as a manual, checklist-driven process that keeps `CHANGELOG.md` limited to the most recent 20 releases, archives older entries with backlinks, and supplies auditable evidence for the Release Workflow without resorting to automated trimming scripts.

## 2. Scope

- **Included:** Governance spec, operator checklist, CI hook contract, archival metadata requirements, documentation updates.
- **Excluded:** Scripted changelog edits or automated retention tooling. Validation utilities may read but never mutate content.

## 3. Workflow Phases

1. **Prepare** – Triggered after Release Workflow Step 3 (Detailed Changelog). Operator gathers inputs: current `CHANGELOG.md`, archive files, release list, UCW checklist template.
2. **Review** – Documentation Agent verifies ordering, duplicates, and format; identifies entries exceeding retention threshold.
3. **Trim & Archive (Manual)** – Using the approved checklist, operator manually edits `CHANGELOG.md`, moving older entries to archive files, inserting backlink stubs, and capturing diff screenshots.
4. **Validate** – Run read-only validators (markdownlint, changelog ordering checker) and collect CI hook artifacts (UCW checklist, diff hash, reviewer sign-off).
5. **Record & Handoff** – Update UCW log, attach evidence to the Release Workflow run, and notify the Release Workflow Agent that UCW has completed for this cycle.

## 4. Roles & Responsibilities

| Role | Responsibilities |
| --- | --- |
| Documentation Agent | Owns UCW checklist, performs manual edits, maintains archive files. |
| Release Engineer | Confirms UCW completion before Release Workflow Step 8 validations, ensures evidence in run log. |
| Auditor / UKW Agent | Spot-checks archival integrity monthly; ensures MoSCOW alignment (Should Have). |

## 5. Inputs & Outputs

- **Inputs:** Current changelog, archive directory, retention threshold (default 20), UCW checklist template, acceptance log.
- **Outputs:** Updated `CHANGELOG.md`, new/updated archive file(s), UCW checklist (signed), diff artifact, Release Workflow log entry referencing UCW completion ID.

## 6. CI Hook Contract

- A CI job (`ucw-verification`) runs read-only checks ensuring:
  - `docs/maintenance/logs/ucw/<date>.md` exists with operator + reviewer signatures.
  - `CHANGELOG.md` contains ≤ retention count entries.
  - Archive references exist for each trimmed version in the checklist.
- Failure blocks Release Workflow Step 8 until UCW evidence is provided; hook never performs edits.

## 7. Policies & Constraints

- Manual edits only; scripts may analyze but not modify changelog content.
- Retention threshold configurable in `docs/maintenance/changelog-policy.md`; default 20.
- Archive files must include backlinks and version metadata (RC.E.S.T+BUILD, date, Epic/Story/Task summary).
- UCW checklist stored under `docs/maintenance/logs/ucw/UCW-<YYYYMMDD>-<run>.md`.

## 8. Success Metrics

- 100% Release Workflow runs include UCW checklist references.
- Zero changelog ordering violations post-UCW.
- Archive completeness validated monthly (no orphaned versions).

## 9. Risks & Mitigations

| Risk | Mitigation |
| --- | --- |
| Manual process skipped under time pressure | Release Workflow Step 8 gate fails without UCW log |
| Archive drift (missing backlinks) | Auditor monthly sweep; checklist step for backlink verification |
| Retention threshold disagreements | Configurable value logged per run; escalate via FR if change needed |

## 10. References

- FR-057 Update Changelog Workflow
- E7:S01 Story + Task documents
- Release Runbook (Section: Changelog Stewardship)
- MoSCOW policy (Should Have Tasks)
