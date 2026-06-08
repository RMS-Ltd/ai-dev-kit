---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Localisation and Language Selection (UK/US English + International)

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-09  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** IN PROGRESS

**Implementing Epic:** [Epic 21 – Internationalisation and Localisation](../epics/epic-21/Epic-21.md)

**Phase 1 host story:** [E21:S01](../epics/epic-21/story-01-language-selection-at-setup.md) (T01–T07)

**Implementing tasks (kanban anchors):** [E21:S01:T01](../epics/epic-21/story-01-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md) **v0.21.1.1+2** COMPLETE (template Step 0) · [E21:S01:T02](../epics/epic-21/story-01-language-selection-at-setup/T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md) **v0.21.1.2+1** COMPLETE (CLI init) · [E21:S01:T03](../epics/epic-21/story-01-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md) **v0.21.1.3+1** COMPLETE (RW installer) · [E21:S01:T04](../epics/epic-21/story-01-language-selection-at-setup/T04-create-ukus-english-content-variants-documentation-templates.md) **v0.21.1.4+1** COMPLETE (locale corpus MVP) · [E21:S01:T05](../epics/epic-21/story-01-language-selection-at-setup/T05-implement-configuration-persistence-ai-dev-kit-configyaml.md) **v0.21.1.5+1** COMPLETE (read/resolve API) · [E21:S01:T06](../epics/epic-21/story-01-language-selection-at-setup/T06-update-content-generation-to-use-language-preference-rw-temp.md) **v0.21.1.6+1** COMPLETE (content generation locale wiring) · [E21:S01:T07](../epics/epic-21/story-01-language-selection-at-setup/T07-test-ukus-english-selection-and-content-generation.md) **v0.21.1.7+1** COMPLETE (Phase 1 E2E tests; E21:S01 story closed)

**Phase 2 host story:** [E21:S02](../epics/epic-21/story-02-internationalisation-infrastructure.md) (T01–T07)

**Phase 2 implementing tasks (infrastructure — COMPLETE):** [E21:S02:T01](../epics/epic-21/story-02-internationalisation-infrastructure/T01-choose-i18n-frameworklibrary.md) **v0.21.2.1+1** COMPLETE ([ADR-024](../../architecture/standards-and-adrs/ADR-024-i18n-framework-strategy.md) C1 hybrid) · [E21:S02:T02](../epics/epic-21/story-02-internationalisation-infrastructure/T02-set-up-translation-file-structure-localeslang.md) **v0.21.2.2+1** COMPLETE (manifest v2 + keys scaffold) · [E21:S02:T03](../epics/epic-21/story-02-internationalisation-infrastructure/T03-implement-locale-detection-browsersystem-locale.md) **v0.21.2.3+1** COMPLETE (locale detection + precedence) · [E21:S02:T04](../epics/epic-21/story-02-internationalisation-infrastructure/T04-add-language-switching-functionality.md) **v0.21.2.4+1** COMPLETE (language switching) · [E21:S02:T05](../epics/epic-21/story-02-internationalisation-infrastructure/T05-configure-datetimenumber-formatting-per-locale.md) **v0.21.2.5+1** COMPLETE (Babel formatting) · [E21:S02:T06](../epics/epic-21/story-02-internationalisation-infrastructure/T06-implement-translation-key-system.md) **v0.21.2.6+1** COMPLETE (key resolution) · [E21:S02:T07](../epics/epic-21/story-02-internationalisation-infrastructure/T07-set-up-translation-fallback-chain-selected-english-us-englis.md) **v0.21.2.7+1** COMPLETE (fallback chain; E21:S02 story closed)

**Phase 3+ host stories (translation / locales):** [E21:S03](../epics/epic-21/story-03-translation-and-localisation.md) (T01 **v0.21.3.1+1** COMPLETE — content inventory + key extraction) · [E21:S04](../epics/epic-21/story-04-cultural-adaptation.md) · [E21:S05](../epics/epic-21/story-05-european-languages-localization.md) · [E21:S06](../epics/epic-21/story-06-cjk-languages-localization.md) · [E21:S07](../epics/epic-21/story-07-rtl-and-extended-locales.md)

---

## Summary

Add language/locale selection at the very beginning of the ai-dev-kit setup process, starting with UK English and US English variants, with extensibility for other major languages. This addresses cultural preferences and improves accessibility for international users.

