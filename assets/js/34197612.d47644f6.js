"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["16551"], {
90440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_7_s_06_t_18_implementation_plan_md_341_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-7-s-06-t-18-implementation-plan-md-341.json
var site_docs_implementation_cycles_icw_e_7_s_06_t_18_implementation_plan_md_341_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E7S06T18-implementation-plan","title":"ICW E7:S06:T18 — Implementation plan (UXR-007)","description":"Host taskS06:T18","source":"@site/../docs/implementation-cycles/ICW-E7S06T18-implementation-plan.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E7S06T18-implementation-plan","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-implementation-plan","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E7S06T18-implementation-plan.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-10T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW Test Design: E7:S06:T10-T16 – Workflow Windsurf Impact Reviews","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06-T10-T16-test-design"},"next":{"title":"ICW E7:S06:T18 — Specification (UXR-007)","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-specification"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E7S06T18-implementation-plan.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-10T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW E7:S06 — Implementation plan (UXR-007)';

const assets = {

};



const toc = [{
  "value": "Ordered actions (as planned)",
  "id": "ordered-actions-as-planned",
  "level": 2
}, {
  "value": "Files touched (expected)",
  "id": "files-touched-expected",
  "level": 2
}, {
  "value": "Dependency order",
  "id": "dependency-order",
  "level": 2
}, {
  "value": "As-delivered notes (<code>v0.7.6.18+1</code>)",
  "id": "as-delivered-notes-v076181",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "icw-e7s06--implementation-plan-uxr-007",
        children: ["ICW E7:S06", ":T18", " — Implementation plan (UXR-007)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host task:"
      }), " E7:S06", ":T18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Specification:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-implementation-plan",
        children: "ICW-E7S6T18-specification.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ordered-actions-as-planned",
      children: "Ordered actions (as planned)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action:"
          }), " Add pattern validation helper(s) in RW installer path collection logic for epic/story placeholders and semantic checks.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deliverable:"
          }), " Early rejection of non-templated patterns with remediation guidance."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action:"
          }), " Improve Kanban prompt copy with explicit “relative to kanban_root” semantics and examples based on common layouts.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deliverable:"
          }), " Revised prompt/help strings for epic/story/board fields."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action:"
          }), " Implement pattern match preview against selected root while collecting inputs.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deliverable:"
          }), " Match count + sample paths + zero-match alternatives in interactive flow."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action:"
          }), " Add/configure root propagation contract between RW installer output and Kanban installer invocation path.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deliverable:"
          }), " Consistent root usage when running chained install commands."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action:"
          }), " Introduce canonical end-of-run status aggregator for chained outcomes and remove contradictory completion messaging.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deliverable:"
          }), " Single authoritative run-state banner."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action:"
          }), " Improve ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), " existing-trigger handling with guided reconciliation message (and optional diff artifact path).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deliverable:"
          }), " Reduced manual ambiguity when trigger section already exists."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Action:"
          }), " Add/update tests for validation, preview, propagation, and run-state messaging.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Deliverable:"
          }), " Regression coverage aligned to T1–T9."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "files-touched-expected",
      children: "Files touched (expected)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/scripts/install_kanban_framework.py"
          })
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/validate_installation.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/scripts/validate_installation.py"
          })
        }), " (if root-aware checks require updates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installer user docs under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/user-docs/"
        }), " that describe interactive configuration prompts"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Host task and UXR docs for implementation evidence after coding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependency-order",
      children: "Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Placeholder validation and prompt semantics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Match preview behaviour."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-tool root propagation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical final status messaging."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existing-trigger reconciliation UX."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests and docs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "as-delivered-notes-v076181",
      children: ["As-delivered notes (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.7.6.18+1"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Delivered behaviour matches ordered actions ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1–5"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "7"
      }), " (validators, prompts, preview, root adoption, status banners, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_install_release_workflow_patterns.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_install_release_workflow_patterns.py"
        })
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Action 6 (existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " trigger):"]
      }), " Implemented as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "detect duplicate RW trigger → skip append, print guidance, collect warning → PARTIAL"
      }), " in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py"
        })
      }), ". An optional ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "diff artifact path"
      }), " was not implemented; operators reconcile manually."]
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