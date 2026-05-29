#!/usr/bin/env python3
"""
Validation script for ai-dev-kit CLI tool.

Runs comprehensive validation checks before release.
"""

import sys
import subprocess
from pathlib import Path


def run_command(cmd: list, description: str) -> bool:
    """Run a command and return success status."""
    print(f"\n{'='*60}")
    print(f"Running: {description}")
    print(f"Command: {' '.join(cmd)}")
    print('='*60)
    
    try:
        result = subprocess.run(cmd, check=True, capture_output=True, text=True)
        print(result.stdout)
        if result.stderr:
            print("STDERR:", result.stderr)
        print(f"✅ {description} - PASSED")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} - FAILED")
        print(f"Exit code: {e.returncode}")
        print(f"STDOUT: {e.stdout}")
        print(f"STDERR: {e.stderr}")
        return False
    except FileNotFoundError:
        print(f"❌ {description} - FAILED")
        print(f"Command not found: {cmd[0]}")
        print(f"Please install: pip install {' '.join(cmd)}")
        return False


def validate_imports() -> bool:
    """Validate that all CLI modules can be imported."""
    print("\n" + "="*60)
    print("Validating imports...")
    print("="*60)
    
    modules = [
        "cli",
        "cli.main",
        "cli.config",
        "cli.utils",
        "cli.commands",
        "cli.commands.init",
        "cli.commands.install",
        "cli.commands.update",
        "cli.commands.check",
        "cli.commands.status",
        "cli.commands.list",
        "cli.commands.config",
        "cli.commands.migrate",
        "cli.commands.remove",
        "cli.backends",
        "cli.backends.base",
        "cli.backends.git_submodule",
        "cli.backends.git_subtree",
        "cli.backends.package_manager",
    ]
    
    failed = []
    for module in modules:
        try:
            __import__(module)
            print(f"✅ {module}")
        except ImportError as e:
            print(f"❌ {module}: {e}")
            failed.append(module)
    
    if failed:
        print(f"\n❌ Import validation failed for {len(failed)} module(s)")
        return False
    
    print(f"\n✅ All {len(modules)} modules imported successfully")
    return True


def validate_entry_point() -> bool:
    """Validate that CLI entry point works."""
    print("\n" + "="*60)
    print("Validating entry point...")
    print("="*60)
    
    try:
        result = subprocess.run(
            ["python", "-m", "cli.main", "--help"],
            capture_output=True,
            text=True,
            timeout=10,
        )
        if result.returncode == 0 or "usage:" in result.stdout.lower() or "commands:" in result.stdout.lower():
            print("✅ Entry point works")
            return True
        else:
            print(f"❌ Entry point failed: {result.stdout}")
            return False
    except Exception as e:
        print(f"❌ Entry point validation failed: {e}")
        return False


def main() -> int:
    """Run all validation checks."""
    print("="*60)
    print("ai-dev-kit CLI Tool Validation")
    print("="*60)
    
    checks = []
    
    # Import validation
    checks.append(("Import Validation", validate_imports))
    
    # Entry point validation
    checks.append(("Entry Point Validation", validate_entry_point))
    
    # Code quality checks (if tools available)
    checks.append(("Code Formatting (black)", lambda: run_command(
        ["black", "--check", "cli/"],
        "Check code formatting with black"
    )))
    
    checks.append(("Linting (flake8)", lambda: run_command(
        ["flake8", "cli/"],
        "Run flake8 linting"
    )))
    
    checks.append(("Type Checking (mypy)", lambda: run_command(
        ["mypy", "cli/"],
        "Run mypy type checking"
    )))
    
    # Test suite (if pytest available)
    checks.append(("Test Suite", lambda: run_command(
        ["pytest", "tests/", "-v"],
        "Run test suite"
    )))
    
    # Package build validation
    checks.append(("Package Build", lambda: run_command(
        ["python", "-m", "build"],
        "Build package distribution"
    )))
    
    # Run all checks
    results = []
    for name, check_func in checks:
        try:
            result = check_func()
            results.append((name, result))
        except Exception as e:
            print(f"❌ {name} - ERROR: {e}")
            results.append((name, False))
    
    # Summary
    print("\n" + "="*60)
    print("Validation Summary")
    print("="*60)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for name, result in results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{status}: {name}")
    
    print(f"\nTotal: {passed}/{total} checks passed")
    
    if passed == total:
        print("\n✅ All validation checks passed!")
        return 0
    else:
        print(f"\n❌ {total - passed} validation check(s) failed")
        return 1


if __name__ == "__main__":
    sys.exit(main())

