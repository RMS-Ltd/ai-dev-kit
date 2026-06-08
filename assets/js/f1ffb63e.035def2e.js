"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7713"], {
2206(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_cli_usage_examples_md_f1f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-cli-usage-examples-md-f1f.json
var site_docs_documentation_user_docs_cli_usage_examples_md_f1f_namespaceObject = JSON.parse('{"id":"documentation/user-docs/cli-usage-examples","title":"ai-dev-kit CLI Usage Examples","description":"Status: Active","source":"@site/../docs/documentation/user-docs/cli-usage-examples.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/cli-usage-examples","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-usage-examples","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/cli-usage-examples.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ai-dev-kit CLI Troubleshooting Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-troubleshooting-guide"},"next":{"title":"ECC + AI Dev Kit — integration cheatsheet","permalink":"/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/cli-usage-examples.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ai-dev-kit CLI Usage Examples';

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
  "value": "Quick Start",
  "id": "quick-start",
  "level": 2
}, {
  "value": "First-Time Setup",
  "id": "first-time-setup",
  "level": 3
}, {
  "value": "Common Workflows",
  "id": "common-workflows",
  "level": 2
}, {
  "value": "Installing Frameworks",
  "id": "installing-frameworks",
  "level": 3
}, {
  "value": "Install Latest Version",
  "id": "install-latest-version",
  "level": 4
}, {
  "value": "Install Specific Version",
  "id": "install-specific-version",
  "level": 4
}, {
  "value": "Install Multiple Frameworks",
  "id": "install-multiple-frameworks",
  "level": 4
}, {
  "value": "Preview Installation",
  "id": "preview-installation",
  "level": 4
}, {
  "value": "Updating Frameworks",
  "id": "updating-frameworks",
  "level": 3
}, {
  "value": "Update Single Framework",
  "id": "update-single-framework",
  "level": 4
}, {
  "value": "Update All Frameworks",
  "id": "update-all-frameworks",
  "level": 4
}, {
  "value": "Force Update",
  "id": "force-update",
  "level": 4
}, {
  "value": "Checking Status",
  "id": "checking-status",
  "level": 3
}, {
  "value": "Check All Frameworks",
  "id": "check-all-frameworks",
  "level": 4
}, {
  "value": "Check Specific Framework",
  "id": "check-specific-framework",
  "level": 4
}, {
  "value": "Check for Updates",
  "id": "check-for-updates",
  "level": 4
}, {
  "value": "Configuration Management",
  "id": "configuration-management",
  "level": 3
}, {
  "value": "View Configuration",
  "id": "view-configuration",
  "level": 4
}, {
  "value": "Modify Configuration",
  "id": "modify-configuration",
  "level": 4
}, {
  "value": "Validate Configuration",
  "id": "validate-configuration",
  "level": 4
}, {
  "value": "Reset Configuration",
  "id": "reset-configuration",
  "level": 4
}, {
  "value": "Migration from Copy-Paste",
  "id": "migration-from-copy-paste",
  "level": 3
}, {
  "value": "Detect Existing Frameworks",
  "id": "detect-existing-frameworks",
  "level": 4
}, {
  "value": "Convert Frameworks",
  "id": "convert-frameworks",
  "level": 4
}, {
  "value": "Validate Migration",
  "id": "validate-migration",
  "level": 4
}, {
  "value": "Removing Frameworks",
  "id": "removing-frameworks",
  "level": 3
}, {
  "value": "Remove Framework",
  "id": "remove-framework",
  "level": 4
}, {
  "value": "Advanced Scenarios",
  "id": "advanced-scenarios",
  "level": 2
}, {
  "value": "Multi-Backend Setup",
  "id": "multi-backend-setup",
  "level": 3
}, {
  "value": "Version Pinning",
  "id": "version-pinning",
  "level": 3
}, {
  "value": "Custom Installation Paths",
  "id": "custom-installation-paths",
  "level": 3
}, {
  "value": "Batch Operations",
  "id": "batch-operations",
  "level": 3
}, {
  "value": "Integration Examples",
  "id": "integration-examples",
  "level": 2
}, {
  "value": "CI/CD Pipeline",
  "id": "cicd-pipeline",
  "level": 3
}, {
  "value": "Pre-Commit Hook",
  "id": "pre-commit-hook",
  "level": 3
}, {
  "value": "Automated Update Script",
  "id": "automated-update-script",
  "level": 3
}, {
  "value": "Error Handling",
  "id": "error-handling",
  "level": 2
}, {
  "value": "Check Exit Codes",
  "id": "check-exit-codes",
  "level": 3
}, {
  "value": "Handle Specific Errors",
  "id": "handle-specific-errors",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "1. Initialize Before Installing",
  "id": "1-initialize-before-installing",
  "level": 3
}, {
  "value": "2. Use Dry-Run for Preview",
  "id": "2-use-dry-run-for-preview",
  "level": 3
}, {
  "value": "3. Validate Configuration",
  "id": "3-validate-configuration",
  "level": 3
}, {
  "value": "4. Check Status Regularly",
  "id": "4-check-status-regularly",
  "level": 3
}, {
  "value": "5. Use Version Pinning for Production",
  "id": "5-use-version-pinning-for-production",
  "level": 3
}, {
  "value": "Troubleshooting Examples",
  "id": "troubleshooting-examples",
  "level": 2
}, {
  "value": "Framework Not Found",
  "id": "framework-not-found",
  "level": 3
}, {
  "value": "Backend Not Available",
  "id": "backend-not-available",
  "level": 3
}, {
  "value": "Configuration Issues",
  "id": "configuration-issues",
  "level": 3
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
        id: "ai-dev-kit-cli-usage-examples",
        children: "ai-dev-kit CLI Usage Examples"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 6 - Framework Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 7 - ai-dev-kit CLI Tool", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S07", ":T12", " - Documentation and usage examples"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides comprehensive usage examples for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool, covering common scenarios and workflows."]
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
      id: "quick-start",
      children: "Quick Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "first-time-setup",
      children: "First-Time Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Initialize ai-dev-kit in your project\nai-dev-kit init\n\n# 2. Install your first framework\nai-dev-kit install workflow-mgmt\n\n# 3. Check status\nai-dev-kit status\n\n# 4. Verify installation\nai-dev-kit list\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-workflows",
      children: "Common Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installing-frameworks",
      children: "Installing Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "install-latest-version",
      children: "Install Latest Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install latest version using default backend\nai-dev-kit install workflow-mgmt\n\n# Install with specific backend\nai-dev-kit install workflow-mgmt --backend git-submodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "install-specific-version",
      children: "Install Specific Version"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install specific version\nai-dev-kit install workflow-mgmt@2.0.0\n\n# Install with custom path\nai-dev-kit install workflow-mgmt --path frameworks/workflow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "install-multiple-frameworks",
      children: "Install Multiple Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install multiple frameworks in one command\nai-dev-kit install workflow-mgmt kanban numbering-versioning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "preview-installation",
      children: "Preview Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Preview installation without applying\nai-dev-kit install workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updating-frameworks",
      children: "Updating Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "update-single-framework",
      children: "Update Single Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update to latest compatible version\nai-dev-kit update workflow-mgmt\n\n# Update to specific version\nai-dev-kit update workflow-mgmt@2.1.0\n\n# Preview update\nai-dev-kit update workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "update-all-frameworks",
      children: "Update All Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update all installed frameworks\nai-dev-kit update --all\n\n# Check for updates without applying\nai-dev-kit update --all --check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "force-update",
      children: "Force Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Force update even if conflicts detected\nai-dev-kit update workflow-mgmt --force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checking-status",
      children: "Checking Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "check-all-frameworks",
      children: "Check All Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Show status of all frameworks\nai-dev-kit status\n\n# Verbose output\nai-dev-kit status --verbose\n\n# JSON output\nai-dev-kit status --json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "check-specific-framework",
      children: "Check Specific Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Show status of specific framework\nai-dev-kit status workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "check-for-updates",
      children: "Check for Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check all frameworks for updates\nai-dev-kit check\n\n# Check specific framework\nai-dev-kit check workflow-mgmt\n\n# JSON output\nai-dev-kit check --json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-management",
      children: "Configuration Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "view-configuration",
      children: "View Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all configuration\nai-dev-kit config list\n\n# List with JSON output\nai-dev-kit config list --json\n\n# Get specific value\nai-dev-kit config get default_backend\nai-dev-kit config get frameworks.workflow-mgmt.version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "modify-configuration",
      children: "Modify Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Set default backend\nai-dev-kit config set default_backend git-submodule\n\n# Enable auto-check\nai-dev-kit config set auto_check true\n\n# Set check interval\nai-dev-kit config set check_interval daily\n\n# Set nested value\nai-dev-kit config set frameworks.workflow-mgmt.version \"2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "validate-configuration",
      children: "Validate Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate configuration\nai-dev-kit config validate\n\n# Validate and auto-fix\nai-dev-kit config validate --fix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "reset-configuration",
      children: "Reset Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Reset to defaults (requires --force)\nai-dev-kit config reset --force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-from-copy-paste",
      children: "Migration from Copy-Paste"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detect-existing-frameworks",
      children: "Detect Existing Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Detect copy-paste frameworks\nai-dev-kit migrate --detect\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Detecting copy-paste frameworks...\n\nFound 2 framework(s):\n\n  • workflow-mgmt\n    Path: packages/frameworks/workflow-mgt\n    Type: workflow-mgmt\n    Confidence: 95% (version: 2.0.0)\n\n  • kanban\n    Path: packages/frameworks/kanban\n    Type: kanban\n    Confidence: 90% (version: 1.0.0)\n\nTo convert these frameworks to dependencies, run:\n  ai-dev-kit migrate --convert\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "convert-frameworks",
      children: "Convert Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Convert all detected frameworks\nai-dev-kit migrate --convert\n\n# Convert specific framework\nai-dev-kit migrate --convert --framework workflow-mgmt\n\n# Convert with specific backend\nai-dev-kit migrate --convert --backend git-subtree\n\n# Preview conversion\nai-dev-kit migrate --convert --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "validate-migration",
      children: "Validate Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate migration was successful\nai-dev-kit migrate --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removing-frameworks",
      children: "Removing Frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "remove-framework",
      children: "Remove Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove framework (with confirmation)\nai-dev-kit remove workflow-mgmt\n\n# Remove without confirmation\nai-dev-kit remove workflow-mgmt --force\n\n# Remove but keep files\nai-dev-kit remove workflow-mgmt --keep-files\n\n# Preview removal\nai-dev-kit remove workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanced-scenarios",
      children: "Advanced Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-backend-setup",
      children: "Multi-Backend Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install different frameworks with different backends\nai-dev-kit install workflow-mgmt --backend git-submodule\nai-dev-kit install kanban --backend git-subtree\nai-dev-kit install numbering-versioning --backend npm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-pinning",
      children: "Version Pinning"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install and pin to specific version\nai-dev-kit install workflow-mgmt@2.0.0\nai-dev-kit config set frameworks.workflow-mgmt.pin true\n\n# Unpin framework\nai-dev-kit config set frameworks.workflow-mgmt.pin false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-installation-paths",
      children: "Custom Installation Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install to custom path\nai-dev-kit install workflow-mgmt --path custom/frameworks/workflow\n\n# Verify path\nai-dev-kit status workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-operations",
      children: "Batch Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install multiple frameworks\nai-dev-kit install workflow-mgmt kanban numbering-versioning\n\n# Update all frameworks\nai-dev-kit update --all\n\n# Check all frameworks\nai-dev-kit check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-examples",
      children: "Integration Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-pipeline",
      children: "CI/CD Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# CI/CD script for checking framework updates\n\n# Check for updates\nai-dev-kit check --json > updates.json\n\n# Parse updates\nif [ -s updates.json ]; then\n    echo \"Framework updates available\"\n    # Create GitHub issue or send notification\n    # ...\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-commit-hook",
      children: "Pre-Commit Hook"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Pre-commit hook to validate configuration\n\n# Validate configuration\nif ! ai-dev-kit config validate; then\n    echo \"Configuration validation failed\"\n    exit 1\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-update-script",
      children: "Automated Update Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Automated update script\n\n# Check for updates\nai-dev-kit check\n\n# Update all frameworks (patch and minor only)\nai-dev-kit update --all\n\n# Verify updates\nai-dev-kit status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-handling",
      children: "Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-exit-codes",
      children: "Check Exit Codes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if command succeeded\nif ai-dev-kit install workflow-mgmt; then\n    echo \"Installation successful\"\nelse\n    echo \"Installation failed with exit code: $?\"\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "handle-specific-errors",
      children: "Handle Specific Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Error handling example\n\nai-dev-kit install workflow-mgmt\nexit_code=$?\n\ncase $exit_code in\n    0)\n        echo \"Success\"\n        ;;\n    1)\n        echo \"General error\"\n        ;;\n    2)\n        echo \"Framework not found\"\n        ;;\n    3)\n        echo \"Version not found\"\n        ;;\n    4)\n        echo \"Backend not available\"\n        ;;\n    *)\n        echo \"Unknown error: $exit_code\"\n        ;;\nesac\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-initialize-before-installing",
      children: "1. Initialize Before Installing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Always initialize first\nai-dev-kit init\n\n# Then install frameworks\nai-dev-kit install workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-use-dry-run-for-preview",
      children: "2. Use Dry-Run for Preview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Preview before making changes\nai-dev-kit install workflow-mgmt --dry-run\nai-dev-kit update workflow-mgmt --dry-run\nai-dev-kit remove workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-validate-configuration",
      children: "3. Validate Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate configuration regularly\nai-dev-kit config validate\n\n# Auto-fix common issues\nai-dev-kit config validate --fix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-check-status-regularly",
      children: "4. Check Status Regularly"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check status before operations\nai-dev-kit status\n\n# Check for updates\nai-dev-kit check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-use-version-pinning-for-production",
      children: "5. Use Version Pinning for Production"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Pin frameworks in production\nai-dev-kit install workflow-mgmt@2.0.0\nai-dev-kit config set frameworks.workflow-mgmt.pin true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-examples",
      children: "Troubleshooting Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-not-found",
      children: "Framework Not Found"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if framework is installed\nai-dev-kit list\n\n# Verify framework name\nai-dev-kit status workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backend-not-available",
      children: "Backend Not Available"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check available backends\nai-dev-kit config get default_backend\n\n# Use different backend\nai-dev-kit install workflow-mgmt --backend git-submodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-issues",
      children: "Configuration Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate configuration\nai-dev-kit config validate\n\n# View current configuration\nai-dev-kit config list\n\n# Reset if needed\nai-dev-kit config reset --force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference",
          children: "CLI Reference"
        }), " - Complete command reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide"
        }), " - Installation instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
          children: "Troubleshooting Guide"
        }), " - Troubleshooting help"]
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