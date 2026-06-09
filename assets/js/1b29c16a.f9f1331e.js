"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["9795"], {
3590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_framework_dependency_installation_guide_md_1b2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-framework-dependency-installation-guide-md-1b2.json
var site_docs_documentation_user_docs_framework_dependency_installation_guide_md_1b2_namespaceObject = JSON.parse('{"id":"documentation/user-docs/framework-dependency-installation-guide","title":"Framework Dependency Installation Guide","description":"Status: Active","source":"@site/../docs/documentation/user-docs/framework-dependency-installation-guide.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/framework-dependency-installation-guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/framework-dependency-installation-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-06T22:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency FAQ","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-faq"},"next":{"title":"Framework Dependency Integration Guide","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-integration-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/framework-dependency-installation-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-06T22:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency Installation Guide';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Greenfield first-run scope (FR-080)",
  "id": "greenfield-first-run-scope-fr-080",
  "level": 3
}, {
  "value": "Optional third-party harness (ECC)",
  "id": "optional-third-party-harness-ecc",
  "level": 3
}, {
  "value": "Python version support",
  "id": "python-version-support",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Setting Up a Git Repository",
  "id": "setting-up-a-git-repository",
  "level": 3
}, {
  "value": "Alternative: Use ai-dev-kit as a GitHub template",
  "id": "alternative-use-ai-dev-kit-as-a-github-template",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 2
}, {
  "value": "Use Case 1: Template → All Packages",
  "id": "use-case-1-template--all-packages",
  "level": 3
}, {
  "value": "Use Case 2: Template → Some Packages",
  "id": "use-case-2-template--some-packages",
  "level": 3
}, {
  "value": "Use Case 3: Existing Project → All Packages",
  "id": "use-case-3-existing-project--all-packages",
  "level": 3
}, {
  "value": "Use Case 4: Existing Project → Some Packages",
  "id": "use-case-4-existing-project--some-packages",
  "level": 3
}, {
  "value": "Selective framework installation",
  "id": "selective-framework-installation",
  "level": 3
}, {
  "value": "Monorepo setup",
  "id": "monorepo-setup",
  "level": 3
}, {
  "value": "Installation Methods",
  "id": "installation-methods",
  "level": 2
}, {
  "value": "Method 1: Git Submodules (Phase 1 - Available Now)",
  "id": "method-1-git-submodules-phase-1---available-now",
  "level": 3
}, {
  "value": "Installation Steps",
  "id": "installation-steps",
  "level": 4
}, {
  "value": "Updating Frameworks (Git Submodules)",
  "id": "updating-frameworks-git-submodules",
  "level": 4
}, {
  "value": "Advantages of Git Submodules",
  "id": "advantages-of-git-submodules",
  "level": 4
}, {
  "value": "Limitations of Git Submodules",
  "id": "limitations-of-git-submodules",
  "level": 4
}, {
  "value": "Method 2: CLI Tool (Phase 2 - Available Now)",
  "id": "method-2-cli-tool-phase-2---available-now",
  "level": 3
}, {
  "value": "Installation Steps",
  "id": "installation-steps-1",
  "level": 4
}, {
  "value": "Updating Frameworks (CLI Tool)",
  "id": "updating-frameworks-cli-tool",
  "level": 4
}, {
  "value": "Advantages of CLI Tool",
  "id": "advantages-of-cli-tool",
  "level": 4
}, {
  "value": "Method 3: Package Managers (Phase 3 - Future)",
  "id": "method-3-package-managers-phase-3---future",
  "level": 3
}, {
  "value": "Installation Steps (npm - Future)",
  "id": "installation-steps-npm---future",
  "level": 4
}, {
  "value": "Installation Steps (pip - Future)",
  "id": "installation-steps-pip---future",
  "level": 4
}, {
  "value": "Updating Frameworks (Package Managers)",
  "id": "updating-frameworks-package-managers",
  "level": 4
}, {
  "value": "Advantages of Package Managers",
  "id": "advantages-of-package-managers",
  "level": 4
}, {
  "value": "Post-Installation Setup",
  "id": "post-installation-setup",
  "level": 2
}, {
  "value": "Enable RW Trigger in <code>.cursorrules</code> (Workflow Management Framework)",
  "id": "enable-rw-trigger-in-cursorrules-workflow-management-framework",
  "level": 3
}, {
  "value": "Setup Kanban Board (Kanban Framework)",
  "id": "setup-kanban-board-kanban-framework",
  "level": 3
}, {
  "value": "Post-Installation Setup (Other Frameworks)",
  "id": "post-installation-setup-other-frameworks",
  "level": 2
}, {
  "value": "1. Update File Paths",
  "id": "1-update-file-paths",
  "level": 3
}, {
  "value": "2. Update Version Schema (if needed)",
  "id": "2-update-version-schema-if-needed",
  "level": 3
}, {
  "value": "3. Configure Framework Settings",
  "id": "3-configure-framework-settings",
  "level": 3
}, {
  "value": "4. Enable RW Trigger in <code>.cursorrules</code> (Workflow Management Framework Only)",
  "id": "4-enable-rw-trigger-in-cursorrules-workflow-management-framework-only",
  "level": 3
}, {
  "value": "5. Test Installation",
  "id": "5-test-installation",
  "level": 3
}, {
  "value": "Verification",
  "id": "verification",
  "level": 2
}, {
  "value": "1. Check Framework Files",
  "id": "1-check-framework-files",
  "level": 3
}, {
  "value": "2. Test Framework Commands",
  "id": "2-test-framework-commands",
  "level": 3
}, {
  "value": "3. Check Git Integration",
  "id": "3-check-git-integration",
  "level": 3
}, {
  "value": "4. Post-install sanity check (Kanban and install logs)",
  "id": "4-post-install-sanity-check-kanban-and-install-logs",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Issue: Not a Git repository",
  "id": "issue-not-a-git-repository",
  "level": 3
}, {
  "value": "Issue: Git submodule not updating",
  "id": "issue-git-submodule-not-updating",
  "level": 3
}, {
  "value": "Issue: Framework files not found after installation",
  "id": "issue-framework-files-not-found-after-installation",
  "level": 3
}, {
  "value": "Issue: Path errors in framework scripts",
  "id": "issue-path-errors-in-framework-scripts",
  "level": 3
}, {
  "value": "Issue: Version conflicts",
  "id": "issue-version-conflicts",
  "level": 3
}, {
  "value": "Uninstalling frameworks",
  "id": "uninstalling-frameworks",
  "level": 2
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
        id: "framework-dependency-installation-guide",
        children: "Framework Dependency Installation Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 5 - Documentation Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 4 - Framework Documentation Management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E05:S04", ":T05", " - Create comprehensive user documentation for Epic 6 framework dependency architecture"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide explains how to install ai-dev-kit frameworks as dependencies in your project. Frameworks can be installed using three methods: Git submodules (Phase 1), the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool (Phase 2), or package managers like npm/pip (Phase 3)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "What you get:"
      }), " Frameworks installed as dependencies can be automatically updated when improvements are made, with notifications about available updates. This replaces the previous copy-paste approach."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "greenfield-first-run-scope-fr-080",
      children: "Greenfield first-run scope (FR-080)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide now distinguishes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "greenfield"
      }), " first-run path from brownfield adoption:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greenfield (this track):"
        }), " Start from a new/template repository and run installer-driven setup with explicit verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brownfield (separate track):"
        }), " Integrate into an existing architecture with modular surfaces and host-owned constraints."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical brownfield entry (FR-081):"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md — Brownfield adoption"
        })
      }), " (matrices, RW-only path, worked example)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For policy and boundaries:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md",
          children: "ADR-003 – Greenfield vs Brownfield adoption"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md",
          children: "FR-081 – Brownfield modular adopter integration"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md",
          children: "IPP-E6S9T2 planning package"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md",
          children: ["FR-080 implementing task (E6:S09", ":T01", ")"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md",
          children: "IPW-E6S9T1 planning package"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the current canonical greenfield sequence (default RW-first with explicit override checkpoint), see:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Post-install ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "validator commands"
      }), ", a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "synthetic reference transcript"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-078 / FR-079"
      }), " telemetry boundaries are documented there under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 4"
      }), " sections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optional-third-party-harness-ecc",
      children: "Optional third-party harness (ECC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI Dev Kit does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " require ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/affaan-m/ECC",
        children: "ECC"
      }), " (MIT License; upstream harness-native operator system by Affaan Mustafa and contributors). If you want optional harness execution skills (TDD, language patterns, security scan) alongside ADK governance:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md",
          children: "ECC ↔ ADK integration specification"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md",
          children: "Phase 0 compatibility evaluation"
        }), " before installing ECC into an ADK-adopted repo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full greenfield install steps for ECC are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deferred"
        }), " to FR-098 Phase 2; obtain ECC from upstream (", (0,jsx_runtime.jsx)(_components.code, {
          children: "npx -p ecc-universal ecc-install"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "python-version-support",
      children: "Python version support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Dev Kit requires Python 3.11 or newer"
      }), " for installing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " package, running workflow validators, and contributing to this repository. This matches ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/framework-release.yml",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/framework-release.yml"
        })
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "python-version: \"3.11\""
      }), "). Older interpreters may fail with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SyntaxError"
      }), " on union-type annotations in repo scripts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopters using ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/pyenv/pyenv",
        children: "pyenv"
      }), " or similar may use the repo-root ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".python-version"
      }), " file (", (0,jsx_runtime.jsx)(_components.code, {
        children: "3.11"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before installing frameworks, ensure you have:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git"
        }), " installed and configured"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Python 3.11+"
        }), " (for CLI tool, validators, and frameworks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Node.js 16+"
        }), " (if using npm package manager)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A Git repository"
        }), " for your project (frameworks are installed as Git dependencies)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "System Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unix-like system (Linux, macOS) or Windows with Git Bash/WSL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Terminal/command line access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write permissions to your project directory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-up-a-git-repository",
      children: "Setting Up a Git Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you don't have a Git repository yet, set one up first:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Initialize Local Git Repository:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to your project directory\ncd /path/to/your/project\n\n# Initialize Git repository\ngit init\n\n# Create initial commit (optional but recommended)\necho \"# My Project\" > README.md\ngit add README.md\ngit commit -m \"Initial commit\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Create GitHub Repository (Optional but Recommended):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create repository on GitHub (via web interface or GitHub CLI)\n# Then connect local repository to remote:\n\ngit remote add origin https://github.com/yourusername/your-project.git\n\n# Or using SSH:\ngit remote add origin git@github.com:yourusername/your-project.git\n\n# Push initial commit\ngit branch -M main\ngit push -u origin main\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " You can install frameworks with just a local Git repository. A GitHub (or other remote) repository is optional but recommended for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup and collaboration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework update notifications (if using GitHub Actions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Verify Git Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check Git is working\ngit --version\n\n# Check repository is initialized\ngit status\n\n# Check remote (if configured)\ngit remote -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alternative-use-ai-dev-kit-as-a-github-template",
      children: "Alternative: Use ai-dev-kit as a GitHub template"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Instead of creating a repository from scratch, you can use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " as a template:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Create Repository from Template:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Go to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit",
          children: "https://github.com/RMS-Ltd/ai-dev-kit"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Use this template\""
        }), " button (if template is enabled)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Create a new repository\""
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose your repository name and settings"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Create repository\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Clone Your New Repository:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Clone your new repository (replace with your username and repo name)\ngit clone https://github.com/yourusername/your-project.git\ncd your-project\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Post-Template Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After creating from template, you'll have:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Complete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Framework directories (", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Configuration files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Example workflows and templates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "First step (language):"
      }), " Before other customization, complete ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide#step-0-select-language-variant-uk--us-english",
          children: "Step 0 — Select language variant"
        })
      }), " in the Post-Template Setup Guide. Copy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit-config.example.yaml"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit-config.yaml"
      }), " at the project root (default: UK English / en-GB)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide",
          children: "Post-Template Setup Guide"
        }), " for detailed customization steps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " with your project information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Review and customize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " structure for your needs"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Release Workflow (RW) for your project"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " If the template option is not available, you can still manually clone and set up:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Clone ai-dev-kit\ngit clone https://github.com/RMS-Ltd/ai-dev-kit.git your-project\ncd your-project\n\n# Remove the original remote and set up your own\ngit remote remove origin\ngit remote add origin https://github.com/yourusername/your-project.git\n\n# Push to your repository\ngit push -u origin main\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before installing, identify which use case matches your needs:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-1-template--all-packages",
      children: "Use Case 1: Template → All Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New project from template with all frameworks included"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create repository from ai-dev-kit template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All frameworks pre-installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete KB structure included"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-1-template--all-packages",
          children: "Use Cases Guide"
        }), " for details"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-2-template--some-packages",
      children: "Use Case 2: Template → Some Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New project from template with selected frameworks"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create repository from ai-dev-kit template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove unused frameworks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep only what you need"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-2-template--some-packages",
          children: "Use Cases Guide"
        }), " for details"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-3-existing-project--all-packages",
      children: "Use Case 3: Existing Project → All Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Install all frameworks into existing project"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add all frameworks to your existing repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate with current structure"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-3-existing-project--all-packages",
          children: "Use Cases Guide"
        }), " for details"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-4-existing-project--some-packages",
      children: "Use Case 4: Existing Project → Some Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Install selected frameworks into existing project"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add only the frameworks you need"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incremental adoption"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-4-existing-project--some-packages",
          children: "Use Cases Guide"
        }), " for details"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["📖 For complete use case details and additional scenarios, see the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases",
          children: "Use Cases Guide"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selective-framework-installation",
      children: "Selective framework installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Install only the packages you need (CLI, submodule copy, or template trim). See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-2-template--some-packages",
        children: "Use Case 2: Template → Some Packages"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-4-existing-project--some-packages",
        children: "Use Case 4: Existing Project → Some Packages"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monorepo-setup",
      children: "Monorepo setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Share one ai-dev-kit installation across multiple packages. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases#use-case-6-monorepomulti-project-setup",
        children: "Use Case 6: Monorepo/Multi-Project Setup"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation-methods",
      children: "Installation Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-1-git-submodules-phase-1---available-now",
      children: "Method 1: Git Submodules (Phase 1 - Available Now)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Git submodules allow you to include the ai-dev-kit repository (or specific frameworks) as a subdirectory in your project, with version control via Git tags."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation-steps",
      children: "Installation Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Ensure Git repository is initialized:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to your project root\ncd /path/to/your/project\n\n# If not already a Git repository, initialize it\ngit init  # Only if needed\n\n# Verify Git is set up\ngit status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Add the ai-dev-kit repository as a submodule:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add the entire ai-dev-kit repository as a submodule\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit\n\n# Or add to a specific directory\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git frameworks/ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Checkout a specific framework version (recommended):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to the submodule\ncd .ai-dev-kit\n\n# List available framework tags\ngit tag | grep framework\n\n# Checkout a specific framework version (e.g., workflow-mgmt-v2.0.0)\ngit checkout workflow-mgmt-v2.0.0\n\n# Return to project root\ncd ..\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Copy the framework to your project structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Copy the workflow management framework\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n\n# Or copy multiple frameworks\ncp -r .ai-dev-kit/packages/frameworks/kanban/ ./frameworks/kanban\ncp -r \".ai-dev-kit/packages/frameworks/numbering-versioning\" ./frameworks/numbering-versioning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Commit the submodule reference:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git add .gitmodules .ai-dev-kit frameworks/\ngit commit -m \"Add ai-dev-kit frameworks as Git submodule\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "updating-frameworks-git-submodules",
      children: "Updating Frameworks (Git Submodules)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check for updates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to submodule\ncd .ai-dev-kit\n\n# Fetch latest changes\ngit fetch origin\n\n# List new tags\ngit tag | grep framework\n\n# Checkout new version\ngit checkout workflow-mgmt-v2.1.0\n\n# Return to project root\ncd ..\n\n# Copy updated framework\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n\n# Commit update\ngit add frameworks/\ngit commit -m \"Update workflow-mgmt framework to v2.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated update script:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/update-frameworks.sh"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# Update all frameworks from Git submodule\n\ncd .ai-dev-kit\ngit fetch origin\ngit checkout workflow-mgmt-v2.1.0  # Update to desired version\ncd ..\n\n# Copy updated frameworks\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\ncp -r .ai-dev-kit/packages/frameworks/kanban/ ./frameworks/kanban\n\necho \"Frameworks updated. Review changes and commit.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-of-git-submodules",
      children: "Advantages of Git Submodules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version control:"
        }), " Pin frameworks to specific Git tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No external dependencies:"
        }), " Works with Git only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit updates:"
        }), " You control when to update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full access:"
        }), " Access to entire ai-dev-kit repository"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "limitations-of-git-submodules",
      children: "Limitations of Git Submodules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual updates:"
        }), " Requires manual copying after submodule update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git knowledge:"
        }), " Requires understanding of Git submodules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository size:"
        }), " Includes entire ai-dev-kit repository"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-2-cli-tool-phase-2---available-now",
      children: "Method 2: CLI Tool (Phase 2 - Available Now)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool provides a unified interface for installing and managing frameworks across all dependency backends (Git submodules, Git subtrees, npm, pip)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation-steps-1",
      children: "Installation Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Ensure Git repository is initialized:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to your project\ncd /path/to/your/project\n\n# Initialize Git if needed\ngit init  # Only if not already a Git repository\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Install the CLI tool:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install from source (current method)\ncd /path/to/ai-dev-kit\npip install -e .\n\n# Or install CLI tool directly\ncd /path/to/ai-dev-kit/cli\npip install -e .\n\n# Future: Install via pip (when published to PyPI)\n# pip install ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Initialize ai-dev-kit in your project:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd /path/to/your/project\nai-dev-kit init\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This creates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".ai-dev-kit.yaml"
      }), " configuration file:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: \"1.0.0\"\ndefault_backend: \"git-submodule\"\nframeworks: {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Install a framework:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install workflow management framework (latest version)\nai-dev-kit install workflow-mgmt\n\n# Install specific version\nai-dev-kit install workflow-mgmt@2.0.0\n\n# Install with specific backend\nai-dev-kit install workflow-mgmt --backend git-submodule\n\n# Install multiple frameworks\nai-dev-kit install workflow-mgmt kanban numbering-versioning\n\n# Preview installation (dry-run)\nai-dev-kit install workflow-mgmt --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Check installed frameworks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Show status of all frameworks\nai-dev-kit status\n\n# Show status of specific framework\nai-dev-kit status workflow-mgmt\n\n# List all available frameworks\nai-dev-kit list\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Installed Frameworks:\n  workflow-mgmt:\n    Version: 2.0.0\n    Backend: git-submodule\n    Path: frameworks/workflow-mgmt\n    Status: Up to date\n  \n  kanban:\n    Version: 1.5.0\n    Backend: git-submodule\n    Path: frameworks/kanban\n    Status: Update available (1.6.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "updating-frameworks-cli-tool",
      children: "Updating Frameworks (CLI Tool)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Check for updates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ai-dev-kit check\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Available Updates:\n  workflow-mgmt: v2.0.0 → v2.1.0 (minor update)\n  kanban: v1.5.0 → v1.6.0 (patch update)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update a framework:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update specific framework\nai-dev-kit update workflow-mgmt\n\n# Update all frameworks\nai-dev-kit update --all\n\n# Update to specific version\nai-dev-kit update workflow-mgmt@2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic update notifications:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CLI tool can be configured to check for updates and notify you:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable automatic update checks\nai-dev-kit config set auto_check true\nai-dev-kit config set check_interval daily\n\n# Run update check (can be added to CI/CD)\nai-dev-kit check --notify\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-of-cli-tool",
      children: "Advantages of CLI Tool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unified interface:"
        }), " Same commands for all backends"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic management:"
        }), " Handles submodule/package manager details"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update notifications:"
        }), " Built-in update checking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version management:"
        }), " Easy version pinning and updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-3-package-managers-phase-3---future",
      children: "Method 3: Package Managers (Phase 3 - Future)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frameworks will be published as npm packages (for Node.js projects) and pip packages (for Python projects), enabling standard package manager workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation-steps-npm---future",
      children: "Installation Steps (npm - Future)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Ensure Git repository is initialized:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to your project\ncd /path/to/your/project\n\n# Initialize Git if needed\ngit init  # Only if not already a Git repository\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Install workflow management framework:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install workflow management framework\nnpm install @ai-dev-kit/workflow-mgmt\n\n# Install specific version\nnpm install @ai-dev-kit/workflow-mgmt@2.0.0\n\n# Install multiple frameworks\nnpm install @ai-dev-kit/workflow-mgmt @ai-dev-kit/kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "installation-steps-pip---future",
      children: "Installation Steps (pip - Future)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Ensure Git repository is initialized:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to your project\ncd /path/to/your/project\n\n# Initialize Git if needed\ngit init  # Only if not already a Git repository\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Install workflow management framework:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install workflow management framework\npip install ai-dev-kit-workflow-mgmt\n\n# Install specific version\npip install ai-dev-kit-workflow-mgmt==2.0.0\n\n# Install multiple frameworks\npip install ai-dev-kit-workflow-mgmt ai-dev-kit-kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " While package managers (npm/pip) don't strictly require Git, having a Git repository is still recommended for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version control of your project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracking framework versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework update workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "updating-frameworks-package-managers",
      children: "Updating Frameworks (Package Managers)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for updates\nnpm outdated\n\n# Update to latest compatible version\nnpm update @ai-dev-kit/workflow-mgmt\n\n# Update to specific version\nnpm install @ai-dev-kit/workflow-mgmt@2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "pip:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for updates\npip list --outdated\n\n# Update to latest version\npip install --upgrade ai-dev-kit-workflow-mgmt\n\n# Update to specific version\npip install --upgrade ai-dev-kit-workflow-mgmt==2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages-of-package-managers",
      children: "Advantages of Package Managers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard workflow:"
        }), " Uses familiar package manager commands"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency resolution:"
        }), " Automatic dependency management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version locking:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), " pin versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD integration:"
        }), " Standard package manager workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "post-installation-setup",
      children: "Post-Installation Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "enable-rw-trigger-in-cursorrules-workflow-management-framework",
      children: ["Enable RW Trigger in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " (Workflow Management Framework)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "⚠️ IMPORTANT:"
      }), " If you installed the Workflow Management framework, add the RW trigger section to your ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " so Cursor can run the Release Workflow. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-060:"
      }), " You must send ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " and a parseable Epic/Story/Task id in the same message"]
      }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E5S01T01"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E5:S01:T01"
      }), "). A bare ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      }), " is not sufficient—the agent must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW ABORTED"
      }), " before any version bump."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option A: Use the RW Installer (Recommended)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The RW installer can automatically generate and add the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " section:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to your project root\ncd /path/to/your/project\n\n# Run the RW installer\npython frameworks/workflow-mgmt/scripts/install_release_workflow.py\n\n# The installer will:\n# - Generate rw-config.yaml (if it doesn't exist)\n# - Create or update .cursorrules with the RW trigger section\n# - Update workflow YAML files with correct paths\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option B: Manual Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you prefer to set it up manually:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open the cursorrules template:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# View the template\ncat frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy the RW trigger section:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Copy everything from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "### 🚀 RELEASE WORKFLOW (RW) TRIGGER"
            }), " to the end of the file"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "This is the section that enables the RW trigger (always with a task id per FR-060)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add to your ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file:"]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Create .cursorrules if it doesn't exist\ntouch .cursorrules\n\n# Add the RW trigger section (paste the copied content)\n# You can add it in a \"Version Control and Release Process\" section\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update file paths in the section:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{project\\}"
            }), " with your project name"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update version file path: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/\\{project\\}/version.py"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/yourproject/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Kanban paths if using Kanban framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update validator script paths to match your framework location"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify the trigger works:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Restart Cursor to reload ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In chat, use the trigger ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "plus"
            }), " a task id, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E5S01T01"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E5:S01:T01"
            }), " (substitute a completed task from your Kanban). Short paths: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k E5S01T01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d E5S01T01"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Full procedure and guardrails: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
              children: "Release Workflow (agent execution)"
            }), " (Step 1 branch safety; Steps 1.3–1.5: task token, releasable task, intent guard)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "rw-config.yaml"
              })
            }), " sets ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "use_kanban: true"
              })
            }), ", validators (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_task_complete.py"
            }), ") expect a real task document matching the id you pass"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What the RW Trigger Does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you send ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw"
        }), " with a mandatory task token"]
      }), " in the same message, the AI assistant will:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute the Release Workflow steps defined in your ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (version bump, changelogs, validators, commit/tag/push as applicable)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban documentation when configured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate branch context and task alignment before mutating release files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ":"]
      }), " The RW trigger is not active—run workflow steps manually or add the excerpt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ":"]
      }), " The trigger runs agent-driven RW when the message includes a parseable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E…S…T…"
      }), " id (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-060"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup-kanban-board-kanban-framework",
      children: "Setup Kanban Board (Kanban Framework)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "⚠️ IMPORTANT:"
      }), " If you installed the Kanban framework, you need to set up your Kanban board using the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interactive installer"
      }), ". Do NOT manually copy epics from ai-dev-kit's actual Kanban board."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "🚨 CRITICAL: Use the Installer (REQUIRED)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Kanban installer is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ONLY"
      }), " supported method for setting up your Kanban board. It installs canonical epic templates (not ai-dev-kit's actual epics)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option A: Use the Kanban Installer (Recommended)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to your project root\ncd /path/to/your/project\n\n# Run the Kanban installer\npython3 frameworks/kanban/scripts/install_kanban_framework.py --mode fresh\n\n# The installer will:\n# - Install canonical epic templates from templates/epics/ (NOT from ai-dev-kit's actual epics)\n# - Contextualize Epic 1 with your project name\n# - Only install canonical core epics (1-8, 10, 18, 22, 23)\n# - Exclude ai-dev-kit project-specific epics\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What You Get After Installation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Canonical epic templates installed in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/kanban/epics/Epic-\\{N\\}/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Epic 1 contextualized with your project name (e.g., \"MyProject Core\", not \"AI Dev Kit Core\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Only canonical core epics (1-8, 10, 18, 22, 23) installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No ai-dev-kit project-specific epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Empty epic directories ready for you to create stories and tasks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option B: Advanced Customization (Optional)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you want to customize templates beyond the installer's automatic contextualization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Review the contextualization guide\ncat frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md\n\n# The guide explains:\n# - Placeholder replacement ({PROJECT_NAME}, {DOMAIN}, etc.)\n# - Scalability guidance (tiny, small, medium, ambitious projects)\n# - Customization guidelines (Epic, Story, Task levels)\n# - Examples for different project types\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contextualization Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md"
        }), " - Complete guide for customizing templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contextualization Examples:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/kanban/templates/examples/contextualized/"
        }), " - Examples for tiny, small, and ambitious projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Installer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/kanban/scripts/install_kanban_framework.py"
        }), " - Interactive installer script"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-Template Setup Guide:"
        }), " See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-post-template-setup-guide",
          children: "Post-Template Setup Guide"
        }), " Step 4 for detailed Kanban setup instructions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "⚠️ What NOT to Do:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# ❌ WRONG - This copies ai-dev-kit's actual Kanban, not templates!\ncp -r /path/to/ai-dev-kit/docs/kanban/epics/* docs/kanban/epics/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this is wrong:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You'll get ai-dev-kit's project-specific epics (Epic 1: \"AI Dev Kit Core\", etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You'll get ai-dev-kit's actual stories and tasks with their specific content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 1 won't be contextualized with your project name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You'll receive project-specific epics (like Epic 24 \"Book Related Work\") that are specific to ai-dev-kit"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL: Epic Mashup Risk"
        }), " - You may get Epic 9 \"Book Related Work\" instead of canonical Epic 9 \"User Management and Authentication\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "post-installation-setup-other-frameworks",
      children: "Post-Installation Setup (Other Frameworks)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After installing frameworks, you need to configure them for your project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-update-file-paths",
      children: "1. Update File Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frameworks contain example paths that need to be updated for your project structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Example: Update paths in workflow management framework\ncd frameworks/workflow-mgmt\n\n# Search for example paths\ngrep -r \"src/confidentia\" .\n\n# Replace with your project paths\nfind . -type f -name \"*.md\" -exec sed -i '' 's/src\\/confidentia/src\\/yourproject/g' {} \\;\nfind . -type f -name \"*.py\" -exec sed -i '' 's/src\\/confidentia/src\\/yourproject/g' {} \\;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-update-version-schema-if-needed",
      children: "2. Update Version Schema (if needed)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If your project uses a different versioning schema, update the version file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Edit version.py or equivalent\nvim frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py\n\n# Update version schema parsing if needed\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-configure-framework-settings",
      children: "3. Configure Framework Settings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each framework has configuration files that need customization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Example: Workflow management framework\nvim frameworks/workflow-mgmt/rw-config.yaml\n\n# Update:\n# - Project name\n# - Branch patterns\n# - File paths\n# - Validation settings\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "4-enable-rw-trigger-in-cursorrules-workflow-management-framework-only",
      children: ["4. Enable RW Trigger in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " (Workflow Management Framework Only)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "⚠️ IMPORTANT:"
      }), " If you installed the Workflow Management framework, add the RW trigger section to your ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " so Cursor can run the Release Workflow. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-060:"
      }), " You must send ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " and a parseable Epic/Story/Task id in the same message"]
      }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E5S01T01"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E5:S01:T01"
      }), "). A bare ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      }), " is not sufficient—the agent must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW ABORTED"
      }), " before any version bump."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option A: Use the RW Installer (Recommended)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The RW installer can automatically generate and add the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " section:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Navigate to your project root\ncd /path/to/your/project\n\n# Run the RW installer\npython frameworks/workflow-mgmt/scripts/install_release_workflow.py\n\n# The installer will:\n# - Generate rw-config.yaml (if it doesn't exist)\n# - Create or update .cursorrules with the RW trigger section\n# - Update workflow YAML files with correct paths\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option B: Manual Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you prefer to set it up manually:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Open the cursorrules template:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# View the template\ncat frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Copy the RW trigger section:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Copy everything from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "### 🚀 RELEASE WORKFLOW (RW) TRIGGER"
            }), " to the end of the file"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "This is the section that enables the RW trigger (always with a task id per FR-060)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Add to your ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file:"]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Create .cursorrules if it doesn't exist\ntouch .cursorrules\n\n# Add the RW trigger section (paste the copied content)\n# You can add it in a \"Version Control and Release Process\" section\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update file paths in the section:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Replace ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{project\\}"
            }), " with your project name"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update version file path: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/\\{project\\}/version.py"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/yourproject/version.py"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update Kanban paths if using Kanban framework"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update validator script paths to match your framework location"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify the trigger works:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Restart Cursor to reload ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In chat, use the trigger ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "plus"
            }), " a task id, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E5S01T01"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E5:S01:T01"
            }), " (substitute a completed task from your Kanban). Short paths: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k E5S01T01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d E5S01T01"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Full procedure and guardrails: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
              children: "Release Workflow (agent execution)"
            }), " (Step 1 branch safety; Steps 1.3–1.5: task token, releasable task, intent guard)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "rw-config.yaml"
              })
            }), " sets ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "use_kanban: true"
              })
            }), ", validators (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_task_complete.py"
            }), ") expect a real task document matching the id you pass"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What the RW Trigger Does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you send ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw"
        }), " with a mandatory task token"]
      }), " in the same message, the AI assistant will:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute the Release Workflow steps defined in your ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (version bump, changelogs, validators, commit/tag/push as applicable)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban documentation when configured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate branch context and task alignment before mutating release files"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ":"]
      }), " The RW trigger is not active—run workflow steps manually or add the excerpt."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ":"]
      }), " The trigger runs agent-driven RW when the message includes a parseable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E…S…T…"
      }), " id (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-060"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Location of Template:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-test-installation",
      children: "5. Test Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify the framework is installed correctly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Example: Test workflow management framework\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py --help\n\n# Should show help text without errors\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After installation, verify everything is set up correctly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-check-framework-files",
      children: "1. Check Framework Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify framework directory exists\nls -la frameworks/workflow-mgmt/\n\n# Check for key files\ntest -f frameworks/workflow-mgmt/README.md && echo \"✓ README exists\"\ntest -f frameworks/workflow-mgmt/IMPLEMENTATION_GUIDE.md && echo \"✓ Implementation guide exists\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-test-framework-commands",
      children: "2. Test Framework Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test validation scripts\ncd frameworks/workflow-mgmt\npython3 scripts/validation/validate_branch_context.py\n\n# Should run without errors (may show warnings if not on correct branch)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-check-git-integration",
      children: "3. Check Git Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify Git repository is initialized\ngit status\n# Should show repository status (not \"not a git repository\")\n\n# Verify submodule is tracked (if using Git submodules)\ngit submodule status\n# Should show submodule with commit hash\n\n# Check remote (if configured)\ngit remote -v\n# Shows remote repository URL if configured\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-post-install-sanity-check-kanban-and-install-logs",
      children: "4. Post-install sanity check (Kanban and install logs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you installed the Kanban framework, use this checklist to confirm a clean consumer install:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consumer Kanban location:"
        }), " Your working Kanban is at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/kanban/"
          })
        }), " at your project root. Do not use or edit the framework’s internal Kanban under ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit/"
        }), " or the framework package path as your project board."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No ai-dev-kit–specific epics:"
        }), " Under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/kanban/epics/"
        }), " there should be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no Epic 24"
        }), " (or other ai-dev-kit–only epics). A fresh install only adds canonical epics (e.g. Epic 1–8, 10, 18, 22, 23)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board file:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/kanban/kboard.md"
        }), " should mention your ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "project name"
        }), " and, on first install, version placeholder ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "v0.0.0.0+0"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install logs:"
        }), " If install logging is enabled (default), check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "logs/ai-dev-kit/install/"
        }), " for a timestamped log file. For Kanban installs, the log should contain lines with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[KANBAN_FRESH_INSTALL]"
          })
        }), " (or other ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[KANBAN_*]"
        }), " phase markers) and any validation warnings. Use these logs for debugging if something goes wrong."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-not-a-git-repository",
      children: "Issue: Not a Git repository"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git status"
      }), " shows \"not a git repository\" error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Initialize Git repository\ngit init\n\n# Create initial commit\ngit add .\ngit commit -m \"Initial commit\"\n\n# Then proceed with framework installation\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " You can install frameworks without a remote repository (GitHub). A local Git repository is sufficient for framework installation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-git-submodule-not-updating",
      children: "Issue: Git submodule not updating"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git submodule update"
      }), " doesn't pull latest changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd .ai-dev-kit\ngit fetch origin\ngit checkout <tag-name>\ncd ..\ngit add .ai-dev-kit\ngit commit -m \"Update submodule\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-framework-files-not-found-after-installation",
      children: "Issue: Framework files not found after installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Framework files are in submodule but not copied to project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Manually copy framework from submodule\ncp -r .ai-dev-kit/packages/frameworks/workflow\\ mgt/ ./frameworks/workflow-mgmt\n\n# Or use CLI tool\nai-dev-kit install workflow-mgmt --force\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-path-errors-in-framework-scripts",
      children: "Issue: Path errors in framework scripts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Framework scripts reference incorrect paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update paths in framework configuration\nvim frameworks/workflow-mgmt/rw-config.yaml\n\n# Update all path references to match your project structure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-version-conflicts",
      children: "Issue: Version conflicts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Multiple framework versions installed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove old version\nrm -rf frameworks/workflow-mgmt\n\n# Install correct version\nai-dev-kit install workflow-mgmt@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uninstalling-frameworks",
      children: "Uninstalling frameworks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you need to remove a framework:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Using Uninstall Script (Recommended):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Uninstall with auto-detected backend\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py <framework-name>\n\n# Recovery mode (for failed installations)\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py <framework-name> --recover\n\n# Rollback mode (for breaking changes)\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py <framework-name> --rollback\n\n# Dry run (preview changes)\npython3 packages/frameworks/workflow\\ mgt/scripts/uninstall_package.py <framework-name> --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safety Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates backup before removal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validates dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confirmation prompts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifies cleanup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide#uninstall-issues",
        children: "Troubleshooting Guide"
      }), " for detailed uninstall documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After installation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read the framework README:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/<framework-name>/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow the implementation guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "frameworks/<framework-name>/IMPLEMENTATION_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configure for your project:"
        }), " Update paths, version schema, and settings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Set up ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), " for RW trigger (Workflow Management Framework only):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If you installed the Workflow Management framework, add the RW trigger section to your ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-060:"
            }), " After setup, invoke RW with a task id in the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "same"
            }), " message (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E5S01T01"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E5:S01:T01"
            }), "); not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            }), " alone"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Location:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Instructions:"
            }), " Copy the section from that file into your project's ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative:"
            }), " Use the RW installer script which can generate it automatically:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "python frameworks/workflow-mgmt/scripts/install_release_workflow.py\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Note:"
            }), " Without the ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " section, the RW trigger is not active in Cursor"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test the framework:"
        }), " Run validation scripts and test workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Set up update notifications:"
        }), " Configure automatic update checking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-usage-guide",
        children: "Usage Guide"
      }), " for detailed usage instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/framework-dependency-architecture.md",
          children: "Framework Dependency Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/framework-update-cli-design.md",
          children: "CLI Tool Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-update-guide",
          children: "Update Guide"
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