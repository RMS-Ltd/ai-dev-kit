"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["41003"], {
81340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_002_task_touch_derived_mapping_md_835_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-002-task-touch-derived-mapping-md-835.json
var site_docs_architecture_standards_and_adrs_adr_002_task_touch_derived_mapping_md_835_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping","title":"ADR-002: Task-Touch Derived Mapping (Kanban → SemVer)","description":"Status: Implemented","source":"@site/../docs/architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-07T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Architecture Documentation","permalink":"/ai-dev-kit/docs/architecture/"},"next":{"title":"ADR-003: Greenfield vs Brownfield Adoption (Respect for Host Architecture)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-07T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-002: Task-Touch Derived Mapping (Kanban → SemVer)';

const assets = {

};



const toc = [{
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Mapping Formula",
  "id": "mapping-formula",
  "level": 3
}, {
  "value": "Algorithm",
  "id": "algorithm",
  "level": 3
}, {
  "value": "Implementation",
  "id": "implementation",
  "level": 2
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 3
}, {
  "value": "Registry Structure",
  "id": "registry-structure",
  "level": 3
}, {
  "value": "API Functions",
  "id": "api-functions",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Collision Resolution",
  "id": "collision-resolution",
  "level": 3
}, {
  "value": "Monotonic Sequences",
  "id": "monotonic-sequences",
  "level": 3
}, {
  "value": "Migration",
  "id": "migration",
  "level": 2
}, {
  "value": "For New Projects",
  "id": "for-new-projects",
  "level": 3
}, {
  "value": "For Existing Projects",
  "id": "for-existing-projects",
  "level": 3
}, {
  "value": "Backward Compatibility",
  "id": "backward-compatibility",
  "level": 3
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Benefits",
  "id": "benefits",
  "level": 3
}, {
  "value": "Trade-offs",
  "id": "trade-offs",
  "level": 3
}, {
  "value": "Risks",
  "id": "risks",
  "level": 3
}, {
  "value": "Status",
  "id": "status",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "adr-002-task-touch-derived-mapping-kanban--semver",
        children: "ADR-002: Task-Touch Derived Mapping (Kanban → SemVer)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Implemented", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-03-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " FR-045, SemVer tag collision incident (2026-03-07)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The AI Dev Kit uses dual-versioning with internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " versions for Kanban traceability and external SemVer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH+BUILD"
      }), " for package managers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The original registry-based mapping (Mode A) causes SemVer tag collisions because it doesn't encode the TASK component, leading to multiple internal versions mapping to the same SemVer."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task-Touch Derived Mapping"
      }), " (Mode B) that provides strictly monotonic, 1:1 traceable SemVer sequences."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mapping-formula",
      children: "Mapping Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR = RC (Release Candidate)\nMINOR = count of epics signed off (per RC)\nPATCH = global task-touch counter (increments once per RW release)\nBUILD = preserved from internal version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm",
      children: "Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), ": Direct mapping from RC (0 → 0, 1 → 1, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), ": Count of epics that have been signed off for the given RC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), ": Global counter that increments each time a task is \"touched\" by a release"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BUILD"
        }), ": Preserved from internal version for traceability"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation",
      children: "Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# SemVer mapping strategy: \"registry\" (default) or \"task_touch\"\nsemver_mapping_strategy: registry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-structure",
      children: "Registry Structure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Extended ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver-registry.yaml"
      }), " format:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "rc_0:\n  epic_to_minor: {...}      # Legacy registry mode (backward compatible)\n  story_to_patch: {...}     # Legacy registry mode (backward compatible)\n  task_touch_mode:\n    epic_count: 7            # Number of epics signed off\n    task_touch_counter: 156  # Global counter\n    mapping_history: []      # Optional: audit trail\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-functions",
      children: "API Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Main converter\nconvert_internal_to_semver_task_touch(rc, epic, story, task, build)\n\n# Counter management\nget_epic_count(rc) / set_epic_count(rc, count)\nget_task_touch_counter(rc) / increment_task_touch_counter(rc)\n\n# Strategy-aware conversion\nconvert_version_string(internal_version, strategy=\"task_touch\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "collision-resolution",
      children: "Collision Resolution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before (Registry Mode):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.101+5 → 0.6.52+5\n0.6.7.102+5 → 0.6.52+5  ← Collision!\n0.6.7.103+5 → 0.6.52+5  ← Collision!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After (Task-Touch Mode):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0.6.7.101+5 → 0.4.2+5\n0.6.7.102+5 → 0.4.3+5  ← No collision\n0.6.7.103+5 → 0.4.4+5  ← No collision\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monotonic-sequences",
      children: "Monotonic Sequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Internal versions:     → Task-Touch SemVer:\n0.3.2.12+1             → 0.4.1+1\n0.6.7.103+6            → 0.4.2+6\n0.2.13.7+1             → 0.4.3+1\n0.6.7.18+1             → 0.4.4+1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MAJOR"
        }), " stays constant (RC=0)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MINOR"
        }), " stays constant (6 epics signed off)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PATCH"
        }), " always increases (task-touch counter)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration",
      children: "Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-new-projects",
      children: "For New Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mapping_strategy: task_touch"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize epic count based on project state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start using task-touch mapping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-existing-projects",
      children: "For Existing Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze existing tag history to compute initial counters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use migration utility to backfill task-touch SemVer"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Switch configuration to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), " mode"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify no collisions in test environment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "backward-compatibility",
      children: "Backward Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registry mode remains the default"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " files are automatically extended"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Both modes can coexist during transition"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benefits",
      children: "Benefits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Collisions"
        }), ": Each internal version maps to unique SemVer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strict Monotonicity"
        }), ": PATCH always increases, package-manager friendly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1:1 Traceability"
        }), ": Direct mapping between internal and external versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration Driven"
        }), ": Projects can choose mapping strategy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trade-offs",
      children: "Trade-offs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global State"
        }), ": Task-touch counter requires synchronization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Effort"
        }), ": Existing projects need to initialize counters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Different SemVer"
        }), ": Task-touch mode produces different SemVer than registry mode"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risks",
      children: "Risks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Counter Synchronization"
        }), ": Must ensure atomic updates in concurrent environments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Complexity"
        }), ": Large projects may need careful backfill planning"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ Implemented"
      }), " - Available in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver_converter.py"
      }), " with configuration support"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ Tested"
      }), " - Comprehensive test suite covering collision scenarios and monotonicity"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ Documented"
      }), " - This ADR and updated versioning policy"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "🔄 Rollout"
      }), " - Default remains registry mode; task_touch available for opt-in"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-045: ADR-002 Task-Touch Derived Mapping"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer tag collision incident (2026-03-07)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dev Kit Versioning Policy"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementation: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
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