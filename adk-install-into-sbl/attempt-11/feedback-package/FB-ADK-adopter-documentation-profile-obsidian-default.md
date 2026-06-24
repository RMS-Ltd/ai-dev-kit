# FB — Adopter documentation profile: Obsidian/git default, not Docusaurus (FR-121 / ADR-026)

**Type:** Adopter feedback (install programme / documentation system design)  
**Reporter:** Starborn Legacy — attempt 11 (operator discussion → kit routing)  
**Date:** 2026-06-24  
**Status:** Design recommendation — **kit-side work required**; adopter must not paper over with local `rw-config` hacks alone  
**Related:** FR-121 · ADR-026 · E05:S08:T06 · `documentation_surfaces` · `maintainer_editor_profile`  
**Programme:** UXR-029 · [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)  
**Kit pin:** `v0.4.1171`  
**Related FB:** [attempt-09 canonical maintainer documentation schema](../attempt-09/FB-ADK-canonical-maintainer-documentation-schema.md) · [optimal install sequence](../attempt-09/FB-ADK-optimal-greenfield-install-sequence.md) (phase 3½)

---

## Summary

Greenfield RW install (mode C) emits `documentation_surfaces` that **default `adopter_public` to Docusaurus** with `allowlist_ref: portal/docusaurus.config.js`, while setting `maintainer_editor_profile: none`. On Starborn Legacy (private application repo, no `portal/`), Install RC **`rc-docs-schema` still PASS** — the gate only checks that the YAML key exists, not that the declared surface is **implemented or appropriate**.

**Adopter position:** Docusaurus should **not** ship as the greenfield default. Most adopters cannot guarantee a public repo or a publish pipeline. **Obsidian-oriented, in-repo Markdown** (git SoT, minimal toolchain) is more respectful; adopters may migrate to Docusaurus or another SSG later. At RC, the kit must ship a **coherent, functional documentation model** — topology, authority, entry points, lifecycle — not a phantom static-site config.

**Kit ask:** Change default **application** install profile on the ADK side; tighten `rc-docs-schema`; orchestrate phase 3½ documentation scaffolding accordingly.

---

## 1. What the installer emitted (attempt 11 evidence)

From `install_release_workflow.py` / orchestrator RW mode C — written to `rw-config.yaml`:

```yaml
# FR-121 / ADR-026 (E05:S08:T06) — documentation surface authority
documentation_surfaces:
  maintainer_kb:
    sot: git  # git | external (non-default)
  adopter_public:
    sot: docusaurus
    allowlist_ref: portal/docusaurus.config.js
  external_kb:  # optional enterprise; not used by ai-dev-kit OSS
    provider: none  # none | notion
maintainer_editor_profile: none  # none | obsidian-personal | obsidian-team
```

### Observed on Starborn Legacy post-install

| Declared | On disk | RC result |
|----------|---------|-----------|
| `adopter_public.sot: docusaurus` | **No** `portal/` tree | `rc-docs-schema` **PASS** |
| `allowlist_ref: portal/docusaurus.config.js` | **File missing** | (not validated) |
| `maintainer_editor_profile: none` | No `.obsidian/` scaffold | (not validated) |
| `maintainer_kb.sot: git` | `vendor/ai-dev-kit` | OK |

**Transcript:** `logs/attempt-11/transcripts/20260624T154645Z-orchestrator-arm-b.txt`  
**Install RC row:** `rc-docs-schema` → `documentation_surfaces in rw-config` (presence only)

This is **false precision**: the config asserts a publishing stack the adopter did not request and did not receive.

---

## 2. Problem statement (why Docusaurus default is wrong)

### 2.1 Maintainer-shaped config on adopters

The default encodes **ai-dev-kit maintainer** assumptions:

- A **public** documentation portal is a near-term goal
- Node toolchain + Docusaurus scaffolding is acceptable at greenfield
- An allowlist-driven publish surface (`portal/docusaurus.config.js`) will exist

Many adopters are **private** repos (games, internal tools, pre-release products). They need **in-repo docs in git**, not an implied obligation to publish.

### 2.2 Three concerns conflated in one block

FR-121 / ADR-026 bundles distinct decisions:

| Concern | Current key | What it should mean for greenfield adopters |
|---------|-------------|---------------------------------------------|
| Kit/framework KB | `maintainer_kb` | Vendor tree / external maintainer SoT — **not** adopter-authored |
| Adopter-owned documentation | `adopter_public` | **Misnamed** — reads as “must be public” + Docusaurus |
| Optional enterprise KB | `external_kb` | Not used in OSS — OK as `none` |
| Editor ergonomics | `maintainer_editor_profile` | How adopters **edit** their docs — orthogonal to publish |

