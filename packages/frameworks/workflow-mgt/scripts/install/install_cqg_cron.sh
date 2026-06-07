#!/usr/bin/env bash
# Install or remove the CQG 6-hour cron monitor (FR-113 / E08:S03:T17).
# Default: --dry-run. Pass --execute to write crontab; --remove to uninstall.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WF_MGT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
REPO_ROOT="$(cd "${WF_MGT}/../../.." && pwd)"
CRON_WRAPPER="${WF_MGT}/scripts/cqg_monitor_cron.sh"
CRON_MARKER="# ai-dev-kit-cqg-monitor"
CRON_SCHEDULE="0 */6 * * *"
DRY_RUN=1
REMOVE=0

usage() {
  cat <<'EOF'
Usage: install_cqg_cron.sh [options]

  --dry-run          Show planned crontab line (default)
  --execute          Append CQG cron entry if not already present
  --remove           Remove CQG cron entry (marker: ai-dev-kit-cqg-monitor)
  --project-root DIR Repository root (default: auto-detect from script location)

Cron schedule: 0 */6 * * * (every 6 hours; see rw-config.yaml code_quality_gate.monitor_cron)

See: packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=1; REMOVE=0; shift ;;
    --execute) DRY_RUN=0; REMOVE=0; shift ;;
    --remove) DRY_RUN=0; REMOVE=1; shift ;;
    --project-root)
      REPO_ROOT="$(cd "$2" && pwd)"
      CRON_WRAPPER="${REPO_ROOT}/packages/frameworks/workflow-mgt/scripts/cqg_monitor_cron.sh"
      shift 2
      ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $1" >&2; usage; exit 2 ;;
  esac
done

if [[ ! -x "${CRON_WRAPPER}" ]]; then
  chmod +x "${CRON_WRAPPER}"
fi

CRON_LINE="${CRON_SCHEDULE} ${CRON_WRAPPER} ${CRON_MARKER}"

list_crontab() {
  if crontab -l >/dev/null 2>&1; then
    crontab -l
  fi
}

has_entry() {
  list_crontab | grep -Fq "${CRON_MARKER}" 2>/dev/null
}

if [[ "${REMOVE}" -eq 1 ]]; then
  if ! has_entry; then
    echo "install_cqg_cron: no CQG entry found (${CRON_MARKER}); nothing to remove"
    exit 0
  fi
  if [[ "${DRY_RUN}" -eq 1 ]]; then
    echo "install_cqg_cron: DRY-RUN would remove line matching ${CRON_MARKER}"
    list_crontab | grep -F "${CRON_MARKER}" || true
    exit 0
  fi
  list_crontab | grep -Fv "${CRON_MARKER}" | crontab -
  echo "install_cqg_cron: removed CQG cron entry"
  exit 0
fi

echo "install_cqg_cron: repo=${REPO_ROOT}"
echo "  wrapper=${CRON_WRAPPER}"
echo "  schedule=${CRON_SCHEDULE}"
echo "  log=${REPO_ROOT}/.cqg/monitor.log"

if has_entry; then
  echo "install_cqg_cron: CQG cron already installed:"
  list_crontab | grep -F "${CRON_MARKER}" || true
  exit 0
fi

echo "  planned_line=${CRON_LINE}"

if [[ "${DRY_RUN}" -eq 1 ]]; then
  echo "install_cqg_cron: DRY-RUN complete (pass --execute to install)"
  exit 0
fi

if ! command -v codeql >/dev/null 2>&1; then
  echo "WARNING: codeql not on PATH — monitor runs will fail until CodeQL CLI is installed." >&2
  echo "  Install: brew install codeql  (or set code_quality_gate.codeql_command in rw-config.yaml)" >&2
fi

( list_crontab; echo "${CRON_LINE}" ) | crontab -
echo "install_cqg_cron: installed. Verify with: crontab -l | grep cqg"
