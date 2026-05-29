---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Gap Log and Risk Assessment Schema

**Status:** Active  
**Purpose:** Canonical specification for gap log and risk assessment documents produced by implementation review tasks (e.g., E4:S16:T05, E3:S04:T05).  
**Audience:** Implementation review task authors, validators, and RC sign-off reviewers.

---

## 1. Document Structure

A gap log and risk assessment document MUST have the following sections:

| Section | Required | Purpose |
|---------|----------|---------|
| Frontmatter | Yes | `lifecycle`, `created_at`, `housekeeping_policy` per doc lifecycle policy |
| Scope | Yes | What is being consolidated (e.g., T01–T04 findings) |
| Input / Inputs | Yes | Explicit references to source tasks/reports |
| Gap Log | Yes | One subsection per gap with required fields; may include Summary of Direct [Package] Gaps |
| Summary of Direct [Package] Gaps | Yes | Explicit statement of package vs external gaps (may be subsection under Gap Log) |
| Risk Assessment | Yes | Overall RC risk posture and conclusion |
| Next Steps | Recommended | Follow-on work |

---

## 2. Per-Gap Entry Schema

Each gap entry (headed by `### Gap N` or `#### Gap N`) MUST include:

| Field | Required | Values / Notes |
|-------|----------|----------------|
| ID | Yes | Format: `GAP-{PACKAGE}-{TYPE}-NNN` (e.g., GAP-KANBAN-UKW-001) |
| Category | Yes | Structural / Behavioral / Integration / Process / Operational |
| Description | Yes | Clear narrative of the gap |
| Source | Yes | BR/FR/Task references or report citations |
| Ownership | Yes | Package vs external workflow (explicit) |
| Severity | Yes | LOW / MEDIUM / HIGH |
| Likelihood | Yes | LOW / MEDIUM / HIGH |
| RC Impact | Yes | BLOCKER / NON-BLOCKING / INFORMATIONAL |
| Tracking | Yes | BR/FR/Task ID and status |

---

## 3. Risk Assessment Section

The Risk Assessment section MUST include:

- **Structural Risk:** LOW / MEDIUM / HIGH / NONE
- **Behavioral Risk:** LOW / MEDIUM / HIGH / NONE
- **Integration Risk:** LOW / MEDIUM / HIGH / NONE
- **Operational Risk** (optional): LOW / MEDIUM / HIGH / NONE / MITIGATED
- **RC Impact Conclusion:** Clear statement of whether RC-blocking gaps exist for the package

---

## 4. Acceptance Criteria (Checkable)

- All findings from input tasks reviewed and distilled
- Each gap classified with severity, likelihood, RC impact
- Package vs external workflow gaps clearly separated
- Overall RC risk posture documented
- References (BR/FR/Task IDs) included per gap

---

## 5. Validation

Use `validate_gap_log.py` to verify a document conforms to this schema:

```
python packages/frameworks/workflow mgt/scripts/validation/validate_gap_log.py --path <path-to-gap-log.md> [--strict]
```

See [Implementation Cycle SoP](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md) for when gap log validation applies.