`adopter_public: docusaurus` collapses **ownership**, **visibility**, and **toolchain** into one maintainer-default.

### 2.3 RC does not enforce a functional documentation model

Attempt 11 passed Install RC with:

- Phantom Docusaurus reference
- `maintainer_editor_profile: none` while kanban/docs are already Markdown-native
- No `DOCUMENTATION_SCHEMA.md` topology install (listed as manual post-step in orchestrator output)

**Operator bar:** At RC, adopters should have a **coherent, functional documentation model** — not merely a YAML stub.

---

## 3. Recommended default (kit-side — application profile)

### 3.1 Adopter position

1. **Do not ship Docusaurus** as the greenfield default for application adopters.
2. **Default to Obsidian-friendly, in-repo Markdown** — git SoT, minimal tech requirements; Obsidian is optional, not mandatory to build or run the project.
3. **Respect private adopters** — nothing in default config should imply the repo will be public or that a publish pipeline is required.
4. **Preserve migration path** — Docusaurus (or MkDocs, etc.) remains an **explicit opt-in publish profile** for adopters who want a public portal later.

### 3.2 Proposed greenfield default (`application` profile)

```yaml
documentation_surfaces:
  maintainer_kb:
    sot: git
    path: vendor/ai-dev-kit          # kit KB — read-only for adopters
  adopter_docs:                      # rename from adopter_public (see §4)
    sot: git
    path: docs                       # adopter-authored; private by default
  external_kb:
    provider: none

maintainer_editor_profile: obsidian-personal   # or obsidian-team
```

Optional publish surface ( **not** default):

```yaml
adopter_publish:
  provider: none                     # none | docusaurus | mkdocs | external
  # when docusaurus: allowlist_ref, portal scaffold — only after opt-in
```

### 3.3 Why Obsidian-first fits greenfield

| Property | Obsidian / git Markdown | Docusaurus default |
|----------|-------------------------|-------------------|
| Private repo friendly | Yes — docs stay in VCS | Implies publish / public site |
| Toolchain at install | Markdown + git | Node, `portal/`, build config |
| Coherence with kanban | Same medium (`docs/kanban/*.md`) | Second doc system |
| Agent/edit ergonomics | Plain files in repo | Split source vs build output |
| Adopter respect | Start simple; upgrade optional | Over-specifies day one |

Obsidian is not zero-config (vault settings, plugins), but it is **optional** — the repo remains fully usable with any Markdown editor.

---

## 4. Naming and schema (kit design)

### 4.1 Rename or split `adopter_public`

**Problem:** “public” implies visibility.

**Kit options:**

| Option | Change |
|--------|--------|
| A | Rename `adopter_public` → `adopter_docs` (git SoT, visibility-agnostic) |
| B | Split into `adopter_docs` (git) + `adopter_publish` (optional SSG) |
| C | Keep key for compat; document that `sot: git` is valid and preferred for application profile |

**Recommendation:** **B** — clearest for FR-121 semantics and RC validation.

### 4.2 `maintainer_editor_profile` must align with default

Emitting `maintainer_editor_profile: none` alongside Docusaurus is internally inconsistent. If docs are Markdown in git, default **`obsidian-personal`** (or `obsidian-team`) and scaffold optional `.obsidian/` + `docs/README.md` index in phase 3½.

---

## 5. What “coherent, functional documentation model at RC” means

Separate **contract** (what RC validates) from **profile** (what installer scaffolds).

### 5.1 RC contract (minimum at install-complete)

| Piece | Requirement |
|-------|-------------|
| **Topology** | Declared paths exist (`docs/`, kanban root, archive boundary) per `DOCUMENTATION_SCHEMA.md` profile |
| **Authority** | `documentation_surfaces` matches on-disk layout; no phantom `allowlist_ref` |
| **Entry points** | `docs/README.md` or equivalent index; README links to doc map |
| **Lifecycle** | evergreen / TTL frontmatter rules documented (kanban already uses this) |
| **Comprehension** | `COMPREHENSION.md` states doc SoT, kanban root, restore ≠ migrate |
| **Maintainer boundary** | Kit KB in `vendor/` — not copied into adopter trees |

### 5.2 Installer profile (`application` greenfield)

Phase 3½ (per optimal install sequence) should **orchestrate**, not leave manual:

- Install `DOCUMENTATION_SCHEMA.md` profile `application`
- Scaffold `docs/` topology (not `portal/` unless publish opt-in)
- Optional `.obsidian/` stub (gitignored or committed per profile doc)
- Set `maintainer_editor_profile` consistently
- **Do not** write `sot: docusaurus` unless adopter selects publish profile

