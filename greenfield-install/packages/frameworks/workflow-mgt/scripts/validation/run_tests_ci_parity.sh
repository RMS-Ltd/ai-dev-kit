#!/usr/bin/env bash
# Mirror .github/workflows/tests.yml (E08:S03:T04 / BR-058).
# Isolates from operator-global pytest plugins (e.g. pytest-django / confidentia_django).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../../../../.." && pwd)"
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
  echo "ERROR: Python 3.11+ required (matches Actions tests.yml); set PYTHON= to override." >&2
  exit 1
}

PY="$(_pick_python)"
if ! "$PY" -c "import pytest" 2>/dev/null; then
  if ! "$PY" -m pip install -q -e ".[dev]"; then
    echo "ERROR: test deps missing; run: $PY -m pip install -e '.[dev]'" >&2
    exit 1
  fi
fi

PYTEST_PLUGINS=(-p pytest -p no:pytest_django)
if "$PY" -c "import pytest_cov" 2>/dev/null; then
  PYTEST_PLUGINS+=(-p pytest_cov)
fi
if "$PY" -c "import pytest_mock" 2>/dev/null; then
  PYTEST_PLUGINS+=(-p pytest_mock)
fi

exec "$PY" -m pytest \
  "${PYTEST_PLUGINS[@]}" \
  -c pytest.ini \
  tests/ \
  "$@"
