import argparse
import json
from pathlib import Path

import pytest

from cli.config import Config
from cli.logging import (
    _default_event_contract,
    _validate_event_contract,
    close_install_logger,
    create_install_logger,
)


def test_default_event_contract_status_mapping():
    assert _default_event_contract("INFO", "ctx", "msg")["result"]["status"] == "ok"
    assert _default_event_contract("WARNING", "ctx", "msg")["result"]["status"] == "warning"
    assert _default_event_contract("ERROR", "ctx", "msg")["result"]["status"] == "error"


def test_validate_event_contract_rejects_missing_fields():
    with pytest.raises(ValueError):
        _validate_event_contract({"intent": {}, "action": {}, "result": {}})


def test_create_install_logger_respects_no_install_log(temp_project_dir: Path):
    config = Config(temp_project_dir / ".ai-dev-kit.yaml")
    args = argparse.Namespace(no_install_log=True, log_path=None)
    log, log_dir, log_file, fh = create_install_logger(temp_project_dir, config, args)
    log("INFO", "install.main", "hello")
    assert log_dir is None
    assert log_file is None
    assert fh is None


def test_create_install_logger_json_mode_writes_event(temp_project_dir: Path):
    cfg_path = temp_project_dir / ".ai-dev-kit.yaml"
    cfg_path.write_text(
        'version: "1.0.0"\n'
        "default_backend: git-submodule\n"
        "frameworks: {}\n"
        "install_logging:\n"
        "  enabled: true\n"
        "  format: json\n"
        "  path: logs/ai-dev-kit/install\n"
        "  keep: 2\n"
    )
    config = Config(cfg_path)
    args = argparse.Namespace(no_install_log=False, log_path=None)
    log, log_dir, log_file, fh = create_install_logger(temp_project_dir, config, args)
    log("INFO", "install.main", "unit-test event")
    close_install_logger(fh, log_dir, config)
    assert log_file is not None
    payload = json.loads(log_file.read_text(encoding="utf-8").splitlines()[-1])
    assert payload["context"] == "install.main"
    assert payload["message"] == "unit-test event"


def test_close_install_logger_applies_retention(temp_project_dir: Path):
    cfg_path = temp_project_dir / ".ai-dev-kit.yaml"
    cfg_path.write_text(
        'version: "1.0.0"\n'
        "default_backend: git-submodule\n"
        "frameworks: {}\n"
        "install_logging:\n"
        "  enabled: true\n"
        "  path: logs/ai-dev-kit/install\n"
        "  keep: 1\n"
    )
    config = Config(cfg_path)
    args = argparse.Namespace(no_install_log=False, log_path=None)

    log1, log_dir1, _log_file1, fh1 = create_install_logger(temp_project_dir, config, args)
    log1("INFO", "install.main", "one")
    close_install_logger(fh1, log_dir1, config)

    log2, log_dir2, _log_file2, fh2 = create_install_logger(temp_project_dir, config, args)
    log2("INFO", "install.main", "two")
    close_install_logger(fh2, log_dir2, config)

    assert log_dir2 is not None
    logs = sorted(log_dir2.glob("install-*.log"))
    assert len(logs) == 1
