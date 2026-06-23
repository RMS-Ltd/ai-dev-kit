---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Kanban Epic/Story Path Lowercase Naming (`epic-*` / `story-*`)

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-06-04  
**Submitted By:** User (Expenses Tracker ADK install observation)  
**Priority:** MEDIUM  
**Status:** RESOLVED (adopter replay **2026-06-04** — ExpensesTracker @ `v0.4.885+2`)  
**Code:** UXR-017  
**Last updated:** 2026-06-04  
**Version:** v0.4.19.11+1 (Waves 1–2 + template pack + installer sign-off; **AC5 verified**)  

**GitHub Issue:** [#20](https://github.com/RMS-Ltd/ai-dev-kit/issues/20)  

**Implementing Task:** [E04:S19:T11](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md)  
**Planning package:** [IPP-E4S19T11](../../implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md)

**Related:** [UXR-011](UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md) (task `Txx` file hygiene — **COMPLETE**), [UXR-014](UXR-014-two-digit-est-identifier-default-formatting.md) (inline `E:S:T` padding), [UXR-008](UXR-008-kboard-fbuboard-default-naming-adoption.md) (board filename normalization), [BR-083](BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) / [E06:S09:T12](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T12-rw-install-pattern-defaults-br083.md) (install defaults `Epic-\{epic\}/…`, `Story-{story:03d}-*.md`), [BR-087](BR-087-framework-install-directory-slug-mismatch.md) / [UXR-016](UXR-016-install-setup-interactive-feedback-external-semver-version.md) (same Expenses Tracker session — **`packages/frameworks/`** slug layout; out of scope for UXR-017)

---

## Summary

During AI Dev Kit installation on **Expenses Tracker**, the generated kanban tree under `docs/kanban/` uses **Pascal-case path segments** (`epic-01/`, `story-01-…`) while the user expects **lowercase, kebab-style** directory and file prefixes (`epic-01/`, `story-01-…`). The inconsistency is confusing on case-sensitive filesystems, reads as mixed convention versus task files (`T01-…`), and conflicts with the user’s mental model of “no capitalisation” for named epic/story paths.

---

## Research Objective

**Primary question:** Should canonical kanban **epic and story directory names and epic/story document filenames** use **lowercase** `epic-\{n\}` / `story-{nnn}-\{slug\}` instead of **`Epic-\{n\}` / `Story-{nnn}-\{slug\}`**?

**Secondary questions:**

1. Where do framework templates, fresh-install scripts, `rw-config.yaml` patterns, and validators **hard-code** the capitalised forms?
2. What is the migration path for **ai-dev-kit** (2k+ path references) and **adopter repos** (e.g. Expenses Tracker) without breaking RW/UKW?
3. How does this relate to **UXR-011** (completed on `Txx` naming) — complementary scope, not duplicate?

---

## Methodology

**Research Method:** Adopter install observation + framework source audit (templates, install/migrate scripts, governance policy, `rw-config` schema).  
**Context:** Expenses Tracker greenfield/brownfield ADK install; ai-dev-kit canonical tree as reference corpus.  
**Duration:** Single intake session (2026-06-04).

**Artifacts reviewed:**

- `packages/frameworks/kanban/scripts/migrate_structure.py` (`Epic-\{n\}`, `Story-\{story\}`)
- `packages/frameworks/workflow-mgt/config/rw-config-schema.md` (default patterns)
- `packages/frameworks/kanban/policies/kanban-governance-policy.md` (location examples)
- `docs/kanban/epics/` (live tree: `Epic-*`, `Story-*`)

---

## Key Findings

### Finding 1: Framework emits capitalised epic/story paths (Severity: High for adopters)

Fresh install and canonical adoption write paths such as:

- `epics/Epic-\{epic\}/Epic-\{epic\}.md`
- `epics/Epic-\{epic\}/Story-{story:03d}-*.md`
- `epics/Epic-\{epic\}/Story-{story:03d}-\{slug\}/` (task subdirs)

**Expenses Tracker** (and any project following the pack) inherits this layout. The user perceives this as a **capitalisation inconsistency** relative to lowercase slug segments elsewhere in the repo.

### Finding 2: Policy and tooling document the capitalised form as canonical (Severity: Medium)

| Surface | Current convention | Example |
| ------- | ------------------ | ------- |
| Kanban governance policy | `Epic-XX`, `Story-NNN-` | `kanban/epics/epic-04/story-13-…` |
| `rw-config.yaml` schema defaults | `Epic-\{epic\}`, `Story-\{story\}` | BR-083 / T12 detection targets |
| `migrate_structure.py`, `task_creator.py`, `validate_installation.py` | `glob("epics/Epic-*")` | Hard-coded segment case |
| Framework templates | `templates/Epic-N/`, `Epic-N.md` | Pack layout |

Task-level naming was normalised under **UXR-011** (`Txx-\{slug\}.md`); **epic/story path segment case** was explicitly **out of scope** there.

### Finding 3: Case-sensitive filesystems amplify the UX defect (Severity: Medium)

On Linux/macOS default (case-sensitive or mixed), `epic-01` vs `epic-01` are **distinct paths**. Mixed conventions in docs, installer prompts, and user-edited `rw-config` patterns cause **silent misses** in validators and RW Step 7 path resolution.

### Finding 4: Lowercase aligns with branch and slug conventions (Severity: Low — design signal)

Project branches already use lowercase (`epic/6-framework-management`). Lowercase `epic-\{n\}` / `story-{nnn}` would align path segments with **kebab-case slugs** used in task filenames and FR/BR/UXR reports.

---

## User Pain Points

- **Cognitive mismatch:** “Epic” and “Story” as proper-noun folder names feel like title case, not structural tokens.
- **Install friction:** After customising kanban root (cf. UXR-007), users still receive capitalised defaults from fresh mode without an explanation of why `Epic-` is capitalised.
- **Cross-tool drift:** Manual edits to lowercase paths do not match installer/validator expectations (BR-083 class of issues, extended to **case** dimension).
- **Adopter hygiene:** Second repo (Expenses Tracker) highlights inconsistency that maintainers may not notice on case-insensitive macOS volumes.

---

## Recommendations

1. **Define a normative path policy** in kanban governance: lowercase `epic-{nn}/`, `epic-{nn}.md`, `story-{nn}-\{slug\}.md`, `story-{nn}-\{slug\}/`, `T{nn}-*.md` with **2-digit** segments when ID ≤ 99 and **3-digit** when ID > 99 (epic/story/task); inline `E:S:T` remains UXR-014 two-digit in prose.
2. **Update framework pack** — templates, `migrate_structure.py`, `task_creator.py`, `validate_installation.py`, fresh-install copy paths — to emit lowercase segments by default.
3. **Update RW installer detection** (extends BR-083 / E06:S09:T12) to recognise **both** legacy `Epic-/Story-` and new `epic-/story-` during transition; prefer lowercase in Mode C defaults when both absent.
4. **Migration guide + optional script** for ai-dev-kit and adopters: rename map, link sweep checklist, `rw-config` pattern update, validator tolerance window.
5. **Extend `validate_kanban_naming.py`** (or sibling) to flag capitalised epic/story path segments as **deprecation warnings**, then **errors** after cutover date.

**Priority order:**

1. Policy + schema documentation (single source of truth).  
2. Install/migrate emit paths (adopter-facing).  
3. ai-dev-kit corpus migration + validator enforcement.  

---

## Affected Areas

**Affected components:**

- [x] Documentation (governance policy, install guides, `rw-config` schema)
- [x] Features (kanban fresh install, canonical adoption, structure migration)
- [x] User flows (interactive RW install pattern prompts post-kanban)
- [ ] UI components

**Specific areas:**

- `packages/frameworks/kanban/templates/**`
- `packages/frameworks/kanban/scripts/migrate_structure.py`, `task_creator.py`, `validate_installation.py`
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` (pattern detection)
- `docs/kanban/epics/**` (ai-dev-kit tree)
- Adopter projects: **Expenses Tracker** kanban tree

---

## Acceptance Criteria (UXR closure)

- [x] **AC1:** Kanban governance documents lowercase `epic-*` / `story-*` as **write-default** for new installs and new writes.
- [x] **AC2:** Framework fresh install and `canonical_adoption` emit lowercase epic/story paths without manual rename.
- [x] **AC3:** `rw-config-schema.md` and install detection document lowercase defaults; legacy `Epic-/Story-` documented as **read-tolerance** during transition.
- [x] **AC4:** ai-dev-kit kanban tree migrated; `validate_kanban_naming.py --strict` passes capitalised-segment check (pre-existing duplicate-task warnings only).
- [x] **AC5:** Expenses Tracker (or documented adopter replay) confirms consistent lowercase tree after reinstall/migration. **Verified 2026-06-04** @ `v0.4.885+2`; [#20](https://github.com/RMS-Ltd/ai-dev-kit/issues/20).
- [x] **AC6:** UXR-017 ↔ E04:S19:T11 bidirectional links; IPP published.

---

## Intake Decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-06-04  
**Intake by:** AI Agent (Cursor)

**Decision flow:**

- [x] Story match: **Epic 4**, **Story 019** (kanban naming / governance — complements UXR-011, UXR-014)
- [x] Task created: **E04:S19:T11**
- [x] IPW / IPP: [IPP-E4S19T11](../../implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming.md)

**Assigned to:**

- Epic: 4 — Kanban Framework  
- Story: 019 — FR/BR/UXR abstract governance and intake  
- Task: 11 — Kanban epic/story path lowercase naming (UXR-017)  

**Kanban links:**

- Epic: [`epic-04.md`](../epics/epic-04/epic-04.md)
- Story: [`story-19-fr-br-uxr-abstract-governance-and-intake.md`](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md)
- Task: [`T11-kanban-epic-story-path-lowercase-naming-uxr017.md`](../epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md)

---

## Notes

- **Not in scope for this UXR:** Renaming `Epic` / `Story` **words** in document titles or H1 headings—only **path segments and filenames** (`epic-` / `story-` prefixes).
- **Coordination:** Implementation likely spans **E04** (policy/templates) and **E06:S09** (install defaults); T11 owns policy + framework emission; install-only deltas may spawn a linked E06 task if split is cleaner at IPW time.
- **Same adopter session (2026-06-04/05):** Framework tree under `packages/frameworks/` still uses legacy names with spaces/`&` after kit update — tracked as **[BR-087](BR-087-framework-install-directory-slug-mismatch.md)** with install UX notes in **[UXR-016 addendum](UXR-016-install-setup-interactive-feedback-external-semver-version.md#addendum--framework-directories-still-use-legacy-names-2026-06-05)** (not UXR-017 AC).

---

## References

- [kanban-governance-policy.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md) — File naming convention section
- [rw-config-schema.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/rw-config-schema.md)
- [BR-083](BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md)
