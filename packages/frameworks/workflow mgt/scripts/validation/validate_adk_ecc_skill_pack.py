#!/usr/bin/env python3
"""Validate ADK ECC-compatible workflow skill pack (FR-098 Phase 1).

Checks:
  - Five SKILL.md files under packages/frameworks/workflow mgt/skills/<slug>/
  - YAML frontmatter: name, description, origin == ai-dev-kit
  - Each skill references its canonical agent execution guide (vwmp *.md link)
  - Anti git policy: mentions git commit/push with RW-only / Release Workflow guardrails
  - Bridge template YAML: adk_skill_pack_path matches canonical skills directory
  - skills/README documents adk_skill_pack_path and the canonical path string
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Dict, List, Tuple

try:
    import yaml
except ImportError:
    yaml = None


SKILL_ORDER = (
    "adk-release-workflow",
    "adk-kanban-sync",
    "adk-implementation-planning",
    "adk-intake-fr-br-uxr",
    "adk-version-bump",
)

REQUIRED_GUIDE_SUBSTRINGS: Dict[str, str] = {
    "adk-release-workflow": "release-workflow-agent-execution.md",
    "adk-kanban-sync": "update-kanban-workflow-agent-execution.md",
    "adk-implementation-planning": "implementation-planning-workflow-agent-execution.md",
    "adk-intake-fr-br-uxr": "intake-workflow-agent-execution.md",
    "adk-version-bump": "release-workflow-agent-execution.md",
}


def workflow_mgt_dir(project_root: Path) -> Path:
    return project_root / "packages" / "frameworks" / "workflow mgt"


def skills_pack_root(project_root: Path) -> Path:
    return workflow_mgt_dir(project_root) / "skills"


def bridge_template(project_root: Path) -> Path:
    return workflow_mgt_dir(project_root) / "config" / "ecc-adk-bridge.yaml.template"


def canonical_adk_skill_pack_path_relative() -> str:
    return "packages/frameworks/workflow mgt/skills/"


def parse_frontmatter(text: str) -> Tuple[dict | None, str]:
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return None, text
    end = None
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            end = i
            break
    if end is None:
        return None, text
    raw = "\n".join(lines[1:end])
    meta = yaml.safe_load(raw) if yaml else None
    body = "\n".join(lines[end + 1 :])
    return (meta if isinstance(meta, dict) else {}), body


def normalize_origin(value) -> str:
    if value is None:
        return ""
    return str(value).strip().lower()


def has_anti_git_policy(body: str) -> bool:
    low = body.lower()
    if "git commit" not in low and "git push" not in low:
        return False
    if "release workflow" in low or "rw-only" in low or "rw only" in low:
        return True
    if "do not" in low and ("commit" in low or "push" in low):
        return True
    if "never" in low and ("commit" in low or "push" in low):
        return True
    return False


def validate_readme(readme: Path, expected_path_token: str) -> List[str]:
    errs: List[str] = []
    if not readme.is_file():
        return [f"Missing skills README: {readme}"]
    txt = readme.read_text(encoding="utf-8", errors="replace")
    if "adk_skill_pack_path" not in txt:
        errs.append("skills/README.md must mention `adk_skill_pack_path` (bridge field).")
    if expected_path_token not in txt:
        errs.append(
            f"skills/README.md must document the canonical path string `{expected_path_token}`."
        )
    return errs


def validate_bridge(project_root: Path, expected_path_token: str) -> List[str]:
    errs: List[str] = []
    path = bridge_template(project_root)
    if not path.is_file():
        return [f"Missing bridge template: {path}"]
    if yaml is None:
        return ["PyYAML is required to validate bridge template (import yaml failed)."]
    try:
        doc = yaml.safe_load(path.read_text(encoding="utf-8", errors="replace"))
    except Exception as exc:  # pragma: no cover
        return [f"Bridge template YAML parse error: {exc}"]
    root = doc or {}
    hl = root.get("harness_layer") or {}
    raw = hl.get("adk_skill_pack_path")
    if not isinstance(raw, str) or not raw.strip():
        errs.append("harness_layer.adk_skill_pack_path missing or not a string in bridge template.")
        return errs
    norm = raw.strip().replace("\\\\", "/")
    if not norm.endswith("/"):
        norm = norm + "/"
    exp = expected_path_token
    if norm.rstrip("/") != exp.rstrip("/"):
        errs.append(
            f"Bridge adk_skill_pack_path `{raw.strip()!r}` must match canonical `{exp}`."
        )
    return errs


def validate_skills(project_root: Path) -> List[str]:
    errs: List[str] = []
    base = skills_pack_root(project_root)
    for slug in SKILL_ORDER:
        sp = base / slug / "SKILL.md"
        if not sp.is_file():
            errs.append(f"Missing SKILL.md for {slug}: {sp}")
            continue
        text = sp.read_text(encoding="utf-8", errors="replace")
        meta, body = parse_frontmatter(text)
        if meta is None:
            errs.append(f"{slug}: missing or invalid YAML frontmatter (opening --- fence).")
            continue
        for key in ("name", "description"):
            if key not in meta or not str(meta[key]).strip():
                errs.append(f"{slug}: frontmatter `{key}` missing or empty.")
        origin_ok = normalize_origin(meta.get("origin")) == "ai-dev-kit"
        if not origin_ok:
            errs.append(f"{slug}: frontmatter origin must be `ai-dev-kit` (got `{meta.get('origin')!r}`).")

        guide = REQUIRED_GUIDE_SUBSTRINGS.get(slug)
        if guide and guide not in text:
            errs.append(f"{slug}: must reference `{guide}` (canonical agent execution guide).")

        if not has_anti_git_policy(body):
            errs.append(
                f"{slug}: must document ADK git policy — mention git commit/push plus RW-only or Release Workflow authority."
            )
    return errs


def main(argv: List[str]) -> int:
    p = argparse.ArgumentParser(description="Validate ADK ECC skill pack wiring.")
    p.add_argument("--project-root", type=Path, default=None, help="Repository root (default: cwd).")
    args = p.parse_args(argv)
    project_root = (args.project_root or Path.cwd()).resolve()
    wf = workflow_mgt_dir(project_root)
    if not wf.is_dir():
        print(f"ERROR: workflow framework directory not found: {wf}", file=sys.stderr)
        return 2

    expected = canonical_adk_skill_pack_path_relative()
    errors: List[str] = []
    errors.extend(validate_skills(project_root))
    errors.extend(validate_bridge(project_root, expected))
    errors.extend(validate_readme(skills_pack_root(project_root) / "README.md", expected))

    if errors:
        print("validate_adk_ecc_skill_pack: FAIL", file=sys.stderr)
        for e in errors:
            print(f"  - {e}", file=sys.stderr)
        return 1
    print("validate_adk_ecc_skill_pack: PASS")
    print(f"  project_root={project_root}")
    print(f"  skills_root={skills_pack_root(project_root)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
