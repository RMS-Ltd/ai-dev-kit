#!/usr/bin/env python3
"""
Master Script: Build and Upload All Framework Packages

This script orchestrates the complete workflow:
1. Build all framework packages
2. Create Git tags (optional)
3. Push tags to remote (optional)
4. Upload packages to GitHub Releases

Usage:
    python build_and_upload_all.py [--skip-build] [--skip-tags] [--skip-upload] [--token TOKEN] [--repo REPO]
"""

import sys
import subprocess
from pathlib import Path
from typing import Optional

# Add script directory to path
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent.parent.parent.parent
sys.path.insert(0, str(SCRIPT_DIR))

# Import build functions
from build_package import (
    validate_framework_name,
    validate_version,
    find_framework_directory,
    validate_framework_structure,
    collect_framework_files,
    generate_manifest_json,
    create_tar_gz_archive,
    compute_sha256_hash,
    create_hash_file,
    update_manifest_hash,
    add_manifest_to_archive
)

import argparse
import os

FRAMEWORKS_ROOT = SCRIPT_DIR.parent.parent
OUTPUT_DIR = FRAMEWORKS_ROOT.parent / "dist" / "packages"
REPO = "earlution/ai-dev-kit"

FRAMEWORKS = [
    ("kanban", "2.1.0", "kanban"),
    ("workflow mgt", "2.1.4", "workflow-mgt"),
    ("numbering & versioning", "2.0.0", "numbering-versioning"),
    ("doc-lifecycle", "1.0.0", "doc-lifecycle"),
    ("debug-path", "1.0.0", "debug-path"),
]

def build_framework(framework_name: str, version: str, display_name: str) -> bool:
    """Build a single framework package."""
    print(f"\n📦 Building: {display_name} v{version}")
    
    try:
        framework_name = validate_framework_name(framework_name)
        version = validate_version(version)
        framework_dir = find_framework_directory(framework_name, FRAMEWORKS_ROOT)
        validate_framework_structure(framework_dir)
        
        files = collect_framework_files(framework_dir)
        if not files:
            raise ValueError(f"No files found in framework directory")
        
        package_path = create_tar_gz_archive(
            framework_dir=framework_dir,
            framework_name=framework_name,
            version=version,
            output_dir=OUTPUT_DIR,
            files=files
        )
        
        package_filename = package_path.name
        manifest = generate_manifest_json(
            framework_name=framework_name,
            version=version,
            package_filename=package_filename,
            files=files,
            framework_dir=framework_dir,
            package_hash=None
        )
        
        add_manifest_to_archive(package_path, manifest)
        package_hash = compute_sha256_hash(package_path)
        manifest = update_manifest_hash(manifest, package_hash, package_filename)
        add_manifest_to_archive(package_path, manifest)
        create_hash_file(package_path, package_hash)
        
        print(f"   ✅ {display_name} v{version} built successfully")
        return True
        
    except Exception as e:
        print(f"   ❌ Failed: {e}")
        return False

def build_all_packages() -> bool:
    """Build all framework packages."""
    print("━" * 70)
    print("📦 STEP 1: Building All Framework Packages")
    print("━" * 70)
    
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    success_count = 0
    for framework_name, version, display_name in FRAMEWORKS:
        if build_framework(framework_name, version, display_name):
            success_count += 1
    
    print(f"\n📊 Build Summary: {success_count}/{len(FRAMEWORKS)} successful")
    
    if success_count != len(FRAMEWORKS):
        print("❌ Some packages failed to build")
        return False
    
    print("✅ All packages built successfully!")
    return True

def create_git_tags() -> bool:
    """Create Git tags for all frameworks."""
    print("\n" + "━" * 70)
    print("🏷️  STEP 2: Creating Git Tags")
    print("━" * 70)
    
    os.chdir(PROJECT_ROOT)
    
    for framework_name, version, display_name in FRAMEWORKS:
        tag = f"{display_name}-v{version}"
        message = f"Release {display_name} framework v{version}"
        
        print(f"\n🏷️  Creating tag: {tag}")
        
        try:
            result = subprocess.run(
                ["git", "tag", "-a", tag, "-m", message],
                capture_output=True,
                text=True,
                check=True
            )
            print(f"   ✅ Tag created: {tag}")
        except subprocess.CalledProcessError as e:
            if "already exists" in e.stderr:
                print(f"   ⚠️  Tag already exists: {tag}")
            else:
                print(f"   ❌ Failed to create tag: {e.stderr}")
                return False
    
    print("\n✅ All tags created!")
    return True

