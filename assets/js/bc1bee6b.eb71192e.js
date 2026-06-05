"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["86062"], {
2842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_05_s_09_t_13_docusaurus_faster_package_alignment_md_bc1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-05-s-09-t-13-docusaurus-faster-package-alignment-md-bc1.json
var site_docs_implementation_cycles_ipp_e_05_s_09_t_13_docusaurus_faster_package_alignment_md_bc1_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment","title":"E05:S09:T13 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS09:T13)","source":"@site/../docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E05:S09:T12 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T12-changelog-directory-consolidation"},"next":{"title":"E05:S09:T14 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E05:S09 — Planning: Spec, Tests, Implementation Plan (IPW)';

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
  "value": "7.1 Wave 1 (shipped — v0.5.9.13+1)",
  "id": "71-wave-1-shipped--v059131",
  "level": 3
}, {
  "value": "7.2 Wave 2 (build closure — target v0.5.9.13+2)",
  "id": "72-wave-2-build-closure--target-v059132",
  "level": 3
}, {
  "value": "8. Wave 2 — MDX link remediation + CI verification (BR-090 build closure)",
  "id": "8-wave-2--mdx-link-remediation--ci-verification-br-090-build-closure",
  "level": 2
}, {
  "value": "8.1 Requirements (Wave 2)",
  "id": "81-requirements-wave-2",
  "level": 3
}, {
  "value": "8.2 Specification (Wave 2)",
  "id": "82-specification-wave-2",
  "level": 3
}, {
  "value": "8.3 Test design (Wave 2)",
  "id": "83-test-design-wave-2",
  "level": 3
}, {
  "value": "8.4 Implementation plan (Wave 2)",
  "id": "84-implementation-plan-wave-2",
  "level": 3
}, {
  "value": "8.5 Documentation deliverables (Wave 2)",
  "id": "85-documentation-deliverables-wave-2",
  "level": 3
}, {
  "value": "8.6 ADR decision (Wave 2)",
  "id": "86-adr-decision-wave-2",
  "level": 3
}, {
  "value": "8.7 Success criteria (Wave 2)",
  "id": "87-success-criteria-wave-2",
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
        id: "e05s09--planning-spec-tests-implementation-plan-ipw",
        children: ["E05:S09", ":T13", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T13-docusaurus-faster-package-alignment-br090.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E05:S09", ":T13", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift",
        children: "BR-090"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Revised — Wave 2 (build closure)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW revision:"
        }), " Wave 1 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.9.13+1"
        }), ") shipped ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/faster@3.10.1"
        }), " and aligned pins. Wave 2 closes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-090"
        }), " via full build triage, BR-068 Strategy A link remediation, pytest T8–T11, and CI verification."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Consolidated IPP per FR-042 / FR-083. Bidirectional wiring to host task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "References"
        }), " is mandatory before implementation."]
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
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/package.json"
            }), " dependencies, version ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.10.1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 AC; BR-090"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pin ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/core"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/preset-classic"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/module-type-aliases"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/types"
            }), " consistently at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.10.1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 AC; BR-090"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Regenerate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/package-lock.json"
            }), " so ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci"
            }), " resolves 3.10.1 + faster"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 deliverable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cd portal && npm ci && npm run build"
            }), " exits 0 locally"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Docusaurus site build"
            }), " workflow green on qualifying ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " push / PR"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 AC; FR-069"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deploy job in merged workflow green after build (replaces stale BR-090 reference to deleted ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docusaurus-deploy.yml"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090 AC (update wording)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            }), " if install/build requirements change"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 AC"
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
            children: ["Executable pytest contract (repo IC pattern; mirror ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_br093_ci_deduplication.py"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project convention"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dependabot Docusaurus group (", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/*"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/dependabot.yml"
            }), ") must cover ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster"
            }), " without config change"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-105"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " remove ", (0,jsx_runtime.jsx)(_components.code, {
              children: "future.v4: true"
            }), " as primary fix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090 maintainer decision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Preserve strict link/anchor checking (", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenLinks/MarkdownLinks/Anchors: 'throw'"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-067"
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
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "future.v4: true"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/docusaurus.config.js"
        }), "; FR-069 CI build contract unchanged; strict corpus link checking preserved."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/package.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/package-lock.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/README.md"
        }), ", new pytest module, BR-090 status/AC wording, task doc wiring, RW release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " CI topology changes (T14 / ADR-017 — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), "); removing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "future.v4"
        }), "; Docusaurus corpus link fixes; changing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--no-minify"
        }), " unless build fails without it; upgrading beyond 3.10.1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Restore a green production Docusaurus build on CI and locally by satisfying Docusaurus 3.10's Faster dependency contract while keeping the v4 future-flag migration path (", (0,jsx_runtime.jsx)(_components.code, {
        children: "future.v4: true"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delivery"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bump all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/*"
            }), " to 3.10.1; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster@3.10.1"
            }), "; regenerate lockfile"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Local ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci && npm run build"
            }), " exit 0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5–RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CI build + deploy jobs green via existing ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docusaurus-build.yml"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            }), " documents faster requirement and Docusaurus 3.10.x"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br090_faster_alignment.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "future.v4: true"
            }), " unchanged in config"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pin ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/faster"
        }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3.10.1"
        }), " (same minor as core packages)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus build --no-minify"
        }), " script unless 3.10 build fails without it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BR-090 deploy AC must reference merged workflow deploy job, not deleted ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus-deploy.yml"
        }), "."]
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
        }), " All T13 acceptance criteria satisfied with pytest green + post-merge Actions smoke evidence; forensic marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        }), " on RW release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " row update in same RW Step 7 change set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution (not this IPW planning session)."]
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
            children: "N"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BR-090 intake fixed preferred fix; alternative (remove ", (0,jsx_runtime.jsx)(_components.code, {
              children: "future.v4"
            }), ") explicitly out of scope"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revert package.json + lockfile in one PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Confined to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/"
            }), " + tests + maintainer docs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implements upstream Docusaurus documented requirement, not a new repo pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new security/performance/operability trade at architecture level"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No RW/IPW/UKW/validator gate changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ADR/policy contradiction"
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Decision confined to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/"
            }), " + tests + README"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implements BR-090 §Proposed fix only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible in one task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revert package manifest + lockfile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec elsewhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090 + task AC + Docusaurus 3.10 release notes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§5.3 cites BR-090 maintainer decision"
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
            children: "Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster dependency"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "portal/package.json"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dependencies"
            }), " includes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster"
            }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.10.1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version homogeneity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["All ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/*"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dependencies"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "devDependencies"
            }), " share ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.10.1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lockfile alignment"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lockfile root ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dependencies"
            }), " versions match package.json pins"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v4 flag preserved"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docusaurus.config.js"
            }), " contains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "future.v4: true"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI contract unchanged"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_fr069_ci.py"
            }), " still passes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README maintainer note"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            }), " documents ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster"
            }), " requirement when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "future.v4"
            }), " is enabled"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional integration"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_fr065_identity.py::test_fr065_s9_portal_production_build"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PORTAL_BUILD_STRICT=1"
            }), " (manual/CI optional)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br090_faster_alignment.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_br090_faster_alignment.py"
        })
      }), "."]
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
                children: "E05:S09:T13"
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
            children: ["Edit ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package.json",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/package.json"
              })
            }), ": bump ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/*"
            }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.10.1"
            }), "; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Updated manifest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cd portal && npm install"
            }), " to regenerate ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package-lock.json",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/package-lock.json"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent lockfile"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci && npm run build"
            }), " locally"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build exit 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br090_faster_alignment.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tests/test_portal_br090_faster_alignment.py"
              })
            }), " (T1–T6)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pytest green"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/README.md"
              })
            }), " — faster + 3.10.x install/build notes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift",
              children: "BR-090"
            }), " deploy AC wording"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR hygiene"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Release via ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E05:S09:T13"
              })
            }), " (version bump, changelog, Step 7 four-surface kanban)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tagged release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Reconcile task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E05:S09:T13"
              }), " status"]
            }), " to actual implementation state: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), " if all ACs satisfied; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " if ongoing; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), " + reason if blocked. Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc + kboard + fbuboard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package.json",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/package.json"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package-lock.json",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/package-lock.json"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/README.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CREATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br090_faster_alignment.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tests/test_portal_br090_faster_alignment.py"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CREATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/implementation-cycles/IPP-E5S9T13-docusaurus-faster-package-alignment.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UPDATE: Host task T13 — IPP links; status transitions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE (RW Step 7): story checklist, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ", BR-090"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "package.json pins → 2. lockfile regen → 3. local build verify → 4. pytest → 5. README → 6. RW + kanban Step 7"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps",
      children: "4.3 Documentation implementation steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README after lockfile/build verified (accurate install instructions)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-090 AC update before RW Step 7 (deploy workflow reference)."
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
              children: "portal/package.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Docusaurus 3.10.1 + faster dep"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF2; Step 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/package-lock.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regenerated lock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3; Step 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install/build + faster note; version references"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7; Step 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/BR-090-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deploy AC wording; status on verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task T13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status transitions; IPP links; completion marker on RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steps 1, N"
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
              children: "docs/implementation-cycles/IPP-E5S9T13-docusaurus-faster-package-alignment.md"
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
              children: "tests/test_portal_br090_faster_alignment.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable BR-090 contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1–T6; Step 5"
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
            children: "ADR for faster dependency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — §2.5 EXEMPT; BR-090 §Proposed fix + Docusaurus 3.10 docs govern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/dependabot.yml"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["NONE — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/*"
            }), " group already covers faster"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/docusaurus-build.yml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — no workflow change required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090 deploy workflow reference"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UPDATE D-U4 — reference merged ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docusaurus-build.yml"
            }), " deploy job"]
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
              children: "docs/implementation-cycles/IPP-E5S9T13-docusaurus-faster-package-alignment.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning artifact; not Docusaurus user doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 Input/References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo-local maintainer doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already linked from docs pillar"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br090_faster_alignment.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable spec, not published doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §3; BR-090"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housing rules:"
      }), " One authoritative doc per topic; IPP lives under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-wave-1-shipped--v059131",
      children: "7.1 Wave 1 (shipped — v0.5.9.13+1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP written with all §1–§7 sections; bidirectional task ↔ IPP links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/faster@3.10.1"
        }), " in package.json + lockfile"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/*"
        }), " portal deps at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3.10.1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest tests/test_portal_br090_faster_alignment.py"
        }), " T1–T6 green"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "future.v4: true"
        }), " unchanged"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-090 deploy AC references merged workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci && npm run build"
        }), " green locally — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deferred to Wave 2"
        }), " (MDX/link failures)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Post-merge: GitHub Actions ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Docusaurus site build"
        }), " green on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deferred to Wave 2"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-wave-2-build-closure--target-v059132",
      children: "7.2 Wave 2 (build closure — target v0.5.9.13+2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Full build triage manifest recorded (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067",
          children: "docusaurus-corpus-triage-fr-067.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " exit 0 locally after BR-068 Strategy A repairs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PORTAL_BUILD_STRICT=1"
        }), " production build pytest green (T10)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Pytest T1–T11 green"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Post-merge Actions ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Docusaurus site build"
        }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deploy"
        }), " green on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "26992999149"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-090 → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FIXED"
        }), "; V-band pruned; T13 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.5.9.13+3)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-wave-2--mdx-link-remediation--ci-verification-br-090-build-closure",
      children: "8. Wave 2 — MDX link remediation + CI verification (BR-090 build closure)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-requirements-wave-2",
      children: "8.1 Requirements (Wave 2)"
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
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cd portal && npm run build"
            }), " exits ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            }), " locally after link repairs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090 AC; T13 AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Docusaurus site build"
            }), " green on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " post-merge"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090 AC; FR-069"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "deploy"
            }), " job succeeds after green build"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090 AC (ADR-017)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Apply ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-068 Strategy A"
            }), " (GitHub ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blob/main/"
            }), " URLs) for all out-of-", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " relative targets in publish scope"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T11; portal README"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Record triage manifest (files + link classes) in maintenance doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-067 triage pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Non-functional"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Preserve ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenLinks/MarkdownLinks/Anchors: 'throw'"
            }), " — no config downgrade"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-067; RNF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable pytest guards for known out-of-plugin patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "extends RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster"
            }), " + 3.10.1 pins unchanged"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 1 deliverable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      }), " Docusaurus version bumps; removing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "future.v4"
      }), "; CI topology (T14); implementing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UKW -ad"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-specification-wave-2",
      children: "8.2 Specification (Wave 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delivery"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8–RF10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full corpus link/anchor triage; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            }), " green; CI smoke on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["GitHub ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blob/main/"
            }), " URLs for ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".claude/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursor/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "src/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/"
            }), " targets"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wave 2 row in ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067",
              children: "docusaurus-corpus-triage-fr-067.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br090_faster_alignment.py"
            }), " T8–T11"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-note:"
      }), " UXR-015 RNF2 satisfied for GitHub browsing; Docusaurus publish scope required Strategy A — document in BR-090 resolution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-test-design-wave-2",
      children: "8.3 Test design (Wave 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out-of-plugin relative ban"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/guides/workflow-initiation-cheatsheet.md"
            }), " — no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "](../../.claude/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "](../../.cursorrules"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "](../../CLAUDE.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "](../../rw-config"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "](../../.cursor/"
            }), " markdown targets"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy A presence"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cheatsheet deep-link table uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "github.com/RMS-Ltd/ai-dev-kit/blob/main/"
            }), " for agent/command targets"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production build gate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_fr065_s9_portal_production_build"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PORTAL_BUILD_STRICT=1"
            }), " exits 0"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF8; BR-090 AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 1 regression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1–T6 still pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNF7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-implementation-plan-wave-2",
      children: "8.4 Implementation plan (Wave 2)"
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
            children: ["Reopen T13: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), "; uncheck CI AC; link IPP §8"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extend IPP with §8 Wave 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run full build triage; write manifest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triage doc / evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repair failing links (Strategy A) + anchor hygiene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**/*.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add pytest T8–T11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br090_faster_alignment.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Verify: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pytest"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PORTAL_BUILD_STRICT=1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local green"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E05:S09:T13 --art"
              })
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "v0.5.9.13+2"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changelog; Step 7 four-surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Post-merge: Actions build + deploy green on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090 evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reconcile T13 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v0.5.9.13+2)"
            }), " when RF8–RF10 evidenced"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task, kboard, BR-090"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-documentation-deliverables-wave-2",
      children: "8.5 Documentation deliverables (Wave 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPP-E05S09T13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — §8 Wave 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T13 task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — status, AC, IPP §8 link"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BR-090"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — resolution + Actions run IDs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "docusaurus-corpus-triage-fr-067.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — Wave 2 failure-class row"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "workflow-initiation-cheatsheet.md"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — primary link repairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tests/test_portal_br090_faster_alignment.py"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE — T8–T11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "portal/docusaurus.config.js"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — strict throw preserved"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-adr-decision-wave-2",
      children: "8.6 ADR decision (Wave 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome: EXEMPT"
      }), " — implements existing BR-068 policy; reversible corpus edits only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-success-criteria-wave-2",
      children: "8.7 Success criteria (Wave 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP §8 Wave 2 written; task ↔ IPP bidirectional links current"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Full build triage manifest recorded"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " exit 0 locally"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PORTAL_BUILD_STRICT=1"
        }), " production build pytest green"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Pytest T1–T11 green"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Post-merge Actions run green on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " (build + deploy) — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "26992999149"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-090 → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FIXED"
        }), "; intake-completed ledger updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T13 forensic marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.5.9.13+3)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "future.v4: true"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/faster@3.10.1"
        }), " unchanged"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090",
          children: ["T13 — Docusaurus ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@docusaurus/faster"
          }), " + package.json 3.10.1 alignment (BR-090)"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift",
          children: ["BR-090 — Docusaurus 3.10 build fails: missing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@docusaurus/faster"
          }), " and lockfile drift"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
          children: "FR-069 — Docusaurus CI build gate"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting",
          children: "FR-070 — Docusaurus deployment and hosting"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology",
          children: "ADR-017 — Docusaurus CI build/deploy topology"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        }), " (FR-100)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/blog/releases/3.10",
          children: "Docusaurus 3.10 release notes"
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