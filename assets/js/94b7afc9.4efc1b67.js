"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["51657"], {
33847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_6_s_09_t_06_ecc_harness_phases_2_5_fr_098_md_94b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-6-s-09-t-06-ecc-harness-phases-2-5-fr-098-md-94b.json
var site_docs_implementation_cycles_ipp_e_6_s_09_t_06_ecc_harness_phases_2_5_fr_098_md_94b_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098","title":"E6:S09:T06 — Planning: ECC harness phases 2–5 (FR-098)","description":"Host TaskS09:T06)","source":"@site/../docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T17:05:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E6:S09:T05 — Planning: ADK ECC workflow skill pack (FR-098 Phase 1)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098"},"next":{"title":"E7:S01:T11 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T17:05:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E6:S09 — Planning: ECC harness phases 2–5 (FR-098)';

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
  "value": "4.3 Documentation implementation steps",
  "id": "43-documentation-implementation-steps",
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
  "value": "7.1 Phases 2–5 delivery gate (closed)",
  "id": "71-phases-25-delivery-gate-closed",
  "level": 3
}, {
  "value": "7.2 Wave E — public rebirth validation (open)",
  "id": "72-wave-e--public-rebirth-validation-open",
  "level": 3
}, {
  "value": "8. Post-delivery validation plan (Wave E — FR-099 public rebirth)",
  "id": "8-post-delivery-validation-plan-wave-e--fr-099-public-rebirth",
  "level": 2
}, {
  "value": "8.1 Repository roles",
  "id": "81-repository-roles",
  "level": 3
}, {
  "value": "8.2 Sequencing (depends on FR-099)",
  "id": "82-sequencing-depends-on-fr-099",
  "level": 3
}, {
  "value": "8.3 Evidence pack (minimum)",
  "id": "83-evidence-pack-minimum",
  "level": 3
}, {
  "value": "8.4 Outcomes and doc updates",
  "id": "84-outcomes-and-doc-updates",
  "level": 3
}, {
  "value": "8.5 Cheatsheet alignment",
  "id": "85-cheatsheet-alignment",
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
        id: "e6s09--planning-ecc-harness-phases-25-fr-098",
        children: ["E6:S09", ":T06", " — Planning: ECC harness phases 2–5 (FR-098)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T06-ecc-harness-phases-2-5-fr098.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E6:S09", ":T06", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
        children: "FR-098 — Optional ECC harness layer integration"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Phases 2–5 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "delivered"
      }), " — host task ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLETE"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+3"
      }), "); FR-098 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPLEMENTED"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave E"
      }), " (public-repo ECC validation) ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "planned"
      }), " — blocked on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
        children: "FR-099"
      }), " Phase 3."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Produced 2026-05-26 per ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), ". Host task was ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S09", ":T05"]
        }), " invocation; T05 is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " (Phase 1); this package anchors ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "phases 2–5"
        }), " on ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S09", ":T06"]
        }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Releases (T06):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.6+2"
        }), " — Waves A–D (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW --art"
        }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.6+3"
        }), " — maintainer dogfood T8 dry-run (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW --art"
        }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.6+0"
        }), " — IPP §7 closure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -d --doc-policy-zero"
        }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.6+4"
        }), " — cheatsheet §3 throwaway E2E playbook (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -d --art"
        }), ")."]
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
            children: ["Optional ECC install step in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "greenfield"
            }), " path (FR-080) and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "brownfield"
            }), " guidance (FR-081); clearly non-blocking for ADK-only adopters"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098-F5, T06 AC Phase 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bridge workflow: copy ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ecc-adk-bridge.yaml.template"
              })
            }), " → project-root ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml"
            }), "; pin ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc_version_pin"
            }), "; document ", (0,jsx_runtime.jsx)(_components.code, {
              children: "minimal"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "core"
            }), " profile naming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098-F3, spec §7–§8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate bridge fields including ", (0,jsx_runtime.jsx)(_components.code, {
              children: "adk_skill_pack_path"
            }), " alignment with T05 skill pack"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05 validator, RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hook defaults: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hook_profile: minimal"
            }), ", hooks-off install discipline; populate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "disabled_hooks"
            }), " from Phase 0 conflict-resolve (RW/git)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spec §8, Phase 0 eval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Document SessionStart context hook and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "advisory"
            }), " pre-RW quality gate (ECC hooks do not replace ADK validators)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Roadmap phase 3, T06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional AgentShield documented as RW Step 9 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "add-on"
            }), "; failures non-blocking; ADK Step 9 scripts remain authoritative"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spec §4, T06 AC Phase 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-098-F6:"
            }), " Layered architecture (ADK project OS; ECC harness OS) in user-docs + cheatsheet cross-links"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098-F6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 5 book/public positioning sidebar (Head First AI-Assisted Development) linked from cheatsheet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098 phased table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deterministic validators + pytest for bridge YAML and install manifest (extend or sibling to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_adk_ecc_skill_pack.py"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05 pattern, RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-world validation"
            }), " on public ADK repo after ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
              children: "FR-099"
            }), " Phase 3: greenfield install, then cheatsheet §3 (including optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--execute"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave E, maintainer plan 2026-05-26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Capture ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "usage evidence + feedback"
            }), " (UXR and/or FR) from public-repo pass; link to ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E1:S04", ":T07"]
            }), " and/or follow-on E6 task"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave E"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prove ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-only"
            }), " path on public tree (FR-099-F6) ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "before"
            }), " ECC overlay; ECC remains optional afterward"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099-NF2, RNF1"
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
            children: ["Integration remains ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "optional"
            }), "; zero-ECC ADK regression documented"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098-NF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PATCH-only"
            }), " SemVer per FR-098 phase under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "task_touch"
            }), "; no MINOR for ECC phases alone"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098-NF5, spec §9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single ECC install path (", (0,jsx_runtime.jsx)(_components.code, {
              children: "single_install_path: true"
            }), "); no plugin + full installer stacking"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spec §8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No duplicate RW/UKW/IPW triggers from default ECC minimal install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098 AC5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upstream ECC obtained by adopters under MIT license; no vendoring ECC in-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spec §1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Public validation repo must be ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "framework-only"
            }), " genesis (no Epic 24 / book paths); private ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit-book",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hf-ai-dev-kit"
              })
            }), " is not the execute testbed"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099, ADR-006"
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
        }), " ADK owns RW/UKW/IPW/git/version/Kanban; ECC defers per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "conflict_rules"
        }), " in bridge template; T05 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "adk-*"
        }), " skills remain authoritative workflow surface."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Phases 2–5 per ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification",
          children: "integration spec §10"
        }), "; ordered waves in one task (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T06"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Re-shipping Phase 1 skills; ECC Pro; mandatory ECC; replacing blocking RW Step 9 validators; live ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npx ecc-install"
        }), " in CI without opt-in gate; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["full ECC overlay on canonical ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RMS-Ltd/ai-dev-kit-book"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "dev"
          })]
        }), " (framework source — dry-run only there)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Post-delivery (Wave E):"
        }), " Real ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ecc-install --execute"
          })
        }), " and adopter feedback on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new public"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " after FR-099 genesis — see §8."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable adopters to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optionally"
      }), " install ECC alongside ADK with a validated bridge file, safe hook defaults, documented AgentShield add-on, and clear layered-architecture positioning—without weakening ADK governance or FR-080/FR-081 closure criteria."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maps to"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary artifacts"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave A (Phase 2)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF3, RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Install doc section; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_ecc_harness_optional.sh"
            }), " or equivalent procedure doc; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ecc_adk_bridge.py"
            }), " + pytest"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave B (Phase 3)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4–RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bridge template ", (0,jsx_runtime.jsx)(_components.code, {
              children: "disabled_hooks"
            }), " examples; cheatsheet § hooks; spec §8 update"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave C (Phase 4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6, RNF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/.../ecc-agentshield-rw-step9-bridge.md"
            }), " (or KB subsection); RW agent guide add-on note"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave D (Phase 5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7–RF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheatsheet architecture section; FR-098-F6 closure; book sidebar stub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave E (post-delivery)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF10–RF12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public reborn repo: greenfield ADK + optional ECC execute + FR/UXR feedback"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installer step must not block ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080",
          children: "T01 FR-080"
        }), " acceptance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Brownfield path references ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        }), " optional surfaces only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["kboard MoSCOW rows must avoid bare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " token in row text (UKW prune); use “Phase 1 shipped” wording for T05 references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ECC profile pin must match documented package (", (0,jsx_runtime.jsx)(_components.code, {
          children: "minimal"
        }), " on GitHub rc vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "core"
        }), " on npm 1.10.0 — spec §8)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
      children: "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.6+3"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " First non-planning implementation change (Wave A file creation or script) — done at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.6+2"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " All T06 acceptance criteria satisfied with validator/pytest PASS and dogfood checklist recorded — done at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.6+3"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and kboard row for ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S09", ":T06"]
        }), " update in same RW Step 7 session — done (T06/FR-098 archived from Must Have)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution (not this IPW session)."]
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
            children: "Installer: script vs doc-only vs brownfield-only deferral"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter bridge + hooks state not trivially one-revert for all hosts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install docs, validators, hooks, optional RW Step 9 surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical ECC+ADK adoption path for Story 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AgentShield security vs RW validator authority; hook operability vs git policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-RW hook and Step 9 add-on touch RW boundary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extends existing integration spec; no ADR contradiction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRED"
      }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPDATE"
      }), " existing normative docs (no new ADR): ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification",
        children: "integration spec"
      }), " §10–§11; light ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPDATE"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
        children: "ADR-003"
      }), " optional ECC surface note."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exemption block not used (T1–T7 not all N)."
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
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated (REQUIRED)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible in one task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec elsewhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not evaluated"
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
            children: "Maps to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge template YAML schema"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ecc_adk_bridge.py"
            }), " exit 0 on repo template"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2, RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Invalid bridge (missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "conflict_rules"
            }), ", bad ", (0,jsx_runtime.jsx)(_components.code, {
              children: "adk_skill_pack_path"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest negatives; exit non-zero"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "adk_skill_pack_path"
            }), " matches T05 canonical path"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cross-check with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_adk_ecc_skill_pack.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install procedure dry-run"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fixture repo or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--dry-run"
            }), " flag; no network in default CI"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1, RNF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docs link integrity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheatsheet links to spec §8 procedure; FR-080 optional step present"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1, RF7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hooks documentation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bridge ", (0,jsx_runtime.jsx)(_components.code, {
              children: "disabled_hooks"
            }), " includes git-workflow deferral example"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AgentShield doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "States non-blocking; lists ADK Step 9 scripts as authoritative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dogfood (manual)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Maintainer repo: disposable branch, dry-run + bridge validators (", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["no ", (0,jsx_runtime.jsx)(_components.code, {
                children: "--execute"
              }), " on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "hf-ai-dev-kit"
              }), " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "dev"
              })]
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RNF1 — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "throwaway/ecc-dogfood-e6s09t06"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public-repo dogfood (manual)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Clone ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "public"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            }), " post–Phase 3; ADK-only smoke, then ECC §3 playbook with optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--execute"
            }), " on feature branch"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RF10–RF12 — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "pending"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--skip-tests"
        }), ":"]
      }), " Not used — installer/bridge/hooks warrant automated validation."]
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
              children: ["[MANDATORY] Transition E6:S09", ":T06", " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), " in task doc; update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc status"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave A:"
            }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_ecc_adk_bridge.py"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_validate_ecc_adk_bridge.py"
            }), "; extend or document bridge validation in skills README"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator PASS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave A:"
            }), " Add optional ECC install procedure (", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh"
            }), " or KB guide with equivalent steps)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1 script/doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave A:"
            }), " UPDATE greenfield install docs + T01 cross-link; FR-098-F5 partial closure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave A:"
            }), " UPDATE cheatsheet §3–5 (installer + bridge copy steps)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cheatsheet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave B:"
            }), " Populate bridge template ", (0,jsx_runtime.jsx)(_components.code, {
              children: "disabled_hooks"
            }), " examples; document ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hook_profile"
            }), " / SessionStart / pre-RW advisory"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "spec §8, RF4–RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave C:"
            }), " CREATE AgentShield RW Step 9 bridge doc; UPDATE release-workflow agent execution (add-on subsection, non-blocking)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave D:"
            }), " UPDATE cheatsheet + user-docs for FR-098-F6; add book positioning sidebar section"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7–RF8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave D:"
            }), " UPDATE integration spec §10 task anchors to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T06"
            }), "; UPDATE FR-098 notes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traceability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW per wave or at end: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E6:S09:T06"
            }), " with Step 7 four-surface (T06 kboard row replaces T05 phases-2–5 anchor)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "11"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY] Reconcile T06 status"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), " when all ACs satisfied; else ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc + boards — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "done"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "v0.6.9.6+3"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave E — prerequisite:"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
              children: "FR-099"
            }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E1:S04", ":T06"]
            }), " (public rebirth) + ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E1:S04", ":T07"]
            }), " (rewire + install smoke)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public clone ready"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave E — execute:"
            }), " On public clone, run ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet#throwaway-branch-playbook-end-to-end",
              children: "cheatsheet §3 Throwaway branch playbook"
            }), "; allow step 4 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--execute"
            }), " on feature branch"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Real ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/"
            }), " footprint"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave E — feedback:"
            }), " File UXR/FR with evidence pack (§8.3); optional cheatsheet/install tweaks via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter-grade signal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CREATE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_ecc_adk_bridge.py"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KB/.../ecc-optional-install.md"
        }), " if script deferred)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UPDATE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/skills/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "../documentation/user-docs/ecc-adk-integration-cheatsheet.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md"
        }), " (§10–§11)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md"
        }), " (optional ECC note)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " (AgentShield add-on)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Greenfield install surfaces (T01 doc paths / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), " as applicable)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md"
        }), " (F5/F6 status)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task T06, Story 009, Epic 6 (at RW)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NONE (justified):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/skills/adk-*/SKILL.md"
        }), " — T05 owns Phase 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wave A validator before install doc claims “validated bridge”"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wave A install docs before Wave B hooks (hooks assume bridge exists)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wave C after Wave B (hooks policy stable before AgentShield add-on)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wave D positioning after Waves A–C (accurate feature list)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban board T06 row at first implementation RW (not IPW)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps",
      children: "4.3 Documentation implementation steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration spec §10 T06 anchors (Wave D step 9, can draft earlier)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validator + install procedure (Wave A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cheatsheet installer/bridge/hooks (Waves A–B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AgentShield bridge KB (Wave C)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-098-F6 + book sidebar (Wave D)"
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
            children: "Tied to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§10 task column → T06; §11 hooks/AgentShield pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4–RF6, ADR REQUIRED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional ECC harness surface paragraph"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1, T1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "../documentation/user-docs/ecc-adk-integration-cheatsheet.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installer, bridge, hooks, AgentShield, architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/config/ecc-adk-bridge.yaml.template"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "disabled_hooks"
            }), " examples, comments"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/skills/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge path + validator commands"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/.../release-workflow-agent-execution.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 9 AgentShield add-on (non-blocking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/FR-098-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F5/F6 checkboxes when waves land"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1, RF7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 / install docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional ECC step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06, Story 009 task docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status, version, AC checkboxes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "impl steps 1, 11"
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
            children: "Proposed path"
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
              children: "docs/implementation-cycles/IPP-E6S9T6-ecc-harness-phases-2-5-fr098.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bridge validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_ecc_adk_bridge.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional install helper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AgentShield add-on contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
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
            children: "ECC upstream version drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document pins in bridge + evaluation appendix; no in-tree ECC vendor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 1 skills"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — T05 IPP remains historical SoT"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kboard T06 row"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CREATE at RW"
            }), " — IPW does not modify boards (plan § Phase 0 intake)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New standalone ADR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — integration spec + ADR-003 UPDATE per §2.5 REQUIRED"]
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
            children: "Inbound links to add"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E6S9T6-ecc-harness-phases-2-5-fr098.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06 Input, References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2–C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/*ecc_adk_bridge*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "skills README, IPP §7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/install/install_ecc_harness_optional.sh"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cheatsheet, T01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/KB/.../ecc-agentshield-rw-step9-bridge.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "release-workflow guide, cheatsheet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-098, T06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "../documentation/user-docs/ecc-adk-integration-cheatsheet.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README or install hub"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Verified at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+3"
      }), " (2026-05-26)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All T06 acceptance criteria in host task doc satisfied"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ecc_adk_bridge.py"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_adk_ecc_skill_pack.py"
        }), " both PASS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "pytest modules for bridge (and existing skill pack) green in CI/local"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-098-F5 and FR-098-F6 closable with evidence links (FR-098 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMPLEMENTED"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Integration spec §10 lists T06 for phases 2–5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "No ADK-only regression: documented zero-ECC path unchanged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Dogfood checklist completed on disposable branch ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throwaway/ecc-dogfood-e6s09t06"
        }), " (dry-run only; T8)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All §5 UPDATE/CREATE items implemented (D-U2 ADR-003 optional ECC note; no §5 deferrals)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task ↔ IPP bidirectional links present"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-phases-25-delivery-gate-closed",
      children: "7.1 Phases 2–5 delivery gate (closed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All items in §7 above — verified ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+3"
      }), " through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.6+4"
      }), " (docs)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-wave-e--public-rebirth-validation-open",
      children: "7.2 Wave E — public rebirth validation (open)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "FR-099 Phase 3: public ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " exists from book-free genesis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "FR-099 Phase 4: ADK-only greenfield install + RW/UKW smoke ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "without"
        }), " ECC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "ECC §3 playbook on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "public"
        }), " clone (dry-run reviewed; optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--execute"
        }), " on disposable branch)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Evidence pack (§8.3) recorded; UXR and/or FR filed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Cheatsheet/install updated from findings (if any) via doc-only RW"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-post-delivery-validation-plan-wave-e--fr-099-public-rebirth",
      children: "8. Post-delivery validation plan (Wave E — FR-099 public rebirth)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Maintainer dogfood on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        })
      }), " (T8) validated scripts and docs with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dry-run only"
      }), " — correct for the framework source repo. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "real adopter test case"
      }), " is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new public AI Dev Kit"
      }), " tree after ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
        children: "FR-099"
      }), " Phase 3 rebirth: framework-only, no book IP, matches FR-080 greenfield intent and FR-098 optional ECC positioning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-repository-roles",
      children: "8.1 Repository roles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Repo"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ECC policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RMS-Ltd/ai-dev-kit-book"
              })
            }), " (private)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Dry-run + validators"
            }), " on throwaway branches; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no"
            }), " merge of full ECC ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/"
            }), " overlay into ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ship frameworks, cheatsheet, validators, skill pack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RMS-Ltd/ai-dev-kit"
              })
            }), " (public, post–Phase 3)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Full cheatsheet §3"
            }), " including optional ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ecc-install --execute"
              })
            }), " on a feature branch"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real usage, collisions, hooks/git risk, adopter feedback"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-sequencing-depends-on-fr-099",
      children: "8.2 Sequencing (depends on FR-099)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n  P2[Phase 2 genesis hf]\n  P3[Phase 3 public rebirth]\n  ADK[ADK-only install smoke]\n  ECC[Cheatsheet §3 + execute]\n  FB[UXR or FR feedback]\n  P2 --> P3 --> ADK --> ECC --> FB\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner / anchor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T05-fr099-phase2-book-extraction-genesis",
              children: ["E1:S04", ":T05"]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Phase 2 genesis ✅ on private ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " tree"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099 Phase 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "public"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            }), " from genesis (no pre-genesis book objects on public remote)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099 Phase 4 / FR-080"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Clone public repo; greenfield ADK install per ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), "; verify RW, UKW, validators ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "without"
            }), " ECC"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave E (this plan)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Feature branch on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "public"
            }), " clone; run ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet#throwaway-branch-playbook-end-to-end",
              children: "cheatsheet §3"
            }), " through validators; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "optionally"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--execute"
            }), " after dry-run review"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File feedback; link from FR-098 notes or new intake task"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Suggested task home for Wave E execution:"
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E1:S04", ":T07"]
      }), " verification checklist ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "or"
      }), " new ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E6", ":S09"]
      }), " follow-on task (intake via IPW if implementation/doc RW required)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-evidence-pack-minimum",
      children: "8.3 Evidence pack (minimum)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Record in UXR/FR or task notes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Public repo URL + commit/branch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit@…"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "feature/ecc-validation-…"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc_version_pin"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["npm ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-universal@…"
            }), " tested"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dry-run op count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["e.g. ~342 on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "core"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--without baseline:hooks"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hooks in plan despite exclusion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Y/N; list ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/hooks/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hooks.json"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "common-git-workflow.mdc"
            }), " (or similar)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Present in plan Y/N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--execute"
            }), " run"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Y/N; summary of ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/"
            }), " delta"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ADK smoke after ECC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPW"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d"
            }), " trivial task still respects RW-only git"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verdict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK-only OK / ECC optional acceptable / blockers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-outcomes-and-doc-updates",
      children: "8.4 Outcomes and doc updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Verdict"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PASS — acceptable optional path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Note in FR-098 + cheatsheet §10; close Wave E in IPP §7.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hooks/git risk"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update bridge ", (0,jsx_runtime.jsx)(_components.code, {
              children: "disabled_hooks"
            }), ", cheatsheet §8; no default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--execute"
            }), " in INSTALL"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cheatsheet gaps"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Patch ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet",
              children: "ecc-adk-integration-cheatsheet.md"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d"
            }), " on follow-on task"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blocker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR with repro; do not recommend ECC on public ADK until resolved"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-cheatsheet-alignment",
      children: "8.5 Cheatsheet alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "§3 Throwaway branch playbook"
        }), " — canonical procedure for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "any"
        }), " repo (maintainer dry-run vs public execute)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Planned cheatsheet addendum (Wave E doc pass):"
        }), " callout that ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "preferred real-world validation target"
        }), " = public reborn ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " (FR-099 Phase 3), not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hf-ai-dev-kit"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
          children: "FR-098"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T06-ecc-harness-phases-2-5-fr098",
          children: "T06 host task"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098",
          children: "T05 Phase 1 IPP"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098",
          children: "IPP-E6S9T4 Phase 0"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification",
          children: "Integration specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation",
          children: "Phase 0 evaluation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042 IPW"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
          children: "FR-099 — Public repo spin-off"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T06-fr099-phase3-public-ai-dev-kit-rebirth",
          children: ["E1:S04", ":T06", " — FR-099 Phase 3"]
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T07-fr099-phase4-rewire-and-verify",
          children: "T07 Phase 4"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
          children: "ADR-006 — Book private spin-off"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/documentation/user-docs/ecc-adk-integration-cheatsheet",
          children: "ECC + ADK cheatsheet §3"
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