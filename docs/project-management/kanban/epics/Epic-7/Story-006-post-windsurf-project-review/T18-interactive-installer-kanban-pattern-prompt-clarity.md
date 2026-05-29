---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-10T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E7:S06:T18 - Interactive Installer Kanban Pattern Prompt Clarity

**Task ID:** E7:S06:T18  
**Status:** COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-04-18 (RW full **E7:S06:T18** **v0.7.6.18+3**)
**Version:** v0.7.6.18+3  
**Version Anchor:** v0.7.6.18+3  
**Code:** E7S06T18

---

## Documentation Publication

Publication Status: PUBLISHED  
Publication N/A Reason: N/A

Planning artifacts (canonical):

- [ICW E7:S06:T18 specification](../../../../../implementation-cycles/ICW-E7S06T18-specification.md)
- [ICW E7:S06:T18 test design](../../../../../implementation-cycles/ICW-E7S06T18-test-design.md)
- [ICW E7:S06:T18 implementation plan](../../../../../implementation-cycles/ICW-E7S06T18-implementation-plan.md)

Historical IPW filename (redirect index): [IPW index E7:S06:T18](../../../../../implementation-cycles/IPW-E7S06T18-interactive-installer-kanban-pattern-clarity.md)

---

## Scope

Address UXR-007 by improving interactive installer wording and guidance for Kanban path/pattern prompts, especially "epic document pattern" input using `{epic}` placeholder.

## Input

- [UXR-007](../../../fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)
- Planning package: [spec](../../../../../implementation-cycles/ICW-E7S06T18-specification.md) · [tests](../../../../../implementation-cycles/ICW-E7S06T18-test-design.md) · [plan](../../../../../implementation-cycles/ICW-E7S06T18-implementation-plan.md); [IPW index](../../../../../implementation-cycles/IPW-E7S06T18-interactive-installer-kanban-pattern-clarity.md)
- Installer prompt flow for Kanban integration in interactive mode
- `rw-config.yaml` keys: `kanban_root`, `epic_doc_pattern`, `story_doc_pattern`

## Deliverable

1. Prompt text clarified with explicit relative-path semantics and examples.
2. Input validation feedback improved (show match count and sample paths).
3. Fallback guidance added (auto-detect suggestion and remediation examples).
4. Documentation/tests updated for installer UX behavior.

## Acceptance Criteria

- [x] User can understand and answer epic pattern prompt without external assistance.
- [x] Installer provides immediate actionable feedback when pattern matches zero files.
- [x] Prompt copy explicitly explains `{epic}` usage with examples.
- [x] UXR-007 is cross-linked with implementation evidence.

## Dependencies

- None

## Related Work

- [UXR-007](../../../fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)
- [E7:S06:T06](T06-fr-br-uxr-intake-documentation-quality.md)

## Version Anchor

- Released as: `v0.7.6.18+3` (SemVer `v0.4.741+3`; prior **RW -d** `v0.7.6.18+2` / `v0.4.740+2`)

## References

- [ICW specification E7:S06:T18](../../../../../implementation-cycles/ICW-E7S06T18-specification.md)
- [UXR-007](../../../fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity.md)
