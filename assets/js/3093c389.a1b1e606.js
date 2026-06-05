"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["29626"], {
14611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_080_kanban_fresh_mode_validation_requires_force_on_empty_repo_md_309_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-080-kanban-fresh-mode-validation-requires-force-on-empty-repo-md-309.json
var site_docs_project_management_kanban_fr_br_br_080_kanban_fresh_mode_validation_requires_force_on_empty_repo_md_309_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo","title":"Bug Report BR-080: Kanban Fresh Mode Pre-Install Validation Fails Without --force","description":"Bug ID: BR-080","source":"@site/../docs/project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T17:40:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-079: Kanban Fresh Install — Epic 22 and 23 Placeholder Only","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-079-kanban-fresh-install-epic-22-23-placeholder-only"},"next":{"title":"Bug Report BR-081: install_kanban_framework.py Uses Deprecated datetime.utcnow()","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T17:40:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-080: Kanban Fresh Mode Pre-Install Validation Fails Without --force';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Steps to Reproduce",
  "id": "steps-to-reproduce",
  "level": 2
}, {
  "value": "Actual",
  "id": "actual",
  "level": 2
}, {
  "value": "Expected",
  "id": "expected",
  "level": 2
}, {
  "value": "Workaround",
  "id": "workaround",
  "level": 2
}, {
  "value": "Attempted fix (E06:S09)",
  "id": "attempted-fix-e06s09",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    del: "del",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-080-kanban-fresh-mode-pre-install-validation-fails-without---force",
        children: ["Bug Report BR-080: Kanban Fresh Mode Pre-Install Validation Fails Without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-080", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH (first-run install aborts; book must document ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--force"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (verified ExpensesTracker fresh install without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--force"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-06-04"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/12",
        children: "#12"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T09-kanban-fresh-mode-validation-br080",
        children: ["E06:S09", ":T09"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Book dry-run (ExpensesTracker T03 Step 1); ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "84efa7b"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "install_kanban_framework.py --mode fresh"
      }), " (without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--force"
      }), ") aborts on empty repo because pre-install validation reports missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/"
      }), " directory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New project with no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--mode fresh"
        }), " (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actual",
      children: "Actual"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "❌ ERRORS (must be fixed before installation):\n  ❌ Required directory missing: epics\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fresh"
      }), " mode skips or relaxes validation that assumes an existing tree, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "or"
      }), " creates skeleton before validation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workaround",
      children: "Workaround"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.del, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--mode fresh --force"
        }), " (documented in book packet)."]
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Superseded:"
      }), " use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--mode fresh"
      }), " alone on empty repos (BR-080 fix, E06:S09", ":T09", ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "attempted-fix-e06s09",
      children: ["Attempted fix (E06:S09", ":T09", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ensure_fresh_install_skeleton()"
        }), " creates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/"
        }), " before pre-install validation in fresh mode."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dry-run fresh uses relaxed skeleton validation (warning, not error)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Non-fresh modes: epics missing error includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--mode fresh"
        }), " guidance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tests: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/kanban/test_install_fresh_validation.py"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-078-kanban-fresh-install-structure-template-missing",
          children: "BR-078"
        }), " — same dry-run context"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Empty-repo fresh install succeeds without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " CLI prints explicit first-run guidance before abort."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validation order: create skeleton → validate (if validation retained)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), " / greenfield path updated."]
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