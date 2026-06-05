"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["31310"], {
88056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_4_s_19_t_06_fbu_meta_normalization_and_intake_governance_md_b14_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-4-s-19-t-06-fbu-meta-normalization-and-intake-governance-md-b14.json
var site_docs_implementation_cycles_ipp_e_4_s_19_t_06_fbu_meta_normalization_and_intake_governance_md_b14_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance","title":"E4:S19:T06 - Planning: Spec, Tests, Implementation Plan (IPP)","description":"Host TaskS19:T06)","source":"@site/../docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-26T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E4:S19:T05 - Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T05-kanban-fr-br-uxr-filename-normalization"},"next":{"title":"E04:S19:T09 — Planning: Spec, Tests, Implementation Plan (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T09-two-digit-est-identifier-default-formatting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-26T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E4:S19 - Planning: Spec, Tests, Implementation Plan (IPP)';

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
  "value": "1.4 Inherited planning sets reconciliation",
  "id": "14-inherited-planning-sets-reconciliation",
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
  "value": "2.4 Canonical filename policy and migration mapping",
  "id": "24-canonical-filename-policy-and-migration-mapping",
  "level": 3
}, {
  "value": "2.5 Terminology contract",
  "id": "25-terminology-contract",
  "level": 3
}, {
  "value": "2.6 Status transition intent (mandatory)",
  "id": "26-status-transition-intent-mandatory",
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
  "value": "4.1 Wave 1 — Governance, supersede, and IPP wiring  (DONE: <code>v0.4.19.6+1</code>)",
  "id": "41-wave-1--governance-supersede-and-ipp-wiring--done-v041961",
  "level": 3
}, {
  "value": "4.2 Wave 2 — Canonical filename migration (close §2.4 PARTIAL/TODO rows)",
  "id": "42-wave-2--canonical-filename-migration-close-24-partialtodo-rows",
  "level": 3
}, {
  "value": "4.3 Wave 3 — Terminology contract enforcement",
  "id": "43-wave-3--terminology-contract-enforcement",
  "level": 3
}, {
  "value": "4.4 Wave 4 — FR-073 AC3 closure (UKW/statistics pass under T06 ownership)",
  "id": "44-wave-4--fr-073-ac3-closure-ukwstatistics-pass-under-t06-ownership",
  "level": 3
}, {
  "value": "4.5 Wave 5 — Validation and stabilization",
  "id": "45-wave-5--validation-and-stabilization",
  "level": 3
}, {
  "value": "4.6 AC traceability matrix (inherited FBU/task ACs ↔ T06 ACs)",
  "id": "46-ac-traceability-matrix-inherited-fbutask-acs--t06-acs",
  "level": 3
}, {
  "value": "4.7 Files touched by Wave 1 (already published)",
  "id": "47-files-touched-by-wave-1-already-published",
  "level": 3
}, {
  "value": "5. Success / verification criteria",
  "id": "5-success--verification-criteria",
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
        id: "e4s19---planning-spec-tests-implementation-plan-ipp",
        children: ["E4:S19", ":T06", " - Planning: Spec, Tests, Implementation Plan (IPP)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E4:S19", ":T06", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption",
        children: "UXR-008"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology",
        children: "FR-086"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan",
        children: "FR-073"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Complete (Waves 1-5 implemented and published through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.19.6+5"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Establish one canonical implementing task for UXR-008, FR-086, and FR-073 residual scope."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC1, T06 AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define deterministic supporting-doc filename policy and old->new migration map for remaining in-scope kanban/FBU files."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-008 AC3/AC4, FR-086-F1/F5, T05 AC1/AC2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apply canonical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FBU"
            }), " collective terminology in scoped docs without changing individual issue identities (", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR-*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UXR-*"
            }), ")."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086-F2/F4, T02 AC2/AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserve compatibility behavior for legacy long-form paths via redirect/alias notes and link rewiring."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-008 AC5, FR-086-NF3, T05 AC5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close FR-073 AC3 by planning a scoped board-statistics/taskless reconciliation pass under T06 ownership."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-073 AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keep all task/story/board/FBU links bidirectionally wired to T06 and this IPP."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC7, FR-086 AC5, T05 AC6"
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
            children: "Deterministic outputs: repeated runs over unchanged inputs produce identical mapping and wording."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086-NF1, T05 N1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical traceability preserved when superseding T02/T05/T73 linkage."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086-NF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link integrity maintained for all touched docs."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086 AC4, T05 AC3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope remains documentation/governance; no runtime behavior changes in this planning package."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086 scope"
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
            children: ["Individual issue filenames stay native (", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR-*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UXR-*"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Canonical board defaults remain ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Superseded tasks retain history; they are not deleted."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " T06 ownership rewiring, naming policy, terminology contract, compatibility policy, FR-073 AC3 planning closure path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Executing full filename migration waves and release of downstream implementation changes beyond this planning/package publication."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-inherited-planning-sets-reconciliation",
      children: "1.4 Inherited planning sets reconciliation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This IPP absorbs and unifies the prior fragmented planning artifacts authored under the superseded tasks. No planning content is lost; each input artifact is mapped to the section of this IPP that now carries it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Inherited artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Origin task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disposition under T06"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapped sections in this IPP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPW-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IPW-E4S19T2-canonical-supporting-kanban-fbu-doc-naming-and-terminology.md"
              })
            }), " (legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-"
            }), " prefix)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E4:S19", ":T02", " (SUPERSEDED)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Migrated to canonical ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IPP-E4S19T2-...md"
              })
            }), "; requirements + test ideas absorbed"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§1.1 (RF3, RF4), §2.4 compatibility behavior, §2.5 terminology contract, §3 T1/T4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E4S19T05-kanban-fr-br-uxr-filename-normalization",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IPP-E4S19T5-kanban-fr-br-uxr-filename-normalization.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E4:S19", ":T05", " (SUPERSEDED)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authoritative source for naming policy and migration mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§1.1 (RF2), §2.4 canonical filename mapping table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ICW-E4S19T5-specification.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E4:S19", ":T05", " (SUPERSEDED, pre-consolidation ICW set)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Folded into unified IPP per ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
              children: "FR-042"
            }), " §7 ICW→IPW consolidation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§1, §2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ICW-E4S19T5-test-design.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E4:S19", ":T05", " (SUPERSEDED)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consolidated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§3 test design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ICW-E4S19T5-implementation-plan.md"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E4:S19", ":T05", " (SUPERSEDED)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consolidated and re-organized into wave plan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4 implementation plan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-073 governance prose (Phase B/C closure under ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "E5:S01:T73"
              })
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E5:S01", ":T73", " (COMPLETE — historical anchor)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T73 retained for historical phases; AC3 (UKW/statistics pass) absorbed by T06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§1.1 (RF5), §4 Wave 4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a single meta-governance planning contract for UXR-008, FR-086, and FR-073 by superseding fragmented task ownership and publishing one canonical IPP artifact that defines naming, terminology, compatibility, and board-governance closure requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership consolidation (RF1/RF6):"
        }), " All three FBU docs and relevant board/story/task surfaces must point to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E4:S19:T06"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E4S19T6"
        }), " as canonical references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Naming policy (RF2):"
        }), " Produce a canonical mapping table covering remaining legacy surfaces, explicitly including ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-board.md"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-open-taskless-queue.md"
        }), " disposition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Terminology contract (RF3):"
        }), " Enforce collective ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FBU"
        }), " usage in scoped narrative docs while preserving individual FR/BR/UXR identity constraints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compatibility behavior (RF4):"
        }), " Define redirect/alias guidance for retained legacy paths and link rewires."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-073 AC3 closure path (RF5):"
        }), " Define a scoped UKW/statistics reconciliation activity as a mandatory implementation wave under T06."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must align with FR-042 IPW/IPP conventions and current canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-"
        }), " artifact naming."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must preserve compatibility for existing references that still point to legacy long-form filenames until migration is completed."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must avoid timestamp churn or non-substantive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " rewrites while updating board surfaces."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-canonical-filename-policy-and-migration-mapping",
      children: "2.4 Canonical filename policy and migration mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The canonical short-form pattern (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "intake-completed.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "intake-structure.md"
      }), ") extends to all remaining supporting docs in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/"
      }), ". Individual issue files (", (0,jsx_runtime.jsx)(_components.code, {
        children: "FR-*.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BR-*.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UXR-*.md"
      }), ") and task files (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Txx-...md"
      }), ") are out of scope per §1.3 invariants."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Legacy path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disposition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status as of this IPP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br-uxr-completed.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/intake-completed.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migrated and legacy file removed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DONE in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.4.19.5+7"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br-uxr-structure.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/intake-structure.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migrated; legacy retained as compatibility-alias stub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE; alias retained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br-uxr-board.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/kboard.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Alias-only stub retained for compatibility; canonical board remains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DONE in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E4:S19:T06"
            }), " Wave 2"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br-uxr-open-taskless-queue.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/intake-open-taskless-queue.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical queue file created and legacy filename converted to alias-only stub"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DONE in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E4:S19:T06"
            }), " Wave 2"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/"
            }), " directory"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fbu/"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "(decision pending)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-blast-radius rename; deferred pending impact analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DEFERRED — explicit retention until separately approved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Individual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-*.md"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR-*.md"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "UXR-*.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invariant: identity preserved per FR-086"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVARIANT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task docs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Txx-*.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unchanged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of scope per §1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INVARIANT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compatibility behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Renamed supporting files leave a legacy-named stub that contains only YAML frontmatter, a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Legacy Alias:"
        }), " header, and a one-line redirect link to the canonical file (mirrors current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-structure.md"
        }), " style — see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance",
          children: "example"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW-"
        }), " prefixed artifacts have a canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-"
        }), "-prefixed copy/rename; legacy file may be retained as a redirect note pending downstream consumer migration."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-doc references in scoped surfaces are rewired to canonical paths; legacy paths remain resolvable for one release cycle minimum after migration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-terminology-contract",
      children: "2.5 Terminology contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FBU"
        }), " is the collective short-form for \"FR/BR/UXR\" in narrative prose, headings, and short labels in scoped supporting docs (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " header, supporting-doc titles)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Individual issue identity remains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-NNN"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-NNN"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UXR-NNN"
        }), " — never ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FBU-NNN"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing identifiers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-board"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-structure"
        }), ") remain valid in legacy aliases and historical changelog text; they are not retroactively rewritten."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-status-transition-intent-mandatory",
      children: "2.6 Status transition intent (mandatory)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " IN PROGRESS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " Already satisfied at task creation (meta task filed as active governance work)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " Acceptance evidence recorded for all inherited ACs (including FR-073 AC3 closure evidence)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and board row status must update in the same release/session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation/release execution step (not planning-only IPP publication)."]
      }), "\n"]
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
            children: "Ownership rewiring"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UXR-008, FR-086, FR-073 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Implementing Task"
            }), " point to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E4:S19:T06"
            }), "; superseded lineage retained in each doc."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story/task supersede coherence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story 019 shows T06 active and T02/T05 superseded; T73 marked historical successor linkage."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board traceability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " rows for UXR-008/FR-086/FR-073 reference ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E4:S19:T06"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E4S19T6"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifact naming contract"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T06, FBU docs, and board use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-"
            }), " prefix for canonical planning artifact links; legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-"
            }), " references removed or explicitly compatibility-noted."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy path policy coverage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mapping table includes explicit disposition for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-board.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-open-taskless-queue.md"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All touched markdown links resolve (no dead links in touched docs)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-073 AC3 planning closure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP implementation waves contain explicit scoped UKW/statistics reconciliation step with evidence expectations."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The plan is organized as five sequential waves so each can be released atomically. Wave 1 (governance/wiring) is ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["complete and published as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.19.6+1"
        })]
      }), " by the RW that produced this IPP; Waves 2–4 are downstream TDD/RW build work; Wave 5 is the closing reconciliation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "41-wave-1--governance-supersede-and-ipp-wiring--done-v041961",
      children: ["4.1 Wave 1 — Governance, supersede, and IPP wiring  (DONE: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.19.6+1"
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
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File T06 meta task under Story 019"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 task doc with merged scope + ACs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mark T02/T05 as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SUPERSEDED"
            }), " and add successor anchor on T73"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical task docs preserved with redirect notes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rewire UXR-008/FR-086/FR-073 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Implementing Task"
            }), " to T06 with historical lineage preserved"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical implementing-task ownership in intake docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rewire Story 019 / Story 001 checklists and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " rows"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical board/story/task traceability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish this IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unified planning artifact for merged scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Migrate legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-E4S19T2-...md"
            }), " to canonical ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E4S19T2-...md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical artifact prefix used consistently; legacy file retained per compatibility policy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-wave-2--canonical-filename-migration-close-24-partialtodo-rows",
      children: "4.2 Wave 2 — Canonical filename migration (close §2.4 PARTIAL/TODO rows)"
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
            children: ["Strip embedded legacy body from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-board.md"
            }), "; reduce file to alias-only stub matching ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-structure.md"
            }), " shape"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-board.md"
            }), " is alias-only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rename ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-open-taskless-queue.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-open-taskless-queue.md"
            }), "; leave legacy filename as alias-only stub; rewire references"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical short-form path live; legacy alias retained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewire any cross-doc references that still point to legacy long-form paths in scope of this wave"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link integrity preserved"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-wave-3--terminology-contract-enforcement",
      children: "4.3 Wave 3 — Terminology contract enforcement"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apply collective ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FBU"
            }), " wording in scoped narrative docs (board headers, supporting-doc intros) without renaming individual issues"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated narrative prose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Verify no individual issue identity (", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-*"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "BR-*"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "UXR-*"
            }), ") was renamed"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity guardrail evidence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-wave-4--fr-073-ac3-closure-ukwstatistics-pass-under-t06-ownership",
      children: "4.4 Wave 4 — FR-073 AC3 closure (UKW/statistics pass under T06 ownership)"
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
            children: "4.1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run a scoped UKW (or equivalent statistics pass) covering MoSCOW taskless table + Board Statistics, using ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T06"
            }), " as the active governance reference where doc-only changes need an anchor"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DONE 2026-04-26 (scoped pass on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-open-taskless-queue.md"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " Board Statistics + MoSCOW taskless table accordingly; record evidence on T06 ACs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DONE 2026-04-26 (board statistics note + queue snapshot reconciliation + T06 AC6 evidence)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Flip FR-073 status from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PENDING"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CLOSED"
            }), " once AC3 evidence lands"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DONE 2026-04-26 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-073"
            }), " status and AC3 updated)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-wave-5--validation-and-stabilization",
      children: "4.5 Wave 5 — Validation and stabilization"
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
            children: "5.1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_plan_wiring.py"
            }), " across touched docs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ipw_publication_wiring.py --requested E4:S19:T06"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publication wiring confirmation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py --dry-run --mode full"
            }), " to confirm no path-resolution regressions"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dry-run diff summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mark T06 ACs satisfied and flip T06 status to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " via RW once Waves 2–4 land"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closing release"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-ac-traceability-matrix-inherited-fbutask-acs--t06-acs",
      children: "4.6 AC traceability matrix (inherited FBU/task ACs ↔ T06 ACs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Inherited AC (source)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapped T06 AC"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mapped IPP RF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolved by Wave"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-008 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical naming policy declared"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (policy) + 2 (execution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-008 AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration mapping published"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (mapping in §2.4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-008 AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward-compatibility behavior documented"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (§2.4 compatibility behavior)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UXR-008 AC6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-wiring consistency across task/story/UXR/boards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086 F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical naming map for supporting docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (§2.4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086 F2/F4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FBU"
            }), " collective terminology applied/disallowed contexts"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (§2.5) + 3 (enforcement)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086 F3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individual issue identity preserved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invariant per §1.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-086 F5/F6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-doc link rewiring + traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T05 AC1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical filename policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T05 AC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Old→new mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (§2.4 table)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T05 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Markdown link rewiring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T05 AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script/config path updates for renamed files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 + 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T05 AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward-compat migration guidance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (§2.4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T05 AC6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-wiring after migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T02 AC1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical naming map for supporting docs (FBU)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC3/AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2/RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T02 AC2/AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminology rules + identity preservation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (§2.5) + 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-073 AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UKW/statistics pass anchored to canonical task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 AC6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "47-files-touched-by-wave-1-already-published",
      children: "4.7 Files touched by Wave 1 (already published)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md"
        }), " (new)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E4S19T6-fbu-meta-normalization-and-intake-governance.md"
        }), " (new)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E4S19T2-canonical-supporting-kanban-fbu-doc-naming-and-terminology.md"
        }), " (new — canonical-prefix migration of legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW-E4S19T2-...md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/story-01-fr-repo.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
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
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_plan_wiring.py\""
        }), " — currently blocked by pre-existing unrelated issue (", (0,jsx_runtime.jsx)(_components.code, {
          children: "E5:S01:T75"
        }), " missing Host Task link); no new T06 wiring regressions observed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_ipw_publication_wiring.py\" --requested E4:S19:T06"
        }), " — passes (published Wave 1 used ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Publication Status: NOT_APPLICABLE"
        }), " per consolidated IPP model)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python3 \"packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py\" --dry-run --mode full"
        }), " — no path-resolution regressions for renamed files."]
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
        }), " ", "T06 exists and is the canonical implementing task for UXR-008, FR-086, FR-073."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T02 and T05 are marked superseded; T73 includes successor governance anchor."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " rows for UXR-008/FR-086/FR-073 point to T06 and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E4S19T6"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All touched docs use canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-"
        }), " artifact naming (legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW-E4S19T2-...md"
        }), " migrated to canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E4S19T2-...md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-board.md"
        }), " is reduced to alias-only stub (Wave 2)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br-uxr-open-taskless-queue.md"
        }), " is renamed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-open-taskless-queue.md"
        }), " with legacy alias retained (Wave 2)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-073 AC3 closure evidence recorded under T06 (Wave 4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T06 status flipped to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " after Waves 2–4 (Wave 5)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073",
          children: ["Host task E4:S19", ":T06"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption",
          children: "UXR-008"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology",
          children: "FR-086"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan",
          children: "FR-073"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T02-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology-fr086",
          children: "T02"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008",
          children: "T05"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T73-fr-br-uxr-board-open-taskless-intake-execution-plan",
          children: "T73"
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