"""
Tests for the FR-092 Wave 7 release-readiness gate validator.

Covers:
- Gate 1 governance alignment (pass + missing-phrase + missing-file).
- Gate 2 supersede chain (pass + missing banner + missing redirect + missing
  gating reference).
- Gate 4 corpus canonical (pass on clean board, fail on synthetic stamp churn).
- Gate 5 stage-set completeness (composes BR-070 validator).
- Gate 6 forensic stamp evidence (pass + non_substantive synthetic stamp
  violation).
- Gate 7 four-surface parity (pass + missing surface + missing-rationale +
  missing-on-disk path).
- Orchestration: selected_gates filter, require_report, overall_passed,
  JSON+Markdown emission.
- CLI: invalid invocation, --gate filter, --no-emit-report.
"""

from __future__ import annotations

import importlib.util
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from typing import Tuple


SCRIPT_DIR = Path(__file__).resolve().parent
VALIDATOR_PATH = SCRIPT_DIR / "validate_release_readiness.py"


def _load_validator():
    spec = importlib.util.spec_from_file_location(
        "validate_release_readiness", VALIDATOR_PATH
    )
    module = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


VAL = _load_validator()


# --------------------------------------------------------------------------- #
# Synthetic project-root scaffolding
# --------------------------------------------------------------------------- #


def _init_git_repo(root: Path) -> None:
    subprocess.run(
        ["git", "init", "--quiet"], cwd=str(root), check=True
    )
    subprocess.run(
        ["git", "config", "user.email", "test@example.com"],
        cwd=str(root),
        check=True,
    )
    subprocess.run(
        ["git", "config", "user.name", "Test"], cwd=str(root), check=True
    )


def _write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def _scaffold_governance(root: Path, *, all_phrases: bool = True) -> None:
    """
    Create the governance artefacts Gate 1 inspects, with the FR-092
    contract phrases either fully present or partially missing.
    """
    cursorrules_text = (
        "# Cursor rules\n"
        + ("FR-092 contract.\n" if all_phrases else "(no fr-09x reference)\n")
        + ("Self-Sufficient scoped kanban reconciliation\n" if all_phrases else "")
    )
    _write(root / ".cursorrules", cursorrules_text)

    rw_guide_path = (
        root
        / "packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/"
        "release-workflow-agent-execution.md"
    )
    rw_guide_text = (
        "# RW execution\n"
        + ("FR-092 governance.\n" if all_phrases else "(missing fr-09x ref)\n")
        + ("stage_set_completeness: required\n" if all_phrases else "")
    )
    _write(rw_guide_path, rw_guide_text)

    policy_path = (
        root / "packages/frameworks/kanban/policies/kanban-governance-policy.md"
    )
    policy_text = (
        "# Kanban policy\n"
        + ("FR-092 codification.\n" if all_phrases else "(missing fr-09x ref)\n")
        + ("Forensic semantics (UXR-009 / FR-092 Wave 6)\n" if all_phrases else "")
    )
    _write(policy_path, policy_text)


def _scaffold_supersede_chain(root: Path, *, complete: bool = True) -> None:
    fbu_dir = root / "docs/project-management/kanban/fr-br"
    epic_dir = (
        root
        / "docs/project-management/kanban/epics/Epic-2/"
        "Story-015-ipw-governance-and-publication-contract"
    )

    def banner(rel_id: str) -> str:
        return (
            f"# {rel_id}\n\n**Status:** SUPERSEDED by [FR-092](FR-092-...)\n\n"
            "FR-092 absorbed.\n"
        )

    def redirect(task_id: str) -> str:
        return (
            f"# {task_id}\n\n**Status:** SUPERSEDED -> [E2:S15:T07]("
            "T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)\n\n"
            "Redirected per FR-092 supersede chain.\n"
        )

    def gated_doc(rel_id: str) -> str:
        return (
            f"# {rel_id}\n\nGated by FR-092; closure deferred until sign-off.\n"
        )

    fbu_files = {
        "FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md": banner("FR-091"),
        "FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md": banner("FR-090"),
        "FR-084-ipp-post-run-governance-reconciliation-ownership.md": banner("FR-084"),
        "BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md": gated_doc("BR-069"),
        "BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md": gated_doc("BR-070"),
        "UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md": gated_doc("UXR-009"),
        "BR-042-ukw-agent-board-cleanup-failure.md": (
            "# BR-042\n\nClosed as DUPLICATE of FR-090 (FR-092 absorbed).\n"
        ),
    }
    for name, body in fbu_files.items():
        if not complete and "FR-091" in name:
            body = "# FR-091\n\nNo supersede banner here.\n"
        _write(fbu_dir / name, body)

    task_files = {
        "T02-ipp-post-run-governance-reconciliation-ownership-fr084.md": redirect("T02"),
        "T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md": redirect("T05"),
        "T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md": redirect("T06"),
    }
    for name, body in task_files.items():
        if not complete and "T02" in name:
            body = "# T02\n\nNo redirect here.\n"
        _write(epic_dir / name, body)


