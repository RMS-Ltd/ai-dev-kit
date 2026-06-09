#!/usr/bin/env python3
"""
RW thin orchestrator shell (FR-122 Wave 5 / ADR-027).

Runs deterministic PREFLIGHT, PLAN (optional), VALIDATE, and PUBLISH gates from
`rw-contract.yaml`. The intelligent agent retains MUTATE (Steps 2–7, Step 8 stage,
Step 10 commit).

Usage:
  python rw_orchestrator.py preflight --requested E02:S01:T30 [--art]
  python rw_orchestrator.py plan --requested E02:S01:T30 [--art]
  python rw_orchestrator.py validate [--internal-version 0.2.1.30+5]
  python rw_orchestrator.py publish --internal-version 0.2.1.30+5
  python rw_orchestrator.py all --requested E02:S01:T30 --internal-version 0.2.1.30+5
  python rw_orchestrator.py preflight --dry-run --requested E02:S01:T30
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

try:
    import yaml
except ImportError:  # pragma: no cover
    yaml = None  # type: ignore

_SCRIPTS_DIR = Path(__file__).resolve().parent
_PKG_ROOT = _SCRIPTS_DIR.parent
_VERSION_DIR = _SCRIPTS_DIR / "version"
_KANBAN_DIR = _SCRIPTS_DIR / "kanban"
for _p in (_SCRIPTS_DIR, _VERSION_DIR, _KANBAN_DIR):
    if str(_p) not in sys.path:
        sys.path.insert(0, str(_p))

from rw_config_loader import find_project_root, load_rw_config_or_empty  # noqa: E402
from ukw_syntax_parser import parse_single_task_id  # noqa: E402

_MANIFEST_PATH = _PKG_ROOT / "rw-contract.yaml"
_PHASE_ALIASES = {
    "preflight": "PREFLIGHT",
    "plan": "PLAN",
    "validate": "VALIDATE",
    "publish": "PUBLISH",
}


@dataclass
class GateRun:
    gate_id: str
    phase: str
    status: str  # pass | fail | skip
    detail: str
    command: Optional[List[str]] = None
    exit_code: int = 0


@dataclass
class OrchestratorContext:
    project_root: Path
    requested: Optional[str] = None
    art: bool = False
    internal_version: Optional[str] = None
    dry_run: bool = False


def load_rw_contract_manifest(manifest_path: Path = _MANIFEST_PATH) -> Dict[str, Any]:
    if yaml is None:
        raise RuntimeError("PyYAML required for rw_orchestrator")
    if not manifest_path.is_file():
        raise FileNotFoundError(f"rw-contract manifest not found: {manifest_path}")
    with manifest_path.open(encoding="utf-8") as fh:
        data = yaml.safe_load(fh)
    return data if isinstance(data, dict) else {}


def _gate_enabled(config: Dict[str, Any], config_key: Optional[str]) -> bool:
    if not config_key:
        return True
    raw = config.get(config_key)
    if raw is None:
        return True
    if isinstance(raw, dict):
        return bool(raw.get("enabled", True))
    return bool(raw)


def gates_for_phase(manifest: Dict[str, Any], phase: str) -> List[Dict[str, Any]]:
    phase_upper = _PHASE_ALIASES.get(phase.lower(), phase.upper())
    gates = manifest.get("gates") or []
    return [
        g
        for g in gates
        if isinstance(g, dict) and str(g.get("phase", "")).upper() == phase_upper
    ]


def _script_path(pkg_root: Path, gate: Dict[str, Any]) -> Optional[Path]:
    script = gate.get("script")
    if not script:
        return None
    return pkg_root / str(script).lstrip("/")


def _needs_requested(gate: Dict[str, Any]) -> bool:
    gid = str(gate.get("id", ""))
    step = str(gate.get("step", ""))
    return gid in {"step_1", "step_1b", "step_1c", "step_1d"} or step in {"1", "1b", "1c", "1d"}


def _needs_internal_version(gate: Dict[str, Any]) -> bool:
    gid = str(gate.get("id", ""))
    step = str(gate.get("step", ""))
    if gate.get("api") == "create_rw_tags":
        return True
    if "internal-version" in " ".join(gate.get("args") or []):
        return True
    return gid.startswith("step_11") or step.startswith("11")


def _build_command(
    gate: Dict[str, Any],
    *,
    pkg_root: Path,
    ctx: OrchestratorContext,
) -> Optional[List[str]]:
    path = _script_path(pkg_root, gate)
    if path is None:
        return None
    argv: List[str] = [sys.executable, str(path)]
    for arg in gate.get("args") or []:
        argv.append(str(arg))
    if _needs_requested(gate) and ctx.requested:
        if "--requested" not in argv:
            argv.extend(["--requested", ctx.requested])
    if ctx.art and gate.get("id") in {"step_1", "step_1d"}:
        if "--art" not in argv:
            argv.append("--art")
    if _needs_internal_version(gate) and ctx.internal_version:
        if "--internal-version" not in argv:
            argv.extend(["--internal-version", ctx.internal_version.lstrip("v")])
    return argv


def _run_policy_gate(gate: Dict[str, Any], ctx: OrchestratorContext) -> GateRun:
    gid = str(gate.get("id", "?"))
    if gid == "step_1b":
        if not ctx.requested:
            return GateRun(
                gid,
                str(gate.get("phase", "")),
                "fail",
                "FR-060: --requested E:S:T required for preflight",
                exit_code=1,
            )
        if parse_single_task_id(ctx.requested.strip()) is None:
            return GateRun(
                gid,
                str(gate.get("phase", "")),
                "fail",
                f"Could not parse task id: {ctx.requested!r}",
                exit_code=1,
            )
        return GateRun(gid, str(gate.get("phase", "")), "pass", "task token parsed")
    return GateRun(
        gid,
        str(gate.get("phase", "")),
        "skip",
        "policy gate without handler",
        exit_code=0,
    )


def _run_create_rw_tags(gate: Dict[str, Any], ctx: OrchestratorContext) -> GateRun:
    gid = str(gate.get("id", "?"))
    if not ctx.internal_version:
        return GateRun(
            gid,
            str(gate.get("phase", "")),
            "fail",
            "--internal-version required for create_rw_tags",
            exit_code=1,
        )
    if ctx.dry_run:
        return GateRun(
            gid,
            str(gate.get("phase", "")),
            "pass",
            f"dry-run create_rw_tags({ctx.internal_version})",
            command=["create_rw_tags", ctx.internal_version],
        )
    import semver_converter  # noqa: E402

    semver_converter.create_rw_tags(ctx.internal_version.lstrip("v"))
    return GateRun(
        gid,
        str(gate.get("phase", "")),
        "pass",
        f"create_rw_tags({ctx.internal_version})",
        command=["create_rw_tags", ctx.internal_version],
    )


def run_gate(
    gate: Dict[str, Any],
    *,
    pkg_root: Path,
    config: Dict[str, Any],
    ctx: OrchestratorContext,
) -> GateRun:
    gid = str(gate.get("id", "?"))
    phase = str(gate.get("phase", ""))
    config_key = gate.get("config_key")
    if not _gate_enabled(config, str(config_key) if config_key else None):
        return GateRun(gid, phase, "skip", f"disabled via rw-config ({config_key})")

    if gate.get("script") is None and gate.get("api") is None:
        return _run_policy_gate(gate, ctx)

    if gate.get("api") == "create_rw_tags":
        return _run_create_rw_tags(gate, ctx)

    if _needs_requested(gate) and not ctx.requested:
        return GateRun(gid, phase, "fail", "--requested required", exit_code=1)
    if _needs_internal_version(gate) and not ctx.internal_version:
        return GateRun(gid, phase, "fail", "--internal-version required", exit_code=1)

    command = _build_command(gate, pkg_root=pkg_root, ctx=ctx)
    if command is None:
        return GateRun(gid, phase, "skip", "no script path")

    if ctx.dry_run:
        return GateRun(gid, phase, "pass", "dry-run", command=command)

    result = subprocess.run(
        command,
        cwd=ctx.project_root,
        capture_output=True,
        text=True,
        check=False,
    )
    output = (result.stdout or "") + (result.stderr or "")
    if result.returncode == 0:
        return GateRun(gid, phase, "pass", output.strip() or "OK", command=command)
    return GateRun(
        gid,
        phase,
        "fail",
        output.strip() or f"exit {result.returncode}",
        command=command,
        exit_code=result.returncode,
    )


def run_plan_scripts(ctx: OrchestratorContext) -> List[GateRun]:
    """PLAN phase scripts from manifest (resolve_rw_build only — finalize stays post-mutate)."""
    if not ctx.requested:
        return [
            GateRun("plan_resolve_rw_build", "PLAN", "fail", "--requested required", exit_code=1)
        ]
    script = _PKG_ROOT / "scripts" / "version" / "resolve_rw_build.py"
    argv = [
        sys.executable,
        str(script),
        "--requested",
        ctx.requested,
        "--project-root",
        str(ctx.project_root),
    ]
    if ctx.art:
        argv.append("--art")
    if ctx.dry_run:
        return [GateRun("plan_resolve_rw_build", "PLAN", "pass", "dry-run", command=argv)]
    result = subprocess.run(argv, cwd=ctx.project_root, capture_output=True, text=True, check=False)
    output = (result.stdout or "") + (result.stderr or "")
    if result.returncode == 0:
        return [GateRun("plan_resolve_rw_build", "PLAN", "pass", output.strip(), command=argv)]
    return [
        GateRun(
            "plan_resolve_rw_build",
            "PLAN",
            "fail",
            output.strip(),
            command=argv,
            exit_code=result.returncode,
        )
    ]


def run_phase(
    phase: str,
    *,
    manifest: Optional[Dict[str, Any]] = None,
    ctx: OrchestratorContext,
) -> List[GateRun]:
    doc = manifest or load_rw_contract_manifest()
    phase_key = phase.lower()
    if phase_key == "plan":
        return run_plan_scripts(ctx)
    gates = gates_for_phase(doc, phase)
    results: List[GateRun] = []
    for gate in gates:
        results.append(
            run_gate(gate, pkg_root=_PKG_ROOT, config=load_rw_config_or_empty(ctx.project_root), ctx=ctx)
        )
        if results[-1].status == "fail" and gate.get("blocking", True):
            break
    return results


def run_phases(phases: Sequence[str], ctx: OrchestratorContext) -> List[GateRun]:
    manifest = load_rw_contract_manifest()
    all_results: List[GateRun] = []
    for phase in phases:
        all_results.extend(run_phase(phase, manifest=manifest, ctx=ctx))
        if any(r.status == "fail" for r in all_results):
            break
    return all_results


def _print_results(results: List[GateRun], *, as_json: bool) -> int:
    if as_json:
        print(json.dumps([asdict(r) for r in results], indent=2))
    else:
        for r in results:
            prefix = {"pass": "✅", "fail": "❌", "skip": "⏭"}.get(r.status, "?")
            print(f"{prefix} [{r.phase}] {r.gate_id}: {r.status}")
            if r.command:
                print(f"   cmd: {' '.join(r.command)}")
            if r.detail and r.status != "pass":
                for line in r.detail.splitlines()[:12]:
                    print(f"   {line}")
    return 1 if any(r.status == "fail" for r in results) else 0


def main(argv: Optional[Sequence[str]] = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "phase",
        choices=["preflight", "plan", "validate", "publish", "all"],
        help="Contract phase to execute",
    )
    parser.add_argument("--requested", help="E:S:T token (required for preflight/plan/all)")
    parser.add_argument("--art", action="store_true", help="Adopt requested token (--art)")
    parser.add_argument("--internal-version", help="Internal version for validate/publish gates")
    parser.add_argument("--project-root", type=Path, default=None)
    parser.add_argument("--dry-run", action="store_true", help="Print planned gates without executing")
    parser.add_argument("--json", action="store_true", help="Emit machine-readable results")
    args = parser.parse_args(argv)

    project_root = (args.project_root or find_project_root()).resolve()
    ctx = OrchestratorContext(
        project_root=project_root,
        requested=args.requested,
        art=args.art,
        internal_version=args.internal_version,
        dry_run=args.dry_run,
    )

    if args.phase == "all":
        phases = ["preflight", "validate", "publish"]
    else:
        phases = [args.phase]

    if args.phase in {"preflight", "plan", "all"} and not ctx.requested:
        print("rw_orchestrator: --requested required for this phase", file=sys.stderr)
        return 1

    if args.phase in {"validate", "publish", "all"} and not ctx.internal_version:
        print(
            "rw_orchestrator: --internal-version required for validate/publish/all",
            file=sys.stderr,
        )
        return 1

    if args.phase == "all":
        print(
            "rw_orchestrator: MUTATE (Steps 2–7, 8, 10) is agent-owned — not executed by this shell",
            file=sys.stderr,
        )

    results = run_phases(phases, ctx)
    return _print_results(results, as_json=args.json)


if __name__ == "__main__":
    raise SystemExit(main())
