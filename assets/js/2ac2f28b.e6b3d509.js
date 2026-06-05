"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89426"], {
92660(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_02_s_13_t_04_integration_dependency_alignment_md_2ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-02-s-13-t-04-integration-dependency-alignment-md-2ac.json
var site_docs_implementation_cycles_ipp_e_02_s_13_t_04_integration_dependency_alignment_md_2ac_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E02S13T04-integration-dependency-alignment","title":"E02:S13:T04 — Planning: Integration and Dependency Alignment (IPW)","description":"Host TaskS13:T04)","source":"@site/../docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S13:T03 — Planning: Workflow Behavior Validation (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T03-workflow-behavior-validation"},"next":{"title":"E02:S13:T05 — Planning: Gap Log and Risk Assessment (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S13 — Planning: Integration and Dependency Alignment (IPW)';

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
        id: "e02s13--planning-integration-and-dependency-alignment-ipw",
        children: ["E02:S13", ":T04", " — Planning: Integration and Dependency Alignment (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T04-review-integrations-and-dependency-alignment",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T04-review-integrations-and-dependency-alignment.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E02:S13", ":T04", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
        children: "T01 expectations baseline"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
        children: "T02 component inventory"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
        children: "T03 behavior validation"
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
            children: ["Review ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "hard dependencies"
            }), " (Git, Python, PyYAML, installer venv) against README + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " claims"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 §Modularity; README §Dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "soft dependency: Numbering & Versioning"
            }), " — version schema, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            }), ", SemVer conversion, task-touch/registry modes, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_converter.py"
            }), " contract"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T01 §Integration Expectations; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config-schema.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "soft dependency: Kanban"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use_kanban"
            }), ", path patterns, RW Step 7 four-surface contract, UKW bottom-up sync, intake ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_integration"
            }), ", FR/BR board paths"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T01 §Kanban; FR-092; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config-schema.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "three-way integration"
            }), " (Kanban ↔ Versioning ↔ RW) — installer Mode C, forensic traceability chain, version markers on kanban surfaces"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 §Complete Integration; README adoption scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "rw-config as integration hub"
            }), " — required/optional keys, mode A/B/C, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts_path"
            }), " adopter layout, semver/kanban toggles"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "config/rw-config-schema.md"
            }), "; E07 M1"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "cross-workflow integration surfaces"
            }), " — Intake→Kanban, PIR→RW/Kanban/Versioning, UKW→RW perpetual-task attribution, CMW Step 9.5, PVW Step 2.5, ECC harness (FR-098)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02 inventory §3; workflow-registry; FR-098"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "external service integration"
            }), " — GitHub release (", (0,jsx_runtime.jsx)(_components.code, {
              children: "create_github_release.py"
            }), "), optional GitHub Actions templates, Notion hub URL (if documented)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T01 §GitHub; component inventory §5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "adopter packaging integration"
            }), " — copy vs submodule vs CLI (", (0,jsx_runtime.jsx)(_components.code, {
              children: "framework-dependency-architecture.md"
            }), "), brownfield path mapping, portable excerpt install"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["README §Dependency Architecture; E02", ":S04"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Document alignment status per integration domain with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "severity"
            }), " (Critical/High/Medium/Low) and evidence — feeds T05 gap log"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story AC; E07 §5 taxonomy; T03 pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flesh out T04 task doc (scope, AC, inputs, references) and wire IPP bidirectionally"
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
              children: "Review-only"
            }), " — no package fixes, no shared-module refactors (deferred to T05/T06)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scope; T03 precedent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every PARTIAL/GAP row cites evidence (file path, config key, E07/T03 finding ID)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E07 report pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reuse T01 integration baseline + T02 inventory + T03 behavioral findings; extend with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "config/schema"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "doc cross-link"
            }), " checks"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T02/T03 companions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Companion report is evergreen; task doc holds executive summary + verification table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03 pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Distinguish ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "documented integration contract"
            }), " from ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "implementation cohesion"
            }), " (e.g. H3 kanban paths, M1 config loaders)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E07 §Integration alignment row"
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
        }), "; read-only config/schema/doc inspection and non-mutating validator invocations allowed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Package integration and dependency alignment vs T01 + live ai-dev-kit reference repo + E07 hypotheses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Behavioral validation (T03 — complete); consolidated gap log (T05); remediation implementation; RC sign-off criteria (T06); T01 baseline rewrite."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Produce an authoritative ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integration and dependency alignment report"
      }), " proving whether the Workflow Management package ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integrates as documented"
      }), " with hard/soft dependencies, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ", sibling frameworks (Kanban, Versioning), cross-workflow surfaces, and adopter packaging — distinguishing ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contract-aligned"
      }), " integration (docs + config schema) from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cohesion gaps"
      }), " (H3 kanban fragmentation, M1 config loaders, registry ", (0,jsx_runtime.jsx)(_components.code, {
        children: "common_components"
      }), " drift) — so T05 can consolidate severity-ranked remediation without re-discovering integration findings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nine validation domains in companion file:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard dependencies"
        }), " — README/installer claims vs actual imports and install docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning soft dependency"
        }), " — schema, validators, SemVer/task-touch, packaged KB policy paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban soft dependency"
        }), " — rw-config keys, Step 7/UKW/intake wiring, board paths (ADR-018)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Three-way stack"
        }), " — Mode C example configs, end-to-end traceability narrative"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "rw-config integration hub"
        }), " — schema completeness, mode definitions, adopter ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts_path"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-workflow integrations"
        }), " — registry-declared deps, PIR/intake/PVW/ECC surfaces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "External services"
        }), " — GitHub release, CI templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adopter packaging"
        }), " — copy/submodule/CLI, brownfield mapping, dual-source excerpts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E07/T03 crosswalk"
        }), " — map H3, M1, registry gaps to integration severity rows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each row: expected integration (T01/README/schema), observed (evidence), status ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ALIGNED"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PARTIAL"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GAP"
      }), ", severity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Housing: detailed matrix in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "integration-alignment-report.md"
        }), "; executive summary in T04 task doc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BR-097: post-ship verification prescribes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S13:T04 --art"
        }), " only."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README incorrectly cites RW Step 4 for Kanban (live spec: Step 7) — record as doc drift, do not fix in T04."
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
        }), " First non-planning implementation change lands (Step 1 of §4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " All AC satisfied; V1–V12 PASS; companion report published; forensic marker via RW."]
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
            children: "Single approach: companion report + task summary (T03 pattern)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc-only review; one-PR revert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confined to kanban/docs under story-13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-scoped review; T01 §Integration Expectations governs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new architectural choice — documents existing contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not alter RW/IPW/UKW gates or dependency policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extends T01/T03; no ADR contradiction"
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
            children: ["E02:S13", ":T03", " + E04:S16", ":T04", " pattern"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["T01 §Integration Expectations + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config-schema.md"
            }), " + E07 §Integration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§5.3 cites T01 + framework-dependency-architecture"
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
            children: "Hard deps documented"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["README §Dependencies + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " venv section scored ALIGNED/PARTIAL"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["rw-config schema vs live ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Required keys present; kanban keys when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "use_kanban: true"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fbu_board"
            }), " deprecated note"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning integration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py --strict --requested E02:S13:T04 --art"
            }), " exit 0; packaged ", (0,jsx_runtime.jsx)(_components.code, {
              children: "versioning-policy.md"
            }), " path exists"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban integration keys"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config-schema.md"
            }), " Mode C example vs ai-dev-kit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " path patterns"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three-way narrative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trace one release: version.py → changelog → kboard row → task doc marker (doc inspection)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-workflow registry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-registry.yaml"
            }), " integration/dependency fields vs nested README claims"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intake→Kanban"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "intake-workflow"
            }), " YAML ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_integration"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake_*.py"
            }), " board path resolution"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config loader fragmentation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Count ", (0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_config"
            }), " implementations; map to E07 M1"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban path fragmentation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["List RW Step 7 / UKW / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "update_kanban_docs.py"
            }), " entrypoints; map to E07 H3"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter packaging"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["README scenarios 1–3 vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "framework-dependency-architecture.md"
            }), " + install modes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECC optional integration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-098 spec + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ecc-adk-bridge.yaml.template"
            }), " presence; skills/README cross-link"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wiring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task ↔ IPP ↔ companion links resolve; story AC row ready for update"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " T04 is doc/config review — no new pytest suite. Executable checks are smoke validators (V3) and structural grep (V8–V9)."]
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
                children: "E02:S13:T04"
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
              children: "integration-alignment-report.md"
            }), " with nine validation domains + evidence template"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Companion artefact"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V1–V4 schema/config checks; capture paths and key tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §Hard/Soft/Config"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V5–V7 cross-workflow and three-way trace; document ALIGNED/PARTIAL/GAP per domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §Integration Matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run V8–V9 cohesion checks; cross-walk E07 H3, M1, registry ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common_components"
            }), " gap"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §Cohesion Crosswalk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V10–V11 adopter packaging + ECC optional surface review"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §Adopter Surfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish compliance summary + discrepancy table with severity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report §Summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flesh out T04: Scope, AC, Input, Deliverable, verification table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update Story 13 checklist + story AC (“Integration alignment reviewed”)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Story doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add pointer in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "component-inventory-map.md"
            }), " (optional)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run V12 verification checklist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc verification table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E02:S13:T04 --art"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release v0.2.13.4+1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Reconcile task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E02:S13:T04"
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
          children: "RW E02:S13:T04 --art"
        })
      }), " only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CREATE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CREATE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-13/.../integration-alignment-report.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T04-review-integrations-and-dependency-alignment.md"
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
        children: "T03 behavior report + E07 §Integration rows (inputs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run V1–V11 checks → populate companion report"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task doc + story → IPP wire → RW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps-optional",
      children: "4.3 Documentation implementation steps (optional)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Companion report (full matrix) before task executive summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story AC checkbox after task AC satisfied"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional inventory cross-link last"
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
              children: "T04-review-integrations-and-dependency-alignment.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scope, AC, summary, links"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF10, Step 8"
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
            children: "RF9, Step 9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T04 status/version on release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "component-inventory-map.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration report pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 10"
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
              children: "docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-13/.../integration-alignment-report.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed integration matrix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF9"
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
            children: "README Kanban Step 4 vs Step 7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — record as PARTIAL in report; README fix deferred T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Shared ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_config_loader"
            }), " module"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — E07 E1 remediation deferred T05/T06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban transform consolidation (H3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — deferred T05; cited in report crosswalk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Registry ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common_components"
            }), " dirs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — inventory gap; deferred T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "New ADR for integration housing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["NONE — EXEMPT per §2.5; governed by T01 + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "framework-dependency-architecture.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package README dependency matrix refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — alignment report notes drift; README edit deferred T05"
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
              children: "docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning artefact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T04 Input/References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-13/.../integration-alignment-report.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban companion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T04 Deliverable; T05 Input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T04 task doc"
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
            children: "T04 checklist"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housing rules:"
      }), " One authoritative doc per topic; companion report is SoT for integration matrix; T05 consumes discrepancy IDs from report §Summary."]
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
        }), " ", "Companion report with integration matrix + evidence for all nine domains"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task doc AC checkboxes + V1–V12 verification table"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "E07 H3/M1 and T03 D11/D9 crosswalk incorporated"]
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
        }), " ", "Bidirectional T04 ↔ IPP ↔ companion links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Story AC “Integration alignment reviewed and documented” satisfied on RW completion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Forensic marker via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S13:T04 --art"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All §5 UPDATE/CREATE items implemented or explicitly deferred with reason"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All §6 paths exist and are linked from task doc"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T04-review-integrations-and-dependency-alignment",
          children: "T04 task doc"
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
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
          children: "T03 behavior validation report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
          children: ["E07:S07", ":T01", " report"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/config/rw-config-schema.md",
          children: "rw-config-schema.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/framework-dependency-architecture",
          children: "framework-dependency-architecture.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration",
          children: "FR-098 ECC harness"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
          children: "FR-092 RW Step 7 kanban contract"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
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