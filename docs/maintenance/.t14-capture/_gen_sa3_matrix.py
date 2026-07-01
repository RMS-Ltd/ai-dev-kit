#!/usr/bin/env python3
"""Generate SA-3 docs matrix rows for T14 file audit (governor merge)."""
from __future__ import annotations

import re
import subprocess
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
OUT = REPO / "docs/maintenance/.t14-capture/sa3-docs-matrix.md"

# T13 parent directory classes (abbrev)
PARENT_META = {
    "docs/maintenance": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/implementation-cycles": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/governance": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/kanban": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/changelog-and-release-notes": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/journals": ("Operational", "Optimal", "keep"),
    "docs/book-project": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/adk-feedback": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/project-management": ("Legacy/transitional", "Suboptimal", "remove"),
    "docs/architecture": ("Dev-kit specialisation", "Acceptable", "keep"),
    "docs/analysis": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/knowledge": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/guides": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/documentation": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/developer-tools": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/maintainer": ("Dev-kit specialisation", "Optimal", "keep"),
    "docs/release-notes": ("Dev-kit specialisation", "Acceptable", "consolidate"),
}

MAINTENANCE_OVERRIDES: dict[str, tuple[str, str, str, str, str]] = {
    "docs/maintenance/README.md": (
        "Maintainer runbook index and audit report pointers",
        "Optimal",
        "docs/maintenance/README.md index table; ADR-026 maintainer KB",
        "Medium",
        "keep",
    ),
    "docs/maintenance/REPOSITORY-DIRECTORY-AUDIT.md": (
        "T13/UXR-033 directory valuation matrix and wave plan (scope authority for T14)",
        "Optimal",
        "E07:S01:T13 deliverable; UXR-033; FR-140 cartography leg",
        "High",
        "keep",
    ),
    "docs/maintenance/REPOSITORY-FILE-AUDIT.md": (
        "T14/UXR-034 per-file valuation matrix scaffold (governor merge target)",
        "Optimal",
        "E07:S01:T14 deliverable; IPP-E07S01T14",
        "High",
        "keep",
    ),
    "docs/maintenance/release-runbook.md": (
        "Comprehensive RW/release procedures for maintainers",
        "Optimal",
        "README index; workflow-mgt release docs cross-ref",
        "Medium",
        "keep",
    ),
    "docs/maintenance/book-repo-docs-scope.md": (
        "Scope boundary doc for book-repo vs framework docs split",
        "Optimal",
        "FR-099 book migration program",
        "Low",
        "keep",
    ),
    "docs/maintenance/changelog-directory-consolidation-manifest.md": (
        "Changelog path consolidation manifest (historical mover evidence)",
        "Acceptable",
        "changelog-and-release-notes consolidation wave",
        "Low",
        "keep",
    ),
    "docs/maintenance/fr099-phase3-public-repo-bootstrap.md": (
        "FR-099 phase 3 public repo bootstrap verification notes",
        "Optimal",
        "IPP-E1S04; book private/public migration",
        "Low",
        "keep",
    ),
    "docs/maintenance/fr099-phase4-rewire-and-verify.md": (
        "FR-099 phase 4 rewire and verify checklist",
        "Optimal",
        "IPP-E1S04 follow-on",
        "Low",
        "keep",
    ),
}

REF_CACHE: dict[str, str] = {}


def ref_touch(rel: str) -> str:
    if rel in REF_CACHE:
        return REF_CACHE[rel]
    try:
        r = subprocess.run(
            ["rg", "-l", re.escape(Path(rel).name), "--glob", "!docs/maintenance/.t14-capture/**", str(REPO)],
            capture_output=True,
            text=True,
            timeout=8,
        )
        n = len([ln for ln in r.stdout.splitlines() if ln.strip() and ln.strip() != rel])
    except Exception:
        n = 0
    if n >= 11:
        band = "High"
    elif n >= 3:
        band = "Medium"
    else:
        band = "Low"
    REF_CACHE[rel] = band
    return band


def esc(cell: str) -> str:
    return cell.replace("|", "\\|").replace("\n", " ")


