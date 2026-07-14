---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-14T13:20:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S03:T15 — Publish Main Workflow (PMW) / FR-146

**Task ID:** E02:S03:T15  
**Status:** 📋 TODO  
**Priority:** HIGH  
**Created:** 2026-07-14  
**Last updated:** 2026-07-14 (v0.2.3.15+0 — Kanban documentation setup / FR-146 intake)  
**Version:** v0.2.3.15+0  
**Version Anchor:** v0.2.3.15+0  
**Code:** E02S03T15

**Upstream:** [FR-146 — Publish Main Workflow (PMW) — move project README stamping off RW](../../../fbu/FR-146-publish-main-workflow-pmw-readme-from-rw.md)

**Planning:** —No IPP— (run `IPW E02:S03:T15` before implementation)

**Related:** [FR-122](../../../fbu/FR-122-release-workflow-architectural-contract-release-transaction.md) · [E02:S01:T30](../story-01-rw-agent-execution-and-docs/T30-rw-architectural-contract-release-transaction-fr122.md) · [UXR-024](../../../fbu/UXR-024-rw-local-release-default-no-push-batch-operator-push.md) · [ADR-031](../../../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) · [E02:S03:T09](T09-ipw-full-delivery-chain-idf-rw-fr123.md) (MWF pattern) · [E02:S03:T08](T08-implementation-delivery-workflow-idw-fr118.md) (IDW pattern) · [FR-145](../../../fbu/FR-145-canonical-workflow-synthetic-examples-corpus.md) / [T14](T14-canonical-workflow-synthetic-examples-corpus-fr145.md)

---

## Scope

Deliver **Publish Main Workflow (PMW)** and relieve RW of mandatory project README version stamping when configured for `dev`→`main` publish layouts. PMW owns adopter-facing README SemVer disclosure at the `main` publish boundary; RW remains the forensic release transaction on `dev`.

---

## Input

- [FR-146](../../../fbu/FR-146-publish-main-workflow-pmw-readme-from-rw.md)
- RW Step 5 + FR-122 README coherence language
- [ADR-031](../../../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md) display helpers
- [UXR-024](../../../fbu/UXR-024-rw-local-release-default-no-push-batch-operator-push.md) push-default pattern
- Sibling workflow packaging: `.claude/commands/{rw,idw,mwf}.md`, registry, cheatsheet

---

## Deliverable

1. **`.claude/commands/pmw.md`** + KB **publish-main** agent execution guide.
2. **Routing / cheatsheet / registry** for `PMW` / `pmw`.
3. **`rw-config.yaml` owner flag** (`readme_update_owner: rw | publish`) with ai-dev-kit default **`publish`**.
4. **RW Step 5 skip path** + coherence gate split when owner is `publish`.
5. **Publish-coherence validator** used by PMW (blocking before `--push`).
6. **readme-update skill** retarget note (PMW primary).
7. **FR-122 / RW guide** wording amend for README owner split.
8. **Greenfield mirror** if packaged paths change (FR-110).

---

## Acceptance Criteria

- [ ] **AC1:** PMW trigger + command + KB guide + cheatsheet + agent routing exist.
- [ ] **AC2:** `readme_update_owner: publish` → RW does not mutate project README version surfaces; RW does not fail solely for README↔version mismatch.
- [ ] **AC3:** PMW stamps README SemVer core from `main` tip; no allocator / version bump; coherence validator passes.
- [ ] **AC4:** Default PMW is local-complete; `--push` pushes `main` only after coherence.
- [ ] **AC5:** FR-146 ↔ this task ↔ IPP (after IPW) bidirectional; kboard row until ship; FR-122 surface text updated.

---

## Approach

1. Run **`IPW E02:S03:T15`** — decide merge-as-precondition vs merge-inside-PMW; exact config key; coherence validator packaging; FR-122 amend scope.
2. Implement PMW command + guide + routing (mirror IDW/MWF packaging).
3. Gate RW Step 5 + `release_coherence` README checks on owner flag.
4. Implement publish-coherence validator + tests.
5. Update cheatsheet operator sequence; skill pointer; greenfield sync if needed.
6. Ship via **`RW E02:S03:T15`** (`--art` if `version.py` not on this story).

---

## Dependencies

**Depends On:**
- Living RW Step 5 / ADR-031 display APIs

**Blocks:**
- Removing README churn from routine `dev` RW runs (ai-dev-kit)

**Blocked By:**
- None (planning gate: IPW before IDW)

**Parallel Development Candidacy:** Safe relative to FR-145 (T14) — inform T14 to add PMW exemplar after this ships.

---

## Cross-Wiring

**Related Tasks:**

- **[E02:S01:T30 — RW architectural contract (FR-122)](../story-01-rw-agent-execution-and-docs/T30-rw-architectural-contract-release-transaction-fr122.md)** — **Relationship Type:** Coordinates With — **Context:** FR-122 F2/F10 README coherence must follow `readme_update_owner`; PMW owns publish-side README invariant when set to `publish`.
- **[E02:S03:T14 — Synthetic examples corpus (FR-145)](T14-canonical-workflow-synthetic-examples-corpus-fr145.md)** — **Relationship Type:** Informs — **Context:** After PMW ships, corpus should include a PMW exemplar.
- **[E02:S03:T09 — MWF (FR-124)](T09-ipw-full-delivery-chain-idf-rw-fr123.md)** — **Relationship Type:** Related To — **Context:** Packaging / trigger / registry pattern for a new named workflow.

**Related BR/FR Documents:**

- **[FR-146](../../../fbu/FR-146-publish-main-workflow-pmw-readme-from-rw.md)** — **Relationship Type:** Primary implementing FR
- **[FR-122](../../../fbu/FR-122-release-workflow-architectural-contract-release-transaction.md)** — **Relationship Type:** Coordinates With — **Context:** Contract amend for README ownership
- **[UXR-024](../../../fbu/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)** — **Relationship Type:** Informs — **Context:** `--push` default pattern

---

## References

- [FR-146](../../../fbu/FR-146-publish-main-workflow-pmw-readme-from-rw.md)
- [release-workflow-agent-execution.md](../../../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) (Step 5)
- [workflow-initiation-cheatsheet.md](../../../../guides/workflow-initiation-cheatsheet.md)
