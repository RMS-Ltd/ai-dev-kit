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


def test_resolve_kanban_path_uses_rw_config_when_default_passed():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / "rw-config.yaml").write_text(
            "\n".join(
                [
                    "use_kanban: true",
                    "kanban_root: KB/PM_and_Portfolio/epics/overview",
                ]
            ),
            encoding="utf-8",
        )

        resolved, sourced_from_rw = mod.resolve_kanban_path_arg(
            root, "docs/project-management/kanban"
        )

        assert sourced_from_rw is True
        assert resolved == (root / "KB" / "PM_and_Portfolio" / "epics" / "overview").resolve()


def test_resolve_kanban_path_preserves_explicit_cli_override():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / "rw-config.yaml").write_text(
            "use_kanban: true\nkanban_root: KB/custom\n",
            encoding="utf-8",
        )

        explicit = "some/other/path"
        resolved, sourced_from_rw = mod.resolve_kanban_path_arg(root, explicit)

        assert sourced_from_rw is False
        assert resolved == Path(explicit).resolve()
