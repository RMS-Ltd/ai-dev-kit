#!/usr/bin/env python3
"""One-shot S16 perpetual-only consolidation (semantic scatter).

See docs/implementation-cycles/IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md
"""
from __future__ import annotations

import re
import shutil
from pathlib import Path

REPO = Path(__file__).resolve().parents[5]
KANBAN = REPO / "docs" / "kanban" / "epics"
S16 = KANBAN / "epic-02" / "story-16-perpetual-ongoing-workflow-operations"

FINITE_MOVES: list[tuple[str, str, str, str]] = [
    # (old_rel_under_s16, new_rel_under_kanban/epics, old_est, new_est)
    (
        "T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md",
        "epic-02/story-15-ipw-governance-and-publication-contract/T09-establish-canonical-perpetual-ongoing-tasks-story-fr088.md",
        "E02:S16:T01",
        "E02:S15:T09",
    ),
    (
        "T02-inventory-and-classify-workflow-perpetual-tasks.md",
        "epic-02/story-15-ipw-governance-and-publication-contract/T10-inventory-and-classify-workflow-perpetual-tasks.md",
        "E02:S16:T02",
        "E02:S15:T10",
    ),
    (
        "T06-ukw-optional-reprioritization-rp-flag-fr085.md",
        "epic-04/story-14-kanban-framework-maintenance/T05-ukw-optional-reprioritization-rp-flag-fr085.md",
        "E02:S16:T06",
        "E04:S14:T05",
    ),
    (
        "T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md",
        "epic-04/story-14-kanban-framework-maintenance/T06-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md",
        "E02:S16:T07",
        "E04:S14:T06",
    ),
    (
        "T08-ukw-slash-command-claude-code-fr093.md",
        "epic-02/story-03-additional-workflows-and-examples/T07-ukw-slash-command-claude-code-fr093.md",
        "E02:S16:T08",
        "E02:S03:T07",
    ),
    (
        "T09-ipw-slash-command-claude-code-fr094.md",
        "epic-02/story-15-ipw-governance-and-publication-contract/T11-ipw-slash-command-claude-code-fr094.md",
        "E02:S16:T09",
        "E02:S15:T11",
    ),
    (
        "T11-ipw-documentation-phases-update-create-and-housing-fr096.md",
        "epic-02/story-15-ipw-governance-and-publication-contract/T12-ipw-documentation-phases-update-create-and-housing-fr096.md",
        "E02:S16:T11",
        "E02:S15:T12",
    ),
    (
        "T12-ipw-adr-necessity-checklist-fr100.md",
        "epic-02/story-15-ipw-governance-and-publication-contract/T13-ipw-adr-necessity-checklist-fr100.md",
        "E02:S16:T12",
        "E02:S15:T13",
    ),
    (
        "T13-br059-ukw-moscow-full-story-task-coverage.md",
        "epic-04/story-14-kanban-framework-maintenance/T07-br059-ukw-moscow-full-story-task-coverage.md",
        "E02:S16:T13",
        "E04:S14:T07",
    ),
    (
        "T14-ukw-gap-discovery-unfiled-fr-br-fr043.md",
        "epic-04/story-14-kanban-framework-maintenance/T11-ukw-gap-discovery-unfiled-fr-br-fr043.md",
        "E02:S16:T14",
        "E04:S14:T11",
    ),
    (
        "T15-workflow-initiation-cheatsheet-uxr015.md",
        "epic-02/story-01-rw-agent-execution-and-docs/T26-workflow-initiation-cheatsheet-uxr015.md",
        "E02:S16:T15",
        "E02:S01:T26",
    ),
    (
        "T16-ukw-archive-completed-board-rows-fr102.md",
        "epic-04/story-14-kanban-framework-maintenance/T08-ukw-archive-completed-board-rows-fr102.md",
        "E02:S16:T16",
        "E04:S14:T08",
    ),
    (
        "T17-agent-bootstrap-and-task-routing-fr103.md",
        "epic-02/story-01-rw-agent-execution-and-docs/T27-agent-bootstrap-and-task-routing-fr103.md",
        "E02:S16:T17",
        "E02:S01:T27",
    ),
    (
        "T18-ukw-lean-active-board-contract-fr109.md",
        "epic-04/story-14-kanban-framework-maintenance/T09-ukw-lean-active-board-contract-fr109.md",
        "E02:S16:T18",
        "E04:S14:T09",
    ),
    (
        "T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md",
        "epic-02/story-01-rw-agent-execution-and-docs/T28-rw-dpz-short-flag-doc-policy-zero-uxr022.md",
        "E02:S16:T19",
        "E02:S01:T28",
    ),
    (
        "T20-restore-kboard-ipp-segment-uxr023.md",
        "epic-04/story-14-kanban-framework-maintenance/T10-restore-kboard-ipp-segment-uxr023.md",
        "E02:S16:T20",
        "E04:S14:T10",
    ),
    (
        "T21-rw-local-release-default-no-push-uxr024.md",
        "epic-02/story-01-rw-agent-execution-and-docs/T29-rw-local-release-default-no-push-uxr024.md",
        "E02:S16:T21",
        "E02:S01:T29",
    ),
    (
        "T22-implementation-delivery-workflow-idw-fr118.md",
        "epic-02/story-03-additional-workflows-and-examples/T08-implementation-delivery-workflow-idw-fr118.md",
        "E02:S16:T22",
        "E02:S03:T08",
    ),
    (
        "T23-cqg-gate-relocation-to-idw-phase-6b-adr022.md",
        "epic-08/story-03-automation-scripts/T18-cqg-gate-relocation-to-idw-phase-6b-adr022.md",
        "E02:S16:T23",
        "E08:S03:T18",
    ),
]

