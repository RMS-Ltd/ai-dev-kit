# Upload Framework Packages to GitHub Releases

## Prerequisites

1. **GitHub Personal Access Token:**
   ```bash
   # Set environment variable
   export GITHUB_TOKEN=your_token_here
   
   # Or pass via --token flag
   ```

2. **Git Tags Created:**
   ```bash
   cd /Users/rms/Documents/projects/ai-dev-kit
   
   # Create tags for each framework
   git tag -a kanban-v2.1.0 -m "Release kanban framework v2.1.0"
   git tag -a workflow-mgt-v2.1.4 -m "Release workflow mgt framework v2.1.3"
   git tag -a numbering-versioning-v2.0.0 -m "Release numbering & versioning framework v2.0.0"
   git tag -a doc-lifecycle-v1.0.0 -m "Release doc-lifecycle framework v1.0.0"
   git tag -a debug-path-v1.0.0 -m "Release debug-path framework v1.0.0"
   
   # Push tags to remote
   git push origin --tags
   ```

3. **Packages Built:**
   - Packages must exist in `packages/frameworks/dist/packages/`
   - Run build script first if not already built

---

## Method 1: Upload All Packages at Once (Recommended)

```bash
cd /Users/rms/Documents/projects/ai-dev-kit

# Set GitHub token
export GITHUB_TOKEN=your_token_here

# Upload all packages
python3 "packages/frameworks/workflow mgt/scripts/upload_all_packages.py" \
    --token $GITHUB_TOKEN \
    --repo earlution/ai-dev-kit \
    --verbose
```

### Dry Run (Test First)

```bash
python3 "packages/frameworks/workflow mgt/scripts/upload_all_packages.py" \
    --token $GITHUB_TOKEN \
    --dry-run
```

---

## Method 2: Upload Individual Packages

```bash
cd /Users/rms/Documents/projects/ai-dev-kit
PACKAGES_DIR="packages/frameworks/dist/packages"
UPLOAD_SCRIPT="packages/frameworks/workflow mgt/scripts/upload_to_github_release.py"
REPO="earlution/ai-dev-kit"

# Upload kanban package
python3 "$UPLOAD_SCRIPT" \
    "$PACKAGES_DIR/kanban-v2.1.0.tar.gz" \
    --hash-file "$PACKAGES_DIR/kanban-v2.1.0.tar.gz.sha256" \
    --tag kanban-v2.1.0 \
    --token $GITHUB_TOKEN \
    --repo $REPO \
    --verbose

# Upload workflow mgt package
python3 "$UPLOAD_SCRIPT" \
    "$PACKAGES_DIR/workflow-mgt-v2.1.4.tar.gz" \
    --hash-file "$PACKAGES_DIR/workflow-mgt-v2.1.4.tar.gz.sha256" \
    --tag workflow-mgt-v2.1.4 \
    --token $GITHUB_TOKEN \
    --repo $REPO \
    --verbose

# Upload numbering & versioning package
python3 "$UPLOAD_SCRIPT" \
    "$PACKAGES_DIR/numbering-versioning-v2.0.0.tar.gz" \
    --hash-file "$PACKAGES_DIR/numbering-versioning-v2.0.0.tar.gz.sha256" \
    --tag numbering-versioning-v2.0.0 \
    --token $GITHUB_TOKEN \
    --repo $REPO \
    --verbose

# Upload doc-lifecycle package
python3 "$UPLOAD_SCRIPT" \
    "$PACKAGES_DIR/doc-lifecycle-v1.0.0.tar.gz" \
    --hash-file "$PACKAGES_DIR/doc-lifecycle-v1.0.0.tar.gz.sha256" \
    --tag doc-lifecycle-v1.0.0 \
    --token $GITHUB_TOKEN \
    --repo $REPO \
    --verbose

# Upload debug-path package
python3 "$UPLOAD_SCRIPT" \
    "$PACKAGES_DIR/debug-path-v1.0.0.tar.gz" \
    --hash-file "$PACKAGES_DIR/debug-path-v1.0.0.tar.gz.sha256" \
    --tag debug-path-v1.0.0 \
    --token $GITHUB_TOKEN \
    --repo $REPO \
    --verbose
```

