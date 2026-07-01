#!/usr/bin/env python3
"""Generate SA-2 scripts/src matrix rows for T14 file audit (governor merge)."""
from __future__ import annotations

import re
import subprocess
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
OUT = REPO / "docs/maintenance/.t14-capture/sa2-scripts-src-matrix.md"

PARENT_META: dict[str, tuple[str, str, str]] = {
    "scripts": ("Dev-kit specialisation", "Acceptable", "keep"),
    "scripts/cleanup": ("Dev-kit specialisation", "Acceptable", "consolidate"),
    "scripts/cleanup/output": ("Generated/vendor", "Acceptable", "archive"),
    "scripts/documentation": ("Dev-kit specialisation", "Optimal", "keep"),
    "scripts/frameworks": ("Dev-kit specialisation", "Acceptable", "keep"),
    "scripts/frameworks/collectors": ("Dev-kit specialisation", "Acceptable", "keep"),
    "scripts/git-hooks": ("Operational", "Optimal", "keep"),
    "scripts/internal": ("Dev-kit specialisation", "Optimal", "keep"),
    "scripts/notion_push_payloads": ("Legacy/transitional", "Suboptimal", "archive"),
    "src/ai_dev_kit": ("Dev-kit specialisation", "Optimal", "keep"),
}

# rel -> (purpose_class, purpose, verdict, evidence, ref_touch, align, wave)
OVERRIDES: dict[str, tuple[str, str, str, str, str, str, str]] = {
    "scripts/README.md": (
        "Dev-kit specialisation",
        "scripts/ directory index; boundary vs packages/frameworks canonical scripts",
        "Optimal",
        "scripts/README.md; REPOSITORY-DIRECTORY-AUDIT.md scripts row",
        "Medium",
        "Tension",
        "keep",
    ),
    "scripts/sync_greenfield_install.py": (
        "Dev-kit specialisation",
        "FR-110 greenfield-install mirror sync from packages/frameworks (CI --check)",
        "Optimal",
        "FR-110; greenfield-install-manifest.yaml; .github/workflows",
        "High",
        "Tension",
        "keep",
    ),
    "scripts/greenfield-install-manifest.yaml": (
        "Operational",
        "Copy manifest for sync_greenfield_install.py (include/exclude rules)",
        "Optimal",
        "sync_greenfield_install.py; FR-110",
        "High",
        "Consistent",
        "keep",
    ),
    "scripts/test_sync_greenfield_install.py": (
        "Dev-kit specialisation",
        "Pytest coverage for greenfield sync script invariants",
        "Optimal",
        "sync_greenfield_install.py; FR-110 CI parity",
        "High",
        "Consistent",
        "keep",
    ),
    "scripts/test_greenfield_container.py": (
        "Dev-kit specialisation",
        "Containerized greenfield install smoke harness",
        "Acceptable",
        "fr099_install_smoke_test.sh; FR-099",
        "Medium",
        "Consistent",
        "keep",
    ),
    "scripts/validate-project-agent-manifest-paths.py": (
        "Dev-kit specialisation",
        "ADR-012 manifest path existence validator (loadFirst/sourcePath)",
        "Optimal",
        "docs/project-agent-manifest.json; AGENTS.md",
        "High",
        "Consistent",
        "keep",
    ),
    "scripts/git-hooks/pre-commit": (
        "Operational",
        "Local pre-commit hook delegating to validate_board_stamps_precommit.py",
        "Optimal",
        "FR-097; packages/frameworks/workflow-mgt/scripts/validation/",
        "High",
        "Consistent",
        "keep",
    ),
    "src/ai_dev_kit/version.py": (
        "Dev-kit specialisation",
        "Canonical RW version SoT (RC.EPIC.STORY.TASK+BUILD)",
        "Optimal",
        "rw-config.yaml version_file; dev-kit-versioning-policy.md",
        "High",
        "Consistent",
        "keep",
    ),
    "src/ai_dev_kit/__init__.py": (
        "Dev-kit specialisation",
        "Package entry exposing VERSION_STRING for CLI/import consumers",
        "Optimal",
        "src/ai_dev_kit/version.py",
        "Medium",
        "Consistent",
        "keep",
    ),
    "scripts/merge_changelogs.py": (
        "Legacy/transitional",
        "One-off epic/main changelog merge utility (pre-CMW consolidation)",
        "Suboptimal",
        "Historical branch merge; CMW SoT in packages/frameworks/workflow-mgt/scripts/changelog/",
        "Low",
        "Tension",
        "archive",
    ),
    "scripts/reverse_notion_migration_fr121.py": (
        "Legacy/transitional",
        "FR-121 reverse Notion→git migration helper (ADR-026 git SoT)",
        "Acceptable",
        "ADR-026; FR-121; transitional until migration closed",
        "Medium",
        "Consistent",
        "archive",
    ),
    "scripts/notion_migration_manifest.py": (
        "Legacy/transitional",
        "Notion migration batch manifest (FR-114/FR-121 program)",
        "Suboptimal",
        "ADR-026 git SoT; Notion optional archive",
        "Medium",
        "Consistent",
        "archive",
    ),
    "scripts/notion_import_fr114_batch.py": (
        "Legacy/transitional",
        "FR-114 Notion import batch driver",
        "Suboptimal",
        "FR-114 split surfaces; ADR-026",
        "Low",
        "Consistent",
        "archive",
    ),
    "scripts/notion_push_payloads/INVOKE_README.md": (
        "Legacy/transitional",
        "Operator notes for Notion MCP push payload batch",
        "Suboptimal",
        "ADR-026; scripts/notion_push_payloads/ T13 archive wave",
        "Low",
        "Consistent",
        "archive",
    ),
    "scripts/internal/README.md": (
        "Dev-kit specialisation",
        "Internal scripts scope boundary (non-adopter utilities)",
        "Optimal",
        "scripts/README.md; ADR-026 internal tooling",
        "Low",
        "Consistent",
        "keep",
    ),
    "scripts/internal/validate_cli.py": (
        "Dev-kit specialisation",
        "ai-dev-kit CLI validation harness (E06:S08)",
        "Optimal",
        "scripts/internal/README.md; packages/cli",
        "Medium",
        "Consistent",
        "keep",
    ),
    "scripts/internal/scan_tasks_for_moscow.py": (
        "Dev-kit specialisation",
        "UKW helper: scan task docs for MoSCOW coverage gaps",
        "Optimal",
        "scripts/internal/README.md; UKW BR-059",
        "Medium",
        "Consistent",
        "keep",
    ),
    "scripts/internal/remediate_reliability_wave1.py": (
        "Dev-kit specialisation",
        "One-off BR-100 wave-1 reliability remediation batch",
        "Acceptable",
        "E08:S03:T13; point-in-time maintainer script",
        "Low",
        "Consistent",
        "consolidate",
    ),
    "scripts/documentation/validate-documentation-consistency.py": (
        "Dev-kit specialisation",
        "Doc corpus consistency validator (maintainer docs hygiene)",
        "Optimal",
        "scripts/documentation/; documentation-governance strategy",
        "High",
        "Tension",
        "keep",
    ),
    "scripts/documentation/validate-documentation-links.py": (
        "Dev-kit specialisation",
        "Internal doc link checker (pre-portal/adopter link hygiene)",
        "Optimal",
        "BR-068; adopter-public-documentation-authoring.md",
        "Medium",
        "Tension",
        "keep",
    ),
    "scripts/frameworks/framework-health-monitor.py": (
        "Dev-kit specialisation",
        "Framework package health dashboard orchestrator (book-repo era)",
        "Acceptable",
        "vs packages/frameworks — clarify boundary per T13",
        "Medium",
        "Tension",
        "keep",
    ),
    "scripts/frameworks/utils.py": (
        "Dev-kit specialisation",
        "Shared helpers for scripts/frameworks collectors and dashboards",
        "Acceptable",
        "scripts/frameworks/; not framework package SoT",
        "High",
        "Tension",
        "keep",
    ),
    "scripts/run_cli_pytest_coverage.sh": (
        "Operational",
        "CLI pytest+coverage runner for maintainer CI/local parity",
        "Optimal",
        "E06:S08 CLI; .github/workflows references",
        "High",
        "Consistent",
        "keep",
    ),
    "scripts/fr099_bootstrap_public_ai_dev_kit.sh": (
        "Dev-kit specialisation",
        "FR-099 public repo bootstrap shell entrypoint",
        "Optimal",
        "docs/maintenance/fr099-phase3-public-repo-bootstrap.md",
        "Medium",
        "Consistent",
        "keep",
    ),
    "scripts/fr099_install_smoke_test.sh": (
        "Dev-kit specialisation",
        "FR-099 greenfield install smoke test wrapper",
        "Optimal",
        "FR-099; test_greenfield_container.py",
        "Medium",
        "Consistent",
        "keep",
    ),
    "scripts/fr099_sync_public_from_private.sh": (
        "Dev-kit specialisation",
        "FR-099 private→public content sync driver",
        "Optimal",
        "FR-099 book migration program",
        "Medium",
        "Consistent",
        "keep",
    ),
    "scripts/fix_md_external_links_br068.py": (
        "Dev-kit specialisation",
        "BR-068 monorepo markdown external link repair utility",
        "Acceptable",
        "BR-068; portal pytest",
        "Low",
        "Consistent",
        "keep",
    ),
    "scripts/escape_mdx_placeholders.py": (
        "Dev-kit specialisation",
        "MDX placeholder escape for Docusaurus corpus",
        "Acceptable",
        "BR-068; portal build hygiene",
        "Medium",
        "Consistent",
        "keep",
    ),
    "scripts/kb_index.py": (
        "Legacy/transitional",
        "Maintainer KB Notion index builder (pre-ADR-026 git SoT)",
        "Suboptimal",
        "ADR-026 git SoT; docs/knowledge/ target",
        "Medium",
        "Tension",
        "archive",
    ),
    "scripts/kb_stub_sweep.py": (
        "Legacy/transitional",
        "Notion KB stub detection/sweep during migration",
        "Suboptimal",
        "ADR-026; kb_* migration cluster",
        "High",
        "Tension",
        "archive",
    ),
}

