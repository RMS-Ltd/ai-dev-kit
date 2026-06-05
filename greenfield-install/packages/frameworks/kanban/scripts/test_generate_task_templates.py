import sys, unittest, tempfile
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from generate_task_templates import TaskTemplateGenerator

class T(unittest.TestCase):
    def test_path(self):
        with tempfile.TemporaryDirectory() as t:
            p = Path(t)
            g = TaskTemplateGenerator(p/"s.md", p/"t.md", p/"o")
            self.assertIn("epic-01", str(g.get_task_file_path(1,1,1,"x")))

if __name__ == "__main__":
    unittest.main()
