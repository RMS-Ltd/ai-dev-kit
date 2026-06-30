#!/usr/bin/env python3
"""Generate pass-3 TARGET-EST-TREE.md from operator source + overlay rules."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OPERATOR = ROOT.parent / "attempt-10/operator-rework-archive/OPERATOR-REWORKED-EST-TREE.md"
OUT = ROOT / "TARGET-EST-TREE.md"

TASK_RE = re.compile(r"^- \*\*(E\d+:S\d+:T\d+)\*\* — (.+)$", re.M)


def load_tasks(path: Path) -> dict[str, str]:
    raw: dict[str, str] = {}
    for m in TASK_RE.finditer(path.read_text()):
        tid, title = m.group(1), m.group(2)
        if tid not in raw or len(title) > len(raw[tid]):
            raw[tid] = title
    return raw


DROP = {
    "E38:S07:T01", "E38:S07:T02", "E38:S07:T03", "E38:S07:T04",
    "E38:S07:T05", "E38:S07:T06", "E38:S07:T07",
    "E37:S09:T01", "E37:S09:T02",
    "E33:S12:T01", "E33:S12:T02", "E33:S12:T03", "E33:S12:T04", "E33:S12:T05",
    "E03:S06:T01", "E06:S02:T01",
}

RETIRED = {
    # Historical attempt milestone already preserved by the attempt-10 package;
    # keeping it live would consume E02 workflow-story capacity.
    "E02:S02:T01",
}

E01_RENUMBER = {
    "E01:S01:T01": "E01:S02:T01", "E01:S01:T02": "E01:S02:T02", "E01:S01:T03": "E01:S02:T03",
    "E01:S01:T04": "E01:S02:T04", "E01:S01:T05": "E01:S02:T05", "E01:S01:T06": "E01:S02:T06",
    "E01:S02:T01": "E01:S01:T01", "E01:S02:T02": "E01:S01:T02", "E01:S02:T03": "E01:S01:T03",
    "E01:S02:T04": "E01:S01:T04", "E01:S02:T05": "E01:S01:T05", "E01:S02:T06": "E01:S01:T06",
    "E01:S02:T07": "E01:S01:T07",
}

# Pass-3 M04 context slots — no sourced titles; pruned from live TSP (operator decision).
PRUNE_M04 = frozenset({
    *(f"E30:S08:T{i:02d}" for i in range(1, 5)),
    *(f"E32:S05:T{i:02d}" for i in range(5, 10)),
    "E32:S06:T01",
    "E32:S07:T01",
    "E34:S04:T07",
    "E34:S06:T04",
    "E34:S06:T05",
    "E34:S06:T06",
    "E35:S02:T08",
    "E35:S02:T09",
    "E35:S02:T10",
    "E38:S04:T07",
    *(f"E34:S01:T{i:02d}" for i in range(10, 31)),
})

# Semantic display homes (native token preserved; M03 exception documented in PASS-3)
CONTAMINATION = [
    "E01:S03:T05", "E02:S01:T01", "E02:S01:T04", "E02:S01:T05", "E02:S02:T02",
    "E03:S01:T01", "E03:S01:T02", "E03:S01:T03",
    "E03:S05:T01", "E03:S05:T02", "E03:S05:T03", "E03:S05:T04", "E03:S05:T05",
    "E05:S01:T06", "E05:S02:T01", "E05:S03:T01", "E05:S03:T02",
    "E35:S02:T01", "E35:S02:T02", "E35:S02:T03",
]

CONTAMINATION_SECTION = {
    "E01:S03:T05": "E30:S04", "E02:S01:T01": "E30:S04", "E02:S01:T04": "E30:S04",
    "E02:S01:T05": "E30:S04", "E02:S02:T02": "E30:S04",
    "E03:S01:T01": "E30:S08", "E03:S01:T03": "E30:S08", "E03:S01:T02": "E34:S01",
    "E03:S05:T01": "E33:S10", "E03:S05:T02": "E33:S10", "E03:S05:T03": "E33:S10",
    "E03:S05:T04": "E38:S04", "E03:S05:T05": "E34:S05",
    "E05:S01:T06": "E34:S03", "E05:S02:T01": "E30:S04", "E05:S03:T01": "E30:S04",
    "E05:S03:T02": "E30:S04",
    "E35:S02:T01": "E06:S02", "E35:S02:T02": "E06:S02", "E35:S02:T03": "E06:S02",
}

RENAMES = {
    "E30:S04:T01": ("E35:S02:T11", "Implement turn counter"),
    "E31:S03:T01": ("E30:S04:T01", "Clear movement path visualization"),
}

GENERATED = {
    # E36:S06 was injected from epic body headers in the pass-2 TSP but is not
    # present as task rows in the operator source.
    "E36:S06:T01": "*Add StarSystem Properties (Temperature, Mineral Density)*",
    "E36:S06:T02": "*Update Galaxy Generator to Assign Temperature and Mineral Density*",
    "E36:S06:T03": "*Create SensorReport Data Model*",
    "E36:S06:T04": "*Create ScannerService for Scan Capability Calculation*",
    "E36:S06:T05": "*Implement Scan Report Generation*",
    "E36:S06:T06": "*Update Notification Model to Support Sensor Reports*",
    "E36:S06:T07": "*Integrate Scanner Service with Ship Arrival Logic*",
    "E36:S06:T08": "*Update UI to Display Sensor Report Details*",
    "E36:S06:T09": "*Add Mineral Quantities to Scan Reports*",
    "E36:S06:T10": "*Express Planet Temperature in Degrees Celsius*",
    "E36:S06:T11": "*Add Colonization Suitability Percentage to Scan Reports*",
    # Optional follow-up: fan out E36 shells into concrete design/implementation
    # tasks using the shell titles as the source of truth.
    "E36:S01:T01": "*Capture sensor visibility requirements*",
    "E36:S01:T02": "*Define sensor range and visibility rules matrix*",
    "E36:S01:T03": "*Document fog-of-war player expectations*",
    "E36:S02:T01": "*Implement sensor range formula*",
    "E36:S02:T02": "*Apply component and environment modifiers to sensor range*",
    "E36:S02:T03": "*Add sensor range calculation tests*",
    "E36:S03:T01": "*Implement ownership-aware ship visibility states*",
    "E36:S03:T02": "*Resolve ship contacts from sensor coverage*",
    "E36:S03:T03": "*Add hidden/contacted/visible ship state tests*",
    "E36:S04:T01": "*Render sensor range overlay on the map*",
    "E36:S04:T02": "*Add overlay styling for range boundaries*",
    "E36:S04:T03": "*Add sensor overlay rendering tests*",
    "E36:S05:T01": "*Add HUD toggle for sensor overlay*",
    "E36:S05:T02": "*Persist sensor overlay preference*",
    "E36:S07:T01": "*Define alliance relationship states*",
    "E36:S07:T02": "*Define diplomacy interaction rules*",
    "E36:S08:T01": "*Create alliance data model*",
    "E36:S08:T02": "*Add alliance serialization and persistence*",
    "E36:S09:T01": "*Implement allied intel sharing rules*",
    "E36:S09:T02": "*Share visibility data with allies*",
    "E36:S10:T01": "*Create alliance management UI*",
    "E36:S10:T02": "*Display diplomacy and alliance status in HUD*",
}

ARCHIVE_SECTION = {
    "E01:S07:T01": "E30:S04",
    "E01:S07:T02": "E37:S09",
    "E01:S07:T03": "E37:S09",
    "E01:S07:T04": "E34:S05",
    "E01:S07:T05": "E03:S01",
    "E01:S07:T06": "E37:S09",
    "E01:S07:T07": "E37:S09",
    "E01:S07:T08": "E37:S09",
    "E01:S07:T09": "E37:S09",
    "E01:S07:T10": "E33:S08",
    "E01:S07:T11": "E33:S08",
    "E01:S07:T12": "E32:S02",
    "E01:S07:T13": "E37:S09",
    "E01:S07:T14": "E37:S09",
    "E01:S07:T15": "E38:S04",
    "E01:S07:T16": "E33:S08",
    "E01:S07:T17": "E34:S12",
    "E01:S07:T18": "E37:S09",
    "E01:S07:T19": "E33:S08",
    "E01:S07:T20": "E37:S09",
    "E01:S07:T21": "E37:S09",
    "E01:S07:T22": "E33:S08",
    "E01:S07:T23": "E03:S01",
    "E01:S07:T24": "E33:S07",
}


def transform_registry(src: dict[str, str]) -> dict[str, str]:
    reg: dict[str, str] = {}
    for tid, title in src.items():
        if tid in RETIRED or tid in PRUNE_M04:
            continue
        if tid in DROP:
            continue
        if tid in RENAMES:
            continue
        nt = E01_RENUMBER.get(tid)
        if nt:
            reg[nt] = title
            continue
        if tid.startswith("E08:"):
            reg[tid.replace("E08:", "E41:", 1)] = title
            continue
        reg[tid] = title
    for old, (new, title) in RENAMES.items():
        if old in src and new not in reg:
            reg[new] = src.get(old, title)
    reg.update(GENERATED)
    return reg


def line(tid: str, title: str, note: str = "") -> str:
    suffix = f" · {note}" if note else ""
    return f"- **{tid}** — {title}{suffix}"


def story_block(header: str, tids: list[str], reg: dict[str, str], notes: dict[str, str] | None = None) -> list[str]:
    notes = notes or {}
    rows = [line(tid, reg[tid], notes.get(tid, "")) for tid in tids if tid in reg]
    if not rows:
        return []
    return [header, *rows, ""]


def main() -> None:
    src = load_tasks(OPERATOR)
    reg = transform_registry(src)

    # Build section -> task list (display grouping)
    section_tasks: dict[str, list[str]] = {}

    def add(section: str, tid: str) -> None:
        if tid in reg:
            section_tasks.setdefault(section, []).append(tid)

    # --- explicit canonical layout ---
    for tid in [f"E01:S01:T{i:02d}" for i in range(1, 8)]:
        add("E01:S01", tid)
    for tid in [f"E01:S02:T{i:02d}" for i in range(1, 7)]:
        add("E01:S02", tid)
    for tid in [f"E01:S03:T0{i}" for i in range(1, 5)]:
        add("E01:S03", tid)
    add("E02:S01", "E02:S01:T06")

    for tid in ["E04:S01:T01", "E04:S01:T02"]:
        add("E04:S01", tid)

    for tid in [
        "E05:S01:T00", "E05:S01:T01", "E05:S01:T02", "E05:S01:T03", "E05:S01:T04",
        "E05:S01:T05", "E05:S01:T07", "E05:S01:T08", "E05:S01:T09", "E05:S01:T10",
    ]:
        add("E05:S01", tid)

    add("E06:S01", "E06:S01:T01")
    add("E06:S01", "E06:S01:T02")
    for tid in ["E35:S02:T01", "E35:S02:T02", "E35:S02:T03"]:
        add("E06:S02", tid)

    for tid in ["E07:S01:T01", "E07:S01:T02"]:
        add("E07:S01", tid)

    add("E30:S04", "E30:S04:T01")
    for tid in [f"E30:S08:T{i:02d}" for i in range(1, 5)]:
        add("E30:S08", tid)

    add("E32:S02", "E32:S02:T01")
    for tid in [f"E32:S03:T{i:02d}" for i in range(1, 4)]:
        add("E32:S03", tid)
    for tid in [f"E32:S04:T{i:02d}" for i in range(1, 4)]:
        add("E32:S04", tid)
    for tid in [f"E32:S05:T{i:02d}" for i in range(1, 10)]:
        add("E32:S05", tid)
    add("E32:S06", "E32:S06:T01")
    add("E32:S07", "E32:S07:T01")

    for tid in [f"E33:S07:T{i:02d}" for i in range(1, 8)]:
        add("E33:S07", tid)
    for tid in [f"E33:S08:T{i:02d}" for i in range(1, 8)]:
        add("E33:S08", tid)
    for tid in [f"E33:S09:T0{i}" for i in range(1, 10)]:
        add("E33:S09", tid)
    for tid in [f"E33:S10:T{i:02d}" for i in range(1, 11)]:
        add("E33:S10", tid)

    for tid in [f"E34:S01:T{i:02d}" for i in range(1, 31)]:
        add("E34:S01", tid)
    for tid in [f"E34:S02:T{i:02d}" for i in range(1, 8)]:
        add("E34:S02", tid)
    for tid in [f"E34:S03:T{i:02d}" for i in range(1, 8)]:
        add("E34:S03", tid)
    for tid in [f"E34:S04:T{i:02d}" for i in range(1, 11)]:
        add("E34:S04", tid)
    for tid in [f"E34:S05:T{i:02d}" for i in range(1, 19)]:
        add("E34:S05", tid)
    for tid in [f"E34:S06:T0{i}" for i in range(1, 7)]:
        add("E34:S06", tid)
    for tid in [
        "E34:S07:T01", "E34:S07:T02", "E34:S07:T03", "E34:S07:T04", "E34:S07:T05",
        "E34:S07:T06", "E34:S07:T07", "E34:S07:T08", "E34:S07:T10",
    ]:
        add("E34:S07", tid)
    add("E34:S08", "E34:S08:T01")
    add("E34:S08", "E34:S08:T02")
    for tid in [f"E34:S09:T0{i}" for i in range(1, 7)]:
        add("E34:S09", tid)
    for tid in [f"E34:S10:T0{i}" for i in range(1, 7)]:
        add("E34:S10", tid)
    add("E34:S11", "E34:S11:T01")
    for tid in [f"E34:S12:T0{i}" for i in range(1, 10)]:
        add("E34:S12", tid)
    add("E34:S13", "E34:S13:T01")
    for tid in ["E34:S14:T01", "E34:S14:T02", "E34:S14:T03"]:
        add("E34:S14", tid)

    for tid in [
        "E35:S02:T04", "E35:S02:T05", "E35:S02:T06", "E35:S02:T07", "E35:S02:T11",
        "E35:S02:T08", "E35:S02:T09", "E35:S02:T10",
    ]:
        add("E35:S02", tid)

    for tid in [f"E36:S06:T{i:02d}" for i in range(1, 12)]:
        add("E36:S06", tid)
    for story in ["S01", "S02", "S03", "S04", "S05", "S07", "S08", "S09", "S10"]:
        for t in range(1, 4):
            tid = f"E36:{story}:T{t:02d}"
            add(f"E36:{story}", tid)

    add("E38:S04", "E38:S04:T07")
    add("E39:S04", "E39:S04:T01")

    for tid in [f"E40:S01:T{i:02d}" for i in range(1, 24)]:
        add("E40:S01", tid)
    for tid in [f"E40:S02:T{i:02d}" for i in range(1, 16)]:
        add("E40:S02", tid)
    for tid in [f"E40:S03:T{i:02d}" for i in range(1, 27)]:
        add("E40:S03", tid)

    for s in range(1, 6):
        for t in range(1, 7):
            tid = f"E41:S0{s}:T{t:02d}"
            if tid in reg:
                add(f"E41:S0{s}", tid)

    # contamination semantic placement
    for tid in CONTAMINATION:
        sec = CONTAMINATION_SECTION[tid]
        if tid in reg:
            if tid not in section_tasks.get(sec, []):
                add(sec, tid)
    for tid, sec in ARCHIVE_SECTION.items():
        if tid in reg and tid not in section_tasks.get(sec, []):
            add(sec, tid)

    notes = {
        "E30:S04:T01": "renumbered from `E31:S03:T01` (`E04:S09:T06`)",
        "E35:S02:T11": "renumbered from `E30:S04:T01` (`E04:S09:T06`)",
    }

    def active_sections(sections: list[str]) -> list[str]:
        return [s for s in sections if section_tasks.get(s)]

    def count_epic(sections: list[str]) -> tuple[int, int]:
        active = active_sections(sections)
        tasks = sum(len(section_tasks[s]) for s in active)
        return len(active), tasks

    parts: list[str] = []

    e01s = ["E01:S01", "E01:S02", "E01:S03"]
    s, t = count_epic(e01s)
    parts.append(f"## E01 — Repository Infrastructure & Maintenance ({s}S · {t}T)\n")
    parts += story_block("### Epic 01, Story 01: AI Dev Kit Integration (Lane B Greenfield) [E01:S01]", section_tasks.get("E01:S01", []), reg, notes)
    parts += story_block("### Epic 01, Story 02: Perpetual Operations [E01:S02]", section_tasks.get("E01:S02", []), reg, notes)
    parts += story_block("### E01:S03 – Release Versioning Hardening (Dual-Version Model) [E01:S03]", section_tasks.get("E01:S03", []), reg, notes)

    e02s = ["E02:S01"]
    s, t = count_epic(e02s)
    parts.append(f"## E02 — Workflow Management ({s}S · {t}T)\n")
    parts += story_block("### E2:S01 – Release Workflow Rw [E02:S01]", section_tasks.get("E02:S01", []), reg, notes)

    e03s = ["E03:S01"]
    s, t = count_epic(e03s)
    parts.append(f"## E03 — Kanban Framework ({s}S · {t}T)\n")
    parts += story_block("### E03:S01 – Kanban & Intake Maintenance [E03:S01]", section_tasks.get("E03:S01", []), reg, notes)

    e04s = ["E04:S01"]
    s, t = count_epic(e04s)
    parts.append(f"## E04 — Project Architecture ({s}S · {t}T)\n")
    parts += story_block("### Epic 04, Story 01: ADR Scaffold & Architecture Layout [E04:S01]", section_tasks.get("E04:S01", []), reg, notes)

    e05s = ["E05:S01"]
    s, t = count_epic(e05s)
    parts.append(f"## E05 — Documentation ({s}S · {t}T)\n")
    parts += story_block("### Epic 05, Story 01: Documentation Scaffold [E05:S01]", section_tasks.get("E05:S01", []), reg, notes)

    e06s = ["E06:S01", "E06:S02"]
    s, t = count_epic(e06s)
    parts.append(f"## E06 — Process Automation & CI/CD ({s}S · {t}T)\n")
    parts += story_block("### Epic 06, Story 01: CI/CD Pipeline Scaffold [E06:S01]", section_tasks.get("E06:S01", []), reg, notes)
    parts += story_block("### E06:S02 – CI Badge Enhancements & Repo Hygiene [E06:S02]", section_tasks.get("E06:S02", []), reg, notes)

    e07s = ["E07:S01"]
    s, t = count_epic(e07s)
    parts.append(f"## E07 — Security ({s}S · {t}T)\n")
    parts += story_block("### Epic 07, Story 01: Security Baseline [E07:S01]", section_tasks.get("E07:S01", []), reg, notes)

    e30s = ["E30:S04", "E30:S08"]
    s, t = count_epic(e30s)
    parts.append(f"## E30 — Galaxy, Map & Navigation ({s}S · {t}T)\n")
    parts += story_block("### E30:S04 – Navigation & Map Rendering [E30:S04]", section_tasks.get("E30:S04", []), reg, notes)
    parts += story_block("### E30:S08 – Galaxy & Map Features [E30:S08]", section_tasks.get("E30:S08", []), reg, notes)

    parts.append("## E31 — Ships & Fleet Movement (reserved · 0S · 0T)\n\n*(Reserved — legacy `E31:S03:T01` renumbered to `E30:S04:T01`.)*\n")

    e32s = [f"E32:S0{i}" for i in range(2, 8)]
    s, t = count_epic(e32s)
    parts.append(f"## E32 — Economy & Resources ({s}S · {t}T)\n")
    for key, hdr in [
        ("E32:S02", "### E32:S02 – Localized Resource Production [E32:S02]"),
        ("E32:S03", "### E32:S03 – Localized Consumption [E32:S03]"),
        ("E32:S04", "### E32:S04 – Entity-Local Storage Model [E32:S04]"),
        ("E32:S05", "### E32:S05 – Resource Transfer System [E32:S05]"),
        ("E32:S06", "### E32:S06 – Save/Load Localized Storage [E32:S06]"),
        ("E32:S07", "### E32:S07 – Localized Migration Tests [E32:S07]"),
    ]:
        if key in section_tasks:
            parts += story_block(hdr, section_tasks[key], reg, notes)

    e33s = ["E33:S07", "E33:S08", "E33:S09", "E33:S10"]
    s, t = count_epic(e33s)
    parts.append(f"## E33 — Colonies & Population ({s}S · {t}T)\n")
    for key, hdr in [
        ("E33:S07", "### E33:S07 – Indigenous Population Model & Data Structures [E33:S07]"),
        ("E33:S08", "### E33:S08 – Indigenous Population Taxation & Supply Generation [E33:S08]"),
        ("E33:S09", "### E33:S09 – Indigenous Population Tech Bonuses & System TL [E33:S09]"),
        ("E33:S10", "### E33:S10 – Playable Races & Archetypes [E33:S10]"),
    ]:
        parts += story_block(hdr, section_tasks.get(key, []), reg, notes)

    e34s = [f"E34:S{i:02d}" for i in range(1, 15)]
    s, t = count_epic(e34s)
    parts.append(f"## E34 — Ship Design & Construction ({s}S · {t}T)\n")
    headers = {
        "E34:S01": "### E34:S01 – Story 1: Ship Design Data Model [E34:S01]",
        "E34:S02": "### E34:S02 – Story 2: Component System & Prerequisites [E34:S02]",
        "E34:S03": "### E34:S03 – Story 3: Ship Design Manager [E34:S03]",
        "E34:S04": "### E34:S04 – Story 4: Ship Construction Integration [E34:S04]",
        "E34:S05": "### E34:S05 – Story 5: Ship Design UI [E34:S05]",
        "E34:S06": "### E34:S06 – Ai Visibility In Player Ui [E34:S06]",
        "E34:S07": "### E34:S07 – Vgap Starbase Construction Ui [E34:S07]",
        "E34:S08": "### E34:S08 – Starting Fleet Construction [E34:S08]",
        "E34:S09": "### E34:S09 – Ship Construction Resource Fixes [E34:S09]",
        "E34:S10": "### E34:S10 – Story 10: UI/UX Polish & Improvements [E34:S10]",
        "E34:S11": "### E34:S11 – Starting Conditions Improvements [E34:S11]",
        "E34:S12": "### E34:S12 – Simplify Tech System to VGAP Model [E34:S12]",
        "E34:S13": "### E34:S13 – VGAP Production Features [E34:S13]",
        "E34:S14": "### E34:S14 – Minimal VGAP Playtestable Model [E34:S14]",
    }
    for key in e34s:
        parts += story_block(headers[key], section_tasks.get(key, []), reg, notes)

    e35s = ["E35:S02"]
    s, t = count_epic(e35s)
    parts.append(f"## E35 — Warfare, AI & Turn Loop ({s}S · {t}T)\n")
    parts += story_block("### E35:S02 – AI Full Gameplay Implementation & Turn Loop [E35:S02]", section_tasks.get("E35:S02", []), reg, notes)

    e36s = [f"E36:S{i:02d}" for i in range(1, 11)]
    s, t = count_epic(e36s)
    parts.append(f"## E36 — Intelligence, Sensors & Diplomacy (10S · {t}T)\n")
    for sk, label in [
        ("S01", "Design sensor range & visibility system"),
        ("S02", "Implement sensor range calculation"),
        ("S03", "Implement ship visibility rules"),
        ("S04", "Implement sensor range overlay rendering"),
        ("S05", "Integrate with HUD settings (toggle overlay)"),
    ]:
        parts += story_block(f"### E36:{sk} – {label} [E36:{sk}]", section_tasks.get(f"E36:{sk}", []), reg, notes)
    parts += story_block("### E36:S06 – Implement scanner component system and sensor reports [E36:S06]", section_tasks.get("E36:S06", []), reg, notes)
    for sk, label in [
        ("S07", "Design alliance & diplomacy system"),
        ("S08", "Implement alliance data models"),
        ("S09", "Implement intel sharing mechanics"),
        ("S10", "Implement alliance UI (formation, management)"),
    ]:
        parts += story_block(f"### E36:{sk} – {label} [E36:{sk}]", section_tasks.get(f"E36:{sk}", []), reg, notes)

    e37s = ["E37:S09"]
    s, t = count_epic(e37s)
    parts.append(f"## E37 — Session, Scenario & Starting Conditions ({s}S · {t}T)\n")
    parts += story_block("### E37:S09 – Homeworld & Session Resource Init [E37:S09]", section_tasks.get("E37:S09", []), reg, notes)

    e38s = ["E38:S04"]
    s, t = count_epic(e38s)
    parts.append(f"## E38 — Player UI & Experience ({s}S · {t}T)\n")
    parts += story_block("### E38:S04 – Rich Ship Screen [E38:S04]", section_tasks.get("E38:S04", []), reg, notes)

    e39s = ["E39:S04"]
    s, t = count_epic(e39s)
    parts.append(f"## E39 — Game Balance Platform ({s}S · {t}T)\n")
    parts += story_block("### E39:S04 – Story 4 [E39:S04]", section_tasks.get("E39:S04", []), reg, notes)

    e40s = ["E40:S01", "E40:S02", "E40:S03"]
    s, t = count_epic(e40s)
    parts.append(f"## E40 — Narrative & Races ({s}S · {t}T)\n")
    parts += story_block("### E40:S01 – Story 1: Productivity Efficiency & Happiness System Design [E40:S01]", section_tasks.get("E40:S01", []), reg, notes)
    parts += story_block("### E40:S02 – Story 2: Extreme Race System Implementation [E40:S02]", section_tasks.get("E40:S02", []), reg, notes)
    parts += story_block("### E40:S03 – Story 3: Computational Research & Empirical Validation [E40:S03]", section_tasks.get("E40:S03", []), reg, notes)

    e41s = [f"E41:S0{i}" for i in range(1, 6)]
    s, t = count_epic(e41s)
    parts.append(f"## E41 — UAT & Playability ({s}S · {t}T)\n")
    for i, title in enumerate([
        "UAT Blocker Resolution", "Playability Audit", "UX Usability Testing",
        "Balance Economics Audit", "UAT Synthesis & Release Readiness",
    ], 1):
        parts += story_block(f"### E41:S0{i} – {title} [E41:S0{i}]", section_tasks.get(f"E41:S0{i}", []), reg, notes)

    all_ids = sorted(reg.keys())
    unresolved = sum(1 for t in all_ids if "(unresolved" in reg[t])

    preamble = f"""---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T11:35:43Z
