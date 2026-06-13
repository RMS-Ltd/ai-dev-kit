"""Backward-compat — v3.3 tests delegate to v3.4."""

from . import test_kanban_v34_fresh_install as _v34


def test_fingerprint_accepts_v33_layout():
    _v34.test_fingerprint_accepts_v35_layout()


def test_fingerprint_rejects_v33_testing_epic_at_e07():
    _v34.test_fingerprint_rejects_v33_testing_epic_at_e07()


def test_install_canonical_epics_only_v33_fingerprint():
    _v34.test_install_canonical_epics_only_v34_fingerprint()


def test_v33_fresh_epics_small_tier():
    _v34.test_v34_fresh_epics_small_tier()
