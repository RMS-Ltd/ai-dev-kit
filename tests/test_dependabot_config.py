"""FR-105 / E08:S03:T06 — Dependabot config policy checks."""

from pathlib import Path

import yaml

REPO_ROOT = Path(__file__).resolve().parents[1]
DEPENDABOT_YML = REPO_ROOT / ".github" / "dependabot.yml"


def _load_config():
    assert DEPENDABOT_YML.is_file(), f"missing {DEPENDABOT_YML}"
    with DEPENDABOT_YML.open(encoding="utf-8") as f:
        return yaml.safe_load(f)


def test_dependabot_file_exists():
    assert DEPENDABOT_YML.is_file()


def test_dependabot_covers_pip_and_npm():
    cfg = _load_config()
    assert cfg.get("version") == 2
    updates = cfg.get("updates") or []
    ecosystems = {(u.get("package-ecosystem"), u.get("directory")) for u in updates}
    assert ("pip", "/") in ecosystems
    assert ("npm", "/portal") in ecosystems


def test_dependabot_npm_has_docusaurus_group():
    cfg = _load_config()
    npm = next(u for u in cfg["updates"] if u.get("package-ecosystem") == "npm")
    groups = npm.get("groups") or {}
    assert "docusaurus" in groups
    patterns = groups["docusaurus"].get("patterns") or []
    assert "@docusaurus/*" in patterns
