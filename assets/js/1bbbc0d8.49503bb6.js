"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["16032"], {
18790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_troubleshooting_guide_md_1bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-troubleshooting-guide-md-1bb.json
var site_docs_documentation_user_docs_framework_dependency_troubleshooting_guide_md_1bb_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-troubleshooting-guide","title":"Framework Dependency Troubleshooting Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-troubleshooting-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-07T11:35:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"GitHub Template Enablement Instructions","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-template-enablement-instructions"},"next":{"title":"Framework Dependency Update Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-07T11:35:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency Troubleshooting Guide';

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
  "value": "Issue: Framework Installation Fails",
  "id": "issue-framework-installation-fails",
  "level": 3
}, {
  "value": "Issue: Git Submodule Not Initialized",
  "id": "issue-git-submodule-not-initialized",
  "level": 3
}, {
  "value": "Issue: Framework Files in Wrong Location",
  "id": "issue-framework-files-in-wrong-location",
  "level": 3
}, {
  "value": "Update Issues",
  "id": "update-issues",
  "level": 2
}, {
  "value": "Issue: Update Command Fails",
  "id": "issue-update-command-fails",
  "level": 3
}, {
  "value": "Issue: Update Not Detected",
  "id": "issue-update-not-detected",
  "level": 3
}, {
  "value": "Issue: Update Breaks Functionality",
  "id": "issue-update-breaks-functionality",
  "level": 3
}, {
  "value": "Uninstall Issues",
  "id": "uninstall-issues",
  "level": 2
}, {
  "value": "Configuration Issues",
  "id": "configuration-issues",
  "level": 2
}, {
  "value": "Issue: Configuration Not Found",
  "id": "issue-configuration-not-found",
  "level": 3
}, {
  "value": "Issue: Configuration Invalid",
  "id": "issue-configuration-invalid",
  "level": 3
}, {
  "value": "Path Issues",
  "id": "path-issues",
  "level": 2
}, {
  "value": "Issue: Framework Scripts Can&#39;t Find Files",
  "id": "issue-framework-scripts-cant-find-files",
  "level": 3
}, {
  "value": "Issue: Relative Paths Not Working",
  "id": "issue-relative-paths-not-working",
  "level": 3
}, {
  "value": "Version Issues",
  "id": "version-issues",
  "level": 2
}, {
  "value": "Issue: Version Mismatch",
  "id": "issue-version-mismatch",
  "level": 3
}, {
  "value": "Issue: Version Not Incrementing",
  "id": "issue-version-not-incrementing",
  "level": 3
}, {
  "value": "Git Submodule Issues",
  "id": "git-submodule-issues",
  "level": 2
}, {
  "value": "Issue: Submodule Points to Wrong Commit",
  "id": "issue-submodule-points-to-wrong-commit",
  "level": 3
}, {
  "value": "Issue: Submodule Update Conflicts",
  "id": "issue-submodule-update-conflicts",
  "level": 3
}, {
  "value": "CLI Tool Issues",
  "id": "cli-tool-issues",
  "level": 2
}, {
  "value": "Issue: Command Not Found",
  "id": "issue-command-not-found",
  "level": 3
}, {
  "value": "Issue: CLI Configuration Errors",
  "id": "issue-cli-configuration-errors",
  "level": 3
}, {
  "value": "Framework Functionality Issues",
  "id": "framework-functionality-issues",
  "level": 2
}, {
  "value": "Issue: RW Trigger Not Working",
  "id": "issue-rw-trigger-not-working",
  "level": 3
}, {
  "value": "Framework Functionality Issues (Other)",
  "id": "framework-functionality-issues-other",
  "level": 2
}, {
  "value": "Issue: Release Workflow Fails",
  "id": "issue-release-workflow-fails",
  "level": 3
}, {
  "value": "Issue: Kanban Update Script Fails",
  "id": "issue-kanban-update-script-fails",
  "level": 3
}, {
  "value": "Getting Help",
  "id": "getting-help",
  "level": 2
}, {
  "value": "Diagnostic Information",
  "id": "diagnostic-information",
  "level": 3
}, {
  "value": "Reporting Issues",
  "id": "reporting-issues",
  "level": 3
}, {
  "value": "Install error codes (ADK)",
  "id": "install-error-codes-adk",
  "level": 2
}, {
  "value": "ADK-I01.S01",
  "id": "adk-i01s01",
  "level": 3
}, {
  "value": "ADK-I01.S02",
  "id": "adk-i01s02",
  "level": 3
}, {
  "value": "ADK-I02.E01",
  "id": "adk-i02e01",
  "level": 3
}, {
  "value": "ADK-I02.E08",
  "id": "adk-i02e08",
  "level": 3
}, {
  "value": "ADK-I03.E04",
  "id": "adk-i03e04",
  "level": 3
}, {
  "value": "ADK-I03.E12",
  "id": "adk-i03e12",
  "level": 3
}, {
  "value": "ADK-I03.E21",
  "id": "adk-i03e21",
  "level": 3
}, {
  "value": "ADK-I03.E90",
  "id": "adk-i03e90",
  "level": 3
}, {
  "value": "ADK-I04.E01",
  "id": "adk-i04e01",
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
        id: "framework-dependency-troubleshooting-guide",
        children: "Framework Dependency Troubleshooting Guide"
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
      children: "This guide provides solutions to common issues when installing, updating, and using AI Dev Kit frameworks as dependencies. Each issue includes symptoms, causes, and step-by-step solutions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick Navigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#installation-issues",
          children: "Installation Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#update-issues",
          children: "Update Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#uninstall-issues",
          children: "Uninstall Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#configuration-issues",
          children: "Configuration Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#path-issues",
          children: "Path Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#version-issues",
          children: "Version Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#git-submodule-issues",
          children: "Git Submodule Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#cli-tool-issues",
          children: "CLI Tool Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#framework-functionality-issues",
          children: "Framework Functionality Issues"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#install-error-codes-adk",
          children: "Install error codes (ADK-*)"
        })
      }), "\n"]
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
          href: "/ai-dev-kit/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080",
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
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
          children: "FR-081"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-issues",
      children: "Installation Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-framework-installation-fails",
      children: "Issue: Framework Installation Fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit install"
        }), " command fails"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error message about framework not found"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation completes but framework files missing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework name incorrect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version not available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Permission problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backend not available"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Verify Framework Name:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List available frameworks\nai-dev-kit list\n\n# Check exact framework name\nai-dev-kit list --versions | grep workflow\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Check Version Availability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List available versions\nai-dev-kit list --versions workflow-mgmt\n\n# Use available version\nai-dev-kit install workflow-mgmt@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Check Network Connection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test repository access\ngit ls-remote https://github.com/RMS-Ltd/ai-dev-kit.git\n\n# If fails, check network/firewall\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Check Permissions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify write permissions\nls -la frameworks/\n\n# Fix permissions if needed\nchmod -R u+w frameworks/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Check Backend Availability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check available backends\nai-dev-kit list --backends\n\n# Use different backend\nai-dev-kit install workflow-mgmt --backend git-submodule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-git-submodule-not-initialized",
      children: "Issue: Git Submodule Not Initialized"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework directory exists but is empty"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git submodule status"
        }), " shows uninitialized submodule"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework files not accessible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule not initialized after clone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule update not run"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule configuration missing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Initialize Submodules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize all submodules\ngit submodule update --init --recursive\n\n# Or initialize specific submodule\ngit submodule update --init .ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Clone with Submodules:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Clone repository with submodules\ngit clone --recurse-submodules <repo-url>\n\n# Or after clone\ngit submodule update --init --recursive\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Check Submodule Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify .gitmodules file exists\ncat .gitmodules\n\n# Should contain:\n# [submodule \".ai-dev-kit\"]\n#   path = .ai-dev-kit\n#   url = https://github.com/RMS-Ltd/ai-dev-kit.git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-framework-files-in-wrong-location",
      children: "Issue: Framework Files in Wrong Location"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework installed but files in unexpected location"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scripts can't find framework files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration paths incorrect"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom installation path specified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default path configuration incorrect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework copied to wrong directory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check Installation Path:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check where framework was installed\nai-dev-kit status workflow-mgmt\n\n# Verify path in configuration\ncat .ai-dev-kit.yaml | grep -A 5 workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Reinstall to Correct Location:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove incorrectly installed framework\nai-dev-kit remove workflow-mgmt\n\n# Reinstall to default location\nai-dev-kit install workflow-mgmt\n\n# Or specify correct path\nai-dev-kit install workflow-mgmt --path frameworks/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Edit configuration file\nvim .ai-dev-kit.yaml\n\n# Update path:\n# frameworks:\n#   workflow-mgmt:\n#     path: \"frameworks/workflow-mgmt\"  # Correct path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "update-issues",
      children: "Update Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-update-command-fails",
      children: "Issue: Update Command Fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit update"
        }), " fails with error"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update partially applied"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework in inconsistent state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version not available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Permission problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check Version Availability:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify version exists\nai-dev-kit list --versions workflow-mgmt\n\n# Use available version\nai-dev-kit update workflow-mgmt@2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Check Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check compatibility before update\nai-dev-kit check --compatibility\n\n# Review breaking changes\nai-dev-kit changelog workflow-mgmt --breaking --from 2.0.0 --to 2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Resolve Git Conflicts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for uncommitted changes\ngit status\n\n# Commit or stash changes\ngit add -A\ngit commit -m \"Save work before framework update\"\n\n# Or stash\ngit stash\n\n# Retry update\nai-dev-kit update workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Force Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Force update (use with caution)\nai-dev-kit update workflow-mgmt --force\n\n# Verify after force update\nai-dev-kit status workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-update-not-detected",
      children: "Issue: Update Not Detected"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework has newer version available but not detected"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit check"
        }), " shows up to date when update exists"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual check shows different version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache not refreshed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git tags not fetched"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version detection logic issue"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration incorrect"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Refresh Cache:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Clear cache and recheck\nai-dev-kit check --refresh\n\n# Or manually fetch tags\ncd .ai-dev-kit\ngit fetch origin --tags\ncd ..\nai-dev-kit check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Verify Git Tags:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check available tags\ncd .ai-dev-kit\ngit fetch origin --tags\ngit tag | grep workflow-mgmt | sort -V\n\n# Should show latest version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Check Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify framework version in config\ncat .ai-dev-kit.yaml | grep -A 3 workflow-mgmt\n\n# Check if version is pinned\n# If pin: true, updates won't be detected\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-update-breaks-functionality",
      children: "Issue: Update Breaks Functionality"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework works before update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After update, validation fails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scripts produce errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration incompatible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes in update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration format changed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency version mismatch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Rollback Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Rollback to previous version\nai-dev-kit update workflow-mgmt@2.0.0\n\n# Or use rollback command\nai-dev-kit rollback workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Review Changelog:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check what changed\nai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 2.1.0\n\n# Look for breaking changes\nai-dev-kit changelog workflow-mgmt --breaking\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for deprecated settings\nai-dev-kit validate-config\n\n# Fix configuration issues\nai-dev-kit validate-config --fix\n\n# Or manually update\nvim frameworks/workflow-mgmt/rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Check Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify dependency versions\nai-dev-kit check-compatibility\n\n# Update dependencies if needed\nai-dev-kit update numbering-versioning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uninstall-issues",
      children: "Uninstall Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commands, safety flags (", (0,jsx_runtime.jsx)(_components.code, {
        children: "--recover"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--rollback"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--dry-run"
      }), "), and cleanup patterns for removing frameworks live in the Installation guide: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide#uninstalling-frameworks",
        children: "Uninstalling frameworks"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If uninstall fails after a partial run, retry with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--recover"
      }), " or use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--dry-run"
      }), " first to preview changes (see Installation guide)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-issues",
      children: "Configuration Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-configuration-not-found",
      children: "Issue: Configuration Not Found"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI commands fail with \"configuration not found\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " missing"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default configuration not working"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration file not created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration file in wrong location"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration file corrupted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Permissions issue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Initialize Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create configuration file\nai-dev-kit init\n\n# Verify file created\nls -la .ai-dev-kit.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Check File Location:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Configuration should be in project root\npwd\nls -la .ai-dev-kit.yaml\n\n# If not found, create it\nai-dev-kit init --path .\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Verify File Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check YAML syntax\ncat .ai-dev-kit.yaml\n\n# Validate configuration\nai-dev-kit validate-config\n\n# Fix if needed\nai-dev-kit validate-config --fix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-configuration-invalid",
      children: "Issue: Configuration Invalid"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration file exists but CLI reports errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commands fail with configuration errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Settings not applied"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YAML syntax errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invalid field values"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing required fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version mismatch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Validate Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for errors\nai-dev-kit validate-config\n\n# Auto-fix if possible\nai-dev-kit validate-config --fix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Check YAML Syntax:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate YAML syntax\npython3 -c \"import yaml; yaml.safe_load(open('.ai-dev-kit.yaml'))\"\n\n# Or use yamllint\nyamllint .ai-dev-kit.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Review Configuration Schema:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check expected structure\nai-dev-kit config list\n\n# Compare with example\ncat .ai-dev-kit.yaml\n# Should match expected structure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Reset Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Backup current config\ncp .ai-dev-kit.yaml .ai-dev-kit.yaml.backup\n\n# Reset to defaults\nai-dev-kit config reset\n\n# Restore frameworks\nai-dev-kit install workflow-mgmt@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "path-issues",
      children: "Path Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-framework-scripts-cant-find-files",
      children: "Issue: Framework Scripts Can't Find Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation scripts fail with \"file not found\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path errors in framework execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration paths incorrect"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Paths not updated after installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project structure different from expected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration paths incorrect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relative vs absolute path issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Update Paths in Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Edit configuration\nvim frameworks/workflow-mgmt/rw-config.yaml\n\n# Update paths:\n# project:\n#   root: \".\"  # Current directory\n# version:\n#   file: \"src/yourproject/version.py\"  # Your actual path\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update Paths in Scripts:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Find path references\ncd frameworks/workflow-mgmt\ngrep -r \"src/confidentia\" .\n\n# Replace with your paths\nfind . -type f \\( -name \"*.py\" -o -name \"*.yaml\" \\) \\\n  -exec sed -i '' 's|src/confidentia|src/yourproject|g' {} \\;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Use Absolute Paths:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# In configuration, use absolute paths if relative paths fail\nvim frameworks/workflow-mgmt/rw-config.yaml\n\n# Change:\n# version:\n#   file: \"src/yourproject/version.py\"\n# To:\n# version:\n#   file: \"/absolute/path/to/project/src/yourproject/version.py\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Verify Paths:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test path resolution\ncd frameworks/workflow-mgmt\npython3 -c \"\nimport os\nconfig_path = 'rw-config.yaml'\nif os.path.exists(config_path):\n    print('✓ Config file found')\nelse:\n    print('✗ Config file not found')\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-relative-paths-not-working",
      children: "Issue: Relative Paths Not Working"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scripts fail when run from different directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path resolution incorrect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework can't find project files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scripts use relative paths incorrectly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Working directory not set correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Path resolution logic issue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Run from Project Root:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Always run from project root\ncd /path/to/project\nai-dev-kit status\n\n# Or use absolute paths in scripts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Set Working Directory:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# In scripts, set working directory\ncd \"$(dirname \"$0\")/../..\"  # Go to project root\n\n# Or use absolute paths\nPROJECT_ROOT=\"/path/to/project\"\ncd \"$PROJECT_ROOT\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Script Paths:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Make paths relative to project root\nvim frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py\n\n# Update path resolution:\n# import os\n# PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))\n# VERSION_FILE = os.path.join(PROJECT_ROOT, 'src/yourproject/version.py')\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-issues",
      children: "Version Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-version-mismatch",
      children: "Issue: Version Mismatch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " doesn't match branch"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation fails with version mismatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog version incorrect"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version not updated before RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch context incorrect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version file out of sync"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual version edit"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check Current Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check version file\npython3 -c \"import sys; sys.path.insert(0, 'src'); from yourproject import version; print(version.VERSION_STRING)\"\n\n# Check branch\ngit branch --show-current\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Edit version file\nvim src/yourproject/version.py\n\n# Update to match current work:\n# VERSION_EPIC = 1\n# VERSION_STORY = 1\n# VERSION_TASK = 1\n# VERSION_BUILD = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Validate Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run validation\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n\n# Fix any issues reported\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-version-not-incrementing",
      children: "Issue: Version Not Incrementing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD number not incrementing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version stays same after RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple releases with same version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD not incremented in version file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW not bumping version correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version file not updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Manually Increment BUILD:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Edit version file\nvim src/yourproject/version.py\n\n# Increment BUILD:\n# VERSION_BUILD = 2  # Was 1, now 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Check RW Version Bump:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# RW should increment BUILD automatically\n# If not, check RW configuration\ncat frameworks/workflow-mgmt/rw-config.yaml | grep -A 5 version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Verify Version Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# After RW, check version\npython3 -c \"import sys; sys.path.insert(0, 'src'); from yourproject import version; print(version.VERSION_STRING)\"\n\n# Should show incremented BUILD\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "git-submodule-issues",
      children: "Git Submodule Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-submodule-points-to-wrong-commit",
      children: "Issue: Submodule Points to Wrong Commit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework files outdated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule shows different commit than expected"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework version incorrect"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule not updated after tag checkout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wrong tag checked out"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule commit out of sync"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check Submodule Status:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check submodule commit\ncd .ai-dev-kit\ngit log -1 --oneline\n\n# Check current tag\ngit describe --tags\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Checkout Correct Tag:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List available tags\ngit tag | grep workflow-mgmt\n\n# Checkout correct tag\ngit checkout workflow-mgmt-v2.0.0\n\n# Return to project root\ncd ..\n\n# Copy updated framework\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Update Submodule Reference:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update submodule to latest\ncd .ai-dev-kit\ngit fetch origin\ngit checkout workflow-mgmt-v2.1.0\ncd ..\n\n# Commit submodule update\ngit add .ai-dev-kit\ngit commit -m \"Update submodule to workflow-mgmt-v2.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-submodule-update-conflicts",
      children: "Issue: Submodule Update Conflicts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git submodule update"
        }), " fails"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge conflicts in submodule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule in detached HEAD state"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local changes in submodule"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule commit conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule branch issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Reset Submodule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to submodule\ncd .ai-dev-kit\n\n# Reset to remote state\ngit fetch origin\ngit reset --hard origin/main\n\n# Or checkout specific tag\ngit checkout workflow-mgmt-v2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Remove and Re-add Submodule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove submodule\ngit submodule deinit .ai-dev-kit\ngit rm .ai-dev-kit\nrm -rf .git/modules/.ai-dev-kit\n\n# Re-add submodule\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit\ncd .ai-dev-kit\ngit checkout workflow-mgmt-v2.0.0\ncd ..\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cli-tool-issues",
      children: "CLI Tool Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-command-not-found",
      children: "Issue: Command Not Found"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit"
        }), " command not found"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"command not found\" error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI tool not in PATH"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI tool not installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not in Python PATH"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Virtual environment not activated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation incomplete"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check Installation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if installed\npip show ai-dev-kit\n\n# If not installed, install it\npip install ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Check Python PATH:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check Python path\npython3 -m site --user-base\n\n# Add to PATH if needed\nexport PATH=\"$HOME/.local/bin:$PATH\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Use Python Module:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run as Python module\npython3 -m vibe_dev_kit install workflow-mgmt\n\n# Or use full path\n~/.local/bin/ai-dev-kit install workflow-mgmt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-cli-configuration-errors",
      children: "Issue: CLI Configuration Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI commands fail with config errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration not recognized"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Settings not applied"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration file format incorrect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration file missing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration version mismatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Permissions issue"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Validate Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check configuration\nai-dev-kit validate-config\n\n# Fix issues\nai-dev-kit validate-config --fix\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Reinitialize Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Backup current config\ncp .ai-dev-kit.yaml .ai-dev-kit.yaml.backup\n\n# Reinitialize\nai-dev-kit init\n\n# Restore frameworks\nai-dev-kit install workflow-mgmt@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-functionality-issues",
      children: "Framework Functionality Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-rw-trigger-not-working",
      children: "Issue: RW Trigger Not Working"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Invoking Release Workflow fails, or the agent stops with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RW ABORTED"
        }), " / no version bump"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent doesn't act on the RW trigger section"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-060:"
        }), " Sending only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " with no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E…S…T…"
        }), " token in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same"
        }), " message always aborts before Step 2 — this is expected, not a broken trigger"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file doesn't exist"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW trigger section not added to ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file not properly formatted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cursor hasn't reloaded ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["File paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " are incorrect"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["1. Check if ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " exists:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if file exists\nls -la .cursorrules\n\n# If it doesn't exist, create it\ntouch .cursorrules\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Check if RW trigger section is present:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Search for RW trigger section\ngrep -i \"RELEASE WORKFLOW\" .cursorrules\n\n# If not found, add the section (see installation guide)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Add RW trigger section:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option A: Use RW Installer (Recommended):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run the installer to automatically add the section\npython frameworks/workflow-mgmt/scripts/install_release_workflow.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option B: Manual Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Copy the template section\ncat frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md\n\n# Add to .cursorrules (copy from \"### 🚀 RELEASE WORKFLOW (RW) TRIGGER\" to end)\n# Update file paths in the section to match your project\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["4. Verify file paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check that paths match your project structure\ngrep -E \"version_file|changelog|kanban\" .cursorrules\n\n# Update paths if they don't match:\n# - version_file: Should point to your version.py location\n# - main_changelog: Should point to your CHANGELOG.md\n# - kanban_root: Should point to your Kanban directory (if using Kanban)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Reload Cursor:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart Cursor"
        }), " to reload ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file is loaded when Cursor starts"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes won't take effect until Cursor is restarted"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "6. Test the trigger:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# In Cursor chat, use FR-060 form (task id in same message as RW), e.g.:\n# RW E5S01T01\n# RW E5:S01:T01\n\n# The agent should recognize the trigger and proceed past Step 1b (not RW ABORTED for missing token)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7. Check for syntax errors:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify .cursorrules is valid\ncat .cursorrules\n\n# Check for:\n# - Proper markdown formatting\n# - Complete RW trigger section\n# - No broken syntax\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always run the RW installer after installing Workflow Management framework"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " exists and contains RW trigger section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After installation, test with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW <your_completed_task_id>"
        }), " (not bare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " setup and FR-060 in project README"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-functionality-issues-other",
      children: "Framework Functionality Issues (Other)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-release-workflow-fails",
      children: "Issue: Release Workflow Fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW command fails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation errors during RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW steps incomplete"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch context mismatch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog format errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration problems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check Branch Context:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify branch matches version\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n\n# Fix branch or version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Check Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify version file\npython3 -c \"import sys; sys.path.insert(0, 'src'); from yourproject import version; print(version.VERSION_STRING)\"\n\n# Update if needed\nvim src/yourproject/version.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Check Changelog:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate changelog format\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_changelog_format.py\n\n# Fix any format issues\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Check Git Status:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Ensure clean working directory\ngit status\n\n# Commit or stash changes\ngit add -A\ngit commit -m \"Save work\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-kanban-update-script-fails",
      children: "Issue: Kanban Update Script Fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptoms:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board not updating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update script errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic/Story docs out of sync"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script path incorrect"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check Script Path:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify script exists\nls -la frameworks/kanban/scripts/update-kanban-docs.py\n\n# Check script permissions\nchmod +x frameworks/kanban/scripts/update-kanban-docs.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Run Script Manually:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run script directly\ncd frameworks/kanban\npython3 scripts/update-kanban-docs.py\n\n# Check for errors\npython3 scripts/update-kanban-docs.py --verbose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Check Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify Python dependencies\npython3 -c \"import yaml; print('yaml OK')\"\npython3 -c \"import json; print('json OK')\"\n\n# Install missing dependencies\npip install pyyaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "getting-help",
      children: "Getting Help"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diagnostic-information",
      children: "Diagnostic Information"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Collect Diagnostic Info:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# System information\nuname -a\npython3 --version\ngit --version\n\n# CLI information\nai-dev-kit --version\nai-dev-kit status --verbose\n\n# Configuration\ncat .ai-dev-kit.yaml\n\n# Framework status\nai-dev-kit status\nls -la frameworks/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reporting-issues",
      children: "Reporting Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create Issue Report:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Use CLI to report issue\nai-dev-kit report-issue \\\n  --framework workflow-mgmt \\\n  --version 2.0.0 \\\n  --description \"Update fails with error X\"\n\n# Or create GitHub issue with:\n# - Framework name and version\n# - Error message\n# - Steps to reproduce\n# - Diagnostic information\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "install-error-codes-adk",
      children: "Install error codes (ADK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Registry version: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.0.0"
      }), ". When install fails, copy the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ERROR [ADK-…]"
      }), " line from your console together with the AI Dev Kit SemVer banner (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version",
        children: "UXR-016"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canonical registry: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/config/install-error-codes.yaml"
      }), ". Regenerate this appendix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python packages/frameworks/workflow-mgt/scripts/generate_install_error_docs.py"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i01s01",
      children: "ADK-I01.S01"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Greenfield RW install step failed — review subprocess output for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I03.*"
      }), " codes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i01s02",
      children: "ADK-I01.S02"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Greenfield Kanban install step failed — review subprocess output for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I02.*"
      }), " codes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i02e01",
      children: "ADK-I02.E01"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Kanban framework install failed. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "See also:"
      }), " BR-054."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i02e08",
      children: "ADK-I02.E08"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " Kanban path contamination detected. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remediation:"
      }), " run contamination remediation or use a clean target path. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "See also:"
      }), " BR-037."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i03e04",
      children: "ADK-I03.E04"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " RW installer dependencies missing (e.g. PyYAML). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remediation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install 'pyyaml>=6.0'"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "See also:"
      }), " BR-082."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i03e12",
      children: "ADK-I03.E12"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version_file"
      }), " missing or scaffold declined. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "See also:"
      }), " BR-088."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i03e21",
      children: "ADK-I03.E21"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " rw-config kanban patterns mismatch fresh layout. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "See also:"
      }), " BR-083, BR-086."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i03e90",
      children: "ADK-I03.E90"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " RW install PARTIAL — complete follow-up items at end of installer output."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adk-i04e01",
      children: "ADK-I04.E01"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      }), " GitHub install sign-off not READY — run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_github_issue_signoff.py"
      }), " and fix contract checks."]
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
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-cli-reference",
          children: "CLI Reference"
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