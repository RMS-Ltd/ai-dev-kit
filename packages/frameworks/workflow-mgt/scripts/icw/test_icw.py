#!/usr/bin/env python3
"""
Test suite for Implementation Cycle Workflow (ICW) Handler
Tests ICW functionality including task identifier validation and planning mode requirements
"""

import unittest
import sys
import os
import tempfile
import json
from unittest.mock import patch, MagicMock
from pathlib import Path

# Add the ICW module to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from icw_handler import ICWHandler

class TestICTaskIdentifierValidation(unittest.TestCase):
    """Test task identifier parsing and validation functionality"""
    
    def setUp(self):
        """Set up test environment"""
        self.handler = ICWHandler()
        # Mock config for testing
        self.handler.config = {
            'paths': {
                'kanban_root': 'docs/project-management/kanban'
            }
        }
        
        # Test Step 6: Quality Validation
        print("📋 Step 6: Quality Validation")
        result = handler.validate_quality(test_params)
        assert result['success'], f"Quality validation failed: {result}"
        print("✅ Quality validation passed")
        
        # Test Step 7: Archive Cycle
        print("📋 Step 7: Archive Cycle")
        result = handler.archive_cycle(test_params)
        assert result['success'], f"Archive failed: {result}"
        print(f"✅ Cycle archived: {result['cycle_id']}")
        
        # Verify output files exist
        output_files = list(Path(temp_dir).glob(f"{cycle_id}*.md"))
        assert len(output_files) >= 4, f"Expected at least 4 output files, got {len(output_files)}"
        
        print(f"✅ Generated {len(output_files)} output files:")
        for file in output_files:
            print(f"  - {file.name}")
        
        print("🎉 All ICW tests passed!")
        return True

def test_template_processing():
    """Test template processing functionality"""
    print("🧪 Testing Template Processing")
    
    # Create temporary directory for testing
    with tempfile.TemporaryDirectory() as temp_dir:
        # Create test template
        test_template = """# Test Template for {{implementation_title}}

**Date:** {{current_date}}
**Cycle:** {{cycle_id}}

## Problem
{{problem_context}}

## Scope
{{scope}}

## Priority
{{priority}}
"""
        
        # Save test template
        template_file = Path(temp_dir) / 'test-template.md'
        with open(template_file, 'w') as f:
            f.write(test_template)
        
        # Create test config
        test_config = {
            'paths': {
                'templates_dir': temp_dir,
                'output_dir': temp_dir,
                'scripts_dir': '.',
                'kanban_root': '.'
            },
            'templates': {
                'specification': {'file': 'test-template.md'}
            }
        }
        
        # Save test config
        config_file = Path(temp_dir) / 'icw-config.yaml'
        import yaml
        with open(config_file, 'w') as f:
            yaml.dump(test_config, f)
        
        # Initialize ICW handler
        handler = ICWHandler(str(config_file))
        
        # Initialize cycle
        test_params = {
            'implementation_title': 'Template Test',
            'problem_context': 'Testing template processing',
            'scope': 'test',
            'priority': 'high'
        }
        
        result = handler.initialize_cycle(test_params)
        assert result['success'], f"Initialize failed: {result}"
        
        # Process template
        processed = handler._process_template(test_template, test_params)
        
        # Verify template processing
        assert "{{implementation_title}}" not in processed, "Template variable not replaced"
        assert "Template Test" in processed, "Title not found in processed template"
        assert "Testing template processing" in processed, "Problem context not found"
        assert "test" in processed, "Scope not found"
        assert "high" in processed, "Priority not found"
        
        print("✅ Template processing test passed!")
        return True

def main():
    """Run all ICW tests"""
    print("🚀 Starting ICW Tests")
    
    try:
        # Test basic functionality
        test_icw_basic()
        
        # Test template processing
        test_template_processing()
        
        print("\n🎉 All ICW tests completed successfully!")
        return True
        
    except Exception as e:
        print(f"\n❌ ICW test failed: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
