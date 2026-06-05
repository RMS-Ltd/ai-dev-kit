"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["14035"], {
13725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_02_s_16_t_06_ukw_rp_flag_fr_085_md_1b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-02-s-16-t-06-ukw-rp-flag-fr-085-md-1b6.json
var site_docs_implementation_cycles_ipp_e_02_s_16_t_06_ukw_rp_flag_fr_085_md_1b6_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085","title":"E02:S16:T06 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS16:T06)","source":"@site/../docs/implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T22:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S15:T01 — BR-066 publication backfill Phase 2 (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S15T01-br066-publication-backfill-phase2"},"next":{"title":"E02:S16:T13 — Planning: BR-059 UKW MoSCOW full story task coverage (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T13-br059-ukw-moscow-full-story-coverage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T22:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S16 — Planning: Spec, Tests, Implementation Plan (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Requirements (Ascertained Baseline)",
  "id": "1-requirements-ascertained-baseline",
  "level": 2
}, {
  "value": "1.1 Functional requirements (ascertained)",
  "id": "11-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.2 Non-functional requirements (ascertained)",
  "id": "12-non-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.3 Invariants and boundaries",
  "id": "13-invariants-and-boundaries",
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
  "value": "2.2 Specification mapping",
  "id": "22-specification-mapping",
  "level": 3
}, {
  "value": "2.3 Constraints",
  "id": "23-constraints",
  "level": 3
}, {
  "value": "2.4 Status transition intent",
  "id": "24-status-transition-intent",
  "level": 3
}, {
  "value": "2.5 ADR necessity decision",
  "id": "25-adr-necessity-decision",
  "level": 3
}, {
  "value": "2.6 UKW step matrix — <code>UKW --rp</code> (standalone)",
  "id": "26-ukw-step-matrix--ukw---rp-standalone",
  "level": 3
}, {
  "value": "2.7 Evidence model (Step 2 / Step 6)",
  "id": "27-evidence-model-step-2--step-6",
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
  "value": "4.1 Files to create or modify",
  "id": "41-files-to-create-or-modify",
  "level": 3
}, {
  "value": "4.2 Dependency order",
  "id": "42-dependency-order",
  "level": 3
}, {
  "value": "4.3 Documentation implementation steps",
  "id": "43-documentation-implementation-steps",
  "level": 3
}, {
  "value": "5. Documentation deliverables",
  "id": "5-documentation-deliverables",
  "level": 2
}, {
  "value": "5.1 Existing documents to update",
  "id": "51-existing-documents-to-update",
  "level": 3
}, {
  "value": "5.2 New documents to create",
  "id": "52-new-documents-to-create",
  "level": 3
}, {
  "value": "5.3 Documentation gaps and explicit non-changes",
  "id": "53-documentation-gaps-and-explicit-non-changes",
  "level": 3
}, {
  "value": "6. Documentation housing",
  "id": "6-documentation-housing",
  "level": 2
}, {
  "value": "7. Success / verification criteria",
  "id": "7-success--verification-criteria",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "e02s16--planning-spec-tests-implementation-plan-ipw",
        children: ["E02:S16", ":T06", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T06-ukw-optional-reprioritization-rp-flag-fr085.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E02:S16", ":T06", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag",
        children: ["FR-085 — UKW optional reprioritization (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Produced by IPW for E02:S16", ":T06", ". Bidirectional wiring to the host task ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Input"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "References"
        }), " is confirmed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (Ascertained Baseline)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-functional-requirements-ascertained",
      children: "1.1 Functional requirements (ascertained)"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add optional UKW flag ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RePrioritise"
            }), "); default UKW behavior unchanged when absent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-085-F1, T06 AC1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Standalone"
            }), " invocation: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            }), " runs deep reprioritization only (not bundled into comprehensive, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 1 decision, FR-085-F2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " mode, analyze open tasks and FR/BR/UXR records for intent, dependencies, blockers, delivery impact"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-085-F2/F3, T06 AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deterministic MoSCOW updates on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), "; idempotent on unchanged inputs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-085-F4/NF1, T06 AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emit per-change reprioritization rationale (evidence category per moved row) in UKW Step 9 summary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-085-F5, T06 AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional FR-085 ↔ T06 ↔ board tracking; IPP linked from task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC5, FR-085"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-non-functional-requirements-ascertained",
      children: "1.2 Non-functional requirements (ascertained)"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " valid only in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "standalone"
            }), " UKW context — not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_step_7"
            }), " scoped sync"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-038, FR-085 scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No batch or synthetic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " row stamps on hygiene (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
              children: "FR-097"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-097"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded analysis depth; observable run summary (counts, duration, rows moved)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-085-NF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-driven execution (no new deterministic UKW runner)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-023"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-invariants-and-boundaries",
      children: "1.3 Invariants and boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invariants:"
        }), " Bottom-up evidence before board writes; FR-077 task-doc status authority; existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-u"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "-a"
        }), "/comprehensive UKW semantics unchanged without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), " contract; ADR; agent SoT chain (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", packaged UKW excerpt, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ukw.md"
        }), ", VWMP doc, YAML); workflow initiation cheatsheet; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ukw-sync"
        }), " skill; FR-085 closure at RW."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " RW Step 7 behavior changes; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -ad"
        }), " (Address Drift); Docusaurus portal nav; pytest suite unless flag validator is added later."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable a default-off, standalone UKW deep reprioritization mode (", (0,jsx_runtime.jsx)(_components.code, {
        children: "--rp"
      }), ") that reorders MoSCOW rows on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " using explicit evidence (intent, dependencies, blockers, impact), with an audit trail and idempotent re-runs — without altering comprehensive UKW, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-p"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-a"
      }), ", or RW scoped kanban sync."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping",
      children: "2.2 Specification mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specification element"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Flag parser recognizes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), "; absence preserves current flag matrix"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dedicated step matrix (§2.6); no implicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -u"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -a"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2 evidence model (§2.7); Step 6 deep reprioritization sub-mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic sort keys for MoSCOW sections; second run → zero moves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Step 9 mandatory ", (0,jsx_runtime.jsx)(_components.code, {
              children: "## Reprioritization rationale"
            }), " subsection"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation updates FR/task/board IPP tails"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UKW -p"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), " runs MoSCOW ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "update"
        }), " sub-workflow only. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "standalone"
        }), " deep RePrioritise run with full-board evidence analysis and rationale output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "vs comprehensive UKW:"
        }), " Comprehensive does not include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), "; operators run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW --rp"
        }), " explicitly when deep realignment is needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw_step_7"
          }), ":"]
        }), " Agents MUST NOT invoke ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), " during RW Step 7 (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode",
          children: "FR-038"
        }), " narrow MoSCOW)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent",
      children: "2.4 Status transition intent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " IN PROGRESS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition to COMPLETE:"
        }), " All T06 AC1–AC5 satisfied; ADR and doc chain updated; manual V4/V5 passed; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S16:T06"
        }), " with forensic marker"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution (Steps 3–8 in §4)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision",
      children: "2.5 ADR necessity decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Y/N"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Standalone ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " chosen over extending ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), " only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc/agent contract revertible in one PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confined to workflow docs + agent guidance (§4.1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Future UKW priority work will cite ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), " boundary"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No security/performance trade-off beyond agent ergonomics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Changes UKW invocation and global ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " UKW block"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complements FR-038/FR-023; does not contradict"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exemption"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E1–E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(only if all T = N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1, T4, T6 = Y"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRED"
      }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CREATE"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag",
        children: "ADR-009-ukw-deep-reprioritization-rp-flag.md"
      }), " (implementation Step 3)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "26-ukw-step-matrix--ukw---rp-standalone",
      children: ["2.6 UKW step matrix — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UKW --rp"
      }), " (standalone)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Identify perpetual UKW task (wiring) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Analyze recent activity (commits, FR/BR/UXR, task docs) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Discover board gaps — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "skip"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3–5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task / Story / Epic narrative updates — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "skip"
            }), " (exception: fix board↔task-doc status mismatch if blocking reprioritization; log in Step 9)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deep reprioritization on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " MoSCOW sections — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["fbuboard reconciliation (terminal-row prune per FR-076; MoSCOW deep rp) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate consistency — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stage kanban files — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Document changes + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reprioritization rationale"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Handoff:"
      }), " User runs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      }), " to commit (attributes perpetual UKW task per existing wiring)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-evidence-model-step-2--step-6",
      children: "2.7 Evidence model (Step 2 / Step 6)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For each candidate active row, agents MUST classify using at least one of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signals (non-exhaustive)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task/FR narrative, story strategic overview, recent commit messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dependencies"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked tasks, “blocked by”, upstream FR/BR, epic ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blockers"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["OPEN BR, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), " status, unresolved verification banners"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MoSCOW tier, severity/priority fields, perpetual vs release-critical paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Determinism:"
      }), " Given identical board + doc inputs, MoSCOW ordering MUST be identical (stable sort: priority tier → evidence score → canonical E/S/T or FBU id)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Idempotency:"
      }), " Repeat ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UKW --rp"
      }), " with no input changes → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zero"
      }), " row moves; Step 9 states ", (0,jsx_runtime.jsx)(_components.code, {
        children: "No priority changes."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--skip-tests"
        }), " justification:"]
      }), " UKW remains agent-orchestrated per FR-023; delivery is documentation and agent-contract alignment. Verification uses structural inspection and manual idempotency checks (V4–V5). Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_ukw_flags.py"
      }), " only if implementation introduces a deterministic flag parser."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior / layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent SoT"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-ukw-trigger-section.md"
            }), " document standalone ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " matrix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheatsheet"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-initiation-cheatsheet.md"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            }), " row; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " disambiguation; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            }), " sequence"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC1, user requirement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VWMP + YAML"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "update-kanban-workflow-agent-execution.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update-kanban-workflow.yaml"
            }), " reference ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deliverable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotency"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Two consecutive ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            }), " on unchanged boards → no MoSCOW churn"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC3, FR-085-NF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rationale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 9 lists evidence category per moved row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stamps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_board_stamp_diff.py"
            }), " passes (no synthetic stamp batches)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-097"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW wiring"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_publication_wiring.py --requested E02:S16:T06"
            }), " PASS"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW Phase 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-009 exists and matches §2.5–§2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY]"
            }), " Confirm T06 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), "; update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP published; wire task ↔ IPP (this document)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP + T06 links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Author ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADR-009"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " standalone contract, boundaries, idempotency)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update agent SoT: ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-ukw-trigger-section.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw.md"
            }), " → VWMP doc → YAML"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-source UKW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
              children: "workflow-initiation-cheatsheet.md"
            }), "; bump \"Last verified against\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/skills/ukw-sync/SKILL.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V1–V8; manual V4/V5 evidence in §7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification notes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S16:T06"
            }), " (use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--art"
            }), " if version anchor drift)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release; FR-085 → IMPLEMENTED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "9"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY]"
            }), " Reconcile T06 + FR-085 to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), "; kboard IPP tails"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four-surface"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
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
              children: "docs/implementation-cycles/IPP-E2S16T6-ukw-rp-flag-fr085.md"
            }), " (this file)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " (UKW trigger block)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/cursorrules-ukw-trigger-section.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ukw.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/workflows/update-kanban-workflow.yaml"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/skills/ukw-sync/SKILL.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/guides/workflow-initiation-cheatsheet.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T06 task doc, FR-085, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NONE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLAUDE.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            }), " (cheatsheet pointer sufficient unless one-line ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " note desired)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-009 (authoritative contract)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dual-source ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " + packaged UKW excerpt (same commit wave)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ukw.md"
        }), ", VWMP doc, YAML, skill"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow initiation cheatsheet (human SoT aligned with agent SoT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW + board IPP tails"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps",
      children: "4.3 Documentation implementation steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ADR-009: flag matrix, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw_step_7"
        }), " exclusion, evidence categories, idempotency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " / excerpt: flag parsing table + step matrix row for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cheatsheet §3 invocation table + flag disambiguation + §7 sequence ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW --rp"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-existing-documents-to-update",
      children: "5.1 Existing documents to update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope of change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/guides/workflow-initiation-cheatsheet.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            }), " row; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), "; sequence; Last verified"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1, V2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UKW flag parsing + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " step matrix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1, V1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/cursorrules-ukw-trigger-section.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parity with D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ukw.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flag table + step matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " sub-mode; FR-038 boundary"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/workflows/update-kanban-workflow.yaml"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " substeps"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/skills/ukw-sync/SKILL.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep rp guidance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP links; AC checkboxes at completion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/FR-085-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMPLEMENTED at RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP tail; status at RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-new-documents-to-create",
      children: "5.2 New documents to create"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S16T6-ukw-rp-flag-fr085.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Governance contract for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-documentation-gaps-and-explicit-non-changes",
      children: "5.3 Documentation gaps and explicit non-changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gap / topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["UKW dual-source parity checklist (RW has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-trigger-dual-source-parity.md"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE for v1 — mirror RW pattern in ADR-009 maintainer note; optional follow-up FR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docusaurus cheatsheet nav"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["NONE — BR-066 deferred; cheatsheet under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/guides/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CLAUDE.md"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AGENTS.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — existing cheatsheet pointers suffice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-housing",
      children: "6. Documentation housing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Publication status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inbound links to add"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S16T6-ukw-rp-flag-fr085.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 Input, References; FR-085 Related"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §2.5; FR-085 Related; VWMP doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/guides/workflow-initiation-cheatsheet.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(existing guides README)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2–D-U7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "See §5.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-009 References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "kboard row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-085"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fbuboard row"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP §1–§7 complete; §2.5 ADR outcome ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REQUIRED"
        }), " with D-C2 row"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Bidirectional T06 ↔ IPP links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "ADR-009 created (implementation Step 3)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V1–V3 structural doc parity (implementation Steps 4–5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "V4–V5 manual idempotency + rationale (operator verification on first ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW --rp"
        }), " run)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V6 stamp validator N/A this release (no board MoSCOW moves in RW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V7 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --requested E02:S16:T06"
        }), " PASS (NOT_APPLICABLE + consolidated IPP links on task doc)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V8 ADR-009 content matches §2.6–§2.7"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T06 AC1–AC5 satisfied at RW; FR-085 IMPLEMENTED"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All §5 UPDATE/CREATE items implemented or deferred with reason"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag",
          children: "FR-085"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085",
          children: "T06 task doc"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-023-update-kanban-workflow-ukw",
          children: "FR-023"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode",
          children: "FR-038"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
          children: "FR-097"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls",
          children: "FR-076"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
          children: "Workflow initiation cheatsheet"
        }), " (T15; extended by T06)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md",
          children: "Update Kanban Workflow agent execution guide"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet",
          children: "IPP-E2S16T15"
        }), " (cheatsheet pattern)"]
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