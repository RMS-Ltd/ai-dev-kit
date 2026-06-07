#!/usr/bin/env python3
"""CLI shim for release metadata queries."""

from __future__ import annotations

import sys
from pathlib import Path

_SCRIPTS = Path(__file__).resolve().parent.parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

from release_metadata.query import main  # noqa: E402

if __name__ == "__main__":
    raise SystemExit(main())
