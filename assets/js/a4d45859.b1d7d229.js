"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["2813"], {
2955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_documentation_engineering_and_platform_versioning_task_ordering_anti_pattern_md_a4d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-documentation-engineering-and-platform-versioning-task-ordering-anti-pattern-md-a4d.json
var site_docs_documentation_engineering_and_platform_versioning_task_ordering_anti_pattern_md_a4d_namespaceObject = JSON.parse('{"id":"documentation/engineering-and-platform/versioning-task-ordering-anti-pattern","title":"Avoiding Task-Ordering Drift in RC.EPIC.STORY.TASK+BUILD","description":"Overview","source":"@site/../docs/documentation/engineering-and-platform/versioning-task-ordering-anti-pattern.md","sourceDirName":"documentation/engineering-and-platform","slug":"/documentation/engineering-and-platform/versioning-task-ordering-anti-pattern","permalink":"/ai-dev-kit/docs/documentation/engineering-and-platform/versioning-task-ordering-anti-pattern","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/documentation/engineering-and-platform/versioning-task-ordering-anti-pattern.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-11T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Open KB Starter Map for Engineering Teams","permalink":"/ai-dev-kit/docs/documentation/engineering-and-platform/open-kb-starter-map"},"next":{"title":"Post-Implementation Review: Epic &lbrace;N&rbrace;","permalink":"/ai-dev-kit/docs/documentation/templates/epic-pir-template"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/documentation/engineering-and-platform/versioning-task-ordering-anti-pattern.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-11T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Avoiding Task-Ordering Drift in RC.EPIC.STORY.TASK+BUILD';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "What happened (concrete evidence)",
  "id": "what-happened-concrete-evidence",
  "level": 2
}, {
  "value": "Root cause",
  "id": "root-cause",
  "level": 2
}, {
  "value": "Proposed hardening (RW + policy guardrails)",
  "id": "proposed-hardening-rw--policy-guardrails",
  "level": 2
}, {
  "value": "Why this should work",
  "id": "why-this-should-work",
  "level": 2
}, {
  "value": "Implementation sketch",
  "id": "implementation-sketch",
  "level": 2
}, {
  "value": "Takeaways",
  "id": "takeaways",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "avoiding-task-ordering-drift-in-rcepicstorytaskbuild",
        children: "Avoiding Task-Ordering Drift in RC.EPIC.STORY.TASK+BUILD"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Our numbering policy requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " to map to the actual work item being released. When tasks under the same story are processed out of numeric order (e.g., T10 before T09), it is easy to let the version stick to the higher task number and only bump ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BUILD"
      }), ". This creates policy drift: the released version no longer points to the task actually shipped."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-happened-concrete-evidence",
      children: "What happened (concrete evidence)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " E4", ":S06", " – Comprehensive Canonical E/S/T Template System"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T10 (BR-004)"
        }), ": Epic contamination fix landed first at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.6.10+1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T09 (BR-009)"
        }), ": Installer discoverability landed later, but was initially recorded at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.6.10+2"
        }), " (kept TASK=10, bumped BUILD).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Result: TASK in the version string did not match the actual task (T09). We corrected it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.6.9+2"
        }), " (TASK=9, BUILD=2), and kept T10 at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.6.10+1"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW and policy checks did ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " prevent “task index regression” (releasing a lower-numbered task after a higher-numbered one)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default behavior allowed keeping the higher TASK and using BUILD to sequence, causing drift."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-hardening-rw--policy-guardrails",
      children: "Proposed hardening (RW + policy guardrails)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW validation: task regression check"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Compare the new ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), " against the last released ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), " for the same EPIC/STORY."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If new ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), " < last released ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), ", require an explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--allow-task-regression"
            }), " (with rationale), otherwise fail fast."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version assignment rule"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Always set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), " to the actual task being released."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BUILD"
            }), " for multiple releases of the same task (additional builds, hotfixes)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option for strict monotonic TASKs (alternative)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If teams want strictly increasing TASK numbers, late work on an earlier task can be modeled as a new higher-numbered task (e.g., T11) instead of reusing T09; this preserves monotonicity but changes the task ID. Default remains policy-aligned (TASK reflects the actual task)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog note"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--allow-task-regression"
            }), " is used, annotate the changelog entry with the rationale."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-this-should-work",
      children: "Why this should work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It enforces that the version string stays aligned to the actual task ID, preventing semantic drift."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It makes out-of-order task releases an explicit, auditable decision."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD remains scoped to “additional releases of the same task,” keeping the meaning clear."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-sketch",
      children: "Implementation sketch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In RW step before version bump:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Load last released ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK"
            }), " for the EPIC/STORY (from tags or changelog)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "new_task < last_task"
            }), " and no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--allow-task-regression"
            }), ", fail with guidance."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If allowed, proceed but log rationale; set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK=new_task"
            }), ", increment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BUILD"
            }), " for this task."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update docs/policy to codify the above and add examples (E4", ":S06", " T09/T10 incident)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "takeaways",
      children: "Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Out-of-order task processing is a real edge case; the guardrail keeps numbering policy intact."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explicit overrides make exceptional cases visible and auditable, avoiding silent drift."
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
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
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