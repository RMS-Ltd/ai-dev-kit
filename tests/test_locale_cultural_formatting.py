"""Cultural formatting smoke tests (E21:S04:T05)."""

import importlib.util
import sys
from datetime import date, datetime
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
FIXTURE = REPO_ROOT / "tests" / "fixtures" / "locale_formatting_smoke.yaml"
POLICY = REPO_ROOT / "docs" / "governance" / "standards" / "locale-formatting-conventions.md"

pytestmark = pytest.mark.fr006


def _babel_installed() -> bool:
    try:
        import babel  # noqa: F401
    except ImportError:
        return False
    return True


def _load_fmt():
    for name, path in (
        ("localisation_config", SCRIPTS / "localisation_config.py"),
        ("locale_formatting", SCRIPTS / "locale_formatting.py"),
    ):
        spec = importlib.util.spec_from_file_location(name, path)
        mod = importlib.util.module_from_spec(spec)
        sys.modules[name] = mod
        spec.loader.exec_module(mod)
    return sys.modules["locale_formatting"]


@pytest.fixture
def fmt():
    return _load_fmt()


@pytest.fixture
def smoke_data():
    return yaml.safe_load(FIXTURE.read_text(encoding="utf-8"))


def test_c1_smoke_fixture_exists(smoke_data):
    """C1: Fixture defines nine rollout locales and canonical inputs."""
    assert smoke_data["fixture"]["date"] == "2026-06-07"
    assert len(smoke_data["rollout_locales"]) == 9


@pytest.mark.parametrize("tag", ["es", "fr", "de", "pt", "zh-CN", "zh-TW", "ja", "ru", "ar", "en-GB", "en-US"])
@pytest.mark.skipif(not _babel_installed(), reason="Babel not installed")
def test_c2_smoke_non_empty(fmt, tag):
    """C2: format_* returns non-empty strings for rollout + baseline locales."""
    d, dt, amt = date(2026, 6, 7), datetime(2026, 6, 7, 14, 30), 1234.56
    assert fmt.format_date(d, tag)
    assert fmt.format_time(dt, tag)
    assert fmt.format_number(amt, tag)
    assert fmt.format_currency(amt, tag)


@pytest.mark.skipif(not _babel_installed(), reason="Babel not installed")
def test_c3_structural_checks(fmt, smoke_data):
    """C3: Locale-specific structural assertions from fixture."""
    d, dt, amt = date(2026, 6, 7), datetime(2026, 6, 7, 14, 30), 1234.56
    checks = smoke_data["structural_checks"]
    de_num = fmt.format_number(amt, "de")
    assert checks["de"]["number_contains"] in de_num
    us_cur = fmt.format_currency(amt, "en-US")
    assert any(tok in us_cur for tok in checks["en-US"]["currency_contains_any"])
    fr_date = fmt.format_date(d, "fr")
    assert checks["fr"]["date_contains"] in fr_date


@pytest.mark.skipif(not _babel_installed(), reason="Babel not installed")
def test_c4_ar_smoke_runs(fmt):
    """C4: Arabic formatting runs without error."""
    d, dt, amt = date(2026, 6, 7), datetime(2026, 6, 7, 14, 30), 1234.56
    out = fmt.format_date(d, "ar") + fmt.format_currency(amt, "ar")
    assert out


def test_c5_policy_smoke_section():
    """C5: Policy doc §7 smoke table present."""
    text = POLICY.read_text(encoding="utf-8")
    assert "## 7. Per-locale smoke examples" in text
    for tag in ("es", "fr", "de", "ar", "en-US"):
        assert f"| `{tag}` |" in text
