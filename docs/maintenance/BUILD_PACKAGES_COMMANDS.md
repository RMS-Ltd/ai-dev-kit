# Build Framework Packages - Ready to Execute

## Quick Build (All Packages at Once)

```bash
cd /Users/rms/Documents/projects/ai-dev-kit
bash packages/frameworks/BUILD_NOW.sh
```

## Or Build Individually

```bash
cd /Users/rms/Documents/projects/ai-dev-kit

# Create output directory
mkdir -p packages/frameworks/dist/packages

# Build kanban
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    kanban 2.1.0 \
    --output-dir packages/frameworks/dist/packages \
    --frameworks-root packages/frameworks \
    --verbose

# Build workflow mgt
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    "workflow mgt" 2.1.4 \
    --output-dir packages/frameworks/dist/packages \
    --frameworks-root packages/frameworks \
    --verbose

# Build numbering & versioning
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    "numbering & versioning" 2.0.0 \
    --output-dir packages/frameworks/dist/packages \
    --frameworks-root packages/frameworks \
    --verbose

# Build doc-lifecycle
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    doc-lifecycle 1.0.0 \
    --output-dir packages/frameworks/dist/packages \
    --frameworks-root packages/frameworks \
    --verbose

# Build debug-path
python3 "packages/frameworks/workflow mgt/scripts/build_package.py" \
    debug-path 1.0.0 \
    --output-dir packages/frameworks/dist/packages \
    --frameworks-root packages/frameworks \
    --verbose
```

## Verify Packages

```bash
# List all packages
ls -lh packages/frameworks/dist/packages/*.tar.gz

# List all hash files
ls -lh packages/frameworks/dist/packages/*.sha256

# Verify a package hash
cd packages/frameworks/dist/packages
sha256sum -c kanban-v2.1.0.tar.gz.sha256
```

## Expected Output

After successful build, you should see:
```
packages/frameworks/dist/packages/
├── kanban-v2.1.0.tar.gz
├── kanban-v2.1.0.tar.gz.sha256
├── workflow-mgt-v2.1.4.tar.gz
├── workflow-mgt-v2.1.4.tar.gz.sha256
├── numbering-versioning-v2.0.0.tar.gz
├── numbering-versioning-v2.0.0.tar.gz.sha256
├── doc-lifecycle-v1.0.0.tar.gz
├── doc-lifecycle-v1.0.0.tar.gz.sha256
├── debug-path-v1.0.0.tar.gz
└── debug-path-v1.0.0.tar.gz.sha256
```

