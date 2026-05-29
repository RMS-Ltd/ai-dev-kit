# Document Lifecycle Policy

**Version:** 1.0.0  
**Last Updated:** 2025-12-04  
**Status:** Draft  
**Related:** [Document Lifecycle Metadata Spec](./doc-lifecycle-metadata-spec.md) | [KB Structure Overview](./kb-structure-overview.md)

---

## 📋 Overview

This policy governs the **lifecycle management** of Knowledge Base (KB) documents, defining when documents should be classified as evergreen, timeboxed, or transient, and how housekeeping should be performed to prevent documentation bloat while preserving valuable content.

**Scope:**
- All documents in `docs/` directory tree
- Agent-created planning, analysis, and implementation documents
- Standards, ADRs, and canonical documentation

**Goals:**
- Prevent documentation bloat from obsolete temporary documents
- Preserve evergreen content and historically significant artifacts
- Enable automated housekeeping through clear lifecycle rules
- Maintain audit trails for completed work

---

## 🎯 Policy Principles

### 1. Default to Evergreen

**Rule:** When in doubt, classify documents as `evergreen`. It's easier to archive later than to recreate lost content.

**Exception:** Explicitly temporary documents (renumbering plans, one-time implementation sequences) should be marked `transient` from creation.

---

### 2. Lifecycle Must Be Explicit

**Rule:** All KB documents **MUST** include lifecycle metadata in front-matter. Agents **MUST** set lifecycle when creating documents.

**Enforcement:**
- Agents should validate front-matter before committing KB documents
- Housekeeping workflow should flag documents missing lifecycle metadata

---

### 3. Reference-Aware Cleanup

**Rule:** Documents referenced from evergreen sources **MUST NOT** be deleted, even if marked `transient` or expired.

**Protection Sources:**
- Links from `lifecycle: evergreen` documents
- References in released changelogs
- Git commit history (always preserved)

**Action:** Auto-upgrade `housekeeping_policy` to `archive` if references found.

---

### 4. Audit Trail Preservation

**Rule:** Documents that serve as evidence of completed work **SHOULD** be archived, not deleted, even if transient.

**Examples:**
- Renumbering plans that document completed migrations
- Analysis documents referenced in Story completions
- Implementation plans that led to released features

**Action:** Set `housekeeping_policy: archive` for transient docs that document completed work.

---

### 5. Agent-Driven Management

**Rule:** AI agents **MUST** create and maintain lifecycle metadata according to the [Document Lifecycle Metadata Spec](./doc-lifecycle-metadata-spec.md).

**Requirements:**
- Set lifecycle based on document type
- Apply default TTL and housekeeping policy
- Calculate `expires_at` from `created_at + ttl_days`
- Log lifecycle promotions/demotions

---

## 📐 Classification Rules

### Evergreen Documents

**Classification:** `lifecycle: evergreen`

**Criteria:**
- Canonical technical standards and ADRs
- Kanban Epics and Stories (project management artifacts)
- Core how-to guides and user-facing documentation
- Framework documentation and API references
- Governance policies and rituals

**Metadata:**
```yaml
lifecycle: evergreen
ttl_days: null
housekeeping_policy: keep
```

**Housekeeping:** Never deleted or archived.

---

### Timeboxed Documents

**Classification:** `lifecycle: timeboxed`

**Criteria:**
- Design spikes and exploratory analysis
- Refactoring plans and migration strategies
- Impact analysis documents
- Research documents that inform decisions
- Documents that may be useful historically but not actively maintained

**Metadata:**
```yaml
lifecycle: timeboxed
ttl_days: 90  # Default: 3 months
housekeeping_policy: archive
```

**Housekeeping:** Archived to `docs/Archive/` after expiration.

---

### Transient Documents

**Classification:** `lifecycle: transient`

**Criteria:**
- Renumbering plans and one-time operational sequences
- Implementation step-by-step plans (can be recreated by agents)
- Temporary planning documents for completed tasks
- Documents with low unique value, easily regenerated

**Metadata:**
```yaml
lifecycle: transient
ttl_days: 14  # Default: 2 weeks (or 30 for implementation plans)
housekeeping_policy: delete
```

