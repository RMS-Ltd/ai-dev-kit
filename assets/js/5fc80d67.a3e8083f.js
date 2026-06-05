"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89027"], {
50516(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_update_cli_design_md_5fc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-update-cli-design-md-5fc.json
var site_docs_architecture_standards_and_adrs_framework_update_cli_design_md_5fc_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-update-cli-design","title":"Framework Update CLI Tool Design","description":"Status: Design","source":"@site/../docs/architecture/standards-and-adrs/framework-update-cli-design.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-update-cli-design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-update-cli-design","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-update-cli-design.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-06T14:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Release Process","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-release-process"},"next":{"title":"Framework Update Procedures","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-update-procedures"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-update-cli-design.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-06T14:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Update CLI Tool Design';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Goals",
  "id": "goals",
  "level": 2
}, {
  "value": "CLI Commands",
  "id": "cli-commands",
  "level": 2
}, {
  "value": "Core Commands",
  "id": "core-commands",
  "level": 3
}, {
  "value": "<code>ai-dev-kit install &lt;framework&gt;[@version]</code>",
  "id": "ai-dev-kit-install-frameworkversion",
  "level": 4
}, {
  "value": "<code>ai-dev-kit update &lt;framework&gt;</code>",
  "id": "ai-dev-kit-update-framework",
  "level": 4
}, {
  "value": "<code>ai-dev-kit check</code>",
  "id": "ai-dev-kit-check",
  "level": 4
}, {
  "value": "<code>ai-dev-kit status</code>",
  "id": "ai-dev-kit-status",
  "level": 4
}, {
  "value": "<code>ai-dev-kit list</code>",
  "id": "ai-dev-kit-list",
  "level": 4
}, {
  "value": "<code>ai-dev-kit remove &lt;framework&gt;</code>",
  "id": "ai-dev-kit-remove-framework",
  "level": 4
}, {
  "value": "Configuration File",
  "id": "configuration-file",
  "level": 2
}, {
  "value": "<code>.ai-dev-kit.yaml</code>",
  "id": "ai-dev-kityaml",
  "level": 3
}, {
  "value": "Backend Implementations",
  "id": "backend-implementations",
  "level": 2
}, {
  "value": "Git Submodule Backend",
  "id": "git-submodule-backend",
  "level": 3
}, {
  "value": "Git Subtree Backend",
  "id": "git-subtree-backend",
  "level": 3
}, {
  "value": "Package Manager Backends",
  "id": "package-manager-backends",
  "level": 3
}, {
  "value": "Tool Structure",
  "id": "tool-structure",
  "level": 2
}, {
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "As Python Package",
  "id": "as-python-package",
  "level": 3
}, {
  "value": "From Source",
  "id": "from-source",
  "level": 3
}, {
  "value": "Usage Examples",
  "id": "usage-examples",
  "level": 2
}, {
  "value": "Greenfield Project",
  "id": "greenfield-project",
  "level": 3
}, {
  "value": "Migration from Copy-Paste",
  "id": "migration-from-copy-paste",
  "level": 3
}, {
  "value": "Error Handling",
  "id": "error-handling",
  "level": 2
}, {
  "value": "Common Errors",
  "id": "common-errors",
  "level": 3
}, {
  "value": "Future Enhancements",
  "id": "future-enhancements",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Decision Record",
  "id": "decision-record",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "framework-update-cli-tool-design",
        children: "Framework Update CLI Tool Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Design", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 6 - Framework Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 2 - Framework Update and Migration", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S02", ":T04", " - Build framework update CLI tool"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document designs the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool for managing framework dependencies across projects. The CLI provides a unified interface for installing, updating, and managing frameworks regardless of the underlying dependency backend (Git submodules, package managers, etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goals",
      children: "Goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unified Interface:"
        }), " Single CLI tool for all framework management operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend Abstraction:"
        }), " Support multiple dependency backends (Git submodules, package managers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Updates:"
        }), " Enable automatic framework updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Management:"
        }), " Track and pin framework versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy Migration:"
        }), " Support migration from copy-paste to dependency model"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cli-commands",
      children: "CLI Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-commands",
      children: "Core Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-dev-kit-install-frameworkversion",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit install <framework>[@version]"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install a framework as a dependency."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install latest version\nai-dev-kit install numbering-versioning\n\n# Install specific version\nai-dev-kit install numbering-versioning@2.0.0\n\n# Install multiple frameworks\nai-dev-kit install numbering-versioning@2.0.0 workflow-mgt@2.0.0 kanban@1.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--backend <type>"
        }), " - Specify dependency backend (git-submodule, git-subtree, npm, pip)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--path <path>"
        }), " - Custom installation path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " - Preview changes without applying"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects project type and suggests appropriate backend"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Creates ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " configuration file"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installs framework using selected backend"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates project configuration files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-dev-kit-update-framework",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit update <framework>"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update a framework to the latest compatible version."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update specific framework\nai-dev-kit update numbering-versioning\n\n# Update all frameworks\nai-dev-kit update --all\n\n# Update to specific version\nai-dev-kit update numbering-versioning@2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--all"
        }), " - Update all installed frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--check"
        }), " - Check for updates without applying"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " - Preview updates without applying"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checks for available updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates framework using appropriate backend"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " configuration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-dev-kit-check",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check for available framework updates."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check all frameworks\nai-dev-kit check\n\n# Check specific framework\nai-dev-kit check numbering-versioning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Framework: numbering-versioning\n  Current: 2.0.0\n  Latest:  2.1.0\n  Status:  Update available\n\nFramework: workflow-mgt\n  Current: 2.0.0\n  Latest:  2.0.0\n  Status:  Up to date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-dev-kit-status",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit status"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show status of installed frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Show all frameworks\nai-dev-kit status\n\n# Show specific framework\nai-dev-kit status numbering-versioning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Installed Frameworks:\n  numbering-versioning: 2.0.0 (git-submodule)\n  workflow-mgt:         2.0.0 (git-submodule)\n  kanban:              1.0.0 (git-submodule)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-dev-kit-list",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit list"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List available frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all frameworks\nai-dev-kit list\n\n# List with versions\nai-dev-kit list --versions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Available Frameworks:\n  numbering-versioning (2.0.0, 2.1.0)\n  workflow-mgt (2.0.0)\n  kanban (1.0.0)\n  debug-path (1.0.0)\n  doc-lifecycle (1.0.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-dev-kit-remove-framework",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit remove <framework>"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remove a framework dependency."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove framework\nai-dev-kit remove numbering-versioning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--keep-files"
        }), " - Keep framework files but remove dependency tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-file",
      children: "Configuration File"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kityaml",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuration file for framework dependencies."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nframeworks:\n  numbering-versioning:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/ai-dev-kit/packages/frameworks/numbering-versioning\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"numbering-versioning-v2.0.0\"\n  workflow-mgt:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/ai-dev-kit/packages/frameworks/workflow-mgt\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"workflow-mgt-v2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backend-implementations",
      children: "Backend Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-submodule-backend",
      children: "Git Submodule Backend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cli/backends/git_submodule.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install()"
        }), " - Add Git submodule"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update()"
        }), " - Update submodule to new version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "check()"
        }), " - Check for updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "status()"
        }), " - Show submodule status"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "backend = GitSubmoduleBackend()\nbackend.install(\n    framework=\"numbering-versioning\",\n    version=\"2.0.0\",\n    path=\"frameworks/ai-dev-kit\",\n    source=\"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-subtree-backend",
      children: "Git Subtree Backend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cli/backends/git_subtree.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install()"
        }), " - Add Git subtree"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update()"
        }), " - Update subtree to new version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "check()"
        }), " - Check for updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "status()"
        }), " - Show subtree status"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-manager-backends",
      children: "Package Manager Backends"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cli/backends/package_manager.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supported:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["npm (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ai-dev-kit/numbering-versioning"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pip (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-numbering-versioning"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install()"
        }), " - Install via package manager"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update()"
        }), " - Update via package manager"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "check()"
        }), " - Check for updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "status()"
        }), " - Show package status"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tool-structure",
      children: "Tool Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit/\n├── cli/\n│   ├── __init__.py\n│   ├── main.py                 # CLI entry point\n│   ├── commands/\n│   │   ├── __init__.py\n│   │   ├── install.py\n│   │   ├── update.py\n│   │   ├── check.py\n│   │   ├── status.py\n│   │   ├── list.py\n│   │   └── remove.py\n│   ├── backends/\n│   │   ├── __init__.py\n│   │   ├── base.py             # Base backend interface\n│   │   ├── git_submodule.py\n│   │   ├── git_subtree.py\n│   │   └── package_manager.py\n│   ├── config.py               # Configuration management\n│   └── utils.py                # Utility functions\n├── setup.py\n├── README.md\n└── requirements.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "as-python-package",
      children: "As Python Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "from-source",
      children: "From Source"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone https://github.com/RMS-Ltd/ai-dev-kit.git\ncd ai-dev-kit/cli\npip install -e .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage-examples",
      children: "Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "greenfield-project",
      children: "Greenfield Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install all three core frameworks\nai-dev-kit install numbering-versioning@2.0.0 \\\n                   workflow-mgt@2.0.0 \\\n                   kanban@1.0.0\n\n# Check for updates\nai-dev-kit check\n\n# Update to latest versions\nai-dev-kit update --all\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-from-copy-paste",
      children: "Migration from Copy-Paste"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Detect existing frameworks\nai-dev-kit migrate --detect\n\n# Convert to dependencies\nai-dev-kit migrate --convert\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-handling",
      children: "Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-errors",
      children: "Common Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Not Found:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error: Framework 'invalid-framework' not found.\nAvailable frameworks: numbering-versioning, workflow-mgt, kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Not Found:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error: Version '3.0.0' not found for framework 'numbering-versioning'.\nAvailable versions: 2.0.0, 2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend Not Available:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Error: Backend 'npm' not available. Install Node.js to use npm backend.\nAvailable backends: git-submodule, git-subtree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-enhancements",
      children: "Future Enhancements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Tool:"
        }), " Automated migration from copy-paste to dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policies:"
        }), " Configurable update policies (auto, manual, scheduled)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Resolution:"
        }), " Automatic dependency resolution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conflict Resolution:"
        }), " Handle merge conflicts in updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback:"
        }), " Rollback to previous framework versions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Dependency Architecture:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "framework-dependency-architecture.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 6:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/epic-06.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Build ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool for framework management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides unified interface for all dependency backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables automated updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simplifies framework management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports migration from copy-paste model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Design approved, ready for implementation in Epic 6, Story 2."]
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