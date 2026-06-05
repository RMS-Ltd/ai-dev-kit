"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["90921"], {
77483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_093_ukw_slash_command_claude_code_md_14a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-093-ukw-slash-command-claude-code-md-14a.json
var site_docs_project_management_kanban_fr_br_fr_093_ukw_slash_command_claude_code_md_14a_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code","title":"FR-093: /ukw slash command for Claude Code","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-13T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"FR-092: Canonical RW/UKW kanban consistency program (meta)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program"},"next":{"title":"FR-094: /ipw slash command for Claude Code + mandatory task state transition in IPP","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-093-ukw-slash-command-claude-code.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-13T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-093: /ukw slash command for Claude Code';

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
  "value": "Deliverable",
  "id": "deliverable",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
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
    h3: "h3",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "fr-093-ukw-slash-command-for-claude-code",
        children: ["FR-093: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ukw"
        }), " slash command for Claude Code"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-093", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-13", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User — parity request with existing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/rw"
      }), " slash command", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " LOW", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED (v0.2.16.8+1 — E02:S16", ":T08", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093",
        children: ["E02:S16", ":T08"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ukw"
      }), " slash command for Claude Code (CLI / desktop / IDE extension) that invokes the Update Kanban Workflow, equivalent to the existing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/rw"
      }), " slash command for the Release Workflow. Requires a self-contained command file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/ukw.md"
      }), " and a plain-text trigger routing entry in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CLAUDE.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UKW was only triggerable via plain-text ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UKW"
      }), " (handled by ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " in Cursor). Claude Code sessions lacked a dedicated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/ukw"
      }), " slash command, making UKW invocation less reliable and inconsistent with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/rw"
      }), " pattern the user already relies on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ukw.md"
        }), " — self-contained UKW slash command execution guide covering: AC3 environment check, flag parsing (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-u"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-a <target>"
        }), "), step execution matrix, all 9 UKW steps with agent instructions, fbuboard reconciliation (Step 6.5), UKW → RW integration wiring, abort/completion protocol, file path fallbacks, and reference documentation links."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " update — dedicated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## UKW Trigger Routing"
        }), " section that routes plain-text ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ukw"
        }), " messages to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ukw"
        }), ", mirroring the existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## RW Trigger Routing"
        }), " section."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-093-F1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ukw"
        }), " slash command invocable with no flags (comprehensive run) or any combination of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-u"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-a <target>"
        }), " flags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-093-F2:"
        }), " Plain-text ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW [flags]"
        }), " at the start of a user message routes to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ukw"
        }), ", treated identically to the slash command."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-093-F3:"
        }), " Command file is self-contained — no external lookup required to execute UKW from it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-093-F4:"
        }), " AC3 environment check emits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW BLOCKED"
        }), " if Bash/tool execution is unavailable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-093-F5:"
        }), " UKW → RW integration wiring (perpetual task, BUILD increment) is documented in the command file."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-093-NF1:"
        }), " Pattern and structure mirrors ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), " for consistency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-093-NF2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " routing section mirrors existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## RW Trigger Routing"
        }), " format exactly."]
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
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ukw.md"
        }), " exists and is self-contained."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ukw"
        }), " with no flags triggers comprehensive UKW; flags ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-u"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-p"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-a"
        }), " scope correctly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " Plain-text ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UKW"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ukw"
        }), " (case-insensitive) route to the command in Claude Code sessions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " contains a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## UKW Trigger Routing"
        }), " section with AC3 / blocked-session handling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " FR-093 and E02:S16", ":T08", " are bidirectionally linked."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093",
          children: ["E02:S16", ":T08"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations",
          children: "Story 016"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ukw.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), " (pattern reference)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CLAUDE.md"
        }), " (routing entry)"]
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