def row(
    path: str,
    parent: str,
    purpose_class: str,
    purpose: str,
    verdict: str,
    evidence: str,
    ref: str,
    align: str,
    wave: str,
) -> str:
    return (
        f"| {esc(path)} | {esc(parent)} | {esc(purpose_class)} | {esc(purpose)} | "
        f"{esc(verdict)} | {esc(evidence)} | {esc(ref)} | {esc(align)} | {esc(wave)} |"
    )


def parent_of(rel: str) -> str:
    p = str(Path(rel).parent)
    return p if p != "." else "docs"


def classify_maintenance(rel: str) -> tuple[str, str, str, str, str, str]:
    pc, pv, wave = PARENT_META["docs/maintenance"]
    if rel in MAINTENANCE_OVERRIDES:
        purpose, verdict, evidence, ref, w = MAINTENANCE_OVERRIDES[rel]
        return pc, purpose, verdict, evidence, ref, w
    name = Path(rel).name
    if name.startswith("BUILD_") or name == "UPLOAD_PACKAGES.md":
        purpose = "Framework package build/upload maintainer runbook"
        evidence = "docs/maintenance/README.md; packages/frameworks build scripts"
        ref = "Medium"
    elif name.startswith("release-"):
        purpose = "Release automation template or integration guide"
        evidence = "release-runbook.md cross-links"
        ref = "Low"
    elif "/logs/" in rel:
        purpose = "Forensic evidence log for RW/UKW/MM W verification"
        evidence = "ADR-008 journals pattern; point-in-time audit evidence"
        ref = "Low"
        pc = "Operational"
    elif "semver-registry" in name or "semver-verification" in name:
        purpose = "Semver registry collision repair manifest or verification evidence"
        evidence = "FR-045/task_touch; E03:S02:T12 wave evidence"
        ref = "Low"
    elif "docusaurus" in name:
        purpose = "Docusaurus CI/corpus triage verification evidence"
        evidence = "BR-068/FR-067; E05:S09 program"
        ref = "Low"
    elif name == "saa-operator-verification-e03s02t14.md":
        purpose = "SAA allocator operator verification runbook"
        evidence = "FR-122; validate_allocator_health.py"
        ref = "Medium"
    elif name == "br087-framework-release-republish-checklist.md":
        purpose = "Framework release republish checklist (BR-087)"
        evidence = "BR-087 FBU"
        ref = "Low"
    elif name == "coordinate-remediation-uxr018-e05s09t12.md":
        purpose = "Coordinate remediation evidence for UXR-018/E05:S09:T12"
        evidence = "UXR-018; portal coordinate fixes"
        ref = "Low"
    elif name == "v-band-verification-scan-2026-06-05.md":
        purpose = "V-band kanban verification scan evidence"
        evidence = "ADR-018 V-band; UKW hygiene"
        ref = "Low"
    else:
        purpose = "Maintainer operational runbook or audit evidence"
        evidence = "docs/maintenance/README.md index"
        ref = ref_touch(rel)
    return pc, purpose, pv, evidence, ref, wave


