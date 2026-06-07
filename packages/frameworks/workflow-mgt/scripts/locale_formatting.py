"""
Locale-aware date/time/number formatting (E21:S02:T05 / ADR-024).

Babel is used when installed; stdlib fallbacks apply otherwise.
Vendored with install_release_workflow.py for adopter projects.
"""

from __future__ import annotations

from datetime import date, datetime, time
from pathlib import Path
from typing import Any, Dict, Optional, Union

from localisation_config import map_to_supported_locale, resolve_language

DateTimeLike = Union[date, datetime, time]

LOCALE_FORMAT_PROFILES: Dict[str, Dict[str, str]] = {
    "en-GB": {"currency": "GBP", "date_style": "medium", "time_style": "short"},
    "en-US": {"currency": "USD", "date_style": "medium", "time_style": "short"},
    "es": {"currency": "EUR", "date_style": "medium", "time_style": "short"},
    "fr": {"currency": "EUR", "date_style": "medium", "time_style": "short"},
    "de": {"currency": "EUR", "date_style": "medium", "time_style": "short"},
    "zh-CN": {"currency": "CNY", "date_style": "medium", "time_style": "short"},
    "zh-TW": {"currency": "TWD", "date_style": "medium", "time_style": "short"},
    "ja": {"currency": "JPY", "date_style": "medium", "time_style": "short"},
    "pt": {"currency": "EUR", "date_style": "medium", "time_style": "short"},
    "ru": {"currency": "RUB", "date_style": "medium", "time_style": "short"},
    "ar": {"currency": "SAR", "date_style": "medium", "time_style": "short"},
}

_DATE_STRFTIME = {
    "short": "%d/%m/%Y",
    "medium": "%d %b %Y",
    "long": "%d %B %Y",
    "full": "%A, %d %B %Y",
}

_TIME_STRFTIME = {
    "short": "%H:%M",
    "medium": "%H:%M:%S",
    "long": "%H:%M:%S",
    "full": "%H:%M:%S",
}

_DATETIME_STRFTIME = {
    "short": "%Y-%m-%d %H:%M",
    "medium": "%Y-%m-%d %H:%M",
    "long": "%Y-%m-%d %H:%M:%S",
    "full": "%Y-%m-%d %H:%M:%S",
}


def is_babel_available() -> bool:
    """Return True when the Babel package is importable."""
    try:
        import babel  # noqa: F401
    except ImportError:
        return False
    return True


def to_babel_locale(tag: Optional[str]) -> str:
    """Map a FR-006 BCP 47 tag to a Babel locale identifier (e.g. en-GB → en_GB)."""
    mapped = map_to_supported_locale(tag)
    parts = mapped.split("-", 1)
    if len(parts) == 1:
        return parts[0]
    return f"{parts[0]}_{parts[1]}"


def get_locale_format_profile(tag: Optional[str]) -> Dict[str, str]:
    """Return per-locale formatting defaults for a supported locale tag."""
    mapped = map_to_supported_locale(tag)
    profile = LOCALE_FORMAT_PROFILES.get(mapped)
    if profile is None:
        return LOCALE_FORMAT_PROFILES["en-GB"].copy()
    return profile.copy()


def _coerce_date(value: DateTimeLike) -> date:
    if isinstance(value, datetime):
        return value.date()
    if isinstance(value, time):
        raise TypeError("format_date expects date or datetime, not time")
    return value


def _coerce_time(value: DateTimeLike) -> time:
    if isinstance(value, datetime):
        return value.time().replace(microsecond=0)
    if isinstance(value, time):
        return value.replace(microsecond=0)
    raise TypeError("format_time expects time or datetime, not date")


def _coerce_datetime(value: DateTimeLike) -> datetime:
    if isinstance(value, datetime):
        return value.replace(microsecond=0)
    if isinstance(value, date):
        return datetime.combine(value, time(0, 0))
    raise TypeError("format_datetime expects date or datetime, not time")


