"""Tests for IDW CQG validator strict vs advisory behavior."""

from __future__ import annotations

import subprocess
import sys
import tempfile
from pathlib import Path

_REPO = Path(__file__).resolve().parents[5]
_VALIDATOR = (
    _REPO
    / "packages/frameworks/workflow-mgt/scripts/validation/validate_code_quality_gate.py"
)
_FIXTURE_SARIF = (
    _REPO
    / "packages/frameworks/tooling-automation/validators/tests/fixtures/cqg/sample.sarif"
)


def _minimal_rw_config(tmp: Path, *, advisory: bool = True) -> Path:
    cfg = tmp / "rw-config.yaml"
    cfg.write_text(
        f"""
code_quality_gate:
  enabled: true
  idw_threshold: errors
  idw_advisory: {str(advisory).lower()}
  reports_dir: .cqg/reports
  cache_dir: .cqg/cache
  last_run_file: .cqg/last-run.json
""",
        encoding="utf-8",
    )
    return cfg


def test_advisory_exits_zero_on_threshold_breach():
    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td)
        cfg = _minimal_rw_config(tmp, advisory=True)
        proc = subprocess.run(
            [
                sys.executable,
                str(_VALIDATOR),
                "--config",
                str(cfg),
                "--sarif",
                str(_FIXTURE_SARIF),
                "--no-strict",
            ],
            cwd=_REPO,
            capture_output=True,
            text=True,
        )
        assert proc.returncode == 0
        assert "ADVISORY" in proc.stdout + proc.stderr


def test_strict_exits_nonzero_on_error():
    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td)
        cfg = _minimal_rw_config(tmp, advisory=False)
        proc = subprocess.run(
            [
                sys.executable,
                str(_VALIDATOR),
                "--config",
                str(cfg),
                "--sarif",
                str(_FIXTURE_SARIF),
                "--strict",
            ],
            cwd=_REPO,
            capture_output=True,
            text=True,
        )
        assert proc.returncode == 1


def test_skip_exits_zero():
    proc = subprocess.run(
        [sys.executable, str(_VALIDATOR), "--skip"],
        cwd=_REPO,
        capture_output=True,
        text=True,
    )
    assert proc.returncode == 0
    assert "SKIP" in proc.stdout + proc.stderr


def test_legacy_rw_keys_still_load():
    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td)
        cfg = tmp / "rw-config.yaml"
        cfg.write_text(
            """
code_quality_gate:
  enabled: true
  rw_threshold: errors
  rw_advisory: true
  reports_dir: .cqg/reports
  cache_dir: .cqg/cache
  last_run_file: .cqg/last-run.json
""",
            encoding="utf-8",
        )
        proc = subprocess.run(
            [
                sys.executable,
                str(_VALIDATOR),
                "--config",
                str(cfg),
                "--sarif",
                str(_FIXTURE_SARIF),
                "--no-strict",
            ],
            cwd=_REPO,
            capture_output=True,
            text=True,
        )
        assert proc.returncode == 0
