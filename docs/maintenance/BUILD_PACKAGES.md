# Build Framework Packages - Quick Start

## Prerequisites

Make sure you're in the project root:
```bash
cd /Users/rms/Documents/projects/ai-dev-kit
```

## Method 1: Build All Packages at Once

```bash
python3 "packages/frameworks/workflow mgt/scripts/build_all_packages.py"
```

This will build all 5 frameworks:
- kanban v2.1.0
- workflow mgt v2.1.3
- numbering & versioning v2.0.0
- doc-lifecycle v1.0.0
- debug-path v1.0.0

## Method 2: Build Individual Packages

If the batch script doesn't work, build each package individually:

```bash
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

## Expected Output

After building, you should see packages in:
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

## Verify Packages

```bash
# Check that all packages were created
ls -lh packages/frameworks/dist/packages/*.tar.gz

# Verify hash files
ls -lh packages/frameworks/dist/packages/*.sha256

# Verify a package hash
cd packages/frameworks/dist/packages
sha256sum -c kanban-v2.1.0.tar.gz.sha256
```

## Next Steps

After packages are built:
1. Review packages in `packages/frameworks/dist/packages/`
2. Upload to GitHub Releases (see [phase3 package distribution plan](../analysis/phase3-package-distribution-plan.md))
3. Test installation workflow
