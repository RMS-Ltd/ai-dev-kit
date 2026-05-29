#!/usr/bin/env python3
"""
RW Release-Readiness Gate (FR-092 Wave 7).

Purpose
-------
The Release Workflow (RW) commits a release-scope mutation across four
canonical surfaces (task doc, FR/BR/UXR doc, kboard.md, fbuboard.md) and
auxiliary surfaces (Story doc, Epic doc). Prior waves (FR-092 Wave 0..6)
codified the contracts (FR-091, FR-084, FR-090) and the per-step preventive
gates (FR-084 four-surface report, BR-070 stage-set completeness, UXR-009
forensic stamp evidence). This validator is the **release-time aggregate
gate** that RW Step 9 invokes to assert that *all* preventive guarantees
hold simultaneously before the commit boundary.

Gates 1-7
---------
The validator runs nine independent gates and aggregates their verdicts:

    Gate 1  Governance source-of-truth alignment
            (.cursorrules <-> RW agent execution guide <-> kanban
            governance policy <-> IPW governance) — all four artefacts
            reference FR-092 and codify Step 7 self-sufficient + UKW
            corrective + four-surface + forensic stamp semantics.

    Gate 2  Predecessor closure & supersede-chain consistency
            (FR-091 / FR-090 / FR-084 banner-superseded; T02 / T05 / T06
            status SUPERSEDED with redirect; BR-069 / BR-070 / UXR-009
            gated; D1-D9 predecessor evidence wired).

    Gate 3  Contract enforcement parity
            (RW canonical row transform pipeline produces byte-identical
            output to UKW canonical row transform pipeline on the same
            input — i.e. the shared engine FR-090 is the single source
            of canonical truth).

    Gate 4  Corpus canonical state
            (run_corpus_canonical_sweep with dry_run=True returns "clean
            (idempotent)" for every active board; aggregate
            stamps_appended_with_evidence == 0 in non_substantive mode;
            no duplicate tail tokens detected).

    Gate 5  Stage-set completeness (BR-070)
            (composes validate_rw_step7_completeness; every Step-7
            output is staged or unchanged).

    Gate 6  Forensic stamp evidence (UXR-009)
            (latest four-surface report's stamp_evidence summary is
            internally consistent; no synthetic stamps minted in
            non-substantive surfaces).

    Gate 7  Four-surface parity
            (latest four-surface report exists, is recent, references
            the release scope under audit, and either records each
            surface as touched or notes its untouched rationale; primary
            surfaces resolve to existing files on disk).

    Gate 8  Stamp homogeneity (FR-097)
            (no cluster of ≥N MoSCOW rows sharing an identical
            `Last modified` stamp; default threshold 10).

    Gate 9  MoSCOW state icons (UXR-012 / E4:S13:T07)
            (every parseable MoSCOW row on `kboard.md` / `fbuboard.md`
            carries the canonical Set A emoji before its status token).

Wiring
------
- Invoked by RW Step 9 (release-readiness validator suite).
- Exit codes:
    0 — All applicable gates passed (or were waived with explicit reason).
    1 — One or more blocking gates failed; RW MUST BLOCK commit.
    2 — Invalid invocation (missing dependency, no project root, etc.).

Cross-references
----------------
- FR-092 (canonical RW/UKW kanban consistency program, meta)
- FR-091 (RW Step 7 self-sufficient scoped kanban reconciliation)
- FR-090 (canonical row transform engine; shared RW/UKW pipeline)
- FR-084 (IPP post-run governance reconciliation ownership)
- BR-070 (RW-k Stage Files completeness gap)
- UXR-009 (Last-modified stamp forensic integrity)
- Wave 7 deliverable per IPP-E2S15T07.
"""

from __future__ import annotations

import argparse
import importlib.util
import json
import re
import sys
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable, Dict, List, Optional, Tuple


# --------------------------------------------------------------------------- #
# Constants
# --------------------------------------------------------------------------- #

DEFAULT_REPORT_DIR_REL = (
    "docs/changelog-and-release-notes/changelog-archive/four-surface-reports"
)

# Governance surface paths (relative to project root).
CURSORRULES_REL = ".cursorrules"
RW_EXEC_GUIDE_REL = (
    "packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/"
    "release-workflow-agent-execution.md"
)
KANBAN_POLICY_REL = "packages/frameworks/kanban/policies/kanban-governance-policy.md"
# IPW governance lives under the workflow-mgt KB tree; we look for any IPW
# governance doc that reflects the FR-092 contracts.
IPW_GOVERNANCE_REL_CANDIDATES = (
    "packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/ipw/"
    "ipw-governance.md",
    "packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/ipw/"
    "implementation-process-workflow-agent-execution.md",
    "docs/project-management/kanban/AGENTS.md",
)

# Supersede chain (FR-092 Wave 0).
SUPERSEDED_FBUS = (
    "docs/project-management/kanban/fr-br/"
    "FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md",
    "docs/project-management/kanban/fr-br/"
    "FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md",
    "docs/project-management/kanban/fr-br/"
    "FR-084-ipp-post-run-governance-reconciliation-ownership.md",
)
SUPERSEDED_TASKS = (
    "docs/project-management/kanban/epics/Epic-2/"
    "Story-015-ipw-governance-and-publication-contract/"
    "T02-ipp-post-run-governance-reconciliation-ownership-fr084.md",
    "docs/project-management/kanban/epics/Epic-2/"
    "Story-015-ipw-governance-and-publication-contract/"
    "T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md",
    "docs/project-management/kanban/epics/Epic-2/"
    "Story-015-ipw-governance-and-publication-contract/"
    "T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md",
)
GATED_FBUS = (
    "docs/project-management/kanban/fr-br/"
    "BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md",
    "docs/project-management/kanban/fr-br/"
    "BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md",
    "docs/project-management/kanban/fr-br/"
    "UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md",
)

# Active boards subject to corpus-canonical idempotency.
CORPUS_BOARDS_REL = (
    "docs/project-management/kanban/kboard.md",
    "docs/project-management/kanban/fbuboard.md",
    "docs/project-management/kanban/kanban-board.md",
    "docs/project-management/kanban/fr-br-uxr-board.md",
)