def format_date(
    value: DateTimeLike,
    locale_tag: Optional[str],
    *,
    style: str = "medium",
) -> str:
    """Format a date for the given locale tag."""
    locale_tag = map_to_supported_locale(locale_tag)
    profile = get_locale_format_profile(locale_tag)
    style = style or profile.get("date_style", "medium")
    dt = _coerce_date(value)

    if is_babel_available():
        from babel.dates import format_date as babel_format_date

        return babel_format_date(dt, format=style, locale=to_babel_locale(locale_tag))

    pattern = _DATE_STRFTIME.get(style, _DATE_STRFTIME["medium"])
    return dt.strftime(pattern)


def format_time(
    value: DateTimeLike,
    locale_tag: Optional[str],
    *,
    style: str = "short",
) -> str:
    """Format a time for the given locale tag."""
    locale_tag = map_to_supported_locale(locale_tag)
    profile = get_locale_format_profile(locale_tag)
    style = style or profile.get("time_style", "short")
    tm = _coerce_time(value)

    if is_babel_available():
        from babel.dates import format_time as babel_format_time

        return babel_format_time(tm, format=style, locale=to_babel_locale(locale_tag))

    pattern = _TIME_STRFTIME.get(style, _TIME_STRFTIME["short"])
    return tm.strftime(pattern)


def format_datetime(
    value: DateTimeLike,
    locale_tag: Optional[str],
    *,
    style: str = "medium",
) -> str:
    """Format a datetime for the given locale tag."""
    locale_tag = map_to_supported_locale(locale_tag)
    dt = _coerce_datetime(value)

    if is_babel_available():
        from babel.dates import format_datetime as babel_format_datetime

        return babel_format_datetime(dt, format=style, locale=to_babel_locale(locale_tag))

    pattern = _DATETIME_STRFTIME.get(style, _DATETIME_STRFTIME["medium"])
    return dt.strftime(pattern)


def format_decimal(
    value: Union[int, float],
    locale_tag: Optional[str],
    *,
    pattern: Optional[str] = None,
) -> str:
    """Format a decimal number for the given locale tag."""
    locale_tag = map_to_supported_locale(locale_tag)

    if is_babel_available():
        from babel.numbers import format_decimal as babel_format_decimal

        return babel_format_decimal(value, format=pattern, locale=to_babel_locale(locale_tag))

    if isinstance(value, int):
        return f"{value:,}"
    return f"{value:,.2f}"


def format_number(
    value: Union[int, float],
    locale_tag: Optional[str],
) -> str:
    """Format a grouped number for the given locale tag."""
    locale_tag = map_to_supported_locale(locale_tag)

    return format_decimal(value, locale_tag)


def format_currency(
    value: Union[int, float],
    locale_tag: Optional[str],
    currency: Optional[str] = None,
) -> str:
    """Format a currency amount for the given locale tag."""
    locale_tag = map_to_supported_locale(locale_tag)
    profile = get_locale_format_profile(locale_tag)
    currency = currency or profile["currency"]

    if is_babel_available():
        from babel.numbers import format_currency as babel_format_currency

        return babel_format_currency(value, currency, locale=to_babel_locale(locale_tag))

    amount = format_decimal(value, locale_tag)
    return f"{currency} {amount}"


def format_for_project(
    project_root: Path,
    kind: str,
    value: Any,
    **kwargs: Any,
) -> str:
    """Format a value using the project's resolved locale from ai-dev-kit-config.yaml."""
    locale_tag = resolve_language(project_root)
    kind = kind.lower().strip()
    dispatch = {
        "date": format_date,
        "time": format_time,
        "datetime": format_datetime,
        "decimal": format_decimal,
        "number": format_number,
        "currency": format_currency,
    }
    formatter = dispatch.get(kind)
    if formatter is None:
        raise ValueError(f"Unsupported format kind: {kind!r}")
    return formatter(value, locale_tag, **kwargs)
