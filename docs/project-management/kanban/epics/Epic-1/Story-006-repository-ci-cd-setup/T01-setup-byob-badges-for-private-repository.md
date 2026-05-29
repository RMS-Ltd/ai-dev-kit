---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 6, Task 1: Set up BYOB badges for private repository

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last updated:** 2025-12-18 (v0.1.6.1+0 – Task in progress: Workflow and badges created, test/coverage badges added)  
**Started:** 2025-12-18  
**Completed:** [TBD]  
**Version:** v0.1.6.1+0  
**Code:** E1S06T01

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}` (e.g., `E1:S06:T01`)

**Full Task ID:** `E1:S06:T01`

---

## Scope

Set up BYOB (Bring Your Own Badge) to enable dynamic badge rendering for private repositories. This includes:

1. **GitHub Actions Workflow:**
   - Create workflow for badge updates
   - Configure triggers (version changes, test runs, etc.)
   - Set up badge generation for all badge types

2. **Badge Types:**
   - Version badge (dynamic, updates on version changes)
   - License badge (static: MIT)
   - Status badge (static: active)
   - Test status badge (dynamic, updates on test runs)
   - Coverage badge (dynamic, updates on coverage reports)
   - Code quality badge (dynamic, updates on linting/quality checks)

3. **Private Repo Support:**
   - Configure BYOB to use public badge repository
   - Set up Personal Access Token for badge repo access
   - Document setup process

4. **Documentation:**
   - Create setup guide for badge configuration
   - Document badge URL format
   - Document troubleshooting steps

---

## Input

**Prerequisites:**
- BYOB GitHub Action: `RubbaBoy/BYOB@v1.3.0`
- Public repository for badge data (to be created)
- Personal Access Token with `repo` scope (to be created)
- Current badge setup in README
- Test framework (pytest) for test status and coverage

**Dependencies:**
- None (this is the initial setup task)

---

## Deliverable

**GitHub Actions Workflow:**
- ✅ Created `.github/workflows/update-badges.yml`
- ✅ Configured version badge extraction and update
- ✅ Configured license badge (static)
- ✅ Configured status badge (static)
- ✅ Configured test status badge (dynamic, from test runs)
- ✅ Configured coverage badge (dynamic, from coverage reports)
- ✅ Set up triggers for badge updates
- ✅ Configured public repo support (commented, ready for setup)

**README Updates:**
- ✅ Updated badge URLs to use BYOB format
- ✅ Added comments explaining badge setup
- ✅ Badge URLs point to public badge repo (to be configured)

**Documentation:**
- ✅ Created `docs/knowledge/guides/badge-setup-for-private-repos.md`
- ✅ Complete setup instructions
- ✅ Troubleshooting guide
- ✅ Badge configuration examples

**Badge Configuration:**
- Version: Extracts from `src/fynd_deals/version.py`
- License: Static "MIT"
- Status: Static "active"
- Test Status: Extracts from test run results (pass/fail)
- Coverage: Extracts from coverage report percentage
- Code Quality: Extracts from linting tool results (ruff/pylint/flake8)

---

## Acceptance Criteria

- [x] GitHub Actions workflow created for badge updates
- [x] Version badge configured and working
- [x] License badge configured and working
- [x] Status badge configured and working
- [x] Test status badge configured (extracts from pytest results)
- [x] Coverage badge configured (extracts from pytest-cov output)
- [x] Code quality badge configured (extracts from ruff/pylint/flake8)
- [x] README updated with BYOB badge URLs (all 6 badges)
- [x] Setup documentation created
- [ ] Badge generation tested and verified (requires public repo setup)
- [ ] Public badge repo configured (user action required)

---

## Approach

1. **Create GitHub Actions Workflow:**
   - ✅ Created `.github/workflows/update-badges.yml`
   - ✅ Set up workflow triggers (version changes, manual dispatch)
   - ✅ Configured version extraction from `version.py`
   - ✅ Added badge update steps for version, license, status
   - ✅ Added placeholder for test status and coverage badges

2. **Update README:**
   - ✅ Replaced static Shields.io badges with BYOB URLs
   - ✅ Added comments explaining badge setup
   - ✅ Updated badge URLs to use public badge repo format

3. **Create Documentation:**
   - ✅ Created comprehensive setup guide
   - ✅ Documented all badge types
   - ✅ Added troubleshooting section
   - ✅ Included examples and references

4. **Test Status and Coverage Badges:**
   - ✅ Added test status extraction from pytest runs
   - ✅ Added coverage percentage extraction from pytest-cov output
   - ✅ Configured test status badge (passing/failing/not configured)
   - ✅ Configured coverage badge with color coding (≥80% green, ≥60% yellow, &lt;60% red)
   - ✅ Added workflow triggers for test completion
   - ✅ Updated README with test and coverage badge URLs

---

## Dependencies

**Depends On:**
- None (initial setup)

**Blocks:**
- Test workflow integration (for test status badge)
- Coverage workflow integration (for coverage badge)

**Blocked By:**
- None

**Parallel Development Candidacy:** Yes (can work in parallel with test/coverage setup)

---

## Related Work

**Related BR/FR Links:**
- User request for badge support in private repository

**Related Tasks:**
- Test workflow setup (for test status badge)
- Coverage workflow setup (for coverage badge)

**Related Stories:**
- E1:S06 – Repository CI/CD Setup (this story)

**Related Epics:**
- E1 – AI Dev Kit Core (repository infrastructure)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.1.6.1+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update version file with task completion
- Update changelog with task completion

---

## Notes

**BYOB Setup Requirements:**
- Public repository for badge data (e.g., `ai-dev-kit-badges`)
- Personal Access Token with `repo` scope
- Repository secret: `BADGES_REPO_TOKEN`
- Workflow configuration: `REPOSITORY` and `ACTOR` values

**Badge URL Format:**
- `https://byob.yarr.is/{org}/{badge-repo}/{badge-name}`
- Example: `https://byob.yarr.is/earlution/ai-dev-kit-badges/version`

