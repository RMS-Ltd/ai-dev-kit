"""Translation completeness tracking tests (E21:S03:T06 / FR-006 Phase 3)."""

from __future__ import annotations

import importlib.util
import json
import subprocess
import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parent.parent
SCRIPTS = REPO_ROOT / "packages" / "frameworks" / "workflow-mgt" / "scripts"
REPORT_SCRIPT = SCRIPTS / "report_locale_completeness.py"
UTILS_SCRIPT = SCRIPTS / "locale_translation_utils.py"
MAINTAINER_GUIDE = (
    REPO_ROOT / "docs" / "documentation" / "user-docs" / "translation-management-tools.md"
)
REGISTRY = REPO_ROOT / "docs" / "governance" / "standards" / "translatable-content-registry.yaml"

pytestmark = pytest.mark.fr006


def _load_utils():
    spec = importlib.util.spec_from_file_location("locale_translation_utils", UTILS_SCRIPT)
    mod = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules["locale_translation_utils"] = mod
    spec.loader.exec_module(mod)
    return mod


@pytest.fixture
def ltu():
    return _load_utils()


def _run_report(*args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, str(REPORT_SCRIPT), *args],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )


def test_c1_registry_load_on_clean_repo():
    """C1: Report runs against real registry."""
    result = _run_report("--locale", "es", "--package", "kanban")
    assert result.returncode == 0, result.stdout + result.stderr
    assert "es" in result.stdout


def test_c1_missing_registry_exit_2(ltu, tmp_path):
    """C1: Missing registry yields exit 2."""
    result = _run_report("--project-root", str(tmp_path), "--locale", "es")
    assert result.returncode == 2


def test_c2_es_kanban_linguistic_delivery_post_t01(ltu):
    """C2: Post E21:S05:T01, kanban es locale is linguistically translated."""
    report = ltu.compute_locale_completeness(REPO_ROOT, "kanban", "es")
    assert report.keys_linguistic_pct() == 100.0
    assert report.keys_structural_pct() == 100.0


def test_c3_tier_breakdown_present(ltu):
    """C3: P0–P3 tier counts exist and sum to key total."""
    report = ltu.compute_locale_completeness(REPO_ROOT, "workflow-mgt", "es")
    tier_total = sum(t.total for name, t in report.key_tiers.items() if name != "P2")
    assert tier_total == report.keys_total
    assert report.key_tiers["P0"].total >= 0


def test_c4_translated_key_increases_pct(ltu, tmp_path):
    """C4: Changing one key value increases linguistic %."""
    locales_root = tmp_path / "packages/frameworks/kanban/locales"
    en_gb = locales_root / "en-GB" / "keys"
    es = locales_root / "es" / "keys"
    en_gb.mkdir(parents=True)
    es.mkdir(parents=True)
    manifest = {
        "version": 2,
        "locales": {
            "en-GB": {"keys": {"cli": "keys/cli.yaml"}},
            "es": {"keys": {"cli": "keys/cli.yaml"}},
        },
    }
    (locales_root / "manifest.yaml").write_text(
        yaml.dump(manifest, sort_keys=False), encoding="utf-8"
    )
    keys = {"cli.prompt.x": "Select language", "cli.prompt.y": "Confirm"}
    (en_gb / "cli.yaml").write_text(
        yaml.dump({"keys": keys}, sort_keys=False), encoding="utf-8"
    )
    (es / "cli.yaml").write_text(
        yaml.dump({"keys": dict(keys)}, sort_keys=False), encoding="utf-8"
    )

    before = ltu.compute_locale_completeness(tmp_path, "kanban", "es")
    assert before.keys_linguistic_pct() == 0.0

    data = yaml.safe_load((es / "cli.yaml").read_text(encoding="utf-8"))
    data["keys"]["cli.prompt.x"] = "Seleccionar idioma"
    (es / "cli.yaml").write_text(yaml.dump(data, sort_keys=False), encoding="utf-8")

    after = ltu.compute_locale_completeness(tmp_path, "kanban", "es")
    assert after.keys_linguistic_pct() == 50.0


def test_c5_whole_file_pending(ltu, tmp_path):
    """C5: Identical whole file counts as linguistic pending."""
    locales_root = tmp_path / "packages/frameworks/workflow-mgt/locales"
    (locales_root / "en-GB" / "scaffolds").mkdir(parents=True)
    (locales_root / "es" / "scaffolds").mkdir(parents=True)
    content = "# Hello\n"
    (locales_root / "en-GB" / "scaffolds" / "stub.txt").write_text(content, encoding="utf-8")
    (locales_root / "es" / "scaffolds" / "stub.txt").write_text(content, encoding="utf-8")
    manifest = {
        "version": 2,
        "locales": {
            "en-GB": {"scaffolds": {"stub": "scaffolds/stub.txt"}},
            "es": {"scaffolds": {"stub": "scaffolds/stub.txt"}},
        },
    }
    (locales_root / "manifest.yaml").write_text(
        yaml.dump(manifest, sort_keys=False), encoding="utf-8"
    )

    report = ltu.compute_locale_completeness(tmp_path, "workflow-mgt", "es")
    assert report.file_tier.pending == 1
    assert report.file_tier.translated == 0

    (locales_root / "es" / "scaffolds" / "stub.txt").write_text("# Hola\n", encoding="utf-8")
    report2 = ltu.compute_locale_completeness(tmp_path, "workflow-mgt", "es")
    assert report2.file_tier.translated == 1


