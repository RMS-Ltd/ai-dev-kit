#!/usr/bin/env bash
# Run framework validation pytest without global pytest-django (e.g. confidentia_django).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../../../../.." && pwd)"
cd "$ROOT"
unset DJANGO_SETTINGS_MODULE
export PYTEST_DISABLE_PLUGIN_AUTOLOAD=1
exec python -m pytest \
  -p pytest \
  -p no:pytest_django \
  -c "packages/frameworks/workflow mgt/scripts/validation/pytest.ini" \
  "packages/frameworks/workflow mgt/scripts/validation/test_validate_whitelist_patterns.py" \
  "$@"
