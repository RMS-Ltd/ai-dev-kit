#!/usr/bin/env python3
"""Generate SA-1 packages/frameworks matrix + mirror pairs for T14 governor merge."""
from __future__ import annotations

from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
OUT_MATRIX = REPO / "docs/maintenance/.t14-capture/sa1-packages-matrix.md"
OUT_MIRROR = REPO / "docs/maintenance/.t14-capture/sa1-mirror-pairs.md"

PARENT = "packages/frameworks"
PARENT_CLASS = "Framework SoT"
PARENT_WAVE = "keep"

TOP30_VALIDATORS = [
    ("validate_branch_context.py", "RW Step 1 branch/epic safety gate", "High", ".cursorrules Step 1; rw-config scripts_path"),
    ("validate_rw_task_complete.py", "RW Step 1c task doc releasability gate (FR-060)", "High", ".cursorrules Step 1c"),
    ("validate_rw_task_intent.py", "RW Step 1d version/task intent guard (BR-056)", "High", ".cursorrules Step 1d"),
    ("validate_allocator_health.py", "RW Step 1e SAA allocator preflight (FR-122)", "High", ".cursorrules Step 1e; ADR-027"),
    ("validate_git_tag_occupancy.py", "RW Step 1f predicted tag namespace gate (FR-122)", "High", ".cursorrules Step 1f"),
    ("validate_version_bump.py", "RW Step 9 version schema and BUILD resolver check", "High", ".cursorrules Step 9; BR-097"),
    ("validate_changelog_format.py", "RW Step 9 changelog structure gate", "High", ".cursorrules Step 9"),
    ("validate_release_tag_immutability.py", "RW Step 9 release tag collision guard (BR-097)", "High", ".cursorrules Step 9"),
    ("validate_changelog_archive_links.py", "RW Step 9 archive link advisory", "Medium", ".cursorrules Step 9; BR-074"),
    ("validate_board_stamp_diff.py", "RW/UKW board row stamp evidence gate (FR-097)", "High", ".cursorrules Step 9; ADR-029"),
    ("validate_kanban_state_icons.py", "RW Step 9 MoSCOW state icon gate (UXR-012)", "High", ".cursorrules Step 9"),
    ("validate_active_kanban_board.py", "RW/UKW lean active board gate (FR-109)", "High", ".cursorrules Step 9; UKW Step 6"),
    ("validate_semver_registry_injective.py", "RW Step 9 task-touch registry injectivity (FR-045)", "High", "rw-config semver_mapping_strategy"),
    ("validate_task_touch_release_contract.py", "RW Step 9 task-touch release contract gate", "High", ".cursorrules Step 9"),
    ("validate_release_coherence.py", "RW Step 9 cross-surface coherence gate (FR-122)", "High", "rw-config release_coherence.enabled"),
    ("validate_actions_ci_parity.py", "RW Step 9.7 local CI parity gate (FR-112)", "High", ".cursorrules Step 9.7; rw-config"),
    ("validate_rw_tag_authority.py", "RW Step 11 pre/post annotated tag authority (FR-122)", "High", ".cursorrules Step 11"),
    ("validate_board_stamps_precommit.py", "Pre-commit homogenous stamp batching blocker", "High", "FR-097; UKW hygiene"),
    ("validate_kanban_governance_policy.py", "Kanban policy conformance validator", "Medium", "kanban/policies/kanban-governance-policy.md"),
    ("validate_fbu_directory.py", "FR/BR/UXR directory layout gate", "Medium", "fbu-directory-migration-guide.md"),
    ("validate_install_rc.py", "Greenfield/vendor install release-candidate checks (FR-108)", "Medium", "FR-110 adopter install path"),
    ("validate_ipw_publication_wiring.py", "IPW publication wiring drift detector (FR-083)", "Medium", "P-IPW-GATE"),
    ("validate_ipw_status_drift.py", "IPP/task status drift detector", "Medium", "implementation-planning track"),
    ("validate_rw_split_brain_streak.py", "RW split-brain streak detector", "Medium", "release coherence program"),
    ("validate_semver_tag_alignment.py", "SemVer tag alignment with internal version", "Medium", "task_touch mode"),
    ("validate_semver_monotonic.py", "SemVer monotonicity guard", "Medium", "semver-registry.yaml"),
    ("validate_kanban_naming.py", "Kanban path/naming hygiene (UXR-017)", "Medium", "kanban governance"),
    ("validate_kanban_completed.py", "Kanban completed ledger validator (FR-134)", "Medium", "kanban-completed skill"),
    ("validate_est_inline_format.py", "E:S:T inline padding formatter gate (UXR-014)", "Medium", "est_format.py"),
    ("validate_workflow_encapsulation.py", "Workflow registry encapsulation contract gate", "Medium", "workflow-registry.yaml"),
]

