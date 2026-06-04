---
lifecycle: evergreen
created_at: 2026-05-29T12:00:00Z
housekeeping_policy: keep
---

# E5:S01:T62 — Planning: FR-062 GitHub release installation (IPP)

**Host Task:** [`T62-github-release-installation-experience.md`](../project-management/kanban/epics/epic-05/story-01-fr-repo/T62-github-release-installation-experience.md) **(E5:S01:T62)**  
**Planning for:** [FR-062](../project-management/kanban/fr-br/FR-062-github-release-installation-experience.md)  
**Status:** Published

## 1. Requirements

| Wave | RF |
|------|-----|
| W1 | Package build script + `.github/workflows/framework-release.yml` upload tarballs+sha256 |
| W2 | Harden `install_package_from_release.py`; receipt JSON under `logs/ai-dev-kit/install/` |
| W3 | INSTALL + install-receipt-reference docs |
| W4 | Smoke test script + evidence in task doc |

## 4. Implementation plan

| RW | Milestone |
|----|-----------|
| RW #1 | Installer + receipt module + unit tests |
| RW #2 (optional `-d`) | Docs-only |
| RW #3 | CI workflow + smoke; FR-062 IMPLEMENTED |

## 7. Success criteria

- Artifacts documented; local smoke install from `dist/` or release; AC on task doc
