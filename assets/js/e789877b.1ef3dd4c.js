"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4995"], {
32088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_semver_tag_collision_incident_2026_03_07_md_e78_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-semver-tag-collision-incident-2026-03-07-md-e78.json
var site_docs_architecture_standards_and_adrs_semver_tag_collision_incident_2026_03_07_md_e78_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07","title":"SemVer Tag Collision Incident Log (2026-03-07)","description":"Context","source":"@site/../docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-07T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"SemVer Mapping Proposal: RC.E.S.T+B → MAJOR.MINOR.PATCH+BUILD","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-mapping-proposal"},"next":{"title":"specification-and-planning-artifacts-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-07T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'SemVer Tag Collision Incident Log (2026-03-07)';

const assets = {

};



const toc = [{
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Observed Collision",
  "id": "observed-collision",
  "level": 2
}, {
  "value": "Root Cause",
  "id": "root-cause",
  "level": 2
}, {
  "value": "Policy / Design Implication",
  "id": "policy--design-implication",
  "level": 2
}, {
  "value": "Current Repo State (as of this incident)",
  "id": "current-repo-state-as-of-this-incident",
  "level": 2
}, {
  "value": "Agreed Remediation Plan",
  "id": "agreed-remediation-plan",
  "level": 2
}, {
  "value": "Wave 2 recurrence (2026-06-04)",
  "id": "wave-2-recurrence-2026-06-04",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "semver-tag-collision-incident-log-2026-03-07",
        children: "SemVer Tag Collision Incident Log (2026-03-07)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A SemVer tag collision occurred during a RW maintenance release attributed to internal version ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.103+5"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This incident log captures the current state so that the reasoning, constraints, and remediation plan are preserved as durable repo knowledge."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-collision",
      children: "Observed Collision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Existing SemVer tag:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.52+5"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Points to commit tagged as internal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.7.102+5"
            }), " (CMW perpetual task)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "New internal release:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.7.103+5"
            }), " (RW perpetual task)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Attempted SemVer tag: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.52+5"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Result: tag creation blocked because the SemVer tag already exists"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause",
      children: "Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The currently implemented SemVer mapping (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
      }), ") uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "registry epic/story mapping mode"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR = RC"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "MINOR = epic_to_minor[EPIC]"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "PATCH = story_to_patch[(EPIC, STORY)]"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD = internal BUILD"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This mapping ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "does not encode TASK"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Therefore, all internal versions that share the same ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(RC, EPIC, STORY, BUILD)"
      }), " map to the same SemVer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In particular, the following internal versions all map to the same SemVer:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.101+5"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.52+5"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.102+5"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.52+5"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.103+5"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.52+5"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This makes SemVer tag collisions inevitable for perpetual tasks within the same epic/story."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "policy--design-implication",
      children: "Policy / Design Implication"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dev-kit versioning policy documents a \"1 internal → 1 SemVer\" expectation for tagging alignment, but the currently implemented mapping mode cannot satisfy this invariant when BUILD resets per task and TASK is not encoded."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-repo-state-as-of-this-incident",
      children: "Current Repo State (as of this incident)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Internal tag created:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.6.7.103+5"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SemVer tag was not created for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.6.7.103+5"
          }), " due to collision."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Existing SemVer tag ", (0,jsx_runtime.jsx)(_components.code, {
            children: "v0.6.52+5"
          }), " remains attached to the earlier CMW release (", (0,jsx_runtime.jsx)(_components.code, {
            children: "v0.6.7.102+5"
          }), ")."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agreed-remediation-plan",
      children: "Agreed Remediation Plan"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement ADR-002 / task-touch mapping and RW SemVer tagging behavior:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-045 (ADR-002 Task-Touch Derived Mapping)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "task_touch"
            }), " SemVer mapping mode that increments a global task-touch counter so SemVer never collides across tasks."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-046 (RW uses SemVer tag when task_touch enabled)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update RW tagging behavior to create and use SemVer tags derived from the selected mapping mode."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These are currently tracked as FR-repo anchor tasks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E5:S01:T45"
        }), " (FR-045 anchor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "E5:S01:T46"
        }), " (FR-046 anchor)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dedicated implementation tasks will be filed under the appropriate framework epics/stories."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wave-2-recurrence-2026-06-04",
      children: "Wave 2 recurrence (2026-06-04)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch"
      }), ", finalize guards initially checked only full ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver+BUILD"
      }), " strings, not ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PATCH integer"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SemVer core"
      }), ". Live ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver-registry.yaml"
      }), " had four collision groups (e.g. PATCH ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "870"
      }), " shared by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.5.9.12+3"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.9.17+1"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Remediation (E03:S02", ":T12", "):"]
      }), " Injective finalize in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver_converter.py"
      }), "; audit/repair scripts; registry repair per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04",
        children: "semver-registry-collision-repair-2026-06-04.md"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git tags not moved"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.870"
      }), " may remain on an older commit until manually addressed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        })
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