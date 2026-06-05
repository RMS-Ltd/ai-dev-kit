"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55581"], {
27975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_094_codeql_git_tag_handler_syntax_error_md_e3b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-094-codeql-git-tag-handler-syntax-error-md-e3b.json
var site_docs_project_management_kanban_fr_br_br_094_codeql_git_tag_handler_syntax_error_md_e3b_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error","title":"Bug Report BR-094: CodeQL parse failure — git_tag_handler.py indentation syntax error","description":"Bug ID: BR-094","source":"@site/../docs/project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T00:10:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-093: Docusaurus CI runs duplicate build + deploy jobs — doubles wasted minutes on same failure","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste"},"next":{"title":"Bug Report BR-095: CodeQL alert — insecure tempfile.mktemp in intake test script","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-095-codeql-insecure-temporary-file-mktemp"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T00:10:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-094: CodeQL parse failure — git_tag_handler.py indentation syntax error';

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
  "value": "Observed behavior (CodeQL, 2026-06-04)",
  "id": "observed-behavior-codeql-2026-06-04",
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
  "value": "Attempt 1: v0.8.3.8+1 — 2026-06-05",
  "id": "attempt-1-v08381--2026-06-05",
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
        id: "bug-report-br-094-codeql-parse-failure--git_tag_handlerpy-indentation-syntax-error",
        children: ["Bug Report BR-094: CodeQL parse failure — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git_tag_handler.py"
        }), " indentation syntax error"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-094", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM — CodeQL Python analysis skips ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git_tag_handler.py"
      }), "; RW Step 11 tag-creation helper fails at import.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.8.3.8+1 — fix released)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.8.3.8+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T08-codeql-git-tag-handler-syntax-br094",
        children: ["E08:S03", ":T08"]
      }), " — ✅ COMPLETE (v0.8.3.8+1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning/tools/CodeQL/status/configurations/automatic/02af035c656f34be1a763cec498ac15c1e93278238bf93383d8439147ad1aafc",
        children: "CodeQL configuration status"
      }), " · CodeQL setup run ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26986666112",
        children: "26986666112"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GitHub CodeQL reports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“Could not process some files due to syntax errors”"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/git_tag_handler.py"
      }), " (line 23): the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "from semver_converter import …"
      }), " line is not indented under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try:"
      }), ", causing an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IndentationError"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior-codeql-2026-06-04",
      children: "Observed behavior (CodeQL, 2026-06-04)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Syntax Error (line 23) in …/git_tag_handler.py\nCould not process some files due to syntax errors (1 result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Local verification before fix:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IndentationError: expected an indented block (git_tag_handler.py, line 24)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Optional import guard uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try:"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "except ImportError:"
      }), " but the import line was flush with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try:"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CodeQL cannot analyze ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git_tag_handler.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "python -m py_compile"
        }), " fails — RW Step 11 tag helper unusable."]
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
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python -m py_compile packages/frameworks/workflow-mgt/scripts/git_tag_handler.py"
        }), " passes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "CodeQL Python analysis reports no syntax errors for this file (post-push verification)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-094"
        }), " ↔ ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E08:S03", ":T08"]
        }), " linked; released via RW."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fix-attempt-history",
      children: "Fix Attempt History"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attempt-1-v08381--2026-06-05",
      children: "Attempt 1: v0.8.3.8+1 — 2026-06-05"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Changes:"
      }), " Indent ", (0,jsx_runtime.jsx)(_components.code, {
        children: "from semver_converter import …"
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "try:"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git_tag_handler.py"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " [x] ", (0,jsx_runtime.jsx)(_components.code, {
        children: "py_compile"
      }), " local pass; [ ] CodeQL post-push pending."]
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
        children: ["E08:S03", ":T08"]
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