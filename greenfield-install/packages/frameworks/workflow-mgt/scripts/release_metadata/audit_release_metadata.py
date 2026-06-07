#!/usr/bin/env python3
"""CLI shim for semver read-model audit."""

from __future__ import annotations

import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent.parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from release_metadata.audit_semver import main  # noqa: E402

if __name__ == "__main__":
    raise SystemExit(main())