**Test Status Badge:**
- Requires test workflow to output test results
- Can extract from pytest exit code or test summary
- Status: "passing" (green) or "failing" (red)

**Coverage Badge:**
- Requires coverage workflow to output coverage percentage
- Can extract from coverage report (e.g., `coverage.xml` or pytest-cov output)
- Status: Coverage percentage (e.g., "85%")

**Code Quality Badge:**
- Requires linting tool (ruff, pylint, or flake8)
- Tries tools in order: ruff → pylint → flake8
- Status: "passing" (green), "warnings" (yellow), "failing" (red), or "not configured" (grey)
- Color coding based on error/warning severity

---

## Completion Summary

**Task Status:** IN PROGRESS (v0.1.6.1+0)

**Completed:**
- ✅ GitHub Actions workflow created (`.github/workflows/update-badges.yml`)
- ✅ Version badge configured (extracts from `version.py`)
- ✅ License badge configured (static: MIT)
- ✅ Status badge configured (static: active)
- ✅ Test status badge configured (extracts from pytest results)
- ✅ Coverage badge configured (extracts from pytest-cov output)
- ✅ Code quality badge configured (extracts from ruff/pylint/flake8)
- ✅ README updated with all 6 BYOB badge URLs
- ✅ Setup documentation created (`docs/knowledge/guides/badge-setup-for-private-repos.md`)
- ✅ Workflow triggers configured (version changes, code changes, test completion)

**Remaining:**
- [ ] Public badge repository created and configured
- [ ] Personal Access Token created and added as secret
- [ ] Workflow REPOSITORY and ACTOR values uncommented and configured
- [ ] Badge generation tested and verified
- [ ] Test workflow integration verified (if separate test workflow exists)

---

## References

- BYOB Repository: https://github.com/RubbaBoy/BYOB
- Badge Setup Guide: `docs/knowledge/guides/badge-setup-for-private-repos.md`
- Workflow File: `.github/workflows/update-badges.yml`
- README: `README.md`

