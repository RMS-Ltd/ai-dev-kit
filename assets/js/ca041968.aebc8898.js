"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["66560"], {
24868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_02_s_13_t_03_workflow_behavior_validation_md_ca0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-02-s-13-t-03-workflow-behavior-validation-md-ca0.json
var site_docs_implementation_cycles_ipp_e_02_s_13_t_03_workflow_behavior_validation_md_ca0_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E02S13T03-workflow-behavior-validation","title":"E02:S13:T03 — Planning: Workflow Behavior Validation (IPW)","description":"Host TaskS13:T03)","source":"@site/../docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S13:T02 — Planning: Inventory Package Components and Map to Expectations (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T02-inventory-package-components-map"},"next":{"title":"E02:S13:T04 — Planning: Integration and Dependency Alignment (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S13 — Planning: Workflow Behavior Validation (IPW)';

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
        id: "e02s13--planning-workflow-behavior-validation-ipw",
        children: ["E02:S13", ":T03", " — Planning: Workflow Behavior Validation (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T03-validate-workflow-behavior-against-documented-guidance",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-validate-workflow-behavior-against-documented-guidance.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E02:S13", ":T03", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
        children: "T01 expectations baseline"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
        children: "T02 component inventory"
      }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
        children: ["E07:S07", ":T01", " report"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented (2026-06-05)"]
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
            children: "Source (FR/BR/Task)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW"
            }), " behavior: 13-step model, gates 1b/1c/1d, Step 7 four-surface contract, Step 9 validator set, BR-097 build resolution, UKW/CMW context attribution, atomicity/TODO contract"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T01 §RW + §Behavioral Expectations; T08; ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "UKW"
            }), " behavior: 9 steps + Step 2.5, flags (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-u/-p/-a/--rp/-c"
            }), "), bottom-up order, perpetual-task wiring, FR-097 stamp rules"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 (doc-lagged 8-step); live UKW spec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CMW"
            }), " behavior: deterministic scripts, non-blocking Step 9.5 trigger, correct ", (0,jsx_runtime.jsx)(_components.code, {
              children: "check_changelog_size"
            }), " path"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 §CMW; component-inventory Gap row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Intake"
            }), " behavior: documented 7-step chain vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake_*.py"
            }), " + nested YAML"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 §Intake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "config-driven execution"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " loading consistency across scripts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 §Configuration; E07 M1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "versioning validators"
            }), ": schema rules, doc-init BUILD+0, semver conversion, task-touch tags"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T01 §Versioning; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_converter.py"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "doc/live parity"
            }), " post-T08: portable excerpts, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "canonical-rw-steps.yaml"
            }), ", registry vs root ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/commands/"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T08 AC; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-trigger-dual-source-parity.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Document discrepancies with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "severity"
            }), " (Critical/High/Medium/Low) and evidence paths — feeds T05"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story AC; E07 §5 taxonomy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flesh out T03 task doc (scope, AC, inputs, references) and wire IPP bidirectionally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-042, FR-094"
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
            children: "Source (FR/BR/Task)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Validation-only"
            }), " — no package fixes, no README/YAML remediation (deferred to T05/T06)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every FAIL/PARTIAL row cites evidence (file path, command output, E07 finding ID)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E07 report pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reuse T02 inventory + E07 hypotheses; extend with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "executable"
            }), " checks where possible"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02 companion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Companion report is evergreen; task doc holds executive summary + verification table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02 pattern"
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
        }), " No functional edits under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/"
        }), "; read-only validator invocations allowed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Package behavior vs T01 + live ai-dev-kit execution spec."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Integration alignment (T04); consolidated gap log (T05); remediation implementation; T01 baseline rewrite."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Produce an authoritative behavioral validation report proving whether the Workflow Management package ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "behaves as documented"
      }), " across RW, UKW, CMW, Intake, config loading, and versioning validators — distinguishing doc-aligned behavior (T08) from runtime/cohesion gaps (E07 H2/H3/M1) — so T05 can consolidate severity-ranked remediation without re-discovering findings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seven validation domains in companion file: (1) RW, (2) UKW, (3) CMW, (4) Intake, (5) config/versioning, (6) doc/live parity, (7) E07 crosswalk. Each row: expected behavior (T01), observed behavior (evidence), status PASS/PARTIAL/FAIL, severity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Housing: detailed matrix in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-behavior-validation-report.md"
        }), "; executive summary in T03 task doc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BR-097: post-ship verification prescribes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S13:T03 --art"
        }), " only."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
      children: "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " TODO → IN PROGRESS on Step 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " All AC satisfied; V1–V10 PASS; companion report published; forensic marker via RW."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and kboard row update in same RW Step 7 session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution step (not planning-only IPW creation)."]
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
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single approach: companion report + task summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc-only; one-PR revert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confined to kanban/docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-scoped validation; T01 + AC govern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No architectural trade-off"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not alter RW/IPW/UKW gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extends T01/T02; no ADR contradiction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXEMPT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exemption (only if all T = N)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single locus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Files in §4.1 only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E04:S16", ":T03", " + E03:S04", ":T03", " pattern"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible in one task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc revert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec elsewhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 §Behavioral Expectations + E07 §7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§5.3 cites T01 + E07"
          })]
        })]
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
            children: "V1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW step canon"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_canonical_steps.py"
            }), " — exit 0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-source parity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-trigger-dual-source-parity.md"
            }), " checklist scored Y/N"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator smoke"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py --strict"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py --art --requested E02:S13:T03"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "resolve_rw_build.py"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMW path"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/changelog/check_changelog_size.py"
            }), " runs; contrast README ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validation/"
            }), " path"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW step model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry + UKW guide step count vs T01 8-step claim"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest subset"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "run_isolated_pytest.sh"
            }), " pass count; CI workflow presence"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config loader fragmentation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " implementation count and independence"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flat YAML hazard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-deprecated flat workflow YAML count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No package functional code changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wiring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task ↔ IPP ↔ companion links resolve"
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
                children: "E02:S13:T03"
              }), " status ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), " in task doc. Update ", (0,jsx_runtime.jsx)(_components.code, {
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
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-behavior-validation-report.md"
            }), " with validation domains + evidence"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Companion artefact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V1–V6 automated checks; capture command output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §Evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Score behavioral dimensions PASS/PARTIAL/FAIL with severity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §Validation Matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-walk E07 H1–H3, M1–M6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §E07 Crosswalk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish compliance summary + discrepancy table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §Summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flesh out T03: Scope, AC, Input, Deliverable, verification table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update Story 13 checklist + story AC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional pointer in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "component-inventory-map.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V7–V10 verification checklist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc verification table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E02:S13:T03 --art"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release v0.2.13.3+1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Reconcile task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E02:S13:T03"
              }), " status"]
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), " if all ACs satisfied; update kboard"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task + story + board"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW verification / FBU wave rule (BR-097):"
      }), " Post-ship verification prescribes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S13:T03 --art"
        })
      }), " only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CREATE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CREATE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-13/.../workflow-behavior-validation-report.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-validate-workflow-behavior-against-documented-guidance.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-13-workflow-management-package-implementation-review.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE (optional): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "component-inventory-map.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE (RW Step 7): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run automated checks → populate report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task doc + story → IPP wire → RW"
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
            children: "Tied to (RF/T/impl step)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T03-validate-workflow-behavior-against-documented-guidance.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope, AC, summary, links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF9, Step 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-13-workflow-management-package-implementation-review.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklist + story AC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF8, Step 8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 status/version on release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "component-inventory-map.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Behavior report pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 9"
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
              children: "docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-13/.../workflow-behavior-validation-report.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed validation matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF8"
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
            children: "T01 UKW 8-step doc lag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — noted in report; full T01 refresh deferred T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["README ", (0,jsx_runtime.jsx)(_components.code, {
              children: "check_changelog_size"
            }), " path"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — documented as M2 discrepancy; fix deferred T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flat YAML deprecation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — FR-050 / T05 remediation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADR for validation housing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — EXEMPT per §2.5; governed by T01 §Behavioral Expectations"
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
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning artefact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 Input/References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-13/.../workflow-behavior-validation-report.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban companion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 Deliverable; T05 Input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP host link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story 13 doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban story"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 checklist"
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
        }), " ", "Companion report with validation matrix + evidence for all domains"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task doc AC checkboxes + V1–V10 verification table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "E07 crosswalk incorporated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "No package functional code changed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Bidirectional T03 ↔ IPP ↔ companion links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Story AC “Behavioral validation notes captured” on RW completion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Forensic marker via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S13:T03 --art"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T03-validate-workflow-behavior-against-documented-guidance",
          children: "T03 task doc"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
          children: "T01 expectations baseline"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
          children: "T02 component inventory"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation",
          children: "T08 sync task"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
          children: ["E07:S07", ":T01", " report"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior",
          children: ["E04:S16", ":T03", " pattern"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md",
          children: "rw-trigger-dual-source-parity.md"
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