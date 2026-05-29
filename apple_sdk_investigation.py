#!/usr/bin/env python3
"""
Apple SDK License Blocking Issue Investigation Script

Phase 1: Problem Reproduction and Data Collection
This script attempts to reproduce the Apple SDK license blocking issue
and collect detailed diagnostic information.
"""

import os
import sys
import platform
import subprocess
import json
from pathlib import Path
from datetime import datetime

def get_system_info():
    """Collect comprehensive system information."""
    info = {
        "timestamp": datetime.now().isoformat(),
        "platform": platform.platform(),
        "system": platform.system(),
        "release": platform.release(),
        "version": platform.version(),
        "machine": platform.machine(),
        "processor": platform.processor(),
        "python_version": sys.version,
        "architecture": platform.architecture(),
    }
    
    # macOS specific information
    if platform.system() == "Darwin":
        try:
            # Get macOS version details
            result = subprocess.run(["sw_vers"], capture_output=True, text=True)
            if result.returncode == 0:
                info["macos_version"] = {}
                for line in result.stdout.strip().split('\n'):
                    if ':' in line:
                        key, value = line.split(':', 1)
                        info["macos_version"][key.strip()] = value.strip()
            
            # Check for Xcode installation
            result = subprocess.run(["xcode-select", "--print-path"], capture_output=True, text=True)
            if result.returncode == 0:
                info["xcode_path"] = result.stdout.strip()
            else:
                info["xcode_path"] = "Not found"
                
            # Get Xcode version if available
            result = subprocess.run(["xcodebuild", "-version"], capture_output=True, text=True)
            if result.returncode == 0:
                info["xcode_version"] = result.stdout.strip()
            else:
                info["xcode_version"] = "Not available"
                
        except (subprocess.TimeoutExpired, FileNotFoundError) as e:
            info["macos_error"] = str(e)
    
    return info

def test_ai_dev_kit_installation():
    """Test ai-dev-kit installation and collect error information."""
    results = {}
    
    # Test 1: Try to install ai-dev-kit itself
    try:
        result = subprocess.run([
            sys.executable, "-m", "pip", "install", "ai-dev-kit"
        ], capture_output=True, text=True, timeout=300)
        
        results["pip_install"] = {
            "returncode": result.returncode,
            "stdout": result.stdout,
            "stderr": result.stderr,
            "success": result.returncode == 0
        }
    except subprocess.TimeoutExpired:
        results["pip_install"] = {
            "returncode": -1,
            "stdout": "",
            "stderr": "Installation timed out after 300 seconds",
            "success": False
        }
    except Exception as e:
        results["pip_install"] = {
            "returncode": -1,
            "stdout": "",
            "stderr": str(e),
            "success": False
        }
    
    # Test 2: Try to run ai-dev-kit CLI if installed
    try:
        result = subprocess.run([
            "ai-dev-kit", "--help"
        ], capture_output=True, text=True, timeout=30)
        
        results["cli_help"] = {
            "returncode": result.returncode,
            "stdout": result.stdout,
            "stderr": result.stderr,
            "success": result.returncode == 0
        }
    except (subprocess.TimeoutExpired, FileNotFoundError) as e:
        results["cli_help"] = {
            "returncode": -1,
            "stdout": "",
            "stderr": str(e),
            "success": False
        }
    
    # Test 3: Try to install a framework (this is where Apple SDK issues might occur)
    try:
        # Create a temporary directory for testing
        test_dir = Path("/tmp/ai-dev-kit-test")
        test_dir.mkdir(exist_ok=True)
        
        result = subprocess.run([
            "ai-dev-kit", "install", "numbering-versioning", "--dry-run"
        ], cwd=test_dir, capture_output=True, text=True, timeout=60)
        
        results["framework_install_dry_run"] = {
            "returncode": result.returncode,
            "stdout": result.stdout,
            "stderr": result.stderr,
            "success": result.returncode == 0
        }
    except (subprocess.TimeoutExpired, FileNotFoundError) as e:
        results["framework_install_dry_run"] = {
            "returncode": -1,
            "stdout": "",
            "stderr": str(e),
            "success": False
        }
    
    return results

def check_for_apple_sdk_references():
    """Check for Apple SDK references in the codebase."""
    apple_sdk_terms = [
        "xcode", "xcodebuild", "xcrun", "swift", "objective-c",
        "ios", "macos", "apple", "sdk", "cocoa", "foundation"
    ]
    
    findings = {}
    
    for term in apple_sdk_terms:
        try:
            # Search in ai-dev-kit source files
            result = subprocess.run([
                "grep", "-r", "-i", term, "/Users/rms/Documents/projects/ai-dev-kit",
                "--include=*.py", "--include=*.yaml", "--include=*.yml",
                "--include=*.md", "--include=*.txt"
            ], capture_output=True, text=True, timeout=30)
            
            if result.returncode == 0 and result.stdout.strip():
                findings[term] = result.stdout.strip().split('\n')
        except (subprocess.TimeoutExpired, FileNotFoundError):
            findings[term] = ["Search failed or timed out"]
    
    return findings

