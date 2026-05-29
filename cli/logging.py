"""
Logging helpers for the ai-dev-kit CLI tool.

Currently used by the install command to support per-run install logs
in either text or JSON format, controlled by the install_logging.*
configuration block in .ai-dev-kit.yaml.
"""

import json
import os
import uuid
from datetime import datetime
from pathlib import Path
from typing import Any, Callable, Dict, Optional, Tuple, TextIO

from cli.utils import print_warning, redact


LogFunc = Callable[..., None]


def _noop_log(_level: str, _context: str, _message: str, **_kwargs: Any) -> None:
    return


def _default_event_contract(level: str, context: str, message: str) -> Dict[str, Any]:
    """Create a minimal event contract payload when caller did not provide one."""
    status = "unknown"
    if level == "INFO":
        status = "ok"
    elif level == "WARNING":
        status = "warning"
    elif level == "ERROR":
        status = "error"

    return {
        "intent": {
            "summary": "Emit install telemetry event",
            "objective": "Capture install step details for forensic reconstruction",
        },
        "action": {
            "summary": message,
            "component": context,
        },
        "result": {
            "status": status,
            "details": message,
        },
    }


def _validate_event_contract(event: Dict[str, Any]) -> None:
    """
    Validate required structure for JSON event contract payloads.

    Required structure:
    - intent.summary
    - action.summary
    - result.status
    - result.details
    """
    if not isinstance(event, dict):
        raise ValueError("event_contract must be a dictionary")

    intent = event.get("intent")
    action = event.get("action")
    result = event.get("result")

    if not isinstance(intent, dict) or not intent.get("summary"):
        raise ValueError("event_contract.intent.summary is required")
    if not isinstance(action, dict) or not action.get("summary"):
        raise ValueError("event_contract.action.summary is required")
    if not isinstance(result, dict) or not result.get("status"):
        raise ValueError("event_contract.result.status is required")
    if not isinstance(result, dict) or not result.get("details"):
        raise ValueError("event_contract.result.details is required")


def create_install_logger(
    project_root: Path,
    config,
    args,
) -> Tuple[LogFunc, Optional[Path], Optional[Path], Optional[TextIO]]:
    """
    Create an install logger based on install_logging.* configuration and CLI flags.

    Returns a tuple of:
    - log: callable (level, context, message) -> None
    - log_dir: directory where logs are stored (or None)
    - log_file: path to the current log file (or None)
    - fh: open file handle for the caller to close/rotate (or None)
    """
    log: LogFunc = _noop_log
    log_dir: Optional[Path] = None
    log_file: Optional[Path] = None
    fh: Optional[TextIO] = None

    # Determine whether logging is enabled
    try:
        logging_enabled = not getattr(args, "no_install_log", False)
        if logging_enabled:
            logging_enabled = config.get("install_logging.enabled", True)

        if not logging_enabled:
            # Ensure we do not leak stale env wiring
            os.environ.pop("AI_DEV_KIT_INSTALL_LOG_PATH", None)
            return log, log_dir, log_file, fh

        # Resolve log directory
        if getattr(args, "log_path", None):
            log_dir = Path(args.log_path).resolve()
        else:
            default_rel = config.get("install_logging.path", "logs/ai-dev-kit/install")
            log_dir = (project_root / default_rel).resolve()

        log_dir.mkdir(parents=True, exist_ok=True)

        # Open timestamped log file
        timestamp = datetime.utcnow().strftime("%Y%m%d-%H%M%S")
        log_file = log_dir / f"install-{timestamp}.log"
        fh = log_file.open("a", encoding="utf-8")

        # Decide on format: text (default) or json
        fmt = config.get("install_logging.format", "text")
        if fmt not in ("text", "json"):
            if fmt is not None:
                print_warning(
                    f"Unknown install_logging.format '{fmt}' – falling back to 'text'"
                )
            fmt = "text"

        run_id = uuid.uuid4().hex

        sequence = 0

        strict_event_contract = bool(config.get("install_logging.strict_event_contract", False))

        if fmt == "json":

            def _log(
                level: str,
                context: str,
                message: str,
                *,
                event: Optional[Dict[str, Any]] = None,
                step_id: Optional[str] = None,
                parent_step_id: Optional[str] = None,
            ) -> None:
                nonlocal sequence
                sequence += 1
                ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
                safe = redact(message)
                event_payload = event or _default_event_contract(level, context, safe)
                if strict_event_contract:
                    _validate_event_contract(event_payload)
                payload = {
                    "timestamp_utc": ts,
                    "level": level,
                    "context": context,
                    "message": safe,
                    "install_run_id": run_id,
                    "schema_version": "1.0",
                    "event_contract": event_payload,
                    "step_id": step_id or f"step-{sequence:04d}",
                    "parent_step_id": parent_step_id,
                }
                fh.write(json.dumps(payload) + "\n")
                fh.flush()

        else:

            def _log(
                level: str,
                context: str,
                message: str,
                *,
                event: Optional[Dict[str, Any]] = None,
                step_id: Optional[str] = None,
                parent_step_id: Optional[str] = None,
            ) -> None:
                del event, step_id, parent_step_id
                ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
                safe = redact(message)
                fh.write(f"[{ts}] [{level}] [{context}] {safe}\n")
                fh.flush()

        log = _log

        # Per-run header
        log("INFO", "install.main", f"ai-dev-kit install started in {project_root}")
        log("INFO", "install.main", f"Config file: {config.config_path}")
        # Expose log path for framework installers (e.g. Kanban) via env var
        os.environ["AI_DEV_KIT_INSTALL_LOG_PATH"] = str(log_file)

        return log, log_dir, log_file, fh

    except Exception as e:
        # Logging should be best-effort only
        print_warning(f"Install logging disabled due to logger setup error: {e}")
        log = _noop_log
        log_dir = None
        log_file = None
        if fh is not None:
            try:
                fh.close()
            except Exception:
                pass
            fh = None
        os.environ.pop("AI_DEV_KIT_INSTALL_LOG_PATH", None)
        return log, log_dir, log_file, fh


def close_install_logger(
    fh: Optional[TextIO],
    log_dir: Optional[Path],
    config,
) -> None:
    """
    Close the install logger file handle and perform simple retention based on
    install_logging.keep configuration.
    """
    if not fh or not log_dir:
        return

    try:
        keep = config.get("install_logging.keep")
        if isinstance(keep, int) and keep > 0:
            logs = sorted(log_dir.glob("install-*.log"))
            if len(logs) > keep:
                for old in logs[0 : len(logs) - keep]:
                    try:
                        old.unlink()
                    except Exception:
                        # Retention issues must not break installs
                        pass
    except Exception:
        # Do not fail install because of log rotation/retention problems
        pass
    finally:
        try:
            fh.close()
        except Exception:
            pass

