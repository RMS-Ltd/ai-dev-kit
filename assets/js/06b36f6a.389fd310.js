"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7108"], {
3487(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_update_guide_md_06b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-update-guide-md-06b.json
var site_docs_documentation_user_docs_framework_dependency_update_guide_md_06b_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-update-guide","title":"Framework Dependency Update Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-update-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-update-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-update-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2025-12-07T11:20:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency Troubleshooting Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide"},"next":{"title":"Framework Dependency Usage Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-update-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2025-12-07T11:20:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency Update Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Scope (greenfield vs brownfield)",
  "id": "scope-greenfield-vs-brownfield",
  "level": 3
}, {
  "value": "Update Mechanisms",
  "id": "update-mechanisms",
  "level": 2
}, {
  "value": "Automatic Updates",
  "id": "automatic-updates",
  "level": 3
}, {
  "value": "Update Policies",
  "id": "update-policies",
  "level": 4
}, {
  "value": "Automatic Update Process",
  "id": "automatic-update-process",
  "level": 4
}, {
  "value": "Manual Updates",
  "id": "manual-updates",
  "level": 3
}, {
  "value": "Manual Update Process",
  "id": "manual-update-process",
  "level": 4
}, {
  "value": "Update Notifications",
  "id": "update-notifications",
  "level": 2
}, {
  "value": "Notification Methods",
  "id": "notification-methods",
  "level": 3
}, {
  "value": "CLI Notifications",
  "id": "cli-notifications",
  "level": 4
}, {
  "value": "Git Submodule Notifications",
  "id": "git-submodule-notifications",
  "level": 4
}, {
  "value": "Package Manager Notifications",
  "id": "package-manager-notifications",
  "level": 4
}, {
  "value": "Notification Configuration",
  "id": "notification-configuration",
  "level": 3
}, {
  "value": "Configure Notification Frequency",
  "id": "configure-notification-frequency",
  "level": 4
}, {
  "value": "Configure Notification Channels",
  "id": "configure-notification-channels",
  "level": 4
}, {
  "value": "Version Compatibility",
  "id": "version-compatibility",
  "level": 2
}, {
  "value": "Semantic Versioning",
  "id": "semantic-versioning",
  "level": 3
}, {
  "value": "Compatibility Checking",
  "id": "compatibility-checking",
  "level": 3
}, {
  "value": "Version Pinning",
  "id": "version-pinning",
  "level": 3
}, {
  "value": "Update Procedures by Backend",
  "id": "update-procedures-by-backend",
  "level": 2
}, {
  "value": "Git Submodules",
  "id": "git-submodules",
  "level": 3
}, {
  "value": "Manual Update",
  "id": "manual-update",
  "level": 4
}, {
  "value": "Automated Update Script",
  "id": "automated-update-script",
  "level": 4
}, {
  "value": "CLI Tool",
  "id": "cli-tool",
  "level": 3
}, {
  "value": "Update Commands",
  "id": "update-commands",
  "level": 4
}, {
  "value": "Update Process",
  "id": "update-process",
  "level": 4
}, {
  "value": "Package Managers",
  "id": "package-managers",
  "level": 3
}, {
  "value": "npm",
  "id": "npm",
  "level": 4
}, {
  "value": "pip",
  "id": "pip",
  "level": 4
}, {
  "value": "Responding to Update Notifications",
  "id": "responding-to-update-notifications",
  "level": 2
}, {
  "value": "When to Update",
  "id": "when-to-update",
  "level": 3
}, {
  "value": "Update Workflow",
  "id": "update-workflow",
  "level": 3
}, {
  "value": "Rollback Procedures",
  "id": "rollback-procedures",
  "level": 2
}, {
  "value": "Rollback to Previous Version",
  "id": "rollback-to-previous-version",
  "level": 3
}, {
  "value": "Rollback After Issues",
  "id": "rollback-after-issues",
  "level": 3
}, {
  "value": "Update Testing",
  "id": "update-testing",
  "level": 2
}, {
  "value": "Pre-Update Testing",
  "id": "pre-update-testing",
  "level": 3
}, {
  "value": "Post-Update Validation",
  "id": "post-update-validation",
  "level": 3
}, {
  "value": "Update Best Practices",
  "id": "update-best-practices",
  "level": 2
}, {
  "value": "Regular Update Schedule",
  "id": "regular-update-schedule",
  "level": 3
}, {
  "value": "Version Pinning Strategy",
  "id": "version-pinning-strategy",
  "level": 3
}, {
  "value": "Update Documentation",
  "id": "update-documentation",
  "level": 3
}, {
  "value": "Troubleshooting Updates",
  "id": "troubleshooting-updates",
  "level": 2
}, {
  "value": "Update Fails",
  "id": "update-fails",
  "level": 3
}, {
  "value": "Version Mismatch",
  "id": "version-mismatch",
  "level": 3
}, {
  "value": "Configuration Conflicts",
  "id": "configuration-conflicts",
  "level": 3
}, {
  "value": "Uninstalling Frameworks",
  "id": "uninstalling-frameworks",
  "level": 2
}, {
  "value": "When to Uninstall",
  "id": "when-to-uninstall",
  "level": 3
}, {
  "value": "Uninstall Methods",
  "id": "uninstall-methods",
  "level": 3
}, {
  "value": "Method 1: Using Uninstall Script (Recommended)",
  "id": "method-1-using-uninstall-script-recommended",
  "level": 4
}, {
  "value": "Method 2: Manual Uninstall",
  "id": "method-2-manual-uninstall",
  "level": 4
}, {
  "value": "Uninstall Safety Features",
  "id": "uninstall-safety-features",
  "level": 3
}, {
  "value": "Restoring from Backup",
  "id": "restoring-from-backup",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "framework-dependency-update-guide",
        children: "Framework Dependency Update Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 5 - Documentation Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 4 - Framework Documentation Management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E05:S04", ":T05", " - Create comprehensive user documentation for Epic 6 framework dependency architecture"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide explains how to update AI Dev Kit frameworks when new versions are available. It covers update mechanisms, notification systems, version compatibility, and how to respond to update notifications."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Feature:"
      }), " When frameworks are updated in the ai-dev-kit repository, you receive notifications about available updates and can update your project's framework dependencies automatically or manually."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-greenfield-vs-brownfield",
      children: "Scope (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greenfield / new-template first run (FR-080):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
          children: "IPW-E6S9T1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brownfield SoT:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories",
          children: "INSTALL — Brownfield adoption"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
          children: "ADR-003"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md",
          children: "FR-081"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-mechanisms",
      children: "Update Mechanisms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automatic-updates",
      children: "Automatic Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatic updates apply framework updates without manual intervention, based on your update policy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "update-policies",
      children: "Update Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto-Update Policy (Recommended for PATCH updates):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# In .ai-dev-kit.yaml\nupdate_policy:\n  patch: auto      # Auto-update patch versions (2.0.0 → 2.0.1)\n  minor: notify    # Notify for minor updates (2.0.0 → 2.1.0)\n  major: manual    # Require manual approval for major updates (2.0.0 → 3.0.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Update Policy (Recommended for production):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "update_policy:\n  patch: notify    # Notify but don't auto-update\n  minor: notify\n  major: notify\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "automatic-update-process",
      children: "Automatic Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Update Detection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The system checks for updates periodically (daily, weekly, or on-demand):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# CLI tool checks for updates\nai-dev-kit check\n\n# Or configure automatic checking\nai-dev-kit config set auto_check true\nai-dev-kit config set check_interval daily\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update Application:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If auto-update is enabled for the update type:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Automatic update happens in background\n# Or triggered by:\nai-dev-kit update --auto\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Notification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You receive notification about the update:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Framework Update Applied:\n  workflow-mgmt: 2.0.0 → 2.0.1 (PATCH)\n  Changes: Bug fixes and performance improvements\n  Status: Applied successfully\n  Review: frameworks/workflow-mgmt/CHANGELOG.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-updates",
      children: "Manual Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manual updates require explicit approval before applying."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "manual-update-process",
      children: "Manual Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check for Updates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check all frameworks\nai-dev-kit check\n\n# Output:\n# Framework: workflow-mgmt\n#   Current: 2.0.0\n#   Latest:  2.1.0\n#   Type:    MINOR\n#   Status:  Update available\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Review Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View changelog\ncat frameworks/workflow-mgmt/CHANGELOG.md\n\n# Or view specific version changes\nai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Apply Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update specific framework\nai-dev-kit update workflow-mgmt\n\n# Update to specific version\nai-dev-kit update workflow-mgmt@2.1.0\n\n# Update all frameworks\nai-dev-kit update --all\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Verify Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check updated version\nai-dev-kit status workflow-mgmt\n\n# Test framework functionality\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-notifications",
      children: "Update Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification-methods",
      children: "Notification Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cli-notifications",
      children: "CLI Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Command Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ai-dev-kit check\n\nAvailable Updates:\n  ⚠️  workflow-mgmt: 2.0.0 → 2.1.0 (MINOR)\n      Changes: New features, improved performance\n      Breaking: None\n      Action: Run 'ai-dev-kit update workflow-mgmt' to update\n\n  ✓ kanban: 1.0.0 (up to date)\n  ✓ numbering-versioning: 2.0.0 (up to date)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status Command:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ ai-dev-kit status\n\nInstalled Frameworks:\n  workflow-mgmt: 2.0.0 (update available: 2.1.0)\n  kanban: 1.0.0 (up to date)\n  numbering-versioning: 2.0.0 (up to date)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "git-submodule-notifications",
      children: "Git Submodule Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Submodule Status:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to submodule\ncd .ai-dev-kit\n\n# Fetch latest tags\ngit fetch origin\n\n# List new tags\ngit tag | grep workflow-mgmt | sort -V\n\n# Compare current vs latest\ngit describe --tags\n# Current: workflow-mgmt-v2.0.0\n\ngit tag | grep workflow-mgmt | tail -1\n# Latest: workflow-mgmt-v2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Notification Script:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/check-framework-updates.sh"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Check for framework updates\n\ncd .ai-dev-kit\ngit fetch origin\n\necho \"Checking for framework updates...\"\n\nfor framework in workflow-mgmt kanban numbering-versioning; do\n  current=$(git describe --tags --match \"${framework}-*\" 2>/dev/null | cut -d- -f3)\n  latest=$(git tag | grep \"^${framework}-\" | sort -V | tail -1 | cut -d- -f3)\n  \n  if [ \"$current\" != \"$latest\" ]; then\n    echo \"⚠️  ${framework}: ${current} → ${latest} (update available)\"\n  else\n    echo \"✓ ${framework}: ${current} (up to date)\"\n  fi\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "package-manager-notifications",
      children: "Package Manager Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for outdated packages\nnpm outdated\n\n# Output:\n# Package                    Current  Wanted  Latest\n# @ai-dev-kit/workflow-mgmt  2.0.0   2.0.1   2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "pip:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for outdated packages\npip list --outdated\n\n# Output:\n# Package                    Version  Latest\n# ai-dev-kit-workflow-mgmt  2.0.0    2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notification-configuration",
      children: "Notification Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configure-notification-frequency",
      children: "Configure Notification Frequency"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check daily\nai-dev-kit config set check_interval daily\n\n# Check weekly\nai-dev-kit config set check_interval weekly\n\n# Check on-demand only\nai-dev-kit config set check_interval manual\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "configure-notification-channels",
      children: "Configure Notification Channels"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Console output (default)\nai-dev-kit config set notification_channel console\n\n# Email notifications (future)\nai-dev-kit config set notification_channel email\nai-dev-kit config set email your@email.com\n\n# Slack notifications (future)\nai-dev-kit config set notification_channel slack\nai-dev-kit config set slack_webhook https://hooks.slack.com/...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-compatibility",
      children: "Version Compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semantic-versioning",
      children: "Semantic Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Frameworks use Semantic Versioning (SemVer): ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR:"
        }), " Breaking changes (2.0.0 → 3.0.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR:"
        }), " New features, backward compatible (2.0.0 → 2.1.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH:"
        }), " Bug fixes, backward compatible (2.0.0 → 2.0.1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compatibility-checking",
      children: "Compatibility Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Compatibility Before Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if update is compatible\nai-dev-kit check --compatibility\n\n# Output:\n# Framework: workflow-mgmt\n#   Current: 2.0.0\n#   Latest:  2.1.0\n#   Compatibility: ✓ Compatible (MINOR update, backward compatible)\n#   Breaking Changes: None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Breaking Changes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View breaking changes\nai-dev-kit changelog workflow-mgmt --breaking\n\n# Or check specific version range\nai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 3.0.0 --breaking\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-pinning",
      children: "Version Pinning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pin to Specific Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# In .ai-dev-kit.yaml\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"  # Pinned version\n    pin: true         # Prevent automatic updates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Pinned Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update pin manually\nai-dev-kit update workflow-mgmt@2.1.0 --pin\n\n# Or edit .ai-dev-kit.yaml directly\nvim .ai-dev-kit.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-procedures-by-backend",
      children: "Update Procedures by Backend"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-submodules",
      children: "Git Submodules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "manual-update",
      children: "Manual Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Navigate to submodule\ncd .ai-dev-kit\n\n# 2. Fetch latest changes\ngit fetch origin\n\n# 3. List available versions\ngit tag | grep workflow-mgmt\n\n# 4. Checkout new version\ngit checkout workflow-mgmt-v2.1.0\n\n# 5. Return to project root\ncd ..\n\n# 6. Copy updated framework\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n\n# 7. Commit update\ngit add frameworks/\ngit commit -m \"Update workflow-mgmt framework to v2.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "automated-update-script",
      children: "Automated Update Script"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/update-frameworks.sh"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -e\n\nFRAMEWORK=$1\nVERSION=$2\n\nif [ -z \"$FRAMEWORK\" ] || [ -z \"$VERSION\" ]; then\n  echo \"Usage: $0 <framework> <version>\"\n  echo \"Example: $0 workflow-mgmt 2.1.0\"\n  exit 1\nfi\n\n# Navigate to submodule\ncd .ai-dev-kit\n\n# Fetch and checkout version\ngit fetch origin\ngit checkout \"${FRAMEWORK}-v${VERSION}\"\n\n# Return to project root\ncd ..\n\n# Copy updated framework\nFRAMEWORK_DIR=$(echo \"$FRAMEWORK\" | sed 's/-mgmt/-mgt/' | sed 's/-/_/g')\ncp -r \".ai-dev-kit/packages/frameworks/${FRAMEWORK_DIR}/\" \"./frameworks/${FRAMEWORK}/\"\n\necho \"✓ Updated ${FRAMEWORK} to v${VERSION}\"\necho \"Review changes and commit:\"\necho \"  git add frameworks/\"\necho \"  git commit -m 'Update ${FRAMEWORK} framework to v${VERSION}'\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cli-tool",
      children: "CLI Tool"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "update-commands",
      children: "Update Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update specific framework\nai-dev-kit update workflow-mgmt\n\n# Update to specific version\nai-dev-kit update workflow-mgmt@2.1.0\n\n# Update all frameworks\nai-dev-kit update --all\n\n# Dry run (preview changes)\nai-dev-kit update workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "update-process",
      children: "Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CLI tool handles:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checking for updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validating compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updating framework files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updating configuration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Running post-update validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-managers",
      children: "Package Managers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "npm",
      children: "npm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update to latest compatible version\nnpm update @ai-dev-kit/workflow-mgmt\n\n# Update to specific version\nnpm install @ai-dev-kit/workflow-mgmt@2.1.0\n\n# Update all frameworks\nnpm update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pip",
      children: "pip"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update to latest version\npip install --upgrade ai-dev-kit-workflow-mgmt\n\n# Update to specific version\npip install --upgrade ai-dev-kit-workflow-mgmt==2.1.0\n\n# Update all frameworks\npip install --upgrade -r requirements.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "responding-to-update-notifications",
      children: "Responding to Update Notifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-update",
      children: "When to Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Immediately:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATCH updates (bug fixes, security patches)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical security vulnerabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Critical bug fixes affecting your usage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Soon:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MINOR updates (new features, improvements)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features you need"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update When Ready:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MAJOR updates (breaking changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Major feature additions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architectural changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-workflow",
      children: "Update Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Receive Notification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "⚠️  Framework Update Available:\n    workflow-mgmt: 2.0.0 → 2.1.0 (MINOR)\n    Changes: New validation features, improved error messages\n    Breaking: None\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Review Changes:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View changelog\nai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 2.1.0\n\n# Or read framework changelog\ncat frameworks/workflow-mgmt/CHANGELOG.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Check Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify compatibility\nai-dev-kit check --compatibility workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Test Update (Recommended):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create test branch\ngit checkout -b test/framework-update\n\n# Apply update\nai-dev-kit update workflow-mgmt@2.1.0\n\n# Test framework\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n\n# Run your project tests\n# ...\n\n# If tests pass, merge to main\ngit checkout main\ngit merge test/framework-update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Apply Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update framework\nai-dev-kit update workflow-mgmt\n\n# Or update manually (Git submodules)\n./scripts/update-frameworks.sh workflow-mgmt 2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Verify Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check version\nai-dev-kit status workflow-mgmt\n\n# Test functionality\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rollback-procedures",
      children: "Rollback Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rollback-to-previous-version",
      children: "Rollback to Previous Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Rollback to previous version\nai-dev-kit update workflow-mgmt@2.0.0\n\n# Or use rollback command (if available)\nai-dev-kit rollback workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Submodules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to submodule\ncd .ai-dev-kit\n\n# Checkout previous version\ngit checkout workflow-mgmt-v2.0.0\n\n# Return to project root\ncd ..\n\n# Copy previous version\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n\n# Commit rollback\ngit add frameworks/\ngit commit -m \"Rollback workflow-mgmt to v2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package Managers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# npm\nnpm install @ai-dev-kit/workflow-mgmt@2.0.0\n\n# pip\npip install --upgrade ai-dev-kit-workflow-mgmt==2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rollback-after-issues",
      children: "Rollback After Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Identify Issue:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check framework logs\ncat frameworks/workflow-mgmt/logs/error.log\n\n# Test framework\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Rollback:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Rollback to previous version\nai-dev-kit update workflow-mgmt@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Report Issue:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create issue report\nai-dev-kit report-issue workflow-mgmt \\\n  --version 2.1.0 \\\n  --description \"Validation script fails after update\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-testing",
      children: "Update Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-update-testing",
      children: "Pre-Update Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Create Test Branch:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git checkout -b test/framework-update-workflow-mgmt-2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Apply Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit update workflow-mgmt@2.1.0 --dry-run\n# Review changes\n\nai-dev-kit update workflow-mgmt@2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Run Tests:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Framework validation\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\npython3 scripts/validation/validate_changelog_format.py\n\n# Project tests\n# Run your project's test suite\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Test RW:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test Release Workflow (FR-060: same message must include E…S…T…, e.g. RW E5S01T01)\n# Verify all steps complete successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "post-update-validation",
      children: "Post-Update Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Verify Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit status workflow-mgmt\n# Should show: 2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Verify Functionality:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test framework commands\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py --help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Check Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify configuration still valid\ncat frameworks/workflow-mgmt/rw-config.yaml\n# Check for any deprecated settings\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-best-practices",
      children: "Update Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-update-schedule",
      children: "Regular Update Schedule"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended Schedule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH updates:"
        }), " Apply immediately or weekly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR updates:"
        }), " Review monthly, apply quarterly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR updates:"
        }), " Review quarterly, plan migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Checking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Set up daily checks\nai-dev-kit config set check_interval daily\n\n# Or add to CI/CD\n# .github/workflows/check-framework-updates.yml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-pinning-strategy",
      children: "Version Pinning Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Development:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pin to specific versions for stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update regularly for new features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Production:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pin to stable versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test updates in development first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply updates during maintenance windows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-documentation",
      children: "Update Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Updates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# After updating, document in project changelog\nvim CHANGELOG.md\n\n# Add entry:\n# ## [Unreleased]\n# - Updated workflow-mgmt framework to v2.1.0\n#   - New validation features\n#   - Improved error messages\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-updates",
      children: "Troubleshooting Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-fails",
      children: "Update Fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Update command fails"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for conflicts\nai-dev-kit status\n\n# Check Git status\ngit status\n\n# Resolve conflicts manually\n# Then retry update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-mismatch",
      children: "Version Mismatch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Version not updating"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check current version\nai-dev-kit status workflow-mgmt\n\n# Force update\nai-dev-kit update workflow-mgmt --force\n\n# Or manually update\n./scripts/update-frameworks.sh workflow-mgmt 2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-conflicts",
      children: "Configuration Conflicts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Configuration conflicts after update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for deprecated settings\nai-dev-kit validate-config\n\n# Review configuration changes\nai-dev-kit changelog workflow-mgmt --config\n\n# Update configuration\nvim frameworks/workflow-mgmt/rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
        children: "Troubleshooting Guide"
      }), " for more detailed solutions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uninstalling-frameworks",
      children: "Uninstalling Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-uninstall",
      children: "When to Uninstall"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You may need to uninstall a framework in these scenarios:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework no longer needed:"
        }), " Project no longer uses the framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Switching backends:"
        }), " Moving from Git submodule to npm, or vice versa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recovering from errors:"
        }), " Failed installation left project in broken state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handling breaking changes:"
        }), " Update introduced breaking changes, need to rollback"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cleaning up:"
        }), " Removing unused frameworks to reduce project size"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uninstall-methods",
      children: "Uninstall Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "method-1-using-uninstall-script-recommended",
      children: "Method 1: Using Uninstall Script (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standard Uninstall:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Auto-detect backend and uninstall\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py workflow-mgmt\n\n# Specify backend\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py workflow-mgmt --backend git-submodule\n\n# Preview changes first (dry run)\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery Mode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Clean up failed installation\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py workflow-mgmt --recover\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Mode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Restore from backup or remove entirely\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py workflow-mgmt --rollback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "method-2-manual-uninstall",
      children: "Method 2: Manual Uninstall"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Submodule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove submodule\ngit submodule deinit -f packages/frameworks/workflow-mgmt\ngit rm -f packages/frameworks/workflow-mgmt\nrm -rf .git/modules/packages/frameworks/workflow-mgmt\n\n# Update .gitmodules\nvim .gitmodules  # Remove submodule entry\ngit add .gitmodules\ngit commit -m \"Remove workflow-mgmt submodule\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm Package:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm uninstall @ai-dev-kit/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "pip Package:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip uninstall ai-dev-kit-workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uninstall-safety-features",
      children: "Uninstall Safety Features"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The uninstall script includes several safety features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Creation:"
        }), " Creates timestamped backup before removal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Validation:"
        }), " Checks for dependencies before removal"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confirmation Prompts:"
        }), " Asks for confirmation before removing files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dry-Run Mode:"
        }), " Preview changes without modifying files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " Verifies cleanup after uninstall"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "restoring-from-backup",
      children: "Restoring from Backup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need to restore a package from backup:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List available backups\nls -la .backup-workflow-mgmt-*\n\n# Restore from backup\ncp -r .backup-workflow-mgmt-20251210-120000/* packages/frameworks/\n\n# Or use rollback mode\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py workflow-mgmt --rollback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After understanding update mechanisms:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure update notifications:"
        }), " Set up automatic checking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set update policy:"
        }), " Choose auto/manual update strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test update process:"
        }), " Try updating in a test branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set up CI/CD:"
        }), " Automate update checking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide",
          children: "Usage Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
          children: "Integration Guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference",
          children: "CLI Reference"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
          children: "Troubleshooting Guide"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);