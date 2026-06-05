"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["21030"], {
90868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_6_s_07_t_115_specification_md_149_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-6-s-07-t-115-specification-md-149.json
var site_docs_implementation_cycles_icw_e_6_s_07_t_115_specification_md_149_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E6S07T115-specification","title":"ICW Specification — E6:S07:T115 last-modified stamp forensic integrity guardrails","description":"Context","source":"@site/../docs/implementation-cycles/ICW-E6S07T115-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E6S07T115-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T115-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E6S07T115-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"draft","ttl_days":null,"created_at":"2026-04-20T13:18:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW Implementation Plan — E6:S07:T115 last-modified stamp forensic integrity guardrails","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T115-implementation-plan"},"next":{"title":"ICW Test Design — E6:S07:T115 last-modified stamp forensic integrity guardrails","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E6S07T115-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E6S07T115-specification.md


const frontMatter = {
	lifecycle: 'draft',
	ttl_days: null,
	created_at: new Date('2026-04-20T13:18:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW Specification — E6:S07 last-modified stamp forensic integrity guardrails';

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
        id: "icw-specification--e6s07-last-modified-stamp-forensic-integrity-guardrails",
        children: ["ICW Specification — E6:S07", ":T115", " last-modified stamp forensic integrity guardrails"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Board workflows currently rewrite ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " timestamps broadly during synchronization passes, even when no substantive work occurred on the linked task/FR/BR/UXR record. This destroys temporal-drift signal and forensic usefulness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define enforceable semantics and guardrails so row-level ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " stamps change only when substantive underlying work evidence exists."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "in-scope",
      children: "In Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Normative definition of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "substantive"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "non_substantive"
        }), " updates."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW/RW board-mutation guardrails for stamp preservation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evidence-driven timestamp derivation from linked canonical records."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validator/audit requirements for detecting synthetic mass stamp churn."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression scenarios for rewrite-only vs work-driven updates."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "out-of-scope",
      children: "Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retroactive rewrite of historical timestamps without evidence."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broad board taxonomy or MoSCOW-priority policy redesign."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unrelated workflow refactors outside timestamp integrity paths."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Policy explicitly states board rewrite alone must not mutate per-row ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update paths mutate stamps only when linked source evidence is substantive."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation detects anomalous mass timestamp churn without source deltas."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW/RW outputs include stamp-integrity audit counters for forensic review."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression tests prove no-op rewrites keep timestamps stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection",
          children: "UXR-009"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails",
          children: ["Task E6:S07", ":T115"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T110-ukw-fbuboard-scope-and-drift-concurrency-controls",
          children: ["Task E6:S07", ":T110"]
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