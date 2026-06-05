"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["48944"], {
95387(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_15_t_07_canonical_rw_ukw_kanban_consistency_program_md_cb2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-15-t-07-canonical-rw-ukw-kanban-consistency-program-md-cb2.json
var site_docs_implementation_cycles_ipp_e_2_s_15_t_07_canonical_rw_ukw_kanban_consistency_program_md_cb2_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program","title":"E2:S15:T07 - Planning: Spec, Tests, Implementation Plan (IPP) — META","description":"Host TaskS15:T07)","source":"@site/../docs/implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-27T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E2:S15:T05 - Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090"},"next":{"title":"E2:S15:T08 — Planning: Board Stamp Authority and Forensic Timestamp Recovery (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-27T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E2:S15 - Planning: Spec, Tests, Implementation Plan (IPP) — META';

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
  "value": "2.1 Planned test updates",
  "id": "21-planned-test-updates",
  "level": 3
}, {
  "value": "3. Implementation plan",
  "id": "3-implementation-plan",
  "level": 2
}, {
  "value": "Wave 0 — Filing + supersede",
  "id": "wave-0--filing--supersede",
  "level": 3
}, {
  "value": "Wave 1 — Predecessor closure verification (Bucket D)",
  "id": "wave-1--predecessor-closure-verification-bucket-d",
  "level": 3
}, {
  "value": "Wave 2 — Architectural contract codification (FR-091 absorbed)",
  "id": "wave-2--architectural-contract-codification-fr-091-absorbed",
  "level": 3
}, {
  "value": "Wave 3 — Four-surface reconciliation enforcement (FR-084 absorbed)",
  "id": "wave-3--four-surface-reconciliation-enforcement-fr-084-absorbed",
  "level": 3
}, {
  "value": "Wave 4 — Canonical row transform corpus sweep + drift fix (FR-090 absorbed + B1-B4)",
  "id": "wave-4--canonical-row-transform-corpus-sweep--drift-fix-fr-090-absorbed--b1-b4",
  "level": 3
}, {
  "value": "Wave 5 — Stage completeness + audit trail (BR-070 + FR-091-NF2)",
  "id": "wave-5--stage-completeness--audit-trail-br-070--fr-091-nf2",
  "level": 3
}, {
  "value": "Wave 6 — Forensic stamp integration (UXR-009 gating)",
  "id": "wave-6--forensic-stamp-integration-uxr-009-gating",
  "level": 3
}, {
  "value": "Wave 7 — Release-readiness gate (preventive)",
  "id": "wave-7--release-readiness-gate-preventive",
  "level": 3
}, {
  "value": "Wave 8 — Sign-off",
  "id": "wave-8--sign-off",
  "level": 3
}, {
  "value": "4. Verification gates",
  "id": "4-verification-gates",
  "level": 2
}, {
  "value": "5. Predecessor evidence matrix (Wave 1)",
  "id": "5-predecessor-evidence-matrix-wave-1",
  "level": 2
}, {
  "value": "5c. Wave 3 four-surface reconciliation log",
  "id": "5c-wave-3-four-surface-reconciliation-log",
  "level": 2
}, {
  "value": "5b. Wave 2 contract codification log",
  "id": "5b-wave-2-contract-codification-log",
  "level": 2
}, {
  "value": "5d. Wave 4 corpus-canonical sweep + B1 drift fix log",
  "id": "5d-wave-4-corpus-canonical-sweep--b1-drift-fix-log",
  "level": 2
}, {
  "value": "5e. Wave 5 stage-set completeness log (BR-070 absorbed)",
  "id": "5e-wave-5-stage-set-completeness-log-br-070-absorbed",
  "level": 2
}, {
  "value": "5f. Wave 6 forensic stamp work-evidence gate log (UXR-009 absorbed)",
  "id": "5f-wave-6-forensic-stamp-work-evidence-gate-log-uxr-009-absorbed",
  "level": 2
}, {
  "value": "5g. Wave 7 release-readiness gate log (Gates 1-7)",
  "id": "5g-wave-7-release-readiness-gate-log-gates-1-7",
  "level": 2
}, {
  "value": "5h. Wave 8 sign-off log (program closure)",
  "id": "5h-wave-8-sign-off-log-program-closure",
  "level": 2
}, {
  "value": "Corpus canonical state (AC-M5, AC-M7, FR-092-NF3)",
  "id": "corpus-canonical-state-ac-m5-ac-m7-fr-092-nf3",
  "level": 3
}, {
  "value": "Release-readiness gate (Gates 1-7 against in-progress repo)",
  "id": "release-readiness-gate-gates-1-7-against-in-progress-repo",
  "level": 3
}, {
  "value": "Test suite green-status (Waves 3-7)",
  "id": "test-suite-green-status-waves-3-7",
  "level": 3
}, {
  "value": "What Wave 8 sign-off establishes",
  "id": "what-wave-8-sign-off-establishes",
  "level": 3
}, {
  "value": "Residual + handoff",
  "id": "residual--handoff",
  "level": 3
}, {
  "value": "6. Bucket-B drift work-items (Wave 4 placeholder)",
  "id": "6-bucket-b-drift-work-items-wave-4-placeholder",
  "level": 2
}, {
  "value": "7. References",
  "id": "7-references",
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
        id: "e2s15---planning-spec-tests-implementation-plan-ipp--meta",
        children: ["E2:S15", ":T07", " - Planning: Spec, Tests, Implementation Plan (IPP) — META"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T07-canonical-rw-ukw-kanban-consistency-program-fr092.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E2:S15", ":T07", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "FR-092 — Canonical RW/UKW kanban consistency program (meta)"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Published"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supersedes (planning):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership",
          children: "IPP-E2S15T2"
        }), " (FR-084)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090",
          children: "IPP-E2S15T5"
        }), " (FR-090)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deliver the release-visible canonical four-surface outcome on every RW: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FR/BR/UXR"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " are byte-deterministic, idempotent, and free of duplicate tail tokens or synthetic stamp churn at every commit boundary, with preventive validators that block any RW that would publish a partial reconciliation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements",
      children: "1.2 Functional requirements"
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
            children: "F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single program owner for the four-surface release-visible outcome."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 contract = \"Scoped Kanban Reconciliation (Self-Sufficient)\" with no UKW dependency."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F2 (absorbs FR-091-F1/F4/F5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UKW reactive-only role codified across ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", RW execution guide, kanban governance policy, IPW governance."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F2 (absorbs FR-091-F2/F6/F7)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum release-scope reconciliation outputs defined and emitted."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F2 (absorbs FR-091-F3)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four-surface IPP post-run reconciliation contract enforced (idempotent, deterministic, ordered)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F2 (absorbs FR-084-F1..F5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-bucket drift items (B1-B4) reproduced, root-caused, fixed in code, proven on live boards."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preventive gates (C1-C5) implemented and wired into RW; commit blocked on failure."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor (D1-D9) closure evidence captured in traceability matrix; BR-042 closed as duplicate."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Corpus-level retroactive sweep over ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " produces canonical baseline."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersede chain executed: T02/T05/T06 SUPERSEDED, FR-091/FR-090/FR-084 banner-superseded, BR-069/BR-070/UXR-009 closure gated."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["\"Touched surfaces + why\" report emitted to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/"
            }), " for every RW."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-NF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stamp work-evidence gate integrated at row mutation boundary (no synthetic stamps without evidence delta)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F4 (UXR-009)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 8 stage-set parity enforced: every Step-7 output is staged before commit."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-092-F4 (BR-070)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-non-functional-requirements",
      children: "1.3 Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism — identical input + identical commit produces identical canonical four-surface output."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotency — repeated RW runs over canonicalized boards produce no row-level changes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auditability — every RW emits a \"touched surfaces + why\" report sufficient to reconstruct release-scope reconciliation outcomes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pedagogical clarity — RW preventive / UKW corrective separation documented without relying on historical context."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic safety — divergence cases remain non-destructive across all transforms."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layering — preventive (RW) vs corrective (UKW) responsibilities remain explicitly separated; RW correctness must not require UKW."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-out-of-scope",
      children: "1.4 Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MoSCOW reprioritization policy changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broad rewrites outside row-tail canonicalization paths and four-surface contract enforcement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release workflow semantics unrelated to kanban reconciliation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Legacy historical FBU body content rewrites (only structural/status reconciliation is in scope)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-constraints",
      children: "1.5 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every wave must converge on a passing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E2:S15:T07 --art"
        }), " for that wave's slice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No regressions to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " / changelog / archive contracts."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predecessor FBUs that are CLOSED stay CLOSED; their drift is owned by FR-092 even when the originating FR is marked IMPLEMENTED."
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
            children: "Contract codification"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW Step 7 wording in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow-agent-execution.md"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-governance-policy.md"
            }), " + IPW governance is consistent and self-sufficient (Wave 2)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Four-surface reconciliation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 produces deterministic, idempotent reconciliation across task + FBU + kboard + fbuboard for in-scope rows; out-of-scope rows untouched (Wave 3)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Row transform parity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW and UKW invocations produce byte-identical canonical output for shared fixtures (Wave 4)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live board drift reproduction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Canonical fixtures derived from live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " snapshot reproduce B1/B2/B3 symptoms, then pass after Wave-4 fix."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corpus normalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-shot corpus sweep over live boards reduces duplicate tail tokens to zero and synthetic stamps to zero (Wave 4)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stage completeness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 8 fails when a Step-7 output is not staged; passes when all Step-7 outputs are staged (Wave 5)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stamp work-evidence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Row mutation without evidence delta does not append a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), " stamp; row mutation with evidence delta does (Wave 6)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release-readiness gate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 9 fails when any of Gates 1-7 fails; passes when all gates pass (Wave 7)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two consecutive RW runs over canonicalized boards produce zero row-level changes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Final RW dry-run produces clean four-surface diff with \"touched surfaces + why\" report (Wave 8)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-planned-test-updates",
      children: "2.1 Planned test updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py"
        }), " with:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Live-board snapshot fixtures (pre-Wave-4 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " slice) to lock outcome parity, not just unit fixtures."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Corpus-mode regression with parity assertions across RW/UKW invocations."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stamp evidence regression: row written without evidence -> stamp suppressed."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add new validator scripts:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_step7_completeness.py"
            }), " (Wave 5) — diffs Step-7 outputs vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git diff --cached"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_release_readiness.py"
            }), " (Wave 7) — Gates 1-7."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-0--filing--supersede",
      children: "Wave 0 — Filing + supersede"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create FR-092, T07, IPP-E2S15T7 (this artifact)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Superseded by FR-092"
        }), " banner on FR-091 / FR-090 / FR-084."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mark T02 / T05 / T06 status ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SUPERSEDED -> E2:S15:T07"
        }), " with redirect note; preserve historical content for traceability."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wire BR-069 / BR-070 / UXR-009 as gated dependencies (closure deferred to FR-092 sign-off)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-15-ipw-governance-and-publication-contract.md"
          })
        }), " checklist."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), " (add T07 row; mark T02/T05/T06 SUPERSEDED in active sections)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "kboard.md"
          })
        }), " (add FR-092 row; mark FR-091/FR-090/FR-084 SUPERSEDED)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-1--predecessor-closure-verification-bucket-d",
      children: "Wave 1 — Predecessor closure verification (Bucket D)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each of D1-D9, write evidence link (changelog version + commit + verification approach) into FR-092 traceability matrix."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Where outcome is verified -> close predecessor cleanly via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-completed-update"
        }), " skill."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Where drift is detected (B1-B4) -> document drift inline and capture as Wave-4 work item."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Close ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-042-ukw-agent-board-cleanup-failure",
          children: "BR-042"
        }), " as duplicate of FR-090."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-2--architectural-contract-codification-fr-091-absorbed",
      children: "Wave 2 — Architectural contract codification (FR-091 absorbed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rewrite RW Step 7 in [release-workflow-agent-execution.md] as \"Scoped Kanban Reconciliation (Self-Sufficient)\" — explicit, no UKW dependency."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Codify UKW reactive-only contract in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", RW execution guide, [", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        }), "]."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define minimum release-scope reconciliation outputs (4-surface + audit report)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add \"What/Why\" rationale across artifacts so RW has a single durable contract source."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-3--four-surface-reconciliation-enforcement-fr-084-absorbed",
      children: "Wave 3 — Four-surface reconciliation enforcement (FR-084 absorbed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define post-RW reconciliation behavior: idempotent, deterministic, ordered (host task -> source FBU -> kboard -> fbuboard)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add reconciliation report emission to RW Step 7 output."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wire enforcement in [", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
        }), "] and RW execution."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-link to FR-077 checklist semantics for IPW-built task status sync."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-4--canonical-row-transform-corpus-sweep--drift-fix-fr-090-absorbed--b1-b4",
      children: "Wave 4 — Canonical row transform corpus sweep + drift fix (FR-090 absorbed + B1-B4)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Audit invocation paths of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "apply_canonical_row_transform_pipeline(...)"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " to identify why it does not execute on the full corpus during RW Step 7."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add corpus-mode invocation flag (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--corpus-canonical"
        }), ") and wire RW Step 7 to invoke it on every release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run corpus sweep on live ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), "; emit a normalization diff to evidence under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add real-board fixtures (snapshot of pre-fix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ") into regression suite to lock outcome parity (not just unit fixtures)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-5--stage-completeness--audit-trail-br-070--fr-091-nf2",
      children: "Wave 5 — Stage completeness + audit trail (BR-070 + FR-091-NF2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_step7_completeness.py"
        }), " that diffs Step-7 outputs vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git diff --cached"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enforce Step 8 stage-set parity (block commit if Step 7 mutated a file but git did not stage it)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Emit \"touched surfaces + why\" report to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-6--forensic-stamp-integration-uxr-009-gating",
      children: "Wave 6 — Forensic stamp integration (UXR-009 gating)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Integrate work-evidence gate into row mutation paths in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Block synthetic stamp churn at write boundary (no stamp without evidence delta)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update audit counters; expose ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_appended_with_evidence"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stamps_skipped_no_evidence"
        }), " in RW report."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-7--release-readiness-gate-preventive",
      children: "Wave 7 — Release-readiness gate (preventive)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_release_readiness.py"
        }), " covering Gates 1-7:", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Governance source-of-truth alignment (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " ↔ RW guide ↔ kanban policy ↔ IPW governance)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Predecessor closure and supersede-chain consistency."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Contract enforcement parity (RW vs UKW canonical output)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Corpus canonical state (zero duplicate tails, zero synthetic stamps)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stage completeness (Step-7 output ⊆ staged set)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Stamp evidence (no synthetic stamp without evidence delta)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Four-surface parity (task + FBU + kboard + fbuboard byte-deterministic)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wire into RW Step 9 validator suite; block RW commit if any gate fails."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-8--sign-off",
      children: "Wave 8 — Sign-off"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end RW dry-run on a known-affected slice."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Live ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " proof: zero duplicate tails, zero synthetic stamp churn, full four-surface parity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E2:S15:T07 --art"
        }), " per wave, with terminal RW closing the program."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Close FR-092; close T02 / T05 / T06 as SUPERSEDED; close BR-069 / BR-070 / UXR-009 if their ACs prove satisfied; otherwise keep open with explicit residual notes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-verification-gates",
      children: "4. Verification gates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single program owner is in place (FR-092 + T07 + IPP) and supersede chain is executed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bucket-A architecture codification is consistent across all four target artifacts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bucket-B drift is reproduced on canonical fixtures and proven fixed on live boards."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bucket-C preventive gates block RW commit in failing scenarios."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bucket-D predecessor evidence is captured in traceability matrix; BR-042 is closed as duplicate."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Corpus sweep produces zero duplicate tail tokens and zero synthetic stamp churn."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Final ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E2:S15:T07 --art"
        }), " produces a clean four-surface diff plus audit report."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-predecessor-evidence-matrix-wave-1",
      children: "5. Predecessor evidence matrix (Wave 1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Predecessor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status pre-meta"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave-1 verification"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave-1 outcome"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Drift captured?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-038 (D1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMPLEMENTED v0.5.1.38+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc-only RW Step 7 wording reflects scoped UKW; spec not yet \"self-sufficient\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor-of-FR-092 banner applied; original closure retained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes -> A1/A2 (Wave 2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-040 (D2)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["IMPLEMENTED (E5:S01", ":T36", ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW updates kboard on completion; verified still active per kboard.md row updates on completion."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor-of-FR-092 banner applied; original closure retained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No drift; outcome retained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-015 (D3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMPLEMENTED w/ R07-R10 unchecked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc inspection confirms R07-R10 residuals (validation hardening, must-include checks) — captured as Wave-5/7 work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor-of-FR-092 banner applied; residual gap noted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes -> R07-R10 (Wave 5/7)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BR-036 (D4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FIXED v0.5.1.34+2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 board update bugs corrected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor-of-FR-092 banner applied; original closure retained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No drift; outcome retained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BR-062 (D5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPLETE v0.2.1.11+2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Active kboard MoSCOW cleanup applies to both ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_init"
            }), " and full RW Step 7 mode (per BR-062 latest update)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor-of-FR-092 banner applied; original closure retained; supersedes BR-042"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No drift; outcome retained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-076 (D6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "COMPLETE v0.6.7.110+1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW fbuboard scope + concurrency operational; concurrency contract retained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor-of-FR-092 banner applied; original closure retained"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No drift; outcome retained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-006 (D7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACCEPTED w/ AC4 optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last-modified UTC stamp surface convention live on boards; forensic semantics not yet enforced (work-evidence gate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor-of-FR-092 banner applied; AC4 residual surfaced via UXR-009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes -> stamp evidence (UXR-009 + Wave 6)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-089 (D8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMPLEMENTED v0.2.15.3+2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate-footer dual-agreement validation/reconciliation in place; live boards still show multiplied tail tokens (B2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predecessor reference retained on Story 015 checklist; B2 drift captured"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes -> B2 (Wave 4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BR-042 (D9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NEW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subsumed by FR-090 (architecture) and BR-062 (active-row hygiene fix v0.2.1.11+2)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CLOSED as duplicate (2026-04-27)"
            }), "; recorded in intake-completed.md row v0.2.15.4+5; FR-092 Wave 1 closure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (duplicate)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5c-wave-3-four-surface-reconciliation-log",
      children: "5c. Wave 3 four-surface reconciliation log"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "update_kanban_docs.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Added ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FourSurfaceReport"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SurfaceReport"
            }), " dataclasses; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_classify_change_to_surface"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "discover_release_scope_task_doc"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "discover_release_scope_fbu_docs"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build_four_surface_report"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write_four_surface_report"
            }), ". Wired emission into ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main()"
            }), " after Step 7 work; added ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--four-surface-report"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--invocation-context"
            }), " CLI flags. Default report destination: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/four-surface-reports/"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "test_update_kanban_docs.py"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added Test 4.18 (report classifies changes + resolves task/FBU/kboard paths) and Test 4.19 (JSON+Markdown persistence)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE / GREEN"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 3 contract assertions (FR-084 absorbed):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Four canonical surfaces enumerated: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_doc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbu_doc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), ". Auxiliary surfaces (", (0,jsx_runtime.jsx)(_components.code, {
          children: "story_doc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic_doc"
        }), ") tracked separately."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Report properties: idempotent (re-running produces an equivalent report), deterministic (output fully determined by input state), ordered (host task -> source FBU -> kboard -> fbuboard)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Auditable artifact: JSON + Markdown emitted to changelog-archive by default; report names include version string + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E:S:T"
        }), " slug."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Untouched surfaces are explicitly recorded with explanatory notes; absence of touch is not silently dropped."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pre-existing tests unaffected (21 originally passing tests remain green; only the 2 pre-existing failures ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2.2"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3.1"
        }), " remain)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5b-wave-2-contract-codification-log",
      children: "5b. Wave 2 contract codification log"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: ".cursorrules"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 rewritten to \"Scoped Kanban Reconciliation (Self-Sufficient)\"; preventive-vs-corrective architecture codified; minimum four-surface release-scope outputs defined; UKW reactive-only role codified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "release-workflow-agent-execution.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Step 7 section rewritten to mirror ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), "; Step-7 todo template line updated; Integration section updated"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "kanban-governance-policy.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added \"RW preventive vs UKW corrective separation (FR-092 / FR-091)\" section; codified four-surface minimum outputs; codified forensic-stamp semantics gate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "implementation-planning-workflow-agent-execution.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status-transition propagation owners updated; \"Post-run reconciliation contract (FR-092 / FR-084)\" section added; Integration note updated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 2 cross-doc consistency check:"
      }), " All four artifacts reference FR-092 and uniformly state (a) RW Step 7 self-sufficiency, (b) UKW reactive-only role, (c) four-surface minimum outputs (task + FBU + kboard + fbuboard), (d) idempotent + deterministic + ordered reconciliation properties."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5d-wave-4-corpus-canonical-sweep--b1-drift-fix-log",
      children: "5d. Wave 4 corpus-canonical sweep + B1 drift fix log"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "update_kanban_docs.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Broadened ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_normalize_traceability_segments_for_row"
            }), " separator class from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "|"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[-|]"
            }), " so duplicate inline ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[FBU](url)"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[Task](url)"
            }), " segments preceded by hyphens (body-inline drift) are removed alongside pipe-separated tail duplicates. Added ", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_corpus_canonical_sweep(...)"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--corpus-canonical"
            }), " CLI flag for explicit full-corpus normalization across ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-board.md"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "test_update_kanban_docs.py"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added Test 4.20 (live-board pre-sweep fixture; reproduces B1; asserts zero duplicates after sweep; asserts second sweep is idempotent fixed point)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE / GREEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/fixtures/fr092_wave4/fbuboard_pre_corpus_sweep.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "fixtures/fr092_wave4/fbuboard_pre_corpus_sweep.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-board snapshot containing the B1 duplicate-link pattern; locks regression coverage against actual live drift, not synthetic unit fixtures."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " (corpus sweep)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["13 rows changed by canonical pipeline; second pass reports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clean (idempotent)"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " (corpus sweep)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["42 rows changed; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "byte_size_before=33,578"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "byte_size_after=30,261"
            }), "; second pass reports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clean (idempotent)"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/four-surface-reports/fr092-wave4-corpus-sweep-evidence.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "fr092-wave4-corpus-sweep-evidence.md"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full evidence note: pre-sweep symptoms, root cause, sweep outcome, idempotency proof, forensic stamp safety, regression coverage, Bucket-B sign-off matrix."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 4 contract assertions (FR-090 absorbed + B1-B4 closed):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B1 (duplicate inline FBU links) — RESOLVED in code; locked by Test 4.20; live boards re-canonicalized."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B2 (FR-089 multiplication hardening did not eliminate multiplication) — RESOLVED via the same root-cause fix as B1; FR-089 retained as historical predecessor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B3 (BR-069 residual tail repetition) — RESOLVED on live boards by Wave 4 sweep. BR-069 closure remains gated on Wave 8 sign-off per supersede chain."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["B4 (Step 7 only normalizes metadata-touched rows) — RESOLVED. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_corpus_canonical_sweep"
        }), " provides the corpus-mode entrypoint; the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--corpus-canonical"
        }), " CLI flag is the canonical invocation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Idempotency proven by second-pass ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clean (idempotent)"
        }), " reports on both boards."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Forensic stamp safety preserved: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamps_appended_missing == 0"
        }), ". No synthetic stamp churn introduced by the sweep."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5e-wave-5-stage-set-completeness-log-br-070-absorbed",
      children: "5e. Wave 5 stage-set completeness log (BR-070 absorbed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validate_rw_step7_completeness.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "validate_rw_step7_completeness.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New validator implementing the BR-070 stage-set completeness invariant. Modes: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--four-surface-report"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--touched-files"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--auto"
            }), ". Cross-references the Step-7 four-surface report against ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git status --porcelain=v1"
            }), " and emits a structured stage-completeness report (", (0,jsx_runtime.jsx)(_components.code, {
              children: "StagingVerdict"
            }), " per path; aggregate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CompletenessReport"
            }), " with PASS/BLOCK verdict). Persists JSON + Markdown audit artefacts to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/four-surface-reports/"
            }), ". Exit codes: 0 = pass, 1 = BR-070 violation (RW MUST BLOCK), 2 = invalid invocation."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_validate_rw_step7_completeness.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "test_validate_rw_step7_completeness.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New test suite (9 isolated git-repo cases): clean baseline, fully-staged, single-file unstaged drift, partial-stage subset (the original BR-070 failure mode), untracked Step-7 output, missing declared path, JSON+Markdown report emission, explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--touched-files"
            }), " mode, invalid invocation."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE / 9/9 GREEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "release-workflow-agent-execution.md"
              })
            }), " Step 8"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Stage-set completeness invariant codified. Step Definition extended with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stage_set_completeness"
            }), " block (validator path + contract reference + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blocking: true"
            }), "). Agent Execution updated to invoke the validator after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git add -A"
            }), "; PROCEED gates updated to require validator exit 0 before advancing to Step 9."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 5 contract assertions (BR-070 absorbed):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For every path declared as touched by RW Step 7 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "surfaces.*.paths"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auxiliary_surfaces.*.paths"
        }), "), the path must be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "staged"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "unchanged"
        }), " at the Step 8 / Step 11 boundary."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modified-unstaged or untracked Step-7 outputs are BR-070 violations -> RW MUST BLOCK."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Audit trail: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-step7-stage-completeness-{version}-{esttoken}.{json,md}"
        }), " written next to the four-surface reconciliation report; the pair forms the \"touched surfaces + why\" + \"stage-set parity\" record for the release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validator is composable: Wave 7's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_release_readiness.py"
        }), " can call it as Gate 5."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-070 final closure remains gated on Wave 8 sign-off per FR-092 supersede chain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5f-wave-6-forensic-stamp-work-evidence-gate-log-uxr-009-absorbed",
      children: "5f. Wave 6 forensic stamp work-evidence gate log (UXR-009 absorbed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "update_kanban_docs.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Added module-level ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EVIDENCE_MODE_WORK_AUTHORITATIVE"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EVIDENCE_MODE_NON_SUBSTANTIVE"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EVIDENCE_MODE_GATED"
            }), " constants and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VALID_EVIDENCE_MODES"
            }), " set. Plumbed ", (0,jsx_runtime.jsx)(_components.code, {
              children: "evidence_mode"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "evidence_provider"
            }), " parameters through ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enforce_moscow_row_timestamps_with_stats"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "apply_canonical_row_transform_pipeline"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_corpus_canonical_sweep"
            }), ". Added ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_row_has_substantive_evidence"
            }), " helper. Added counters ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_appended_with_evidence"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_skipped_no_evidence"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_preserved_existing"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "skipped_no_evidence_rows"
            }), " to the timestamp report. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_corpus_canonical_sweep"
            }), " defaults to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "non_substantive"
            }), " to eliminate synthetic stamp churn from board-hygiene passes. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FourSurfaceReport"
            }), " extended with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamp_evidence"
            }), " field; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "as_dict()"
            }), " summary surfaces ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_appended_with_evidence"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_skipped_no_evidence"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_preserved_existing"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "to_markdown()"
            }), " adds a \"Forensic stamp evidence (UXR-009 / FR-092 Wave 6)\" section. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build_four_surface_report(...)"
            }), " accepts the optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamp_evidence_aggregate"
            }), " argument."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_stamp_evidence_gate.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "test_stamp_evidence_gate.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New 7-case suite: (1) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "work_authoritative"
            }), " appends missing stamps; (2) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "non_substantive"
            }), " never appends, records ", (0,jsx_runtime.jsx)(_components.code, {
              children: "skipped_no_evidence_rows"
            }), "; (3) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gated"
            }), " requires positive provider response per row; (4) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gated"
            }), " without provider defaults to deny (conservative); (5) existing stamps preserved verbatim across all modes; (6) invalid mode raises ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ValueError"
            }), "; (7) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_corpus_canonical_sweep"
            }), " defaults to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "non_substantive"
            }), " and produces 0 synthetic stamps on a fresh board."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE / 7/7 GREEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "kanban-governance-policy.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Timestamp-governance section extended with: (a) \"Evidence modes (FR-092 Wave 6 implementation)\" describing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "work_authoritative"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "non_substantive"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gated"
            }), "; (b) \"Audit counters (FR-092 Wave 6)\" listing the three counters and their flow into the Wave 7 release-readiness gate."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Live corpus dry-run (UXR-009 mode)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "run_corpus_canonical_sweep(... evidence_mode=non_substantive)"
            }), " against current ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-board.md"
            }), " reports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_appended_with_evidence=0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_skipped_no_evidence=0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_preserved_existing=109"
            }), ", all boards ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clean (idempotent)"
            }), ". Wave 4 corpus baseline holds; Wave 6 forensic safety verified live."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 6 contract assertions (UXR-009 absorbed):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " stamps are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "never rewritten"
        }), " in any evidence mode. Forensic safety holds across all transforms."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Synthetic stamp churn is forbidden on board-hygiene paths (", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_corpus_canonical_sweep"
        }), " defaults to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "gated"
        }), " mode is composable with caller-supplied per-row evidence resolvers (e.g. linked-doc git mtime, status delta, AC progression). The default-deny semantics means a partial or missing resolver suppresses stamps rather than minting them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FourSurfaceReport.summary"
        }), " now exposes the three forensic stamp counters; the markdown report includes them in a dedicated section."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UXR-009 closure remains gated on Wave 8 sign-off per FR-092 supersede chain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5g-wave-7-release-readiness-gate-log-gates-1-7",
      children: "5g. Wave 7 release-readiness gate log (Gates 1-7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/validate_release_readiness.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "validate_release_readiness.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New aggregate validator implementing Gates 1-7. Each gate is independent; verdicts aggregate into a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReadinessReport"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "overall_passed"
            }), " propagated from blocking-failure status. Gate 1: governance source-of-truth alignment (", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", RW execution guide, kanban governance policy must contain FR-092 + Step-7-self-sufficient + stage-set-completeness + forensic-semantics phrases). Gate 2: predecessor closure & supersede-chain consistency (FR-091/FR-090/FR-084 banner-superseded; T02/T05/T06 redirect markers; BR-069/BR-070/UXR-009 reference FR-092; BR-042 marked duplicate). Gate 3: contract enforcement parity (RW Step-7 vs UKW canonical pipelines produce byte-identical output across every active board — verifies FR-090 shared-engine contract). Gate 4: corpus canonical state (", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_corpus_canonical_sweep"
            }), " dry-run idempotent on every active board; zero duplicate-tail rows; zero synthetic stamps in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "non_substantive"
            }), " mode). Gate 5: BR-070 stage-set completeness (composes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_step7_completeness.evaluate_touched_paths"
            }), " against latest four-surface report). Gate 6: UXR-009 forensic stamp evidence (no synthetic stamps in non-substantive runs; counters internally consistent). Gate 7: FR-084 four-surface parity (every primary surface present, either touched or noted-untouched-with-rationale; declared paths exist on disk). Persists JSON+Markdown audit artefacts to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/four-surface-reports/rw-step9-release-readiness-*"
            }), ". Exit codes: 0 = pass, 1 = blocking gate failure (RW MUST BLOCK), 2 = invalid invocation. CLI surface: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--auto"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--four-surface-report PATH"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--require-report"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--gate N"
            }), " (repeatable), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--no-emit-report"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--quiet"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--invocation-context"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/test_validate_release_readiness.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "test_validate_release_readiness.py"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New 18-case test suite covering: Gate 1 pass + missing-phrase fail; Gate 2 pass + missing-banner fail; Gate 4 live-repo pass; Gate 5 waiver + require-report block; Gate 6 consistent-counter pass + non-substantive synthetic-stamp violation; Gate 7 all-touched pass, untouched-with-rationale pass, untouched-without-rationale fail, missing-on-disk fail; orchestration: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "selected_gates"
            }), " filter, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "overall_passed"
            }), " on live repo, JSON+Markdown report emission; CLI: invalid-gate exit 2, default invocation exit 0 on live repo. Uses synthetic git-repo scaffolding for unit-level gates and the live repo for integration-level gates."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE / 18/18 GREEN"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "release-workflow-agent-execution.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Step 10 (Run Validators) extended with: (a) preamble paragraph identifying Wave 7 release-readiness gate as the canonical pre-commit aggregate; (b) Step Definition ", (0,jsx_runtime.jsx)(_components.code, {
              children: "release_readiness_gate"
            }), " block (", (0,jsx_runtime.jsx)(_components.code, {
              children: "enforce: true"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validator: ..."
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "contract: FR-092 Wave 7"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "require_four_surface_report: true"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blocking: true"
            }), "); (c) EXECUTE step inserts ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_release_readiness.py --auto --require-report"
            }), " invocation with exit-code semantics; (d) PROCEED step adds explicit MUST-NOT-COMMIT clause when readiness gate exits non-zero."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Live release-readiness sweep (Wave 7)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "python validate_release_readiness.py --no-emit-report"
            }), " against current repo: Gate 1 PASS, Gate 2 PASS, Gate 3 PASS (all 4 active boards byte-identical RW↔UKW), Gate 4 PASS (", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_appended_with_evidence=0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_preserved_existing=109"
            }), ", all boards ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clean (idempotent)"
            }), "), Gates 5/6/7 waived (no Step-7 report yet). Overall PASS for governance/preventive layer; commit-time gates remain to be exercised under live RW Step 10 in Wave 8."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 7 contract assertions (Gates 1-7 wired):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The release-readiness validator is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "idempotent"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "read-only"
        }), ": it can be run repeatedly between Step 7 and Step 11 without mutating state; only its persisted readiness report is written."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gate composition is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-destructive"
        }), ": Gate 5 reuses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_step7_completeness"
        }), " instead of reimplementing stage-set logic; Gate 4 reuses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_corpus_canonical_sweep"
        }), " (dry-run); Gate 3 reuses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "apply_canonical_row_transform_pipeline"
        }), ". The Wave 7 surface is therefore a thin aggregation layer, not a parallel implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each Gate has well-defined ", (0,jsx_runtime.jsx)(_components.code, {
          children: "severity"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "block"
        }), "|", (0,jsx_runtime.jsx)(_components.code, {
          children: "warn"
        }), "|", (0,jsx_runtime.jsx)(_components.code, {
          children: "info"
        }), ") and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "waived"
        }), " semantics. Waivers (e.g. \"no four-surface report yet\") never silently drop blocking failures; they are recorded explicitly in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReadinessReport.summary.gates_waived"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The validator is wired into RW Step 10 (the actual pre-commit validator suite). Step 11 (commit) cannot be reached if Step 10 fails strict_mode + the release-readiness gate is configured ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blocking: true"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BR-070 AC4 (\"Post-commit verification asserts staged/committed files cover Step-7 output set\") is in scope of Wave 8 sign-off (the live RW dry-run); Wave 7 supplies the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "pre-commit"
        }), " enforcement; Wave 8 will exercise it end-to-end."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5h-wave-8-sign-off-log-program-closure",
      children: "5h. Wave 8 sign-off log (program closure)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sign-off type:"
      }), " Implementation-complete dry-run sign-off. The terminal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E2:S15:T07 --art"
      }), " that publishes this task is itself the work-evidence boundary that converts implementation-complete → released; that step is the sole remaining out-of-band action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Live evidence captured 2026-04-27 15:55–15:56 UTC against the working tree:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "corpus-canonical-state-ac-m5-ac-m7-fr-092-nf3",
      children: "Corpus canonical state (AC-M5, AC-M7, FR-092-NF3)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "update_kanban_docs.py --corpus-canonical --dry-run"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Board"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "rows_changed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "duplicate_footer_rows"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "stamps_appended_missing"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-board.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All four active boards are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "byte-stable"
      }), " under the canonical row transform pipeline. Wave 4 normalization is structurally idempotent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-readiness-gate-gates-1-7-against-in-progress-repo",
      children: "Release-readiness gate (Gates 1-7 against in-progress repo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "validate_release_readiness.py --auto --require-report"
      }), " against a synthesized FR-092 Wave 8 four-surface report:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verdict"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate 1 — Governance source-of-truth alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All required FR-092 + Step-7-self-sufficient + stage_set_completeness + Forensic-semantics phrases present in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", RW execution guide, kanban governance policy. IPW cross-link is INFO-level."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate 2 — Predecessor closure & supersede chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-091/FR-090/FR-084 banner-superseded; T02/T05/T06 redirected to E2:S15", ":T07", "; BR-069/BR-070/UXR-009 reference FR-092; BR-042 closed as duplicate."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate 3 — RW↔UKW pipeline parity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW Step 7 + UKW + standalone canonical pipelines produce ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "byte-identical"
            }), " output across all 4 active boards. FR-090 shared-engine contract verified."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate 4 — Corpus canonical state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All 4 boards ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clean (idempotent)"
            }), "; aggregate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_appended_with_evidence=0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stamps_preserved_existing=109"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate 5 — Stage-set completeness (BR-070)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BLOCK (correctly)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["12 Step-7 paths flagged as modified-unstaged or untracked. The validator correctly refused to allow commit. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "This is the contracted behavior at Wave 8 — Step 8 stages, then Gate 5 must pass; the in-progress repo state has not yet had Step 8 run, so blocking is correct."
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate 6 — Forensic stamp evidence (UXR-009)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Counters consistent: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "appended=0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "skipped=0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "preserved=109"
            }), " under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "evidence_mode=non_substantive"
            }), ". No synthetic stamp churn possible."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gate 7 — Four-surface parity (FR-084)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All primary surfaces present and touched, all declared paths exist on disk."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Persisted artefacts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/four-surface-reports/rw-step7-four-surface-report-fr092-wave8-signoff.md",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "rw-step7-four-surface-report-fr092-wave8-signoff.json"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".md"
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/four-surface-reports/rw-step9-release-readiness-2026-04-27_15-55_UTC-adhoc.md",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "rw-step9-release-readiness-2026-04-27_15-55_UTC-adhoc.json"
          }), " / ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".md"
          })]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-suite-green-status-waves-3-7",
      children: "Test suite green-status (Waves 3-7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Suite"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cases"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_update_kanban_docs.py"
            }), " (Waves 3-4)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(existing) + Test 4.20 (B1 drift regression)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All Wave 3-4 tests green; pre-existing 2.2 / 3.1 failures remain out of scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_rw_step7_completeness.py"
            }), " (Wave 5)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/9 green"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_stamp_evidence_gate.py"
            }), " (Wave 6)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/7 green"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_release_readiness.py"
            }), " (Wave 7)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18/18 green"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-wave-8-sign-off-establishes",
      children: "What Wave 8 sign-off establishes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-M1 (architectural codification):"
        }), " PROVED on every release by Gate 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-M2 (Bucket-B drift fixed on live boards):"
        }), " PROVED by Wave 4 + Wave 8 corpus sweeps + Test 4.20."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-M3 (preventive gates block bad commits):"
        }), " PROVED live — Gate 5 actually blocked the in-progress unstaged-Step-7 commit attempt with per-path diagnostics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-M4 (predecessor evidence wired):"
        }), " PROVED by Wave 1 traceability matrix + Gate 2 verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-M5 (corpus normalization, zero duplicate tails, zero synthetic stamp churn):"
        }), " PROVED by Wave 8 live sweep evidence above."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-M6 (supersede chain):"
        }), " PROVED — Gate 2 verifies on every release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-M7 (sign-off RW dry-run + audit report):"
        }), " PROVED — readiness report + four-surface report persisted; all gates pass except Gate 5 against in-progress unstaged work, which is the gate's purpose."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "residual--handoff",
      children: "Residual + handoff"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Live RW E2:S15", ":T07", " --art:"]
        }), " Will (a) run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " (RW Step 7) which writes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " rows for T07 + FR-092 with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evidence_mode=work_authoritative"
        }), ", then (b) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git add -A"
        }), " (Step 8), then (c) the per-domain validators + the FR-092 Wave 7 release-readiness gate (Step 10 — at this point Gate 5 will pass because Step 8 ran), then (d) commit (Step 11). The release-readiness gate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must"
        }), " exit 0 at Step 10 for the release to proceed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-069 / BR-070 / UXR-009:"
        }), " ACs proved satisfied above; the actual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Status: COMPLETE"
        }), " flip happens at the live RW. The gating notes in those documents now reflect Wave 8 sign-off."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-existing test failures"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_update_kanban_docs.py"
        }), " 2.2 / 3.1) are unrelated to FR-092 scope and remain captured on the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " branch backlog as pre-existing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 8 verdict:"
      }), " FR-092 / E2:S15", ":T07", " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementation-complete and ready for live RW publication"
      }), ". The release-readiness program is functioning as designed; the remaining gate-5 block is the gate working correctly on a still-unstaged change set."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-bucket-b-drift-work-items-wave-4-placeholder",
      children: "6. Bucket-B drift work-items (Wave 4 placeholder)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Drift ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hypothesized cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wave-4 verification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " rows still have duplicated tail tokens after T05 sign-off"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "apply_canonical_row_transform_pipeline"
            }), " not invoked over corpus during RW Step 7"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Snapshot live fbuboard slice, reproduce in test_update_kanban_docs.py, fix invocation, verify zero duplicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-089 multiplication hardening did not eliminate observed multiplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardening targets validation/reconciliation, not corpus rewrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reproduce; route through Wave 4 corpus mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-069 narrowed but residual tail repetition persists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Residual closure pinned on FR-090; not yet executed on corpus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run Wave 4 sweep; verify BR-069 final AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 only metadata-touched rows are normalized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7 scoped reconciliation does not invoke corpus-mode normalization"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--corpus-canonical"
            }), "; wire into Step 7"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-references",
      children: "7. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092",
          children: ["Host task E2:S15", ":T07"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
          children: "FR-092"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency",
          children: "FR-091 (superseded)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts",
          children: "FR-090 (superseded)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership",
          children: "FR-084 (superseded)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten",
          children: "BR-069"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit",
          children: "BR-070"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection",
          children: "UXR-009"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction",
          children: "IPP-E2S15T4"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090",
          children: "IPP-E2S15T5 (superseded planning)"
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