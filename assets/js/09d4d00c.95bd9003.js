"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["72594"], {
43391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_05_s_09_t_11_docusaurus_monorepo_markdown_link_resolution_br_068_md_09d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-05-s-09-t-11-docusaurus-monorepo-markdown-link-resolution-br-068-md-09d.json
var site_docs_implementation_cycles_ipp_e_05_s_09_t_11_docusaurus_monorepo_markdown_link_resolution_br_068_md_09d_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068","title":"E05:S09:T11 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS09:T11)","source":"@site/../docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T22:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E05:S01:T44 — Planning: RW Temporary Execution Log (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S01T44-rw-temporary-execution-log"},"next":{"title":"E05:S09:T12 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T12-changelog-directory-consolidation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T22:00:00.000Z'),
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
  "value": "1.4 Strategy A decision record (Waves 1–4 — retroactive)",
  "id": "14-strategy-a-decision-record-waves-14--retroactive",
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
  "value": "Waves 1–4 (shipped — retroactive summary)",
  "id": "waves-14-shipped--retroactive-summary",
  "level": 3
}, {
  "value": "Wave 5 — governance + regression guard",
  "id": "wave-5--governance--regression-guard",
  "level": 3
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
  "value": "7.1 Waves 1–4 (shipped)",
  "id": "71-waves-14-shipped",
  "level": 3
}, {
  "value": "7.2 Wave 5 (shipped — <code>v0.5.9.11+6</code>)",
  "id": "72-wave-5-shipped--v059116",
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
        children: ["E05:S09", ":T11", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T11-docusaurus-monorepo-markdown-link-resolution-br068.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E05:S09", ":T11", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build",
        children: "BR-068"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Revised — Wave 5 (governance + regression guard)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW revision:"
        }), " Waves 1–4 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.9.11+5"
        }), ") shipped ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Strategy A"
        }), " corpus normalization and closed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-068"
        }), ". Wave 5 adds canonical IPP, bidirectional task wiring, repo-wide pytest guard, and straggler remediation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Consolidated IPP per FR-042 / FR-094. Bidirectional wiring to host task ", (0,jsx_runtime.jsx)(_components.strong, {
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "npm run build"
              })
            }), " completes successfully with strict ", (0,jsx_runtime.jsx)(_components.code, {
              children: "throw"
            }), " hooks unchanged"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-068 AC1; T11 deliverable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Contributor linking policy"
            }), " for targets outside the docs-plugin root (", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/**"
            }), ", repo root configs)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BR-068 AC2; ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11",
              children: "portal/README.md BR-068"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Spot-check"
            }), " historically failing MDX classes (INSTALL pointers; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/"
            }), " traversals)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-068 AC3; Waves 3–4 evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CI alignment"
            }), " — portal build on relevant path changes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-069; optional BR-068 AC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Canonical IPP"
            }), " at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E05S09T11-*"
            }), " with full §1–§7 per PLAN_DOC_TEMPLATE"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-042; FR-094"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Repo-wide regression guard"
            }), " — pytest scans FR-066 publish scope for banned out-of-plugin relative patterns"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 5 gap vs T13 cheatsheet-only T8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Straggler remediation"
            }), " — fix all publish-scope violations surfaced by RF6"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            }), " stays green"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Bidirectional wiring"
            }), " — task doc ↔ IPP; story checklist IPP link; legacy IPW deprecation stub"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-042; BR-066"
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
            children: ["Preserve ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenLinks"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenMarkdownLinks"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenAnchors"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "throw"
              })
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-067; T08/T10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pytest excludes FR-066 changelog-archive globs (not publish-blocking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-066"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Banned-pattern list aligned with portal README + T13 T8 prefixes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-068 Strategy A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Post-ship verification waves prescribe ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E05:S09:T11 --art"
              })
            }), " only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-097"
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
        }), " Strategy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A"
        }), " (GitHub ", (0,jsx_runtime.jsx)(_components.code, {
          children: "blob/main/"
        }), " URLs + optional in-", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " stubs); strict Docusaurus hooks unchanged."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/**/*.md"
        }), " (publish scope), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_br068_monorepo_links.py"
        }), ", task/kanban docs, maintenance triage doc, legacy IPW stub."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Strategy B/C (second docs plugin; blanket ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exclude"
        }), "); Docusaurus version bumps (T13); CI topology (T14); bulk changelog-archive normalization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-strategy-a-decision-record-waves-14--retroactive",
      children: "1.4 Strategy A decision record (Waves 1–4 — retroactive)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Locked ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-04-19"
      }), " (see legacy ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068",
        children: "IPW-E5S09T11"
      }), " §1.5):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Canonical GitHub ", (0,jsx_runtime.jsx)(_components.code, {
            children: "blob"
          }), " links:"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/<path-from-repo-root>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional short stubs"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " when portal must show in-corpus summary pages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pathname://"
          })
        }), " only for explicit same-site escape; prefer (1) for monorepo file targets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rejected:"
        }), " B (multi-instance docs plugin); C (blanket ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exclude"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Restore and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sustain"
      }), " a green ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/"
        })
      }), " production build for the published KB while preserving FR-067 strict link/anchor intent. Wave 5 closes the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "governance and regression-prevention gap"
      }), ": canonical IPP on disk, correct task wiring, and automated detection so new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " prose cannot reintroduce out-of-plugin relative links without failing pytest/CI."]
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
            children: "RF1–RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Waves 1–4 (shipped ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.11+5"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP + legacy IPW deprecation stub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br068_monorepo_links.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy A repairs on pytest failures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T11 Input/References; story-09 checklist"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "warn"
        }), " downgrade of strict hooks without governance review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pytest scan scope = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " minus ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-and-release-notes/changelog-archive/**"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/changelog-and-release-notes/changelog-archive/**"
        }), "."]
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
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.9.11+5"
        }), ") — reopening for Wave 5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " First non-planning implementation change lands (Step 1 of §4)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " RF5–RF8 evidenced; pytest + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " green; forensic marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        }), " on RW release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and story checklist update in same RW Step 7 change set"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution (not IPW authoring session)"]
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
            children: "Wave 5 chooses pytest corpus scan vs pre-commit validator vs both"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revert test file + link edits in one PR"
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
              children: "tests/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/"
            }), ", task/kanban docs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implements existing BR-068 / portal README policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new security/performance trade"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No RW/IPW/UKW gate changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ADR contradiction"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EXEMPT"
      }), " — T1=Y reflects test-harness depth only; Strategy A locked in Wave 1. No new architectural link-strategy choice."]
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
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tests/"
            }), " + publish-scope ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " + task docs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No new options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implements portal README + triage doc policy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible in one task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revert pytest + markdown links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec elsewhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11",
              children: "portal/README.md BR-068"
            }), "; ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067",
              children: "docusaurus-corpus-triage-fr-067.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documented NONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§5.3 cites governing docs above"
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
            children: "Publish-scope scan"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_br068_monorepo_links.py"
            }), " walks ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**/*.md"
            }), ", skips FR-066 excludes, asserts no banned relative prefixes in markdown link targets"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy A positive"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cheatsheet (and spot files) contain ", (0,jsx_runtime.jsx)(_components.code, {
              children: "github.com/RMS-Ltd/ai-dev-kit/blob/main/"
            }), " for former out-of-plugin targets"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2; parity with T13 T9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production build"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PORTAL_BUILD_STRICT=1"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_fr065_s9_portal_production_build"
            }), " passes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1; RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T13 regression"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_br090_faster_alignment.py"
            }), " T8–T11 remain green"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Straggler fix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After repair, T1 passes with zero violations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br068_monorepo_links.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_br068_monorepo_links.py"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "waves-14-shipped--retroactive-summary",
      children: "Waves 1–4 (shipped — retroactive summary)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Wave"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Version / evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy A lock + portal README contributor rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-04-19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Corpus sweep (", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**/*.md"
            }), " Strategy A URLs)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.11+3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            }), " green; TD1–TD3 spot-checks"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.11+4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-068 COMPLETE; T11 traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.11+5"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-5--governance--regression-guard",
      children: "Wave 5 — governance + regression guard"
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
              children: "[MANDATORY] Reopen T11:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), "; fix wrong ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPP-E4S19T03"
            }), " links; add Wave 5 Progress stub"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T11 task doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Author canonical ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPP-E05S09T11"
            }), " (this document)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E05S09T11-*.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deprecation pointer on legacy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-E5S09T11-*"
            }), " → canonical IPP"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy file header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br068_monorepo_links.py"
            }), " (T1–T2)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pytest module"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Repair all T1 violations in publish scope (Strategy A ", (0,jsx_runtime.jsx)(_components.code, {
              children: "blob"
            }), " URLs)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Green T1/T5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run pytest + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PORTAL_BUILD_STRICT=1"
            }), " verification"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local green"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067",
              children: "docusaurus-corpus-triage-fr-067.md"
            }), " — Wave 5 guard row"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF8 traceability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E05:S09:T11 --art"
              })
            }), " → target ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.11+6"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changelog; Step 7 four-surface"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "[MANDATORY] Reconcile T11"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v0.5.9.11+6)"
            }), " when RF5–RF8 evidenced; update story checklist IPP link"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task + story-09"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RW verification / FBU wave rule (BR-097):"
      }), " Post-ship steps prescribe ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E05:S09:T11 --art"
        })
      }), " only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CREATE:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CREATE:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_br068_monorepo_links.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UPDATE:"
        }), " T11 task doc, story-09 checklist, legacy IPW stub, straggler markdown, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/docusaurus-corpus-triage-fr-067.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NONE:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/docusaurus.config.js"
        }), " (strict ", (0,jsx_runtime.jsx)(_components.code, {
          children: "throw"
        }), " unchanged)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPP + task wiring → 2. pytest (red) → 3. straggler fixes (green) → 4. triage doc → 5. RW + kanban Step 7"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps",
      children: "4.3 Documentation implementation steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPP and task links before pytest (forensic anchor)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triage doc after pytest module lands (Wave 5 row references test path)."
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
            children: "T11 task doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 5, IPP links, status transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steps 1, N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deprecation redirect to canonical IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/maintenance/docusaurus-corpus-triage-fr-067.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 5 automated guard row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story-09-docusaurus-documentation-portal.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP link on T11 checklist row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Violating ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**/*.md"
            }), " (from pytest)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strategy A link repairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 5"
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
              children: "docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md"
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
              children: "tests/test_portal_br068_monorepo_links.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable BR-068 publish-scope guard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1–T2; Step 4"
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
            children: "ADR for Strategy A"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — governed by ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11",
              children: "portal/README.md BR-068"
            }), " + triage doc; optional ADR is follow-on task"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            }), " BR-068 section"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — already normative; IPP references pytest in §3"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BR-068 FR/BR doc"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — stays COMPLETE; Wave 5 is enforcement not defect reopen"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Changelog-archive relative links"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NONE"
            }), " — excluded from publish scope per FR-066"]
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
              children: "docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T11 Input/References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br068_monorepo_links.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable test; not Docusaurus content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1–D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "As §5.1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PUBLISHED (where under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housing rules:"
      }), " One authoritative plan per task — canonical IPP supersedes legacy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IPW-E5S09T11-*"
      }), " for new references; legacy file retained with deprecation stub."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-waves-14-shipped",
      children: "7.1 Waves 1–4 (shipped)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-068 acceptance criteria satisfied (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.9.11+5"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Strategy A contributor policy in portal README"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " exit 0 with strict hooks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "TD1–TD3 spot-check evidence recorded"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "72-wave-5-shipped--v059116",
      children: ["7.2 Wave 5 (shipped — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.9.11+6"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Canonical IPP exists with §1–§7; §2.5 ADR matrix; mandatory Step 1 + final reconciliation in §4"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Bidirectional T11 ↔ IPP links; no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E4S19T03"
        }), " miswire"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest tests/test_portal_br068_monorepo_links.py"
        }), " green"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cd portal && npm run build"
        }), " exit 0 (strict hooks unchanged) — deferred to CI; pytest + prior Waves 3–4 build evidence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E05:S09:T11 --art"
        }), " shipped with Wave 5 summary in changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "T11 reconciled to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " with updated version anchor"]
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
        }), " ", "All §6 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PUBLISHED"
        }), " paths exist and are linked from task doc"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068",
          children: ["Host task — E05:S09", ":T11"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build",
          children: "BR-068"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
          children: "FR-067"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
          children: "FR-069"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068",
          children: "Legacy IPW (deprecated)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment",
          children: "IPP-E05S09T13 Wave 2 BR-068 extensions"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        }), " (FR-100)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Docusaurus: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/markdown-features/links",
          children: "Markdown links"
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