#!/usr/bin/env python3
"""
Test suite for Task-Touch SemVer Mapping (ADR-002)

Tests the new task-touch derived mapping mode to ensure:
1. Strictly monotonic SemVer sequences
2. No collisions across tasks/epics/stories  
3. Proper counter management
4. Configuration integration
"""

import pytest
import tempfile
import shutil
import yaml
import subprocess
from pathlib import Path
import sys

# Add the script directory to the path so we can import the converter
script_dir = Path(__file__).parent
sys.path.insert(0, str(script_dir))

from semver_converter import (
    convert_internal_to_semver_task_touch,
    convert_version_string,
    get_rw_tag_info,
    get_epic_count,
    set_epic_count,
    get_task_touch_counter,
    increment_task_touch_counter,
    load_rw_config,
    get_semver_mapping_strategy,
    load_semver_registry,
    save_semver_registry
)


class TestTaskTouchMapping:
    """Test task-touch derived mapping functionality."""
    
    def setup_method(self):
        """Set up test environment with temporary registry."""
        self.temp_dir = tempfile.mkdtemp()
        self.registry_file = Path(self.temp_dir) / "semver-registry.yaml"
        self.config_file = Path(self.temp_dir) / "rw-config.yaml"
        
        # Create test config
        test_config = {
            "semver_mapping_strategy": "task_touch",
            "project_name": "test-project"
        }
        with open(self.config_file, 'w') as f:
            yaml.dump(test_config, f)
        
        # Mock the registry file path
        import semver_converter
        self.original_find_registry = semver_converter.find_registry_file
        semver_converter.find_registry_file = lambda: self.registry_file
        
        # Mock the config file path  
        self.original_load_config = semver_converter.load_rw_config
        semver_converter.load_rw_config = lambda: test_config
    
    def teardown_method(self):
        """Clean up test environment."""
        shutil.rmtree(self.temp_dir)
        
        # Restore original functions
        import semver_converter
        semver_converter.find_registry_file = self.original_find_registry
        semver_converter.load_rw_config = self.original_load_config
    
    def test_task_touch_basic_conversion(self):
        """Test basic task-touch conversion."""
        # Set up initial state
        set_epic_count(0, 7)  # 7 epics signed off for RC 0
        
        # Derive first version (read-only; predicts next patch)
        result1 = convert_internal_to_semver_task_touch(0, 6, 7, 101, 1)
        assert result1 == (0, 7, 1, 1)  # MAJOR=0, MINOR=7, PATCH=1, BUILD=1

        # Finalize first version (idempotent thereafter)
        result1f = convert_internal_to_semver_task_touch(0, 6, 7, 101, 1, finalize=True)
        assert result1f == (0, 7, 1, 1)
        assert get_task_touch_counter(0) == 1

        # Finalize second version (increments once)
        result2 = convert_internal_to_semver_task_touch(0, 3, 2, 12, 2, finalize=True)
        assert result2 == (0, 7, 2, 2)  # MAJOR=0, MINOR=7, PATCH=2, BUILD=2

        # Finalize third version
        result3 = convert_internal_to_semver_task_touch(0, 2, 13, 7, 1, finalize=True)
        assert result3 == (0, 7, 3, 1)  # MAJOR=0, MINOR=7, PATCH=3, BUILD=1
    
    def test_collision_prevention(self):
        """Test that task-touch mapping prevents collisions."""
        set_epic_count(0, 6)  # 6 epics signed off for RC 0
        
        # These versions collided under registry mapping
        collision_versions = [
            (0, 6, 7, 101, 5),
            (0, 6, 7, 102, 5), 
            (0, 6, 7, 103, 5)
        ]
        
        results = []
        for rc, epic, story, task, build in collision_versions:
            result = convert_internal_to_semver_task_touch(rc, epic, story, task, build, finalize=True)
            results.append(result)
        
        # All should have different PATCH numbers
        patches = [r[2] for r in results]  # PATCH is at index 2
        assert len(set(patches)) == len(patches), f"Collisions detected: {results}"
        
        # All should have same MAJOR and MINOR
        majors = [r[0] for r in results]
        minors = [r[1] for r in results]
        assert all(m == 0 for m in majors), f"Inconsistent MAJOR: {majors}"
        assert all(m == 6 for m in minors), f"Inconsistent MINOR: {minors}"
    
    def test_monotonicity(self):
        """Test that SemVer sequences are strictly monotonic."""
        set_epic_count(0, 3)
        
        # Generate sequence
        results = []
        for i in range(5):
            result = convert_internal_to_semver_task_touch(0, 1, 1, 1 + i, 1, finalize=True)
            results.append(result)
        
        # Check that PATCH is always increasing
        for i in range(1, len(results)):
            prev_patch = results[i-1][2]
            curr_patch = results[i][2]
            assert curr_patch > prev_patch, f"Non-monotonic sequence: {results}"
    
    def test_counter_management(self):
        """Test task-touch counter management."""
        # Reset registry to ensure clean state
        registry = {
            "rc_0": {
                "epic_to_minor": {}, 
                "story_to_patch": {},
                "task_touch_mode": {
                    "epic_count": 0,
                    "task_touch_counter": 0,
                    "mapping_history": []
                }
            },
            "rc_1": {
                "epic_to_minor": {}, 
                "story_to_patch": {},
                "task_touch_mode": {
                    "epic_count": 0,
                    "task_touch_counter": 0,
                    "mapping_history": []
                }
            }
        }
        save_semver_registry(registry)
        
        # Initial counter should be 0
        assert get_task_touch_counter(0) == 0
        
        # Increment counter
        assert increment_task_touch_counter(0) == 1
        assert get_task_touch_counter(0) == 1
        
        # Increment again
        assert increment_task_touch_counter(0) == 2
        assert get_task_touch_counter(0) == 2
        
        # Different RC should have separate counter
        assert get_task_touch_counter(1) == 0
        assert increment_task_touch_counter(1) == 1
        assert get_task_touch_counter(0) == 2  # RC 0 unchanged
    
    def test_epic_count_management(self):
        """Test epic count management."""
        # Initial count should be 0
        assert get_epic_count(0) == 0
        
        # Set epic count
        set_epic_count(0, 5)
        assert get_epic_count(0) == 5
        
        # Different RC should have separate count
        assert get_epic_count(1) == 0
        set_epic_count(1, 3)
        assert get_epic_count(1) == 3
        assert get_epic_count(0) == 5  # RC 0 unchanged
    
    def test_configuration_integration(self):
        """Test configuration integration."""
        # Reset registry to ensure clean state
        registry = {
            "rc_0": {
                "epic_to_minor": {}, 
                "story_to_patch": {},
                "task_touch_mode": {
                    "epic_count": 4,  # Set epic count to 4
                    "task_touch_counter": 0,  # Reset counter
                    "mapping_history": []
                }
            }
        }
        save_semver_registry(registry)
        
        # Test getting strategy from config
        strategy = get_semver_mapping_strategy()
        assert strategy == "task_touch"
        
        # Test convert_version_string with explicit strategy (more reliable)
        result = convert_version_string("0.6.7.101+1", strategy="task_touch", finalize=True)
        print(f"Debug: Expected '0.4.1+1', got '{result}'")
        assert result == "0.4.1+1"
    
    def test_strategy_override(self):
        """Test strategy override in convert_version_string."""
        set_epic_count(0, 2)
        
        # Force task_touch strategy
        result_tt = convert_version_string("0.6.7.101+1", strategy="task_touch", finalize=True)
        assert result_tt == "0.2.1+1"
        
        # Force registry strategy (will use existing registry logic)
        result_reg = convert_version_string("0.6.7.101+1", strategy="registry")
        # Should produce different result
        assert result_tt != result_reg


