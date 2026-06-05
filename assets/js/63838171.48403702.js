"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["32293"], {
25557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_02_s_13_t_10_kanban_transform_consolidation_and_config_loader_unification_md_638_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-02-s-13-t-10-kanban-transform-consolidation-and-config-loader-unification-md-638.json
var site_docs_implementation_cycles_ipp_e_02_s_13_t_10_kanban_transform_consolidation_and_config_loader_unification_md_638_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification","title":"E02:S13:T10 — Planning: Kanban Transform Consolidation (+M1 config loader unification) (IPW)","description":"Host TaskS13:T10)","source":"@site/../docs/implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T06:35:13.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S13:T09 — Planning: FR-050 Workflows Directory Reorganization (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T09-fr050-workflows-directory-reorganization"},"next":{"title":"E02:S14:T01 — Planning: Enumerate Workflow-Mgt Installation Paths (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S14T01-enumerate-workflow-mgt-installation-paths"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T06:35:13.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S13 — Planning: Kanban Transform Consolidation (+M1 config loader unification) (IPW)';

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
  "value": "2.2 Specification mapping from ascertained requirements",
  "id": "22-specification-mapping-from-ascertained-requirements",
  "level": 3
}, {
  "value": "2.3 Constraints",
  "id": "23-constraints",
  "level": 3
}, {
  "value": "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)",
  "id": "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
  "level": 3
}, {
  "value": "2.5 ADR necessity decision (mandatory — IPW Phase 5.0)",
  "id": "25-adr-necessity-decision-mandatory--ipw-phase-50",
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
  "value": "4.3 Documentation implementation steps (optional)",
  "id": "43-documentation-implementation-steps-optional",
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
    br: "br",
    code: "code",
    em: "em",
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
        id: "e02s13--planning-kanban-transform-consolidation-m1-config-loader-unification-ipw",
        children: ["E02:S13", ":T10", " — Planning: Kanban Transform Consolidation (+M1 config loader unification) (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T10-kanban-transform-consolidation"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E02:S13", ":T10", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment",
        children: "T05 gap log"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report",
        children: "T04 integration alignment report"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "FR-092"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft"]
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
            children: "Source (FR/BR/Task)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Establish a single shared kanban row-transform entrypoint contract for MoSCOW row tail transforms, used consistently by RW Step 7 (invocation_context ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_step_7"
            }), "), UKW Step 6, and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T10 scope · ", (0,jsx_runtime.jsx)(_components.code, {
              children: "apply_canonical_row_transform_pipeline"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ensure each context selects the correct ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RowTransformContract"
            }), " (step order) and evidence-mode semantics to avoid divergent ordering and repeated tail segments."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092 · T10 scope · UXR-009/FR-092 stamp evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish a boundary contract doc in the workflow-mgt KB that explains when to use each entrypoint path (agent context vs deterministic script), with explicit contract/evidence-mode expectations."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T10 AC + boundary doc requirement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Preserve the FR-092 four-surface contract end-to-end: task doc + source FR/BR/UXR docs + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " canonical rows (no duplicate tail tokens) + canonical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), " reconciliation."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092 · T10 AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No regression in release-readiness gates and board stamp diffs: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_board_stamp_diff.py"
            }), " and RW Step 7 validator suite continue to pass after refactor."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T10 AC + BR-069/FR-097/FR-092 gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Consolidate duplicated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " implementations into a shared ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_config_loader"
            }), " module and update all call sites to use it."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-INTG-002 · T05 Gap 4 · M1 scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Maintain parity of config discovery and returned schema fields across all impacted scripts/validators (no breaking behavior for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " path resolution)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-INTG-002 · T04 I10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add/extend tests to prove (a) transform contract parity/idempotency across contexts and (b) config-loader output parity across call sites."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T10 AC · existing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_update_kanban_docs.py"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP must be linked from the host task before implementation begins (FR-083 planning gate)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T10 Dependencies · FR-083"
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
            children: "Determinism: same inputs (board content + evidence mode + config paths) yield byte-stable transformed outputs."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-NF2 · UXR-009"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Evidence/stamp integrity: preserve row ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " stamp authority semantics and avoid synthetic stamp churn when evidence is absent."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-097 · UXR-009 · FR-092"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward-safe behavior: do not change validator gate semantics; refactor is contract-preserving from an adopter’s perspective."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092 · T10 out-of-scope validators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Operational safety: implementation must be validated through the existing validator suite before status reconciliation to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F4 · T10 AC"
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
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Preserve FR-092 preventive/UKW corrective separation semantics (RW release correctness is self-sufficient)."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Preserve canonical transform step ordering and evidence-mode behaviors in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "apply_canonical_row_transform_pipeline"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Config loader consolidation must not modify ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " schema meaning or required keys."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shared kanban transform contract/module extraction and invocation routing."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Boundary documentation in workflow-mgt KB."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Shared ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_config_loader"
            }), " module extraction and call-site updates."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Regression tests for parity, idempotency, and loader output stability."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FR-050 workflows directory reorganization (T09)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changes to release-tag mutability or git publish mechanics (handled by RW)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Produce an implementation plan that removes kanban transform and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config"
      }), " loader fragmentation by routing all relevant paths through a single shared entrypoint contract, while preserving FR-092 four-surface invariants and validator gate semantics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The specification defines (1) the transform entrypoint contract as the canonical “parse-normalize-render” pipeline configuration and (2) a single shared ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw_config_loader"
      }), " abstraction for schema-consistent config discovery. By enforcing consistent contract selection and evidence-mode semantics across RW Step 7, UKW Step 6, and deterministic script updates, we eliminate ordering divergence and repeated tail segments. By unifying config loading across scripts/validators, we eliminate path-resolution drift and ensure that downstream validators operate against identical config-derived inputs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not re-implement validator gates or change their core semantics; refactor must be contract-preserving."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not alter FR-050 scope or run any FR-050-driven directory reorg here."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preserve stamp evidence integrity and avoid synthetic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " stamp churn."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
      children: "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " TODO"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " First non-planning implementation change lands (module extraction + call-site routing or loader unification begins)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " Acceptance evidence is recorded (tests/verification notes linked) and validator suite passes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and any linked kboard row status must update in the same change set/session during implementation (executor-owned)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution step (not planning-only IPW artifact creation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision-mandatory--ipw-phase-50",
      children: "2.5 ADR necessity decision (mandatory — IPW Phase 5.0)"
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
            children: "Multiple valid approaches exist (doc-only boundary vs module extraction; shared contract location patterns; loader consolidation via shared helper vs wrapper compatibility layers)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undo impacts multiple scripts/validators and documentation, and requires adopter-facing re-alignment."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Touches multiple framework scripts and validators (", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs"
            }), ", kanban transforms, validations, versioning/documentation scripts) plus KB docs."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The chosen entrypoint and loader consolidation becomes a canonical pattern for future kanban/update work."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trade between deduplication and backward-safe parity; trade between evidence-stamp integrity and minimal mutation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updates RW/UKW boundary guidance (governance/contract doc) and affects how adopters/agents should invoke the shared pipeline."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No single existing ADR/policy explicitly covers this combined entrypoint contract + loader unification choice as the canonical “how we do X here.”"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRED"
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
            children: "Behavior / layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TD1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transform contract parity across contexts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["For a representative fixture set, RW Step 7, UKW Step 6, and deterministic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), " paths produce the same canonical row tail transforms (no ordering divergence)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TD2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotency under repeated application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-running the unified pipeline does not re-multiply row tail segments; diagnostics report duplicate/footer reconciliation counts as zero."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TD3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence/stamp integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "With evidence_mode variants (as applicable), the pipeline appends/suppresses/enforces stamps according to the existing evidence gating semantics without synthetic churn."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TD4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression on board stamp diff validators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_board_stamp_diff.py"
            }), " and Step 7 validator suite continue to pass on known fixtures after refactor."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TD5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config loader output parity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using a canonical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " fixture, the shared loader module returns the same schema-derived values that prior per-file ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " implementations produced (key-by-key parity)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TD6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call-site integration smoke"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each impacted script/validator that consumed ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " continues to operate successfully (no schema key resolution regressions)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TD7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full validator smoke for this task"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py --strict --requested E02:S13:T10 --art"
            }), " and key validators impacted by config/kanban update wiring to ensure no breakage."]
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
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Transition task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E02:S13:T10"
              }), " status ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), " in the host task doc. Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), " date."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Status"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Extract or centralize the transform entrypoint contract so RW Step 7, UKW Step 6 logic, and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), " route through the same shared contract selection and pipeline invocation."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared transform entrypoint module + updated call sites"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), " and UKW-related invocation paths to use the shared transform contract and preserve evidence-mode/stamp authority semantics."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract-consistent behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Extend/adjust tests, reusing existing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_update_kanban_docs.py"
            }), " patterns, to prove parity and idempotency across contexts."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New/updated tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create/update workflow-mgt KB boundary contract doc describing when to use each entrypoint path and what contract/evidence-mode assumptions apply."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary KB doc published"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create the shared ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_config_loader"
            }), " module and migrate all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " call sites to use it (remove duplication)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified loader + updated scripts/validators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add parity tests and integration smoke checks for config loader behavior across impacted scripts/validators."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loader parity test coverage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run the validator suite impacted by this refactor and confirm no gate semantic regressions (strict runs)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation pass evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconcile task status based on evidence and update the task doc (and kboard row status) atomically."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task status ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS/BLOCKED"
            }), " as appropriate)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Reconcile task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E02:S13:T10"
              }), " status"]
            }), " to actual implementation state: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), " if all ACs satisfied; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " if ongoing; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), " + reason if blocked. Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc status reflects actual state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW verification / FBU wave rule (BR-097):"
      }), " Any post-ship verification or FBU-closure step must prescribe ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E02:S13:T10 --art"
      }), " only (BUILD +1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/kanban/*"
        }), " (transform contract extraction / invocation routing as needed)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/**/validate_*.py"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/**/version/*.py"
        }), " (config-loader call-site migration)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py"
        }), " and/or new targeted test modules for loader parity"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow-mgt KB boundary documentation doc(s)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New shared module(s) for:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "transform entrypoint contract"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_config_loader"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refactor transform contract without changing pipeline semantics (tests first/parallel where possible)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migrate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " and invocation routing to the shared contract."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add/confirm parity and idempotency tests for transform path."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migrate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "load_rw_config"
        }), " call sites to the shared loader (preserve output parity)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add loader parity tests and run validator suite in strict mode."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Publish boundary docs and reconcile status."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps-optional",
      children: "4.3 Documentation implementation steps (optional)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update boundary contract doc before running final strict validator suite, so any documentation-driven parameter assumptions are validated alongside code."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Populated in IPW Phase 5 — after implementation planning, before housing."
      })
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
            children: "Tied to (RF/T/impl step)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update Scope/Deliverables/AC to reflect M1 (GAP-WFMGT-INTG-002) inclusion and add explicit acceptance checks for loader unification."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6–RF8 · Phase 8 wiring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor cross-reference update to clarify that the shared transform entrypoint contract is the boundary for Step 7 vs other paths."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3–RF4"
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
            children: "Proposed path (draft)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to (RF/T/impl step)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Record the canonical choice of shared transform entrypoint contract + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_config_loader"
            }), " consolidation."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5 (ADR REQUIRED) · RF1–RF8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/kanban-transform-entrypoint-boundary.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary contract doc: when to use each entrypoint path and required contract/evidence-mode semantics."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3 · Phase 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-config-loader-entrypoint-boundary.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document unified loader module behavior, expected config keys, and parity guarantees."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6–RF8 · Phase 6–7"
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
            children: "Resolution (CREATE row above, or NONE + reason)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing explicit “entrypoint boundary” contract for kanban row transforms across RW vs UKW vs deterministic script."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE as D-C2."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Missing explicit documentation for unified ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_config_loader"
            }), " module behavior across adopters/scripts."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE as D-C3."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Do not update FR-050 workflow directory structure in this task."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE: out of scope (handled by T09)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Do not modify git tag/release mechanics; keep governance to RW."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE: mechanics are in RW and enforced by existing policies (BR-097/ADR-019)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-housing",
      children: "6. Documentation housing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Populated in IPW Phase 6 — canonical paths and publication intent."
      })
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
            children: "Publication N/A reason (if N/A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inbound links to add"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo-level doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP under “Input” and “References”; update task to include scope note"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo-level KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add cross-reference mention from Step 7 boundary section"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo-level ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link from this IPP §2.5 and §5 deliverables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/kanban-transform-entrypoint-boundary.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo-level KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link from T10 task and boundary references from Step 7 guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-config-loader-entrypoint-boundary.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo-level KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link from T10 task and any unified-loader reference section"
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
          disabled: true
        }), " ", "IPP doc exists at the canonical path and contains all required sections (§1–§7)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "§2.4 includes the mandatory status transition intent and executor ownership statements."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "§2.5 includes a fully scored ADR necessity matrix with outcome ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REQUIRED"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "§5 lists an ADR deliverable row (", (0,jsx_runtime.jsx)(_components.code, {
          children: "D-C1"
        }), ") when outcome is REQUIRED."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "§5.1–§5.3 includes all documentation gaps resolved via explicit CREATE/UPDATE/NONE entries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "§6 assigns canonical paths and publication status for every non-NONE deliverable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Bidirectional wiring is completed during Phase 8: host task links this IPP under both “Input” and “References”."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
          children: "T10-kanban-transform-consolidation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment",
          children: "T05-create-gap-log-and-risk-assessment (GAP-WFMGT-INTG-001/002)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report",
          children: "T04 integration alignment report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
          children: "FR-092 canonical RW/UKW kanban consistency program"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "apply_canonical_row_transform_pipeline"
          }), " implementation"]
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