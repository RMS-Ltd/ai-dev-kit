"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["87416"], {
69434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_icw_e_7_s_06_t_18_specification_md_e78_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-icw-e-7-s-06-t-18-specification-md-e78.json
var site_docs_implementation_cycles_icw_e_7_s_06_t_18_specification_md_e78_namespaceObject = JSON.parse('{"id":"implementation-cycles/ICW-E7S06T18-specification","title":"ICW E7:S06:T18 — Specification (UXR-007)","description":"Host taskS06:T18 — Interactive installer Kanban pattern prompt clarity","source":"@site/../docs/implementation-cycles/ICW-E7S06T18-specification.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/ICW-E7S06T18-specification","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-specification","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/ICW-E7S06T18-specification.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-10T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ICW E7:S06:T18 — Implementation plan (UXR-007)","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-implementation-plan"},"next":{"title":"ICW E7:S06:T18 — Test design (UXR-007)","permalink":"/ai-dev-kit/docs/implementation-cycles/ICW-E7S06T18-test-design"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/ICW-E7S06T18-specification.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-10T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ICW E7:S06 — Specification (UXR-007)';

const assets = {

};



const toc = [{
  "value": "1. Goal",
  "id": "1-goal",
  "level": 2
}, {
  "value": "2. Functional requirements",
  "id": "2-functional-requirements",
  "level": 2
}, {
  "value": "3. Non-functional requirements",
  "id": "3-non-functional-requirements",
  "level": 2
}, {
  "value": "4. Out of scope",
  "id": "4-out-of-scope",
  "level": 2
}, {
  "value": "5. Status transition intent (FR-077)",
  "id": "5-status-transition-intent-fr-077",
  "level": 2
}, {
  "value": "6. Success / verification criteria (planning)",
  "id": "6-success--verification-criteria-planning",
  "level": 2
}, {
  "value": "7. As-delivered verification (<code>v0.7.6.18+1</code>)",
  "id": "7-as-delivered-verification-v076181",
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
        id: "icw-e7s06--specification-uxr-007",
        children: ["ICW E7:S06", ":T18", " — Specification (UXR-007)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host task:"
      }), " E7:S06", ":T18", " — Interactive installer Kanban pattern prompt clarity", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UXR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-007-interactive-installer-kanban-pattern-prompt-clarity",
        children: "UXR-007"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release anchor:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.7.6.18+1"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-goal",
      children: "1. Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make interactive installer Kanban prompts self-explanatory, enforce placeholder-safe pattern input, and produce consistent end-to-end install-state messaging across chained installer runs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-functional-requirements",
      children: "2. Functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F1:"
        }), " Epic pattern input must require ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{epic\\}"
        }), " and reject literal one-epic paths (for example ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-01/epic-01.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F2:"
        }), " Story pattern input must require both ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{epic\\}"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{story\\}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F3:"
        }), " Prompt copy must explain paths are relative to selected ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_root"
        }), ", with concrete examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F4:"
        }), " Installer must provide immediate match-preview feedback (match count and sample matches) for pattern-based inputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F5:"
        }), " When pattern validation fails, installer must emit remediation with nearest valid examples derived from discovered files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F6:"
        }), " Kanban root selected during RW install config must be reused by Kanban framework installation flow unless explicitly overridden."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F7:"
        }), " End-of-run output for chained installs must expose one canonical outcome (", (0,jsx_runtime.jsx)(_components.code, {
          children: "SUCCESS"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PARTIAL"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FAILED"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CANCELLED"
        }), ") instead of mixed completion signals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F8:"
        }), " If ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " already contains RW trigger section, installer must provide guided reconciliation (clear next action, optional diff path)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-non-functional-requirements",
      children: "3. Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N1:"
        }), " Validation feedback should be fast enough for interactive use (no noticeable pause on typical repo sizes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N2:"
        }), " New validation must be deterministic and avoid false acceptance of malformed templates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N3:"
        }), " UX messaging must be consistent across dry-run and real execution paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N4:"
        }), " Changes must preserve backward compatibility for non-Kanban modes (", (0,jsx_runtime.jsx)(_components.code, {
          children: "A"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "B"
        }), ") and explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--kanban-path"
        }), " usage."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-out-of-scope",
      children: "4. Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full redesign of installer architecture or replacing existing CLI scripts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refactoring every workflow installer to a single shared engine in this task."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Auto-fixing malformed external ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        }), " files beyond reporting and state clarity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-status-transition-intent-fr-077",
      children: "5. Status transition intent (FR-077)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["First non-planning implementation commit for this task should move status ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO -> IN PROGRESS"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS -> COMPLETE"
        }), " only after acceptance evidence is captured in task/UXR references."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-success--verification-criteria-planning",
      children: "6. Success / verification criteria (planning)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Epic/story pattern prompts reject non-templated inputs with clear remediation — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implemented"
        }), " in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "install_release_workflow.py"
          })
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prompt_pattern_with_validation"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_required_placeholders"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Users get immediate match feedback and alternatives before config is written — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implemented"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "preview_pattern_matches"
        }), ", sample output, zero-match suggestions, and optional “Use this pattern anyway?”."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Chained installer flows validate the intended kanban root, not default-only paths — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implemented"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "load_rw_kanban_root"
        }), " / adoption of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_root"
        }), " in Kanban installer (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "install_kanban_framework.py"
          })
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "End-of-run state is unambiguous (", (0,jsx_runtime.jsx)(_components.code, {
          children: "SUCCESS"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "PARTIAL"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "FAILED"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "CANCELLED"
        }), ") — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implemented"
        }), ": RW installer emits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Final status: SUCCESS|PARTIAL"
        }), "; Kanban installer returns canonical status tuple and prints final status lines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T18"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UXR-007"
        }), " include cross-linked implementation evidence — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implemented"
        }), " via task doc, UXR links, and this retrospective planning package."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "7-as-delivered-verification-v076181",
      children: ["7. As-delivered verification (", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.7.6.18+1"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Evidence is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repository-based"
      }), " (code + tests); end-user verification in arbitrary consumer repos is out of scope for this subsection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Id"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "As-delivered note"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F1–F5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prompts + preview"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "prompt_pattern_with_validation"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "preview_pattern_matches"
            }), ", remediation strings and suggestion lists in RW installer (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/install_release_workflow.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "install_release_workflow.py"
              })
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root propagation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "load_rw_kanban_root"
            }), " and messaging when Kanban path is sourced from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/scripts/install_kanban_framework.py",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "install_kanban_framework.py"
              })
            }), ")."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical final status"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW installer: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Final status: SUCCESS"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PARTIAL"
            }), " from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install_warnings"
            }), "; Kanban installer aggregates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SUCCESS"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "PARTIAL"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "CANCELLED"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Partial:"
            }), " duplicate RW trigger detected → skip append, print reconciliation message, add warning → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PARTIAL"
            }), " outcome. Optional diff artifact path was ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " implemented; manual review remains."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Regression tests added for placeholder validation and preview globbing: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_install_release_workflow_patterns.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_install_release_workflow_patterns.py"
        })
      }), "."]
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