"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4378"], {
2515(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_cli_configuration_guide_md_470_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-cli-configuration-guide-md-470.json
var site_docs_documentation_user_docs_cli_configuration_guide_md_470_namespaceObject = JSON.parse('{"id":"documentation/user-docs/cli-configuration-guide","title":"ai-dev-kit CLI Configuration Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/cli-configuration-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/cli-configuration-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-configuration-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/cli-configuration-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Apple Platform Setup Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/apple-platform-setup-guide"},"next":{"title":"ai-dev-kit CLI Publishing Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-publishing-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/cli-configuration-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ai-dev-kit CLI Configuration Guide';

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
  "value": "Configuration File Location",
  "id": "configuration-file-location",
  "level": 2
}, {
  "value": "Configuration File Format",
  "id": "configuration-file-format",
  "level": 2
}, {
  "value": "Basic Structure",
  "id": "basic-structure",
  "level": 3
}, {
  "value": "Complete Example",
  "id": "complete-example",
  "level": 3
}, {
  "value": "Configuration Fields",
  "id": "configuration-fields",
  "level": 2
}, {
  "value": "Top-Level Fields",
  "id": "top-level-fields",
  "level": 3
}, {
  "value": "<code>version</code> (required)",
  "id": "version-required",
  "level": 4
}, {
  "value": "<code>default_backend</code> (required)",
  "id": "default_backend-required",
  "level": 4
}, {
  "value": "<code>update_policy</code> (optional)",
  "id": "update_policy-optional",
  "level": 4
}, {
  "value": "<code>auto_check</code> (optional)",
  "id": "auto_check-optional",
  "level": 4
}, {
  "value": "<code>check_interval</code> (optional)",
  "id": "check_interval-optional",
  "level": 4
}, {
  "value": "<code>notification_channel</code> (optional)",
  "id": "notification_channel-optional",
  "level": 4
}, {
  "value": "<code>install_logging</code> (optional)",
  "id": "install_logging-optional",
  "level": 4
}, {
  "value": "<code>frameworks</code> (required)",
  "id": "frameworks-required",
  "level": 4
}, {
  "value": "Framework Configuration",
  "id": "framework-configuration",
  "level": 3
}, {
  "value": "Framework Fields",
  "id": "framework-fields",
  "level": 4
}, {
  "value": "<code>version</code> (required)",
  "id": "version-required-1",
  "level": 5
}, {
  "value": "<code>backend</code> (required)",
  "id": "backend-required",
  "level": 5
}, {
  "value": "<code>path</code> (required)",
  "id": "path-required",
  "level": 5
}, {
  "value": "<code>source</code> (optional, Git backends)",
  "id": "source-optional-git-backends",
  "level": 5
}, {
  "value": "<code>tag</code> (optional, Git backends)",
  "id": "tag-optional-git-backends",
  "level": 5
}, {
  "value": "<code>pin</code> (optional)",
  "id": "pin-optional",
  "level": 5
}, {
  "value": "Managing Configuration",
  "id": "managing-configuration",
  "level": 2
}, {
  "value": "View Configuration",
  "id": "view-configuration",
  "level": 3
}, {
  "value": "Modify Configuration",
  "id": "modify-configuration",
  "level": 3
}, {
  "value": "Validate Configuration",
  "id": "validate-configuration",
  "level": 3
}, {
  "value": "Reset Configuration",
  "id": "reset-configuration",
  "level": 3
}, {
  "value": "Configuration Examples",
  "id": "configuration-examples",
  "level": 2
}, {
  "value": "Minimal Configuration",
  "id": "minimal-configuration",
  "level": 3
}, {
  "value": "Git Submodule Setup",
  "id": "git-submodule-setup",
  "level": 3
}, {
  "value": "Multi-Backend Setup",
  "id": "multi-backend-setup",
  "level": 3
}, {
  "value": "Production Setup (Pinned Versions)",
  "id": "production-setup-pinned-versions",
  "level": 3
}, {
  "value": "Configuration Validation",
  "id": "configuration-validation",
  "level": 2
}, {
  "value": "Schema Validation",
  "id": "schema-validation",
  "level": 3
}, {
  "value": "Common Validation Errors",
  "id": "common-validation-errors",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "1. Version Control",
  "id": "1-version-control",
  "level": 3
}, {
  "value": "2. Environment-Specific Configuration",
  "id": "2-environment-specific-configuration",
  "level": 3
}, {
  "value": "3. Pin Production Versions",
  "id": "3-pin-production-versions",
  "level": 3
}, {
  "value": "4. Regular Validation",
  "id": "4-regular-validation",
  "level": 3
}, {
  "value": "5. Backup Configuration",
  "id": "5-backup-configuration",
  "level": 3
}, {
  "value": "Advanced Configuration",
  "id": "advanced-configuration",
  "level": 2
}, {
  "value": "Dot Notation",
  "id": "dot-notation",
  "level": 3
}, {
  "value": "YAML Type Parsing",
  "id": "yaml-type-parsing",
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
    h5: "h5",
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
        id: "ai-dev-kit-cli-configuration-guide",
        children: "ai-dev-kit CLI Configuration Guide"
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
      children: ["This guide explains the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      }), " configuration file format and how to manage configuration using the CLI tool."]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-file-location",
      children: "Configuration File Location"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The configuration file is located at the project root:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/path/to/your/project/.ai-dev-kit.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CLI tool automatically detects the project root by searching for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".git"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyproject.toml"
        }), " file"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-file-format",
      children: "Configuration File Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-structure",
      children: "Basic Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nframeworks: {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-example",
      children: "Complete Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\n\n# Update policies\nupdate_policy:\n  patch: auto      # auto, notify, manual\n  minor: notify\n  major: manual\n\n# Automatic update checking\nauto_check: true\ncheck_interval: daily  # daily, weekly, manual\n\n# Notification settings\nnotification_channel: console  # console, email, slack\n\n# Install logging (per-run logs under logs/ai-dev-kit/install/)\ninstall_logging:\n  enabled: true\n  path: \"logs/ai-dev-kit/install\"\n  keep: 10\n\n# Installed frameworks\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/workflow-mgmt\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"workflow-mgmt-v2.0.0\"\n    pin: false\n  \n  kanban:\n    version: \"1.0.0\"\n    backend: \"git-subtree\"\n    path: \"frameworks/kanban\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"kanban-v1.0.0\"\n    pin: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-fields",
      children: "Configuration Fields"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-level-fields",
      children: "Top-Level Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "version-required",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "version"
      }), " (required)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configuration file version."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"1.0.0\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version: \"1.0.0\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "default_backend-required",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "default_backend"
      }), " (required)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Default dependency backend to use when installing frameworks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"git-submodule\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid Values:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-submodule"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-subtree"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default_backend: \"git-submodule\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "update_policy-optional",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "update_policy"
      }), " (optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update policies for different version types."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Object"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "update_policy:\n  patch: auto\n  minor: notify\n  major: manual\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fields:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "patch"
            }), ": Policy for patch updates (auto, notify, manual)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "minor"
            }), ": Policy for minor updates (auto, notify, manual)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "major"
            }), ": Policy for major updates (auto, notify, manual)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "auto_check-optional",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "auto_check"
      }), " (optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Enable automatic update checking."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Boolean"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto_check: true"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "check_interval-optional",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "check_interval"
      }), " (optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update check frequency."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"daily\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid Values:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "daily"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "weekly"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "manual"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "check_interval: daily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "notification_channel-optional",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "notification_channel"
      }), " (optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Notification channel for update notifications."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"console\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid Values:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "console"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "email"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "slack"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "notification_channel: console"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "install_logging-optional",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "install_logging"
      }), " (optional)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Per-run install logging (FR-047). When enabled, each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit install"
      }), " run writes a timestamped log file for debugging and forensic analysis."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Object (or set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_logging.enabled"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_logging.path"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_logging.keep"
        }), " via dot notation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Defaults:"
        }), " Logging enabled; path ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logs/ai-dev-kit/install"
        }), "; no retention limit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fields:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "enabled"
            }), " (boolean) – Enable or disable install logging (default: true)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "path"
            }), " (string) – Project-relative directory for log files (default: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "logs/ai-dev-kit/install"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "keep"
            }), " (integer) – Keep only the N most recent log files; older files are removed at the end of each run (optional; omit for no rotation)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-yaml",
            children: "install_logging:\n  enabled: true\n  path: \"logs/ai-dev-kit/install\"\n  keep: 10\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI overrides:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--log-path PATH"
        }), " to override the log directory for a single run, or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--no-install-log"
        }), " to disable logging for a single run."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JSON + FR-108:"
        }), " With ", (0,jsx_runtime.jsx)(_components.code, {
          children: "format: json"
        }), ", failed steps may include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event_contract.result.adk_error_code"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error_registry_version"
        }), ". ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit logs prepare-feedback-payload"
        }), " (contract ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1.1.0"
        }), ") surfaces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "context.primary_adk_error_codes"
        }), " for triage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "frameworks-required",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "frameworks"
      }), " (required)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dictionary of installed frameworks."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Object"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structure:"
        }), " See Framework Configuration below"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-configuration",
      children: "Framework Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each framework in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "frameworks"
      }), " dictionary has the following structure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "frameworks:\n  <framework-name>:\n    version: \"<version>\"\n    backend: \"<backend>\"\n    path: \"<path>\"\n    source: \"<url>\"      # For Git backends\n    tag: \"<tag>\"         # For Git backends\n    pin: <boolean>       # Optional\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "framework-fields",
      children: "Framework Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "version-required-1",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "version"
      }), " (required)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Framework version."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version: \"2.0.0\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "backend-required",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "backend"
      }), " (required)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backend used to install the framework."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid Values:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-submodule"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-subtree"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backend: \"git-submodule\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "path-required",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "path"
      }), " (required)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Installation path relative to project root."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "path: \"frameworks/workflow-mgmt\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "source-optional-git-backends",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "source"
      }), " (optional, Git backends)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Source repository URL for Git backends."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "tag-optional-git-backends",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "tag"
      }), " (optional, Git backends)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Git tag or branch for Git backends."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " String"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tag: \"workflow-mgmt-v2.0.0\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "pin-optional",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "pin"
      }), " (optional)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pin framework to current version (prevent auto-updates)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type:"
        }), " Boolean"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pin: true"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "managing-configuration",
      children: "Managing Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "view-configuration",
      children: "View Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all configuration\nai-dev-kit config list\n\n# List with JSON output\nai-dev-kit config list --json\n\n# Get specific value\nai-dev-kit config get default_backend\n\n# Get nested value (dot notation)\nai-dev-kit config get frameworks.workflow-mgmt.version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "modify-configuration",
      children: "Modify Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Set top-level value\nai-dev-kit config set default_backend git-submodule\n\n# Set boolean value\nai-dev-kit config set auto_check true\n\n# Set nested value (dot notation)\nai-dev-kit config set frameworks.workflow-mgmt.version \"2.0.0\"\n\n# Set complex value (YAML parsing)\nai-dev-kit config set update_policy.patch auto\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validate-configuration",
      children: "Validate Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate configuration\nai-dev-kit config validate\n\n# Validate and auto-fix\nai-dev-kit config validate --fix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reset-configuration",
      children: "Reset Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Reset to defaults (requires --force)\nai-dev-kit config reset --force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-examples",
      children: "Configuration Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minimal-configuration",
      children: "Minimal Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nframeworks: {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-submodule-setup",
      children: "Git Submodule Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/workflow-mgmt\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"workflow-mgmt-v2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-backend-setup",
      children: "Multi-Backend Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/workflow-mgmt\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"workflow-mgmt-v2.0.0\"\n  \n  kanban:\n    version: \"1.0.0\"\n    backend: \"git-subtree\"\n    path: \"frameworks/kanban\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"kanban-v1.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "production-setup-pinned-versions",
      children: "Production Setup (Pinned Versions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nupdate_policy:\n  patch: notify\n  minor: manual\n  major: manual\nauto_check: true\ncheck_interval: weekly\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/workflow-mgmt\"\n    source: \"https://github.com/RMS-Ltd/ai-dev-kit.git\"\n    tag: \"workflow-mgmt-v2.0.0\"\n    pin: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-validation",
      children: "Configuration Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schema-validation",
      children: "Schema Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CLI tool validates configuration against a schema:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Required fields:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default_backend"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid backends:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-submodule"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-subtree"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid intervals:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "daily"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "weekly"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "manual"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid channels:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "console"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "email"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "slack"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Valid policies:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "notify"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "manual"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-validation-errors",
      children: "Common Validation Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing required field:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Error: Missing 'version' field\ndefault_backend: \"git-submodule\"\nframeworks: {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Invalid backend:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Error: Invalid backend 'invalid-backend'\ndefault_backend: \"invalid-backend\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Invalid framework structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Error: Framework must have 'version', 'backend', 'path'\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-version-control",
      children: "1. Version Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commit ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      }), " to version control:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git add .ai-dev-kit.yaml\ngit commit -m \"Add ai-dev-kit configuration\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-environment-specific-configuration",
      children: "2. Environment-Specific Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use different configurations for different environments:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Development\nai-dev-kit config set auto_check true\nai-dev-kit config set check_interval daily\n\n# Production\nai-dev-kit config set auto_check false\nai-dev-kit config set check_interval manual\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-pin-production-versions",
      children: "3. Pin Production Versions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pin frameworks in production:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit config set frameworks.workflow-mgmt.pin true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-regular-validation",
      children: "4. Regular Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validate configuration regularly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# In CI/CD pipeline\nai-dev-kit config validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-backup-configuration",
      children: "5. Backup Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backup configuration before major changes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cp .ai-dev-kit.yaml .ai-dev-kit.yaml.backup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanced-configuration",
      children: "Advanced Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dot-notation",
      children: "Dot Notation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Access nested values using dot notation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Get nested value\nai-dev-kit config get frameworks.workflow-mgmt.version\n\n# Set nested value\nai-dev-kit config set frameworks.workflow-mgmt.pin true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yaml-type-parsing",
      children: "YAML Type Parsing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CLI tool automatically parses YAML types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# String\nai-dev-kit config set default_backend \"git-submodule\"\n\n# Boolean\nai-dev-kit config set auto_check true\n\n# Number\nai-dev-kit config set some_number 42\n\n# List (future)\nai-dev-kit config set some_list \"[item1, item2]\"\n\n# Dictionary (future)\nai-dev-kit config set some_dict \"{key: value}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference",
          children: "CLI Reference"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/cli-usage-examples",
          children: "Usage Examples"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/cli-troubleshooting-guide",
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