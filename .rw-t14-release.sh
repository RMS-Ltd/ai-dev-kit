#!/usr/bin/env bash
set -euo pipefail
cd /tmp/t14-worktree

cp /tmp/t14-rw/tests.yml .github/workflows/tests.yml
cp /tmp/t14-rw/workflow-scripts-pytest.yml .github/workflows/workflow-scripts-pytest.yml
cp /tmp/t14-rw/framework-release.yml .github/workflows/framework-release.yml
cp /tmp/t14-rw/fr-br-intake.yml .github/workflows/fr-br-intake.yml
cp /tmp/t14-rw/fr-br-intake.yml.DISABLED .github/workflows/fr-br-intake.yml.DISABLED
cp /tmp/t14-rw/IPP-E02S11T14-github-actions-workflow-optimization.md docs/implementation-cycles/
cp /tmp/t14-rw/BR-052-github-actions-workflow-optimization.md docs/project-management/kanban/fr-br/
cp /tmp/t14-rw/test_gha_workflow_br052.py tests/
rm -f .github/workflows/fr-br-intake.yml.DISABLED-AGAIN

python3 << 'PYEOF'
from pathlib import Path
import re

Path("src/ai_dev_kit/version.py").write_text('''"""
AI Dev Kit Version File

See: docs/governance/standards/dev-kit-versioning-policy.md
"""

VERSION_RC = 0
VERSION_EPIC = 2
VERSION_STORY = 11
VERSION_TASK = 14
VERSION_BUILD = 2

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
''')

Path("docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md").write_text("""---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T17:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 11, Task 14: GitHub Actions workflow optimization (BR-052)

**Task ID:** E02:S11:T14
**Status:** ✅ COMPLETE (v0.2.11.14+2)
**Priority:** LOW
**Created:** 2026-05-29
**Last updated:** 2026-06-05
**Code:** E02S11T14

**Upstream:** [BR-052](../../../fr-br/BR-052-github-actions-workflow-optimization.md)

Publication Status: NOT_APPLICABLE

## Scope

Optimize active GitHub Actions workflows (runtime, caching, trigger scope) per BR-052; document intake re-enable deferral per BR-053.

## Input

- [IPP-E02S11T14-github-actions-workflow-optimization.md](../../../../implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md)
- [BR-052](../../../fr-br/BR-052-github-actions-workflow-optimization.md)

## Deliverable

Optimize GitHub Actions workflows per **BR-052** (runtime, caching, trigger scope).

## Acceptance criteria

- [x] **AC1:** Measurable improvement or documented deferral with rationale.
- [x] **AC2:** **BR-052** wired to this task.

## Version Anchor

✅ COMPLETE (v0.2.11.14+2)

## References

- [BR-052](../../../fr-br/BR-052-github-actions-workflow-optimization.md)
- [BR-053](../../../fr-br/BR-053-github-actions-workflow-push-trigger-bug.md)
- [IPP-E02S11T14](../../../../implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md)
""")

story = Path("docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation.md").read_text()
old = "- [ ] **E02:S11:T14 – GitHub Actions workflow optimization (BR-052)** - TODO — [Task doc](story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md) | [BR-052](../../fr-br/BR-052-github-actions-workflow-optimization.md)"
new = "- [x] **E02:S11:T14 – GitHub Actions workflow optimization (BR-052)** – ✅ **COMPLETE (v0.2.11.14+2)** — path filters + pip cache; BR-052 intake scope in disabled template — [Task doc](story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md) | [BR-052](../../fr-br/BR-052-github-actions-workflow-optimization.md) | [IPP-E02S11T14](../../../../implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md)"
if old in story:
    story = story.replace(old, new)
else:
    story = re.sub(r"- \[.\] \*\*E02:S11:T14[^\n]*", new, story)
Path("docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation.md").write_text(story)

readme = Path("README.md").read_text()
readme = re.sub(r"\*\*Version \(SemVer\):\*\* `[^`]+` \| \*\*Internal:\*\* `[^`]+` \([^)]+\) \| \*\*Last Updated:\*\* [^\n]+",
    "**Version (SemVer):** `v0.4.922+2` | **Internal:** `v0.2.11.14+2` (E02:S11:T14 / BR-052 GHA workflow optimization) | **Last Updated:** 2026-06-05", readme)
Path("README.md").write_text(readme)

cl = Path("CHANGELOG.md").read_text()
entry = "## [0.2.11.14+2] - 05-06-26\n\nE02:S11:T14 — **BR-052:** GHA workflow optimization — path filters + pip cache on active CI; BR-052 intake scope in disabled template. SemVer **v0.4.922+2**.\n\n[Detailed changelog](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.11.14+2.md)\n\n---\n\n"
if "[0.2.11.14+2]" not in cl:
    cl = cl.replace("---\n\n## [", "---\n\n" + entry + "## [", 1)
