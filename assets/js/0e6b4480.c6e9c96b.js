"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["98895"], {
19624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_105_dependabot_dependency_security_automation_md_0e6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-105-dependabot-dependency-security-automation-md-0e6.json
var site_docs_project_management_kanban_fr_br_fr_105_dependabot_dependency_security_automation_md_0e6_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation","title":"Feature Request: Dependabot and Dependency Security Automation","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"proposed","ttl_days":null,"created_at":"2026-06-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: Python Minimum Version Policy Alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-104-python-minimum-version-policy-alignment"},"next":{"title":"Feature Request: Packaged Workflows Sync With Live Repo Implementation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation.md


const frontMatter = {
	lifecycle: 'proposed',
	ttl_days: null,
	created_at: new Date('2026-06-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Dependabot and Dependency Security Automation';

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
  "value": "Scope (Atomic)",
  "id": "scope-atomic",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 2
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies / Ordering",
  "id": "dependencies--ordering",
  "level": 2
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
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "feature-request-dependabot-and-dependency-security-automation",
        children: "Feature Request: Dependabot and Dependency Security Automation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-105", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (via agent — dependency audit follow-up)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH (Must Have — MoSCOW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "M"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED (v0.8.3.6+2 — ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E08:S03", ":T06"]
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned Task:"
      }), " E08:S03", ":T06", " — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T06-dependabot-enablement-fr105",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T06-dependabot-enablement-fr105.md"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Dependabot"
      }), " (security updates + version updates) for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pip"
      }), " (repo root / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setup.py"
      }), " ecosystem) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "npm"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/"
      }), "), add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/dependabot.yml"
        })
      }), ", and document triage expectations for Docusaurus/React pins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repo settings (2026-06-03): ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "dependabot_security_updates"
          }), ": disabled"]
        }), "; no ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/dependabot.yml"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " open Dependabot alerts via API — reflects disabled automation, not verified absence of issues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Local ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm audit"
          })
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/"
        }), " reports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "33"
        }), " vulnerabilities (6 high, 27 moderate), largely transitive (", (0,jsx_runtime.jsx)(_components.code, {
          children: "webpack-dev-server"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sockjs"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "uuid"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ws"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python deps are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "unpinned"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), " lower bounds only); no lockfile."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Audit context: ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit",
          children: ["E07:S06", ":T08"]
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope-atomic",
      children: "Scope (Atomic)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In scope"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enable ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependabot security updates"
        }), " in GitHub repository settings (document steps for maintainer if agent cannot change org settings)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/dependabot.yml",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/dependabot.yml"
          })
        }), " with:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "pip"
            }), " — directory ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/"
            }), " (or documented alternative if monorepo layout requires)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "npm"
            }), " — directory ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/portal"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Weekly schedule (or team-agreed interval)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Sensible ", (0,jsx_runtime.jsx)(_components.code, {
              children: "open-pull-requests-limit"
            }), " and grouping if needed"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run initial ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm audit fix"
          })
        }), " (non-", (0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        }), " first) in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/"
        }), "; verify ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm run build"
          })
        }), " (Docusaurus gate)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/README.md"
          })
        }), " or contributor doc: how to handle Dependabot PRs, when to defer Docusaurus major bumps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional: add ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pip-audit"
          })
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pip install -r requirements.txt && pip audit"
          })
        }), " to future Tests workflow (", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058",
          children: ["E08:S03", ":T04"]
        }), ") — note as follow-up, not blocking AC."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full Python lockfile (", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.lock"
        }), " / Poetry) — optional follow-up FR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolving all 33 npm issues in one shot if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm audit fix --force"
        }), " breaks Docusaurus 3.9.2 / React 19 — document residual risk and open issues."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Org-wide Dependabot policies outside this repo."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-105", ":R01"]
        }), " – Dependabot config file committed and valid."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-105", ":R02"]
        }), " – Security updates enabled at repo level (verified in GitHub UI or API)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-105", ":R03"]
        }), " – At least one documented triage path for dependency PRs (merge, ignore with reason, or group)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-105", ":NF01"]
        }), " – Docusaurus production build remains green after automated/low-risk fixes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-105", ":NF02"]
        }), " – PR noise bounded (limits/grouping documented)."]
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
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/dependabot.yml"
        }), " exists; covers ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pip"
        }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "npm"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Dependabot security updates ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enabled"
        }), " (API/UI confirmation recorded in task doc)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Post-enablement: maintainer can see Dependabot PRs or security tab activity within one weekly cycle (or manual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dependabot version"
        }), " trigger if used)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm audit"
        }), " re-run documented in task (before/after counts); breaking fixes not forced without build verification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " FR-105 ↔ E08:S03", ":T06", " bidirectional links."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies--ordering",
      children: "Dependencies / Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-104"
        }), " — independent; Tests CI may combine pip audit later."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-069"
        }), " — Docusaurus build gate must stay green when applying npm fixes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E08:S03", ":T04"]
        }), " — optional integration of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip audit"
        }), " in CI."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
          children: "FR-069"
        }), " (portal build gate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures",
          children: "BR-058"
        }), " (Tests workflow)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit",
          children: "T08 audit"
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