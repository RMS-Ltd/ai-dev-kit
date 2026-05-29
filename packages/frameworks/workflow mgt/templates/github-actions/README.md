# GitHub Actions Workflow Templates

This directory contains optional GitHub Actions workflow templates for the Workflow Management package.

## Available Templates

### `update-badges-byob.yml` - BYOB Badge Workflow (Optional - Private Repos)

**Purpose:** Provides dynamic badge generation for private repositories using BYOB (Bring Your Own Badge).

**When to Use:**
- ✅ Your repository is **private**
- ✅ You want dynamic badges (version, license, status, tests, coverage, code quality)
- ✅ Standard Shields.io badges don't work (can't access private repo data)

**When NOT to Use:**
- ❌ Your repository is **public** (use standard Shields.io badges instead)
- ❌ You don't need dynamic badges

**Features:**
- Version badge (extracts from version file)
- License badge (static)
- Status badge (static)
- Test status badge (dynamic, from pytest results)
- Coverage badge (dynamic, from pytest-cov output)
- Code quality badge (dynamic, from ruff/pylint/flake8)

**Setup Requirements:**
1. Create a public repository for badge data (e.g., `your-org/your-repo-badges`)
2. Create a Personal Access Token with `repo` scope
3. Add token as repository secret: `BADGES_REPO_TOKEN`
4. Update workflow file with your repository paths and configuration
5. Update README with BYOB badge URLs

**Installation:**

1. Copy the template to your `.github/workflows/` directory:
   ```bash
   cp packages/frameworks/workflow\ mgt/templates/github-actions/update-badges-byob.yml .github/workflows/update-badges.yml
   ```

2. Update the workflow file:
   - Update version file path (line 20, 44)
   - Update license type (line 66)
   - Update REPOSITORY and ACTOR values (lines 58, 71, 84, etc.)
   - Update test workflow name if different (line 26)

3. Follow setup instructions in the workflow file comments

4. Update your README.md with BYOB badge URLs:
   ```markdown
   ![Version](https://byob.yarr.is/your-org/your-repo-badges/version)
   ![License](https://byob.yarr.is/your-org/your-repo-badges/license)
   ![Status](https://byob.yarr.is/your-org/your-repo-badges/status)
   ![Tests](https://byob.yarr.is/your-org/your-repo-badges/tests)
   ![Coverage](https://byob.yarr.is/your-org/your-repo-badges/coverage)
   ![Code Quality](https://byob.yarr.is/your-org/your-repo-badges/code-quality)
   ```

**Documentation:**
- Detailed setup guide: `docs/knowledge/guides/badge-setup-for-private-repos.md`
- BYOB repository: https://github.com/RubbaBoy/BYOB

**Badge URL Format:**
- `https://byob.yarr.is/{org}/{badge-repo}/{badge-name}`
- Example: `https://byob.yarr.is/earlution/ai-dev-kit-badges/version`

---

## Template Customization

All templates include placeholder values that need to be customized for your project:

- `{your-org}` - Your GitHub organization or username
- `{your-repo}` - Your repository name
- `{your-module}` - Your Python module name (for version extraction)
- `{your-license}` - Your license type (MIT, Apache-2.0, etc.)

Search for these placeholders in the template files and replace them with your project-specific values.

---

## Related Documentation

- **Workflow Management Package README:** `packages/frameworks/workflow mgt/README.md`
- **Badge Setup Guide:** `docs/knowledge/guides/badge-setup-for-private-repos.md`
- **BYOB Documentation:** https://github.com/RubbaBoy/BYOB

---

**Last Updated:** 2025-12-18  
**Package Version:** 2.1.2

