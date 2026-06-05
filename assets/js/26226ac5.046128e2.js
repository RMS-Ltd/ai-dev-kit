"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["62089"], {
22990(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_073_semver_task_touch_collision_retrospective_fix_md_262_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-073-semver-task-touch-collision-retrospective-fix-md-262.json
var site_docs_project_management_kanban_fr_br_br_073_semver_task_touch_collision_retrospective_fix_md_262_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix","title":"Bug Report BR-073: SemVer task-touch collision — two internal versions mapped to identical SemVer","description":"Status: OPEN (registry patched retroactively; tag hygiene pending)","source":"@site/../docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-15T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-072: UKW not removing completed tasks from kboard","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard"},"next":{"title":"Bug Report BR-074: RW release commit includes test artifacts, deletes prior-build changelog, and emits version-typo in detailed changelog","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-15T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-073: SemVer task-touch collision — two internal versions mapped to identical SemVer';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Root Cause",
  "id": "root-cause",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Actual Behavior",
  "id": "actual-behavior",
  "level": 2
}, {
  "value": "Reproduction",
  "id": "reproduction",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-073-semver-task-touch-collision--two-internal-versions-mapped-to-identical-semver",
        children: "Bug Report BR-073: SemVer task-touch collision — two internal versions mapped to identical SemVer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " OPEN (registry patched retroactively; tag hygiene pending)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-05-15", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-15", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.20+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-073"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073",
        children: ["E02:S01", ":T20"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two distinct internal versions — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.24.1.6+1"
      }), " (E24:S01", ":T06", ") and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.2.1.18+1"
      }), " (E02:S01", ":T18", ") — both resolved to the same SemVer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.4.778+1"
      }), ". This violates the uniqueness invariant of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch"
      }), " conversion strategy, where each finalized release must receive a unique PATCH increment."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The collision was discovered during a README diff review that showed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.778+1"
      }), " appearing in consecutive release commits for two different internal versions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause",
      children: "Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch"
      }), " strategy in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver_converter.py"
      }), " only increments ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch_counter"
      }), " and records a mapping when called with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "finalize=True"
      }), ". The RW's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_rw_tags"
      }), " helper calls the converter with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "finalize=True"
      }), ", but if a release is cut manually (e.g., direct ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git tag -a"
      }), " without running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_rw_tags"
      }), "), the registry is never updated. Both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.24.1.6+1"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.2.1.18+1"
      }), " were converted with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "finalize=False"
      }), ", so each read the stale ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch_counter: 777"
      }), " and computed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PATCH = 777 + 1 = 778"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Additionally, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.778+1"
      }), " git tag was created on commit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "963ad934f"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.24.1.5+1"
      }), ") instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "2d8af696e"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.24.1.6+1"
      }), "), indicating the tag creation step also ran against the wrong commit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registry drift:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mapping_history"
        }), " did not reflect two real releases, causing future conversions to reuse PATCH values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag misplacement:"
        }), " The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.778+1"
        }), " tag points to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "963ad934f"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.24.1.5+1"
        }), ") rather than the commit that actually claimed that SemVer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consumer confusion:"
        }), " READMEs for two different releases advertised the same SemVer string."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Future collision risk:"
        }), " Any further ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finalize=False"
        }), " conversion would continue to produce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.778+1"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every finalized internal version maps to a unique SemVer PATCH value under the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), " strategy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v\\{semver\\}"
        }), " tag is created on the release commit that bumped the version, not on its parent."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registry state is updated atomically with tag creation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actual-behavior",
      children: "Actual Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.24.1.6+1"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.18+1"
        }), " both mapped to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.778+1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.778+1"
        }), " tag points to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "963ad934f"
        }), " (parent of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.24.1.6+1"
        }), " release)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Neither mapping appears in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mapping_history"
        }), " prior to the retroactive fix."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Both commands returned 0.4.778+1 before the registry patch\npython \"packages/frameworks/workflow-mgt/scripts/version/semver_converter.py\" \"0.24.1.6+1\"\npython \"packages/frameworks/workflow-mgt/scripts/version/semver_converter.py\" \"0.2.1.18+1\"\n\n# Verify tag placement\ngit rev-parse v0.4.778+1^{commit}\n# → 963ad934f (Release v0.24.1.5+1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " Retroactively add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.24.1.6+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.778+1"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " mapping_history and increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), " to 778."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Retroactively add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.1.18+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.779+1"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " mapping_history and increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), " to 779."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Update current README version line to reflect corrected SemVer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.779+1"
        }), " for internal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.1.18+1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " Ensure RW Step 11 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "create_rw_tags"
        }), ") always calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convert_internal_to_semver(..., finalize=True)"
        }), " so future releases increment the counter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " Document the collision and fix in semver converter documentation or ADR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " Decide whether to move or recreate the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.778+1"
        }), " tag on the correct commit (", (0,jsx_runtime.jsx)(_components.code, {
          children: "2d8af696e"
        }), ") and execute if approved."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " — canonical SemVer mapping registry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        }), " — converter logic"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/create_rw_tags.py"
        }), " — tag creation helper (should finalize)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), " — version badge line"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2d8af696e"
        }), " — Release v0.24.1.6+1 (first claimant of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.778+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d4e165248"
        }), " — Release v0.2.1.18+1 (should have received ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.4.779+1"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "963ad934f"
        }), " — Release v0.24.1.5+1 (erroneously hosts ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.778+1"
        }), " tag)"]
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