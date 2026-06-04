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
    
    def test_parse_task_identifier_full_format(self):
        """Test parsing full format: E5:S01:T47"""
        result = self.handler.parse_task_identifier("E5:S01:T47")
        expected = {'epic': 5, 'story': 1, 'task': 47}
        self.assertEqual(result, expected)
    
    def test_parse_task_identifier_compact_format(self):
        """Test parsing compact format: E5S01T47"""
        result = self.handler.parse_task_identifier("E5S01T47")
        expected = {'epic': 5, 'story': 1, 'task': 47}
        self.assertEqual(result, expected)
    
    def test_parse_task_identifier_task_only(self):
        """Test parsing task-only format: T47"""
        result = self.handler.parse_task_identifier("T47")
        expected = {'epic': None, 'story': None, 'task': 47}
        self.assertEqual(result, expected)
    
    def test_parse_task_identifier_case_insensitive(self):
        """Test case insensitive parsing"""
        result = self.handler.parse_task_identifier("e5:s01:t47")
        expected = {'epic': 5, 'story': 1, 'task': 47}
        self.assertEqual(result, expected)
    
    def test_parse_task_identifier_invalid_format(self):
        """Test invalid format raises ValueError"""
        with self.assertRaises(ValueError) as context:
            self.handler.parse_task_identifier("INVALID_TASK")
        self.assertIn("Invalid task identifier format", str(context.exception))
    
    def test_parse_task_identifier_invalid_components(self):
        """Test format with invalid components"""
        with self.assertRaises(ValueError):
            self.handler.parse_task_identifier("E5:S01")
        
        with self.assertRaises(ValueError):
            self.handler.parse_task_identifier("E5:S01:INVALID")
    
    @patch('pathlib.Path.glob')
    def test_validate_task_exists_success(self, mock_glob):
        """Test successful task validation"""
        # Mock task document exists
        mock_task_doc = MagicMock()
        mock_task_doc.read_text.return_value = "# Test Task Document"
        mock_glob.return_value = [mock_task_doc]
        
        with patch('builtins.open', unittest.mock.mock_open(read_data="# Test Task Document")):
            result = self.handler.validate_task_exists({'epic': 5, 'story': 1, 'task': 47})
            self.assertTrue(result[0])  # exists = True
    
    def test_validate_task_exists_task_only_format(self):
        """Test task-only format requires context"""
        result = self.handler.validate_task_exists({'epic': None, 'story': None, 'task': 47})
        self.assertFalse(result[0])  # exists = False
        self.assertIn("requires Epic/Story context", result[1])
    
    @patch('pathlib.Path.glob')
    def test_validate_task_exists_not_found(self, mock_glob):
        """Test task not found"""
        mock_glob.return_value = []  # No task documents found
        
        result = self.handler.validate_task_exists({'epic': 99, 'story': 99, 'task': 99})
        self.assertFalse(result[0])  # exists = False
        self.assertIn("not found in Kanban", result[1])
    
    @patch.object(ICWHandler, 'validate_task_exists')
    @patch.object(ICWHandler, 'get_available_tasks')
    def test_validate_task_identifier_success(self, mock_available, mock_validate):
        """Test successful task identifier validation"""
        # Mock successful validation
        mock_validate.return_value = (True, "# Task Document Content")
        mock_available.return_value = ["T47-task.md", "T48-task.md"]
        
        result = self.handler.validate_task_identifier("E5:S01:T47")
        
        self.assertTrue(result[0])  # is_valid = True
        self.assertEqual(result[1], "")  # no error message
        self.assertIn('task_id', result[2])  # task context returned
        self.assertEqual(result[2]['task_id'], "E5:S01:T47")
    
    def test_validate_task_identifier_invalid_format(self):
        """Test task identifier validation with invalid format"""
        result = self.handler.validate_task_identifier("INVALID")
        
        self.assertFalse(result[0])  # is_valid = False
        self.assertIn("Invalid task identifier format", result[1])
        self.assertIn("Expected formats", result[1])
    
    @patch.object(ICWHandler, 'validate_task_exists')
    @patch.object(ICWHandler, 'get_available_tasks')
    def test_validate_task_identifier_not_found(self, mock_available, mock_validate):
        """Test task identifier validation when task not found"""
        # Mock failed validation
        mock_validate.return_value = (False, "Task E99:S99:T99 not found")
        mock_available.return_value = ["T47-task.md", "T48-task.md"]
        
        result = self.handler.validate_task_identifier("E99:S99:T99")
        
        self.assertFalse(result[0])  # is_valid = False
        self.assertIn("not found in Kanban", result[1])
        self.assertIn("Available tasks", result[1])

