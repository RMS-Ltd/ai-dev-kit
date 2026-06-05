"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["63858"], {
6337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_06_s_07_t_107_ide_command_whitelist_optimization_md_7df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-06-s-07-t-107-ide-command-whitelist-optimization-md-7df.json
var site_docs_implementation_cycles_ipp_e_06_s_07_t_107_ide_command_whitelist_optimization_md_7df_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization","title":"E06:S07:T107 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS07:T107)","source":"@site/../docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T23:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E05:S09:T14 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication"},"next":{"title":"E06:S09:T07 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T23:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E06:S07 — Planning: Spec, Tests, Implementation Plan (IPW)';

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
  "value": "1.4 Draft artifact gap (baseline)",
  "id": "14-draft-artifact-gap-baseline",
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
  "value": "2.4 Status transition intent (mandatory)",
  "id": "24-status-transition-intent-mandatory",
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
  "value": "3.1 RW mini-sequence (UAT T7)",
  "id": "31-rw-mini-sequence-uat-t7",
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
  "value": "IPW complete (planning)",
  "id": "ipw-complete-planning",
  "level": 3
}, {
  "value": "Implementation complete (future)",
  "id": "implementation-complete-future",
  "level": 3
}, {
  "value": "Enforcement model (reference)",
  "id": "enforcement-model-reference",
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
        id: "e06s07--planning-spec-tests-implementation-plan-ipw",
        children: ["E06:S07", ":T107", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T107-ide-command-whitelist-optimization.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E06:S07", ":T107", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " Developer-experience / agent terminal approval friction (no dedicated FR; complements ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker",
        children: "BR-039"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved (implementation complete 2026-05-30 — release via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E06:S07:T107"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW:"
        }), " Produced 2026-05-30 for E06:S07", ":T107", ". Bidirectional wiring to task ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Input"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "References"
        }), " is mandatory before implementation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-042"
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
            children: ["Document friction taxonomy: concrete command strings, version tokens (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.7.101+33"
            }), "), path variants, RW/UKW validator invocations"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 AC1, Problem Statement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern-based whitelist configuration maintained as version-controlled SoT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 AC2, AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Generalize high-frequency patterns: Python validation/framework scripts, git RW subset, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gh"
            }), ", project-scoped ", (0,jsx_runtime.jsx)(_components.code, {
              children: "find"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "grep"
            }), ", semver/version helpers"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 AC3, Command Patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Team guide for pattern maintenance, security context, and Cursor integration (honest enforcement model)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 AC6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Automated validation: each pattern matches documented ", (0,jsx_runtime.jsx)(_components.code, {
              children: "examples"
            }), " and rejects documented negatives"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 AC2, AC5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual UAT: before/after approval prompt count on representative RW mini-sequence; append-only evidence log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 AC5, AC7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wire T107 ↔ IPP ↔ ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            }), " ↔ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-guide.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 Deliverables, FR-042"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
              children: "FR-050"
            }), " incorrect implementing-task link (not T107)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW intake defect"
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Security:"
            }), " No unbounded ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".*"
            }), " on destructive commands (", (0,jsx_runtime.jsx)(_components.code, {
              children: "rm"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git push --force"
            }), ", etc.); document ", (0,jsx_runtime.jsx)(_components.code, {
              children: "high_security"
            }), " patterns and review gate"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 Risks, guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability:"
            }), " No hardcoded maintainer home paths in committed YAML; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{PROJECT_ROOT}"
            }), " placeholder + documented substitution"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Draft YAML ", (0,jsx_runtime.jsx)(_components.code, {
              children: "find_operations"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Honesty:"
            }), " Do not claim YAML auto-approves in Cursor unless product integration is proven; changelog uses “attempted” language for IDE behavior"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-039 guardrails, T107 Out of Scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Adopter copy:"
            }), " Patterns and guide copyable to other ADK adopters with path substitution"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "story-007 in-scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Validator CI:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_whitelist_patterns.py"
            }), " exits non-zero on failure; pytest module in framework scripts tree"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADK convention"
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
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            }), " remains the pattern catalog SoT."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW/IPW/UKW workflow gates and validators are unchanged by this task."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Cursor is the primary maintainer IDE (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker",
              children: "T57"
            }), " closure policy)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Pattern catalog refinement, repo validator + tests, maintainer playbook for Cursor Auto-Run/allowlist, UAT log, ADR-013 policy, FR-050 link correction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Fixing Cascade/Windsurf product whitelist (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker",
              children: "BR-039"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPW-E6S06T57-br039-vendor-blocker-planning",
              children: "IPW-E6S6T57"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IDE vendor code changes (T107 Out of Scope)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FR-050 workflows directory reorganization delivery."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cross-IDE parity (T107 Out of Scope)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optional Cursor hooks spike — record pass/fail in UAT log only; not a closure dependency unless spike succeeds."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-draft-artifact-gap-baseline",
      children: "1.4 Draft artifact gap (baseline)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draft v1.0 (2026-03-07)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hardcoded absolute ", (0,jsx_runtime.jsx)(_components.code, {
              children: "find"
            }), " path; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "settings.auto_approve_*"
            }), " not wired to Cursor; no RW-specific patterns (semver, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gh"
            }), ", board validators)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Draft"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“IDE integration testing” / “team training” unchecked"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/validate_whitelist_patterns.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC5 automation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-uat-log.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AC5/AC7 evidence"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Provide maintainers a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repeatable, version-controlled regex pattern catalog"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verification tooling"
      }), " so RW/UKW terminal command shapes need fewer one-off approvals in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cursor"
      }), ", using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "catalog + validator + maintainer playbook"
      }), " enforcement model—without claiming to fix vendor whitelist bugs (BR-039) or auto-approving via YAML alone."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping",
      children: "2.2 Specification mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "RF"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Specification element"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Friction taxonomy section in guide § “Friction analysis”; examples in UAT log baseline entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2–RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YAML ", (0,jsx_runtime.jsx)(_components.code, {
              children: "patterns:"
            }), " entries with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pattern"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "description"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "examples"
            }), ", optional ", (0,jsx_runtime.jsx)(_components.code, {
              children: "negative_examples"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide § “Cursor integration” + § “Security contexts”; link ADR-013"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_whitelist_patterns.py"
            }), " + pytest"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ide-whitelist-uat-log.md"
            }), " schema (date, scenario, prompts_before, prompts_after, result)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task Input/References; IPP §6 inbound links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["FR-050 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Implementing Task"
            }), " → TBD (remove T107); note in FR body"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "out of scope"
        }), " excludes patching Cursor IDE code; enforcement is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "maintainer-operated"
        }), " (translate patterns into Cursor allowlist UI / Auto-Run settings per product docs at implementation time)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pattern breadth must balance RNF1 (security) vs AC7 (friction reduction); prefer narrow patterns over ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".*"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "{PROJECT_ROOT}"
        }), " in YAML is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "documentation placeholder"
        }), "; validator substitutes repo root at test time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory",
      children: "2.4 Status transition intent (mandatory)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition to IN PROGRESS:"
        }), " First non-planning implementation change (IPP alone does not trigger)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition to COMPLETE:"
        }), " All T107 AC1–AC7 satisfied with linked evidence (validator green + UAT log entry + guide updated)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation:"
        }), " Task doc status and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " row updated in same RW Step 7 session when closing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution per §4 Step 1 and final step."]
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catalog-only vs validator-only vs hook automation vs manual Cursor UI only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revert YAML + script + docs in one PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Confined to ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/"
            }), ", one validation script"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future ADK/RW sessions will cite allowlist catalog approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit security vs agent-ergonomics trade for git/terminal patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not alter RW/IPW/UKW steps or global gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No existing ADR on IDE allowlist catalog"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRED"
      }), " — create ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement",
        children: "ADR-013"
      }), " during implementation (§5 D10)."]
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
            children: "Not evaluated (≥1 trigger Y)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible in one task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec elsewhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--skip-tests"
        }), ":"]
      }), " Not used — mixed automated + manual UAT."]
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
            children: "Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML schema"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Required keys per pattern (", (0,jsx_runtime.jsx)(_components.code, {
              children: "pattern"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "description"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "examples"
            }), "); valid regex compile"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2, RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Positive examples"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Every ", (0,jsx_runtime.jsx)(_components.code, {
              children: "examples[]"
            }), " entry matches its pattern"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3, RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative examples"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Every ", (0,jsx_runtime.jsx)(_components.code, {
              children: "negative_examples[]"
            }), " entry does ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " match"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5, RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path portability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/Users/"
            }), " or other home-specific absolute paths in committed patterns"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW fixture coverage"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Parametrized commands from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_changelog_format.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_kanban_state_icons.py"
            }), " invocations match intended patterns"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangerous breadth"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lint rejects patterns matching ", (0,jsx_runtime.jsx)(_components.code, {
              children: "^git push.*--force"
            }), " under low-security auto rules (if documented)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual UAT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainer runs 10-command RW subset in Cursor; records prompt counts in UAT log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6, AC5, AC7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-rw-mini-sequence-uat-t7",
      children: "3.1 RW mini-sequence (UAT T7)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \".../validate_branch_context.py\" --strict"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \".../validate_rw_task_complete.py\" --requested \"E06:S07:T107\""
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \".../validate_kanban_state_icons.py\" --strict"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "git status"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git add -A"
        }), " (dry-run mindset — or status only if preferred)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python \".../semver_converter.py\" \"0.6.7.107+1\""
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Record ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prompts_before"
      }), " (baseline session) vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prompts_after"
      }), " (after applying Cursor allowlist from catalog)."]
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
              children: ["[MANDATORY] Transition E06:S07", ":T107", " ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), " in task doc; set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Started"
            }), " date; update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), "."]
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Research spike:"
            }), " Document current Cursor command allowlist / Auto-Run / sandbox behavior (product docs + maintainer notes)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide § “Cursor integration”; UAT log spike entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CREATE"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement",
              children: "ADR-013"
            }), ": catalog SoT, enforcement model (catalog + validator + manual Cursor), security rules, BR-039 boundary."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-013 Accepted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{PROJECT_ROOT}"
            }), "; RW patterns; move non-enforceable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "settings.*"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "recommended_maintainer_settings"
            }), " (documentation-only); add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "negative_examples"
            }), " where useful."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "YAML v1.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CREATE"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py"
            }), " (load YAML from repo root ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            }), ")."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator CLI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CREATE"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-guide.md"
            }), ": friction taxonomy, integration truth table, validator usage, ADR-013 link."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide v1.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CREATE"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-uat-log.md"
            }), " (append-only; T57-style fields)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UAT log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
              children: "FR-050"
            }), ": remove T107 from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Implementing Task"
            }), "; set TBD intake note."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR wiring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker",
              children: "BR-039"
            }), ": complementary link to T107 / guide (does not fix product)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
              children: "workflow-initiation-cheatsheet.md"
            }), " or ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
              children: "AGENTS.md"
            }), ": one-line pointer to guide under agent friction (if warranted)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discoverability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run validator + pytest; complete UAT T7; tick T107 AC1–AC7 with evidence links."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§7 checklist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E06:S07:T107"
              })
            }), " — version, changelog, four-surface kanban."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "14"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY] Reconcile T107 status"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), " if all ACs met; else ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), " with reason."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task + kboard"
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
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-uat-log.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/.../T107-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE (status, AC checkboxes, IPP links)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/FR-050-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/BR-039-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE (optional cross-link)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE (developer-tools pointer, if section exists)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-013 (decision record) before broadening git patterns in YAML."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "YAML structure before validator (validator reads YAML)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validator green before UAT “after” measurement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW after all evidence attached to task doc."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps",
      children: "4.3 Documentation implementation steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-013 → YAML → validator → guide → UAT log → task AC ticks → RW."
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
              children: "docs/project-management/kanban/.../T107-ide-command-whitelist-optimization.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input/References → IPP; AC evidence; status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7, Step 1/14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable paths, RW patterns, schema cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2–RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integration truth, validator, friction taxonomy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1, RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/FR-050-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remove incorrect T107 implementing link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/BR-039-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complementary T107 pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link developer-tools guide (if index present)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
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
              children: "docs/implementation-cycles/IPP-E6S7T107-ide-command-whitelist-optimization.md"
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
              children: "docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allowlist policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§2.5 REQUIRED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-uat-log.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UAT evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/test_validate_whitelist_patterns.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pytest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF5"
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
            children: "Docusaurus portal surface"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — maintainer-local docs; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NOT_APPLICABLE"
            }), " per BR-066"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate inline T107 “Implementation Plan” phases"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UPDATE"
            }), " task doc → “see IPP §4”"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR dedicated to whitelist"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — DX task; BR-039 covers vendor track"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Windsurf/Cascade guide"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — out of scope per T107"]
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
            children: "Publication N/A reason"
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
              children: "docs/implementation-cycles/IPP-E6S7T107-ide-command-whitelist-optimization.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning package; task-linked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 Input, References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR index via governance README"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide, IPP §2.5, governance README"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-uat-log.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainer evidence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107 References, guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDE-adjacent config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide, ADR-013"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/developer-tools/ide-whitelist-guide.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer maintainer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T107, cheatsheet/AGENTS (optional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C4–D-C5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/validation/validate_whitelist_patterns.py"
            }), " (+ test)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide § “Running the validator”"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ipw-complete-planning",
      children: "IPW complete (planning)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP §1–§7 present with content"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "§2.5 scored; outcome ", (0,jsx_runtime.jsx)(_components.code, {
          children: "REQUIRED"
        }), " → ADR-013 in §5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "§4 Step 1 and Step 14 (reconciliation) present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T107 bidirectional links to this IPP"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementation-complete-future",
      children: "Implementation complete (future)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python \".../validate_whitelist_patterns.py\""
        }), " exits 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest .../test_validate_whitelist_patterns.py"
        }), " passes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "UAT log has at least one before/after entry with prompt counts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "T107 AC1–AC7 checked with evidence links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "ADR-013 Accepted; listed in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "FR-050 no longer references T107"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All §5 UPDATE/CREATE rows implemented or deferred with reason in task doc"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E06:S07:T107"
        }), " cut with four-surface kanban sync"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enforcement-model-reference",
      children: "Enforcement model (reference)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Catalog"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/whitelist-patterns.yaml"
            }), " — regex SoT"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Validator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo CI/local proof patterns are coherent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Playbook"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guide — map patterns to Cursor allowlist UI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UAT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-measured prompt reduction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not in scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor reading YAML automatically (unless product adds support)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization",
          children: "T107 — IDE command whitelist optimization"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management",
          children: "story-007 — ADK implementation analysis"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker",
          children: "BR-039 — Cascade whitelist usability"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-06-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker",
          children: ["E06:S06", ":T57", " — BR-039 repo track"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPW-E6S06T57-br039-vendor-blocker-planning",
          children: "IPW-E6S6T57 — BR-039 planning"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/developer-tools/ide-whitelist-guide",
          children: "ide-whitelist-guide.md"
        }), " (draft)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/whitelist-patterns.yaml",
          children: ".cursor/whitelist-patterns.yaml"
        }), " (draft)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042 — IPW"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
          children: "FR-094 — IPW slash command"
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