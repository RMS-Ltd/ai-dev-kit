"""Tests for verify_vendor_tree.py (FR-111 / E06:S09:T24)."""

from __future__ import annotations

import hashlib
import importlib.util
from pathlib import Path

import pytest

_REPO = Path(__file__).resolve().parents[2]
_SCRIPTS = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts"
_VENDOR_OK = _REPO  # maintainer repo satisfies required layout


def _load_verify_module():
    path = _SCRIPTS / "verify_vendor_tree.py"
    spec = importlib.util.spec_from_file_location("verify_vendor_tree", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(mod)
    return mod


def test_vendor_ok_exits_zero():
    mod = _load_verify_module()
    code, emitted = mod.run_verify(_VENDOR_OK, emit=False)
    assert code == 0
    assert emitted is None


def test_missing_entrypoint_emits_e04(tmp_path):
    mod = _load_verify_module()
    empty = tmp_path / "empty"
    empty.mkdir()
    code, emitted = mod.run_verify(empty, emit=False)
    assert code == 1
    assert emitted == "ADK-I05.E04"


def test_missing_registry_emits_e05(tmp_path):
    mod = _load_verify_module()
    root = tmp_path / "partial"
    orch = (
        root
        / "packages/frameworks/workflow-mgt/scripts/install_greenfield_path.py"
    )
    orch.parent.mkdir(parents=True)
    orch.write_text("# stub\n", encoding="utf-8")
    for rel in (
        "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
        "packages/frameworks/kanban/scripts/install_kanban_framework.py",
    ):
        p = root / rel
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text("# stub\n", encoding="utf-8")

    code, emitted = mod.run_verify(root, emit=False)
    assert code == 1
    assert emitted == "ADK-I05.E05"


def test_tarball_checksum_mismatch_emits_e03(tmp_path):
    mod = _load_verify_module()
    tarball = tmp_path / "bundle.tar.gz"
    tarball.write_bytes(b"not-a-real-tarball")
    wrong = "0" * 64
    code, emitted = mod.run_verify(
        _VENDOR_OK,
        tarball=tarball,
        sha256=wrong,
        emit=False,
    )
    assert code == 1
    assert emitted == "ADK-I05.E03"


def test_tarball_checksum_match_then_layout_ok(tmp_path):
    mod = _load_verify_module()
    tarball = tmp_path / "bundle.tar.gz"
    payload = b"greenfield-bytes"
    tarball.write_bytes(payload)
    digest = hashlib.sha256(payload).hexdigest()
    code, emitted = mod.run_verify(
        _VENDOR_OK,
        tarball=tarball,
        sha256=digest,
        emit=False,
    )
    assert code == 0
    assert emitted is None
