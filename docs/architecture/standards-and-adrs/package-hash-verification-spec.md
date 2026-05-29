# Package Hash Verification Specification

**Purpose:** Detailed specification for hash verification mechanism for AI Dev Kit framework packages  
**Date:** 2025-12-18  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Task:** E6:S06:T02 – Investigate proper package management  
**Related:** 
- `docs/Analysis/package-management-investigation-report.md`
- `docs/architecture/standards-and-adrs/package-management-design.md`

**Research Sources:**
- Industry standard checksum file formats (sha256sum)
- NIST SHA-256 specification
- Package distribution security best practices (2024)

---

## 1. Overview

This specification defines the **SHA-256 hash verification mechanism** for AI Dev Kit framework packages. Hash verification ensures package integrity, prevents tampering, and detects corruption during download/storage.

**Key Principles:**
- **Algorithm:** SHA-256 (Secure Hash Algorithm 256-bit)
- **Verification:** Mandatory before installation
- **Distribution:** Hash file separate from package file
- **Security:** Cryptographic integrity verification

---

## 2. Hash Algorithm: SHA-256

### 2.1 Algorithm Selection

**Selected Algorithm:** SHA-256 (SHA-2 family)

**Rationale:**
- ✅ Industry standard (NIST approved)
- ✅ Cryptographically secure (no known vulnerabilities)
- ✅ Fast computation (suitable for package files)
- ✅ Widely supported (built into most systems and languages)
- ✅ Future-proof (SHA-2 family, not deprecated)

**Algorithm Details:**
- **Output Size:** 256 bits (32 bytes)
- **Output Format:** Hexadecimal string (64 characters)
- **Block Size:** 512 bits
- **Security Level:** 128 bits (secure against collision attacks)

### 2.2 Alternative Algorithms Considered

**SHA-1:**
- ❌ Deprecated (collision vulnerabilities discovered)
- ❌ Not recommended for security-critical applications

**SHA-512:**
- ⚠️ Overkill for this use case (SHA-256 sufficient)
- ⚠️ Larger hash size (128 characters vs 64)
- ⚠️ No security advantage for package verification

**MD5:**
- ❌ Broken (collision attacks demonstrated)
- ❌ Not recommended for any security purposes

**BLAKE2:**
- ⚠️ Newer algorithm (less widely supported)
- ⚠️ SHA-256 sufficient for this use case
- ⚠️ No significant advantages

**Decision:** ✅ **SHA-256** is the optimal choice

---

## 3. Hash Computation

### 3.1 Hash Target

**What Gets Hashed:**
- The **entire package file** (tar.gz archive)
- After package creation is complete
- Before distribution

**Hash Computation:**
```python
import hashlib

def compute_package_hash(package_path: Path) -> str:
    """Compute SHA-256 hash of package file."""
    sha256 = hashlib.sha256()
    
    with open(package_path, 'rb') as f:
        # Read file in chunks for memory efficiency
        for chunk in iter(lambda: f.read(4096), b''):
            sha256.update(chunk)
    
    return sha256.hexdigest()
```

### 3.2 Hash Format

**Output Format:** Hexadecimal string (lowercase)

**Length:** 64 characters

**Example:**
```
a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8
```

**Note:** Use lowercase hexadecimal (standard convention)

### 3.3 Hash Computation Timing

**When to Compute:**
1. After package file creation (tar.gz archive)
2. Before distribution
3. Before hash file creation

**Process:**
```
1. Create tar.gz package file
   → kanban-v2.0.0.tar.gz

2. Compute SHA-256 hash of package file
   → a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8

3. Update MANIFEST.json with hash
   → (if manifest is separate)

4. Create hash file
   → kanban-v2.0.0.tar.gz.sha256
```

---

## 4. Hash File Format

### 4.1 Hash File Naming

**Format:**
```
{package-filename}.sha256
```

**Examples:**
- `kanban-v2.0.0.tar.gz.sha256`
- `workflow-mgmt-v2.1.0.tar.gz.sha256`
- `numbering-versioning-v1.5.0.tar.gz.sha256`

### 4.2 Hash File Content

**Format:** Standard checksum file format (compatible with `sha256sum`)

**Structure:**
```
{hash}  {filename}
```

