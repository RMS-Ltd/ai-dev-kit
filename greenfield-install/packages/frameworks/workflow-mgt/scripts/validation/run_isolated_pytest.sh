#!/usr/bin/env bash
# Run framework validation pytest without global pytest-django (e.g. confidentia_django).
# Delegates to the CI gate runner (E07:S07:T02); pass extra args through to pytest.
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
exec bash "${SCRIPT_DIR}/run_workflow_scripts_ci_pytest.sh" "$@"
