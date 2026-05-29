---
lifecycle: evergreen
created_at: 2025-12-18T00:00:00
housekeeping_policy: keep
---

# Phase 3: Package Distribution Implementation Plan

**Purpose:** Complete Phase 3 package distribution - build and upload framework packages to GitHub Releases  
**Date:** 2025-12-18  
**Status:** IN PROGRESS  
**Related:** E6:S06:T04 - Package Management Implementation Plan

---

## Overview

Phase 3 tools are complete:
- ✅ Package builder script (`build_package.py`)
- ✅ GitHub Releases upload script (`upload_to_github_release.py`)
- ✅ Installation script (`install_package_from_release.py`)
- ✅ Documentation (`PACKAGE_INSTALLATION_GUIDE.md`)

**Remaining Work:**
1. Build packages for all frameworks
2. Upload packages to GitHub Releases
3. Test end-to-end installation workflow
4. Document distribution process

---

## Framework Versions

**Current Framework Versions:**
- `kanban`: **2.1.0** (from `CHANGELOG.md`)
- `workflow mgt`: **2.1.3** (from `CHANGELOG.md`)
- `numbering & versioning`: **2.0.0** (from `README.md`)
- `doc-lifecycle`: **1.0.0** (from `README.md`)
- `debug-path`: **1.0.0** (from `README.md`)

---

## Step 1: Build All Packages

### Option A: Use Build Script (Recommended)

```bash
cd /Users/rms/Documents/projects/ai-dev-kit
python3 "packages/frameworks/workflow mgt/scripts/build_all_packages.py"
```

This will:
- Create `packages/frameworks/dist/packages/` directory
- Build packages for all 5 frameworks
- Generate tar.gz and .sha256 files for each

### Option B: Build Individually

```bash
cd /Users/rms/Documents/projects/ai-dev-kit

# Create output directory
mkdir -p packages/frameworks/dist/packages

# Build kanban package
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    kanban 2.1.0 \
    --output-dir packages/frameworks/dist/packages \
    --verbose

# Build workflow mgt package
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    "workflow mgt" 2.1.3 \
    --output-dir packages/frameworks/dist/packages \
    --verbose

# Build numbering & versioning package
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    "numbering & versioning" 2.0.0 \
    --output-dir packages/frameworks/dist/packages \
    --verbose

# Build doc-lifecycle package
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    doc-lifecycle 1.0.0 \
    --output-dir packages/frameworks/dist/packages \
    --verbose

# Build debug-path package
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    debug-path 1.0.0 \
    --output-dir packages/frameworks/dist/packages \
    --verbose
```

### Expected Output

After building, you should have:
```
packages/frameworks/dist/packages/
├── kanban-v2.1.0.tar.gz
├── kanban-v2.1.0.tar.gz.sha256
├── workflow-mgt-v2.1.3.tar.gz
├── workflow-mgt-v2.1.3.tar.gz.sha256
├── numbering-versioning-v2.0.0.tar.gz
├── numbering-versioning-v2.0.0.tar.gz.sha256
├── doc-lifecycle-v1.0.0.tar.gz
├── doc-lifecycle-v1.0.0.tar.gz.sha256
├── debug-path-v1.0.0.tar.gz
└── debug-path-v1.0.0.tar.gz.sha256
```

---

## Step 2: Upload to GitHub Releases

### Prerequisites

1. **GitHub Personal Access Token:**
   - Create token with `repo` scope
   - Set environment variable: `export GITHUB_TOKEN=your_token_here`
   - Or pass via `--token` flag

2. **Repository:**
   - Default: `earlution/ai-dev-kit` (or set `GITHUB_REPOSITORY` env var)