**Housekeeping:** Deleted after expiration (unless referenced or evidence).

---

## 🧹 Housekeeping Process

### Automated Housekeeping Workflow

**Trigger:** Periodic (weekly/monthly) or manual execution

**Steps:**
1. **Scan:** Walk `docs/**` and parse front-matter
2. **Filter:** Find documents where:
   - `lifecycle in {timeboxed, transient}` **AND**
   - `expires_at <= now()`
3. **Analyze References:**
   - Search for links/back-references to each expired document
   - Check if referenced from evergreen docs or changelogs
4. **Determine Action:**
   - If referenced → Auto-upgrade to `archive`
   - If `housekeeping_policy: delete` and no references → Delete
   - If `housekeeping_policy: archive` → Archive
5. **Execute:**
   - **Delete:** Remove from KB (or move to `docs/_graveyard/`)
   - **Archive:** Move to `docs/Archive/{original_path}`
6. **Log:** Create changelog entry documenting housekeeping actions

---

### Manual Housekeeping

**When:** User-initiated cleanup or lifecycle promotion/demotion

**Process:**
1. Review expired documents (housekeeping workflow can generate report)
2. Decide on action (archive, delete, promote)
3. Update lifecycle metadata if promoting/demoting
4. Execute housekeeping action
5. Log in changelog or Story task notes

---

### Housekeeping Exceptions

**Documents that MUST NOT be deleted:**

1. **Referenced from evergreen docs** – Auto-upgrade to `archive`
2. **Referenced in changelogs** – Always archive, never delete
3. **Evidence of completed work** – Archive even if transient
4. **Documents with unique historical context** – Archive instead of delete

**Documents that CAN be deleted:**

1. **Unreferenced transient docs** – After expiration
2. **Regenerable implementation plans** – If no unique value
3. **Obsolete planning docs** – If task completed and no references

---

## 🔄 Lifecycle Management

### Promotion (Upgrade Lifecycle)

**When:** Document becomes more valuable than initially classified

**Examples:**
- Transient renumbering plan → Timeboxed (if referenced in Story completion)
- Timeboxed analysis → Evergreen (if becomes canonical reference)

**Process:**
1. Update `lifecycle` field
2. Update `ttl_days` (set to `null` if promoting to `evergreen`)
3. Recalculate `expires_at`
4. Update `housekeeping_policy` if needed
5. **Log promotion** in changelog or Story notes

**Agent Rule:** Promotions **MUST** be explicit and logged. Never silently promote.

---

### Demotion (Downgrade Lifecycle)

**When:** Document becomes less valuable (rare)

**Examples:**
- Evergreen doc becomes obsolete → Timeboxed (archive after period)
- Timeboxed doc less useful → Transient (delete after period)

**Process:**
1. Update `lifecycle` field
2. Set appropriate `ttl_days`
3. Recalculate `expires_at`
4. Update `housekeeping_policy`
5. **Log demotion** with reason

**Agent Rule:** Demotion should be **explicit and rare**. Consider archiving instead of demoting evergreen docs.

---

## 📋 Agent Requirements

### Document Creation

When creating KB documents, agents **MUST**:

1. **Identify document type** from context (task description, file path, content)
2. **Map to lifecycle** using classification rules
3. **Apply defaults** for `ttl_days` and `housekeeping_policy`
4. **Set `created_at`** to current UTC time
5. **Calculate `expires_at`** from `created_at + ttl_days`
6. **Include all metadata** in front-matter

**Validation:** Agents should validate front-matter before committing.

---

### Document Updates

When updating KB documents, agents **SHOULD**:

1. **Preserve lifecycle metadata** unless explicitly changing
2. **Update `created_at`** only if document is being rewritten (not edited)
3. **Recalculate `expires_at`** if `ttl_days` changes
4. **Log lifecycle changes** in changelog or Story notes

---

### Lifecycle Changes

When promoting/demoting documents, agents **MUST**:

1. **Update lifecycle metadata** explicitly
2. **Log change** with reason
3. **Update related references** if lifecycle affects housekeeping policy