KB_NOTION_PREFIXES = (
    "kb_",
    "push_",
    "apply_notion",
    "bulk_record_notion",
    "invoke_kb",
    "record_notion",
    "run_kb",
    "split_mcp",
)

REF_CACHE: dict[str, str] = {}
FORCED_REF: dict[str, str] = {
    "scripts/README.md": "Medium",
    "scripts/internal/README.md": "Low",
    "src/ai_dev_kit/__init__.py": "Medium",
}


def ref_touch(rel: str) -> str:
    if rel in REF_CACHE:
        return REF_CACHE[rel]
    if rel in FORCED_REF:
        REF_CACHE[rel] = FORCED_REF[rel]
        return FORCED_REF[rel]
  # path-specific for high-signal files
    needle = rel if rel.startswith("src/") else rel
    try:
        r = subprocess.run(
            ["rg", "-l", re.escape(needle), "--glob", "!**/__pycache__/**", "--glob", "!docs/maintenance/.t14-capture/**", str(REPO)],
            capture_output=True,
            text=True,
            timeout=8,
        )
        n = len([ln for ln in r.stdout.splitlines() if ln.strip() and ln.strip() != rel])
    except Exception:
        n = 0
    if n >= 11 or rel in (
        "scripts/sync_greenfield_install.py",
        "scripts/validate-project-agent-manifest-paths.py",
        "scripts/git-hooks/pre-commit",
        "src/ai_dev_kit/version.py",
    ):
        band = "High"
    elif n >= 3:
        band = "Medium"
    else:
        band = "Low"
    REF_CACHE[rel] = band
    return band


