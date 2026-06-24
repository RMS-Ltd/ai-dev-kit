"""Tests for repository IA manifest generator and validators (FR-140 / E07:S01:T15)."""

from __future__ import annotations

import importlib.util
import json
import sys
from pathlib import Path

import pytest

_REPO = Path(__file__).resolve().parents[2]
_MAINT = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "maintenance"
_VALIDATION = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts" / "validation"


def _load_module(name: str, path: Path):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules[name] = mod
    spec.loader.exec_module(mod)
    return mod


@pytest.fixture(scope="module")
def exclusions_mod():
    return _load_module("repository_ia_exclusions", _MAINT / "repository_ia_exclusions.py")


@pytest.fixture(scope="module")
def generator_mod(exclusions_mod):
    return _load_module("generate_repository_path_manifest", _MAINT / "generate_repository_path_manifest.py")


@pytest.fixture(scope="module")
def top_level_mod():
    return _load_module(
        "validate_repository_top_level_directories",
        _VALIDATION / "validate_repository_top_level_directories.py",
    )


@pytest.fixture(scope="module")
def drift_mod(generator_mod):
    return _load_module(
        "validate_repository_path_manifest",
        _VALIDATION / "validate_repository_path_manifest.py",
    )


def test_exclusions_block_git_and_caches(exclusions_mod):
    assert exclusions_mod.path_is_excluded(".git/objects")
    assert exclusions_mod.path_is_excluded("portal/build/output")
    assert exclusions_mod.path_is_excluded("node_modules/pkg")
    assert not exclusions_mod.path_is_excluded("docs/kanban")


def test_generator_deterministic_compare(generator_mod):
    audit = _REPO / "docs" / "maintenance" / "REPOSITORY-DIRECTORY-AUDIT.md"
    m1 = generator_mod.build_manifest(_REPO, audit)
    m2 = generator_mod.build_manifest(_REPO, audit)
    assert generator_mod.manifest_for_compare(m1) == generator_mod.manifest_for_compare(m2)


def test_generator_no_excluded_paths_in_entries(generator_mod, exclusions_mod):
    audit = _REPO / "docs" / "maintenance" / "REPOSITORY-DIRECTORY-AUDIT.md"
    manifest = generator_mod.build_manifest(_REPO, audit)
    for entry in manifest["entries"]:
        path = entry["path"]
        assert path != ".git"
        assert not path.startswith("node_modules/")
        assert not exclusions_mod.path_is_excluded(path) or path == "."


def test_greenfield_mirror_tags(generator_mod):
    audit = _REPO / "docs" / "maintenance" / "REPOSITORY-DIRECTORY-AUDIT.md"
    manifest = generator_mod.build_manifest(_REPO, audit)
    gf_entries = [e for e in manifest["entries"] if e["path"].startswith("greenfield-install")]
    assert gf_entries, "expected greenfield-install entries"
    assert all(e["mirror"] for e in gf_entries)


def test_top_level_validator_fails_unknown_dir(top_level_mod, generator_mod, tmp_path):
    audit_src = _REPO / "docs" / "maintenance" / "REPOSITORY-DIRECTORY-AUDIT.md"
    manifest = generator_mod.build_manifest(_REPO, audit_src)
    manifest_path = tmp_path / "manifest.json"
    manifest_path.write_text(json.dumps(manifest), encoding="utf-8")
    (tmp_path / "unexpected-root-dir").mkdir()
    rc = top_level_mod.main.__wrapped__ if hasattr(top_level_mod.main, "__wrapped__") else None
    # Invoke via subprocess-style argv
    import argparse

    old_argv = sys.argv
    try:
        sys.argv = [
            "validate_repository_top_level_directories.py",
            "--project-root",
            str(tmp_path),
            "--manifest",
            str(manifest_path),
            "--strict",
        ]
        # Copy allowlist only — disk has extra dir
        assert top_level_mod.main() == 1
    finally:
        sys.argv = old_argv


def test_drift_validator_strict_on_stale(drift_mod, generator_mod, tmp_path):
    audit_src = _REPO / "docs" / "maintenance" / "REPOSITORY-DIRECTORY-AUDIT.md"
    manifest = generator_mod.build_manifest(_REPO, audit_src)
    manifest_path = tmp_path / "manifest.json"
    manifest_path.write_text(json.dumps(manifest), encoding="utf-8")
    (tmp_path / "new-dir").mkdir()
    old_argv = sys.argv
    try:
        sys.argv = [
            "validate_repository_path_manifest.py",
            "--project-root",
            str(tmp_path),
            "--manifest",
            str(manifest_path),
            "--audit",
            str(audit_src),
            "--strict",
        ]
        assert drift_mod.main() == 1
    finally:
        sys.argv = old_argv


def test_depth_max_two(generator_mod):
    audit = _REPO / "docs" / "maintenance" / "REPOSITORY-DIRECTORY-AUDIT.md"
    manifest = generator_mod.build_manifest(_REPO, audit)
    for entry in manifest["entries"]:
        assert entry["depth"] <= 2