**Fields:**
- `{hash}`: SHA-256 hash (64-character hexadecimal string)
- `{filename}`: Package filename (for verification)

**Example:**
```
a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8  kanban-v2.0.0.tar.gz
```

**Notes:**
- Two spaces between hash and filename (standard format)
- Filename matches package file exactly
- Single line (no trailing newline required, but allowed)

### 4.3 Hash File Creation

**Script:**
```python
def create_hash_file(package_path: Path, hash_value: str, output_dir: Path) -> Path:
    """Create hash file for package."""
    hash_filename = f"{package_path.name}.sha256"
    hash_path = output_dir / hash_filename
    
    with open(hash_path, 'w') as f:
        f.write(f"{hash_value}  {package_path.name}\n")
    
    return hash_path
```

---

## 5. Hash Distribution

### 5.1 Distribution Methods

**Primary Method: GitHub Releases**

**Structure:**
```
GitHub Release: kanban-v2.0.0
├── Assets:
│   ├── kanban-v2.0.0.tar.gz           (package file)
│   ├── kanban-v2.0.0.tar.gz.sha256    (hash file)
│   └── kanban-v2.0.0.zip              (optional: Windows format)
```

**Hash File as Release Asset:**
- Uploaded alongside package file
- Same location (redundancy)
- Easy to download together

**Alternative Methods (Future):**

1. **MANIFEST.json:**
   - Hash included in package manifest
   - Extracted after download
   - Verified against hash file

2. **Package Registry:**
   - Hash stored in registry metadata
   - API endpoint for hash lookup
   - Alternative source for verification

3. **Website/CDN:**
   - Hash files hosted separately
   - Alternative download source
   - Redundancy for distribution

### 5.2 Hash File Location

**Recommended Locations (in priority order):**

1. **GitHub Release Assets:** Primary (alongside package file)
2. **Package Manifest:** Secondary (inside package, for verification)
3. **Package Registry:** Tertiary (future, for API access)

**Redundancy:**
- Multiple distribution channels increase reliability
- If one source unavailable, others can be used
- Reduces single point of failure

---

## 6. Hash Verification Process

### 6.1 Verification Requirements

**Mandatory Verification:**
- ✅ Hash verification **MUST** be performed before installation
- ✅ Installation **MUST** be rejected if hash verification fails
- ✅ Clear error messages **MUST** be displayed on verification failure

**Verification Steps:**

1. **Download Package and Hash File:**
   ```bash
   wget https://github.com/.../kanban-v2.0.0.tar.gz
   wget https://github.com/.../kanban-v2.0.0.tar.gz.sha256
   ```

2. **Compute Hash of Downloaded Package:**
   ```bash
   sha256sum kanban-v2.0.0.tar.gz
   # Output: a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8  kanban-v2.0.0.tar.gz
   ```

3. **Read Published Hash from Hash File:**
   ```bash
   cat kanban-v2.0.0.tar.gz.sha256
   # Output: a3b5c7d9e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8  kanban-v2.0.0.tar.gz
   ```

4. **Compare Hashes:**
   - Extract hash from hash file (first field, before spaces)
   - Compare with computed hash
   - Verify filename matches

5. **Verify or Reject:**
   - ✅ **Match:** Verification successful, proceed with installation
   - ❌ **Mismatch:** Verification failed, reject installation, display error

### 6.2 Verification Implementation

