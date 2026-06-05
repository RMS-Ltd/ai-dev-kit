"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["67680"], {
27855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_15_t_04_br_069_row_tail_normalization_and_terminal_timestamp_interaction_md_0de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-15-t-04-br-069-row-tail-normalization-and-terminal-timestamp-interaction-md-0de.json
var site_docs_implementation_cycles_ipp_e_2_s_15_t_04_br_069_row_tail_normalization_and_terminal_timestamp_interaction_md_0de_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction","title":"E2:S15:T04 - Planning: Spec, Tests, Implementation Plan (IPP)","description":"Host TaskS15:T04)","source":"@site/../docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-21T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E2:S15:T03 - Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails"},"next":{"title":"E2:S15:T05 - Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md


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
  "value": "1.5 Constraints",
  "id": "15-constraints",
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
  "value": "Phase A — Reproduction harness (fixed)",
  "id": "phase-a--reproduction-harness-fixed",
  "level": 3
}, {
  "value": "Phase B — Remediation implementation (follow-on coding task)",
  "id": "phase-b--remediation-implementation-follow-on-coding-task",
  "level": 3
}, {
  "value": "Phase C — Guardrails and diagnostics",
  "id": "phase-c--guardrails-and-diagnostics",
  "level": 3
}, {
  "value": "Phase D — Governance",
  "id": "phase-d--governance",
  "level": 3
}, {
  "value": "4. Success criteria (investigation + planning)",
  "id": "4-success-criteria-investigation--planning",
  "level": 2
}, {
  "value": "5. Root cause analysis (evidence)",
  "id": "5-root-cause-analysis-evidence",
  "level": 2
}, {
  "value": "5.1 Pipeline order divergence (confirmed)",
  "id": "51-pipeline-order-divergence-confirmed",
  "level": 3
}, {
  "value": "5.2 Normalize vs enforce interaction (confirmed failure mode)",
  "id": "52-normalize-vs-enforce-interaction-confirmed-failure-mode",
  "level": 3
}, {
  "value": "5.3 Controlled reproduction (library-level)",
  "id": "53-controlled-reproduction-library-level",
  "level": 3
}, {
  "value": "5.4 Relationship to FR-089 / T03",
  "id": "54-relationship-to-fr-089--t03",
  "level": 3
}, {
  "value": "6. Guardrail definitions (for implementation)",
  "id": "6-guardrail-definitions-for-implementation",
  "level": 2
}, {
  "value": "7. Row transform DAG (reference)",
  "id": "7-row-transform-dag-reference",
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
        id: "e2s15---planning-spec-tests-implementation-plan-ipp",
        children: ["E2:S15", ":T04", " - Planning: Spec, Tests, Implementation Plan (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E2:S15", ":T04", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
        children: ["BR-069 - kboard earliest ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " timestamps overwritten / task-ID multiplication"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Isolate why MoSCOW rows on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " still exhibit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forensic timestamp churn"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "traceability segment multiplication"
      }), " after FR-089 / E2:S15", ":T03", " guardrails. Deliver a concrete ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "root-cause narrative"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ordering invariants"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementation-ready guardrails"
      }), " so touch-only and reconciliation flows cannot shift preserved historical evidence or append duplicate FBU/task segments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements",
      children: "1.2 Functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F1:"
        }), " Treat ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "exactly one"
        }), " terminal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "| Last modified: YYYY-MM-DD HH:MM UTC"
        }), " segment per MoSCOW row as the forensic anchor after normalization (aligned with FR-089 single-footer grammar where applicable)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_normalize_traceability_segments_for_row"
        }), " MUST NOT leave legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " segments ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-terminal"
        }), " when appending ", (0,jsx_runtime.jsx)(_components.code, {
          children: "| FBU | Task | IPP"
        }), " tails, or MUST strip/reposition footers before rebuild so enforcement does not mis-detect “missing” timestamps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_moscow_row_timestamps"
        }), " MUST NOT append a synthetic “now” timestamp when any valid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " chunk already exists on the row (not only when it is syntactically terminal)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F4:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pipeline order"
        }), " between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_board"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_terminal_timestamps_on_boards"
        }), " MUST converge to the same canonical semantics for identical inputs, or one path MUST be deprecated in favor of a single shared transform DAG."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F5:"
        }), " Duplicate-footer reconciliation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "reconcile_duplicate_moscow_row_footers"
        }), ") remains governed by dual-agreement policy from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails",
          children: "IPP-E2S15T3"
        }), "; divergence rows remain unchanged by design."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F6:"
        }), " Task-ID link segments MUST NOT duplicate after repeated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "normalize_board_traceability_segments"
        }), " passes (extends FR-089 F8/F9)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-non-functional-requirements",
      children: "1.3 Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N1:"
        }), " Diagnostics remain auditable (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rows_with_duplicate_footers"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp_order_divergence_row_ids"
        }), ", optional new counters for “append suppressed” vs “tail rebuilt”)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N2:"
        }), " Regression tests target ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py"
        }), " patterns (pytest)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N3:"
        }), " Behavior is deterministic and idempotent for canonical rows after remediation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-out-of-scope",
      children: "1.4 Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rewriting FR/BR/UXR issue doc bodies or MoSCOW prioritization policy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual cleanup of historical board corruption without a documented machine-assisted repair strategy (may be a separate governance task)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-constraints",
      children: "1.5 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UKW (", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_terminal_timestamps_on_boards"
        }), ") is already documented as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " a full corpus repair pass (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
        }), "); remediation must address ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "code"
        }), ", not expectations that UKW alone heals all rows."]
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
            children: "R1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline parity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same synthetic MoSCOW row produces ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "byte-identical"
            }), " output after full ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_board"
            }), " ordering vs UKW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_terminal_timestamps_on_boards"
            }), " ordering ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "once"
            }), " remediation lands (or explicit documented delta is retired)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal timestamp preservation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single-footer row with historical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " never gains a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "second"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " chunk solely because traceability segments were appended after normalization."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize + enforce interaction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_normalize_traceability_segments_for_row"
            }), ", either the row ends with exactly one footer at EOL, or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_moscow_row_timestamps"
            }), " does not append ", (0,jsx_runtime.jsx)(_components.code, {
              children: "timestamp_now"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate-footer collapse"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rows with two chronologically ordered footers where dual-agreement passes collapse to oldest timestamp ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "without"
            }), " subsequent duplicate footer introduction by enforcement."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divergence preservation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rows flagged ", (0,jsx_runtime.jsx)(_components.code, {
              children: "timestamp_order_divergence"
            }), " stay structurally stable across repeated transforms (no silent “fix” that destroys evidence)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-ID idempotency"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Repeated application of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "normalize_board_traceability_segments"
            }), " on a clean row does not increase task-link segment count."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fbuboard branch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_cleanup_fbuboard_active_rows"
            }), " + reconcile + normalize + enforce ordering does not regress R2–R4 for FBU-token rows."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traceability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BR-069, E2:S15", ":T04", ", Story 015, this IPP, and boards remain bidirectionally linked."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documentary regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test 4.13 fails if ordering divergence or double-footer append regress without intentional contract change (after remediation, rewrite assertions to preservation semantics)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-a--reproduction-harness-fixed",
      children: "Phase A — Reproduction harness (fixed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Minimal MoSCOW fixture strings in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_update_kanban_docs.py"
        }), " (or adjacent helper) covering: single footer, dual footer pass, dual footer divergence, FBU+task+IPP row shape."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "normalize_board_traceability_segments"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reconcile_duplicate_moscow_row_footers"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_moscow_row_timestamps"
        }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "both"
        }), " orders documented in §5 to lock expected post-remediation parity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-b--remediation-implementation-follow-on-coding-task",
      children: "Phase B — Remediation implementation (follow-on coding task)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Refactor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_normalize_traceability_segments_for_row"
        }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "strip all"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " chunks before rebuilding FBU/Task/IPP tail, then re-attach ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "preserved"
        }), " canonical footer (single chosen timestamp per FR-089 policy) at EOL; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " teach ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_moscow_row_timestamps"
        }), " to detect any footer chunk anywhere in the row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Unify pipeline order: extract a single internal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transform_moscow_row_pipeline(content, project_root, timestamp_now, mode)"
        }), " used by both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_board"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_terminal_timestamps_on_boards"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend duplicate task-link stripping if normalize still duplicates FBU/task tokens on successive runs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-c--guardrails-and-diagnostics",
      children: "Phase C — Guardrails and diagnostics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Emit explicit metric when enforcement ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "would"
        }), " have appended ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp_now"
        }), " but suppression rules fire (post-implementation)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep divergence + duplicate-footer reporting from T03; add assertion tests that counts do not explode on idempotent re-run for clean rows."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-d--governance",
      children: "Phase D — Governance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link IPP from task doc, BR-069, Story 015 checklist."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After code merge, update BR-069 acceptance boxes and consider closing criteria for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implementation"
        }), " vs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "investigation"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-success-criteria-investigation--planning",
      children: "4. Success criteria (investigation + planning)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP filed under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E2S15T4-*.md"
        }), " with spec, tests, and plan."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Root cause hypothesis substantiated with code references and reproduction (§5)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Guardrail requirements F1–F6 and test matrix R1–R8 defined for implementation follow-on."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Code changes merged and regression tests passing (Phases A-C published under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.15.4+1"
        }), " through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.15.4+3"
        }), "; category-4 suite passing with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_4_17"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-069 narrowed after implementation satisfies F1–F6 (residual full-corpus canonicalization closure remains tracked under FR-090 / T05)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-root-cause-analysis-evidence",
      children: "5. Root cause analysis (evidence)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-pipeline-order-divergence-confirmed",
      children: "5.1 Pipeline order divergence (confirmed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two different call orders exist in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Order"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_board"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "normalize_board_traceability_segments"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reconcile_duplicate_moscow_row_footers"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_moscow_row_timestamps"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_terminal_timestamps_on_boards"
            }), " (kboard / non-fbuboard)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "reconcile_duplicate_moscow_row_footers"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "normalize_board_traceability_segments"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_moscow_row_timestamps"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_terminal_timestamps_on_boards"
            }), " (fbuboard)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_cleanup_fbuboard_active_rows"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reconcile_duplicate_moscow_row_footers"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "normalize_board_traceability_segments"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_moscow_row_timestamps"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Non-commutative transforms imply UKW and RW/board-update paths can yield ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different"
      }), " row text for the same starting row."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-normalize-vs-enforce-interaction-confirmed-failure-mode",
      children: "5.2 Normalize vs enforce interaction (confirmed failure mode)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "_normalize_traceability_segments_for_row"
      }), " rebuilds rows as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "return f\"{line.rstrip()} | {fbu_token} | {task_token} | {ipp_token}\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It strips prior IPP/no-IPP segments but ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["does not remove existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " chunks"]
      }), " before appending traceability tokens. Therefore a row whose ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "last"
      }), " semantic footer was terminal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " can end up with structure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "… | Last modified: <historical> | [FBU] | [Task] | —No IPP—"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The terminal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "enforce_moscow_row_timestamps"
      }), " regex requires a footer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "at end of line"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "ts_pattern = re.compile(r\"\\|\\sLast modified:\\s\\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}\\sUTC\\s*$\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If no match, enforcement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "appends"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "| Last modified: <timestamp_now>"
      }), ", introducing a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "second"
      }), " footer or displacing forensic interpretation—matching BR-069 “overwrite” reports and duplicate-footer churn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-controlled-reproduction-library-level",
      children: "5.3 Controlled reproduction (library-level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using in-repo imports from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
      }), ", a minimal MoSCOW section with one bold FBU row and a single historical footer shows:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW ordering"
        }), " (reconcile → normalize → enforce), output can append ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "timestamp_now"
          })
        }), " while retaining the historical chunk earlier in the line—", (0,jsx_runtime.jsx)(_components.strong, {
          children: "two"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " segments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "update_kanban_board"
          }), " ordering"]
        }), " (normalize → reconcile → enforce), outputs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "differ"
        }), " from UKW on the same input for duplicate-footer scenarios—demonstrating ordering sensitivity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Automated lock:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test_4_13_br069_pipeline_order_divergence_and_non_terminal_footer_append"
      }), " in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "test_update_kanban_docs.py"
        })
      }), " encodes both behaviors (documentary until remediation lands)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-relationship-to-fr-089--t03",
      children: "5.4 Relationship to FR-089 / T03"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails",
        children: "IPP-E2S15T3"
      }), " defines duplicate-footer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detection"
      }), " and dual-agreement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reconciliation"
      }), " but does not eliminate the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "normalize-then-append-footer"
      }), " class of bugs above. BR-069 remains valid until normalize and enforcement share a single invariant on footer placement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-guardrail-definitions-for-implementation",
      children: "6. Guardrail definitions (for implementation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "G1 (timestamp):"
        }), " Before or during traceability rebuild, collect all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " chunks; choose preserved value per FR-089 dual-agreement when multiple; emit single terminal footer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "after"
        }), " FBU/Task/IPP segments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "G2 (enforce):"
        }), " If G1 is satisfied, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enforce_moscow_row_timestamps"
        }), " is a no-op for that row unless no footer exists anywhere."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "G3 (task-ID):"
        }), " Before rebuild, deduplicate consecutive identical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[E#:S#:T#](...)"
        }), " segments (extend existing FR-089 normalization)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "G4 (pipeline):"
        }), " One ordered pipeline function; UKW and board update both call it—eliminates order-dependent drift."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-row-transform-dag-reference",
      children: "7. Row transform DAG (reference)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n  subgraph inputs [MoSCOW_row_input]\n    RowMd[row_markdown]\n  end\n  subgraph transforms [intended_shared_pipeline]\n    Norm[normalize_traceability_segments]\n    Dup[reconcile_duplicate_footers]\n    Ts[enforce_terminal_timestamps]\n  end\n  RowMd --> Norm --> Dup --> Ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069",
          children: ["Host task E2:S15", ":T04"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails",
          children: "IPP-E2S15T3 – duplicate footer / divergence guardrails"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening",
          children: "FR-089"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection",
          children: "UXR-009"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract",
          children: "Story 015"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tests: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py"
          })
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