PERPETUAL_RENUMBER: list[tuple[str, str, str, str]] = [
    # (old_file, new_file, old_est, new_est)
    (
        "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md",
        "T01-workflow-maintenance-perpetual.md",
        "E02:S16:T03",
        "E02:S16:T01",
    ),
    (
        "T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md",
        "T02-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md",
        "E02:S16:T04",
        "E02:S16:T02",
    ),
    (
        "T05-markdown-documentation-maintenance-perpetual.md",
        "T03-markdown-documentation-maintenance-perpetual.md",
        "E02:S16:T05",
        "E02:S16:T03",
    ),
    (
        "T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md",
        "T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md",
        "E02:S16:T10",
        "E02:S16:T04",
    ),
]

STRAY_ABSORB: list[tuple[str, str, str, str]] = [
    (
        "epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md",
        "story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md",
        "E08:S03:T15",
        "E02:S16:T05",
    ),
    (
        "epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md",
        "story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md",
        "E08:S03:T16",
        "E02:S16:T06",
    ),
]

EST_CROSS_REFS = [
    ("E02:S16:T03", "E02:S16:T01"),
    ("E02:S16:T04", "E02:S16:T02"),
    ("E02:S16:T05", "E02:S16:T03"),
    ("E02:S16:T10", "E02:S16:T04"),
    ("E08:S03:T15", "E02:S16:T05"),
    ("E08:S03:T16", "E02:S16:T06"),
    ("E07:S01:T05", "E02:S16:T03"),
    ("E2:S16:T03", "E02:S16:T01"),
    ("E2:S16:T04", "E02:S16:T02"),
    ("E2:S16:T05", "E02:S16:T03"),
]


def replace_est(text: str, old: str, new: str) -> str:
    text = text.replace(old, new)
    # E2:S16 vs E02:S16 padded forms
    old_u = old.replace("E02:", "E2:").replace("E04:", "E4:").replace("E08:", "E8:")
    new_u = new.replace("E02:", "E2:").replace("E04:", "E4:").replace("E08:", "E8:")
    if old_u != old:
        text = text.replace(old_u, new_u)
    # Code forms E02S16T03
    old_code = old.replace(":", "").replace("E02", "E02").replace("E04", "E04")
    new_code = new.replace(":", "")
    old_code = re.sub(r"E(\d+):S(\d+):T(\d+)", r"E\1S\2T\3", old)
    new_code = re.sub(r"E(\d+):S(\d+):T(\d+)", r"E\1S\2T\3", new)
    text = text.replace(old_code, new_code)
    return text


