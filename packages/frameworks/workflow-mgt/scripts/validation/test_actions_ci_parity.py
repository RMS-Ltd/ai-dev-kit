"""Unit tests for validate_actions_ci_parity (E02:S16:T05 / BR-104)."""

from __future__ import annotations

import pytest

from validate_actions_ci_parity import (
    _DEFAULT_CHECKS,
    _parse_checks,
    _scoped_pytest_targets,
    _scoped_workflow_pytest_targets,
    _select_checks,
    main,
)


def test_strict_with_no_changes_fails_without_allow_path_skip(monkeypatch):
    """TC2: --strict with empty diff must exit non-zero (no subprocess — avoids parity recursion)."""
    monkeypatch.setattr(
        "validate_actions_ci_parity._changed_paths", lambda **_: set()
    )
    assert main(["--strict", "--staged-only"]) == 1


def test_strict_allow_path_skip_exits_zero(monkeypatch):
    """TC3: explicit docs-only skip is permitted."""
    monkeypatch.setattr(
        "validate_actions_ci_parity._changed_paths", lambda **_: set()
    )
    assert main(["--strict", "--staged-only", "--allow-path-skip"]) == 0


def test_strict_all_lists_all_check_ids():
    """TC4: --strict --all selects every default check."""
    checks = _parse_checks(_DEFAULT_CHECKS)
    selected = _select_checks(checks, set(), run_all=True)
    assert len(selected) == len(_DEFAULT_CHECKS)
    ids = {c.id for c in selected}
    assert ids == {
        "tests",
        "portal-publish-scope",
        "docusaurus",
        "greenfield-install",
        "workflow-scripts-pytest",
    }


def test_framework_only_change_does_not_select_full_tests_check():
    checks = _parse_checks(None)
    changed = {"packages/frameworks/workflow-mgt/scripts/foo.py"}
    selected = _select_checks(checks, changed, run_all=False)
    ids = {c.id for c in selected}
    assert "workflow-scripts-pytest" in ids
    assert "tests" not in ids


def test_scoped_pytest_targets_prefers_explicit_test_files():
    changed = {
        "packages/frameworks/workflow-mgt/scripts/release_state/migrate.py",
        "tests/release_state/test_migrate.py",
    }
    assert _scoped_pytest_targets(changed) == ["tests/release_state/test_migrate.py"]


def test_version_only_diff_skips_pytest_scope():
    assert _scoped_pytest_targets({"src/ai_dev_kit/version.py"}) is None


def test_scoped_workflow_pytest_targets_only_validation_tests():
    changed = {
        "packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py",
        "packages/frameworks/workflow-mgt/scripts/validation/test_actions_ci_parity.py",
        "packages/frameworks/workflow-mgt/scripts/release_state/migrate.py",
    }
    assert _scoped_workflow_pytest_targets(changed) == [
        "packages/frameworks/workflow-mgt/scripts/validation/test_actions_ci_parity.py",
    ]


@pytest.mark.parametrize(
    "changed,expected",
    [
        ({"docs/guides/foo.md"}, {"portal-publish-scope"}),
        ({"portal/docusaurus.config.js"}, {"docusaurus"}),
        ({"src/ai_dev_kit/version.py"}, set()),
    ],
)
def test_path_selection_scopes_checks(changed, expected):
    checks = _parse_checks(None)
    selected = {c.id for c in _select_checks(checks, changed, run_all=False)}
    assert expected <= selected