---

## Description

### Problem Statement

Currently, ai-dev-kit uses US English throughout all documentation, templates, and user-facing content. While US English is more prevalent globally (~250-260M speakers in US vs ~70M in UK), users from different regions have cultural preferences for their English variant. Additionally, non-English speakers would benefit from localised versions.

**User Perspective:**
- UK English speakers prefer UK spelling and terminology (e.g., "colour" vs "color", "organise" vs "organise")
- US English speakers are accustomed to US conventions
- International users may prefer other languages entirely
- Cultural preference is not about "better" but about familiarity and comfort

### Use Case

**Primary Use Case: UK/US English Selection**
1. User starts ai-dev-kit setup (via template, CLI, or installer)
2. **First prompt:** "Select your preferred English variant: [UK English] [US English]"
3. All subsequent documentation, templates, and generated content use selected variant
4. User feels comfortable and familiar with the language conventions

**Extended Use Case: International Localisation**
1. User starts ai-dev-kit setup
2. **First prompt:** "Select your language: [English (UK)] [English (US)] [Español] [Français] [Deutsch] [中文] [日本語] [Português] [Other...]"
3. All content is localized to selected language
4. Significantly improves accessibility for non-English speakers

### Who Would Benefit

- **UK English speakers:** Cultural preference and familiarity
- **US English speakers:** Already served, but explicit selection improves clarity
- **International developers:** Non-English speakers gain access to framework
- **Multi-language teams:** Teams can choose their preferred language
- **Framework adoption:** Lower barrier to entry for international users

---

## Requirements

### Functional Requirements

#### Phase 1: UK/US English Selection (MVP)

- [ ] **Language Selection at Setup Start**
  - Prompt appears at the very beginning of any setup process
  - Options: UK English, US English
  - Selection persists throughout setup and project lifecycle
  - Stored in project configuration file (e.g., `ai-dev-kit-config.yaml`)


- [ ] **Content Localisation**
  - All documentation uses selected English variant
  - All templates use selected English variant
  - All generated content (changelogs, README, etc.) uses selected variant
  - Consistent spelling and terminology throughout


- [ ] **Configuration Persistence**
  - Language preference stored in project config
  - RW (Release Workflow) respects language preference
  - Kanban templates respect language preference
  - Framework installers respect language preference


- [ ] **Template Generation**
  - README templates in both variants
  - Documentation templates in both variants
  - Code comments/templates in both variants (if applicable)
  - Changelog templates in both variants


#### Phase 2: International Localisation (Extended)

- [ ] **Multi-Language Support**
  - Language selection includes major languages:
    - English (UK)
    - English (US)
    - Spanish (Español)
    - French (Français)
    - German (Deutsch)
    - Chinese Simplified (中文简体)
    - Chinese Traditional (中文繁體)
    - Japanese (日本語)
    - Portuguese (Português)
    - Russian (Русский)
    - Arabic (العربية)
    - Other languages as needed


- [ ] **Translation Infrastructure**
  - Translation file structure (e.g., `locales/en-GB/`, `locales/en-US/`, `locales/es/`)
  - Translation key system for all user-facing content
  - Translation workflow and management
  - Fallback to English if translation missing


- [ ] **Cultural Adaptation**
  - Date/time formatting per locale
  - Number formatting per locale
  - Currency formatting (if applicable)
  - Cultural context in examples and documentation


### Non-Functional Requirements

- [ ] **Performance Considerations**
  - Language selection adds minimal overhead (&lt;100ms)
  - Translation lookup is fast (cached, indexed)
  - No impact on framework performance


- [ ] **Usability Considerations**
  - Language selection is clear and intuitive
  - Default to UK English (en-GB) (most common) with easy override
  - Language can be changed later (with re-generation of content)
  - Clear indication of current language in UI/docs


- [ ] **Compatibility Considerations**
  - Works with all installation methods (template, CLI, submodules)
  - Compatible with existing projects (backward compatible)
  - Migration path for existing projects to add language preference
  - Framework packages remain language-agnostic (code, not content)


- [ ] **Maintainability Considerations**
  - Translation files are easy to update
  - New languages can be added without code changes
  - Translation keys are well-organised and documented
  - Translation workflow integrates with existing processes


---

## Scope Analysis