class TestICWPlanningModeWithTask(unittest.TestCase):
    """Test ICW planning mode validation with task identifier requirement"""
    
    def setUp(self):
        """Set up test environment"""
        self.handler = ICWHandler()
        # Mock config for testing
        self.handler.config = {
            'paths': {
                'kanban_root': 'docs/project-management/kanban'
            }
        }
    
    @patch.dict(os.environ, {'PLANNING_MODE': 'true'})
    @patch.object(ICWHandler, 'validate_task_identifier')
    def test_validate_execution_mode_with_task_success(self, mock_validate):
        """Test successful validation of planning mode and task identifier"""
        # Mock successful task validation
        mock_validate.return_value = (True, "", {'task_id': 'E5:S01:T47'})
        
        result = self.handler.validate_execution_mode_with_task("E5:S01:T47")
        
        self.assertTrue(result)
        self.assertEqual(self.handler.task_identifier, "E5:S01:T47")
        self.assertIsNotNone(self.handler.task_context)
    
    @patch.dict(os.environ, {'PLANNING_MODE': 'true'})
    @patch.object(ICWHandler, 'validate_task_identifier')
    def test_validate_execution_mode_with_task_invalid_task(self, mock_validate):
        """Test validation failure with invalid task identifier"""
        # Mock failed task validation
        mock_validate.return_value = (False, "Task not found", {})
        
        result = self.handler.validate_execution_mode_with_task("INVALID_TASK")
        
        self.assertFalse(result)
        self.assertIsNone(self.handler.task_identifier)
        self.assertIsNone(self.handler.task_context)
    
    @patch.dict(os.environ, {'IMPLEMENTATION_MODE': 'true'})
    def test_validate_execution_mode_with_task_wrong_mode(self):
        """Test validation failure with wrong execution mode"""
        result = self.handler.validate_execution_mode_with_task("E5:S01:T47")
        self.assertFalse(result)
    
    @patch.dict(os.environ, {})
    def test_validate_execution_mode_with_task_unknown_mode(self):
        """Test validation failure with unknown execution mode"""
        result = self.handler.validate_execution_mode_with_task("E5:S01:T47")
        self.assertFalse(result)

class TestICWInitializeWithTask(unittest.TestCase):
    """Test ICW initialization with task identifier requirement"""
    
    def setUp(self):
        """Set up test environment"""
        self.handler = ICWHandler()
        # Mock config for testing
        self.handler.config = {
            'paths': {
                'kanban_root': 'docs/project-management/kanban'
            }
        }
    
    @patch.object(ICWHandler, 'validate_execution_mode_with_task')
    @patch('pathlib.Path.mkdir')
    @patch('pathlib.Path.exists')
    def test_initialize_cycle_success(self, mock_exists, mock_mkdir, mock_validate):
        """Test successful cycle initialization with task identifier"""
        # Mock successful validation
        mock_validate.return_value = True
        mock_exists.return_value = True
        
        params = {'task_id': 'E5:S01:T47'}
        result = self.handler.initialize_cycle(params)
        
        self.assertTrue(result['success'])
        self.assertIn('cycle_id', result)
        self.assertEqual(self.handler.cycle_state['task_identifier'], 'E5:S01:T47')
        self.assertIsNotNone(self.handler.cycle_state['task_context'])
    
    def test_initialize_cycle_missing_task_id(self):
        """Test cycle initialization failure with missing task identifier"""
        params = {}  # No task_id
        result = self.handler.initialize_cycle(params)
        
        self.assertFalse(result['success'])
        self.assertIn('Task identifier is required', result['error'])
    
    @patch.object(ICWHandler, 'validate_execution_mode_with_task')
    def test_initialize_cycle_validation_failure(self, mock_validate):
        """Test cycle initialization failure with validation errors"""
        # Mock failed validation
        mock_validate.return_value = False
        
        params = {'task_id': 'E5:S01:T47'}
        result = self.handler.initialize_cycle(params)
        
        self.assertFalse(result['success'])
        self.assertIn('planning mode and valid task identifier', result['error'])

class TestICWCLIArguments(unittest.TestCase):
    """Test ICW CLI argument parsing"""
    
    @patch('sys.argv', ['icw_handler.py', '--task', 'E5:S01:T47', 'initialize'])
    def test_cli_with_task_argument(self):
        """Test CLI parsing with required task argument"""
        # This would test the main() function, but for unit testing
        # we'll test the argument parsing logic separately
        pass
    
    def test_cli_missing_task_argument(self):
        """Test CLI parsing failure with missing task argument"""
        # This would be tested in integration tests
        pass

class TestICWIntegration(unittest.TestCase):
    """Integration tests for ICW with task identifier"""
    
    def setUp(self):
        """Set up test environment"""
        self.handler = ICWHandler()
    
    def test_end_to_end_task_validation(self):
        """Test end-to-end task identifier validation"""
        # This would require actual Kanban files for integration testing
        pass
    
    def test_icw_with_real_task(self):
        """Test ICW execution with real task identifier"""
        # This would be an integration test with real environment
        pass

if __name__ == '__main__':
    # Run tests with verbose output
    unittest.main(verbosity=2)