expires_at: null
housekeeping_policy: keep
---

# starborn_legacy — Target E/S/T tree (TSP)

**Role:** Canonical structural target for KMA guided mode and attempt-11+ scoring.  
**Overlay:** v2026-06-25 pass 3 per [OPTIMISED-SBL-KANBAN-STRUCTURE.md](OPTIMISED-SBL-KANBAN-STRUCTURE.md) (`E04:S09:T06`).  
**Source:** Deduped from [`OPERATOR-REWORKED-EST-TREE.md`](../attempt-10/operator-rework-archive/OPERATOR-REWORKED-EST-TREE.md).

| Metric | Count |
|--------|------:|
| Unique tasks (`E:S:T`) | {len(all_ids)} |
| Named titles | {len(all_ids) - unresolved} ({100*(len(all_ids)-unresolved)/len(all_ids):.1f}%) |
| Unresolved titles | {unresolved} |
| M04 pass-3 context slots (pruned) | {len(PRUNE_M04)} |
| Epic bands | 19 |

**Rules applied:**
- One row per native `E:S:T` (16 duplicate cross-epic rows dropped; see [PASS-3-REDISTRIBUTION.md](PASS-3-REDISTRIBUTION.md)).
- Retired historical attempt milestone `E02:S02:T01` from the live TSP; attempt-10 evidence remains in the attempt archive.
- Pruned {len(PRUNE_M04)} pass-3 M04 context slots with no sourced titles (no corpus enrichment planned).
- Display grouping may place native tokens under semantic story sections (pass 3); aliases in [TARGET-EST-ALIASES.md](TARGET-EST-ALIASES.md).
- Renumber executed: `E31:S03:T01`→`E30:S04:T01`; legacy `E30:S04:T01`→`E35:S02:T11`; `E08`→`E41` UAT; E01:S01↔S02 swap.
- **Optional follow-ups applied:** E36 shell fan-out, E36:S06 restoration, and E01:S07 archive redistribution.
- **`E01:S99` cleared** (pass 3 complete).

---

"""
    OUT.write_text(preamble + "\n".join(parts))
    print(
        f"tasks={len(all_ids)} pruned_m04={len(PRUNE_M04)} "
        f"unresolved={unresolved} dropped={len(DROP)}"
    )


if __name__ == "__main__":
    main()
