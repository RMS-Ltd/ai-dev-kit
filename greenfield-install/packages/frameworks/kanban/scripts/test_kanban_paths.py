#!/usr/bin/env python3
"""Unit tests for kanban_paths (UXR-017)."""

import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

import kanban_paths as kp  # noqa: E402


class TestKanbanPaths(unittest.TestCase):
    def test_write_default_patterns_lowercase_padded(self):
        self.assertIn("epic-{epic:02d}", kp.EPIC_DOC_PATTERN)
        self.assertNotIn("Epic-{epic}", kp.EPIC_DOC_PATTERN)
        self.assertIn("story-{story:02d}", kp.STORY_DOC_PATTERN)
        self.assertIn("T{task:02d}", kp.TASK_DOC_PATTERN)

    def test_segment_number(self):
        self.assertEqual(kp.segment_number(4), "04")
        self.assertEqual(kp.segment_number(19), "19")
        self.assertEqual(kp.segment_number(100), "100")
        self.assertEqual(kp.task_segment_number(11), "11")
        self.assertEqual(kp.task_segment_number(1), "01")
        self.assertEqual(kp.task_segment_number(101), "101")

    def test_epic_dir_name(self):
        self.assertEqual(kp.epic_dir_name(4), "epic-04")
        self.assertEqual(kp.epic_dir_name(4, legacy=True), "Epic-04")

    def test_resolve_epic_dir_prefers_padded_lowercase(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            epics = root / "epics"
            (epics / "epic-02").mkdir(parents=True)
            (epics / "epic-05").mkdir(parents=True)
            self.assertEqual(kp.resolve_epic_dir(root, 2).name, "epic-02")
            self.assertEqual(kp.resolve_epic_dir(root, 5).name, "epic-05")

    def test_capitalised_violations(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / "kanban"
            epics = root / "epics"
            (epics / "Epic-01").mkdir(parents=True)
            (epics / "Epic-01" / "Story-001-foo").mkdir()
            violations = kp.capitalised_segment_violations(epics)
            self.assertTrue(any("Epic-01" in v for v in violations))


if __name__ == "__main__":
    unittest.main()
