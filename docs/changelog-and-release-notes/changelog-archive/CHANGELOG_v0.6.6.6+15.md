---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T07:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Changelog v0.6.6.6+15

**Release Date:** 2025-12-18  
**Version:** v0.6.6.6+15  
**Epic:** E6 – Framework Management and Maintenance  
**Story:** S06 – ADK Implementation Analysis and Package Management  
**Task:** T06 – Cross-project meta-analysis and canonical framework design  
**Build:** +15

---

## DO Phase

### Changes Made

1. **Split Use Cases by Type**
   - **Canonical Use Cases** (design-phase) → moved to `docs/architecture/use-cases/canonical/`
   - **Discovered Use Cases** (implementation-phase) → remain in `docs/knowledge/use-cases/discovered/`
   - Rationale: Canonical use cases are part of architecture/design, discovered use cases are project knowledge

2. **Updated Structure**
   - Created `docs/architecture/use-cases/` directory
   - Moved canonical use case template to `docs/architecture/use-cases/`
   - Updated all path references throughout codebase
   - Updated canonical structure documentation

3. **Updated Documentation**
   - Created `docs/architecture/use-cases/README.md` for canonical use cases
   - Updated `docs/knowledge/USE_CASE_METHODOLOGY.md` with new paths
   - Updated `ultimate-canonical-kb-structure.md` to reflect split

---

## CHECK Phase

### Validation

- ✅ Branch context validation passed
- ✅ Version bump completed (0.6.6.6+14 → 0.6.6.6+15)
- ✅ Use cases properly split by type
- ✅ All path references updated

### Files Modified

- `src/fynd_deals/version.py` - Version bumped to 0.6.6.6+15
- `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md` - Updated structure documentation
- `docs/knowledge/USE_CASE_METHODOLOGY.md` - Updated paths
- Path references updated throughout codebase

### Files Created

- `docs/architecture/use-cases/README.md` - Canonical use cases documentation
- `docs/knowledge/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.6+15.md` - This changelog

### Files Moved

- `docs/knowledge/use-cases/canonical/` → `docs/architecture/use-cases/canonical/`
- `docs/knowledge/use-cases/templates/CANONICAL_USE_CASE_TEMPLATE.md` → `docs/architecture/use-cases/CANONICAL_USE_CASE_TEMPLATE.md`
- `docs/knowledge/use-cases/discovered/` → remains in `docs/knowledge/use-cases/discovered/`
- `docs/knowledge/use-cases/templates/DISCOVERED_USE_CASE_TEMPLATE.md` → remains in `docs/knowledge/use-cases/templates/`

---

## ACT Phase

### Next Steps

1. Update main changelog (`CHANGELOG.md`)
2. Update README version badge
3. Auto-update Kanban docs (Epic 6, Story 6)
4. Stage all modified files
5. Run validators
6. Commit changes
7. Create git tag
8. Push to remote

---

## Summary

This release splits use cases by type:
- **Canonical Use Cases** (design-phase, planned before implementation) → `docs/architecture/use-cases/canonical/`
- **Discovered Use Cases** (implementation-phase, patterns discovered during work) → `docs/knowledge/use-cases/discovered/`

This logical separation ensures:
- Design-phase use cases are part of architecture documentation
- Implementation-phase discovered patterns remain in the knowledge base
- Clear distinction between planned architecture and emergent project knowledge

