"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["78352"], {
67103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_095_codeql_insecure_temporary_file_mktemp_md_7b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-095-codeql-insecure-temporary-file-mktemp-md-7b0.json
var site_docs_project_management_kanban_fr_br_br_095_codeql_insecure_temporary_file_mktemp_md_7b0_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp","title":"Bug Report BR-095: CodeQL alert — insecure tempfile.mktemp in intake test script","description":"Bug ID: BR-095","source":"@site/../docs/project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-094: CodeQL parse failure — git_tag_handler.py indentation syntax error","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error"},"next":{"title":"Bug Report BR-096: CodeQL alert — incomplete URL substring sanitization in portal identity test","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-096-codeql-incomplete-url-substring-sanitization"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-095: CodeQL alert — insecure tempfile.mktemp in intake test script';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Description",
  "id": "problem-description",
  "level": 2
}, {
  "value": "Observed behavior (CodeQL alert #4, 2026-06-04)",
  "id": "observed-behavior-codeql-alert-4-2026-06-04",
  "level": 3
}, {
  "value": "Root cause",
  "id": "root-cause",
  "level": 3
}, {
  "value": "Impact",
  "id": "impact",
  "level": 3
}, {
  "value": "Acceptance criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Fix Attempt History",
  "id": "fix-attempt-history",
  "level": 2
}, {
  "value": "Attempt 1: v0.8.3.9+1 — 2026-06-05",
  "id": "attempt-1-v08391--2026-06-05",
  "level": 3
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-095-codeql-alert--insecure-tempfilemktemp-in-intake-test-script",
        children: ["Bug Report BR-095: CodeQL alert — insecure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tempfile.mktemp"
        }), " in intake test script"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-095", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH — CodeQL ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "py/insecure-temporary-file"
      }), " (CWE-377); open security alert on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.8.3.9+1 — fix released)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.8.3.9+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T09-codeql-insecure-temporary-file-mktemp-br095",
        children: ["E08:S03", ":T09"]
      }), " — ✅ COMPLETE (v0.8.3.9+1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/4",
        children: "CodeQL alert #4"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error",
        children: "BR-094"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GitHub CodeQL flags ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tempfile.mktemp"
        })
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/test_intake_documentation_update.py"
      }), " (line 69) as an insecure temporary-file pattern (race between name creation and file open)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior-codeql-alert-4-2026-06-04",
      children: "Observed behavior (CodeQL alert #4, 2026-06-04)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Call to deprecated function tempfile.mktemp may be insecure.\nRule: py/insecure-temporary-file (severity: error)\nLocation: packages/frameworks/workflow-mgt/scripts/test_intake_documentation_update.py:69\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "test_documentation_update()"
      }), " used ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Path(tempfile.mktemp(suffix='.md'))"
      }), " before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shutil.copy"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mktemp"
      }), " returns a unique name without atomically creating the file, enabling a TOCTOU race (CWE-377)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "high-severity"
        }), " CodeQL finding on default branch."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security scanning noise blocks clean CodeQL status for the repo."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tempfile.mktemp"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NamedTemporaryFile(delete=False)"
        }), " (or equivalent secure pattern)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Ensure temp file cleanup runs on success ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "and"
        }), " failure (", (0,jsx_runtime.jsx)(_components.code, {
          children: "finally"
        }), " block)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "CodeQL alert #4 closes after fix merges to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-095"
        }), " ↔ ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E08:S03", ":T09"]
        }), " linked; released via RW."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fix-attempt-history",
      children: "Fix Attempt History"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attempt-1-v08391--2026-06-05",
      children: "Attempt 1: v0.8.3.9+1 — 2026-06-05"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes:"
      }), " Replace ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mktemp"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NamedTemporaryFile(suffix='.md', delete=False)"
      }), "; add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "finally"
      }), " cleanup in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test_documentation_update()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " [x] No remaining ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mktemp"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tempnam"
      }), " in repo; [ ] CodeQL post-push pending."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      }), " Epic 8 / Story 3 / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E08:S03", ":T09"]
      })]
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