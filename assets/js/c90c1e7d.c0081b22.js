"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["21776"], {
29353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_16_t_01_canonical_perpetual_ongoing_tasks_story_md_c90_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-16-t-01-canonical-perpetual-ongoing-tasks-story-md-c90.json
var site_docs_implementation_cycles_ipp_e_2_s_16_t_01_canonical_perpetual_ongoing_tasks_story_md_c90_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story","title":"E2:S16:T01 - Planning: Spec, Tests, Implementation Plan (IPP)","description":"Host TaskS16:T01)","source":"@site/../docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-27T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E2:S15:T08 — Planning: Board Stamp Authority and Forensic Timestamp Recovery (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery"},"next":{"title":"E02:S16:T02 — Planning: Perpetual task inventory and classification (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-27T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E2:S16 - Planning: Spec, Tests, Implementation Plan (IPP)';

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
  "value": "2.2 Specification mapping from ascertained requirements",
  "id": "22-specification-mapping-from-ascertained-requirements",
  "level": 3
}, {
  "value": "2.3 Inclusion / exclusion criteria for perpetual tasks",
  "id": "23-inclusion--exclusion-criteria-for-perpetual-tasks",
  "level": 3
}, {
  "value": "2.4 Renumbering policy and legacy <code>T101+</code> mapping",
  "id": "24-renumbering-policy-and-legacy-t101-mapping",
  "level": 3
}, {
  "value": "2.5 Ratified canonical follow-on task set",
  "id": "25-ratified-canonical-follow-on-task-set",
  "level": 3
}, {
  "value": "2.6 Guardrail contract (for <code>T03</code> hardening to implement)",
  "id": "26-guardrail-contract-for-t03-hardening-to-implement",
  "level": 3
}, {
  "value": "2.7 Constraints",
  "id": "27-constraints",
  "level": 3
}, {
  "value": "2.8 Status transition intent (mandatory)",
  "id": "28-status-transition-intent-mandatory",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "3.1 Verification method",
  "id": "31-verification-method",
  "level": 3
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "4.1 Wave 1 - IPP publication and T01 wiring (this run)",
  "id": "41-wave-1---ipp-publication-and-t01-wiring-this-run",
  "level": 3
}, {
  "value": "4.2 Wave 2 - Optional discoverability uplift (implemented under <code>T03</code>)",
  "id": "42-wave-2---optional-discoverability-uplift-implemented-under-t03",
  "level": 3
}, {
  "value": "4.3 Wave 3 - Guardrail enforcement (implemented under <code>T03</code> hardening)",
  "id": "43-wave-3---guardrail-enforcement-implemented-under-t03-hardening",
  "level": 3
}, {
  "value": "4.4 AC traceability matrix (T01 ACs and FR-088 ACs vs IPP RFs and waves)",
  "id": "44-ac-traceability-matrix-t01-acs-and-fr-088-acs-vs-ipp-rfs-and-waves",
  "level": 3
}, {
  "value": "4.5 Files touched by Wave 1",
  "id": "45-files-touched-by-wave-1",
  "level": 3
}, {
  "value": "4.6 Additional files touched by Wave 2 and Wave 3",
  "id": "46-additional-files-touched-by-wave-2-and-wave-3",
  "level": 3
}, {
  "value": "5. Success / verification criteria",
  "id": "5-success--verification-criteria",
  "level": 2
}, {
  "value": "6. References",
  "id": "6-references",
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
        id: "e2s16---planning-spec-tests-implementation-plan-ipp",
        children: ["E2:S16", ":T01", " - Planning: Spec, Tests, Implementation Plan (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E2:S16", ":T01", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks",
        children: "FR-088 - Dedicated story for perpetual ongoing tasks"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published (planning artifact; downstream waves owned by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2:S16:T03"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Establish ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S16"
            }), " as the single canonical home for perpetual ongoing workflow tasks."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC1, FR-088-F1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document explicit inclusion/exclusion criteria for what qualifies as a perpetual task vs a delivery task."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC2, FR-088-F2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Document a deterministic disposition policy for currently mis-housed perpetual anchors and a renumbering policy that retires the legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101+"
            }), " numbering convention."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC3, T01 AC4, FR-088-F3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify the canonical follow-on tasks within Story 016 that own execution of inventory, hardening, and operational lanes."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provide a guardrail contract (validator/policy hooks) that prevents new perpetual tasks from being filed outside Story 016 without explicit override rationale."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-F5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep all task / story / FR / board surfaces bidirectionally wired to T01 and this IPP."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-F4"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Preserve historical traceability for legacy perpetual task IDs (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T102"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T103"
            }), ") and their release/changelog history."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-NF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transition steps must be deterministic and reversible where practical."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-NF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance language must be unambiguous and operationally testable by validators."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-NF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope is documentation/governance only; no runtime workflow behavior changes in this planning package."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088 scope"
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
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Perpetual tasks remain ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " indefinitely by design; they never transition to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " (per dev-kit versioning policy §6.1.1)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Perpetual task documents must carry the canonical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Task Type: Perpetual Maintenance"
            }), " marker so the existing validator pattern (", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py:78"
            }), ") can detect them."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Existing perpetual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BUILD"
            }), " history is preserved across any renumbering; legacy IDs survive only as historical aliases, not active anchors."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Story 016 ownership policy, perpetual-task inclusion criteria, legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101+"
        }), " renumbering map, ratification of follow-on tasks, guardrail contract for downstream enforcement, bidirectional wiring contract."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Executing the inventory and disposition (owned by ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "E2:S16:T02"
          })
        }), "), executing migrations and validator/policy implementation (owned by ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "E2:S16:T03"
          })
        }), "), routing-away-from-", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S07"
        }), " enforcement (owned by ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision",
          children: "FR-087"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E4:S19:T03"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-referenced-sources",
      children: "1.4 Referenced sources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Host task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Upstream FR: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "FR-088"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story container: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-16-perpetual-ongoing-workflow-operations.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versioning policy §6.1.1: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dev-kit-versioning-policy.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["IPW execution guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "implementation-planning-workflow-agent-execution.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Related FRs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "FR-041"
          })
        }), " (RW maintenance), ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "FR-026"
          })
        }), " (CMW), ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "FR-087"
          })
        }), " (E6", ":S07", " default-housing drift)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Codify a single canonical home for perpetual ongoing workflow tasks under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E2:S16"
      }), " with explicit inclusion criteria, a renumbering policy that retires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T101+"
      }), " legacy numbering, and a guardrail contract that downstream tasks (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T02"
      }), " inventory, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), " hardening) can implement deterministically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical home (RF1, RF6):"
        }), " Story 016 is documented as the canonical perpetual-tasks home; all perpetual workflow tasks must point at it as the implementing-story anchor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inclusion criteria (RF2):"
        }), " Perpetual qualification is defined by a deterministic checklist (see §2.3); failing the checklist routes work to the appropriate delivery story instead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Renumbering policy (RF3):"
        }), " Legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101"
        }), " (UKW), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T102"
        }), " (CMW), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T103"
        }), " (RW maintenance) all map to the existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T03"
        }), " workflow-maintenance umbrella; new perpetual lanes use standard 2-digit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Txx"
        }), " task numbering (see §2.4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Follow-on tasks (RF4):"
        }), " The existing Story 016 task set (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02"
        }), "-", (0,jsx_runtime.jsx)(_components.code, {
          children: "T06"
        }), ") is ratified as the canonical follow-on set (see §2.5)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guardrails (RF5):"
        }), " Validator and policy hooks identified for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), " to implement (see §2.6)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-inclusion--exclusion-criteria-for-perpetual-tasks",
      children: "2.3 Inclusion / exclusion criteria for perpetual tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A task qualifies as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "perpetual"
      }), " if and only if ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all"
      }), " of the following hold:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The work is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "operational and recurring"
        }), " — it has no terminal definition of \"done\" and re-fires on a cadence (per workflow run, per release cycle, per board sync, etc.)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The cadence is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "driven by a workflow"
        }), " (UKW, CMW, RW maintenance, kanban hygiene, markdown hygiene) rather than by a specific feature or bug."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The work is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cross-cutting"
        }), " — it does not naturally belong to any single delivery task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The task document carries ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        }), " so validators can detect it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A task is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " perpetual (and must be filed in a delivery story instead) when ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any"
      }), " of the following hold:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It has a concrete acceptance contract that can complete (", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), ") when criteria are met."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is scoped to a specific feature, bug, or one-off migration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is a planning artifact (IPP) or governance artifact (FR/BR/UXR/meta-task) — those land in their domain stories under their owning epic."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Override:"
      }), " A perpetual task may live outside Story 016 only with an explicit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Perpetual Override Rationale:"
      }), " line in its task document and an explicit reference from Story 016 acknowledging the override; otherwise validators may reject the placement (downstream enforcement under T03)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "24-renumbering-policy-and-legacy-t101-mapping",
      children: ["2.4 Renumbering policy and legacy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T101+"
      }), " mapping"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy anchor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Workflow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical Story 016 anchor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disposition"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T101"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW (Update Kanban Workflow)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T03"
              })
            }), " (workflow-maintenance umbrella)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Map to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T03"
            }), "; legacy ID retained as historical alias only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T102"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CMW (Changelog Management Workflow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T03"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Map to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T03"
            }), "; legacy ID retained as historical alias only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T103"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T03"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Map to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T03"
            }), "; legacy ID retained as historical alias only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "T1xx"
            }), " (any future 3-digit perpetual id)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n/a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n/a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disallowed for new tasks (see policy below)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Renumbering policy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perpetual tasks created from this IPP onwards use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "standard 2-digit task numbering"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Txx"
        }), ") under Story 016. Examples already in place: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), " (workflow-maintenance umbrella), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T04"
        }), " (kanban hygiene), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T05"
        }), " (markdown hygiene)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101+"
        }), " (3-digit) convention documented in ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "dev-kit-versioning-policy.md"
          }), " §6.1.1"]
        }), " is treated as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "legacy migration-only"
        }), ". Existing changelog entries, version anchors, and historical task documents that reference ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T102"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T103"
        }), " remain valid for traceability; no rewrites of historical tags or release titles are required."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build history (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+BUILD"
        }), ") attached to legacy IDs is preserved; downstream RW attribution flows to the canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), " umbrella going forward."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deferred decision (recorded for reversibility):"
        }), " Splitting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), " into per-workflow lanes (separate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), " UKW, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tnn"
        }), " CMW, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tnn"
        }), " RW maintenance) remains an option if the umbrella becomes too coarse in operation. This IPP records that option without selecting it; revisiting requires a new task under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), "'s hardening lane and does not invalidate the renumbering policy above."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-ratified-canonical-follow-on-task-set",
      children: "2.5 Ratified canonical follow-on task set"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following Story 016 tasks are ratified as the canonical implementation lanes for FR-088:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owns"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T01"
              })
            }), " (this task)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical policy + IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusion criteria, renumbering policy, follow-on ratification, guardrail contract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T02"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory and classification"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Exhaustive perpetual-task inventory and disposition (", (0,jsx_runtime.jsx)(_components.code, {
              children: "migrate_to_S16"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "retain_with_rationale"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deprecate_or_redirect"
            }), ") and reference map"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T03"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow-maintenance umbrella + hardening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration execution, validator/policy enforcement, perpetual-task marker hardening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T04"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban hygiene lane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ad-hoc kanban synchronization/hygiene attribution under the umbrella"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T05"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markdown hygiene lane"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markdown-only documentation upkeep attribution under the umbrella"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T06"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-085 governance task (re-housed)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UKW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            }), " deep reprioritization governance and follow-on"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No new follow-on tasks are proposed by this IPP. If gaps surface during ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T02"
      }), " inventory, those are recorded under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T02"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), " rather than expanded here."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "26-guardrail-contract-for-t03-hardening-to-implement",
      children: ["2.6 Guardrail contract (for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), " hardening to implement)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This IPP does not change validator behavior. It records the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contract"
      }), " that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), " is expected to implement:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Placement guardrail:"
        }), " A validator (or extension to an existing validator) should reject a task carrying ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        }), " outside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16"
        }), " unless the task document includes a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Perpetual Override Rationale:"
        }), " line. Candidate hosts: a new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_perpetual_placement.py"
        }), " under ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/scripts/validation/"
          })
        }), ", or an extension of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " (which already centralises perpetual detection at ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "is_perpetual_task"
          })
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Numbering guardrail:"
        }), " New perpetual task documents must use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Txx"
        }), " (2-digit). ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T1xx"
        }), " (3-digit) anchors created after this IPP's publication should produce a hard validation failure unless they are explicitly historical aliases (declared via a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Historical Anchor:"
        }), " line)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marker guardrail:"
        }), " The validator should warn when a task in Story 016 lacks the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Task Type: Perpetual Maintenance"
        }), " marker, except for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02"
        }), " (which are governance/inventory tasks, not perpetual lanes themselves)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW attribution guardrail:"
        }), " RW Step 2 perpetual context detection (currently UKW/CMW automatic, RW maintenance manual) continues to attribute to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T03"
        }), " as the canonical umbrella. No automatic change to RW logic is required by T01; T03 may extend Step 2 if multi-lane attribution is later split out."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow registry alignment:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/workflow-registry.yaml",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow-registry.yaml"
          })
        }), " remains the source of truth for workflow abbreviations and trigger phrases; perpetual lane attribution is not encoded there and does not need to be."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "27-constraints",
      children: "2.7 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must align with FR-042 IPW/IPP conventions (single durable IPP; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-"
        }), " prefix; bidirectional wiring; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status"
        }), " declared)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must align with the dev-kit versioning policy without retroactively rewriting historical perpetual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101+"
        }), " references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must not introduce churn on validator or workflow runtime behavior — that is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), "'s lane."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-status-transition-intent-mandatory",
      children: "2.8 Status transition intent (mandatory)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Transition trigger to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IN PROGRESS"
          }), ":"]
        }), " Already satisfied at task creation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Transition trigger to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "COMPLETE"
          }), ":"]
        }), " Acceptance evidence recorded for AC1-AC5 of T01, including: this IPP published; Story 016 / FR-088 / T01 wired bidirectionally; renumbering policy and follow-on ratification table present."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and Story 016 row status must update in the same release/session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Owner of write to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "COMPLETE"
          }), ":"]
        }), " RW Step 7 / standalone UKW after the host task is updated under user-triggered RW execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perpetual children clarification:"
        }), " The downstream perpetual lanes (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T04"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T05"
        }), ") remain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " indefinitely by design and never transition to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), "; this is a property of the lanes themselves, not a side-effect of T01 closure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a doc-only verification set; no code is changed by this IPP."
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
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP publication"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md"
            }), " exists in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/"
            }), " and conforms to FR-042 IPP shape."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task wiring"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T01 task doc links the IPP under both Input and References, and declares ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Publication Status: NOT_APPLICABLE"
            }), " with a reason consistent with the consolidated IPP model."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upstream FR wiring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088 lists T01 as Implementing Task and the IPP as a planning backlink."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story checklist annotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story 016's T01 checklist row references the IPP for discoverability."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusion-criteria coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.3 lists at least one positive checklist (qualifies as perpetual) and one negative checklist (must not be perpetual)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renumbering map completeness"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["§2.4 includes legacy anchors ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T102"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T103"
            }), " and policy that retires ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T1xx"
            }), " for new tasks."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow-on ratification coverage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5 lists T01-T06 with explicit roles."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guardrail contract scope"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["§2.6 enumerates placement, numbering, marker, and RW attribution guardrails with downstream owner identified (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T03"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator pass"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_publication_wiring.py --requested E2:S16:T01"
            }), " returns PASS."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All markdown links in this IPP resolve to existing files on disk (no dead links in touched docs)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-verification-method",
      children: "3.1 Verification method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual document inspection of the IPP, T01, FR-088, and Story 016 docs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --requested E2:S16:T01"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_plan_wiring.py"
        }), " and capture status (pre-existing unrelated failures stay out of scope)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The plan is structured as three waves so each can be released or deferred atomically. Wave 1 is the planning publication that this IPW run produces; Waves 2 and 3 are owned by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), " and are not required for T01 to close."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-wave-1---ipp-publication-and-t01-wiring-this-run",
      children: "4.1 Wave 1 - IPP publication and T01 wiring (this run)"
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish this IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire host task T01 (Input, References, Publication Status block)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc linked to IPP and validator-clean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wire FR-088 (IPP backlink under Implementing Task)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR doc bidirectionally discoverable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotate Story 016 checklist row for T01 with IPP path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story-level discoverability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_publication_wiring.py --requested E2:S16:T01"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator PASS recorded in §5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "42-wave-2---optional-discoverability-uplift-implemented-under-t03",
      children: ["4.2 Wave 2 - Optional discoverability uplift (implemented under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), ")"]
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
            children: "2.1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cite this IPP from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T03"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T04"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T05"
            }), " task docs as the canonical policy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Implemented (2026-04-27): cross-link parity within Story 016"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Task Type: Perpetual Maintenance"
            }), " marker to perpetual lane task docs (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T03"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T04"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T05"
            }), ") where missing"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Implemented (2026-04-27): marker consistency for all three lanes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wave 2 was delivered as a low-risk doc-only follow-up and does not change T01 closure semantics."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "43-wave-3---guardrail-enforcement-implemented-under-t03-hardening",
      children: ["4.3 Wave 3 - Guardrail enforcement (implemented under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), " hardening)"]
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
            children: "3.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement placement guardrail (validator or extension) per §2.6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Implemented (2026-04-27) in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_perpetual_guardrails"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement numbering guardrail (T1xx hard-fail unless declared historical alias)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Implemented (2026-04-27) in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement marker warn-on-missing for Story 016 perpetual lanes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Implemented (2026-04-27) in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), " warning path"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "dev-kit-versioning-policy.md"
              }), " §6.1.1"]
            }), " to reflect renumbering policy and link this IPP as the source of truth"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ Implemented (2026-04-27): policy wording updated for Story 016 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Txx"
            }), " canonical lanes and legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T1xx"
            }), " historical-only rule"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wave 3 landed under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03"
      }), " as the substantive guardrail enforcement layer. T01 remained valid before and after this implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-ac-traceability-matrix-t01-acs-and-fr-088-acs-vs-ipp-rfs-and-waves",
      children: "4.4 AC traceability matrix (T01 ACs and FR-088 ACs vs IPP RFs and waves)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AC source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapped IPP RF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapped IPP section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolved by Wave"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story 16 established as canonical perpetual home"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.1, §2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope and boundaries documented and linked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete inventory of workflow perpetual tasks documented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["§2.4 + delegated to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T02"
            }), " for inventory execution"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (policy) + downstream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Renumbering plan documented and approved (", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101+"
            }), " legacy -> Story 016 standard)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T01 AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Follow-on tasks identified for policy/validator enforcement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4, RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5, §2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (identified) + 3 (enforced)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated story exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.1, §2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-F2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusion criteria defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-F3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration policy for existing perpetuals defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-F4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story / task / FR / boards wired"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4.1 wiring steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-088-F5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guardrails to prevent perpetuals filed outside dedicated story"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (contract) + 3 (enforcement)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-files-touched-by-wave-1",
      children: "4.5 Files touched by Wave 1"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md"
        }), " (new — this file)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-additional-files-touched-by-wave-2-and-wave-3",
      children: "4.6 Additional files touched by Wave 2 and Wave 3"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wave 2:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wave 3:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-success--verification-criteria",
      children: "5. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Runnable validators (from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validation",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/"
        })
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py\" --requested E2:S16:T01"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PASS"
        }), " (2026-04-27). Output: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PASS: publication wiring OK for E2:S16:T1"
        }), ". Host task carries ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status: NOT_APPLICABLE"
        }), " plus ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication N/A Reason:"
        }), " per the consolidated IPP model."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_plan_wiring.py\""
        }), " — only pre-existing unrelated failure observed (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E5:S01:T75: missing Host Task link"
        }), "), out of scope for this IPP and tracked separately. No new wiring regressions introduced by T01."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_complete.py\" --requested E2:S16:T03"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_complete.py\" --requested E2:S16:T04"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_rw_task_complete.py\" --requested E2:S16:T05"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PASS"
        }), " (2026-04-27) after Wave 2 marker/discoverability uplift."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 -m pytest \"packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py\" -k \"perpetual_guardrails\""
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PASS"
        }), " (2026-04-27) for Wave 3 guardrail tests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py\" --strict --requested E2:S16:T03 --art"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PASS"
        }), " (2026-04-27) with guardrail logic active."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deliverable checks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md"
        }), " exists and follows FR-042 IPP shape."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T01 task doc links this IPP under Input and References and declares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status: NOT_APPLICABLE"
        }), " with a reason."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-088 lists T01 as Implementing Task with an IPP backlink."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Story 016 checklist row for T01 references the IPP for discoverability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Inclusion criteria, renumbering policy, follow-on task ratification, and guardrail contract are present in §2.3-§2.6."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-references",
      children: "6. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088",
          children: ["Host task E2:S16", ":T01"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks",
          children: "FR-088 - Dedicated story for perpetual ongoing tasks"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations",
          children: "Story 016 - Perpetual ongoing workflow operations"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks",
          children: ["E2:S16", ":T02", " - Inventory and classify workflow perpetual tasks"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
          children: ["E2:S16", ":T03", " - Workflow maintenance perpetual umbrella"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual",
          children: ["E2:S16", ":T04", " - Ad-hoc kanban synchronization and hygiene perpetual"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual",
          children: ["E2:S16", ":T05", " - Markdown documentation maintenance perpetual"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085",
          children: ["E2:S16", ":T06", " - UKW optional reprioritization ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--rp"
          }), " flag (FR-085)"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
          children: "Dev-kit versioning policy §6.1.1 - Perpetual tasks"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md",
          children: "IPW execution guide"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042 - IPW canonical workflow"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance",
          children: "FR-041 - Perpetual task for RW maintenance"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance",
          children: "FR-026 - Canonical perpetual task for changelog maintenance"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision",
          children: ["FR-087 - E6", ":S07", " default-housing drift investigation"]
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