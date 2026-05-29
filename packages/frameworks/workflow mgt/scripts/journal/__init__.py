"""
RW Recovery Journal Package

Provides deterministic journaling, recovery reporting, and rollback contract
analysis for the Release Workflow (RW).

Modules:
    rw_journal        — Per-run step journaling with JSON serialization.
    recovery_report   — Human + machine-readable recovery report generation.
    rollback_contract — Automatic vs manual rollback surface analysis.

Usage:
    from journal import RWJournal, RecoveryReport, RollbackContract

    journal = RWJournal(task_id="E6:S06:T63")
    journal.start_run()
    journal.log_step("Step 2", status="success",
                     commands=["python bump_version.py"],
                     touched_files=["src/ai_dev_kit/version.py"])
    journal.finish_run(status="success")

    # On failure
    report = RecoveryReport.from_journal(journal)
    md_path, json_path = report.write()

    contract = RollbackContract.from_run(journal.run)
    print(contract.summary_markdown())
"""

from .rw_journal import RWJournal, RunEntry, StepEntry
from .recovery_report import RecoveryReport, RECOVERY_SCHEMA_VERSION
from .rollback_contract import RollbackContract, CompensationSurface

__all__ = [
    "RWJournal",
    "RunEntry",
    "StepEntry",
    "RecoveryReport",
    "RECOVERY_SCHEMA_VERSION",
    "RollbackContract",
    "CompensationSurface",
]
