#!/usr/bin/env python3
"""
Test Suite for Intake Dependency Wiring

Tests the dependency wiring component for intake workflow.

Usage:
    python test_intake_dependency_wiring.py
"""

import sys
import tempfile
from pathlib import Path

# Add scripts to path
scripts_path = Path(__file__).parent
if str(scripts_path) not in sys.path:
    sys.path.insert(0, str(scripts_path))

from intake_dependency_wiring import IntakeDependencyWiring, IntakeDependencyWiringResult, DependencyReference


def test_dependency_extraction():
    """Test dependency extraction from FR-019."""
    print("🧪 Test: Dependency Extraction")
    
    # Test with FR-019
    fr_br_path = Path("docs/project-management/kanban/fr-br/FR-019-intake-workflow-automation.md")
    
    if not fr_br_path.exists():
        print("⚠️  FR-019 not found, skipping test")
        return True
    
    config = {
        'dependency_patterns': {
            'fr': r'FR-\d+',
            'br': r'BR-\d+',
            'uxr': r'UXR-\d+',
            'epic_story': r'E\d+:S\d+',
            'task': r'E\d+:S\d+:T\d+',
        },
        'validation': {
            'check_existence': True,
            'check_circular': True,
            'strict_mode': False
        }
    }
    
    kanban_path = Path("docs/project-management/kanban")
    
    wiring = IntakeDependencyWiring(config, kanban_path)
    
    try:
        result = wiring.wire_dependencies(fr_br_path, [])
        
        # Validate result structure
        assert isinstance(result, IntakeDependencyWiringResult), \
            "Result should be IntakeDependencyWiringResult instance"
        assert isinstance(result.extracted_dependencies, list), \
            "Extracted dependencies should be list"
        assert isinstance(result.wired_dependencies, dict), \
            "Wired dependencies should be dict"
        assert isinstance(result.cross_references, list), \
            "Cross-references should be list"
        assert isinstance(result.errors, list), \
            "Errors should be list"
        assert isinstance(result.warnings, list), \
            "Warnings should be list"
        
        print(f"✅ Dependency extraction successful")
        print(f"   Success: {result.success}")
        print(f"   Extracted Dependencies: {len(result.extracted_dependencies)}")
        print(f"   Blocked By: {len(result.wired_dependencies.get('blocked_by', []))}")
        print(f"   Blocks: {len(result.wired_dependencies.get('blocks', []))}")
        print(f"   Related Work: {len(result.wired_dependencies.get('related_work', []))}")
        print(f"   Errors: {len(result.errors)}")
        print(f"   Warnings: {len(result.warnings)}")
        
        return True
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False


def test_dependency_patterns():
    """Test dependency pattern matching."""
    print("\n🧪 Test: Dependency Pattern Matching")
    
    test_content = """
## Dependencies

**Blocked By:**
- FR-012
- E2:S10

**Blocks:**
- BR-005

**Related Work:**
- E4:S08
- E2:S11:T05
"""
    
    with tempfile.NamedTemporaryFile(mode='w', suffix='.md', delete=False) as f:
        f.write(test_content)
        test_path = Path(f.name)
    
    try:
        config = {
            'dependency_patterns': {
                'fr': r'FR-\d+',
                'br': r'BR-\d+',
                'uxr': r'UXR-\d+',
                'epic_story': r'E\d+:S\d+',
                'task': r'E\d+:S\d+:T\d+',
            },
            'validation': {
                'check_existence': False,  # Skip validation for test
                'check_circular': False,
                'strict_mode': False
            }
        }
        
        wiring = IntakeDependencyWiring(config)
        result = wiring.wire_dependencies(test_path, [])
        
        # Check that dependencies were extracted
        assert len(result.extracted_dependencies) > 0, \
            "Should extract dependencies from test content"
        
        # Check wired dependencies
        assert len(result.wired_dependencies.get('blocked_by', [])) >= 2, \
            "Should have blocked_by dependencies"
        assert len(result.wired_dependencies.get('blocks', [])) >= 1, \
            "Should have blocks dependencies"
        assert len(result.wired_dependencies.get('related_work', [])) >= 2, \
            "Should have related_work dependencies"
        
        print("✅ Dependency pattern matching works correctly")
        return True
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        test_path.unlink()


def test_circular_dependency_detection():
    """Test circular dependency detection."""
    print("\n🧪 Test: Circular Dependency Detection")
    
    test_content = """
## Dependencies

**Blocked By:**
- FR-012

**Blocks:**
- FR-012
"""
    
    with tempfile.NamedTemporaryFile(mode='w', suffix='.md', delete=False) as f:
        f.write(test_content)
        test_path = Path(f.name)
    
    try:
        config = {
            'dependency_patterns': {
                'fr': r'FR-\d+',
            },
            'validation': {
                'check_existence': False,
                'check_circular': True,
                'strict_mode': False
            }
        }
        
        wiring = IntakeDependencyWiring(config)
        result = wiring.wire_dependencies(test_path, [])
        
        # Check that circular dependency was detected
        circular_warnings = [w for w in result.warnings if 'circular' in w.lower()]
        assert len(circular_warnings) > 0, \
            "Should detect circular dependency"
        
        print("✅ Circular dependency detection works correctly")
        return True
    except Exception as e:
        print(f"❌ Test failed: {e}")
        import traceback
        traceback.print_exc()
        return False
    finally:
        test_path.unlink()


def main():
    """Run all tests."""
    print("🧪 Running Intake Dependency Wiring Test Suite")
    print("=" * 80)
    
    tests = [
        test_dependency_extraction,
        test_dependency_patterns,
        test_circular_dependency_detection,
    ]
    
    passed = 0
    failed = 0
    
    for test in tests:
        try:
            if test():
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ Test {test.__name__} raised exception: {e}")
            failed += 1
    
    print("\n" + "=" * 80)
    print("📊 Test Summary")
    print("=" * 80)
    print(f"✅ Passed: {passed}")
    print(f"❌ Failed: {failed}")
    
    if failed > 0:
        sys.exit(1)
    else:
        print("\n✅ All tests passed!")
        sys.exit(0)


if __name__ == "__main__":
    main()
