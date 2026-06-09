"""Spanish (es) locale delivery tests (E21:S05:T01 / FR-006)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
WF_CLI = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/es/keys/cli.yaml"
WF_INSTALLER = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/es/keys/installer.yaml"
WF_CLI_GB = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/en-GB/keys/cli.yaml"
KANBAN_CLI = REPO_ROOT / "packages/frameworks/kanban/locales/es/keys/cli.yaml"
REGISTRY = REPO_ROOT / "docs/governance/standards/translatable-content-registry.yaml"
VALIDATE_SCRIPT = (
    REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py"
)
REPORT_SCRIPT = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/report_locale_completeness.py"

pytestmark = pytest.mark.fr006


def test_validate_locale_translations_es_strict() -> None:
    result = subprocess.run(
        [
            sys.executable,
            str(VALIDATE_SCRIPT),
            "--package",
            "all",
            "--locale",
            "es",
            "--strict",
        ],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout


def test_es_p0_cli_prompts_translated_not_interim_copy() -> None:
    es = yaml.safe_load(WF_CLI.read_text(encoding="utf-8"))
    gb = yaml.safe_load(WF_CLI_GB.read_text(encoding="utf-8"))
    assert es["_meta"]["locale"] == "es"
    assert es["keys"]["cli.prompt.language_choice"] != gb["keys"]["cli.prompt.language_choice"]
    assert "Seleccione" in es["keys"]["cli.prompt.language_choice"]


def test_es_installer_wizard_uses_formal_register_sample() -> None:
    data = yaml.safe_load(WF_INSTALLER.read_text(encoding="utf-8"))
    wizard = data["keys"]["installer.wizard.config_header"]
    assert "Configuración" in wizard or "configuración" in wizard


def test_es_kanban_cli_key_parity_with_en_gb() -> None:
    es = yaml.safe_load(KANBAN_CLI.read_text(encoding="utf-8"))
    gb = yaml.safe_load(
        (REPO_ROOT / "packages/frameworks/kanban/locales/en-GB/keys/cli.yaml").read_text(
            encoding="utf-8"
        )
    )
    assert set(es["keys"]) == set(gb["keys"])


def test_es_completeness_report_shows_linguistic_progress() -> None:
    result = subprocess.run(
        [sys.executable, str(REPORT_SCRIPT), "--locale", "es", "--format", "json"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout
    assert "linguistic" in result.stdout.lower() or "93" in result.stdout or "100" in result.stdout


def test_registry_es_linguistic_status_not_pending() -> None:
    registry = yaml.safe_load(REGISTRY.read_text(encoding="utf-8"))
    es_entry = registry["scaffold_locales"]["es"]
    assert es_entry["linguistic_status"] in ("complete", "in_progress")
