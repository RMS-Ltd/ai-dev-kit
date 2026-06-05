"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["77962"], {
26054(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_091_workflow_validator_legacy_workflow_mgt_path_hardcoded_md_ca5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-091-workflow-validator-legacy-workflow-mgt-path-hardcoded-md-ca5.json
var site_docs_project_management_kanban_fr_br_br_091_workflow_validator_legacy_workflow_mgt_path_hardcoded_md_ca5_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded","title":"Bug Report BR-091: Workflow validators hardcode legacy workflow mgt path — CI pytest gate fails","description":"Bug ID: BR-091","source":"@site/../docs/project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-090: Docusaurus 3.10 build fails — missing @docusaurus/faster and package.json / lockfile drift","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift"},"next":{"title":"Bug Report BR-092: Tests CI workflow missing requests — pytest collection error","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-091: Workflow validators hardcode legacy workflow mgt path — CI pytest gate fails';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-091-workflow-validators-hardcode-legacy-workflow-mgt-path--ci-pytest-gate-fails",
        children: ["Bug Report BR-091: Workflow validators hardcode legacy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt"
        }), " path — CI pytest gate fails"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-091", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Workflow scripts pytest"
        })
      }), " fails on every push to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " that touches ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/**"
      }), " (~16 failures since May 2026).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " FIXED ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 — verification closure ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.7.7.3+1"
      }), " (CI pytest green ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "; local 105/105). See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/v-band-verification-scan-2026-06-05",
        children: "evidence"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.7.7.3+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091",
        children: ["E07:S07", ":T03"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch",
        children: "BR-087"
      }), " (install slug migration) · ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T02-ci-pytest-gate-for-workflow-scripts",
        children: ["E07:S07", ":T02"]
      }), " (gate that exposes this defect)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FR-098 validators ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_adk_ecc_skill_pack.py"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_ecc_adk_bridge.py"
      }), " resolve the workflow framework directory as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow mgt"
      }), " (legacy name with space). The ai-dev-kit monorepo uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt"
        })
      }), ". CI reports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4 failing tests"
      }), " and validators exit code ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2"
      }), " instead of expected ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0"
      }), "/", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior-github-actions-2026-06-04",
      children: "Observed behavior (GitHub Actions, 2026-06-04)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Workflow ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Workflow scripts pytest"
        })
      }), " fails:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FAILED test_validate_adk_ecc_skill_pack.py::test_validator_passes_on_ai_dev_kit_repo\nERROR: workflow framework directory not found: .../packages/frameworks/workflow mgt\n\nFAILED test_validate_ecc_adk_bridge.py::test_validator_passes_on_template\nERROR: workflow mgt not found under .../ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["101 other tests pass; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4 fail"
      }), " consistently."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def workflow_mgt_dir(project_root: Path) -> Path:\n    return project_root / \"packages\" / \"frameworks\" / \"workflow mgt\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hardcoded in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_adk_ecc_skill_pack.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Canonical on-disk slug is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgt"
        })
      }), " (see ", (0,jsx_runtime.jsx)(_components.code, {
        children: "framework_install_slug.py"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "LEGACY_SOURCE_DIR_TO_SLUG"
        })
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Workflow scripts pytest"
          })
        }), " gate red on routine workflow-mgt changes."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators unusable against the monorepo layout without manual symlinks or renames."
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
        children: ["Validators resolve ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow-mgt"
          })
        }), " first; optionally fall back to legacy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow mgt"
          })
        }), " for adopter trees that have not migrated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "bash packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh"
        }), " exits ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " on CI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "validate_adk_ecc_skill_pack.py"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ecc_adk_bridge.py"
        }), " exit ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " against repo root without path errors."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-fix",
      children: "Proposed fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Introduce shared path resolution (e.g. reuse or mirror ", (0,jsx_runtime.jsx)(_components.code, {
          children: "framework_install_slug.py"
        }), " / detect slug then legacy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow_mgt_dir()"
          })
        }), " in both validators to prefer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow-mgt"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure temp-dir fixtures in tests remain valid (tests already use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgt"
        }), " paths)."]
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
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow_mgt_dir()"
          })
        }), " resolves ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt"
        }), " in ai-dev-kit monorepo."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Legacy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow mgt"
          })
        }), " directory still supported when present (adopter backward compatibility)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "run_workflow_scripts_ci_pytest.sh"
          })
        }), " — all tests pass locally and in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/workflows/workflow-scripts-pytest.yml"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "No regression to canonical path strings (", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/skills/"
        }), ") in bridge template checks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Clone ai-dev-kit; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cd"
        }), " repo root."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_adk_ecc_skill_pack.py"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ERROR: workflow framework directory not found: .../workflow mgt"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Or: push any change under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/**"
        }), " and watch ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Workflow scripts pytest"
          })
        }), " fail."]
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
      }), " Epic 7, Story 7, Task 3 — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091",
        children: "T03"
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