3. **Git Tags:**
   - Create tags for each framework release:
     ```bash
     git tag -a kanban-v2.1.0 -m "Release kanban framework v2.1.0"
     git tag -a workflow-mgt-v2.1.3 -m "Release workflow mgt framework v2.1.3"
     git tag -a numbering-versioning-v2.0.0 -m "Release numbering & versioning framework v2.0.0"
     git tag -a doc-lifecycle-v1.0.0 -m "Release doc-lifecycle framework v1.0.0"
     git tag -a debug-path-v1.0.0 -m "Release debug-path framework v1.0.0"
     
     git push origin --tags
     ```

### Upload Commands

```bash
cd /Users/rms/Documents/projects/ai-dev-kit
PACKAGES_DIR="packages/frameworks/dist/packages"

# Upload kanban package
python3 "packages/frameworks/workflow mgt/scripts/upload_to_github_release.py" \
    "$PACKAGES_DIR/kanban-v2.1.0.tar.gz" \
    --hash-file "$PACKAGES_DIR/kanban-v2.1.0.tar.gz.sha256" \
    --tag kanban-v2.1.0 \
    --repo earlution/ai-dev-kit \
    --verbose

# Upload workflow mgt package
python3 "packages/frameworks/workflow mgt/scripts/upload_to_github_release.py" \
    "$PACKAGES_DIR/workflow-mgt-v2.1.3.tar.gz" \
    --hash-file "$PACKAGES_DIR/workflow-mgt-v2.1.3.tar.gz.sha256" \
    --tag workflow-mgt-v2.1.3 \
    --repo earlution/ai-dev-kit \
    --verbose

# Upload numbering & versioning package
python3 "packages/frameworks/workflow mgt/scripts/upload_to_github_release.py" \
    "$PACKAGES_DIR/numbering-versioning-v2.0.0.tar.gz" \
    --hash-file "$PACKAGES_DIR/numbering-versioning-v2.0.0.tar.gz.sha256" \
    --tag numbering-versioning-v2.0.0 \
    --repo earlution/ai-dev-kit \
    --verbose

# Upload doc-lifecycle package
python3 "packages/frameworks/workflow mgt/scripts/upload_to_github_release.py" \
    "$PACKAGES_DIR/doc-lifecycle-v1.0.0.tar.gz" \
    --hash-file "$PACKAGES_DIR/doc-lifecycle-v1.0.0.tar.gz.sha256" \
    --tag doc-lifecycle-v1.0.0 \
    --repo earlution/ai-dev-kit \
    --verbose

# Upload debug-path package
python3 "packages/frameworks/workflow mgt/scripts/upload_to_github_release.py" \
    "$PACKAGES_DIR/debug-path-v1.0.0.tar.gz" \
    --hash-file "$PACKAGES_DIR/debug-path-v1.0.0.tar.gz.sha256" \
    --tag debug-path-v1.0.0 \
    --repo earlution/ai-dev-kit \
    --verbose
```

### Upload Script (All at Once)

```bash
#!/bin/bash
# upload_all_packages.sh

cd /Users/rms/Documents/projects/ai-dev-kit
PACKAGES_DIR="packages/frameworks/dist/packages"
UPLOAD_SCRIPT="packages/frameworks/workflow mgt/scripts/upload_to_github_release.py"
REPO="earlution/ai-dev-kit"

# Array of packages: (package_file, tag)
declare -a PACKAGES=(
    "kanban-v2.1.0.tar.gz:kanban-v2.1.0"
    "workflow-mgt-v2.1.3.tar.gz:workflow-mgt-v2.1.3"
    "numbering-versioning-v2.0.0.tar.gz:numbering-versioning-v2.0.0"
    "doc-lifecycle-v1.0.0.tar.gz:doc-lifecycle-v1.0.0"
    "debug-path-v1.0.0.tar.gz:debug-path-v1.0.0"
)

for package_info in "${PACKAGES[@]}"; do
    IFS=':' read -r package_file tag <<< "$package_info"
    hash_file="${package_file}.sha256"
    
    echo "Uploading: $package_file (tag: $tag)"
    
    python3 "$UPLOAD_SCRIPT" \
        "$PACKAGES_DIR/$package_file" \
        --hash-file "$PACKAGES_DIR/$hash_file" \
        --tag "$tag" \
        --repo "$REPO" \
        --verbose
    
    echo ""
done
```

