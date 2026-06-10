"""Tests for release_state import/export round-trip."""

from __future__ import annotations

import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts"
sys.path.insert(0, str(SCRIPTS))
sys.path.insert(0, str(SCRIPTS / "version"))

from release_state.export_legacy import export_registry_yaml  # noqa: E402
from release_state.import_legacy import (  # noqa: E402
    import_registry_yaml,
    validate_import,
)
from release_state.store import load_registry_from_sqlite  # noqa: E402

FIXTURE_YAML = REPO_ROOT / "tests/fixtures/semver-registry-mini.yaml"


def _mapping_audit(reg: dict) -> tuple[int, int]:
    counter = 0
    mappings = 0
    for key, scope in reg.items():
        if not key.startswith("rc_"):
            continue
        ttm = scope.get("task_touch_mode") or {}
        counter = max(counter, int(ttm.get("task_touch_counter", 0)))
        mappings += len(ttm.get("mapping_history") or [])
    return counter, mappings


@pytest.fixture
def mini_db(tmp_path):
    db = tmp_path / "release-state.db"
    import_registry_yaml(FIXTURE_YAML, db, changelog_dir=None)
    return db


def test_import_validate_counts(mini_db):
    ok, msg = validate_import(FIXTURE_YAML, mini_db)
    assert ok, msg
    assert "counter=3" in msg
    assert "mappings=3" in msg


def test_export_roundtrip_semantic(mini_db, tmp_path):
    out = tmp_path / "exported.yaml"
    export_registry_yaml(mini_db, out)
    original = yaml.safe_load(FIXTURE_YAML.read_text(encoding="utf-8"))
    exported = yaml.safe_load(out.read_text(encoding="utf-8"))
    assert _mapping_audit(original) == _mapping_audit(exported)
    orig_hist = original["rc_0"]["task_touch_mode"]["mapping_history"]
    exp_hist = exported["rc_0"]["task_touch_mode"]["mapping_history"]
    assert len(orig_hist) == len(exp_hist)
    for o, e in zip(orig_hist, exp_hist):
        assert o["internal_version"] == e["internal_version"]
        assert o["patch"] == e["patch"]


def test_import_idempotent(mini_db):
    import_registry_yaml(FIXTURE_YAML, mini_db, changelog_dir=None)
    ok, _ = validate_import(FIXTURE_YAML, mini_db)
    assert ok
    loaded = load_registry_from_sqlite(mini_db)
    assert _mapping_audit(loaded) == (3, 3)


@pytest.mark.slow
def test_production_registry_import_roundtrip(tmp_path):
    prod_yaml = REPO_ROOT / "semver-registry.yaml"
    if not prod_yaml.exists():
        pytest.skip("production semver-registry.yaml not present")
    db = tmp_path / "prod.db"
    import_registry_yaml(prod_yaml, db, changelog_dir=None)
    ok, msg = validate_import(prod_yaml, db)
    assert ok, msg
    out = tmp_path / "prod-export.yaml"
    export_registry_yaml(db, out)
    ok2, msg2 = validate_import(out, db)
    assert ok2, msg2
