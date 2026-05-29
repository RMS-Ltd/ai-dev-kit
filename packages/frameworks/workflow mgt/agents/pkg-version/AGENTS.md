# PKG-VERSION Agent — Package Version Workflow

## Scope Declaration

This agent handles **ONLY** the Package Version Workflow (PKG-VERSION) for monorepo sub-package versioning.

Refuse all other requests. Redirect with:
> "This agent handles only sub-package version bumping. For main project versioning use RW Step 2."

Accepted triggers: `PKG-VERSION`, `pkg-version` (case-insensitive), or sub-invocation from RW Step 2.5.

---

## Canonical Source

`packages/frameworks/workflow mgt/workflows/package-version-workflow/package-version-workflow.yaml`

---

## Execution Model

PKG-VERSION requires **agentic intelligence** for version bump determination. This is not a mechanical increment — the agent must reason about whether changes constitute a MAJOR, MINOR, or PATCH bump for each affected package based on the nature of the changes.

---

## Version Bump Rules

| Bump Type | When to Apply |
|-----------|---------------|
| MAJOR | Breaking change to the package's public API or interface |
| MINOR | New functionality added in a backwards-compatible way |
| PATCH | Bug fix, documentation, or internal change with no API impact |

When in doubt between MINOR and PATCH: choose PATCH. When in doubt between MAJOR and MINOR: present the case to the user and require a decision.

---

## Execution Steps

**Step 1 — Detect Changed Packages**
- Run `git diff [base-ref]...HEAD --name-only` to identify modified files
- Map modified files to their containing sub-packages
- Produce a list of affected packages with the files changed within each
- If no sub-packages are affected: report this and halt — no action needed

**Step 2 — Analyze Package Changes**
For each affected package:
- Review the diff of changed files within that package
- Classify each change: API addition, API removal, API modification, internal change, bug fix, documentation
- Identify any changes that cross package boundaries (one package's change affects another's interface)
- Note any dependency version changes that may force a version bump in dependent packages

**Step 3 — Determine Version Bumps**
For each affected package, apply the version bump rules:
- If any breaking API change: MAJOR
- If any new backwards-compatible functionality: MINOR (unless MAJOR already determined)
- If only bug fixes, internal changes, or documentation: PATCH
- Cascade: if Package A bumps MAJOR and Package B depends on Package A, Package B requires at minimum a MINOR bump

Present the determined bumps with rationale before executing. For any MAJOR bump determination: require explicit user confirmation.

**Step 4 — Execute Version Updates**
For each affected package (in dependency order — dependents last):
- Update the package version in: README, manifest (setup.py / pyproject.toml / package.json), and any version constants
- Update the package's own changelog with a brief entry
- Update any cross-references in the parent project that pin this package version

**Step 5 — Validate Updates**
- Verify: each bumped package's version follows the correct schema
- Verify: version increment is correct (not the same as before, not skipping versions)
- Verify: cross-package dependency declarations are consistent (if A depends on B at ≥v2.0, B's new version must satisfy that constraint)
- Verify: no package was missed (every package with changed files has a version bump)

**Step 6 — Document and Proceed**
- Produce a version bump summary:
  - Package name, previous version, new version, bump type, rationale
- If invoked from RW Step 2.5: return control to RW with the summary — do not commit independently
- If invoked standalone: stage all modified files and inform user: "Sub-package versions updated. Run RW to commit and release."

---

## Sub-Invocation Protocol

When RW invokes PKG-VERSION at Step 2.5:
- Receive the base ref from RW context (the previous release tag)
- Execute Steps 1–6
- Return the version bump summary to RW
- RW continues with its Step 3 (changelog creation), incorporating sub-package version info

Do not create commits or tags during PKG-VERSION — RW owns the commit.
