#!/usr/bin/env python3
"""
Package Builder Script for AI Dev Kit Frameworks

Creates tar.gz package files from framework source with MANIFEST.json and SHA-256 hash verification.

Usage:
    python build_package.py <framework-name> <version> [--output-dir <dir>] [--framework-dir <dir>]

Example:
    python build_package.py kanban 2.0.0 --output-dir ./packages
    python build_package.py "workflow mgt" 2.1.0
"""

import argparse
import json
import hashlib
import tarfile
import sys
import os
import tempfile
import shutil
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Optional


def parse_arguments() -> argparse.Namespace:
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description="Build tar.gz package from framework source",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    
    parser.add_argument(
        "framework_name",
        help="Name of the framework (e.g., 'kanban', 'workflow mgt')"
    )
    
    parser.add_argument(
        "version",
        help="Framework version (e.g., '2.0.0')"
    )
    
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path.cwd(),
        help="Output directory for package files (default: current directory)"
    )
    
    parser.add_argument(
        "--framework-dir",
        type=Path,
        default=None,
        help="Framework source directory (default: auto-detect from framework name)"
    )
    
    parser.add_argument(
        "--frameworks-root",
        type=Path,
        default=Path(__file__).parent.parent.parent,  # packages/frameworks/
        help="Root directory containing all frameworks (default: packages/frameworks/)"
    )
    
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Enable verbose output"
    )
    
    return parser.parse_args()


def validate_framework_name(framework_name: str) -> str:
    """Validate and normalize framework name."""
    if not framework_name or not framework_name.strip():
        raise ValueError("Framework name cannot be empty")
    
    # Normalize framework name (handle spaces, case)
    normalized = framework_name.strip()
    
    return normalized


def validate_version(version: str) -> str:
    """Validate version format (Semantic Versioning)."""
    if not version or not version.strip():
        raise ValueError("Version cannot be empty")
    
    version = version.strip()
    
    # Basic semantic version validation (major.minor.patch)
    parts = version.split('.')
    if len(parts) != 3:
        raise ValueError(f"Invalid version format: {version}. Expected format: major.minor.patch (e.g., 2.0.0)")
    
    for part in parts:
        if not part.isdigit():
            raise ValueError(f"Invalid version format: {version}. Version parts must be numeric")
    
    return version


def find_framework_directory(framework_name: str, frameworks_root: Path) -> Path:
    """Find framework directory by name."""
    frameworks_root = frameworks_root.resolve()
    
    # Direct match
    framework_dir = frameworks_root / framework_name
    if framework_dir.exists() and framework_dir.is_dir():
        return framework_dir
    
    # Try case-insensitive match
    for item in frameworks_root.iterdir():
        if item.is_dir() and item.name.lower() == framework_name.lower():
            return item
    
    # Try partial match (e.g., "workflow mgt" -> "workflow mgt" directory)
    for item in frameworks_root.iterdir():
        if item.is_dir() and framework_name.lower() in item.name.lower():
            return item
    
    raise FileNotFoundError(
        f"Framework '{framework_name}' not found in {frameworks_root}. "
        f"Available frameworks: {[d.name for d in frameworks_root.iterdir() if d.is_dir()]}"
    )


def validate_framework_structure(framework_dir: Path) -> None:
    """Validate that framework directory has required structure."""
    if not framework_dir.exists():
        raise FileNotFoundError(f"Framework directory does not exist: {framework_dir}")
    
    if not framework_dir.is_dir():
        raise ValueError(f"Framework path is not a directory: {framework_dir}")
    
    # Check for required files (optional - frameworks may have different structures)
    # This is just a basic validation
    required_files = ["README.md"]  # Most frameworks should have README
    missing_files = []
    
    for required_file in required_files:
        if not (framework_dir / required_file).exists():
            missing_files.append(required_file)
    
    if missing_files:
        # Warning, not error - some frameworks might not have all files
        print(f"Warning: Framework directory missing some expected files: {missing_files}", file=sys.stderr)


