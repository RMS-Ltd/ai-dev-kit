"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["40946"], {
22772(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_16_t_03_rehouse_workflow_perpetual_tasks_md_b23_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-16-t-03-rehouse-workflow-perpetual-tasks-md-b23.json
var site_docs_implementation_cycles_ipp_e_2_s_16_t_03_rehouse_workflow_perpetual_tasks_md_b23_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks","title":"E2:S16:T03 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS16:T03)","source":"@site/../docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S16:T02 — Planning: Perpetual task inventory and classification (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory"},"next":{"title":"E2:S16:T07 — Planning: FR-050 UKW FBU temporal sync (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T07-ukw-fbu-temporal-tracking-fr050"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E2:S16 — Planning: Spec, Tests, Implementation Plan (IPW)';

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
  "value": "2.4 Status transition intent",
  "id": "24-status-transition-intent",
  "level": 3
}, {
  "value": "2.5 ADR necessity decision (Tranche 3 — IPW Phase 5.0)",
  "id": "25-adr-necessity-decision-tranche-3--ipw-phase-50",
  "level": 3
}, {
  "value": "1.4 Tranche 3 functional requirements (additive)",
  "id": "14-tranche-3-functional-requirements-additive",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "3.1 Tranche 3 test design",
  "id": "31-tranche-3-test-design",
  "level": 3
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "4.1 Files to create or modify",
  "id": "41-files-to-create-or-modify",
  "level": 3
}, {
  "value": "4.2 Document Update Details",
  "id": "42-document-update-details",
  "level": 3
}, {
  "value": "Document A: <code>test_validate_version_bump.py</code>",
  "id": "document-a-test_validate_version_bumppy",
  "level": 4
}, {
  "value": "Document B: T03 task doc (<code>T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md</code>)",
  "id": "document-b-t03-task-doc-t03-rehouse-workflow-perpetual-tasks-and-harden-guardrailsmd",
  "level": 4
}, {
  "value": "Document C: Legacy IPW draft (<code>IPW-E6S7T103-release-workflow-maintenance-perpetual.md</code>)",
  "id": "document-c-legacy-ipw-draft-ipw-e6s7t103-release-workflow-maintenance-perpetualmd",
  "level": 4
}, {
  "value": "Document D: story-016 doc (<code>story-16-perpetual-ongoing-workflow-operations.md</code>)",
  "id": "document-d-story-016-doc-story-16-perpetual-ongoing-workflow-operationsmd",
  "level": 4
}, {
  "value": "Document E: <code>kboard.md</code>",
  "id": "document-e-kboardmd",
  "level": 4
}, {
  "value": "4.3 Dependency order",
  "id": "43-dependency-order",
  "level": 3
}, {
  "value": "4.4 Tranche 3 implementation plan",
  "id": "44-tranche-3-implementation-plan",
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
  "value": "Tranche 1 (verified 2026-05-20)",
  "id": "tranche-1-verified-2026-05-20",
  "level": 3
}, {
  "value": "Tranche 2 (verified 2026-05-30 — <code>v0.2.16.3+0</code>)",
  "id": "tranche-2-verified-2026-05-30--v021630",
  "level": 3
}, {
  "value": "Tranche 3 (2026-06-03 — v0.2.16.3+2)",
  "id": "tranche-3-2026-06-03--v021632",
  "level": 3
}, {
  "value": "Tranche 3B backlog (T02-gated)",
  "id": "tranche-3b-backlog-t02-gated",
  "level": 3
}, {
  "value": "SitRep — E02:S16 (2026-06-03, post-IPW)",
  "id": "sitrep--e02s16-2026-06-03-post-ipw",
  "level": 3
}, {
  "value": "SitRep — E02:S16 host (2026-06-03)",
  "id": "sitrep--e02s16-host-2026-06-03",
  "level": 3
}, {
  "value": "SitRep IPW housekeeping (2026-06-03)",
  "id": "sitrep-ipw-housekeeping-2026-06-03",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "e2s16--planning-spec-tests-implementation-plan-ipw",
        children: ["E2:S16", ":T03", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E2:S16", ":T03", ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " FR-088 — Dedicated story for perpetual ongoing tasks\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published (Tranches 1–3 delivered ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.2.16.3+2"
      }), "; SitRep IPW 2026-06-03 — T02/3B gate documented; fbuboard BR-067 sync in housekeeping)"]
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
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S16:T03"
            }), " documented as canonical perpetual umbrella for ad-hoc workflow maintenance (AC1)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration/hardening activities remain in scope without narrowing (AC2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S16:T04"
            }), " documented as kanban-focused lane under T03 umbrella (AC3)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy/validator updates preserve deterministic routing; no un-owned perpetual proliferation (AC4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation passes for updated docs and guardrail behavior (AC5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Placement guardrail: reject perpetual tasks outside ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S16"
            }), " unless ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Perpetual Override Rationale:"
            }), " present"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP-E2S16T1 §2.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Numbering guardrail: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T1xx"
            }), " hard-fails without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Historical Anchor:"
            }), "; active work uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Txx"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP-E2S16T1 §2.6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Marker guardrail: warn when Story 016 perpetual lanes lack ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Task Type: Perpetual Maintenance"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP-E2S16T1 §2.6"
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
            children: ["All ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), " tests must pass (regression guard)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc AC closure must reference verification evidence, not just assertion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Legacy artifact ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-E6S7T103"
            }), " must be deprecated or redirected without breaking links"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archive hygiene"
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
            children: ["Perpetual umbrella tasks keep the kanban ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "Status:"
              }), " field"]
            }), " as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " (no terminal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " for the task row). Acceptance criteria may be checked with evidence (", (0,jsx_runtime.jsx)(_components.code, {
              children: "[x]"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[~] PARTIAL"
            }), ") without changing that perpetual status."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BUILD numbers for perpetual tasks = workflow run count (not feature iteration); high BUILD numbers are valid."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "T102"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "T103"
            }), " remain valid historical aliases; active work uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E2:S16:T03"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "T04"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "T05"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Fix 4 failing test fixture bugs in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump.py"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update T03 task doc ACs to reflect Waves 2 & 3 completion."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Archive legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-E6S7T103"
            }), " draft with redirect notice."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run validators and record PASS evidence."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rewriting guardrail implementation logic (already correct; tests only need fixture fixes)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Completing T02 (inventory/disposition) — acknowledged dependency, not blocking for T03 AC closure."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "New feature development outside T03's perpetual maintenance remit."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Close the gap between implemented guardrail/discoverability work (Waves 2 & 3) and documented acceptance evidence in T03. Fix test fixture bugs so the perpetual guardrail test suite passes. Archive the outdated legacy IPW draft."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T03 task doc updated with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE"
            }), " markers and verification evidence for Waves 2 & 3."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), " perpetual guardrails pass all tests; versioning policy §6.1.1 confirmed current."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator runs captured as evidence in T03 task doc (test output, command, timestamp)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6–RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Already implemented in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), "; specification = test fixtures aligned to implementation."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pytest test_validate_version_bump.py -x"
            }), " exits 0 after fixture fixes."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy draft updated with deprecation banner + redirect to T03; no dangling inbound links remain."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not modify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " implementation — only test fixtures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preserve legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T102"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "T103"
        }), " historical alias references; do not delete or rewrite historical docs."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T02 dependency is acknowledged; T03 ACs can be marked for implemented work while noting T02 blocks exhaustive reference migration verification."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent",
      children: "2.4 Status transition intent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " (perpetual maintenance — stable)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " N/A for first entry; thereafter any new maintenance wave may refresh ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " while ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "Status:"
          }), " remains ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IN PROGRESS"
          })]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acceptance criteria vs task status:"
        }), " AC1–AC3 and AC5 may be marked satisfied with verification evidence; AC4 may remain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[~] PARTIAL"
        }), " until ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks",
          children: ["E2:S16", ":T02"]
        }), " completes. None of that implies flipping the host task to terminal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation:"
        }), " Task doc ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " + evidence sections + kboard row + story-016 checklist stay aligned in the same change set as the underlying work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution step (RW attribution under T03)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision-tranche-3--ipw-phase-50",
      children: "2.5 ADR necessity decision (Tranche 3 — IPW Phase 5.0)"
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
            children: "Follow T02 map + IPP-E2S16T1 when 3B runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc/link edits revert in one PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scoped to kanban/governance (3A); 3B bounded by T02"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes FR-088 / IPP-E2S16T1 precedent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-067 policy already decided in Tranche 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No RW/IPW gate changes in Tranche 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aligns with existing ADRs/policies"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXEMPT"
      }), " — governing docs: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
        children: "dev-kit-versioning-policy.md"
      }), " §6.1.1; ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story",
        children: "IPP-E2S16T1"
      }), " §2.6 guardrails (E1–E5 pass)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-tranche-3-functional-requirements-additive",
      children: "1.4 Tranche 3 functional requirements (additive)"
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
            children: "RF-T03-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close BR-067 after R1–R5 regression evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-067"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF-T03-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC4 full satisfaction only after T02 reference map (3B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 AC4; T02"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF-T03-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active-surface link hygiene (kanban, open FR/BR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP rolling backlog"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF-T03-4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Host task remains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " (perpetual)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP-E2S16T1"
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
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_task_id_extraction_prefers_canonical_section"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assertion expects ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(2, 16, 3)"
            }), " to match ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Value:** E2:S16:T03"
            }), " in mock content."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_passes_for_perpetual_task"
            }), " (T101)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mock task file named ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101-*.md"
            }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T03-*.md"
            }), ") under epic-06/story-007 so ", (0,jsx_runtime.jsx)(_components.code, {
              children: "locate_task_doc"
            }), " finds it."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_build_increment_perpetual"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as T2 — mock file must match the task number under test."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_passes_for_t103"
            }), " (T103)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mock task file named ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T103-*.md"
            }), " under epic-06/story-007 so ", (0,jsx_runtime.jsx)(_components.code, {
              children: "locate_task_doc"
            }), " finds it."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full test suite regression"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pytest packages/frameworks/workflow\\ mgt/scripts/validation/test_validate_version_bump.py -x"
            }), " exits 0."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perpetual guardrails live validation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "python validate_version_bump.py --strict --requested E2:S16:T03 --art"
            }), " exits 0 for T03."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy draft redirect"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All inbound links to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-E6S7T103"
            }), " resolve to T03 or deprecation notice."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-tranche-3-test-design",
      children: "3.1 Tranche 3 test design"
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
            children: "T-T03-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pytest test_validate_version_bump.py -x"
            }), " → 0 exit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T-T03-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-067 R1–R5 matrix documented PASS in BR-067 + T03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T-T03-3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Perpetual RW: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py --strict --requested E02:S16:T03 --art"
            }), " after Step 2 bump"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T-T03-4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Active kanban: no stale ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-06/story-007/.../T03"
            }), " for perpetual routing"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T-T03-5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structural (3B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02-gated exhaustive migration — deferred until T02 AC1–AC5"
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
              children: ["[MANDATORY] Confirm task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T03"
              }), " status remains ", (0,jsx_runtime.jsx)(_components.code, {
                children: "IN PROGRESS"
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_task_id_extraction_prefers_canonical_section"
            }), ": update assertion to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(2, 16, 3)"
            }), " to match mock content ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Value:** E2:S16:T03"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_passes_for_perpetual_task"
            }), ": rename mock task file from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T03-*.md"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101-*.md"
            }), " (or create T101 mock)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_build_increment_perpetual"
            }), ": ensure mock task file matches T101 under test."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_version_bump_passes_for_t103"
            }), ": rename/create mock task file to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T103-*.md"
            }), " under epic-06/story-007."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run full test suite: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pytest test_validate_version_bump.py -x"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14/14 pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update T03 task doc: mark AC1–AC3 as COMPLETE with evidence (Wave 2 & 3); mark AC4 as PARTIAL (guardrails pass, T02 dependency noted for reference migration); mark AC5 with test output + validator command."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACs reflect actual state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Archive legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-E6S7T103"
            }), ": add deprecation banner at top, update status to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Deprecated"
            }), ", add redirect link to T03 task doc."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draft no longer appears active"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "9"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py --strict --requested E2:S16:T03 --art"
            }), " and capture output in T03 doc as AC5 evidence."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator passes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update story-016 doc: mark T03 checklist entry with current status and version marker."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story doc current"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "11"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " T03 row metadata if changed."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board consistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "12"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Reconcile task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S16:T03"
              }), " with actual state:"]
            }), " keep ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Status: IN PROGRESS"
              })
            }), " (perpetual). Update AC checkboxes and Verification Evidence to match shipped work; if T02 still blocks exhaustive reference migration, keep AC4 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[~] PARTIAL"
            }), " with explicit T02 pointer. Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), " and forensic version line."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc reflects actual state without terminal COMPLETE"
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
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner Step"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix 4 test fixture bugs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2–5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mark ACs, add evidence sections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7, 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPW-E6S7T103-release-workflow-maintenance-perpetual.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add deprecation banner + redirect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update T03 checklist entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update T03 row metadata"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-document-update-details",
      children: "4.2 Document Update Details"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section prescribes the exact changes for each document. Implementation must follow these details."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "document-a-test_validate_version_bumppy",
      children: ["Document A: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test_validate_version_bump.py"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Bug 1 — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_task_id_extraction_prefers_canonical_section"
        }), " (line 43):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current assertion:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assert epic == 6 and story == 7 and task == 101"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix:"
        }), " Change to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assert epic == 2 and story == 16 and task == 3"
        }), " because the mock content contains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Value:** E2:S16:T03"
        }), ", which extracts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(2, 16, 3)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " The test content was updated from an old ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E6:S7:T101"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S16:T03"
        }), " but the assertion was not aligned."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Bug 2 — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_validate_version_bump_passes_for_perpetual_task"
        }), " (line 114):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current mock filename:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix:"
        }), " Rename mock task file to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101-update-kanban-workflow-ukw.md"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101-*.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content update:"
        }), " Change task doc header to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "# Epic 6, Story 7, Task 101: Update Kanban Workflow (UKW)"
        }), " to match the task number (101) from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "locate_task_doc"
        }), " searches for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T\\{task\\}-*.md"
        }), " where task = 101. A ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-*.md"
        }), " file is never discovered."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Bug 3 — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_validate_version_bump_build_increment_perpetual"
        }), " (line 195):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current mock filename:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix:"
        }), " Rename mock task file to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101-*.md"
        }), " to match VERSION_TASK = 101."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Same discovery mismatch as Bug 2."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Bug 4 — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_validate_version_bump_passes_for_t103"
        }), " (line 264):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current mock filename:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix:"
        }), " Rename mock task file to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T103-release-workflow-rw-maintenance.md"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T103-*.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content update:"
        }), " Change task doc header to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "# Epic 6, Story 7, Task 103: Release Workflow (RW) Maintenance"
        }), " to match task number 103."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "locate_task_doc"
        }), " expects ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T103-*.md"
        }), " for VERSION_TASK = 103."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "document-b-t03-task-doc-t03-rehouse-workflow-perpetual-tasks-and-harden-guardrailsmd",
      children: ["Document B: T03 task doc (", (0,jsx_runtime.jsx)(_components.code, {
        children: "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " field:"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last updated:** 2026-04-27 (Wave 2 discoverability uplift: IPP cross-link parity and perpetual marker alignment)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last updated:** 2026-05-19 (AC closure: Wave 2/3 verification evidence, test fixture fixes, legacy draft archive)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Version"
        }), " field:"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** v0.2.16.4+8"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** v0.2.16.10+2"
        }), " (or current version at time of RW)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Add new section after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## Acceptance Criteria"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "---\n\n## Verification Evidence\n\n### Wave 2 — Discoverability Uplift (2026-04-27) ✅\n- IPP cross-link parity added to T03/T04/T05 task docs.\n- `Task Type: Perpetual Maintenance` marker added to all three docs.\n- **Evidence:** Inspect T03, T04, T05 docs; all carry `Task Type: Perpetual Maintenance` and link to `IPP-E2S16T1`.\n\n### Wave 3 — Guardrail Enforcement (2026-04-27) ✅\n- Placement guardrail: reject perpetual tasks outside `E2:S16` unless override rationale present.\n- Numbering guardrail: `T1xx` hard-fails without `Historical Anchor:` marker.\n- Marker guardrail: warn when Story 016 lanes lack perpetual marker.\n- **Implementation:** `validate_version_bump.py` lines 85–129 (`validate_perpetual_guardrails`).\n- **Evidence:** `pytest test_validate_version_bump.py -x` passes (14/14) after fixture fixes (see AC5).\n\n### AC5 — Validator Regression Evidence\n- **Command:** `python \"packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py\" --strict --requested E2:S16:T03 --art`\n- **Result:** Exit 0, perpetual guardrails pass.\n- **Test command:** `pytest \"packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py\" -x`\n- **Test result:** 14 passed, 0 failed.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update AC checkboxes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AC1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [x] **AC1:**"
        }), " — append ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(Wave 2/3: T03 documented as canonical perpetual umbrella with "
        }), "Task Type: Perpetual Maintenance", (0,jsx_runtime.jsx)(_components.code, {
          children: " marker)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AC2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [x] **AC2:**"
        }), " — append ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(Wave 3: guardrails explicitly include migration/hardening in scope; no narrowing occurred)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AC3: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [x] **AC3:**"
        }), " — append ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(Wave 2: T04 doc updated with cross-links and perpetual marker; T03/T04 boundary documented)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AC4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [ ] **AC4:**"
        }), " — change to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [~] **AC4: PARTIAL**"
        }), " — add note: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Guardrail implementation and policy updates are COMPLETE (Wave 3). Exhaustive reference migration across all docs/boards is BLOCKED on T02 completion (inventory/disposition not yet available)."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AC5: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [x] **AC5:**"
        }), " — append ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(14/14 tests pass; validator --strict --art passes for T03; evidence recorded in Verification Evidence section above)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "document-c-legacy-ipw-draft-ipw-e6s7t103-release-workflow-maintenance-perpetualmd",
      children: ["Document C: Legacy IPW draft (", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPW-E6S7T103-release-workflow-maintenance-perpetual.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Insert deprecation banner at top of file (after frontmatter, before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "# E2:S16:T03"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "> **DEPRECATED — This document is a historical artifact.**\n> \n> The canonical perpetual task for workflow maintenance is now **E2:S16:T03**.\n> All active planning and work for perpetual workflow maintenance should reference:\n> - [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)\n> - [`IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md`](IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)\n>\n> This draft is retained for historical traceability only. Do not extend or update.\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Status field:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Status:** Draft"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Status:** Deprecated (superseded by E2:S16:T03; canonical policy in IPP-E2S16T1)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Host Task link:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "["
        }), "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md", (0,jsx_runtime.jsx)(_components.code, {
          children: "](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "["
        }), "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md", (0,jsx_runtime.jsx)(_components.code, {
          children: "](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rationale:"
        }), " Old link points to wrong path (epic-06/story-007). Must redirect to actual T03 location."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update FR-041 reference:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-041 – Perpetual Task for Release Workflow Maintenance"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-088 – Dedicated story for perpetual ongoing tasks (supersedes FR-041)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "document-d-story-016-doc-story-16-perpetual-ongoing-workflow-operationsmd",
      children: ["Document D: story-016 doc (", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-16-perpetual-ongoing-workflow-operations.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update T03 checklist entry (line 29):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Current: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [ ] **E2:S16:T03 – Workflow maintenance (Perpetual)** - IN PROGRESS (HIGH, umbrella perpetual anchor for ad-hoc workflow maintenance...)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace with:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "- [ ] **E2:S16:T03 – Workflow maintenance (Perpetual)** - IN PROGRESS (HIGH, umbrella perpetual anchor; Wave 2/3 COMPLETE: cross-link parity, perpetual markers, guardrail enforcement in validate_version_bump.py; AC1–AC3 and AC5 satisfied; AC4 PARTIAL pending T02 inventory)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last updated"
        }), " field:"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last updated:** 2026-05-16 (BR-072 REOPENED...)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last updated:** 2026-05-19 (T03 AC closure: Wave 2/3 verification evidence and test fixture fixes under v0.2.16.10+2)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Version"
        }), " field:"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Replace: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** v0.2.16.4+8"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["With: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:** v0.2.16.10+2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "document-e-kboardmd",
      children: ["Document E: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update T03 row in Ongoing (Perpetual) section:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current: The T03 row in kboard should reflect that Wave 2/3 are complete."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update description text to include: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Wave 2/3 COMPLETE (cross-link parity, perpetual markers, guardrail enforcement); AC1–AC3, AC5 satisfied; AC4 PARTIAL (T02 dependency)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " to 2026-05-19."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update board header:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Last Updated:**"
        }), " to reflect T03 work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Version:**"
        }), " to current version."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-dependency-order",
      children: "4.3 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 2–5 (test fixes) are independent and can be done in any order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 6 (full suite run) depends on Steps 2–5."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 7 (T03 doc AC update) depends on Step 6."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 8 (legacy draft) is independent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 9 (live validator) is independent."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Steps 10–11 (Story/kboard) depend on Step 7."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 12 (status reconciliation) is last."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-tranche-3-implementation-plan",
      children: "4.4 Tranche 3 implementation plan"
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
            }), " Confirm ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E02:S16:T03"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IN PROGRESS"
              })
            }), "; refresh ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run BR-067 R1–R5 regression; record in BR-067 + T03 Verification Evidence."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evidence table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Set BR-067 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RESOLVED"
            }), "; sync kboard rows."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boards"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix active kanban/FR/BR stale ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-06/story-007"
            }), " T03 paths → story-016 T03/T04."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link hygiene"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "3B (T02-gated):"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Entry gate"
            }), " — ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks",
              children: "T02"
            }), " AC1–AC5 complete; required artifact ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IPP-E2S16T2-perpetual-task-inventory.md"
              })
            }), " (CREATE on T02 IPW) linked from T01, T02, and T03. Then: apply reference map (active kanban + agreed archive surfaces), document before/after stale ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-06/story-007"
            }), " path counts, mark T03 AC4 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[x]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S16:T03 --art"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred until gate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update IPP §7 Tranche 3 checkboxes."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP current"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E02:S16:T03 --art"
              })
            }), " — ship + Step 7 four-surface sync."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY]"
            }), " Reconcile T03: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IN PROGRESS"
              })
            }), "; AC4 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[~] PARTIAL"
            }), " until 3B; evidence current."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        })]
      })]
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
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S16T3-rehouse-workflow-perpetual-tasks.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tranche 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-067; 3A hygiene"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/BR-067-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RESOLVED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-016 doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Active kanban FR/BR/epic subset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF-T03-3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-new-documents-to-create",
      children: "5.2 New documents to create"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "None."
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
            children: ["Exhaustive ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T101+"
            }), " migration"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deferred — T02 (3B)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Changelog archive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — historical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — §2.5 EXEMPT"
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
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E2S16T3-rehouse-workflow-perpetual-tasks.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D2–D6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED (Tranche 2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tranche-1-verified-2026-05-20",
      children: "Tranche 1 (verified 2026-05-20)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest test_validate_version_bump.py -x"
        }), " exits 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T03 AC1–AC3, AC5 with Wave 2/3 evidence; AC4 PARTIAL (T02)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW-E6S7T103"
        }), " deprecated with T03 redirect."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "tranche-2-verified-2026-05-30--v021630",
      children: ["Tranche 2 (verified 2026-05-30 — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.2.16.3+0"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-067 policy table + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), " docs shipped."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tranche-3-2026-06-03--v021632",
      children: "Tranche 3 (2026-06-03 — v0.2.16.3+2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-067 R1–R5 regression recorded; BR-067 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RESOLVED"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Active kanban stale perpetual links fixed (3A — 15 files)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T03 Tranche 3 Verification Evidence added."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC4 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[~] PARTIAL"
        }), " until T02 (3B deferred)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S16:T03 --art"
        }), " + Step 7 four-surface report."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tranche-3b-backlog-t02-gated",
      children: "Tranche 3B backlog (T02-gated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Entry gate: SATISFIED"
      }), " — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E2S16T2-perpetual-task-inventory.md"
        })
      }), "; T02 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.2.16.2+2"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3B execution: COMPLETE (2026-06-03)"
      }), " — ACTIVE_FIX migration (", (0,jsx_runtime.jsx)(_components.code, {
        children: "apply_e6s07_path_migration_3b.py"
      }), "); ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-06/story-007"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "167→153"
      }), " (101→94 files); kanban ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "35→18"
      }), " (22→14 files). ARCHIVE_STUB + KB-INDEX deferred per IPP-E2S16T2 §2.6. T03 AC4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[x]"
      }), "; release ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S16:T03 --art"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "sitrep--e02s16-2026-06-03-post-ipw",
      children: ["SitRep — E02:S16", ":T02", " (2026-06-03, post-IPW)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), "; IPP published"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IPP-E2S16T2-perpetual-task-inventory.md"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference baseline"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["167 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-06/story-007"
            }), " occurrences / 101 files under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3B"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Unblocked"
            }), " — execution is T03 Tranche 3B, not another T02 IPW"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "sitrep--e02s16-host-2026-06-03",
      children: ["SitRep — E02:S16", ":T03", " host (2026-06-03)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["This document; Tranches 1–3 shipped (", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.2.16.3+2"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC1–AC3, AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Satisfied (T03 verification)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPLETE — Tranche 3B ACTIVE_FIX (2026-06-03)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Board drift"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BR-067 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RESOLVED"
            }), " in source; fbuboard row synced in SitRep housekeeping"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sitrep-ipw-housekeeping-2026-06-03",
      children: "SitRep IPW housekeeping (2026-06-03)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP §7 SitRep + §4.4 Step 5 entry gate documented."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "fbuboard BR-067 row → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RESOLVED"
        }), " (SitRep housekeeping)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T03 task doc links corrected to canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E2S16T3"
        }), " filename."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Host task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical policy: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T02 (dependency): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T02-inventory-and-classify-workflow-perpetual-tasks.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T02 inventory IPP (3B gate — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "published"
        }), "): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S16T02-perpetual-task-inventory",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPP-E2S16T2-perpetual-task-inventory.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T04 (scope boundary): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Legacy draft (to archive): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPW-E6S07T103-release-workflow-maintenance-perpetual",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IPW-E6S7T103-release-workflow-maintenance-perpetual.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR-088: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "FR-088-dedicated-story-for-perpetual-ongoing-tasks.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Guardrail implementation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_version_bump.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versioning policy §6.1.1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Artifact packaging (IPP vs ICW trio): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
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