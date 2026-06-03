#!/usr/bin/env bash
# CI pytest gate for Workflow Management scripts (E07:S07:T02 / H1).
# Runs validation/ corpus plus curated stable co-located tests under isolated config.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../../../../.." && pwd)"
cd "$ROOT"
unset DJANGO_SETTINGS_MODULE
export PYTEST_DISABLE_PLUGIN_AUTOLOAD=1

PYTEST_INI="packages/frameworks/workflow mgt/scripts/validation/pytest.ini"
WMGT="packages/frameworks/workflow mgt/scripts"

exec python -m pytest \
  -p pytest \
  -p no:pytest_django \
  -c "$PYTEST_INI" \
  "${WMGT}/validation/" \
  "${WMGT}/test_stamp_evidence_gate.py" \
  "${WMGT}/test_stamp_authority.py" \
  "${WMGT}/kanban/test_est_format.py" \
  "${WMGT}/kanban/test_discover_perpetual_task_candidates.py" \
  "${WMGT}/version/test_task_touch_mapping.py" \
  "$@"
