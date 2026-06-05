"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89937"], {
46131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_083_rw_install_default_patterns_mismatch_fresh_kanban_layout_md_406_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-083-rw-install-default-patterns-mismatch-fresh-kanban-layout-md-406.json
var site_docs_project_management_kanban_fr_br_br_083_rw_install_default_patterns_mismatch_fresh_kanban_layout_md_406_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout","title":"Bug Report BR-083: RW Install Default Epic/Story Patterns Mismatch Fresh Kanban Layout","description":"Bug ID: BR-083","source":"@site/../docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-03T17:40:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-082: RW Install Fails Without Venv PyYAML — No Preflight Hint","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight"},"next":{"title":"Bug Report BR-084: RW Mode C — Missing task_doc_pattern and Wrong Patterns Persisted","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-03T17:40:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-083: RW Install Default Epic/Story Patterns Mismatch Fresh Kanban Layout';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Actual layout after fresh install",
  "id": "actual-layout-after-fresh-install",
  "level": 2
}, {
  "value": "RW installer defaults (mode C)",
  "id": "rw-installer-defaults-mode-c",
  "level": 2
}, {
  "value": "Expected",
  "id": "expected",
  "level": 2
}, {
  "value": "Workaround (book packet)",
  "id": "workaround-book-packet",
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
        id: "bug-report-br-083-rw-install-default-epicstory-patterns-mismatch-fresh-kanban-layout",
        children: "Bug Report BR-083: RW Install Default Epic/Story Patterns Mismatch Fresh Kanban Layout"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-083", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (wrong rw-config defaults after fresh kanban install)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED ✅ (fix ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.12+2"
      }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-085"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+1"
      }), "; verified ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+2"
      }), " — ExpensesTracker T03 replay 2026-06-03)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/15",
        children: "#15"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/16",
        children: "#16"
      }), " → ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern",
        children: "BR-084"
      }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E06:S09", ":T13"]
      }), " (persisted YAML + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern"
      }), ") · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban",
        children: "BR-085"
      }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E06:S09", ":T14"]
      }), " (interactive story prompt loop)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T12-rw-install-pattern-defaults-br083",
        children: ["E06:S09", ":T12"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Book dry-run T03 after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_kanban_framework.py --mode fresh"
      }), "; ADK ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "84efa7b"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RW installer mode C defaults (", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/Epic-\\{epic\\}.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/Epic-\\{epic\\}/stories/Story-\\{story\\}-*.md"
      }), ") do not match fresh kanban install output (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic-\\{epic\\}/Epic-\\{epic\\}.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Story-{story:03d}-*.md"
      }), " under epic folder)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actual-layout-after-fresh-install",
      children: "Actual layout after fresh install"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-01/epic-01.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stories/"
        }), " subfolder)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rw-installer-defaults-mode-c",
      children: "RW installer defaults (mode C)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-\\{epic\\}.md"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no match"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/Epic-\\{epic\\}/stories/Story-\\{story\\}-*.md"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no match"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detect fresh-install layout and suggest matching patterns, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Cross-link kanban CONTEXTUALIZATION / post-install ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config"
        }), " snippet."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workaround-book-packet",
      children: "Workaround (book packet)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md\nstory_doc_pattern: epics/Epic-{epic}/Story-{story:03d}-*.md\n"
      })
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
        }), " ", "RW installer detects or defaults to kanban-installer layout (E06:S09", ":T12", ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Fresh-install docs include copy-paste ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " kanban keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Mode C prompt defaults pre-filled from on-disk layout when files exist."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification:"
      }), " ExpensesTracker T03 replay ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-06-03"
      }), " — epic pattern default matched 12 files; story default accepted after ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-085"
      }), " fix. Closed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+2"
      }), " (GitHub #15)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "follow-up-2026-06-04--lowercase-fresh-install-on-main",
      children: ["Follow-up (2026-06-04 — lowercase fresh install on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Book dry-run (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "#17"
      }), " / ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff",
        children: "BR-086"
      }), ") shows ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "capital-case path remains RESOLVED"
      }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lowercase"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/epic-\\{epic\\}/epic-\\{epic\\}.md"
      }), " still fails install sign-off (", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-{epic:02d}"
      }), " required) and mismatched Enter-defaults. Tracked under ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E06:S09", ":T16"]
      }), " — do not reopen #15."]
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