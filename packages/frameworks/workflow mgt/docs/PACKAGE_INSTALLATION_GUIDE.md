# Package Installation Guide

**Purpose:** Manual installation guide for AI Dev Kit framework packages from GitHub Releases

**Last Updated:** 2025-12-18  
**Version:** 1.0.0

---

## Overview

AI Dev Kit frameworks are distributed as tar.gz packages via GitHub Releases. Each package includes:
- Framework source files (templates, policies, scripts, documentation)
- `MANIFEST.json` (package metadata)
- SHA-256 hash file (`.sha256`) for integrity verification

This guide covers manual installation of framework packages.

**Workflow Management / RW:** After install, invoke Release Workflow with a **task id in the same message** as `RW` (**FR-060**); see repository [`INSTALL_IN_YOUR_PROJECT.md`](../../../../INSTALL_IN_YOUR_PROJECT.md) and [`framework-dependency-installation-guide.md`](../../../../docs/documentation/user-docs/framework-dependency-installation-guide.md).

---

## Prerequisites

- **Python 3.8+** (for installation scripts and package verification)
- **Git** (for Git submodule installation method, optional)
- **Internet access** (to download packages from GitHub Releases)
- **Basic command-line knowledge**

---

## Installation Methods

### Method 1: Download and Extract (Recommended for Manual Installation)

#### Step 1: Download Package and Hash File

1. Navigate to the framework's GitHub Releases page:
   - Example: `https://github.com/ai-dev-kit/ai-dev-kit/releases/tag/kanban-v2.0.0`
   
2. Download the package file:
   - Format: `{framework-name}-v{version}.tar.gz`
   - Example: `kanban-v2.0.0.tar.gz`

3. Download the hash file:
   - Format: `{framework-name}-v{version}.tar.gz.sha256`
   - Example: `kanban-v2.0.0.tar.gz.sha256`

#### Step 2: Verify Package Integrity

Verify the package hash before extracting:

```bash
# On Linux/macOS (using sha256sum)
sha256sum -c kanban-v2.0.0.tar.gz.sha256

# On macOS (using shasum)
shasum -a 256 -c kanban-v2.0.0.tar.gz.sha256

# Expected output: kanban-v2.0.0.tar.gz: OK
```

If verification fails, **do not proceed** - the package may be corrupted or tampered with.

#### Step 3: Extract Package

Extract the package to your project:

```bash
# Create destination directory (if it doesn't exist)
mkdir -p packages/frameworks

# Extract package
tar -xzf kanban-v2.0.0.tar.gz -C packages/frameworks/

# Verify extraction
ls packages/frameworks/kanban/
# Should show: README.md, scripts/, templates/, policies/, etc.
```

#### Step 4: Verify Installation

Check that the framework structure is correct:

```bash
# Check for MANIFEST.json
cat packages/frameworks/kanban/MANIFEST.json | head -20

# Verify key files exist
ls packages/frameworks/kanban/README.md
ls packages/frameworks/kanban/scripts/install_kanban_framework.py
```

---

### Method 2: Using wget/curl (Automated Download)

#### Download and Verify

```bash
# Set variables
FRAMEWORK="kanban"
VERSION="2.0.0"
BASE_URL="https://github.com/ai-dev-kit/ai-dev-kit/releases/download/kanban-v${VERSION}"

# Create destination directory
mkdir -p packages/frameworks

# Download package and hash file
wget "${BASE_URL}/kanban-v${VERSION}.tar.gz"
wget "${BASE_URL}/kanban-v${VERSION}.tar.gz.sha256"

# Verify hash
sha256sum -c kanban-v${VERSION}.tar.gz.sha256

# Extract if verification passes
if [ $? -eq 0 ]; then
    tar -xzf kanban-v${VERSION}.tar.gz -C packages/frameworks/
    echo "✅ Package installed successfully"
else
    echo "❌ Hash verification failed - package may be corrupted"
    exit 1
fi

# Cleanup downloaded files (optional)
rm kanban-v${VERSION}.tar.gz kanban-v${VERSION}.tar.gz.sha256
```

#### Using curl (Alternative)

```bash
# Download package
curl -L -o kanban-v2.0.0.tar.gz \
    "https://github.com/ai-dev-kit/ai-dev-kit/releases/download/kanban-v2.0.0/kanban-v2.0.0.tar.gz"

# Download hash file
curl -L -o kanban-v2.0.0.tar.gz.sha256 \
    "https://github.com/ai-dev-kit/ai-dev-kit/releases/download/kanban-v2.0.0/kanban-v2.0.0.tar.gz.sha256"

# Verify and extract (same as wget example)
```

---

## Package Structure

After extraction, the framework package will have this structure:

```
packages/frameworks/kanban/
├── MANIFEST.json          # Package metadata
├── README.md              # Framework overview
├── IMPLEMENTATION_GUIDE.md # Implementation instructions
├── scripts/               # Installation and utility scripts
│   ├── install_kanban_framework.py
│   └── ...
├── templates/             # Template files
│   ├── epics/
│   ├── stories/
│   └── ...
├── policies/              # Framework policies
│   └── ...
└── ...                    # Other framework files
```

---

## Post-Installation Steps

### 1. Review Framework Documentation

Read the framework's README and implementation guide:

```bash
cat packages/frameworks/kanban/README.md
cat packages/frameworks/kanban/IMPLEMENTATION_GUIDE.md
```

### 2. Run Installation Script (if applicable)

Some frameworks include installation scripts:

```bash
python packages/frameworks/kanban/scripts/install_kanban_framework.py \
    --kanban-path docs/project-management/kanban
```

### 3. Verify Installation

Check that all required files are present:

