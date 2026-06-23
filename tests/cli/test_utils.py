import os
from pathlib import Path

from cli.exceptions import AIDevKitError
from cli.utils import (
    get_project_root,
    handle_error,
    print_error,
    print_info,
    print_success,
    print_warning,
    redact,
)


def test_get_project_root_finds_git_ancestor(tmp_path: Path):
    project = tmp_path / "proj"
    nested = project / "a" / "b"
    (project / ".git").mkdir(parents=True)
    nested.mkdir(parents=True)
    cwd = Path.cwd()
    try:
        os.chdir(nested)
        assert get_project_root() == project
    finally:
        os.chdir(cwd)


def test_redact_masks_known_secret_patterns():
    msg = "GITHUB_TOKEN=abc password=123 PASSWORD=XYZ Bearer token"
    redacted = redact(msg)
    assert "GITHUB_TOKEN=***" in redacted
    assert "password=***" in redacted
    assert "PASSWORD=***" in redacted
    assert "Bearer ***" in redacted


def test_handle_error_for_custom_exception():
    err = AIDevKitError("boom")
    assert handle_error(err) == 1


def test_handle_error_for_keyboard_interrupt():
    assert handle_error(KeyboardInterrupt()) == 130


def test_print_helpers_do_not_raise():
    print_error("error")
    print_warning("warn")
    print_info("info")
    print_success("ok")
