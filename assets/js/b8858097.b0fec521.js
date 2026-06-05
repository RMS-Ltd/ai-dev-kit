"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["79853"], {
37042(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_1_s_04_fr_099_book_private_public_migration_md_b88_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-1-s-04-fr-099-book-private-public-migration-md-b88.json
var site_docs_implementation_cycles_ipp_e_1_s_04_fr_099_book_private_public_migration_md_b88_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E1S04-fr099-book-private-public-migration","title":"E1:S04 — Planning: FR-099 book/private/public repository migration (ADR-006)","description":"Host program: FR-099 — Spin off book epic to a private repository","source":"@site/../docs/implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E1S04-fr099-book-private-public-migration","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E1S04-fr099-book-private-public-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T16:20:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E09:S01:T03 — Planning: FR-032 Gap Comparison (Sequential) (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E09S01T03-gap-comparison-fr032"},"next":{"title":"E2:S01:T22 — Planning: BR-075 perpetual RW version.py BUILD (IPP)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E1S04-fr099-book-private-public-migration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T16:20:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E1 — Planning: FR-099 book/private/public repository migration (ADR-006)';

const assets = {

};



const toc = [{
  "value": "1. Requirements",
  "id": "1-requirements",
  "level": 2
}, {
  "value": "2. Specification",
  "id": "2-specification",
  "level": 2
}, {
  "value": "2.4 ADR necessity (FR-100)",
  "id": "24-adr-necessity-fr-100",
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
  "value": "4.1 Phase 0 — E1:S04 ✅",
  "id": "41-phase-0--e1s04-",
  "level": 3
}, {
  "value": "4.2 Phase 1 — E1:S04 ✅",
  "id": "42-phase-1--e1s04-",
  "level": 3
}, {
  "value": "4.3 Phase 2 — E1:S04 ✅",
  "id": "43-phase-2--e1s04-",
  "level": 3
}, {
  "value": "4.4 Phase 3 — E1:S04 ✅",
  "id": "44-phase-3--e1s04-",
  "level": 3
}, {
  "value": "4.5 Phase 4 — E1:S04 ✅",
  "id": "45-phase-4--e1s04-",
  "level": 3
}, {
  "value": "5. Documentation deliverables",
  "id": "5-documentation-deliverables",
  "level": 2
}, {
  "value": "6. Documentation housing",
  "id": "6-documentation-housing",
  "level": 2
}, {
  "value": "7. Success criteria",
  "id": "7-success-criteria",
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
        id: "e1--planning-fr-099-bookprivatepublic-repository-migration-adr-006",
        children: ["E1", ":S04", " — Planning: FR-099 book/private/public repository migration (ADR-006)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host program:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
        children: "FR-099 — Spin off book epic to a private repository"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Governing ADR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006 — Book project private repository spin-off"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming",
        children: "Story 004 — Repository branding and renaming"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete"
      }), " — Phases 0–4 implemented; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-099"
      }), " IMPLEMENTED (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.1.4.7+2"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase tasks (shared IPP):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Doc"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "IPP §"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E1:S04", ":T03"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T03-fr099-phase0-inventory-adr-approval",
              children: "T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4.1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E1:S04", ":T04"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T04-fr099-phase1-privatize-rename-hf-ai-dev-kit",
              children: "T04"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E1:S04", ":T05"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T05-fr099-phase2-book-extraction-genesis",
              children: "T05"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E1:S04", ":T06"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T06-fr099-phase3-public-ai-dev-kit-rebirth",
              children: "T06"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4.4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E1:S04", ":T07"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T07-fr099-phase4-rewire-and-verify",
              children: "T07"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "§4.5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-program:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098",
        children: "IPP-E6S9T6 §8 Wave E"
      }), " — public-repo ECC validation ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "after"
      }), " Phase 3."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements",
      children: "1. Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase task"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete book-asset inventory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099-F1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-006 approved"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099-F2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Private ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hf-ai-dev-kit"
            }), " with full history"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099-F3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T04"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book extraction genesis on private tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099-F4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New public ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            }), " from genesis"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099-F5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewire URLs + install smoke (no epic-24)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099-F6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T07"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E1:S04", ":T02", " SUPERSEDED"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-099-F7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Acceptance criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory signed off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-006 + T02 superseded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T03"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private retains pre-cutover history"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T04"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public genesis tree book-free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T06"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No active E24 on public kboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T05"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install smoke passes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T07"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AC7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remotes/badges → new public repo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T07"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      }), " E1:S04", ":T02", " public Head First rename; O'Reilly workflow; copying framework SoT into book repo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal."
      }), " Separate book IP from public ADK via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option C"
      }), " (", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006"
      }), "): private ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        })
      }), " (full history) + public ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        })
      }), " reborn from book-free genesis."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repos"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Repo"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit-book"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private; book + frameworks history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public; framework-only from genesis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-adr-necessity-fr-100",
      children: "2.4 ADR necessity (FR-100)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALREADY_COVERED"
      }), " — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006"
      }), ". No new ADR required for Phases 3–4 unless bootstrap policy changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Verification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0–2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tree: no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/book-proj/"
            }), ", no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-24/"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public remote has no pre-genesis book objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greenfield/brownfield install smoke (FR-080); RW/UKW validators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional Wave E ECC on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "public"
            }), " clone (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098",
              children: "IPP-E6S9T6 §8"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "41-phase-0--e1s04-",
      children: ["4.1 Phase 0 — E1:S04", ":T03", " ✅"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory + ADR-006 outline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mark E1:S04", ":T02", " SUPERSEDED"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "42-phase-1--e1s04-",
      children: ["4.2 Phase 1 — E1:S04", ":T04", " ✅"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privatize + rename GitHub repo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ 2026-05-26"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "43-phase-2--e1s04-",
      children: ["4.3 Phase 2 — E1:S04", ":T05", " ✅"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book extraction genesis commit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.1.4.3+1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "book/epic-24"
            }), " branch at pre-extraction tip"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "44-phase-3--e1s04-",
      children: ["4.4 Phase 3 — E1:S04", ":T06", " ✅"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
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
              children: "TODO → IN PROGRESS"
            }), " when execution authorized"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resolve ADR-006 open question: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "orphan root + cherry-pick replay"
            }), " from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f21bac102"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create public ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RMS-Ltd/ai-dev-kit"
              })
            }), " (no pre-genesis book on public remote)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ 2026-05-26"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document default branch + clone policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/fr099-phase3-public-repo-bootstrap",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "fr099-phase3-public-repo-bootstrap.md"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), " + version anchor when AC4 satisfied"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ AC4; RW pending"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "45-phase-4--e1s04-",
      children: ["4.5 Phase 4 — E1:S04", ":T07", " ✅"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
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
              children: "TODO → IN PROGRESS"
            }), " after T06 COMPLETE"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewire remotes, badges, install docs, CI, GitHub Pages base"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/fr099-phase4-rewire-and-verify",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "fr099-phase4-rewire-and-verify.md"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install smoke (AC6); capture Wave E evidence if scheduled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr099_install_smoke_test.sh"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), " when AC6–AC7 satisfied; close FR-099"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "v0.1.4.7+2"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
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
            children: "ADR-006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE open questions when Phase 3 bootstrap chosen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INSTALL / README / rw-config remotes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UPDATE in T07"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cheatsheet Wave E callout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OPTIONAL (IPP-E6S9T6)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-housing",
      children: "6. Documentation housing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repository SoT under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " and root install docs; no manuscript in public genesis changelogs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success-criteria",
      children: "7. Success criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Phases 0–2 complete (T03–T05) — archived on ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-completed",
          children: "kanban-completed.md"
        }), "; off active ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kboard",
          children: "kboard"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Phase 3: public repo live (T06) — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RMS-Ltd/ai-dev-kit"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Phase 4: rewire + smoke (T07)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-099 IMPLEMENTED (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.1.4.7+2"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
          children: "FR-099"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
          children: "ADR-006"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098",
          children: "IPP-E6S9T6 — ECC / Wave E"
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