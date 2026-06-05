"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["95868"], {
23889(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_dependency_architecture_md_00c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-dependency-architecture-md-00c.json
var site_docs_architecture_standards_and_adrs_framework_dependency_architecture_md_00c_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-dependency-architecture","title":"Framework Dependency Architecture","description":"Status: Proposed","source":"@site/../docs/architecture/standards-and-adrs/framework-dependency-architecture.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-dependency-architecture","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-dependency-architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-dependency-architecture.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-06T13:50:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Compatibility Tracking","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-compatibility-tracking"},"next":{"title":"Framework Health Dashboard Guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-health-dashboard-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-dependency-architecture.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-06T13:50:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Dependency Architecture';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Current State",
  "id": "current-state",
  "level": 2
}, {
  "value": "Copy-Paste Model",
  "id": "copy-paste-model",
  "level": 3
}, {
  "value": "Target State",
  "id": "target-state",
  "level": 2
}, {
  "value": "Dependency-Based Model",
  "id": "dependency-based-model",
  "level": 3
}, {
  "value": "Architecture Overview",
  "id": "architecture-overview",
  "level": 2
}, {
  "value": "Hybrid Dependency Strategy",
  "id": "hybrid-dependency-strategy",
  "level": 3
}, {
  "value": "Phase 1: Git Submodules (Immediate)",
  "id": "phase-1-git-submodules-immediate",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 3
}, {
  "value": "Installation",
  "id": "installation",
  "level": 3
}, {
  "value": "Updates",
  "id": "updates",
  "level": 3
}, {
  "value": "Automated Update Script",
  "id": "automated-update-script",
  "level": 3
}, {
  "value": "Phase 2: CLI Tool (Short-term)",
  "id": "phase-2-cli-tool-short-term",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture-1",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 3
}, {
  "value": "Phase 3: Package Managers (Future)",
  "id": "phase-3-package-managers-future",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture-2",
  "level": 3
}, {
  "value": "Framework Versioning Strategy",
  "id": "framework-versioning-strategy",
  "level": 2
}, {
  "value": "Semantic Versioning",
  "id": "semantic-versioning",
  "level": 3
}, {
  "value": "Git Tagging",
  "id": "git-tagging",
  "level": 3
}, {
  "value": "Version File",
  "id": "version-file",
  "level": 3
}, {
  "value": "Migration Path",
  "id": "migration-path",
  "level": 2
}, {
  "value": "From Copy-Paste to Dependencies",
  "id": "from-copy-paste-to-dependencies",
  "level": 3
}, {
  "value": "Compatibility and Backward Compatibility",
  "id": "compatibility-and-backward-compatibility",
  "level": 2
}, {
  "value": "Compatibility Policy",
  "id": "compatibility-policy",
  "level": 3
}, {
  "value": "Migration Guides",
  "id": "migration-guides",
  "level": 3
}, {
  "value": "Implementation Roadmap",
  "id": "implementation-roadmap",
  "level": 2
}, {
  "value": "Phase 1: Git Submodules (Epic 6, Story 1)",
  "id": "phase-1-git-submodules-epic-6-story-1",
  "level": 3
}, {
  "value": "Phase 2: CLI Tool (Epic 6, Story 2)",
  "id": "phase-2-cli-tool-epic-6-story-2",
  "level": 3
}, {
  "value": "Phase 3: Package Managers (Future)",
  "id": "phase-3-package-managers-future-1",
  "level": 3
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
        id: "framework-dependency-architecture",
        children: "Framework Dependency Architecture"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Proposed", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 6 - Framework Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 1 - Framework Version Management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S01", ":T04", " - Design framework dependency architecture"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the architecture for transforming AI Dev Kit frameworks from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "copy-paste packages"
      }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reusable, auto-updating dependencies"
      }), ". The architecture supports multiple dependency management strategies, enabling frameworks to be installed and updated automatically across projects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vision:"
      }), " When a framework is updated in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), ", projects using that framework can automatically receive updates through their chosen dependency management mechanism."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-state",
      children: "Current State"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copy-paste-model",
      children: "Copy-Paste Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frameworks are copied manually into projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates require manual copying of new versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automatic update mechanism"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version tracking is manual"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ No automatic updates when frameworks improve"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Manual version tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Difficult to maintain consistency across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ No dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Current: Manual copy\ncp -r packages/frameworks/numbering\\ \\&\\ versioning /path/to/project/\n# Updates require manual re-copying\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "target-state",
      children: "Target State"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-based-model",
      children: "Dependency-Based Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Target Approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frameworks are installed as dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates are automatic or semi-automatic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version tracking is automated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple dependency backends supported"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Automatic updates when frameworks improve"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Automated version tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Consistent framework versions across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Standard dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Target: Dependency-based\nai-dev-kit install numbering-versioning@2.0.0\nai-dev-kit update numbering-versioning  # Auto-updates to latest compatible version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "architecture-overview",
      children: "Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hybrid-dependency-strategy",
      children: "Hybrid Dependency Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The architecture supports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "three dependency management strategies"
      }), ", allowing projects to choose based on their needs:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Git Submodules"
          }), " (Phase 1 - Immediate)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Built into Git"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Versioned via Git tags"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manual update commands"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CLI Tool"
          }), " (Phase 2 - Short-term)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit"
            }), " CLI for framework management"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Supports multiple backends"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Automated updates"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Managers"
          }), " (Phase 3 - Future)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "npm/pip/pypi packages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Standard dependency management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Semantic versioning"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-1-git-submodules-immediate",
      children: "Phase 1: Git Submodules (Immediate)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Use Git submodules to link frameworks as dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "project/\n├── .gitmodules\n├── frameworks/\n│   ├── ai-dev-kit/          # Git submodule\n│   │   └── packages/frameworks/\n│   │       ├── numbering-versioning/\n│   │       ├── workflow mgt/\n│   │       └── kanban/\n│   └── .git/                   # Submodule metadata\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add framework as submodule\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git frameworks/ai-dev-kit\ncd frameworks/ai-dev-kit\ngit checkout v2.0.0  # Pin to specific version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updates",
      children: "Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update to latest version\ncd frameworks/ai-dev-kit\ngit fetch\ngit checkout v2.1.0  # Update to new version\ncd ../..\ngit add frameworks/ai-dev-kit\ngit commit -m \"Update ai-dev-kit to v2.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "automated-update-script",
      children: "Automated Update Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# update-frameworks.sh\ncd frameworks/ai-dev-kit\ngit fetch\nLATEST=$(git tag -l \"v*\" | sort -V | tail -1)\ngit checkout $LATEST\ncd ../..\ngit add frameworks/ai-dev-kit\ngit commit -m \"Auto-update ai-dev-kit to $LATEST\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Built into Git (no external tools)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Versioned via Git tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Works with any Git repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No package registry needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Requires Git knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Manual update commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Merge conflicts possible"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-2-cli-tool-short-term",
      children: "Phase 2: CLI Tool (Short-term)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-1",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Build ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " CLI tool that manages frameworks across multiple backends."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install framework\nai-dev-kit install numbering-versioning@2.0.0\n\n# Update framework\nai-dev-kit update numbering-versioning\n\n# Check for updates\nai-dev-kit check\n\n# Show status\nai-dev-kit status\n\n# List available frameworks\nai-dev-kit list\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tool Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit/\n├── cli/\n│   ├── __init__.py\n│   ├── commands/\n│   │   ├── install.py\n│   │   ├── update.py\n│   │   ├── check.py\n│   │   └── status.py\n│   ├── backends/\n│   │   ├── git_submodule.py\n│   │   ├── git_subtree.py\n│   │   └── package_manager.py\n│   └── config.py\n├── setup.py\n└── README.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backend Abstraction:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI tool abstracts dependency backend"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports Git submodules, subtrees, and package managers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backend chosen based on project configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nframeworks:\n  numbering-versioning:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/ai-dev-kit/packages/frameworks/numbering-versioning\"\n  workflow-mgt:\n    version: \"2.0.0\"\n    backend: \"git-submodule\"\n    path: \"frameworks/ai-dev-kit/packages/frameworks/workflow-mgt\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Unified interface for all dependency types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Automated updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version pinning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Multiple backend support"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Requires CLI tool installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Additional dependency"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "phase-3-package-managers-future",
      children: "Phase 3: Package Managers (Future)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architecture-2",
      children: "Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy:"
      }), " Publish frameworks as packages to npm/pip/pypi."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm Package:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"name\": \"@ai-dev-kit/numbering-versioning\",\n  \"version\": \"2.0.0\",\n  \"description\": \"Numbering and versioning framework\",\n  \"main\": \"index.js\",\n  \"files\": [\n    \"README.md\",\n    \"PACKAGE_OVERVIEW.md\",\n    \"IMPLEMENTATION_GUIDE.md\",\n    \"templates/\",\n    \"policies/\"\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @ai-dev-kit/numbering-versioning@2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Updates:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm update @ai-dev-kit/numbering-versioning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Standard dependency management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Semantic versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Auto-update via package managers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version pinning in package.json"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Requires package registry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Frameworks are mostly docs (not code)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Need to package appropriately"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "framework-versioning-strategy",
      children: "Framework Versioning Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semantic-versioning",
      children: "Semantic Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Frameworks use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic Versioning (SemVer)"
      }), " for releases:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " (2.0.0): Breaking changes, incompatible API changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " (2.1.0): New features, backward compatible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), " (2.1.1): Bug fixes, backward compatible"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-tagging",
      children: "Git Tagging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Frameworks are tagged in Git with version numbers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Tag framework release\ngit tag -a numbering-versioning-v2.0.0 -m \"Release numbering-versioning v2.0.0\"\ngit push origin numbering-versioning-v2.0.0\n\n# Tag all frameworks in monorepo\ngit tag -a ai-dev-kit-v2.0.0 -m \"Release ai-dev-kit v2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file",
      children: "Version File"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each framework includes a version file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# packages/frameworks/numbering-versioning/VERSION\nFRAMEWORK_NAME = \"numbering-versioning\"\nFRAMEWORK_VERSION = \"2.0.0\"\nFRAMEWORK_SEMVER = \"2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-path",
      children: "Migration Path"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "from-copy-paste-to-dependencies",
      children: "From Copy-Paste to Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Install as Dependency"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Using Git submodule\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git frameworks/ai-dev-kit\ncd frameworks/ai-dev-kit\ngit checkout numbering-versioning-v2.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Update Project References"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update paths in project configs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test framework integration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Remove Old Copy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Remove old copy-paste version\nrm -rf packages/frameworks/numbering\\ \\&\\ versioning\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Update Workflows"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update CI/CD to handle submodules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Train team on new dependency model"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compatibility-and-backward-compatibility",
      children: "Compatibility and Backward Compatibility"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compatibility-policy",
      children: "Compatibility Policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR versions:"
        }), " Breaking changes, require migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR versions:"
        }), " Backward compatible, safe to update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH versions:"
        }), " Bug fixes, always safe to update"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-guides",
      children: "Migration Guides"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each MAJOR version release includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated migration scripts (where possible)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-roadmap",
      children: "Implementation Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-git-submodules-epic-6-story-1",
      children: "Phase 1: Git Submodules (Epic 6, Story 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Design architecture (this document)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Implement Git submodule support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create update scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document Git submodule workflow"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-cli-tool-epic-6-story-2",
      children: "Phase 2: CLI Tool (Epic 6, Story 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Design CLI tool architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Implement CLI tool"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Support Git submodule backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Support Git subtree backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create CLI documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-package-managers-future-1",
      children: "Phase 3: Package Managers (Future)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Design package structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Publish to npm/pip"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create package documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Support package manager backend in CLI"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 6:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/epic-06.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/story-02-versioning-cookbook-and-examples.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Submodules:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://git-scm.com/book/en/v2/Git-Tools-Submodules",
          children: "https://git-scm.com/book/en/v2/Git-Tools-Submodules"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Versioning:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://semver.org/",
          children: "https://semver.org/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-record",
      children: "Decision Record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Adopt hybrid dependency architecture supporting Git submodules, CLI tool, and package managers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides flexibility for different project needs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables gradual migration from copy-paste model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports multiple dependency backends"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allows projects to choose appropriate strategy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives Considered:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package managers only: Too restrictive, requires registry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git submodules only: Too manual, lacks automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI tool only: Too complex for simple use cases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved for implementation in Epic 6."]
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