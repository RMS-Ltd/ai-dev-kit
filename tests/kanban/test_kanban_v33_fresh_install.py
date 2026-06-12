"""Backward-compat — v3.3 tests delegate to v3.4."""

from .test_kanban_v34_fresh_install import (  # noqa: F401
    test_fingerprint_accepts_v35_layout as test_fingerprint_accepts_v33_layout,
    test_fingerprint_rejects_v33_testing_epic_at_e07,
    test_install_canonical_epics_only_v34_fingerprint as test_install_canonical_epics_only_v33_fingerprint,
    test_v34_fresh_epics_small_tier as test_v33_fresh_epics_small_tier,
)