### Problem Domain

**Framework Localisation and Internationalisation**

### Affected Areas

1. **Setup/Installation Processes**
   - Template setup (GitHub template)
   - CLI tool (`ai-dev-kit init`)
   - RW Installer (`install_release_workflow.py`)
   - Manual installation guides

2. **Documentation**
   - All README files
   - All user guides
   - All developer documentation
   - All template documentation

3. **Templates**
   - README templates
   - Changelog templates
   - Kanban templates (epic/story/task descriptions)
   - Code templates (comments, docstrings)

4. **Generated Content**
   - Changelog entries (via RW)
   - Version markers
   - Commit messages (if automated)
   - Documentation updates

5. **Framework Packages**
   - Workflow Management package
   - Kanban Framework package
   - Versioning Framework package
   - Any future packages

### Estimated Complexity

**Phase 1 (UK/US English):** MEDIUM
- Requires content duplication (UK/US variants)
- Requires selection mechanism in setup
- Requires configuration persistence
- Relatively straightforward (same language, different spelling)

**Phase 2 (International):** COMPLEX
- Requires translation infrastructure
- Requires translation workflow
- Requires cultural adaptation
- Requires ongoing translation maintenance
- Significant effort but high value

### Dependencies

- **E21:S02:** Internationalisation Infrastructure (if implementing Phase 2)
- **E21:S03:** Translation and Localisation (if implementing Phase 2)
- **E21:S04:** Cultural Adaptation (if implementing Phase 2)
- Setup/installation processes (all methods)
- Configuration system (for language preference storage)

---

## Acceptance Criteria

### Phase 1: UK/US English Selection

- [ ] Language selection prompt appears at start of all setup processes
- [ ] Selection persists in project configuration
- [ ] All documentation uses selected English variant
- [ ] All templates use selected English variant
- [ ] All generated content uses selected variant
- [ ] Language preference can be changed (with content regeneration)
- [ ] Default is UK English (en-GB) (most common)
- [ ] Clear indication of current language in project

### Phase 2: International Localisation

- [ ] Language selection includes major languages
- [ ] Translation infrastructure is in place
- [ ] All user-facing content is translatable
- [ ] Translation files are well-organised
- [ ] Fallback to English if translation missing
- [ ] Cultural adaptations (date/time/number formatting)
- [ ] Translation workflow is documented
- [ ] New languages can be added easily

---

## Proposed Solution

### Phase 1: UK/US English Selection (MVP)

**1. Language Selection at Setup Start**

Add language selection as the first step in all setup processes:

**Template Setup:**
- GitHub template includes language selection prompt
- Selection stored in `ai-dev-kit-config.yaml`

**CLI Tool:**
```bash
ai-dev-kit init
# First prompt:
# Select your preferred English variant:
# [1] UK English (colour, organise, realise)
# [2] US English (color, organise, realize)
# Enter choice [1-2]: _
```

**RW Installer:**
```bash
python scripts/install_release_workflow.py
# First prompt:
# Select your preferred English variant:
# [1] UK English
# [2] US English
# Enter choice [1-2]: _
```

**2. Content Structure**

Create language-specific content directories:
```
packages/frameworks/kanban/
  locales/
    en-GB/          # UK English
      templates/
      docs/
    en-US/          # US English (default)
      templates/
      docs/
```

**3. Configuration**

Add to `ai-dev-kit-config.yaml`:
```yaml
localisation:
  language: "en-GB"  # or "en-US"
  variant: "UK"      # or "US"
```

**4. Content Generation**

All content generation (RW, templates, etc.) reads language preference and uses appropriate variant.

### Phase 2: International Localisation

**1. Translation Infrastructure**

Use standard i18n approach:
- Translation keys (e.g., `setup.welcome.title`)
- Translation files per language (`locales/en-GB/`, `locales/es/`, etc.)
- Translation management system
- Fallback chain (selected language → English → US English)

**2. Translation Workflow**

- Identify all translatable strings
- Create translation files
- Translation review process
- Integration with existing workflows

**3. Cultural Adaptation**

- Locale-specific formatting (date/time/numbers)
- Cultural context in examples
- Right-to-left (RTL) support for Arabic/Hebrew

---

## Implementation Approach

### Phase 1: UK/US English (Recommended First Step)

