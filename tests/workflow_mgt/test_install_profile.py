"""Tests for install_profile.py (FR-135 / E06:S09:T38)."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

import pytest

_REPO = Path(__file__).resolve().parents[2]
_SCRIPTS = _REPO / "packages" / "frameworks" / "workflow-mgt" / "scripts"
_EXAMPLE = (
    _REPO
    / "packages"
    / "frameworks"
    / "workflow-mgt"
    / "config"
    / "install-profile.example.yaml"
)


@pytest.fixture(scope="module")
def profile_mod():
    path = _SCRIPTS / "install_profile.py"
    spec = importlib.util.spec_from_file_location("install_profile", path)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules["install_profile"] = mod
    spec.loader.exec_module(mod)
    return mod


def test_load_example_install_profile(profile_mod):
    kind, profile = profile_mod.load_config_file(_EXAMPLE)
    assert kind == "install_profile"
    assert profile.adoption_path == "greenfield"
    assert profile.release_state_backend == "sqlite"
    assert profile.trigger_bundle == "rw_ukw"
    assert profile.non_interactive is True
    assert not profile.validate()


def test_to_rw_install_dict_emits_sqlite_and_kanban_completed(profile_mod, tmp_path):
    profile = profile_mod.InstallProfile(
        release_state_backend="sqlite",
        init_kanban_completed=True,
        trigger_bundle="rw_ukw",
    )
    cfg = profile.to_rw_install_dict(tmp_path)
    assert cfg["release_state_backend"] == "sqlite"
    assert cfg["release_state_db"] == ".adk/release-state.db"
    assert cfg["kanban_completed"]["db"] == ".adk/kanban-completed.db"
    assert cfg["install_trigger_bundle"] == "rw_ukw"


def test_greenfield_defaults_zero_prompt_fields(profile_mod):
    profile = profile_mod.InstallProfile()
    profile.greenfield_defaults()
    assert profile.adoption_path == "greenfield"
    assert profile.kma_offer == "skip"
    assert profile.run_install_rc is True


def test_legacy_rw_config_not_profile(profile_mod, tmp_path):
    legacy = tmp_path / "rw-only.yaml"
    legacy.write_text(
        "version_file: src/x/version.py\nuse_kanban: false\n",
        encoding="utf-8",
    )
    kind, data = profile_mod.load_config_file(legacy)
    assert kind == "rw_config"
    assert data["use_kanban"] is False