def _make_minimal_repo(tmpdir: Path) -> Path:
    root = tmpdir / "repo"
    root.mkdir()
    _init_git_repo(root)
    _scaffold_governance(root, all_phrases=True)
    _scaffold_supersede_chain(root, complete=True)
    return root


# --------------------------------------------------------------------------- #
# Test cases
# --------------------------------------------------------------------------- #


class Gate1GovernanceAlignmentTests(unittest.TestCase):

    def test_passes_when_all_phrases_present(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            verdict = VAL.gate_1_governance_alignment(root)
            self.assertTrue(
                verdict.passed,
                msg=f"Expected Gate 1 PASS; findings={verdict.findings}",
            )
            self.assertEqual(verdict.gate_id, 1)
            self.assertEqual(verdict.severity, "block")

    def test_fails_when_required_phrase_missing(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / "repo"
            root.mkdir()
            _init_git_repo(root)
            _scaffold_governance(root, all_phrases=False)
            _scaffold_supersede_chain(root, complete=True)
            verdict = VAL.gate_1_governance_alignment(root)
            self.assertFalse(verdict.passed)
            self.assertTrue(verdict.is_blocking_failure)
            joined = " | ".join(verdict.findings)
            self.assertIn("FR-092", joined)


class Gate2SupersedeChainTests(unittest.TestCase):

    def test_passes_when_chain_complete(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            verdict = VAL.gate_2_supersede_chain(root)
            self.assertTrue(
                verdict.passed,
                msg=f"Expected Gate 2 PASS; findings={verdict.findings}",
            )

    def test_fails_when_supersede_banner_missing(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp) / "repo"
            root.mkdir()
            _init_git_repo(root)
            _scaffold_governance(root, all_phrases=True)
            _scaffold_supersede_chain(root, complete=False)
            verdict = VAL.gate_2_supersede_chain(root)
            self.assertFalse(verdict.passed)
            self.assertTrue(verdict.is_blocking_failure)
            joined = " | ".join(verdict.findings)
            self.assertTrue(
                "supersede" in joined.lower() or "redirect" in joined.lower()
            )


class Gate4CorpusCanonicalTests(unittest.TestCase):

    def test_pass_on_live_repo(self):
        repo_root = VAL.discover_project_root()
        if not (repo_root / ".git").exists():
            self.skipTest("Not in a git repo; skipping live-corpus test.")
        verdict = VAL.gate_4_corpus_canonical(repo_root)
        self.assertTrue(
            verdict.passed,
            msg=(
                "Live repo failed Gate 4 corpus canonical state. "
                f"Findings: {verdict.findings}"
            ),
        )
        self.assertEqual(
            verdict.evidence["stamp_evidence_aggregate"][
                "stamps_appended_with_evidence"
            ],
            0,
            msg="Non-substantive corpus sweep must not mint stamps.",
        )


class Gate5StageCompletenessTests(unittest.TestCase):

    def test_waived_when_no_four_surface_report(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            scripts_src = Path(__file__).resolve().parent
            scripts_dst = root / "packages/frameworks/workflow mgt/scripts"
            scripts_dst.mkdir(parents=True, exist_ok=True)
            for name in (
                "validate_rw_step7_completeness.py",
                "update_kanban_docs.py",
            ):
                content = (scripts_src / name).read_text(encoding="utf-8")
                (scripts_dst / name).write_text(content, encoding="utf-8")

            verdict = VAL.gate_5_stage_completeness(
                root,
                four_surface_report_path=None,
                require_report=False,
            )
            self.assertTrue(verdict.passed)
            self.assertTrue(verdict.waived)

    def test_blocks_when_require_report_and_none_present(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            scripts_src = Path(__file__).resolve().parent
            scripts_dst = root / "packages/frameworks/workflow mgt/scripts"
            scripts_dst.mkdir(parents=True, exist_ok=True)
            for name in (
                "validate_rw_step7_completeness.py",
                "update_kanban_docs.py",
            ):
                content = (scripts_src / name).read_text(encoding="utf-8")
                (scripts_dst / name).write_text(content, encoding="utf-8")

            verdict = VAL.gate_5_stage_completeness(
                root,
                four_surface_report_path=None,
                require_report=True,
            )
            self.assertFalse(verdict.passed)
            self.assertTrue(verdict.is_blocking_failure)


def _write_four_surface_report(root: Path, payload: dict) -> Path:
    out_dir = (
        root
        / "docs/changelog-and-release-notes/changelog-archive/four-surface-reports"
    )
    out_dir.mkdir(parents=True, exist_ok=True)
    p = out_dir / "rw-step7-four-surface-report-test.json"
    p.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    return p


class Gate6StampEvidenceTests(unittest.TestCase):

    def test_pass_on_consistent_counters(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            report_path = _write_four_surface_report(
                root,
                {
                    "release_scope": {
                        "epic": 2,
                        "story": 15,
                        "task": 7,
                        "version_string": "0.0.0+0",
                    },
                    "stamp_evidence": {"evidence_mode": "work_authoritative"},
                    "summary": {
                        "stamps_appended_with_evidence": 3,
                        "stamps_skipped_no_evidence": 0,
                        "stamps_preserved_existing": 4,
                    },
                },
            )
            verdict = VAL.gate_6_stamp_evidence(
                root, four_surface_report_path=report_path
            )
            self.assertTrue(verdict.passed, msg=verdict.findings)

    def test_fails_on_synthetic_stamps_in_non_substantive_mode(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            report_path = _write_four_surface_report(
                root,
                {
                    "release_scope": {"version_string": "0.0.0+0"},
                    "stamp_evidence": {"evidence_mode": "non_substantive"},
                    "summary": {
                        "stamps_appended_with_evidence": 5,
                        "stamps_skipped_no_evidence": 0,
                        "stamps_preserved_existing": 0,
                    },
                },
            )
            verdict = VAL.gate_6_stamp_evidence(
                root, four_surface_report_path=report_path
            )
            self.assertFalse(verdict.passed)
            self.assertTrue(verdict.is_blocking_failure)
            joined = " | ".join(verdict.findings)
            self.assertIn("UXR-009", joined)


class Gate7FourSurfaceParityTests(unittest.TestCase):

    def _baseline_report_payload(self, root: Path) -> dict:
        kboard = root / "docs/project-management/kanban/kboard.md"
        fbuboard = root / "docs/project-management/kanban/fbuboard.md"
        task_doc = root / "docs/project-management/kanban/task.md"
        fbu_doc = root / "docs/project-management/kanban/fbu.md"
        for p in (kboard, fbuboard, task_doc, fbu_doc):
            _write(p, "# stub\n")
        return {
            "release_scope": {"version_string": "0.0.0+0"},
            "surfaces": {
                "task_doc": {"touched": True, "paths": [str(task_doc)], "notes": []},
                "fbu_doc": {"touched": True, "paths": [str(fbu_doc)], "notes": []},
                "kboard": {"touched": True, "paths": [str(kboard)], "notes": []},
                "fbuboard": {"touched": True, "paths": [str(fbuboard)], "notes": []},
            },
        }

    def test_pass_when_all_surfaces_touched(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            payload = self._baseline_report_payload(root)
            report_path = _write_four_surface_report(root, payload)
            verdict = VAL.gate_7_four_surface_parity(
                root,
                four_surface_report_path=report_path,
                require_report=True,
            )
            self.assertTrue(verdict.passed, msg=verdict.findings)

    def test_pass_when_untouched_surface_has_rationale(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            payload = self._baseline_report_payload(root)
            payload["surfaces"]["fbu_doc"] = {
                "touched": False,
                "paths": [],
                "notes": ["Out of release scope; FBU pre-existing"],
            }
            report_path = _write_four_surface_report(root, payload)
            verdict = VAL.gate_7_four_surface_parity(
                root,
                four_surface_report_path=report_path,
                require_report=True,
            )
            self.assertTrue(verdict.passed, msg=verdict.findings)

    def test_fails_when_untouched_surface_lacks_rationale(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            payload = self._baseline_report_payload(root)
            payload["surfaces"]["fbuboard"] = {
                "touched": False,
                "paths": [],
                "notes": [],
            }
            report_path = _write_four_surface_report(root, payload)
            verdict = VAL.gate_7_four_surface_parity(
                root,
                four_surface_report_path=report_path,
                require_report=True,
            )
            self.assertFalse(verdict.passed)
            joined = " | ".join(verdict.findings)
            self.assertIn("rationale", joined.lower())

    def test_fails_when_declared_path_missing_on_disk(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = _make_minimal_repo(Path(tmp))
            payload = self._baseline_report_payload(root)
            payload["surfaces"]["kboard"]["paths"] = [
                str(root / "docs/project-management/kanban/missing.md")
            ]
            report_path = _write_four_surface_report(root, payload)
            verdict = VAL.gate_7_four_surface_parity(
                root,
                four_surface_report_path=report_path,
                require_report=True,
            )
            self.assertFalse(verdict.passed)
            joined = " | ".join(verdict.findings)
            self.assertIn("disk", joined.lower())


class OrchestrationTests(unittest.TestCase):

    def test_selected_gates_filter_runs_only_chosen_gates(self):
        repo_root = VAL.discover_project_root()
        if not (repo_root / ".git").exists():
            self.skipTest("Not in a git repo.")
        report = VAL.run_release_readiness(
            repo_root,
            selected_gates=[1, 2],
            require_report=False,
        )
        self.assertEqual([v.gate_id for v in report.verdicts], [1, 2])

    def test_overall_passed_true_on_live_repo(self):
        repo_root = VAL.discover_project_root()
        if not (repo_root / ".git").exists():
            self.skipTest("Not in a git repo.")
        report = VAL.run_release_readiness(
            repo_root, require_report=False
        )
        blocking = [
            v for v in report.verdicts if v.is_blocking_failure
        ]
        self.assertEqual(
            blocking,
            [],
            msg=(
                "Live release-readiness sweep should produce zero blocking "
                f"failures. Got: {[(v.gate_id, v.name, v.findings) for v in blocking]}"
            ),
        )
        self.assertTrue(report.overall_passed)

    def test_report_emission_writes_json_and_markdown(self):
        with tempfile.TemporaryDirectory() as tmp:
            out_dir = Path(tmp) / "reports"
            report = VAL.ReadinessReport(
                timestamp_utc="2026-04-27 12:00 UTC",
                project_root=str(tmp),
                release_scope={
                    "epic": 2,
                    "story": 15,
                    "task": 7,
                    "version_string": "1.2.3+4",
                },
                verdicts=[
                    VAL.GateVerdict(
                        gate_id=1,
                        name="Test gate",
                        passed=True,
                        severity="block",
                        summary="ok",
                    )
                ],
            )
            paths = VAL.write_readiness_report(report, out_dir)
            self.assertEqual(len(paths), 2)
            json_path = next(p for p in paths if p.suffix == ".json")
            md_path = next(p for p in paths if p.suffix == ".md")
            self.assertTrue(json_path.exists())
            self.assertTrue(md_path.exists())
            data = json.loads(json_path.read_text(encoding="utf-8"))
            self.assertTrue(data["overall_passed"])
            md_text = md_path.read_text(encoding="utf-8")
            self.assertIn("Gate 1", md_text)
            self.assertIn("PASS", md_text)


class CliTests(unittest.TestCase):

    def _run_cli(self, *args: str) -> Tuple[int, str, str]:
        result = subprocess.run(
            [sys.executable, str(VALIDATOR_PATH), *args],
            capture_output=True,
            text=True,
        )
        return result.returncode, result.stdout, result.stderr

    def test_invalid_gate_argument_exits_2(self):
        repo_root = VAL.discover_project_root()
        if not (repo_root / ".git").exists():
            self.skipTest("Not in a git repo.")
        rc, stdout, stderr = self._run_cli(
            "--no-emit-report", "--quiet", "--gate", "99",
        )
        self.assertEqual(rc, 2)
        self.assertIn("invalid", stderr.lower())

    def test_quiet_no_emit_default_run_succeeds_on_live_repo(self):
        repo_root = VAL.discover_project_root()
        if not (repo_root / ".git").exists():
            self.skipTest("Not in a git repo.")
        rc, stdout, stderr = self._run_cli("--no-emit-report", "--quiet")
        self.assertEqual(
            rc,
            0,
            msg=(
                f"Live release-readiness CLI run should exit 0. "
                f"stdout:\n{stdout}\nstderr:\n{stderr}"
            ),
        )


if __name__ == "__main__":
    unittest.main()