def classify_ipp_icw(rel: str) -> tuple[str, str, str, str, str, str]:
    pc, pv, wave = PARENT_META["docs/implementation-cycles"]
    name = Path(rel).name
    if name == "README.md":
        return (
            pc,
            "Implementation-cycles corpus index (IPP/ICW durable artifacts policy)",
            pv,
            "specification-and-planning-artifacts-policy.md",
            "Medium",
            wave,
        )
    if "/archive/" in rel:
        return (
            "Legacy/transitional",
            "Archived ICW/PM planning artifact superseded by IPP consolidation",
            "Acceptable",
            "archive/ subfolder; FR-042 consolidated IPP pattern",
            "Low",
            "archive",
        )
    if name.startswith("IPP-"):
        m = re.match(r"IPP-E(\d+)S(\d+)T(\d+)", name)
        task = f"E{m.group(1)}:S{m.group(2)}:T{m.group(3)}" if m else "linked task"
        purpose = f"Consolidated IPW implementation plan package for {task}"
        evidence = "FR-042 IPP; specification-and-planning-artifacts-policy.md"
        ref = "Medium" if m else "Low"
        return pc, purpose, pv, evidence, ref, wave
    if name.startswith("ICW-"):
        if name.endswith("-specification.md"):
            kind = "specification"
        elif name.endswith("-test-design.md"):
            kind = "test design"
        elif name.endswith("-implementation-plan.md"):
            kind = "implementation plan"
        elif name.endswith(".json"):
            kind = "ICW session state snapshot"
            pc = "Operational"
        else:
            kind = "ICW planning artifact"
        purpose = f"ICW trio {kind} (legacy or parallel to IPP where not consolidated)"
        evidence = "dev-kit-ipw-ipp-vs-icw-artifacts.md matrix"
        ref = "Low"
        return pc, purpose, pv, evidence, ref, wave
    if "COULD-HAVE-SETUP" in name or "PM-AGENT" in name or "DOC-AGENT" in name:
        return (
            pc,
            "Agent coordination setup doc for ICW/PM workflows",
            pv,
            "ICW agent bootstrap notes",
            "Low",
            wave,
        )
    return (
        pc,
        "Implementation-cycle planning artifact (IPP/ICW durable output)",
        pv,
        "specification-and-planning-artifacts-policy.md",
        ref_touch(rel),
        wave,
    )


def classify_governance(rel: str) -> tuple[str, str, str, str, str, str]:
    pc, pv, wave = PARENT_META["docs/governance"]
    name = Path(rel).name
    if name == "README.md" and rel == "docs/governance/README.md":
        return pc, "Governance corpus index (FR-101 promoted policies)", pv, "FR-101; GOVERNANCE-REHOUSING-INVENTORY", "High", wave
    if name == "GOVERNANCE-REHOUSING-INVENTORY.md":
        return pc, "Policy relocation inventory from FR-101 governance promotion", pv, "FR-101; E07:S01:T11", "High", wave
    if name == "KANBAN-REHOUSING-INVENTORY.md":
        return pc, "Kanban path promotion inventory (FR-118)", pv, "FR-118; KANBAN-REHOUSING", "High", wave
    if "/standards/" in rel:
        stem = name.replace(".md", "").replace(".yaml", "")
        if "versioning" in name:
            purpose = "Canonical dev-kit versioning policy (SemVer + internal schema)"
            ref = "High"
        elif "documentation-governance" in name:
            purpose = "Documentation governance strategy (lifecycle, surfaces)"
            ref = "High"
        elif "specification-and-planning" in name:
            purpose = "IPP/ICW durable artifact housing policy"
            ref = "High"
        elif "adopter-public" in name:
            purpose = "Adopter-public authoring rules (portal/Docusaurus)"
            ref = "High"
        elif name.startswith("locale-"):
            purpose = f"Locale/i18n governance standard ({stem})"
            ref = "Medium"
        elif name.endswith(".yaml"):
            purpose = "Translatable content registry (machine-readable governance)"
            ref = "Medium"
            pc = "Operational"
        else:
            purpose = f"Governance standard: {stem.replace('-', ' ')}"
            ref = "Medium"
        return pc, purpose, pv, "docs/governance/README.md; FR-101", ref, wave
    if "/principles/" in rel:
        return pc, "Governance principle document", pv, "governance principles corpus", "Low", wave
    if "/kanban/" in rel:
        if name == "README.md":
            return (
                pc,
                "Kanban governance sub-index under docs/governance/kanban",
                pv,
                "FR-101 rehousing; packages/frameworks/kanban policy SoT tension",
                "Medium",
                wave,
            )
        return (
            pc,
            "Kanban governance policy housed under docs/governance (FR-101)",
            "Acceptable",
            "Duplicate policy locus vs packages/frameworks/kanban/policies — document SoT",
            "Medium",
            "keep",
        )
    return pc, "Governance policy or inventory document", pv, "FR-101", ref_touch(rel), wave