---

## Step 3: Test Installation

### Test Manual Installation

```bash
# Create test directory
mkdir -p /tmp/test-framework-install
cd /tmp/test-framework-install

# Test installing kanban framework
python3 /Users/rms/Documents/projects/ai-dev-kit/"packages/frameworks/workflow mgt/scripts/install_package_from_release.py" \
    kanban 2.1.0 \
    --install-dir ./frameworks \
    --repo earlution/ai-dev-kit \
    --verbose

# Verify installation
ls -la frameworks/kanban-v2.1.0/
cat frameworks/kanban-v2.1.0/MANIFEST.json
```

### Test Automated Installation

```bash
# Test with installation script
python3 "packages/frameworks/workflow mgt/scripts/install_package_from_release.py" \
    "workflow mgt" 2.1.3 \
    --install-dir ./test-install \
    --verbose
```

---

## Step 4: Verify Package Integrity

### Verify Hash Files

```bash
cd packages/frameworks/dist/packages

# Verify kanban package
sha256sum -c kanban-v2.1.0.tar.gz.sha256

# Verify all packages
for hash_file in *.sha256; do
    echo "Verifying: $hash_file"
    sha256sum -c "$hash_file"
done
```

### Verify Package Contents

```bash
# Extract and inspect a package
cd /tmp
tar -xzf /path/to/kanban-v2.1.0.tar.gz
ls -la kanban-v2.1.0/
cat kanban-v2.1.0/MANIFEST.json
```

---

## Step 5: Update Documentation

After packages are uploaded, update:
1. **README.md** - Add package installation instructions
2. **Framework Installation Guide** - Add GitHub Releases installation method
3. **Package Installation Guide** - Verify links to GitHub Releases
4. **Release Notes** - Document package availability

---

## Verification Checklist

- [ ] All 5 packages built successfully
- [ ] All hash files generated and valid
- [ ] All packages uploaded to GitHub Releases
- [ ] Git tags created and pushed
- [ ] Installation script tested (manual download)
- [ ] Hash verification tested
- [ ] Package contents verified (MANIFEST.json, files)
- [ ] Documentation updated
- [ ] GitHub Releases page accessible and shows all packages

---

## Troubleshooting

### Build Issues

**Error: Framework not found**
- Check framework name matches directory name (spaces matter)
- Use `--framework-dir` to specify exact path

**Error: No files found**
- Check framework directory structure
- Verify README.md exists

### Upload Issues

**Error: Release not found**
- Create Git tag first: `git tag -a <tag> -m "Release message"`
- Push tags: `git push origin --tags`

**Error: Authentication failed**
- Verify GITHUB_TOKEN is set correctly
- Check token has `repo` scope
- Use `--token` flag to pass token directly

### Installation Issues

**Error: Package not found**
- Verify tag name matches release tag
- Check GitHub Releases page for correct tag
- Verify framework name normalization (spaces -> hyphens)

---

## Next Steps After Completion

1. **Announce package availability** in project documentation
2. **Update installation guides** with GitHub Releases method
3. **Create release notes** for each framework package
4. **Set up CI/CD** for automated package building (future)
5. **Monitor downloads** and gather feedback

---

## Related Documents

- Package Management Implementation Plan: `docs/Analysis/package-management-implementation-plan.md`
- Package Installation Guide: `packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`
- Build Package Script: `packages/frameworks/workflow mgt/scripts/build_package.py`
- Upload Script: `packages/frameworks/workflow mgt/scripts/upload_to_github_release.py`
- Installation Script: `packages/frameworks/workflow mgt/scripts/install_package_from_release.py`

---

**Status:** Ready for execution  
**Estimated Time:** 30-60 minutes (build + upload + test)

