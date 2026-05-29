---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T11:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Dependency FAQ

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 4 - Framework Documentation Management  
**Task:** E05:S04:T05 - Create comprehensive user documentation for Epic 6 framework dependency architecture

---

## Overview

Frequently asked questions about installing, updating, and using AI Dev Kit frameworks as dependencies.

### Scope (greenfield vs brownfield)

- **Greenfield / new-template first run (FR-080):** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) · [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- **Policy:** [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · Brownfield track: [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## General Questions

### What is the difference between copy-paste and dependency-based installation?

**Copy-paste:** Frameworks are manually copied into your project. Updates require manually copying new versions. No automatic update mechanism.

**Dependency-based:** Frameworks are installed as dependencies (Git submodules, CLI tool, or package managers). Updates can be automatic or semi-automatic with notifications.

**Benefits of dependency-based:**
- Automatic update notifications
- Version tracking
- Consistent framework versions
- Standard dependency management

### Which installation method should I use?

**Git Submodules (Phase 1):** Use if you want immediate availability, full control, and don't mind manual update steps.

**CLI Tool (Phase 2):** Use if you want a unified interface, automated updates, and easier management. (Coming soon)

**Package Managers (Phase 3):** Use if you prefer standard npm/pip workflows and automatic dependency resolution. (Future)

**Recommendation:** Start with Git submodules, migrate to CLI tool when available.

### Can I use frameworks without installing as dependencies?

Yes. You can still copy-paste frameworks manually. However, you won't get automatic update notifications or version tracking benefits.

### Do I need to install all frameworks?

No. Frameworks are modular. Install only what you need:
- **Workflow Management:** For Release Workflow (RW) automation
- **Kanban:** For project management and work tracking
- **Numbering & Versioning:** For version management

You can use them standalone or together.

---

## Use Case Questions

### What are the different ways I can use ai-dev-kit frameworks?

There are 12 primary use cases for adopting ai-dev-kit frameworks:

**Primary Use Cases:**
1. **Template → All Packages:** New project from template with all frameworks
2. **Template → Some Packages:** New project from template with selected frameworks
3. **Existing Project → All Packages:** Install all frameworks into existing project
4. **Existing Project → Some Packages:** Install selected frameworks into existing project

**Additional Use Cases:**
5. **Reference/Learning Only:** Use documentation and examples without installing
6. **Monorepo/Multi-Project:** Single installation shared across multiple projects
7. **Gradual/Migratory Adoption:** Start with one framework, add more over time
8. **Fork and Customize:** Fork repository for heavy customization
9. **Non-GitHub Git Repositories:** Use with GitLab, Bitbucket, or self-hosted Git
10. **Local-Only Projects:** Use frameworks in local Git repository only
11. **CI/CD Only Usage:** Use frameworks in build/CI processes only
12. **Educational/Training Context:** Use for teaching, workshops, or training

See the [Use Cases Guide](framework-dependency-use-cases.md) for detailed information about each use case.

### Which use case should I choose?

**If you're starting a new project:**
- Use **Template → All Packages** (Use Case 1) if you want everything
- Use **Template → Some Packages** (Use Case 2) if you want selective adoption

**If you have an existing project:**
- Use **Existing Project → All Packages** (Use Case 3) if you want all frameworks
- Use **Existing Project → Some Packages** (Use Case 4) if you want selective adoption

**If you're just learning:**
- Use **Reference/Learning Only** (Use Case 5) to study without installing

**If you're managing multiple projects:**
- Use **Monorepo/Multi-Project** (Use Case 6) for centralized management

See the [Use Cases Guide](framework-dependency-use-cases.md) for a selection matrix and detailed guidance.

### Can I use frameworks with non-GitHub repositories?

Yes. **Use Case 9: Non-GitHub Git Repositories** covers this scenario.

**Supported:**
- GitLab repositories
- Bitbucket repositories
- Self-hosted Git servers
- Any Git-compatible repository

**Limitations:**
- Template feature may not be available (depends on your Git host)
- Manual setup required
- May need to adapt instructions for your Git host

**Implementation:**
- Use Git submodules (works with any Git host)
- Follow installation guide, adapting for your Git host
- Framework updates still work via Git tags

See [Use Cases Guide - Non-GitHub Git Repositories](framework-dependency-use-cases.md#use-case-9-non-github-git-repositories) for details.

### Can I use frameworks in a local-only project (no remote repository)?

Yes. **Use Case 10: Local-Only Projects** covers this scenario.

**Benefits:**
- No remote repository required
- Local-only development
- Full framework functionality
- Privacy and security

**Limitations:**
- No remote backup
- No collaboration features
- Manual update process
- No CI/CD integration

**Implementation:**
- Initialize local Git repository
- Install frameworks using Git submodules
- Work locally
- Manual updates as needed

See [Use Cases Guide - Local-Only Projects](framework-dependency-use-cases.md#use-case-10-local-only-projects) for details.

### Can I use frameworks in a monorepo with multiple projects?

Yes. **Use Case 6: Monorepo/Multi-Project Setup** covers this scenario.

**Benefits:**
- Single installation point
- Centralized framework management
- Version consistency across projects
- Shared KB structure (optional)

**Implementation:**
- Install frameworks at monorepo root
- Projects reference shared frameworks
- Centralized update management
- All projects benefit from updates

See [Use Cases Guide - Monorepo Setup](framework-dependency-use-cases.md#use-case-6-monorepomulti-project-setup) for details.

### Can I start with one framework and add more later?

Yes. **Use Case 7: Gradual/Migratory Adoption** covers this scenario.

**Benefits:**
- Low-risk adoption
- Test before committing
- Gradual workflow improvement
- Hybrid approach during transition

**Implementation:**
- Start with one framework (e.g., Kanban)
- Test and validate
- Add more frameworks incrementally
- Migrate from copy-paste as needed

See [Use Cases Guide - Gradual Adoption](framework-dependency-use-cases.md#use-case-7-gradualmigratory-adoption) for details.

### Can I use frameworks for learning without installing?

Yes. **Use Case 5: Reference/Learning Only** covers this scenario.

**Benefits:**
- No dependency management overhead
- Study patterns without commitment
- Copy specific components as needed
- Educational and research purposes

**Implementation:**
- Browse documentation and examples
- Copy templates or code snippets manually
- Study patterns and best practices
- No installation required

See [Use Cases Guide - Reference Only](framework-dependency-use-cases.md#use-case-5-referencelearning-only) for details.

---

## Installation Questions

### How do I install frameworks in a new project?

1. Initialize ai-dev-kit: `ai-dev-kit init`
2. Install frameworks: `ai-dev-kit install workflow-mgmt@2.0.0`
3. Configure frameworks: Update paths and settings
4. Test installation: Run validation scripts

See the [Installation Guide](framework-dependency-installation-guide.md) for detailed steps.

### Can I install frameworks in an existing project?

Yes. You can migrate from copy-paste to dependencies:

1. Backup current frameworks
2. Remove copied frameworks
3. Install as dependencies
4. Restore customizations

See the [Integration Guide](framework-dependency-integration-guide.md) for migration steps.

### What are the system requirements?

- **Git** (required for all methods)
- **Python 3.8+** (for CLI tool and frameworks)
- **Node.js 16+** (if using npm package manager)
- Unix-like system (Linux, macOS) or Windows with Git Bash/WSL

### Do I need to update paths after installation?

Yes. Frameworks contain example paths that need to be updated for your project:

```bash
# Find example paths
grep -r "src/confidentia" frameworks/workflow-mgmt/

# Replace with your paths
find . -type f -exec sed -i '' 's/src\/confidentia/src\/yourproject/g' {} \;
```

See the [Usage Guide](framework-dependency-usage-guide.md) for configuration steps.

---

## Update Questions

### How do I know when frameworks are updated?

**CLI Tool:**
```bash
ai-dev-kit check
```

**Git Submodules:**
```bash
cd .ai-dev-kit
git fetch origin --tags
git tag | grep workflow-mgmt
```

**Package Managers:**
```bash
npm outdated  # npm
pip list --outdated  # pip
```

You can also configure automatic checking and notifications.

### Should I update immediately when notified?

**PATCH updates (2.0.0 → 2.0.1):** Usually safe to update immediately (bug fixes, security patches).

**MINOR updates (2.0.0 → 2.1.0):** Review changelog, test in development, then update (new features, improvements).

**MAJOR updates (2.0.0 → 3.0.0):** Review breaking changes, plan migration, test thoroughly before updating.

### What if an update breaks my project?

**Rollback:**
```bash
ai-dev-kit update workflow-mgmt@2.0.0  # Previous version
```

**Or:**
```bash
cd .ai-dev-kit
git checkout workflow-mgmt-v2.0.0
cd ..
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt
```

Always test updates in a development branch before applying to production.

### Can I pin frameworks to specific versions?

Yes. In `.ai-dev-kit.yaml`:

```yaml
frameworks:
  workflow-mgmt:
    version: "2.0.0"
    pin: true  # Prevents automatic updates
```

Or use Git tags to pin submodule versions.

---

## Configuration Questions

### Where is the configuration file?

Configuration file: `.ai-dev-kit.yaml` in your project root.

Framework-specific configuration:
- Workflow Management: `frameworks/workflow-mgmt/rw-config.yaml`
- Kanban: Framework-specific configs in `frameworks/kanban/`

### How do I configure update notifications?

```bash
# Enable automatic checking
ai-dev-kit config set auto_check true
ai-dev-kit config set check_interval daily

# Configure notification channel
ai-dev-kit config set notification_channel console
```

### Can I use different backends for different frameworks?

Yes. Each framework can use a different backend:

```yaml
frameworks:
  workflow-mgmt:
    backend: git-submodule
  kanban:
    backend: npm
```

---

## Version Questions

### What versioning scheme do frameworks use?

Frameworks use **Semantic Versioning (SemVer):** `MAJOR.MINOR.PATCH`

- **MAJOR:** Breaking changes (2.0.0 → 3.0.0)
- **MINOR:** New features, backward compatible (2.0.0 → 2.1.0)
- **PATCH:** Bug fixes, backward compatible (2.0.0 → 2.0.1)

### How do I check framework versions?

```bash
# CLI tool
ai-dev-kit status

# Git submodules
cd .ai-dev-kit
git describe --tags

# Package managers
npm list @ai-dev-kit/workflow-mgmt  # npm
pip show ai-dev-kit-workflow-mgmt  # pip
```

### What if frameworks have version conflicts?

```bash
# Check compatibility
ai-dev-kit check-compatibility

# Resolve conflicts
ai-dev-kit update --resolve-conflicts

# Or update specific framework
ai-dev-kit update workflow-mgmt@2.1.0
```

---

## Git Submodule Questions

### How do I update Git submodules?

**Manual:**
```bash
cd .ai-dev-kit
git fetch origin
git checkout workflow-mgmt-v2.1.0
cd ..
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt
```

**Automated:**
```bash
./scripts/update-frameworks.sh workflow-mgmt 2.1.0
```

### What if submodule is not initialized?

```bash
# Initialize submodules
git submodule update --init --recursive

# Or clone with submodules
git clone --recurse-submodules <repo-url>
```

### Can I use Git subtrees instead of submodules?

Yes. The CLI tool supports Git subtrees:

```bash
ai-dev-kit install workflow-mgmt --backend git-subtree
```

Subtrees merge framework code directly into your repository (no separate submodule directory).

---

## CLI Tool Questions

### When will the CLI tool be available?

The CLI tool is planned for Phase 2 (short-term). Git submodules (Phase 1) are available now.

### How do I install the CLI tool?

```bash
# Via pip (when available)
pip install ai-dev-kit

# From source
git clone https://github.com/earlution/ai-dev-kit.git
cd ai-dev-kit/cli
pip install -e .
```

### What if CLI command is not found?

```bash
# Check installation
pip show ai-dev-kit

# Install if missing
pip install ai-dev-kit

# Check PATH
echo $PATH

# Use Python module
python3 -m vibe_dev_kit install workflow-mgmt
```

---

## Framework Functionality Questions

### How do I use the Release Workflow (RW)?

1. Ensure you're on correct branch: `git branch --show-current`
2. Update version file: `vim src/yourproject/version.py`
3. In your AI assistant, send **`RW` with a task id in the same message** (**FR-060**), e.g. `RW E5S01T01` or `RW E5:S01:T01` (not `RW` alone)
4. RW runs its configured steps automatically (see your `.cursorrules` / agent execution guide)

See the [Usage Guide](framework-dependency-usage-guide.md) for details.

### What if RW fails validation?

```bash
# Check branch context
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py

# Check changelog format
python3 scripts/validation/validate_changelog_format.py

# Fix issues and retry
```

### How do I enable the "RW" trigger in Cursor?

**Answer:** You need to add the RW trigger section to your `.cursorrules` file.

**Quick Setup:**

1. **Use the RW installer (recommended):**
   ```bash
   python frameworks/workflow-mgmt/scripts/install_release_workflow.py
   ```
   This automatically creates/updates `.cursorrules` with the RW trigger section.

2. **Or manually add the section:**
   - Open `frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md`
   - Copy the section from `### 🚀 RELEASE WORKFLOW (RW) TRIGGER` to the end
   - Paste into your project's `.cursorrules` file (create it if it doesn't exist)
   - Update file paths in the section to match your project structure

3. **Restart Cursor** to reload `.cursorrules`

4. **Test:** In Cursor chat, send e.g. `RW E5S01T01` or `RW E5:S01:T01` — the agent should recognize the trigger (**FR-060** requires a parseable `E…S…T…` in the same message as `RW`)

**Without `.cursorrules`:** The RW trigger is not active. You'll need to manually run workflow steps.

**See:** [Installation Guide](framework-dependency-installation-guide.md#4-enable-rw-trigger-in-cursorrules-workflow-management-framework-only) for detailed instructions.

### How do I update Kanban documentation?

```bash
# Run update script
cd frameworks/kanban
python3 scripts/update-kanban-docs.py

# Or use RW (automatically updates Kanban when configured)
# e.g. RW E5S01T01 or RW E5:S01:T01 in AI assistant (FR-060)
```

---

## Migration Questions

### How do I migrate from copy-paste to dependencies?

1. Backup current frameworks
2. Document customizations
3. Remove copied frameworks
4. Install as dependencies
5. Restore customizations
6. Test functionality

See the [Integration Guide](framework-dependency-integration-guide.md) for detailed migration steps.

### Will my customizations be lost?

No. Document your customizations before migration, then restore them after installing as dependencies.

**Common customizations:**
- Path updates (src/confidentia → src/yourproject)
- Configuration changes (rw-config.yaml)
- Custom scripts
- Documentation updates

### Can I migrate gradually?

Yes. You can migrate one framework at a time:

1. Migrate workflow-mgmt first
2. Test thoroughly
3. Migrate kanban next
4. Continue with other frameworks

---

## CI/CD Questions

### How do I integrate with CI/CD?

**GitHub Actions:**
```yaml
- name: Check for updates
  run: ai-dev-kit check --notify
```

**GitLab CI:**
```yaml
check-updates:
  script:
    - ai-dev-kit check --notify
```

See the [Integration Guide](framework-dependency-integration-guide.md) for complete examples.

### Can I automate framework updates?

Yes, but use with caution:

1. Check for updates automatically
2. Create PR with update
3. Require manual approval
4. Test before merging

See the [Update Guide](framework-dependency-update-guide.md) for update automation.

---

## Troubleshooting Questions

### Framework installation fails. What do I do?

1. Check framework name: `ai-dev-kit list`
2. Verify version exists: `ai-dev-kit list --versions`
3. Check network: `git ls-remote https://github.com/earlution/ai-dev-kit.git`
4. Check permissions: `ls -la frameworks/`
5. Try different backend: `ai-dev-kit install workflow-mgmt --backend git-submodule`

See the [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md) for detailed solutions.

### Update doesn't work. How do I fix it?

1. Check version availability: `ai-dev-kit list --versions`
2. Check compatibility: `ai-dev-kit check --compatibility`
3. Resolve Git conflicts: `git status`
4. Force update: `ai-dev-kit update workflow-mgmt --force`

See the [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md) for more solutions.

### Configuration errors. How do I fix them?

```bash
# Validate configuration
ai-dev-kit validate-config

# Auto-fix if possible
ai-dev-kit validate-config --fix

# Or reinitialize
ai-dev-kit init
```

---

## Best Practices Questions

### Should I pin framework versions?

**Development:** Pin to specific versions for stability, update regularly for new features.

**Production:** Pin to stable versions, test updates in development first.

```yaml
frameworks:
  workflow-mgmt:
    version: "2.0.0"
    pin: true
```

### How often should I check for updates?

**Recommended:**
- **PATCH updates:** Check weekly, apply immediately
- **MINOR updates:** Check monthly, review and apply quarterly
- **MAJOR updates:** Check quarterly, plan migration

```bash
# Set automatic checking
ai-dev-kit config set check_interval weekly
```

### Should I commit framework files to Git?

**Git Submodules:** Commit submodule reference, not framework files (they're in submodule).

**CLI Tool/Package Managers:** Framework files are managed by dependency system, commit configuration only.

**Customizations:** Commit your customizations (path updates, config changes).

---

## Support Questions

### Where can I get help?

1. **Documentation:** See guides in `docs/documentation/user-docs/`
2. **Troubleshooting Guide:** [framework-dependency-troubleshooting-guide.md](framework-dependency-troubleshooting-guide.md)
3. **GitHub Issues:** Create issue with diagnostic information
4. **CLI Help:** `ai-dev-kit --help` or `ai-dev-kit <command> --help`

### How do I report a bug?

```bash
# Use CLI to report
ai-dev-kit report-issue \
  --framework workflow-mgmt \
  --version 2.0.0 \
  --description "Error description"

# Or create GitHub issue with:
# - Framework name and version
# - Error message
# - Steps to reproduce
# - Diagnostic information
```

### Can I contribute improvements?

Yes. Contributions are welcome:
1. Fork the repository
2. Make changes
3. Test thoroughly
4. Submit pull request

---

## References

- [Use Cases Guide](framework-dependency-use-cases.md) - Comprehensive use case overview
- [Installation Guide](framework-dependency-installation-guide.md)
- [Post-Template Setup Guide](framework-dependency-post-template-setup-guide.md) - Setup steps after creating from template
- [Template Enablement Instructions](framework-dependency-template-enablement-instructions.md) - How to enable repository as template
- [Usage Guide](framework-dependency-usage-guide.md)
- [Update Guide](framework-dependency-update-guide.md)
- [Integration Guide](framework-dependency-integration-guide.md)
- [CLI Reference](framework-dependency-cli-reference.md)
- [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md)

