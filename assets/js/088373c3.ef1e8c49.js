"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["31453"], {
73750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_064_rw_dev_branch_should_not_enforce_epic_lock_md_088_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-064-rw-dev-branch-should-not-enforce-epic-lock-md-088.json
var site_docs_project_management_kanban_fr_br_br_064_rw_dev_branch_should_not_enforce_epic_lock_md_088_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock","title":"Bug Report BR-064 - RW dev branch should not enforce epic lock","description":"Status: COMPLETE","source":"@site/../docs/project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-09T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-063 — RW -k task attribution drift (requested task vs version anchor)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor"},"next":{"title":"Bug Report BR-065 - RW Step 12.5 GitHub release parser fails on v-prefixed version","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-09T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-064 - RW dev branch should not enforce epic lock';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 2
}, {
  "value": "Reproduction",
  "id": "reproduction",
  "level": 2
}, {
  "value": "Proposed Resolution",
  "id": "proposed-resolution",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
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
        id: "bug-report-br-064---rw-dev-branch-should-not-enforce-epic-lock",
        children: ["Bug Report BR-064 - RW ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " branch should not enforce epic lock"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " CRITICAL", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH - release workflow blocker for intended single-branch development usage.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-09 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.2.1.16+1"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.16+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-064", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T16-rw-dev-branch-neutral-context-no-epic-lock-br064",
        children: ["E02:S01", ":T16"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RW Step 1 branch validation currently treats ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " as epic-bound context (via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev_branch_epic"
      }), " mapping), which blocks valid ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW ... --art"
      }), " flows when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version.py"
      }), " epic differs from that configured value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This conflicts with the operational intent of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " as a neutral integration branch used to reduce branch-friction for ongoing maintenance and cross-epic workflow work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When running on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), ", branch validation should:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "skip strict epic/version equality checks,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "still run safety checks that are branch-agnostic (format, docs-only guardrails, etc.),"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["allow ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -d"
        }), " flows to proceed if all other guards pass."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validator failure:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Version mismatch: Branch 'dev' expects Epic 2 but version '0.6.7.110+1' has Epic 6"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This causes Step 1 hard-fail and aborts RW before execution can begin."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Checkout ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev_branch_epic: 2"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use a version anchored to a different epic (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.110+1"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run Step 1 validator in strict mode:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "python3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe failure on forced epic lock for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution",
      children: "Proposed Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Treat ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " for epic/version enforcement (neutral context)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remove ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " strict-epic dependency path from validator logic."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep all non-epic validation behavior unchanged."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document this as explicit policy to prevent reintroduction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-006-dev-branch-and-rw-validator-relaxation",
          children: "UXR-006"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment",
          children: "BR-061"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs",
          children: ["Story E2", ":S01"]
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