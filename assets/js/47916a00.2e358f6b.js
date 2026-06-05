"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["81718"], {
96421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_package_maintenance_and_release_md_479_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-package-maintenance-and-release-md-479.json
var site_docs_architecture_standards_and_adrs_package_maintenance_and_release_md_479_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/package-maintenance-and-release","title":"Package Maintenance and Release","description":"Status: COMPLETE","source":"@site/../docs/architecture/standards-and-adrs/package-maintenance-and-release.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/package-maintenance-and-release","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-maintenance-and-release","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/package-maintenance-and-release.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Package Hash Verification Specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-hash-verification-spec"},"next":{"title":"Package Management Design Specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-management-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/package-maintenance-and-release.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Package Maintenance and Release';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Package Structure",
  "id": "1-package-structure",
  "level": 2
}, {
  "value": "1.1 Package Organization",
  "id": "11-package-organization",
  "level": 3
}, {
  "value": "1.2 Package Contents",
  "id": "12-package-contents",
  "level": 3
}, {
  "value": "1.3 Package Version Tracking",
  "id": "13-package-version-tracking",
  "level": 3
}, {
  "value": "2. Package Versioning (SemVer)",
  "id": "2-package-versioning-semver",
  "level": 2
}, {
  "value": "2.1 Semantic Versioning Schema",
  "id": "21-semantic-versioning-schema",
  "level": 3
}, {
  "value": "2.2 Version Bump Criteria (Guidance)",
  "id": "22-version-bump-criteria-guidance",
  "level": 3
}, {
  "value": "MAJOR Version Bump (X.0.0)",
  "id": "major-version-bump-x00",
  "level": 4
}, {
  "value": "MINOR Version Bump (x.Y.0)",
  "id": "minor-version-bump-xy0",
  "level": 4
}, {
  "value": "PATCH Version Bump (x.y.Z)",
  "id": "patch-version-bump-xyz",
  "level": 4
}, {
  "value": "2.3 Agent Decision Process",
  "id": "23-agent-decision-process",
  "level": 3
}, {
  "value": "3. Package Version Workflow (PVW)",
  "id": "3-package-version-workflow-pvw",
  "level": 2
}, {
  "value": "3.1 Overview",
  "id": "31-overview",
  "level": 3
}, {
  "value": "3.2 PVW Steps",
  "id": "32-pvw-steps",
  "level": 3
}, {
  "value": "Step 1: Detect Changed Packages",
  "id": "step-1-detect-changed-packages",
  "level": 4
}, {
  "value": "Step 2: Analyze Package Changes",
  "id": "step-2-analyze-package-changes",
  "level": 4
}, {
  "value": "Step 3: Determine Version Bumps",
  "id": "step-3-determine-version-bumps",
  "level": 4
}, {
  "value": "Step 4: Execute Version Updates",
  "id": "step-4-execute-version-updates",
  "level": 4
}, {
  "value": "Step 5: Validate Updates",
  "id": "step-5-validate-updates",
  "level": 4
}, {
  "value": "Step 6: Document &amp; Proceed",
  "id": "step-6-document--proceed",
  "level": 4
}, {
  "value": "3.3 PVW Integration with RW",
  "id": "33-pvw-integration-with-rw",
  "level": 3
}, {
  "value": "3.4 TODO Tracking (Mandatory)",
  "id": "34-todo-tracking-mandatory",
  "level": 3
}, {
  "value": "4. Package Changelogs",
  "id": "4-package-changelogs",
  "level": 2
}, {
  "value": "4.1 Changelog Format",
  "id": "41-changelog-format",
  "level": 3
}, {
  "value": "4.2 Changelog Maintenance",
  "id": "42-changelog-maintenance",
  "level": 3
}, {
  "value": "5. Current Package Status",
  "id": "5-current-package-status",
  "level": 2
}, {
  "value": "5.1 Package Versions",
  "id": "51-package-versions",
  "level": 3
}, {
  "value": "5.2 Package Dependencies",
  "id": "52-package-dependencies",
  "level": 3
}, {
  "value": "6. Package Update Process",
  "id": "6-package-update-process",
  "level": 2
}, {
  "value": "6.1 When Packages Are Updated",
  "id": "61-when-packages-are-updated",
  "level": 3
}, {
  "value": "6.2 Update Workflow",
  "id": "62-update-workflow",
  "level": 3
}, {
  "value": "6.3 Update Documentation",
  "id": "63-update-documentation",
  "level": 3
}, {
  "value": "7. Package Release Best Practices",
  "id": "7-package-release-best-practices",
  "level": 2
}, {
  "value": "7.1 Version Bump Guidelines",
  "id": "71-version-bump-guidelines",
  "level": 3
}, {
  "value": "7.2 Changelog Best Practices",
  "id": "72-changelog-best-practices",
  "level": 3
}, {
  "value": "7.3 Package Maintenance",
  "id": "73-package-maintenance",
  "level": 3
}, {
  "value": "8. Integration with Release Workflow",
  "id": "8-integration-with-release-workflow",
  "level": 2
}, {
  "value": "8.1 RW Step 2.5: Package Version Workflow",
  "id": "81-rw-step-25-package-version-workflow",
  "level": 3
}, {
  "value": "8.2 Package Version Info in Changelog",
  "id": "82-package-version-info-in-changelog",
  "level": 3
}, {
  "value": "9. Troubleshooting",
  "id": "9-troubleshooting",
  "level": 2
}, {
  "value": "9.1 No Packages Changed",
  "id": "91-no-packages-changed",
  "level": 3
}, {
  "value": "9.2 Validation Failure",
  "id": "92-validation-failure",
  "level": 3
}, {
  "value": "9.3 Ambiguous Bump Type",
  "id": "93-ambiguous-bump-type",
  "level": 3
}, {
  "value": "9.4 Agentic Drift",
  "id": "94-agentic-drift",
  "level": 3
}, {
  "value": "10. Related Documents",
  "id": "10-related-documents",
  "level": 2
}, {
  "value": "11. Summary",
  "id": "11-summary",
  "level": 2
}, {
  "value": "Key Principles",
  "id": "key-principles",
  "level": 3
}, {
  "value": "Package Maintenance Workflow",
  "id": "package-maintenance-workflow",
  "level": 3
}, {
  "value": "Package Version Tracking",
  "id": "package-version-tracking",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "package-maintenance-and-release",
        children: "Package Maintenance and Release"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive guide to package maintenance, versioning, and release processes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides a complete overview of how packages are maintained and released in the AI Dev Kit (ADK) framework. Packages use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic Versioning (SemVer)"
      }), " and are versioned through an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "intelligent agent-driven workflow"
      }), " called the Package Version Workflow (PVW), which runs as part of the Release Workflow (RW)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Versioning:"
        }), " Project version (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ") and package versions (SemVer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), ") are tracked independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-Driven:"
        }), " PVW uses intelligent analysis, not mechanical rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Detection:"
        }), " PVW automatically detects changed packages and determines appropriate version bumps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrated Workflow:"
        }), " PVW runs as RW Step 2.5 (after project version bump, before changelog creation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-package-structure",
      children: "1. Package Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-package-organization",
      children: "1.1 Package Organization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Packages:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt/"
        }), " - Release Workflow implementation package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/"
        }), " - Kanban System Implementation Package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "numbering-versioning/"
        }), " - Numbering & Versioning Policy Package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "doc-lifecycle/"
        }), " - Document Lifecycle Management Package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "debug-path/"
        }), " - Debug Path Methodology Package"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-package-contents",
      children: "1.2 Package Contents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each package includes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " - Package overview, version, last updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "PACKAGE_OVERVIEW.md"
        }), " - Package structure and usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " - Package version history (SemVer format)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Files:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "IMPLEMENTATION_GUIDE.md"
        }), " - Step-by-step implementation guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "integration/"
        }), " - Integration guides with other packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "templates/"
        }), " - Package-specific templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/"
        }), " - Package-specific scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "policies/"
        }), " - Package-specific policies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-package-version-tracking",
      children: "1.3 Package Version Tracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "README.md"
      }), " (frontmatter or header)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Version:** 2.1.0\n**Last Updated:** 2025-12-10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Kanban Package):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "package:\n  name: \"Kanban System Implementation Package\"\n  version: \"2.1.0\"\n  last_updated: \"2025-12-10\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-package-versioning-semver",
      children: "2. Package Versioning (SemVer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-semantic-versioning-schema",
      children: "2.1 Semantic Versioning Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR (X.0.0):"
        }), " Breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR (x.Y.0):"
        }), " New features (backward compatible)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH (x.y.Z):"
        }), " Bug fixes, clarifications"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-version-bump-criteria-guidance",
      children: "2.2 Version Bump Criteria (Guidance)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "These criteria are guidance, not hard rules."
      }), " Agents use them to inform intelligent decisions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "major-version-bump-x00",
      children: "MAJOR Version Bump (X.0.0)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing or renaming core files/directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing required file locations or names"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing templates or core components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing package directory structure significantly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking policy changes (removing requirements, changing mandatory vs. optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking API changes (for script packages)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban package: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3.0.0"
        }), " (removed deprecated template, changed epic structure)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "minor-version-bump-xy0",
      children: "MINOR Version Bump (x.Y.0)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features, enhancements, additions (backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New templates, guides, or documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New integration capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Significant enhancements to existing features"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow Management: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.1.0"
        }), " (added Package Version Workflow)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.1.0"
        }), " (added semantic matching, canonical adoption mode)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "patch-version-bump-xyz",
      children: "PATCH Version Bump (x.y.Z)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes, corrections, clarifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixed broken links or typos"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small improvements that don't add new functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow Management: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.1.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.1.1"
        }), " (fixed branch validation for maintenance branches)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-agent-decision-process",
      children: "2.3 Agent Decision Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Analysis Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ANALYZE"
        }), " - Review actual changes (what files changed? what was added/removed?)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DETERMINE"
        }), " - Assess impact (breaking? new feature? bug fix?)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DECIDE"
        }), " - Choose bump type using criteria as guidance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DOCUMENT"
        }), " - Record reasoning and justification"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " Agents make intelligent decisions based on context, not mechanical rule application."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-package-version-workflow-pvw",
      children: "3. Package Version Workflow (PVW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-overview",
      children: "3.1 Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow:"
      }), " Package Version Workflow (PVW)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package_version"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps:"
      }), " 6 steps (all required)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger:"
      }), " RW Step 2.5 (after project version bump, before changelog creation)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution:"
      }), " Agent-driven (intelligent analysis, not deterministic scripts)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-pvw-steps",
      children: "3.2 PVW Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-detect-changed-packages",
      children: "Step 1: Detect Changed Packages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze git diff to identify changed files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map changed files to packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate significance of changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create list of packages needing version bumps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-analyze-package-changes",
      children: "Step 2: Analyze Package Changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read package files and structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze git diff for each package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify changes (added/removed/modified)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assess impact (breaking/new feature/bug fix/clarification)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-3-determine-version-bumps",
      children: "Step 3: Determine Version Bumps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review version bump criteria (as guidance)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze package changes against criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider package-specific context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine bump type (MAJOR/MINOR/PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document reasoning and justification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-4-execute-version-updates",
      children: "Step 4: Execute Version Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update README.md version"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last Updated:**"
        }), " date"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create/update package changelog entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document justification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-5-validate-updates",
      children: "Step 5: Validate Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run validation scripts (format, increment, consistency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify changelog entry exists and is complete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure all locations updated correctly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-6-document--proceed",
      children: "Step 6: Document & Proceed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document PVW execution summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pass package version info to RW Step 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue to RW Step 3 (changelog creation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-pvw-integration-with-rw",
      children: "3.3 PVW Integration with RW"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution Flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RW Step 1: Branch Safety Check\nRW Step 2: Bump Project Version\nRW Step 2.5: Package Version Workflow (PVW) ← Executes here\n  ├─ Step 1: Detect Changed Packages\n  ├─ Step 2: Analyze Package Changes\n  ├─ Step 3: Determine Version Bumps\n  ├─ Step 4: Execute Version Updates\n  ├─ Step 5: Validate Updates\n  └─ Step 6: Document & Proceed\nRW Step 3: Create Detailed Changelog (includes package versions)\nRW Step 4: Update Main Changelog\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW Trigger:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic: Runs as part of RW execution (Step 2.5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual: Can be triggered independently for testing/debugging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW Execution Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project version already bumped (RW Step 2 complete)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git changes available for analysis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package changes detected or specified"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-todo-tracking-mandatory",
      children: "3.4 TODO Tracking (Mandatory)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "REQUIRED:"
      }), " Agents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MUST"
      }), " use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "todo_write"
      }), " to track all 6 PVW steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why TODOs are Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User visibility of real-time progress"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agent organization across sequential steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error recovery (clear visibility into where execution stopped)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status management (automatic status updates)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Agentic drift prevention (checkpoints to ensure all steps completed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Pattern:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "At Workflow Start:"
        }), " Create TODO list with all 6 steps as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pending"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Before Each Step:"
        }), " Mark step as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in_progress"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "After Each Step:"
        }), " Mark step as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "completed"
        }), ", mark next as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in_progress"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On Completion:"
        }), " All steps marked as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "completed"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-package-changelogs",
      children: "4. Package Changelogs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-changelog-format",
      children: "4.1 Changelog Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/{package}/CHANGELOG.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " Keep a Changelog format with SemVer"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Fields:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package Version (SemVer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project Version (RC.EPIC.STORY.TASK+BUILD)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bump Type (MAJOR/MINOR/PATCH)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Justification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changes (Added/Changed/Fixed/Removed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Entry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [2.1.0] - 2025-12-10\n\n**Package Version:** 2.1.0\n**Project Version:** 0.4.8.6+1\n**Bump Type:** MINOR\n\n### Added\n- New integration guide for Kanban package\n- Semantic matching capabilities\n\n### Changed\n- Migration process now supports intelligent semantic matching\n\n**Criteria Reference:** MINOR Version Bump\n- ✅ New feature: Semantic epic matching with similarity scoring\n- ✅ Backward compatible: Existing migration modes still supported\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-changelog-maintenance",
      children: "4.2 Changelog Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When Created:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatically created/updated by PVW Step 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each package version bump generates a new changelog entry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What's Included:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package version and project version cross-reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bump type and justification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailed list of changes (Added/Changed/Fixed/Removed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Criteria reference (why this bump type was chosen)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-current-package-status",
      children: "5. Current Package Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-package-versions",
      children: "5.1 Package Versions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Last Updated"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "workflow mgt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-12-09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-12-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "numbering & versioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-12-02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "doc-lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "debug-path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-package-dependencies",
      children: "5.2 Package Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compatibility Matrix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "kanban"
        }), " requires: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0+, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " v2.0.0+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "workflow mgt"
        }), " requires: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "numbering & versioning"
        }), ": Standalone (no dependencies)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-package-update-process",
      children: "6. Package Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-when-packages-are-updated",
      children: "6.1 When Packages Are Updated"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW runs automatically during RW execution (Step 2.5)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects changed packages via git diff"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determines version bumps intelligently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates versions and changelogs automatically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can trigger PVW independently for testing/debugging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can manually update package versions if needed (not recommended)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-update-workflow",
      children: "6.2 Update Workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Make Changes"
        }), " - Modify package files (templates, scripts, documentation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run RW"
        }), " - Release Workflow automatically triggers PVW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PVW Executes"
        }), " - Detects changes, analyzes, determines bumps, updates versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation"
        }), " - Validation scripts verify updates are correct"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog"
        }), " - Package changelog updated with new version entry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Changelog"
        }), " - Project changelog includes package version info"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-update-documentation",
      children: "6.3 Update Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PACKAGE_UPDATE_SUMMARY.md:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Located in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/PACKAGE_UPDATE_SUMMARY.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documents major package updates and enhancements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides migration guidance for other projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-package-release-best-practices",
      children: "7. Package Release Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-version-bump-guidelines",
      children: "7.1 Version Bump Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Bump MAJOR:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes that require migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing features or templates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Significant structural changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Bump MINOR:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features, templates, or guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Significant enhancements (backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New integration capabilities"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Bump PATCH:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes and corrections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor documentation updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small improvements (no new functionality)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-changelog-best-practices",
      children: "7.2 Changelog Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Information:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear description of changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Justification for bump type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Criteria reference (why this bump type)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference to project version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Keep a Changelog format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include Added/Changed/Fixed/Removed sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking changes clearly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guidance for MAJOR bumps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-package-maintenance",
      children: "7.3 Package Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Regular Maintenance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep package versions up to date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain accurate changelogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update integration guides when dependencies change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review and update package documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always update version in README.md"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last Updated:**"
        }), " date"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always create changelog entry for version bumps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-integration-with-release-workflow",
      children: "8. Integration with Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-rw-step-25-package-version-workflow",
      children: "8.1 RW Step 2.5: Package Version Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runs automatically after RW Step 2 (project version bump)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before RW Step 3 (changelog creation)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-blocking (RW continues even if PVW skips)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml\nsteps:\n  - step: 2.5\n    name: Package Version Workflow (PVW)\n    handler: package.version_bump\n    blocking: false\n    mandatory: false\n    agentic: true\n    config:\n      packages_dir: packages/frameworks\n      auto_detect_changes: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-package-version-info-in-changelog",
      children: "8.2 Package Version Info in Changelog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Project Changelog Includes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package version updates in changelog entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference to package changelogs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Summary of package changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [0.4.8.6+1] - 10-12-25\n\n### Package Updates\n- **Kanban:** 2.0.0 → 2.1.0 (MINOR) - Added semantic matching\n- **Workflow Management:** 2.1.0 → 2.1.1 (PATCH) - Fixed branch validation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-troubleshooting",
      children: "9. Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-no-packages-changed",
      children: "9.1 No Packages Changed"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Response:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip PVW execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document: \"No package changes detected, skipping PVW\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mark all PVW steps as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cancelled"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue to RW Step 3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-validation-failure",
      children: "9.2 Validation Failure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Response:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze validation error"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine fix (format, increment, consistency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-execute update if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-validate until all checks pass"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-ambiguous-bump-type",
      children: "9.3 Ambiguous Bump Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent Response:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze changes more deeply"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider context and impact"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Make intelligent decision based on criteria guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document reasoning clearly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-agentic-drift",
      children: "9.4 Agentic Drift"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " Create TODO list at workflow start"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " Update TODO status before each step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MANDATORY:"
        }), " Update TODO status after each step"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Use TODOs as checkpoints to prevent drift"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recovery:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check current TODO status to see where execution stopped"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resume from the last ", (0,jsx_runtime.jsx)(_components.code, {
          children: "in_progress"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pending"
        }), " step"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not skip steps - complete all 6 steps in order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-related-documents",
      children: "10. Related Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md",
          children: "Package Version Workflow: Agent Execution (source)"
        }), " - Complete step-by-step PVW guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/package-versioning-criteria",
          children: "Package Versioning Criteria"
        }), " - Version bump criteria (guidance)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure",
          children: "Release Workflow Structure"
        }), " - RW integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dual-versioning-package-managers",
          children: "Dual Versioning Guide"
        }), " - Project vs. package versioning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-summary",
      children: "11. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-principles",
      children: "Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Versioning"
        }), " - Project version (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ") and package versions (SemVer) tracked independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-Driven"
        }), " - PVW uses intelligent analysis, not mechanical rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Detection"
        }), " - PVW automatically detects changed packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrated Workflow"
        }), " - PVW runs as RW Step 2.5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Criteria as Guidance"
        }), " - Version bump criteria inform decisions, not dictate them"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-maintenance-workflow",
      children: "Package Maintenance Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Make Changes → Run RW → PVW Detects Changes → PVW Analyzes → \nPVW Determines Bumps → PVW Updates Versions → PVW Validates → \nPVW Documents → RW Continues → Changelog Includes Package Versions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "package-version-tracking",
      children: "Package Version Tracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Location:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " (version and last updated)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format:"
        }), " SemVer (", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " (Keep a Changelog format)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-Reference:"
        }), " Package version linked to project version in changelog"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure",
          children: "Ultimate Canonical Workflow Structure"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/package-version-workflow.yaml",
          children: "Package Version Workflow YAML (source)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/PACKAGE_UPDATE_SUMMARY.md",
          children: "Package Update Summary (source)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Last updated: 2025-12-18T00:00:00Z"
      })
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