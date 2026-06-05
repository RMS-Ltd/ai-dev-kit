"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["21379"], {
18454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipw_e_3_s_02_t_12_task_touch_semver_collision_hardening_md_635_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipw-e-3-s-02-t-12-task-touch-semver-collision-hardening-md-635.json
var site_docs_implementation_cycles_ipw_e_3_s_02_t_12_task_touch_semver_collision_hardening_md_635_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening","title":"E3:S02:T12 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS02:T12)","source":"@site/../docs/implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-10T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E9:S05:T04 — Planning: Kanban Naming Hygiene and Directory Systematic Cleanup (UXR-011)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E9S05T04-kanban-naming-hygiene"},"next":{"title":"E4:S19:T02 - Planning: Spec, Tests, Implementation Plan (IPW) — LEGACY ALIAS","permalink":"/ai-dev-kit/docs/implementation-cycles/IPW-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-10T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E3:S02 — Planning: Spec, Tests, Implementation Plan (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Specification",
  "id": "1-specification",
  "level": 2
}, {
  "value": "1.1 Goal",
  "id": "11-goal",
  "level": 3
}, {
  "value": "1.2 Functional requirements",
  "id": "12-functional-requirements",
  "level": 3
}, {
  "value": "1.3 Non-functional requirements",
  "id": "13-non-functional-requirements",
  "level": 3
}, {
  "value": "1.4 Out of scope",
  "id": "14-out-of-scope",
  "level": 3
}, {
  "value": "1.5 Interaction contract with E5:S01",
  "id": "15-interaction-contract-with-e5s01",
  "level": 3
}, {
  "value": "2. Test design",
  "id": "2-test-design",
  "level": 2
}, {
  "value": "3. Implementation plan",
  "id": "3-implementation-plan",
  "level": 2
}, {
  "value": "3.1 Files to create or modify",
  "id": "31-files-to-create-or-modify",
  "level": 3
}, {
  "value": "3.2 Dependency order",
  "id": "32-dependency-order",
  "level": 3
}, {
  "value": "4. Success / verification criteria",
  "id": "4-success--verification-criteria",
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
        id: "e3s02--planning-spec-tests-implementation-plan-ipw",
        children: ["E3:S02", ":T12", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T12-implement-task-touch-semver-mapping-mode.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E3:S02", ":T12", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cross-Task Interaction:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T46-rw-semver-tag-task-touch-mode.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E5:S01", ":T46", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
        children: "BR-061"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
        children: "FR-046"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-specification",
      children: "1. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-goal",
      children: "1.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Eliminate high-frequency task-touch SemVer collisions by making conversion idempotent for read-only calls and constraining counter mutation to a single release-finalization pathway, while aligning RW tag behavior and docs via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E5:S01:T46"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-functional-requirements",
      children: "1.2 Functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F1:"
        }), " Introduce a strict separation between SemVer derivation (read-only) and SemVer allocation/finalization (state mutation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F2:"
        }), " Guarantee that repeated conversion for the same internal version does not increment PATCH repeatedly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F3:"
        }), " Preserve monotonic, collision-free SemVer generation across real release sequences, including perpetual tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F4:"
        }), " Update RW integration so tag creation and release naming consume finalized SemVer once per release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F5:"
        }), " Update FR-046/T46 documentation to reflect actual authoritative behavior after T12 fix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F6:"
        }), " Add explicit guardrails for duplicate finalize attempts in the same release flow."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-non-functional-requirements",
      children: "1.3 Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N1:"
        }), " Backward compatibility for existing registry data and historical tags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N2:"
        }), " Deterministic behavior under retries and partial RW failures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N3:"
        }), " Clear diagnostics when a call attempts mutation in a read-only context."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "N4:"
        }), " No silent semantic drift between version policy docs and implementation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-out-of-scope",
      children: "1.4 Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Redesigning the entire RC/EPIC/STORY/TASK schema."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rewriting all release tooling from scratch."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auto-migrating external repositories that copied legacy converter behavior."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "15-interaction-contract-with-e5s01",
      children: ["1.5 Interaction contract with E5:S01", ":T46"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T12"
        }), " owns converter semantics and collision hardening."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T46"
        }), " remains FR-repo anchor for RW SemVer tag behavior, but must be updated to reference the finalized ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T12"
        }), " behavior and constraints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Plan explicitly allows updates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T46"
        }), " task text/AC wording so documentation matches implementation reality."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-test-design",
      children: "2. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T1 — Read-only idempotency:"
        }), " Converting the same internal version N times leaves registry/counter unchanged."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T2 — Finalize-once semantics:"
        }), " Finalization increments counter exactly once for a release and returns stable value on repeated finalize attempts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T3 — Collision prevention:"
        }), " Simulated multi-task/multi-build sequences produce unique SemVer tags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T4 — Retry safety:"
        }), " Re-running failed RW steps does not burn additional PATCH values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T5 — Legacy compatibility:"
        }), " Existing registry history still resolves deterministic SemVer for historical versions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T6 — RW integration:"
        }), " Tag/release steps use the finalized SemVer and avoid \"tag already exists\" churn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T7 — Doc parity:"
        }), " FR-046/T46 text and task references reflect post-fix behavior and ownership boundaries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-implementation-plan",
      children: "3. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Audit current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " call graph and identify all mutating read paths.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Mutation map and single-source finalize strategy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Implement API split (", (0,jsx_runtime.jsx)(_components.code, {
          children: "derive"
        }), " read-only vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finalize"
        }), " mutating) and registry lock semantics.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Converter changes + migration-safe registry updates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Update RW call sites to use read-only derivation except at one explicit finalize boundary.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " RW step integration with deterministic finalize timing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Add collision/idempotency/retry tests and fixtures against BR-061 scenarios.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Automated regression suite proving no high-frequency PATCH drift."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Update T46 and FR-046 documentation to match implemented semantics and ownership split.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " T46 text/AC updates cross-linked to T12 and BR-061."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Validate end-to-end with dry-run release simulation and tag uniqueness checks.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deliverable:"
        }), " Reproducible verification evidence for T12 ACs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-files-to-create-or-modify",
      children: "3.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " (schema-safe evolution if required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
        }), " (if finalize boundary checks required)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versioning/RW docs under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/"
        }), " as needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-dependency-order",
      children: "3.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Converter semantics split."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Registry compatibility."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW call-site update."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression tests."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T46/FR-046 doc alignment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end verification."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-success--verification-criteria",
      children: "4. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "BR-061 behavior is eliminated: no PATCH inflation from repeated read-only conversions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Task-touch SemVer allocation is deterministic and collision-resistant under retries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW tag/release behavior consumes finalized SemVer once per release flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T46"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-046"
        }), " accurately describe the implemented behavior and dependencies."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Evidence includes focused tests and a replayable dry-run scenario."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode",
          children: ["Host Task E3:S02", ":T12"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode",
          children: ["Cross-task E5:S01", ":T46"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
          children: "BR-061"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
          children: "FR-046"
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