---

## 🛡️ Enforcement

### Validation

**Pre-Commit:** Agents should validate lifecycle metadata before committing KB documents:
- All required fields present
- `lifecycle` is valid enum value
- `ttl_days` matches lifecycle (null for evergreen, integer for others)
- `expires_at` calculated correctly
- `housekeeping_policy` matches lifecycle defaults (unless overridden)

**Housekeeping Workflow:** Should flag documents missing lifecycle metadata for manual review.

---

### Monitoring

**Metrics to Track:**
- Number of documents by lifecycle (`evergreen`, `timeboxed`, `transient`)
- Number of expired documents pending housekeeping
- Number of documents archived/deleted per housekeeping run
- Number of lifecycle promotions/demotions

**Reports:** Housekeeping workflow should generate reports of expired documents and proposed actions.

---

## 📚 Related Documents

- **Specification:** [`doc-lifecycle-metadata-spec.md`](./doc-lifecycle-metadata-spec.md) – Metadata schema and field definitions
- **Workflow:** `packages/frameworks/workflow mgt/workflows/doc-housekeeping-workflow.yaml` – Automated housekeeping workflow
- **KB Structure:** [`kb-structure-overview.md`](./kb-structure-overview.md) – KB organization

---

## 🔗 Integration with Workflows

### Release Workflow (RW)

**When:** Completing tasks that create temporary documents

**Action:** Ensure temporary documents have correct lifecycle metadata:
- Renumbering plans → `transient`, `ttl_days: 14`, `housekeeping_policy: delete`
- Analysis documents → `timeboxed`, `ttl_days: 90`, `housekeeping_policy: archive`

**Follow-up:** Create maintenance task for housekeeping expired docs.

---

### Doc Housekeeping Workflow

**Purpose:** Automated cleanup of expired documents

**Trigger:** Periodic (weekly/monthly) or manual

**Steps:** See "Automated Housekeeping Workflow" section above

**Output:** Changelog entry documenting housekeeping actions

---

## 📝 Examples

### Example 1: Creating a Transient Renumbering Plan

**Context:** Task "E2:S04:T05 – Renumber Story IDs"

**Agent Action:**
```yaml
---
lifecycle: transient
ttl_days: 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-12-18T11:30:00Z
housekeeping_policy: delete
---
# E2:S04:T05 – Renumbering Plan

## Steps to Renumber Story IDs
...
```

**Rationale:** One-time operational document, easily regenerated, low unique value.

---

### Example 2: Creating a Timeboxed Analysis

**Context:** Task "E2:S04:T01 – Analyze RW Adoption Friction"

**Agent Action:**
```yaml
---
lifecycle: timeboxed
ttl_days: 90
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z
housekeeping_policy: archive
---
# T01 – RW Adoption Friction Analysis

This analysis documents current friction points...
```

**Rationale:** Informative analysis, may be useful historically, but not actively maintained.

---

### Example 3: Promoting Transient to Timeboxed

**Context:** Renumbering plan completed, referenced in Story completion

**Agent Action:**
1. Update lifecycle metadata:
```yaml
---
lifecycle: timeboxed  # Changed from transient
ttl_days: 90          # Changed from 14
created_at: 2025-12-04T11:30:00Z
expires_at: 2025-03-04T11:30:00Z  # Recalculated
housekeeping_policy: archive      # Changed from delete
---
```

2. Log promotion in Story task notes:
```markdown
**Lifecycle Promotion:** Renumbering plan promoted from `transient` to `timeboxed` 
because it documents completed work and is referenced in Story completion.
```

---

## 🎯 Success Criteria

**Policy is successful if:**

1. ✅ All KB documents have lifecycle metadata
2. ✅ Expired transient/timeboxed docs are cleaned up regularly
3. ✅ Evergreen docs are never deleted
4. ✅ Referenced docs are protected from deletion
5. ✅ Housekeeping actions are logged and auditable
6. ✅ Documentation bloat is prevented without losing valuable content

---

**Last Updated:** 2025-12-04  
**Status:** Draft – Awaiting review and adoption

