import importlib.util
import tempfile
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT_PATH = REPO_ROOT / "packages" / "frameworks" / "workflow mgt" / "scripts" / "install_release_workflow.py"


def _load_module():
    spec = importlib.util.spec_from_file_location("install_release_workflow", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def test_validate_required_placeholders_detects_missing_tokens():
    mod = _load_module()
    missing = mod.validate_required_placeholders(
        "Epic-{epic}/stories/Story-001.md",
        ["{epic}", "{story}"],
    )
    assert missing == ["{story}"]


def test_preview_pattern_matches_finds_files_under_kanban_root():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        kanban_root = root / "KB" / "PM_and_Portfolio" / "epics" / "overview"
        story = kanban_root / "Epic-15" / "stories" / "E15-S01.md"
        story.parent.mkdir(parents=True, exist_ok=True)
        story.write_text("# Story", encoding="utf-8")

        count, samples, err = mod.preview_pattern_matches(
            root,
            "KB/PM_and_Portfolio/epics/overview",
            "Epic-{epic}/stories/E{epic}-S{story}.md",
        )

        assert err is None
        assert count == 1
        assert samples == ["Epic-15/stories/E15-S01.md"]
