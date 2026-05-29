# Package Management Design Specification

**Purpose:** Detailed design specification for AI Dev Kit framework package management system  
**Date:** 2025-12-18  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Task:** E6:S06:T02 – Investigate proper package management  
**Related:** `docs/Analysis/package-management-investigation-report.md`

**Research Sources:**
- Industry package management best practices
- tar.gz distribution patterns
- GitHub Releases workflows
- Manifest.json metadata standards

---

## 1. Overview

This specification defines the design for distributing AI Dev Kit frameworks as **single package files** (tar.gz archives) with **SHA-256 hash verification**. The package management system enables distribution without Git dependency, better security, and easier installation/updates.

**Key Design Decisions:**
- **Package Format:** tar.gz (gzip-compressed tar archive)
- **Hash Algorithm:** SHA-256
- **Distribution:** GitHub Releases
- **Manifest:** MANIFEST.json (JSON metadata)

---

## 2. Package Structure

### 2.1 Package File Naming

**Format:**
```
{framework-name}-{version}.tar.gz
```

**Examples:**
- `kanban-v2.0.0.tar.gz`
- `workflow-mgmt-v2.1.0.tar.gz`
- `numbering-versioning-v1.5.0.tar.gz`

**Conventions:**
- Framework name: lowercase, hyphenated (e.g., `workflow-mgmt`)
- Version: Semantic Versioning format (e.g., `v2.0.0`)
- Extension: `.tar.gz` (standard gzip-compressed tar)

### 2.2 Package Archive Structure

**Root Level:**
```
{package-file}.tar.gz
├── {framework-name}/          # Framework root directory
│   ├── README.md
│   ├── PACKAGE_OVERVIEW.md
│   ├── IMPLEMENTATION_GUIDE.md
│   ├── CHANGELOG.md
│   ├── VERSION                # Optional: version file
│   ├── templates/
│   ├── policies/
│   ├── scripts/
│   ├── docs/
│   └── ...                    # Other framework files
└── MANIFEST.json              # Package metadata (at archive root)
```

**Important:** The package archive root contains two items:
1. `{framework-name}/` directory (framework files)
2. `MANIFEST.json` file (package metadata)

When extracted, the result should be:
```
extracted/
├── {framework-name}/
│   └── ... (framework files)
└── MANIFEST.json
```

### 2.3 Framework Directory Structure

**Framework Root:** `{framework-name}/`

**Required Files:**
- `README.md` - Framework overview and quick start
- `PACKAGE_OVERVIEW.md` - Package structure and contents
- `IMPLEMENTATION_GUIDE.md` - Installation and integration guide

**Optional Files:**
- `CHANGELOG.md` - Framework changelog
- `VERSION` - Version file (optional, can use MANIFEST.json)

**Standard Directories:**
- `templates/` - Template files (Epic, Story, Task templates)
- `policies/` - Policy documents (governance, standards)
- `scripts/` - Installation and maintenance scripts
- `docs/` - Additional documentation
- `examples/` - Example implementations
- `integration/` - Integration guides with other frameworks

**Preserved Structure:**
- All directory structure preserved
- All file permissions preserved (important for executable scripts)
- All file metadata preserved (if tar supports)

---

## 3. Package Manifest (MANIFEST.json)

### 3.1 Manifest Location

**Location:** Root of tar.gz archive (alongside `{framework-name}/` directory)

**Purpose:**
- Package metadata for verification
- Version information
- Installation instructions
- Framework dependencies
- Package integrity information

### 3.2 Manifest Schema

**Schema Version:** `1.0.0`