class TestCollisionScenarios:
    """Test specific collision scenarios from the incident log."""
    
    def setup_method(self):
        """Set up test environment."""
        self.temp_dir = tempfile.mkdtemp()
        self.registry_file = Path(self.temp_dir) / "semver-registry.yaml"
        
        import semver_converter
        self.original_find_registry = semver_converter.find_registry_file
        semver_converter.find_registry_file = lambda: self.registry_file
    
    def teardown_method(self):
        """Clean up test environment."""
        shutil.rmtree(self.temp_dir)
        import semver_converter
        semver_converter.find_registry_file = self.original_find_registry
    
    def test_incident_collision_scenario(self):
        """Test the specific collision from the incident log."""
        # Set up realistic epic count (based on registry)
        set_epic_count(0, 6)  # 6 epics signed off
        
        # The problematic versions from the incident
        versions = ["0.6.7.101+5", "0.6.7.102+5", "0.6.7.103+5"]
        
        results = []
        for version in versions:
            result = convert_version_string(version, strategy="task_touch", finalize=True)
            results.append(result)
        
        # All should be different (no collisions)
        assert len(set(results)) == len(results), f"Collisions: {results}"
        
        # All should be monotonic (PATCH increasing)
        patches = []
        for result in results:
            patch = int(result.split('+')[0].split('.')[2])
            patches.append(patch)
        
        for i in range(1, len(patches)):
            assert patches[i] > patches[i-1], f"Non-monotonic: {patches}"

    def test_read_only_conversion_does_not_increment_counter(self):
        """Repeated read-only conversion must not mutate task_touch_counter."""
        set_epic_count(0, 6)
        assert get_task_touch_counter(0) == 0

        first = convert_version_string("0.6.7.101+1", strategy="task_touch")
        second = convert_version_string("0.6.7.101+1", strategy="task_touch")

        assert first == second
        assert get_task_touch_counter(0) == 0

    def test_finalize_is_idempotent_for_same_internal_version(self):
        """Finalizing same version twice should not burn extra PATCH values."""
        set_epic_count(0, 6)
        one = convert_version_string("0.6.7.101+1", strategy="task_touch", finalize=True)
        two = convert_version_string("0.6.7.101+1", strategy="task_touch", finalize=True)
        assert one == two
        assert get_task_touch_counter(0) == 1

    def test_get_rw_tag_info_read_only_then_finalize(self):
        """RW tag lookup should be read-only unless finalize is requested."""
        import semver_converter
        original_load = semver_converter.load_rw_config
        semver_converter.load_rw_config = lambda: {'semver_mapping_strategy': 'task_touch'}
        try:
            set_epic_count(0, 6)
            assert get_task_touch_counter(0) == 0

            preview = get_rw_tag_info("0.6.7.101+1")
            assert preview["strategy"] == "task_touch"
            assert "+" not in preview["primary_tag"]
            assert get_task_touch_counter(0) == 0

            finalized = get_rw_tag_info("0.6.7.101+1", finalize=True)
            assert finalized["primary_tag"] == preview["primary_tag"]
            assert get_task_touch_counter(0) == 1
        finally:
            semver_converter.load_rw_config = original_load

    def test_finalize_rejects_semver_collision_with_existing_owner(self):
        """Finalize must reject semver reuse across different internal versions."""
        # Force candidate patch to 101 and pre-seed a conflicting semver owner
        registry = {
            "rc_0": {
                "epic_to_minor": {},
                "story_to_patch": {},
                "task_touch_mode": {
                    "epic_count": 6,
                    "task_touch_counter": 100,
                    "mapping_history": [
                        {
                            "internal_version": "0.6.7.101+1",
                            "semver": "0.6.101+1",
                            "patch": 101,
                            "rc": 0,
                            "epic": 6,
                            "story": 7,
                            "task": 101,
                            "build": 1,
                        }
                    ],
                },
            },
            "rc_1": {
                "epic_to_minor": {},
                "story_to_patch": {},
                "task_touch_mode": {"epic_count": 0, "task_touch_counter": 0, "mapping_history": []},
            },
        }
        save_semver_registry(registry)

        with pytest.raises(ValueError, match="SemVer collision detected during finalize"):
            convert_internal_to_semver_task_touch(0, 6, 7, 113, 1, finalize=True)

    def test_create_rw_tags_fails_on_primary_tag_collision_without_internal_tag(self, monkeypatch):
        """RW tag creation must fail when SemVer primary exists but internal tag does not."""
        import semver_converter

        monkeypatch.setattr(
            semver_converter,
            "get_rw_tag_info",
            lambda _internal_version, finalize=False: {
                "strategy": "task_touch",
                "primary_tag": "v0.4.733",
                "internal_tag": "v0.6.7.113+2",
                "semver_full": "0.4.733+2",
                "tag_message": "Release 0.4.733 (Internal: 0.6.7.113+2)",
            },
        )

        def fake_run(args, capture_output=True, text=True, check=False):
            if args[:3] == ["git", "tag", "-a"] and args[3] == "v0.4.733":
                raise subprocess.CalledProcessError(
                    returncode=128,
                    cmd=args,
                    stderr="fatal: tag 'v0.4.733' already exists",
                )
            if args[:3] == ["git", "rev-parse", "-q"]:
                return subprocess.CompletedProcess(args=args, returncode=1, stdout="", stderr="")
            return subprocess.CompletedProcess(args=args, returncode=0, stdout="", stderr="")

        monkeypatch.setattr(subprocess, "run", fake_run)

        with pytest.raises(RuntimeError, match="SemVer tag collision at RW boundary"):
            semver_converter.create_rw_tags("0.6.7.113+2")


if __name__ == "__main__":
    # Run basic tests if pytest not available
    print("Running basic task-touch mapping tests...")
    
    test_instance = TestTaskTouchMapping()
    test_instance.setup_method()
    
    try:
        test_instance.test_task_touch_basic_conversion()
        print("✓ Basic conversion test passed")
        
        test_instance.test_collision_prevention()
        print("✓ Collision prevention test passed")
        
        test_instance.test_monotonicity()
        print("✓ Monotonicity test passed")
        
        test_instance.test_counter_management()
        print("✓ Counter management test passed")
        
        test_instance.test_configuration_integration()
        print("✓ Configuration integration test passed")
        
        print("All basic tests passed!")
        
    finally:
        test_instance.teardown_method()
