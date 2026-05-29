---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Standard Operating Procedure: Environment Variables

**Version:** 1.0  
**Last Updated:** 2026-01-20  
**Framework:** Workflow Management Framework  
**Related:** `release-workflow-agent-execution.md`, `create_github_release.py`, `upload_to_github_release.py`

---

## Overview

This SOP defines the standard procedure for managing environment variables required by AI Dev Kit workflows and scripts. It provides clear guidance on which variables are needed, how to set them, and how to verify they are configured correctly.

**Key Principle:** Environment variables should be documented, validated, and provide clear error messages when missing. Scripts should gracefully handle missing variables and provide helpful instructions.

---

## Purpose

**Why This SOP Exists:**
- Ensures consistent environment variable usage across all workflows and scripts
- Provides clear setup instructions for developers and CI/CD systems
- Prevents silent failures due to missing environment variables
- Enables proper error handling and user guidance

**What This SOP Covers:**
- Required environment variables for each workflow/script
- How to set environment variables (temporary vs permanent)
- How to verify environment variables are set correctly
- Error handling patterns for missing variables
- Security considerations for sensitive variables

**What This SOP Does NOT Cover:**
- CI/CD secret management (GitHub Actions secrets, etc.) - covered in CI/CD documentation
- Local development environment setup - covered in development guides
- Framework installation - covered in framework installation guides

---

## Required Environment Variables

### GITHUB_TOKEN

**Purpose:** GitHub Personal Access Token (PAT) for authenticating with GitHub API.

**Used By:**
- Release Workflow (RW) Step 12.5: Create/Update GitHub Release
- Package upload scripts (`upload_to_github_release.py`, `upload_all_packages.py`)
- GitHub release creation script (`create_github_release.py`)

**Required Scopes:**
- `repo` (full control of private repositories)
  - Required for: Creating/updating releases, uploading release assets

