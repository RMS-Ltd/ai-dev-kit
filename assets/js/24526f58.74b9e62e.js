"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["71544"], {
84774(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_t_03_package_dependency_matrix_md_245_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-01-story-02-package-and-repo-architecture-t-03-package-dependency-matrix-md-245.json
var site_docs_project_management_kanban_epics_epic_01_story_02_package_and_repo_architecture_t_03_package_dependency_matrix_md_245_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix","title":"Package Dependency Matrix","description":"Task IDS02:T03","source":"@site/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix.md","sourceDirName":"project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture","slug":"/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Modularity Principles and Boundaries","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T02-modularity-principles"},"next":{"title":"Consumption Patterns for Framework Packages","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T04-consumption-patterns"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-01/story-02-package-and-repo-architecture/T03-package-dependency-matrix.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Package Dependency Matrix';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Dependency Matrix Overview",
  "id": "1-dependency-matrix-overview",
  "level": 2
}, {
  "value": "1.1 Visual Matrix",
  "id": "11-visual-matrix",
  "level": 3
}, {
  "value": "1.2 Tabular Matrix",
  "id": "12-tabular-matrix",
  "level": 3
}, {
  "value": "2. Dependency Details",
  "id": "2-dependency-details",
  "level": 2
}, {
  "value": "2.1 Workflow Management Package",
  "id": "21-workflow-management-package",
  "level": 3
}, {
  "value": "2.2 Numbering &amp; Versioning Package",
  "id": "22-numbering--versioning-package",
  "level": 3
}, {
  "value": "2.3 Kanban Package",
  "id": "23-kanban-package",
  "level": 3
}, {
  "value": "3. Dependency Types",
  "id": "3-dependency-types",
  "level": 2
}, {
  "value": "3.1 Hard Dependencies (Not Allowed)",
  "id": "31-hard-dependencies-not-allowed",
  "level": 3
}, {
  "value": "3.2 Soft/Optional Dependencies",
  "id": "32-softoptional-dependencies",
  "level": 3
}, {
  "value": "3.3 Integration Dependencies",
  "id": "33-integration-dependencies",
  "level": 3
}, {
  "value": "4. Circular Dependencies",
  "id": "4-circular-dependencies",
  "level": 2
}, {
  "value": "4.1 Analysis",
  "id": "41-analysis",
  "level": 3
}, {
  "value": "4. Breaking Dependencies",
  "id": "4-breaking-dependencies",
  "level": 2
}, {
  "value": "4.1 Workflow Management",
  "id": "41-workflow-management",
  "level": 3
}, {
  "value": "4.2 Numbering &amp; Versioning",
  "id": "42-numbering--versioning",
  "level": 3
}, {
  "value": "4.3 Kanban",
  "id": "43-kanban",
  "level": 3
}, {
  "value": "5. Dependency Graph",
  "id": "5-dependency-graph",
  "level": 2
}, {
  "value": "5.1 Visual Graph",
  "id": "51-visual-graph",
  "level": 3
}, {
  "value": "5.2 Dependency Flow",
  "id": "52-dependency-flow",
  "level": 3
}, {
  "value": "6. Usage Scenarios",
  "id": "6-usage-scenarios",
  "level": 2
}, {
  "value": "6.1 Standalone Usage",
  "id": "61-standalone-usage",
  "level": 3
}, {
  "value": "6.2 Combined Usage",
  "id": "62-combined-usage",
  "level": 3
}, {
  "value": "7. Dependency Matrix Summary",
  "id": "7-dependency-matrix-summary",
  "level": 2
}, {
  "value": "8. Recommendations",
  "id": "8-recommendations",
  "level": 2
}, {
  "value": "8.1 For Package Maintainers",
  "id": "81-for-package-maintainers",
  "level": 3
}, {
  "value": "8.2 For Package Users",
  "id": "82-for-package-users",
  "level": 3
}, {
  "value": "9. Conclusion",
  "id": "9-conclusion",
  "level": 2
}, {
  "value": "10. Next Steps",
  "id": "10-next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
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
        id: "package-dependency-matrix",
        children: "Package Dependency Matrix"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E01:S02", ":T03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E01:S02", ":T03", " – Create package dependency matrix", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document provides a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "visual dependency matrix"
      }), " for the three framework packages in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), ". It shows dependencies between packages, identifies optional vs required dependencies, documents how to break dependencies if needed, and provides guidance for standalone and combined usage."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Findings:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No hard dependencies between packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All dependencies are soft/optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All packages can be used standalone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Integration is optional and well-documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-dependency-matrix-overview",
      children: "1. Dependency Matrix Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-visual-matrix",
      children: "1.1 Visual Matrix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────────┐\n│                    PACKAGE DEPENDENCY MATRIX                     │\n├─────────────────────────────────────────────────────────────────┤\n│                                                                 │\n│  ┌──────────────────┐                                          │\n│  │ Workflow          │                                          │\n│  │ Management        │                                          │\n│  │                   │                                          │\n│  │ Standalone: ✅    │                                          │\n│  │ Dependencies:     │                                          │\n│  │  • Git            │                                          │\n│  │  • Python 3       │                                          │\n│  │  • AI Assistant   │                                          │\n│  │                   │                                          │\n│  │ Optional:         │                                          │\n│  │  └─► Numbering &  │                                          │\n│  │      Versioning   │                                          │\n│  │      (soft)        │                                          │\n│  └──────────────────┘                                          │\n│           │                                                      │\n│           │ (optional integration)                               │\n│           ▼                                                      │\n│  ┌──────────────────┐                                          │\n│  │ Kanban            │                                          │\n│  │                   │                                          │\n│  │ Standalone: ✅    │                                          │\n│  │ Dependencies:     │                                          │\n│  │  • Git            │                                          │\n│  │  • Markdown       │                                          │\n│  │                   │                                          │\n│  │ Optional:         │                                          │\n│  │  ├─► Numbering &  │                                          │\n│  │  │   Versioning   │                                          │\n│  │  │   (integration)│                                          │\n│  │  └─► Workflow     │                                          │\n│  │      Management   │                                          │\n│  │      (integration)│                                          │\n│  └──────────────────┘                                          │\n│           ▲                                                      │\n│           │ (optional integration)                               │\n│           │                                                      │\n│  ┌──────────────────┐                                          │\n│  │ Numbering &       │                                          │\n│  │ Versioning        │                                          │\n│  │                   │                                          │\n│  │ Standalone: ✅    │                                          │\n│  │ Dependencies:     │                                          │\n│  │  • None           │                                          │\n│  │                   │                                          │\n│  │ Optional:         │                                          │\n│  │  (none - pure     │                                          │\n│  │   documentation)  │                                          │\n│  └──────────────────┘                                          │\n│                                                                 │\n└─────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-tabular-matrix",
      children: "1.2 Tabular Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Standalone?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hard Dependencies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Soft/Optional Dependencies"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integration Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git, Python 3, AI Assistant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning (soft)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban (RW updates)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Numbering & Versioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban (version markers), Workflow Management (version schema)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git, Markdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning (integration), Workflow Management (integration)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both other packages (via integration guides)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-dependency-details",
      children: "2. Dependency Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-workflow-management-package",
      children: "2.1 Workflow Management Package"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Capability:"
      }), " ✅ Yes (9/10 independence score)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard Dependencies (Required):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git (for version control)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3 (for validation scripts)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI Assistant (for workflow execution)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Soft/Optional Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering & Versioning Package"
        }), " (soft)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " Provides portable version schema policy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact if Missing:"
            }), " Workflow Management includes its own versioning policy, so this is optional"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative:"
            }), " Use Workflow Management's included versioning policy or swap in custom policy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration:"
            }), " RW uses version schema from Numbering & Versioning (if available)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Package"
        }), " (optional)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " RW can update Kanban docs automatically"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact if Missing:"
            }), " Can use RW without Kanban, just skip Kanban update steps"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative:"
            }), " Manually update Kanban docs or use custom workflow"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To use without Numbering & Versioning: Use included versioning policy or swap in custom policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To use without Kanban: Skip Kanban update steps in RW"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To use without Python: Remove validation scripts (not recommended)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-numbering--versioning-package",
      children: "2.2 Numbering & Versioning Package"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Capability:"
      }), " ✅ Yes (10/10 independence score)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard Dependencies (Required):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None (pure documentation package)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Soft/Optional Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None (fully independent)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow Management Package"
          }), " (optional)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " Workflow Management can use Numbering & Versioning's version schema"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact if Missing:"
            }), " Workflow Management includes its own versioning policy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative:"
            }), " Use Workflow Management's included versioning policy"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration:"
            }), " Workflow Management references Numbering & Versioning schema (if available)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Kanban Package"
          }), " (optional)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " Kanban uses version markers from Numbering & Versioning schema"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact if Missing:"
            }), " Kanban can work without versioning, just skip version markers"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative:"
            }), " Use custom versioning or skip version markers"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration:"
            }), " Kanban references version schema for version markers"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No dependencies to break (fully independent)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-kanban-package",
      children: "2.3 Kanban Package"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Capability:"
      }), " ✅ Yes (9/10 independence score)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard Dependencies (Required):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git (for version control)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markdown (for documentation)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Soft/Optional Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Numbering & Versioning Package"
          }), " (integration)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " Provides version schema for version markers"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact if Missing:"
            }), " Kanban can work without versioning, just skip version markers"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative:"
            }), " Use custom versioning or skip version markers"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration:"
            }), " Kanban uses version markers (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v0.1.2.1+1)"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow Management Package"
          }), " (integration)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose:"
            }), " RW can update Kanban docs automatically"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact if Missing:"
            }), " Can use Kanban without RW, just update docs manually"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative:"
            }), " Use custom workflow or update Kanban docs manually"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Integration:"
            }), " RW updates Kanban docs with version markers"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Breaking Dependencies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To use without Numbering & Versioning: Skip version markers or use custom versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "To use without Workflow Management: Update Kanban docs manually or use custom workflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-dependency-types",
      children: "3. Dependency Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-hard-dependencies-not-allowed",
      children: "3.1 Hard Dependencies (Not Allowed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " No package can have a hard dependency on another dev-kit package."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliant"
      }), " - No hard dependencies between packages"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What This Means:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages cannot require other packages to function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages cannot break if other packages are missing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Packages must work standalone"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception:"
      }), " Standard tools (Git, Python, etc.) are allowed as dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-softoptional-dependencies",
      children: "3.2 Soft/Optional Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Packages can have soft/optional dependencies on other packages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliant"
      }), " - All dependencies are soft/optional"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management → Numbering & Versioning: Soft (optional version schema)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban → Numbering & Versioning: Integration (optional version markers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban → Workflow Management: Integration (optional RW updates)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Must clearly label dependencies as \"optional\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Must document what happens if dependency is not used"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Must provide alternatives if dependency is not available"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-integration-dependencies",
      children: "3.3 Integration Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Integration between packages is optional and must be well-documented."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliant"
      }), " - All integrations are optional and documented"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management ↔ Numbering & Versioning:"
        }), " RW uses version schema"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban ↔ Numbering & Versioning:"
        }), " Kanban uses version markers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban ↔ Workflow Management:"
        }), " RW updates Kanban docs"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Integration guides exist (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban/integration/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Integration clearly marked as optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Standalone usage documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-circular-dependencies",
      children: "4. Circular Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-analysis",
      children: "4.1 Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Are there any circular dependencies between packages?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "No circular dependencies"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management → Numbering & Versioning: One-way (soft)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban → Numbering & Versioning: One-way (integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban → Workflow Management: One-way (integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No package depends on a package that depends on it"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion:"
      }), " Dependency graph is acyclic (no cycles)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-breaking-dependencies",
      children: "4. Breaking Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-workflow-management",
      children: "4.1 Workflow Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "To Use Without Numbering & Versioning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Workflow Management's included versioning policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or swap in your own custom versioning policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update validation scripts if schema differs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "To Use Without Kanban:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip Kanban update steps in RW (Steps 3, 4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or use custom Kanban update workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW will still work for version bumping and changelog generation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "To Use Without Python:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove validation scripts (not recommended)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or use alternative validation method"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW will still work, but validation will be manual"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-numbering--versioning",
      children: "4.2 Numbering & Versioning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "No Dependencies to Break:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numbering & Versioning is fully independent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No dependencies on other packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be used in any context"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-kanban",
      children: "4.3 Kanban"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "To Use Without Numbering & Versioning:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skip version markers in Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or use custom versioning format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban will still work for work item tracking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "To Use Without Workflow Management:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Kanban docs manually"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Or use custom workflow for updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban will still work for work item management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-dependency-graph",
      children: "5. Dependency Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-visual-graph",
      children: "5.1 Visual Graph"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    ┌─────────────────────┐\n                    │  Standard Tools     │\n                    │  (Git, Python, etc.)│\n                    └─────────────────────┘\n                             │\n                             │ (hard dependencies)\n                             │\n        ┌────────────────────┼────────────────────┐\n        │                    │                    │\n        ▼                    ▼                    ▼\n┌───────────────┐    ┌───────────────┐    ┌───────────────┐\n│   Workflow    │    │   Numbering   │    │    Kanban     │\n│  Management   │    │  & Versioning │    │               │\n│               │    │               │    │               │\n│ Standalone: ✅│    │ Standalone: ✅ │    │ Standalone: ✅│\n└───────────────┘    └───────────────┘    └───────────────┘\n        │                    │                    │\n        │                    │                    │\n        │ (soft)             │ (integration)      │ (integration)\n        │                    │                    │\n        └────────────────────┼────────────────────┘\n                             │\n                             │ (optional integrations)\n                             │\n                    ┌────────┴────────┐\n                    │  Combined Usage │\n                    │  (All Packages) │\n                    └─────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-dependency-flow",
      children: "5.2 Dependency Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Standalone Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each package → Standard Tools (hard)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No inter-package dependencies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Combined Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow Management → Numbering & Versioning (soft)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban → Numbering & Versioning (integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban → Workflow Management (integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All packages → Standard Tools (hard)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-usage-scenarios",
      children: "6. Usage Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-standalone-usage",
      children: "6.1 Standalone Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 1: Workflow Management Only"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies: Git, Python 3, AI Assistant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional: None required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Just need RW trigger, don't need Kanban or versioning policy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 2: Numbering & Versioning Only"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies: None"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional: None required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Just need versioning policy, don't need workflows or Kanban"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 3: Kanban Only"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies: Git, Markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional: None required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Just need Kanban board, don't need workflows or versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-combined-usage",
      children: "6.2 Combined Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 4: Workflow Management + Numbering & Versioning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies: Git, Python 3, AI Assistant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration: RW uses Numbering & Versioning schema"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: RW with consistent versioning policy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 5: Kanban + Numbering & Versioning"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies: Git, Markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration: Kanban uses version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Kanban with version-based traceability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 6: Kanban + Workflow Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies: Git, Python 3, AI Assistant, Markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration: RW updates Kanban docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Automated Kanban updates via RW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenario 7: All Three Packages"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dependencies: Git, Python 3, AI Assistant, Markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration: Full three-way integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Case: Complete integrated system with end-to-end traceability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-dependency-matrix-summary",
      children: "7. Dependency Matrix Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Package"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Independence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hard Deps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Soft Deps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integration Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Break Deps?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git, Python, AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Numbering & Versioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10/10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban, Workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (no deps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git, Markdown"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numbering & Versioning, Workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Points:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All packages are highly independent (9-10/10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No hard dependencies between packages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All dependencies are soft/optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All packages can be used standalone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Dependencies can be broken if needed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-recommendations",
      children: "8. Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-for-package-maintainers",
      children: "8.1 For Package Maintainers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain Independence:"
        }), " Keep packages independent, avoid hard dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Dependencies:"
        }), " Clearly label all dependencies as optional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provide Alternatives:"
        }), " Document what happens if dependencies are missing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Standalone:"
        }), " Ensure packages work without other packages"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-for-package-users",
      children: "8.2 For Package Users"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start Small:"
        }), " Begin with one package, add more as needed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understand Dependencies:"
        }), " Read dependency documentation before adopting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Integrations:"
        }), " Verify integrations work before relying on them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Customize Carefully:"
        }), " Understand impact of breaking dependencies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-conclusion",
      children: "9. Conclusion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " framework packages demonstrate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "excellent modularity"
      }), " with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No hard dependencies"
        }), " between packages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "High independence scores"
        }), " (9-10/10)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexible consumption"
        }), " (standalone, combined, incremental)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Well-documented integrations"
        }), " (optional, clear alternatives)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependency Matrix Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Healthy"
      }), " - No circular dependencies, all dependencies are optional, packages can be used independently or together."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-next-steps",
      children: "10. Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This dependency matrix provides the foundation for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 4:"
        }), " Document consumption patterns for each framework (detailed examples)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task 5:"
        }), " Update package READMEs with modularity information (implementation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Document completed: 2025-12-02"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Task: E1:S02:T003"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Next: E01:S02", ":T04", " – Document consumption patterns for each framework"]
      })]
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