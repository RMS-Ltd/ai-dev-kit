"""Feedback payload includes ADK error codes (FR-108 / contract 1.1.0)."""

from __future__ import annotations

import argparse
import json

from cli.commands.logs import LogsCommand
from cli.config import Config


def test_build_feedback_payload_includes_primary_adk_error_codes(tmp_path):
    log_dir = tmp_path / "logs" / "ai-dev-kit" / "install"
    log_dir.mkdir(parents=True)
    log_file = log_dir / "install-20260101-120000.log"
    entry = {
        "timestamp_utc": "2026-01-01T12:00:00Z",
        "level": "ERROR",
        "context": "install.framework",
        "message": "failed",
        "install_run_id": "run-abc",
        "step_id": "cli-step-0001",
        "event_contract": {
            "intent": {"summary": "x"},
            "action": {"summary": "y"},
            "result": {
                "status": "error",
                "details": "failed",
                "adk_error_code": "ADK-I02.E01",
                "error_registry_version": "1.0.0",
            },
        },
    }
    log_file.write_text(json.dumps(entry) + "\n", encoding="utf-8")

    cfg_path = tmp_path / ".ai-dev-kit.yaml"
    cfg_path.write_text(
        "install_logging:\n  enabled: true\n  format: json\n  path: logs/ai-dev-kit/install\n",
        encoding="utf-8",
    )
    Config(cfg_path)
    args = argparse.Namespace(logs_command="prepare-feedback-payload", install_log=None)
    cmd = LogsCommand(args)

    # Build via private helper
    entries, errors = cmd._collect_install_json_entries(log_file)
    assert not errors
    payload = cmd._build_feedback_payload(tmp_path, log_file, entries)
    assert payload["feedback_contract_version"] == "1.1.0"
    assert payload["context"]["primary_adk_error_codes"] == ["ADK-I02.E01"]
    assert payload["context"]["error_registry_version"] == "1.0.0"
    assert "ADK-I02.E01" in payload["triage"]["adk_error_code_hint"]