def collect_framework_files(framework_dir: Path) -> List[Path]:
    """Collect all files from framework directory, preserving directory structure."""
    files = []
    
    for root, dirs, filenames in os.walk(framework_dir):
        # Skip hidden directories and common ignore patterns
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ['__pycache__', 'node_modules']]
        
        for filename in filenames:
            # Skip hidden files and common ignore patterns
            if filename.startswith('.'):
                continue
            
            file_path = Path(root) / filename
            files.append(file_path)
    
    return sorted(files)


def extract_framework_metadata(framework_dir: Path, framework_name: str, version: str) -> Dict:
    """Extract framework metadata from source files."""
    metadata = {
        "framework_name": framework_name,
        "framework_version": version,
    }
    
    # Try to extract additional metadata from README
    readme_path = framework_dir / "README.md"
    if readme_path.exists():
        try:
            readme_content = readme_path.read_text(encoding='utf-8')
            # Extract first line or title if available
            lines = readme_content.split('\n')
            if lines:
                first_line = lines[0].strip()
                if first_line and not first_line.startswith('#'):
                    metadata["description"] = first_line[:200]  # Limit length
        except Exception:
            pass  # Ignore errors in metadata extraction
    
    return metadata


def calculate_package_contents(files: List[Path], framework_dir: Path) -> Dict:
    """Calculate package contents statistics."""
    total_size = sum(f.stat().st_size for f in files if f.is_file())
    
    # Count directories (unique directory paths)
    directories = set()
    for file_path in files:
        parent = file_path.parent
        while parent != framework_dir and parent != framework_dir.parent:
            directories.add(parent)
            parent = parent.parent
    
    return {
        "files": len([f for f in files if f.is_file()]),
        "directories": len(directories),
        "total_size_bytes": total_size,
    }


def generate_manifest_json(
    framework_name: str,
    version: str,
    package_filename: str,
    files: List[Path],
    framework_dir: Path,
    package_hash: Optional[str] = None
) -> Dict:
    """Generate MANIFEST.json with package metadata."""
    # Parse semantic version
    version_parts = version.split('.')
    semver = {
        "major": int(version_parts[0]),
        "minor": int(version_parts[1]),
        "patch": int(version_parts[2])
    }
    
    # Extract framework metadata
    framework_metadata = extract_framework_metadata(framework_dir, framework_name, version)
    
    # Calculate package contents
    contents = calculate_package_contents(files, framework_dir)
    
    # Build manifest
    manifest = {
        "package_format_version": "1.0.0",
        "framework_name": framework_name,
        "framework_version": version,
        "semver": semver,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "created_by": "ai-dev-kit",
        "framework_dependencies": [],  # TODO: Extract from framework if available
        "contents": contents,
    }
    
    # Add package hash if provided (will be added after hash computation)
    if package_hash:
        manifest["package_hash"] = {
            "algorithm": "SHA-256",
            "hash": package_hash,
            "file": package_filename
        }
    
    # Add installation info if available
    install_script = framework_dir / "scripts" / f"install_{framework_name.lower().replace(' ', '_')}_framework.py"
    if install_script.exists():
        manifest["installation"] = {
            "entry_point": "README.md",
            "install_script": f"scripts/{install_script.name}",
            "requirements": {
                "python": ">=3.8"
            }
        }
    
    # Add documentation paths if available
    docs = {}
    if (framework_dir / "README.md").exists():
        docs["overview"] = "README.md"
    if (framework_dir / "IMPLEMENTATION_GUIDE.md").exists():
        docs["implementation"] = "IMPLEMENTATION_GUIDE.md"
    if (framework_dir / "PACKAGE_OVERVIEW.md").exists():
        docs["package_overview"] = "PACKAGE_OVERVIEW.md"
    if (framework_dir / "CHANGELOG.md").exists():
        manifest["changelog"] = "CHANGELOG.md"
    if docs:
        manifest["documentation"] = docs
    
    return manifest


