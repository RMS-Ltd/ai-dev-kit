# Build and Upload Framework Packages - Complete Guide

## Step 1: Build All Packages

### Quick Build (Recommended)

```bash
cd /Users/rms/Documents/projects/ai-dev-kit
python3 "packages/frameworks/workflow mgt/scripts/build_packages_direct.py"
```

### Alternative: Build Script

```bash
bash packages/frameworks/BUILD_NOW.sh
```

### Verify Packages Built

```bash
ls -lh packages/frameworks/dist/packages/*.tar.gz
ls -lh packages/frameworks/dist/packages/*.sha256
```

You should see 5 packages and 5 hash files.

---

## Step 2: Create Git Tags

Before uploading, create Git tags for each framework release:

```bash
cd /Users/rms/Documents/projects/ai-dev-kit

# Create tags
git tag -a kanban-v2.1.0 -m "Release kanban framework v2.1.0"
git tag -a workflow-mgt-v2.1.4 -m "Release workflow mgt framework v2.1.3"
git tag -a numbering-versioning-v2.0.0 -m "Release numbering & versioning framework v2.0.0"
git tag -a doc-lifecycle-v1.0.0 -m "Release doc-lifecycle framework v1.0.0"
git tag -a debug-path-v1.0.0 -m "Release debug-path framework v1.0.0"

# Push tags to remote
git push origin --tags
```

---

## Step 3: Upload to GitHub Releases

### Prerequisites

1. **Set GitHub Token:**
   ```bash
   export GITHUB_TOKEN=your_token_here
   ```

2. **Verify Token:**
   ```bash
   echo $GITHUB_TOKEN
   ```

### Method 1: Upload All at Once (Recommended)

```bash
cd /Users/rms/Documents/projects/ai-dev-kit

# Using Python script
python3 "packages/frameworks/workflow mgt/scripts/upload_all_packages.py" \
    --token $GITHUB_TOKEN \
    --repo earlution/ai-dev-kit \
    --verbose

# Or using bash script
chmod +x "packages/frameworks/workflow mgt/scripts/UPLOAD_COMMANDS.sh"
"packages/frameworks/workflow mgt/scripts/UPLOAD_COMMANDS.sh"
```

### Method 2: Upload Individually

See [UPLOAD_PACKAGES.md](UPLOAD_PACKAGES.md) for individual upload commands.

### Dry Run (Test First)

```bash
# Test without uploading
python3 "packages/frameworks/workflow mgt/scripts/upload_all_packages.py" \
    --token $GITHUB_TOKEN \
    --dry-run
```

---

## Step 4: Verify Upload

1. **Check GitHub Releases:**
   ```
   https://github.com/earlution/ai-dev-kit/releases
   ```

2. **Verify Each Release:**
   - Each tag should have a release
   - Each release should have 2 assets: `.tar.gz` and `.sha256`

3. **Test Installation:**
   ```bash
   python3 "packages/frameworks/workflow mgt/scripts/install_package_from_release.py" \
       kanban 2.1.0 \
       --install-dir /tmp/test-install \
       --repo earlution/ai-dev-kit \
       --verbose
   ```

---

## Complete Workflow

```bash
# 1. Build packages
cd /Users/rms/Documents/projects/ai-dev-kit
python3 "packages/frameworks/workflow mgt/scripts/build_packages_direct.py"

# 2. Create Git tags
git tag -a kanban-v2.1.0 -m "Release kanban v2.1.0"
git tag -a workflow-mgt-v2.1.4 -m "Release workflow mgt v2.1.3"
git tag -a numbering-versioning-v2.0.0 -m "Release numbering & versioning v2.0.0"
git tag -a doc-lifecycle-v1.0.0 -m "Release doc-lifecycle v1.0.0"
git tag -a debug-path-v1.0.0 -m "Release debug-path v1.0.0"
git push origin --tags

# 3. Upload packages
export GITHUB_TOKEN=your_token_here
python3 "packages/frameworks/workflow mgt/scripts/upload_all_packages.py" \
    --token $GITHUB_TOKEN \
    --repo earlution/ai-dev-kit \
    --verbose

# 4. Verify
open https://github.com/earlution/ai-dev-kit/releases
```

---

## Troubleshooting

### Build Issues
- **No files found:** Check framework directory exists
- **Import errors:** Ensure Python 3.8+ and all dependencies available

### Upload Issues
- **Release not found:** Create and push Git tags first
- **Authentication failed:** Verify token has `repo` scope
- **Package not found:** Build packages first

---

**Related:**
- [BUILD_PACKAGES.md](BUILD_PACKAGES.md) – Build quick start
- [UPLOAD_PACKAGES.md](UPLOAD_PACKAGES.md) – Upload details
- [Phase 3 package distribution plan](../analysis/phase3-package-distribution-plan.md)

