# Duplicate Story Reconciliation Decision Log

**Date:** 2026-05-18
**Task:** E9:S05:T04
**Basis:** Epic checklist references are the single source of truth for canonical story files.

---

## Decision Rule

The canonical story file per epic is the one **explicitly referenced in the epic's Story Checklist**. All other files with the same story number in the same epic are duplicates to be deleted.

---

## Epic 5 — Documentation Management and Maintenance

| Story | Canonical (Referenced) | Duplicate (Delete) |
|-------|------------------------|-------------------|
| S01 | `Story-001-fr-repo.md` | `Story-001-documentation-maintenance-framework.md` |
| S02 | `Story-002-documentation-maintenance-framework.md` | `Story-002-documentation-quality-assurance.md` |
| S03 | `Story-003-documentation-quality-assurance.md` | `Story-003-documentation-automation.md` |
| S04 | `Story-004-documentation-automation.md` | `Story-004-framework-documentation-management.md` |
| S05 | `Story-005-framework-documentation-management.md` | `Story-005-legacy-repository-incorporation.md` |
| S06 | `Story-006-legacy-repository-incorporation.md` | `Story-006-policy-documentation-structure.md` |
| S07 | `Story-007-policy-documentation-structure.md` | `Story-007-persistent-knowledge-base-investigation.md` |

## Epic 6 — Framework Management and Maintenance

| Story | Canonical (Referenced) | Duplicate (Delete) |
|-------|------------------------|-------------------|
| S01 | `Story-001-br-repo.md` | `Story-001-framework-version-management.md` |
| S02 | `Story-002-framework-version-management.md` | `Story-002-framework-update-and-migration.md` |
| S03 | `Story-003-framework-update-and-migration.md` | `Story-003-framework-health-monitoring.md` |
| S04 | `Story-004-framework-health-monitoring.md` | `Story-004-bug-reports.md` |
| S05 | `Story-005-bug-reports.md` | `Story-005-feature-requests.md` |
| S06 | `Story-006-feature-requests.md` | `Story-006-adk-implementation-analysis-and-package-management.md` |

## Epic 7 — Codebase Maintenance and Review

| Story | Canonical (Referenced) | Duplicate (Delete) |
|-------|------------------------|-------------------|
| S01 | `Story-001-codebase-maintenance-tasks.md` | `Story-001-real-world-adoption-examples.md` |
| S02 | `Story-002-code-review-standards-and-processes.md` | `Story-002-migration-guides.md` |
| S03 | `Story-003-code-quality-metrics-and-monitoring.md` | `Story-003-user-onboarding-materials.md` |
| S04 | `Story-004-maintenance-automation-and-tooling.md` | `Story-04-readme-template-based-on-best-readme-template.md` |

## Epic 9 — Release Candidate Readiness

| Story | Canonical (Referenced) | Duplicate (Delete) |
|-------|------------------------|-------------------|
| S01 | `Story-001-rc-readiness-gap-analysis.md` | `Story-001-book-content-development.md` |
| S02 | `Story-002-kanban-framework-rc-readiness-review.md` | `Story-002-book-integration-with-dev-kit.md` |
| S03 | `Story-003-workflow-management-framework-rc-readiness-review.md` | `Story-003-book-publishing-support.md` |
| S04 | `Story-004-numbering-versioning-framework-rc-readiness-review.md` | `Story-004-book-material-capture.md` |

---

## Notes

- Epic-7 Story-04 is both a duplicate AND a zero-padding issue. The canonical file is `Story-004-maintenance-automation-and-tooling.md`; the duplicate `Story-04-*.md` will be deleted (not renamed).
- All book-content stories in Epic-9 are duplicates from the Epic-24 book project. They are not referenced in Epic-9's checklist.
- Epic-5 and Epic-6 registry stories (fr-repo, br-repo) are the canonical S01 stories per their epic checklists.
