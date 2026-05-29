#!/usr/bin/env python3
"""
Build All Framework Packages Script

Builds tar.gz packages for all frameworks in packages/frameworks/
"""

import subprocess
import sys
from pathlib import Path

# Get script directory
SCRIPT_DIR = Path(__file__).parent
FRAMEWORKS_ROOT = SCRIPT_DIR.parent.parent
BUILD_SCRIPT = SCRIPT_DIR / "build_package.py"
OUTPUT_DIR = FRAMEWORKS_ROOT.parent / "dist" / "packages"

# Create output directory
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Framework configurations: (framework_name, version, display_name)
FRAMEWORKS = [
    ("kanban", "2.1.0", "kanban"),
    ("workflow mgt", "2.1.3", "workflow-mgt"),
    ("numbering & versioning", "2.0.0", "numbering-versioning"),
    ("doc-lifecycle", "1.0.0", "doc-lifecycle"),
    ("debug-path", "1.0.0", "debug-path"),
]

def build_package(framework_name: str, version: str, display_name: str) -> bool:
    """Build a single package."""
    print("━" * 70)
    print(f"📦 Building: {display_name} v{version}")
    print(f"   Framework: '{framework_name}'")
    print()
    
    cmd = [
        sys.executable,
        str(BUILD_SCRIPT),
        framework_name,
        version,
        "--output-dir", str(OUTPUT_DIR),
        "--framework-dir", str(FRAMEWORKS_ROOT / framework_name),
        "--frameworks-root", str(FRAMEWORKS_ROOT),
        "--verbose"
    ]
    
    try:
        result = subprocess.run(cmd, check=True, capture_output=False)
        print(f"   ✅ SUCCESS: {display_name} v{version}")
        print()
        return True
    except subprocess.CalledProcessError as e:
        print(f"   ❌ FAILED: {display_name} v{version}")
        print()
        return False

def main():
    print("📦 Building all framework packages...")
    print(f"   Frameworks root: {FRAMEWORKS_ROOT}")
    print(f"   Output directory: {OUTPUT_DIR}")
    print()
    
    success_count = 0
    fail_count = 0
    failed_frameworks = []
    
    for framework_name, version, display_name in FRAMEWORKS:
        if build_package(framework_name, version, display_name):
            success_count += 1
        else:
            fail_count += 1
            failed_frameworks.append(f"{display_name} v{version}")
    
    print("━" * 70)
    print("📊 Build Summary")
    print(f"   ✅ Successful: {success_count}")
    print(f"   ❌ Failed: {fail_count}")
    
    if failed_frameworks:
        print()
        print("Failed frameworks:")
        for failed in failed_frameworks:
            print(f"   - {failed}")
        return 1
    
    print()
    print("✅ All packages built successfully!")
    print(f"   Output directory: {OUTPUT_DIR}")
    print()
    print("📋 Next steps:")
    print("   1. Review packages in:", OUTPUT_DIR)
    print("   2. Upload to GitHub Releases using upload_to_github_release.py")
    print("   3. Test installation using install_package_from_release.py")
    
    return 0

if __name__ == "__main__":
    sys.exit(main())

