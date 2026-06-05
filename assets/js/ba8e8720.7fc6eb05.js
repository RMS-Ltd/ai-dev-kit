"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["58993"], {
96342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_version_tagging_strategy_md_ba8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-version-tagging-strategy-md-ba8.json
var site_docs_architecture_standards_and_adrs_framework_version_tagging_strategy_md_ba8_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-version-tagging-strategy","title":"Framework Version Tagging Strategy","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-version-tagging-strategy.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-version-tagging-strategy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-version-tagging-strategy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-version-tagging-strategy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Update Procedures","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-update-procedures"},"next":{"title":"Framework Versioning Strategy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-versioning-strategy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-version-tagging-strategy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Version Tagging Strategy';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Tag Naming Conventions",
  "id": "1-tag-naming-conventions",
  "level": 2
}, {
  "value": "1.1 Project Tags",
  "id": "11-project-tags",
  "level": 3
}, {
  "value": "1.2 Framework Tags",
  "id": "12-framework-tags",
  "level": 3
}, {
  "value": "1.3 Monorepo Tags",
  "id": "13-monorepo-tags",
  "level": 3
}, {
  "value": "2. Tag Message Format",
  "id": "2-tag-message-format",
  "level": 2
}, {
  "value": "2.1 Project Tag Messages",
  "id": "21-project-tag-messages",
  "level": 3
}, {
  "value": "2.2 Framework Tag Messages",
  "id": "22-framework-tag-messages",
  "level": 3
}, {
  "value": "2.3 Monorepo Tag Messages",
  "id": "23-monorepo-tag-messages",
  "level": 3
}, {
  "value": "3. Tagging Workflow",
  "id": "3-tagging-workflow",
  "level": 2
}, {
  "value": "3.1 Automatic Tagging (Release Workflow)",
  "id": "31-automatic-tagging-release-workflow",
  "level": 3
}, {
  "value": "3.2 Manual Tagging",
  "id": "32-manual-tagging",
  "level": 3
}, {
  "value": "3.3 Tag Validation",
  "id": "33-tag-validation",
  "level": 3
}, {
  "value": "4. Tag Distribution",
  "id": "4-tag-distribution",
  "level": 2
}, {
  "value": "4.1 Git Submodule Distribution",
  "id": "41-git-submodule-distribution",
  "level": 3
}, {
  "value": "4.2 Git Subtree Distribution",
  "id": "42-git-subtree-distribution",
  "level": 3
}, {
  "value": "4.3 Package Manager Distribution",
  "id": "43-package-manager-distribution",
  "level": 3
}, {
  "value": "4.4 GitHub Releases Distribution",
  "id": "44-github-releases-distribution",
  "level": 3
}, {
  "value": "5. Tag Management",
  "id": "5-tag-management",
  "level": 2
}, {
  "value": "5.1 Tag Lifecycle",
  "id": "51-tag-lifecycle",
  "level": 3
}, {
  "value": "5.2 Tag Organization",
  "id": "52-tag-organization",
  "level": 3
}, {
  "value": "5.3 Tag Maintenance",
  "id": "53-tag-maintenance",
  "level": 3
}, {
  "value": "6. Tag Best Practices",
  "id": "6-tag-best-practices",
  "level": 2
}, {
  "value": "6.1 Tag Creation",
  "id": "61-tag-creation",
  "level": 3
}, {
  "value": "6.2 Tag Messages",
  "id": "62-tag-messages",
  "level": 3
}, {
  "value": "6.3 Tag Distribution",
  "id": "63-tag-distribution",
  "level": 3
}, {
  "value": "7. Tag Examples",
  "id": "7-tag-examples",
  "level": 2
}, {
  "value": "7.1 Project Tag Example",
  "id": "71-project-tag-example",
  "level": 3
}, {
  "value": "7.2 Framework Tag Example",
  "id": "72-framework-tag-example",
  "level": 3
}, {
  "value": "7.3 Monorepo Tag Example",
  "id": "73-monorepo-tag-example",
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
  "value": "9.2 Tag Formats",
  "id": "92-tag-formats",
  "level": 3
}, {
  "value": "9.3 Tagging Workflow",
  "id": "93-tagging-workflow",
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
        id: "framework-version-tagging-strategy",
        children: "Framework Version Tagging Strategy"
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
      }), " Story 1 - Framework Version Management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S01", ":T05", " - Create framework version tagging strategy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Versioning Strategy, Framework Release Process, Framework Compatibility Tracking"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive Git tagging strategy"
      }), " for AI Dev Kit framework releases. The strategy establishes tag naming conventions, tag message formats, tagging workflows, and distribution mechanisms to enable precise version pinning, dependency management, and framework distribution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Tagging:"
        }), " Project tags (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v{version}"
        }), ") and framework tags (", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-v{version}"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent Naming:"
        }), " Standardized tag format across all frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rich Metadata:"
        }), " Tag messages include framework name, version, and release summary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution Support:"
        }), " Tags enable Git submodule, subtree, and package manager distribution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability:"
        }), " Tags link framework versions to project versions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-tag-naming-conventions",
      children: "1. Tag Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-project-tags",
      children: "1.1 Project Tags"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v{version}"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Schema:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.1.1+1"
        }), " - Project release for Epic 6, Story 1, Task 1, Build 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.1.2+1"
        }), " - Project release for Epic 6, Story 1, Task 2, Build 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.1.3+1"
        }), " - Project release for Epic 6, Story 1, Task 3, Build 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag project releases (includes all framework changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference point for project version history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in project changelog and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created automatically during RW Step 12"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tagged on the commit that includes all release changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pushed to remote repository"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-framework-tags",
      children: "1.2 Framework Tags"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{framework-name}-v{version}"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Schema:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), " (SemVer)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Name Normalization:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Spaces replaced with hyphens: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgt"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Special characters removed or replaced"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lowercase for consistency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hyphens for word separation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0"
        }), " - Kanban framework v2.1.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgt-v2.2.0"
        }), " - Workflow Management framework v2.2.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "numbering-versioning-v2.0.0"
        }), " - Numbering & Versioning framework v2.0.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "doc-lifecycle-v1.0.0"
        }), " - Document Lifecycle framework v1.0.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "debug-path-v1.0.0"
        }), " - Debug Path framework v1.0.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag individual framework releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable precise version pinning for dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support Git submodule and subtree distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable package manager distribution (when published)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created during framework release (RW Step 12.5 or manual)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tagged on the commit that includes framework changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pushed to remote repository"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-monorepo-tags",
      children: "1.3 Monorepo Tags"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit-v{version}"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Schema:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), " (SemVer)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-v2.0.0"
        }), " - Complete ai-dev-kit monorepo release v2.0.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-v2.1.0"
        }), " - Complete ai-dev-kit monorepo release v2.1.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag complete monorepo releases (all frameworks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference point for monorepo version history"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used for complete framework suite distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created manually for major monorepo releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tagged on the commit that includes all framework changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pushed to remote repository"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-tag-message-format",
      children: "2. Tag Message Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-project-tag-messages",
      children: "2.1 Project Tag Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release v{version}: {summary}\n\nEpic: {epic} | Story: {story} | Task: {task}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release v0.6.1.3+1: Framework compatibility tracking system\n\nEpic: 6 | Story: 1 | Task: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release version (project version)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release summary (brief description)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic, Story, Task numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework versions included in release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes notice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide reference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-framework-tag-messages",
      children: "2.2 Framework Tag Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release {framework-name} v{version}: {summary}\n\nPackage Version: {version}\nProject Version: {project-version}\nBump Type: {MAJOR|MINOR|PATCH}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release kanban v2.1.0: Added semantic matching capabilities\n\nPackage Version: 2.1.0\nProject Version: 0.4.8.6+1\nBump Type: MINOR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework name and version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release summary (brief description)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package version (SemVer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project version (RC.EPIC.STORY.TASK+BUILD)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bump type (MAJOR/MINOR/PATCH)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes notice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-monorepo-tag-messages",
      children: "2.3 Monorepo Tag Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release ai-dev-kit v{version}: {summary}\n\nFrameworks:\n- {framework-1}: v{version-1}\n- {framework-2}: v{version-2}\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release ai-dev-kit v2.0.0: Complete framework suite release\n\nFrameworks:\n- kanban: v2.1.0\n- workflow-mgt: v2.2.0\n- numbering-versioning: v2.0.0\n- doc-lifecycle: v1.0.0\n- debug-path: v1.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monorepo name and version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List of frameworks and versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes notice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility matrix updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-tagging-workflow",
      children: "3. Tagging Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-automatic-tagging-release-workflow",
      children: "3.1 Automatic Tagging (Release Workflow)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Tags:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created automatically during RW Step 12"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tagged on the commit that includes all release changes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v{version}"
        }), " (project version)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Message: Includes epic, story, task information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Tags:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created during framework release (if framework changed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tagged on the commit that includes framework changes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-v{version}"
        }), " (framework version)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Message: Includes package version, project version, bump type"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RW Step 11: Commit Changes\nRW Step 12: Create Git Tag (project tag)\nRW Step 12.5: Create Framework Tags (if frameworks changed) ← Optional\nRW Step 13: Push to Remote (project tag + framework tags)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-manual-tagging",
      children: "3.2 Manual Tagging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Use:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework releases outside of RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retroactive tagging for historical releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monorepo releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Special releases (hotfixes, emergency releases)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Tagging Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify framework version from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify project version from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create annotated tag with appropriate message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push tag to remote repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tag created successfully"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Tagging Commands:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create framework tag\ngit tag -a kanban-v2.1.0 -m \"Release kanban v2.1.0: Added semantic matching\n\nPackage Version: 2.1.0\nProject Version: 0.4.8.6+1\nBump Type: MINOR\"\n\n# Push tag\ngit push origin kanban-v2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-tag-validation",
      children: "3.3 Tag Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag format matches naming convention"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag message includes required fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag points to correct commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag version matches framework version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag doesn't already exist"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual validation: Review tag format and message"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated validation: Tag validation scripts (future)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Git validation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -l"
        }), " to list tags"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-tag-distribution",
      children: "4. Tag Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-git-submodule-distribution",
      children: "4.1 Git Submodule Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects checkout specific framework tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables precise version pinning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add framework as submodule\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git frameworks/ai-dev-kit\n\n# Checkout specific framework tag\ncd frameworks/ai-dev-kit\ngit checkout kanban-v2.1.0\ncd ../..\ngit add frameworks/ai-dev-kit\ngit commit -m \"Pin kanban framework to v2.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework tags must exist for version pinning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags must be pushed to remote repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags must point to stable commits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-git-subtree-distribution",
      children: "4.2 Git Subtree Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects merge specific framework tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework files become part of main repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports dependency management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add framework as subtree\ngit subtree add --prefix=frameworks/kanban \\\n    https://github.com/RMS-Ltd/ai-dev-kit.git \\\n    kanban-v2.1.0 \\\n    --squash\n\n# Update framework\ngit subtree pull --prefix=frameworks/kanban \\\n    https://github.com/RMS-Ltd/ai-dev-kit.git \\\n    kanban-v2.2.0 \\\n    --squash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework tags must exist for version pinning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags must be pushed to remote repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags must point to stable commits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-package-manager-distribution",
      children: "4.3 Package Manager Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package managers use tags for version resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags enable semantic versioning for packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports npm, pip, pub.dev distribution (when published)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (npm):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"dependencies\": {\n    \"@ai-dev-kit/kanban\": \"2.1.0\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework tags must match package versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags must follow SemVer format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags must be pushed to remote repository"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-github-releases-distribution",
      children: "4.4 GitHub Releases Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Releases use tags for release identification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags enable release distribution via GitHub"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports tar.gz package distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tag: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub Release: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban v2.1.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release Assets: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0.tar.gz"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0.sha256"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework tags must exist for releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags must be pushed to remote repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags must point to stable commits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tag-management",
      children: "5. Tag Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-tag-lifecycle",
      children: "5.1 Tag Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Creation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Created during framework release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tagged on stable commits only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never tag on work-in-progress commits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags are immutable (never updated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New versions get new tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Old tags remain for historical reference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Deletion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tags should not be deleted (immutable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If tag created incorrectly, create new tag with corrected version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document tag corrections in changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-tag-organization",
      children: "5.2 Tag Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Categories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Tags:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v{version}"
        }), " (project releases)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Tags:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-v{version}"
        }), " (framework releases)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monorepo Tags:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-v{version}"
        }), " (monorepo releases)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Filtering:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List all project tags\ngit tag -l \"v*\"\n\n# List all framework tags\ngit tag -l \"*-v*\"\n\n# List tags for specific framework\ngit tag -l \"kanban-v*\"\n\n# List monorepo tags\ngit tag -l \"ai-dev-kit-v*\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-tag-maintenance",
      children: "5.3 Tag Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular Maintenance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tags exist for all framework releases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tag messages are complete and accurate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tags point to correct commits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean up any incorrectly created tags (create new tags)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Verification:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify tag exists\ngit tag -l \"kanban-v2.1.0\"\n\n# Verify tag message\ngit tag -l -n1 \"kanban-v2.1.0\"\n\n# Verify tag commit\ngit show kanban-v2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-tag-best-practices",
      children: "6. Tag Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-tag-creation",
      children: "6.1 Tag Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always create annotated tags (not lightweight tags)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include comprehensive tag messages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tag format before pushing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test tag checkout/merge before distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Annotated Tags:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Good: Annotated tag with message\ngit tag -a kanban-v2.1.0 -m \"Release kanban v2.1.0: ...\"\n\n# Avoid: Lightweight tag (no message)\ngit tag kanban-v2.1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-tag-messages",
      children: "6.2 Tag Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include all required fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use consistent message format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference project version for traceability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include breaking changes notice if applicable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message Quality:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear and descriptive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes version information"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes release summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Includes traceability information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-tag-distribution",
      children: "6.3 Tag Distribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push tags immediately after creation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify tags are accessible remotely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document tag usage in framework documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide examples for tag-based distribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distribution Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include tag examples in installation guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document tag-based distribution methods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide tag filtering examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document tag verification procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-tag-examples",
      children: "7. Tag Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-project-tag-example",
      children: "7.1 Project Tag Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.6.1.3+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release v0.6.1.3+1: Framework compatibility tracking system\n\nEpic: 6 | Story: 1 | Task: 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference point for project release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in project changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links to framework releases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-framework-tag-example",
      children: "7.2 Framework Tag Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-v2.1.0"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release kanban v2.1.0: Added semantic matching capabilities\n\nPackage Version: 2.1.0\nProject Version: 0.4.8.6+1\nBump Type: MINOR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Git submodule: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git checkout kanban-v2.1.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Git subtree: Merge ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0"
        }), " tag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package manager: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@ai-dev-kit/kanban@2.1.0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub Release: Release ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-monorepo-tag-example",
      children: "7.3 Monorepo Tag Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit-v2.0.0"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Release ai-dev-kit v2.0.0: Complete framework suite release\n\nFrameworks:\n- kanban: v2.1.0\n- workflow-mgt: v2.2.0\n- numbering-versioning: v2.0.0\n- doc-lifecycle: v1.0.0\n- debug-path: v1.0.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference point for complete monorepo release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used for complete framework suite distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Links to all framework releases"
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
            children: "Framework Versioning Strategy:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-versioning-strategy.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework versioning schema and conventions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version bump criteria and decision-making"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Release Process:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-release-process.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete framework release workflow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tagging integration with RW"
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
            children: "Framework compatibility matrix"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version compatibility requirements"
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
            children: "Framework Dependency Architecture:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-dependency-architecture.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework installation and dependency management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tag-based distribution methods"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Maintenance and Release:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "package-maintenance-and-release.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete package maintenance guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PVW execution and integration"
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
          children: "Dual Tagging:"
        }), " Project tags and framework tags tracked independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent Naming:"
        }), " Standardized tag format across all frameworks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rich Metadata:"
        }), " Tag messages include comprehensive release information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution Support:"
        }), " Tags enable multiple distribution methods"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability:"
        }), " Tags link framework versions to project versions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-tag-formats",
      children: "9.2 Tag Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Tags:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v{version}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.1.3+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version Schema: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Tags:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-v{version}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version Schema: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " (SemVer)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monorepo Tags:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-v{version}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-v2.0.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version Schema: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " (SemVer)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-tagging-workflow",
      children: "9.3 Tagging Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Tagging:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project tags: Created during RW Step 12"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework tags: Created during framework release (RW Step 12.5 or manual)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Tagging:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For framework releases outside of RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For retroactive tagging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For monorepo releases"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Task:"
      }), " E6:S01", ":T05", " - Create framework version tagging strategy"]
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