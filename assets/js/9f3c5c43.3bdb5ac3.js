"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["14924"], {
16955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_058_ci_test_workflow_missing_and_pytest_failures_md_9f3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-058-ci-test-workflow-missing-and-pytest-failures-md-9f3.json
var site_docs_project_management_kanban_fr_br_br_058_ci_test_workflow_missing_and_pytest_failures_md_9f3_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures","title":"Bug Report BR-058: Missing Tests CI Workflow and Stale Pytest Failures","description":"Bug ID: BR-058","source":"@site/../docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-25T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"BR-057: fr-br-intake.yml invalid workflow YAML (block scalar indentation)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation"},"next":{"title":"Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-25T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-058: Missing Tests CI Workflow and Stale Pytest Failures';

const assets = {

};



const toc = [{
  "value": "Bug Summary",
  "id": "bug-summary",
  "level": 2
}, {
  "value": "Problem Description",
  "id": "problem-description",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 3
}, {
  "value": "Impact",
  "id": "impact",
  "level": 3
}, {
  "value": "Proposed Solutions",
  "id": "proposed-solutions",
  "level": 2
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Resolution (v0.8.3.4+1, E08:S03)",
  "id": "resolution-v08341-e08s03",
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
        id: "bug-report-br-058-missing-tests-ci-workflow-and-stale-pytest-failures",
        children: ["Bug Report BR-058: Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tests"
        }), " CI Workflow and Stale Pytest Failures"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-058", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E07:S06", ":T08", " (audit finding)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (CI integration dead; local test signal degraded)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (v0.8.3.4+1 — E08:S03", ":T04", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058",
        children: ["E08:S03", ":T04"]
      }), " — ✅ COMPLETE (v0.8.3.4+1)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-03-25", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " CI/CD + test maintenance"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-summary",
      children: "Bug Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Update (2026-03-30, E05:S01", ":T69", " / FR-064):"]
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "update-badges.yml"
      }), " was ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "removed"
      }), " from this repo (BYOB / orphan ", (0,jsx_runtime.jsx)(_components.code, {
        children: "shields"
      }), " branch retirement). The former ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_run: [\"Tests\"]"
        })
      }), " dead trigger is therefore ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "moot"
      }), "; only disabled intake reference files remain under ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/"
      }), " aside from any future workflows."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Separately, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest"
        })
      }), " at repo root reports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "7 failing tests"
      }), " (85 passed, 92 collected after fixing import drift in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/test_validation.py"
      }), "). Failures indicate outdated tests relative to current CLI/backend APIs and environment-specific path expectations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_run.workflows: [\"Tests\"]"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update-badges.yml"
        }), " has no matching workflow file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "python3 -m pytest tests/"
        }), " (2026-03-25): 7 failures:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_backends.py"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PackageManagerBackend"
            }), " is abstract; tests instantiate it directly (3 failures)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_integration.py"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MockBackend()"
            }), " missing required ", (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), " argument."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_utils.py"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "get_project_root"
            }), " resolves via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/private/var/..."
            }), " on macOS while tests compare to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/var/..."
            }), " (2 failures)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tests/workflow-mgmt/test_implementation_cycle_workflow.py"
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_icw_workflow_customization"
            }), " expects merged YAML to retain ", (0,jsx_runtime.jsx)(_components.code, {
              children: "phases"
            }), " key; merge result differs."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No automated pytest on push/PR for this repo."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Badge updates tied to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tests"
        }), " completion are effectively ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dead code"
        }), " until a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tests"
        }), " workflow exists or the trigger is removed/retargeted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Contributors cannot rely on a green ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest"
        }), " run without addressing the above."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solutions",
      children: "Proposed Solutions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/tests.yml"
        }), " (or rename existing) with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name: Tests"
        }), " running ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip install -e \".[dev]\""
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/requirements.txt"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest"
        }), ", on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pull_request"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push"
        }), " to main/epic branches; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " remove/rewrite the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_run"
        }), " block in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update-badges.yml"
        }), " if tests are intentionally not automated yet."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update"
        }), " failing tests to match current APIs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "NpmBackend"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "PipBackend"
        }), " vs abstract base, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MockBackend"
        }), " signature, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Path.resolve()"
        }), " in assertions, ICW YAML merge expectations)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Audit:"
          }), " ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit",
            children: "T08-dependency-and-tooling-audit.md"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Workflow:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "update-badges.yml"
          }), " was ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "removed"
          }), " from this repo (see ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bug Summary"
          }), "); historical file: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/commits/main/.github/workflows",
            children: "update-badges.yml (last known commit search)"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "resolution-v08341-e08s03",
      children: ["Resolution (v0.8.3.4+1, E08:S03", ":T04", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/tests.yml",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/workflows/tests.yml"
          })
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name: Tests"
        }), ", Python 3.11, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest tests/"
        }), " on PR + push to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remediated root pytest suite (348 passed locally); complements ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T02-ci-pytest-gate-for-workflow-scripts",
          children: ["E07:S07", ":T02"]
        }), " scoped workflow-mgt gate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Historical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_run: Tests"
        }), " trigger remains moot (badges workflow removed per FR-064)."]
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