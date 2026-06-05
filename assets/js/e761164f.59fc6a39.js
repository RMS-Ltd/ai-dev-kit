"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["98684"], {
40291(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipw_e_6_s_09_t_01_greenfield_installation_fr_080_md_e76_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipw-e-6-s-09-t-01-greenfield-installation-fr-080-md-e76.json
var site_docs_implementation_cycles_ipw_e_6_s_09_t_01_greenfield_installation_fr_080_md_e76_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080","title":"E6:S09:T01 - Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS09:T01)","source":"@site/../docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E6:S07:T113 - Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E6S07T113-rw-step-12-5-github-release-parser-hardening"},"next":{"title":"E7:S06:T18 — IPW index (canonical split)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E7S06T18-interactive-installer-kanban-pattern-clarity"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E6:S09 - Planning: Spec, Tests, Implementation Plan (IPW)';

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
  "value": "1.2 Functional requirements (traceability to FR-080)",
  "id": "12-functional-requirements-traceability-to-fr-080",
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
  "value": "1.5 Decisions / alternatives (to resolve during implementation)",
  "id": "15-decisions--alternatives-to-resolve-during-implementation",
  "level": 3
}, {
  "value": "1.6 Example installs: logging for analysis and debugging",
  "id": "16-example-installs-logging-for-analysis-and-debugging",
  "level": 3
}, {
  "value": "2. Test design",
  "id": "2-test-design",
  "level": 2
}, {
  "value": "3. Implementation plan",
  "id": "3-implementation-plan",
  "level": 2
}, {
  "value": "Documentation cadence (policy)",
  "id": "documentation-cadence-policy",
  "level": 3
}, {
  "value": "Wave 1 — Specification and decisions",
  "id": "wave-1--specification-and-decisions",
  "level": 3
}, {
  "value": "Wave 2 — Orchestration and installers",
  "id": "wave-2--orchestration-and-installers",
  "level": 3
}, {
  "value": "Wave 3 — Greenfield vs brownfield distinction (documentation completeness)",
  "id": "wave-3--greenfield-vs-brownfield-distinction-documentation-completeness",
  "level": 3
}, {
  "value": "Wave 4 — Verification and example runs",
  "id": "wave-4--verification-and-example-runs",
  "level": 3
}, {
  "value": "Wave 5 — Traceability",
  "id": "wave-5--traceability",
  "level": 3
}, {
  "value": "4. Success / verification criteria",
  "id": "4-success--verification-criteria",
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
        id: "e6s09---planning-spec-tests-implementation-plan-ipw",
        children: ["E6:S09", ":T01", " - Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-greenfield-installation-process-fr080.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E6:S09", ":T01", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
        children: "FR-080 – End-to-end greenfield installation process"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deliver an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "opinionated, reproducible greenfield path"
      }), ": from acquiring AI Dev Kit framework bits through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mandatory installer usage"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "configuration"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verification"
      }), "—for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new or template"
      }), " projects—without assuming a brownfield host layout. Aligns with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
        children: "ADR-003"
      }), " (greenfield vs brownfield)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements-traceability-to-fr-080",
      children: "1.2 Functional requirements (traceability to FR-080)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Planning note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Greenfield installation ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "specification"
            }), " (inputs, outputs, ordering, failure modes)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standalone subsection or linked doc; ordering: acquire → install → configure → verify."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Reproducible"
            }), " path (scripts, CLI, and/or deterministic checklist)."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["See ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "§1.5 Decisions"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mandatory installer steps"
            }), " — not copy-only."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "install_release_workflow.py"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "install_kanban_framework.py"
              })
            }), " (or documented successors)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Verification gates"
            }), " (validators, smoke, checklist) vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " / consumer layout."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tie to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md",
              children: "rw-validators-consumer-layout.md"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F5"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Adopter docs"
            }), " — greenfield-only narrative; pointers to brownfield."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "INSTALL_IN_YOUR_PROJECT.md"
              })
            }), " and user-docs; cross-link ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
              children: "FR-081"
            }), "."]
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Planning note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NF1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainable as framework packages version independently."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc and script boundaries; version pins called out in install spec."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NF2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Align with install ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "logging / feedback"
            }), " contracts."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Coordinate with ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality",
              children: "FR-078"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance",
              children: "FR-079"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T01"
            }), " does not replace those FRs—extends greenfield narrative and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "example-run"
            }), " capture (§1.6)."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-out-of-scope",
      children: "1.4 Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brownfield"
        }), " integration and modular host surfaces → ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
          children: "FR-081"
        }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S09", ":T02"]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Canonical repo / distribution coordinates"
        }), " as the lead problem → ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-082-installation-distribution-canonical-repo-alignment",
          children: "FR-082"
        }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E6:S09", ":T03"]
        }), " (coordinate; may reorder work)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-decisions--alternatives-to-resolve-during-implementation",
      children: "1.5 Decisions / alternatives (to resolve during implementation)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decision record (locked):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision date:"
        }), " 2026-04-19"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approved by:"
        }), " Maintainer review (chat decision)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Orchestration:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid (C)"
        }), " - minimal script + explicit checklist."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification depth:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Manual gates"
        }), " as the primary completion criteria."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Installer ordering policy:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach 3"
        }), " (order-agnostic documentation) with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach 1 (RW-first -> Kanban)"
        }), " as the default recommended path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User control checkpoint:"
        }), " At a critical step, present both valid paths; include justification for continuing on the default path; allow explicit user override."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identifier policy:"
        }), " Use universally descriptive identifiers in paths/examples; avoid owner-specific identifiers unless explicitly required by FR-082/T03 decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decision / options"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orchestration"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Chosen: (C) Hybrid"
            }), " (minimal script + explicit checklist)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-080 allows any reproducible mechanism; this balances determinism and readability for adopters."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Verification depth"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Chosen: Manual gates"
            }), " (validator-heavy checks remain optional evidence, not hard completion gate)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces adopter friction while still supporting F4 through documented post-install checks."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Installer ordering / flow control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chosen policy: Approach 3 (order-agnostic docs) with Approach 1 (RW-first then Kanban) as default recommendation."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At critical checkpoint, present options + default-path justification + explicit override."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope vs T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Chosen: keep identifiers universally descriptive; avoid owner-specific coordinates unless FR-082/T03 explicitly approves them."
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dependencies: task doc already flags ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["FR-082 / E6:S09", ":T03"]
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-example-installs-logging-for-analysis-and-debugging",
      children: "1.6 Example installs: logging for analysis and debugging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " Representative ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "greenfield"
      }), " install runs produce ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detailed, reviewable output"
      }), " suitable for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "analysis"
      }), " (process improvement) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "debugging"
      }), " (failure diagnosis)—not only pass/fail."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Boundary with FR-078 / FR-079:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-078"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-079"
        }), " define ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "contracts"
        }), " for install events and feedback paths; this IPW treats ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T01"
        }), " as ensuring the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "greenfield path"
        }), " emits or documents evidence ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "compatible"
        }), " with those contracts where applicable, and adds ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explicit “gold run” / example transcripts"
        }), " where the FRs do not yet mandate them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy / safety:"
        }), " Example logs and published artifacts should use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "redaction"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "synthetic paths"
        }), " where real host paths or tokens could appear; call this out in implementation (doc or script preamble)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable shape (planning-level):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At least one ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "documented reference run"
        }), " (commands + expected high-signal log lines or exit codes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Criteria for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "verbosity"
        }), " when debugging (env flag or doc section), without requiring secret material in logs."]
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
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Acceptance / method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-to-end greenfield scenario"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Matches task ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "AC2"
            }), ": documented scratch/template path with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no undocumented"
            }), " manual steps; capture steps in IPW-derived checklist or automation."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc boundaries"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "AC3"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " (or successor) links ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADR-003"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-081"
            }), " in the greenfield narrative."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installers invoked"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assert ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "F3"
            }), ": process cannot be satisfied by copy-only; installers run (or CI/docs assert exact invocations)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification gates"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run or document validator layout per ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " post-install (align ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md",
              children: "rw-validators-consumer-layout.md"
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Example-run forensics"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A reference run produces storable artifacts (log file path, transcript, or FR-078-shaped event sequence) suitable for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "post-hoc analysis"
            }), "; redaction rules verified."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-story"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Smoke that greenfield docs do not contradict ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T02"
            }), " brownfield doc set (no scope bleed)."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Phased; dependency order matters within each wave for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "technical prerequisites"
      }), " (e.g. orchestration exists before you publish an example transcript of running it)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-cadence-policy",
      children: "Documentation cadence (policy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "After §1.5 decisions are confirmed"
      }), " through the normal decision-making process, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relevant adopter-facing documentation is updated in parallel with"
      }), " code, scripts, installers, and verification—not parked for a single late “docs-only” sweep. Each wave below names a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "theme"
      }), " and its hard dependencies; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "within"
      }), " a wave, ship ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "behavior + docs"
      }), " together when the change affects what adopters must do or believe."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Normative prose (ordering, checkpoints, identifiers) must not run ahead of locked decisions; once locked, doc updates are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same-wave"
      }), " deliverables alongside implementation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical note:"
      }), " An early execution used a sequential “Wave 3” documentation pass after orchestration for expedience. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Going forward"
      }), ", treat INSTALL/user-doc updates as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parallel"
      }), " to Waves 2 and 4 wherever §1.5 already applies; keep ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 3"
      }), " in this plan as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AC3 / F5 completeness checklist"
      }), " (greenfield vs brownfield distinction and user-doc touchpoints—not an exclusive slot for all writing)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-1--specification-and-decisions",
      children: "Wave 1 — Specification and decisions"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lock ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "greenfield install spec"
            }), " (ordering, inputs/outputs, failure modes)."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Spec section in repo or linked from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resolve ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "§1.5"
            }), " table (or explicitly defer with owner)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short “Decisions” addendum or ADR snippet."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-2--orchestration-and-installers",
      children: "Wave 2 — Orchestration and installers"
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
            children: ["Wire ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "mandatory"
            }), " invocations of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_release_workflow.py"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_kanban_framework.py"
            }), " (paths, working directory, idempotency notes)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scripts and/or doc blocks; CI optional."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "rw-config.yaml"
              })
            }), " and validator discovery"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy or generate consumer layout per install story."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel documentation (same wave, after §1.5):"
      }), " Update ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INSTALL_IN_YOUR_PROJECT.md"
      }), " and installer-adjacent sections whenever orchestration or defaults change so adopters never rely on stale instructions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-3--greenfield-vs-brownfield-distinction-documentation-completeness",
      children: "Wave 3 — Greenfield vs brownfield distinction (documentation completeness)"
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
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "INSTALL_IN_YOUR_PROJECT.md"
              })
            }), " greenfield chapter; cross-link ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADR-003"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-081"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Meets ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "AC3"
            }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "F5"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["User-docs touchpoints under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/"
            }), " as per FR-080 scope."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent terminology “greenfield only” here."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationship to other waves:"
      }), " Steps 3.1–3.2 are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verification of narrative completeness"
      }), " across INSTALL + user-docs; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "perform in parallel"
      }), " with Waves 2–4 once §1.5 is locked—not only after Wave 4."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-4--verification-and-example-runs",
      children: "Wave 4 — Verification and example runs"
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
            children: ["Define ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "verification"
            }), " commands post-install (validators, smoke)."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Documented gates; tie to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "F4"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Produce ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "reference example run"
            }), " + logging guidance (and FR-078/079 alignment note)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meets §1.6; supports debugging narrative."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel documentation (same wave):"
      }), " Publish verification commands, reference transcript, and logging/redaction guidance ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "with"
      }), " the underlying behavior—no “implementation now, prose later” unless a genuine dependency blocks documentation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delivered (Wave 4):"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        })
      }), " adds ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Wave 4"
      }), " sections—post-install validator invocation (", (0,jsx_runtime.jsx)(_components.code, {
        children: "F4"
      }), "), synthetic reference transcript with redaction reminder, and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-078"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-079"
      }), " boundary bullets. Cross-linked from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-installation-guide",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "framework-dependency-installation-guide.md"
        })
      }), " greenfield scope."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-5--traceability",
      children: "Wave 5 — Traceability"
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
            children: ["Update ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-080"
            }), " checkboxes / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T01"
            }), " acceptance with evidence links."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "AC1"
            }), " closure or explicit deferrals."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Align with ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E6:S09", ":T03"]
            }), " if copy-paste examples depend on canonical coordinates."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordination note in task Progress."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delivered (Wave 5):"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
        children: "FR-080"
      }), " functional/NFR boxes checked with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation evidence"
      }), " section; ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080",
        children: "T01"
      }), " acceptance criteria checked with evidence links; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T03"
      }), " coordination sentence under task Dependencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files likely touched (living list):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/scripts/install_kanban_framework.py"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consumer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " / template in recipient story (as defined by orchestration)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-success--verification-criteria",
      children: "4. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " FR-080 requirements satisfied or deferred with rationale in FR/task (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
          children: "FR-080"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Documented scenario runs end-to-end without undocumented manual steps (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " Wave 4 reference + Method 2 path)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Install docs link ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ADR-003"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-081"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "F3"
        }), " evidenced: installers are part of the canonical greenfield story."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "§1.6:"
        }), " Example/reference run + logging posture documented; aligned with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-078"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-079"
        }), " boundaries (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " Wave 4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Bidirectional wiring: this IPW ↔ host task remain linked (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080",
          children: "T01"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080",
          children: ["Host task E6:S09", ":T01"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
          children: "FR-080"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration",
          children: "FR-081"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081",
          children: "IPP-E6S9T2"
        }), " (brownfield counterpart)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality",
          children: "FR-078"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-079-install-feedback-submission-path-and-governance",
          children: "FR-079"
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