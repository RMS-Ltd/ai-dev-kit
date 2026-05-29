#!/usr/bin/env python3
"""
Installation receipt writer for GitHub Release installs (FR-062).

Writes structured JSON receipts under logs/ai-dev-kit/install/receipt-{id}.json.
See docs/documentation/user-docs/install-receipt-reference.md.
"""

from __future__ import annotations

import json
import secrets
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Mapping, Optional, Sequence

RECEIPT_SCHEMA_VERSION = "1.0.0"
DEFAULT_RECEIPT_DIR = Path("logs") / "ai-dev-kit" / "install"
ADOPTER_MARKER = ".ai-dev-kit.yaml"

REQUIRED_TOP_LEVEL_KEYS = frozenset(
    {
        "schema_version",
        "install_run_id",
        "timestamp",
        "status",
        "frameworks",
    }
)

REQUIRED_FRAMEWORK_KEYS = frozenset(
    {"name", "requested_version", "source", "hash", "status"}
)


def utc_now_iso() -> str:
    """Return current UTC time as ISO-8601 string with Z suffix."""
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def generate_install_run_id(now: Optional[datetime] = None) -> str:
    """Globally unique install run id: timestamp + short random suffix."""
    dt = now or datetime.now(timezone.utc)
    stamp = dt.strftime("%Y-%m-%dT%H:%M:%SZ")
    suffix = secrets.token_hex(3)
    return f"{stamp}_{suffix}"


def find_adopter_project_root(start: Optional[Path] = None) -> Optional[Path]:
    """Walk parents from start (default cwd) for .ai-dev-kit.yaml."""
    current = (start or Path.cwd()).resolve()
    for candidate in (current, *current.parents):
        if (candidate / ADOPTER_MARKER).is_file():
            return candidate
    return None


def framework_entry(
    *,
    name: str,
    requested_version: str,
    source: str,
    hash_value: str,
    status: str,
) -> dict[str, str]:
    """Build one frameworks[] element for a receipt."""
    return {
        "name": name,
        "requested_version": requested_version,
        "source": source,
        "hash": hash_value,
        "status": status,
    }


def build_receipt(
    *,
    frameworks: Sequence[Mapping[str, str]],
    status: str,
    install_run_id: Optional[str] = None,
    timestamp: Optional[str] = None,
) -> dict[str, Any]:
    """Assemble a simplified v1 receipt payload."""
    run_id = install_run_id or generate_install_run_id()
    return {
        "schema_version": RECEIPT_SCHEMA_VERSION,
        "install_run_id": run_id,
        "timestamp": timestamp or utc_now_iso(),
        "status": status,
        "frameworks": [dict(entry) for entry in frameworks],
    }


def validate_receipt(receipt: Mapping[str, Any]) -> list[str]:
    """Return validation error messages; empty list means valid."""
    errors: list[str] = []

    missing = REQUIRED_TOP_LEVEL_KEYS - set(receipt.keys())
    if missing:
        errors.append(f"missing top-level keys: {sorted(missing)}")

    if receipt.get("schema_version") != RECEIPT_SCHEMA_VERSION:
        errors.append(
            f"schema_version must be {RECEIPT_SCHEMA_VERSION!r}, "
            f"got {receipt.get('schema_version')!r}"
        )

    for key in ("install_run_id", "timestamp", "status"):
        value = receipt.get(key)
        if not isinstance(value, str) or not value.strip():
            errors.append(f"{key} must be a non-empty string")

    frameworks = receipt.get("frameworks")
    if not isinstance(frameworks, list) or not frameworks:
        errors.append("frameworks must be a non-empty list")
    elif isinstance(frameworks, list):
        for index, entry in enumerate(frameworks):
            if not isinstance(entry, dict):
                errors.append(f"frameworks[{index}] must be an object")
                continue
            missing_fw = REQUIRED_FRAMEWORK_KEYS - set(entry.keys())
            if missing_fw:
                errors.append(
                    f"frameworks[{index}] missing keys: {sorted(missing_fw)}"
                )

    return errors


def receipt_filename(install_run_id: str) -> str:
    """Safe filename for a receipt id."""
    safe = install_run_id.replace(":", "-").replace("/", "-")
    return f"receipt-{safe}.json"


def write_receipt(
    receipt: Mapping[str, Any],
    *,
    project_root: Path,
    receipt_dir: Optional[Path] = None,
) -> Path:
    """Write receipt JSON under the adopter project logs directory."""
    errors = validate_receipt(receipt)
    if errors:
        raise ValueError("; ".join(errors))

    run_id = str(receipt["install_run_id"])
    out_dir = (receipt_dir or (project_root / DEFAULT_RECEIPT_DIR)).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / receipt_filename(run_id)

    payload = dict(receipt)
    payload.setdefault("receipt_id", str(uuid.uuid4()))

    with open(out_path, "w", encoding="utf-8") as handle:
        json.dump(payload, handle, indent=2, sort_keys=True)
        handle.write("\n")

    return out_path


def emit_install_receipt(
    *,
    project_root: Path,
    framework_name: str,
    version: str,
    source_url: str,
    hash_value: str,
    status: str = "installed",
    receipt_dir: Optional[Path] = None,
) -> Path:
    """Build and write a single-framework success receipt."""
    receipt = build_receipt(
        frameworks=[
            framework_entry(
                name=framework_name,
                requested_version=version,
                source=source_url,
                hash_value=hash_value,
                status=status,
            )
        ],
        status=status,
    )
    return write_receipt(receipt, project_root=project_root, receipt_dir=receipt_dir)
