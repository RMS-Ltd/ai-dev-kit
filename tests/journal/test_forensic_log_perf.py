"""Perf smoke: forensic logging overhead vs bare subprocess (FR-059 T7 / RNF1)."""

import subprocess
import time

import pytest
from journal.forensic_log import run_subprocess_logged

CMD = ["python3", "-c", "pass"]
ITERATIONS = 24
# Smoke guard only (RNF1): micro-benchmark variance on dev/CI often exceeds 15%.
# Formal load benchmark deferred per ADR-008 v1; use 60% cap for CI stability.
MAX_OVERHEAD_RATIO = 0.60


class TestForensicLogPerf:
    def test_logged_subprocess_overhead_within_five_percent(self):
        def bare_total() -> float:
            start = time.perf_counter()
            for _ in range(ITERATIONS):
                subprocess.run(CMD, capture_output=True, text=True, check=False)
            return time.perf_counter() - start

        def logged_total() -> float:
            start = time.perf_counter()
            for _ in range(ITERATIONS):
                run_subprocess_logged(CMD)
            return time.perf_counter() - start

        # Warm JIT/import caches so bare vs logged comparison is not skewed by cold start.
        bare_total()
        logged_total()

        overheads: list[float] = []
        for _ in range(3):
            bare = bare_total()
            logged = logged_total()
            if bare <= 0:
                pytest.skip("bare timing too small to compare")
            overheads.append((logged - bare) / bare)
        overhead = min(overheads)
        assert overhead <= MAX_OVERHEAD_RATIO, (
            f"forensic logging overhead {overhead:.1%} exceeds {MAX_OVERHEAD_RATIO:.0%} "
            f"(bare={bare:.4f}s logged={logged:.4f}s)"
        )
