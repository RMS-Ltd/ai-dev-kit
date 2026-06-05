"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["61815"], {
88126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_092_tests_ci_missing_requests_dev_dependency_md_30f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-092-tests-ci-missing-requests-dev-dependency-md-30f.json
var site_docs_project_management_kanban_fr_br_br_092_tests_ci_missing_requests_dev_dependency_md_30f_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency","title":"Bug Report BR-092: Tests CI workflow missing requests — pytest collection error","description":"Bug ID: BR-092","source":"@site/../docs/project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-091: Workflow validators hardcode legacy workflow mgt path — CI pytest gate fails","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded"},"next":{"title":"Bug Report BR-093: Docusaurus CI runs duplicate build + deploy jobs — doubles wasted minutes on same failure","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-092: Tests CI workflow missing requests — pytest collection error';

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
  "value": "Observed behavior (GitHub Actions, 2026-06-04)",
  "id": "observed-behavior-github-actions-2026-06-04",
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
  "value": "Expected behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Proposed fix",
  "id": "proposed-fix",
  "level": 2
}, {
  "value": "Acceptance criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Resolution (v0.8.3.7+1, E08:S03)",
  "id": "resolution-v08371-e08s03",
  "level": 2
}, {
  "value": "Steps to reproduce",
  "id": "steps-to-reproduce",
  "level": 2
}, {
  "value": "Intake decision",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-092-tests-ci-workflow-missing-requests--pytest-collection-error",
        children: ["Bug Report BR-092: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tests"
        }), " CI workflow missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requests"
        }), " — pytest collection error"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-092", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Tests"
        })
      }), " workflow fails at collection on pushes to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " (~6 failures since May 2026); local devs with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requirements.txt"
      }), " pre-installed may not reproduce.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.8.3.7+1 — fix implemented)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.8.3.7+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T07-tests-ci-requests-dependency-br092",
        children: ["E08:S03", ":T07"]
      }), " — ✅ COMPLETE (v0.8.3.7+1)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures",
        children: "BR-058"
      }), " (original Tests workflow — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RESOLVED"
      }), "; this is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "regression / gap"
      }), " in dev extras) · ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058",
        children: ["E08:S03", ":T04"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GitHub Actions ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Tests"
        })
      }), " runs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install -e \".[dev]\""
      }), " then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pytest tests/"
      }), ". Collection fails because ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "requests"
        })
      }), " is not declared in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setup.py"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "[dev]"
        })
      }), " extras, yet ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/test_framework_install_slug.py"
      }), " imports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_package_from_release"
      }), ", which imports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "requests"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior-github-actions-2026-06-04",
      children: "Observed behavior (GitHub Actions, 2026-06-04)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ERROR collecting tests/test_framework_install_slug.py\nModuleNotFoundError: No module named 'requests'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["338 items collected / 1 error → exit code ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "requests"
            }), " declared?"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "requirements.txt"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "requests>=2.28.0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setup.py"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_requires"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setup.py"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extras_require[\"dev\"]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/tests.yml"
            }), " install step"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pip install -e \".[dev]\""
            }), " only"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Scripts under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_package_from_release.py"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_github_release.py"
      }), ", etc.) depend on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "requests"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Tests"
          })
        }), " workflow red on routine pushes to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dev"
          })
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CI gives false-negative signal; contributors may see green locally if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), " was installed separately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Contributes to repo-wide ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "~84% GitHub Actions job failure rate"
        }), " (maintainer report, 2026-06-05)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Tests"
          })
        }), " workflow completes with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pytest tests/"
          })
        }), " collection and execution green on CI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dev install path (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install -e \".[dev]\""
        }), ") includes all dependencies required by the test suite."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-fix",
      children: "Proposed fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Preferred:"
      }), " Add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "requests>=2.28.0"
        })
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setup.py"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "extras_require[\"dev\"]"
        })
      }), " (align with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requirements.txt"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative:"
      }), " Change ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/tests.yml"
        })
      }), " to also install ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requirements.txt"
      }), " or add a dedicated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/requirements.txt"
      }), "."]
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
        }), " ", "Fresh CI-style env: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install -e \".[dev]\""
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest tests/"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no collection errors"
        }), " (CI run ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/26986650468",
          children: "26986650468"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Tests"
          })
        }), " workflow: BR-092 import path verified (", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_framework_install_slug"
        }), " PASSED); unrelated epic 22/23 template failures noted as separate scope."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Dependency declaration documented if split between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setup.py"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "resolution-v08371-e08s03",
      children: ["Resolution (v0.8.3.7+1, E08:S03", ":T07", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delivered:"
      }), " 2026-06-05 — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "requests>=2.28.0"
        })
      }), " added to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setup.py"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "extras_require[\"dev\"]"
        })
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/requirements.txt"
        })
      }), ". Clean venv local verification: 348 passed, 1 skipped; slug test collection succeeds without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requirements.txt"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI verified"
      }), " (run 26986650468): ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requests"
      }), " from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[dev]"
      }), "; all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test_framework_install_slug.py"
      }), " tests PASSED."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clean Python 3.11 venv."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pip install -e \".[dev]\""
        }), " (only — do not install ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python -m pytest tests/test_framework_install_slug.py --collect-only"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ModuleNotFoundError: No module named 'requests'"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned to:"
      }), " Epic 8, Story 3, Task 7 — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T07-tests-ci-requests-dependency-br092",
        children: "T07"
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