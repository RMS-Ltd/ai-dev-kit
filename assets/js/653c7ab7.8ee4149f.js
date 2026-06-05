"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["30956"], {
4738(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_095_auto_detect_github_remote_in_release_script_md_653_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-095-auto-detect-github-remote-in-release-script-md-653.json
var site_docs_project_management_kanban_fr_br_fr_095_auto_detect_github_remote_in_release_script_md_653_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-095-auto-detect-github-remote-in-release-script","title":"FR-095: Auto-detect GitHub remote repository in create_github_release.py","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-095-auto-detect-github-remote-in-release-script.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-095-auto-detect-github-remote-in-release-script","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-095-auto-detect-github-remote-in-release-script","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-095-auto-detect-github-remote-in-release-script.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-094: /ipw slash command for Claude Code + mandatory task state transition in IPP","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate"},"next":{"title":"FR-096: IPW mandatory documentation phases (update/create + housing)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-096-ipw-documentation-phases-update-create-and-housing"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-095-auto-detect-github-remote-in-release-script.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-095: Auto-detect GitHub remote repository in create_github_release.py';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Proposed Solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "fr-095-auto-detect-github-remote-repository-in-create_github_releasepy",
        children: ["FR-095: Auto-detect GitHub remote repository in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_github_release.py"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-095\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-19\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " LOW\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " E02:S16", ":T10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remove the hardcoded ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), " repository default from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_github_release.py"
      }), " and replace it with dynamic auto-detection from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git remote get-url origin"
      }), ". This eliminates manual updates when repos are transferred between personal accounts and organisations, or when forks/clones have different remotes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "create_github_release.py"
      }), " has a hardcoded ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--repo"
      }), " default:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "parser.add_argument(\n    \"--repo\",\n    default=\"RMS-Ltd/ai-dev-kit\",\n    help=\"Repository name (default: RMS-Ltd/ai-dev-kit)\"\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This breaks when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A repo is transferred from a personal account to an organisation (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A user forks the repo and runs RW from their fork"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The script is used in a different repo within the same project family"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The error manifests as a 403 PAT error because the token lacks access to the hardcoded repo name, even though the working directory's remote is correct."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_default_repo()"
        }), " function that runs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git remote get-url origin"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parse the URL to extract ", (0,jsx_runtime.jsx)(_components.code, {
          children: "owner/repo"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "https://github.com/owner/repo.git"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "owner/repo"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git@github.com:owner/repo.git"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "owner/repo"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use this as the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--repo"
        }), " default"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Retain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " as a silent fallback if git detection fails"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_github_release.py"
        }), " auto-detects the repo from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git remote get-url origin"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Both HTTPS and SSH remote URL formats are supported"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Fallback to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), " if detection fails (backward compatibility)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--repo"
        }), " CLI argument still overrides auto-detection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Help text updated to reflect auto-detection behaviour"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E02:S16", ":T10", " — Ad-hoc Repository Infrastructure Maintenance (perpetual)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-062 — GitHub release installation experience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/create_github_release.py"
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