"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["17087"], {
40285(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_088_rw_install_mode_c_missing_version_file_scaffold_md_669_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-088-rw-install-mode-c-missing-version-file-scaffold-md-669.json
var site_docs_project_management_kanban_fr_br_br_088_rw_install_mode_c_missing_version_file_scaffold_md_669_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold","title":"Bug Report BR-088: RW Mode C Does Not Scaffold version_file Path (No src/ Directory)","description":"Bug ID: BR-088","source":"@site/../docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T17:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-087: Framework packages install with legacy directory names (spaces, &)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch"},"next":{"title":"Bug Report BR-089: RW Install Mode C — Missing main_changelog Scaffold","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-089-rw-install-mode-c-missing-main-changelog-scaffold"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T17:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-088: RW Mode C Does Not Scaffold version_file Path (No src/ Directory)';

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
  "value": "Expected",
  "id": "expected",
  "level": 2
}, {
  "value": "Actual",
  "id": "actual",
  "level": 2
}, {
  "value": "Workaround (book)",
  "id": "workaround-book",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Verification",
  "id": "verification",
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
        id: "bug-report-br-088-rw-mode-c-does-not-scaffold-version_file-path-no-src-directory",
        children: "Bug Report BR-088: RW Mode C Does Not Scaffold version_file Path (No src/ Directory)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-088", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (adopter manual step; RW blocked until version file exists)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " FIXED (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/18",
        children: "#18"
      }), " closed; RW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.16.4+30"
      }), " / E02:S16", ":T04", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/18",
        children: "#18"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T19-rw-install-version-file-scaffold-br088",
        children: ["E06:S09", ":T19"]
      }), " — ✅ COMPLETE (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.19+1"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " ExpensesTracker setup-spine T03 book dry-run (2026-06-04); split from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/17#issuecomment-4624289778",
        children: "#17"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/17",
        children: "#17"
      }), " / ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff",
        children: "BR-086"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/14",
        children: "#14"
      }), " / ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight",
        children: "BR-082"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py --mode c"
      }), " writes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version_file:"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " but does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " create parent directories or a minimal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version.py"
      }), " stub when the consumer repo has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/"
      }), " tree (common on greenfield / TypeScript-first adopters)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fresh consumer repo after T01–T02 (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/"
        }), " directory)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python …/install_release_workflow.py --mode c"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At prompt, set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " to e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/expenses_tracker/version.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Complete install → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " written; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "INSTALLATION PARTIAL"
        }), " if workflow YAML missing (expected for submodule-only)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installer creates parent dirs and a minimal version stub at the configured path, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fails with an explicit mandatory next-step message before sign-off completes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actual",
      children: "Actual"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/"
        }), " directory on disk."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file:"
        }), " key in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adopter must run manual scaffold (book packet Step 3.2)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workaround-book",
      children: "Workaround (book)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mkdir -p src/expenses_tracker\n# Create minimal VERSION_* stub — see ai-dev-kit-book T03 Step 3.2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        }), " ", "Mode C creates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " path (dirs + stub) when missing, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " blocks with clear mandatory next step"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Install docs / sign-off mention version scaffold when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/"
        }), " absent"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Book T03 path does not require undocumented manual mkdir for greenfield adopters"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "ExpensesTracker or book replay: greenfield repo without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/"
        }), " → mode C leaves runnable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " or explicit blocker (operator confirmed 2026-06-05; #18 closed)"]
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