---

## Method 3: Bash Script (All at Once)

```bash
#!/bin/bash
# upload_all.sh

cd /Users/rms/Documents/projects/ai-dev-kit
PACKAGES_DIR="packages/frameworks/dist/packages"
UPLOAD_SCRIPT="packages/frameworks/workflow mgt/scripts/upload_to_github_release.py"
REPO="earlution/ai-dev-kit"

# Check token
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Error: GITHUB_TOKEN environment variable not set"
    exit 1
fi

# Array of packages: (package_file, tag)
declare -a PACKAGES=(
    "kanban-v2.1.0.tar.gz:kanban-v2.1.0"
    "workflow-mgt-v2.1.4.tar.gz:workflow-mgt-v2.1.4"
    "numbering-versioning-v2.0.0.tar.gz:numbering-versioning-v2.0.0"
    "doc-lifecycle-v1.0.0.tar.gz:doc-lifecycle-v1.0.0"
    "debug-path-v1.0.0.tar.gz:debug-path-v1.0.0"
)

for package_info in "${PACKAGES[@]}"; do
    IFS=':' read -r package_file tag <<< "$package_info"
    hash_file="${package_file}.sha256"
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📤 Uploading: $package_file (tag: $tag)"
    
    if [ ! -f "$PACKAGES_DIR/$package_file" ]; then
        echo "❌ Package not found: $PACKAGES_DIR/$package_file"
        continue
    fi
    
    python3 "$UPLOAD_SCRIPT" \
        "$PACKAGES_DIR/$package_file" \
        --hash-file "$PACKAGES_DIR/$hash_file" \
        --tag "$tag" \
        --token "$GITHUB_TOKEN" \
        --repo "$REPO" \
        --verbose
    
    if [ $? -eq 0 ]; then
        echo "✅ SUCCESS: $package_file"
    else
        echo "❌ FAILED: $package_file"
    fi
    echo ""
done

echo "✅ Upload complete!"
```

Save as `upload_all.sh`, make executable, and run:
```bash
chmod +x upload_all.sh
./upload_all.sh
```

---

## Verification

After uploading, verify packages are on GitHub Releases:

1. **Check Releases Page:**
   ```
   https://github.com/earlution/ai-dev-kit/releases
   ```

2. **Verify Each Release:**
   - Each tag should have a release
   - Each release should have 2 assets: `.tar.gz` and `.sha256`
   - Download and verify hash matches

3. **Test Installation:**
   ```bash
   python3 "packages/frameworks/workflow mgt/scripts/install_package_from_release.py" \
       kanban 2.1.0 \
       --install-dir /tmp/test-install \
       --repo earlution/ai-dev-kit \
       --verbose
   ```

---

## Troubleshooting

### Error: Release not found
- **Solution:** Create Git tags first and push them:
  ```bash
  git tag -a kanban-v2.1.0 -m "Release kanban v2.1.0"
  git push origin kanban-v2.1.0
  ```

### Error: Authentication failed
- **Solution:** Verify token has `repo` scope
- Check token is set: `echo $GITHUB_TOKEN`
- Use `--token` flag to pass directly

### Error: Package not found
- **Solution:** Build packages first:
  ```bash
  python3 "packages/frameworks/workflow mgt/scripts/build_packages_direct.py"
  ```

### Error: Hash file not found
- **Solution:** Hash file is optional but recommended
- Package will upload without hash file (less secure)

---

## Next Steps After Upload

1. **Update Documentation:**
   - Add package installation instructions
   - Update framework installation guide
   - Document GitHub Releases as distribution method

2. **Announce Availability:**
   - Update README with package installation
   - Create release notes for each framework

3. **Test Installation:**
   - Test manual download and installation
   - Test automated installation script
   - Verify hash verification works

---

**Related:**
- [BUILD_PACKAGES.md](BUILD_PACKAGES.md) – Build quick start
- [Phase 3 package distribution plan](../analysis/phase3-package-distribution-plan.md)
- Upload script: `packages/frameworks/workflow mgt/scripts/upload_to_github_release.py`
- Installation guide: `packages/frameworks/workflow mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`
