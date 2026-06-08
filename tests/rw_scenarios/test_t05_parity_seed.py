"""T05 foundation: replay one scenario ID with sqlite backend column."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
VERSION_DIR = SCRIPTS / "version"
FIXTURE_YAML = REPO_ROOT / "tests/fixtures/semver-registry-mini.yaml"

sys.path.insert(0, str(SCRIPTS))
sys.path.insert(0, str(VERSION_DIR))

import finalize_rw_semver_registry as frsr  # noqa: E402
import semver_converter  # noqa: E402
from release_state.export_legacy import export_registry_yaml  # noqa: E402
from release_state.import_legacy import import_registry_yaml  # noqa: E402


@pytest.fixture
def parity_sqlite(tmp_path, monkeypatch):
    yaml_path = tmp_path / "semver-registry.yaml"
    yaml_path.write_bytes(FIXTURE_YAML.read_bytes())
    db_path = tmp_path / ".adk" / "release-state.db"
    import_registry_yaml(yaml_path, db_path, changelog_dir=None)

    config = {
        "semver_mapping_strategy": "task_touch",
        "release_state_backend": "sqlite",
        "release_state_db": ".adk/release-state.db",
    }
    monkeypatch.chdir(tmp_path)
    monkeypatch.setattr(semver_converter, "load_rw_config", lambda: config)
    monkeypatch.setattr(semver_converter, "get_release_state_backend", lambda: "sqlite")
    monkeypatch.setattr(semver_converter, "get_release_state_db_path", lambda: db_path)
    monkeypatch.setattr(frsr, "get_release_state_backend", lambda: "sqlite")
    monkeypatch.setattr(frsr, "get_release_state_db_path", lambda: db_path)
    return tmp_path, db_path


def test_RW_S01_parity_sqlite_finalize(parity_sqlite):
    """T05 seed: RW-S01 first finalize on new internal version — sqlite backend."""
    _tmp, db_path = parity_sqlite
    internal = "0.2.17.4+2"
    payload = frsr.finalize_rw_semver_registry(internal)
    assert payload["created"] is True
    semver_sqlite = payload["semver_full"]

    export_path = _tmp / "export.yaml"
    export_registry_yaml(db_path, export_path)
    exported = yaml.safe_load(export_path.read_text(encoding="utf-8"))
    history = exported["rc_0"]["task_touch_mode"]["mapping_history"]
    row = next(e for e in history if e["internal_version"] == internal)
    assert row["semver"] == semver_sqlite
