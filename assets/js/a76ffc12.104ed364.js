"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["6488"], {
5604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_cli_reference_md_a76_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-cli-reference-md-a76.json
var site_docs_documentation_user_docs_framework_dependency_cli_reference_md_a76_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-cli-reference","title":"Framework Dependency CLI Reference","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-cli-reference.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-cli-reference","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-cli-reference.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2025-12-07T11:30:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Upstream documentation register (copy to your repository)","permalink":"/ai-dev-kit/docs/documentation/user-docs/examples/adopter-upstream-register"},"next":{"title":"Framework Dependency FAQ","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-faq"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-cli-reference.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2025-12-07T11:30:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency CLI Reference';

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
  "value": "Accessibility",
  "id": "accessibility",
  "level": 2
}, {
  "value": "Core Commands",
  "id": "core-commands",
  "level": 2
}, {
  "value": "<code>ai-dev-kit init</code>",
  "id": "ai-dev-kit-init",
  "level": 3
}, {
  "value": "<code>ai-dev-kit install</code>",
  "id": "ai-dev-kit-install",
  "level": 3
}, {
  "value": "<code>ai-dev-kit update</code>",
  "id": "ai-dev-kit-update",
  "level": 3
}, {
  "value": "<code>ai-dev-kit check</code>",
  "id": "ai-dev-kit-check",
  "level": 3
}, {
  "value": "<code>ai-dev-kit status</code>",
  "id": "ai-dev-kit-status",
  "level": 3
}, {
  "value": "<code>ai-dev-kit list</code>",
  "id": "ai-dev-kit-list",
  "level": 3
}, {
  "value": "<code>ai-dev-kit remove</code>",
  "id": "ai-dev-kit-remove",
  "level": 3
}, {
  "value": "<code>ai-dev-kit logs</code>",
  "id": "ai-dev-kit-logs",
  "level": 3
}, {
  "value": "Configuration Commands",
  "id": "configuration-commands",
  "level": 2
}, {
  "value": "<code>ai-dev-kit config</code>",
  "id": "ai-dev-kit-config",
  "level": 3
}, {
  "value": "Backend Support",
  "id": "backend-support",
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
  "value": "npm Backend",
  "id": "npm-backend",
  "level": 3
}, {
  "value": "pip Backend",
  "id": "pip-backend",
  "level": 3
}, {
  "value": "<code>ai-dev-kit migrate</code>",
  "id": "ai-dev-kit-migrate",
  "level": 3
}, {
  "value": "Global Options",
  "id": "global-options",
  "level": 2
}, {
  "value": "Configuration File",
  "id": "configuration-file",
  "level": 2
}, {
  "value": "<code>.ai-dev-kit.yaml</code>",
  "id": "ai-dev-kityaml",
  "level": 3
}, {
  "value": "Error Codes",
  "id": "error-codes",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Complete Workflow",
  "id": "complete-workflow",
  "level": 3
}, {
  "value": "CI/CD Integration",
  "id": "cicd-integration",
  "level": 3
}, {
  "value": "Migration from Copy-Paste",
  "id": "migration-from-copy-paste",
  "level": 3
}, {
  "value": "Configuration Management",
  "id": "configuration-management",
  "level": 3
}, {
  "value": "Framework Removal",
  "id": "framework-removal",
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
        id: "framework-dependency-cli-reference",
        children: "Framework Dependency CLI Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 2.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
      children: ["This document provides a complete reference for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool commands. The CLI tool provides a unified interface for managing framework dependencies across all backends (Git submodules, package managers)."]
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
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fbu/FR-081-brownfield-modular-adopter-integration.md",
          children: "FR-081"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install from source (current method)\ncd /path/to/ai-dev-kit\npip install -e .\n\n# Or install CLI tool directly\ncd /path/to/ai-dev-kit/cli\npip install -e .\n\n# Future: Install via pip (when published to PyPI)\npip install ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " The CLI tool is currently available from source. PyPI distribution is planned for a future release."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "accessibility",
      children: "Accessibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CLI status lines always include text labels (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Error:"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Success:"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Warning:"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Info:"
      }), "). Emoji prefixes appear only when colour is enabled."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "NO_COLOR"
          })
        }), " — Set this environment variable (any value) to suppress emoji and ANSI output (see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://no-color.org/",
          children: "no-color.org"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--no-color"
          })
        }), " — Global flag on any command: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit --no-color install workflow-mgmt"
        }), " sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NO_COLOR=1"
        }), " for that run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install errors"
        }), " — Structured ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ERROR [ADK-…]"
        }), " banners (FR-108) are text-first and unchanged by colour settings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintainer conventions: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/governance/standards/cli-accessibility-conventions.md",
        children: "cli-accessibility-conventions.md"
      }), " · Strategy: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-025-layered-accessibility-strategy.md",
        children: "ADR-025"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "core-commands",
      children: "Core Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-init",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit init"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initialize ai-dev-kit in your project."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit init [--path <path>] [--backend <backend>]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--path <path>"
        }), " - Project root directory (default: current directory)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--backend <backend>"
        }), " - Default dependency backend (git-submodule, npm, pip)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize in current directory\nai-dev-kit init\n\n# Initialize with specific backend\nai-dev-kit init --backend git-submodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " - Configuration file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-install",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit install"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install a framework as a dependency."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit install <framework>[@version] [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<framework>"
        }), " - Framework name (required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "[@version]"
        }), " - Specific version (optional, defaults to latest)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--backend <type>"
        }), " - Dependency backend (git-submodule, git-subtree, npm, pip)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--path <path>"
        }), " - Custom installation path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " - Preview changes without applying"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--log-path <path>"
        }), " - Override log directory for this run (see Install logging below)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--no-install-log"
        }), " - Disable per-run install logging for this run"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install latest version\nai-dev-kit install workflow-mgmt\n\n# Install specific version\nai-dev-kit install workflow-mgmt@2.0.0\n\n# Install multiple frameworks\nai-dev-kit install workflow-mgmt@2.0.0 kanban@1.0.0 numbering-versioning@2.0.0\n\n# Install with specific backend\nai-dev-kit install workflow-mgmt --backend git-submodule\n\n# Preview installation\nai-dev-kit install workflow-mgmt --dry-run\n"
      })
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
        }), " if it doesn't exist"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installs framework using selected backend"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates project configuration files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Install logging (FR-047):"
      }), " Each run of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit install"
      }), " writes a timestamped log file under the project’s ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logs/ai-dev-kit/install/"
      }), " directory (or the path set in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_logging.path"
      }), "). The log records frameworks, backend, path, and framework-specific installer output (e.g. Kanban phase markers). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--log-path PATH"
      }), " to override the log directory for one run, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--no-install-log"
      }), " to disable logging for one run. See the configuration guide for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_logging"
      }), " options."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Install log validation (FR-078):"
      }), " For JSON logs, run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit logs validate-install-log"
      }), " to verify event-contract completeness (", (0,jsx_runtime.jsx)(_components.code, {
        children: "intent"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "action"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "result"
      }), ") and correlation keys (", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_run_id"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "step_id"
      }), ") before using logs for support or feedback workflows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Installing workflow-mgmt@2.0.0...\n  Backend: git-submodule\n  Path: frameworks/workflow-mgmt\n  Status: ✓ Installed successfully\n\nFramework installed:\n  Name: workflow-mgmt\n  Version: 2.0.0\n  Backend: git-submodule\n  Path: frameworks/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-update",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update a framework to the latest compatible version."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit update <framework>[@version] [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<framework>"
        }), " - Framework name (required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "[@version]"
        }), " - Specific version to update to (optional)"]
      }), "\n"]
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        }), " - Force update even if conflicts detected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--pin"
        }), " - Pin to specific version after update"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update to latest compatible version\nai-dev-kit update workflow-mgmt\n\n# Update to specific version\nai-dev-kit update workflow-mgmt@2.1.0\n\n# Update all frameworks\nai-dev-kit update --all\n\n# Check for updates without applying\nai-dev-kit update workflow-mgmt --check\n\n# Preview update\nai-dev-kit update workflow-mgmt --dry-run\n\n# Force update\nai-dev-kit update workflow-mgmt --force\n"
      })
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runs post-update validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Updating workflow-mgmt...\n  Current: 2.0.0\n  Latest:  2.1.0\n  Type:    MINOR\n  Status:  ✓ Updated successfully\n\nFramework updated:\n  Name: workflow-mgmt\n  Version: 2.0.0 → 2.1.0\n  Backend: git-submodule\n  Path: frameworks/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-check",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit check"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check for available framework updates."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit check [<framework>] [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<framework>"
        }), " - Specific framework to check (optional, checks all if omitted)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--notify"
        }), " - Show notification-style output"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--compatibility"
        }), " - Check compatibility information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--json"
        }), " - Output in JSON format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check all frameworks\nai-dev-kit check\n\n# Check specific framework\nai-dev-kit check workflow-mgmt\n\n# Check with notifications\nai-dev-kit check --notify\n\n# Check compatibility\nai-dev-kit check --compatibility\n\n# JSON output\nai-dev-kit check --json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Framework: workflow-mgmt\n  Current: 2.0.0\n  Latest:  2.1.0\n  Type:    MINOR\n  Status:  Update available\n  Breaking: None\n\nFramework: kanban\n  Current: 1.0.0\n  Latest:  1.0.0\n  Status:  Up to date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-status",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit status"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Show status of installed frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit status [<framework>] [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<framework>"
        }), " - Specific framework to show (optional, shows all if omitted)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--json"
        }), " - Output in JSON format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--verbose"
        }), " - Show detailed information"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Show all frameworks\nai-dev-kit status\n\n# Show specific framework\nai-dev-kit status workflow-mgmt\n\n# JSON output\nai-dev-kit status --json\n\n# Verbose output\nai-dev-kit status --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Installed Frameworks:\n  workflow-mgmt:\n    Version: 2.0.0\n    Backend: git-submodule\n    Path: frameworks/workflow-mgmt\n    Status: Update available (2.1.0)\n  \n  kanban:\n    Version: 1.0.0\n    Backend: git-submodule\n    Path: frameworks/kanban\n    Status: Up to date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-list",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit list"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List available frameworks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit list [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--versions"
        }), " - Show available versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--json"
        }), " - Output in JSON format"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all frameworks\nai-dev-kit list\n\n# List with versions\nai-dev-kit list --versions\n\n# JSON output\nai-dev-kit list --json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Available Frameworks:\n  workflow-mgmt:\n    Versions: 2.0.0, 2.1.0\n    Description: AI-driven release and workflow automation\n  \n  kanban:\n    Versions: 1.0.0\n    Description: Kanban system implementation\n  \n  numbering-versioning:\n    Versions: 2.0.0, 2.1.0\n    Description: Numbering and versioning framework\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-remove",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit remove"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remove a framework dependency."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit remove <framework> [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Arguments:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<framework>"
        }), " - Framework name (required)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--keep-files"
        }), " - Keep framework files but remove dependency tracking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        }), " - Force removal without confirmation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " - Preview removal without applying"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove framework (with confirmation)\nai-dev-kit remove workflow-mgmt\n\n# Remove but keep files\nai-dev-kit remove workflow-mgmt --keep-files\n\n# Force removal without confirmation\nai-dev-kit remove workflow-mgmt --force\n\n# Preview removal\nai-dev-kit remove workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Removes framework from ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Removes framework files (unless ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--keep-files"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removes backend-specific tracking (e.g., Git submodule entries)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates project configuration"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prompts for confirmation (unless ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend-Specific Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git submodule:"
        }), " Deinitializes submodule, removes from ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitmodules"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git/config"
        }), ", removes ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".git/modules"
        }), " entry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git subtree:"
        }), " Removes subtree merge history"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "npm/pip:"
        }), " Uninstalls package from node_modules or site-packages"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-logs",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit logs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inspect install logs and validate JSON install-log event contracts."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit logs <subcommand> [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Subcommands:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install-history"
        }), " - Show summary of recent install runs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate-install-log"
        }), " - Validate JSON install logs against required event contract fields"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "prepare-feedback-payload"
        }), " - Build deterministic feedback payload from install telemetry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate-feedback-payload"
        }), " - Validate feedback payload structure/readiness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "submit-feedback-payload"
        }), " - Evaluate payload outcomes and write local submission receipt"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Show recent install runs\nai-dev-kit logs install-history --limit 10\n\n# Validate latest install JSON log\nai-dev-kit logs validate-install-log\n\n# Validate latest 5 install logs\nai-dev-kit logs validate-install-log --limit 5\n\n# Validate a specific log file\nai-dev-kit logs validate-install-log --file logs/ai-dev-kit/install/install-20260409-120000.log\n\n# Build feedback payload from latest install log\nai-dev-kit logs prepare-feedback-payload\n\n# Validate generated payload\nai-dev-kit logs validate-feedback-payload --file logs/ai-dev-kit/feedback/payload-run-123.json\n\n# Submit payload through deterministic local submission path\nai-dev-kit logs submit-feedback-payload --file logs/ai-dev-kit/feedback/payload-run-123.json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Validation checks (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate-install-log"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSON line parseability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "install_run_id"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "step_id"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "event_contract.intent.summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "event_contract.action.summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "event_contract.result.status"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "event_contract.result.details"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Feedback payload outcomes (", (0,jsx_runtime.jsx)(_components.code, {
          children: "submit-feedback-payload"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "accepted"
        }), " - payload is valid, redacted, and has enough context for maintainer triage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "needs-redaction"
        }), " - sensitive-pattern checks failed; payload must be scrubbed before submit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "needs-more-context"
        }), " - payload is valid but missing required troubleshooting context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rejected"
        }), " - schema-invalid payload; run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate-feedback-payload"
        }), " and fix errors"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-commands",
      children: "Configuration Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-config",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit config"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Manage CLI configuration."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit config <command> [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Commands:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "get <key>"
        }), " - Get configuration value (supports dot notation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "set <key> <value>"
        }), " - Set configuration value (supports dot notation, YAML parsing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "list"
        }), " - List all configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "reset"
        }), " - Reset to defaults (requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate"
        }), " - Validate configuration against schema (with optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--fix"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Get configuration value\nai-dev-kit config get default_backend\nai-dev-kit config get frameworks.workflow-mgmt.version\n\n# Get with JSON output\nai-dev-kit config get default_backend --json\n\n# Set configuration value (supports YAML types)\nai-dev-kit config set default_backend git-submodule\nai-dev-kit config set auto_check true\nai-dev-kit config set check_interval daily\nai-dev-kit config set frameworks.workflow-mgmt.version \"2.0.0\"\n\n# List all configuration\nai-dev-kit config list\nai-dev-kit config list --json\n\n# Validate configuration\nai-dev-kit config validate\n\n# Validate and auto-fix issues\nai-dev-kit config validate --fix\n\n# Reset to defaults (requires confirmation bypass)\nai-dev-kit config reset --force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration Keys:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), " - Configuration file version (default: \"1.0.0\")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "default_backend"
        }), " - Default dependency backend (git-submodule, git-subtree, npm, pip)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "auto_check"
        }), " - Enable automatic update checking (true/false)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "check_interval"
        }), " - Update check interval (daily/weekly/manual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "notification_channel"
        }), " - Notification channel (console/email/slack)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update_policy.patch"
        }), " - Patch update policy (auto/notify/manual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update_policy.minor"
        }), " - Minor update policy (auto/notify/manual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update_policy.major"
        }), " - Major update policy (auto/notify/manual)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks.<name>.version"
        }), " - Framework version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks.<name>.backend"
        }), " - Framework backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks.<name>.path"
        }), " - Framework installation path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks.<name>.source"
        }), " - Source repository URL (for Git backends)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks.<name>.tag"
        }), " - Git tag/branch (for Git backends)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks.<name>.pin"
        }), " - Pin to version (prevent auto-updates)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backend-support",
      children: "Backend Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CLI tool supports multiple dependency backends:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-submodule-backend",
      children: "Git Submodule Backend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend Name:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git-submodule"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git installed and in PATH"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git repository initialized in project"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit install workflow-mgmt --backend git-submodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adds framework as Git submodule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracks framework version via Git tags/branches"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git submodule update"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-subtree-backend",
      children: "Git Subtree Backend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend Name:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git-subtree"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git installed and in PATH"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git repository initialized in project"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit install workflow-mgmt --backend git-subtree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merges framework into project as subtree"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework files are part of main repository"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git subtree pull"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "npm-backend",
      children: "npm Backend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend Name:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node.js and npm installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework published to npm registry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit install workflow-mgmt --backend npm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installs framework via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm install"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manages version via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm update"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Currently, frameworks are not yet published to npm. The backend will provide helpful messages if packages are not found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pip-backend",
      children: "pip Backend"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend Name:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pip"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python and pip installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework published to PyPI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit install workflow-mgmt --backend pip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installs framework via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manages version via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyproject.toml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install --upgrade"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Currently, frameworks are not yet published to PyPI. The backend will provide helpful messages if packages are not found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-dev-kit-migrate",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit migrate"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Migrate copy-paste frameworks to dependency-based installations."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit migrate [--detect] [--convert] [--validate] [options]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--detect"
        }), " - Detect copy-paste frameworks in the project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--convert"
        }), " - Convert detected frameworks to dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--validate"
        }), " - Validate that migration was successful"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--framework <name>"
        }), " - Specific framework to convert (by name or path)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--backend <type>"
        }), " - Backend to use for dependency installation (default: git-submodule)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " - Preview migration without applying changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Detect existing copy-paste frameworks\nai-dev-kit migrate --detect\n\n# Convert all detected frameworks\nai-dev-kit migrate --convert\n\n# Convert specific framework\nai-dev-kit migrate --convert --framework workflow-mgmt\n\n# Convert with specific backend\nai-dev-kit migrate --convert --backend git-subtree\n\n# Preview migration\nai-dev-kit migrate --convert --dry-run\n\n# Validate migration\nai-dev-kit migrate --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Detect:"
        }), " Scans project for frameworks installed via copy-paste (signature file matching)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convert:"
        }), " Converts detected frameworks to dependency-managed installations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate:"
        }), " Verifies that migrated frameworks are properly configured"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects frameworks using signature files and version detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backs up existing framework files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removes copy-paste installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installs framework via selected backend"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " configuration"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates installation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "global-options",
      children: "Global Options"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All commands support these global options:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--help"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-h"
        }), " - Show command help"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--version"
        }), " - Show CLI version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Show help\nai-dev-kit --help\nai-dev-kit install --help\n\n# Show version\nai-dev-kit --version\n"
      })
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Project root directory"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\n\nupdate_policy:\n  patch: auto      # auto, notify, manual\n  minor: notify\n  major: manual\n\nauto_check: true\ncheck_interval: daily  # daily, weekly, manual\n\nnotification_channel: console  # console, email, slack\n\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/workflow-mgmt\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"workflow-mgmt-v2.0.0\"\n    pin: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), " - Configuration file version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "default_backend"
        }), " - Default dependency backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "update_policy"
        }), " - Update policies by version type"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "auto_check"
        }), " - Enable automatic update checking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "check_interval"
        }), " - Update check frequency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "notification_channel"
        }), " - Notification method"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks"
        }), " - Installed frameworks configuration", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "version"
            }), " - Framework version"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "backend"
            }), " - Dependency backend used"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "path"
            }), " - Installation path"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "source"
            }), " - Source repository URL"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tag"
            }), " - Git tag (for Git backends)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pin"
            }), " - Pin to version (prevent auto-updates)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "error-codes",
      children: "Error Codes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CLI commands return exit codes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " - Success"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " - General error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "2"
        }), " - Framework not found"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "3"
        }), " - Version not found"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "4"
        }), " - Backend not available"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "5"
        }), " - Configuration error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "6"
        }), " - Update conflict"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "7"
        }), " - Validation error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Error Handling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "if ai-dev-kit install workflow-mgmt; then\n  echo \"Installation successful\"\nelse\n  exit_code=$?\n  case $exit_code in\n    2) echo \"Framework not found\" ;;\n    3) echo \"Version not found\" ;;\n    4) echo \"Backend not available\" ;;\n    *) echo \"Installation failed\" ;;\n  esac\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-workflow",
      children: "Complete Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize project\nai-dev-kit init\n\n# Install frameworks\nai-dev-kit install workflow-mgmt@2.0.0\nai-dev-kit install kanban@1.0.0\n\n# Check status\nai-dev-kit status\n\n# Check for updates\nai-dev-kit check\n\n# Update framework\nai-dev-kit update workflow-mgmt@2.1.0\n\n# Verify update\nai-dev-kit status workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cicd-integration",
      children: "CI/CD Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# In CI/CD pipeline\nai-dev-kit check --notify\n\n# If updates available, create issue\nif [ $? -ne 0 ]; then\n  # Create GitHub issue or send notification\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-from-copy-paste",
      children: "Migration from Copy-Paste"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Detect existing copy-paste frameworks\nai-dev-kit migrate --detect\n\n# Preview migration\nai-dev-kit migrate --convert --dry-run\n\n# Execute migration\nai-dev-kit migrate --convert\n\n# Validate migration\nai-dev-kit migrate --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-management",
      children: "Configuration Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# View current configuration\nai-dev-kit config list\n\n# Get specific value\nai-dev-kit config get default_backend\n\n# Set configuration\nai-dev-kit config set default_backend git-submodule\nai-dev-kit config set auto_check true\n\n# Validate configuration\nai-dev-kit config validate --fix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-removal",
      children: "Framework Removal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove framework (with confirmation)\nai-dev-kit remove workflow-mgmt\n\n# Remove but keep files\nai-dev-kit remove workflow-mgmt --keep-files\n\n# Force removal\nai-dev-kit remove workflow-mgmt --force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-issues",
      children: "Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Command not found:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check installation\npip show ai-dev-kit\n\n# Reinstall if needed\npip install --upgrade ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration not found:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize project\nai-dev-kit init\n\n# Or specify config file\nai-dev-kit status --config /path/to/config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend not available:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check available backends\nai-dev-kit list --backends\n\n# Use different backend\nai-dev-kit install workflow-mgmt --backend git-submodule\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
        children: "Troubleshooting Guide"
      }), " for more detailed solutions."]
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
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide",
          children: "Integration Guide"
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