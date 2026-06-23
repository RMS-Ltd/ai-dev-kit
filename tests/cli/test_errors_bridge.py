from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

import cli.adk_install_errors_bridge as bridge


def test_candidate_script_dirs_returns_paths():
    dirs = bridge._candidate_script_dirs()
    assert dirs
    assert all(isinstance(p, Path) for p in dirs)


def test_load_module_raises_when_unavailable():
    with patch("cli.adk_install_errors_bridge._candidate_script_dirs", return_value=[]):
        bridge._MODULE = None
        with pytest.raises(ImportError):
            bridge._load_module()


def test_bridge_functions_delegate_to_loaded_module():
    module = MagicMock()
    module.build_result_extras.return_value = {"adk_error_code": "ADK-I06.E01"}
    module.registry_version.return_value = "1.0.0"
    with patch("cli.adk_install_errors_bridge._load_module", return_value=module):
        assert bridge.build_result_extras("ADK-I06.E01")["adk_error_code"] == "ADK-I06.E01"
        bridge.emit_install_error("ADK-I06.E01")
        assert bridge.registry_version() == "1.0.0"


def test_merge_error_into_event_merges_for_error_status():
    with patch("cli.adk_install_errors_bridge.build_result_extras", return_value={"adk_error_code": "ADK-I06.E01"}):
        merged = bridge.merge_error_into_event({"result": {"status": "error", "details": "boom"}}, "ADK-I06.E01")
    assert merged["result"]["adk_error_code"] == "ADK-I06.E01"


def test_merge_error_into_event_ignores_success_status():
    with patch("cli.adk_install_errors_bridge.build_result_extras", return_value={"adk_error_code": "ADK-I06.E01"}):
        merged = bridge.merge_error_into_event({"result": {"status": "success", "details": "ok"}}, "ADK-I06.E01")
    assert "adk_error_code" not in merged["result"]
