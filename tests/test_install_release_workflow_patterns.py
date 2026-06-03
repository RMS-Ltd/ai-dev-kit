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


def test_detect_kanban_doc_patterns_prefers_fresh_install_layout():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        kanban = "docs/project-management/kanban"
        epic1 = root / kanban / "epics" / "Epic-1" / "Epic-1.md"
        story1 = root / kanban / "epics" / "Epic-1" / "Story-009-greenfield.md"
        epic1.parent.mkdir(parents=True, exist_ok=True)
        epic1.write_text("# Epic 1", encoding="utf-8")
        story1.write_text("# Story", encoding="utf-8")

        epic_pat, story_pat, fresh = mod.detect_kanban_doc_patterns(root, kanban)

        assert fresh is True
        assert epic_pat == mod.FRESH_KANBAN_EPIC_PATTERN
        assert story_pat == mod.FRESH_KANBAN_STORY_PATTERN
        assert mod._pattern_match_score(root, kanban, epic_pat) >= 1
        assert mod._pattern_match_score(root, kanban, story_pat) >= 1


def test_detect_kanban_board_default_prefers_kboard():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        kanban = "docs/kanban"
        kb = root / kanban
        kb.mkdir(parents=True)
        (kb / "kboard.md").write_text("# board", encoding="utf-8")
        (kb / "_index.md").write_text("# index", encoding="utf-8")

        assert mod.detect_kanban_board_default(root, kanban) == "kboard.md"
