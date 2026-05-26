#!/usr/bin/env bash
# FR-099 Phase 3 (E1:S04:T06): bootstrap public earlution/ai-dev-kit from book-free genesis.
# ADR-006: orphan root at genesis SHA + cherry-pick replay (no pre-genesis objects on public remote).
set -euo pipefail

GENESIS_SHA="${GENESIS_SHA:-f21bac102}"
SOURCE_BRANCH="${SOURCE_BRANCH:-dev}"
PUBLIC_ORG="${PUBLIC_ORG:-earlution}"
PUBLIC_REPO="${PUBLIC_REPO:-ai-dev-kit}"
PUBLIC_REMOTE_NAME="${PUBLIC_REMOTE_NAME:-public}"
PUBLIC_DEFAULT_BRANCH="${PUBLIC_DEFAULT_BRANCH:-main}"
DRY_RUN="${DRY_RUN:-0}"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

if ! git cat-file -e "${GENESIS_SHA}^{commit}" 2>/dev/null; then
  echo "error: genesis commit ${GENESIS_SHA} not found" >&2
  exit 1
fi

TIP="$(git rev-parse "${SOURCE_BRANCH}")"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

git clone --quiet "$ROOT" "$WORK/bootstrap"
cd "$WORK/bootstrap"

git checkout --orphan public-bootstrap
git rm -rf . 2>/dev/null || true
git read-tree -u -m "${GENESIS_SHA}"
git commit -qm "Public ADK genesis (FR-099 Phase 3 @ ${GENESIS_SHA})"

for c in $(git rev-list --reverse "${GENESIS_SHA}".."${TIP}"); do
  if git cherry-pick "$c" >/dev/null 2>&1; then
    continue
  fi
  if git diff --cached --quiet && git diff --quiet; then
    git cherry-pick --skip >/dev/null 2>&1
    continue
  fi
  echo "error: cherry-pick failed at ${c}" >&2
  git status
  exit 1
done

if [[ -d docs/book-proj ]] || [[ -d docs/project-management/kanban/epics/Epic-24 ]]; then
  echo "error: book paths present on public-bound tree (AC4)" >&2
  exit 1
fi

PUBLIC_URL="https://github.com/${PUBLIC_ORG}/${PUBLIC_REPO}.git"
if [[ "$DRY_RUN" == "1" ]]; then
  echo "dry-run: would create/push ${PUBLIC_URL} at $(git rev-parse --short HEAD)"
  exit 0
fi

if ! gh repo view "${PUBLIC_ORG}/${PUBLIC_REPO}" >/dev/null 2>&1; then
  gh repo create "${PUBLIC_ORG}/${PUBLIC_REPO}" \
    --public \
    --description "AI Dev Kit — workflow, Kanban, and versioning frameworks for agentic development (public framework-only; book work is private)." \
    --disable-wiki
fi

# Guard: GitHub may redirect old earlution/ai-dev-kit URLs to RMS-Ltd/hf-ai-dev-kit after privatize/rename.
resolved="$(gh api "repos/${PUBLIC_ORG}/${PUBLIC_REPO}" -q '.full_name + " private=" + (.private|tostring)' 2>/dev/null || true)"
if [[ "$resolved" != "${PUBLIC_ORG}/${PUBLIC_REPO} private=false" ]]; then
  echo "error: ${PUBLIC_ORG}/${PUBLIC_REPO} is not a public repo (got: ${resolved:-missing})" >&2
  echo "error: aborting push to avoid writing bootstrap history to the private archive." >&2
  exit 1
fi

if git remote get-url "${PUBLIC_REMOTE_NAME}" >/dev/null 2>&1; then
  git remote set-url "${PUBLIC_REMOTE_NAME}" "${PUBLIC_URL}"
else
  git remote add "${PUBLIC_REMOTE_NAME}" "${PUBLIC_URL}"
fi

git push -u "${PUBLIC_REMOTE_NAME}" HEAD:"${PUBLIC_DEFAULT_BRANCH}" --force
git push "${PUBLIC_REMOTE_NAME}" HEAD:dev --force

echo "public bootstrap complete: ${PUBLIC_ORG}/${PUBLIC_REPO}"
echo "  genesis: ${GENESIS_SHA}"
echo "  tip:     $(git rev-parse --short HEAD)"
echo "  branches: ${PUBLIC_DEFAULT_BRANCH}, dev"
