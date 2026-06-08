"""Translation management tools tests (E21:S03:T05 / FR-006 Phase 3)."""

from __future__ import annotations

import importlib.util
import subprocess
import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
VALIDATE_SCRIPT = SCRIPTS / "validate_locale_translations.py"
SYNC_SCRIPT = SCRIPTS / "sync_locale_keys.py"
UTILS_SCRIPT = SCRIPTS / "locale_translation_utils.py"
MAINTAINER_GUIDE = (
    REPO_ROOT / "docs" / "documentation" / "user-docs" / "translation-management-tools.md"
)
WORKFLOW_DOC = (
    REPO_ROOT / "docs" / "governance" / "standards" / "translation-workflow-and-review.md"
)
CONTRIBUTOR_GUIDE = (
    REPO_ROOT / "docs" / "documentation" / "user-docs" / "contributing-translations.md"
)
INVENTORY = (
    REPO_ROOT / "docs" / "governance" / "standards" / "translatable-content-inventory.md"
)

pytestmark = pytest.mark.fr006


def _load_utils():
    spec = importlib.util.spec_from_file_location("locale_translation_utils", UTILS_SCRIPT)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules["locale_translation_utils"] = mod
    spec.loader.exec_module(mod)
    return mod


@pytest.fixture
def ltu():
    return _load_utils()


def _run_script(script: Path, *args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, str(script), *args],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )


def test_v1_validator_clean_repo_exit_zero():
    """V1: Validator passes on clean repository (non-strict)."""
    result = _run_script(VALIDATE_SCRIPT, "--package", "all")
    assert result.returncode == 0, result.stdout + result.stderr


def test_v2_strict_fails_on_missing_key(ltu, tmp_path):
    """V2: Strict mode fails when a target locale key is missing."""
    locales_root = tmp_path / "packages/frameworks/kanban/locales"
    en_gb = locales_root / "en-GB" / "keys"
    es = locales_root / "es" / "keys"
    en_gb.mkdir(parents=True)
    es.mkdir(parents=True)

    manifest = {
        "version": 2,
        "default_locale": "en-GB",
        "framework": "kanban",
        "locales": {
            "en-GB": {"keys": {"cli": "keys/cli.yaml"}},
            "es": {"keys": {"cli": "keys/cli.yaml"}},
        },
    }
    (locales_root / "manifest.yaml").write_text(
        yaml.dump(manifest, sort_keys=False), encoding="utf-8"
    )

    source = {
        "_meta": {"domain": "cli", "locale": "en-GB"},
        "keys": {
            "cli.a": "Alpha",
            "cli.b": "Beta {{name}}",
        },
    }
    target = {
        "_meta": {"domain": "cli", "locale": "es"},
        "keys": {"cli.a": "Alfa"},
    }
    (en_gb / "cli.yaml").write_text(yaml.dump(source, sort_keys=False), encoding="utf-8")
    (es / "cli.yaml").write_text(yaml.dump(target, sort_keys=False), encoding="utf-8")

    issues = ltu.validate_package_locales(tmp_path, "kanban")
    assert any(i.code == "missing_key" for i in issues)
    assert ltu.should_exit_nonzero(issues, strict=True)


def test_v3_placeholder_mismatch_detected(ltu):
    """V3: Placeholder token mismatch is reported."""
    issues = ltu.compare_key_catalogs(
        package="kanban",
        locale="es",
        rel_path="keys/cli.yaml",
        source={"cli.x": "Hello {{user}}"},
        target={"cli.x": "Hola"},
    )
    assert any(i.code == "placeholder_mismatch" for i in issues)


def test_v4_missing_manifest_asset(ltu, tmp_path):
    """V4: Missing manifest-indirected path is reported."""
    locales_root = tmp_path / "packages/frameworks/workflow-mgt/locales"
    (locales_root / "en-GB").mkdir(parents=True)
    (locales_root / "es").mkdir(parents=True)
    manifest = {
        "version": 2,
        "locales": {
            "en-GB": {"scaffolds": {"stub": "scaffolds/missing.txt"}},
            "es": {"scaffolds": {"stub": "scaffolds/missing.txt"}},
        },
    }
    (locales_root / "manifest.yaml").write_text(
        yaml.dump(manifest, sort_keys=False), encoding="utf-8"
    )
    issues = ltu.validate_package_locales(tmp_path, "workflow-mgt", locale_filter=["es"])
    assert any(i.code == "missing_manifest_asset" for i in issues)


