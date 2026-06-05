"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["74156"], {
78460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_13_workflow_management_package_implementation_review_component_inventory_map_md_918_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-13-workflow-management-package-implementation-review-component-inventory-map-md-918.json
var site_docs_project_management_kanban_epics_epic_02_story_13_workflow_management_package_implementation_review_component_inventory_map_md_918_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map","title":"Workflow Management Package — Component Inventory Map","description":"TaskS13:T02","source":"@site/../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md","sourceDirName":"project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review","slug":"/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S13:T10 – Kanban Transform Consolidation","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation"},"next":{"title":"Workflow Management Package — Integration and Dependency Alignment Report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Workflow Management Package — Component Inventory Map';

const assets = {

};



const toc = [{
  "value": "Summary — Expected vs Actual Gap Table",
  "id": "summary--expected-vs-actual-gap-table",
  "level": 2
}, {
  "value": "1. Core Package Docs",
  "id": "1-core-package-docs",
  "level": 2
}, {
  "value": "2. KB / Methodology",
  "id": "2-kb--methodology",
  "level": 2
}, {
  "value": "2.1 vwmp Agent Execution Guides (<code>KB/Documentation/Developer_Docs/vwmp/</code>)",
  "id": "21-vwmp-agent-execution-guides-kbdocumentationdeveloper_docsvwmp",
  "level": 3
}, {
  "value": "2.2 Architecture / Standards (<code>KB/Architecture/Standards_and_ADRs/</code>)",
  "id": "22-architecture--standards-kbarchitecturestandards_and_adrs",
  "level": 3
}, {
  "value": "2.3 Analysis &amp; Templates",
  "id": "23-analysis--templates",
  "level": 3
}, {
  "value": "3. Workflows",
  "id": "3-workflows",
  "level": 2
}, {
  "value": "3.1 Registry (<code>workflows/workflow-registry.yaml</code>)",
  "id": "31-registry-workflowsworkflow-registryyaml",
  "level": 3
}, {
  "value": "3.2 Cross-cutting workflow artefacts",
  "id": "32-cross-cutting-workflow-artefacts",
  "level": 3
}, {
  "value": "4. Scripts",
  "id": "4-scripts",
  "level": 2
}, {
  "value": "4.1 By area (production <code>.py</code> counts)",
  "id": "41-by-area-production-py-counts",
  "level": 3
}, {
  "value": "4.2 Root orchestrators (selected)",
  "id": "42-root-orchestrators-selected",
  "level": 3
}, {
  "value": "4.3 T01-listed validation scripts",
  "id": "43-t01-listed-validation-scripts",
  "level": 3
}, {
  "value": "5. Config &amp; Install",
  "id": "5-config--install",
  "level": 2
}, {
  "value": "6. Adopter Surfaces",
  "id": "6-adopter-surfaces",
  "level": 2
}, {
  "value": "7. Cross-Cutting Drift",
  "id": "7-cross-cutting-drift",
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
    p: "p",
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
        id: "workflow-management-package--component-inventory-map",
        children: "Workflow Management Package — Component Inventory Map"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T02-inventory-package-components-and-map-to-expectations",
        children: ["E02:S13", ":T02"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expectations baseline:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
        children: "T01-expectations-baseline.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre-inventory input:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
        children: ["E07:S07", ":T01", " report §1–2"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package root:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inventory date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Behavior validation (E02:S13", ":T03", "):"]
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
        children: "workflow-behavior-validation-report.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Integration alignment (E02:S13", ":T04", "):"]
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report",
        children: "integration-alignment-report.md"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Coverage status legend:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Met"
      }), " | ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Partial"
      }), " | ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Gap"
      }), " | ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Undocumented"
      }), " | ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Superseded"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary--expected-vs-actual-gap-table",
      children: "Summary — Expected vs Actual Gap Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "T01 / expectation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual inventory"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence / notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW 13-step process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live spec + YAML + 25+ validators; Step 9.5/9.6/12.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T08 sync; machinery exceeds original T01 Step 9 list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UKW 8-step (T01)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Live 9 steps + Step 2.5 + flags (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-u/-p/-a/--rp/-c"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 doc lag; registry + UKW excerpt aligned post-T08"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CMW deterministic scripts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/changelog/"
            }), " (8 prod modules)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cmw.py"
            }), ", archive, dedupe, size check"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intake 7-step"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["6 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake_*.py"
            }), " + nested YAML"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 listed; trigger chain present"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validation scripts (4 in T01)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["25 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_*.py"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validation/"
            }), " + 4 in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validation/package/"
            }), " + root gates"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expansion since T01; README still lists subset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/check_changelog_size.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/changelog/check_changelog_size.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README + T01 path mismatch (E07 M2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PVW, PIR, migration, testing, refactor YAML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested dirs + flat legacy copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present; 7 flat YAML lack deprecation (FR-050 / E07 H2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "version_registry.py"
            }), " (T01)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "build_semver_registry.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_task_touch.py"
            }), ", task-touch tooling"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Superseded"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renamed/superseded (E07 M3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub release script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/create_github_release.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 expectation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "install_release_workflow.py"
            }), " + greenfield/package helpers"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Met core; additional install scripts undocumented in T01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent execution guides"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["25 vwmp guides under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Some KB paths still use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "confidentia"
            }), " examples (E07 M4)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-registry.yaml"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common_components"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "common/templates/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common/schemas/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common/utilities/"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not present"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry drift"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["README path ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/Developer_Docs/vwmp/"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Actual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path alias drift in README"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Journal (FR-059)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/journal/"
            }), " (10 prod modules)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in T01 baseline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task split (FR-011)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/task_split/"
            }), " (3 modules)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in T01 baseline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPW validators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_plan_wiring.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-T01 additions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release readiness gate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validate_release_readiness.py"
            }), " (root)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Post-T01; layout differs from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validation/"
            }), " peers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 validators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_step7_*"
            }), " (root)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-T01 additions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packaging scripts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "build_*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "upload_*"
            }), " (6+ root modules)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainer-only; unclear adopter value (E07 L2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Empty ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/install/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placeholder dir (E07 L1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-core-package-docs",
      children: "1. Core Package Docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package manifest, workflows, scripts, install modes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lists 4 validators; wrong ", (0,jsx_runtime.jsx)(_components.code, {
              children: "check_changelog_size"
            }), " path; vwmp path alias"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package SemVer history (v2.3.0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-framework agent roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in T01; Validation/CMW roles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "canonical-rw-steps.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW step list SoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Refreshed E02:S13", ":T08"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable RW excerpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-source parity maintained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-ukw-trigger-section.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable UKW excerpt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-source parity maintained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".markdownlint.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lint config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supporting artefact"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-kb--methodology",
      children: "2. KB / Methodology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "21-vwmp-agent-execution-guides-kbdocumentationdeveloper_docsvwmp",
      children: ["2.1 vwmp Agent Execution Guides (", (0,jsx_runtime.jsx)(_components.code, {
        children: "KB/Documentation/Developer_Docs/vwmp/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Count:"
      }), " 25 ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".md"
      }), " files"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "agent-driven-workflow-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General methodology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core methodology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW step-by-step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Some ", (0,jsx_runtime.jsx)(_components.code, {
              children: "confidentia"
            }), " examples remain"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow-reference.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete RW reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update-kanban-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live 9+2.5 steps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "implementation-planning-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-T01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "package-version-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PVW guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 listed PVW YAML only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pir-workflow-agent-execution.md"
            }), " (+ reference, usage, kanban/versioning guides)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIR suite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 listed PIR YAML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migration-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "refactor-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Refactor guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testing-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Testing guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "portable-workflow-implementation-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-step-tracker-contract.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracker contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TODO tracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-011"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "board-stamp-authority.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "state-icons.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban stamp/icon policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-097 / UXR-012"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-installer-quickstart-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installer quickstart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beyond T01 installer list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Other vwmp guides (PDCA, forensic recovery, ECC bridge, customization)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supporting methodology"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Organic growth"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "22-architecture--standards-kbarchitecturestandards_and_adrs",
      children: ["2.2 Architecture / Standards (", (0,jsx_runtime.jsx)(_components.code, {
        children: "KB/Architecture/Standards_and_ADRs/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-strategy.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-flaws-reference-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW flaws reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-error-reference-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-analysis--templates",
      children: "2.3 Analysis & Templates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Analysis/*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adoption friction, Step 7 hardening, etc."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Templates/*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDCA phases, commit-message language"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-workflows",
      children: "3. Workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "31-registry-workflowsworkflow-registryyaml",
      children: ["3.1 Registry (", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflows/workflow-registry.yaml"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Registered workflows:"
      }), " 11 (RW, CMW, UKW, PIR, Intake, Migration, Refactor, Testing, PVW, FHM, ICW/IPW)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Workflow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nested SoT"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flat legacy copy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Registry"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated stub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UKW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update-kanban-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update-kanban-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CMW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog-management-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog-management-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PVW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "package-version-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "package-version-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "post-implementation-review/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pir-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ICW/IPW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "implementation-cycle-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migration-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migration-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testing-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "testing-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Refactor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "refactor-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "refactor-workflow.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FHM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "framework-health-monitoring-workflow/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Flat root YAML count:"
      }), " 8 (7 non-RW copies without deprecation header + RW deprecated stub)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-cross-cutting-workflow-artefacts",
      children: "3.2 Cross-cutting workflow artefacts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflows/MIGRATION_GUIDE.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat → nested migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-050 / T107"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflows/workflow-registry.yaml"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common_components"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "templates/schemas/utilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dirs do not exist"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-scripts",
      children: "4. Scripts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "41-by-area-production-py-counts",
      children: ["4.1 By area (production ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".py"
      }), " counts)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Prod ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".py"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Co-located tests"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation (4 listed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/package/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PVW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/kanban/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW/RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW implied"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/changelog/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMW scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/version/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/PVW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SemVer + registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/journal/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/documentation/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/icw/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICW/IPW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/task_split/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake/shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/install/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/"
            }), " (root)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "57"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/Intake/shared/packaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-root-orchestrators-selected",
      children: "4.2 Root orchestrators (selected)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Script"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 documented"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/UKW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (Step 7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_release_readiness.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_step7_completeness.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_step7_post_commit.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_canonical_steps.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate-workflow-docs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "shared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_release_workflow.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "intake_*.py"
            }), " (6 modules)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "trigger_registry.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow_executor.py"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW/E2", ":S07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "create_github_release.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "build_*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "upload_*"
            }), " (6 modules)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "packaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-t01-listed-validation-scripts",
      children: "4.3 T01-listed validation scripts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "T01 path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/validate_branch_context.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/validate_changelog_format.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/validate_version_bump.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validation/check_changelog_size.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/changelog/check_changelog_size.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-config--install",
      children: "5. Config & Install"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config/rw-config-schema.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config/examples/rw-config-*.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install templates (4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config/ecc-adk-bridge.yaml.template"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC bridge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config/github-issue-install-signoff-contract.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install signoff"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "config/install-error-codes.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/install_release_workflow.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW installer CLI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/README-rw-installer.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installer docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/PACKAGE_INSTALLATION_GUIDE.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tar.gz install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/rw-trigger-dual-source-parity.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW parity checklist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T08 deliverable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/ukw-dual-source-parity.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW parity checklist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/rw-validators-consumer-layout.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter validator layout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/workflow-documentation-style-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow README standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Referenced in registry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-adopter-surfaces",
      children: "6. Adopter Surfaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T01 ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "agents/*/AGENTS.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-workflow agent bootstrap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "skills/adk-*/SKILL.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC skill pack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "templates/github-actions/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional GitHub Actions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Met"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BYOB badge workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "templates/icw/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICW templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "templates/workflow-readme-template.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "design/trigger-detection.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Undocumented"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design note"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-cross-cutting-drift",
      children: "7. Cross-Cutting Drift"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected (T01 / registry)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vwmp doc path"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/Developer_Docs/vwmp/"
            }), " (README)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/Developer_Docs/vwmp/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validator count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29+ in validation areas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UKW step model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 + 2.5 + flags"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "version_registry.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "build_semver_registry.py"
            }), ", task-touch tooling"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Superseded"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Registry ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common_components"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "common/templates/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "schemas/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "utilities/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not on disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flat workflow YAML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single nested SoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 undeprecated flat copies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gap"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban update paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7 + UKW"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), " + agents + validators"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single helper"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3+ independent ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
          children: "T01 expectations baseline"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
          children: ["E07:S07", ":T01", " code review report §1–2"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T02-inventory-package-components-map",
          children: "IPP-E02S13T02"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Package: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/"
        })]
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