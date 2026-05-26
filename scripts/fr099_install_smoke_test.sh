#!/usr/bin/env bash
# FR-099 Phase 4 (E1:S04:T07): verify public earlution/ai-dev-kit has no book/Epic-24 contamination.
set -euo pipefail

PUBLIC_REPO="${PUBLIC_REPO:-earlution/ai-dev-kit}"
PUBLIC_URL="${PUBLIC_URL:-https://github.com/${PUBLIC_REPO}.git}"
BRANCH="${BRANCH:-main}"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "==> clone ${PUBLIC_URL} (${BRANCH})"
git clone --quiet --depth 1 --branch "${BRANCH}" "${PUBLIC_URL}" "${WORK}/clone"

cd "${WORK}/clone"

fail=0
if [[ -d docs/book-proj ]]; then
  echo "FAIL: docs/book-proj present on public tree"
  fail=1
fi
if [[ -d docs/project-management/kanban/epics/Epic-24 ]]; then
  echo "FAIL: Epic-24 present on public tree"
  fail=1
fi
if grep -q 'Epic-24' docs/project-management/kanban/kboard.md 2>/dev/null; then
  echo "FAIL: kboard.md references Epic-24"
  fail=1
fi
if grep -qi 'head first' README.md 2>/dev/null; then
  echo "WARN: README mentions Head First (review manually)"
fi

if [[ -f packages/frameworks/workflow\ mgt/scripts/install_package_from_release.py ]]; then
  if grep -q "default='ai-dev-kit/ai-dev-kit'" packages/frameworks/workflow\ mgt/scripts/install_package_from_release.py; then
    echo "FAIL: install_package_from_release.py still defaults to ai-dev-kit/ai-dev-kit"
    fail=1
  fi
fi

if [[ "${fail}" -ne 0 ]]; then
  exit 1
fi

echo "PASS: public clone AC6 checks (no book-proj, no Epic-24 dir, kboard clean)"
