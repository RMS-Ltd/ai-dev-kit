"""pytest configuration for journal tests."""

import sys
from pathlib import Path

# Add the scripts directory to the path so `import journal` resolves.
SCRIPTS_DIR = Path(__file__).resolve().parent.parent.parent / "packages" / "frameworks" / "workflow mgt" / "scripts"
sys.path.insert(0, str(SCRIPTS_DIR))
