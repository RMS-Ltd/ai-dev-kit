"""Tests for RW installer rw-config generation (BR-084 / E06:S09:T13)."""

import importlib.util
import sys
import tempfile
from pathlib import Path
from unittest import mock

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPT_PATH = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "install_release_workflow.py"
INSTALL_DOC = REPO_ROOT / "INSTALL_IN_YOUR_PROJECT.md"


def _load_module():
    spec = importlib.util.spec_from_file_location("install_release_workflow", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    spec.loader.exec_module(module)
    return module


def _fresh_kanban_tree(root: Path, kanban: str = "docs/project-management/kanban") -> Path:
    epic1 = root / kanban / "epics" / "Epic-1" / "Epic-1.md"
    story1 = root / kanban / "epics" / "Epic-1" / "Story-009-greenfield.md"
    fr_br = root / kanban / "fr-br"
    epic1.parent.mkdir(parents=True, exist_ok=True)
    epic1.write_text("# Epic 1", encoding="utf-8")
    story1.write_text("# Story", encoding="utf-8")
    fr_br.mkdir(parents=True, exist_ok=True)
    (fr_br / "BR-001.md").write_text("# BR", encoding="utf-8")
    (root / kanban / "kboard.md").write_text("# board", encoding="utf-8")
    return root


def test_generate_rw_config_yaml_includes_task_and_fr_br():
    mod = _load_module()
    config = {
        "project_name": "test",
        "version_file": "src/test/version.py",
        "main_changelog": "CHANGELOG.md",
        "changelog_dir": "docs/changelogs",
        "scripts_path": "scripts",
        "readme_file": "README.md",
        "use_kanban": True,
        "kanban_root": "docs/project-management/kanban",
        "epic_doc_pattern": mod.FRESH_KANBAN_EPIC_PATTERN,
        "story_doc_pattern": mod.FRESH_KANBAN_STORY_PATTERN,
        "kanban_board": "kboard.md",
        "task_doc_pattern": mod.FRESH_KANBAN_TASK_PATTERN,
        "fr_br_root": "docs/project-management/kanban/fr-br",
    }
    yaml_text = mod.generate_rw_config_yaml(config)
    assert "task_doc_pattern:" in yaml_text
    assert mod.FRESH_KANBAN_TASK_PATTERN in yaml_text
    assert "fr_br_root:" in yaml_text
    assert "docs/project-management/kanban/fr-br" in yaml_text


def test_detect_kanban_supplementary_defaults_fresh_layout():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = _fresh_kanban_tree(Path(tmp))
        kanban = "docs/project-management/kanban"
        task_pat, fr_br = mod.detect_kanban_supplementary_defaults(root, kanban)
        assert task_pat == mod.FRESH_KANBAN_TASK_PATTERN
        assert fr_br == "docs/project-management/kanban/fr-br"


def test_e2e_generated_config_epic_pattern_matches_files():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = _fresh_kanban_tree(Path(tmp))
        kanban = "docs/project-management/kanban"
        epic_pat, story_pat, _ = mod.detect_kanban_doc_patterns(root, kanban)
        task_pat, fr_br = mod.detect_kanban_supplementary_defaults(root, kanban)
        config = {
            "project_name": "test",
            "version_file": "version.py",
            "main_changelog": "CHANGELOG.md",
            "changelog_dir": "docs/changelogs",
            "scripts_path": "scripts",
            "readme_file": "README.md",
            "use_kanban": True,
            "kanban_root": kanban,
            "epic_doc_pattern": epic_pat,
            "story_doc_pattern": story_pat,
            "kanban_board": mod.detect_kanban_board_default(root, kanban),
            "task_doc_pattern": task_pat,
        }
        if fr_br:
            config["fr_br_root"] = fr_br
        yaml_text = mod.generate_rw_config_yaml(config)
        assert "task_doc_pattern:" in yaml_text
        count, _, err = mod.preview_pattern_matches(root, kanban, epic_pat)
        assert err is None
        assert count >= 1


def _load_signoff_module():
    import importlib.util

    signoff_path = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/install_github_issue_signoff.py"
    spec = importlib.util.spec_from_file_location(
        "install_github_issue_signoff",
        signoff_path,
    )
    signoff = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules["install_github_issue_signoff"] = signoff
    spec.loader.exec_module(signoff)
    return signoff


BOOK_T03_RW_CONFIG = {
    "use_kanban": True,
    "kanban_root": "docs/project-management/kanban",
    "epic_doc_pattern": "epics/epic-{epic:02d}/epic-{epic:02d}.md",
    "story_doc_pattern": "epics/epic-{epic:02d}/story-{story:03d}-*.md",
    "task_doc_pattern": "epics/epic-{epic:02d}/story-{story:03d}/t{task:02d}-*.md",
}


def test_signoff_br084_accepts_lowercase_task_pattern():
    import yaml

    signoff = _load_signoff_module()
    br084_spec = {
        "require_keys": [
            "use_kanban",
            "kanban_root",
            "epic_doc_pattern",
            "story_doc_pattern",
            "task_doc_pattern",
        ],
        "epic_doc_pattern_contains": "epic-",
        "story_doc_pattern_contains": "story-",
        "task_doc_pattern_contains_any": ["T{task", "t{task"],
    }
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / "rw-config.yaml").write_text(
            yaml.dump(BOOK_T03_RW_CONFIG),
            encoding="utf-8",
        )
        result = signoff._run_check_rw_config_patterns(root, br084_spec)
        assert result.passed


