"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["67895"], {
81096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_4_s_19_t_05_implementation_plan_md_1a7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-4-s-19-t-05-implementation-plan-md-1a7.json
var site_docs_implementation_cycles_icw_e_4_s_19_t_05_implementation_plan_md_1a7_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E4S19T05-implementation-plan","title":"ICW Implementation Plan — E4:S19:T05 kanban and FR/BR/UXR filename normalization","description":"Plan","source":"@site/../docs/implementation-cycles/ICW-E4S19T05-implementation-plan.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E4S19T05-implementation-plan","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-implementation-plan","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E4S19T05-implementation-plan.md","tags":[],"version":"current","frontMatter":{"lifecycle":"draft","ttl_days":null,"created_at":"2026-04-25T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW Specification: E4:S11:T07 - Migrate Embedded Tasks to Discrete Task Documents","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S11T07-specification"},"next":{"title":"ICW Specification — E4:S19:T05 kanban and FR/BR/UXR filename normalization","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E4S19T05-implementation-plan.md


const frontMatter = {
	lifecycle: 'draft',
	ttl_days: null,
	created_at: new Date('2026-04-25T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW Implementation Plan — E4:S19 kanban and FR/BR/UXR filename normalization';

const assets = {

};



const toc = [{
  "value": "Plan",
  "id": "plan",
  "level": 2
}, {
  "value": "Phase 1 — Policy and mapping",
  "id": "phase-1--policy-and-mapping",
  "level": 3
}, {
  "value": "Phase 2 — Controlled migration",
  "id": "phase-2--controlled-migration",
  "level": 3
}, {
  "value": "Phase 3 — Validation and rollout safety",
  "id": "phase-3--validation-and-rollout-safety",
  "level": 3
}, {
  "value": "Risks and Mitigations",
  "id": "risks-and-mitigations",
  "level": 2
}, {
  "value": "Completion Definition",
  "id": "completion-definition",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-implementation-plan--e4s19-kanban-and-frbruxr-filename-normalization",
        children: ["ICW Implementation Plan — E4:S19", ":T05", " kanban and FR/BR/UXR filename normalization"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "plan",
      children: "Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1--policy-and-mapping",
      children: "Phase 1 — Policy and mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define canonical filename grammar for supporting kanban/FBU docs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build migration manifest for in-scope files."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Publish mapping in task-linked planning docs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2--controlled-migration",
      children: "Phase 2 — Controlled migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rename files in atomic batches to reduce blast radius."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rewire markdown references and navigation links after each batch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update script/config references that target renamed files."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3--validation-and-rollout-safety",
      children: "Phase 3 — Validation and rollout safety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run kanban workflow dry-run and targeted tests."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run stale-reference scans across kanban docs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Publish legacy-name migration guidance and finalize cross-wiring."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "risks-and-mitigations",
      children: "Risks and Mitigations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk:"
        }), " Broad rename produces hidden broken links.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " batch migration + post-batch reference scans."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk:"
        }), " Script assumptions on legacy filenames break workflow runs.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " update config/script references and validate with dry-runs."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Risk:"
        }), " Scope creep into issue-file renaming (", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UXR-"
        }), ").", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mitigation:"
            }), " keep native issue prefixes explicitly out of scope."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "completion-definition",
      children: "Completion Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementation is complete when canonical names are applied to in-scope supporting docs, references/scripts validate cleanly, and migration guidance is published."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification",
          children: "ICW Specification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/ICW-E4S19T05-specification",
          children: "ICW Test Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008",
          children: ["Task E4:S19", ":T05"]
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