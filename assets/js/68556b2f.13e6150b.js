"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["97500"], {
71293(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_082_rw_install_missing_pyyaml_preflight_md_685_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-082-rw-install-missing-pyyaml-preflight-md-685.json
var site_docs_project_management_kanban_fr_br_br_082_rw_install_missing_pyyaml_preflight_md_685_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight","title":"Bug Report BR-082: RW Install Fails Without Venv PyYAML — No Preflight Hint","description":"Bug ID: BR-082","source":"@site/../docs/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T17:40:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-081: install_kanban_framework.py Uses Deprecated datetime.utcnow()","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated"},"next":{"title":"Bug Report BR-083: RW Install Default Epic/Story Patterns Mismatch Fresh Kanban Layout","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T17:40:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-082: RW Install Fails Without Venv PyYAML — No Preflight Hint';

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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-082-rw-install-fails-without-venv-pyyaml--no-preflight-hint",
        children: "Bug Report BR-082: RW Install Fails Without Venv PyYAML — No Preflight Hint"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-082", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH (hard stop on first RW install after submodule-only setup)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " FIXED (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/14",
        children: "#14"
      }), " closed; RW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.16.4+30"
      }), " / E02:S16", ":T04", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/14",
        children: "#14"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T11-rw-install-pyyaml-preflight-br082",
        children: ["E06:S09", ":T11"]
      }), " — ✅ COMPLETE (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.11+2"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Book dry-run (ExpensesTracker T03 Step 3); ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vendor/ai-dev-kit"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "84efa7b"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py --mode c"
      }), " fails with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ERROR: PyYAML is required"
      }), " when consumer venv lacks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pyyaml"
      }), ", with no preflight listing minimal deps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Submodule + kit ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".venv"
        }), " without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py --mode c"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actual",
      children: "Actual"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ERROR: PyYAML is required. Install with: pip install pyyaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document required venv deps before first run, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preflight with actionable message (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pyyaml>=6.0"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), "), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--bootstrap-venv"
        }), " / link to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install -e ./vendor/ai-dev-kit"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workaround",
      children: "Workaround"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "source .venv/bin/activate\npip install 'pyyaml>=6.0'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), " mentions PyYAML failure but not wired into submodule-only T03 path."]
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
          checked: true,
          disabled: true
        }), " ", "Installer preflight or docs cover PyYAML before interactive RW install (attempted — ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E06:S09", ":T11"]
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Greenfield/book spine Step 3 does not dead-end without deps list (", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), " Step 3b)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Error message cites ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), " / minimal install one-liner (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install 'pyyaml>=6.0'"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install -e"
        }), " kit path)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " ✅ Operator confirmed (2026-06-05) — expenses-tracker install path resolved; #14 closed."]
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