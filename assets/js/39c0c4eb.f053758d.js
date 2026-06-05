"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["58783"], {
71872(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_04_s_19_t_12_single_board_consolidation_uxr_020_md_39c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-04-s-19-t-12-single-board-consolidation-uxr-020-md-39c.json
var site_docs_implementation_cycles_ipp_e_04_s_19_t_12_single_board_consolidation_uxr_020_md_39c_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020","title":"E04:S19:T12 — Planning: Single-board consolidation — retire fbuboard (UXR-020 R3)","description":"Host TaskS19:T12)","source":"@site/../docs/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E04:S19:T11 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E04S19T11-kanban-epic-story-path-lowercase-naming"},"next":{"title":"E05:S01:T44 — Planning: RW Temporary Execution Log (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S01T44-rw-temporary-execution-log"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E04:S19 — Planning: Single-board consolidation — retire fbuboard (UXR-020 R3)';

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
  "value": "2.2 Single-board row contracts",
  "id": "22-single-board-row-contracts",
  "level": 3
}, {
  "value": "2.3 <code>kboard.md</code> deprecation",
  "id": "23-kboardmd-deprecation",
  "level": 3
}, {
  "value": "2.4 RW Step 7 (revised three-surface)",
  "id": "24-rw-step-7-revised-three-surface",
  "level": 3
}, {
  "value": "2.5 ADR necessity decision",
  "id": "25-adr-necessity-decision",
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
  "value": "4.1 Files to create or modify (primary)",
  "id": "41-files-to-create-or-modify-primary",
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
  "value": "7. Risks and mitigations",
  "id": "7-risks-and-mitigations",
  "level": 2
}, {
  "value": "8. User decision record",
  "id": "8-user-decision-record",
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
        id: "e04s19--planning-single-board-consolidation--retire-fbuboard-uxr-020-r3",
        children: ["E04:S19", ":T12", " — Planning: Single-board consolidation — retire ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " (UXR-020 R3)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T12-fbuboard-necessity-investigation-uxr020",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T12-fbuboard-necessity-investigation-uxr020.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E04:S19", ":T12", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring",
        children: ["UXR-020 — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " necessity after task–FBU wiring"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (Waves 1–4 shipped; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.19.12+4"
      }), " closure 2026-06-05)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW:"
        }), " Produced for E04:S19", ":T12", " after user selected ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "R3 (full single-board)"
        }), ". Implementation gated on explicit execution authorization per FR-083."]
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Single active MoSCOW surface:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " is the only active prioritization board"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-020 R3, user decision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Dual-status row contract"
            }), " when task and FBU lifecycles diverge (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Task: COMPLETE | FBU: OPEN (verification)"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-020 F2, R3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Verification band (V):"
            }), " New MoSCOW subsection for task-complete / FBU-open rows (replaces fbuboard M/S-only lane)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-020 R3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Migrate"
            }), " all active ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " rows into ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " without losing verification-pending visibility"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-020 F2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Deprecate ", (0,jsx_runtime.jsx)(_components.code, {
                children: "kboard.md"
              }), ":"]
            }), " Replace with redirect stub; no active MoSCOW on deprecated file"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-020 R3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Preserve"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-completed.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-structure.md"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/*.md"
            }), " as FBU SoT surfaces"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KG-R2, FR-051 legacy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Task-only rows"
            }), " (no FBU) remain valid on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), " unchanged"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-020 F3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Taskless open FBUs"
            }), " appear on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), " with FBU-primary key + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "—No Task—"
            }), " until intake wires ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E:S:T"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-073, intake-open-taskless-queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-092 contract:"
            }), " RW Step 7 becomes ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "three-surface"
            }), " (task doc, FBU doc, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), ") + completed ledgers; drop active ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), " as fourth surface"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092 amendment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UKW scope:"
            }), " Single-board sync; remove fbuboard MoSCOW maintenance from comprehensive matrix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-076 successor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Validators"
            }), " accept single active board; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " stub exempt from active-board strict checks"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Framework/adopter path:"
            }), " Install templates emit single board; migration note for brownfield dual-board"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-003 pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Row link order"
            }), " preserved per UXR-010: FBU segment → Task segment → IPP segment → stamp"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-010"
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No stamp churn:"
            }), " FR-097 evidence-gated stamps during migration"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-009, FR-097"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Lean active board (FR-109):"
            }), " No archive footnotes or journal bullets on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-109"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Idempotent migration:"
            }), " Re-running migration script leaves ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), " stable"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092 Wave discipline"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Read-tolerance:"
            }), " Validators/scripts accept deprecated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " redirect for one release cycle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter safety"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Phased RW:"
            }), " Wave 1 policy+board+ADR; Wave 2 tooling; Wave 3 framework pack"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-017 precedent"
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
        }), " Bidirectional FBU ↔ task wiring (KG-R2); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed.md"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        }), " terminal ledgers unchanged in role."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " ai-dev-kit corpus, kanban governance policy, workflow-mgt validators/scripts, UKW/RW agent guides, framework kanban templates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Deleting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br/"
        }), " corpus; merging ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-structure.md"
        }), " into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        }), "; changing FBU doc templates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consolidate all active MoSCOW prioritization into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })
      }), " using an enriched ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual-status row model"
      }), ", then ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["retire ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })]
      }), " as an active board — eliminating duplicate sync admin while preserving verification-pending visibility and FBU traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-single-board-row-contracts",
      children: "2.2 Single-board row contracts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "A. Standard in-flight (task not terminal)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- **E05:S09:T14** – BR-093: Docusaurus CI dedup - 📋 TODO (MEDIUM, …) | [Task](…) | [BR-093](…) | [—IPP—](…) | Last modified: YYYY-MM-DD HH:MM UTC\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "B. Verification (task terminal, FBU open)"
      }), " — lives in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "### Verification (V)"
      }), " section"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- **E03:S02:T12** – FR-045 / FR-046 / BR-061: Task-touch SemVer — ✅ Task COMPLETE · 🟢 FBU OPEN (verification) (HIGH, fix attempted **v0.3.2.12+4**) | [Task](…) | [FR-045](…) · [FR-046](…) · [BR-061](…) | [—IPP—](…) | Last modified: YYYY-MM-DD HH:MM UTC\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C. Task-only (no FBU)"
      }), " — unchanged; any MoSCOW band except V"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "D. Taskless FBU (intake queue)"
      }), " — FBU-primary; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Could Have"
      }), " or dedicated intake pointer until task filed"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- **FR-XXX** – Title — 🟢 OPEN (LOW, awaiting task) | [FR-XXX](…) | —No Task— | —No IPP— | Last modified: …\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["MoSCOW order on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ":"]
      }), " M → S → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "V"
      }), " → C → O → W"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "23-kboardmd-deprecation",
      children: ["2.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " deprecation"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Active MoSCOW sections ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "removed"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["File becomes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "redirect stub"
        }), " (~15 lines): points to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " Verification + C bands; links ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-structure.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Last Updated"
        }), " notes deprecation version."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-rw-step-7-revised-three-surface",
      children: "2.4 RW Step 7 (revised three-surface)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Release-scope reconciliation outputs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task doc"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Source FR/BR/UXR doc(s)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), " canonical row(s) — including Verification band when task COMPLETE + FBU OPEN"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " updated on RW/UKW (stub only)."]
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R2 partial consolidate vs R3 single board vs status quo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-package validators, adopters, FR-092"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban framework + workflow-mgt + all RW/UKW runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical board model for ADK adopters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent ergonomics vs stakeholder FBU-first view"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW Step 7, UKW, validators, ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-051 fbuboard creation; FR-092 four-surface"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRED"
      }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR-018"
      }), " (draft path: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
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
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_active_kanban_board.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), " strict passes; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), " stub exempt or advisory-only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_kanban_state_icons.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-status tokens parse; V-band rows valid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_board_stamp_diff.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration produces evidenced stamp manifest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_rw_step7_completeness.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-surface contract; no fbuboard requirement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 writes kboard only; Verification band logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corpus grep"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No duplicate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E:S:T"
            }), " across deprecated fbuboard MoSCOW"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Operator opens ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), " only for full backlog + verification queue"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
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
            }), " Confirm task ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), "; link IPP on task doc"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Author ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADR-018"
            }), " (single board, V-band, three-surface RW)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "kanban-governance-policy.md"
            }), " — active surface table, V-band, row contracts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "kanban-board-guide.md"
            }), " — remove fbuboard as active board; document V-band"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Migrate ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["live ", (0,jsx_runtime.jsx)(_components.code, {
                children: "kboard.md"
              }), ":"]
            }), " add V-band; import 9 verification rows from fbuboard M/S; dedupe C-band"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replace ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "kboard.md"
              })
            }), " with redirect stub"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "UXR-020"
            }), " AC5 + decision record; amend ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-092"
            }), " narrative (three-surface)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RW Wave 1"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E04:S19:T12"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic/4-*"
            }), " branch"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "validate_active_kanban_board.py"
              }), ":"]
            }), " single-board mode; fbuboard stub handling"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "update_kanban_docs.py"
              }), ":"]
            }), " drop fbuboard writes; Verification band helper"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UKW/RW agent guides"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ukw.md"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw.md"
            }), " excerpts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "pytest"
            }), " updates: step7 completeness, stamp diff, release readiness"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RW Wave 2"
            }), " tooling release"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Framework templates"
            }), " + install KB: single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " default"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework pack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "rw-config.yaml"
              }), " schema:"]
            }), " deprecate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), " key if present; document"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RW Wave 3"
            }), " framework sync"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Remove"
            }), " kanban-root legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-*"
            }), " alias files; update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/README.md"
            }), "; drop alias paths from corpus-board validators/scripts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root hygiene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RW Wave 4"
            }), " closure — ledger, active-row prune, alias cleanup release"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY]"
            }), " Reconcile task status to COMPLETE with forensic marker after Wave 4 + user verification"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify-primary",
      children: "4.1 Files to create or modify (primary)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V-band + migrated rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect stub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/kanban-board-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Five-way → four-way active surfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/FR-092-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-surface note"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_active_kanban_board.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/ukw.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/rw.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/.../release-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/.../update-kanban-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW scope"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR + policy (normative contract)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Live board migration (visible outcome)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Wave 1 (version the contract)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tooling + tests (enforce contract)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework pack (adopter emission)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps",
      children: "4.3 Documentation implementation steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-018 before board migration (cite in board headers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Policy + guide before validator changes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflow KB after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " behavior is fixed."]
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
            children: "Scope"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-governance-policy.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V-band, single active board, RW three-surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-board-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retire fbuboard section as active board"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V-band + migrated content"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stub only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-092-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amend four-surface → three-surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UXR-020-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision + closure AC"
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
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADR-018-single-kanban-board-consolidation.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical architecture decision"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-documentation-gaps-and-explicit-non-changes",
      children: "5.3 Documentation gaps and explicit non-changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-structure.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — remains full inventory (non-MoSCOW)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-completed.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — terminal FBU ledger retained"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-open-taskless-queue.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            }), " pointer: MoSCOW source → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-board.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-structure.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-open-taskless-queue.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DELETE"
            }), " from kanban root (Wave 4); historical changelog references retained"]
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
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E4S19T12-single-board-consolidation-uxr020.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task link"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "References"
            }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPP"
            }), " segment"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Publication:"
      }), " Task doc + UXR-020 bidirectional links mandatory before Wave 1 RW."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-risks-and-mitigations",
      children: "7. Risks and mitigations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification rows clutter M/S again"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dedicated ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "V"
            }), " band, not mixed into C"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validator blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phased waves; fbuboard stub tolerance one cycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter dual-board installs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework Wave 3 + migration note in ADR-018"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092 meta-program drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit FR-092 doc amendment in Wave 1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-user-decision-record",
      children: "8. User decision record"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decision"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authority"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2026-06-05"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "R3 — full single-board"
            }), " (retire active ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User message"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next gate:"
      }), " Explicit implementation authorization (", (0,jsx_runtime.jsx)(_components.code, {
        children: "implement"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "proceed"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E04:S19:T12"
      }), ") per FR-083."]
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