VERSION_SCRIPTS = [
    ("resolve_rw_build.py", "Deterministic RW BUILD resolver (BR-097)", "High"),
    ("semver_converter.py", "Internal↔SemVer conversion and RW tag creation", "High"),
    ("finalize_rw_semver_registry.py", "Task-touch registry finalize at tag boundary", "High"),
    ("build_rw_commit_message.py", "RW Step 10 commit message builder", "High"),
    ("push_rw_release.py", "RW Step 12 scoped tag push helper (UXR-024)", "High"),
    ("build_semver_registry.py", "SemVer registry builder from git history", "Medium"),
    ("audit_semver_registry_collisions.py", "Registry collision audit tool", "Medium"),
    ("repair_semver_registry_collisions.py", "Registry collision repair tool", "Medium"),
    ("migrate_to_task_touch.py", "Task-touch mapping migration utility", "Medium"),
    ("tag_collision_recovery.py", "Tag collision recovery helper (BR-097)", "Medium"),
    ("task_touch_registry_audit.py", "Task-touch registry audit report", "Medium"),
]

PACKAGE_SUMMARIES = [
    (
        "packages/frameworks/workflow-mgt/",
        "Primary workflow framework: RW/UKW/IPW/IDW validators, installers, registry, KB",
        "Optimal",
        "workflow-mgt/README.md; rw-config scripts_path; FR-110 SoT",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/kanban/",
        "Kanban framework: policies, templates, installers, KMA guardrails, scripts",
        "Optimal",
        "kanban/README.md; docs/kanban/AGENTS.md consumer boundary",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/numbering-versioning/",
        "Portable numbering/versioning policy package for adopters",
        "Optimal",
        "numbering-versioning/README.md; dev-kit-versioning-policy cross-ref",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/doc-lifecycle/",
        "Document lifecycle metadata policy and housekeeping framework",
        "Optimal",
        "doc-lifecycle/README.md; .cursorrules lifecycle frontmatter",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/debug-path/",
        "Debug Path Framework (DPF) and Debug Round Workflow methodology",
        "Optimal",
        "debug-path/README.md; optional adopter bundle",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/tooling-automation/",
        "CQG validators, generators, and maintainer automation helpers",
        "Acceptable",
        "validators/README.md; no package-root README (gap vs other packages)",
        "Medium",
        "keep (add README in follow-on)",
    ),
]

README_ROWS = [
    (
        "packages/frameworks/workflow-mgt/README.md",
        "Workflow framework package index, registry pointer, adopter install notes",
        "Optimal",
        "FR-110 lean vendor; workflow-registry.yaml",
        "High",
    ),
    (
        "packages/frameworks/kanban/README.md",
        "Kanban package index with consumer vs framework tree boundary",
        "Optimal",
        "FR-110; install_kanban_framework.py entry",
        "High",
    ),
    (
        "packages/frameworks/numbering-versioning/README.md",
        "Numbering/versioning policy package index",
        "Optimal",
        "integration/ examples; governance cross-links",
        "Medium",
    ),
    (
        "packages/frameworks/doc-lifecycle/README.md",
        "Document lifecycle framework index",
        "Optimal",
        "evergreen/timeboxed/transient policy",
        "Medium",
    ),
    (
        "packages/frameworks/debug-path/README.md",
        "Debug Path Framework index",
        "Optimal",
        "optional DRW methodology bundle",
        "Low",
    ),
]

MANIFEST_ROWS = [
    (
        "packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml",
        "Machine-readable workflow registry (13 workflows + composites)",
        "Optimal",
        "workflow-mgt/README.md canonical list",
        "High",
    ),
    (
        "packages/frameworks/kanban/manifests/kma-agent-guardrails.yaml",
        "KMA agent guardrails manifest (agentic migration)",
        "Optimal",
        "docs/kanban/AGENTS.md KMA section",
        "Medium",
    ),
    (
        "packages/frameworks/tooling-automation/validators/__init__.py",
        "Validator package namespace entry",
        "Acceptable",
        "CQG operator guide; no pyproject at package root",
        "Low",
    ),
]