```bash
# Check MANIFEST.json for package info
python3 -c "import json; print(json.load(open('packages/frameworks/kanban/MANIFEST.json'))['framework_version'])"

# Verify key directories exist
test -d packages/frameworks/kanban/templates && echo "✅ Templates directory exists"
test -d packages/frameworks/kanban/scripts && echo "✅ Scripts directory exists"
```

---

## Updating Packages

To update an existing framework package:

### Option 1: Replace Entire Package

1. **Backup current installation** (optional):
   ```bash
   cp -r packages/frameworks/kanban packages/frameworks/kanban.backup
   ```

2. **Remove old package**:
   ```bash
   rm -rf packages/frameworks/kanban
   ```

3. **Download and install new version** (follow installation steps above)

4. **Review changelog**:
   ```bash
   cat packages/frameworks/kanban/CHANGELOG.md
   ```

### Option 2: In-Place Update (if framework supports it)

Some frameworks may include update scripts:

```bash
python packages/frameworks/kanban/scripts/update_kanban_framework.py \
    --from-version 1.0.0 \
    --to-version 2.0.0
```

---

## Troubleshooting

### Hash Verification Fails

**Problem:** `sha256sum -c` reports "FAILED"

**Solutions:**
1. Re-download the package and hash file
2. Verify you downloaded matching files (same version)
3. Check file integrity (file size matches GitHub release)
4. Ensure you're using the correct hash file for the package

**Example:**
```bash
# Check file sizes match GitHub release page
ls -lh kanban-v2.0.0.tar.gz kanban-v2.0.0.tar.gz.sha256

# Manually compute hash to verify
sha256sum kanban-v2.0.0.tar.gz
cat kanban-v2.0.0.tar.gz.sha256
# Compare hashes
```

### Package Extraction Errors

**Problem:** `tar -xzf` fails or produces errors

**Solutions:**
1. Verify package file is complete (not corrupted download)
2. Check available disk space
3. Ensure you have write permissions in destination directory
4. Verify package format (should be valid tar.gz)

**Example:**
```bash
# Test package integrity
gzip -t kanban-v2.0.0.tar.gz && echo "✅ Gzip valid"
tar -tzf kanban-v2.0.0.tar.gz | head -5  # List contents
```

### Missing MANIFEST.json

**Problem:** MANIFEST.json not found after extraction

**Solutions:**
1. Verify package structure (check if MANIFEST.json is in root or subdirectory)
2. Ensure package is from official GitHub Releases (not modified)
3. Re-extract package with verbose output

**Example:**
```bash
# Extract with verbose output
tar -xzvf kanban-v2.0.0.tar.gz -C packages/frameworks/

# Search for MANIFEST.json
find packages/frameworks/kanban -name "MANIFEST.json"
```

---

## Security Considerations

### Hash Verification

**Always verify package integrity** before extracting:
- SHA-256 hash verification protects against corruption and tampering
- Never skip hash verification, even in automated scripts
- Store hash files separately from package files when possible

### Source Verification

**Only download from official GitHub Releases**:
- Verify the GitHub repository is the official source
- Check release signatures or checksums on GitHub
- Be cautious of third-party mirrors or re-hosted packages

### Permissions

**Restrict file permissions** after installation:
```bash
# Remove execute permissions from scripts (if not needed)
chmod -x packages/frameworks/kanban/scripts/*.py

# Set appropriate directory permissions
chmod 755 packages/frameworks/kanban/
```

---

## Example: Complete Installation Workflow

```bash
#!/bin/bash
# Example: Install Kanban Framework v2.0.0

set -e  # Exit on error

FRAMEWORK="kanban"
VERSION="2.0.0"
REPO="ai-dev-kit/ai-dev-kit"
INSTALL_DIR="packages/frameworks"

# Create installation directory
mkdir -p "${INSTALL_DIR}"

# Download package and hash
echo "📥 Downloading ${FRAMEWORK} v${VERSION}..."
wget -q "https://github.com/${REPO}/releases/download/${FRAMEWORK}-v${VERSION}/${FRAMEWORK}-v${VERSION}.tar.gz"
wget -q "https://github.com/${REPO}/releases/download/${FRAMEWORK}-v${VERSION}/${FRAMEWORK}-v${VERSION}.tar.gz.sha256"

# Verify hash
echo "🔐 Verifying package integrity..."
if sha256sum -c "${FRAMEWORK}-v${VERSION}.tar.gz.sha256"; then
    echo "✅ Hash verification passed"
else
    echo "❌ Hash verification failed"
    exit 1
fi

# Extract package
echo "📦 Extracting package..."
tar -xzf "${FRAMEWORK}-v${VERSION}.tar.gz" -C "${INSTALL_DIR}/"

# Verify installation
if [ -f "${INSTALL_DIR}/${FRAMEWORK}/MANIFEST.json" ]; then
    echo "✅ Installation complete"
    echo "📄 Package location: ${INSTALL_DIR}/${FRAMEWORK}/"
else
    echo "❌ Installation verification failed"
    exit 1
fi

# Cleanup
rm "${FRAMEWORK}-v${VERSION}.tar.gz" "${FRAMEWORK}-v${VERSION}.tar.gz.sha256"

echo "🎉 ${FRAMEWORK} v${VERSION} installed successfully"
```

---

## Related Documentation

- **Package Management Design:** `docs/architecture/standards-and-adrs/package-management-design.md`
- **Hash Verification Spec:** `docs/architecture/standards-and-adrs/package-hash-verification-spec.md`
- **Framework README:** Framework-specific installation instructions
- **Implementation Guide:** Framework-specific implementation steps

---

## Support

For issues or questions:
1. Check framework-specific documentation
2. Review GitHub Issues: `https://github.com/ai-dev-kit/ai-dev-kit/issues`
3. Check troubleshooting section above

---

**Last Updated:** 2025-12-18  
**Version:** 1.0.0

