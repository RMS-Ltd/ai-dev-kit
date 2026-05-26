"""Tests for validate_adk_ecc_skill_pack.py."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

SCRIPT = Path(__file__).resolve().parent / "validate_adk_ecc_skill_pack.py"
REPO = Path(__file__).resolve().parents[5]


def _run(argv: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run([sys.executable, str(SCRIPT)] + argv, capture_output=True, text=True)


def test_validator_passes_on_ai_dev_kit_repo():
    proc = _run(["--project-root", str(REPO)])
    assert proc.returncode == 0, proc.stdout + proc.stderr


def test_validator_fails_when_skill_missing(tmp_path):
    wf = tmp_path / "packages/frameworks/workflow mgt"
    cfg = wf / "config"
    cfg.mkdir(parents=True)
    skills = wf / "skills"
    skills.mkdir(parents=True)
    bridge = """harness_layer:
  adk_skill_pack_path: packages/frameworks/workflow mgt/skills/
"""
    (cfg / "ecc-adk-bridge.yaml.template").write_text(bridge, encoding="utf-8")
    (skills / "README.md").write_text(
        "# Pack\nBridge field `adk_skill_pack_path` must be:\npackages/frameworks/workflow mgt/skills/\n",
        encoding="utf-8",
    )
    proc = _run(["--project-root", str(tmp_path)])
    assert proc.returncode == 1
    assert "Missing SKILL.md" in proc.stderr


def test_validator_fails_on_bad_origin(tmp_path):
    wf = tmp_path / "packages/frameworks/workflow mgt"
    cfg = wf / "config"
    cfg.mkdir(parents=True)
    skills = wf / "skills"
    bridge = """harness_layer:
  adk_skill_pack_path: packages/frameworks/workflow mgt/skills/
"""
    (cfg / "ecc-adk-bridge.yaml.template").write_text(bridge, encoding="utf-8")

    def write_skill(slug: str, guide_sub: str, origin: str = "ai-dev-kit"):
        body = f"""---
name: {slug}
description: Test placeholder for {slug}
origin: {origin}
---

Governance pointers: see [`guide`](../../KB/Documentation/Developer_Docs/vwmp/{guide_sub}).

**Git / release:** ADK forbids standalone `git commit` and `git push`; use **Release Workflow (RW)** only per `.cursorrules`.
"""
        d = skills / slug
        d.mkdir(parents=True)
        (d / "SKILL.md").write_text(body, encoding="utf-8")

    guide_map = {
        "adk-release-workflow": "release-workflow-agent-execution.md",
        "adk-kanban-sync": "update-kanban-workflow-agent-execution.md",
        "adk-implementation-planning": "implementation-planning-workflow-agent-execution.md",
        "adk-intake-fr-br-uxr": "intake-workflow-agent-execution.md",
        "adk-version-bump": "release-workflow-agent-execution.md",
    }
    for slug, g in guide_map.items():
        bad_origin = "wrong-pack" if slug == "adk-release-workflow" else "ai-dev-kit"
        write_skill(slug, g, origin=bad_origin)

    (skills / "README.md").write_text(
        "# Pack\n`adk_skill_pack_path` default: `packages/frameworks/workflow mgt/skills/`\n",
        encoding="utf-8",
    )

    proc = _run(["--project-root", str(tmp_path)])
    assert proc.returncode == 1
    assert "origin must be `ai-dev-kit`" in proc.stderr
