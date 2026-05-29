#!/usr/bin/env python3
"""
Direct Package Builder - Executes build_package.py for all frameworks
This script directly calls the build functions to avoid subprocess issues
"""

import sys
from pathlib import Path

# Add script directory to path
SCRIPT_DIR = Path(__file__).parent
sys.path.insert(0, str(SCRIPT_DIR))

# Import build functions
from build_package import (
    validate_framework_name,
    validate_version,
    find_framework_directory,
    validate_framework_structure,
    collect_framework_files,
    extract_framework_metadata,
    generate_manifest_json,
    create_tar_gz_archive,
    compute_sha256_hash,
    create_hash_file,
    update_manifest_hash,
    add_manifest_to_archive
)

FRAMEWORKS_ROOT = SCRIPT_DIR.parent.parent
OUTPUT_DIR = FRAMEWORKS_ROOT.parent / "dist" / "packages"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

FRAMEWORKS = [
    ("kanban", "2.1.0", "kanban"),
    ("workflow mgt", "2.1.4", "workflow-mgt"),
    ("numbering & versioning", "2.0.0", "numbering-versioning"),
    ("doc-lifecycle", "1.0.0", "doc-lifecycle"),
    ("debug-path", "1.0.0", "debug-path"),
]

def build_framework(framework_name: str, version: str, display_name: str) -> bool:
    """Build a single framework package."""
    print("\n" + "━" * 70)
    print(f"📦 Building: {display_name} v{version}")
    print(f"   Framework: '{framework_name}'")
    print()
    
    try:
        # Validate
        framework_name = validate_framework_name(framework_name)
        version = validate_version(version)
        
        # Find framework directory
        framework_dir = find_framework_directory(framework_name, FRAMEWORKS_ROOT)
        validate_framework_structure(framework_dir)
        
        print(f"   Framework directory: {framework_dir}")
        print(f"   Output directory: {OUTPUT_DIR}")
        
        # Collect files
        print("\n   📁 Collecting framework files...")
        files = collect_framework_files(framework_dir)
        print(f"   Found {len(files)} files")
        
        if not files:
            raise ValueError(f"No files found in framework directory: {framework_dir}")
        
        # Create archive
        print("\n   📦 Creating tar.gz archive...")
        package_path = create_tar_gz_archive(
            framework_dir=framework_dir,
            framework_name=framework_name,
            version=version,
            output_dir=OUTPUT_DIR,
            files=files
        )
        
        package_size = package_path.stat().st_size
        print(f"   Package created: {package_path.name} ({package_size:,} bytes)")
        
        # Generate manifest (without hash first)
        print("\n   📄 Generating MANIFEST.json...")
        package_filename = package_path.name
        manifest = generate_manifest_json(
            framework_name=framework_name,
            version=version,
            package_filename=package_filename,
            files=files,
            framework_dir=framework_dir,
            package_hash=None
        )
        
        # Add manifest to archive
        add_manifest_to_archive(package_path, manifest)
        print(f"   MANIFEST.json added to package")
        
        # Compute hash
        print("\n   🔐 Computing SHA-256 hash...")
        package_hash = compute_sha256_hash(package_path)
        
        # Update manifest with hash
        manifest = update_manifest_hash(manifest, package_hash, package_filename)
        add_manifest_to_archive(package_path, manifest)
        print(f"   MANIFEST.json updated with hash")
        
        # Create hash file
        hash_file_path = create_hash_file(package_path, package_hash)
        print(f"   Hash file created: {hash_file_path.name}")
        
        # Final size
        final_size = package_path.stat().st_size
        print(f"\n   ✅ SUCCESS: {display_name} v{version}")
        print(f"   Package: {package_path.name} ({final_size:,} bytes)")
        print(f"   Hash: {hash_file_path.name}")
        
        return True
        
    except Exception as e:
        print(f"\n   ❌ FAILED: {display_name} v{version}")
        print(f"   Error: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    print("📦 Building all framework packages...")
    print(f"   Frameworks root: {FRAMEWORKS_ROOT}")
    print(f"   Output directory: {OUTPUT_DIR}")
    
    success_count = 0
    fail_count = 0
    failed_frameworks = []
    
    for framework_name, version, display_name in FRAMEWORKS:
        if build_framework(framework_name, version, display_name):
            success_count += 1
        else:
            fail_count += 1
            failed_frameworks.append(f"{display_name} v{version}")
    
    print("\n" + "━" * 70)
    print("📊 Build Summary")
    print(f"   ✅ Successful: {success_count}")
    print(f"   ❌ Failed: {fail_count}")
    
    if failed_frameworks:
        print("\nFailed frameworks:")
        for failed in failed_frameworks:
            print(f"   - {failed}")
        return 1
    
    print("\n✅ All packages built successfully!")
    print(f"   Output directory: {OUTPUT_DIR}")
    
    # List created packages
    print("\n📦 Created packages:")
    for pkg_file in sorted(OUTPUT_DIR.glob("*.tar.gz")):
        size = pkg_file.stat().st_size
        print(f"   {pkg_file.name} ({size:,} bytes)")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

