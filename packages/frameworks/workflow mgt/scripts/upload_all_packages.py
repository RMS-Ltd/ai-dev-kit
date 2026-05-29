#!/usr/bin/env python3
"""
Upload All Framework Packages to GitHub Releases

Uploads all built packages to GitHub Releases with their hash files.
"""

import sys
from pathlib import Path

# Add script directory to path
SCRIPT_DIR = Path(__file__).parent
sys.path.insert(0, str(SCRIPT_DIR))

from upload_to_github_release import (
    parse_arguments as parse_upload_args,
    get_release,
    create_release,
    upload_asset,
    main as upload_main
)

PACKAGES_DIR = SCRIPT_DIR.parent.parent / "dist" / "packages"
REPO = "earlution/ai-dev-kit"

# Framework packages: (package_file, tag)
PACKAGES = [
    ("kanban-v2.1.0.tar.gz", "kanban-v2.1.0"),
    ("workflow-mgt-v2.1.4.tar.gz", "workflow-mgt-v2.1.4"),
    ("numbering-versioning-v2.0.0.tar.gz", "numbering-versioning-v2.0.0"),
    ("doc-lifecycle-v1.0.0.tar.gz", "doc-lifecycle-v1.0.0"),
    ("debug-path-v1.0.0.tar.gz", "debug-path-v1.0.0"),
]

def upload_package(package_file: str, tag: str, token: str, repo: str, verbose: bool = False) -> bool:
    """Upload a single package and its hash file."""
    package_path = PACKAGES_DIR / package_file
    hash_file = f"{package_file}.sha256"
    hash_path = PACKAGES_DIR / hash_file
    
    if not package_path.exists():
        print(f"❌ Package not found: {package_path}")
        return False
    
    if not hash_path.exists():
        print(f"⚠️  Hash file not found: {hash_path}")
        hash_path = None
    
    print(f"\n📤 Uploading: {package_file}")
    print(f"   Tag: {tag}")
    
    try:
        # Upload package
        sys.argv = [
            "upload_to_github_release.py",
            str(package_path),
            "--tag", tag,
            "--token", token,
            "--repo", repo,
        ]
        if hash_path and hash_path.exists():
            sys.argv.extend(["--hash-file", str(hash_path)])
        if verbose:
            sys.argv.append("--verbose")
        
        result = upload_main()
        
        if result == 0:
            print(f"   ✅ SUCCESS: {package_file}")
            return True
        else:
            print(f"   ❌ FAILED: {package_file}")
            return False
            
    except Exception as e:
        print(f"   ❌ ERROR: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    import argparse
    
    parser = argparse.ArgumentParser(description="Upload all framework packages to GitHub Releases")
    parser.add_argument("--token", required=True, help="GitHub personal access token")
    parser.add_argument("--repo", default=REPO, help=f"GitHub repository (default: {REPO})")
    parser.add_argument("--verbose", action="store_true", help="Verbose output")
    parser.add_argument("--dry-run", action="store_true", help="Dry run (don't actually upload)")
    
    args = parser.parse_args()
    
    if args.dry_run:
        print("🔍 DRY RUN MODE - No packages will be uploaded")
        print()
    
    print("📤 Uploading all framework packages to GitHub Releases...")
    print(f"   Repository: {args.repo}")
    print(f"   Packages directory: {PACKAGES_DIR}")
    print()
    
    # Check packages exist
    missing = []
    for package_file, tag in PACKAGES:
        if not (PACKAGES_DIR / package_file).exists():
            missing.append(package_file)
    
    if missing:
        print("❌ Missing packages:")
        for pkg in missing:
            print(f"   - {pkg}")
        print("\nPlease build packages first using build_packages_direct.py")
        return 1
    
    if args.dry_run:
        print("Packages that would be uploaded:")
        for package_file, tag in PACKAGES:
            size = (PACKAGES_DIR / package_file).stat().st_size
            print(f"   {package_file} → {tag} ({size:,} bytes)")
        return 0
    
    success_count = 0
    fail_count = 0
    failed_packages = []
    
    for package_file, tag in PACKAGES:
        if upload_package(package_file, tag, args.token, args.repo, args.verbose):
            success_count += 1
        else:
            fail_count += 1
            failed_packages.append(package_file)
    
    print("\n" + "━" * 70)
    print("📊 Upload Summary")
    print(f"   ✅ Successful: {success_count}")
    print(f"   ❌ Failed: {fail_count}")
    
    if failed_packages:
        print("\nFailed packages:")
        for failed in failed_packages:
            print(f"   - {failed}")
        return 1
    
    print("\n✅ All packages uploaded successfully!")
    print(f"   Repository: {args.repo}")
    print(f"   View releases: https://github.com/{args.repo}/releases")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