def analyze_dependencies_for_apple_sdk():
    """Analyze dependencies for Apple SDK requirements."""
    dependency_info = {}
    
    # Check current Python environment
    try:
        result = subprocess.run([
            sys.executable, "-m", "pip", "list", "--format=json"
        ], capture_output=True, text=True, timeout=30)
        
        if result.returncode == 0:
            packages = json.loads(result.stdout)
            apple_related_packages = []
            
            for pkg in packages:
                pkg_name = pkg.get("name", "").lower()
                if any(term in pkg_name for term in ["apple", "xcode", "swift", "cocoa", "foundation"]):
                    apple_related_packages.append(pkg)
            
            dependency_info["apple_related_packages"] = apple_related_packages
    except Exception as e:
        dependency_info["pip_list_error"] = str(e)
    
    # Check if there are any Apple-specific requirements in setup.py or requirements.txt
    try:
        with open("/Users/rms/Documents/projects/ai-dev-kit/requirements.txt", "r") as f:
            requirements = f.read()
            dependency_info["requirements_content"] = requirements
    except Exception as e:
        dependency_info["requirements_error"] = str(e)
    
    return dependency_info

def main():
    """Main investigation function."""
    print("🔍 Apple SDK License Blocking Issue Investigation")
    print("=" * 50)
    
    # Create investigation report
    report = {
        "investigation_phase": "Phase 1: Problem Reproduction and Data Collection",
        "timestamp": datetime.now().isoformat(),
        "system_info": get_system_info(),
        "installation_tests": test_ai_dev_kit_installation(),
        "apple_sdk_references": check_for_apple_sdk_references(),
        "dependency_analysis": analyze_dependencies_for_apple_sdk(),
    }
    
    # Save detailed report
    report_file = Path("apple_sdk_investigation_report.json")
    with open(report_file, "w") as f:
        json.dump(report, f, indent=2)
    
    print(f"\n📊 Investigation complete!")
    print(f"📄 Detailed report saved to: {report_file}")
    
    # Print summary
    print("\n📋 SUMMARY:")
    print(f"Platform: {report['system_info']['platform']}")
    print(f"Python: {report['system_info']['python_version'].split()[0]}")
    
    if "macos_version" in report["system_info"]:
        print(f"macOS: {report['system_info']['macos_version'].get('ProductName', 'Unknown')} {report['system_info']['macos_version'].get('ProductVersion', 'Unknown')}")
        print(f"Xcode: {report['system_info'].get('xcode_version', 'Not available')}")
    
    print(f"\nInstallation Tests:")
    for test_name, result in report["installation_tests"].items():
        status = "✅ SUCCESS" if result["success"] else "❌ FAILED"
        print(f"  {test_name}: {status}")
        if not result["success"] and result["stderr"]:
            print(f"    Error: {result['stderr'][:200]}...")
    
    apple_refs = report["apple_sdk_references"]
    if apple_refs:
        print(f"\n🔍 Apple SDK References Found: {len(apple_refs)} terms")
        for term, matches in apple_refs.items():
            if matches and matches != ["Search failed or timed out"]:
                print(f"  {term}: {len(matches)} matches")
    else:
        print("\n✅ No Apple SDK references found in codebase")
    
    # Check for potential Apple SDK license blocking indicators
    potential_issues = []
    
    # Check installation errors for Apple SDK related messages
    for test_name, result in report["installation_tests"].items():
        if not result["success"] and result["stderr"]:
            stderr_lower = result["stderr"].lower()
            if any(term in stderr_lower for term in ["license", "xcode", "sdk", "apple"]):
                potential_issues.append(f"{test_name}: Apple SDK/license related error detected")
    
    if potential_issues:
        print(f"\n⚠️  POTENTIAL APPLE SDK ISSUES DETECTED:")
        for issue in potential_issues:
            print(f"  - {issue}")
    else:
        print(f"\n✅ No obvious Apple SDK license blocking issues detected")
    
    print(f"\n🎯 NEXT STEPS:")
    if potential_issues:
        print("  1. Analyze the detected Apple SDK related errors")
        print("  2. Review the specific error messages in the detailed report")
        print("  3. Proceed to Phase 2: Root Cause Analysis")
    else:
        print("  1. The issue may be more subtle or environment-specific")
        print("  2. Try testing on different macOS versions or configurations")
        print("  3. Review user reports for specific error patterns")

if __name__ == "__main__":
    main()