### 5.3 Tighten `rc-docs-schema`

Current check (attempt 11): `documentation_surfaces` key present → PASS.

**Proposed checks:**

| Check | Fail when |
|-------|-----------|
| `allowlist_ref` resolvability | `sot: docusaurus` but path missing |
| `path` resolvability | `sot: git` but `path` missing or not a directory |
| Profile consistency | `maintainer_editor_profile: none` but `adopter_publish` not `none` without scaffold |
| Phantom publish | `docusaurus` declared without `portal/` or opt-in flag |

---

## 6. Docusaurus — where it still belongs

Docusaurus is valid as an **opt-in publish profile** for adopters who:

- Open-source a library or framework
- Want a public documentation site with versioning and search
- Accept Node toolchain in CI

It should be documented in `INSTALL_IN_YOUR_PROJECT.md` under **“Publish profile: Docusaurus”**, not silently written into every `rw-config.yaml`.

**ai-dev-kit maintainer** repo may continue to use Docusaurus for **its own** public KB — that must not be conflated with the **adopter application** default.

---

## 7. Starborn Legacy — adopter scope vs kit scope

| Work | Owner |
|------|-------|
| Change RW installer default profile | **Kit** (`install_release_workflow.py`, schema, templates) |
| Phase 3½ documentation orchestration | **Kit** (`install_greenfield_path.py` layer) |
| `rc-docs-schema` implementability checks | **Kit** (`validate_install_rc.py` + checklist) |
| Rename/split `documentation_surfaces` keys | **Kit** (ADR-026 revision) |
| Local `rw-config.yaml` edit to Obsidian/git | SBL **temporary** until pin absorbs fix — not a substitute for kit change |

SBL will **not** treat a local `rw-config` patch as resolution of this FB. Evidence remains the installer-emitted default on pin `v0.4.1171`.

---

## 8. Requested kit improvements

| ID | Priority | Change |
|----|----------|--------|
| R1 | **HIGH** | Default **application** greenfield profile: `adopter_docs.sot: git`, `path: docs`; `maintainer_editor_profile: obsidian-personal` |
| R2 | **HIGH** | Remove Docusaurus from default RW mode C output; Docusaurus only via explicit publish opt-in |
| R3 | **HIGH** | `rc-docs-schema`: validate path/`allowlist_ref` existence; fail on phantom surfaces |
| R4 | **MEDIUM** | Split or rename `adopter_public` → `adopter_docs` + optional `adopter_publish` (ADR-026) |
| R5 | **MEDIUM** | Orchestrate phase 3½: `DOCUMENTATION_SCHEMA.md` profile install + `docs/` topology + optional Obsidian stub |
| R6 | **MEDIUM** | `COMPREHENSION.md` template: document git SoT + maintainer KB boundary (not Docusaurus) |
| R7 | **LOW** | `INSTALL_IN_YOUR_PROJECT.md`: “Private repo / no publish” vs “Public portal (Docusaurus)” decision tree |

Route to **E05** (documentation) · **E06:S09** (install programme) · FR-121 maintainers.

---

## 9. Evidence index

| Artifact | Path |
|----------|------|
| Installer-emitted `rw-config` | `rw-config.yaml` (post orchestrator) |
| Comprehension (documents docusaurus — should match kit fix) | `COMPREHENSION.md` |
| Install RC `rc-docs-schema` row | `docs/adk-feedback/attempt-11/install-rc-report-final.json` |
| Orchestrator transcript | `logs/attempt-11/transcripts/20260624T154645Z-orchestrator-arm-b.txt` |
| Optimal sequence phase 3½ | `docs/adk-feedback/attempt-09/FB-ADK-optimal-greenfield-install-sequence.md` |
| Attempt 09 documentation schema FB | `docs/adk-feedback/attempt-09/FB-ADK-canonical-maintainer-documentation-schema.md` |
| This FB | `docs/adk-feedback/attempt-11/FB-ADK-adopter-documentation-profile-obsidian-default.md` |

---

## 10. Discussion capture (operator rationale, verbatim sense)

> We should not ship Docusaurus; we can't guarantee that the adopter will be making their repo public. Obsidian, as an in-repo `.md` solution with minimal tech requirements, is far more respectful to adopters. They can migrate to a more complex solution if they want. As long as when we reach RC, we ship a coherent, functional documentation model.

**Maintainer interpretation:** The kit owns the default profile and RC gates. Adopters should not inherit a publish stack they did not choose. Coherence at RC means **implemented topology + honest `rw-config`**, not a Docusaurus key with no `portal/`.
