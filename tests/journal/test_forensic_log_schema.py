"""Schema validation for AtomicCommandRecord (FR-059 RF8)."""

import json

from journal.forensic_log import (
    FORENSIC_SCHEMA_VERSION,
    AtomicCommandRecord,
    required_record_fields,
)


class TestForensicLogSchema:
    def test_required_fields_present_in_to_dict(self):
        record = AtomicCommandRecord(
            timestamp="2026-05-30T00:00:00Z",
            argv=["echo", "hi"],
            exit_code=0,
            duration_ms=1.0,
        )
        data = record.to_dict()
        for field in required_record_fields():
            assert field in data, f"missing field: {field}"

    def test_schema_version_constant(self):
        record = AtomicCommandRecord(
            timestamp="2026-05-30T00:00:00Z",
            argv=["true"],
            exit_code=0,
            duration_ms=0.1,
        )
        assert record.schema_version == FORENSIC_SCHEMA_VERSION

    def test_json_round_trip_fixture(self):
        record = AtomicCommandRecord(
            timestamp="2026-05-30T00:00:00Z",
            argv=["python3", "-c", "pass"],
            exit_code=0,
            duration_ms=2.5,
            lifecycle="ephemeral",
            ttl_days=7,
            housekeeping_policy="auto-delete",
        )
        payload = json.loads(json.dumps(record.to_dict()))
        assert payload["argv"] == ["python3", "-c", "pass"]
        assert payload["housekeeping_policy"] == "auto-delete"
