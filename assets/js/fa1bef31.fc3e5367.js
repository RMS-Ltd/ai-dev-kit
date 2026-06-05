"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89669"], {
7164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_readme_md_fa1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-readme-md-fa1.json
var site_docs_implementation_cycles_readme_md_fa1_namespaceObject = JSON.parse('{"id":"implementation-cycles/README","title":"Implementation cycles (docs/implementation-cycles/)","description":"This directory holds durable planning outputs: ICW-style specifications, test designs, implementation plans, consolidated IPP packages (including documentation deliverables and housing), and related summaries linked from Kanban tasks.","source":"@site/../docs/implementation-cycles/README.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/","permalink":"/ai-dev-kit/docs/implementation-cycles/","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/README.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-01T16:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"PM-AGENT-002 Setup: Could Have Tasks Resolution","permalink":"/ai-dev-kit/docs/implementation-cycles/PM-AGENT-002-COULD-HAVE-SETUP"},"next":{"title":"RW-AGENT-001 Release Execution Summary: Completed Tasks Release","permalink":"/ai-dev-kit/docs/implementation-cycles/RW-AGENT-001-RELEASE-EXECUTION-SUMMARY"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/README.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-01T16:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Implementation cycles (docs/implementation-cycles/)';

const assets = {

};



const toc = [{
  "value": "Policy (read this first)",
  "id": "policy-read-this-first",
  "level": 2
}, {
  "value": "Naming",
  "id": "naming",
  "level": 2
}, {
  "value": "ICW configuration",
  "id": "icw-configuration",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}, {
  "value": "Publication discoverability contract (BR-066)",
  "id": "publication-discoverability-contract-br-066",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "implementation-cycles-docsimplementation-cycles",
        children: ["Implementation cycles (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This directory holds ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "durable"
      }), " planning outputs: ICW-style ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "specifications"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "test designs"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementation plans"
      }), ", consolidated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPP"
      }), " packages (including documentation deliverables and housing), and related summaries linked from Kanban ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tasks"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "policy-read-this-first",
      children: "Policy (read this first)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Where is the “real” spec?"
      }), " See ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy",
          children: "Specification and planning artifacts policy"
        })
      }), " — task docs and FRs own intent; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IDE-only"
      }), " plan folders are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " inventory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "naming",
      children: "Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prefer predictable filenames so grep and humans can find work by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "E/S/T"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E\\{epic\\}S\\{story\\}T\\{task\\}-\\{slug\\}.md"
        }), " (consolidated IPW output; preferred in ai-dev-kit)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E\\{epic\\}S\\{story\\}T\\{task\\}-specification.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E\\{epic\\}S\\{story\\}T\\{task\\}-test-design.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ICW-E\\{epic\\}S\\{story\\}T\\{task\\}-implementation-plan.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Batch ICW packages may use a range in the basename (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ICW-E7S06-T10-T16-*"
      }), ") when one cycle deliberately covers multiple tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "icw-configuration",
      children: "ICW configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Implementation Cycle Workflow declares ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "output_dir: docs/implementation-cycles"
        })
      }), " in:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["That path is part of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ICW’s responsibility"
      }), ": persist the three-phase package here (or the adopt project’s configured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "output_dir"
      }), "), link it from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "task doc"
      }), ", and do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " rely on editor-local ", (0,jsx_runtime.jsx)(_components.code, {
        children: "plans"
      }), " as the only copy. New automation or agents should ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "write here"
      }), ", not only under editor-local ", (0,jsx_runtime.jsx)(_components.code, {
        children: "plans"
      }), " paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-IMPLEMENTATION-SUMMARY",
          children: "ICW implementation summary"
        }), " (historical context)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/workflows/implementation-cycle-workflow/README.md",
          children: "Framework ICW README"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "publication-discoverability-contract-br-066",
      children: "Publication discoverability contract (BR-066)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Planning artifacts are only considered published when the host task doc links to the package in this directory (or marks publication as not applicable with reason)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reference package for this hardening task:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T01-test-design",
          children: "ICW-E2S15T1-specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T01-test-design",
          children: "ICW-E2S15T1-test-design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T01-test-design",
          children: "ICW-E2S15T1-implementation-plan"
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