def test_v5_yaml_parse_error(ltu, tmp_path):
    """V5: Invalid YAML in key catalog is a hard error."""
    locales_root = tmp_path / "packages/frameworks/kanban/locales"
    en_gb = locales_root / "en-GB" / "keys"
    es = locales_root / "es" / "keys"
    en_gb.mkdir(parents=True)
    es.mkdir(parents=True)
    manifest = {
        "version": 2,
        "locales": {
            "en-GB": {"keys": {"cli": "keys/cli.yaml"}},
            "es": {"keys": {"cli": "keys/cli.yaml"}},
        },
    }
    (locales_root / "manifest.yaml").write_text(
        yaml.dump(manifest, sort_keys=False), encoding="utf-8"
    )
    (en_gb / "cli.yaml").write_text(
        yaml.dump({"keys": {"cli.ok": "OK"}}, sort_keys=False),
        encoding="utf-8",
    )
    (es / "cli.yaml").write_text("keys: [unterminated\n", encoding="utf-8")

    issues = ltu.validate_package_locales(tmp_path, "kanban")
    assert any(i.code == "yaml_parse" for i in issues)


def test_v6_sync_adds_missing_keys(ltu, tmp_path):
    """V6: Sync adds missing keys from en-GB without overwriting existing values."""
    locales_root = tmp_path / "packages/frameworks/kanban/locales"
    en_gb = locales_root / "en-GB" / "keys"
    es = locales_root / "es" / "keys"
    en_gb.mkdir(parents=True)
    es.mkdir(parents=True)

    (en_gb / "cli.yaml").write_text(
        yaml.dump(
            {
                "_meta": {"domain": "cli", "locale": "en-GB"},
                "keys": {"cli.a": "Alpha", "cli.b": "Beta"},
            },
            sort_keys=False,
        ),
        encoding="utf-8",
    )
    (es / "cli.yaml").write_text(
        yaml.dump(
            {
                "_meta": {"domain": "cli", "locale": "es"},
                "keys": {"cli.a": "Alfa traducida"},
            },
            sort_keys=False,
        ),
        encoding="utf-8",
    )

    stats = ltu.sync_locale_keys_for_package(tmp_path, "kanban", "es", dry_run=False)
    assert stats["keys_added"] == 1

    data = yaml.safe_load((es / "cli.yaml").read_text(encoding="utf-8"))
    assert data["keys"]["cli.a"] == "Alfa traducida"
    assert data["keys"]["cli.b"] == "Beta"
    assert data["_meta"]["locale"] == "es"


def test_v7_sync_dry_run(ltu, tmp_path):
    """V7: Dry run reports keys to add without writing files."""
    locales_root = tmp_path / "packages/frameworks/kanban/locales"
    en_gb = locales_root / "en-GB" / "keys"
    es = locales_root / "es" / "keys"
    en_gb.mkdir(parents=True)
    es.mkdir(parents=True)

    (en_gb / "cli.yaml").write_text(
        yaml.dump({"keys": {"cli.new": "New"}}, sort_keys=False),
        encoding="utf-8",
    )
    (es / "cli.yaml").write_text(
        yaml.dump({"keys": {}}, sort_keys=False),
        encoding="utf-8",
    )

    stats = ltu.sync_locale_keys_for_package(tmp_path, "kanban", "es", dry_run=True)
    assert stats["keys_added"] == 1
    data = yaml.safe_load((es / "cli.yaml").read_text(encoding="utf-8"))
    assert "cli.new" not in (data.get("keys") or {})


def test_v8_package_filter_cli():
    """V8: Package filter runs successfully for kanban only."""
    result = _run_script(VALIDATE_SCRIPT, "--package", "kanban")
    assert result.returncode == 0, result.stdout + result.stderr
    assert "kanban" in result.stdout.lower() or "Summary" in result.stdout


def test_v9_maintainer_guide_lists_tools():
    """V9: Maintainer guide documents all three management tools."""
    assert MAINTAINER_GUIDE.is_file()
    text = MAINTAINER_GUIDE.read_text(encoding="utf-8")
    for needle in (
        "validate_locale_translations.py",
        "sync_locale_keys.py",
        "scaffold_locale_trees.py",
    ):
        assert needle in text


def test_v10_workflow_and_contributor_cross_links():
    """V10: Workflow policy and contributor guide reference validate script."""
    workflow = WORKFLOW_DOC.read_text(encoding="utf-8")
    contributor = CONTRIBUTOR_GUIDE.read_text(encoding="utf-8")
    assert "validate_locale_translations.py" in workflow
    assert "validate_locale_translations.py" in contributor
    assert "E21:S03:T05" not in workflow.split("## Out of scope")[1].split("##")[0]


def test_v11_inventory_handoff_includes_t05():
    """V11: Inventory handoffs include E21:S03:T05."""
    text = INVENTORY.read_text(encoding="utf-8")
    assert "E21:S03:T05" in text