**Full Schema:**
```json
{
  "package_format_version": "1.0.0",
  "framework_name": "kanban",
  "framework_version": "2.0.0",
  "semver": {
    "major": 2,
    "minor": 0,
    "patch": 0
  },
  "package_hash": {
    "algorithm": "SHA-256",
    "hash": "a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8",
    "file": "kanban-v2.0.0.tar.gz"
  },
  "created_at": "2025-12-18T12:00:00Z",
  "created_by": "ai-dev-kit",
  "framework_dependencies": [],
  "contents": {
    "files": 245,
    "directories": 42,
    "total_size_bytes": 2456789,
    "compressed_size_bytes": 456789
  },
  "installation": {
    "entry_point": "README.md",
    "install_script": "scripts/install_kanban_framework.py",
    "requirements": {
      "python": ">=3.8"
    }
  },
  "changelog": "CHANGELOG.md",
  "documentation": {
    "overview": "PACKAGE_OVERVIEW.md",
    "implementation": "IMPLEMENTATION_GUIDE.md",
    "policies": "policies/"
  }
}
```

### 3.3 Manifest Fields

#### Required Fields

**`package_format_version`** (string)
- Version of package format schema
- Format: Semantic Versioning (e.g., "1.0.0")
- Purpose: Schema versioning for future compatibility

**`framework_name`** (string)
- Framework identifier
- Format: lowercase, hyphenated (e.g., "kanban", "workflow-mgmt")
- Must match package filename prefix

**`framework_version`** (string)
- Framework version
- Format: Semantic Versioning (e.g., "2.0.0")
- Must match package filename version

**`semver`** (object)
- Structured semantic version
- Fields:
  - `major` (integer): Major version number
  - `minor` (integer): Minor version number
  - `patch` (integer): Patch version number

**`package_hash`** (object)
- Package file hash information
- Fields:
  - `algorithm` (string): Hash algorithm (e.g., "SHA-256")
  - `hash` (string): Hexadecimal hash value
  - `file` (string): Package filename (for verification)

**`created_at`** (string)
- Package creation timestamp
- Format: ISO 8601 (e.g., "2025-12-18T12:00:00Z")

**`created_by`** (string)
- Package creator identifier
- Example: "ai-dev-kit"

#### Optional Fields

**`framework_dependencies`** (array)
- List of other frameworks required
- Format: Array of framework names
- Example: `["numbering-versioning"]`
- Currently empty (frameworks are independent)

**`contents`** (object)
- Package contents statistics
- Fields:
  - `files` (integer): Number of files
  - `directories` (integer): Number of directories
  - `total_size_bytes` (integer): Uncompressed size
  - `compressed_size_bytes` (integer): Compressed size

**`installation`** (object)
- Installation instructions
- Fields:
  - `entry_point` (string): Entry point file (e.g., "README.md")
  - `install_script` (string): Installation script path (optional)
  - `requirements` (object): Installation requirements (optional)

**`changelog`** (string)
- Path to changelog file
- Example: "CHANGELOG.md"

**`documentation`** (object)
- Documentation paths
- Fields:
  - `overview` (string): Overview document path
  - `implementation` (string): Implementation guide path
  - `policies` (string): Policies directory path

---

## 4. Package Creation Process

### 4.1 Source Location

**Framework Source:** `packages/frameworks/{framework-name}/`

**Package Output:** `packages/dist/{framework-name}-{version}.tar.gz`

### 4.2 Package Builder Script

**Script Location:** `packages/frameworks/workflow mgt/scripts/package_builder.py`

**Function:**
```python
def create_package(
    framework_name: str,
    version: str,
    source_dir: Path,
    output_dir: Path
) -> tuple[Path, str]:
    """
    Create package file and compute hash.
    
    Args:
        framework_name: Framework identifier (e.g., "kanban")
        version: Framework version (e.g., "2.0.0")
        source_dir: Source directory (packages/frameworks/{framework-name})
        output_dir: Output directory for package files
    
    Returns:
        Tuple of (package_path, hash_value)
    """
    pass
```

**Process:**

1. **Validate Inputs:**
   - Verify framework_name matches source directory
   - Verify version format (Semantic Versioning)
   - Verify source directory exists and contains framework files