**Python Implementation:**
```python
import hashlib
from pathlib import Path

def verify_package_hash(package_path: Path, hash_path: Path) -> bool:
    """
    Verify package integrity using SHA-256 hash.
    
    Args:
        package_path: Path to package file
        hash_path: Path to hash file
    
    Returns:
        True if verification succeeds, False otherwise
    
    Raises:
        SecurityError: If hash verification fails
    """
    # 1. Read published hash from hash file
    with open(hash_path, 'r') as f:
        hash_line = f.read().strip()
    
    # Parse hash file format: "{hash}  {filename}"
    parts = hash_line.split()
    if len(parts) < 2:
        raise ValueError(f"Invalid hash file format: {hash_path}")
    
    published_hash = parts[0].lower()  # Extract hash (first field)
    expected_filename = parts[1]  # Extract filename (second field)
    
    # Verify filename matches
    if package_path.name != expected_filename:
        raise ValueError(
            f"Hash file filename mismatch: "
            f"expected '{expected_filename}', got '{package_path.name}'"
        )
    
    # 2. Compute hash of downloaded package
    sha256 = hashlib.sha256()
    with open(package_path, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b''):
            sha256.update(chunk)
    computed_hash = sha256.hexdigest().lower()
    
    # 3. Compare hashes
    if computed_hash != published_hash:
        raise SecurityError(
            f"Hash verification failed!\n"
            f"Package: {package_path.name}\n"
            f"Expected: {published_hash}\n"
            f"Computed: {computed_hash}\n"
            f"\n"
            f"Possible causes:\n"
            f"  - Package corrupted during download\n"
            f"  - Package tampered with (security risk)\n"
            f"  - Hash file incorrect\n"
            f"\n"
            f"Action: Re-download package and hash file from trusted source."
        )
    
    # 4. Verification successful
    return True
```

**Shell Implementation (sha256sum):**
```bash
# Verify hash using sha256sum command
sha256sum -c kanban-v2.0.0.tar.gz.sha256

# Output if successful:
# kanban-v2.0.0.tar.gz: OK

# Output if failed:
# kanban-v2.0.0.tar.gz: FAILED
# sha256sum: WARNING: 1 computed checksum did NOT match
```

### 6.3 CLI Tool Integration

**Command:**
```bash
# Install with automatic hash verification
ai-dev-kit install kanban@2.0.0 --verify-hash

# Manual verification
ai-dev-kit verify kanban-v2.0.0.tar.gz
```

**CLI Tool Process:**
1. Download package file
2. Download hash file
3. Compute package hash
4. Read published hash from hash file
5. Compare hashes
6. Verify or reject installation

**Error Handling:**
- Display clear error messages
- Suggest re-downloading
- Log security incidents (optional)

---

## 7. Security Considerations

### 7.1 Threat Model

**Threats Addressed:**

1. **Package Tampering:**
   - **Threat:** Malicious modification of package files
   - **Mitigation:** SHA-256 hash verification detects any modification
   - **Severity:** HIGH

2. **Man-in-the-Middle Attacks:**
   - **Threat:** Interception and modification during download
   - **Mitigation:** HTTPS (GitHub), hash verification detects modification
   - **Severity:** MEDIUM

3. **Package Corruption:**
   - **Threat:** Accidental corruption during transfer/storage
   - **Mitigation:** Hash verification detects corruption
   - **Severity:** MEDIUM

4. **Hash File Tampering:**
   - **Threat:** Attacker modifies hash file to match tampered package
   - **Mitigation:** Download hash file from same trusted source (GitHub), HTTPS
   - **Severity:** MEDIUM (requires source compromise)

### 7.2 Security Measures

**Implemented:**

1. **HTTPS Downloads:**
   - All downloads via HTTPS (GitHub)
   - Prevents man-in-the-middle attacks on transport

2. **SHA-256 Hash Verification:**
   - Cryptographic integrity verification
   - Detects any modification to package file

3. **Separate Hash File:**
   - Hash file separate from package file
   - Redundancy (hash also in MANIFEST.json)

4. **Mandatory Verification:**
   - Hash verification required before installation
   - Installation rejected if verification fails

**Future Enhancements (Phase 3+):**

1. **Package Signing:**
   - PGP/GPG signatures on package files
   - Signature verification
   - Cryptographic authentication of package source

2. **Certificate-Based Trust:**
   - Certificate chain verification
   - Trusted certificate authority
   - Enhanced authentication

3. **Hash File Signing:**
   - Sign hash files with PGP/GPG
   - Verify hash file signatures
   - Prevent hash file tampering

### 7.3 Security Best Practices

**For Package Maintainers:**

1. **Hash Computation:**
   - Compute hash immediately after package creation
   - Verify hash before publishing
   - Store hash in version control

2. **Hash Distribution:**
   - Publish hash file alongside package file
   - Include hash in MANIFEST.json
   - Provide multiple distribution channels (redundancy)

3. **Security Procedures:**
   - Use secure channels for package creation
   - Verify package integrity before distribution
   - Monitor for hash mismatches (security incidents)

