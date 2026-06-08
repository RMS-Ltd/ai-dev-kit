"""Structural guard for E21:S02:T01 i18n framework decision artifacts (V8)."""

from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent

ADR_024 = ROOT / "docs/architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md"
EVAL_MATRIX = ROOT / "docs/architecture/standards-and-adrs/i18n-framework-evaluation-matrix.md"
IPP = ROOT / "docs/implementation-cycles/IPP-E21S02T01-choose-i18n-framework.md"


@pytest.mark.parametrize(
    "path,required_substrings",
    [
        (
            ADR_024,
            [
                "## Context",
                "## Decision",
                "## Consequences",
                "Backward compat",
                "C1",
                "Hybrid",
                "E21:S02:T02",
                "E21:S02:T06",
            ],
        ),
        (
            EVAL_MATRIX,
            [
                "## Candidates",
                "## Scoring matrix",
                "C1 Hybrid",
                "C2",
                "C3",
                "C4",
                "**Selected**",
            ],
        ),
        (
            IPP,
            [
                "E21:S02:T01",
                "## 2.5 ADR necessity",
                "**Outcome:** **REQUIRED**",
                "TODO → IN PROGRESS",
                "RW E21:S02:T01 --art",
            ],
        ),
    ],
)
def test_i18n_decision_artifacts_exist_with_required_headings(
    path: Path, required_substrings: list[str]
) -> None:
    assert path.is_file(), f"Missing artifact: {path}"
    text = path.read_text(encoding="utf-8")
    for fragment in required_substrings:
        assert fragment in text, f"{path.name}: missing {fragment!r}"
