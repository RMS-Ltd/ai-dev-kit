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
import sys
import tarfile
import tempfile
from pathlib import Path
from typing import Optional

import requests

_SCRIPT_DIR = Path(__file__).resolve().parent
if str(_SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, str(_SCRIPT_DIR))

from framework_install_slug import (
    ensure_frameworks_slug_layout,
    framework_install_slug,
    relocate_legacy_framework_dir,
)
from install_receipt import emit_install_receipt, find_adopter_project_root

try:
    from install_ux_version import print_session_banner
except ImportError:
    def print_session_banner(project_root=None, *, verbose=False, file=None):  # type: ignore[misc]
        return None


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
      --repo RMS-Ltd/ai-dev-kit
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
        default='RMS-Ltd/ai-dev-kit',
        help='GitHub repository (owner/repo, default: RMS-Ltd/ai-dev-kit)'
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
    """Normalize framework name for URL/path and on-disk install directory."""
    return framework_install_slug(framework_name)


def compute_sha256_hash(file_path: Path) -> str:
    """Compute SHA-256 hash of a file."""
    sha256 = hashlib.sha256()
    
    with open(file_path, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b''):
            sha256.update(chunk)
    
    return sha256.hexdigest()


def format_missing_release_help(
    url: str,
    *,
    repo: str,
    tag: str,
    package_filename: str,
    hash_filename: str,
) -> str:
    """Actionable message when GitHub release assets are missing (404)."""
    releases_url = f"https://github.com/{repo}/releases"
    tag_url = f"https://github.com/{repo}/releases/tag/{tag}"
    return (
        f"\nGitHub release assets were not found (HTTP 404).\n"
        f"  URL: {url}\n"
        f"  Expected tag: {tag}\n"
        f"  Expected files on that release:\n"
        f"    - {package_filename}\n"
        f"    - {hash_filename}\n"
        f"  Check: {tag_url}\n"
        f"  All releases: {releases_url}\n"
        f"  Maintainers: run the Framework release workflow "
        f"(.github/workflows/framework-release.yml) or upload assets with "
        f"upload_to_github_release.py after build_all_packages.sh.\n"
    )


def download_file(
    url: str,
    output_path: Path,
    verbose: bool = False,
    *,
    not_found_context: Optional[dict[str, str]] = None,
) -> bool:
    """Download a file from URL."""
    try:
        if verbose:
            print(f"   Downloading: {url}")
        
        response = requests.get(url, stream=True)
        if response.status_code == 404 and not_found_context:
            print(
                format_missing_release_help(url, **not_found_context),
                file=sys.stderr,
            )
            return False
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
            print("   Computing SHA-256 hash...")
        computed_hash = compute_sha256_hash(package_path)
        
        # Compare hashes (case-insensitive)
        if computed_hash.lower() != expected_hash.lower():
            print("❌ Hash verification failed!", file=sys.stderr)
            print(f"   Expected: {expected_hash[:16]}...{expected_hash[-16:]}", file=sys.stderr)
            print(f"   Computed: {computed_hash[:16]}...{computed_hash[-16:]}", file=sys.stderr)
            return False
        
        if verbose:
            print(f"   ✅ Hash verification passed: {computed_hash[:16]}...{computed_hash[-16:]}")
        
        return True
    except Exception as e:
        print(f"❌ Error verifying hash: {e}", file=sys.stderr)
        return False


def extract_package(
    package_path: Path,
    install_dir: Path,
    install_slug: str,
    verbose: bool = False,
) -> bool:
    """Extract package to installation directory under install_slug."""
    try:
        install_dir.mkdir(parents=True, exist_ok=True)
        
        if verbose:
            print(f"   Extracting to: {install_dir}")
        
        with tarfile.open(package_path, 'r:gz') as tar:
            members = tar.getmembers()
            if not members:
                print("❌ Package archive is empty", file=sys.stderr)
                return False
            
            root_dir = None
            for member in members:
                parts = member.name.split('/')
                if len(parts) > 0 and parts[0] and parts[0] != "MANIFEST.json":
                    root_dir = parts[0]
                    break
            
            if not root_dir:
                print("❌ Cannot determine package root directory", file=sys.stderr)
                return False
            
            tar.extractall(install_dir)

            target_path = relocate_legacy_framework_dir(install_dir, root_dir, install_slug)

            renamed = ensure_frameworks_slug_layout(install_dir)
            if renamed and verbose:
                print(f"   ✅ Relocated {renamed} legacy framework dir(s) to slug names")

            try:
                from install_ux_version import print_legacy_framework_layout_warning

                print_legacy_framework_layout_warning(frameworks_root=install_dir)
            except ImportError as _suppressed_exc:
                del _suppressed_exc
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
            print("   ✅ MANIFEST.json found")
        if readme_path.exists():
            print("   ✅ README.md found")
    
    return True


def main() -> int:
    """Main execution function."""
    try:
        args = parse_arguments()

        print_session_banner(Path.cwd())
        
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
        
        not_found_context = {
            "repo": repo,
            "tag": tag,
            "package_filename": package_filename,
            "hash_filename": hash_filename,
        }

        # Create temporary directory for downloads
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir)
            package_path = temp_path / package_filename
            hash_file_path = temp_path / hash_filename
            
            # Download package file
            print(f"\n📥 Downloading {normalized_name} v{version}...")
            if not download_file(
                package_url,
                package_path,
                args.verbose,
                not_found_context=not_found_context,
            ):
                return 1
            
            package_size = package_path.stat().st_size
            if args.verbose:
                print(f"   Package size: {package_size:,} bytes")
            
            # Download hash file
            if not args.skip_verification:
                if args.verbose:
                    print("   Downloading hash file...")
                if not download_file(
                    hash_url,
                    hash_file_path,
                    args.verbose,
                    not_found_context=not_found_context,
                ):
                    print("⚠️  Warning: Hash file download failed, skipping verification", file=sys.stderr)
                    args.skip_verification = True

            # Verify package hash
            if not args.skip_verification:
                print("\n🔐 Verifying package integrity...")
                if not verify_package_hash(package_path, hash_file_path, args.verbose):
                    print("❌ Package verification failed. Installation aborted.", file=sys.stderr)
                    return 1
            else:
                print("\n⚠️  Hash verification skipped (NOT RECOMMENDED)")

            package_hash = f"sha256:{compute_sha256_hash(package_path)}"
            
            # Extract package
            print("\n📦 Installing package...")
            install_dir = Path(args.install_dir).resolve()
            
            if not extract_package(package_path, install_dir, normalized_name, args.verbose):
                return 1
            
            # Verify installation
            if args.verbose:
                print("\n🔍 Verifying installation...")
            
            if not verify_installation(install_dir, normalized_name, args.verbose):
                return 1
            
            print("\n✅ Installation complete!")
            print(f"   Framework: {normalized_name} v{version}")
            print(f"   Location: {install_dir}/{normalized_name}")

            project_root = find_adopter_project_root()
            if project_root is not None:
                try:
                    receipt_path = emit_install_receipt(
                        project_root=project_root,
                        framework_name=normalized_name,
                        version=version,
                        source_url=package_url,
                        hash_value=package_hash,
                        status="installed",
                    )
                    print(f"   Install receipt: {receipt_path.relative_to(project_root)}")
                except (OSError, ValueError) as receipt_err:
                    print(
                        f"⚠️  Warning: Could not write install receipt: {receipt_err}",
                        file=sys.stderr,
                    )
            elif args.verbose:
                print(
                    "   No install receipt (project root without .ai-dev-kit.yaml not detected)",
                )
            
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

