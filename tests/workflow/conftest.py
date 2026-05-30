"""pytest configuration for workflow executor tests."""

import sys
from pathlib import Path

SCRIPTS_DIR = Path(__file__).resolve().parent.parent.parent / "packages" / "frameworks" / "workflow mgt" / "scripts"
sys.path.insert(0, str(SCRIPTS_DIR))