def stub_body(old_est: str, new_est: str, new_path_from_kanban: str) -> str:
    return f"""---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# SUPERSEDED — {old_est}

**Historical Anchor:** {old_est}
**Canonical task:** [{new_est}]({new_path_from_kanban})

This document is a redirect stub after S16 perpetual-only consolidation (IPP-E02S16T24). Do not file new work here.
"""


def move_finite(old_name: str, new_rel: str, old_est: str, new_est: str) -> None:
    src = S16 / old_name
    dst = KANBAN / new_rel
    if not src.exists():
        print(f"SKIP missing {src}")
        return
    dst.parent.mkdir(parents=True, exist_ok=True)
    content = src.read_text(encoding="utf-8")
    content = replace_est(content, old_est, new_est)
    content = content.replace(
        "story-16-perpetual-ongoing-workflow-operations/",
        Path(new_rel).parent.as_posix() + "/",
    )
    if "**Historical Anchor:**" not in content:
        content = content.replace(
            f"**Task ID:** {new_est}",
            f"**Task ID:** {new_est}\n**Historical Anchor:** {old_est}",
            1,
        )
    dst.write_text(content, encoding="utf-8")
    rel_new = "../../" + "/".join(Path(new_rel).parts[1:])  # from s16 folder
    src.write_text(stub_body(old_est, new_est, rel_new), encoding="utf-8")
    print(f"FINITE {old_est} -> {new_est}")


def renumber_perpetual(old_name: str, new_name: str, old_est: str, new_est: str) -> None:
    src = S16 / old_name
    dst = S16 / new_name
    if not src.exists():
        print(f"SKIP missing {src}")
        return
    content = src.read_text(encoding="utf-8")
    if content.startswith("# SUPERSEDED"):
        print(f"SKIP stub {src}")
        return
    content = replace_est(content, old_est, new_est)
    for o, n in EST_CROSS_REFS:
        content = replace_est(content, o, n)
    content = content.replace(old_name, new_name)
    if "**Historical Anchor:**" not in content and old_est != new_est:
        content = content.replace(
            f"**Task ID:** {new_est}",
            f"**Task ID:** {new_est}\n**Historical Anchor:** {old_est}",
            1,
        )
    dst.write_text(content, encoding="utf-8")
    src.write_text(
        stub_body(old_est, new_est, new_name),
        encoding="utf-8",
    )
    print(f"PERPETUAL {old_est} -> {new_est}")


def absorb_stray(old_rel: str, new_rel: str, old_est: str, new_est: str) -> None:
    src = KANBAN / old_rel
    dst = S16 / Path(new_rel).name
    if not src.exists():
        print(f"SKIP missing {src}")
        return
    content = src.read_text(encoding="utf-8")
    content = replace_est(content, old_est, new_est)
    content = re.sub(
        r"\*\*Perpetual Override Rationale:\*\*.*\n",
        "",
        content,
    )
    if "**Historical Anchor:**" not in content:
        content = content.replace(
            f"**Task ID:** {new_est}",
            f"**Task ID:** {new_est}\n**Historical Anchor:** {old_est}",
            1,
        )
    dst.write_text(content, encoding="utf-8")
    rel_new = f"../../epic-02/story-16-perpetual-ongoing-workflow-operations/{dst.name}"
    src.write_text(stub_body(old_est, new_est, rel_new), encoding="utf-8")
    print(f"ABSORB {old_est} -> {new_est}")


def e07_stub() -> None:
    p = KANBAN / "epic-07/story-01-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md"
    if p.exists():
        p.write_text(
            stub_body(
                "E07:S01:T05",
                "E02:S16:T03",
                "../../epic-02/story-16-perpetual-ongoing-workflow-operations/T03-markdown-documentation-maintenance-perpetual.md",
            ),
            encoding="utf-8",
        )
        print("STUB E07:S01:T05")


def main() -> None:
    for row in FINITE_MOVES:
        move_finite(*row)
    for row in reversed(PERPETUAL_RENUMBER):
        renumber_perpetual(*row)
    for row in STRAY_ABSORB:
        absorb_stray(*row)
    e07_stub()
    print("DONE")


if __name__ == "__main__":
    main()
