"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["62567"], {
60470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_02_s_15_t_01_br_066_corpus_tail_phase_3_md_7ad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-02-s-15-t-01-br-066-corpus-tail-phase-3-md-7ad.json
var site_docs_implementation_cycles_ipp_e_02_s_15_t_01_br_066_corpus_tail_phase_3_md_7ad_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3","title":"E02:S15:T01 — BR-066 corpus tail Phase 3 (IPP)","description":"Host TaskS15:T01)","source":"@site/../docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S14:T01 — Planning: Enumerate Workflow-Mgt Installation Paths (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S14T01-enumerate-workflow-mgt-installation-paths"},"next":{"title":"E02:S15:T01 — BR-066 publication backfill Phase 2 (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-publication-backfill-phase2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S15 — BR-066 corpus tail Phase 3 (IPP)';

const assets = {

};



const toc = [{
  "value": "1. Specification",
  "id": "1-specification",
  "level": 2
}, {
  "value": "1.1 Goal",
  "id": "11-goal",
  "level": 3
}, {
  "value": "1.2 Scope (frozen)",
  "id": "12-scope-frozen",
  "level": 3
}, {
  "value": "1.3 Functional requirements",
  "id": "13-functional-requirements",
  "level": 3
}, {
  "value": "1.4 Non-functional requirements",
  "id": "14-non-functional-requirements",
  "level": 3
}, {
  "value": "1.5 Publication contract",
  "id": "15-publication-contract",
  "level": 3
}, {
  "value": "2. Test design",
  "id": "2-test-design",
  "level": 2
}, {
  "value": "3. Implementation plan",
  "id": "3-implementation-plan",
  "level": 2
}, {
  "value": "Step 1 — Status transition (executor)",
  "id": "step-1--status-transition-executor",
  "level": 3
}, {
  "value": "Step 2 — Baseline audit",
  "id": "step-2--baseline-audit",
  "level": 3
}, {
  "value": "Step 3 — Bulk wiring",
  "id": "step-3--bulk-wiring",
  "level": 3
}, {
  "value": "Step 4 — Closure docs",
  "id": "step-4--closure-docs",
  "level": 3
}, {
  "value": "Step 5 — Verification",
  "id": "step-5--verification",
  "level": 3
}, {
  "value": "Step 8 — Release",
  "id": "step-8--release",
  "level": 3
}, {
  "value": "Step N — Status reconciliation (executor)",
  "id": "step-n--status-reconciliation-executor",
  "level": 3
}, {
  "value": "4. Documentation deliverables",
  "id": "4-documentation-deliverables",
  "level": 2
}, {
  "value": "5. Housing",
  "id": "5-housing",
  "level": 2
}, {
  "value": "6. ADR necessity matrix",
  "id": "6-adr-necessity-matrix",
  "level": 2
}, {
  "value": "7. Verification evidence",
  "id": "7-verification-evidence",
  "level": 2
}, {
  "value": "Baseline unwired list (Phase 3 start)",
  "id": "baseline-unwired-list-phase-3-start",
  "level": 3
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
    ol: "ol",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e02s15--br-066-corpus-tail-phase-3-ipp",
        children: ["E02:S15", ":T01", " — BR-066 corpus tail Phase 3 (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-ipw-docusaurus-filing-contract-and-backfill-br066.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E02:S15", ":T01", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts",
        children: "BR-066 — IPW missing Docusaurus filing for planning artifacts"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (released ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.15.1+3"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Close ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-066"
      }), " by wiring every remaining task-addressed planning artifact under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/"
      }), " so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_ipw_publication_wiring.py --audit-inventory"
      }), " reports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0 unwired"
      }), ", with fbuboard UXR-010 compliance and bidirectional T01 ↔ IPP links."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-scope-frozen",
      children: "1.2 Scope (frozen)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "In scope"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Out of scope"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wire all unwired ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-*"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-*"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-*"
            }), " from kanban host task docs or story anchors"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New blocking RW gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update inventory + BR-066 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RESOLVED"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewriting artifact bodies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix T01 broken ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW-E2S15T1-*"
            }), " links (never filed; IPP-only host)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Batch board ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " stamps (FR-097)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fbuboard BR-066: single IPP segment → this IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Editing Cursor plan file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-functional-requirements",
      children: "1.3 Functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F1:"
        }), " Baseline ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--audit-inventory"
        }), " recorded in §7 (35 unwired at Phase 3 start)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F2:"
        }), " Each unwired basename linked from a kanban host with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Planning artifacts (publication)"
        }), " (or equivalent link graph satisfying validator)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F3:"
        }), " Hosts without discrete task docs use story-level anchors with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Task ID:**"
        }), " (e.g. E02:S06", ":T01", " story doc)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F4:"
        }), " Legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW-E6S7T103-*"
        }), " wired from ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S16", ":T03"]
        }), " (re-house target)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F5:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW-PUBLICATION-BACKFILL-INVENTORY.md"
        }), " post–Phase 3 row: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " unwired."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F6:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-066"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RESOLVED"
        }), "; fbuboard one IPP link only."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-non-functional-requirements",
      children: "1.4 Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deterministic, idempotent wiring (skip if basename already referenced)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relative paths computed from host doc depth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-publication-contract",
      children: "1.5 Publication contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Discoverability = kanban task doc markdown link to artifact basename under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/"
      }), "; Docusaurus autogen unchanged (FR-066)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-test-design",
      children: "2. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--audit-inventory"
            }), " exit ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            }), ", count ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F2, F5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pytest …/test_validate_ipw_publication_wiring.py"
            }), " green"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Spot ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--requested"
            }), " on E02:S01", ":T17", ", E08:S03", ":T05", ", E08:S03", ":T06"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--requested E02:S15:T01"
            }), " PASS"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["fbuboard BR-066: no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "—No IPP—"
            }), " with IPP link"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1--status-transition-executor",
      children: "Step 1 — Status transition (executor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T01 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS"
        }), " for Phase 3."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2--baseline-audit",
      children: "Step 2 — Baseline audit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--audit-inventory"
        }), "; capture list in §7."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3--bulk-wiring",
      children: "Step 3 — Bulk wiring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolve host per EST via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find_task_markdown"
        }), " (story anchor fallback for E02:S06", ":T01", ", E02:S16", ":T03", " for legacy T103)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add relative links per basename; fix T62 padded/unpadded IPP basename mismatch."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4--closure-docs",
      children: "Step 4 — Closure docs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update inventory, T01 (remove rot ICW links; add Phase 3 IPP), BR-066, fbuboard."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5--verification",
      children: "Step 5 — Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T1–T5; pytest."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-8--release",
      children: "Step 8 — Release"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RW E02:S15:T01 --art"
          })
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.2.15.1+3"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-n--status-reconciliation-executor",
      children: "Step N — Status reconciliation (executor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T01 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " + version marker; BR-066 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RESOLVED"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-documentation-deliverables",
      children: "4. Documentation deliverables"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CREATE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S15T1-br066-corpus-tail-phase3.md"
            }), " (this file)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task docs (~35 wiring targets)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T01-ipw-docusaurus-filing-contract-and-backfill-br066.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-housing",
      children: "5. Housing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic 2 → Story 015 → T01"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-adr-necessity-matrix",
      children: "6. ADR necessity matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1–T7 advisory patterns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "EXEMPT"
            }), " — bulk doc links only"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-verification-evidence",
      children: "7. Verification evidence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Baseline ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--audit-inventory"
            }), " (2026-06-03)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Scanned ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "113"
            }), ", unwired ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "35"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Post-wiring ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--audit-inventory"
            }), " (2026-06-03)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Scanned ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "114"
            }), ", unwired ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pytest test_validate_ipw_publication_wiring.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "9 passed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--requested E02:S15:T01"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Link-depth repair"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fixed ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../../../implementation-cycles/"
            }), " → correct relative depth where links did not resolve (34 kanban files)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "baseline-unwired-list-phase-3-start",
      children: "Baseline unwired list (Phase 3 start)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ICW-E2S1T17-implementation-plan.md, ICW-E2S1T17-specification.md, ICW-E2S1T17-test-design.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ICW-E7S1T6-implementation-plan.md, ICW-E7S1T6-specification.md, ICW-E7S1T6-test-design.md"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPP-E2S16T6 through IPP-E2S16T17 (Story 016 batch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPP-E4S19T8, IPP-E7S1T9, IPP-E8S3T5, IPP-E8S3T6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPP-E2S1T22, IPP-E2S6T1, IPP-E2S16T2/T03/T07/T12, IPP-E4S6T1, IPP-E5S1T56, IPP-E5S1T62, IPP-E7S1T11"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPW-E3S2T12, IPW-E4S19T2, IPW-E5S9T11, IPW-E6S6T57/T62, IPW-E6S7T103/T112/T113, IPW-E6S9T1, IPW-E7S6T18"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts",
          children: "BR-066"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3",
          children: "Phase 2 IPP"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY",
          children: "Inventory"
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