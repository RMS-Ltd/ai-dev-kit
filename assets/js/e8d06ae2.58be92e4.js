"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["35831"], {
9421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_15_t_03_duplicate_footer_validation_hardening_and_timestamp_divergence_guardrails_md_e8d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-15-t-03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails-md-e8d.json
var site_docs_implementation_cycles_ipp_e_2_s_15_t_03_duplicate_footer_validation_hardening_and_timestamp_divergence_guardrails_md_e8d_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails","title":"E2:S15:T03 - Planning: Spec, Tests, Implementation Plan (IPP)","description":"Host TaskS15:T03)","source":"@site/../docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-21T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E2:S15:T02 - Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership"},"next":{"title":"E2:S15:T04 - Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-21T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E2:S15 - Planning: Spec, Tests, Implementation Plan (IPP)';

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
  "value": "1.2 Functional requirements",
  "id": "12-functional-requirements",
  "level": 3
}, {
  "value": "1.3 Non-functional requirements",
  "id": "13-non-functional-requirements",
  "level": 3
}, {
  "value": "1.4 Out of scope",
  "id": "14-out-of-scope",
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
  "value": "Phase A - Contract and parser scaffolding",
  "id": "phase-a---contract-and-parser-scaffolding",
  "level": 3
}, {
  "value": "Phase B - Enforcement integration",
  "id": "phase-b---enforcement-integration",
  "level": 3
}, {
  "value": "Phase C - Regression coverage",
  "id": "phase-c---regression-coverage",
  "level": 3
}, {
  "value": "Phase D - Governance reconciliation",
  "id": "phase-d---governance-reconciliation",
  "level": 3
}, {
  "value": "4. Success criteria",
  "id": "4-success-criteria",
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
        id: "e2s15---planning-spec-tests-implementation-plan-ipp",
        children: ["E2:S15", ":T03", " - Planning: Spec, Tests, Implementation Plan (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E2:S15", ":T03", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening",
        children: "FR-089 - IPW board-row traceability-churn hardening (footer duplication + task-ID multiplication)"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published (closure: v0.2.15.3+2 — T03 FR-089 governance; implementation v0.2.15.3+1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Harden IPW governance so board-row traceability churn on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " is deterministically detected, surfaced, and handled without silently corrupting forensic timestamp evidence. Traceability churn includes duplicated row-footer chunks and task-ID multiplication on the same row."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements",
      children: "1.2 Functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F1:"
        }), " Define canonical row-tail grammar with exactly one terminal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " footer chunk per row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F2:"
        }), " Detect repeated appended footer chunks on a single row and classify this as structural corruption."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F3:"
        }), " Emit explicit validation/report counters including ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rows_with_duplicate_footers"
        }), " and affected row IDs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F4:"
        }), " Define safe recovery contract where canonical timestamp selection requires dual agreement:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "oldest timestamp value across footer chunks, and"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "first/oldest footer chunk by row order."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F5:"
        }), " If dual agreement fails, classify as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp-order divergence"
        }), " and block silent auto-normalization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F6:"
        }), " Preserve deterministic behavior on valid rows (single footer) and avoid introducing any additional footer chunks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F7:"
        }), " Ensure repeated runs do not walk row timestamps forward due to footer duplication churn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F8:"
        }), " Detect repeated appended task-ID link segments (", (0,jsx_runtime.jsx)(_components.code, {
          children: "[E#:S#:T#](...)"
        }), ") on a single row and classify this as structural corruption."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F9:"
        }), " Enforce single-instance task-ID link invariants during normalization so repeated runs cannot multiply task tokens."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-non-functional-requirements",
      children: "1.3 Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N1:"
        }), " Validation and reconciliation are deterministic and idempotent for unchanged inputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N2:"
        }), " Diagnostics are high-signal and auditable for recovery workflows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N3:"
        }), " Detection logic distinguishes true duplicates from valid single-footer updates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N4:"
        }), " Contract is implementation-ready for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " and testable in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_update_kanban_docs.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N5:"
        }), " Repeated runs must not multiply task-ID link segments; canonical row grammar remains idempotent."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-out-of-scope",
      children: "1.4 Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full rollback-journal implementation for RW orchestration (tracked separately)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-housing stories/tasks unrelated to FR-089."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board naming/terminology migrations unrelated to footer integrity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-test-design",
      children: "2. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What to verify"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single-footer baseline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A valid row with one footer remains unchanged and is not flagged."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A row with repeated footer chunks is detected and counted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-agreement pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oldest timestamp and first footer chunk agree, allowing deterministic canonical recovery."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-agreement fail"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Oldest timestamp and first footer chunk disagree; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "timestamp-order divergence"
            }), " is emitted and silent normalization is blocked."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drift prevention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated enforcement/update passes do not introduce forward timestamp creep."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board parity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Detection and reporting behave consistently for both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " style rows."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-ID multiplication guardrail"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Repeated runs preserve single-instance task-ID segments and avoid multiplied ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E#:S#:T#"
            }), " tokens."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traceability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-089, E2:S15", ":T03", ", Story 015, and this IPP remain bidirectionally linked."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-a---contract-and-parser-scaffolding",
      children: "Phase A - Contract and parser scaffolding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add explicit footer-chunk parsing utilities in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add dual-agreement evaluation helpers and anomaly classification."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add reporting structure for duplicate-footer metrics and row identifiers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add/confirm task-link segment normalization rules that prevent repeated task-ID append behavior."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-b---enforcement-integration",
      children: "Phase B - Enforcement integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate duplicate-footer validation into board update/enforcement paths."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensure clean rows remain idempotent and unmodified."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevent silent destructive normalization when divergence is detected."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce single-instance task-ID segment grammar during reconciliation/update flows."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-c---regression-coverage",
      children: "Phase C - Regression coverage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add tests for clean rows and duplicate rows."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add tests for dual-agreement pass/fail behavior."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add repeated-run regression test for timestamp drift prevention."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add/confirm regression checks for task-ID multiplication prevention across repeated runs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-d---governance-reconciliation",
      children: "Phase D - Governance reconciliation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Link this IPP from task ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S15:T03"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link this IPP from FR-089."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reconcile Story 015 checklist/metadata for T03 progress and traceability."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-success-criteria",
      children: "4. Success criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP file exists with complete spec, test design, and implementation plan for FR-089."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Script logic detects and reports duplicate footer corruption with row-level detail."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Dual-agreement timestamp policy is enforced with explicit divergence anomaly handling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Regression tests cover clean, duplicate, pass, fail, and repeated-run drift scenarios."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Row normalization and repeated runs preserve single-instance task-ID segments (no multiplication)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task/FR/Story/IPP traceability is bidirectional and link-valid."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Implementation released (v0.2.15.3+1 / v0.2.15.3+2); ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E2:S15", ":T03"]
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-089"
        }), " marked complete / IMPLEMENTED."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089",
          children: ["Host task E2:S15", ":T03"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening",
          children: "FR-089"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract",
          children: "Story 015"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
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