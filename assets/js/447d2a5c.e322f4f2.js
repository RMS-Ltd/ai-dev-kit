"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["16606"], {
93580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_compatibility_tracking_md_447_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-compatibility-tracking-md-447.json
var site_docs_architecture_standards_and_adrs_framework_compatibility_tracking_md_447_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-compatibility-tracking","title":"Framework Compatibility Tracking","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-compatibility-tracking.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-compatibility-tracking","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-compatibility-tracking","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-compatibility-tracking.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Backward Compatibility Policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-backward-compatibility-policy"},"next":{"title":"Framework Dependency Architecture","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-dependency-architecture"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-compatibility-tracking.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Compatibility Tracking';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Compatibility Matrix",
  "id": "1-compatibility-matrix",
  "level": 2
}, {
  "value": "1.1 Current Framework Dependencies",
  "id": "11-current-framework-dependencies",
  "level": 3
}, {
  "value": "1.2 Dependency Requirements",
  "id": "12-dependency-requirements",
  "level": 3
}, {
  "value": "2. Version Compatibility Requirements",
  "id": "2-version-compatibility-requirements",
  "level": 2
}, {
  "value": "2.1 Minimum Version Requirements",
  "id": "21-minimum-version-requirements",
  "level": 3
}, {
  "value": "2.2 Version Range Support",
  "id": "22-version-range-support",
  "level": 3
}, {
  "value": "2.3 Compatibility Validation",
  "id": "23-compatibility-validation",
  "level": 3
}, {
  "value": "3. Backward Compatibility Policy",
  "id": "3-backward-compatibility-policy",
  "level": 2
}, {
  "value": "3.1 MAJOR Version Bumps (Breaking Changes)",
  "id": "31-major-version-bumps-breaking-changes",
  "level": 3
}, {
  "value": "3.2 MINOR Version Bumps (New Features)",
  "id": "32-minor-version-bumps-new-features",
  "level": 3
}, {
  "value": "3.3 PATCH Version Bumps (Bug Fixes)",
  "id": "33-patch-version-bumps-bug-fixes",
  "level": 3
}, {
  "value": "4. Dependency Management",
  "id": "4-dependency-management",
  "level": 2
}, {
  "value": "4.1 Version Pinning",
  "id": "41-version-pinning",
  "level": 3
}, {
  "value": "4.2 Version Updates",
  "id": "42-version-updates",
  "level": 3
}, {
  "value": "4.3 Dependency Resolution",
  "id": "43-dependency-resolution",
  "level": 3
}, {
  "value": "5. Compatibility Documentation",
  "id": "5-compatibility-documentation",
  "level": 2
}, {
  "value": "5.1 Framework README Documentation",
  "id": "51-framework-readme-documentation",
  "level": 3
}, {
  "value": "5.2 Package Changelog Documentation",
  "id": "52-package-changelog-documentation",
  "level": 3
}, {
  "value": "5.3 Compatibility Matrix Updates",
  "id": "53-compatibility-matrix-updates",
  "level": 3
}, {
  "value": "6. Compatibility Validation",
  "id": "6-compatibility-validation",
  "level": 2
}, {
  "value": "6.1 Pre-Update Validation",
  "id": "61-pre-update-validation",
  "level": 3
}, {
  "value": "6.2 Post-Update Validation",
  "id": "62-post-update-validation",
  "level": 3
}, {
  "value": "6.3 Continuous Compatibility Monitoring",
  "id": "63-continuous-compatibility-monitoring",
  "level": 3
}, {
  "value": "7. Update Policies",
  "id": "7-update-policies",
  "level": 2
}, {
  "value": "7.1 Automatic Updates",
  "id": "71-automatic-updates",
  "level": 3
}, {
  "value": "7.2 Semi-Automatic Updates",
  "id": "72-semi-automatic-updates",
  "level": 3
}, {
  "value": "7.3 Manual Updates",
  "id": "73-manual-updates",
  "level": 3
}, {
  "value": "8. Migration Support",
  "id": "8-migration-support",
  "level": 2
}, {
  "value": "8.1 Migration Guides",
  "id": "81-migration-guides",
  "level": 3
}, {
  "value": "8.2 Migration Tools",
  "id": "82-migration-tools",
  "level": 3
}, {
  "value": "8.3 Rollback Procedures",
  "id": "83-rollback-procedures",
  "level": 3
}, {
  "value": "9. Compatibility Best Practices",
  "id": "9-compatibility-best-practices",
  "level": 2
}, {
  "value": "9.1 Framework Development",
  "id": "91-framework-development",
  "level": 3
}, {
  "value": "9.2 Framework Consumption",
  "id": "92-framework-consumption",
  "level": 3
}, {
  "value": "9.3 Compatibility Maintenance",
  "id": "93-compatibility-maintenance",
  "level": 3
}, {
  "value": "10. Related Documentation",
  "id": "10-related-documentation",
  "level": 2
}, {
  "value": "10.1 Core Documents",
  "id": "101-core-documents",
  "level": 3
}, {
  "value": "10.2 Supporting Documents",
  "id": "102-supporting-documents",
  "level": 3
}, {
  "value": "11. Summary",
  "id": "11-summary",
  "level": 2
}, {
  "value": "11.1 Key Principles",
  "id": "111-key-principles",
  "level": 3
}, {
  "value": "11.2 Compatibility Matrix",
  "id": "112-compatibility-matrix",
  "level": 3
}, {
  "value": "11.3 Update Policies",
  "id": "113-update-policies",
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
        id: "framework-compatibility-tracking",
        children: "Framework Compatibility Tracking"
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
      }), " E6:S01", ":T03", " - Establish framework compatibility tracking", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Versioning Strategy, Framework Release Process, Framework Dependency Architecture"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document establishes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comprehensive framework compatibility tracking system"
      }), " for AI Dev Kit frameworks. The system tracks framework dependencies, version compatibility requirements, backward compatibility policies, and provides guidance for safe framework updates and migrations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Tracking:"
        }), " Clear documentation of which frameworks depend on which"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Compatibility:"
        }), " Minimum version requirements for framework dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatibility:"
        }), " Clear policies for MAJOR/MINOR/PATCH version bumps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policies:"
        }), " Guidance for safe framework updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Support:"
        }), " Clear migration paths for breaking changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-compatibility-matrix",
      children: "1. Compatibility Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-current-framework-dependencies",
      children: "1.1 Current Framework Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Dependency Graph:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "numbering & versioning (v2.0.0+)\n  ├─ workflow mgt (v2.2.0+) [requires: numbering & versioning v2.0.0+]\n  └─ kanban (v2.1.0+) [requires: numbering & versioning v2.0.0+, workflow mgt v2.0.0+]\n\ndoc-lifecycle (v1.0.0+) [standalone]\ndebug-path (v1.0.0+) [standalone]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailed Compatibility Matrix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Framework"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dependencies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Minimum Dependency Versions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "numbering & versioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (standalone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "workflow mgt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "numbering & versioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v2.0.0+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.1.0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "numbering & versioning"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow mgt"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v2.0.0+, v2.0.0+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "doc-lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (standalone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "debug-path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (standalone)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-dependency-requirements",
      children: "1.2 Dependency Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbering & Versioning Framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone:"
        }), " No dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Used By:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Range:"
        }), " v2.0.0+ (current: v2.0.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Management Framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependencies:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Used By:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Range:"
        }), " v2.0.0+ (current: v2.2.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependencies:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0+, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " v2.0.0+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Used By:"
        }), " None (top-level framework)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Range:"
        }), " v2.0.0+ (current: v2.1.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Lifecycle Framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone:"
        }), " No dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Used By:"
        }), " None"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Range:"
        }), " v1.0.0+ (current: v1.0.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Debug Path Framework:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone:"
        }), " No dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Used By:"
        }), " None"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Range:"
        }), " v1.0.0+ (current: v1.0.0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-version-compatibility-requirements",
      children: "2. Version Compatibility Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-minimum-version-requirements",
      children: "2.1 Minimum Version Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Version Compatibility:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frameworks specify minimum versions of their dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projects must ensure all dependencies meet minimum requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility validation checks version requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# kanban framework requirements\ndependencies:\n  numbering-versioning: \">=2.0.0\"\n  workflow-mgmt: \">=2.0.0\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-version-range-support",
      children: "2.2 Version Range Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supported Version Ranges:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exact Version:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v2.0.0"
        }), " (pinned to specific version)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimum Version:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v2.0.0+"
        }), " (compatible with v2.0.0 and above)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Range:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v2.0.0 - v2.5.0"
        }), " (compatible within range)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latest Compatible:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "latest"
        }), " (automatically uses latest compatible version)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Range Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0+ → Compatible with v2.0.0, v2.1.0, v2.2.0, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " v2.0.0+ → Compatible with v2.0.0, v2.1.0, v2.2.0, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        }), " v2.0.0+ → Compatible with v2.0.0, v2.1.0, v2.2.0, etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-compatibility-validation",
      children: "2.3 Compatibility Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check framework dependencies meet minimum version requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify version ranges are compatible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate backward compatibility for updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for breaking changes in dependency updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CLI tool: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit check"
        }), " (validates framework compatibility)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual validation: Review compatibility matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated validation: CI/CD compatibility checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-backward-compatibility-policy",
      children: "3. Backward Compatibility Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-major-version-bumps-breaking-changes",
      children: "3.1 MAJOR Version Bumps (Breaking Changes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking Changes:"
        }), " MAJOR version bumps indicate breaking changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Required:"
        }), " Breaking changes require migration guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility:"
        }), " Not backward compatible with previous MAJOR version"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policy:"
        }), " Manual update required (not automatic)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0 → v3.0.0 (breaking change)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " v2.0.0 → v3.0.0 (breaking change)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        }), " v2.0.0 → v3.0.0 (breaking change)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Change Indicators:"
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
        children: "Migration Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide provided"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes clearly documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration path specified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility matrix updated"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-minor-version-bumps-new-features",
      children: "3.2 MINOR Version Bumps (New Features)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatible:"
        }), " MINOR version bumps are backward compatible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New Features:"
        }), " Add new features without breaking existing usage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policy:"
        }), " Automatic or semi-automatic update recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility:"
        }), " Compatible with previous MINOR version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0 → v2.1.0 (new feature, backward compatible)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " v2.0.0 → v2.1.0 (new feature, backward compatible)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        }), " v2.0.0 → v2.1.0 (new feature, backward compatible)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "New Feature Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new templates or guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new integration patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new optional features or capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expanding existing templates with new sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adding new policy options (non-breaking)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Recommendations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic update for MINOR versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review changelog for new features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test new features if needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No migration required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-patch-version-bumps-bug-fixes",
      children: "3.3 PATCH Version Bumps (Bug Fixes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatible:"
        }), " PATCH version bumps are backward compatible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bug Fixes:"
        }), " Fix bugs without changing behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policy:"
        }), " Automatic update recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility:"
        }), " Compatible with previous PATCH version"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.1.0 → v2.1.1 (bug fix, backward compatible)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " v2.1.0 → v2.1.1 (bug fix, backward compatible)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        }), " v2.1.0 → v2.1.1 (bug fix, backward compatible)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug Fix Indicators:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing broken links or references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting incorrect examples or code snippets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fixing formatting or rendering issues"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correcting typos or grammatical errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clarifying ambiguous language"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Recommendations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic update for PATCH versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No testing required (bug fixes only)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No migration required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-dependency-management",
      children: "4. Dependency Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-version-pinning",
      children: "4.1 Version Pinning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pinning Strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exact Pin:"
        }), " Pin to specific version (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v2.0.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimum Pin:"
        }), " Pin to minimum version (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v2.0.0+"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Range Pin:"
        }), " Pin to version range (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v2.0.0 - v2.5.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latest Pin:"
        }), " Use latest compatible version (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "latest"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pinning Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Submodules:"
        }), " Checkout specific tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Managers:"
        }), " Specify version ranges in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Tool:"
        }), " Install specific versions with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--version"
        }), " flag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration:"
        }), " Pin versions in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Pinning:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nframeworks:\n  numbering-versioning:\n    version: \"2.0.0\"  # Exact pin\n    pin: true  # Prevent auto-updates\n  workflow-mgmt:\n    version: \"2.0.0+\"  # Minimum pin\n    pin: false  # Allow auto-updates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-version-updates",
      children: "4.2 Version Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Policies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic Updates:"
        }), " PATCH and MINOR versions (if not pinned)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semi-Automatic Updates:"
        }), " MINOR versions with notification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual Updates:"
        }), " MAJOR versions (breaking changes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Submodules:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git submodule update --remote"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Managers:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm update"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install --upgrade"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Tool:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit update <framework>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual:"
        }), " Checkout new tags or install new versions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Notifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog entries for framework updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version compatibility warnings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking change notifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guide links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-dependency-resolution",
      children: "4.3 Dependency Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check minimum version requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolve version conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select compatible versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Install or update frameworks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conflict Resolution:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If frameworks require different versions of same dependency, use highest compatible version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If versions are incompatible, report conflict and require manual resolution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide guidance for resolving conflicts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-compatibility-documentation",
      children: "5. Compatibility Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-framework-readme-documentation",
      children: "5.1 Framework README Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Compatibility Information:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies list with minimum versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backward compatibility policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update recommendations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example README Section:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Dependencies\n\n**Required:**\n- `numbering & versioning` v2.0.0+\n- `workflow mgt` v2.0.0+\n\n**Compatibility:**\n- Backward compatible with v2.0.0+\n- MAJOR version bumps may require migration\n- See [Compatibility Tracking](framework-compatibility-tracking.md) for details\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-package-changelog-documentation",
      children: "5.2 Package Changelog Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Compatibility Information:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Breaking changes clearly marked"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration guides for MAJOR bumps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependency version updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example Changelog Entry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [3.0.0] - 2025-12-15\n\n**BREAKING CHANGE:** Requires `numbering & versioning` v3.0.0+\n\n### Changed\n- Updated to use `numbering & versioning` v3.0.0 API\n- Migration guide: [Migration Guide](MIGRATION_GUIDE.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-compatibility-matrix-updates",
      children: "5.3 Compatibility Matrix Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update compatibility matrix when dependencies change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking changes in compatibility matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update version ranges when new versions released"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain historical compatibility information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-compatibility-validation",
      children: "6. Compatibility Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-pre-update-validation",
      children: "6.1 Pre-Update Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check current framework versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify minimum version requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate dependency compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review migration requirements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CLI tool: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit check"
        }), " (validates compatibility)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual validation: Review compatibility matrix"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated validation: CI/CD compatibility checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-post-update-validation",
      children: "6.2 Post-Update Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Checks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify frameworks updated correctly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check version compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify migration completed (if applicable)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework-specific tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility validation scripts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-continuous-compatibility-monitoring",
      children: "6.3 Continuous Compatibility Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitoring Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track framework versions across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor compatibility matrix updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alert on breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide update recommendations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain compatibility history"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Monitoring Tools:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version tracking in projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility matrix updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated compatibility checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-update-policies",
      children: "7. Update Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-automatic-updates",
      children: "7.1 Automatic Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH Versions:"
        }), " Automatic updates recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR Versions:"
        }), " Automatic or semi-automatic updates recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR Versions:"
        }), " Manual updates required (breaking changes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Update Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nupdate_policy:\n  patch: auto  # Automatic PATCH updates\n  minor: notify  # Notify for MINOR updates\n  major: manual  # Manual MAJOR updates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-semi-automatic-updates",
      children: "7.2 Semi-Automatic Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR Versions:"
        }), " Notify user of available updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Decision:"
        }), " User decides whether to update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Process:"
        }), " User triggers update when ready"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semi-Automatic Update Flow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework releases MINOR version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User notified of available update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User reviews changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User decides to update or defer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update executed if user approves"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-manual-updates",
      children: "7.3 Manual Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR Versions:"
        }), " Manual updates required"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking Changes:"
        }), " Review migration guide before updating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing:"
        }), " Test thoroughly after updating"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration:"
        }), " Follow migration guide if provided"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Update Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review changelog for breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review migration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan migration strategy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete migration if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-migration-support",
      children: "8. Migration Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-migration-guides",
      children: "8.1 Migration Guides"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Guide Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear description of breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step-by-step migration instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Before/after examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common issues and solutions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback procedures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Guide Location:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Framework ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MIGRATION_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package changelog entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility tracking document"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework README"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-migration-tools",
      children: "8.2 Migration Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Support:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI tool migration utilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated migration scripts (when possible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual migration instructions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration validation tools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review migration guide"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup current installation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute migration steps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rollback if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-rollback-procedures",
      children: "8.3 Rollback Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Support:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git submodules: Checkout previous tag"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package managers: Install previous version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CLI tool: Install previous version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual: Restore from backup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Process:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify previous compatible version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Restore previous version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document rollback reason"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-compatibility-best-practices",
      children: "9. Compatibility Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-framework-development",
      children: "9.1 Framework Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain backward compatibility for MINOR/PATCH versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clearly document breaking changes for MAJOR versions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guides for breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update compatibility matrix when dependencies change"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test compatibility before releasing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-framework-consumption",
      children: "9.2 Framework Consumption"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pin framework versions in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test updates in development first"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review changelog before updating"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Follow migration guides for MAJOR updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor compatibility matrix updates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-compatibility-maintenance",
      children: "9.3 Compatibility Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep compatibility matrix up to date"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document breaking changes clearly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration guides promptly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor framework versions across projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain compatibility history"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-related-documentation",
      children: "10. Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-core-documents",
      children: "10.1 Core Documents"
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
            children: "Release validation and procedures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
            children: "Dependency management strategies"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-supporting-documents",
      children: "10.2 Supporting Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-summary",
      children: "11. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-key-principles",
      children: "11.1 Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency Tracking:"
        }), " Clear documentation of framework dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Compatibility:"
        }), " Minimum version requirements for dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backward Compatibility:"
        }), " Clear policies for MAJOR/MINOR/PATCH version bumps"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policies:"
        }), " Guidance for safe framework updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Support:"
        }), " Clear migration paths for breaking changes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-compatibility-matrix",
      children: "11.2 Compatibility Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Framework Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), ": Standalone (v2.0.0+)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), ": Requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0+ (v2.2.0+)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban"
        }), ": Requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "numbering & versioning"
        }), " v2.0.0+, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " v2.0.0+ (v2.1.0+)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "doc-lifecycle"
        }), ": Standalone (v1.0.0+)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "debug-path"
        }), ": Standalone (v1.0.0+)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-update-policies",
      children: "11.3 Update Policies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH Versions:"
        }), " Automatic updates recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR Versions:"
        }), " Automatic or semi-automatic updates recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR Versions:"
        }), " Manual updates required (breaking changes)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Task:"
      }), " E6:S01", ":T03", " - Establish framework compatibility tracking"]
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