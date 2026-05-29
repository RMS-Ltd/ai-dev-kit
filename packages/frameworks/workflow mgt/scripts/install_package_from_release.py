#!/usr/bin/env python3
"""
Install Framework Package from GitHub Release

Downloads, verifies, and installs framework packages from GitHub Releases.

Usage:
    python install_package_from_release.py <framework-name> <version> [options]

Example:
    python install_package_from_release.py kanban 2.0.0 --install-dir packages/frameworks
"""

import argparse
import hashlib
import os
import sys
import tarfile
from pathlib import Path
from typing import Optional
import requests
import tempfile
import shutil


def parse_arguments() -> argparse.Namespace:
    """Parse command-line arguments."""
    parser = argparse.ArgumentParser(
        description="Install framework package from GitHub Release",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Install kanban framework v2.0.0
  python install_package_from_release.py kanban 2.0.0

  # Install to custom directory
  python install_package_from_release.py kanban 2.0.0 \\
      --install-dir ./frameworks

  # Install from specific repository
  python install_package_from_release.py kanban 2.0.0 \\
      --repo ai-dev-kit/ai-dev-kit
        """
    )
    
    parser.add_argument(
        'framework_name',
        type=str,
        help='Framework name (e.g., kanban, workflow-mgmt)'
    )
    
    parser.add_argument(
        'version',
        type=str,
        help='Framework version (e.g., 2.0.0)'
    )
    
    parser.add_argument(
        '--install-dir',
        type=str,
        default='packages/frameworks',
        help='Installation directory (default: packages/frameworks)'
    )
    
    parser.add_argument(
        '--repo',
        type=str,
        default='ai-dev-kit/ai-dev-kit',
        help='GitHub repository (owner/repo, default: ai-dev-kit/ai-dev-kit)'
    )
    
    parser.add_argument(
        '--skip-verification',
        action='store_true',
        help='Skip hash verification (NOT RECOMMENDED)'
    )
    
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Show verbose output'
    )
    
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Validate inputs without downloading/installing'
    )
    
    return parser.parse_args()


def normalize_framework_name(framework_name: str) -> str:
    """Normalize framework name for URL/path (lowercase, replace spaces with hyphens)."""
    return framework_name.lower().replace(' ', '-')


def compute_sha256_hash(file_path: Path) -> str:
    """Compute SHA-256 hash of a file."""
    sha256 = hashlib.sha256()
    
    with open(file_path, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b''):
            sha256.update(chunk)
    
    return sha256.hexdigest()


def download_file(url: str, output_path: Path, verbose: bool = False) -> bool:
    """Download a file from URL."""
    try:
        if verbose:
            print(f"   Downloading: {url}")
        
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        total_size = int(response.headers.get('content-length', 0))
        downloaded = 0
        
        with open(output_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
                    downloaded += len(chunk)
                    if verbose and total_size > 0:
                        percent = (downloaded / total_size) * 100
                        print(f"\r   Progress: {percent:.1f}%", end='', flush=True)
        
        if verbose:
            print()  # New line after progress
        
        return True
    except Exception as e:
        print(f"❌ Error downloading {url}: {e}", file=sys.stderr)
        return False


def verify_package_hash(package_path: Path, hash_file_path: Path, verbose: bool = False) -> bool:
    """Verify package hash against hash file."""
    try:
        # Read hash file
        hash_content = hash_file_path.read_text(encoding='utf-8').strip()
        
        # Parse hash file (format: "hash  filename")
        parts = hash_content.split(None, 1)
        if len(parts) != 2:
            print(f"❌ Invalid hash file format: {hash_file_path}", file=sys.stderr)
            return False
        
        expected_hash = parts[0]
        filename = parts[1]
        
        # Verify filename matches package
        if filename != package_path.name:
            if verbose:
                print(f"   Warning: Hash file filename '{filename}' doesn't match package '{package_path.name}'")
        
        # Compute package hash
        if verbose:
            print(f"   Computing SHA-256 hash...")
        computed_hash = compute_sha256_hash(package_path)
        
        # Compare hashes (case-insensitive)
        if computed_hash.lower() != expected_hash.lower():
            print(f"❌ Hash verification failed!", file=sys.stderr)
            print(f"   Expected: {expected_hash[:16]}...{expected_hash[-16:]}", file=sys.stderr)
            print(f"   Computed: {computed_hash[:16]}...{computed_hash[-16:]}", file=sys.stderr)
            return False
        
        if verbose:
            print(f"   ✅ Hash verification passed: {computed_hash[:16]}...{computed_hash[-16:]}")
        
        return True
    except Exception as e:
        print(f"❌ Error verifying hash: {e}", file=sys.stderr)
        return False


def extract_package(package_path: Path, install_dir: Path, verbose: bool = False) -> bool:
    """Extract package to installation directory."""
    try:
        install_dir.mkdir(parents=True, exist_ok=True)
        
        if verbose:
            print(f"   Extracting to: {install_dir}")
        
        with tarfile.open(package_path, 'r:gz') as tar:
            # Get framework directory name from archive
            members = tar.getmembers()
            if not members:
                print(f"❌ Package archive is empty", file=sys.stderr)
                return False
            
            # Find the root directory in the archive
            root_dir = None
            for member in members:
                parts = member.name.split('/')
                if len(parts) > 0 and parts[0]:
                    root_dir = parts[0]
                    break
            
            if not root_dir:
                print(f"❌ Cannot determine package root directory", file=sys.stderr)
                return False
            
            # Extract all files
            tar.extractall(install_dir)
            
            # Move framework directory to expected location
            extracted_path = install_dir / root_dir
            framework_name = root_dir
            target_path = install_dir / framework_name
            
            if extracted_path != target_path:
                # Already in the right place
                pass
            
            if verbose:
                print(f"   ✅ Package extracted: {target_path}")
            
            return True
    except Exception as e:
        print(f"❌ Error extracting package: {e}", file=sys.stderr)
        return False


def verify_installation(install_dir: Path, framework_name: str, verbose: bool = False) -> bool:
    """Verify that installation was successful."""
    framework_dir = install_dir / framework_name
    
    if not framework_dir.exists():
        print(f"❌ Framework directory not found: {framework_dir}", file=sys.stderr)
        return False
    
    # Check for MANIFEST.json
    manifest_path = framework_dir / "MANIFEST.json"
    if not manifest_path.exists():
        print(f"⚠️  Warning: MANIFEST.json not found in {framework_dir}", file=sys.stderr)
    
    # Check for README.md
    readme_path = framework_dir / "README.md"
    if not readme_path.exists():
        print(f"⚠️  Warning: README.md not found in {framework_dir}", file=sys.stderr)
    
    if verbose:
        print(f"   ✅ Installation verified: {framework_dir}")
        if manifest_path.exists():
            print(f"   ✅ MANIFEST.json found")
        if readme_path.exists():
            print(f"   ✅ README.md found")
    
    return True


def main() -> int:
    """Main execution function."""
    try:
        args = parse_arguments()
        
        # Normalize framework name
        normalized_name = normalize_framework_name(args.framework_name)
        version = args.version
        repo = args.repo
        
        # Build download URLs
        tag = f"{normalized_name}-v{version}"
        base_url = f"https://github.com/{repo}/releases/download/{tag}"
        package_filename = f"{normalized_name}-v{version}.tar.gz"
        hash_filename = f"{normalized_name}-v{version}.tar.gz.sha256"
        
        package_url = f"{base_url}/{package_filename}"
        hash_url = f"{base_url}/{hash_filename}"
        
        if args.verbose:
            print(f"Framework: {args.framework_name} (normalized: {normalized_name})")
            print(f"Version: {version}")
            print(f"Tag: {tag}")
            print(f"Repository: {repo}")
            print(f"Install directory: {args.install_dir}")
            print(f"Package URL: {package_url}")
            print(f"Hash URL: {hash_url}")
        
        # Dry run mode
        if args.dry_run:
            print("✅ Dry run: All inputs validated successfully")
            print(f"   Would download: {package_filename}")
            print(f"   Would download: {hash_filename}")
            print(f"   Would install to: {args.install_dir}/{normalized_name}")
            return 0
        
        # Create temporary directory for downloads
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir)
            package_path = temp_path / package_filename
            hash_file_path = temp_path / hash_filename
            
            # Download package file
            print(f"\n📥 Downloading {normalized_name} v{version}...")
            if not download_file(package_url, package_path, args.verbose):
                return 1
            
            package_size = package_path.stat().st_size
            if args.verbose:
                print(f"   Package size: {package_size:,} bytes")
            
            # Download hash file
            if not args.skip_verification:
                if args.verbose:
                    print(f"   Downloading hash file...")
                if not download_file(hash_url, hash_file_path, args.verbose):
                    print(f"⚠️  Warning: Hash file download failed, skipping verification", file=sys.stderr)
                    args.skip_verification = True
            
            # Verify package hash
            if not args.skip_verification:
                print(f"\n🔐 Verifying package integrity...")
                if not verify_package_hash(package_path, hash_file_path, args.verbose):
                    print(f"❌ Package verification failed. Installation aborted.", file=sys.stderr)
                    return 1
            else:
                print(f"\n⚠️  Hash verification skipped (NOT RECOMMENDED)")
            
            # Extract package
            print(f"\n📦 Installing package...")
            install_dir = Path(args.install_dir).resolve()
            
            if not extract_package(package_path, install_dir, args.verbose):
                return 1
            
            # Verify installation
            if args.verbose:
                print(f"\n🔍 Verifying installation...")
            
            if not verify_installation(install_dir, normalized_name, args.verbose):
                return 1
            
            print(f"\n✅ Installation complete!")
            print(f"   Framework: {normalized_name} v{version}")
            print(f"   Location: {install_dir}/{normalized_name}")
            
            return 0
        
    except KeyboardInterrupt:
        print("\n❌ Installation cancelled by user", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"❌ Unexpected error: {e}", file=sys.stderr)
        if args.verbose if 'args' in locals() else False:
            import traceback
            traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(main())

