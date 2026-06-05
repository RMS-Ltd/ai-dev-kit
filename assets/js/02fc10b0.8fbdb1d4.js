"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55314"], {
31113(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_008_workflow_forensic_logging_and_checkpoints_md_02f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-008-workflow-forensic-logging-and-checkpoints-md-02f.json
var site_docs_architecture_standards_and_adrs_adr_008_workflow_forensic_logging_and_checkpoints_md_02f_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints","title":"ADR-008: Workflow Forensic Logging and Checkpoint Model","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-30T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-007: Book workspace governance document topology","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology"},"next":{"title":"ADR-009: UKW standalone deep reprioritization (--rp)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-30T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-008: Workflow Forensic Logging and Checkpoint Model';

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
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Positive",
  "id": "positive",
  "level": 3
}, {
  "value": "Negative",
  "id": "negative",
  "level": 3
}, {
  "value": "Compliance",
  "id": "compliance",
  "level": 3
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
        id: "adr-008-workflow-forensic-logging-and-checkpoint-model",
        children: "ADR-008: Workflow Forensic Logging and Checkpoint Model"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " User (Ruari Mears)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-08-harden-release-workflow-reliability/T08-enhanced-workflow-forensic-logging-and-rollback-hardening-fr-059",
        children: ["E02:S08", ":T08"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Origin FR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-059-enhanced-workflow-logging-system",
        children: "FR-059"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning package:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S08T08-forensic-logging-rollback-fr059",
        children: "IPP-E2S8T8"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Workflow execution in ai-dev-kit uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RWJournal"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/"
        }), ") for Release Workflow step-level recovery (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit",
          children: "FR-044"
        }), " related work on E05:S01", ":T44", " is a separate product slice)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WorkflowExecutor"
        }), " with placeholder checkpoint/rollback methods."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RollbackContract"
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RecoveryReport"
        }), " for conservative operator guidance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FR-059 requires atomic command decomposition, structured forensic metadata, real checkpoints, and TTL-governed maintenance logs. Multiple architectural options exist (journal-only, executor-only, or layered hybrid)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "layered hybrid"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "forensic_log.py"
          })
        }), " — single subprocess wrapper producing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AtomicCommandRecord"
        }), " JSON with lifecycle metadata (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ttl_days: 7"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lifecycle: ephemeral"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "housekeeping_policy: auto-delete"
        }), "), stdout/stderr caps, and env-key redaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Journal schema v1"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RunEntry.schema_version = 1"
        }), "; optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StepEntry.command_records[]"
        }), " for RW steps; backward compatible load (missing fields default empty)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "checkpoint_store.py"
          })
        }), " — manifests under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/checkpoints/{checkpoint_id}/manifest.json"
        }), " capturing git porcelain and timestamp; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no automatic"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git reset --hard"
        }), " or force-push on rollback."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WorkflowExecutor"
        }), " — all subprocess entry points use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_subprocess_logged"
        }), "; checkpoints call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "checkpoint_store.create_checkpoint"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Housekeeping"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "journal_housekeeping.sweep()"
        }), " enforces TTL from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "journal_ttl_days"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "journal_failed_ttl_days"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coordination"
        }), " — FR-044 (RW temporary log file) and E02:S01", ":T23", " (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log",
          children: "ADR-011"
        }), " agent run log + Workflow Step Tracker) remain out of scope; this ADR governs framework journal + executor forensic layer only."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One canonical forensic record shape for RW and sub-workflows."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operators get command timelines in recovery reports."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Adopters can extend journal dir via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative",
      children: "Negative"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Additional disk use until TTL sweep runs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checkpoints record state but do not auto-revert git/kanban — operators follow RollbackContract."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compliance",
      children: "Compliance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Forbidden commands in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rollback_contract.FORBIDDEN_COMMANDS"
        }), " stay non-auto-executable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Documentation Agent jurisdiction extended in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/"
        }), " maintenance logs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log",
          children: "ADR-011"
        }), " — Workflow Step Tracker and agent run log (E02:S01", ":T23", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow",
          children: "FR-058"
        }), " — log formatting consistency context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract",
          children: "ADR-004"
        }), " — task status transitions on implementation"]
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