"""Tests for validate_ecc_adk_bridge.py."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent / "validate_ecc_adk_bridge.py"
REPO = Path(__file__).resolve().parents[5]


def _run(argv: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run([sys.executable, str(SCRIPT)] + argv, capture_output=True, text=True)


def test_validator_passes_on_template():
    proc = _run(["--project-root", str(REPO)])
    assert proc.returncode == 0, proc.stdout + proc.stderr


def test_validator_fails_missing_conflict_rules(tmp_path):
    wf = tmp_path / "packages/frameworks/workflow mgt" / "config"
    wf.mkdir(parents=True)
    bad = """harness_layer:
  provider: ecc
  enabled: false
  ecc_version_pin:
    npm_package: ecc-universal
  install:
    target: cursor
    profile: core
    single_install_path: true
  hook_profile: minimal
  disabled_hooks: []
  adk_skill_pack_path: packages/frameworks/workflow mgt/skills/
  conflict_rules: []
  attribution:
    spec: docs/spec.md
    license: MIT
    upstream: https://github.com/affaan-m/ECC
"""
    path = wf / "ecc-adk-bridge.yaml.template"
    path.write_text(bad, encoding="utf-8")
    proc = _run(["--project-root", str(tmp_path), "--bridge", str(path)])
    assert proc.returncode == 1
    assert "conflict_rules" in proc.stderr


def test_validator_fails_bad_skill_pack_path(tmp_path):
    wf = tmp_path / "packages/frameworks/workflow mgt" / "config"
    wf.mkdir(parents=True)
    # Minimal valid structure except path
    text = (REPO / "packages/frameworks/workflow mgt/config/ecc-adk-bridge.yaml.template").read_text(
        encoding="utf-8"
    )
    text = text.replace(
        "packages/frameworks/workflow mgt/skills/",
        "wrong/path/skills/",
    )
    path = wf / "ecc-adk-bridge.yaml.template"
    path.write_text(text, encoding="utf-8")
    proc = _run(["--project-root", str(tmp_path), "--bridge", str(path)])
    assert proc.returncode == 1
    assert "adk_skill_pack_path" in proc.stderr