def classify_kanban_special(rel: str) -> tuple[str, str, str, str, str, str]:
    pc, pv, wave = PARENT_META["docs/kanban"]
    name = Path(rel).name
    if name == "kboard.md":
        return pc, "Canonical active MoSCOW kanban board (FR-109 lean)", pv, "rw-config kanban_root; FR-097 stamps", "High", wave
    if name == "AGENTS.md":
        return pc, "Kanban/workflow agent role definitions for cold-start routing", pv, "docs/kanban/AGENTS.md; AGENTS.md bootstrap", "High", wave
    if name == "_index.md":
        return pc, "Kanban board index / navigation hub", pv, "kanban _index pattern", "Medium", wave
    if name.startswith("UXR-033"):
        return pc, "UXR-033 directory structure audit requirements", pv, "E07:S01:T13; REPOSITORY-DIRECTORY-AUDIT.md", "High", wave
    if name.startswith("UXR-034"):
        return pc, "UXR-034 file-level audit requirements", pv, "E07:S01:T14; REPOSITORY-FILE-AUDIT.md", "High", wave
    if name.startswith("FR-140"):
        return pc, "FR-140 repository IA steady-state governance program", pv, "E07:S01:T15; T14 cartography leg", "High", wave
    return pc, "Kanban surface file", pv, "kanban_root", ref_touch(rel), wave


def docs_child_summary(child: str, count: int) -> tuple[str, ...]:
    rel = f"docs/{child}"
    if child.endswith(".md") or child.endswith(".json"):
        # root-level file
        parent = "docs"
        if child == "project-agent-index.md":
            return (
                rel,
                parent,
                "Dev-kit specialisation",
                "Agent bootstrap index (validate/sync commands; not cold-start SoT)",
                "Optimal",
                "ADR-012; project-agent-manifest.json companion",
                "High",
                "Consistent",
                "keep",
            )
        if child == "project-agent-manifest.json":
            return (
                rel,
                parent,
                "Operational",
                "Machine-readable agent routing manifest (tooling sync)",
                "Optimal",
                "ADR-012; AGENTS.md human SoT",
                "High",
                "Consistent",
                "keep",
            )
        if child == "project-agent-manifest.schema.json":
            return (
                rel,
                parent,
                "Operational",
                "JSON schema for project-agent-manifest.json",
                "Optimal",
                "manifest validator tooling",
                "Medium",
                "Consistent",
                "keep",
            )
    key = rel if not child.endswith((".md", ".json")) else rel
    dir_key = key.rstrip("/")
    pc, pv, wave = PARENT_META.get(dir_key, ("Dev-kit specialisation", "Optimal", "keep"))
    align = "Tension" if dir_key == "docs/project-management" else "Consistent"
    ref = "Low"
    if dir_key == "docs/release-notes":
        align = "Tension"
        pv = "Acceptable"
        purpose = f"Class summary: {count} files — release-notes adjunct; overlap with changelog-and-release-notes (T13 consolidate)"
        evidence = "T13 Suboptimal/consolidate; rw-config changelog_dir"
        wave = "consolidate"
        ref = "Low"
    elif dir_key == "docs/project-management":
        purpose = f"Class summary: {count} files — vestigial FR-118 shell (T13 remove candidate)"
        evidence = "FR-118; KANBAN-REHOUSING-INVENTORY.md"
        wave = "remove"
        ref = "High"
    elif dir_key == "docs/changelog-and-release-notes":
        purpose = f"Class summary: {count} files — changelog archive + release notes hub"
        evidence = "rw-config changelog_dir"
        ref = "Medium"
    elif dir_key == "docs/kanban":
        purpose = f"Class summary: {count} files — kanban board, epics, FBU intake (FR-118)"
        evidence = "rw-config kanban_root; High ripple"
        ref = "High"
    else:
        purpose = f"Class summary: {count} files under {dir_key}/ per T13 directory verdict"
        evidence = f"REPOSITORY-DIRECTORY-AUDIT.md §2 row for {dir_key}"
        ref = "Medium" if dir_key in ("docs/guides", "docs/documentation", "docs/governance") else "Low"
    return (f"{dir_key}/**", dir_key, pc, purpose, pv, evidence, ref, align, wave)


def class_summary(
    pattern: str,
    parent: str,
    purpose_class: str,
    purpose: str,
    verdict: str,
    evidence: str,
    ref: str,
    align: str,
    wave: str,
) -> str:
    return row(pattern, parent, purpose_class, purpose, verdict, evidence, ref, align, wave)


