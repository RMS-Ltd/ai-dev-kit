"""Tests for rw_orchestrator.py (FR-122 Wave 5)."""

from __future__ import annotations

import sys
from pathlib import Path

_scripts = Path(__file__).resolve().parent.parent
for p in (_scripts, _scripts / "version", _scripts / "kanban"):
    if str(p) not in sys.path:
        sys.path.insert(0, str(p))

import rw_orchestrator as ro  # noqa: E402


def test_load_manifest_has_preflight_gates():
    manifest = ro.load_rw_contract_manifest()
    gates = ro.gates_for_phase(manifest, "preflight")
    ids = {g["id"] for g in gates}
    assert "step_1" in ids
    assert "step_1e" in ids
    assert "step_1f" in ids


def test_step_1b_requires_requested():
    gate = {"id": "step_1b", "phase": "PREFLIGHT", "script": None, "blocking": True}
    ctx = ro.OrchestratorContext(project_root=Path.cwd(), requested=None)
    result = ro._run_policy_gate(gate, ctx)
    assert result.status == "fail"
    assert result.exit_code == 1


def test_step_1b_parses_requested():
    gate = {"id": "step_1b", "phase": "PREFLIGHT", "script": None}
    ctx = ro.OrchestratorContext(project_root=Path.cwd(), requested="E02:S01:T30")
    result = ro._run_policy_gate(gate, ctx)
    assert result.status == "pass"


def test_gate_skipped_when_config_disabled(tmp_path):
    gate = {
        "id": "step_1e",
        "phase": "PREFLIGHT",
        "script": "scripts/validation/validate_allocator_health.py",
        "args": ["--strict"],
        "config_key": "allocator_health",
        "blocking": True,
    }
    config = {"allocator_health": {"enabled": False}}
    ctx = ro.OrchestratorContext(project_root=tmp_path, requested="E02:S01:T30")
    result = ro.run_gate(gate, pkg_root=ro._PKG_ROOT, config=config, ctx=ctx)
    assert result.status == "skip"


def test_dry_run_preflight_builds_commands():
    manifest = ro.load_rw_contract_manifest()
    ctx = ro.OrchestratorContext(
        project_root=Path.cwd(),
        requested="E02:S01:T30",
        art=True,
        dry_run=True,
    )
    results = ro.run_phase("preflight", manifest=manifest, ctx=ctx)
    assert results
    assert all(r.status in {"pass", "skip"} for r in results)
    step_1 = next(r for r in results if r.gate_id == "step_1")
    assert step_1.command is not None
    assert "--requested" in step_1.command
    assert "--art" in step_1.command


def test_main_all_requires_internal_version():
    assert ro.main(["all", "--requested", "E02:S01:T30"]) == 1
