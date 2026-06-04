---
version: 0.4.19.11+1
semver: 0.4.867+1
date: 2026-06-04
epic: 4
story: 19
task: 11
build: 1
type: feature
---

# CHANGELOG v0.4.19.11+1 — UXR-017 kanban path lowercase + installer sign-off

**Release Date:** 2026-06-04 20:30:00 UTC  
**Epic:** E04 (Kanban Framework)  
**Story:** S19 (FR/BR/UXR abstract governance and intake)  
**Task:** T11 (Kanban epic/story path lowercase naming — UXR-017)  
**Build:** 1  
**SemVer:** v0.4.867+1  
**RW:** `--art` (canonical anchor E04:S19:T11)

---

## Summary

Lowercase **2-digit-padded** kanban path segments (`epic-04/`, `story-19-…`, `T01-…`; 3-digit when ID > 99), framework **template pack** migration, **GitHub Issue install sign-off** contract + installer hooks, and ai-dev-kit corpus alignment (ADR-015).

---

## Change implemented

### Path policy and corpus (UXR-017 / ADR-015)

- `kanban_paths.py` write-defaults and padding migration for `docs/project-management/kanban/epics/`
- `rw-config.yaml` and schema: `epic-{epic:02d}`, `story-{story:02d}`, `T{task:02d}`
- ADR-015, migration guide, UXR-017 / IPP / T11 updates

### Framework template pack

- `packages/frameworks/kanban/templates/` — `epic-NN/`, `story-NN-…`, task file padding
- `migrate_kanban_segment_padding.py --template-pack` support

### Installer normalization + GitHub Issues

- `github-issue-install-signoff-contract.yaml` — declarative close triggers (#12–#16, UXR-017 checks)
- `install_github_issue_signoff.py` — post-install report; optional `--close-github-issues`
- Hooks in `install_kanban_framework.py` and `install_release_workflow.py`
- User docs: `github-issue-install-signoff.md`, `adk-install-expenses-tracker-fresh-repo.md`

### Validators

- `validate_kanban_naming.py --strict` padding + capitalisation checks

---

## Open follow-up (not closed by this release)

- **AC5:** Expenses Tracker fresh-repo install replay (task T11)
- **AC5b:** Normalize sign-off contract after upstream GH issues closed

---

## Related

- [T11](../project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md)
- [UXR-017](../project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md)
- [ADR-015](../architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention.md)