**How to Generate:**
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a descriptive name (e.g., "AI Dev Kit Release Workflow")
4. Select the `repo` scope
5. Click "Generate token"
6. **Copy the token immediately** (you won't be able to see it again)

**How to Set (Temporary - Current Shell Session):**
```bash
export GITHUB_TOKEN=your_token_here
```

**How to Set (Permanent - macOS/Linux):**
```bash
# Add to ~/.zshrc or ~/.bashrc
echo 'export GITHUB_TOKEN=your_token_here' >> ~/.zshrc
source ~/.zshrc
```

**How to Set (Permanent - Windows PowerShell):**
```powershell
[System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN', 'your_token_here', 'User')
```

**How to Verify:**
```bash
echo $GITHUB_TOKEN
# Should output your token (be careful in shared environments)
```

**Security Notes:**
- ⚠️ **NEVER commit tokens to version control**
- ⚠️ **NEVER share tokens in chat logs or screenshots**
- ⚠️ **Rotate tokens periodically** (GitHub → Settings → Developer settings → Personal access tokens)
- ⚠️ **Use least-privilege scopes** (only `repo` scope needed, not `admin`)

**Error Handling:**
- Scripts should check for `GITHUB_TOKEN` before making API calls
- If missing, provide clear error message with setup instructions
- Non-blocking workflows (like RW Step 12.5) should skip gracefully with instructions

---

### GITHUB_REPOSITORY

**Purpose:** GitHub repository identifier in `owner/repo` format.

**Used By:**
- Release Workflow (RW) Step 12.5: Create/Update GitHub Release
- Package upload scripts
- GitHub release creation script

**Default Value:**
- If not set, scripts default to `earlution/ai-dev-kit`
- Can be overridden via `--repo` command-line argument

**How to Set:**
```bash
export GITHUB_REPOSITORY=earlution/ai-dev-kit
```

**How to Verify:**
```bash
echo $GITHUB_REPOSITORY
# Should output: earlution/ai-dev-kit
```

**Note:** This is optional for ai-dev-kit (has default), but required for other projects using these scripts.

---

## Workflow-Specific Requirements

### Release Workflow (RW)

**Step 12.5: Create/Update GitHub Release**

**Required Variables:**
- `GITHUB_TOKEN` (required)
- `GITHUB_REPOSITORY` (optional, defaults to `earlution/ai-dev-kit`)

**Behavior:**
- Checks for `GITHUB_TOKEN` before running script
- If missing: Skips step with warning and manual instructions (non-blocking)
- If present: Creates/updates GitHub release using SemVer tag
- If API error: Logs error and provides instructions (non-blocking)

**Manual Execution (if automated step skipped):**
```bash
python "packages/frameworks/workflow mgt/scripts/create_github_release.py" \
  --semver-tag "v0.4.36+1" \
  --internal-version "v0.4.16.4+1" \
  --summary "Release summary" \
  --epic "4" --story "16" --task "4" \
  --repo "earlution/ai-dev-kit" \
  --token "$GITHUB_TOKEN"
```

---

### Package Upload Workflow

**Required Variables:**
- `GITHUB_TOKEN` (required)
- `GITHUB_REPOSITORY` (optional, defaults to `earlution/ai-dev-kit`)

**Scripts:**
- `upload_to_github_release.py` - Upload individual package
- `upload_all_packages.py` - Upload all packages at once
- `build_and_upload_all.py` - Build and upload all packages

**Setup:**
```bash
export GITHUB_TOKEN=your_token_here
export GITHUB_REPOSITORY=earlution/ai-dev-kit  # Optional
```

**Verification:**
```bash
# Test with dry-run
python "packages/frameworks/workflow mgt/scripts/upload_all_packages.py" \
  --dry-run \
  --token "$GITHUB_TOKEN"
```

---

## Error Handling Patterns

### Pattern 1: Required Variable (Blocking)

**Use Case:** Variable is required for script to function.

**Implementation:**
```python
github_token = os.environ.get('GITHUB_TOKEN')
if not github_token:
    print("❌ Error: GITHUB_TOKEN required (set via export GITHUB_TOKEN=...)", file=sys.stderr)
    print("\n📋 Setup Instructions:")
    print("   1. Generate token: GitHub Settings → Developer settings → Personal access tokens")
    print("   2. Select 'repo' scope")
    print("   3. Set: export GITHUB_TOKEN=your_token_here")
    sys.exit(1)
```

### Pattern 2: Optional Variable (Non-Blocking)

**Use Case:** Variable is optional, workflow can continue without it.

**Implementation:**
```python
github_token = os.environ.get('GITHUB_TOKEN')
if not github_token:
    print("⚠️  Warning: GITHUB_TOKEN not set. Skipping GitHub release creation.")
    print("\n📋 To create GitHub release manually, run:")
    print(f"   python script.py --token $GITHUB_TOKEN ...")
    return "skipped"  # Mark as skipped, not failed
```

### Pattern 3: Variable with Default

**Use Case:** Variable has a sensible default value.

**Implementation:**
```python
repo = os.environ.get('GITHUB_REPOSITORY', 'earlution/ai-dev-kit')
# Use repo variable (will use default if env var not set)
```

---

## Verification Checklist

Before running workflows that require environment variables:

- [ ] **GITHUB_TOKEN:**
  - [ ] Token generated with `repo` scope
  - [ ] Token set in environment (`echo $GITHUB_TOKEN` shows value)
  - [ ] Token not expired (check GitHub Settings)
  - [ ] Token has correct permissions (test with dry-run)

- [ ] **GITHUB_REPOSITORY (if needed):**
  - [ ] Set to correct `owner/repo` format
  - [ ] Repository exists and is accessible
  - [ ] Token has access to repository

- [ ] **Verification Test:**
  - [ ] Run script with `--dry-run` flag (if available)
  - [ ] Check for clear error messages if variables missing
  - [ ] Verify script can authenticate with GitHub API

---

## Troubleshooting

### Issue: "Bad credentials" (401 Error)

**Symptoms:**
- Script returns 401 "Bad credentials" error
- GitHub API requests fail

**Possible Causes:**
1. Token expired or revoked
2. Token missing `repo` scope
3. Token copied incorrectly (extra spaces, missing characters)
4. Token belongs to different GitHub account

**Solutions:**
1. **Regenerate Token:**
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Revoke old token (if exists)
   - Generate new token with `repo` scope
   - Set: `export GITHUB_TOKEN=new_token_here`

2. **Verify Token Scope:**
   - Check token has `repo` scope (full control of private repositories)
   - Regenerate if scope is incorrect

3. **Verify Token Format:**
   - Check for extra spaces: `echo "$GITHUB_TOKEN" | wc -c` (should match token length)
   - Re-copy token from GitHub if needed

4. **Test Token:**
   ```bash
   curl -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user
   # Should return your GitHub user info
   ```

### Issue: "Tag not found" (500 Error)

**Symptoms:**
- Script returns 500 error when creating GitHub release
- Error message mentions tag not found

**Possible Causes:**
1. Tag doesn't exist on GitHub remote yet
2. Tag was created locally but not pushed
3. Tag name mismatch (typo in tag name)

**Solutions:**
1. **Push Tags First:**
   ```bash
   git push origin main --tags
   # Wait for push to complete, then retry release creation
   ```

2. **Verify Tag Exists:**
   ```bash
   git ls-remote --tags origin | grep v0.4.36+1
   # Should show the tag if it exists on remote
   ```

3. **Check Tag Name:**
   - Verify tag name matches exactly (case-sensitive)
   - Check for typos in SemVer tag format

### Issue: Token Not Available in Agent Sandbox

**Symptoms:**
- RW Step 12.5 skips with "GITHUB_TOKEN not set" warning
- Agent's shell environment doesn't have access to user's token

**Cause:**
- Agent's shell session is separate from user's IDE terminal
- Environment variables set in user's terminal don't propagate to agent

**Solution:**
- This is expected behavior - agent cannot access user's environment variables
- User must run GitHub release creation manually:
  ```bash
  python "packages/frameworks/workflow mgt/scripts/create_github_release.py" \
    --semver-tag "v0.4.36+1" \
    --internal-version "v0.4.16.4+1" \
    --summary "Release summary" \
    --epic "4" --story "16" --task "4" \
    --repo "earlution/ai-dev-kit" \
    --token "$GITHUB_TOKEN"
  ```

---

## Security Best Practices

1. **Never Commit Tokens:**
   - Add `*.env` to `.gitignore`
   - Never commit tokens in code, config files, or documentation
   - Use environment variables or secret management systems

2. **Use Least-Privilege Scopes:**
   - Only grant `repo` scope (not `admin` or `delete_repo`)
   - Create separate tokens for different purposes if needed

3. **Rotate Tokens Periodically:**
   - Set calendar reminder to rotate tokens every 90 days
   - Revoke old tokens when creating new ones
   - Update environment variables when rotating

4. **Protect Token in Shared Environments:**
   - Don't echo token in shared terminals or screenshots
   - Use `--token` flag instead of environment variable in CI/CD
   - Use secret management (GitHub Secrets, etc.) in CI/CD

5. **Monitor Token Usage:**
   - Check GitHub Settings → Developer settings → Personal access tokens for last used date
   - Revoke unused tokens
   - Investigate unexpected usage

---

## Related Documentation

- **Release Workflow:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 12.5)
- **GitHub Release Script:** `packages/frameworks/workflow mgt/scripts/create_github_release.py`
- **Package Upload Guide:** `docs/maintenance/UPLOAD_PACKAGES.md`
- **Build and Upload Guide:** `docs/maintenance/BUILD_AND_UPLOAD.md`
- **GitHub Token Setup:** [GitHub Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

**Last Updated:** 2026-01-20  
**Document Version:** 1.0