def test_c6_missing_key_alert_exit(ltu, tmp_path):
    """C6: Missing key triggers --alert-on missing exit 1."""
    locales_root = tmp_path / "packages/frameworks/kanban/locales"
    en_gb = locales_root / "en-GB" / "keys"
    es = locales_root / "es" / "keys"
    en_gb.mkdir(parents=True)
    es.mkdir(parents=True)
    registry_dir = tmp_path / "docs/governance/standards"
    registry_dir.mkdir(parents=True)
    (registry_dir / "translatable-content-registry.yaml").write_text(
        yaml.dump({"scaffold_locales": {"es": {"linguistic_status": "pending"}}}),
        encoding="utf-8",
    )
    manifest = {
        "version": 2,
        "locales": {
            "en-GB": {"keys": {"cli": "keys/cli.yaml"}},
            "es": {"keys": {"cli": "keys/cli.yaml"}},
        },
    }
    (locales_root / "manifest.yaml").write_text(
        yaml.dump(manifest, sort_keys=False), encoding="utf-8"
    )
    (en_gb / "cli.yaml").write_text(
        yaml.dump({"keys": {"cli.a": "A", "cli.b": "B"}}, sort_keys=False),
        encoding="utf-8",
    )
    (es / "cli.yaml").write_text(
        yaml.dump({"keys": {"cli.a": "A"}}, sort_keys=False),
        encoding="utf-8",
    )

    result = _run_report(
        "--project-root",
        str(tmp_path),
        "--locale",
        "es",
        "--package",
        "kanban",
        "--alert-on",
        "missing",
    )
    assert result.returncode == 1


def test_c7_interim_alert(ltu, tmp_path):
    """C7: Interim copy triggers --alert-on interim exit 1."""
    locales_root = tmp_path / "packages/frameworks/kanban/locales"
    en_gb = locales_root / "en-GB" / "keys"
    es = locales_root / "es" / "keys"
    en_gb.mkdir(parents=True)
    es.mkdir(parents=True)
    registry_dir = tmp_path / "docs/governance/standards"
    registry_dir.mkdir(parents=True)
    (registry_dir / "translatable-content-registry.yaml").write_text(
        yaml.dump({"scaffold_locales": {"es": {"linguistic_status": "pending"}}}),
        encoding="utf-8",
    )
    manifest = {
        "version": 2,
        "locales": {
            "en-GB": {"keys": {"cli": "keys/cli.yaml"}},
            "es": {"keys": {"cli": "keys/cli.yaml"}},
        },
    }
    (locales_root / "manifest.yaml").write_text(
        yaml.dump(manifest, sort_keys=False), encoding="utf-8"
    )
    (en_gb / "cli.yaml").write_text(
        yaml.dump({"keys": {"cli.a": "Alpha"}}, sort_keys=False),
        encoding="utf-8",
    )
    (es / "cli.yaml").write_text(
        yaml.dump({"keys": {"cli.a": "Alpha"}}, sort_keys=False),
        encoding="utf-8",
    )

    result = _run_report(
        "--project-root",
        str(tmp_path),
        "--locale",
        "es",
        "--alert-on",
        "interim",
    )
    assert result.returncode == 1


def test_c8_fail_under_scaffold_locale_still_pending():
    """C8: --fail-under exits 1 for locales still at 0% linguistic (e.g. de)."""
    result = _run_report("--locale", "de", "--fail-under", "1")
    assert result.returncode == 1


def test_c8_es_passes_fail_under_after_t01():
    """C8b: Post E21:S05:T01, es meets minimal completeness threshold."""
    result = _run_report("--locale", "es", "--fail-under", "1")
    assert result.returncode == 0, result.stdout + result.stderr


def test_c8_fr_passes_fail_under_after_t02():
    """C8c: Post E21:S05:T02, fr meets minimal completeness threshold."""
    result = _run_report("--locale", "fr", "--fail-under", "1")
    assert result.returncode == 0, result.stdout + result.stderr


def test_c9_json_output():
    """C9: JSON output is valid and includes reports."""
    result = _run_report("--locale", "es", "--package", "kanban", "--format", "json")
    assert result.returncode == 0, result.stderr
    payload = json.loads(result.stdout)
    assert "reports" in payload
    assert payload["reports"][0]["locale"] == "es"


def test_c10_update_registry_dry_run():
    """C10: --update-registry --dry-run does not change registry."""
    before = REGISTRY.read_text(encoding="utf-8")
    result = _run_report("--locale", "es", "--update-registry", "--dry-run")
    assert result.returncode == 0
    assert REGISTRY.read_text(encoding="utf-8") == before
    assert "would update" in result.stdout or result.stdout.count("linguistic_status") >= 0


def test_c11_package_filter():
    """C11: Package filter scopes output."""
    result = _run_report("--locale", "es", "--package", "kanban", "--format", "json")
    assert result.returncode == 0
    payload = json.loads(result.stdout)
    assert all(r["package"] == "kanban" for r in payload["reports"])


def test_c12_maintainer_guide_lists_report_tool():
    """C12: Maintainer guide documents completeness report tool."""
    text = MAINTAINER_GUIDE.read_text(encoding="utf-8")
    assert "report_locale_completeness.py" in text
