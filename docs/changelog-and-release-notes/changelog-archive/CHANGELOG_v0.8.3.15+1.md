# Changelog v0.8.3.15+1

**Release Date:** 2026-06-05 16:45:58 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 15 | **Build:** 1  
**SemVer:** v0.4.989+1  
**Summary:** FR-112 perpetual CI/security lanes — T15 intake + Actions baseline snapshot

---

## Release scope

E08:S03:T15 — **Change implemented:** Establish perpetual **GitHub Actions CI health** lane (FR-112) with companion **E08:S03:T16** security/Code Quality lane filed in same intake. SemVer **v0.4.989+1**.

---

## Changes

### Kanban / governance

- **FR-112** — Perpetual GitHub CI and security health lanes (PROPOSED → intake wired).
- **E08:S03:T15** — GitHub Actions CI health (Perpetual); `Task Type: Perpetual Maintenance`.
- **E08:S03:T16** — GitHub Security & Code Quality health (Perpetual); handoff from T12–T14 documented.
- Story 003 checklist, `kboard.md` O-band, T12–T14 handoff links updated.

### Actions baseline snapshot (`main` @ 2026-06-05 16:39 UTC)

| Workflow | Status |
| -------- | ------ |
| Tests | failure |
| Docusaurus site build | failure |
| Greenfield install | failure |
| Workflow scripts pytest | success |
| Code Quality: Push on main | success |
| Push on main (CodeQL) | success |

T15 **AC4** baseline recorded; red-build triage is follow-on perpetual work.

---

## Notes

- **`--dpz` rejected:** `resolve_rw_build.py` blocked doc-policy-zero (`VERSION_BUILD=4` on prior anchor). Release used **`--art`** → `0.8.3.15+1` (`art_first_build`).
- **Verification:** CI failures on `main` pending operator triage under T15.

---

## References

- [FR-112](../../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E08:S03:T15](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)
- [E08:S03:T16](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
