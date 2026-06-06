"""Tests for verify_vendor_tree.py (FR-111 / E06:S09:T24)."""

from __future__ import annotations

import hashlib
import importlib.util
import sys
from pathlib import Path

import pytest

_REPO = Path(__file__).resolve().parents[2]
_SCRIPTS = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts"
_VENDOR_OK = _REPO  # maintainer repo satisfies required layout

_ENTRYPOINT_REL = (
    "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py"
)
_EXTRA_STUB_RELS = (
    "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
    "packages/frameworks/kanban/scripts/install_kanban_framework.py",
)


def _write_stub_scripts(root: Path, rel_paths: tuple[str, ...]) -> None:
    for rel in rel_paths:
        path = root / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("# stub\n", encoding="utf-8")


@pytest.fixture(scope="module")
def verify_mod():
    """Load verify_vendor_tree with adk_install_errors registered (importlib preflight)."""
    adk_path = _SCRIPTS / "adk_install_errors.py"
    adk_spec = importlib.util.spec_from_file_location("adk_install_errors", adk_path)
    adk_mod = importlib.util.module_from_spec(adk_spec)
    assert adk_spec.loader is not None, "adk_install_errors loader missing"
    sys.modules["adk_install_errors"] = adk_mod
    adk_spec.loader.exec_module(adk_mod)

    path = _SCRIPTS / "verify_vendor_tree.py"
    spec = importlib.util.spec_from_file_location("verify_vendor_tree", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None, "verify_vendor_tree loader missing"
    sys.modules["verify_vendor_tree"] = mod
    spec.loader.exec_module(mod)
    return mod


def test_vendor_ok_exits_zero(verify_mod):
    code, emitted = verify_mod.run_verify(_VENDOR_OK, emit=False)
    assert code == 0, "maintainer repo should satisfy vendor layout"
    assert emitted is None, "success path should not emit ADK code"


def test_missing_entrypoint_emits_e04(verify_mod, tmp_path):
    empty = tmp_path / "empty"
    empty.mkdir()
    code, emitted = verify_mod.run_verify(empty, emit=False)
    assert code == 1, "empty vendor root should fail preflight"
    assert emitted == "ADK-I05.E04", "missing entrypoints should emit E04"


def test_missing_registry_emits_e05(verify_mod, tmp_path):
    root = tmp_path / "partial"
    _write_stub_scripts(root, (_ENTRYPOINT_REL, *_EXTRA_STUB_RELS))

    code, emitted = verify_mod.run_verify(root, emit=False)
    assert code == 1, "partial layout without registry should fail"
    assert emitted == "ADK-I05.E05", "missing registry/emitter should emit E05"


def test_tarball_checksum_mismatch_emits_e03(verify_mod, tmp_path):
    tarball = tmp_path / "bundle.tar.gz"
    tarball.write_bytes(b"not-a-real-tarball")
    wrong = "0" * 64
    code, emitted = verify_mod.run_verify(
        _VENDOR_OK,
        tarball=tarball,
        sha256=wrong,
        emit=False,
    )
    assert code == 1, "checksum mismatch should fail preflight"
    assert emitted == "ADK-I05.E03", "bad tarball digest should emit E03"


def test_tarball_checksum_match_then_layout_ok(verify_mod, tmp_path):
    tarball = tmp_path / "bundle.tar.gz"
    payload = b"greenfield-bytes"
    tarball.write_bytes(payload)
    digest = hashlib.sha256(payload).hexdigest()
    code, emitted = verify_mod.run_verify(
        _VENDOR_OK,
        tarball=tarball,
        sha256=digest,
        emit=False,
    )
    assert code == 0, "valid tarball and layout should pass"
    assert emitted is None, "success path should not emit ADK code"
