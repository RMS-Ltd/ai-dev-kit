"""Cultural content policy contract tests (E21:S04:T04 / FR-006 Phase 2)."""

from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parent.parent
POLICY_DOC = REPO_ROOT / "docs" / "governance" / "standards" / "locale-cultural-content-policy.md"
GLOSSARY_DOC = REPO_ROOT / "docs" / "governance" / "standards" / "locale-loanword-glossary.md"
AUDIT_DOC = REPO_ROOT / "docs" / "governance" / "standards" / "locale-directional-icon-audit.md"
CULTURAL_DOC = REPO_ROOT / "docs" / "governance" / "standards" / "locale-cultural-requirements.md"

ROLLOUT_LOCALES = (
    "es",
    "fr",
    "de",
    "pt-BR",
    "pt-PT",
    "zh-CN",
    "zh-TW",
    "ja",
    "ru",
    "ar",
)

pytestmark = pytest.mark.fr006


def test_t04_policy_doc_sections():
    """T1: Cultural content policy has imagery, string-length, examples sections."""
    text = POLICY_DOC.read_text(encoding="utf-8")
    assert "## 2. Imagery and iconography" in text
    assert "## 3. String-length and layout expansion" in text
    assert "## 4. Examples and metaphors" in text


def test_t04_glossary_covers_rollout_locales():
    """T2: Glossary includes all rollout locales including pt-BR and pt-PT."""
    text = GLOSSARY_DOC.read_text(encoding="utf-8")
    for code in ROLLOUT_LOCALES:
        assert f"## {code}" in text, f"missing glossary section for {code}"


def test_t04_directional_icon_audit_completed():
    """T3: Directional icon audit doc exists and references T03 hooks."""
    text = AUDIT_DOC.read_text(encoding="utf-8")
    assert "Completed" in text or "completed" in text
    assert "format_cli_status_line" in text
    assert "locale-rtl-conventions" in text


def test_t04_pt_registry_no_bare_pt():
    """T4: FR006_SUPPORTED_LOCALES uses pt-BR/pt-PT not bare pt."""
    import sys

    scripts = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
    sys.path.insert(0, str(scripts))
    from localisation_config import FR006_SUPPORTED_LOCALES

    assert "pt-BR" in FR006_SUPPORTED_LOCALES
    assert "pt-PT" in FR006_SUPPORTED_LOCALES
    assert "pt" not in FR006_SUPPORTED_LOCALES


def test_t04_pt_mapping():
    """T5: map_to_supported_locale pt branch."""
    import sys

    scripts = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
    sys.path.insert(0, str(scripts))
    from localisation_config import map_to_supported_locale

    assert map_to_supported_locale("pt-BR") == "pt-BR"
    assert map_to_supported_locale("pt-PT") == "pt-PT"
    assert map_to_supported_locale("pt") == "pt-BR"
    assert map_to_supported_locale("pt-PT") == "pt-PT"


def test_t04_locale_trees_pt_br_pt_pt():
    """T6: Both packages have pt-BR and pt-PT; pt removed."""
    for pkg in ("workflow-mgt", "kanban"):
        root = REPO_ROOT / "packages" / "frameworks" / pkg / "locales"
        assert (root / "pt-BR").is_dir(), pkg
        assert (root / "pt-PT").is_dir(), pkg
        assert not (root / "pt").exists(), pkg


def test_t04_cultural_doc_handoffs_policy_links():
    """T8: Cultural requirements handoffs reference T04 policy artifacts."""
    text = CULTURAL_DOC.read_text(encoding="utf-8")
    handoffs = text.split("## Handoffs", 1)[-1]
    assert "locale-cultural-content-policy.md" in handoffs
    assert "locale-loanword-glossary.md" in handoffs
    assert "locale-directional-icon-audit.md" in handoffs