2. **Create Temporary Directory:**
   - Create temp directory for package assembly
   - Copy framework files to `{framework-name}/` subdirectory
   - Generate MANIFEST.json at temp root

3. **Generate MANIFEST.json:**
   - Extract metadata from framework files
   - Compute content statistics
   - Set creation timestamp
   - Set package creator

4. **Create tar.gz Archive:**
   - Archive temp directory contents
   - Compress with gzip
   - Name: `{framework-name}-{version}.tar.gz`
   - Preserve file permissions

5. **Compute SHA-256 Hash:**
   - Read package file
   - Compute SHA-256 hash
   - Format: Hexadecimal string

6. **Update MANIFEST.json:**
   - Add package_hash field to manifest
   - Write updated manifest to archive (requires re-archiving)

7. **Create Hash File:**
   - Create `.sha256` file
   - Format: `{hash}  {filename}\n`
   - Save to output directory

8. **Cleanup:**
   - Remove temporary directory
   - Return package path and hash

### 4.3 Integration with Release Workflow

**RW Integration (Future):**

**Step:** Package Creation (after changelog, before push)

**Process:**
1. Detect framework changes in release
2. For each changed framework:
   - Run package builder
   - Create package file
   - Compute hash
   - Create hash file
3. Stage package files (for manual upload to GitHub releases)
4. Or: Automatically upload to GitHub releases via API

**GitHub Release Assets:**
- `{framework-name}-{version}.tar.gz` - Package file
- `{framework-name}-{version}.tar.gz.sha256` - Hash file
- Optional: `{framework-name}-{version}.zip` - Windows format

---

## 5. Package Installation Process

### 5.1 Manual Installation

**Steps:**

1. **Download Package:**
   ```bash
   wget https://github.com/earlution/ai-dev-kit/releases/download/kanban-v2.0.0/kanban-v2.0.0.tar.gz
   ```

2. **Download Hash File:**
   ```bash
   wget https://github.com/earlution/ai-dev-kit/releases/download/kanban-v2.0.0/kanban-v2.0.0.tar.gz.sha256
   ```

3. **Verify Hash:**
   ```bash
   sha256sum -c kanban-v2.0.0.tar.gz.sha256
   # Output: kanban-v2.0.0.tar.gz: OK
   ```

4. **Extract Package:**
   ```bash
   tar -xzf kanban-v2.0.0.tar.gz
   ```

5. **Install Framework:**
   ```bash
   cp -r kanban packages/frameworks/
   # Or use installer script if available
   python kanban/scripts/install_kanban_framework.py
   ```

### 5.2 CLI Tool Installation (Future)

**Command:**
```bash
ai-dev-kit install kanban@2.0.0 --backend package-file
```

**Process:**
1. Download package and hash file
2. Verify hash automatically
3. Extract package
4. Install framework (copy to target location)
5. Verify installation

---

## 6. Package Update Process

### 6.1 Update Detection

**Methods:**

1. **CLI Tool:**
   ```bash
   ai-dev-kit check
   # Output:
   # Available Updates:
   #   kanban: v2.0.0 → v2.1.0 (minor update)
   ```

2. **GitHub Releases API:**
   - Query GitHub releases for latest version
   - Compare with installed version
   - Notify user of updates

3. **Manual Check:**
   - Visit GitHub releases page
   - Compare versions

### 6.2 Update Process

**Steps:**

1. **Backup Current Framework:**
   ```bash
   cp -r packages/frameworks/kanban packages/frameworks/kanban.backup
   ```

2. **Download New Package:**
   ```bash
   wget https://github.com/earlution/ai-dev-kit/releases/download/kanban-v2.1.0/kanban-v2.1.0.tar.gz
   wget https://github.com/earlution/ai-dev-kit/releases/download/kanban-v2.1.0/kanban-v2.1.0.tar.gz.sha256
   ```

3. **Verify Hash:**
   ```bash
   sha256sum -c kanban-v2.1.0.tar.gz.sha256
   ```

