#!/usr/bin/env bash
# Optional local upstream doc reminder — copy to YOUR repository
#
# Suggested path: scripts/check-upstream-docs.sh
# ai-dev-kit does not execute this script in CI for the kit repo.
#
# Usage:
#   ./check-upstream-docs.sh          # print reminder
#   ./check-upstream-docs.sh --check  # HEAD request on default URLs (needs curl)

set -euo pipefail

URLS=(
  "https://github.com/othneildrew/Best-README-Template"
  "https://keepachangelog.com/"
  "https://shields.io/"
)

usage() {
  cat <<'EOF'
Usage: check-upstream-docs.sh [--help|--check]

  (no args)  Print review reminder for DEPENDENCIES.md / upstream register
  --check    curl -fsI each default upstream URL (exit non-zero on failure)
  --help     Show this message

Copy from ai-dev-kit: docs/documentation/user-docs/examples/adopter-upstream-check.sh
EOF
}

mode="remind"
case "${1:-}" in
  --help|-h) usage; exit 0 ;;
  --check) mode="check" ;;
  "") ;;
  *) echo "Unknown option: $1" >&2; usage >&2; exit 2 ;;
esac

echo "Upstream documentation review (host project responsibility)"
echo "Update your register (e.g. DEPENDENCIES.md) after reviewing:"
for u in "${URLS[@]}"; do
  echo "  - $u"
done

if [[ "$mode" == "check" ]]; then
  if ! command -v curl >/dev/null 2>&1; then
    echo "error: curl required for --check" >&2
    exit 1
  fi
  for u in "${URLS[@]}"; do
    echo "Checking $u ..."
    curl -fsI -o /dev/null "$u"
  done
  echo "All default URLs responded."
fi
