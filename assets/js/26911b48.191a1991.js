"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["84713"], {
69009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_065_rw_step_12_5_github_release_parser_fails_on_v_prefixed_version_md_269_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version-md-269.json
var site_docs_project_management_kanban_fr_br_br_065_rw_step_12_5_github_release_parser_fails_on_v_prefixed_version_md_269_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version","title":"Bug Report BR-065 - RW Step 12.5 GitHub release parser fails on v-prefixed version","description":"Status: OPEN","source":"@site/../docs/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-13T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-064 - RW dev branch should not enforce epic lock","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock"},"next":{"title":"Bug Report BR-066 - IPW missing Docusaurus filing for planning artifacts","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-065-rw-step-12-5-github-release-parser-fails-on-v-prefixed-version.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-13T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-065 - RW Step 12.5 GitHub release parser fails on v-prefixed version';

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
  "value": "Implementation Outcome (2026-04-13)",
  "id": "implementation-outcome-2026-04-13",
  "level": 2
}, {
  "value": "Verification Evidence",
  "id": "verification-evidence",
  "level": 3
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
    h3: "h3",
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
        id: "bug-report-br-065---rw-step-125-github-release-parser-fails-on-v-prefixed-version",
        children: ["Bug Report BR-065 - RW Step 12.5 GitHub release parser fails on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v"
        }), "-prefixed version"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " OPEN", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM - non-blocking RW completion, but GitHub Release publication is skipped due to parser failure.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-13", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-13 (implementation complete in working tree: boundary normalization + deterministic diagnostics + regression tests)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " N/A", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-065", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
        children: ["E06:S07", ":T113"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RW Step 12.5 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_github_release.py"
      }), ") fails with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "invalid literal for int() with base 10: 'v0'"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["when processing a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v"
      }), "-prefixed version/tag input. The RW run correctly completes as non-blocking, but the GitHub Release itself is not created/updated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Step 12.5 should accept canonical ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v"
      }), "-prefixed release inputs (for both SemVer and internal version context) and either:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "create/update the GitHub Release successfully, or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fail with deterministic diagnostics that point to the exact malformed field."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Step 12.5 exits with parse error:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "invalid literal for int() with base 10: 'v0'"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW otherwise completes and pushes commit/tags."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Release publication remains incomplete, requiring manual follow-up."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run RW with Step 12.5 enabled for a normal tagged release."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_github_release.py"
        }), " execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Receive parser exception for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v"
        }), "-prefixed value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution",
      children: "Proposed Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Harden version parsing in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_github_release.py"
        }), " to normalize optional leading ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v"
        }), " before numeric conversion."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add unit tests for both prefixed and non-prefixed values."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve error messages to identify the exact argument/value that failed parsing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep Step 12.5 non-blocking behavior, but emit stronger remediation guidance."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-outcome-2026-04-13",
      children: "Implementation Outcome (2026-04-13)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added ", (0,jsx_runtime.jsx)(_components.code, {
          children: "normalize_internal_version(...)"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_github_release.py"
        }), " and applied it before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_rw_tag_info(...)"
        }), " calls."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Accepted formats now include:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0.EPIC.STORY.TASK+BUILD"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.EPIC.STORY.TASK+BUILD"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Added deterministic validation errors for malformed values (argument-aware, expected format examples included)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added targeted parser regression tests:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/version/test_create_github_release_parsing.py"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verification-evidence",
      children: "Verification Evidence"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "python -m pytest \"packages/frameworks/workflow-mgt/scripts/version/test_create_github_release_parsing.py\" -q"
        }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5 passed"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manual regression check:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "python \"packages/frameworks/workflow-mgt/scripts/create_github_release.py\" --semver-tag \"v0.4.733+1\" --internal-version \"v0.6.7.113+1\" ... --token \"dummy\""
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Result no longer contains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "invalid literal for int() with base 10: 'v0'"
            }), "; script proceeds to expected GitHub auth failure path (", (0,jsx_runtime.jsx)(_components.code, {
              children: "401 Bad credentials"
            }), " with dummy token)."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance",
          children: "FR-041"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
          children: ["E02:S16", ":T03"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPW-E6S07T113-rw-step-12-5-github-release-parser-hardening",
          children: "IPW-E6S7T113"
        })
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