**For Package Consumers:**

1. **Hash Verification:**
   - Always verify hash before installation
   - Download hash file from same trusted source as package
   - Re-download if hash verification fails

2. **Security Awareness:**
   - Understand hash verification purpose
   - Report hash mismatches (security incidents)
   - Do not bypass hash verification

3. **Trust Source:**
   - Download only from trusted sources (GitHub releases)
   - Verify source authenticity (HTTPS, GitHub verified)
   - Be suspicious of hash mismatches

---

## 8. Error Handling

### 8.1 Hash Mismatch Errors

**Error:** Hash verification fails (computed hash ≠ published hash)

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

⚠️  WARNING: Do not install this package. It may be corrupted or maliciously modified.
```

**Handling:**
- Reject package installation
- Display clear error message
- Suggest re-downloading
- Log security incident (optional)

### 8.2 Hash File Errors

**Error:** Hash file missing or invalid format

**Error Message:**
```
❌ ERROR: Hash file not found or invalid format

Expected: kanban-v2.0.0.tar.gz.sha256
Location: /path/to/hash/file

Action: Download hash file from trusted source.
```

**Handling:**
- Reject installation if hash file missing
- Display clear error message
- Provide hash file download instructions

### 8.3 Hash Computation Errors

**Error:** Cannot compute hash (file access, permissions, etc.)

**Error Message:**
```
❌ ERROR: Cannot compute package hash

Package: kanban-v2.0.0.tar.gz
Reason: Permission denied / File not found / etc.

Action: Check file permissions and package file location.
```

**Handling:**
- Display clear error message
- Provide troubleshooting guidance

---

## 9. Testing Requirements

### 9.1 Hash Computation Tests

- ✅ Hash computed correctly for valid package
- ✅ Hash consistent across multiple computations
- ✅ Hash different for modified package
- ✅ Hash computation handles large files efficiently

### 9.2 Hash Verification Tests

- ✅ Verification succeeds for valid package and hash
- ✅ Verification fails for corrupted package
- ✅ Verification fails for tampered package
- ✅ Verification fails for incorrect hash file
- ✅ Verification fails for missing hash file

### 9.3 Error Handling Tests

- ✅ Clear error messages for hash mismatch
- ✅ Clear error messages for missing hash file
- ✅ Clear error messages for invalid hash file format
- ✅ Installation rejection on verification failure

### 9.4 Security Tests

- ✅ Tampered package detected
- ✅ Corrupted package detected
- ✅ Hash file tampering detected (if possible)
- ✅ Verification cannot be bypassed

---

## 10. Implementation Examples

### 10.1 Package Builder Integration

**Package Creation with Hash:**
```python
def create_package_with_hash(framework_name, version):
    # 1. Create package file
    package_path = create_tar_gz(framework_name, version)
    
    # 2. Compute hash
    hash_value = compute_sha256(package_path)
    
    # 3. Create hash file
    hash_path = create_hash_file(package_path, hash_value)
    
    # 4. Update MANIFEST.json with hash
    update_manifest_hash(package_path, hash_value)
    
    return package_path, hash_path, hash_value
```

### 10.2 CLI Tool Integration

**Installation with Hash Verification:**
```python
def install_with_verification(framework_name, version):
    # 1. Download package and hash file
    package_path = download_package(framework_name, version)
    hash_path = download_hash_file(framework_name, version)
    
    # 2. Verify hash
    try:
        verify_package_hash(package_path, hash_path)
    except SecurityError as e:
        print(f"❌ {e}")
        return False
    
    # 3. Extract and install
    extract_package(package_path)
    install_framework(framework_name, version)
    
    return True
```

---

## References

- **Investigation Report:** `docs/Analysis/package-management-investigation-report.md`
- **Package Management Design:** `docs/architecture/standards-and-adrs/package-management-design.md`
- **SHA-256 Specification:** https://csrc.nist.gov/publications/detail/fips/180/4/final
- **Checksum File Format:** https://www.gnu.org/software/coreutils/manual/html_node/md5sum-invocation.html

---

**Status:** ✅ Hash Verification Specification Complete  
**Next Step:** Implementation (E6:S06:T04)

