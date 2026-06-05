"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["96186"], {
53713(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_versioning_strategy_md_ffe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-versioning-strategy-md-ffe.json
var site_docs_architecture_standards_and_adrs_framework_versioning_strategy_md_ffe_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-versioning-strategy","title":"Framework Versioning Strategy","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-versioning-strategy.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-versioning-strategy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-versioning-strategy","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-versioning-strategy.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Version Tagging Strategy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-version-tagging-strategy"},"next":{"title":"Gap Log and Risk Assessment Schema","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/gap-log-schema"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-versioning-strategy.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Versioning Strategy';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Purpose and Scope",
  "id": "1-purpose-and-scope",
  "level": 2
}, {
  "value": "1.1 Purpose",
  "id": "11-purpose",
  "level": 3
}, {
  "value": "1.2 Scope",
  "id": "12-scope",
  "level": 3
}, {
  "value": "2. Current Framework Versioning Practices",
  "id": "2-current-framework-versioning-practices",
  "level": 2
}, {
  "value": "2.1 Framework Packages",
  "id": "21-framework-packages",
  "level": 3
}, {
  "value": "2.2 Current Practices",
  "id": "22-current-practices",
  "level": 3
}, {
  "value": "3. Framework Versioning Strategy",
  "id": "3-framework-versioning-strategy",
  "level": 2
}, {
  "value": "3.1 Semantic Versioning Schema",
  "id": "31-semantic-versioning-schema",
  "level": 3
}, {
  "value": "3.2 Version Numbering Conventions",
  "id": "32-version-numbering-conventions",
  "level": 3
}, {
  "value": "MAJOR Version (X.0.0)",
  "id": "major-version-x00",
  "level": 4
}, {
  "value": "MINOR Version (x.Y.0)",
  "id": "minor-version-xy0",
  "level": 4
}, {
  "value": "PATCH Version (x.y.Z)",
  "id": "patch-version-xyz",
  "level": 4
}, {
  "value": "3.3 Version Bump Decision Process",
  "id": "33-version-bump-decision-process",
  "level": 3
}, {
  "value": "4. Version Tracking and Management",
  "id": "4-version-tracking-and-management",
  "level": 2
}, {
  "value": "4.1 Version File Locations",
  "id": "41-version-file-locations",
  "level": 3
}, {
  "value": "4.2 Version Update Process",
  "id": "42-version-update-process",
  "level": 3
}, {
  "value": "4.3 Version Synchronization",
  "id": "43-version-synchronization",
  "level": 3
}, {
  "value": "5. Framework Release Processes",
  "id": "5-framework-release-processes",
  "level": 2
}, {
  "value": "5.1 Release Workflow",
  "id": "51-release-workflow",
  "level": 3
}, {
  "value": "5.2 Git Tagging Strategy",
  "id": "52-git-tagging-strategy",
  "level": 3
}, {
  "value": "5.3 Release Criteria",
  "id": "53-release-criteria",
  "level": 3
}, {
  "value": "6. Framework Compatibility Tracking",
  "id": "6-framework-compatibility-tracking",
  "level": 2
}, {
  "value": "6.1 Compatibility Matrix",
  "id": "61-compatibility-matrix",
  "level": 3
}, {
  "value": "6.2 Backward Compatibility Policy",
  "id": "62-backward-compatibility-policy",
  "level": 3
}, {
  "value": "6.3 Dependency Management",
  "id": "63-dependency-management",
  "level": 3
}, {
  "value": "7. Versioning Policies",
  "id": "7-versioning-policies",
  "level": 2
}, {
  "value": "7.1 Version Number Assignment",
  "id": "71-version-number-assignment",
  "level": 3
}, {
  "value": "7.2 Version Documentation Requirements",
  "id": "72-version-documentation-requirements",
  "level": 3
}, {
  "value": "7.3 Version Validation",
  "id": "73-version-validation",
  "level": 3
}, {
  "value": "8. Framework Versioning Best Practices",
  "id": "8-framework-versioning-best-practices",
  "level": 2
}, {
  "value": "8.1 Version Bump Guidelines",
  "id": "81-version-bump-guidelines",
  "level": 3
}, {
  "value": "8.2 Changelog Best Practices",
  "id": "82-changelog-best-practices",
  "level": 3
}, {
  "value": "8.3 Package Maintenance",
  "id": "83-package-maintenance",
  "level": 3
}, {
  "value": "9. Integration with Package Version Workflow (PVW)",
  "id": "9-integration-with-package-version-workflow-pvw",
  "level": 2
}, {
  "value": "9.1 PVW Execution",
  "id": "91-pvw-execution",
  "level": 3
}, {
  "value": "9.2 PVW Integration Points",
  "id": "92-pvw-integration-points",
  "level": 3
}, {
  "value": "10. Framework Versioning Examples",
  "id": "10-framework-versioning-examples",
  "level": 2
}, {
  "value": "10.1 MAJOR Version Bump Example",
  "id": "101-major-version-bump-example",
  "level": 3
}, {
  "value": "10.2 MINOR Version Bump Example",
  "id": "102-minor-version-bump-example",
  "level": 3
}, {
  "value": "10.3 PATCH Version Bump Example",
  "id": "103-patch-version-bump-example",
  "level": 3
}, {
  "value": "11. Related Documentation",
  "id": "11-related-documentation",
  "level": 2
}, {
  "value": "11.1 Core Documents",
  "id": "111-core-documents",
  "level": 3
}, {
  "value": "11.2 Supporting Documents",
  "id": "112-supporting-documents",
  "level": 3
}, {
  "value": "12. Summary",
  "id": "12-summary",
  "level": 2
}, {
  "value": "12.1 Key Principles",
  "id": "121-key-principles",
  "level": 3
}, {
  "value": "12.2 Versioning Workflow",
  "id": "122-versioning-workflow",
  "level": 3
}, {
  "value": "12.3 Version Tracking",
  "id": "123-version-tracking",
  "level": 3
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
        id: "framework-versioning-strategy",
        children: "Framework Versioning Strategy"
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
      }), " E6:S01", ":T01", " - Define framework versioning strategy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Dependency Architecture, Package Maintenance and Release, Package Versioning Criteria"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive versioning strategy for AI Dev Kit frameworks"
      }), ". Frameworks are versioned independently from the project using ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semantic Versioning (SemVer)"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      }), "), enabling clear communication of changes, compatibility tracking, and dependency management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Versioning:"
        }), " Project version (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ") and framework versions (SemVer) are tracked independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Versioning:"
        }), " Frameworks use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " for compatibility with package managers and clear change communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Independent Evolution:"
        }), " Each framework evolves independently with its own version stream"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Management:"
        }), " Framework versions are managed through the Package Version Workflow (PVW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-purpose-and-scope",
      children: "1. Purpose and Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-purpose",
      children: "1.1 Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This strategy establishes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version numbering conventions"
        }), " for framework packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version bump criteria"
        }), " and decision-making guidance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version tracking mechanisms"
        }), " and file locations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release processes"
        }), " and tagging strategies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility policies"
        }), " and dependency management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-scope",
      children: "1.2 Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applies To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All framework packages in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework releases and updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework dependency management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework compatibility tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Does Not Apply To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Project versioning (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " - see dev-kit-versioning-policy.md)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal development versioning (handled by Release Workflow)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy or deprecated frameworks (grandfathered versions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-current-framework-versioning-practices",
      children: "2. Current Framework Versioning Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-framework-packages",
      children: "2.1 Framework Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Frameworks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "workflow mgt"
        }), " - Release Workflow implementation package (v2.2.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "kanban"
        }), " - Kanban System Implementation Package (v2.1.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "numbering & versioning"
        }), " - Numbering & Versioning Policy Package (v2.0.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "doc-lifecycle"
        }), " - Document Lifecycle Management Package (v1.0.0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "debug-path"
        }), " - Debug Path Methodology Package (v1.0.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-current-practices",
      children: "2.2 Current Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Semantic Versioning (SemVer): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Examples: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.2.0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.1.0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0.0"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Location:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Primary: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " (frontmatter or header)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Secondary: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " (package changelog)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION"
        }), " file (for script-based access)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version updated in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:**"
        }), " field"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "**Last Updated:**"
        }), " date tracked alongside version"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package changelog entries reference both package version and project version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package Version Workflow (PVW) automatically manages version bumps"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Git tags created for framework releases (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering-versioning-v2.0.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog entries created automatically during PVW execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-framework-versioning-strategy",
      children: "3. Framework Versioning Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-semantic-versioning-schema",
      children: "3.1 Semantic Versioning Schema"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR (X.0.0):"
        }), " Breaking changes, incompatible API changes, structural changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR (x.Y.0):"
        }), " New features, enhancements, additions (backward compatible)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH (x.y.Z):"
        }), " Bug fixes, corrections, clarifications (no new functionality)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3.0.0"
        }), " (MAJOR - breaking change)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "2.1.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.2.0"
        }), " (MINOR - new feature)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "2.1.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.1.1"
        }), " (PATCH - bug fix)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-version-numbering-conventions",
      children: "3.2 Version Numbering Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "major-version-x00",
      children: "MAJOR Version (X.0.0)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Increment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes that require migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
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
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Removing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC_TEMPLATE.md"
        }), " (breaking - consumers depend on it)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " location requirement (breaking - breaks existing configs)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing support for old version format (breaking - breaks existing projects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing required integration pattern (breaking - breaks existing setups)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "minor-version-xy0",
      children: "MINOR Version (x.Y.0)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Increment:"
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New optional features or capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expanding existing templates with new sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new policy options (non-breaking)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adding new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MIGRATION_GUIDE.md"
        }), " (new feature)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new template variant (new feature)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new integration pattern (new feature)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expanding existing guide with new sections (enhancement)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "patch-version-xyz",
      children: "PATCH Version (x.y.Z)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to Increment:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes, corrections, clarifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing broken links or references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting incorrect examples or code snippets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing formatting or rendering issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting typos or grammatical errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifying ambiguous language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minor improvements (no new functionality)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing broken link to external resource"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting typo in template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifying ambiguous policy statement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing code example syntax error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-version-bump-decision-process",
      children: "3.3 Version Bump Decision Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Agent-Driven Analysis:"
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
      }), " Version bump criteria are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "guidance, not hard rules"
      }), ". Agents make intelligent decisions based on context, not mechanical rule application."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package-versioning-criteria.md"
      }), " for detailed criteria and examples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-version-tracking-and-management",
      children: "4. Version Tracking and Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-version-file-locations",
      children: "4.1 Version File Locations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "README.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "**Version:** 2.1.0\n**Last Updated:** 2025-12-10\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [2.1.0] - 2025-12-10\n\n**Package Version:** 2.1.0\n**Project Version:** 0.4.8.6+1\n**Bump Type:** MINOR\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "VERSION"
      }), " file (for script-based access)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "FRAMEWORK_NAME = \"kanban\"\nFRAMEWORK_VERSION = \"2.1.0\"\nFRAMEWORK_SEMVER = \"2.1.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-version-update-process",
      children: "4.2 Version Update Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Updates (PVW):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW detects changed packages via git diff"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW analyzes changes and determines bump type"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PVW updates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " version and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last Updated"
        }), " date"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW creates/updates package changelog entry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW validates updates and documents reasoning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Updates (Not Recommended):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Only for exceptional circumstances"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must follow same versioning conventions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must update all version locations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must create changelog entry"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-version-synchronization",
      children: "4.3 Version Synchronization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dual Versioning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Version:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " (internal development)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework Version:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " (package releases)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-Reference:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package changelog entries include both versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project changelog entries reference package versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version mapping documented in changelog entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dual-versioning-package-managers.md"
      }), " for detailed dual-versioning guidance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-framework-release-processes",
      children: "5. Framework Release Processes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-release-workflow",
      children: "5.1 Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integrated with Release Workflow (RW):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW runs automatically as RW Step 2.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executes after project version bump (RW Step 2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Executes before changelog creation (RW Step 3)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PVW Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect changed packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze package changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine version bumps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute version updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document and proceed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package-maintenance-and-release.md"
      }), " for complete PVW documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-git-tagging-strategy",
      children: "5.2 Git Tagging Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Release Tags:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Tag individual framework release\ngit tag -a numbering-versioning-v2.0.0 -m \"Release numbering-versioning v2.0.0\"\ngit push origin numbering-versioning-v2.0.0\n\n# Tag all frameworks in monorepo\ngit tag -a ai-dev-kit-v2.0.0 -m \"Release ai-dev-kit v2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Individual framework: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}-v{version}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-v2.1.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Monorepo release: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-v{version}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit-v2.0.0"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tag Message:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include framework name and version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include release summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference project version if applicable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-release-criteria",
      children: "5.3 Release Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Readiness:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All tests passing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation complete and accurate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog entries created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version numbers updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git tags created"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation scripts passing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Gates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No blocking issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All dependencies compatible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration tests passing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation reviewed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-framework-compatibility-tracking",
      children: "6. Framework Compatibility Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-compatibility-matrix",
      children: "6.1 Compatibility Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Dependencies:"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compatibility Tracking:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Documented in package ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracked in package changelog entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validated during PVW execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-backward-compatibility-policy",
      children: "6.2 Backward Compatibility Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MAJOR Version Bumps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indicate breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Require migration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking changes clearly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration paths"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MINOR Version Bumps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward compatible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New features don't break existing usage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing integrations continue to work"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH Version Bumps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward compatible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fixes don't change behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Corrections don't affect functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-dependency-management",
      children: "6.3 Dependency Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Pinning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects can pin to specific framework versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git submodules: Checkout specific tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package managers: Specify version ranges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI tool: Install specific versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic updates via PVW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual updates via CLI tool"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update notifications in changelog"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-versioning-policies",
      children: "7. Versioning Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-version-number-assignment",
      children: "7.1 Version Number Assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial Version:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New frameworks start at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0.0"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indicates stable, complete initial release"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All core features implemented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-Release Versions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.x.x"
        }), " for pre-release versions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Indicates development/experimental status"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not recommended for stable frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Progression:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment based on change type (MAJOR/MINOR/PATCH)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Never skip versions (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.0.0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.2.0"
        }), " is invalid)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always increment from current version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-version-documentation-requirements",
      children: "7.2 Version Documentation Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version number in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Last Updated"
        }), " date in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog entry for each version bump"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Justification for version bump type"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-reference to project version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a Changelog format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include Added/Changed/Fixed/Removed sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking changes clearly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guidance for MAJOR bumps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-version-validation",
      children: "7.3 Version Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version format validation (SemVer format)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version increment validation (no skipping)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version location consistency (all locations match)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog entry validation (entry exists and is complete)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW validation scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual validation during review"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CI/CD validation in pipeline"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-framework-versioning-best-practices",
      children: "8. Framework Versioning Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-version-bump-guidelines",
      children: "8.1 Version Bump Guidelines"
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking policy changes"
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New optional features"
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
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifications and corrections"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-changelog-best-practices",
      children: "8.2 Changelog Best Practices"
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
      id: "83-package-maintenance",
      children: "8.3 Package Maintenance"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always update version in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Always update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last Updated"
        }), " date"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always create changelog entry for version bumps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always validate version updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-integration-with-package-version-workflow-pvw",
      children: "9. Integration with Package Version Workflow (PVW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-pvw-execution",
      children: "9.1 PVW Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PVW runs as RW Step 2.5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detects changed packages automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyzes changes intelligently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determines version bumps using criteria as guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updates versions and changelogs automatically"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Execution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can trigger PVW independently for testing/debugging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same execution pattern as automatic execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Useful for validating version bump decisions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-pvw-integration-points",
      children: "9.2 PVW Integration Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git diff (changed files)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package structure (package files and directories)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current package versions (from README.md)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated package versions (in README.md)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last Updated"
        }), " dates"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package changelog entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version bump justifications"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version format validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version increment validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog entry validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistency validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "See:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "package-maintenance-and-release.md"
      }), " for complete PVW documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-framework-versioning-examples",
      children: "10. Framework Versioning Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-major-version-bump-example",
      children: "10.1 MAJOR Version Bump Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Removing deprecated template"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Removed ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EPIC_TEMPLATE_LEGACY.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated documentation to reference new template only"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking change: Consumers may depend on legacy template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact: Requires migration to new template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Context: No migration path provided"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " MAJOR bump (", (0,jsx_runtime.jsx)(_components.code, {
        children: "2.1.0"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "3.0.0"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Entry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [3.0.0] - 2025-12-15\n\n**Package Version:** 3.0.0\n**Project Version:** 0.4.8.6+1\n**Bump Type:** MAJOR\n\n### Removed\n- Removed `EPIC_TEMPLATE_LEGACY.md` (breaking change)\n  - Consumers must migrate to new `EPIC_TEMPLATE.md`\n  - See migration guide: `MIGRATION_GUIDE.md`\n\n### Changed\n- Updated documentation to reference new template only\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-minor-version-bump-example",
      children: "10.2 MINOR Version Bump Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Adding new integration guide"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added ", (0,jsx_runtime.jsx)(_components.code, {
          children: "integration/workflow-management-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added new integration pattern examples"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "New feature: New integration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility: Backward compatible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Significance: Substantial new documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " MINOR bump (", (0,jsx_runtime.jsx)(_components.code, {
        children: "2.1.0"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2.2.0"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Entry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [2.2.0] - 2025-12-10\n\n**Package Version:** 2.2.0\n**Project Version:** 0.4.8.6+1\n**Bump Type:** MINOR\n\n### Added\n- New integration guide for Workflow Management package\n- New integration pattern examples\n- Expanded integration documentation section\n\n**Criteria Reference:** MINOR Version Bump\n- ✅ New feature: New integration guide\n- ✅ Enhancement: Expanded documentation\n- ✅ Backward compatible: No breaking changes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-patch-version-bump-example",
      children: "10.3 PATCH Version Bump Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario:"
      }), " Fixing broken link"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixed broken link to external resource in README.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Corrected typo in template"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bug fix: Broken link fixed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impact: No new functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scope: Minor correction"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " PATCH bump (", (0,jsx_runtime.jsx)(_components.code, {
        children: "2.1.0"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2.1.1"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Changelog Entry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [2.1.1] - 2025-12-08\n\n**Package Version:** 2.1.1\n**Project Version:** 0.4.8.6+1\n**Bump Type:** PATCH\n\n### Fixed\n- Fixed broken link to external resource in README.md\n- Corrected typo in template\n\n**Criteria Reference:** PATCH Version Bump\n- ✅ Bug fix: Broken link fixed\n- ✅ Correction: Typo corrected\n- ✅ No new functionality: Minor fixes only\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-related-documentation",
      children: "11. Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-core-documents",
      children: "11.1 Core Documents"
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
            children: "Framework versioning in dependency context"
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Versioning Criteria:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "package-versioning-criteria.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detailed version bump criteria (guidance)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent decision-making process"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-supporting-documents",
      children: "11.2 Supporting Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dual-Versioning Guide:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dual-versioning-package-managers.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Managing project version + framework versions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Package manager compatibility"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dev Kit Versioning Policy:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dev-kit-versioning-policy.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Project versioning (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Internal development versioning"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Package Version Workflow:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete PVW step-by-step guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Agent execution patterns"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-summary",
      children: "12. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-key-principles",
      children: "12.1 Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Versioning:"
        }), " Frameworks use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH"
        }), " for clear change communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual Versioning:"
        }), " Project version and framework versions tracked independently"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-Driven:"
        }), " PVW uses intelligent analysis, not mechanical rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Management:"
        }), " Framework versions managed through PVW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Criteria as Guidance:"
        }), " Version bump criteria inform decisions, not dictate them"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-versioning-workflow",
      children: "12.2 Versioning Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Make Changes → Run RW → PVW Detects Changes → PVW Analyzes → \nPVW Determines Bumps → PVW Updates Versions → PVW Validates → \nPVW Documents → RW Continues → Changelog Includes Package Versions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-version-tracking",
      children: "12.3 Version Tracking"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Task:"
      }), " E6:S01", ":T01", " - Define framework versioning strategy"]
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