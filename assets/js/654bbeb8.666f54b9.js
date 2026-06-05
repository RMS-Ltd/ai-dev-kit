"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["68296"], {
27633(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_060_rw_art_flag_should_work_in_all_rw_modes_md_654_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-060-rw-art-flag-should-work-in-all-rw-modes-md-654.json
var site_docs_project_management_kanban_fr_br_br_060_rw_art_flag_should_work_in_all_rw_modes_md_654_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes","title":"Bug Report BR-060: RW --art Flag Not Fully Applied Through Step 9","description":"Bug ID: BR-060","source":"@site/../docs/project-management/kanban/fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-08T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage"},"next":{"title":"Bug Report BR-060 - RW incorrectly blocks IN PROGRESS tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-08T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-060: RW --art Flag Not Fully Applied Through Step 9';

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
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 3
}, {
  "value": "Root Cause",
  "id": "root-cause",
  "level": 3
}, {
  "value": "Proposed Solution",
  "id": "proposed-solution",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Resolution",
  "id": "resolution",
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
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "bug-report-br-060-rw---art-flag-not-fully-applied-through-step-9",
        children: ["Bug Report BR-060: RW ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " Flag Not Fully Applied Through Step 9"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-060", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E06:S06", ":T58", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH (blocks intended release attribution flow)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE (v0.6.6.58+2)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060",
        children: ["E02:S01", ":T09"]
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-08", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification:"
      }), " Workflow bug + policy/docs mismatch"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-summary",
      children: "Bug Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "RW ... --art"
      }), " can still fail at Step 9 even after Step 1d adoption succeeds, because branch/version validators were not receiving the same adoption context. This causes an avoidable abort when the user intentionally requests canonical adoption for a standard RW run."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User runs a regular RW command with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " for intentional anchor adoption."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Step 1d (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py"
        }), ") can pass with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 9 then aborts on branch/version mismatch because validator context is not propagated."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " should be valid for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "all RW trigger modes"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -d"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), ") with consistent semantics across ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1d and Step 9"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "explicit adoption of the requested task as canonical release anchor."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "continued enforcement of mandatory task token and task-doc checks."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validator chain and docs were out of sync:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Step 1d accepted ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--art"
            }), ", but Step 9 validators did not consistently consume requested/adoption context."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["rule/docs did not require propagation of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--requested ... --art"
            }), " into Step 9."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-solution",
      children: "Proposed Solution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep all-mode ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " support in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py"
        }), " (Step 1d)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend Step 9 validators to accept ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--requested"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update root ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " and packaged RW trigger excerpt to require ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " propagation in Step 9."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW execution docs and parity checklist so Step 9 behavior matches Step 1d adoption intent."
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
        }), " ", "Regular ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E:S:T --art"
        }), " does not fail due to Step 1d/Step 9 adoption-context mismatch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -d ... --art"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k ... --art"
        }), " use the same documented adoption semantics through Step 9."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        }), " are aligned."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW execution docs and parity checklist explicitly reflect all-mode ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " support."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Step 9 validator invocation docs include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--requested \"<token>\" --art"
        }), " propagation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolution",
      children: "Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implemented all-mode ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " support in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py"
        }), " (Step 1d)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implemented ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--requested"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " support in Step 9 validators (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updated RW rules/policy/docs and parity docs to require Step 9 adoption-context propagation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Release and follow-up cleanup are tracked under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E06:S06:T58"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.6.58+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.6.58+2"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-056 (RW task intent mismatch guard)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-060 (mandatory RW task token and task-doc guardrails)"
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