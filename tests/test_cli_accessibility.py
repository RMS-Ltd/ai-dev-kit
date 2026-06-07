"""CLI accessibility tests (E21:S08:T03 / ADR-025 Layer 1)."""

from __future__ import annotations

import os
import sys
from pathlib import Path
from unittest.mock import patch

import pytest

from cli.main import create_parser, main
from cli.utils import (
    color_enabled,
    print_error,
    print_info,
    print_success,
    print_warning,
)


@pytest.fixture
def no_color_env(monkeypatch):
    monkeypatch.setenv("NO_COLOR", "1")


@pytest.fixture
def color_env(monkeypatch):
    monkeypatch.delenv("NO_COLOR", raising=False)


def test_color_enabled_respects_no_color(no_color_env):
    assert color_enabled() is False


def test_color_enabled_when_unset(color_env):
    assert color_enabled() is True


def test_print_error_text_label_no_color(no_color_env, capsys):
    print_error("something failed")
    captured = capsys.readouterr()
    assert "Error: something failed" in captured.err
    assert "\u274c" not in captured.err


def test_print_success_text_label_no_color(no_color_env, capsys):
    print_success("done")
    captured = capsys.readouterr()
    assert "Success: done" in captured.out
    assert "\u2705" not in captured.out


def test_print_warning_stderr_and_label_no_color(no_color_env, capsys):
    print_warning("careful")
    captured = capsys.readouterr()
    assert captured.out == ""
    assert "Warning: careful" in captured.err
    assert "\u26a0" not in captured.err


def test_print_info_text_label_no_color(no_color_env, capsys):
    print_info("note")
    captured = capsys.readouterr()
    assert "Info: note" in captured.out


def test_print_error_includes_label_with_color_enabled(color_env, capsys):
    print_error("x")
    captured = capsys.readouterr()
    assert "Error: x" in captured.err


def test_fr108_format_banner_unchanged():
    scripts = (
        Path(__file__).resolve().parents[1]
        / "packages"
        / "frameworks"
        / "workflow-mgt"
        / "scripts"
    )
    sys.path.insert(0, str(scripts))
    try:
        import adk_install_errors  # type: ignore[import-untyped]

        banner = adk_install_errors.format_banner("ADK-I06.E01")
        assert banner.startswith("ERROR [ADK-I06.E01]")
    finally:
        if str(scripts) in sys.path:
            sys.path.remove(str(scripts))


def test_main_no_color_sets_env(color_env, monkeypatch):
    monkeypatch.setattr(
        "sys.argv",
        ["ai-dev-kit", "--no-color", "list"],
    )
    with patch("cli.commands.list.ListCommand.execute", return_value=0):
        rc = main()
    assert rc == 0
    assert os.environ.get("NO_COLOR") == "1"


def test_parser_accepts_no_color_flag():
    args = create_parser().parse_args(["--no-color", "list"])
    assert args.no_color is True
    assert args.command == "list"