def test_signoff_br086_ready_after_br084_on_book_t03_config():
    signoff = _load_signoff_module()
    br086_entry = {
        "id": "BR-086",
        "when_all": [
            {
                "type": "rw_config_patterns",
                "require_keys": [
                    "use_kanban",
                    "kanban_root",
                    "epic_doc_pattern",
                    "story_doc_pattern",
                    "task_doc_pattern",
                ],
                "epic_doc_pattern_contains_any": [
                    "epic-{epic}/epic-{epic}",
                    "epic-{epic:02d}",
                ],
                "story_doc_pattern_contains": "story-{story:03d}",
                "task_doc_pattern_contains": "t{task",
            },
            {"type": "no_capitalised_kanban_segments"},
        ],
    }
    with tempfile.TemporaryDirectory() as tmp:
        import yaml

        root = Path(tmp)
        kanban = root / "docs/project-management/kanban"
        epic_dir = kanban / "epics" / "epic-01"
        epic_dir.mkdir(parents=True)
        (epic_dir / "epic-01.md").write_text("# Epic 1", encoding="utf-8")
        (kanban / "kboard.md").write_text("# board", encoding="utf-8")
        (root / "rw-config.yaml").write_text(
            yaml.dump(
                {
                    **BOOK_T03_RW_CONFIG,
                    "epic_doc_pattern": "epics/epic-{epic}/epic-{epic}.md",
                }
            ),
            encoding="utf-8",
        )
        ev084 = signoff._evaluate_issue(
            root,
            {
                "id": "BR-084",
                "when_all": [
                    {
                        "type": "rw_config_patterns",
                        "task_doc_pattern_contains_any": ["T{task", "t{task"],
                        "require_keys": [
                            "use_kanban",
                            "kanban_root",
                            "epic_doc_pattern",
                            "story_doc_pattern",
                            "task_doc_pattern",
                        ],
                        "epic_doc_pattern_contains": "epic-",
                        "story_doc_pattern_contains": "story-",
                    }
                ],
            },
            set(),
        )
        assert ev084.ready
        ev086 = signoff._evaluate_issue(root, br086_entry, {"BR-084"})
        assert not ev086.skipped
        assert ev086.ready


def test_signoff_br083_accepts_unpadded_epic_patterns():
    import yaml

    signoff = _load_signoff_module()

    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / "rw-config.yaml").write_text(
            yaml.dump(
                {
                    "use_kanban": True,
                    "kanban_root": "docs/project-management/kanban",
                    "epic_doc_pattern": "epics/epic-{epic}/epic-{epic}.md",
                    "story_doc_pattern": "epics/epic-{epic}/story-{story:03d}-*.md",
                    "task_doc_pattern": "epics/epic-{epic}/story-{story:03d}/t{task:02d}-*.md",
                }
            ),
            encoding="utf-8",
        )
        result = signoff._run_check_rw_config_patterns(
            root,
            {
                "epic_doc_pattern_contains_any": [
                    "epic-{epic}/epic-{epic}",
                    "epic-{epic:02d}",
                ],
                "story_doc_pattern_contains_any": [
                    "story-{story:03d}",
                    "story-{story:02d}",
                ],
            },
        )
        assert result.passed


def test_strict_zero_match_blocks_use_anyway_when_kanban_exists():
    mod = _load_module()
    with tempfile.TemporaryDirectory() as tmp:
        root = _fresh_kanban_tree(Path(tmp))
        kanban = "docs/project-management/kanban"
        bad = "epics/Epic-{epic}.md"
        good = mod.FRESH_KANBAN_EPIC_PATTERN
        answers = iter([bad, good])

        with mock.patch.object(mod, "prompt_question", side_effect=lambda *a, **k: next(answers)):
            with mock.patch.object(mod, "prompt_yes_no") as mock_yes:
                result = mod.prompt_pattern_with_validation(
                    prompt="Epic pattern",
                    default=good,
                    project_root=root,
                    kanban_root=kanban,
                    required_placeholders=["{epic}"],
                    suggestion_examples=[good],
                    strict_zero_match=True,
                )
        mock_yes.assert_not_called()
        assert result == good


def test_book_t03_contract_br084_not_not_ready():
    from unittest import mock

    signoff = _load_signoff_module()
    ok = signoff.CheckResult("command", True, "exit 0")

    with tempfile.TemporaryDirectory() as tmp:
        import yaml

        root = Path(tmp)
        kanban = root / "docs/project-management/kanban"
        epic_dir = kanban / "epics" / "epic-01"
        epic_dir.mkdir(parents=True)
        (epic_dir / "epic-01.md").write_text("# Epic 1", encoding="utf-8")
        (kanban / "kboard.md").write_text("# board", encoding="utf-8")
        (root / "rw-config.yaml").write_text(
            yaml.dump(BOOK_T03_RW_CONFIG),
            encoding="utf-8",
        )
        (root / "version.py").write_text("VERSION = '0.0.0.0+0'\n", encoding="utf-8")
        cfg = BOOK_T03_RW_CONFIG.copy()
        cfg["version_file"] = "version.py"
        (root / "rw-config.yaml").write_text(yaml.dump(cfg), encoding="utf-8")

        with mock.patch.object(signoff, "_run_check_command", return_value=ok):
            report = signoff.evaluate_all(root, signoff.CONTRACT_PATH)

    by_id = {i["id"]: i for i in report["issues"]}
    assert by_id["BR-084"]["ready"] is True
    assert by_id["BR-086"]["skipped"] is False
    assert by_id["BR-086"]["ready"] is True
    not_ready = [
        i
        for i in report["issues"]
        if not i["ready"] and not i.get("skipped")
    ]
    assert not any(i["id"] == "BR-084" for i in not_ready)


def test_install_doc_lists_task_doc_pattern_in_post_kanban_snippet():
    text = INSTALL_DOC.read_text(encoding="utf-8")
    assert "Post-kanban RW install" in text
    assert "task_doc_pattern:" in text
    assert "fr_br_root:" in text
