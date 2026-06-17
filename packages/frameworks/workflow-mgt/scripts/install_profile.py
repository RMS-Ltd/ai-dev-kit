#!/usr/bin/env python3
"""
Install profile schema and resolution (FR-135 / E06:S09:T38).

Loads install-profile.yaml (schema_version 1.x) or legacy rw-install input YAML.
"""

from __future__ import annotations

import sys
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

try:
    import yaml
except ImportError:
    yaml = None  # type: ignore[assignment,misc]

ADOPTION_PATHS = ("greenfield", "arm-a", "arm-b", "strangler")
TRIGGER_BUNDLES = ("rw", "rw_ukw", "rw_ukw_delivery")
RELEASE_BACKENDS = ("sqlite", "legacy")
RELEASE_IMPORT_MODES = ("auto", "import", "fresh", "legacy_yaml")
KMA_OFFERS = ("blind_l1", "skip", "guided")


@dataclass
class InstallProfile:
    """Guided install orchestrator v2 profile (FR-135)."""

    schema_version: str = "1.0.0"
    adoption_path: str = "greenfield"
    release_state_backend: str = "sqlite"
    release_state_import: str = "auto"
    skip_changelog_import: bool = True
    trigger_bundle: str = "rw_ukw"
    init_kanban_completed: bool = True
    import_kanban_completed_md: bool = False
    scaffold_comprehension: bool = True
    kma_offer: str = "skip"
    rw_mode: str = "c"
    kanban_mode: str = "fresh"
    kanban_catalog: str = "v4"
    install_order: str = "rw-first"
    run_install_rc: bool = True
    install_rc_strict: bool = True
    non_interactive: bool = False
    rw_config: Dict[str, Any] = field(default_factory=dict)

    def validate(self) -> List[str]:
        errors: List[str] = []
        if self.adoption_path not in ADOPTION_PATHS:
            errors.append(f"invalid adoption_path: {self.adoption_path}")
        if self.trigger_bundle not in TRIGGER_BUNDLES:
            errors.append(f"invalid trigger_bundle: {self.trigger_bundle}")
        if self.release_state_backend not in RELEASE_BACKENDS:
            errors.append(f"invalid release_state_backend: {self.release_state_backend}")
        if self.release_state_import not in RELEASE_IMPORT_MODES:
            errors.append(f"invalid release_state_import: {self.release_state_import}")
        if self.kma_offer not in KMA_OFFERS:
            errors.append(f"invalid kma_offer: {self.kma_offer}")
        return errors

    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> "InstallProfile":
        rw_block = data.get("rw_install") or data.get("rw_config") or {}
        if not isinstance(rw_block, dict):
            rw_block = {}
        rs = data.get("release_state") or {}
        if not isinstance(rs, dict):
            rs = {}
        kc = data.get("kanban_completed") or {}
        if not isinstance(kc, dict):
            kc = {}
        comp = data.get("comprehension") or {}
        if not isinstance(comp, dict):
            comp = {}
        rc = data.get("install_rc") or {}
        if not isinstance(rc, dict):
            rc = {}

        return cls(
            schema_version=str(data.get("schema_version", "1.0.0")),
            adoption_path=str(data.get("adoption_path", "greenfield")),
            release_state_backend=str(
                rs.get("backend", data.get("release_state_backend", "sqlite"))
            ),
            release_state_import=str(
                rs.get("import_mode", data.get("release_state_import", "auto"))
            ),
            skip_changelog_import=bool(
                rs.get("skip_changelog_import", data.get("skip_changelog_import", True))
            ),
            trigger_bundle=str(data.get("trigger_bundle", "rw_ukw")),
            init_kanban_completed=bool(
                kc.get("init_db", data.get("init_kanban_completed", True))
            ),
            import_kanban_completed_md=bool(
                kc.get("import_md", data.get("import_kanban_completed_md", False))
            ),
            scaffold_comprehension=bool(
                comp.get("scaffold", data.get("scaffold_comprehension", True))
            ),
            kma_offer=str(data.get("kma_offer", "skip")),
            rw_mode=str(data.get("rw_mode", rw_block.get("mode", "c"))),
            kanban_mode=str(data.get("kanban_mode", "fresh")),
            kanban_catalog=str(data.get("kanban_catalog", "v4")),
            install_order=str(data.get("install_order", "rw-first")),
            run_install_rc=bool(rc.get("run", data.get("run_install_rc", True))),
            install_rc_strict=bool(rc.get("strict", data.get("install_rc_strict", True))),
            non_interactive=bool(data.get("non_interactive", False)),
            rw_config=dict(rw_block),
        )

    def to_rw_install_dict(self, project_root: Path) -> Dict[str, Any]:
        """Merge profile release-state keys into RW installer config dict."""
        merged = dict(self.rw_config)
        merged.setdefault("use_kanban", True)
        merged["release_state_backend"] = self.release_state_backend
        if self.release_state_backend == "sqlite":
            merged.setdefault("release_state_db", ".adk/release-state.db")
        merged["install_trigger_bundle"] = self.trigger_bundle
        if self.init_kanban_completed:
            merged["kanban_completed"] = {
                "db": ".adk/kanban-completed.db",
                "pdf": "docs/kanban/kanban-completed.pdf",
            }
        merged.setdefault("project_name", project_root.name)
        return merged

    def greenfield_defaults(self) -> None:
        """Apply zero-prompt greenfield non-interactive defaults."""
        self.adoption_path = "greenfield"
        self.release_state_backend = "sqlite"
        self.release_state_import = "fresh"
        self.trigger_bundle = "rw_ukw"
        self.init_kanban_completed = True
        self.scaffold_comprehension = True
        self.kma_offer = "skip"
        self.run_install_rc = True
        self.install_rc_strict = True


