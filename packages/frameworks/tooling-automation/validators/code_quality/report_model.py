"""Normalized finding and report models for CQG."""

from __future__ import annotations

import json
from dataclasses import asdict, dataclass, field
from enum import Enum
from typing import Any


class Severity(str, Enum):
    ERROR = "Error"
    WARNING = "Warning"
    NOTE = "Note"


class Category(str, Enum):
    RELIABILITY = "Reliability"
    MAINTAINABILITY = "Maintainability"
    UNKNOWN = "Unknown"


@dataclass(frozen=True, order=True)
class Finding:
    rule_id: str
    severity: Severity
    category: Category
    file_path: str
    start_line: int
    message: str

    def sort_key(self) -> tuple:
        return (
            self.file_path,
            self.start_line,
            self.rule_id,
            self.severity.value,
            self.message,
        )


@dataclass
class CategoryRatings:
    reliability: str
    maintainability: str


@dataclass
class CodeQualityReport:
    head_sha: str
    completed_at: str
    findings: list[Finding] = field(default_factory=list)
    ratings: CategoryRatings | None = None
    query_suite: str = "security-and-quality"
    language: str = "python"

    def counts(self) -> dict[str, int]:
        out = {"Error": 0, "Warning": 0, "Note": 0}
        for f in self.findings:
            out[f.severity.value] += 1
        return out

    def to_dict(self) -> dict[str, Any]:
        return {
            "head_sha": self.head_sha,
            "completed_at": self.completed_at,
            "query_suite": self.query_suite,
            "language": self.language,
            "counts": self.counts(),
            "ratings": asdict(self.ratings) if self.ratings else None,
            "findings": [
                {
                    "rule_id": f.rule_id,
                    "severity": f.severity.value,
                    "category": f.category.value,
                    "file_path": f.file_path,
                    "start_line": f.start_line,
                    "message": f.message,
                }
                for f in sorted(self.findings, key=lambda x: x.sort_key())
            ],
        }

    def to_json(self, indent: int = 2) -> str:
        return json.dumps(self.to_dict(), indent=indent, sort_keys=True) + "\n"

    def to_markdown(self) -> str:
        counts = self.counts()
        lines = [
            "# Code Quality Gate Summary",
            "",
            f"- **HEAD:** `{self.head_sha}`",
            f"- **Completed:** {self.completed_at}",
            f"- **Suite:** {self.query_suite} ({self.language})",
            "",
            "## Counts",
            "",
            "| Severity | Count |",
            "| -------- | ----- |",
            f"| Error | {counts['Error']} |",
            f"| Warning | {counts['Warning']} |",
            f"| Note | {counts['Note']} |",
            "",
        ]
        if self.ratings:
            lines.extend(
                [
                    "## Ratings",
                    "",
                    f"- **Reliability:** {self.ratings.reliability}",
                    f"- **Maintainability:** {self.ratings.maintainability}",
                    "",
                ]
            )
        if self.findings:
            lines.extend(["## Findings", ""])
            for f in sorted(self.findings, key=lambda x: x.sort_key()):
                lines.append(
                    f"- **{f.severity.value}** [{f.category.value}] `{f.rule_id}` "
                    f"— `{f.file_path}:{f.start_line}` — {f.message}"
                )
        else:
            lines.append("_No findings._")
        lines.append("")
        return "\n".join(lines)