def compute_sha256_hash(file_path: Path) -> str:
    """
    Compute SHA-256 hash of a file.
    
    Returns hexadecimal hash string (64 characters).
    """
    sha256 = hashlib.sha256()
    
    with open(file_path, 'rb') as f:
        # Read file in chunks for memory efficiency
        for chunk in iter(lambda: f.read(4096), b''):
            sha256.update(chunk)
    
    return sha256.hexdigest()


def create_hash_file(package_path: Path, package_hash: str) -> Path:
    """
    Create SHA-256 hash file in standard sha256sum format.
    
    Format: {hash}  {filename}
    Example: a3b5c7d9...  kanban-v2.0.0.tar.gz
    
    Returns path to hash file.
    """
    hash_file_path = package_path.parent / f"{package_path.name}.sha256"
    
    # Standard sha256sum format: {hash}  {filename} (two spaces)
    hash_content = f"{package_hash}  {package_path.name}\n"
    
    hash_file_path.write_text(hash_content, encoding='utf-8')
    
    return hash_file_path


def update_manifest_hash(manifest: Dict, package_hash: str, package_filename: str) -> Dict:
    """Update manifest with package hash information."""
    manifest["package_hash"] = {
        "algorithm": "SHA-256",
        "hash": package_hash,
        "file": package_filename
    }
    return manifest


def add_manifest_to_archive(package_path: Path, manifest: Dict) -> None:
    """Add MANIFEST.json to existing tar.gz archive."""
    # Create temporary directory for manifest
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_manifest = Path(temp_dir) / "MANIFEST.json"
        temp_manifest.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding='utf-8')
        
        # Open existing archive and add manifest
        temp_package = Path(temp_dir) / package_path.name
        shutil.copy(package_path, temp_package)
        
        with tarfile.open(temp_package, 'a:gz') as tar:
            tar.add(temp_manifest, arcname="MANIFEST.json")
        
        # Replace original with updated package
        shutil.move(temp_package, package_path)


def create_tar_gz_archive(
    framework_dir: Path,
    framework_name: str,
    version: str,
    output_dir: Path,
    files: List[Path]
) -> Path:
    """
    Create tar.gz archive from framework files.
    
    Package structure:
    - {framework-name}/ (framework files)
    
    Note: MANIFEST.json will be added separately after archive creation.
    """
    # Normalize framework name for filename (lowercase, replace spaces with hyphens)
    normalized_name = framework_name.lower().replace(' ', '-')
    package_filename = f"{normalized_name}-v{version}.tar.gz"
    package_path = output_dir / package_filename
    
    # Create tar.gz archive
    with tarfile.open(package_path, 'w:gz') as tar:
        # Get framework directory name (for archive root)
        framework_archive_name = framework_dir.name
        
        # Add all files to archive, preserving directory structure
        for file_path in files:
            # Calculate archive path (relative to framework root)
            arcname = framework_archive_name / file_path.relative_to(framework_dir)
            
            # Add file to archive, preserving permissions and metadata
            tar.add(file_path, arcname=arcname, recursive=False)
    
    return package_path


