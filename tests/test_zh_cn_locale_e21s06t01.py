"""Chinese Simplified (zh-CN) locale delivery tests (E21:S06:T01 / FR-006)."""

from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
WF_CLI = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/zh-CN/keys/cli.yaml"
WF_INSTALLER = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/zh-CN/keys/installer.yaml"
WF_CLI_GB = REPO_ROOT / "packages/frameworks/workflow-mgt/locales/en-GB/keys/cli.yaml"
KANBAN_CLI = REPO_ROOT / "packages/frameworks/kanban/locales/zh-CN/keys/cli.yaml"
REGISTRY = REPO_ROOT / "docs/governance/standards/translatable-content-registry.yaml"
VALIDATE_SCRIPT = (
    REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/validate_locale_translations.py"
)
REPORT_SCRIPT = REPO_ROOT / "packages/frameworks/workflow-mgt/scripts/report_locale_completeness.py"

pytestmark = pytest.mark.fr006

_CJK_RE = re.compile(r"[\u4e00-\u9fff]")


def test_validate_locale_translations_zh_cn_strict() -> None:
    result = subprocess.run(
        [
            sys.executable,
            str(VALIDATE_SCRIPT),
            "--package",
            "all",
            "--locale",
            "zh-CN",
            "--strict",
        ],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout


def test_zh_cn_p0_cli_prompts_translated_not_interim_copy() -> None:
    zh = yaml.safe_load(WF_CLI.read_text(encoding="utf-8"))
    gb = yaml.safe_load(WF_CLI_GB.read_text(encoding="utf-8"))
    assert zh["_meta"]["locale"] == "zh-CN"
    prompt = zh["keys"]["cli.prompt.language_choice"]
    assert prompt != gb["keys"]["cli.prompt.language_choice"]
    assert _CJK_RE.search(prompt)


def test_zh_cn_installer_wizard_uses_simplified_chinese_sample() -> None:
    data = yaml.safe_load(WF_INSTALLER.read_text(encoding="utf-8"))
    wizard = data["keys"]["installer.wizard.config_header"]
    assert _CJK_RE.search(wizard)


def test_zh_cn_kanban_cli_key_parity_with_en_gb() -> None:
    zh = yaml.safe_load(KANBAN_CLI.read_text(encoding="utf-8"))
    gb = yaml.safe_load(
        (REPO_ROOT / "packages/frameworks/kanban/locales/en-GB/keys/cli.yaml").read_text(
            encoding="utf-8"
        )
    )
    assert set(zh["keys"]) == set(gb["keys"])


def test_zh_cn_completeness_report_shows_linguistic_progress() -> None:
    result = subprocess.run(
        [sys.executable, str(REPORT_SCRIPT), "--locale", "zh-CN", "--format", "json"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
    )
    assert result.returncode == 0, result.stderr or result.stdout
    assert "linguistic" in result.stdout.lower() or "100" in result.stdout


def test_registry_zh_cn_linguistic_status_not_pending() -> None:
    registry = yaml.safe_load(REGISTRY.read_text(encoding="utf-8"))
    zh_entry = registry["scaffold_locales"]["zh-CN"]
    assert zh_entry["linguistic_status"] in ("complete", "in_progress")
