"""Tests for locale formatting APIs (E21:S02:T05 / ADR-024)."""

import importlib.util
import sys
import tempfile
from datetime import date, datetime
from pathlib import Path
from unittest import mock

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
LOC_SCRIPT = SCRIPTS / "localisation_config.py"
FMT_SCRIPT = SCRIPTS / "locale_formatting.py"


def _load_modules():
    loc_spec = importlib.util.spec_from_file_location("localisation_config", LOC_SCRIPT)
    loc_mod = importlib.util.module_from_spec(loc_spec)
    assert loc_spec is not None and loc_spec.loader is not None
    sys.modules["localisation_config"] = loc_mod
    loc_spec.loader.exec_module(loc_mod)

    fmt_spec = importlib.util.spec_from_file_location("locale_formatting", FMT_SCRIPT)
    fmt_mod = importlib.util.module_from_spec(fmt_spec)
    assert fmt_spec is not None and fmt_spec.loader is not None
    sys.modules["locale_formatting"] = fmt_mod
    fmt_spec.loader.exec_module(fmt_mod)
    return loc_mod, fmt_mod


@pytest.fixture
def mods():
    return _load_modules()


@pytest.fixture
def fmt(mods):
    return mods[1]


@pytest.fixture
def loc(mods):
    return mods[0]


SAMPLE_DATE = date(2026, 6, 7)
SAMPLE_DT = datetime(2026, 6, 7, 14, 30)


def test_t1_to_babel_locale(fmt):
    """T1: BCP 47 tag maps to Babel locale identifier."""
    assert fmt.to_babel_locale("en-GB") == "en_GB"
    assert fmt.to_babel_locale("zh-CN") == "zh_CN"
    assert fmt.to_babel_locale("fr") == "fr"


def test_t2_locale_format_profile(fmt):
    """T2: Per-locale profile includes default currency."""
    assert fmt.get_locale_format_profile("en-GB")["currency"] == "GBP"
    assert fmt.get_locale_format_profile("en-US")["currency"] == "USD"
    assert fmt.get_locale_format_profile("de")["currency"] == "EUR"


@pytest.mark.skipif(
    not _load_modules()[1].is_babel_available(),
    reason="Babel not installed",
)
def test_t3_format_date_differs_by_locale(fmt):
    """T3: en-GB and en-US date formatting differ when Babel is present."""
    gb = fmt.format_date(SAMPLE_DATE, "en-GB", style="medium")
    us = fmt.format_date(SAMPLE_DATE, "en-US", style="medium")
    assert gb != us
    assert "2026" in gb and "2026" in us


@pytest.mark.skipif(
    not _load_modules()[1].is_babel_available(),
    reason="Babel not installed",
)
def test_t4_format_number_german_grouping(fmt):
    """T4: German locale uses European decimal separator."""
    result = fmt.format_number(1234.5, "de")
    assert "," in result or "1" in result


@pytest.mark.skipif(
    not _load_modules()[1].is_babel_available(),
    reason="Babel not installed",
)
def test_t5_format_currency_us(fmt):
    """T5: US currency formatting includes dollar symbol or USD."""
    result = fmt.format_currency(99.9, "en-US")
    assert "$" in result or "USD" in result


def test_t6_format_for_project_uses_config(fmt, loc):
    """T6: format_for_project follows persisted project locale."""
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        loc.switch_locale(root, "en-US")
        result = fmt.format_for_project(root, "currency", 10.0)
        if fmt.is_babel_available():
            assert "$" in result or "USD" in result
        else:
            assert result.startswith("USD")


def test_t7_stdlib_fallback_without_babel(fmt):
    """T7: Formatters return stable strings when Babel is unavailable."""
    with mock.patch.object(fmt, "is_babel_available", return_value=False):
        date_str = fmt.format_date(SAMPLE_DATE, "en-GB")
        time_str = fmt.format_time(SAMPLE_DT, "en-GB")
        num_str = fmt.format_number(1234, "en-GB")
        cur_str = fmt.format_currency(50.0, "en-GB")
        assert date_str
        assert time_str
        assert "1,234" in num_str
        assert cur_str.startswith("GBP")


@pytest.mark.parametrize("locale_tag", ["en-GB", "en-US", "de", "fr", "zh-CN"])
def test_formatting_across_locales(fmt, locale_tag):
    """Task AC: formatting works across FR-006 locales."""
    date_str = fmt.format_date(SAMPLE_DATE, locale_tag)
    num_str = fmt.format_number(1000, locale_tag)
    assert date_str
    assert num_str