def main() -> int:
    """Main execution function."""
    try:
        # Parse arguments
        args = parse_arguments()
        
        # Validate arguments
        framework_name = validate_framework_name(args.framework_name)
        version = validate_version(args.version)
        
        # Resolve paths
        output_dir = args.output_dir.resolve()
        output_dir.mkdir(parents=True, exist_ok=True)
        
        frameworks_root = args.frameworks_root.resolve()
        
        # Find framework directory
        if args.framework_dir:
            framework_dir = Path(args.framework_dir).resolve()
        else:
            framework_dir = find_framework_directory(framework_name, frameworks_root)
        
        # Validate framework structure
        validate_framework_structure(framework_dir)
        
        if args.verbose:
            print(f"Framework: {framework_name}")
            print(f"Version: {version}")
            print(f"Framework directory: {framework_dir}")
            print(f"Output directory: {output_dir}")
        
        # Phase 3.1.1.2: Package Archive Creation (tar.gz)
        if args.verbose:
            print("\n📦 Collecting framework files...")
        
        files = collect_framework_files(framework_dir)
        
        if args.verbose:
            print(f"   Found {len(files)} files")
        
        if not files:
            raise ValueError(f"No files found in framework directory: {framework_dir}")
        
        # Create tar.gz archive
        if args.verbose:
            print(f"\n📦 Creating tar.gz archive...")
        
        package_path = create_tar_gz_archive(
            framework_dir=framework_dir,
            framework_name=framework_name,
            version=version,
            output_dir=output_dir,
            files=files
        )
        
        package_size = package_path.stat().st_size
        
        if args.verbose:
            print(f"   Package created: {package_path}")
            print(f"   Package size: {package_size:,} bytes ({package_size / 1024 / 1024:.2f} MB)")
        
        # Phase 3.1.1.3: MANIFEST.json Generation (initial, without hash)
        if args.verbose:
            print(f"\n📄 Generating MANIFEST.json...")
        
        package_filename = package_path.name
        manifest = generate_manifest_json(
            framework_name=framework_name,
            version=version,
            package_filename=package_filename,
            files=files,
            framework_dir=framework_dir,
            package_hash=None  # Will be added after hash computation
        )
        
        # Add manifest to archive
        add_manifest_to_archive(package_path, manifest)
        
        if args.verbose:
            print(f"   MANIFEST.json generated and added to package")
            print(f"   Files: {manifest['contents']['files']}, Directories: {manifest['contents']['directories']}")
            print(f"   Total size: {manifest['contents']['total_size_bytes']:,} bytes")
        
        # Phase 3.1.1.4: SHA-256 Hash Computation (after manifest added)
        if args.verbose:
            print(f"\n🔐 Computing SHA-256 hash...")
        
        package_hash = compute_sha256_hash(package_path)
        
        if args.verbose:
            print(f"   Hash computed: {package_hash[:16]}...{package_hash[-16:]}")
        
        # Update manifest with hash and re-add to archive
        manifest = update_manifest_hash(manifest, package_hash, package_filename)
        add_manifest_to_archive(package_path, manifest)
        
        if args.verbose:
            print(f"   MANIFEST.json updated with hash")
        
        # Create hash file
        hash_file_path = create_hash_file(package_path, package_hash)
        
        if args.verbose:
            print(f"   Hash file created: {hash_file_path.name}")
        
        # Final package size (after manifest updates)
        final_package_size = package_path.stat().st_size
        
        # Phase 3.1.1.5: Validation and Verification
        if args.verbose:
            print(f"\n🔍 Validating package...")
        
        validation_errors = []
        validation_warnings = []
        
        # Validate package file exists and is readable
        if not package_path.exists():
            validation_errors.append(f"Package file does not exist: {package_path}")
        elif not package_path.is_file():
            validation_errors.append(f"Package path is not a file: {package_path}")
        
        # Validate hash file exists and is readable
        if not hash_file_path.exists():
            validation_errors.append(f"Hash file does not exist: {hash_file_path}")
        elif not hash_file_path.is_file():
            validation_errors.append(f"Hash file path is not a file: {hash_file_path}")
        
        # Validate hash file format
        if hash_file_path.exists():
            try:
                hash_content = hash_file_path.read_text(encoding='utf-8').strip()
                if len(hash_content.split()) != 2:
                    validation_errors.append(f"Invalid hash file format: expected 'hash filename', got '{hash_content}'")
                else:
                    hash_in_file, filename_in_file = hash_content.split(None, 1)
                    if filename_in_file != package_filename:
                        validation_warnings.append(f"Hash file filename mismatch: expected '{package_filename}', got '{filename_in_file}'")
                    if hash_in_file != package_hash:
                        validation_errors.append(f"Hash file content mismatch: computed hash differs from file hash")
                    elif len(hash_in_file) != 64:
                        validation_errors.append(f"Invalid hash length: expected 64 characters, got {len(hash_in_file)}")
            except Exception as e:
                validation_errors.append(f"Error reading hash file: {e}")
        
        # Validate package can be extracted and MANIFEST.json is present
        try:
            with tarfile.open(package_path, 'r:gz') as tar:
                manifest_members = [m for m in tar.getmembers() if m.name == 'MANIFEST.json' or m.name.endswith('/MANIFEST.json')]
                if not manifest_members:
                    validation_errors.append("MANIFEST.json not found in package archive")
                else:
                    # Validate manifest JSON structure
                    manifest_member = manifest_members[0]
                    manifest_data = tar.extractfile(manifest_member)
                    if manifest_data:
                        try:
                            manifest_json = json.loads(manifest_data.read().decode('utf-8'))
                            # Validate required fields
                            required_fields = ['package_format_version', 'framework_name', 'framework_version', 'semver', 'created_at', 'created_by', 'contents']
                            for field in required_fields:
                                if field not in manifest_json:
                                    validation_errors.append(f"MANIFEST.json missing required field: {field}")
                            
                            # Validate hash in manifest matches computed hash
                            if 'package_hash' in manifest_json:
                                manifest_hash = manifest_json['package_hash'].get('hash', '')
                                if manifest_hash != package_hash:
                                    validation_errors.append(f"Manifest hash mismatch: manifest has '{manifest_hash[:16]}...', computed '{package_hash[:16]}...'")
                            
                            # Validate framework name and version match
                            if manifest_json.get('framework_name') != framework_name:
                                validation_warnings.append(f"Framework name mismatch: manifest has '{manifest_json.get('framework_name')}', expected '{framework_name}'")
                            if manifest_json.get('framework_version') != version:
                                validation_errors.append(f"Framework version mismatch: manifest has '{manifest_json.get('framework_version')}', expected '{version}'")
                                
                        except json.JSONDecodeError as e:
                            validation_errors.append(f"Invalid JSON in MANIFEST.json: {e}")
        except Exception as e:
            validation_warnings.append(f"Could not validate package archive structure: {e}")
        
        # Report validation results
        if validation_errors:
            if args.verbose:
                print(f"   ❌ Validation errors found:")
                for error in validation_errors:
                    print(f"      - {error}")
            else:
                print(f"   ❌ {len(validation_errors)} validation error(s) found (use --verbose for details)")
        
        if validation_warnings:
            if args.verbose:
                print(f"   ⚠️  Validation warnings:")
                for warning in validation_warnings:
                    print(f"      - {warning}")
        
        if not validation_errors:
            if args.verbose:
                print(f"   ✅ Package validation passed")
        else:
            print(f"\n❌ Package validation failed with {len(validation_errors)} error(s)")
            return 1
        
        print(f"\n✅ Package created: {package_path.name}")
        print(f"   Framework: {framework_name} v{version}")
        print(f"   Files included: {len(files)}")
        print(f"   Package size: {final_package_size:,} bytes")
        print(f"   SHA-256 hash: ✅ Computed")
        print(f"   Hash file: ✅ Created ({hash_file_path.name})")
        print(f"   MANIFEST.json: ✅ Generated (with hash)")
        if not validation_errors and not validation_warnings:
            print(f"   Validation: ✅ Passed")
        print(f"\n✅ Package builder complete!")
        
        return 0
        
    except (ValueError, FileNotFoundError) as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"❌ Unexpected error: {e}", file=sys.stderr)
        if args.verbose if 'args' in locals() else False:
            import traceback
            traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())

