"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["48157"], {
43338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_01_t_23_tool_agnostic_workflow_step_tracking_runlogs_md_459_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-01-t-23-tool-agnostic-workflow-step-tracking-runlogs-md-459.json
var site_docs_implementation_cycles_ipp_e_2_s_01_t_23_tool_agnostic_workflow_step_tracking_runlogs_md_459_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs","title":"E02:S01:T23 — Planning: Tool-agnostic workflow step tracking + persisted run logs (IPW)","description":"Host TaskS01:T23)","source":"@site/../docs/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T17:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E2:S01:T22 — Planning: BR-075 perpetual RW version.py BUILD (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075"},"next":{"title":"E2:S06:T01 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T17:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S01 — Planning: Tool-agnostic workflow step tracking + persisted run logs (IPW)';

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
        id: "e02s01--planning-tool-agnostic-workflow-step-tracking--persisted-run-logs-ipw",
        children: ["E02:S01", ":T23", " — Planning: Tool-agnostic workflow step tracking + persisted run logs (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T23-tool-agnostic-workflow-step-tracking-and-runlogs.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E02:S01", ":T23", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved — implementation landed 2026-05-30"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Consolidated planning package for E02:S01", ":T23", ". Supersedes missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E6S7T18-specification.md"
        }), " under legacy E06:S07", ":T18", " housing."]
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
            children: "Source (FR/BR/Task)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Governance docs must not require Cursor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "todo_write"
            }), " specifically"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T23 AC1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Define canonical ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow Step Tracker"
            }), " semantics (states, lifecycle, step IDs)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T23 AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Windsurf/Cascade guidance mapping to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "todo_list"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T23 AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec-only persisted agent run log (workflow, route, current step, blocking reason, timestamps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T23 AC4; user scope: spec-only v1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW docs reference run log spec; housekeeping updated for tool-agnostic cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T23 AC5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dual-source parity (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " ↔ portable RW/UKW excerpts)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-060 / rw-trigger-dual-source-parity"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No overlap with ADR-008 forensic journals — explicit boundary cross-links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-008 §Decision item 6; IPP-E2S8T8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter-facing patterns remain project-agnostic where possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "workflow-hardening-guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc changes verifiable by automated governance tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-100 / IPW Phase 3"
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
        }), " Workflow Step Tracker states map 1:1 to prior todo semantics; forensic journal schema unchanged."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Governance/KB docs, ADR-011, JSON schema + example, doc lint tests, task wiring."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw_journal.py"
        }), " changes; FR-044; reference Python run-log writer; Windsurf ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".windsurf/"
        }), " artifact revival."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable portable agent-managed workflow execution across Cursor, Windsurf/Cascade, and tool-less environments by replacing IDE-specific TODO mandates with a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Step Tracker contract"
      }), ", a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "spec-only agent run log v1"
      }), ", and a governance doc sweep—without duplicating ADR-008 forensic recovery."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specification artifact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages%2Fframeworks%2Fworkflow-mgt%2FKB%2FDocumentation%2FDeveloper_Docs%2Fvwmp%2Fworkflow-step-tracker-contract.md",
              children: "workflow-step-tracker-contract.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract §Windsurf / Cascade appendix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              target: "_blank",
              "data-noBrokenLinkCheck": true,
              href: (__webpack_require__(79571)/* ["default"] */.A) + "",
              children: "workflow-agent-run-log-v1.schema.json"
            }), " + example"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW agent guide Step 17 + agent run log references"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated portable excerpts + parity checklist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log",
              children: "ADR-011"
            }), " boundary table"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spec-only v1 for agent run log (no runtime module)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementation commits via RW E02:S01", ":T23", " per project git policy."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog language: “Change implemented” until user verifies."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
      children: "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " COMPLETE (implementation 2026-05-30; pending RW for version anchor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " First non-planning implementation change (§4 Step 1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " All AC satisfied; pytest TC1–TC6 green; evidence linked."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc, story checklist, kboard row update together on closure RW."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution §4 final step."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision-mandatory--ipw-phase-50",
      children: "2.5 ADR necessity decision (mandatory — IPW Phase 5.0)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Criteria: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ipw-adr-necessity-checklist.md"
        })
      }), " (FR-100)."]
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
            children: "todo_write vs todo_list vs file-only tracker"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc/schema revert in one PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", all workflow agent guides, portable excerpts"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical pattern for all future agent workflows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portability vs IDE-native ergonomics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes RW/UKW/IPW/PVW mandatory agent behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinates with ADR-008; does not contradict"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRED"
      }), " — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log",
        children: "ADR-011"
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E1–E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated (REQUIRED)"
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
            children: "Behavior / layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1 — no bare Cursor-only mandates"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tests/docs/test_workflow_step_tracker_governance.py"
            }), ": governance files must reference Workflow Step Tracker contract when mentioning progress tracking"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2 — contract completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract doc contains required states + lifecycle rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4 — schema validity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Example JSON validates against schema"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1 — ADR boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-011 and ADR-008 cross-link boundary language"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3 — Windsurf appendix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Contract contains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "todo_list"
            }), " mapping table"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6 — dual-source parity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parity checklist includes tracker template row"
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
              children: ["[MANDATORY] Transition E02:S01", ":T23", " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), " in task doc"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create ADR-011, schema, example, tracker contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture + KB artifacts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewrite agent-driven-workflow progress section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "KB canonical SoT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sweep workflow agent execution guides + ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " + portable excerpts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance alignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update workflow-hardening-guide, forensic recovery guide, ADR-008 Related"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boundary docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add pytest governance tests TC1–TC6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/docs/"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire IPP to T23; fix T18 broken ICW link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY] Reconcile status"
            }), " — if all AC satisfied → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + forensic marker"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc reflects actual state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CREATE: IPP (this file), ADR-011, schema, example, tracker contract, tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UPDATE: agent-driven-workflow-execution.md, release-workflow-agent-execution.md, 7 other workflow guides, .cursorrules, cursorrules-rw/ukw excerpts, workflow-hardening-guide, workflow-forensic-recovery-guide, ADR-008 Related, rw-trigger-dual-source-parity, T23/T18 task docs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-011 + contract + schema (decisions first)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "agent-driven-workflow (canonical reference)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Per-workflow guides + root governance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests (verify sweep)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task wiring + status reconciliation"
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
              children: "agent-driven-workflow-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace Cursor TODO section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracker + run log + Step 17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4–RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Other ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*-workflow-agent-execution.md"
            }), " (7)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracker contract reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW/UKW/PVW tracker sections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-rw-trigger-section.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracker templates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cursorrules-ukw-trigger-section.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracker section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-hardening-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Progress tracking §"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-forensic-recovery-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-011 boundary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADR-008-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Related → ADR-011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-trigger-dual-source-parity.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracker checklist row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T23 + T18 task docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP links; fix broken ICW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 8"
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
              children: "IPP-E2S1T23-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADR-011-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture decision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-step-tracker-contract.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracker SoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-agent-run-log-v1.schema.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run log spec"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-agent-run-log-v1.example.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic command records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — ADR-008 owns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference run-log Python module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — spec-only v1 per user decision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Historical changelogs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — grandfathered"
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
            children: "Publication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inbound links"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S1T23-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T23 Input/References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-011-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-008, contract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/.../vwmp/workflow-step-tracker-contract.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All workflow guides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C4–D-C5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/{schemas,examples}/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-011, RW guide"
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
        }), " ", "AC1: No governance file mandates Cursor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "todo_write"
        }), " without Workflow Step Tracker contract reference"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC2: Tracker contract defines states, lifecycle, step IDs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC3: Windsurf/Cascade ", (0,jsx_runtime.jsx)(_components.code, {
          children: "todo_list"
        }), " appendix present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC4: Run log schema + example exist; RW docs reference them"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "AC5: RW Step 17 housekeeping is tool-agnostic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "TC1–TC6 pytest green"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Bidirectional T23 ↔ IPP links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "ADR-011 ↔ ADR-008 boundary documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs",
          children: ["E02:S01", ":T23", " task doc"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T18-tool-agnostic-workflow-step-tracking-and-runlogs",
          children: ["E06:S07", ":T18", " superseded task"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log",
          children: "ADR-011"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints",
          children: "ADR-008"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S08T08-forensic-logging-rollback-fr059",
          children: "IPP-E2S8T8"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report",
          children: ["E04:S19", ":T03", " investigation report"]
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
79571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/workflow-agent-run-log-v1.schema-47d7862933d48ac38793ef3921296743.json");

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