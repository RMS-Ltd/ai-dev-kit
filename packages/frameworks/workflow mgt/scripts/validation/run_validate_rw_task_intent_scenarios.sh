#!/usr/bin/env bash
# Manual regression scenarios for validate_rw_task_intent.py (BR-056).
# Run from repo root: bash "packages/frameworks/workflow mgt/scripts/validation/run_validate_rw_task_intent_scenarios.sh"
set -euo pipefail
# validation -> scripts -> workflow mgt -> frameworks -> packages -> repo root (5 levels)
ROOT="$(cd "$(dirname "$0")/../../../../.." && pwd)"
cd "$ROOT"
PY=python3
VW="$ROOT/packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py"
TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT
cat >"$TMP" <<'EOF'
VERSION_RC = 0
VERSION_EPIC = 6
VERSION_STORY = 6
VERSION_TASK = 998
VERSION_BUILD = 1
VERSION_STRING = "0.6.6.998+1"
EOF

echo "== 1. Story typo: E6S5T56 vs version 6,6,998 in temp file (story mismatch) =="
if $PY "$VW" --requested E6S5T56 --version-file "$TMP"; then echo FAIL; exit 1; fi
echo OK exit non-zero

echo "== 2. New-task path: version T998, request T999 (Story 006 max completed is T999) =="
$PY "$VW" --requested E6S06T999 --version-file "$TMP"
echo OK

echo "== 3. RW -k exemption: wrong epic in version, E7S1T1 + rw-k =="
$PY "$VW" --requested E7S01T01 --mode rw-k --version-file "$TMP"
echo OK

echo "== 4. --art adoption in regular mode: wrong epic still proceeds =="
$PY "$VW" --requested E7S01T01 --art --version-file "$TMP"
echo OK

echo "All scenarios passed."
