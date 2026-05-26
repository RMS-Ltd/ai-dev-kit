#!/usr/bin/env bash
# Optional ECC harness install helper (FR-098 Phase 2, E6:S09:T06).
# ADK adoption does NOT require ECC. Default: --dry-run (no network, no writes except bridge copy with --copy-bridge).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WF_MGT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
REPO_ROOT="$(cd "${WF_MGT}/../../.." && pwd)"
BRIDGE_TEMPLATE="${WF_MGT}/config/ecc-adk-bridge.yaml.template"
TARGET="${ECC_INSTALL_TARGET:-cursor}"
PROFILE="${ECC_INSTALL_PROFILE:-core}"
DRY_RUN=1
COPY_BRIDGE=0

usage() {
  cat <<'EOF'
Usage: install_ecc_harness_optional.sh [options]

  --dry-run          Print planned actions only (default)
  --execute          Run npx ecc-install (requires network)
  --copy-bridge      Copy ecc-adk-bridge.yaml.template to project root if missing
  --project-root DIR Repository root (default: auto-detect from script location)

Environment:
  ECC_INSTALL_TARGET   cursor | claude | codex | opencode (default: cursor)
  ECC_INSTALL_PROFILE  npm profile name (default: core; GitHub ECC may use minimal)

See: docs/documentation/user-docs/ecc-adk-integration-cheatsheet.md
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=1; shift ;;
    --execute) DRY_RUN=0; shift ;;
    --copy-bridge) COPY_BRIDGE=1; shift ;;
    --project-root)
      REPO_ROOT="$(cd "$2" && pwd)"
      shift 2
      ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $1" >&2; usage; exit 2 ;;
  esac
done

if [[ ! -f "${BRIDGE_TEMPLATE}" ]]; then
  echo "ERROR: bridge template not found: ${BRIDGE_TEMPLATE}" >&2
  exit 2
fi

BRIDGE_DEST="${REPO_ROOT}/ecc-adk-bridge.yaml"
INSTALL_CMD=(npx -p ecc-universal ecc-install --target "${TARGET}" --profile "${PROFILE}" --without baseline:hooks)

echo "install_ecc_harness_optional: repo=${REPO_ROOT}"
echo "  bridge_template=${BRIDGE_TEMPLATE}"

if [[ "${COPY_BRIDGE}" -eq 1 ]]; then
  if [[ -f "${BRIDGE_DEST}" ]]; then
    echo "  bridge: ${BRIDGE_DEST} already exists (skip copy)"
  elif [[ "${DRY_RUN}" -eq 1 ]]; then
    echo "  bridge: would copy template -> ${BRIDGE_DEST}"
  else
    cp "${BRIDGE_TEMPLATE}" "${BRIDGE_DEST}"
    echo "  bridge: copied -> ${BRIDGE_DEST}"
  fi
fi

echo "  ecc_install: ${INSTALL_CMD[*]}"

if [[ "${DRY_RUN}" -eq 1 ]]; then
  echo "install_ecc_harness_optional: DRY-RUN complete (pass --execute to run ecc-install)"
  exit 0
fi

echo "WARNING: Running upstream ecc-install. Review Phase 0 procedure first." >&2
"${INSTALL_CMD[@]}"