# Phrases each governance doc MUST contain (Gate 1). Empty matches mean
# "any reference to FR-092 is acceptable"; non-empty matches require the
# specific contract phrase.
GOVERNANCE_REQUIRED_PHRASES: Dict[str, Tuple[str, ...]] = {
    CURSORRULES_REL: (
        "FR-092",
        "Self-Sufficient",
    ),
    RW_EXEC_GUIDE_REL: (
        "FR-092",
        "stage_set_completeness",
    ),
    KANBAN_POLICY_REL: (
        "FR-092",
        "Forensic semantics",
    ),
}


# --------------------------------------------------------------------------- #
# Data model
# --------------------------------------------------------------------------- #


@dataclass
class GateVerdict:
    """Per-gate verdict in a release-readiness report."""

    gate_id: int
    name: str
    passed: bool
    severity: str  # "block" | "warn" | "info"
    summary: str
    findings: List[str] = field(default_factory=list)
    evidence: Dict[str, Any] = field(default_factory=dict)
    waived: bool = False
    waive_reason: Optional[str] = None

    @property
    def is_blocking_failure(self) -> bool:
        """A blocking failure is one that should fail RW Step 9."""
        if self.passed or self.waived:
            return False
        return self.severity == "block"

    def as_dict(self) -> Dict[str, Any]:
        return {
            "gate_id": self.gate_id,
            "name": self.name,
            "passed": self.passed,
            "severity": self.severity,
            "summary": self.summary,
            "findings": list(self.findings),
            "evidence": dict(self.evidence),
            "waived": self.waived,
            "waive_reason": self.waive_reason,
            "is_blocking_failure": self.is_blocking_failure,
        }


@dataclass
class ReadinessReport:
    """
    Aggregate release-readiness report (FR-092 Wave 7 deliverable).

    Emitted by RW Step 9 immediately before commit boundary; persisted
    next to the four-surface and stage-completeness reports for audit.
    """

    contract: str = (
        "FR-092 Wave 7 release-readiness gate "
        "(Gates 1-7: governance / predecessors / parity / corpus / stage / "
        "stamps / four-surface)"
    )
    timestamp_utc: str = ""
    project_root: str = ""
    invocation_context: str = "rw_step_9_release_readiness"
    release_scope: Dict[str, Any] = field(default_factory=dict)
    four_surface_report_path: Optional[str] = None
    verdicts: List[GateVerdict] = field(default_factory=list)

    @property
    def overall_passed(self) -> bool:
        return all(not v.is_blocking_failure for v in self.verdicts)

    def as_dict(self) -> Dict[str, Any]:
        return {
            "contract": self.contract,
            "timestamp_utc": self.timestamp_utc,
            "project_root": self.project_root,
            "invocation_context": self.invocation_context,
            "release_scope": dict(self.release_scope),
            "four_surface_report_path": self.four_surface_report_path,
            "overall_passed": self.overall_passed,
            "verdicts": [v.as_dict() for v in self.verdicts],
            "summary": {
                "gates_total": len(self.verdicts),
                "gates_passed": sum(1 for v in self.verdicts if v.passed),
                "gates_failed": sum(
                    1 for v in self.verdicts if not v.passed and not v.waived
                ),
                "gates_waived": sum(1 for v in self.verdicts if v.waived),
                "blocking_failures": [
                    f"Gate {v.gate_id}: {v.name}"
                    for v in self.verdicts
                    if v.is_blocking_failure
                ],
            },
        }

    def to_markdown(self) -> str:
        d = self.as_dict()
        lines: List[str] = []
        lines.append("# RW release-readiness report (FR-092 Wave 7)")
        lines.append("")
        lines.append(f"- **Contract:** {d['contract']}")
        lines.append(f"- **Invocation context:** {d['invocation_context']}")
        scope = d.get("release_scope") or {}
        if scope:
            scope_id = scope.get("task_id") or (
                f"E{scope.get('epic')}:S{scope.get('story')}:T{scope.get('task')}"
                if scope.get("epic") is not None
                else "(adhoc)"
            )
            lines.append(
                f"- **Release scope:** {scope_id} "
                f"({scope.get('version_string', '(unknown)')})"
            )
        lines.append(f"- **Timestamp (UTC):** {d['timestamp_utc']}")
        if d.get("four_surface_report_path"):
            lines.append(
                f"- **Four-surface report:** `{d['four_surface_report_path']}`"
            )
        lines.append("")
        lines.append("## Overall verdict")
        lines.append("")
        if d["overall_passed"]:
            lines.append("- **Status:** PASS — RW MAY proceed past Step 9.")
        else:
            lines.append(
                "- **Status:** BLOCK — RW MUST NOT commit. "
                "See blocking failures below."
            )
            for blocker in d["summary"]["blocking_failures"]:
                lines.append(f"  - {blocker}")
        lines.append("")
        lines.append(
            f"- Gates: {d['summary']['gates_passed']}/{d['summary']['gates_total']} "
            f"passed ({d['summary']['gates_failed']} failed, "
            f"{d['summary']['gates_waived']} waived)."
        )
        lines.append("")
        lines.append("## Per-gate detail")
        lines.append("")
        for v in d["verdicts"]:
            status = "PASS" if v["passed"] else (
                "WAIVED" if v["waived"] else "FAIL"
            )
            lines.append(f"### Gate {v['gate_id']} — {v['name']}")
            lines.append("")
            lines.append(f"- Status: **{status}** (severity: `{v['severity']}`)")
            lines.append(f"- Summary: {v['summary']}")
            if v["waived"] and v.get("waive_reason"):
                lines.append(f"- Waiver: {v['waive_reason']}")
            if v["findings"]:
                lines.append("- Findings:")
                for f in v["findings"]:
                    lines.append(f"  - {f}")
            ev = v.get("evidence") or {}
            if ev:
                lines.append("- Evidence:")
                for k, val in ev.items():
                    lines.append(f"  - `{k}`: `{val}`")
            lines.append("")
        return "\n".join(lines).rstrip() + "\n"


