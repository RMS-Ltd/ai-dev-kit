"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["84829"], {
81476(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_6_s_07_t_114_specification_md_e22_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-6-s-07-t-114-specification-md-e22.json
var site_docs_implementation_cycles_icw_e_6_s_07_t_114_specification_md_e22_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E6S07T114-specification","title":"ICW Specification — E6:S07:T114 canonical board filename migration","description":"Context","source":"@site/../docs/implementation-cycles/ICW-E6S07T114-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E6S07T114-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T114-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E6S07T114-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"draft","ttl_days":null,"created_at":"2026-04-20T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW Implementation Plan — E6:S07:T114 canonical board filename migration","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T114-implementation-plan"},"next":{"title":"ICW Test Design — E6:S07:T114 canonical board filename migration","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T114-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E6S07T114-specification.md


const frontMatter = {
	lifecycle: 'draft',
	ttl_days: null,
	created_at: new Date('2026-04-20T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW Specification — E6:S07 canonical board filename migration';

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
        id: "icw-specification--e6s07-canonical-board-filename-migration",
        children: ["ICW Specification — E6:S07", ":T114", " canonical board filename migration"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Board naming defaults were implemented (", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ") before formal planning artifacts were created. This specification backfills the contract so implementation and verification are traceable and reproducible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define canonical board filenames and required compatibility behavior across project docs, framework packages, and workflow scripts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "in-scope",
      children: "In Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical defaults:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["task board: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["FR/BR/UXR board: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation references updated to canonical names for active guidance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Script/install defaults updated to canonical names."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Legacy alias support retained for:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fr-br-uxr-board.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "out-of-scope",
      children: "Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Historical changelog archive rewrites."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forced removal of legacy aliases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release/tag creation in this task."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active docs and packaged framework docs point to canonical board names."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow scripts default to canonical names and still resolve legacy aliases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing board-update edge test suite remains green."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docusaurus production build succeeds after documentation updates."
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
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard",
          children: ["Task E6:S07", ":T114"]
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