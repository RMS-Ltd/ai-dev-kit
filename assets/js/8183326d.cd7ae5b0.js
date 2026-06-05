"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["40729"], {
17012(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_018_single_kanban_board_consolidation_md_818_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-018-single-kanban-board-consolidation-md-818.json
var site_docs_architecture_standards_and_adrs_adr_018_single_kanban_board_consolidation_md_818_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation","title":"ADR-018: Single kanban board consolidation (retire active fbuboard)","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T21:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-017: Docusaurus CI build/deploy topology (single workflow, artifact handoff)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology"},"next":{"title":"ADR-019 — RW BUILD increment and release-tag immutability","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-019-rw-build-increment-and-tag-immutability"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T21:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-018: Single kanban board consolidation (retire active fbuboard)';

const assets = {

};



const toc = [{
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Wave 3 — framework pack (adopters)",
  "id": "wave-3--framework-pack-adopters",
  "level": 3
}, {
  "value": "Alternatives considered",
  "id": "alternatives-considered",
  "level": 2
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Compliance",
  "id": "compliance",
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
        id: "adr-018-single-kanban-board-consolidation-retire-active-fbuboard",
        children: ["ADR-018: Single kanban board consolidation (retire active ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " Maintainer (via E04:S19", ":T12", " / UXR-020 R3)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring",
        children: "UXR-020"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020",
        children: "IPP-E4S19T12"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-051-fr-br-uxr-prioritization-board",
        children: "FR-051"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program",
        children: "FR-092"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention",
        children: "ADR-015"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bidirectional ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "task ↔ FBU"
      }), " wiring (KG-R2) made ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "near-duplicates"
      }), " in the Could Have backlog, doubling UKW/RW maintenance. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fbuboard"
      }), " still held ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "verification-pending"
      }), " rows (task COMPLETE, FBU OPEN) that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard"
      }), " deliberately omitted. User selected ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "R3"
      }), ": one active board with an explicit verification lane."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " is the sole active MoSCOW board"]
          }), " for tasks and wired FBUs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "New MoSCOW band — Verification (V):"
          }), " Between Should Have and Could Have. Rows use ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "⏳ WAITING"
            })
          }), " status (UXR-019: external verification gate) with prose noting task shipped + FBU open, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "(HIGH, task **v…** · FBU verification pending)"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "MoSCOW order:"
          }), " M → S → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "V"
          }), " → C → O → W."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-board.md"
            }), " removed:"]
          }), " No second active board or redirect stub. Terminal FBU history in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-completed.md"
          }), "; inventory in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-structure.md"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "intake-open-taskless-queue.md"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Step 7 three-surface contract"
          }), " (supersedes four-surface for active boards):"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task doc"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Source FR/BR/UXR doc(s)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " canonical row(s)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Row link order"
          }), " unchanged (UXR-010): task/FBU links → IPP segment → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Last modified"
          }), " stamp."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Phased tooling:"
          }), " Wave 1 (this ADR + live boards + policy); Wave 2 (validators, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "update_kanban_docs"
          }), ", UKW/RW guides); Wave 3 (framework install templates, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-config"
          }), " schema note, adopter migration guide)."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wave-3--framework-pack-adopters",
      children: "Wave 3 — framework pack (adopters)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fresh install:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py --mode fresh"
        }), " emits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " only (with V-band scaffold). No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board.md"
        }), ", or redirect stub."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Brownfield:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/guides/single-board-migration-adopter-note.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "rw-config.yaml"
          }), ":"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_board: kboard.md"
        }), " is sole active board; optional legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbu_board"
        }), " key is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deprecated"
        }), " (see ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config-schema.md"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternatives-considered",
      children: "Alternatives considered"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Option"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rejected because"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R2 — partial consolidate (C-band on kboard only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User chose R3; still two active surfaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Status quo — dual boards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate admin; user pain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " in V-band status token"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-109 blocks terminal statuses on active MoSCOW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive:"
        }), " One board to edit; verification queue visible on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), " V-band."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative:"
        }), " Validators and UKW must be updated (Wave 2); adopters with dual-board installs need migration note (Wave 3)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-092:"
        }), " Four-surface narrative amended to three-surface for active reconciliation; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        }), " ledger unchanged."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compliance",
      children: "Compliance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban governance policy § active board contract"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_active_kanban_board.py"
        }), " — fbuboard stub exempt from MoSCOW scan when no MoSCOW section present"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.4.19.12+1"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E04:S19:T12 --art"
        }), ")"]
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