def is_install_profile_dict(data: Any) -> bool:
    if not isinstance(data, dict):
        return False
    sv = str(data.get("schema_version", ""))
    if sv.startswith("1."):
        return True
    return "trigger_bundle" in data and "adoption_path" in data


def load_config_file(path: Path) -> Tuple[str, Any]:
    """Return ('install_profile', InstallProfile) or ('rw_config', dict)."""
    if yaml is None:
        raise RuntimeError("PyYAML required: pip install pyyaml")
    with path.open(encoding="utf-8") as fh:
        data = yaml.safe_load(fh) or {}
    if is_install_profile_dict(data):
        profile = InstallProfile.from_dict(data)
        errs = profile.validate()
        if errs:
            raise ValueError("; ".join(errs))
        return "install_profile", profile
    if not isinstance(data, dict):
        raise ValueError("config root must be a mapping")
    return "rw_config", data


def write_temp_rw_config(project_root: Path, config: Dict[str, Any]) -> Path:
    if yaml is None:
        raise RuntimeError("PyYAML required")
    out = project_root / ".adk-install-rw-config.yaml"
    out.parent.mkdir(parents=True, exist_ok=True)
    with out.open("w", encoding="utf-8") as fh:
        yaml.dump(config, fh, default_flow_style=False, sort_keys=False)
    return out


def _menu_choice(
    prompt: str,
    options: List[Tuple[str, str]],
    *,
    default: str,
    non_interactive: bool,
) -> str:
    if non_interactive:
        return default
    print(prompt)
    for idx, (key, label) in enumerate(options, start=1):
        mark = " (default)" if key == default else ""
        print(f"  {idx}. {label}{mark}")
    keys = [k for k, _ in options]
    raw = input(f"Choice [1-{len(options)}] (default {default}): ").strip()
    if not raw:
        return default
    if raw.isdigit():
        i = int(raw)
        if 1 <= i <= len(keys):
            return keys[i - 1]
    if raw in keys:
        return raw
    return default


def resolve_interactive(
    profile: InstallProfile,
    *,
    cli_adoption_path: Optional[str] = None,
    cli_non_interactive: bool = False,
) -> InstallProfile:
    """Phases A–E choice menus when not fully specified (FR-135-F1–F5)."""
    ni = profile.non_interactive or cli_non_interactive
    if profile.adoption_path == "greenfield" and ni:
        profile.greenfield_defaults()

    if cli_adoption_path:
        profile.adoption_path = cli_adoption_path

    # Phase A — path
    if not cli_adoption_path and not ni:
        profile.adoption_path = _menu_choice(
            "\nPhase A — Adoption path (ADR-030):",
            [
                ("greenfield", "Greenfield — empty or template repo"),
                ("arm-a", "Arm A — brownfield in-place"),
                ("arm-b", "Arm B — shell + selective migration"),
                ("strangler", "Strangler — coexist then eliminate"),
            ],
            default=profile.adoption_path,
            non_interactive=ni,
        )

    # Phase B — release authority
    if not ni:
        profile.release_state_backend = _menu_choice(
            "\nPhase B — Release state authority:",
            [
                ("sqlite", "SQLite allocator (recommended)"),
                ("legacy", "Legacy YAML semver-registry only"),
            ],
            default=profile.release_state_backend,
            non_interactive=ni,
        )
        if profile.release_state_backend == "sqlite":
            profile.release_state_import = _menu_choice(
                "  Import existing semver-registry.yaml?",
                [
                    ("auto", "Auto — import if file exists, else fresh DB"),
                    ("import", "Import from semver-registry.yaml"),
                    ("fresh", "Fresh empty release-state.db"),
                    ("legacy_yaml", "Keep legacy YAML only (no DB init)"),
                ],
                default=profile.release_state_import,
                non_interactive=ni,
            )

    # Phase C — trigger bundle
    default_bundle = "rw_ukw" if profile.rw_config.get("use_kanban", True) else "rw"
    if not ni:
        profile.trigger_bundle = _menu_choice(
            "\nPhase C — Workflow trigger bundle (.cursorrules):",
            [
                ("rw", "RW only"),
                ("rw_ukw", "RW + UKW (default when kanban enabled)"),
                ("rw_ukw_delivery", "RW + UKW + IPW/IDW/MWF delivery stubs"),
            ],
            default=profile.trigger_bundle or default_bundle,
            non_interactive=ni,
        )
    elif profile.trigger_bundle == "rw_ukw" and not profile.rw_config.get("use_kanban", True):
        profile.trigger_bundle = "rw"

    # Phase E — KMA offer (Arm B / strangler only)
    if profile.adoption_path in ("arm-b", "strangler") and not ni:
        profile.kma_offer = _menu_choice(
            "\nPhase E — KMA handoff (no auto-run):",
            [
                ("blind_l1", "Offer blind L1 KMA session (default)"),
                ("skip", "Skip KMA offer this install"),
                ("guided", "Guided KMA kit mode (when TSP detected)"),
            ],
            default=profile.kma_offer,
            non_interactive=ni,
        )

    return profile


def profile_summary_dict(profile: InstallProfile) -> Dict[str, Any]:
    d = asdict(profile)
    d.pop("rw_config", None)
    return d
