"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["371"], {
6527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_user_docs_github_issue_install_signoff_md_3cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-user-docs-github-issue-install-signoff-md-3cd.json
var site_docs_documentation_user_docs_github_issue_install_signoff_md_3cd_namespaceObject = JSON.parse('{"id":"documentation/user-docs/github-issue-install-signoff","title":"GitHub Issue install sign-off","description":"Prevents orphaned ai-dev-kit GitHub Issues that wait for adopter install verification (e.g. #12–#16).","source":"@site/../docs/documentation/user-docs/github-issue-install-signoff.md","sourceDirName":"documentation/user-docs","slug":"/documentation/user-docs/github-issue-install-signoff","permalink":"/ai-dev-kit/docs/documentation/user-docs/github-issue-install-signoff","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/user-docs/github-issue-install-signoff.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","created_at":"2026-06-04T20:00:00.000Z","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Framework Dependency Use Cases","permalink":"/ai-dev-kit/docs/documentation/user-docs/framework-dependency-use-cases"},"next":{"title":"AI Dev Kit Installation Receipt Reference","permalink":"/ai-dev-kit/docs/documentation/user-docs/install-receipt-reference"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/user-docs/github-issue-install-signoff.md


const frontMatter = {
	lifecycle: 'evergreen',
	created_at: new Date('2026-06-04T20:00:00.000Z'),
	housekeeping_policy: 'keep'
};
const contentTitle = 'GitHub Issue install sign-off';

const assets = {

};



const toc = [{
  "value": "How it works",
  "id": "how-it-works",
  "level": 2
}, {
  "value": "Maintainer: add a new issue",
  "id": "maintainer-add-a-new-issue",
  "level": 2
}, {
  "value": "Adopter: Expenses Tracker (fresh repo)",
  "id": "adopter-expenses-tracker-fresh-repo",
  "level": 2
}, {
  "value": "Check types",
  "id": "check-types",
  "level": 2
}, {
  "value": "Orphan detection",
  "id": "orphan-detection",
  "level": 2
}, {
  "value": "Safety",
  "id": "safety",
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
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "github-issue-install-sign-off",
        children: "GitHub Issue install sign-off"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prevents ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "orphaned"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " GitHub Issues that wait for adopter install verification (e.g. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/12",
        children: "#12"
      }), "–", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/16",
        children: "#16"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-it-works",
      children: "How it works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contract"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/config/github-issue-install-signoff-contract.yaml"
        }), " lists each trackable issue and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "when_all"
        }), " checks (rw-config keys, validators, padding scan, etc.)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "After install"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_kanban_framework.py"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py"
        }), " run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_github_issue_signoff.py"
        }), " (report only by default)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Close (optional)"
        }), " — Pass ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--close-github-issues"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh"
        }), " is authenticated to comment and close ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ready"
        }), " issues on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintainer-add-a-new-issue",
      children: "Maintainer: add a new issue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create the GitHub issue; add label ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "awaiting-adopter-signoff"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add a contract entry with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "number"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "when_all"
        }), " checks, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "close_comment"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Link from the BR/UXR doc: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**GitHub Issue:** [#N](...)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adopter-expenses-tracker-fresh-repo",
      children: "Adopter: Expenses Tracker (fresh repo)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After kanban + RW install:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Report which upstream issues are ready to close (no side effects)\npython vendor/ai-dev-kit/packages/frameworks/workflow\\ mgt/scripts/install_github_issue_signoff.py \\\n  --project-root . \\\n  --list-open-awaiting\n\n# Optional: close ready issues on ai-dev-kit (maintainer/adopter with gh auth)\npython vendor/ai-dev-kit/packages/frameworks/workflow\\ mgt/scripts/install_github_issue_signoff.py \\\n  --project-root . \\\n  --close-github-issues\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or re-run installers with sign-off baked in:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python .../install_release_workflow.py --mode c\npython .../install_kanban_framework.py --mode fresh\n# Sign-off report prints at end; add --close-github-issues to close\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Report JSON: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "logs/ai-dev-kit/install/signoff-report.json"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "check-types",
      children: "Check types"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rw_config_patterns"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " has required kanban keys and substring patterns"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "command"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Subprocess exits 0 (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--check-deps"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "no_capitalised_kanban_segments"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Story-"
            }), " under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban/epics/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_paths_padding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR-015 padded lowercase segments; optional strict validator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "note"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual close only (", (0,jsx_runtime.jsx)(_components.code, {
              children: "kit_only"
            }), " scope)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "orphan-detection",
      children: "Orphan detection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--list-open-awaiting"
      }), ", open issues labelled ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "awaiting-adopter-signoff"
        })
      }), " that are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " in the contract are listed as orphan risks — add a contract entry or remove the label."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "safety",
      children: "Safety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default:"
        }), " never closes issues; only prints READY / NOT READY."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Close:"
        }), " requires explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--close-github-issues"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh"
        }), " CLI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Issues with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "number: null"
        }), " in the contract (e.g. UXR-017 until a GH issue is filed) can show READY but are not auto-closed."]
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