#!/usr/bin/env bash
# FR-099 Phase 4: push maintainer dev tip to public earlution/ai-dev-kit (after rewire on private line).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PUBLIC_ORG="${PUBLIC_ORG:-earlution}"
PUBLIC_REPO="${PUBLIC_REPO:-ai-dev-kit}"
SOURCE_BRANCH="${SOURCE_BRANCH:-dev}"
PUBLIC_URL="https://github.com/${PUBLIC_ORG}/${PUBLIC_REPO}.git"
DRY_RUN="${DRY_RUN:-0}"

resolved="$(gh api "repos/${PUBLIC_ORG}/${PUBLIC_REPO}" -q '.full_name + " private=" + (.private|tostring)' 2>/dev/null || true)"
if [[ "$resolved" != "${PUBLIC_ORG}/${PUBLIC_REPO} private=false" ]]; then
  echo "error: ${PUBLIC_ORG}/${PUBLIC_REPO} is not public (got: ${resolved:-missing})" >&2
  exit 1
fi

TIP="$(git rev-parse "${SOURCE_BRANCH}")"
echo "sync ${TIP} -> ${PUBLIC_ORG}/${PUBLIC_REPO} (main + dev)"

if [[ "$DRY_RUN" == "1" ]]; then
  exit 0
fi

if git push "${PUBLIC_URL}" "${TIP}:main" "${TIP}:dev" --force 2>/dev/null; then
  echo "sync complete (direct push): ${PUBLIC_ORG}/${PUBLIC_REPO} @ $(git rev-parse --short "${TIP}")"
else
  echo "direct push failed (divergent history) — re-running Phase 3 bootstrap replay…" >&2
  exec "${ROOT}/scripts/fr099_bootstrap_public_ai_dev_kit.sh"
fi