4. **Extract Package:**
   ```bash
   tar -xzf kanban-v2.1.0.tar.gz
   ```

5. **Install New Version:**
   ```bash
   rm -rf packages/frameworks/kanban
   cp -r kanban packages/frameworks/
   ```

6. **Run Migration Scripts (if needed):**
   ```bash
   python packages/frameworks/kanban/scripts/migrate_v2.0_to_v2.1.py
   ```

7. **Verify Installation:**
   - Check framework files
   - Run validation scripts
   - Test framework functionality

8. **Rollback (if needed):**
   ```bash
   rm -rf packages/frameworks/kanban
   cp -r packages/frameworks/kanban.backup packages/frameworks/kanban
   ```

---

## 7. Error Handling

### 7.1 Hash Verification Failures

**Error:** Hash mismatch

**Handling:**
- Reject package installation
- Display clear error message
- Suggest re-downloading package
- Log security incident (optional)

**Error Message:**
```
❌ SECURITY ERROR: Package hash verification failed!

Package: kanban-v2.0.0.tar.gz
Expected hash: a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8
Computed hash: x1y2z3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p9q0r1s2t3u4v5w6x7y8z9a0b1

Possible causes:
  - Package file corrupted during download
  - Package file tampered with (security risk)
  - Hash file incorrect

Action: Re-download package and hash file from trusted source.
```

### 7.2 Package Extraction Failures

**Error:** Archive corruption or invalid format

**Handling:**
- Reject package installation
- Display clear error message
- Suggest re-downloading package

### 7.3 Installation Failures

**Error:** Framework installation fails (permissions, disk space, etc.)

**Handling:**
- Rollback to previous version (if backup exists)
- Display clear error message
- Provide troubleshooting guidance

---

## 8. Implementation Details

### 8.1 Package Builder Implementation

**Script:** `packages/frameworks/workflow mgt/scripts/package_builder.py`

**Dependencies:**
- Python 3.8+
- Standard library: `tarfile`, `hashlib`, `json`, `pathlib`

**Usage:**
```bash
python package_builder.py kanban 2.0.0
```

**Output:**
- `packages/dist/kanban-v2.0.0.tar.gz`
- `packages/dist/kanban-v2.0.0.tar.gz.sha256`

### 8.2 CLI Tool Package Backend (Future)

**Backend Module:** `cli/backends/package_file.py`

**Functions:**
- `install(framework, version)` - Download, verify, extract, install
- `update(framework)` - Check for updates, download, verify, install
- `verify(package_path, hash_path)` - Verify package hash
- `list_available()` - List available framework versions

---

## 9. Testing Requirements

### 9.1 Package Creation Tests

- ✅ Package file created successfully
- ✅ MANIFEST.json included and valid
- ✅ Framework files included and complete
- ✅ File permissions preserved
- ✅ Directory structure preserved
- ✅ Package size reasonable

### 9.2 Hash Verification Tests

- ✅ Hash computed correctly
- ✅ Hash file created correctly
- ✅ Hash verification succeeds for valid package
- ✅ Hash verification fails for corrupted package
- ✅ Hash verification fails for tampered package

### 9.3 Installation Tests

- ✅ Package extracts correctly
- ✅ Framework installs correctly
- ✅ Installation verification passes
- ✅ Rollback works correctly

### 9.4 Update Tests

- ✅ Update detection works
- ✅ Update process completes successfully
- ✅ Migration scripts run (if needed)
- ✅ Rollback works if update fails

---

## References

- **Investigation Report:** `docs/Analysis/package-management-investigation-report.md`
- **Hash Verification Spec:** `docs/architecture/standards-and-adrs/package-hash-verification-spec.md`
- **Framework Dependency Architecture:** `docs/architecture/standards-and-adrs/framework-dependency-architecture.md`

---

**Status:** ✅ Design Specification Complete  
**Next Step:** Implementation (E6:S06:T04)

