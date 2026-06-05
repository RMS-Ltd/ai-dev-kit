"""Unit tests for forensic_log (FR-059)."""



from journal.forensic_log import (
    MAX_IO_BYTES,
    AtomicCommandRecord,
    redact_env,
    required_record_fields,
    run_subprocess_logged,
)


class TestForensicLog:
    def test_run_subprocess_logged_captures_argv_and_exit_code(self):
        result, record = run_subprocess_logged(
            ["python3", "-c", "print('ok')"],
        )
        assert result.returncode == 0
        assert "python3" in record.argv[0]
        assert record.exit_code == 0
        assert "ok" in record.stdout

    def test_stderr_truncation(self):
        n = MAX_IO_BYTES + 1000
        result, record = run_subprocess_logged(
            ["python3", "-c", f"import sys; sys.stderr.write('x' * {n})"],
        )
        assert len(record.stderr) <= MAX_IO_BYTES + 64

    def test_redact_env_masks_secrets(self):
        env = redact_env({"GITHUB_TOKEN": "secret", "PATH": "/usr/bin"})
        assert env["GITHUB_TOKEN"] == "[REDACTED]"
        assert env["PATH"] == "/usr/bin"

    def test_required_record_fields_complete(self):
        fields = required_record_fields()
        record = AtomicCommandRecord(
            timestamp="2026-05-30T00:00:00Z",
            argv=["echo"],
            exit_code=0,
            duration_ms=1.0,
        )
        data = record.to_dict()
        for name in fields:
            assert name in data
