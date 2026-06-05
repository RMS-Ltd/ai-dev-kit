"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["79191"], {
74402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_4_s_19_t_05_specification_md_dbf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-4-s-19-t-05-specification-md-dbf.json
var site_docs_implementation_cycles_icw_e_4_s_19_t_05_specification_md_dbf_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E4S19T05-specification","title":"ICW Specification — E4:S19:T05 kanban and FR/BR/UXR filename normalization","description":"Context","source":"@site/../docs/implementation-cycles/ICW-E4S19T05-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E4S19T05-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E4S19T05-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"draft","ttl_days":null,"created_at":"2026-04-25T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW Implementation Plan — E4:S19:T05 kanban and FR/BR/UXR filename normalization","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-implementation-plan"},"next":{"title":"ICW Test Design — E4:S19:T05 kanban and FR/BR/UXR filename normalization","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E4S19T05-specification.md


const frontMatter = {
	lifecycle: 'draft',
	ttl_days: null,
	created_at: new Date('2026-04-25T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW Specification — E4:S19 kanban and FR/BR/UXR filename normalization';

const assets = {

};



const toc = [{
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Goal",
  "id": "goal",
  "level": 2
}, {
  "value": "In Scope",
  "id": "in-scope",
  "level": 2
}, {
  "value": "Out of Scope",
  "id": "out-of-scope",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
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
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-specification--e4s19-kanban-and-frbruxr-filename-normalization",
        children: ["ICW Specification — E4:S19", ":T05", " kanban and FR/BR/UXR filename normalization"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The board defaults were standardized to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ", but supporting kanban/FR-BR-UXR documentation under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/"
      }), " still has mixed filename conventions, causing discoverability and link-drift friction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define and apply a canonical filename policy for in-scope kanban and FR/BR/UXR related docs, with deterministic migration mapping and compatibility-safe transition."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "in-scope",
      children: "In Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical filename policy for supporting kanban/FBU docs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In-scope inventory and old-name -> new-name mapping."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link and reference rewiring across docs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script/config path updates where renamed docs are referenced."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration/compatibility notes for legacy names."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "out-of-scope",
      children: "Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Renaming individual issue docs away from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UXR-"
        }), " prefixes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Renaming task files that follow EST task naming unless explicitly required."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Non-kanban documentation refactors outside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical naming policy is documented and linked from T05/UXR-008."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deterministic migration mapping exists for all renamed files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal markdown links resolve post-migration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow/script references for renamed docs are updated and validated."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatibility guidance exists for legacy filename references."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption",
          children: "UXR-008"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008",
          children: ["Task E4:S19", ":T05"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology",
          children: "FR-086"
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