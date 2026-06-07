#!/usr/bin/env bash
# CQG 6-hour monitor — cron-safe wrapper (PATH + repo root + log redirect).
# Installed by: packages/frameworks/workflow-mgt/scripts/install/install_cqg_cron.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/../../../.." && pwd)"

export PATH="${HOME}/.pyenv/shims:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:${PATH:-}"

resolve_python() {
  local candidates=()
  if [[ -n "${CQG_PYTHON:-}" ]]; then
    candidates+=("${CQG_PYTHON}")
  fi
  if command -v pyenv >/dev/null 2>&1; then
    local pyenv_python=""
    pyenv_python="$(pyenv which python3 2>/dev/null || true)"
    [[ -n "${pyenv_python}" ]] && candidates+=("${pyenv_python}")
  fi
  candidates+=(
    "${HOME}/.pyenv/shims/python3"
    "/opt/homebrew/bin/python3"
    "/usr/local/bin/python3"
    "/usr/bin/python3"
  )
  local candidate
  for candidate in "${candidates[@]}"; do
    [[ -x "${candidate}" ]] || continue
    if "${candidate}" -c "import yaml" 2>/dev/null; then
      echo "${candidate}"
      return 0
    fi
  done
  return 1
}

PYTHON="$(resolve_python)" || {
  echo "cqg_monitor_cron: no Python with PyYAML found. Install: pip install pyyaml (or set CQG_PYTHON)." >&2
  exit 1
}

mkdir -p "${REPO_ROOT}/.cqg"
cd "${REPO_ROOT}"

exec "${PYTHON}" "${SCRIPT_DIR}/cqg_monitor.py" >> "${REPO_ROOT}/.cqg/monitor.log" 2>&1
