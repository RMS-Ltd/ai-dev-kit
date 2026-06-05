"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["59514"], {
54668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_migration_guide_md_26f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-migration-guide-md-26f.json
var site_docs_architecture_standards_and_adrs_framework_migration_guide_md_26f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-migration-guide","title":"Framework Migration Guide","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-migration-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-migration-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-migration-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-migration-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Health Monitoring Procedures","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-monitoring-procedures"},"next":{"title":"Framework Release Process","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-release-process"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-migration-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Migration Guide';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Migration Scenarios",
  "id": "1-migration-scenarios",
  "level": 2
}, {
  "value": "1.1 Copy-Paste to Dependency Migration",
  "id": "11-copy-paste-to-dependency-migration",
  "level": 3
}, {
  "value": "1.2 Backend Migration",
  "id": "12-backend-migration",
  "level": 3
}, {
  "value": "1.3 Version Upgrade Migration",
  "id": "13-version-upgrade-migration",
  "level": 3
}, {
  "value": "1.4 Multi-Framework Migration",
  "id": "14-multi-framework-migration",
  "level": 3
}, {
  "value": "2. Migration Assessment",
  "id": "2-migration-assessment",
  "level": 2
}, {
  "value": "2.1 Pre-Migration Assessment",
  "id": "21-pre-migration-assessment",
  "level": 3
}, {
  "value": "2.2 Customization Identification",
  "id": "22-customization-identification",
  "level": 3
}, {
  "value": "2.3 Migration Planning",
  "id": "23-migration-planning",
  "level": 3
}, {
  "value": "3. Migration Procedures",
  "id": "3-migration-procedures",
  "level": 2
}, {
  "value": "3.1 Copy-Paste to Dependency Migration",
  "id": "31-copy-paste-to-dependency-migration",
  "level": 3
}, {
  "value": "3.2 Backend Migration",
  "id": "32-backend-migration",
  "level": 3
}, {
  "value": "3.3 Version Upgrade Migration",
  "id": "33-version-upgrade-migration",
  "level": 3
}, {
  "value": "3.4 Multi-Framework Migration",
  "id": "34-multi-framework-migration",
  "level": 3
}, {
  "value": "4. Migration Tools",
  "id": "4-migration-tools",
  "level": 2
}, {
  "value": "4.1 CLI Tool Migration Commands",
  "id": "41-cli-tool-migration-commands",
  "level": 3
}, {
  "value": "4.2 Migration Scripts",
  "id": "42-migration-scripts",
  "level": 3
}, {
  "value": "4.3 Migration Validation Tools",
  "id": "43-migration-validation-tools",
  "level": 3
}, {
  "value": "5. Customization Preservation",
  "id": "5-customization-preservation",
  "level": 2
}, {
  "value": "5.1 Customization Types",
  "id": "51-customization-types",
  "level": 3
}, {
  "value": "5.2 Preservation Methods",
  "id": "52-preservation-methods",
  "level": 3
}, {
  "value": "5.3 Customization Migration Workflow",
  "id": "53-customization-migration-workflow",
  "level": 3
}, {
  "value": "6. Migration Troubleshooting",
  "id": "6-migration-troubleshooting",
  "level": 2
}, {
  "value": "6.1 Common Issues",
  "id": "61-common-issues",
  "level": 3
}, {
  "value": "6.2 Rollback Procedures",
  "id": "62-rollback-procedures",
  "level": 3
}, {
  "value": "7. Migration Best Practices",
  "id": "7-migration-best-practices",
  "level": 2
}, {
  "value": "7.1 Pre-Migration",
  "id": "71-pre-migration",
  "level": 3
}, {
  "value": "7.2 During Migration",
  "id": "72-during-migration",
  "level": 3
}, {
  "value": "7.3 Post-Migration",
  "id": "73-post-migration",
  "level": 3
}, {
  "value": "7.4 Migration Documentation",
  "id": "74-migration-documentation",
  "level": 3
}, {
  "value": "8. Related Documentation",
  "id": "8-related-documentation",
  "level": 2
}, {
  "value": "8.1 Core Documents",
  "id": "81-core-documents",
  "level": 3
}, {
  "value": "8.2 Supporting Documents",
  "id": "82-supporting-documents",
  "level": 3
}, {
  "value": "9. Summary",
  "id": "9-summary",
  "level": 2
}, {
  "value": "9.1 Key Principles",
  "id": "91-key-principles",
  "level": 3
}, {
  "value": "9.2 Migration Workflow",
  "id": "92-migration-workflow",
  "level": 3
}, {
  "value": "9.3 Migration Methods",
  "id": "93-migration-methods",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "framework-migration-guide",
        children: "Framework Migration Guide"
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
      }), " Story 2 - Framework Update and Migration", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S02", ":T02", " - Build migration guides and tools", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Update Procedures, Framework Dependency Architecture, Framework Compatibility Tracking"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides comprehensive migration guides and tools for converting AI Dev Kit frameworks from copy-paste installations to dependency-based installations, migrating between dependency backends, and upgrading framework versions. The guide covers migration scenarios, step-by-step procedures, automated tools, and troubleshooting."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Scenarios:"
        }), " Support for multiple migration paths (copy-paste → dependency, backend changes, version upgrades)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Tools:"
        }), " CLI tool and scripts for automated migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual Procedures:"
        }), " Step-by-step guides for manual migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety First:"
        }), " Backup, validation, and rollback procedures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customization Preservation:"
        }), " Methods to preserve project-specific customizations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-migration-scenarios",
      children: "1. Migration Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-copy-paste-to-dependency-migration",
      children: "1.1 Copy-Paste to Dependency Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Project has frameworks installed via manual copy-paste, wants to migrate to dependency-based installation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initial migration from copy-paste to Git submodules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration to CLI tool management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration to package managers (when available)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic update notifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent framework versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-backend-migration",
      children: "1.2 Backend Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Project has frameworks installed via one backend (e.g., Git submodules), wants to migrate to another backend (e.g., Git subtrees or package managers)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git submodules → Git subtrees"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git submodules → CLI tool"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git subtrees → Package managers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI tool → Package managers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better integration with project workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved update mechanisms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standard dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-version-upgrade-migration",
      children: "1.3 Version Upgrade Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Project needs to upgrade frameworks to newer versions, potentially with breaking changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATCH version upgrades (bug fixes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MINOR version upgrades (new features)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MAJOR version upgrades (breaking changes)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access to new features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes and security patches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improved performance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-multi-framework-migration",
      children: "1.4 Multi-Framework Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Project has multiple frameworks to migrate simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrating all frameworks at once"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinated framework updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batch migration operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent migration process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced migration time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unified configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-migration-assessment",
      children: "2. Migration Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-pre-migration-assessment",
      children: "2.1 Pre-Migration Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assessment Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Identify current framework installations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document framework versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Identify customizations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Assess migration complexity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Plan migration strategy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Prepare backup plan"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assessment Tools:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool Detection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Detect copy-paste frameworks\nai-dev-kit migrate --detect\n\n# Output:\n# Detected frameworks:\n#   - workflow-mgmt (./frameworks/workflow-mgmt)\n#     Version: 2.0.0 (detected)\n#     Confidence: 0.95\n#   - kanban (./frameworks/kanban)\n#     Version: unknown\n#     Confidence: 0.85\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Detection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find copied frameworks\nfind . -type d -name \"workflow*\" -o -name \"kanban*\" -o -name \"numbering*\"\n\n# Check for framework files\nls -la frameworks/ 2>/dev/null || echo \"No frameworks directory\"\n\n# Identify framework versions (if documented)\ngrep -r \"version.*2\\.\" frameworks/*/README.md 2>/dev/null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-customization-identification",
      children: "2.2 Customization Identification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Customizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path updates (project-specific paths)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration changes (rw-config.yaml, .cursorrules)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom scripts or templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration code modifications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customization Detection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Compare with original framework\ndiff -r frameworks/workflow-mgmt/ \\\n      /path/to/ai-dev-kit/packages/frameworks/workflow\\ mgt/\n\n# Or use Git to track changes\ncd frameworks/workflow-mgmt\ngit status  # If frameworks were in Git\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Customization Documentation:"
      }), "\nCreate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "migration-customizations.md"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Framework Customizations\n\n## workflow-mgmt\n- Modified: scripts/validation/validate_branch_context.py\n  - Custom branch naming convention\n- Modified: rw-config.yaml\n  - Project-specific paths\n- Added: custom-templates/\n  - Project-specific templates\n\n## kanban\n- Modified: templates/EPIC_TEMPLATE.md\n  - Custom epic structure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-migration-planning",
      children: "2.3 Migration Planning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Plan Template:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Framework Migration Plan\n\n## Current State\n- workflow-mgmt: Copied manually, version 2.0.0\n- kanban: Copied manually, version unknown\n- Location: ./frameworks/\n\n## Target State\n- workflow-mgmt: Git submodule, version 2.1.0\n- kanban: Git submodule, version 1.0.0\n- Location: ./frameworks/ (same)\n\n## Migration Steps\n1. Backup current frameworks\n2. Remove copied frameworks\n3. Install as dependencies\n4. Restore customizations\n5. Test functionality\n6. Validate migration\n\n## Risk Assessment\n- Low risk: No customizations\n- Medium risk: Minor customizations\n- High risk: Extensive customizations\n\n## Rollback Plan\n- Backup location: .backup/frameworks/\n- Rollback method: Restore from backup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-migration-procedures",
      children: "3. Migration Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-copy-paste-to-dependency-migration",
      children: "3.1 Copy-Paste to Dependency Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 1: CLI Tool (Recommended)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Migration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Detect frameworks\nai-dev-kit migrate --detect\n\n# Step 2: Preview migration (dry run)\nai-dev-kit migrate --convert --dry-run\n\n# Step 3: Convert frameworks\nai-dev-kit migrate --convert --backend git-submodule\n\n# Step 4: Complete installation\nai-dev-kit install workflow-mgmt@2.1.0\nai-dev-kit install kanban@1.0.0\n\n# Step 5: Validate migration\nai-dev-kit migrate --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detection:"
        }), " Scans project for copy-paste frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup:"
        }), " Creates backup of existing frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Removal:"
        }), " Removes copy-paste installations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration:"
        }), " Updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Installation:"
        }), " Installs frameworks via selected backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation:"
        }), " Verifies migration success"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2: Manual Migration (Git Submodules)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Backup current frameworks\nmkdir -p .backup/frameworks\ncp -r frameworks/ .backup/frameworks/\ngit add frameworks/\ngit commit -m \"Backup frameworks before migration\"\n\n# Step 2: Remove copied frameworks\nrm -rf frameworks/workflow-mgmt\nrm -rf frameworks/kanban\ngit add frameworks/\ngit commit -m \"Remove copied frameworks before migration\"\n\n# Step 3: Add ai-dev-kit as submodule\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit\n\n# Step 4: Checkout framework versions\ncd .ai-dev-kit\ngit fetch origin\ngit checkout workflow-mgmt-v2.1.0\ncd ..\n\n# Step 5: Copy frameworks to installation path\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\ncp -r .ai-dev-kit/packages/frameworks/kanban/ ./frameworks/kanban\n\n# Step 6: Restore customizations (if any)\n# Apply customizations from backup\n\n# Step 7: Commit migration\ngit add frameworks/\ngit commit -m \"Migrate frameworks to Git submodules\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 3: Manual Migration (CLI Tool)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Initialize CLI tool\nai-dev-kit init\n\n# Step 2: Install frameworks\nai-dev-kit install workflow-mgmt@2.1.0\nai-dev-kit install kanban@1.0.0\n\n# Step 3: Restore customizations (if any)\n# Apply customizations from backup\n\n# Step 4: Validate installation\nai-dev-kit check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-backend-migration",
      children: "3.2 Backend Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Submodules → Git Subtrees:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Remove Git submodule\ngit submodule deinit -f frameworks/workflow-mgmt\ngit rm -f frameworks/workflow-mgmt\nrm -rf .git/modules/frameworks/workflow-mgmt\n\n# Step 2: Add as Git subtree\ngit subtree add --prefix=frameworks/workflow-mgmt \\\n    https://github.com/RMS-Ltd/ai-dev-kit.git \\\n    workflow-mgmt-v2.1.0 \\\n    --squash\n\n# Step 3: Update configuration\n# Edit .ai-dev-kit.yaml to change backend to git-subtree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Submodules → CLI Tool:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Remove Git submodule\ngit submodule deinit -f frameworks/workflow-mgmt\ngit rm -f frameworks/workflow-mgmt\nrm -rf .git/modules/frameworks/workflow-mgmt\n\n# Step 2: Initialize CLI tool (if not already)\nai-dev-kit init\n\n# Step 3: Install via CLI tool\nai-dev-kit install workflow-mgmt@2.1.0\n\n# Step 4: Update configuration\n# CLI tool automatically updates .ai-dev-kit.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Tool → Package Managers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Remove CLI-managed framework\nai-dev-kit remove workflow-mgmt\n\n# Step 2: Install via package manager\nnpm install @ai-dev-kit/workflow-mgmt@2.1.0\n# or\npip install ai-dev-kit-workflow-mgmt==2.1.0\n\n# Step 3: Update configuration\n# Edit .ai-dev-kit.yaml to change backend to npm or pip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-version-upgrade-migration",
      children: "3.3 Version Upgrade Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH Version Upgrade:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Automatic upgrade (if update policy allows)\nai-dev-kit update workflow-mgmt\n\n# Or manual\nai-dev-kit update workflow-mgmt@2.0.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MINOR Version Upgrade:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Check for updates\nai-dev-kit check\n\n# Step 2: Review changelog\nai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 2.1.0\n\n# Step 3: Update framework\nai-dev-kit update workflow-mgmt@2.1.0\n\n# Step 4: Test functionality\n# Run project tests\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAJOR Version Upgrade:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Review breaking changes\nai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 3.0.0 --breaking\n\n# Step 2: Review migration guide\ncat frameworks/workflow-mgmt/MIGRATION_GUIDE.md\n\n# Step 3: Plan migration\n# Document required changes\n\n# Step 4: Backup current installation\nai-dev-kit backup workflow-mgmt\n\n# Step 5: Update framework\nai-dev-kit update workflow-mgmt@3.0.0\n\n# Step 6: Apply migration steps\n# Follow migration guide\n\n# Step 7: Test thoroughly\n# Run comprehensive tests\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-multi-framework-migration",
      children: "3.4 Multi-Framework Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Batch Migration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Detect all frameworks\nai-dev-kit migrate --detect\n\n# Step 2: Convert all frameworks\nai-dev-kit migrate --convert --backend git-submodule\n\n# Step 3: Install all frameworks\nai-dev-kit install workflow-mgmt@2.1.0 kanban@1.0.0 numbering-versioning@2.0.0\n\n# Step 4: Validate all migrations\nai-dev-kit migrate --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sequential Migration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Migrate one framework at a time\nfor framework in workflow-mgmt kanban numbering-versioning; do\n    echo \"Migrating $framework...\"\n    ai-dev-kit migrate --convert --framework $framework\n    ai-dev-kit install $framework@latest\n    ai-dev-kit migrate --validate\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-migration-tools",
      children: "4. Migration Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-cli-tool-migration-commands",
      children: "4.1 CLI Tool Migration Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detect Frameworks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit migrate --detect\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Convert Frameworks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit migrate --convert [--framework <name>] [--backend <type>] [--dry-run]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validate Migration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit migrate --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full Migration Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Detect → Convert → Install → Validate\nai-dev-kit migrate --detect\nai-dev-kit migrate --convert --backend git-submodule\nai-dev-kit install workflow-mgmt@latest\nai-dev-kit migrate --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-migration-scripts",
      children: "4.2 Migration Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Migration Script:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/migrate-frameworks.sh"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -e\n\n# Configuration\nBACKEND=\"${1:-git-submodule}\"\nFRAMEWORKS=\"${@:2}\"\n\necho \"🔍 Detecting frameworks...\"\nai-dev-kit migrate --detect\n\necho \"🔄 Converting frameworks to $BACKEND...\"\nif [ -z \"$FRAMEWORKS\" ]; then\n    ai-dev-kit migrate --convert --backend \"$BACKEND\"\nelse\n    for framework in $FRAMEWORKS; do\n        ai-dev-kit migrate --convert --framework \"$framework\" --backend \"$BACKEND\"\n    done\nfi\n\necho \"📦 Installing frameworks...\"\n# Install detected frameworks\nai-dev-kit install --all\n\necho \"✅ Validating migration...\"\nai-dev-kit migrate --validate\n\necho \"✓ Migration complete!\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "chmod +x scripts/migrate-frameworks.sh\n./scripts/migrate-frameworks.sh git-submodule\n./scripts/migrate-frameworks.sh git-submodule workflow-mgmt kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backup Script:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/backup-frameworks.sh"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -e\n\nBACKUP_DIR=\".backup/frameworks-$(date +%Y%m%d-%H%M%S)\"\nmkdir -p \"$BACKUP_DIR\"\n\necho \"📦 Backing up frameworks to $BACKUP_DIR...\"\n\n# Backup frameworks directory\nif [ -d \"frameworks\" ]; then\n    cp -r frameworks/ \"$BACKUP_DIR/\"\nfi\n\n# Backup configuration\nif [ -f \".ai-dev-kit.yaml\" ]; then\n    cp .ai-dev-kit.yaml \"$BACKUP_DIR/\"\nfi\n\necho \"✓ Backup complete: $BACKUP_DIR\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-migration-validation-tools",
      children: "4.3 Migration Validation Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Validation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit migrate --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Validation Checklist:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Framework files exist at expected paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Framework versions match expected versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Configuration files updated correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Framework functionality works"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Integration points functional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No errors or warnings"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Script:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/validate-migration.sh"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nset -e\n\necho \"🔍 Validating framework migration...\"\n\n# Check CLI tool validation\nif command -v ai-dev-kit &> /dev/null; then\n    ai-dev-kit migrate --validate\nfi\n\n# Check framework files\nfor framework in frameworks/*/; do\n    if [ -d \"$framework\" ]; then\n        echo \"Checking $framework...\"\n        if [ ! -f \"$framework/README.md\" ]; then\n            echo \"⚠️  Warning: $framework missing README.md\"\n        fi\n    fi\ndone\n\necho \"✓ Validation complete\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-customization-preservation",
      children: "5. Customization Preservation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-customization-types",
      children: "5.1 Customization Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration Customizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " - Project-specific paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " - Project-specific rules"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework configuration files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code Customizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modified framework scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration code"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Customizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project-specific documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modified guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-preservation-methods",
      children: "5.2 Preservation Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 1: Configuration Override"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nframeworks:\n  workflow-mgmt:\n    version: \"2.1.0\"\n    backend: \"git-submodule\"\n    config_overrides:\n      rw_config:\n        version_file: \"src/myproject/version.py\"\n        main_changelog: \"CHANGELOG.md\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 2: Customization Patches"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create patch file\ndiff -u frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py \\\n      .backup/frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py \\\n      > patches/workflow-mgmt-branch-validation.patch\n\n# Apply patch after migration\npatch -p1 < patches/workflow-mgmt-branch-validation.patch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 3: Customization Directory"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Store customizations separately\nmkdir -p customizations/workflow-mgmt\n\n# Copy custom files\ncp .backup/frameworks/workflow-mgmt/custom-script.sh \\\n   customizations/workflow-mgmt/\n\n# Integrate customizations\n# Link or copy customizations to framework\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method 4: Framework Fork"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Fork framework repository\ngit clone https://github.com/RMS-Ltd/ai-dev-kit.git\ncd ai-dev-kit\ngit checkout workflow-mgmt-v2.1.0\n\n# Apply customizations\n# Commit customizations\n\n# Use fork as dependency\ngit submodule add /path/to/fork .ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-customization-migration-workflow",
      children: "5.3 Customization Migration Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Document Customizations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create customization inventory\ncat > migration-customizations.md << EOF\n# Framework Customizations\n\n## workflow-mgmt\n- Modified: scripts/validation/validate_branch_context.py\n  - Custom branch naming\n- Modified: rw-config.yaml\n  - Project paths\nEOF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Backup Customizations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Backup custom files\nmkdir -p .backup/customizations\ncp frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py \\\n   .backup/customizations/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Migrate Framework"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Perform migration\nai-dev-kit migrate --convert --framework workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Restore Customizations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Apply customizations\ncp .backup/customizations/validate_branch_context.py \\\n   frameworks/workflow-mgmt/scripts/validation/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Test Customizations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify customizations work\n# Run tests\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-migration-troubleshooting",
      children: "6. Migration Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-common-issues",
      children: "6.1 Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Framework Not Detected"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit migrate --detect"
        }), " returns no results"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework exists but not recognized"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework signature files exist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify framework directory structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use manual detection methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework name variations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Migration Fails"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration command fails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework files not migrated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration not updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check error messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify backup exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check file permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review migration logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Try manual migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Customizations Lost"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom files missing after migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration not preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functionality broken"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restore from backup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reapply customizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check customization preservation methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify customization paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Version Conflicts"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework version mismatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check version requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review compatibility matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve conflicts manually"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-rollback-procedures",
      children: "6.2 Rollback Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback from CLI Tool Migration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Remove migrated framework\nai-dev-kit remove workflow-mgmt\n\n# Step 2: Restore from backup\ncp -r .ai-dev-kit-migration-backup/workflow-mgmt ./frameworks/\n\n# Step 3: Restore configuration\n# Edit .ai-dev-kit.yaml to remove framework entry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback from Git Submodule Migration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Remove Git submodule\ngit submodule deinit -f frameworks/workflow-mgmt\ngit rm -f frameworks/workflow-mgmt\n\n# Step 2: Restore from backup\ncp -r .backup/frameworks/workflow-mgmt ./frameworks/\n\n# Step 3: Commit rollback\ngit add frameworks/\ngit commit -m \"Rollback framework migration\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback from Version Upgrade:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 1: Checkout previous version\nai-dev-kit update workflow-mgmt@2.0.0\n\n# Or restore from backup\ncp -r .backup/frameworks/workflow-mgmt ./frameworks/\n\n# Step 2: Test rollback\n# Verify functionality\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-migration-best-practices",
      children: "7. Migration Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-pre-migration",
      children: "7.1 Pre-Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document current state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify all customizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create comprehensive backup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan migration strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test in development first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-during-migration",
      children: "7.2 During Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow migration procedures step-by-step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor migration process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify each step completion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document any issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test immediately after migration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-post-migration",
      children: "7.3 Post-Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate migration success"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test all functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify customizations preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-migration-documentation",
      children: "7.4 Migration Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration date and method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework versions migrated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Customizations preserved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Issues encountered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback procedures used (if any)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-related-documentation",
      children: "8. Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-core-documents",
      children: "8.1 Core Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Update Procedures:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-update-procedures.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update workflows and methods"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version upgrade procedures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Dependency Architecture:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-dependency-architecture.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dependency installation methods"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backend selection guidance"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Compatibility Tracking:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-compatibility-tracking.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compatibility requirements"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version compatibility matrix"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-supporting-documents",
      children: "8.2 Supporting Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Dependency Integration Guide:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/documentation/user-docs/framework-dependency-integration-guide.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration procedures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CI/CD setup"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Dependency Update Guide:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/documentation/user-docs/framework-dependency-update-guide.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update procedures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update workflows"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CLI Tool Reference:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/documentation/user-docs/framework-dependency-cli-reference.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CLI tool commands"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration command reference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-summary",
      children: "9. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-key-principles",
      children: "9.1 Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Scenarios:"
        }), " Support for copy-paste → dependency, backend changes, version upgrades"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Tools:"
        }), " CLI tool and scripts for automated migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual Procedures:"
        }), " Step-by-step guides for manual migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety First:"
        }), " Backup, validation, and rollback procedures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customization Preservation:"
        }), " Methods to preserve project-specific customizations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-migration-workflow",
      children: "9.2 Migration Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Assessment → Planning → Backup → Migration → Validation → Testing → Documentation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-migration-methods",
      children: "9.3 Migration Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Tool:"
        }), " Automated migration with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit migrate"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Submodules:"
        }), " Manual migration using Git submodules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Subtrees:"
        }), " Manual migration using Git subtrees"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Managers:"
        }), " Migration to npm/pip (when available)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Task:"
      }), " E6:S02", ":T02", " - Build migration guides and tools"]
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
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
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