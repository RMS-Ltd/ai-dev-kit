"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["46323"], {
67741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_use_cases_readme_md_13c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-use-cases-readme-md-13c.json
var site_docs_architecture_use_cases_readme_md_13c_namespaceObject = JSON.parse('{"id":"architecture/use-cases/README","title":"Canonical Use Cases","description":"Purpose: Design-phase use cases identified during architecture and design planning","source":"@site/../docs/architecture/use-cases/README.md","sourceDirName":"architecture/use-cases","slug":"/architecture/use-cases/","permalink":"/ai-dev-kit/docs/architecture/use-cases/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/use-cases/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T07:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Workflow Hardening Guide for Agent‑Driven Release Processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/workflow-hardening-guide"},"next":{"title":"Use Case: [Title]","permalink":"/ai-dev-kit/docs/architecture/use-cases/CANONICAL_USE_CASE_TEMPLATE"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/use-cases/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T07:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Canonical Use Cases';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Quick Navigation",
  "id": "quick-navigation",
  "level": 2
}, {
  "value": "Use Case Types",
  "id": "use-case-types",
  "level": 2
}, {
  "value": "Canonical Use Cases (This Directory)",
  "id": "canonical-use-cases-this-directory",
  "level": 3
}, {
  "value": "Related Documentation",
  "id": "related-documentation",
  "level": 2
}, {
  "value": "Creating Canonical Use Cases",
  "id": "creating-canonical-use-cases",
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
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "canonical-use-cases",
        children: "Canonical Use Cases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Design-phase use cases identified during architecture and design planning", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/use-cases/"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Canonical (planned, designed before implementation)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canonical use cases are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "design-phase use cases"
      }), " that are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planned and intentional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Part of original design/architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documented before implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stable and well-defined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Part of framework/product design"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These use cases inform system architecture, requirements engineering, and design decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-navigation",
      children: "Quick Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/use-cases/canonical/",
            children: "Canonical Use Cases"
          })
        }), " - Design-phase use cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/use-cases/CANONICAL_USE_CASE_TEMPLATE",
            children: "Template"
          })
        }), " - Template for creating canonical use cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY",
            children: "Methodology"
          })
        }), " - Complete use case methodology guide"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-case-types",
      children: "Use Case Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "canonical-use-cases-this-directory",
      children: "Canonical Use Cases (This Directory)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/use-cases/canonical/",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "canonical/"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Use cases identified and documented during the design/planning phase, before implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Characteristics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Planned and intentional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Part of original design/architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documented before implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stable and well-defined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inform architecture and design decisions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework adoption patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow execution patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Versioning patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban organization patterns"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-documentation",
      children: "Related Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/use-cases/discovered/",
            children: "Discovered Use Cases"
          })
        }), " - Implementation-phase discovered use cases (in knowledge base)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/knowledge/USE_CASE_METHODOLOGY",
            children: "Use Case Methodology"
          })
        }), " - Complete methodology guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
            children: "Architecture Standards (versioning policy)"
          })
        }), " - Architecture decision records and standards"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-canonical-use-cases",
      children: "Creating Canonical Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/use-cases/CANONICAL_USE_CASE_TEMPLATE",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CANONICAL_USE_CASE_TEMPLATE.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Canonical/"
        }), " directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow naming convention: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UC-XXX-[title].md"
        }), " (UC implies canonical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Canonical/README.md"
        }), " index"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to related architecture documents and design decisions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This section is part of Architecture documentation. Canonical use cases inform system design and architecture decisions."
      })
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