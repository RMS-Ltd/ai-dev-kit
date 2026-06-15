#!/usr/bin/env python3
# Mirror .github/workflows/tests.yml cli-coverage job.
# Runs repo-wide tests/ with CLI coverage via pytest-cli-cov.ini (opt-in).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
unset DJANGO_SETTINGS_MODULE
export PYTEST_DISABLE_PLUGIN_AUTOLOAD=1

_pick_python() {
  if [[ -n "${PYTHON:-}" ]]; then
    echo "$PYTHON"
    return
  fi
  local candidate
  for candidate in python3.12 python3.11 python3 python; do
    if command -v "$candidate" >/dev/null 2>&1 \
      && "$candidate" -c 'import sys; raise SystemExit(0 if sys.version_info >= (3, 11) else 1)' 2>/dev/null \
      && "$candidate" -c 'import pytest' 2>/dev/null; then
      echo "$candidate"
      return
    fi
  done
  for candidate in python3.12 python3.11 python3 python; do
    if command -v "$candidate" >/dev/null 2>&1 \
      && "$candidate" -c 'import sys; raise SystemExit(0 if sys.version_info >= (3, 11) else 1)' 2>/dev/null; then
      echo "$candidate"
      return
    fi
  done
  echo "ERROR: Python 3.11+ required; set PYTHON= to override." >&2
  exit 1
}

PY="$(_pick_python)"
if ! "$PY" -c "import pytest_cov" 2>/dev/null; then
  if ! "$PY" -m pip install -q -e ".[dev]"; then
    echo "ERROR: dev deps missing (pytest-cov); run: $PY -m pip install -e '.[dev]'" >&2
    exit 1
  fi
fi

PYTEST_PLUGINS=(-p pytest -p no:pytest_django -p pytest_cov)
if "$PY" -c "import pytest_mock" 2>/dev/null; then
  PYTEST_PLUGINS+=(-p pytest_mock)
fi

if [[ $# -gt 0 ]]; then
  TEST_TARGETS=("$@")
else
  TEST_TARGETS=(tests/)
fi

exec "$PY" -m pytest \
  "${PYTEST_PLUGINS[@]}" \
  -c pytest-cli-cov.ini \
  "${TEST_TARGETS[@]}"
