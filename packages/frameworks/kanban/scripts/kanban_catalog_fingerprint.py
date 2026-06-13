"""Shared Kanban catalog fingerprint patterns (v3.4+); breaks v34↔v35 import cycle."""

from __future__ import annotations

import re

V1_FINGERPRINT_FAIL_PATTERNS = [
    re.compile(r"^#\s*Epic\s+5:\s*FR\s+Implementation\s*$", re.MULTILINE | re.IGNORECASE),
    re.compile(r"^#\s*Epic\s+6:\s*BR\s+Implementation\s*$", re.MULTILINE | re.IGNORECASE),
    re.compile(r"^#\s*Epic\s+7:\s*UXR", re.MULTILINE | re.IGNORECASE),
]

V32_VERSIONING_EPIC_FAIL = re.compile(
    r"^#\s*Epic\s+3:\s*Numbering\s*&\s*Versioning", re.MULTILINE | re.IGNORECASE
)

V33_TESTING_EPIC_FAIL = re.compile(
    r"^#\s*Epic\s+7:\s*Testing\s*&\s*Quality\s*Assurance",
    re.MULTILINE | re.IGNORECASE,
)
