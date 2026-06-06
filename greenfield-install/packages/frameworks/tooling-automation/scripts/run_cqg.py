#!/usr/bin/env python3
"""Manual CLI for local Code Quality Gate (CQG)."""

from __future__ import annotations

import sys
from pathlib import Path

_VALIDATORS = Path(__file__).resolve().parents[1] / "validators"
if str(_VALIDATORS) not in sys.path:
    sys.path.insert(0, str(_VALIDATORS))

from code_quality.cqg_engine import main  # noqa: E402

if __name__ == "__main__":
    raise SystemExit(main())
