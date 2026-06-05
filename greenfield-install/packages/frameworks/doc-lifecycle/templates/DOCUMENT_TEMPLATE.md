# Document Title

**Lifecycle Metadata:** This template includes the required lifecycle metadata fields. Replace the values below with appropriate values for your document type.

```yaml
---
lifecycle: evergreen | timeboxed | transient
ttl_days: <integer> | null
created_at: <ISO 8601 datetime>
expires_at: <ISO 8601 datetime> | null
housekeeping_policy: keep | archive | delete
---
```

---

## Document Content

Your document content goes here...

---

## Lifecycle Classification Guide

### Evergreen Documents

**Use for:**
- Canonical technical standards and ADRs
- Kanban Epics and Stories (project management artifacts)
- Core how-to guides and user-facing documentation
- Framework documentation and API references
- Governance policies and rituals

**Metadata:**
```yaml
---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T11:30:00Z
expires_at: null
housekeeping_policy: keep
---
```

---

### Timeboxed Documents

**Use for:**
- Design spikes and exploratory analysis
- Refactoring plans and migration strategies
- Impact analysis documents
- Research documents that inform decisions
- Documents that may be useful historically but not actively maintained

**Metadata:**
```yaml
---
lifecycle: timeboxed
ttl_days: 90  # Default: 3 months
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z  # created_at + ttl_days
housekeeping_policy: archive
---
```

---

### Transient Documents

**Use for:**
- Renumbering plans and one-time operational sequences
- Implementation step-by-step plans (can be recreated by agents)
- Temporary planning documents for completed tasks
- Documents with low unique value, easily regenerated

**Metadata:**
```yaml
---
lifecycle: transient
ttl_days: 14  # Default: 2 weeks (or 30 for implementation plans)
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-12-18T11:30:00Z  # created_at + ttl_days
housekeeping_policy: delete
---
```

---

## Agent Rules

When creating KB documents, agents **MUST**:

1. **Identify document type** from context (task description, file path, content)
2. **Map to lifecycle** using classification rules above
3. **Apply defaults** for `ttl_days` and `housekeeping_policy`
4. **Set `created_at`** to current UTC time
5. **Calculate `expires_at`** from `created_at + ttl_days`
6. **Include all metadata** in front-matter

**Validation:** Agents should validate front-matter before committing.

---

## Protection Rules

Documents **MUST NOT** be deleted if they are:
1. Referenced from evergreen docs
2. Referenced in changelogs
3. Referenced in git history (always preserved via git)

**Action:** Auto-upgrade to `archive` instead of `delete` if references found.

---

**See:** [`LIFECYCLE_EXAMPLES.md`](./LIFECYCLE_EXAMPLES.md) for detailed examples.

