"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["38109"], {
20327(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_16_t_02_perpetual_task_inventory_md_fba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-16-t-02-perpetual-task-inventory-md-fba.json
var site_docs_implementation_cycles_ipp_e_2_s_16_t_02_perpetual_task_inventory_md_fba_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S16T02-perpetual-task-inventory","title":"E02:S16:T02 — Planning: Perpetual task inventory and classification (IPP)","description":"Host TaskS16:T02)","source":"@site/../docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E2:S16:T01 - Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story"},"next":{"title":"E2:S16:T03 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S16 — Planning: Perpetual task inventory and classification (IPP)';

const assets = {

};



const toc = [{
  "value": "1. Requirements (ascertained baseline)",
  "id": "1-requirements-ascertained-baseline",
  "level": 2
}, {
  "value": "1.1 Functional requirements",
  "id": "11-functional-requirements",
  "level": 3
}, {
  "value": "1.2 Non-functional requirements",
  "id": "12-non-functional-requirements",
  "level": 3
}, {
  "value": "1.3 Invariants and boundaries",
  "id": "13-invariants-and-boundaries",
  "level": 3
}, {
  "value": "1.4 Referenced sources",
  "id": "14-referenced-sources",
  "level": 3
}, {
  "value": "2. Specification",
  "id": "2-specification",
  "level": 2
}, {
  "value": "2.1 Goal",
  "id": "21-goal",
  "level": 3
}, {
  "value": "2.2 Discovery methodology (AC1)",
  "id": "22-discovery-methodology-ac1",
  "level": 3
}, {
  "value": "2.3 Disposition taxonomy (AC2)",
  "id": "23-disposition-taxonomy-ac2",
  "level": 3
}, {
  "value": "2.4 Inventory and disposition table (curated)",
  "id": "24-inventory-and-disposition-table-curated",
  "level": 3
}, {
  "value": "2.5 Migration ID map (AC3)",
  "id": "25-migration-id-map-ac3",
  "level": 3
}, {
  "value": "2.6 Reference map — surface classes (AC4)",
  "id": "26-reference-map--surface-classes-ac4",
  "level": 3
}, {
  "value": "2.7 ADR checklist (§2.5 scoring)",
  "id": "27-adr-checklist-25-scoring",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "5. Documentation deliverables",
  "id": "5-documentation-deliverables",
  "level": 2
}, {
  "value": "6. Housing and publication",
  "id": "6-housing-and-publication",
  "level": 2
}, {
  "value": "7. Verification",
  "id": "7-verification",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e02s16--planning-perpetual-task-inventory-and-classification-ipp",
        children: ["E02:S16", ":T02", " — Planning: Perpetual task inventory and classification (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T02-inventory-and-classify-workflow-perpetual-tasks.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E02:S16", ":T02", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " Exhaustive inventory, disposition, ID map, and tiered reference map for workflow-related perpetual anchors (unblocks ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks",
        children: "IPP-E2S16T3 §7 Tranche 3B"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Upstream:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks",
        children: "FR-088"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story",
        children: "IPP-E2S16T1"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report",
        children: "E4S19T03 investigation report"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published (inventory artifact; execution of link edits is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T03 Tranche 3B"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (ascertained baseline)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-functional-requirements",
      children: "1.1 Functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhaustive inventory of workflow-related perpetual anchors and mis-housed candidates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02 AC1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each row: disposition (", (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_S16"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            }), ") + rationale"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02 AC2, IPP-E2S16T1 §2.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Old→new ID map for migrations, including ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "T102"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "T103"
            }), " and E6", ":S07", " supersede chains"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02 AC3, IPP-E2S16T1 §2.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference map: surfaces + edit policy per surface class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02 AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifact linked from T01/T02; ready for T03 3B execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02 AC5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-non-functional-requirements",
      children: "1.2 Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve historical anchors; no changelog tag rewrites"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP-E2S16T1 RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reference map tiers: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACTIVE_FIX"
            }), " vs ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ARCHIVE_STUB"
            }), " vs ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DEFER"
            }), " (changelog archive not bulk-rewritten in 3B)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP-E2S16T3 §5.3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-invariants-and-boundaries",
      children: "1.3 Invariants and boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Inventory tables, disposition taxonomy, migration ID map, tiered reference map with evidence counts, discovery methodology, optional discovery script output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Executing link edits (T03 Tranche 3B); validator code changes; new ADR; splitting T03 into per-workflow lanes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-referenced-sources",
      children: "1.4 Referenced sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Host: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T02"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Policy IPP: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E2S16T1"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Re-house IPP: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E2S16T3"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E6", ":S07", " drift: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "E4S19T03-e6s07-default-housing-investigation-report.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Produce the authoritative inventory and reference map so ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T03 Tranche 3B"
      }), " can apply path migrations deterministically without guessing disposition or rewriting changelog history."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-discovery-methodology-ac1",
      children: "2.2 Discovery methodology (AC1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two-pass merge (reproducible):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marker scan"
        }), " — task docs under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/**/T*.md"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "perpetual_task: true"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Historical Anchor:"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SUPERSEDED"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow-keyword scan"
        }), " — UKW, CMW, RW maintenance, kanban hygiene, perpetual workflow (catch mis-housed candidates without marker)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Seed merge"
        }), " — IPP-E2S16T1 §2.4; story-016 T03/T04/T05/T10; E4S19 report §5; epic-06 story-007 checklist rows tagged UKW/CMW/perpetual."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Helper (2026-06-03):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/kanban/discover_perpetual_task_candidates.py --json"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Run evidence:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "marker_count=6"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "keyword_count=65"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unique_candidates=65"
      }), " (keyword pass is broad; inventory table below is the curated authoritative set)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-disposition-taxonomy-ac2",
      children: "2.3 Disposition taxonomy (AC2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Uses IPP-E2S16T1 definitions unchanged:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Disposition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_S16"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Move active anchor to Story 016 (or alias-only for legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101+"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stays in current story with documented reason"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Superseded; redirect to canonical task; doc may keep ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Historical Anchor:"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-inventory-and-disposition-table-curated",
      children: "2.4 Inventory and disposition table (curated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Candidate / legacy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Current location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disposition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T101"
            }), " (UKW)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Historical / E6", ":S06", " legacy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_S16"
            }), " (alias)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP-E2S16T1 §2.4; RW attribution → umbrella"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T102"
            }), " (CMW)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Historical / E6", ":S06", " legacy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_S16"
            }), " (alias)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T103"
            }), " (RW maint.)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Historical / E6", ":S06", " legacy"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_S16"
            }), " (alias)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-maintenance umbrella (perpetual)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T04"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban hygiene lane"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T05"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markdown hygiene lane"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo infrastructure perpetual lane"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S06:T101"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (UKW perpetual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Superseded by S16 policy; historical BUILD preserved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S06:T102"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (CMW perpetual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T11"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (UKW doc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tranche 1 re-house (IPP-E2S16T3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T13"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (CMW doc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tranche 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (CMW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tranche 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T106"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUPERSEDED → T03 (Tranche 1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T108"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T07"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-050 UKW extension; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "re-housed"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T109"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T13"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BR-059 UKW MoSCOW; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "re-housed"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T116"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T06"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-085 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "re-housed"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T18"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (active)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_S16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S01:T23"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Workflow step tracking; E4S19 §5.2 — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            }), " at T23"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T107"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (borderline)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T107"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDE whitelist / tooling; in-scope for S07 until FR-087 closure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T110"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (COMPLETE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            }), " or archive-only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-scope UKW meta; 3B: path stubs only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T113"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (COMPLETE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW parser hardening meta; 3B archive tier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T114"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (COMPLETE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICW trio; 3B archive tier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T115"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06 (COMPLETE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ICW trio; 3B archive tier"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S01:T23"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-02 S01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical host for step-tracking (from T18)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T06"
            }), "–", (0,jsx_runtime.jsx)(_components.code, {
              children: "T09"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T13"
            }), "–", (0,jsx_runtime.jsx)(_components.code, {
              children: "T17"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delivery/governance tasks under perpetual story (not all perpetual type)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T104"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T105"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "epic-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK/package analysis in-scope per FR-087 narrowed charter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-migration-id-map-ac3",
      children: "2.5 Migration ID map (AC3)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Map type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T101"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No doc rename of historical version strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T102"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMW releases → T03 BUILD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T103"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "alias"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW maintenance → T03 BUILD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T18"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S01:T23"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "migrate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-house complete; 3B updates residual paths"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T106"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SUPERSEDED banner on S07 doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T108"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T07"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "migrate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T109"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T13"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "migrate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S07:T116"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T06"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "migrate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S06:T101"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW perpetual wiring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E06:S06:T102"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMW perpetual wiring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-reference-map--surface-classes-ac4",
      children: "2.6 Reference map — surface classes (AC4)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern / surfaces"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count (2026-06-03)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "T03 3B action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACTIVE_FIX"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/**"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "35"
            }), " occurrences in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "22"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewrite paths to canonical S16/S01 targets per §2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACTIVE_FIX"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/**"
            }), " (open/active)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "subset of above"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same; preserve terminal FR status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACTIVE_FIX"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/**"
            }), " (KB, workflow mgt docs)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            }), " occurrences in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update active KB links only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACTIVE_FIX"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/guides/**"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/**"
            }), " (non-archive)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            }), " occurrences in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix when touched in 3B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ARCHIVE_STUB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/**"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "62"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "53"
            }), " files"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One-line redirect comment if file edited; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no mass rewrite"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ARCHIVE_STUB"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/ICW-E6S07*"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-E6S07*"
            }), " (historical)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "39"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "19"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stub only; retain forensic IDs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DEFER"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/knowledge/KB-INDEX.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "KB-INDEX.json"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "24"
            }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            }), " files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record count; defer unless maintainer opts in"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional / T05"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Baseline command (full tree):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 -c \"from pathlib import Path\nt,f=0,0\nfor p in Path('docs').rglob('*'):\n    if p.is_file():\n        try: n=p.read_text(encoding='utf-8',errors='replace').count('epic-06/story-007')\n        except: continue\n        if n: t+=n; f+=1\nprint(t,f)\"\n# → 167 occurrences, 101 files\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-adr-checklist-25-scoring",
      children: "2.7 ADR checklist (§2.5 scoring)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ADR criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Score"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New architectural decision required?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes FR-088 / IPP-E2S16T1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-cutting runtime behavior change?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc inventory only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADR outcome"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EXEMPT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory implements existing policy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Doc-only task — tests validate ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inventory artifact integrity"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maps to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP contains sections 1–7 + inventory tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-042"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every inventory row has disposition + non-empty rationale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Every ", (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_S16"
            }), " / redirect row has legacy + canonical IDs in §2.5"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reference map lists ≥3 surface classes with policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "discover_perpetual_task_candidates.py"
            }), " exits 0; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_candidates ≥ 6"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1 guard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "[MANDATORY]"
        }), " T02 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS"
        }), "; refresh ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " at IPW start."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW Phases 0–7:"
        }), " Produce this IPP (ADR §2.7 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "EXEMPT"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discovery pass:"
        }), " Marker + keyword scans; merge seeds into §2.4–§2.5."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference map:"
        }), " Count ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-06/story-007"
        }), " per tier; document §2.6."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wire:"
        }), " T01 AC3, T02, T03 §7 3B gate, story-016 checklist, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification:"
        }), " T02 AC1–AC5 checked with evidence in task doc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "[MANDATORY final step]"
        }), " T02 → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), "; version anchor on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S16:T02 --art"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Post-IPW (separate authorization):"
      }), " T03 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tranche 3B"
      }), " per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks",
        children: "IPP-E2S16T3 §4.4 Step 5"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S16T2-perpetual-task-inventory.md"
            }), " (this file)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/kanban/discover_perpetual_task_candidates.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T02, T01, T03, story-016, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New ADR; portal sidebar beyond standard ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " IPP"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-housing-and-publication",
      children: "6. Housing and publication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Publication Status"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "NOT_APPLICABLE"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rationale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance/planning inventory; consolidated IPP satisfies FR-042 for T02"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docusaurus"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Standard ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/"
            }), " path (no extra sidebar entry required)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-verification",
      children: "7. Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seed rows + curated inventory in §2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24+ rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disposition + rationale on every row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.4 table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Migration map includes T101+ and E6", ":S07", " chain"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference map ≥3 tiers with counts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery script"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "discover_perpetual_task_candidates.py --json"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unique_candidates=65"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "epic-06/story-007"
            }), " baseline"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["167 / 101 files under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T01 links inventory IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC3 (updated on RW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS (on wire)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T03 §7 3B gate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inventory exists → gate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "satisfied"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_publication_wiring.py --requested E02:S16:T02"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE + IPP link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PASS (on RW)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3B entry gate (for T03):"
      }), " This artifact is the required precondition for exhaustive path migration in Tranche 3B. Do not start 3B bulk edits until T02 is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " and this IPP is linked from T03."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["End of IPP — E02:S16", ":T02"]
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