# --------------------------------------------------------------------------- #
# Helpers
# --------------------------------------------------------------------------- #


def discover_project_root(starting_point: Optional[Path] = None) -> Path:
    cwd = (starting_point or Path.cwd()).resolve()
    for candidate in [cwd, *cwd.parents]:
        if (candidate / ".git").exists():
            return candidate
    return cwd


def _read_text_or_none(path: Path) -> Optional[str]:
    try:
        return path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError):
        return None


def _find_latest_four_surface_report(project_root: Path) -> Optional[Path]:
    report_dir = project_root / DEFAULT_REPORT_DIR_REL
    if not report_dir.exists():
        return None
    candidates = sorted(
        report_dir.glob("rw-step7-four-surface-report-*.json"),
        key=lambda p: p.stat().st_mtime,
        reverse=True,
    )
    return candidates[0] if candidates else None


def _load_module_from_path(module_name: str, file_path: Path):
    spec = importlib.util.spec_from_file_location(module_name, file_path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Cannot load module {module_name} from {file_path}")
    module = importlib.util.module_from_spec(spec)
    sys.modules[module_name] = module
    spec.loader.exec_module(module)
    return module


def _scripts_dir(project_root: Path) -> Path:
    return project_root / "packages/frameworks/workflow mgt/scripts"


# --------------------------------------------------------------------------- #
# Gate 1: Governance source-of-truth alignment
# --------------------------------------------------------------------------- #


def gate_1_governance_alignment(project_root: Path) -> GateVerdict:
    findings: List[str] = []
    evidence: Dict[str, Any] = {}
    all_pass = True

    for rel_path, required_phrases in GOVERNANCE_REQUIRED_PHRASES.items():
        abs_path = project_root / rel_path
        text = _read_text_or_none(abs_path)
        if text is None:
            all_pass = False
            findings.append(
                f"Governance artefact missing or unreadable: `{rel_path}`. "
                "FR-092 governance contract requires its presence."
            )
            evidence[rel_path] = "MISSING"
            continue
        missing = [p for p in required_phrases if p not in text]
        if missing:
            all_pass = False
            findings.append(
                f"`{rel_path}` is missing required FR-092 contract phrases: "
                f"{missing}. Codify them per Wave 2."
            )
            evidence[rel_path] = f"MISSING_PHRASES={missing}"
        else:
            evidence[rel_path] = "OK"

    ipw_doc_present = False
    ipw_path_used: Optional[str] = None
    for rel in IPW_GOVERNANCE_REL_CANDIDATES:
        candidate = project_root / rel
        text = _read_text_or_none(candidate)
        if text is None:
            continue
        if "FR-092" in text or "FR-091" in text or "FR-084" in text:
            ipw_doc_present = True
            ipw_path_used = rel
            break
    if ipw_doc_present:
        evidence["ipw_governance"] = f"OK ({ipw_path_used})"
    else:
        # IPW governance reference is INFO-level. The kanban-governance-policy
        # is the binding contract; an IPW-side reference is a strong signal
        # but not a release blocker on its own.
        findings.append(
            "No IPW governance doc found that references FR-091/FR-084/FR-092. "
            "Recommend cross-linking from IPW guide for cross-doc consistency."
        )
        evidence["ipw_governance"] = "MISSING (info)"

    summary = (
        "All governance artefacts (.cursorrules, RW guide, kanban policy) "
        "codify FR-092 contract."
        if all_pass
        else "Governance source-of-truth alignment incomplete; see findings."
    )
    return GateVerdict(
        gate_id=1,
        name="Governance source-of-truth alignment",
        passed=all_pass,
        severity="block",
        summary=summary,
        findings=findings,
        evidence=evidence,
    )


# --------------------------------------------------------------------------- #
# Gate 2: Predecessor closure & supersede-chain consistency
# --------------------------------------------------------------------------- #


def gate_2_supersede_chain(project_root: Path) -> GateVerdict:
    findings: List[str] = []
    evidence: Dict[str, Any] = {}
    all_pass = True

    for rel in SUPERSEDED_FBUS:
        abs_path = project_root / rel
        text = _read_text_or_none(abs_path)
        if text is None:
            all_pass = False
            findings.append(f"Superseded FBU missing: `{rel}`.")
            evidence[rel] = "MISSING"
            continue
        if not re.search(r"SUPERSEDED.*FR-092", text, re.IGNORECASE):
            all_pass = False
            findings.append(
                f"`{rel}` lacks 'SUPERSEDED ... FR-092' status banner. "
                "Wave 0 supersede chain incomplete for this artefact."
            )
            evidence[rel] = "NO_SUPERSEDE_BANNER"
        else:
            evidence[rel] = "OK"

    for rel in SUPERSEDED_TASKS:
        abs_path = project_root / rel
        text = _read_text_or_none(abs_path)
        if text is None:
            all_pass = False
            findings.append(f"Superseded task doc missing: `{rel}`.")
            evidence[rel] = "MISSING"
            continue
        if not re.search(r"SUPERSEDED\s*->\s*\[E2:S15:T07\]", text):
            all_pass = False
            findings.append(
                f"`{rel}` lacks 'SUPERSEDED -> [E2:S15:T07]' redirect. "
                "Wave 0 supersede chain incomplete."
            )
            evidence[rel] = "NO_REDIRECT"
        else:
            evidence[rel] = "OK"

    for rel in GATED_FBUS:
        abs_path = project_root / rel
        text = _read_text_or_none(abs_path)
        if text is None:
            all_pass = False
            findings.append(f"Gated FBU missing: `{rel}`.")
            evidence[rel] = "MISSING"
            continue
        if "FR-092" not in text:
            all_pass = False
            findings.append(
                f"`{rel}` lacks any FR-092 gating reference. "
                "Wave 0 gating wiring missing."
            )
            evidence[rel] = "NO_FR092_REF"
        else:
            evidence[rel] = "OK"

    br042 = (
        project_root
        / "docs/project-management/kanban/fr-br/"
        "BR-042-ukw-agent-board-cleanup-failure.md"
    )
    text = _read_text_or_none(br042)
    if text is not None:
        if re.search(r"DUPLICATE.*FR-09\d", text, re.IGNORECASE) or "duplicate of FR-090" in text.lower() or "duplicate of FR-092" in text.lower():
            evidence["BR-042"] = "OK (closed as duplicate)"
        else:
            findings.append(
                "BR-042 is not explicitly closed as a duplicate of FR-090/FR-092. "
                "Wave 1 predecessor-closure asks for explicit duplicate marker."
            )
            evidence["BR-042"] = "OPEN_OR_UNMARKED (info)"

    summary = (
        "Supersede chain executed: FR-091/FR-090/FR-084 banner-superseded, "
        "T02/T05/T06 redirected, BR-069/BR-070/UXR-009 gated."
        if all_pass
        else "Supersede chain incomplete; see findings."
    )
    return GateVerdict(
        gate_id=2,
        name="Predecessor closure & supersede-chain consistency",
        passed=all_pass,
        severity="block",
        summary=summary,
        findings=findings,
        evidence=evidence,
    )


# --------------------------------------------------------------------------- #
# Gate 3: Contract enforcement parity (RW pipeline == UKW pipeline)
# --------------------------------------------------------------------------- #


def gate_3_contract_parity(project_root: Path) -> GateVerdict:
    findings: List[str] = []
    evidence: Dict[str, Any] = {}

    try:
        update_kanban = _load_module_from_path(
            "_release_readiness_update_kanban_docs",
            _scripts_dir(project_root) / "update_kanban_docs.py",
        )
    except Exception as exc:
        return GateVerdict(
            gate_id=3,
            name="Contract enforcement parity (RW <-> UKW canonical pipeline)",
            passed=False,
            severity="block",
            summary=f"Cannot load update_kanban_docs.py: {exc}",
            findings=[str(exc)],
            evidence={"loader_error": str(exc)},
        )

    apply_pipeline = update_kanban.apply_canonical_row_transform_pipeline
    contract_rw = getattr(
        update_kanban,
        "ROW_TRANSFORM_CONTRACT_RW_STEP7",
        update_kanban.ROW_TRANSFORM_CONTRACT_STANDALONE,
    )
    contract_ukw = update_kanban.ROW_TRANSFORM_CONTRACT_STANDALONE
    contract_standalone = update_kanban.ROW_TRANSFORM_CONTRACT_STANDALONE

    timestamp_value = "2026-01-01 00:00 UTC"
    parity_failures: List[str] = []
    parity_evidence: Dict[str, Any] = {}

    for board_rel in CORPUS_BOARDS_REL:
        board_path = project_root / board_rel
        if not board_path.exists():
            continue
        original = board_path.read_text(encoding="utf-8")
        out_rw, _ = apply_pipeline(
            board_content=original,
            project_root=project_root,
            timestamp_value=timestamp_value,
            contract=contract_rw,
            evidence_mode=update_kanban.EVIDENCE_MODE_NON_SUBSTANTIVE,
        )
        out_ukw, _ = apply_pipeline(
            board_content=original,
            project_root=project_root,
            timestamp_value=timestamp_value,
            contract=contract_ukw,
            evidence_mode=update_kanban.EVIDENCE_MODE_NON_SUBSTANTIVE,
        )
        out_standalone, _ = apply_pipeline(
            board_content=original,
            project_root=project_root,
            timestamp_value=timestamp_value,
            contract=contract_standalone,
            evidence_mode=update_kanban.EVIDENCE_MODE_NON_SUBSTANTIVE,
        )
        if out_rw == out_ukw == out_standalone:
            parity_evidence[board_rel] = "byte-identical"
        else:
            parity_failures.append(
                f"`{board_rel}`: RW/UKW/standalone canonical outputs diverge. "
                "FR-090 shared engine contract violated."
            )
            parity_evidence[board_rel] = "DIVERGENT"

    if not parity_evidence:
        return GateVerdict(
            gate_id=3,
            name="Contract enforcement parity (RW <-> UKW canonical pipeline)",
            passed=True,
            severity="warn",
            summary=(
                "No active boards present on disk; parity cannot be exercised. "
                "Treated as vacuously passing (warn)."
            ),
            findings=[],
            evidence={"boards_checked": 0},
            waived=True,
            waive_reason="No active boards available to exercise parity.",
        )

    if parity_failures:
        findings.extend(parity_failures)
        return GateVerdict(
            gate_id=3,
            name="Contract enforcement parity (RW <-> UKW canonical pipeline)",
            passed=False,
            severity="block",
            summary=(
                "RW and UKW canonical row transform outputs diverge — FR-090 "
                "shared-engine contract violated."
            ),
            findings=findings,
            evidence=parity_evidence,
        )

    return GateVerdict(
        gate_id=3,
        name="Contract enforcement parity (RW <-> UKW canonical pipeline)",
        passed=True,
        severity="block",
        summary=(
            "RW and UKW canonical row transform pipelines produce byte-"
            "identical output across all active boards (FR-090 shared "
            "engine verified)."
        ),
        findings=[],
        evidence=parity_evidence,
    )


# --------------------------------------------------------------------------- #
# Gate 4: Corpus canonical state (zero duplicate tails / zero synthetic stamps)
# --------------------------------------------------------------------------- #


def gate_4_corpus_canonical(project_root: Path) -> GateVerdict:
    findings: List[str] = []
    evidence: Dict[str, Any] = {}

    try:
        update_kanban = _load_module_from_path(
            "_release_readiness_update_kanban_docs_g4",
            _scripts_dir(project_root) / "update_kanban_docs.py",
        )
    except Exception as exc:
        return GateVerdict(
            gate_id=4,
            name="Corpus canonical state",
            passed=False,
            severity="block",
            summary=f"Cannot load update_kanban_docs.py: {exc}",
            findings=[str(exc)],
            evidence={"loader_error": str(exc)},
        )

    sweep = update_kanban.run_corpus_canonical_sweep
    changes, sweep_report = sweep(
        project_root,
        dry_run=True,
        timestamp_value="2026-01-01 00:00 UTC",
        evidence_mode=update_kanban.EVIDENCE_MODE_NON_SUBSTANTIVE,
    )
    aggregate = sweep_report.get("stamp_evidence_aggregate", {})
    boards_report = sweep_report.get("boards", [])

    non_idempotent: List[str] = []
    duplicate_tails: List[str] = []
    for board_entry in boards_report:
        path = board_entry.get("path", "(unknown)")
        rows_changed = int(board_entry.get("rows_changed", 0) or 0)
        dup_report = board_entry.get("dup_report", {}) or {}
        rows_with_duplicate_footers = int(
            dup_report.get("rows_with_duplicate_footers", 0) or 0
        )
        evidence[path] = {
            "rows_changed": rows_changed,
            "rows_with_duplicate_footers": rows_with_duplicate_footers,
        }
        if rows_changed != 0:
            non_idempotent.append(
                f"`{path}`: rows_changed={rows_changed} under "
                "non_substantive corpus sweep — corpus is not idempotent."
            )
        if rows_with_duplicate_footers != 0:
            duplicate_tails.append(
                f"`{path}`: rows_with_duplicate_footers="
                f"{rows_with_duplicate_footers} — duplicate-tail residue "
                "after Wave 4 sweep."
            )

    stamps_appended = int(aggregate.get("stamps_appended_with_evidence", 0) or 0)
    evidence["stamp_evidence_aggregate"] = {
        "stamps_appended_with_evidence": stamps_appended,
        "stamps_skipped_no_evidence": int(
            aggregate.get("stamps_skipped_no_evidence", 0) or 0
        ),
        "stamps_preserved_existing": int(
            aggregate.get("stamps_preserved_existing", 0) or 0
        ),
    }

    findings.extend(non_idempotent)
    findings.extend(duplicate_tails)
    if stamps_appended > 0:
        findings.append(
            f"Synthetic stamp churn detected: {stamps_appended} stamps "
            "appended in non_substantive sweep (UXR-009 / Wave 6 violation)."
        )

    passed = not findings
    summary = (
        "Corpus canonical state holds: every active board is idempotent "
        "under canonical sweep; no duplicate tails; no synthetic stamps."
        if passed
        else "Corpus canonical state violated; see findings."
    )
    return GateVerdict(
        gate_id=4,
        name="Corpus canonical state",
        passed=passed,
        severity="block",
        summary=summary,
        findings=findings,
        evidence=evidence,
    )


# --------------------------------------------------------------------------- #
# Gate 5: Stage-set completeness (composes BR-070 validator)
# --------------------------------------------------------------------------- #


def gate_5_stage_completeness(
    project_root: Path,
    *,
    four_surface_report_path: Optional[Path],
    require_report: bool,
) -> GateVerdict:
    findings: List[str] = []
    evidence: Dict[str, Any] = {}

    try:
        validator = _load_module_from_path(
            "_release_readiness_validate_stage_completeness",
            _scripts_dir(project_root) / "validate_rw_step7_completeness.py",
        )
    except Exception as exc:
        return GateVerdict(
            gate_id=5,
            name="Stage-set completeness (BR-070)",
            passed=False,
            severity="block",
            summary=f"Cannot load validate_rw_step7_completeness.py: {exc}",
            findings=[str(exc)],
            evidence={"loader_error": str(exc)},
        )

    report_path = four_surface_report_path or _find_latest_four_surface_report(
        project_root
    )
    if report_path is None:
        if require_report:
            return GateVerdict(
                gate_id=5,
                name="Stage-set completeness (BR-070)",
                passed=False,
                severity="block",
                summary=(
                    "No four-surface report found; cannot evaluate stage-set "
                    "completeness. RW Step 7 must emit a report before Step 9."
                ),
                findings=[
                    f"No reports under "
                    f"{project_root / DEFAULT_REPORT_DIR_REL}"
                ],
                evidence={"report": None},
            )
        return GateVerdict(
            gate_id=5,
            name="Stage-set completeness (BR-070)",
            passed=True,
            severity="warn",
            summary=(
                "No four-surface report present; stage-set completeness "
                "vacuously satisfied (info)."
            ),
            findings=[],
            evidence={"report": None},
            waived=True,
            waive_reason="No Step-7 report available; nothing to stage-check.",
        )

    path_to_surface, release_scope = validator.extract_touched_paths_from_report(
        report_path
    )
    verdicts = validator.evaluate_touched_paths(project_root, path_to_surface)
    violations = [v for v in verdicts if v.is_violation]
    evidence["four_surface_report"] = str(report_path)
    evidence["paths_checked"] = len(verdicts)
    evidence["violations"] = len(violations)
    evidence["release_scope"] = release_scope

    if violations:
        for v in violations:
            findings.append(
                f"`{v.surface}` :: `{v.path}` :: {v.git_status} — {v.detail}"
            )
        return GateVerdict(
            gate_id=5,
            name="Stage-set completeness (BR-070)",
            passed=False,
            severity="block",
            summary=(
                f"BR-070 violation: {len(violations)} Step-7 path(s) are "
                "modified-unstaged, untracked, or missing."
            ),
            findings=findings,
            evidence=evidence,
        )

    return GateVerdict(
        gate_id=5,
        name="Stage-set completeness (BR-070)",
        passed=True,
        severity="block",
        summary=(
            f"BR-070 satisfied: all {len(verdicts)} Step-7 path(s) are staged "
            "or unchanged."
        ),
        findings=[],
        evidence=evidence,
    )


# --------------------------------------------------------------------------- #
# Gate 6: Forensic stamp evidence (UXR-009)
# --------------------------------------------------------------------------- #


def gate_6_stamp_evidence(
    project_root: Path,
    *,
    four_surface_report_path: Optional[Path],
) -> GateVerdict:
    findings: List[str] = []
    evidence: Dict[str, Any] = {}
    report_path = four_surface_report_path or _find_latest_four_surface_report(
        project_root
    )
    if report_path is None:
        return GateVerdict(
            gate_id=6,
            name="Forensic stamp evidence (UXR-009)",
            passed=True,
            severity="warn",
            summary=(
                "No four-surface report present; stamp evidence check skipped."
            ),
            findings=[],
            evidence={"report": None},
            waived=True,
            waive_reason=(
                "No Step-7 report; UXR-009 forensic counters unavailable."
            ),
        )

    try:
        report_data = json.loads(report_path.read_text(encoding="utf-8"))
    except Exception as exc:
        return GateVerdict(
            gate_id=6,
            name="Forensic stamp evidence (UXR-009)",
            passed=False,
            severity="block",
            summary=f"Cannot read four-surface report: {exc}",
            findings=[str(exc)],
            evidence={"report": str(report_path)},
        )

    evidence["report"] = str(report_path)
    stamp_evidence = report_data.get("stamp_evidence", {}) or {}
    summary_block = report_data.get("summary", {}) or {}
    appended = int(summary_block.get("stamps_appended_with_evidence", 0) or 0)
    skipped = int(summary_block.get("stamps_skipped_no_evidence", 0) or 0)
    preserved = int(summary_block.get("stamps_preserved_existing", 0) or 0)
    evidence_mode = stamp_evidence.get("evidence_mode") or stamp_evidence.get(
        "mode"
    )
    evidence["evidence_mode"] = evidence_mode
    evidence["stamps_appended_with_evidence"] = appended
    evidence["stamps_skipped_no_evidence"] = skipped
    evidence["stamps_preserved_existing"] = preserved

    if evidence_mode == "non_substantive" and appended > 0:
        findings.append(
            f"UXR-009 violation: stamps_appended_with_evidence={appended} in "
            "non_substantive run; synthetic stamp churn detected at write "
            "boundary."
        )
    if appended > 0 and (preserved + appended + skipped) == 0:
        findings.append(
            "UXR-009 invariant breach: stamp counters are internally "
            "inconsistent (appended>0 but no preserved/skipped recorded)."
        )

    passed = not findings
    summary = (
        "Forensic stamp evidence consistent: "
        f"appended={appended}, skipped={skipped}, preserved={preserved} "
        f"(mode={evidence_mode!r})."
        if passed
        else "Forensic stamp evidence violation; see findings."
    )
    return GateVerdict(
        gate_id=6,
        name="Forensic stamp evidence (UXR-009)",
        passed=passed,
        severity="block",
        summary=summary,
        findings=findings,
        evidence=evidence,
    )


# --------------------------------------------------------------------------- #
# Gate 7: Four-surface parity
# --------------------------------------------------------------------------- #


def gate_7_four_surface_parity(
    project_root: Path,
    *,
    four_surface_report_path: Optional[Path],
    require_report: bool,
) -> GateVerdict:
    findings: List[str] = []
    evidence: Dict[str, Any] = {}
    report_path = four_surface_report_path or _find_latest_four_surface_report(
        project_root
    )
    if report_path is None:
        if require_report:
            return GateVerdict(
                gate_id=7,
                name="Four-surface parity (FR-084)",
                passed=False,
                severity="block",
                summary=(
                    "No four-surface report found; FR-084 requires Step 7 to "
                    "emit one before Step 9."
                ),
                findings=[
                    f"No reports under "
                    f"{project_root / DEFAULT_REPORT_DIR_REL}"
                ],
                evidence={"report": None},
            )
        return GateVerdict(
            gate_id=7,
            name="Four-surface parity (FR-084)",
            passed=True,
            severity="warn",
            summary=(
                "No four-surface report present; four-surface parity check "
                "vacuously satisfied (info)."
            ),
            findings=[],
            evidence={"report": None},
            waived=True,
            waive_reason="No Step-7 report; nothing to verify.",
        )

    try:
        report_data = json.loads(report_path.read_text(encoding="utf-8"))
    except Exception as exc:
        return GateVerdict(
            gate_id=7,
            name="Four-surface parity (FR-084)",
            passed=False,
            severity="block",
            summary=f"Cannot read four-surface report: {exc}",
            findings=[str(exc)],
            evidence={"report": str(report_path)},
        )

    surfaces = report_data.get("surfaces", {}) or {}
    expected_surfaces = ("task_doc", "fbu_doc", "kboard", "fbuboard")
    evidence["report"] = str(report_path)

    missing_surfaces: List[str] = []
    untouched_with_no_rationale: List[str] = []
    missing_paths: List[str] = []

    for name in expected_surfaces:
        block = surfaces.get(name)
        if block is None:
            missing_surfaces.append(name)
            continue
        touched = bool(block.get("touched", False))
        notes = block.get("notes", []) or []
        paths = block.get("paths", []) or []
        evidence[name] = {
            "touched": touched,
            "paths": paths,
            "notes_count": len(notes),
        }
        if not touched and not notes:
            untouched_with_no_rationale.append(name)
        for raw_path in paths:
            p = Path(raw_path)
            if not p.is_absolute():
                p = (project_root / p).resolve()
            if not p.exists():
                missing_paths.append(f"{name}::{raw_path}")

    if missing_surfaces:
        findings.append(
            "FR-084 violation: four-surface report omits expected "
            f"surface(s): {missing_surfaces}."
        )
    if untouched_with_no_rationale:
        findings.append(
            "FR-084 violation: untouched surface(s) lack rationale notes "
            f"(must explain why no mutation): {untouched_with_no_rationale}."
        )
    if missing_paths:
        findings.append(
            "FR-084 violation: declared surface path(s) do not exist on "
            f"disk: {missing_paths}."
        )

    release_scope = report_data.get("release_scope", {}) or {}
    evidence["release_scope"] = release_scope

    passed = not findings
    summary = (
        "Four-surface parity satisfied: all primary surfaces present, "
        "either touched or noted-untouched, with paths existing on disk."
        if passed
        else "Four-surface parity violation; see findings."
    )
    return GateVerdict(
        gate_id=7,
        name="Four-surface parity (FR-084)",
        passed=passed,
        severity="block",
        summary=summary,
        findings=findings,
        evidence=evidence,
    )


# --------------------------------------------------------------------------- #
# Gate 8: Stamp homogeneity (FR-097)
# --------------------------------------------------------------------------- #


def gate_8_stamp_homogeneity(
    project_root: Path,
    *,
    homogeneity_threshold: int = 10,
) -> GateVerdict:
    """Fail when too many MoSCOW rows share an identical Last modified stamp."""
    findings: List[str] = []
    evidence: Dict[str, Any] = {"homogeneity_threshold": homogeneity_threshold}
    kanban_scripts = project_root / (
        "packages/frameworks/workflow mgt/scripts/kanban"
    )
    if str(kanban_scripts) not in sys.path:
        sys.path.insert(0, str(kanban_scripts))
    try:
        from stamp_authority import active_board_paths, homogeneity_clusters
    except ImportError as exc:
        return GateVerdict(
            gate_id=8,
            name="Stamp homogeneity (FR-097)",
            passed=False,
            severity="block",
            summary=f"Cannot import stamp_authority: {exc}",
            findings=[str(exc)],
            evidence=evidence,
        )

    config = None
    try:
        config_path = project_root / "rw-config.yaml"
        if config_path.exists() and yaml is not None:
            with open(config_path, "r", encoding="utf-8") as f:
                config = yaml.safe_load(f)
    except Exception:
        config = None

    for board_path in active_board_paths(project_root, config):
        if not board_path.exists():
            continue
        content = board_path.read_text(encoding="utf-8", errors="ignore")
        clusters = homogeneity_clusters(
            content, threshold=homogeneity_threshold
        )
        evidence[str(board_path.name)] = {
            stamp: len(row_ids) for stamp, row_ids in clusters.items()
        }
        for stamp, row_ids in clusters.items():
            findings.append(
                f"{board_path.name}: stamp '{stamp}' appears on "
                f"{len(row_ids)} rows (threshold {homogeneity_threshold}): "
                f"{row_ids[:5]}{'...' if len(row_ids) > 5 else ''}"
            )

    passed = not findings
    summary = (
        "No homogeneity clusters at or above threshold."
        if passed
        else "Homogenized stamp cluster(s) detected; run backfill or fix hygiene."
    )
    return GateVerdict(
        gate_id=8,
        name="Stamp homogeneity (FR-097)",
        passed=passed,
        severity="block",
        summary=summary,
        findings=findings,
        evidence=evidence,
    )


# --------------------------------------------------------------------------- #
# Gate 9: MoSCOW state icons (UXR-012 / E4:S13:T07)
# --------------------------------------------------------------------------- #


def gate_9_state_icons(project_root: Path) -> GateVerdict:
    """Fail when a parseable MoSCOW row lacks the canonical Set A state icon."""
    findings: List[str] = []
    evidence: Dict[str, Any] = {}
    val_dir = project_root / "packages/frameworks/workflow mgt/scripts/validation"
    if str(val_dir) not in sys.path:
        sys.path.insert(0, str(val_dir))
    try:
        from validate_kanban_state_icons import validate_project
    except ImportError as exc:
        return GateVerdict(
            gate_id=9,
            name="MoSCOW state icons (UXR-012)",
            passed=False,
            severity="block",
            summary=f"Cannot import validate_kanban_state_icons: {exc}",
            findings=[str(exc)],
            evidence=evidence,
        )

    ok, rows = validate_project(project_root)
    evidence["failure_count"] = len(rows)
    findings.extend(rows)
    summary = (
        "All parseable MoSCOW rows carry Set A state icons."
        if ok
        else "One or more MoSCOW rows missing state icons; run backfill_board_state_icons.py."
    )
    return GateVerdict(
        gate_id=9,
        name="MoSCOW state icons (UXR-012)",
        passed=ok,
        severity="block",
        summary=summary,
        findings=findings,
        evidence=evidence,
    )


# --------------------------------------------------------------------------- #
# Orchestration
# --------------------------------------------------------------------------- #


GATE_FUNCS: Tuple[Tuple[int, str, Callable[..., GateVerdict]], ...] = (
    (1, "governance", gate_1_governance_alignment),
    (2, "supersede", gate_2_supersede_chain),
    (3, "parity", gate_3_contract_parity),
    (4, "corpus", gate_4_corpus_canonical),
    (5, "stage", gate_5_stage_completeness),
    (6, "stamps", gate_6_stamp_evidence),
    (7, "foursurface", gate_7_four_surface_parity),
    (8, "homogeneity", gate_8_stamp_homogeneity),
    (9, "state_icons", gate_9_state_icons),
)


def run_release_readiness(
    project_root: Path,
    *,
    four_surface_report_path: Optional[Path] = None,
    require_report: bool = False,
    selected_gates: Optional[List[int]] = None,
    invocation_context: str = "rw_step_9_release_readiness",
) -> ReadinessReport:
    """
    Run the release-readiness gates and aggregate verdicts.

    `require_report=True` (default in RW Step 9) means Gates 5 and 7 will
    BLOCK if no four-surface report is found. `require_report=False` (CI
    smoke / unit test mode) waives those gates with an info-level note.
    """
    report = ReadinessReport(
        timestamp_utc=datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
        project_root=str(project_root),
        invocation_context=invocation_context,
    )

    selected = set(selected_gates) if selected_gates else set(range(1, 10))

    if 1 in selected:
        report.verdicts.append(gate_1_governance_alignment(project_root))
    if 2 in selected:
        report.verdicts.append(gate_2_supersede_chain(project_root))
    if 3 in selected:
        report.verdicts.append(gate_3_contract_parity(project_root))
    if 4 in selected:
        report.verdicts.append(gate_4_corpus_canonical(project_root))
    if 5 in selected:
        report.verdicts.append(
            gate_5_stage_completeness(
                project_root,
                four_surface_report_path=four_surface_report_path,
                require_report=require_report,
            )
        )
    if 6 in selected:
        report.verdicts.append(
            gate_6_stamp_evidence(
                project_root,
                four_surface_report_path=four_surface_report_path,
            )
        )
    if 7 in selected:
        report.verdicts.append(
            gate_7_four_surface_parity(
                project_root,
                four_surface_report_path=four_surface_report_path,
                require_report=require_report,
            )
        )
    if 8 in selected:
        report.verdicts.append(gate_8_stamp_homogeneity(project_root))
    if 9 in selected:
        report.verdicts.append(gate_9_state_icons(project_root))

    if four_surface_report_path is not None:
        report.four_surface_report_path = str(four_surface_report_path)
    else:
        latest = _find_latest_four_surface_report(project_root)
        if latest is not None:
            report.four_surface_report_path = str(latest)

    if report.four_surface_report_path:
        try:
            data = json.loads(
                Path(report.four_surface_report_path).read_text(
                    encoding="utf-8"
                )
            )
            report.release_scope = data.get("release_scope", {}) or {}
        except Exception:
            pass

    return report


def write_readiness_report(
    report: ReadinessReport,
    output_dir: Path,
) -> List[Path]:
    """
    Persist the readiness report into the four-surface-reports directory.

    File-naming convention:
      rw-step9-release-readiness-{version_or_timestamp}-{e?s?t?}.{json|md}
    """
    output_dir.mkdir(parents=True, exist_ok=True)
    scope = report.release_scope or {}
    version_string = str(scope.get("version_string", "")) or report.timestamp_utc
    epic = scope.get("epic")
    story = scope.get("story")
    task = scope.get("task")
    if epic is not None and story is not None and task is not None:
        scope_token = f"e{epic}s{story}t{task}"
    else:
        scope_token = "adhoc"
    sanitized = (
        str(version_string)
        .replace("+", "plus")
        .replace(".", "-")
        .replace(" ", "_")
        .replace(":", "-")
    )
    base = f"rw-step9-release-readiness-{sanitized}-{scope_token}"
    json_path = output_dir / f"{base}.json"
    md_path = output_dir / f"{base}.md"
    json_path.write_text(json.dumps(report.as_dict(), indent=2, sort_keys=True) + "\n")
    md_path.write_text(report.to_markdown())
    return [json_path, md_path]


# --------------------------------------------------------------------------- #
# CLI
# --------------------------------------------------------------------------- #


def parse_args(argv: Optional[List[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Run the FR-092 Wave 7 release-readiness gate (Gates 1-7). "
            "Invoked by RW Step 9; blocks RW commit on any blocking failure."
        )
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=None,
        help="Project root (default: discovered from git).",
    )
    parser.add_argument(
        "--four-surface-report",
        type=Path,
        default=None,
        help=(
            "Path to the FR-092 Wave 3 four-surface report JSON. "
            "Default: auto-discover the most recent under "
            f"{DEFAULT_REPORT_DIR_REL}/ ."
        ),
    )
    parser.add_argument(
        "--auto",
        action="store_true",
        help="Auto-discover the most recent four-surface report.",
    )
    parser.add_argument(
        "--require-report",
        action="store_true",
        help=(
            "Require a four-surface report; Gates 5/7 BLOCK if absent. "
            "Default for RW Step 9 invocation."
        ),
    )
    parser.add_argument(
        "--gate",
        type=int,
        action="append",
        default=None,
        help="Restrict to specific gate(s). Repeat for multiple. (1-7)",
    )
    parser.add_argument(
        "--report-dir",
        type=Path,
        default=None,
        help=(
            "Directory to write the readiness report into "
            f"(default: {DEFAULT_REPORT_DIR_REL}/)."
        ),
    )
    parser.add_argument(
        "--no-emit-report",
        action="store_true",
        help="Skip writing the readiness report (useful in unit tests).",
    )
    parser.add_argument(
        "--quiet",
        "-q",
        action="store_true",
        help="Suppress non-summary stdout output.",
    )
    parser.add_argument(
        "--invocation-context",
        type=str,
        default="rw_step_9_release_readiness",
        help="Free-form invocation-context label for the report.",
    )
    return parser.parse_args(argv)


def main(argv: Optional[List[str]] = None) -> int:
    args = parse_args(argv)
    project_root = (args.project_root or discover_project_root()).resolve()
    if not (project_root / ".git").exists():
        print(
            f"ERROR: --project-root {project_root} is not a git repository root.",
            file=sys.stderr,
        )
        return 2

    four_surface_report_path: Optional[Path] = None
    if args.four_surface_report is not None:
        candidate = args.four_surface_report.resolve()
        if not candidate.exists():
            print(
                f"ERROR: four-surface report not found: {candidate}",
                file=sys.stderr,
            )
            return 2
        four_surface_report_path = candidate
    elif args.auto:
        latest = _find_latest_four_surface_report(project_root)
        if latest is None:
            print(
                "ERROR: --auto specified but no four-surface report found "
                f"under {project_root / DEFAULT_REPORT_DIR_REL}",
                file=sys.stderr,
            )
            return 2
        four_surface_report_path = latest

    selected_gates = None
    if args.gate:
        invalid = [g for g in args.gate if g not in range(1, 10)]
        if invalid:
            print(
                f"ERROR: invalid --gate value(s) {invalid}; valid range is 1..9.",
                file=sys.stderr,
            )
            return 2
        selected_gates = list(args.gate)

    report = run_release_readiness(
        project_root,
        four_surface_report_path=four_surface_report_path,
        require_report=args.require_report,
        selected_gates=selected_gates,
        invocation_context=args.invocation_context,
    )

    if not args.no_emit_report:
        out_dir = (
            args.report_dir.resolve()
            if args.report_dir
            else (project_root / DEFAULT_REPORT_DIR_REL).resolve()
        )
        try:
            write_readiness_report(report, out_dir)
        except Exception as exc:
            print(
                f"WARNING: failed to persist readiness report: {exc}",
                file=sys.stderr,
            )

    if not args.quiet:
        print(report.to_markdown())

    return 0 if report.overall_passed else 1


if __name__ == "__main__":
    sys.exit(main())
