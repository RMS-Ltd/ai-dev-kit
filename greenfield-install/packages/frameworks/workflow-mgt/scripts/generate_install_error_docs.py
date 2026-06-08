#!/usr/bin/env python3
"""Render install error code appendix markdown from registry YAML (FR-108).

Boundary markers use MDX-safe JSX comments ({/* ... */}) so the troubleshooting
guide compiles in Docusaurus while remaining extractable for test_install_error_docs_sync.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from adk_install_errors import load_registry

MARKER_START = "{/* ADK-ERROR-CODES:START */}"
MARKER_END = "{/* ADK-ERROR-CODES:END */}"


def anchor_for(code: str) -> str:
    return code.lower().replace(":", "-").replace(".", "-")


def heading_id_comment(anchor: str) -> str:
    """MDX-safe explicit heading id (Docusaurus v3 mdx-comment syntax)."""
    return f"{{/* #{anchor} */}}"


def render_markdown() -> str:
    reg = load_registry()
    lines = [
        f"## Install error codes (ADK-*) {heading_id_comment('install-error-codes-adk')}",
        "",
        f"Registry version: **{reg.get('registry_version', 'unknown')}**. "
        "When install fails, copy the `ERROR [ADK-…]` line from your console "
        "together with the AI Dev Kit SemVer banner ([UXR-016](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version.md)).",
        "",
        "Canonical registry: `packages/frameworks/workflow-mgt/config/install-error-codes.yaml`.",
        "",
    ]
    codes = reg.get("codes") or {}
    for code in sorted(codes.keys()):
        entry = codes[code]
        lines.append(f"### {code} {heading_id_comment(anchor_for(code))}")
        lines.append("")
        lines.append(f"**Summary:** {entry.get('summary', '')}")
        lines.append("")
        if entry.get("symptom"):
            lines.append(f"**Symptom:** {entry['symptom']}")
            lines.append("")
        rem = entry.get("remediation") or []
        if rem:
            lines.append("**Remediation:**")
            for step in rem:
                lines.append(f"- {step}")
            lines.append("")
        see = entry.get("see_also") or []
        if see:
            lines.append(f"**See also:** {', '.join(see)}")
            lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def wrap_with_markers(body: str) -> str:
    return f"{MARKER_START}\n{body.rstrip()}\n{MARKER_END}\n"


def extract_marked_section(text: str) -> str:
    if MARKER_START not in text or MARKER_END not in text:
        raise ValueError("missing ADK error code markers in document")
    start = text.index(MARKER_START) + len(MARKER_START)
    end = text.index(MARKER_END)
    return text[start:end].strip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate install error codes markdown appendix.")
    parser.add_argument(
        "--output",
        type=Path,
        default=None,
        help="Write fragment to file (default: stdout)",
    )
    args = parser.parse_args()
    text = render_markdown()
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(text, encoding="utf-8")
        print(f"Wrote {args.output}")
    else:
        print(text, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