def main() -> None:
    rows: list[str] = []

    # --- Full per-file: maintenance ---
    maint_files = sorted(p.relative_to(REPO).as_posix() for p in REPO.glob("docs/maintenance/**/*") if p.is_file())
    maint_files = [f for f in maint_files if ".t14-capture" not in f]
    for rel in maint_files:
        pc, purpose, verdict, evidence, ref, wave = classify_maintenance(rel)
        rows.append(row(rel, parent_of(rel), pc, purpose, verdict, evidence, ref, "Consistent", wave))

    # --- Full per-file: implementation-cycles ---
    ic_files = sorted(
        p.relative_to(REPO).as_posix() for p in REPO.glob("docs/implementation-cycles/**/*") if p.is_file()
    )
    for rel in ic_files:
        pc, purpose, verdict, evidence, ref, wave = classify_ipp_icw(rel)
        rows.append(row(rel, parent_of(rel), pc, purpose, verdict, evidence, ref, "Consistent", wave))

    # --- Full per-file: governance ---
    gov_files = sorted(p.relative_to(REPO).as_posix() for p in REPO.glob("docs/governance/**/*") if p.is_file())
    for rel in gov_files:
        pc, purpose, verdict, evidence, ref, wave = classify_governance(rel)
        align = "Consistent"
        if "/kanban/" in rel:
            align = "Tension"
        rows.append(row(rel, parent_of(rel), pc, purpose, verdict, evidence, ref, align, wave))

    # --- Full per-file: kanban specials ---
    kanban_specials = [
        "docs/kanban/kboard.md",
        "docs/kanban/AGENTS.md",
        "docs/kanban/_index.md",
    ]
    for rel in kanban_specials:
        if (REPO / rel).exists():
            pc, purpose, verdict, evidence, ref, wave = classify_kanban_special(rel)
            rows.append(row(rel, parent_of(rel), pc, purpose, verdict, evidence, ref, "Consistent", wave))
    for p in sorted(REPO.glob("docs/kanban/fbu/UXR-033*")):
        rel = p.relative_to(REPO).as_posix()
        pc, purpose, verdict, evidence, ref, wave = classify_kanban_special(rel)
        rows.append(row(rel, parent_of(rel), pc, purpose, verdict, evidence, ref, "Consistent", wave))
    for p in sorted(REPO.glob("docs/kanban/fbu/UXR-034*")):
        rel = p.relative_to(REPO).as_posix()
        pc, purpose, verdict, evidence, ref, wave = classify_kanban_special(rel)
        rows.append(row(rel, parent_of(rel), pc, purpose, verdict, evidence, ref, "Consistent", wave))
    for p in sorted(REPO.glob("docs/kanban/fbu/FR-140*")):
        rel = p.relative_to(REPO).as_posix()
        pc, purpose, verdict, evidence, ref, wave = classify_kanban_special(rel)
        rows.append(row(rel, parent_of(rel), pc, purpose, verdict, evidence, ref, "Consistent", wave))

    # --- Class summaries (RNF6) ---
    ch_count = len([p for p in (REPO / "docs/changelog-and-release-notes/changelog-archive").rglob("*") if p.is_file()])
    rows.append(
        class_summary(
            "docs/changelog-and-release-notes/changelog-archive/**",
            "docs/changelog-and-release-notes",
            "Generated/vendor",
            f"Homogeneous RW detailed changelog archive ({ch_count} immutable release snapshots)",
            "Optimal",
            "rw-config changelog_dir; BR-097 immutability",
            "Medium",
            "Consistent",
            "keep",
        )
    )
    j_count = len([p for p in (REPO / "docs/journals").rglob("*") if p.is_file()])
    rows.append(
        class_summary(
            "docs/journals/**",
            "docs/journals",
            "Operational",
            f"Workflow forensic journals ({j_count} files; ADR-008 TTL housekeeping)",
            "Optimal",
            "rw-config journal_dir",
            "Low",
            "Consistent",
            "keep",
        )
    )
    bp_count = len([p for p in (REPO / "docs/book-project").rglob("*") if p.is_file()])
    rows.append(
        class_summary(
            "docs/book-project/**",
            "docs/book-project",
            "Dev-kit specialisation",
            f"Book manuscript/project metadata ({bp_count} files)",
            "Optimal",
            "FR-099 book-repo scope",
            "Low",
            "Consistent",
            "keep",
        )
    )
    af_count = len([p for p in (REPO / "docs/adk-feedback").rglob("*") if p.is_file()])
    rows.append(
        class_summary(
            "docs/adk-feedback/**",
            "docs/adk-feedback",
            "Dev-kit specialisation",
            f"Adopter install feedback attempts ({af_count} files; portal-linked)",
            "Optimal",
            "UXR-025; BR-068 portal links",
            "Medium",
            "Consistent",
            "keep",
        )
    )
    pm_count = len([p for p in (REPO / "docs/project-management").rglob("*") if p.is_file()])
    rows.append(
        class_summary(
            "docs/project-management/**",
            "docs/project-management",
            "Legacy/transitional",
            f"Vestigial project-management shell ({pm_count} files) post FR-118 kanban promotion",
            "Suboptimal",
            "FR-118; T13 remove wave; KANBAN-REHOUSING-INVENTORY",
            "High",
            "Tension",
            "remove",
        )
    )
    ep_count = len([p for p in (REPO / "docs/kanban/epics").rglob("*") if p.is_file()])
    rows.append(
        class_summary(
            "docs/kanban/epics/**",
            "docs/kanban",
            "Dev-kit specialisation",
            f"Epic/story/task kanban docs ({ep_count} files; discrete task doc pattern)",
            "Optimal",
            "FR-118; kanban governance; rw Step 7 surfaces",
            "High",
            "Consistent",
            "keep",
        )
    )
    # fbu except named
    fbu_named = {"UXR-033-comprehensive-repository-directory-structure-audit.md",
                 "UXR-034-comprehensive-repository-file-level-audit-within-audited-directories.md",
                 "FR-140-repository-information-architecture-steady-state-governance.md"}
    fbu_files = [p for p in (REPO / "docs/kanban/fbu").glob("*") if p.is_file() and p.name not in fbu_named]
    fbu_count = len(fbu_files)
    rows.append(
        class_summary(
            "docs/kanban/fbu/**",
            "docs/kanban",
            "Dev-kit specialisation",
            f"FR/BR/UXR intake corpus ({fbu_count} files; class summary excludes UXR-033/034 + FR-140 rowed separately)",
            "Optimal",
            "FR_BR_INTAKE_GUIDE; fbuboard hygiene",
            "High",
            "Consistent",
            "keep",
        )
    )
    for sub, note in [
        ("architecture", "ADRs and architecture standards (non-governance subset post FR-101)"),
        ("analysis", "Maintainer analysis reports (ADR-026 git KB)"),
        ("knowledge", "Maintainer knowledge base articles"),
        ("guides", "Adopter/maintainer guides (portal-published subset)"),
        ("documentation", "Adopter-public documentation source (FR-114)"),
    ]:
        cnt = len([p for p in (REPO / "docs" / sub).rglob("*") if p.is_file()])
        pc, pv, wave = PARENT_META[f"docs/{sub}"]
        rows.append(
            class_summary(
                f"docs/{sub}/**",
                f"docs/{sub}",
                pc,
                f"{note} ({cnt} files)",
                pv,
                f"REPOSITORY-DIRECTORY-AUDIT.md §2 docs/{sub}",
                "High" if sub in ("guides", "documentation") else "Medium",
                "Consistent",
                wave,
            )
        )

    # --- One summary row per immediate child of docs/ ---
    docs_root = REPO / "docs"
    children = sorted(docs_root.iterdir(), key=lambda p: p.name)
    for child in children:
        if child.is_dir():
            cnt = len([p for p in child.rglob("*") if p.is_file()])
            t = docs_child_summary(child.name + "/", cnt)
        else:
            t = docs_child_summary(child.name, 1)
        rows.append(row(*t))

    OUT.write_text("\n".join(rows) + "\n", encoding="utf-8")
    print(f"Wrote {len(rows)} rows to {OUT}")


if __name__ == "__main__":
    main()