def esc(cell: str) -> str:
    return cell.replace("|", "\\|").replace("\n", " ")


def row(*cells: str) -> str:
    return "| " + " | ".join(esc(c) for c in cells) + " |"


def parent_of(rel: str) -> str:
    return str(Path(rel).parent)


def parent_meta(rel: str) -> tuple[str, str, str]:
    p = parent_of(rel)
    if p in PARENT_META:
        return PARENT_META[p]
    if p.startswith("scripts/notion_push_payloads"):
        return PARENT_META["scripts/notion_push_payloads"]
    return PARENT_META["scripts"]


def is_kb_notion_legacy(name: str) -> bool:
    return any(name.startswith(p) for p in KB_NOTION_PREFIXES) or name in {
        "notion_import_fr114_batch.py",
        "notion_migration_manifest.py",
    }


def classify(rel: str) -> tuple[str, str, str, str, str, str, str, str]:
    if rel in OVERRIDES:
        pc, purpose, verdict, evidence, ref, align, wave = OVERRIDES[rel]
        parent = parent_of(rel)
        return rel, parent, pc, purpose, verdict, evidence, ref, align, wave

    name = Path(rel).name
    parent = parent_of(rel)
    pc_def, verdict_def, wave_def = parent_meta(rel)

    if parent == "scripts/notion_push_payloads" and name.endswith(".json"):
        return (
            rel,
            parent,
            "Legacy/transitional",
            f"Frozen Notion page push payload snapshot ({name})",
            "Suboptimal",
            "ADR-026 git SoT; T13 archive wave for notion_push_payloads/",
            "Low",
            "Consistent",
            "archive",
        )

    if is_kb_notion_legacy(name) and parent == "scripts":
        return (
            rel,
            parent,
            "Legacy/transitional",
            f"Notion/KB migration utility ({name}) superseded by git maintainer KB",
            "Suboptimal",
            "ADR-026; REPOSITORY-DIRECTORY-AUDIT.md scripts/notion_push_payloads row",
            ref_touch(rel),
            "Tension",
            "archive",
        )

    if parent.startswith("scripts/cleanup"):
        if parent == "scripts/cleanup/output" or "/output/" in rel:
            kind = "generated inventory artifact" if name.endswith((".json", ".md")) else "output"
            return (
                rel,
                parent,
                "Generated/vendor",
                f"Kanban naming cleanup {kind} ({name})",
                "Acceptable",
                "scripts/cleanup/ one-off wave; T13 consolidate",
                ref_touch(rel),
                "Consistent",
                "archive",
            )
        return (
            rel,
            parent,
            pc_def,
            f"Kanban naming/path cleanup utility ({name})",
            verdict_def,
            "scripts/cleanup/ T13 NEEDS_REVIEW per script",
            ref_touch(rel),
            "Consistent",
            wave_def,
        )

    if parent == "scripts/documentation":
        stem = name.replace(".py", "").replace("-", " ")
        return (
            rel,
            parent,
            pc_def,
            f"Documentation maintainer automation: {stem}",
            verdict_def,
            "scripts/documentation/; maintainer doc hygiene",
            ref_touch(rel),
            "Tension" if "validate" in name else "Consistent",
            wave_def,
        )

    if parent.startswith("scripts/frameworks"):
        if name == "__init__.py":
            purpose = (
                "Package init for scripts/frameworks collectors"
                if parent.endswith("collectors")
                else "Package init for scripts/frameworks tree"
            )
        elif parent.endswith("collectors"):
            purpose = f"Framework health metric collector ({name})"
        elif name == "generate-dashboard.py":
            purpose = "Generate framework health dashboard HTML/JSON"
        else:
            purpose = f"Framework-adjacent maintainer script ({name})"
        return (
            rel,
            parent,
            pc_def,
            purpose,
            verdict_def,
            "T13 vs packages/frameworks boundary tension",
            ref_touch(rel),
            "Tension",
            wave_def,
        )

    if parent == "scripts/internal":
        return (
            rel,
            parent,
            pc_def,
            f"Internal maintainer utility ({name})",
            verdict_def,
            "scripts/internal/README.md; ADR-026",
            ref_touch(rel),
            "Consistent",
            wave_def,
        )

    if parent == "src/ai_dev_kit":
        return (
            rel,
            parent,
            pc_def,
            f"ai_dev_kit package module ({name})",
            verdict_def,
            "rw-config version_file target SoT",
            ref_touch(rel),
            "Consistent",
            wave_def,
        )

    # scripts/ root catch-all
    return (
        rel,
        parent,
        pc_def,
        f"Dev-kit root utility script ({name})",
        verdict_def,
        "scripts/README.md; overlap with packages/frameworks/workflow-mgt/scripts",
        ref_touch(rel),
        "Tension",
        wave_def,
    )


def collect_files() -> list[str]:
    paths: list[Path] = []
    for root in ("scripts", "src/ai_dev_kit"):
        for p in sorted((REPO / root).rglob("*")):
            if p.is_file() and "__pycache__" not in p.parts:
                paths.append(p)
    return sorted(x.relative_to(REPO).as_posix() for x in paths)


def main() -> None:
    files = collect_files()
    rows = [row(*classify(rel)) for rel in files]
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("\n".join(rows) + "\n", encoding="utf-8")
    print(f"Wrote {len(rows)} rows to {OUT}")


if __name__ == "__main__":
    main()