Path("CHANGELOG.md").write_text(cl)

Path("docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.11.14+2.md").write_text("""# Changelog v0.2.11.14+2

**Release Date:** 2026-06-05 05:20:00 UTC
**Epic:** 2 | **Story:** 11 | **Task:** 14
**SemVer:** v0.4.922+2

## Summary

E02:S11:T14 — **BR-052:** GitHub Actions workflow optimization (BUILD +2 — prior v0.2.11.14+1 tag collision recovery per BR-097).

## Change implemented

- `tests.yml` — path filters + pip cache
- `workflow-scripts-pytest.yml` — pip cache
- `framework-release.yml` — pip cache
- `fr-br-intake.yml` — workflow_dispatch only; BR-052 scope in `.DISABLED` template
- `tests/test_gha_workflow_br052.py` — 8-test contract

## References

- [BR-052](../../project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization.md)
- [IPP-E02S11T14](../../implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md)
""")

kb = Path("docs/project-management/kanban/kboard.md").read_text()
kb = re.sub(r"\*\*Last Updated:\*\* [^\n]+", "**Last Updated:** 2026-06-05 (RW: E02:S11:T14)", kb)
kb = re.sub(r"\*\*Version:\*\* v[0-9.+\-]+", "**Version:** v0.2.11.14+2", kb)
kb = re.sub(r"- \*\*E02:S11:T14\*\*[^\n]+\n\n?", "", kb)
Path("docs/project-management/kanban/kboard.md").write_text(kb)

kc = Path("docs/project-management/kanban/kanban-completed.md").read_text()
kc = re.sub(r"\*\*Last Updated:\*\* [^\n]+", "**Last Updated:** 2026-06-05 (RW: E02:S11:T14)", kc, count=1)
kc = re.sub(r"\*\*Version:\*\* v[0-9.+\-]+", "**Version:** v0.2.11.14+2", kc, count=1)
entry = "- **[E02:S11:T14](epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md)** — **BR-052**: GHA workflow optimization — path filters + pip cache.\n  **Completed:** `2026-06-05T05:20:00Z` | **Version:** `v0.2.11.14+2` | **Agent:** `RW E02:S11:T14 --art` | [BR-052](fr-br/BR-052-github-actions-workflow-optimization.md) | [IPP](../../implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md)\n\n"
if "E02:S11:T14" not in kc[:2500]:
    kc = kc.replace("## 20 Most Recently Completed Tasks\n\n", "## 20 Most Recently Completed Tasks\n\n" + entry)
Path("docs/project-management/kanban/kanban-completed.md").write_text(kc)
PYEOF

rm -rf tests/__pycache__
python -m pytest tests/test_gha_workflow_br052.py -q

git add \
  .github/workflows/tests.yml \
  .github/workflows/workflow-scripts-pytest.yml \
  .github/workflows/framework-release.yml \
  .github/workflows/fr-br-intake.yml \
  .github/workflows/fr-br-intake.yml.DISABLED \
  tests/test_gha_workflow_br052.py \
  docs/implementation-cycles/IPP-E02S11T14-github-actions-workflow-optimization.md \
  docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T14-github-actions-workflow-optimization-br052.md \
  docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation.md \
  docs/project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization.md \
  docs/project-management/kanban/kboard.md \
  docs/project-management/kanban/kanban-completed.md \
  docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.11.14+2.md \
  src/ai_dev_kit/version.py \
  CHANGELOG.md \
  README.md

python "/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py" --strict --requested "E02:S11:T14" --art
python "/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/validation/validate_changelog_format.py"
python "/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py" --strict --requested "E02:S11:T14" --art
python "/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/validation/validate_release_tag_immutability.py" --requested "E02:S11:T14"
python "/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_state_icons.py" --strict docs/project-management/kanban/kboard.md
python "/Users/rms/Documents/projects/ai-dev-kit/packages/frameworks/workflow-mgt/scripts/validation/validate_active_kanban_board.py" --strict docs/project-management/kanban/kboard.md

git commit -m "Release v0.2.11.14+2: BR-052 GHA workflow optimization

Epic: 2 | Story: 11 | Task: 14"

git tag -a "v0.2.11.14+2" -m "Release v0.2.11.14+2: E02:S11:T14 BR-052 GHA optimization"
git tag -a "v0.4.922+2" -m "Release v0.4.922+2: E02:S11:T14 BR-052 GHA optimization"

git push origin epic/2-e02s11t14-br052
git push origin v0.2.11.14+2 v0.4.922+2

echo "RW COMPLETE $(git log -1 --oneline)"
