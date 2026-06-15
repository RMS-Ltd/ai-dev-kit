#!/usr/bin/env python3
"""
Test script to validate Release Workflow performance and reliability.
Tests the E6S06T02 fixes for micromanagement issues.
"""

import subprocess
import sys
import time
from pathlib import Path


def run_command(cmd, cwd=None):
    """Run a command and return success, output, and execution time."""
    start_time = time.time()
    try:
        result = subprocess.run(
            cmd, shell=True, capture_output=True, text=True, cwd=cwd
        )
        end_time = time.time()
        execution_time = end_time - start_time
        return result.returncode == 0, result.stdout, result.stderr, execution_time
    except Exception as e:
        end_time = time.time()
        execution_time = end_time - start_time
        return False, "", str(e), execution_time


def _kanban_init_run():
    """Run kanban_init and return success, stdout, stderr, execution time."""
    cmd = (
        f'{sys.executable} "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py" '
        "--mode kanban_init"
    )
    return run_command(cmd)


def test_kanban_init_performance():
    """Test kanban_init mode performance target."""
    success, _stdout, stderr, exec_time = _kanban_init_run()
    assert success, f"kanban_init failed: {stderr}"
    assert exec_time < 300, f"kanban_init took {exec_time:.3f}s (expected under 5 minutes)"


def test_pattern_matching_fix():
    """Test that kanban_init discovers story docs and applies updates."""
    success, stdout, stderr, _exec_time = _kanban_init_run()
    assert success, f"kanban_init failed: {stderr}"
    assert "Story doc:" in stdout, "Story doc discovery line missing from output"
    assert "story-" in stdout.lower() or "epic-" in stdout.lower(), (
        "Expected lowercase epic/story path in story doc line"
    )
    assert "Successfully made" in stdout and "changes" in stdout


def test_error_recovery():
    """Test explicit failure when version file path is invalid."""
    cmd = (
        f'{sys.executable} "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py" '
        "--mode kanban_init --version-file /tmp/nonexistent_version.py"
    )
    success, stdout, stderr, _exec_time = run_command(cmd)
    combined = f"{stdout}\n{stderr}"
    assert not success, "kanban_init should fail for missing version file"
    assert "Version file not found" in combined


def test_continuous_execution():
    """Test that script runs continuously without stopping."""
    success, _stdout, _stderr, exec_time = _kanban_init_run()
    assert success, "kanban_init did not complete successfully"
    assert exec_time < 300, f"kanban_init took {exec_time:.3f}s (possible user intervention)"


def main():
    """Run all performance and reliability tests."""
    print("🚀 E6S06T02 Release Workflow Performance Test Suite")
    print("=" * 60)

    project_root = Path.cwd()
    print(f"📁 Project root: {project_root}")

    results = {}

    try:
        test_kanban_init_performance()
        results["performance"] = True
    except AssertionError:
        results["performance"] = False

    try:
        test_pattern_matching_fix()
        results["pattern_matching"] = True
    except AssertionError:
        results["pattern_matching"] = False

    try:
        test_error_recovery()
        results["error_recovery"] = True
    except AssertionError:
        results["error_recovery"] = False

    try:
        test_continuous_execution()
        results["continuous_execution"] = True
    except AssertionError:
        results["continuous_execution"] = False

    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)

    for test_name, result in results.items():
        status = "✅ PASS" if result is True else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")

    passed = sum(1 for r in results.values() if r is True)
    failed = sum(1 for r in results.values() if r is False)
    total = len(results)

    print(f"\n🎯 Overall: {passed}/{total} passed, {failed} failed")

    if failed == 0:
        print("🎉 ALL CRITICAL TESTS PASSED!")
        print("✅ Release Workflow micromanagement issues have been resolved")
        print("✅ Performance meets or exceeds targets")
        print("✅ Ready for production use")
    else:
        print("⚠️  Some tests failed - review results above")

    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
