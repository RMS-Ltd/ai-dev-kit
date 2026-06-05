"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["97469"], {
59053(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_084_rw_install_mode_c_missing_task_doc_pattern_md_81a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-084-rw-install-mode-c-missing-task-doc-pattern-md-81a.json
var site_docs_project_management_kanban_fr_br_br_084_rw_install_mode_c_missing_task_doc_pattern_md_81a_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern","title":"Bug Report BR-084: RW Mode C — Missing task_doc_pattern and Wrong Patterns Persisted","description":"Bug ID: BR-084","source":"@site/../docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T20:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-083: RW Install Default Epic/Story Patterns Mismatch Fresh Kanban Layout","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout"},"next":{"title":"Bug Report BR-085: RW Mode C — Story Pattern Prompt Infinite Loop After Fresh Kanban","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T20:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-084: RW Mode C — Missing task_doc_pattern and Wrong Patterns Persisted';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "On disk after fresh kanban",
  "id": "on-disk-after-fresh-kanban",
  "level": 2
}, {
  "value": "Actual generated kanban section (reader run)",
  "id": "actual-generated-kanban-section-reader-run",
  "level": 2
}, {
  "value": "Root causes (code)",
  "id": "root-causes-code",
  "level": 2
}, {
  "value": "Expected",
  "id": "expected",
  "level": 2
}, {
  "value": "Workaround",
  "id": "workaround",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Follow-up (2026-06-04 — lowercase fresh install on <code>main</code>)",
  "id": "follow-up-2026-06-04--lowercase-fresh-install-on-main",
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
        id: "bug-report-br-084-rw-mode-c--missing-task_doc_pattern-and-wrong-patterns-persisted",
        children: "Bug Report BR-084: RW Mode C — Missing task_doc_pattern and Wrong Patterns Persisted"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-084", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (broken ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " after fresh kanban + RW install)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED ✅ (fix ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.13+2"
      }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-085"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+1"
      }), "; verified ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+2"
      }), " — ExpensesTracker T03 replay 2026-06-03)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/16",
        children: "#16"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/15",
        children: "#15"
      }), " (BR-083 — prompt defaults) · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban",
        children: "BR-085"
      }), " (story prompt infinite loop)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T13-rw-install-mode-c-rw-config-generation-br084",
        children: ["E06:S09", ":T13"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Book dry-run (ExpensesTracker); ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "84efa7b"
      }), "; kanban fresh → RW mode C"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_kanban_framework.py --mode fresh"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py --mode c"
      }), " can write a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "broken"
      }), " kanban section in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ": epic/story patterns that do not match installed files, and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern"
      }), " (required by RW validators and full-stack adopters)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "on-disk-after-fresh-kanban",
      children: "On disk after fresh kanban"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "docs/project-management/kanban/\n  kboard.md\n  epics/epic-01/epic-01.md\n  epics/epic-02/epic-02.md\n  …\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/epic-01/stories/"
      }), " directory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actual-generated-kanban-section-reader-run",
      children: "Actual generated kanban section (reader run)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "use_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: epics/Epic-{epic}.md\nstory_doc_pattern: epics/Epic-{epic}/stories/Story-{story}-*.md\nkanban_board: kboard.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Missing: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr_br_root"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-causes-code",
      children: "Root causes (code)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "collect_config_interactive"
          }), " (mode C)"]
        }), " — defaults/suggestions omit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-\\{epic\\}/Epic-\\{epic\\}.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "prompt_pattern_with_validation"
          })
        }), " — user can answer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "y"
        }), " to “Use this pattern anyway?” with 0 matches; invalid pattern is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "persisted"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "generate_rw_config_yaml"
          })
        }), " — omits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_doc_pattern"
        }), " (and optionally ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr_br_root"
        }), ") when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "use_kanban: true"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-*/Epic-*.md"
        }), " after fresh kanban and pre-fill aligned patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Emit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_doc_pattern: epics/Epic-\\{epic\\}/Story-\\{story\\}/T\\{task\\}-*.md"
        }), " (or installer-aligned variant)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do not silently persist 0-match patterns without loud warning or block."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workaround",
      children: "Workaround"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Manual edit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " after install (ai-dev-kit-book T03 Step 4.1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        }), " ", "Fresh kanban → RW mode C → epic pattern matches ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-01/epic-01.md"
        }), " without manual edit (T12 + T13)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Generated config includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_doc_pattern"
        }), " (+ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr_br_root"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fr-br/"
        }), " exists)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Integration test: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_install_release_workflow_rw_config.py"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " ExpensesTracker T03 replay ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-06-03"
      }), " — generated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " includes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern"
      }), " and aligned epic/story patterns. Closed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+2"
      }), " (GitHub #16)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "follow-up-2026-06-04--lowercase-fresh-install-on-main",
      children: ["Follow-up (2026-06-04 — lowercase fresh install on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern"
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "emitted"
      }), " (sign-off BR-084 READY) but values use wrong padding/glob (", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-{story:02d}-*/T{task:02d}"
      }), " vs book ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-{story:03d}/t{task:02d}"
      }), "). See ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "#17"
      }), " / ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff",
        children: "BR-086"
      }), " · ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E06:S09", ":T16"]
      }), " — do not reopen #16."]
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