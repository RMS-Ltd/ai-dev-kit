"""Unit tests for FR-062 install receipt schema (install_receipt.py)."""

import importlib.util
import json
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
SCRIPT_PATH = (
    REPO_ROOT
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "scripts"
    / "install_receipt.py"
)


def _load_install_receipt():
    spec = importlib.util.spec_from_file_location("install_receipt", SCRIPT_PATH)
    module = importlib.util.module_from_spec(spec)
    assert spec is not None and spec.loader is not None
    sys.modules["install_receipt_fr062"] = module
    spec.loader.exec_module(module)
    return module


@pytest.fixture(scope="module")
def receipt_mod():
    return _load_install_receipt()


def test_build_receipt_has_required_fields(receipt_mod):
    receipt = receipt_mod.build_receipt(
        frameworks=[
            receipt_mod.framework_entry(
                name="kanban",
                requested_version="2.1.0",
                source="https://github.com/RMS-Ltd/ai-dev-kit/releases/download/kanban-v2.1.0/kanban-v2.1.0.tar.gz",
                hash_value="sha256:abc123",
                status="installed",
            )
        ],
        status="installed",
        install_run_id="2026-05-29T12:00:00Z_deadbeef",
        timestamp="2026-05-29T12:00:00Z",
    )
    assert receipt_mod.validate_receipt(receipt) == []
    assert receipt["schema_version"] == "1.0.0"
    assert receipt["frameworks"][0]["name"] == "kanban"


def test_validate_receipt_rejects_missing_framework_keys(receipt_mod):
    bad = {
        "schema_version": "1.0.0",
        "install_run_id": "run-1",
        "timestamp": "2026-05-29T12:00:00Z",
        "status": "installed",
        "frameworks": [{"name": "kanban"}],
    }
    errors = receipt_mod.validate_receipt(bad)
    assert any("missing keys" in err for err in errors)


def test_write_receipt_under_adopter_root(receipt_mod, tmp_path):
    (tmp_path / ".ai-dev-kit.yaml").write_text("install_logging:\n  keep: 5\n", encoding="utf-8")
    receipt = receipt_mod.build_receipt(
        frameworks=[
            receipt_mod.framework_entry(
                name="workflow-mgt",
                requested_version="2.1.4",
                source="https://example.test/workflow-mgt-v2.1.4.tar.gz",
                hash_value="sha256:deadbeef",
                status="installed",
            )
        ],
        status="installed",
        install_run_id="2026-05-29T12:00:01Z_cafe12",
    )
    out = receipt_mod.write_receipt(receipt, project_root=tmp_path)
    assert out.parent == tmp_path / "logs" / "ai-dev-kit" / "install"
    assert out.name == "receipt-2026-05-29T12-00-01Z_cafe12.json"
    loaded = json.loads(out.read_text(encoding="utf-8"))
    assert loaded["install_run_id"] == "2026-05-29T12:00:01Z_cafe12"
    assert receipt_mod.validate_receipt(loaded) == []


def test_find_adopter_project_root(tmp_path, receipt_mod, monkeypatch):
    nested = tmp_path / "src" / "app"
    nested.mkdir(parents=True)
    (tmp_path / ".ai-dev-kit.yaml").write_text("{}", encoding="utf-8")
    monkeypatch.chdir(nested)
    assert receipt_mod.find_adopter_project_root() == tmp_path.resolve()
