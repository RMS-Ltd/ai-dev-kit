"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["83044"], {
7875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_02_s_16_t_16_ukw_archive_completed_fr_102_md_f85_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-02-s-16-t-16-ukw-archive-completed-fr-102-md-f85.json
var site_docs_implementation_cycles_ipp_e_02_s_16_t_16_ukw_archive_completed_fr_102_md_f85_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102","title":"E02:S16:T16 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS16:T16)","source":"@site/../docs/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T23:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S16:T15 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet"},"next":{"title":"E02:S16:T17 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S16T17-agent-bootstrap-and-task-routing-fr103"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T23:00:00.000Z'),
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
  "value": "1.1 Functional requirements",
  "id": "11-functional-requirements",
  "level": 3
}, {
  "value": "1.2 Non-functional requirements",
  "id": "12-non-functional-requirements",
  "level": 3
}, {
  "value": "1.3 Boundaries",
  "id": "13-boundaries",
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
  "value": "2.2 UKW step matrix — <code>UKW -c</code> (standalone)",
  "id": "22-ukw-step-matrix--ukw--c-standalone",
  "level": 3
}, {
  "value": "2.3 RW / <code>update_kanban_docs.py</code> (Option A)",
  "id": "23-rw--update_kanban_docspy-option-a",
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
  "value": "2.6 Forbidden flag combinations",
  "id": "26-forbidden-flag-combinations",
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
        children: ["E02:S16", ":T16", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T16-ukw-archive-completed-board-rows-fr102.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E02:S16", ":T16", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows",
        children: ["FR-102 — UKW archive-completed (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW:"
        }), " Produced for E02:S16", ":T16", ". Bidirectional wiring to host task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "References"
        }), " confirmed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (Ascertained Baseline)"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c"
            }), " runs archive-completed ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "only"
            }), " when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-c"
            }), " present; default UKW unchanged"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-F1, NF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Standalone"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-c"
            }), "; forbidden with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-u"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102, T16 AC1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Task-doc SoT"
            }), " for kboard archival (not row-text-only)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102, ADR-010"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Append ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "kanban-completed.md"
            }), " before kboard row removal"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-F2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FBU-doc SoT"
            }), " for fbuboard; FR-076 terminal rules + verification keep"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-F3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Append ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "intake-completed.md"
            }), " before fbuboard row removal"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-F3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Step 9 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "## Archive completed summary"
            }), " with counts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-F4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent re-run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-F5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cheatsheet + agent SoT + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ukw"
            }), " + skill"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-F6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip perpetual, keep-on-board banners, unresolvable links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102 exceptions"
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
            children: "FR-097 stamp discipline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-NF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshots + structure-prune evidence JSON when rows removed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-102-NF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Agent-driven UKW (no monolithic runner)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-023"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-boundaries",
      children: "1.3 Boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-c"
        }), " contract; ADR-010; agent docs; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "archive_completed.py"
        }), " helpers; Option A prune gating in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " RW Step 7 semantic change; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--rp"
        }), "; Step 2.5; CI scheduling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Operators run ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -c"
        })
      }), " to move terminal tasks and FBUs from active MoSCOW into ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "kanban-completed.md"
        })
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/intake-completed",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "intake-completed.md"
        })
      }), " before row removal — without full UKW bookkeeping or reprioritization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "22-ukw-step-matrix--ukw--c-standalone",
      children: ["2.2 UKW step matrix — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UKW -c"
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
            children: ["Perpetual UKW wiring — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Archive scan (candidates from boards + linked docs) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Gap discovery — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "skip"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3–5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task/Story/Epic narrative — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "skip"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ledger append then MoSCOW removal (kboard + fbuboard) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Consistency / bidirectional pairs — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stage kanban + completed ledgers — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "## Archive completed summary"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "run"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Handoff:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E02:S16:T04"
      }), " (UKW perpetual) or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E02:S16:T16"
      }), " on feature completion."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "23-rw--update_kanban_docspy-option-a",
      children: ["2.3 RW / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_kanban_docs.py"
      }), " (Option A)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "update_kanban_board"
          }), ":"]
        }), " no longer removes COMPLETE rows; emits advisory when rows would qualify for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -c"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "enforce_terminal_timestamps_on_boards"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prune_terminal_active_rows=False"
        }), " by default; fbuboard terminal ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "removal"
        }), " only when explicitly requested (tests) or via ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "UKW -c"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent",
      children: "2.4 Status transition intent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current:"
        }), " TODO → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS"
        }), " at implementation Step 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE:"
        }), " when AC1–AC5 evidenced at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S16:T16"
        }), "."]
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
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Standalone ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-c"
            }), " vs extend ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-u"
            }), " vs RW-only fix"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revertible in one PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW/kanban scope only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent for board hygiene"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UKW governance + ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complements ADR-009"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "REQUIRED"
      }), " — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag",
        children: "ADR-010"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-forbidden-flag-combinations",
      children: "2.6 Forbidden flag combinations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Valid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Invalid"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c -u"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c -p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c -a"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c --rp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -u -c"
            }), ", etc."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual / doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF2 flag matrix in SoT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual + helper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3–RF4 ledger-before-removal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5–RF6 intake-completed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7–RF8 idempotent summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1–RNF2 stamp / pre-commit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "archive_completed.py"
            }), " — perpetual skip, terminal task, ledger idempotency hints"]
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
            }), " T16 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TODO"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish IPP; wire task ↔ IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADR-010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Agent SoT: ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", excerpt, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw.md"
            }), ", VWMP guide"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-source UKW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cheatsheet + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw-sync"
            }), " + YAML"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human + skill"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "archive_completed.py"
            }), " + pytest"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Helpers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Option A in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No delete-only prune"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V1–V6; record proof in §7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S16:T16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY]"
            }), " Reconcile T16 + FR-102 status"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic marker"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S16T16-ukw-archive-completed-fr102.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1–D-U7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", excerpt, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ukw.md"
            }), ", VWMP, YAML, skill, cheatsheet"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "archive_completed.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE / CREATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T16, FR-102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
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
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Publication"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S16T16-ukw-archive-completed-fr102.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skills / cursorrules"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/skills/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE (repo agent config)"
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
        }), " ", "IPP §1–§7 complete; ADR-010 created"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Bidirectional T16 ↔ IPP links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -c"
        }), " proof — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S16:T16"
        }), " → ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
          children: "kanban-completed.md"
        }), " then removed from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: "kboard.md"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-102"
        }), " → ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/intake-completed",
          children: "intake-completed.md"
        }), " then removed from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: "kboard.md"
        }), " (2026-05-30T16:30:00Z)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "V4–V5 manual idempotency re-run (second ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW -c"
        }), " expected no-op)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V6 pytest for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "archive_completed"
        }), " helpers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T16 AC1–AC5 at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S16:T16"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.2.16.16+2"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows",
          children: "FR-102"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag",
          children: "ADR-009"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag",
          children: "ADR-010"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag",
          children: "ADR-009"
        }), " (flag pattern)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls",
          children: "FR-076"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery",
          children: "FR-097"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
          children: "Workflow initiation cheatsheet"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/archive_completed.py",
          children: "archive_completed.py"
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