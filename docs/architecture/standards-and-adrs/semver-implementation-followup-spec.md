---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# SemVer Mapping & Tagging Implementation Follow-Up (Spec)

**Status:** Draft  
**Scope:** Implement configuration-driven SemVer mapping modes, optional metadata, and RW/PVW behaviour consistent with updated policies.  
**Related:** `packages/frameworks/numbering & versioning/versioning-policy.md`, `versioning-strategy.md`, dev-kit versioning policy, RW & PVW agent execution guides.

---

## 1. Goals

- **Config-driven SemVer mapping:** Allow projects to select a SemVer mapping mode (registry-based vs global PATCH) via `rw-config.yaml`.
- **Optional metadata in tags:** Support an optional `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>` suffix on SemVer tags for machine-parseable traceability.
- **RW alignment:** Ensure RW uses SemVer as the external-facing version (README, tags, GitHub releases) while preserving the internal version as the forensic coordinate.
- **PVW alignment:** Ensure PVW treats SemVer as the external-facing package version, using the same mapping mode as RW.

---

## 2. Configuration Surface (`rw-config.yaml`)

Add (or document) the following optional fields in `rw-config.yaml`:

- `semver_mode`: `"registry_epic_story"` (default) \| `"global_patch"`
  - **registry_epic_story (Mode A):** Use existing registry-based mapping (Hybrid Approach).
  - **global_patch (Mode B):** Map `MAJOR = RC`, `MINOR = EPIC`, `PATCH = global build counter` per RC.
- `semver_metadata`: `"none"` (default) \| `"full"`
  - **none:** Generate clean SemVer (`MAJOR.MINOR.PATCH+BUILD`) without metadata in the tag name.
  - **full:** Append metadata suffix `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>` to the SemVer tag.

These values should be:

- Read once at the start of RW (and reused by PVW where relevant).
- Exposed via a small internal configuration helper so other scripts (e.g. `semver_converter.py`) can consume them.

---

## 3. `semver_converter.py` Enhancements

### 3.1 Inputs and Outputs

- **Current behaviour:** Accepts an internal version string and emits a SemVer string using the registry-based mapping.
- **Target behaviour:**
  - Accept internal version (`RC.EPIC.STORY.TASK+BUILD`).
  - Read `semver_mode` from config (or accept an explicit argument for testing).
  - Apply mapping based on selected mode.
  - Return:
    - `semver_core`: `MAJOR.MINOR.PATCH+BUILD`
    - `metadata_suffix` (optional): `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>` if `semver_metadata=full`, else empty.

### 3.2 Mapping Logic

- **Mode A – `registry_epic_story` (existing Hybrid Approach)**:
  - Preserve current behaviour (use `semver-registry.yaml` to map epic/story to MINOR/PATCH).
  - No change in semantics; implementation just refactors into a `mode` branch.

- **Mode B – `global_patch`**:
  - `MAJOR = RC`
  - `MINOR = EPIC`
  - `PATCH` = **monotonic global build counter** per RC.
    - Implementation detail: the global counter can be tracked in a small registry file (e.g. `semver-global-patch-registry.yaml`) keyed by RC.
    - On each new release:
      - Increment the counter and assign it to PATCH.
      - Record mapping from internal version to `(MAJOR, MINOR, PATCH)` for traceability.

### 3.3 Metadata Suffix

- When `semver_metadata = full`:
  - Compute suffix: `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>`.
  - Do **not** include this suffix when returning the “SemVer core” for README or package manifests; it is for **tag names** and tooling.

---

## 4. RW Tagging Behaviour (Step 11) and README Update (Step 5)

### 4.1 Step 5 – README

- Use `semver_converter.py` to compute:
  - `semver_core` for display in README.
  - Internal version remains in the version file and detailed changelog.
- Update README patterns so:
  - The visible “Version” section uses `v{semver_core}` as the primary value.
  - Internal version is referenced only in supporting text or links, not as the main version.

### 4.2 Step 11 – Create Git Tag

- For each release, create:
  - **Internal tag:** `v\{internal_version\}` (unchanged behaviour).
  - **SemVer tag:**
    - Base: `v{semver_core}`.
    - If `semver_metadata=full`: append metadata to the tag name: `v{semver_core}+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>`.
- Ensure:
  - Both tags point to the **same commit**.
  - Commit messages continue to reference the internal version and SemVer as needed.

---

## 5. GitHub Release Script (`create_github_release.py`)

- Expect SemVer tag input in the **core form**: `v{semver_core}` (no metadata).
- Internal version is passed separately (as today).
- If metadata tags are used:
  - They should not be treated as the primary release tag in GitHub.
  - The script may optionally include metadata in the release body for traceability.

---

## 6. PVW Integration

- PVW must:
  - Use the same `semver_mode` as RW (read from `rw-config.yaml`).
  - Treat SemVer as the **external-facing package version**.
- Implementation notes:
  - When PVW decides a MAJOR/MINOR/PATCH bump for a package:
    - It should apply the bump to the package’s SemVer (respecting mapping mode).
    - It should record rationale and the corresponding internal versions (if relevant) in the package changelog.

---

## 7. Validation Enhancements

Optionally extend existing validators or add new ones to:

- **Tag/metadata consistency validator:**
  - Input: tag name (SemVer + optional metadata) and internal version.
  - Check:
    - When metadata is present, it matches the internal version’s components.
    - SemVer core is well-formed and consistent with mapping mode.

- **Config consistency validator:**
  - Ensure `semver_mode` and `semver_metadata` values are valid and supported.

These validators can be wired into RW Step 9 (Run Validators) as non-breaking checks initially (warnings) and tightened over time.

---

## 8. Migration & Backwards Compatibility

- Existing projects using the registry-based mapping (Hybrid Approach) remain on **Mode A** by default.
- Introducing `semver_mode` and `semver_metadata` should:
  - Default to `registry_epic_story` and `none` to avoid breaking current behaviour.
  - Only change behaviour when explicitly set in `rw-config.yaml`.
- Metadata is strictly additive; omitting it preserves current tag formats.

---

## 9. Next Steps

1. Implement configuration loading for `semver_mode` and `semver_metadata` in RW.
2. Refactor `semver_converter.py` to support mode selection and metadata reporting.
3. Update RW Step 5 and Step 11 implementations to use the enhanced converter.
4. Optionally add validators for SemVer/metadata consistency.
5. Pilot the new behaviour in ai-dev-kit itself, then document adoption steps for other projects.

