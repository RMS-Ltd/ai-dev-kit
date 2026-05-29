---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW E7:S06:T18 — Implementation plan (UXR-007)

**Host task:** E7:S06:T18  
**Specification:** [ICW-E7S06T18-specification.md](./ICW-E7S06T18-specification.md)

---

## Ordered actions (as planned)

1. **Action:** Add pattern validation helper(s) in RW installer path collection logic for epic/story placeholders and semantic checks.  
   **Deliverable:** Early rejection of non-templated patterns with remediation guidance.

2. **Action:** Improve Kanban prompt copy with explicit “relative to kanban_root” semantics and examples based on common layouts.  
   **Deliverable:** Revised prompt/help strings for epic/story/board fields.

3. **Action:** Implement pattern match preview against selected root while collecting inputs.  
   **Deliverable:** Match count + sample paths + zero-match alternatives in interactive flow.

4. **Action:** Add/configure root propagation contract between RW installer output and Kanban installer invocation path.  
   **Deliverable:** Consistent root usage when running chained install commands.

5. **Action:** Introduce canonical end-of-run status aggregator for chained outcomes and remove contradictory completion messaging.  
   **Deliverable:** Single authoritative run-state banner.

6. **Action:** Improve `.cursorrules` existing-trigger handling with guided reconciliation message (and optional diff artifact path).  
   **Deliverable:** Reduced manual ambiguity when trigger section already exists.

7. **Action:** Add/update tests for validation, preview, propagation, and run-state messaging.  
   **Deliverable:** Regression coverage aligned to T1–T9.

## Files touched (expected)

- [`packages/frameworks/workflow mgt/scripts/install_release_workflow.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py)
- [`packages/frameworks/kanban/scripts/install_kanban_framework.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py)
- [`packages/frameworks/kanban/scripts/validate_installation.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/validate_installation.py) (if root-aware checks require updates)
- Installer user docs under `docs/documentation/user-docs/` that describe interactive configuration prompts
- Host task and UXR docs for implementation evidence after coding

## Dependency order

1. Placeholder validation and prompt semantics.
2. Match preview behaviour.
3. Cross-tool root propagation.
4. Canonical final status messaging.
5. Existing-trigger reconciliation UX.
6. Tests and docs.

---

## As-delivered notes (`v0.7.6.18+1`)

Delivered behaviour matches ordered actions **1–5** and **7** (validators, prompts, preview, root adoption, status banners, [`tests/test_install_release_workflow_patterns.py`](../../tests/test_install_release_workflow_patterns.py)).

**Action 6 (existing `.cursorrules` trigger):** Implemented as **detect duplicate RW trigger → skip append, print guidance, collect warning → PARTIAL** in [`install_release_workflow.py`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/scripts/install_release_workflow.py). An optional **diff artifact path** was not implemented; operators reconcile manually.
