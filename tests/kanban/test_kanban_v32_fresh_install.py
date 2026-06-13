"""Backward-compat — re-export v3.3 tests under legacy module name."""

from . import test_kanban_v33_fresh_install as _v33


def test_fingerprint_accepts_v32_layout():
    _v33.test_fingerprint_accepts_v33_layout()


def test_fingerprint_rejects_v1_epic5_title():
    _v33.test_fingerprint_rejects_v33_testing_epic_at_e07()


def test_install_canonical_epics_only_v32_fingerprint():
    _v33.test_install_canonical_epics_only_v33_fingerprint()


def test_v32_fresh_epics_small_tier():
    _v33.test_v33_fresh_epics_small_tier()
