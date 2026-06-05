import os
from pathlib import Path


def _import_rw_config_loader():
    repo_root = Path(__file__).resolve().parents[1]
    scripts_dir = repo_root / "packages/frameworks/workflow-mgt/scripts"
    # Scripts aren’t installed as a package; import by path.
    import sys

    sys.path.insert(0, str(scripts_dir))
    import rw_config_loader  # type: ignore

    return rw_config_loader, repo_root


def test_rw_config_loader_parity_project_root_vs_explicit_path():
    rw_config_loader, repo_root = _import_rw_config_loader()

    cfg_path = repo_root / "rw-config.yaml"
    assert cfg_path.exists(), "Expected rw-config.yaml at repo root for loader parity tests"

    cfg_from_root = rw_config_loader.load_rw_config(project_root=repo_root)
    cfg_from_path = rw_config_loader.load_rw_config_from_path(cfg_path)
    cfg_or_empty = rw_config_loader.load_rw_config_or_empty(project_root=repo_root)

    assert isinstance(cfg_from_root, dict)
    assert cfg_from_root == cfg_from_path
    assert cfg_from_root == cfg_or_empty


def test_rw_config_loader_missing_file_returns_none(tmp_path):
    rw_config_loader, _repo_root = _import_rw_config_loader()

    missing = tmp_path / "rw-config.yaml"
    assert not missing.exists()
    assert rw_config_loader.load_rw_config_from_path(missing) is None


def test_rw_config_loader_cwd_fallback(monkeypatch, tmp_path):
    rw_config_loader, repo_root = _import_rw_config_loader()

    # When cwd has rw-config.yaml, default loader should succeed.
    monkeypatch.chdir(repo_root)
    assert rw_config_loader.load_rw_config(project_root=None) == rw_config_loader.load_rw_config_from_path(
        repo_root / "rw-config.yaml"
    )

    # When cwd does not have rw-config.yaml, default loader returns None.
    monkeypatch.chdir(tmp_path)
    assert rw_config_loader.load_rw_config(project_root=None) is None

