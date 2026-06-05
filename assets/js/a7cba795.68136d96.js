"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["49123"], {
32389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_007_book_governance_document_topology_md_a7c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-007-book-governance-document-topology-md-a7c.json
var site_docs_architecture_standards_and_adrs_adr_007_book_governance_document_topology_md_a7c_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-007-book-governance-document-topology","title":"ADR-007: Book workspace governance document topology","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-007-book-governance-document-topology","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-29T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-006: Book project private repository spin-off (preferred migration)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off"},"next":{"title":"ADR-008: Workflow Forensic Logging and Checkpoint Model","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-29T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-007: Book workspace governance document topology';

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
  "value": "Three-layer topology",
  "id": "three-layer-topology",
  "level": 3
}, {
  "value": "Disposition rules",
  "id": "disposition-rules",
  "level": 3
}, {
  "value": "Stub policy",
  "id": "stub-policy",
  "level": 3
}, {
  "value": "Active surfaces (link sweep scope)",
  "id": "active-surfaces-link-sweep-scope",
  "level": 3
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Positive",
  "id": "positive",
  "level": 3
}, {
  "value": "Negative / costs",
  "id": "negative--costs",
  "level": 3
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "adr-007-book-workspace-governance-document-topology",
        children: "ADR-007: Book workspace governance document topology"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-29", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision owner:"
      }), " Maintainer", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing work:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance",
        children: "FR-101"
      }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T11-consolidate-governance-under-docs-governance-fr101",
        children: ["E7:S01", ":T11"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance",
        children: "IPP-E7S1T11"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006"
      }), " (book vs public repo split), ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
        children: "GOVERNANCE-REHOUSING-INVENTORY.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006"
      }), ", the maintainer book workspace (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit-book"
      }), " / local ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ") still hosts ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "book-active"
      }), " governance policies under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/"
      }), ". Agents and maintainers lack a single navigation hub; paths duplicate or conflict with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "framework SoT"
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance",
        children: "FR-101"
      }), " requires inventory-first rehousing into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/governance/"
      }), " with stubs and targeted link sweeps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-layer-topology",
      children: "Three-layer topology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Framework (adopter SoT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/{kanban,workflow mgt,...}/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable policies, validators, templates for installed projects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Book governance (maintainer SoT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/{kanban,standards,principles}/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book-workspace copies and promoted principles used by RW/IPW/UKW on this repo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture (ADR + INDEX)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ADRs, operational reference guides, and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "INDEX-only"
            }), " docs cross-linked from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "disposition-rules",
      children: "Disposition rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MOVE"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git mv"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "stub"
            }), " at legacy path with “Moved to” banner and framework SoT link where applicable"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "INDEX"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["File stays in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/governance/README.md"
            }), " links prominently"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OUT"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Boards, epic/story/task trees, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br/"
            }), " intake queue (except stub after principle MOVE), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vendor/"
            }), ", framework packages"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "STUB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy path retained ≥ one release cycle (FR-101-NF1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stub-policy",
      children: "Stub policy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stubs use evergreen frontmatter and a single banner pointing to the new canonical path."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kanban policy stub ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must"
        }), " cite ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        }), " as adopter framework SoT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " bulk-rewrite changelog archives or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/knowledge/kb-migration-mcp-args/"
        }), "; update ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "active surfaces"
        }), " only (inventory §2)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "active-surfaces-link-sweep-scope",
      children: "Active surfaces (link sweep scope)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/*"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AGENTS.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-board-guide.md"
      }), ", portable RW excerpt (", (0,jsx_runtime.jsx)(_components.code, {
        children: "cursorrules-rw-trigger-section.md"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/README.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/governance/README.md"
      }), ", and inbound links from moved policy bodies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["One hub (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/governance/README.md"
        }), ") for book-active governance."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear separation: framework vs book vs ADR/index layers."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preserves git history via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git mv"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative--costs",
      children: "Negative / costs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Large reference surface; stubs required during transition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dual maintenance of book copy vs framework SoT until adopters sync from packages only."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "compliance",
      children: "Compliance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execution traceability: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
          children: "GOVERNANCE-REHOUSING-INVENTORY.md"
        }), " §4 execution log."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verification: IPP-E7S1T11 tests T1–T7."
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