"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["14180"], {
11913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_2_s_15_t_05_specification_md_84b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-2-s-15-t-05-specification-md-84b.json
var site_docs_implementation_cycles_icw_e_2_s_15_t_05_specification_md_84b_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E2S15T05-specification","title":"ICW E2:S15:T05 Specification","description":"Problem","source":"@site/../docs/implementation-cycles/ICW-E2S15T05-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E2S15T05-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T05-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E2S15T05-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-22T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW E2:S15:T05 Implementation Plan","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T05-implementation-plan"},"next":{"title":"ICW E2:S15:T05 Test Design","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E2S15T05-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E2S15T05-specification.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-22T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW E2:S15 Specification';

const assets = {

};



const toc = [{
  "value": "Problem",
  "id": "problem",
  "level": 2
}, {
  "value": "Objectives",
  "id": "objectives",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Scope Boundaries",
  "id": "scope-boundaries",
  "level": 2
}, {
  "value": "In Scope",
  "id": "in-scope",
  "level": 3
}, {
  "value": "Out of Scope",
  "id": "out-of-scope",
  "level": 3
}, {
  "value": "Invariants",
  "id": "invariants",
  "level": 2
}, {
  "value": "Traceability",
  "id": "traceability",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "icw-e2s15-specification",
        children: ["ICW E2:S15", ":T05", " Specification"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem",
      children: "Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "update_kanban_docs.py"
      }), " currently applies row-tail mutations through multiple helper chains with path-dependent ordering between RW and UKW flows. This enables repeated task/FBU/IPP segments and duplicate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Last modified"
      }), " footer behavior under some row states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "objectives",
      children: "Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define one canonical parse-normalize-render contract shared by RW and UKW."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enforce board-specific ordering contracts, especially ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " FBU-first rendering."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve forensic-safe timestamp semantics while preventing synthetic second footer append."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guarantee idempotent repeated runs on both clean and historically corrupted rows."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared Pipeline Requirement:"
        }), " RW and UKW must call one shared canonical row-transform entrypoint and remove ordering divergence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Structured Row Model Requirement:"
        }), " Transform behavior must operate on a parsed row model (tokens/segments/footer metadata), not append-style string mutation chains."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board Contract Requirement:"
        }), " Board render contracts are explicit and deterministic:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fbuboard"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FBU -> Task -> IPP -> Last modified"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kboard"
            }), ": task-led contract with deterministic terminal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last modified"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timestamp Requirement:"
        }), " If a valid row timestamp is already present, the pipeline must not append a synthetic second ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " only because of prior non-terminal placement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deduplication Requirement:"
        }), " At canonical output, each semantic segment class appears at most once (task link, FBU link, IPP link, footer)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divergence Safety Requirement:"
        }), " For unresolved footer divergence, behavior remains forensic-safe and non-destructive with explicit diagnostics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parity and Idempotency Requirement:"
        }), " Identical fixtures processed through RW and UKW must produce byte-identical row outputs; repeated runs are stable."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-boundaries",
      children: "Scope Boundaries"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "in-scope",
      children: "In Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical row-tail transform architecture for MoSCOW rows in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration points used by RW Step 7 and standalone UKW maintenance passes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression coverage proving parity, idempotency, and duplicate-segment elimination."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-scope",
      children: "Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reprioritization policy changes (MoSCOW strategy changes)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broad rewrite of unrelated kanban governance validators."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One-off manual board cleanup instructions outside deterministic transform behavior."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "invariants",
      children: "Invariants"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical row output has one deterministic terminal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Last modified"
        }), " chunk."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical row output has no multiplied FBU/task/IPP segments."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical row ordering for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fbuboard"
        }), " is always FBU before Task."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical output for a fixture is context-invariant (RW vs UKW)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "traceability",
      children: "Traceability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Upstream FR: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-090"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Defect record: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-069"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evidence basis: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPP-E2S15T4"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementing task: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S15:T05"
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