**Epic:** Epic 21 - Internationalisation and Localisation  
**Story:** Story 1 - Internationalisation Infrastructure (or new Story 1: English Variant Selection)  
**Tasks:**
- T01: Add language selection to setup processes
- T02: Create UK/US English content variants
- T03: Implement configuration persistence
- T04: Update content generation to use language preference
- T05: Test UK/US English selection and content generation

### Phase 2: International Localisation

**Epic:** Epic 21 - Internationalisation and Localisation  
**Story:** Story 2 - Translation and Localisation  
**Tasks:**
- T01: Set up translation infrastructure
- T02: Identify and extract translatable content
- T03: Create translation files for major languages
- T04: Implement translation lookup and fallback
- T05: Add cultural adaptations (date/time/number formatting)
- T06: Test international localisation

---

## Benefits

### For Users

- **Cultural Comfort:** Users work in their preferred language variant
- **Accessibility:** Non-English speakers can use the framework
- **Professional Feel:** Framework feels native to their region
- **Reduced Cognitive Load:** No need to mentally translate

### For Framework

- **Broader Adoption:** Accessible to more developers globally
- **Professional Image:** Shows attention to international users
- **Competitive Advantage:** Most frameworks are English-only
- **Community Growth:** Enables non-English speaking contributors

### For Maintainers

- **Clear Structure:** Translation files are organised and maintainable
- **Extensible:** Easy to add new languages
- **Standard Approach:** Uses common i18n patterns

---

## Risks and Mitigations

### Risk 1: Translation Maintenance Burden

**Mitigation:**
- Start with UK/US English (same language, minimal maintenance)
- Use community contributions for other languages
- Provide clear translation guidelines
- Use translation keys (not hardcoded strings)

### Risk 2: Incomplete Translations

**Mitigation:**
- Fallback to English if translation missing
- Clear indication of translation completeness
- Prioritize most-used content first

### Risk 3: Setup Complexity

**Mitigation:**
- Language selection is optional (defaults to UK English (en-GB))
- Single prompt at start, then transparent
- Can be changed later if needed

---

## Related Work

- **Epic 21:** Internationalisation and Localisation (comprehensive canonical epic)
- **E21:S02:** Internationalisation Infrastructure
- **E21:S03:** Translation and Localisation
- **E21:S04:** Cultural Adaptation
- **Setup Processes:** Template setup, CLI tool, RW installer

---

## References

- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 definition
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Setup process
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` - RW installer
- Standard i18n practices and translation management systems

---

## Notes

**Language Statistics (for reference):**
- **US English:** ~250-260M native speakers (US population)
- **UK English:** ~70M native speakers (UK population)
- **International English:** Varies by region
  - Europe: Often UK English (taught in schools)
  - Asia: Often US English (tech industry influence)
  - Other regions: Mixed


**User's Perception Check:**
- User's perception that US English is more common internationally (especially in tech) is generally accurate
- However, UK English is still preferred in many Commonwealth countries and Europe
- Both variants are valid and should be supported

**Implementation Priority:**
- Phase 1 (UK/US English) is recommended as MVP
- Phase 2 (International) can follow based on demand and resources
- Both phases map to Epic 21 in the comprehensive canonical structure

---

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-09  
**Intake By:** User

**Decision Flow Results:**
- [ ] Story Match Found: [Epic X, Story Y] → Task [T]
- [x] New Story Created: Epic 21, Story 1 → Task 1 (Language selection infrastructure)
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**
- Epic: Epic 21 - Internationalisation and Localisation
- Phase 1 host story: E21:S01 – Language Selection at Setup (T01–T07)
- Phase 2: E21:S02–S04 (infrastructure, pipeline, cultural adaptation)
- Version: `0.21.S.T+B` (assigned per story/task on epic branch)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/epic-21/Epic-21.md`](../epics/epic-21/Epic-21.md)
- Phase 1: [`story-01-language-selection-at-setup.md`](../epics/epic-21/story-01-language-selection-at-setup.md)
- Phase 2: [`story-02-internationalisation-infrastructure.md`](../epics/epic-21/story-02-internationalisation-infrastructure.md), [`story-03-translation-and-localisation.md`](../epics/epic-21/story-03-translation-and-localisation.md), [`story-04-cultural-adaptation.md`](../epics/epic-21/story-04-cultural-adaptation.md)

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

