"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["91606"], {
68459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_071_docusaurus_site_search_md_91e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-071-docusaurus-site-search-md-91e.json
var site_docs_project_management_kanban_fr_br_fr_071_docusaurus_site_search_md_91e_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-071-docusaurus-site-search","title":"Feature Request: Docusaurus Site Search","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-071-docusaurus-site-search.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-071-docusaurus-site-search","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-071-docusaurus-site-search","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-071-docusaurus-site-search.md","tags":[],"version":"current","frontMatter":{"lifecycle":"proposed","ttl_days":null,"created_at":"2026-03-30T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: Docusaurus Deployment and Hosting","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting"},"next":{"title":"Feature Request: Uniform Repository vs Abstract-Space Kanban Rules (Cross-Epic)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-071-docusaurus-site-search.md


const frontMatter = {
	lifecycle: 'proposed',
	ttl_days: null,
	created_at: new Date('2026-03-30T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Docusaurus Site Search';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Scope (Atomic)",
  "id": "scope-atomic",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 2
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies / Ordering",
  "id": "dependencies--ordering",
  "level": 2
}, {
  "value": "Related FRs",
  "id": "related-frs",
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
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "feature-request-docusaurus-site-search",
        children: "Feature Request: Docusaurus Site Search"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-071", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-03-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (via agent)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " LOW", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.5.9.7+1"
      }), ") — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Local search"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@easyops-cn/docusaurus-search-local"
      }), "); contract tests + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/README.md"
      }), " smoke queries. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AC1 (live queries):"
      }), " verify on production URL after deploy if Pages is enabled (", (0,jsx_runtime.jsx)(_components.code, {
        children: "gh-pages"
      }), " / root).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned Task:"
      }), " E05:S09", ":T07", " — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T07-docusaurus-search-fr-071",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T07-docusaurus-search-fr-071.md"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "site search"
      }), " to the Docusaurus deployment using either ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algolia DocSearch"
      }), " (or Algolia self-serve) or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "local/offline search"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@easyops-cn/docusaurus-search-local"
      }), " or official local search when compatible), including config in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docusaurus.config.js"
      }), ", any required ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "secrets/indexing"
      }), " steps documented in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/README.md"
      }), ", and verification on the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "production URL"
      }), " (FR-070)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Large KB navigation (FR-068) helps browsing but does not replace ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "full-text search"
      }), ". Adopters and maintainers expect to find policies and workflows by keyword."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-atomic",
      children: "Scope (Atomic)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In scope"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Choose one approach: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Algolia"
        }), " (DocSearch application + crawl) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "local search"
        }), " plugin—document rationale (privacy, cost, indexing effort)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement plugin/theme config; ensure ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm run build"
          })
        }), " still passes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document: how indexes update (on deploy, cron, or manual), and env vars required for CI if any."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing search ranking algorithms beyond plugin defaults."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unified search across external Notion (Notion remains separate entry point unless a future FR)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-071", ":R01"]
        }), " – Search box appears in site header (or theme-supported location). ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Local search theme — navbar.)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-071", ":R02"]
        }), " – Queries return results for representative pages (smoke test checklist in README). ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Checklist in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/README.md"
          }), "; confirm on live site after deploy.)"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-071", ":R03"]
        }), " – Production site (post FR-070) has search ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enabled"
        }), " or documented blockers (e.g. DocSearch approval pending) with ETA/owner. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Enabled in static build: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "build/search-index.json"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "build/search/"
          }), "; live site depends on FR-070 Pages + deploy.)"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-071", ":NF01"]
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy:"
        }), " If Algolia, document what is sent; if local-only, state no third-party queries. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "(Local-only; README Privacy.)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-071", ":NF02"]
        }), " – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Build time:"
        }), " Local search must not explode CI duration beyond agreed team threshold (document observed duration). ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(~2 min reference in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/README.md"
          }), ".)"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC1: Search works on deployed site for a defined set of test queries. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Defined; ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "verify"
          }), " on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://rms-ltd.github.io/ai-dev-kit/"
          }), " after publish.)"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC2: Setup steps are reproducible for another maintainer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC3: No regression: production build and FR-069 workflow remain green. ", (0,jsx_runtime.jsxs)(_components.em, {
          children: ["(Contract tests + local ", (0,jsx_runtime.jsx)(_components.code, {
            children: "npm run build"
          }), ".)"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies--ordering",
      children: "Dependencies / Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-067"
        }), " (green build), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-070"
        }), " (public URL for final verification). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-068"
        }), " optional but improves browse→search UX."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-frs",
      children: "Related FRs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-065"
        }), "–", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-070"
        }), " – Full adoption chain."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-066"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-067"
        }), " – Corpus scope affects index size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docusaurus.io/docs/search",
          children: "Docusaurus search"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/docusaurus.config.js"
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