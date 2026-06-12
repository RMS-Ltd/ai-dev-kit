"""Backward-compat — re-export v3.3 tests under legacy module name."""

from .test_kanban_v33_fresh_install import (  # noqa: F401
    test_fingerprint_accepts_v33_layout as test_fingerprint_accepts_v32_layout,
    test_fingerprint_rejects_v33_testing_epic_at_e07 as test_fingerprint_rejects_v1_epic5_title,
    test_install_canonical_epics_only_v33_fingerprint as test_install_canonical_epics_only_v32_fingerprint,
    test_v33_fresh_epics_small_tier as test_v32_fresh_epics_small_tier,
)
