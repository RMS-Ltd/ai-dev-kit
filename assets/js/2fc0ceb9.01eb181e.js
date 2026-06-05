"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["63522"], {
61287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_04_s_07_t_01_br_006_migration_support_pre_existing_kanban_md_2fc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-04-s-07-t-01-br-006-migration-support-pre-existing-kanban-md-2fc.json
var site_docs_implementation_cycles_ipp_e_04_s_07_t_01_br_006_migration_support_pre_existing_kanban_md_2fc_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban","title":"E04:S07:T01 — Planning: BR-006 detection/analysis verification closure (IPW)","description":"Host TaskS07:T01)","source":"@site/../docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E04:S06:T06 — Planning: BR-005 canonical epics structure gap verification (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E04S06T06-br005-canonical-epics-structure-gap"},"next":{"title":"E04:S07:T02 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E04S07T02-fr007-migration-utilities-installation-modes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E04:S07 — Planning: BR-006 detection/analysis verification closure (IPW)';

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
  "value": "2.2 Specification mapping",
  "id": "22-specification-mapping",
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
  "value": "2.5 ADR necessity decision (IPW Phase 5.0)",
  "id": "25-adr-necessity-decision-ipw-phase-50",
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
  "value": "7.1 BR-006 criteria 1–4 audit matrix",
  "id": "71-br-006-criteria-14-audit-matrix",
  "level": 3
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
        id: "e04s07--planning-br-006-detectionanalysis-verification-closure-ipw",
        children: ["E04:S07", ":T01", " — Planning: BR-006 detection/analysis verification closure (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T01-br006-detection-analysis-verification-closure",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-br006-detection-analysis-verification-closure.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E04:S07", ":T01", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban",
        children: "BR-006"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved (planning complete — implementation authorized via parent IPW+RW request)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW closure wave:"
        }), " Story-007 marks T01 COMPLETE (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.7.1+1"
        }), ") but ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), " still lists ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E04:S07", ":T01"]
        }), " as TODO. This IPP plans verification of BR-006 criteria 1–4, minimal defect remediation, four-surface kanban reconciliation, and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RW E04:S07:T01 --art"
          })
        }), "."]
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
            children: ["Discrete task doc with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "**Task ID:** E04:S07:T01"
            }), " bidirectionally wired to this IPP"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-042, validate_rw_task_complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Verify BR-006 criteria 1–4: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "detect_existing_structure.py"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "analyze_structure.py"
            }), " exist and run on ai-dev-kit kanban tree"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-006, story-007 T01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reconcile four surfaces: task doc, BR-006, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed"
            }), " — story COMPLETE vs board TODO drift"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-077, FR-092"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BR-006 criteria 1–4 marked verified; note criteria 5–12 satisfied by T02/T03 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.7.2+1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.7.3+1"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-006, story-007"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP filed; publication wiring on task doc per FR-042"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-042"
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
            children: "Changelog language: \"Change implemented\" / verification until user confirms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal code change scope — fix only blocking verification defect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation gate"
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
        }), " Original T01 delivery at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.7.1+1"
        }), " remains forensic record; closure RW adds BUILD on same E:S", ":T", " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Verification, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "analyze_structure.py"
        }), " NameError fix, kanban/BR reconciliation, discrete task doc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Re-implementing T02/T03 migration/installer; changing installation-mode semantics; new ADR."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Close forensic drift for ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E04:S07", ":T01"]
      }), " by proving BR-006 detection/analysis criteria (1–4) are satisfied, fixing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "analyze_structure.py"
      }), " runtime defect found during IPW verification, reconciling kanban surfaces, and releasing via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E04:S07:T01 --art"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping",
      children: "2.2 Specification mapping"
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
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Host task at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "story-07-.../T01-br006-detection-analysis-verification-closure.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§7 audit matrix T1–T4 with command output evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Remove E04:S07", ":T01", " from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), " C-band; confirm ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed"
            }), " entry; update BR-006"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-006 criteria 1–4 checked; Fix Verification Status → verified for criteria 1–4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP + task doc Input/References wiring"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Closure RW: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RW E04:S07:T01 --art"
          })
        }), " only (BUILD +1 on adopted anchor)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not prescribe ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent",
      children: "2.4 Status transition intent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " COMPLETE in story checklist; TODO on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), " (drift)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1 (implementation):"
        }), " Confirm discrete task doc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IN PROGRESS"
        }), " on first non-planning edit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE:"
        }), " After verification PASS + four-surface sync + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RW E04:S07:T01 --art"
          })
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation:"
        }), " Task doc, BR-006, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-completed"
        }), " in RW Step 7."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Closure wave implementation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision-ipw-phase-50",
      children: "2.5 ADR necessity decision (IPW Phase 5.0)"
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
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification of shipped utilities only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc + one-line script fix revertible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban package script; no adopter contract change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hygiene closure, not new architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No RW/IPW gate changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "EXEMPT"
      }), " — all T = N."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exemption"
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
            children: "IPP §4.1 file list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implements BR-006 closure only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible in one task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec elsewhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-006 + story-007"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§5.3 cites this IPP §2.5"
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IPW run (2026-06-05)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criterion 1 — detection"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "detect_existing_structure.py"
            }), " scans epics/stories/tasks; exit 0; report ", (0,jsx_runtime.jsx)(_components.code, {
              children: "status: detected"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            }), " — 12 epics, 92 stories, 922 tasks"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criterion 2 — detection utility"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Script exists at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/scripts/detect_existing_structure.py"
            }), "; README documents usage"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criterion 3 — analysis"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "analyze_structure.py"
            }), " consumes detection report; maps E/S/T; generates migration plan"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FAIL"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FIX"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NameError: high_similarity_matches"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_generate_migration_plan"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criterion 4 — analysis utility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script exists; README documents workflow"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            }), " (post-fix re-run required)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scripts README"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "detect → analyze workflow documented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--skip-tests"
        }), ":"]
      }), " Not used — verification is script execution, not pytest."]
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
            }), " Transition discrete task ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TODO → IN PROGRESS"
            }), "; update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "analyze_structure.py"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "high_similarity_matches"
            }), " NameError (define filter ", (0,jsx_runtime.jsx)(_components.code, {
              children: "similarity_score >= 70"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script fix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-run T1 + T3–T4; capture outputs in task doc §7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kanban reconciliation:"
            }), " Remove E04:S07", ":T01", " from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), " C-band; confirm/update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed"
            }), " line; story checklist links discrete T01"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boards synced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-006:"
            }), " Check criteria 1–4; update Fix Verification Status; link discrete task + IPP"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E04:S07:T01 --art"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY]"
            }), " Reconcile task → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), "; kboard absent completed row"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forensic closure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CREATE (IPW):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes/T01-br006-detection-analysis-verification-closure.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPDATE (implementation):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/analyze_structure.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kanban-completed.md"
        }), " (if entry needs discrete-task link)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPP + task doc → Step 1 → fix + verify → kanban + BR → RW → status reconciliation."
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
              children: "BR-006-...md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Criteria 1–4 verified; implementing task link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4, Step 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-07-...md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklist → discrete T01 link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reconciliation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "analyze_structure.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NameError fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
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
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T01-br006-detection-analysis-verification-closure.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task"
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
            children: "BR-006 criteria 5–12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " in T01 closure — satisfied by T02/T03 per story-007"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New ADR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — EXEMPT per §2.5"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Docusaurus publication"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — IPP NOT_APPLICABLE per BR-066"]
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
              children: "docs/implementation-cycles/IPP-E04S07T01-br006-migration-support-pre-existing-kanban.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 Input, References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".../T01-br006-detection-analysis-verification-closure.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-006, story-007"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1–D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(see §5.1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closure RW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-br-006-criteria-14-audit-matrix",
      children: "7.1 BR-006 criteria 1–4 audit matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Ref"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Criterion 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework detects existing Kanban structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T1: detection report ", (0,jsx_runtime.jsx)(_components.code, {
              children: "status: detected"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Criterion 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "detect_existing_structure.py"
            }), " created"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script + README"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Criterion 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework analyzes existing structure"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            }), " (post-fix)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T3 re-run after Step 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Criterion 4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "analyze_structure.py"
            }), " created"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script + README"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All §5 UPDATE/CREATE items implemented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_publication_wiring.py --requested E04:S07:T01"
        }), " PASS (if run)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Four-surface RW Step 7 report emitted"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-006-missing-migration-support-pre-existing-kanban",
          children: "BR-006"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-07-migration-support-and-installation-modes",
          children: "story-07"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
          children: "FR-077"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/detect_existing_structure.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/analyze_structure.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/README.md"
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