"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["3402"], {
793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_usage_guide_md_427_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-usage-guide-md-427.json
var site_docs_documentation_user_docs_framework_dependency_usage_guide_md_427_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-usage-guide","title":"Framework Dependency Usage Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-usage-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-usage-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-usage-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-07T11:15:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency Update Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide"},"next":{"title":"Framework Dependency Use Cases","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-usage-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-07T11:15:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency Usage Guide';

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
  "value": "Post-Installation Configuration",
  "id": "post-installation-configuration",
  "level": 2
}, {
  "value": "1. Update Project Paths",
  "id": "1-update-project-paths",
  "level": 3
}, {
  "value": "Workflow Management Framework",
  "id": "workflow-management-framework",
  "level": 4
}, {
  "value": "Kanban Framework",
  "id": "kanban-framework",
  "level": 4
}, {
  "value": "Numbering &amp; Versioning Framework",
  "id": "numbering--versioning-framework",
  "level": 4
}, {
  "value": "2. Configure Framework Settings",
  "id": "2-configure-framework-settings",
  "level": 3
}, {
  "value": "Workflow Management: <code>rw-config.yaml</code>",
  "id": "workflow-management-rw-configyaml",
  "level": 4
}, {
  "value": "Kanban Framework: Update Epic/Story Templates",
  "id": "kanban-framework-update-epicstory-templates",
  "level": 4
}, {
  "value": "3. Initialize Framework Components",
  "id": "3-initialize-framework-components",
  "level": 3
}, {
  "value": "Create Version File",
  "id": "create-version-file",
  "level": 4
}, {
  "value": "Initialize Kanban Structure",
  "id": "initialize-kanban-structure",
  "level": 4
}, {
  "value": "Basic Usage",
  "id": "basic-usage",
  "level": 2
}, {
  "value": "Workflow Management Framework",
  "id": "workflow-management-framework-1",
  "level": 3
}, {
  "value": "Using the Release Workflow (RW)",
  "id": "using-the-release-workflow-rw",
  "level": 4
}, {
  "value": "Manual RW Execution",
  "id": "manual-rw-execution",
  "level": 4
}, {
  "value": "Kanban Framework",
  "id": "kanban-framework-1",
  "level": 3
}, {
  "value": "Creating Work Items",
  "id": "creating-work-items",
  "level": 4
}, {
  "value": "Kanban Update Script",
  "id": "kanban-update-script",
  "level": 4
}, {
  "value": "Numbering &amp; Versioning Framework",
  "id": "numbering--versioning-framework-1",
  "level": 3
}, {
  "value": "Version Management",
  "id": "version-management",
  "level": 4
}, {
  "value": "Framework Integration",
  "id": "framework-integration",
  "level": 2
}, {
  "value": "Using Multiple Frameworks Together",
  "id": "using-multiple-frameworks-together",
  "level": 3
}, {
  "value": "Integration Workflow",
  "id": "integration-workflow",
  "level": 4
}, {
  "value": "Framework Dependencies",
  "id": "framework-dependencies",
  "level": 3
}, {
  "value": "Configuration Management",
  "id": "configuration-management",
  "level": 2
}, {
  "value": "Framework Configuration Files",
  "id": "framework-configuration-files",
  "level": 3
}, {
  "value": "<code>.ai-dev-kit.yaml</code> (if using CLI tool)",
  "id": "ai-dev-kityaml-if-using-cli-tool",
  "level": 4
}, {
  "value": "<code>rw-config.yaml</code> (Workflow Management)",
  "id": "rw-configyaml-workflow-management",
  "level": 4
}, {
  "value": "Environment Variables",
  "id": "environment-variables",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Version Management",
  "id": "version-management-1",
  "level": 3
}, {
  "value": "Kanban Management",
  "id": "kanban-management",
  "level": 3
}, {
  "value": "Framework Updates",
  "id": "framework-updates",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Common Issues",
  "id": "common-issues",
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
        id: "framework-dependency-usage-guide",
        children: "Framework Dependency Usage Guide"
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
      children: "This guide explains how to use AI Dev Kit frameworks after installation. It covers configuration, basic usage, integration with your project, and best practices for managing framework dependencies."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites:"
      }), " You should have completed the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
        children: "Installation Guide"
      }), " and have at least one framework installed."]
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
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md",
          children: "FR-081"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "post-installation-configuration",
      children: "Post-Installation Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-update-project-paths",
      children: "1. Update Project Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frameworks contain example paths that reference the source project. You need to update these for your project structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "workflow-management-framework",
      children: "Workflow Management Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd frameworks/workflow-mgmt\n\n# Find all references to example paths\ngrep -r \"src/confidentia\" . --include=\"*.md\" --include=\"*.py\" --include=\"*.yaml\"\n\n# Replace with your project structure\n# Example: if your project uses src/myproject/\nfind . -type f \\( -name \"*.md\" -o -name \"*.py\" -o -name \"*.yaml\" \\) \\\n  -exec sed -i '' 's|src/confidentia|src/myproject|g' {} \\;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key files to update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " - Main configuration file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_branch_context.py"
        }), " - Version file path"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation files - Example paths in guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kanban-framework",
      children: "Kanban Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd frameworks/kanban\n\n# Update example project references\nfind . -type f -name \"*.md\" \\\n  -exec sed -i '' 's|docs/project-management/epics/overview/Epic 4|docs/project-management/kanban/epics/epic-04|g' {} \\;\n\n# Update example project names\nfind . -type f -name \"*.md\" \\\n  -exec sed -i '' 's|Confidentia|YourProjectName|g' {} \\;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "numbering--versioning-framework",
      children: "Numbering & Versioning Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd frameworks/numbering-versioning\n\n# Update version file path\nvim versioning-policy.md\n# Update example paths to match your project structure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-configure-framework-settings",
      children: "2. Configure Framework Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each framework has configuration files that need customization."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "workflow-management-rw-configyaml",
      children: ["Workflow Management: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Location: frameworks/workflow-mgmt/rw-config.yaml\n\nproject:\n  name: \"your-project-name\"\n  root: \".\"\n\nversion:\n  file: \"src/yourproject/version.py\"\n  schema: \"RC.EPIC.STORY.TASK+BUILD\"\n\nbranches:\n  epic_pattern: \"epic/{n}-{name}\"\n  main_branch: \"main\"\n\nchangelog:\n  main_file: \"CHANGELOG.md\"\n  archive_dir: \"docs/changelog-and-release-notes/changelog-archive/\"\n\nkanban:\n  epic_doc_pattern: \"docs/project-management/kanban/epics/Epic-{epic}/Epic-{epic}.md\"\n  story_doc_pattern: \"docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*.md\"\n\nscripts:\n  scripts_path: \"packages/frameworks/workflow-mgt/scripts\"\n  kanban_update_script: \"packages/frameworks/kanban/scripts/update-kanban-docs.py\"\n\nvalidation:\n  strict_mode: true\n  validate_branch_context: true\n  validate_changelog_format: true\n  validate_version_bump: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kanban-framework-update-epicstory-templates",
      children: "Kanban Framework: Update Epic/Story Templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd frameworks/kanban\n\n# Review and customize templates\nls templates/\n\n# Update template variables for your project\nvim templates/epic-template.md\nvim templates/story-template.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-initialize-framework-components",
      children: "3. Initialize Framework Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-version-file",
      children: "Create Version File"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create version file based on your project structure\nmkdir -p src/yourproject\ncp frameworks/numbering-versioning/templates/version.py src/yourproject/version.py\n\n# Edit version file\nvim src/yourproject/version.py\n\n# Update:\n# - Project name\n# - Initial version (typically 0.1.1.1+1)\n# - Version schema (if different)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "initialize-kanban-structure",
      children: "Initialize Kanban Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create Kanban directory structure\nmkdir -p docs/project-management/kanban/epics\n\n# Copy Kanban board template\ncp frameworks/kanban/templates/kboard.md docs/project-management/kanban/kboard.md\n\n# Create first epic\nmkdir -p docs/project-management/kanban/epics/epic-01\ncp frameworks/kanban/templates/epic-template.md docs/project-management/kanban/epics/epic-01/epic-01.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basic-usage",
      children: "Basic Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-management-framework-1",
      children: "Workflow Management Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "using-the-release-workflow-rw",
      children: "Using the Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Release Workflow is invoked in your AI assistant (Cursor, GitHub Copilot, etc.) with ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " and a mandatory task id in the same message"]
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-060"
      }), "), e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E5S01T01"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E5:S01:T01"
      }), ". A bare ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      }), " must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW ABORTED"
      }), " before any version bump."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic RW Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ensure you're on the correct branch:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git branch --show-current\n# Should show: epic/{n}-{name} or main\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update version file:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Edit src/yourproject/version.py\n# Set VERSION_TASK and VERSION_BUILD for current work\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Trigger RW:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Send e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E5S01T01"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E5:S01:T01"
            }), " (your completed task id). Optional: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k …"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d …"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The assistant runs the Release Workflow steps defined in your ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW Steps (automated):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate branch context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bump version (if needed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create changelog archive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update main changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update README version badge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Epic/Story documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stage all changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commit changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create Git tag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push to remote"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report completion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "manual-rw-execution",
      children: "Manual RW Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need to run RW manually:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd frameworks/workflow-mgmt\n\n# Run RW script directly\npython3 scripts/release-workflow.py\n\n# Or use the agent execution guide\n# Follow: docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-framework-1",
      children: "Kanban Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "creating-work-items",
      children: "Creating Work Items"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create an Epic:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create epic directory\nmkdir -p docs/project-management/kanban/epics/epic-01\n\n# Create epic document\ncp frameworks/kanban/templates/epic-template.md docs/project-management/kanban/epics/epic-01/epic-01.md\n\n# Edit epic document\nvim docs/project-management/kanban/epics/epic-01/epic-01.md\n\n# Update:\n# - Epic title and description\n# - Story checklist\n# - Dependencies and risks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create a Story:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create story document\ncp frameworks/kanban/templates/story-template.md \\\n   docs/project-management/kanban/epics/epic-01/story-01-epic-title.md\n\n# Edit story document\nvim docs/project-management/kanban/epics/epic-01/story-01-epic-title.md\n\n# Update:\n# - Story title and description\n# - Task checklist\n# - Acceptance criteria\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Kanban Board:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update main board view\nvim docs/project-management/kanban/kboard.md\n\n# Add new epic to board\n# Update epic status\n# Update story progress\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kanban-update-script",
      children: "Kanban Update Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Kanban framework includes a script to automatically update board views:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd frameworks/kanban\n\n# Run update script\npython3 scripts/update-kanban-docs.py\n\n# This updates:\n# - kboard.md\n# - _index.md (quick view)\n# - Epic documents\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbering--versioning-framework-1",
      children: "Numbering & Versioning Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "version-management",
      children: "Version Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Schema:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC:"
        }), " Release Candidate (0 = development, 1+ = release candidate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EPIC:"
        }), " Epic number (1, 2, 3, ...)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "STORY:"
        }), " Story number within epic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TASK:"
        }), " Task number within story"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD:"
        }), " Build number (increments per release within task)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Edit src/yourproject/version.py\n\nVERSION_RC = 0        # Release candidate\nVERSION_EPIC = 1      # Current epic\nVERSION_STORY = 1     # Current story\nVERSION_TASK = 1      # Current task\nVERSION_BUILD = 1     # Build number (increments per RW)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Validation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd frameworks/workflow-mgmt\n\n# Validate version matches branch\npython3 scripts/validation/validate_branch_context.py\n\n# Validate changelog format\npython3 scripts/validation/validate_changelog_format.py\n\n# Validate version bump logic\npython3 scripts/validation/validate_version_bump.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-integration",
      children: "Framework Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-multiple-frameworks-together",
      children: "Using Multiple Frameworks Together"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frameworks are designed to work together. The recommended combination:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban"
        }), " - Organize work into Epics, Stories, and Tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning"
        }), " - Version your work using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow"
        }), " - Automate releases with AI-driven workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "integration-workflow",
      children: "Integration Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Create work in Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create Epic 1\n# Create Story 1\n# Create Tasks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Set version for work:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update version.py to match Epic/Story/Task\nVERSION_EPIC = 1\nVERSION_STORY = 1\nVERSION_TASK = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Execute Release Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# e.g. RW E1S01T01 or RW E1:S01:T01 in AI assistant (FR-060; same message as task id)\n# RW automatically:\n# - Updates Kanban docs\n# - Updates version\n# - Creates changelog entry\n# - Commits and tags\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-dependencies",
      children: "Framework Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some frameworks depend on others:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management"
        }), " depends on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning"
        }), " (for version schema)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management"
        }), " depends on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban"
        }), " (for Kanban updates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban"
        }), " can work standalone"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Review framework README for dependencies\ncat frameworks/workflow-mgmt/README.md | grep -A 10 \"Dependencies\"\n\n# Check framework compatibility\ncat frameworks/kanban/README.md | grep -A 5 \"compatibility\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-management",
      children: "Configuration Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-configuration-files",
      children: "Framework Configuration Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each framework has configuration files that control behavior:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "ai-dev-kityaml-if-using-cli-tool",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      }), " (if using CLI tool)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/workflow-mgmt\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"workflow-mgmt-v2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "rw-configyaml-workflow-management",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " (Workflow Management)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Controls Release Workflow behavior. See configuration section above."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "environment-variables",
      children: "Environment Variables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some frameworks support environment variables:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Set in .env or shell\nexport VIBE_DEV_KIT_STRICT_MODE=true\nexport VIBE_DEV_KIT_AUTO_UPDATE=false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-management-1",
      children: "Version Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Always update version before RW:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_TASK"
            }), " to current task"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VERSION_BUILD"
            }), " to 1 for new tasks, increment for same task"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use version validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run validators before committing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fix version mismatches immediately"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version consistency:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            }), " must match branch context"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Version in changelog must match ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-management",
      children: "Kanban Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Keep Kanban docs updated:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update status when work progresses"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run update script regularly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Keep board view synchronized"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use templates:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Always start from templates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maintain consistent structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Follow naming conventions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Track dependencies:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document epic/story dependencies"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update dependency status"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resolve blockers promptly"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-updates",
      children: "Framework Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test updates before applying:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Check for updates\nai-dev-kit check\n\n# Review changelog\n# Test in development branch\n# Apply to main after testing\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pin versions for stability:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "# In .ai-dev-kit.yaml\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"  # Pin to specific version\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Review breaking changes:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check framework changelog"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Review migration guides"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update configuration if needed"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-issues",
      children: "Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: RW fails validation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check branch context\npython3 frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py\n\n# Check changelog format\npython3 frameworks/workflow-mgmt/scripts/validation/validate_changelog_format.py\n\n# Fix issues and retry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Kanban docs out of sync"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run update script\npython3 frameworks/kanban/scripts/update-kanban-docs.py\n\n# Manually update if needed\nvim docs/project-management/kanban/kboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue: Version mismatch"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check current version\npython3 -c \"import sys; sys.path.insert(0, 'src'); from yourproject import version; print(version.VERSION_STRING)\"\n\n# Check branch\ngit branch --show-current\n\n# Update version.py to match branch context\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
        children: "Troubleshooting Guide"
      }), " for more detailed solutions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After configuring and using frameworks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Read framework-specific guides:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Workflow Management: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "frameworks/workflow-mgmt/IMPLEMENTATION_GUIDE.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Kanban: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "frameworks/kanban/IMPLEMENTATION_GUIDE.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Numbering & Versioning: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "frameworks/numbering-versioning/IMPLEMENTATION_GUIDE.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set up update notifications:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide",
              children: "Update Guide"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrate with CI/CD:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
              children: "Integration Guide"
            })]
          }), "\n"]
        }), "\n"]
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
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide",
          children: "Update Guide"
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