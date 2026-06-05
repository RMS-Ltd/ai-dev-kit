"""
Checkpoint manifests for workflow rollback (FR-059 / ADR-008).

Conservative model: manifests capture git porcelain and metadata only.
No automatic destructive git operations.
"""

from __future__ import annotations

import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Optional

CHECKPOINT_SUBDIR = "checkpoints"


def _now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def checkpoint_dir(journal_root: Path, checkpoint_id: str) -> Path:
    return journal_root / CHECKPOINT_SUBDIR / checkpoint_id


def _git_porcelain(project_root: Path) -> str:
    try:
        result = subprocess.run(
            ["git", "status", "--porcelain"],
            cwd=project_root,
            capture_output=True,
            text=True,
            timeout=30,
        )
        if result.returncode == 0:
            return result.stdout
    except (OSError, subprocess.TimeoutExpired) as _suppressed_exc:
        del _suppressed_exc
    return ""


def create_checkpoint(
    journal_root: Path,
    checkpoint_id: str,
    *,
    project_root: Path,
    workflow_id: Optional[str] = None,
    extra: Optional[Dict[str, Any]] = None,
) -> Path:
    """Write manifest.json for a checkpoint. Returns manifest path."""
    root = checkpoint_dir(journal_root, checkpoint_id)
    root.mkdir(parents=True, exist_ok=True)
    manifest = {
        "checkpoint_id": checkpoint_id,
        "created_at": _now_iso(),
        "workflow_id": workflow_id,
        "git_porcelain": _git_porcelain(project_root),
        "project_root": str(project_root.resolve()),
        "extra": extra or {},
        "rollback_policy": "manual_only",
    }
    path = root / "manifest.json"
    path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return path


def load_checkpoint(journal_root: Path, checkpoint_id: str) -> Optional[Dict[str, Any]]:
    """Load manifest dict or None if missing."""
    path = checkpoint_dir(journal_root, checkpoint_id) / "manifest.json"
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8"))


def rollback_to_checkpoint(
    journal_root: Path,
    checkpoint_id: str,
    *,
    project_root: Path,
) -> bool:
    """
    Validate checkpoint exists and write operator hint file.

    Does not run git reset --hard or other forbidden operations.
    """
    manifest = load_checkpoint(journal_root, checkpoint_id)
    if manifest is None:
        return False
    hint_dir = checkpoint_dir(journal_root, checkpoint_id)
    hint = {
        "checkpoint_id": checkpoint_id,
        "restored_at": _now_iso(),
        "message": (
            "Checkpoint loaded for operator review. "
            "Apply RollbackContract surfaces manually; no auto git destructive ops."
        ),
        "git_porcelain_at_checkpoint": manifest.get("git_porcelain", ""),
        "current_git_porcelain": _git_porcelain(project_root),
    }
    (hint_dir / "rollback_hint.json").write_text(
        json.dumps(hint, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    return True
