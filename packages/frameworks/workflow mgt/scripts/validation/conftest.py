"""Framework validation tests — clear leaked Django settings from other projects."""

from __future__ import annotations

import os

os.environ.pop("DJANGO_SETTINGS_MODULE", None)
