"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["21516"], {
88040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_governance_readme_md_f25_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-governance-readme-md-f25.json
var site_docs_governance_readme_md_f25_namespaceObject = JSON.parse('{"id":"governance/README","title":"Governance documentation (book workspace)","description":"Status: Active (FR-101 complete v0.7.1.11+8) — ADR-007 · FR-101","source":"@site/../docs/governance/README.md","sourceDirName":"governance","slug":"/governance/","permalink":"/ai-dev-kit/docs/governance/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/governance/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-29T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/governance/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-29T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Governance documentation (book workspace)';

const assets = {

};



const toc = [{
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Standards (<code>governance/standards/</code>)",
  "id": "standards-governancestandards",
  "level": 2
}, {
  "value": "Kanban (<code>governance/kanban/</code>)",
  "id": "kanban-governancekanban",
  "level": 2
}, {
  "value": "Principles (<code>governance/principles/</code>)",
  "id": "principles-governanceprinciples",
  "level": 2
}, {
  "value": "Index-only (remain in <code>docs/architecture/standards-and-adrs/</code>)",
  "id": "index-only-remain-in-docsarchitecturestandards-and-adrs",
  "level": 2
}, {
  "value": "Inventory and task",
  "id": "inventory-and-task",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
        id: "governance-documentation-book-workspace",
        children: "Governance documentation (book workspace)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active (FR-101 complete ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.7.1.11+8"
      }), ") — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology",
        children: "ADR-007"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-101-consolidate-governance-under-docs-governance",
        children: "FR-101"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Single navigation entry for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "book-active"
      }), " governance: Kanban rules, versioning/changelog policy, IPW/IPP packaging, principles, and cross-links to ADRs and reference guides under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework SoT:"
      }), " Packaged policies under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      }), " remain authoritative for adopters. This tree holds ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maintainer book workspace"
      }), " copies; stubs at legacy paths point here."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "standards-governancestandards",
      children: ["Standards (", (0,jsx_runtime.jsx)(_components.code, {
        children: "governance/standards/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/standards/dev-kit-versioning-policy",
          children: "dev-kit-versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/standards/changelog-archival-policy",
          children: "changelog-archival-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/standards/specification-and-planning-artifacts-policy",
          children: "specification-and-planning-artifacts-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts",
          children: "dev-kit-ipw-ipp-vs-icw-artifacts.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "kanban-governancekanban",
      children: ["Kanban (", (0,jsx_runtime.jsx)(_components.code, {
        children: "governance/kanban/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/kanban/kanban-governance-policy",
          children: "kanban-governance-policy.md"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/kanban/",
          children: "README"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "principles-governanceprinciples",
      children: ["Principles (", (0,jsx_runtime.jsx)(_components.code, {
        children: "governance/principles/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/principles/bidirectional-wiring-principle",
          children: "bidirectional-wiring-principle.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "index-only-remain-in-docsarchitecturestandards-and-adrs",
      children: ["Index-only (remain in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
          children: "ADR-006"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology",
          children: "ADR-007"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing",
          children: "ADR-012"
        }), " — agent bootstrap and task routing (manifest + slim ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-013-ide-command-allowlist-catalog-and-enforcement",
          children: "ADR-013"
        }), " — IDE command allowlist catalog (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/developer-tools/ide-whitelist-guide",
          children: "guide"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d",
          children: "ADR-014"
        }), " — repository vs abstract-space Kanban model (FR-072 Approach D)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-flaws-reference-guide",
          children: "Workflow flaws reference"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/versioning-error-reference-guide",
          children: "Versioning error reference"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inventory-and-task",
      children: "Inventory and task"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phase 0 SoT:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/GOVERNANCE-REHOUSING-INVENTORY",
          children: "GOVERNANCE-REHOUSING-INVENTORY.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPP:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E7S01T11-consolidate-governance-under-docs-governance",
          children: "IPP-E7S1T11"
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