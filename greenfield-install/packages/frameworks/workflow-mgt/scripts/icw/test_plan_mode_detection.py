#!/usr/bin/env python3
"""
Test script for ICW plan mode detection
"""

import os
import sys
import tempfile
from pathlib import Path

# Add the script directory to the path
script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir))

from icw_handler import ICWHandler

def test_plan_mode_detection():
    """Test that ICW properly detects and validates planning mode"""
    print("=== Testing ICW Plan Mode Detection ===")
    
    # Test 1: Default (should fail - no planning mode)
    print("\n1. Testing default mode (should fail):")
    handler = ICWHandler()
    mode = handler._detect_execution_mode()
    print(f"   Detected mode: {mode}")
    
    result = handler.validate_execution_mode()
    print(f"   Validation result: {result}")
    assert not result, "Should fail without planning mode"
    
    # Test 2: Planning mode via environment variable
    print("\n2. Testing planning mode via environment variable:")
    os.environ['PLANNING_MODE'] = 'true'
    
    # Create new handler to pick up environment
    handler2 = ICWHandler()
    mode2 = handler2._detect_execution_mode()
    print(f"   Detected mode: {mode2}")
    
    result2 = handler2.validate_execution_mode()
    print(f"   Validation result: {result2}")
    assert result2, "Should succeed with planning mode"
    
    # Test 3: Implementation mode (should fail)
    print("\n3. Testing implementation mode (should fail):")
    os.environ['PLANNING_MODE'] = 'false'
    os.environ['IMPLEMENTATION_MODE'] = 'true'
    
    handler3 = ICWHandler()
    mode3 = handler3._detect_execution_mode()
    print(f"   Detected mode: {mode3}")
    
    result3 = handler3.validate_execution_mode()
    print(f"   Validation result: {result3}")
    assert not result3, "Should fail in implementation mode"
    
    # Clean up
    if 'PLANNING_MODE' in os.environ:
        del os.environ['PLANNING_MODE']
    if 'IMPLEMENTATION_MODE' in os.environ:
        del os.environ['IMPLEMENTATION_MODE']
    
    print("\n✓ All plan mode detection tests passed!")

def test_initialize_with_wrong_mode():
    """Test that initialize_cycle fails in wrong mode"""
    print("\n=== Testing initialize_cycle with wrong mode ===")
    
    handler = ICWHandler()
    result = handler.initialize_cycle({})
    
    print(f"Initialize result: {result}")
    assert not result.get('success', True), "Should fail without planning mode"
    assert 'error' in result, "Should contain error message"
    print("✓ initialize_cycle properly fails in wrong mode")

if __name__ == '__main__':
    test_plan_mode_detection()
    test_initialize_with_wrong_mode()
    print("\n🎉 All ICW plan mode tests passed!")
