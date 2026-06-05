"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["70260"], {
32767(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_13_workflow_management_package_implementation_review_integration_alignment_report_md_4c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-13-workflow-management-package-implementation-review-integration-alignment-report-md-4c6.json
var site_docs_project_management_kanban_epics_epic_02_story_13_workflow_management_package_implementation_review_integration_alignment_report_md_4c6_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report","title":"Workflow Management Package — Integration and Dependency Alignment Report","description":"TaskS13:T04","source":"@site/../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md","sourceDirName":"project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review","slug":"/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Workflow Management Package — Component Inventory Map","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map"},"next":{"title":"Workflow Management Package — Behavior Validation Report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Workflow Management Package — Integration and Dependency Alignment Report';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Summary — Discrepancy Table (feeds T05)",
  "id": "summary--discrepancy-table-feeds-t05",
  "level": 2
}, {
  "value": "1. Hard Dependencies",
  "id": "1-hard-dependencies",
  "level": 2
}, {
  "value": "2. Versioning Soft Dependency",
  "id": "2-versioning-soft-dependency",
  "level": 2
}, {
  "value": "3. Kanban Soft Dependency",
  "id": "3-kanban-soft-dependency",
  "level": 2
}, {
  "value": "4. Three-Way Integration (Kanban ↔ Versioning ↔ RW)",
  "id": "4-three-way-integration-kanban--versioning--rw",
  "level": 2
}, {
  "value": "5. rw-config Integration Hub",
  "id": "5-rw-config-integration-hub",
  "level": 2
}, {
  "value": "6. Cross-Workflow Integration Surfaces",
  "id": "6-cross-workflow-integration-surfaces",
  "level": 2
}, {
  "value": "7. External Service Integration",
  "id": "7-external-service-integration",
  "level": 2
}, {
  "value": "8. Adopter Packaging Integration",
  "id": "8-adopter-packaging-integration",
  "level": 2
}, {
  "value": "9. Cohesion Crosswalk (E07 / T03)",
  "id": "9-cohesion-crosswalk-e07--t03",
  "level": 2
}, {
  "value": "Kanban integration entrypoints (V9)",
  "id": "kanban-integration-entrypoints-v9",
  "level": 3
}, {
  "value": "Config loader implementations (V8)",
  "id": "config-loader-implementations-v8",
  "level": 3
}, {
  "value": "10. Automated Verification Evidence (V1–V12)",
  "id": "10-automated-verification-evidence-v1v12",
  "level": 2
}, {
  "value": "11. Compliance Assessment",
  "id": "11-compliance-assessment",
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
        id: "workflow-management-package--integration-and-dependency-alignment-report",
        children: "Workflow Management Package — Integration and Dependency Alignment Report"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T04-review-integrations-and-dependency-alignment",
        children: ["E02:S13", ":T04"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expectations baseline:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
        children: "T01-expectations-baseline.md"
      }), " — §Integration Expectations", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Component inventory:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
        children: "component-inventory-map.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior validation input:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
        children: "workflow-behavior-validation-report.md"
      }), " — D9, D11", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code review input:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
        children: ["E07:S07", ":T01", " report §Integration"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Live reference config:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " (project root)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package root:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Review date:"
      }), " 2026-06-05"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status legend:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ALIGNED"
      }), " | ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PARTIAL"
      }), " | ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GAP"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Integration alignment confirms ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "documented soft-dependency contracts are sound"
      }), " — hard deps, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " hub, Kanban/Versioning integration keys, three-way forensic traceability, and cross-workflow surfaces are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALIGNED"
      }), " at the contract level. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cohesion gaps"
      }), " from E07 (H3 kanban update fragmentation, M1 config loader duplication, registry ", (0,jsx_runtime.jsx)(_components.code, {
        children: "common_components"
      }), " drift, README Step 4 vs Step 7 Kanban wording) remain ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PARTIAL"
      }), " and do not block RC integration posture but increase adopter drift risk."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "0 Critical"
        }), " integration defects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1 High"
        }), " (H3 — kanban update path fragmentation affects integration maintainability)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "4 Medium"
        }), " (M1 config loaders; README Kanban step drift; registry ", (0,jsx_runtime.jsx)(_components.code, {
          children: "common_components"
        }), "; README vwmp path alias)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2 Low"
        }), " (T01 perpetual-task ID examples; optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "notion_hub_url"
        }), " not in schema doc)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Overall RC integration posture: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conditional pass"
      }), " — contracts align; cohesion remediation deferred to T05/T06."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary--discrepancy-table-feeds-t05",
      children: "Summary — Discrepancy Table (feeds T05)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Consolidated in:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment",
        children: ["E02:S13", ":T05", " gap log"]
      }), " (I4, I10–I12 mapped to GAP-WFMGT-* entries)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence / notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["README + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " document Git, Python 3, PyYAML; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--check-deps"
            }), " path"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning soft dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            }), " in package KB; validators + task-touch in live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban soft dependency (contract)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "use_kanban: true"
            }), "; path patterns; FR-092 Step 7 in live spec"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban README step drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["README cites Kanban at RW ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Step 4"
            }), "; live agent spec: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Step 7"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-way stack traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T03 release chain: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            }), " → changelog → task doc → kboard (see §4)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rw-config integration hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live config satisfies schema required + Mode C keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-workflow registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["11 workflows registered; no explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dependencies"
            }), " block in registry YAML"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake→Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_integration: true"
            }), " in intake README + config examples"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIR cross-integration docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pir-kanban-integration-guide.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pir-versioning-integration-guide.md"
            }), " present"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config loader fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (M1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "22"
            }), " independent ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " definitions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban path fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (H3)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW Step 7 agent + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), " + UKW + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_step7_*"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Registry ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common_components"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GAP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Registry cites ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common/templates/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "schemas/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "utilities/"
            }), " — dirs absent"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter packaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["README scenarios + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "framework-dependency-architecture.md"
            }), " + install modes A/B/C"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC optional harness (FR-098)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Spec linked; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml.template"
            }), " + skills pack present"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub external integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "create_github_release.py"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "templates/github-actions/"
            }), " BYOB workflow"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "I16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts_path"
            }), " adopter layout"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Live: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts"
            }), "; schema documents brownfield mapping"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-hard-dependencies",
      children: "1. Hard Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expectation (T01/README)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Observed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README dependency matrix: Hard | Git | Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python 3 required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README + installer docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["PyYAML ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">=6.0"
            }), " for installer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["README §Hard dependencies; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--check-deps"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Installer venv guidance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " §Installer venv dependencies"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Independence score 9/10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README claim; soft deps optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence (V1):"
      }), " README lines 164–206; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py --check-deps"
      }), " documented in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INSTALL_IN_YOUR_PROJECT.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-versioning-soft-dependency",
      children: "2. Versioning Soft Dependency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expectation (T01)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Observed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning_schema"
            }), "; packaged ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Architecture/Standards_and_ADRs/versioning-policy.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SemVer external display"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "semver_converter.py"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_mapping_strategy: task_touch"
            }), " in live config"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), " contract"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Smoke test exit 0 with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--requested E02:S13:T04 --art"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optional swap own policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README §With Numbering & Versioning — soft dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Packaged vs project governance path"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Package ships KB copy; ai-dev-kit also has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/standards/dev-kit-versioning-policy.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            }), " (dual SoT by design for adopters)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence (V3):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$ python .../validate_version_bump.py --strict --requested E02:S13:T04 --art\n✅ Version bump logic validated!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-kanban-soft-dependency",
      children: "3. Kanban Soft Dependency"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expectation (T01)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Observed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "use_kanban"
            }), " toggle"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use_kanban: true"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Path patterns (", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_root"
            }), ", epic/story/task patterns)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Live config matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config-schema.md"
            }), " Mode C"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 four-surface contract"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-092 in live ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " + portable excerpt; release-workflow README Step 7"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UKW bottom-up sync"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UKW guide + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-ukw-trigger-section.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single active board (ADR-018)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_board: kboard.md"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbu_board"
            }), " deprecated in schema"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fr_br_root"
            }), " for intake"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Live: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "README Kanban at RW Step 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README §With Kanban Package: \"Step 4\" / \"skip Step 4\""
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            }), " (I4) — live spec is Step 7"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence (V4):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " lines 18–27 vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/rw-config-schema.md"
      }), " Mode C example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-three-way-integration-kanban--versioning--rw",
      children: "4. Three-Way Integration (Kanban ↔ Versioning ↔ RW)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace example — T03 release (v0.2.13.3+1):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "src/ai_dev_kit/version.py"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.2.13.3+1"
            }), " at T03 ship"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Changelog archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_v0.2.13.3+1.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T03 forensic marker ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v0.2.13.3+1)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story checklist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story 13 T03 row with version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kboard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " Last Updated cites RW E02:S13", ":T03", " v0.2.13.3+1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Installer Mode C:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config/examples/rw-config-full-stack.yaml"
      }), " (if present) + live ai-dev-kit config demonstrates full stack."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expectation (T01 §Complete Integration)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Observed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automated kanban updates with version markers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 RW Step 7 updated four surfaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version-aware kanban sync"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW reads version from task/story docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full forensic traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 chain above"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence (V5):"
      }), " Doc inspection of T03 artefacts; kboard metadata line."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-rw-config-integration-hub",
      children: "5. rw-config Integration Hub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Schema key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required when"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "src/ai_dev_kit/version.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "main_changelog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog_dir"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts_path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "readme_file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "use_kanban"
            }), " + kanban paths"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mode C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All present"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_mapping_strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "task_touch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning_mode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notion_hub_url"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional (project)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            }), " (not in schema — Low doc gap)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fbu_board"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Omitted (correct)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence (V2):"
      }), " Structural comparison ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config-schema.md"
      }), " ↔ live config."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-cross-workflow-integration-surfaces",
      children: "6. Cross-Workflow Integration Surfaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Integration surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Documented contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Observed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intake → Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_integration: true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "intake-workflow README + YAML config table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PIR → RW/Kanban/Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIR integration guides"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pir-kanban-integration-guide.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pir-versioning-integration-guide.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UKW → RW attribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perpetual task discovery"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " UKW→RW wiring; dynamic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "perpetual_task: true"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CMW → RW Step 9.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking trigger"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW spec + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/changelog/check_changelog_size.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PVW → RW Step 2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Package version bump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "package-version-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPW/ICW → Kanban task wiring"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Plan doc under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["IPW command + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_*"
            }), " validators"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECC harness (FR-098)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional coexistence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["README link; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml.template"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "skills/adk-*/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 workflows + common_components"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Registry v1.1.0; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no explicit inter-workflow dependency graph"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            }), " (I7)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence (V6–V7):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow-registry.yaml"
      }), "; intake-workflow README §Configuration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-external-service-integration",
      children: "7. External Service Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Service"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Package artefact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Releases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/create_github_release.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Actions (optional)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "templates/github-actions/update-badges-byob.yml"
            }), " + README"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notion hub (project-specific)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "notion_hub_url"
            }), " in live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            }), " (project extension)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence (V15):"
      }), " Component inventory §5; live config lines 68–72."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-adopter-packaging-integration",
      children: "8. Adopter Packaging Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Documented"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy-paste vendor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README §Copy, don't reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git submodule"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "framework-dependency-architecture.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLI installer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "install_release_workflow.py"
            }), " modes A/B/C"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Brownfield path mapping"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts_path"
            }), " key"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portable RW/UKW excerpts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-ukw-trigger-section.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scenario 1: RW-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mode A in schema"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scenario 2: RW + Versioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README Scenario 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scenario 3: Full stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mode C / Scenario 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ALIGNED"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence (V10):"
      }), " README §Modularity & Dependencies; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "framework-dependency-architecture.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-cohesion-crosswalk-e07--t03",
      children: "9. Cohesion Crosswalk (E07 / T03)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "E07/T03 ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integration impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T04 confirmation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remediation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "H3 Kanban update fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple integration entrypoints for same four-surface contract"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Confirmed"
            }), " (I11)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05: shared transform module + boundary doc (E5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["M1 Duplicate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adopter ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts_path"
            }), " resolution inconsistent risk"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Confirmed"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "22"
            }), " defs (I10)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05/T06: E1 shared module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Registry ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common_components"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry integration surface broken for shared templates"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Confirmed"
            }), " (I12)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05: create dirs or update registry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 D11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as H3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Confirmed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 D9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as M1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Confirmed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05/T06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "README Step 4 Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter integration doc wrong step"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Confirmed"
            }), " (I4)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05 README fix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "README vwmp path"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/..."
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB/Documentation/..."
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            }), " (inventory §7)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-integration-entrypoints-v9",
      children: "Kanban integration entrypoints (V9)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Entrypoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 agent manual reconciliation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four-surface scoped kanban (FR-092)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/update_kanban_docs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic kanban doc updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/UKW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UKW agent flow (Steps 3–6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up task→story→epic→board"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW agent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/kanban/*"
            }), " (20 modules)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stamps, MoSCOW, EST format, archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW/RW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_step7_*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_board_stamp_diff.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release-scope validation gates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 9"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "config-loader-implementations-v8",
      children: "Config loader implementations (V8)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Count:"
      }), " 22 files with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "def load_rw_config"
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/"
      }), " (changelog, kanban, validation, version, documentation, git_tag_handler, update_kanban_docs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-automated-verification-evidence-v1v12",
      children: "10. Automated Verification Evidence (V1–V12)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard deps documented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README + INSTALL guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rw-config schema vs live"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All required + Mode C keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning integration smoke"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), " exit 0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban integration keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live config patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-way narrative trace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 release chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-workflow registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 workflows; no dependency graph"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake→Kanban"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_integration: true"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config loader fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["22 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " defs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban path fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 entrypoint classes (H3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter packaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scenarios + framework-dependency-architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC optional integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098 spec + bridge template"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wiring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task ↔ IPP ↔ companion links"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-compliance-assessment",
      children: "11. Compliance Assessment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Integration domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contract alignment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cohesion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remediation owner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hard dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fully aligned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning soft dep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fully aligned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M1 loaders"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05/T06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban soft dep"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fully aligned"
            }), " (live spec)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "H3 paths; README Step 4 drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three-way stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fully aligned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rw-config hub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fully aligned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema doc gaps (notion key)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low priority"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-workflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mostly aligned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry dependency graph absent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter packaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fully aligned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "External services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fully aligned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment",
          children: "IPP-E02S13T04"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T04-review-integrations-and-dependency-alignment",
          children: "T04 task doc"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
          children: "T03 behavior validation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
          children: "T02 component inventory"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/rw-config-schema.md",
          children: "rw-config-schema.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/framework-dependency-architecture",
          children: "framework-dependency-architecture.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
          children: "FR-092"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
          children: "FR-098"
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