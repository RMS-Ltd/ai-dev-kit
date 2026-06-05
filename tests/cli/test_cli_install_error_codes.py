"""CLI install must emit ADK-I06.* not Kanban ADK-I02.E01 (FR-111)."""

from __future__ import annotations

from cli.commands.install import CLI_INSTALL_ERROR_GENERIC, CLI_INSTALL_ERROR_NOT_FOUND


def test_cli_install_error_constants_are_i06():
    assert CLI_INSTALL_ERROR_GENERIC == "ADK-I06.E01"
    assert CLI_INSTALL_ERROR_NOT_FOUND == "ADK-I06.E02"
    assert CLI_INSTALL_ERROR_GENERIC.startswith("ADK-I06")
    assert CLI_INSTALL_ERROR_NOT_FOUND.startswith("ADK-I06")