def push_tags() -> bool:
    """Push Git tags to remote."""
    print("\n" + "━" * 70)
    print("📤 STEP 3: Pushing Git Tags to Remote")
    print("━" * 70)
    
    os.chdir(PROJECT_ROOT)
    
    print("\n📤 Pushing tags to origin...")
    
    try:
        result = subprocess.run(
            ["git", "push", "origin", "--tags"],
            capture_output=True,
            text=True,
            check=True
        )
        print("   ✅ Tags pushed successfully!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"   ❌ Failed to push tags: {e.stderr}")
        return False

def upload_packages(token: str, repo: str, verbose: bool = False) -> bool:
    """Upload all packages to GitHub Releases."""
    print("\n" + "━" * 70)
    print("📤 STEP 4: Uploading Packages to GitHub Releases")
    print("━" * 70)
    
    # Import upload functions
    sys.path.insert(0, str(SCRIPT_DIR))
    from upload_to_github_release import (
        get_release_by_tag,
        create_release,
        upload_asset
    )
    import requests
    
    success_count = 0
    
    for framework_name, version, display_name in FRAMEWORKS:
        tag = f"{display_name}-v{version}"
        package_file = f"{display_name}-v{version}.tar.gz"
        hash_file = f"{package_file}.sha256"
        
        package_path = OUTPUT_DIR / package_file
        hash_path = OUTPUT_DIR / hash_file
        
        if not package_path.exists():
            print(f"\n❌ Package not found: {package_path}")
            continue
        
        print(f"\n📤 Uploading: {display_name} v{version}")
        print(f"   Tag: {tag}")
        
        try:
            # Get or create release
            release = get_release_by_tag(token, repo, tag, verbose)
            if not release:
                print(f"   Creating release: {tag}")
                release = create_release(token, repo, tag, verbose)
                if not release:
                    print(f"   ❌ Failed to create release")
                    continue
            
            # Upload package
            print(f"   Uploading package: {package_file}")
            upload_url = release.get('upload_url', '')
            if not upload_asset(token, upload_url, package_path, verbose):
                print(f"   ❌ Failed to upload package")
                continue
            
            # Upload hash file
            if hash_path.exists():
                print(f"   Uploading hash: {hash_file}")
                upload_asset(token, upload_url, hash_path, verbose)
            
            print(f"   ✅ {display_name} v{version} uploaded successfully")
            success_count += 1
            
        except Exception as e:
            print(f"   ❌ Failed: {e}")
            import traceback
            traceback.print_exc()
    
    print(f"\n📊 Upload Summary: {success_count}/{len(FRAMEWORKS)} successful")
    
    if success_count != len(FRAMEWORKS):
        print("❌ Some packages failed to upload")
        return False
    
    print("✅ All packages uploaded successfully!")
    return True

def main():
    parser = argparse.ArgumentParser(
        description="Build and upload all framework packages to GitHub Releases"
    )
    parser.add_argument("--skip-build", action="store_true", help="Skip package building")
    parser.add_argument("--skip-tags", action="store_true", help="Skip Git tag creation")
    parser.add_argument("--skip-push", action="store_true", help="Skip pushing tags to remote")
    parser.add_argument("--skip-upload", action="store_true", help="Skip package upload")
    parser.add_argument("--token", help="GitHub personal access token (or set GITHUB_TOKEN env var)")
    parser.add_argument("--repo", default=REPO, help=f"GitHub repository (default: {REPO})")
    parser.add_argument("--verbose", action="store_true", help="Verbose output")
    
    args = parser.parse_args()
    
    token = args.token or os.environ.get("GITHUB_TOKEN")
    
    print("=" * 70)
    print("🚀 Build and Upload All Framework Packages")
    print("=" * 70)
    print(f"Repository: {args.repo}")
    print(f"Output directory: {OUTPUT_DIR}")
    print()
    
    # Step 1: Build packages
    if not args.skip_build:
        if not build_all_packages():
            print("\n❌ Build failed. Aborting.")
            return 1
    else:
        print("⏭️  Skipping package build")
    
    # Step 2: Create Git tags
    if not args.skip_tags:
        if not create_git_tags():
            print("\n❌ Tag creation failed. Aborting.")
            return 1
    else:
        print("\n⏭️  Skipping Git tag creation")
    
    # Step 3: Push tags
    if not args.skip_push and not args.skip_tags:
        if not push_tags():
            print("\n⚠️  Tag push failed, but continuing...")
    else:
        print("\n⏭️  Skipping tag push")
    
    # Step 4: Upload packages
    if not args.skip_upload:
        if not token:
            print("\n❌ Error: GitHub token required for upload")
            print("   Set GITHUB_TOKEN environment variable or use --token flag")
            return 1
        
        if not upload_packages(token, args.repo, args.verbose):
            print("\n❌ Upload failed")
            return 1
    else:
        print("\n⏭️  Skipping package upload")
    
    print("\n" + "=" * 70)
    print("✅ Complete! All packages built and uploaded successfully!")
    print("=" * 70)
    print(f"\nView releases: https://github.com/{args.repo}/releases")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

