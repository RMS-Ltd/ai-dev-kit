"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["2890"], {
371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_cli_troubleshooting_guide_md_f02_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-cli-troubleshooting-guide-md-f02.json
var site_docs_documentation_user_docs_cli_troubleshooting_guide_md_f02_namespaceObject = JSON.parse('{"id":"documentation/user-docs/cli-troubleshooting-guide","title":"ai-dev-kit CLI Troubleshooting Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/cli-troubleshooting-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/cli-troubleshooting-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-troubleshooting-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/cli-troubleshooting-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ai-dev-kit CLI Publishing Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-publishing-guide"},"next":{"title":"ai-dev-kit CLI Usage Examples","permalink":"/ai-dev-kit/docs/documentation/user-docs/cli-usage-examples"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/cli-troubleshooting-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ai-dev-kit CLI Troubleshooting Guide';

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
  "value": "Installation Issues",
  "id": "installation-issues",
  "level": 2
}, {
  "value": "Command Not Found",
  "id": "command-not-found",
  "level": 3
}, {
  "value": "Python Version Issues",
  "id": "python-version-issues",
  "level": 3
}, {
  "value": "Configuration Issues",
  "id": "configuration-issues",
  "level": 2
}, {
  "value": "Configuration File Not Found",
  "id": "configuration-file-not-found",
  "level": 3
}, {
  "value": "Invalid Configuration",
  "id": "invalid-configuration",
  "level": 3
}, {
  "value": "Framework Installation Issues",
  "id": "framework-installation-issues",
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
  "value": "Installation Path Issues",
  "id": "installation-path-issues",
  "level": 3
}, {
  "value": "Version Not Found",
  "id": "version-not-found",
  "level": 3
}, {
  "value": "Update Issues",
  "id": "update-issues",
  "level": 2
}, {
  "value": "Update Fails",
  "id": "update-fails",
  "level": 3
}, {
  "value": "Update Conflicts",
  "id": "update-conflicts",
  "level": 3
}, {
  "value": "Migration Issues",
  "id": "migration-issues",
  "level": 2
}, {
  "value": "Migration Detection Fails",
  "id": "migration-detection-fails",
  "level": 3
}, {
  "value": "Migration Conversion Fails",
  "id": "migration-conversion-fails",
  "level": 3
}, {
  "value": "Removal Issues",
  "id": "removal-issues",
  "level": 2
}, {
  "value": "Removal Fails",
  "id": "removal-fails",
  "level": 3
}, {
  "value": "Status and Check Issues",
  "id": "status-and-check-issues",
  "level": 2
}, {
  "value": "Status Command Fails",
  "id": "status-command-fails",
  "level": 3
}, {
  "value": "Check Command Shows No Updates",
  "id": "check-command-shows-no-updates",
  "level": 3
}, {
  "value": "Configuration Command Issues",
  "id": "configuration-command-issues",
  "level": 2
}, {
  "value": "Config Get/Set Fails",
  "id": "config-getset-fails",
  "level": 3
}, {
  "value": "General Issues",
  "id": "general-issues",
  "level": 2
}, {
  "value": "Permission Denied",
  "id": "permission-denied",
  "level": 3
}, {
  "value": "Network/Connection Issues",
  "id": "networkconnection-issues",
  "level": 3
}, {
  "value": "Debugging",
  "id": "debugging",
  "level": 3
}, {
  "value": "Getting Help",
  "id": "getting-help",
  "level": 2
}, {
  "value": "Resources",
  "id": "resources",
  "level": 3
}, {
  "value": "Reporting Issues",
  "id": "reporting-issues",
  "level": 3
}, {
  "value": "Common Error Messages",
  "id": "common-error-messages",
  "level": 2
}, {
  "value": "&quot;No project root detected&quot;",
  "id": "no-project-root-detected",
  "level": 3
}, {
  "value": "&quot;Framework not found&quot;",
  "id": "framework-not-found-1",
  "level": 3
}, {
  "value": "&quot;Backend not available&quot;",
  "id": "backend-not-available-1",
  "level": 3
}, {
  "value": "&quot;Configuration validation failed&quot;",
  "id": "configuration-validation-failed",
  "level": 3
}, {
  "value": "&quot;Version not found&quot;",
  "id": "version-not-found-1",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
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
        id: "ai-dev-kit-cli-troubleshooting-guide",
        children: "ai-dev-kit CLI Troubleshooting Guide"
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
      children: ["This guide helps you troubleshoot common issues when using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope-greenfield-vs-brownfield",
      children: "Scope (greenfield vs brownfield)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Framework ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "installation"
      }), " boundaries (distinct from CLI-only issues): ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        })
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
        children: "IPW-E6S9T1"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
        children: "ADR-003"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md",
        children: "FR-081"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-issues",
      children: "Installation Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "command-not-found",
      children: "Command Not Found"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " command is not found after installation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if CLI tool is installed\npip show ai-dev-kit\n\n# Reinstall from source\ncd /path/to/ai-dev-kit\npip install -e .\n\n# Or install CLI tool directly\ncd /path/to/ai-dev-kit/cli\npip install -e .\n\n# Verify installation\nwhich ai-dev-kit\nai-dev-kit --version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Python PATH:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if pip install location is in PATH\npython -m site --user-base\n\n# Add to PATH if needed (add to ~/.bashrc or ~/.zshrc)\nexport PATH=\"$HOME/.local/bin:$PATH\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-version-issues",
      children: "Python Version Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " CLI tool requires Python 3.11+ but an older version is installed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check Python version\npython --version\npython3 --version\n\n# Use python3 explicitly\npython3 -m pip install -e .\n\n# Or use virtual environment\npython3 -m venv venv\nsource venv/bin/activate  # On Windows: venv\\Scripts\\activate\npip install -e .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-issues",
      children: "Configuration Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-file-not-found",
      children: "Configuration File Not Found"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit init"
      }), " or other commands fail with \"No project root detected\" or \"Configuration not found\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize project first\nai-dev-kit init\n\n# Verify configuration file exists\nls -la .ai-dev-kit.yaml\n\n# Check current directory\npwd\n\n# Navigate to project root\ncd /path/to/your/project\nai-dev-kit init\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "invalid-configuration",
      children: "Invalid Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Configuration validation fails or configuration file has errors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate configuration\nai-dev-kit config validate\n\n# Auto-fix common issues\nai-dev-kit config validate --fix\n\n# View current configuration\nai-dev-kit config list\n\n# Reset to defaults (if needed)\nai-dev-kit config reset --force\n\n# Manually edit configuration\n# Edit .ai-dev-kit.yaml file\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Configuration Errors:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version"
        }), " field → Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version: \"1.0.0\""
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Invalid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default_backend"
        }), " → Use one of: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-submodule"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git-subtree"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Invalid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks"
        }), " structure → Ensure it's a dictionary/object"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-installation-issues",
      children: "Framework Installation Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-not-found",
      children: "Framework Not Found"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit install <framework>"
      }), " fails with \"Framework not found\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List available frameworks\nai-dev-kit list\n\n# Check framework name spelling\nai-dev-kit list | grep <framework>\n\n# Verify framework is available\n# (Frameworks must be published or available in source repository)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " If frameworks are not yet published to npm/PyPI, use Git backends:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Use Git submodule backend\nai-dev-kit install workflow-mgmt --backend git-submodule\n\n# Or Git subtree backend\nai-dev-kit install workflow-mgmt --backend git-subtree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backend-not-available",
      children: "Backend Not Available"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Installation fails with \"Backend not available\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check which backends are available\nai-dev-kit config get default_backend\n\n# Verify Git is installed (for Git backends)\ngit --version\n\n# Verify npm is installed (for npm backend)\nnpm --version\n\n# Verify pip is installed (for pip backend)\npip --version\n\n# Use different backend\nai-dev-kit install workflow-mgmt --backend git-submodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Backend Issues:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Ensure Git repository is initialized\ngit init\n\n# Check Git configuration\ngit config --list\n\n# Verify Git is in PATH\nwhich git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm Backend Issues:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Ensure Node.js is installed\nnode --version\n\n# Ensure npm is installed\nnpm --version\n\n# Initialize npm project if needed\nnpm init -y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "pip Backend Issues:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Ensure Python is installed\npython --version\n\n# Ensure pip is installed\npip --version\n\n# Upgrade pip if needed\npip install --upgrade pip\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation-path-issues",
      children: "Installation Path Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Installation fails due to path permissions or invalid path."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check write permissions\nls -ld /path/to/installation/dir\n\n# Use absolute path\nai-dev-kit install workflow-mgmt --path /absolute/path/to/frameworks\n\n# Check disk space\ndf -h\n\n# Verify path doesn't exist (or remove if needed)\nrm -rf /path/to/existing/dir\nai-dev-kit install workflow-mgmt --path /path/to/existing/dir\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-not-found",
      children: "Version Not Found"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Installation fails with \"Version not found\" when specifying a version."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List available versions\nai-dev-kit list --versions\n\n# Install latest version (omit version)\nai-dev-kit install workflow-mgmt\n\n# Check version format\n# For Git backends: use tag name (e.g., v2.0.0)\n# For npm/pip: use semantic version (e.g., 2.0.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-issues",
      children: "Update Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-fails",
      children: "Update Fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit update"
      }), " fails or doesn't find updates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check current status\nai-dev-kit status\n\n# Check for updates\nai-dev-kit check\n\n# Update specific framework\nai-dev-kit update workflow-mgmt\n\n# Force update\nai-dev-kit update workflow-mgmt --force\n\n# Preview update\nai-dev-kit update workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Backend Update Issues:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Ensure Git repository is accessible\ncd frameworks/workflow-mgmt\ngit fetch origin\ngit status\ncd ../..\n\n# Check for remote updates\nai-dev-kit check workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "update-conflicts",
      children: "Update Conflicts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Update fails due to conflicts or local modifications."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for local modifications\nai-dev-kit status workflow-mgmt\n\n# Force update (overwrites local changes)\nai-dev-kit update workflow-mgmt --force\n\n# Or manually resolve conflicts\ncd frameworks/workflow-mgmt\ngit status\n# Resolve conflicts manually\ncd ../..\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-issues",
      children: "Migration Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-detection-fails",
      children: "Migration Detection Fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit migrate --detect"
      }), " doesn't find frameworks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if frameworks exist\nls -la packages/frameworks/\nls -la frameworks/\n\n# Verify framework signature files exist\nfind . -name \"*.framework-signature\" -o -name \"FRAMEWORK_VERSION\"\n\n# Check project structure\n# Frameworks should be in common locations:\n# - packages/frameworks/\n# - frameworks/\n# - lib/frameworks/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-conversion-fails",
      children: "Migration Conversion Fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit migrate --convert"
      }), " fails."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Preview migration first\nai-dev-kit migrate --convert --dry-run\n\n# Convert specific framework\nai-dev-kit migrate --convert --framework workflow-mgmt\n\n# Use different backend\nai-dev-kit migrate --convert --backend git-subtree\n\n# Check for errors in output\nai-dev-kit migrate --convert 2>&1 | tee migration.log\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "removal-issues",
      children: "Removal Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removal-fails",
      children: "Removal Fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit remove"
      }), " fails or doesn't complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Preview removal\nai-dev-kit remove workflow-mgmt --dry-run\n\n# Force removal\nai-dev-kit remove workflow-mgmt --force\n\n# Keep files but remove tracking\nai-dev-kit remove workflow-mgmt --keep-files\n\n# Manual cleanup (if needed)\n# Remove from .ai-dev-kit.yaml\n# Remove Git submodule entries\n# Remove framework files\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Submodule Removal Issues:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Manual Git submodule cleanup\ngit submodule deinit -f frameworks/workflow-mgmt\ngit rm -f frameworks/workflow-mgmt\nrm -rf .git/modules/frameworks/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status-and-check-issues",
      children: "Status and Check Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "status-command-fails",
      children: "Status Command Fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit status"
      }), " fails or shows incorrect information."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check configuration\nai-dev-kit config validate\n\n# Verify frameworks are installed\nls -la frameworks/\n\n# Check individual framework\nai-dev-kit status workflow-mgmt\n\n# Use JSON output for debugging\nai-dev-kit status --json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-command-shows-no-updates",
      children: "Check Command Shows No Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit check"
      }), " doesn't show available updates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check specific framework\nai-dev-kit check workflow-mgmt\n\n# Use verbose output\nai-dev-kit check --verbose\n\n# Check Git backend directly\ncd frameworks/workflow-mgmt\ngit fetch origin\ngit log HEAD..origin/main\ncd ../..\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-command-issues",
      children: "Configuration Command Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "config-getset-fails",
      children: "Config Get/Set Fails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit config get"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config set"
      }), " fails."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify key exists\nai-dev-kit config list\n\n# Use dot notation for nested keys\nai-dev-kit config get frameworks.workflow-mgmt.version\n\n# Set value with proper YAML format\nai-dev-kit config set default_backend git-submodule\nai-dev-kit config set auto_check true\n\n# Check configuration after setting\nai-dev-kit config get default_backend\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "general-issues",
      children: "General Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "permission-denied",
      children: "Permission Denied"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Commands fail with \"Permission denied\" errors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check file permissions\nls -la .ai-dev-kit.yaml\nls -la frameworks/\n\n# Fix permissions if needed\nchmod 644 .ai-dev-kit.yaml\nchmod -R 755 frameworks/\n\n# Check directory permissions\nls -ld .\n\n# Use sudo if necessary (not recommended)\n# sudo ai-dev-kit install workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "networkconnection-issues",
      children: "Network/Connection Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Installation or updates fail due to network issues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check network connectivity\nping github.com\n\n# Check Git remote access\ngit ls-remote https://github.com/RMS-Ltd/ai-dev-kit.git\n\n# Use SSH instead of HTTPS (if configured)\ngit remote set-url origin git@github.com:RMS-Ltd/ai-dev-kit.git\n\n# Check proxy settings\necho $HTTP_PROXY\necho $HTTPS_PROXY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debugging",
      children: "Debugging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enable Verbose Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Most commands don't have --verbose yet, but check help\nai-dev-kit --help\nai-dev-kit install --help\n\n# Check configuration for debugging\nai-dev-kit config list --json\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check Logs:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for error messages in output\nai-dev-kit install workflow-mgmt 2>&1 | tee install.log\n\n# Review configuration\ncat .ai-dev-kit.yaml\n\n# Check Git status\ngit status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getting-help",
      children: "Getting Help"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resources",
      children: "Resources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Reference:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference",
          children: "framework-dependency-cli-reference.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Usage Examples:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/cli-usage-examples",
          children: "cli-usage-examples.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Installation Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "framework-dependency-installation-guide.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting-issues",
      children: "Reporting Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you encounter an issue not covered in this guide:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check existing issues:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/issues",
          children: "GitHub Issues"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create new issue:"
        }), " Include:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Command that failed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Error message"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Configuration file (redacted if sensitive)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "System information (OS, Python version, etc.)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Steps to reproduce"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-error-messages",
      children: "Common Error Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "no-project-root-detected",
      children: "\"No project root detected\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit init"
      }), " in your project directory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-not-found-1",
      children: "\"Framework not found\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Check framework name with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit list"
      }), " or use Git backend."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backend-not-available-1",
      children: "\"Backend not available\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Install required tools (Git, npm, pip) or use different backend."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-validation-failed",
      children: "\"Configuration validation failed\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit config validate --fix"
      }), " to auto-fix issues."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-not-found-1",
      children: "\"Version not found\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit list --versions"
      }), " to see available versions, or install latest."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always initialize first:"
        }), " Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit init"
        }), " before installing frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use dry-run:"
        }), " Preview changes with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), " before applying"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate configuration:"
        }), " Regularly run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit config validate"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check status:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit status"
        }), " to verify installations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep backups:"
        }), " Backup ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " before major changes"]
      }), "\n"]
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
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
          children: "Installation Guide"
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