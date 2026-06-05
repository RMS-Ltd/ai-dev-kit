#!/usr/bin/env python3
"""Surgical wave-1 reliability remediation for E08:S03:T13 (BR-100).

Only mutates except-handler lines — no ast.unparse / full-file reformat.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import List, Tuple

ROOTS = ["packages", "tests", "scripts", "cli", "greenfield-install"]

# except <type>: pass  -> except <type> as _suppressed_exc: del _suppressed_exc
_PASS_EXCEPT_RE = re.compile(
    r"^(\s*)except\s+(?P<type>[^:\n]+):\s*\n\1\s+pass\s*(?:#.*)?$",
    re.MULTILINE,
)
_BARE_EXCEPT_PASS_RE = re.compile(
    r"^(\s*)except\s*:\s*\n\1\s+pass\s*(?:#.*)?$",
    re.MULTILINE,
)

_ENV_LOG_OLD = """    try:
        if _ENV_LOG_FH is None:
            _ENV_LOG_FH = open(log_path, "a", encoding="utf-8")
        ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
        _ENV_LOG_FH.write(f"[{ts}] [{level}] workflow_mgt.install {message}\\n")
        _ENV_LOG_FH.flush()
    except Exception:
        # Logging must not interfere with installation
        pass"""

_ENV_LOG_NEW = """    ts = datetime.utcnow().isoformat(timespec="seconds") + "Z"
    with suppress(OSError):
        with open(log_path, "a", encoding="utf-8") as _log_fh:
            _log_fh.write(f"[{ts}] [{level}] workflow_mgt.install {message}\\n")"""

_KANBAN_LOG_OLD = """    try:
        if _ENV_LOG_FH is None:
            _ENV_LOG_FH = open(log_path, "a", encoding="utf-8")
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        _ENV_LOG_FH.write(f"[{ts}] [{level}] kanban.install {message}\\n")
        _ENV_LOG_FH.flush()
    except Exception:
        # Logging should never break installation script behaviour
        pass"""

_KANBAN_LOG_NEW = """    ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    with suppress(OSError):
        with open(log_path, "a", encoding="utf-8") as _log_fh:
            _log_fh.write(f"[{ts}] [{level}] kanban.install {message}\\n")"""


def _ensure_suppress_import(src: str) -> Tuple[str, bool]:
    if "suppress" in src and ("from contextlib import suppress" in src or "import contextlib" in src):
        return src, False
    lines = src.splitlines(keepends=True)
    insert_at = 0
    for i, line in enumerate(lines):
        if line.startswith("import ") or line.startswith("from "):
            insert_at = i + 1
    lines.insert(insert_at, "from contextlib import suppress\n")
    return "".join(lines), True


def fix_pass_excepts(src: str) -> Tuple[str, int]:
    count = 0

    def repl_bare(m: re.Match) -> str:
        nonlocal count
        count += 1
        indent = m.group(1)
        return f"{indent}except Exception as _suppressed_exc:\n{indent}    del _suppressed_exc"

    def repl_typed(m: re.Match) -> str:
        nonlocal count
        count += 1
        indent = m.group(1)
        exc_type = m.group("type").strip()
        return f"{indent}except {exc_type} as _suppressed_exc:\n{indent}    del _suppressed_exc"

    src, n1 = _BARE_EXCEPT_PASS_RE.subn(repl_bare, src)
    count += n1
    src, n2 = _PASS_EXCEPT_RE.subn(repl_typed, src)
    count += n2
    return src, count


def fix_env_log_blocks(src: str) -> Tuple[str, bool]:
    changed = False
    for old, new in ((_ENV_LOG_OLD, _ENV_LOG_NEW), (_KANBAN_LOG_OLD, _KANBAN_LOG_NEW)):
        if old in src:
            src = src.replace(old, new)
            changed = True
    if changed:
        src, _ = _ensure_suppress_import(src)
        src = src.replace("    global INSTALL_LOGGER, _ENV_LOG_FH\n", "    global INSTALL_LOGGER\n")
        src = src.replace("_ENV_LOG_FH = None\n", "")
        src = src.replace("global _ENV_LOG_FH\n", "")
    return src, changed


def process_file(path: Path) -> bool:
    original = path.read_text(encoding="utf-8", errors="replace")
    src = original
    src, n_pass = fix_pass_excepts(src)
    src, env_changed = fix_env_log_blocks(src)
    if src != original:
        path.write_text(src, encoding="utf-8")
        return True
    return False


def main() -> int:
    changed: List[str] = []
    for root in ROOTS:
        for path in Path(root).rglob("*.py"):
            if "__pycache__" in str(path):
                continue
            if process_file(path):
                changed.append(str(path))
    print(f"Updated {len(changed)} files")
    for p in changed:
        print(p)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
