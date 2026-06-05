"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["63463"], {
71541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipw_e_5_s_09_t_11_docusaurus_monorepo_markdown_links_br_068_md_249_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipw-e-5-s-09-t-11-docusaurus-monorepo-markdown-links-br-068-md-249.json
var site_docs_implementation_cycles_ipw_e_5_s_09_t_11_docusaurus_monorepo_markdown_links_br_068_md_249_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068","title":"E5:S09:T11 – Planning: Spec, Tests, Implementation Plan (IPW)","description":"Deprecated: Superseded by canonical IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md (FR-094 / PLANDOCTEMPLATE). Retained for inbound link stability; do not update this file for new planning.","source":"@site/../docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E4:S19:T02 - Planning: Spec, Tests, Implementation Plan (IPW) — LEGACY ALIAS","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology"},"next":{"title":"IPW Package - E6:S06:T57 (BR-039)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E6S06T57-br039-vendor-blocker-planning"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E5:S09 – Planning: Spec, Tests, Implementation Plan (IPW)';

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
  "value": "1.2 Functional requirements (traceability to BR-068)",
  "id": "12-functional-requirements-traceability-to-br-068",
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
  "value": "1.5 Decisions / alternatives (to lock before implementation)",
  "id": "15-decisions--alternatives-to-lock-before-implementation",
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
  "value": "Wave 1 — Policy lock",
  "id": "wave-1--policy-lock",
  "level": 3
}, {
  "value": "Wave 2 — Config and corpus",
  "id": "wave-2--config-and-corpus",
  "level": 3
}, {
  "value": "Wave 3 — Verification",
  "id": "wave-3--verification",
  "level": 3
}, {
  "value": "Wave 4 — Traceability and release",
  "id": "wave-4--traceability-and-release",
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
        id: "e5s09--planning-spec-tests-implementation-plan-ipw",
        children: ["E5:S09", ":T11", " – Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deprecated:"
        }), " Superseded by canonical ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068",
            children: "IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068.md"
          })
        }), " (FR-094 / PLAN_DOC_TEMPLATE). Retained for inbound link stability; do not update this file for new planning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T11-docusaurus-monorepo-markdown-link-resolution-br068.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E5:S09", ":T11", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build",
        children: "BR-068 – Docusaurus strict MDX / monorepo Markdown links"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
        children: "FR-067"
      }), "; ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal",
        children: "Story 009 – Docusaurus Documentation Portal"
      }), " (T08/T10 strict mode)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Superseded — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Waves 1–4"
      }), " captured in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068",
        children: "IPP-E05S09T11"
      }), "; Wave 5 adds regression guard"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Restore a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "green"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/"
        })
      }), " production build (", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), ") for the published KB while preserving ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
          children: "FR-067"
        })
      }), " intent: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "strict"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onBrokenLinks"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onBrokenMarkdownLinks"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onBrokenAnchors"
      }), " in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/docusaurus.config.js",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/docusaurus.config.js"
        })
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "throw"
        })
      }), " on all three). Any relaxation of strictness must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "explicit"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "documented"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "narrow"
      }), "—not a silent downgrade of T08/T10."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements-traceability-to-br-068",
      children: "1.2 Functional requirements (traceability to BR-068)"
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "npm run build"
              })
            }), " completes successfully (or an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "explicitly documented"
            }), " publish subset via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exclude"
            }), " / split site with the same bar for what ships)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary completion signal; matches BR-068 AC1."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Contributor linking policy"
            }), " for targets ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "outside"
            }), " the docs-plugin root (", (0,jsx_runtime.jsx)(_components.code, {
              children: "../docs"
            }), "): repo-root ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "INSTALL_*"
              })
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/frameworks/**"
              })
            }), ", other monorepo paths."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single canonical pattern (or small approved set) in ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/README.md"
              })
            }), " and/or ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/maintenance/docusaurus-corpus-triage-fr-067.md"
              })
            }), "; matches BR-068 AC2."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Spot-check"
            }), " pages that historically failed MDX: INSTALL pointers from user-docs; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "packages/"
              })
            }), " traversals from Kanban/FR docs."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Named files or globs in §3 verification; matches BR-068 AC3."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "F4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CI alignment"
            }), " (optional BR-068 AC): portal build runs on relevant path changes where a workflow exists."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tie to ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
              children: "FR-069"
            }), " / actual workflows in repo."]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No silent regression"
            }), " of internal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " link discipline or anchor strictness vs FR-067."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prefer corpus edits + documented external links over turning checks to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "warn"
            }), " without governance review."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NF2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintainability:"
            }), " Policy must remain operable as frameworks and Kanban docs evolve (avoid one-off hacks per file without a pattern)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§1.5 decisions should favor repeatable author rules."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NF3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub vs portal parity:"
            }), " Explain when ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub-relative"
            }), " Markdown is intentionally replaced or wrapped for MDX (author education in portal README)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces repeated BR class."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-out-of-scope",
      children: "1.4 Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replacing Docusaurus or redefining the entire information architecture for the portal."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bulk"
        }), " rewrites of non-", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " repositories or consumer projects; this task focuses on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/"
          })
        }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/"
          })
        }), " configuration and documented link contracts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-066"
        }), " historical IPW backfill (separate effort); only coordinate if filing or sidebar surfacing overlaps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-decisions--alternatives-to-lock-before-implementation",
      children: "1.5 Decisions / alternatives (to lock before implementation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Rows below are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "candidates"
      }), "; implementation should ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " proceed on ad hoc mixing without updating this section."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trade-offs"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A – Corpus normalization"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replace unresolved relatives with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "pathname://"
              })
            }), ", stable ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["GitHub ", (0,jsx_runtime.jsx)(_components.code, {
                children: "https://github.com/.../blob/..."
              })]
            }), " URLs, or short ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["stub pages under ", (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/"
              })]
            }), " that summarize and link outward."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest config surface; many edits; must preserve readability and avoid duplicate maintenance for stubs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B – Boundary expansion"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "second"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/plugin-content-docs"
            }), " instance (multi-instance), or introduce ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "symlink / documented mirror"
            }), " subtrees under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " aligned with repo layout."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer link transforms in prose; higher Docusaurus config complexity and ongoing sync expectations."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["C – Narrow ", (0,jsx_runtime.jsx)(_components.code, {
                children: "exclude"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Extend ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/docusaurus.config.js",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "exclude"
              })
            }), " globs so problematic trees are not compiled—", (0,jsx_runtime.jsx)(_components.strong, {
              children: "only"
            }), " if explicitly approved (content may disappear from portal)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Risk of hiding legitimate KB surface; use sparingly and document."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision record (locked — Wave 1):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision date:"
        }), " 2026-04-19"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary strategy:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A – Corpus normalization."
        }), " For any target ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "outside"
        }), " the docs plugin root (", (0,jsx_runtime.jsx)(_components.code, {
          children: "../docs"
        }), " as configured in Docusaurus), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "do not"
        }), " use relative file paths that traverse out of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " (MDX will not resolve them). Use:", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Canonical GitHub ", (0,jsx_runtime.jsx)(_components.code, {
                children: "blob"
              }), " links"]
            }), " to this repository, default branch ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "main"
              })
            }), ":", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/<path-from-repo-root>"
            }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Examples: ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".../blob/main/INSTALL_IN_YOUR_PROJECT.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".../blob/main/packages/frameworks/.../docs/foo.md"
            }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Path segments that contain spaces (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow mgt"
            }), ") must be ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "URL-encoded"
            }), " in the link target (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-mgt"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Optional short stubs"
            }), " under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " (e.g. a one-paragraph “see also” that links to the GitHub file) only when the published site must present a first-class in-corpus page; avoid duplicating long content."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "pathname://"
              })
            }), " only when a maintainer explicitly needs to escape the doc plugin for a same-site path; prefer (1) for monorepo file targets to keep behavior obvious in review."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rejected (for this workstream):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "B – Boundary expansion"
        }), " (second docs plugin or mirrored trees) — higher ongoing config and sync cost; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "revisit only"
        }), " if (1)+(2) cannot meet maintainability after Wave 2 corpus pass. ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["C – Narrow ", (0,jsx_runtime.jsx)(_components.code, {
            children: "exclude"
          })]
        }), " as a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "blanket"
        }), " fix for link errors — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rejected"
        }), "; it hides KB from the portal. Existing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-066"
        }), " archive excludes remain unchanged; any new ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exclude"
        }), " glob needs its own FR/task and must be called out in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
          children: "portal README"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-066 overlap:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "None"
        }), " for Wave 1. If an IPW or planning artifact must be a first-class portal page, use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stubs"
        }), " in (2) or coordinate ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-066"
        }), " filing separately—do not conflate with link-repair sweeps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normative contributor copy:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11",
          children: "portal/README.md — BR-068 monorepo links"
        }), " (same policy in prose)."]
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
            children: "Portal production build"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "cd portal && npm run build"
            }), " exits ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            }), " with current strict flags in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docusaurus.config.js"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-068 failure classes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["After fix, spot-check Markdown that targeted ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md"
              })
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "../../../../packages/frameworks/..."
              })
            }), " patterns per §1.5 policy (render or link without MDX resolve error)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regression (internal corpus)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Sample cross-doc links and anchors in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " still satisfy ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T08/T10"
            }), " intent (no new broken internal links introduced by bulk replace)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI path triggers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If portal CI exists, confirm ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            }), " document gap: changes under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/"
            }), " and ingested ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " paths trigger build (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
              children: "FR-069"
            }), ")."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Execution order should follow ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "policy lock → corpus/config → verification → traceability"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-1--policy-lock",
      children: "Wave 1 — Policy lock"
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
            children: ["Complete ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "§1.5"
            }), " decision rows (primary strategy + documented rejects)."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Done (2026-04-19):"
            }), " §1.5 decision record + rejects ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "A / B / C"
            }), " (see above)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Draft ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "contributor rules"
            }), " in ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/README.md"
              })
            }), ": how to link INSTALL, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/"
            }), ", repo root from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Done (2026-04-19):"
            }), " section ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Monorepo links outside ", (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/"
              }), " (BR-068 / E5:S09", ":T11", ")"]
            }), " with examples and anti-patterns."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-2--config-and-corpus",
      children: "Wave 2 — Config and corpus"
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
            children: ["Apply chosen strategy: edit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**/*.md"
            }), " link targets and/or ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/docusaurus.config.js",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/docusaurus.config.js"
              })
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/sidebars.js",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/sidebars.js"
              })
            }), " (if multi-instance or routing changes)."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incremental commits per area (e.g. user-docs, kanban, architecture) optional."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/maintenance/docusaurus-corpus-triage-fr-067.md"
              })
            }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "failure class → resolution"
            }), " mapping for BR-068."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keeps FR-067 maintenance story coherent."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-3--verification",
      children: "Wave 3 — Verification"
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
            children: ["Full ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "npm run build"
              })
            }), "; fix stragglers until green."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Done (2026-04-19):"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cd portal && npm run build"
              })
            }), " exit ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            }), " (strict hooks); noted in ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T11"
            }), " Progress + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHANGELOG_v0.5.9.11+4"
              })
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TD2–TD3"
            }), " spot-checks; document any justified exception (single location, not silent)."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Done (2026-04-19):"
            }), " Spot-check evidence under ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T11"
            }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docusaurus-corpus-triage-fr-067.md"
              })
            }), " §Wave 3; no exceptions required."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-4--traceability-and-release",
      children: "Wave 4 — Traceability and release"
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
            children: ["Check ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-068"
            }), " acceptance criteria; update ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build",
                children: "BR-068"
              })
            }), " status/history when defect is remediated."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Done (2026-04-19):"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-068"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Status: COMPLETE"
              })
            }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resolution"
            }), " + AC checked; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.11+5"
              })
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4.2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "host task"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068",
              children: "T11"
            }), " Progress + Acceptance Criteria; optional ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW"
            }), " when implementation slice is ready (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting",
              children: "FR-070"
            }), " depends on green build)."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Done:"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T11"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "COMPLETE"
              })
            }), " + AC checked + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHANGELOG_v0.5.9.11+5"
              })
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files likely touched (living list):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/docusaurus.config.js",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/docusaurus.config.js"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/README.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/sidebars.js",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/sidebars.js"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/maintenance/docusaurus-corpus-triage-fr-067.md"
          })
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Selected Markdown under ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "docs/"
          }), " (repo tree)"]
        }), " (Kanban, user-docs, ADRs—per scan results)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only if"
        }), " §1.5 policy requires coordinated root-doc wording or reciprocal links from stubs"]
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
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-068"
        }), " acceptance criteria satisfied (cross-check ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build",
          children: "BR-068 § Acceptance Criteria"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T11"
        }), " acceptance criteria satisfied (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068",
          children: "task doc"
        }), "): no unexplained regression vs FR-067 strict intent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TD1–TD3"
        }), " executed or explicitly deferred with rationale in task Progress."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bidirectional wiring:"
        }), " this IPW ↔ ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E5:S09", ":T11"]
        }), " remain linked (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        }), " host linkage)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068",
          children: ["Host task – E5:S09", ":T11"]
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
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting",
          children: "FR-070"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T08-docusaurus-strict-broken-links-post-fr067",
          children: ["E5:S09", ":T08"]
        }), ", ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T10-docusaurus-strict-broken-anchors-post-t08",
          children: ["E5:S09", ":T10"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Docusaurus: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/markdown-features/links",
          children: "Markdown links"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/docs-multi-instance/",
          children: "Multiple docs plugin instances"
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