CLASS_SUMMARIES = [
    (
        "packages/frameworks/workflow-mgt/templates/**",
        "Workflow/doc templates (ICW, comprehension, planning)",
        "Framework SoT",
        "Optimal",
        "~11 template files; workflow-mgt/README What's Included",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/locales/**",
        "Workflow framework locale/message bundles",
        "Framework SoT",
        "Optimal",
        "~74 locale files; homogeneous i18n tree",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/skills/**",
        "Portable ADK skill packs for adopters (RW, UKW, intake, IPW)",
        "Framework SoT",
        "Optimal",
        "skills/README.md; FR-110 vendor bundle",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/workflows/**",
        "YAML workflow definitions + per-workflow READMEs",
        "Framework SoT",
        "Optimal",
        "workflow-registry.yaml authoritative",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/KB/**",
        "Workflow methodology KB (vwmp execution guides, ADRs)",
        "Framework SoT",
        "Optimal",
        "Separate from registry rows per README",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/docs/**",
        "Framework-local maintainer docs (dual-source parity, RW contracts)",
        "Framework SoT",
        "Optimal",
        "cursorrules-rw-trigger-section parity docs",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/config/**",
        "Install profiles, error codes, rw-config schema docs",
        "Framework SoT",
        "Optimal",
        "install-rc-checklist.yaml; consumer rw-config",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/scripts/validation/test_*.py",
        "Pytest suite for RW/UKW validation scripts",
        "Operational",
        "Optimal",
        "run_workflow_scripts_ci_pytest.sh; FR-112 parity",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/scripts/version/test_*.py",
        "Pytest suite for version/tag scripts",
        "Operational",
        "Optimal",
        "workflow scripts CI pytest harness",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/scripts/test_*.py",
        "Top-level workflow script integration tests",
        "Operational",
        "Optimal",
        "tests/rw_scenarios cross-ref",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/scripts/kanban/**",
        "Kanban helper scripts (stamps, archive, board transforms)",
        "Framework SoT",
        "Optimal",
        "UKW/RW Step 7; stamp_authority.py",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/scripts/changelog/**",
        "CMW/changelog analysis helpers",
        "Framework SoT",
        "Optimal",
        "CMW workflow; check_changelog_size.py sibling",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/scripts/icw/**",
        "Implementation cycle workflow env/helpers",
        "Framework SoT",
        "Optimal",
        "IPW/IDW mode gates (FR-128)",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/cursorrules-*.md",
        "Portable .cursorrules trigger excerpts for adopters",
        "Framework SoT",
        "Optimal",
        "dual-source parity with repo .cursorrules",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/canonical-rw-steps.yaml",
        "Machine-readable RW step contract",
        "Framework SoT",
        "Optimal",
        "release-workflow-agent-execution.md",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/workflow-mgt/AGENTS.md",
        "Workflow framework agent role snippets",
        "Framework SoT",
        "Optimal",
        "ADR-012 domain routing defers to package agents",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/kanban/templates/**",
        "Kanban epic/story/task/board templates (~1172 files)",
        "Framework SoT",
        "Optimal",
        "kanban README; installer scaffolds host docs/kanban",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/kanban/locales/**",
        "Kanban locale bundles",
        "Framework SoT",
        "Optimal",
        "~134 locale files",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/kanban/KB/**",
        "Kanban methodology and developer docs",
        "Framework SoT",
        "Optimal",
        "KMA execution guide housing",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/kanban/policies/**",
        "Kanban governance policies (portable)",
        "Framework SoT",
        "Optimal",
        "validate_kanban_governance_policy.py",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/kanban/scripts/**",
        "Kanban install/validation scripts",
        "Framework SoT",
        "Optimal",
        "install_kanban_framework.py",
        "High",
        "keep",
    ),
    (
        "packages/frameworks/kanban/guides/**",
        "Adopter migration and intake guides",
        "Framework SoT",
        "Optimal",
        "FR_BR_INTAKE_GUIDE.md; KMA guide",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/numbering-versioning/integration/**",
        "Cross-framework integration examples",
        "Framework SoT",
        "Optimal",
        "workflow/kanban integration md",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/numbering-versioning/*.md",
        "Root policy docs (versioning-policy, strategy, cookbook excerpts)",
        "Framework SoT",
        "Optimal",
        "governance standards cross-link",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/doc-lifecycle/policies/**",
        "Lifecycle policy YAML/MD",
        "Framework SoT",
        "Optimal",
        "doc-lifecycle README",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/doc-lifecycle/templates/**",
        "Lifecycle document templates",
        "Framework SoT",
        "Optimal",
        "housekeeping templates",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/doc-lifecycle/tests/**",
        "Doc-lifecycle package tests",
        "Operational",
        "Optimal",
        "package-local pytest",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/debug-path/templates/**",
        "DRW/DPF templates",
        "Framework SoT",
        "Optimal",
        "debug-path README",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/debug-path/integration/**",
        "Debug path integration examples",
        "Framework SoT",
        "Optimal",
        "optional consumer wiring",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/tooling-automation/validators/**",
        "CQG SARIF validators and framework checks",
        "Framework SoT",
        "Optimal",
        "validate_code_quality_gate.py bridge",
        "Medium",
        "keep",
    ),
    (
        "packages/frameworks/tooling-automation/generators/**",
        "Kanban/workflow template generators",
        "Framework SoT",
        "Optimal",
        "generators/README.md",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/tooling-automation/docs/**",
        "CQG operator documentation",
        "Framework SoT",
        "Optimal",
        "code-quality-gate-operator-guide.md",
        "Low",
        "keep",
    ),
    (
        "packages/frameworks/**/__pycache__/**",
        "Python bytecode caches (local only)",
        "Generated/vendor",
        "Archive/remove",
        "Only in canonical tree during dev; excluded from greenfield sync",
        "Low",
        "remove (gitignore hygiene; not shipped)",
    ),
]

MIRROR_PAIRS = [
    ("packages/frameworks/", "greenfield-install/packages/frameworks/", "In sync", "SoT=canonical; mirror via sync_greenfield_install.py (FR-110); diff -rq excludes __pycache__ → 0 content deltas"),
    ("packages/frameworks/workflow-mgt/", "greenfield-install/packages/frameworks/workflow-mgt/", "In sync", "Largest package; rw-config scripts_path points here"),
    ("packages/frameworks/kanban/", "greenfield-install/packages/frameworks/kanban/", "In sync", "Consumer installs to host docs/kanban per README boundary"),
    ("packages/frameworks/numbering-versioning/", "greenfield-install/packages/frameworks/numbering-versioning/", "In sync", "Policy-only; bundled in lean vendor tree"),
    ("packages/frameworks/doc-lifecycle/", "greenfield-install/packages/frameworks/doc-lifecycle/", "In sync", "Policy/templates bundle"),
    ("packages/frameworks/debug-path/", "greenfield-install/packages/frameworks/debug-path/", "In sync", "Optional methodology bundle"),
    ("packages/frameworks/tooling-automation/", "greenfield-install/packages/frameworks/tooling-automation/", "In sync", "CQG validators mirrored"),
    ("(n/a — mirror-only)", "greenfield-install/packages/frameworks/BUILD_NOW.sh", "Mirror-only artifact", "Greenfield packaging helper; not in canonical packages/frameworks root"),
    ("(n/a — mirror-only)", "greenfield-install/packages/frameworks/build_packages.py", "Mirror-only artifact", "Adopter package build script at mirror root"),
    ("(n/a — mirror-only)", "greenfield-install/packages/frameworks/PACKAGE_UPDATE_SUMMARY.md", "Mirror-only artifact", "Generated/maintainer summary for vendor tree updates"),
]


def row(
    path: str,
    purpose_class: str,
    purpose: str,
    verdict: str,
    evidence: str,
    ref_touch: str,
    align: str = "Consistent",
    wave: str = "keep",
) -> str:
    return (
        f"| {path} | {PARENT} | {purpose_class} | {purpose} | {verdict} | "
        f"{evidence} | {ref_touch} | {align} | {wave} |"
    )


def main() -> None:
    lines: list[str] = []

    for path, purpose, verdict, evidence, ref, wave in PACKAGE_SUMMARIES:
        lines.append(
            row(path, PARENT_CLASS, purpose, verdict, evidence, ref, "Consistent", wave)
        )

    for path, purpose, verdict, evidence, ref in README_ROWS:
        lines.append(row(path, PARENT_CLASS, purpose, verdict, evidence, ref))

    for fname, purpose, ref, evidence in TOP30_VALIDATORS:
        path = f"packages/frameworks/workflow-mgt/scripts/validation/{fname}"
        lines.append(
            row(path, "Operational", purpose, "Optimal", evidence, ref)
        )

    for fname, purpose, ref in VERSION_SCRIPTS:
        path = f"packages/frameworks/workflow-mgt/scripts/version/{fname}"
        lines.append(
            row(path, "Operational", purpose, "Optimal", "RW version pipeline; rw-config", ref)
        )

    for path, purpose, verdict, evidence, ref in MANIFEST_ROWS:
        lines.append(row(path, PARENT_CLASS, purpose, verdict, evidence, ref))

    for (
        path,
        purpose,
        pclass,
        verdict,
        evidence,
        ref,
        wave,
    ) in CLASS_SUMMARIES:
        align = "Tension" if pclass == "Generated/vendor" else "Consistent"
        lines.append(row(path, pclass, purpose, verdict, evidence, ref, align, wave))

    OUT_MATRIX.write_text("\n".join(lines) + "\n", encoding="utf-8")

    mirror_lines = [
        f"| {canon} | {mirror} | {status} | {notes} |"
        for canon, mirror, status, notes in MIRROR_PAIRS
    ]
    OUT_MIRROR.write_text("\n".join(mirror_lines) + "\n", encoding="utf-8")

    print(f"matrix rows: {len(lines)}")
    print(f"mirror rows: {len(mirror_lines)}")


if __name__ == "__main__":
    main()
