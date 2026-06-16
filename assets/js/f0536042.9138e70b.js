"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4578"], {
9828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_guides_adk_install_expenses_tracker_fresh_repo_md_f05_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-guides-adk-install-expenses-tracker-fresh-repo-md-f05.json
var site_docs_guides_adk_install_expenses_tracker_fresh_repo_md_f05_namespaceObject = JSON.parse('{"id":"guides/adk-install-expenses-tracker-fresh-repo","title":"ADK install — Expenses Tracker (fresh repository)","description":"Use this checklist when starting from a new blank GitHub repository (no prior kanban tree). Validates UXR-017 / E04T11 AC5.","source":"@site/../docs/guides/adk-install-expenses-tracker-fresh-repo.md","sourceDirName":"guides","slug":"/guides/adk-install-expenses-tracker-fresh-repo","permalink":"/ai-dev-kit/docs/guides/adk-install-expenses-tracker-fresh-repo","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/guides/adk-install-expenses-tracker-fresh-repo.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","created_at":"2026-06-04T18:00:00Z","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Guides","permalink":"/ai-dev-kit/docs/guides/"},"next":{"title":"Adopter install attempt preflight","permalink":"/ai-dev-kit/docs/guides/adopter-install-attempt-preflight"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/guides/adk-install-expenses-tracker-fresh-repo.md


const frontMatter = {
	lifecycle: 'evergreen',
	created_at: '2026-06-04T18:00:00Z',
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADK install — Expenses Tracker (fresh repository)';

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Expected kanban path layout (write-default)",
  "id": "expected-kanban-path-layout-write-default",
  "level": 2
}, {
  "value": "rw-config.yaml (minimum)",
  "id": "rw-configyaml-minimum",
  "level": 2
}, {
  "value": "Verification commands (from repo root)",
  "id": "verification-commands-from-repo-root",
  "level": 2
}, {
  "value": "GitHub Issue sign-off (upstream ai-dev-kit)",
  "id": "github-issue-sign-off-upstream-ai-dev-kit",
  "level": 2
}, {
  "value": "Record evidence",
  "id": "record-evidence",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "adk-install--expenses-tracker-fresh-repository",
        children: "ADK install — Expenses Tracker (fresh repository)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use this checklist when starting from a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new blank GitHub repository"
      }), " (no prior kanban tree). Validates ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming.md",
        children: "UXR-017"
      }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md",
        children: ["E04:S19", ":T11"]
      }), " AC5."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ADK workflow/kanban packages installed per your project’s installer (submodule, copy, or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py"
        }), " flow)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " at project root with kanban enabled."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-kanban-path-layout-write-default",
      children: "Expected kanban path layout (write-default)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "docs/kanban/epics/epic-04/epic-04.md\ndocs/kanban/epics/epic-04/story-19-{slug}.md\ndocs/kanban/epics/epic-04/story-19-{slug}/T11-{slug}.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rules (ADR-015):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Lowercase ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-*"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T*"
        }), " filename prefixes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2-digit"
        }), " epic/story/task segments when ID ≤ 99 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-04"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-19"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T11"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3-digit"
        }), " when ID > 99 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-100"
        }), ", etc.)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rw-configyaml-minimum",
      children: "rw-config.yaml (minimum)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "use_kanban: true\nkanban_root: docs/kanban\nepic_doc_pattern: epics/epic-{epic:02d}/epic-{epic:02d}.md\nstory_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*.md\ntask_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*/T{task:02d}-*.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification-commands-from-repo-root",
      children: "Verification commands (from repo root)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# No capitalised Epic-/Story- path segments; padded lowercase segments\npython packages/frameworks/workflow\\ mgt/scripts/validation/validate_kanban_naming.py --strict\n\n# RW task resolution (example task after you file one)\npython packages/frameworks/workflow\\ mgt/scripts/validation/validate_rw_task_intent.py --requested \"E04:S19:T11\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "github-issue-sign-off-upstream-ai-dev-kit",
      children: "GitHub Issue sign-off (upstream ai-dev-kit)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After install, the RW/kanban installers print a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contract-driven"
      }), " report of which ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), " issues are ready to close (BR-083/084/082, UXR-017 paths, etc.). See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/github-issue-install-signoff",
        children: "github-issue-install-signoff.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow\\ mgt/scripts/install_github_issue_signoff.py \\\n  --project-root . --list-open-awaiting\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--close-github-issues"
      }), " only when you intend to close ready issues via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gh"
      }), " (requires auth)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "record-evidence",
      children: "Record evidence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Paste ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ls docs/kanban/epics/epic-*"
      }), " (first epic), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " kanban patterns, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logs/ai-dev-kit/install/signoff-report.json"
      }), " into T11 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expenses Tracker verification (AC5)"
      }), " when done."]
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
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
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