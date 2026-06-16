"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["1581"], {
9027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_integration_guide_md_51e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-integration-guide-md-51e.json
var site_docs_documentation_user_docs_framework_dependency_integration_guide_md_51e_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-integration-guide","title":"Framework Dependency Integration Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-integration-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-integration-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-integration-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2025-12-07T11:25:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency Installation Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide"},"next":{"title":"Post-Template Setup Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-integration-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2025-12-07T11:25:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency Integration Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Scope boundary (greenfield vs brownfield)",
  "id": "scope-boundary-greenfield-vs-brownfield",
  "level": 3
}, {
  "value": "Migration from copy-paste to dependencies",
  "id": "migration-from-copy-paste-to-dependencies",
  "level": 2
}, {
  "value": "Assessment",
  "id": "assessment",
  "level": 3
}, {
  "value": "Migration Process",
  "id": "migration-process",
  "level": 3
}, {
  "value": "Migration Checklist",
  "id": "migration-checklist",
  "level": 3
}, {
  "value": "New Project Integration",
  "id": "new-project-integration",
  "level": 2
}, {
  "value": "Greenfield Setup",
  "id": "greenfield-setup",
  "level": 3
}, {
  "value": "CI/CD Integration",
  "id": "cicd-integration",
  "level": 2
}, {
  "value": "GitHub Actions",
  "id": "github-actions",
  "level": 3
}, {
  "value": "GitLab CI",
  "id": "gitlab-ci",
  "level": 3
}, {
  "value": "Jenkins",
  "id": "jenkins",
  "level": 3
}, {
  "value": "Multiple Framework Management",
  "id": "multiple-framework-management",
  "level": 2
}, {
  "value": "Selective framework adoption",
  "id": "selective-framework-adoption",
  "level": 3
}, {
  "value": "Monorepo integration",
  "id": "monorepo-integration",
  "level": 3
}, {
  "value": "Gradual adoption",
  "id": "gradual-adoption",
  "level": 3
}, {
  "value": "Framework Dependencies",
  "id": "framework-dependencies",
  "level": 3
}, {
  "value": "Framework Version Compatibility",
  "id": "framework-version-compatibility",
  "level": 3
}, {
  "value": "Custom Framework Integration",
  "id": "custom-framework-integration",
  "level": 2
}, {
  "value": "Custom Scripts",
  "id": "custom-scripts",
  "level": 3
}, {
  "value": "Framework Hooks",
  "id": "framework-hooks",
  "level": 3
}, {
  "value": "Team Collaboration",
  "id": "team-collaboration",
  "level": 2
}, {
  "value": "Shared Configuration",
  "id": "shared-configuration",
  "level": 3
}, {
  "value": "Update Coordination",
  "id": "update-coordination",
  "level": 3
}, {
  "value": "Troubleshooting Integration",
  "id": "troubleshooting-integration",
  "level": 2
}, {
  "value": "Common Issues",
  "id": "common-issues",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Framework Management",
  "id": "framework-management",
  "level": 3
}, {
  "value": "CI/CD Integration",
  "id": "cicd-integration-1",
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
        id: "framework-dependency-integration-guide",
        children: "Framework Dependency Integration Guide"
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
      children: "This guide explains how to integrate AI Dev Kit frameworks into existing projects, migrate from copy-paste to dependency-based installation, and integrate frameworks with CI/CD pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-boundary-greenfield-vs-brownfield",
      children: "Scope boundary (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This guide primarily supports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "integration / migration"
        }), " flows for existing repositories."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For the canonical ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "greenfield first-run"
        }), " sequence (FR-080 / E6:S09", ":T01", "), use:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "INSTALL_IN_YOUR_PROJECT.md"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
              children: "IPW-E6S9T1 planning package"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Brownfield canonical entry:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "INSTALL_IN_YOUR_PROJECT.md — Brownfield adoption"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
              children: "ADR-003"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md",
              children: "FR-081"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md",
              children: "IPP-E6S9T2"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrating existing projects from copy-paste to dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrating frameworks into new projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Setting up CI/CD for automated framework management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Managing multiple frameworks together"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-from-copy-paste-to-dependencies",
      children: "Migration from copy-paste to dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "assessment",
      children: "Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Identify Current Framework Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find copied frameworks\nfind . -type d -name \"workflow*\" -o -name \"kanban*\" -o -name \"numbering*\"\n\n# Check for framework files\nls -la frameworks/ 2>/dev/null || echo \"No frameworks directory\"\n\n# Identify framework versions (if documented)\ngrep -r \"version.*2\\.\" frameworks/*/README.md 2>/dev/null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Document Current State:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "migration-plan.md"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# Framework Migration Plan\n\n## Current State\n- workflow-mgmt: Copied manually, version unknown\n- kanban: Copied manually, version unknown\n- Location: ./frameworks/\n\n## Target State\n- workflow-mgmt: Git submodule, version 2.0.0\n- kanban: Git submodule, version 1.0.0\n- Location: ./frameworks/ (same)\n\n## Migration Steps\n1. Backup current frameworks\n2. Remove copied frameworks\n3. Install as dependencies\n4. Restore customizations\n5. Test functionality\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-process",
      children: "Migration Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Backup Current Frameworks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create backup\nmkdir -p .backup/frameworks\ncp -r frameworks/ .backup/frameworks/\n\n# Or use Git to track changes\ngit add frameworks/\ngit commit -m \"Backup frameworks before migration\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Identify Customizations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find custom changes\ncd frameworks/workflow-mgmt\n\n# Check for modified files\ngit status  # If frameworks were in Git\n\n# Or compare with original\ndiff -r .backup/frameworks/workflow-mgmt/ \\\n      /path/to/ai-dev-kit/packages/frameworks/workflow\\ mgt/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Customizations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path updates (src/confidentia → src/yourproject)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration changes (rw-config.yaml)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom scripts or templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Remove Copied Frameworks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove copied frameworks\nrm -rf frameworks/workflow-mgmt\nrm -rf frameworks/kanban\nrm -rf frameworks/numbering-versioning\n\n# Commit removal\ngit add frameworks/\ngit commit -m \"Remove copied frameworks before migration to dependencies\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Install as Dependencies"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using Git Submodules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add ai-dev-kit as submodule\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit\n\n# Checkout framework versions\ncd .ai-dev-kit\ngit checkout workflow-mgmt-v2.0.0\ncd ..\n\n# Copy frameworks\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\ncp -r .ai-dev-kit/packages/frameworks/kanban/ ./frameworks/kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using CLI Tool:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install frameworks\nai-dev-kit install workflow-mgmt@2.0.0\nai-dev-kit install kanban@1.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Restore Customizations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Restore path customizations\ncd frameworks/workflow-mgmt\nfind . -type f -name \"*.md\" -o -name \"*.py\" -o -name \"*.yaml\" | \\\n  xargs sed -i '' 's|src/confidentia|src/yourproject|g'\n\n# Restore configuration\ncp .backup/frameworks/workflow-mgmt/rw-config.yaml \\\n   frameworks/workflow-mgmt/rw-config.yaml\n\n# Restore custom scripts (if any)\ncp .backup/frameworks/workflow-mgmt/scripts/custom-*.py \\\n   frameworks/workflow-mgmt/scripts/ 2>/dev/null || true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6: Test Functionality"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test workflow management\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n\n# Test Release Workflow (FR-060: RW + task id in same message, e.g. RW E5S01T01)\n# Verify all steps complete\n\n# Test Kanban\ncd ../kanban\npython3 scripts/update-kanban-docs.py --help\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7: Commit Migration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Commit migrated frameworks\ngit add frameworks/ .ai-dev-kit .gitmodules\ngit commit -m \"Migrate frameworks from copy-paste to Git submodule dependencies\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-checklist",
      children: "Migration Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Backup current frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document customizations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Remove copied frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Install as dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Restore customizations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update configuration files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test framework functionality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test Release Workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Update documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Commit migration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-project-integration",
      children: "New Project Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "greenfield-setup",
      children: "Greenfield Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Initialize Project:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create new project\nmkdir my-new-project\ncd my-new-project\ngit init\n\n# Create basic structure\nmkdir -p src/myproject docs/kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Install Frameworks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install all three core frameworks\nai-dev-kit install workflow-mgmt@2.0.0\nai-dev-kit install kanban@1.0.0\nai-dev-kit install numbering-versioning@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Configure Frameworks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Configure workflow management\nvim frameworks/workflow-mgmt/rw-config.yaml\n# Update: project name, paths, branch patterns\n\n# Create version file\ncp frameworks/numbering-versioning/templates/version.py src/myproject/version.py\nvim src/myproject/version.py\n# Set initial version: 0.1.1.1+1\n\n# Initialize Kanban\nmkdir -p docs/kanban/epics\ncp frameworks/kanban/templates/kboard.md docs/kanban/kboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Test Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test workflow management\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n\n# Create first epic\nmkdir -p docs/kanban/epics/epic-01\ncp frameworks/kanban/templates/epic-template.md \\\n   docs/kanban/epics/epic-01/epic-01.md\n\n# Test Release Workflow\ngit checkout -b epic/1-setup\n# e.g. RW E1S01T01 or RW E1:S01:T01 in AI assistant\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cicd-integration",
      children: "CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github-actions",
      children: "GitHub Actions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check for Framework Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/check-framework-updates.yml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Check Framework Updates\n\non:\n  schedule:\n    - cron: '0 0 * * 1'  # Weekly on Monday\n  workflow_dispatch:  # Manual trigger\n\njobs:\n  check-updates:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n        with:\n          submodules: true\n      \n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '3.10'\n      \n      - name: Install ai-dev-kit CLI\n        run: pip install ai-dev-kit\n      \n      - name: Check for updates\n        run: ai-dev-kit check --notify\n      \n      - name: Create issue if updates available\n        if: failure()\n        uses: actions/github-script@v6\n        with:\n          script: |\n            github.rest.issues.create({\n              owner: context.repo.owner,\n              repo: context.repo.repo,\n              title: 'Framework Updates Available',\n              body: 'Framework updates are available. Run `ai-dev-kit check` for details.'\n            })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated Framework Updates (Optional):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/update-frameworks.yml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Update Frameworks\n\non:\n  workflow_dispatch:\n    inputs:\n      framework:\n        description: 'Framework to update'\n        required: true\n      version:\n        description: 'Version to update to'\n        required: true\n\njobs:\n  update:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n        with:\n          submodules: true\n      \n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: '3.10'\n      \n      - name: Install ai-dev-kit CLI\n        run: pip install ai-dev-kit\n      \n      - name: Update framework\n        run: ai-dev-kit update ${{ inputs.framework }}@${{ inputs.version }}\n      \n      - name: Run tests\n        run: |\n          cd frameworks/${{ inputs.framework }}\n          python3 scripts/validation/validate_branch_context.py\n      \n      - name: Create PR\n        uses: peter-evans/create-pull-request@v5\n        with:\n          commit-message: \"Update ${{ inputs.framework }} to ${{ inputs.version }}\"\n          title: \"Update ${{ inputs.framework }} to ${{ inputs.version }}\"\n          body: \"Automated framework update\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gitlab-ci",
      children: "GitLab CI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check for Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitlab-ci.yml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "check-framework-updates:\n  image: python:3.10\n  script:\n    - pip install ai-dev-kit\n    - ai-dev-kit check --notify\n  only:\n    - schedules\n  when: manual\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jenkins",
      children: "Jenkins"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Check Pipeline:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "pipeline {\n    agent any\n    \n    triggers {\n        cron('H 0 * * 1')  // Weekly\n    }\n    \n    stages {\n        stage('Check Updates') {\n            steps {\n                sh 'pip install ai-dev-kit'\n                sh 'ai-dev-kit check --notify'\n            }\n        }\n    }\n    \n    post {\n        failure {\n            emailext (\n                subject: \"Framework Updates Available\",\n                body: \"Framework updates are available. Check logs for details.\",\n                to: \"${env.CHANGE_AUTHOR_EMAIL}\"\n            )\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "multiple-framework-management",
      children: "Multiple Framework Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selective-framework-adoption",
      children: "Selective framework adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt frameworks incrementally (existing projects or trimmed templates). See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-4-existing-project--some-packages",
        children: "Use Case 4"
      }), " in the Use Cases guide."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monorepo-integration",
      children: "Monorepo integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Centralize installs and updates for multiple packages. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-6-monorepomulti-project-setup",
        children: "Use Case 6"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gradual-adoption",
      children: "Gradual adoption"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add frameworks over time or finish migrating from copy-paste. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-7-gradualmigratory-adoption",
        children: "Use Case 7"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-dependencies",
      children: "Framework Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some frameworks depend on others:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning"
        }), " (for version schema)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban"
        }), " (for Kanban updates)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Install Dependencies First:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install dependencies first\nai-dev-kit install numbering-versioning@2.0.0\nai-dev-kit install kanban@1.0.0\n\n# Then install dependent framework\nai-dev-kit install workflow-mgmt@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List framework dependencies\nai-dev-kit deps workflow-mgmt\n\n# Output:\n# Dependencies:\n#   numbering-versioning: >=2.0.0\n#   kanban: >=1.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-version-compatibility",
      children: "Framework Version Compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if installed frameworks are compatible\nai-dev-kit check-compatibility\n\n# Output:\n# Framework Compatibility:\n#   workflow-mgmt@2.0.0 ✓ Compatible\n#   kanban@1.0.0 ✓ Compatible\n#   numbering-versioning@2.0.0 ✓ Compatible\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolve Conflicts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# If conflicts found, update frameworks\nai-dev-kit update --resolve-conflicts\n\n# Or update specific framework\nai-dev-kit update workflow-mgmt@2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-framework-integration",
      children: "Custom Framework Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-scripts",
      children: "Custom Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Add Custom Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create custom scripts directory\nmkdir -p frameworks/workflow-mgmt/scripts/custom\n\n# Add custom script\ncat > frameworks/workflow-mgmt/scripts/custom/my-custom-script.py << 'EOF'\n#!/usr/bin/env python3\n\"\"\"Custom script for project-specific needs.\"\"\"\n\nimport sys\nsys.path.insert(0, '../../..')\n\n# Your custom logic here\nEOF\n\nchmod +x frameworks/workflow-mgmt/scripts/custom/my-custom-script.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " Custom scripts should be preserved during updates. Consider:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Storing custom scripts outside framework directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using framework hooks/plugins if available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documenting customizations for update process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-hooks",
      children: "Framework Hooks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Update Hook:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit/hooks/pre-update.sh"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Pre-update hook\n\necho \"Backing up customizations...\"\ncp -r frameworks/workflow-mgmt/scripts/custom .backup/custom-scripts/\n\necho \"Pre-update hook complete\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-Update Hook:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit/hooks/post-update.sh"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Post-update hook\n\necho \"Restoring customizations...\"\ncp -r .backup/custom-scripts/* frameworks/workflow-mgmt/scripts/custom/\n\necho \"Post-update hook complete\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "team-collaboration",
      children: "Team Collaboration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shared-configuration",
      children: "Shared Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Control:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Commit framework configuration\ngit add .ai-dev-kit.yaml\ngit add frameworks/*/rw-config.yaml\ngit commit -m \"Add framework configuration\"\n\n# Team members clone with submodules\ngit clone --recurse-submodules https://github.com/yourorg/yourproject.git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration Management:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml (committed to repo)\nversion: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    pin: true  # Pin version for team consistency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-coordination",
      children: "Update Coordination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Developer checks for updates:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "ai-dev-kit check\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create update branch:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git checkout -b update/framework-workflow-mgmt-2.1.0\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Apply update:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "ai-dev-kit update workflow-mgmt@2.1.0\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test update:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Run tests\n# Verify functionality\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create PR:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git push origin update/framework-workflow-mgmt-2.1.0\n# Create pull request\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Team reviews and merges:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review changelog"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test in development"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Merge to main"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-integration",
      children: "Troubleshooting Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-issues",
      children: "Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Submodule not initialized"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize submodules\ngit submodule update --init --recursive\n\n# Or clone with submodules\ngit clone --recurse-submodules <repo-url>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Framework paths incorrect"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update paths in configuration\nvim frameworks/workflow-mgmt/rw-config.yaml\n\n# Or use CLI tool\nai-dev-kit config update-paths\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Version conflicts"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for conflicts\nai-dev-kit check-compatibility\n\n# Resolve conflicts\nai-dev-kit update --resolve-conflicts\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
        children: "Troubleshooting Guide"
      }), " for more detailed solutions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-management",
      children: "Framework Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pin versions in production:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "frameworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    pin: true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test updates in development:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create test branch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Apply update"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test thoroughly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Merge after validation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document customizations:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Keep list of custom changes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document in project README"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update during framework updates"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-integration-1",
      children: "CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automate update checking:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Weekly scheduled checks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Notification on updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manual update approval"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automate testing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test after updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate framework functionality"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run project tests"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version control:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Commit framework versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tag releases with framework versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document update history"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After integration:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set up update notifications:"
        }), " Configure automatic checking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test update process:"
        }), " Try updating in test branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document customizations:"
        }), " Keep track of changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set up CI/CD:"
        }), " Automate framework management"]
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
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide",
          children: "Update Guide"
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