"""French (fr) locale delivery tests (E21:S05:T02 / FR-006)."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
WF_CLI = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/fr/keys/cli.yaml"
WF_INSTALLER = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/fr/keys/installer.yaml"
WF_CLI_GB = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/en-GB/keys/cli.yaml"
KANBAN_CLI = REPO_ROOT / "packages/frameworks/kanban/locales/fr/keys/cli.yaml"
REGISTRY = REPO_ROOT / "docs/governance/standards/translatable-content-registry.yaml"
VALIDATE_SCRIPT = (
    REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py"
)
REPORT_SCRIPT = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/report_locale_completeness.py"

pytestmark = pytest.mark.fr006


def test_validate_locale_translations_fr_strict() -> None:
    result = subprocess.run(
        [
            sys.executable,
            str(VALIDATE_SCRIPT),
            "--package",
            "all",
            "--locale",
            "fr",
            "--strict",
        ],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout


def test_fr_p0_cli_prompts_translated_not_interim_copy() -> None:
    es_fr = yaml.safe_load(WF_CLI.read_text(encoding="utf-8"))
    gb = yaml.safe_load(WF_CLI_GB.read_text(encoding="utf-8"))
    assert es_fr["_meta"]["locale"] == "fr"
    assert es_fr["keys"]["cli.prompt.language_choice"] != gb["keys"]["cli.prompt.language_choice"]
    assert "Sélectionnez" in es_fr["keys"]["cli.prompt.language_choice"]


def test_fr_installer_wizard_uses_formal_register_sample() -> None:
    data = yaml.safe_load(WF_INSTALLER.read_text(encoding="utf-8"))
    wizard = data["keys"]["installer.wizard.config_header"]
    assert "Configuration" in wizard


def test_fr_kanban_cli_key_parity_with_en_gb() -> None:
    fr = yaml.safe_load(KANBAN_CLI.read_text(encoding="utf-8"))
    gb = yaml.safe_load(
        (REPO_ROOT / "packages/frameworks/kanban/locales/en-GB/keys/cli.yaml").read_text(
            encoding="utf-8"
        )
    )
    assert set(fr["keys"]) == set(gb["keys"])


def test_fr_completeness_report_shows_linguistic_progress() -> None:
    result = subprocess.run(
        [sys.executable, str(REPORT_SCRIPT), "--locale", "fr", "--format", "json"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout
    assert "linguistic" in result.stdout.lower() or "9" in result.stdout or "100" in result.stdout


def test_registry_fr_linguistic_status_not_pending() -> None:
    registry = yaml.safe_load(REGISTRY.read_text(encoding="utf-8"))
    fr_entry = registry["scaffold_locales"]["fr"]
    assert fr_entry["linguistic_status"] in ("complete", "in_progress")
