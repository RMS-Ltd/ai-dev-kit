"""
Atomic command forensic logging for workflow execution (FR-059 / ADR-008).
"""

from __future__ import annotations

import os
import re
import subprocess
import time
from dataclasses import asdict, dataclass
from datetime import datetime, timezone
from typing import Any, Dict, List, Mapping, Optional, Sequence

FORENSIC_SCHEMA_VERSION = "1.0.0"
MAX_IO_BYTES = 32_768
DEFAULT_TTL_DAYS = 7

SECRET_KEY_RE = re.compile(
    r"(token|secret|password|api[_-]?key|credential)",
    re.IGNORECASE,
)


@dataclass
class AtomicCommandRecord:
    """Structured record for a single subprocess invocation."""

    timestamp: str
    argv: List[str]
    exit_code: int
    duration_ms: float
    stdout: str = ""
    stderr: str = ""
    lifecycle: str = "ephemeral"
    ttl_days: int = DEFAULT_TTL_DAYS
    housekeeping_policy: str = "auto-delete"
    schema_version: str = FORENSIC_SCHEMA_VERSION

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


def _now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _truncate(text: str, limit: int = MAX_IO_BYTES) -> str:
    if len(text) <= limit:
        return text
    return text[:limit] + f"\n... [truncated at {limit} bytes]"


def redact_env(env: Optional[Mapping[str, str]]) -> Dict[str, str]:
    """Return env copy with secret-like values redacted."""
    if not env:
        return {}
    out: Dict[str, str] = {}
    for key, value in env.items():
        if SECRET_KEY_RE.search(key):
            out[key] = "[REDACTED]"
        elif key.endswith(".local") or ".env" in key.lower():
            out[key] = "[REDACTED]"
        else:
            out[key] = value
    return out


def redact_argv(argv: Sequence[str]) -> List[str]:
    """Redact obvious secret arguments (e.g. --token=...)."""
    redacted: List[str] = []
    for arg in argv:
        if any(part in arg.lower() for part in (".env.local", "github_token")):
            redacted.append("[REDACTED_PATH]")
        elif "=" in arg and SECRET_KEY_RE.search(arg.split("=", 1)[0]):
            key, _ = arg.split("=", 1)
            redacted.append(f"{key}=[REDACTED]")
        else:
            redacted.append(arg)
    return redacted


def run_subprocess_logged(
    argv: Sequence[str],
    *,
    cwd: Optional[os.PathLike[str]] = None,
    env: Optional[Mapping[str, str]] = None,
    timeout: Optional[float] = None,
    ttl_days: int = DEFAULT_TTL_DAYS,
) -> tuple[subprocess.CompletedProcess[str], AtomicCommandRecord]:
    """
    Run a subprocess and return (CompletedProcess, AtomicCommandRecord).

    Raises subprocess.TimeoutExpired on timeout (record still returned if possible).
    """
    argv_list = [str(a) for a in argv]
    merged_env = {**os.environ, **(dict(env) if env else {})}
    start = time.perf_counter()
    try:
        result = subprocess.run(
            argv_list,
            cwd=cwd,
            env=merged_env if env is not None else None,
            capture_output=True,
            text=True,
            timeout=timeout,
        )
        exit_code = result.returncode
        stdout = result.stdout or ""
        stderr = result.stderr or ""
    except subprocess.TimeoutExpired as exc:
        exit_code = -1
        stdout = (exc.stdout or "") if isinstance(exc.stdout, str) else ""
        stderr = (exc.stderr or "") if isinstance(exc.stderr, str) else ""
        stderr = (stderr or "") + "\n[TIMEOUT]"
        duration_ms = (time.perf_counter() - start) * 1000
        record = AtomicCommandRecord(
            timestamp=_now_iso(),
            argv=redact_argv(argv_list),
            exit_code=exit_code,
            duration_ms=round(duration_ms, 2),
            stdout=_truncate(stdout),
            stderr=_truncate(stderr),
            ttl_days=ttl_days,
        )
        record.to_dict()  # validate shape
        raise
    duration_ms = (time.perf_counter() - start) * 1000
    record = AtomicCommandRecord(
        timestamp=_now_iso(),
        argv=redact_argv(argv_list),
        exit_code=exit_code,
        duration_ms=round(duration_ms, 2),
        stdout=_truncate(stdout),
        stderr=_truncate(stderr),
        ttl_days=ttl_days,
    )
    return result, record


def required_record_fields() -> List[str]:
    """Fields required for schema validation (RF8)."""
    return list(AtomicCommandRecord.__dataclass_fields__.keys())
