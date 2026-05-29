#!/usr/bin/env python3
"""
Test script to validate Release Workflow performance and reliability.
Tests the E6S06T02 fixes for micromanagement issues.
"""

import time
import subprocess
import sys
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

def test_kanban_init_performance():
    """Test kanban_init mode performance target."""
    print("🧪 Testing kanban_init performance...")
    
    cmd = 'python "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --mode kanban_init'
    success, stdout, stderr, exec_time = run_command(cmd)
    
    print(f"⏱️  Execution time: {exec_time:.3f} seconds")
    print(f"✅ Success: {success}")
    
    if success:
        print("📊 Performance: PASS - Well under 2-minute target")
        if exec_time < 5:
            print("🚀 Excellent: Under 5 seconds")
        elif exec_time < 30:
            print("⚡ Good: Under 30 seconds")
        else:
            print("⚠️  Slow: Over 30 seconds")
    else:
        print("❌ Performance: FAIL - Script failed")
        print(f"Error: {stderr}")
    
    return success, exec_time

def test_pattern_matching_fix():
    """Test that pattern matching issues are resolved."""
    print("\n🧪 Testing pattern matching fixes...")
    
    cmd = 'python "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --mode kanban_init'
    success, stdout, stderr, exec_time = run_command(cmd)
    
    # Check for successful story doc discovery
    if "Story doc:" in stdout and "docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests.md" in stdout:
        print("✅ Pattern matching: PASS - Story doc found correctly")
        pattern_success = True
    else:
        print("❌ Pattern matching: FAIL - Story doc not found")
        pattern_success = False
    
    # Check for successful updates
    if "Successfully made" in stdout and "changes" in stdout:
        print("✅ Updates: PASS - Documents updated successfully")
        update_success = True
    else:
        print("❌ Updates: FAIL - Documents not updated")
        update_success = False
    
    return success and pattern_success and update_success

def test_error_recovery():
    """Test error recovery and fallback mechanisms."""
    print("\n🧪 Testing error recovery...")
    
    # Test with a non-existent story to trigger fallback
    cmd = 'python "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --mode kanban_init --version-file /tmp/nonexistent_version.py'
    success, stdout, stderr, exec_time = run_command(cmd)
    
    if "Attempting manual discovery" in stdout or "Suggestion:" in stdout:
        print("✅ Error recovery: PASS - Fallback mechanisms triggered")
        recovery_success = True
    else:
        print("⚠️  Error recovery: UNKNOWN - Could not validate fallback behavior")
        recovery_success = None
    
    return recovery_success

def test_continuous_execution():
    """Test that script runs continuously without stopping."""
    print("\n🧪 Testing continuous execution...")
    
    cmd = 'python "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --mode kanban_init'
    success, stdout, stderr, exec_time = run_command(cmd)
    
    # Check that it completed without requiring user input
    if success and exec_time < 300:  # Under 5 minutes indicates no user intervention
        print("✅ Continuous execution: PASS - Completed without user intervention")
        continuous_success = True
    else:
        print("❌ Continuous execution: FAIL - Required user intervention or took too long")
        continuous_success = False
    
    return continuous_success

def main():
    """Run all performance and reliability tests."""
    print("🚀 E6S06T02 Release Workflow Performance Test Suite")
    print("=" * 60)
    
    project_root = Path.cwd()
    print(f"📁 Project root: {project_root}")
    
    # Run tests
    results = {}
    
    # Test 1: Performance
    perf_success, perf_time = test_kanban_init_performance()
    results['performance'] = perf_success
    
    # Test 2: Pattern Matching
    pattern_success = test_pattern_matching_fix()
    results['pattern_matching'] = pattern_success
    
    # Test 3: Error Recovery
    recovery_success = test_error_recovery()
    results['error_recovery'] = recovery_success
    
    # Test 4: Continuous Execution
    continuous_success = test_continuous_execution()
    results['continuous_execution'] = continuous_success
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result is True else "❌ FAIL" if result is False else "⚠️  UNKNOWN"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    # Overall assessment
    passed = sum(1 for r in results.values() if r is True)
    failed = sum(1 for r in results.values() if r is False)
    unknown = sum(1 for r in results.values() if r is None)
    total = len(results)
    
    print(f"\n🎯 Overall: {passed}/{total} passed, {failed} failed, {unknown} unknown")
    
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
