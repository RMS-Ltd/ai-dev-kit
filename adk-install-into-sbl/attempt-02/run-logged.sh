#!/usr/bin/env bash
# Wrap install commands: timestamp + tee to transcripts/
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
TRANSCRIPT_DIR="$ROOT/logs/ai-dev-kit/install/transcripts"
mkdir -p "$TRANSCRIPT_DIR"
LABEL="${1:?usage: run-logged.sh <label> <command...>}"
shift
STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
OUT="$TRANSCRIPT_DIR/${STAMP}-${LABEL}.txt"
{
  echo "=== $STAMP UTC | $LABEL ==="
  echo "cwd: $(pwd)"
  echo "cmd: $*"
  echo "---"
  "$@"
} 2>&1 | tee "$OUT"
echo "transcript: $OUT"
