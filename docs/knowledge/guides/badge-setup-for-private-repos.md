# Badge Setup for Private Repositories

**Last Updated:** 2025-12-18  
**Status:** Active

> **ai-dev-kit monorepo (2026-03-30):** This repository uses **static** `img.shields.io/badge/...` badges in the root README only; there is **no** `update-badges.yml` or orphan `shields` branch here. See [FR-064](../../project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges.md). The rest of this guide remains useful for **adopters** who want BYOB with a **dedicated public badge repo** and explicit `repository` / `actor` in the workflow.

## Problem

Private GitHub repositories cannot use standard Shields.io badges because the badge service cannot access private repo data. Badges that rely on GitHub API access (like version badges, build status, etc.) will not render.

## Solution: BYOB (Bring Your Own Badge)

We use [BYOB](https://github.com/RubbaBoy/BYOB) to create dynamic badges that work with private repositories by hosting badge metadata in a public repository.

### How It Works

1. **Badge Data Storage:** BYOB stores badge data in a JSON file (default: `shields.json` on a `shields` branch)
2. **Public Repo Hosting:** For private repos, the JSON is stored in a separate public repository
3. **Badge Generation:** The BYOB service (`https://byob.yarr.is/`) reads the JSON and generates badges using [Badgen](https://badgen.net/)
4. **Dynamic Updates:** GitHub Actions workflow updates badges automatically when version changes

## Setup Instructions

### Step 1: Create Public Badge Repository

1. Create a new public repository (e.g., `ai-dev-kit-badges`)
2. The repository can be minimal - it only needs to exist and be public
3. Note the repository name format: `{org}/{repo-name}` (e.g., `earlution/ai-dev-kit-badges`)

### Step 2: Create Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "BYOB Badge Updates")
4. Select the `repo` scope (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't be able to see it again)

### Step 3: Add Token as Repository Secret

1. Go to your private repository (e.g., `ai-dev-kit`)
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `BADGES_REPO_TOKEN`
5. Value: Paste your Personal Access Token
6. Click "Add secret"

### Step 4: Configure Workflow

1. Open `.github/workflows/update-badges.yml`
2. Update the `REPOSITORY` and `ACTOR` values in each badge step:
   ```yaml
   REPOSITORY: 'earlution/ai-dev-kit-badges'  # Your public repo
   ACTOR: 'earlution'  # Your GitHub username
   ```
3. Uncomment these lines in all badge steps (version, license, status, tests, coverage, code-quality)

### Step 5: Update README Badge URLs

1. Open `README.md`
2. Update badge URLs to point to your public badge repo:
   ```markdown
   ![Version](https://byob.yarr.is/earlution/ai-dev-kit-badges/version)
   ![License](https://byob.yarr.is/earlution/ai-dev-kit-badges/license)
   ![Status](https://byob.yarr.is/earlution/ai-dev-kit-badges/status)
   ![Tests](https://byob.yarr.is/earlution/ai-dev-kit-badges/tests)
   ![Coverage](https://byob.yarr.is/earlution/ai-dev-kit-badges/coverage)
   ![Code Quality](https://byob.yarr.is/earlution/ai-dev-kit-badges/code-quality)
   ```

### Step 6: Test the Workflow

1. Make a change to `src/fynd_deals/version.py` (or trigger manually)
2. Push to `main` branch
3. Check the Actions tab - the workflow should run
4. Verify badges appear in README after workflow completes

## Badge Configuration

### Current Badges

1. **Version Badge**
   - Updates automatically when version changes
   - Extracts version from `src/fynd_deals/version.py`
   - Color: Blue (`007ACC`)
   - Icon: Tag

2. **License Badge**
   - Static: MIT
   - Color: Green
   - Icon: Scale

3. **Status Badge**
   - Static: Active
   - Color: Success (green)
   - Icon: Check circle

4. **Test Status Badge**
   - Updates automatically when tests run
   - Extracts status from pytest test results
   - Status: "passing" (green) or "failing" (red) or "not configured" (grey)
   - Color: Success (passing), Critical (failing), Grey (not configured)
   - Icon: Check circle

5. **Coverage Badge**
   - Updates automatically when coverage is calculated
   - Extracts coverage percentage from pytest-cov output
   - Status: Coverage percentage (e.g., "85%") or "not configured"
   - Color: Success (≥80%), Important (≥60%), Critical (&lt;60%), Grey (not configured)
   - Icon: Shield

6. **Code Quality Badge**
   - Updates automatically when code quality checks run
   - Uses ruff (preferred), pylint, or flake8 for linting
   - Status: "passing" (green), "warnings" (yellow), "failing" (red), or "not configured" (grey)
   - Color: Success (passing), Important (warnings), Critical (failing), Grey (not configured)
   - Icon: Code

### Adding New Badges

To add a new badge:

1. Add a new step in `.github/workflows/update-badges.yml`:
   ```yaml
   - name: Update {badge-name} badge
     uses: RubbaBoy/BYOB@v1.3.0
     with:
       NAME: {badge-name}
       LABEL: '{label}'
       STATUS: ${{ steps.{step-id}.outputs.{output} }}
       COLOR: {hex-color}
       ICON: '{icon-name}'
       GITHUB_TOKEN: ${{ secrets.BADGES_REPO_TOKEN || secrets.GITHUB_TOKEN }}
       REPOSITORY: 'earlution/ai-dev-kit-badges'
       ACTOR: 'earlution'
   ```

2. Add badge to README:
   ```markdown
   ![{Label}](https://byob.yarr.is/earlution/ai-dev-kit-badges/{badge-name})
   ```

## Troubleshooting

### Badges Not Rendering

1. **Check Public Repo:** Ensure the public badge repository exists and is public
2. **Check Token:** Verify `BADGES_REPO_TOKEN` secret is set correctly
3. **Check Workflow:** Verify workflow ran successfully (check Actions tab)
4. **Check JSON File:** Visit `https://github.com/{org}/{badge-repo}/blob/shields/shields.json` to verify badge data exists
5. **Check URLs:** Verify README badge URLs match your public repo name

### Test/Coverage Badges Not Updating

1. **Check Test Framework:** Ensure pytest is installed and configured
2. **Check Test Files:** Verify test files exist and are discoverable by pytest
3. **Check Coverage Tool:** Ensure pytest-cov or coverage.py is installed
4. **Check Workflow Output:** Review workflow logs for test/coverage extraction errors
5. **Check Badge Data:** Verify test status and coverage values in badge JSON file

### Workflow Fails

1. **Token Permissions:** Ensure token has `repo` scope
2. **Repository Name:** Verify `REPOSITORY` format is `org/repo-name`
3. **Actor Name:** Verify `ACTOR` matches the token owner's username
4. **Workflow Permissions:** Ensure workflow has `contents: write` permission

### Badge Data Not Updating

1. **Check Triggers:** Verify workflow triggers on version file changes
2. **Check Branch:** Ensure workflow pushes to `shields` branch (default)
3. **Check Path:** Verify JSON file path matches BYOB default (`/shields.json`)

## References

- **BYOB Repository:** https://github.com/RubbaBoy/BYOB
- **BYOB Documentation:** See BYOB README for complete usage guide
- **Badgen Icons:** https://badgen.net/ (for available icon names)
- **Workflow File:** `.github/workflows/update-badges.yml`

## Related Work

- **Epic:** Epic 1 – AI Dev Kit Core
- **Story:** E1:S06 – Repository CI/CD Setup
- **Task:** E1:S06:T01 – Set up BYOB badges for private repository

---

**Note:** This setup allows badges to work with private repositories by hosting badge metadata in a public repository. The badge data is minimal (just JSON), so there's no security concern with making it public.

