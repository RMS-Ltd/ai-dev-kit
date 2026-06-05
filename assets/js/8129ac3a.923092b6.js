"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["63158"], {
77333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_journals_rollback_contract_md_812_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-journals-rollback-contract-md-812.json
var site_docs_journals_rollback_contract_md_812_namespaceObject = JSON.parse('{"id":"journals/ROLLBACK_CONTRACT","title":"RW Rollback / Compensation Contract","description":"Applies to: Release Workflow (RW) execution artifacts.","source":"@site/../docs/journals/ROLLBACK_CONTRACT.md","sourceDirName":"journals","slug":"/journals/ROLLBACK_CONTRACT","permalink":"/ai-dev-kit/docs/journals/ROLLBACK_CONTRACT","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/journals/ROLLBACK_CONTRACT.md","tags":[],"version":"current","frontMatter":{}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/journals/ROLLBACK_CONTRACT.md


const frontMatter = {};
const contentTitle = 'RW Rollback / Compensation Contract';

const assets = {

};



const toc = [{
  "value": "1. Principles",
  "id": "1-principles",
  "level": 2
}, {
  "value": "2. Automatic Revertible Surfaces",
  "id": "2-automatic-revertible-surfaces",
  "level": 2
}, {
  "value": "3. Manual Reconciliation Surfaces",
  "id": "3-manual-reconciliation-surfaces",
  "level": 2
}, {
  "value": "4. Forbidden Actions",
  "id": "4-forbidden-actions",
  "level": 2
}, {
  "value": "5. Compensation (When Rollback Is Impossible)",
  "id": "5-compensation-when-rollback-is-impossible",
  "level": 2
}, {
  "value": "6. Safety Guardrails in Code",
  "id": "6-safety-guardrails-in-code",
  "level": 2
}, {
  "value": "7. Operator Checklist Before Rerun",
  "id": "7-operator-checklist-before-rerun",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "rw-rollback--compensation-contract",
        children: "RW Rollback / Compensation Contract"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Applies to:"
      }), " Release Workflow (RW) execution artifacts.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Explicitly define what can be automatically reverted, what requires manual reconciliation, and what is forbidden."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-principles",
      children: "1. Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conservatism first."
        }), " When in doubt, mark a surface as manual-reconcile."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No destructive remote ops."
        }), " Force-push, remote tag deletion, and history rewrite are never suggested automatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Immutability of journals."
        }), " Rollback contracts are derived from journals; journals themselves are never modified."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operator is the final authority."
        }), " Automatic revert steps are advisory; the operator must confirm before executing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-automatic-revertible-surfaces",
      children: "2. Automatic Revertible Surfaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These can typically be undone with no remote impact and no data loss risk."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Revert Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safety Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unstaged working-tree file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "src/ai_dev_kit/version.py"
            }), " modified but not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git add"
            }), "ed"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git checkout -- <file>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverts to HEAD. Ensure you don't need the changes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Staged but uncommitted file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            }), " staged via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git add"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git reset HEAD <file>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unstages only; working tree keeps changes."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Untracked file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Temporary ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".tmp"
            }), " generated by script"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rm <file>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Safe if file is not in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".gitignore"
            }), " by design."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uncommitted tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local tag created but not pushed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "git tag -d <tag>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only safe if tag was never pushed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-manual-reconciliation-surfaces",
      children: "3. Manual Reconciliation Surfaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These require operator review because they may affect shared history or remote state."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Surface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommended Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safety Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Committed change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version bump committed locally"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Amend with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git commit --amend"
            }), " or create a follow-up commit"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If already pushed, prefer follow-up commit over amend."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed commit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Commit pushed to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "origin/dev"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create a revert commit (", (0,jsx_runtime.jsx)(_components.code, {
              children: "git revert <sha>"
            }), ") or a follow-up fix"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never force-push to rewrite shared history."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed tag"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Annotated tag ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.1.38+3"
            }), " pushed"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " delete remote tag. Create a new corrected release."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote tag deletion can break consumers and CI."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merged release branch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " merged to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Revert the merge commit if needed (", (0,jsx_runtime.jsx)(_components.code, {
              children: "git revert -m 1 <sha>"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coordinate with team; may affect downstream builds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Release created via API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Edit or draft a new release; do not delete existing release."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deletion removes release notes and asset links."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-forbidden-actions",
      children: "4. Forbidden Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following actions must ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "never"
      }), " be suggested or executed automatically by the recovery system:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git push --force"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push -f"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "git reset --hard"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git clean -fd"
        }), " (destructive removal of untracked directories)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git branch -D"
        }), " on a shared branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rm -rf"
        }), " on any tracked project directory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remote tag deletion (", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push origin :refs/tags/<tag>"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remote branch deletion (", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push origin :<branch>"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If any of these commands appear in a step's command log, the rollback contract flags them as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forbidden"
      }), " and requires explicit operator override."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-compensation-when-rollback-is-impossible",
      children: "5. Compensation (When Rollback Is Impossible)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Some changes cannot be rolled back. In these cases, the contract prescribes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compensation"
      }), " — a forward-fixing action:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Irreversible Change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compensation Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pushed bad tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a new release with incremented build number and deprecate the old one."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Published bad package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yank or deprecate the package version; publish a corrected one."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Released changelog with error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append a correction entry in the next release; do not rewrite published history."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban board updated with wrong status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run UKW to reconcile status manually; do not edit historical board entries."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-safety-guardrails-in-code",
      children: "6. Safety Guardrails in Code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RollbackContract"
      }), " class enforces these rules programmatically:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FORBIDDEN_COMMANDS"
        }), " set is checked against every logged command."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "_is_committed()"
        }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git diff --quiet HEAD"
        }), " to determine if a file is already committed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "manual_reconcile"
        }), " surfaces always include a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "safety_notes"
        }), " field explaining why operator review is required."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-operator-checklist-before-rerun",
      children: "7. Operator Checklist Before Rerun"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use this checklist after a failed run and before re-invoking RW:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Recovery report has been read."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Auto-revertible files have been reverted (if desired)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Manual-reconcile files have been reviewed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No forbidden actions are present in the rollback contract (or they have been explicitly acknowledged)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Root cause of the original failure has been addressed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Git status is clean or intentionally dirty with only the desired changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "The same task token will be used for the rerun."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RECOVERY_PROCEDURE.md"
        }), " — step-by-step operator guide for rerun behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "JOURNAL_SCHEMA.md"
        }), " — JSON schema reference for programmatic consumers."]
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