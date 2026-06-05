"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["54029"], {
89281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_085_rw_install_story_pattern_placeholder_loop_fresh_kanban_md_6da_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-085-rw-install-story-pattern-placeholder-loop-fresh-kanban-md-6da.json
var site_docs_project_management_kanban_fr_br_br_085_rw_install_story_pattern_placeholder_loop_fresh_kanban_md_6da_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban","title":"Bug Report BR-085: RW Mode C — Story Pattern Prompt Infinite Loop After Fresh Kanban","description":"Bug ID: BR-085","source":"@site/../docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T22:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-084: RW Mode C — Missing task_doc_pattern and Wrong Patterns Persisted","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern"},"next":{"title":"Bug Report BR-086: RW Mode C — Lowercase Fresh Kanban Patterns, Forward-Looking Story 03d, Sign-Off Mismatch","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T22:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-085: RW Mode C — Story Pattern Prompt Infinite Loop After Fresh Kanban';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Reproduction",
  "id": "reproduction",
  "level": 2
}, {
  "value": "Root causes",
  "id": "root-causes",
  "level": 2
}, {
  "value": "Expected",
  "id": "expected",
  "level": 2
}, {
  "value": "Workaround (until fix ships)",
  "id": "workaround-until-fix-ships",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Kanban Links",
  "id": "kanban-links",
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
        id: "bug-report-br-085-rw-mode-c--story-pattern-prompt-infinite-loop-after-fresh-kanban",
        children: "Bug Report BR-085: RW Mode C — Story Pattern Prompt Infinite Loop After Fresh Kanban"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-085", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (interactive RW install blocked after fresh kanban; book T03 dry-run)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED ✅ (fix ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+1"
      }), "; verified ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+2"
      }), " — ExpensesTracker T03 interactive replay 2026-06-03)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout",
        children: "BR-083"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern",
        children: "BR-084"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/15",
        children: "#15"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/16",
        children: "#16"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T14-rw-install-story-pattern-loop-br085",
        children: ["E06:S09", ":T14"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " ExpensesTracker T03 replay; ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "7a24046"
      }), "; kanban fresh → RW mode C"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_kanban_framework.py --mode fresh"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py --mode c"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loops forever"
      }), " on the story document pattern prompt when the reader presses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enter"
      }), " to accept the fresh-layout default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/Epic-\\{epic\\}/Story-{story:03d}-*.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["BR-083/T12 improved detection and defaults but left two gaps that block the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interactive"
      }), " greenfield path."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction",
      children: "Reproduction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fresh kanban install (epics only — no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-*.md"
        }), " files yet)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run RW installer mode C; accept epic default (12 matches)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At story pattern, press ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enter"
        }), " on default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[epics/Epic-\\{epic\\}/Story-{story:03d}-*.md]"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Observed:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Story document pattern … [epics/Epic-{epic}/Story-{story:03d}-*.md]:\n  ❌ Pattern must include placeholder(s): {story}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeats indefinitely."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-causes",
      children: "Root causes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/install_release_workflow.py"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "validate_required_placeholders"
          })
        }), " — substring check ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\\{story\\}\" in value"
        }), " fails for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{story:03d}"
        }), " (next character after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "y"
        }), " is ", (0,jsx_runtime.jsx)(_components.code, {
          children: ":"
        }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "}"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "prompt_pattern_with_validation"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "strict_zero_match"
          })]
        }), " — fresh kanban creates epics before stories; zero-match story pattern is rejected even when the default is installer-aligned."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enter on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FRESH_KANBAN_STORY_PATTERN"
        }), " passes placeholder validation."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic-only fresh tree: accept installer-aligned story default with an informational message (no infinite loop)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ExpensesTracker T03 interactive path completes without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--config"
        }), " seed workaround."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workaround-until-fix-ships",
      children: "Workaround (until fix ships)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "install_release_workflow.py --mode c --config rw-config.seed.yaml"
        }), " (book dry-run), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Type ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-\\{epic\\}/Story-\\{story\\}-*.md"
        }), " after adding a placeholder ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-*.md"
        }), " file."]
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
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{story:03d}"
        }), " satisfies ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{story\\}"
        }), " placeholder requirement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Epic-only fresh kanban: Enter on story default completes interactively."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Tests in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_install_release_workflow_patterns.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "ExpensesTracker T03 replay passes without manual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config"
        }), " seed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " ExpensesTracker T03 replay ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-06-03"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py --mode c"
      }), " on epic-only kanban; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enter"
      }), " on story default → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Accepting installer-aligned default"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " written; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PARTIAL"
      }), " (workflow YAML only). ADK submodule ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "22006ee"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.6.9.14+1"
      }), "). Closed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kanban-links",
      children: "Kanban Links"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration",
          children: ["E06", ":S09"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T14-rw-install-story-pattern-loop-br085",
          children: ["E06:S09", ":T14"]
        })]
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