"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["33266"], {
68816(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_077_ipw_built_task_status_transition_and_kboard_sync_md_8fe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-077-ipw-built-task-status-transition-and-kboard-sync-md-8fe.json
var site_docs_project_management_kanban_fr_br_fr_077_ipw_built_task_status_transition_and_kboard_sync_md_8fe_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync","title":"FR-077: IPW-built task status transition and kboard synchronization","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-09T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: UKW scope expansion to fbuboard with concurrency and temporal-drift controls","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls"},"next":{"title":"FR-078: Comprehensive install event-contract logging quality","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-078-comprehensive-install-event-contract-logging-and-feedback-quality"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-09T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'FR-077: IPW-built task status transition and kboard synchronization';

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
  "value": "Latest observed incident (2026-04-10)",
  "id": "latest-observed-incident-2026-04-10",
  "level": 3
}, {
  "value": "Core Questions to Resolve",
  "id": "core-questions-to-resolve",
  "level": 2
}, {
  "value": "Proposed Direction",
  "id": "proposed-direction",
  "level": 2
}, {
  "value": "Implemented decisions (2026-04-10)",
  "id": "implemented-decisions-2026-04-10",
  "level": 2
}, {
  "value": "Additional hardening (2026-04-10 follow-up)",
  "id": "additional-hardening-2026-04-10-follow-up",
  "level": 2
}, {
  "value": "Latest incident context (2026-04-13)",
  "id": "latest-incident-context-2026-04-13",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Release anchor (2026-04-14)",
  "id": "release-anchor-2026-04-14",
  "level": 2
}, {
  "value": "Execution notes",
  "id": "execution-notes",
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
        id: "fr-077-ipw-built-task-status-transition-and-kboard-synchronization",
        children: "FR-077: IPW-built task status transition and kboard synchronization"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-077", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-04-09", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077",
        children: ["E02:S01", ":T17"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a task is planned via IPW and that plan is then built/implemented, task status and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), " frequently remain stale (", (0,jsx_runtime.jsx)(_components.code, {
        children: "TODO"
      }), "), creating a false project state. Add explicit lifecycle rules so status transitions are applied at the correct point and reflected on kboard as part of the same workflowed unit of work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Current process allows this drift pattern:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IPW package is created and wired."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work is implemented from the IPW package."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task remains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " in task doc and/or kboard."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This creates governance and traceability gaps because documentation no longer reflects actual execution state."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "latest-observed-incident-2026-04-10",
      children: "Latest observed incident (2026-04-10)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["During ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IPW E03:S02:T12"
        }), " -> implementation -> ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E03:S02:T12 --art"
        }), ", task ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E03:S02:T12"
        }), " remained ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " until manually corrected."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW Step 1c failed gating (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_complete.py"
        }), ") because the host task status had not transitioned despite implementation evidence."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This confirms FR-077 remains an active operational defect path (not just documentation ambiguity)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "core-questions-to-resolve",
      children: "Core Questions to Resolve"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "When should status change from TODO to IN PROGRESS?"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "When should status change to COMPLETE?"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Which workflow step is responsible for propagating task status changes to kboard and related board views?"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-direction",
      children: "Proposed Direction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define a canonical status transition contract:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "TODO -> IN PROGRESS"
            }), " when implementation work starts (first non-planning implementation change)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IN PROGRESS -> COMPLETE"
            }), " when acceptance criteria are satisfied and evidence exists."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Wire this intent into IPW and adjacent execution guidance:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IPW artifacts must include a \"status transition intent\" section."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation and RW/UKW docs must state the authoritative update point and owner."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enforce atomic propagation:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task doc status update and kboard representation update happen in the same change set/session."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implemented-decisions-2026-04-10",
      children: "Implemented decisions (2026-04-10)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW ownership clarified:"
        }), " IPW planning docs now require a mandatory status-transition intent section."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition owner clarified:"
        }), " Implementation execution (not planning-only IPW) owns first state transition from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW audit path added:"
        }), " RW execution guide now includes an IPW transition drift audit using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_status_drift.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drift detector implemented:"
        }), " New validator scans IPW/ICW-derived task docs and fails when status remains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " despite implementation evidence markers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-hardening-2026-04-10-follow-up",
      children: "Additional hardening (2026-04-10 follow-up)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-gate enforcement moved earlier:"
        }), " RW Step 1c (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_complete.py"
        }), ") now performs FR-077 drift detection during releasability validation, so TODO+implementation evidence blocks with explicit drift reason before downstream steps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task-scoped drift checks:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_ipw_status_drift.py"
        }), " now supports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--requested E:S:T"
        }), " to validate the requested task first, improving diagnostic precision and reducing noisy broad scans during RW gating."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Diagnostic clarity:"
        }), " Step 1c failure output now explicitly distinguishes plain TODO from \"TODO with implementation evidence (FR-077 drift)\", with direct remediation guidance (transition to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "latest-incident-context-2026-04-13",
      children: "Latest incident context (2026-04-13)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recurrence observed after active implementation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E07:S06:T18 --art"
        }), " was blocked at Step 1c because host task ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E07:S06:T18"
        }), " remained ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), " even after substantial implementation work and test execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operational impact:"
        }), " Release flow aborted until manual status update (", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO -> IN PROGRESS"
        }), ") was applied."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implication for FR-077 scope:"
        }), " Existing validator hardening correctly blocks drift, but execution ergonomics still depend on humans remembering transition timing. Additional proactive guardrails are needed to reduce repeat incidents."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-077", ":R01"]
        }), " Define canonical status transition points for IPW-derived tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-077", ":R02"]
        }), " Add status transition intent/checklist to IPW planning artifacts or workflow guidance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-077", ":R03"]
        }), " Require task doc + kboard sync in one atomic update when status changes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-077", ":R04"]
        }), " Update RW/UKW/IPW documentation to avoid ambiguous ownership of status propagation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-077", ":R05"]
        }), " Add validation or audit checks to detect \"implemented but TODO\" drift."]
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
        }), " ", "Policy/docs explicitly define when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " are applied for IPW-derived tasks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPW output includes explicit status transition intent that downstream execution can apply."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "At least one regression check identifies and reports stale TODO state after implementation evidence exists."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "kboard and task-doc status remain synchronized for validated scenarios."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "release-anchor-2026-04-14",
      children: "Release anchor (2026-04-14)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Released build: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.2.1.17+3"
        }), " (SemVer: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.4.737+3"
        }), ") for implementing task ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S01", ":T17"]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Includes ownership-contract normalization (IPW/RW/UKW), deterministic requested-task drift checks, and recurrence regression tests (", (0,jsx_runtime.jsx)(_components.code, {
          children: "15 passed"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "execution-notes",
      children: "Execution notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This item is currently tracked as FR-led implementation under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E02:S01:T17"
        }), " (no standalone BR currently owns the same scope)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a dedicated BR is later introduced, it should be cross-linked here and made upstream to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T17"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        }), " - IPW workflow and planning artifacts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-075-icw-durable-planning-artifacts-documentation-system",
          children: "FR-075"
        }), " - Durable planning artifacts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls",
          children: "FR-076"
        }), " - Drift/concurrency controls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
          children: "FR-094"
        }), " - ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/ipw"
        }), " slash command + mandatory IPP state transition mandate. FR-094 is the mechanism that embeds the FR-077 ownership contract directly inside the IPP artefact — mandatory Step 1 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "TODO → IN PROGRESS"
        }), ") and final status reconciliation step prescribed in every IPP's Implementation Plan section. See also: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract",
          children: "ADR-004"
        }), "."]
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