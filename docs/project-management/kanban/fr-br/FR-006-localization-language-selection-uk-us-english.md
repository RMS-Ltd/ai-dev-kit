---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Localization and Language Selection (UK/US English + International)

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-09  
**Submitted By:** User  
**Priority:** MEDIUM  
**Status:** PENDING

**Implementing Task:** [E21:S00:T01](../epics/Epic-21/Story-000-language-selection-at-setup.md)

---

## Summary

Add language/locale selection at the very beginning of the ai-dev-kit setup process, starting with UK English and US English variants, with extensibility for other major languages. This addresses cultural preferences and improves accessibility for international users.

---

## Description

### Problem Statement

Currently, ai-dev-kit uses US English throughout all documentation, templates, and user-facing content. While US English is more prevalent globally (~250-260M speakers in US vs ~70M in UK), users from different regions have cultural preferences for their English variant. Additionally, non-English speakers would benefit from localized versions.

**User Perspective:**
- UK English speakers prefer UK spelling and terminology (e.g., "colour" vs "color", "organise" vs "organize")
- US English speakers are accustomed to US conventions
- International users may prefer other languages entirely
- Cultural preference is not about "better" but about familiarity and comfort

### Use Case

**Primary Use Case: UK/US English Selection**
1. User starts ai-dev-kit setup (via template, CLI, or installer)
2. **First prompt:** "Select your preferred English variant: [UK English] [US English]"
3. All subsequent documentation, templates, and generated content use selected variant
4. User feels comfortable and familiar with the language conventions

**Extended Use Case: International Localization**
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


- [ ] **Content Localization**
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


#### Phase 2: International Localization (Extended)

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
  - Default to US English (most common) with easy override
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
  - Translation keys are well-organized and documented
  - Translation workflow integrates with existing processes


---

## Scope Analysis

### Problem Domain

**Framework Localization and Internationalization**

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

- **E21:S01:** Internationalization Infrastructure (if implementing Phase 2)
- **E21:S02:** Translation and Localization (if implementing Phase 2)
- **E21:S03:** Cultural Adaptation (if implementing Phase 2)
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
- [ ] Default is US English (most common)
- [ ] Clear indication of current language in project

### Phase 2: International Localization

- [ ] Language selection includes major languages
- [ ] Translation infrastructure is in place
- [ ] All user-facing content is translatable
- [ ] Translation files are well-organized
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
# [2] US English (color, organize, realize)
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
localization:
  language: "en-GB"  # or "en-US"
  variant: "UK"      # or "US"
```

**4. Content Generation**

All content generation (RW, templates, etc.) reads language preference and uses appropriate variant.

### Phase 2: International Localization

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

**Epic:** Epic 21 - Internationalization and Localization  
**Story:** Story 1 - Internationalization Infrastructure (or new Story 0: English Variant Selection)  
**Tasks:**
- T01: Add language selection to setup processes
- T02: Create UK/US English content variants
- T03: Implement configuration persistence
- T04: Update content generation to use language preference
- T05: Test UK/US English selection and content generation

### Phase 2: International Localization

**Epic:** Epic 21 - Internationalization and Localization  
**Story:** Story 2 - Translation and Localization  
**Tasks:**
- T01: Set up translation infrastructure
- T02: Identify and extract translatable content
- T03: Create translation files for major languages
- T04: Implement translation lookup and fallback
- T05: Add cultural adaptations (date/time/number formatting)
- T06: Test international localization

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

- **Clear Structure:** Translation files are organized and maintainable
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
- Language selection is optional (defaults to US English)
- Single prompt at start, then transparent
- Can be changed later if needed

---

## Related Work

- **Epic 21:** Internationalization and Localization (comprehensive canonical epic)
- **E21:S01:** Internationalization Infrastructure
- **E21:S02:** Translation and Localization
- **E21:S03:** Cultural Adaptation
- **Setup Processes:** Template setup, CLI tool, RW installer

---

## References

- `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` - Epic 21 definition
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` - Setup process
- `packages/frameworks/workflow mgt/scripts/install_release_workflow.py` - RW installer
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
- Epic: Epic 21 - Internationalization and Localization
- Story: Story 1 - Internationalization Infrastructure (or new Story 0: English Variant Selection)
- Task: Task 1 - Add language selection to setup processes
- Version: `v0.21.1.1+1` (to be assigned when Epic 21 is created)

**Kanban Links:**
- Epic: [To be created: `docs/project-management/kanban/epics/Epic-21/Epic-21.md`]
- Story: [To be created: `docs/project-management/kanban/epics/Epic-21/Story-001-internationalization-infrastructure.md`]
- Task: [To be created in Story document]

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

