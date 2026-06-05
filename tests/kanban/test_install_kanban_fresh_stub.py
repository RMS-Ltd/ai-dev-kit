import importlib.util
import sys
import tempfile
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent.parent
SCRIPT_PATH = REPO_ROOT / "packages" / "frameworks" / "kanban" / "scripts" / "install_kanban_framework.py"


def _load_module():
    sys.path.insert(0, str(SCRIPT_PATH.parent))
    spec = importlib.util.spec_from_file_location("install_kanban_framework", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def test_fresh_install_creates_kboard_only():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        kanban_path = root / "docs" / "project-management" / "kanban"
        result = mod.create_consumer_board_skeleton(kanban_path, root, dry_run=False)

        assert result["board"] is True
        assert "fbu_stub" not in result

        kboard = kanban_path / "kboard.md"
        assert kboard.is_file()
        assert not (kanban_path / "fbuboard.md").exists()
        assert not (kanban_path / "kanban-board.md").exists()

        kboard_text = kboard.read_text(encoding="utf-8")
        assert "### Verification (V)" in kboard_text
        assert "### Must Have" in kboard_text
