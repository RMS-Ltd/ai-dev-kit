"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["17808"], {
30330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_01_rw_agent_execution_and_docs_md_adc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-01-rw-agent-execution-and-docs-md-adc.json
var site_docs_project_management_kanban_epics_epic_02_story_01_rw_agent_execution_and_docs_md_adc_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs","title":"Story 001 – RW Agent Execution & Docs","description":"Status: IN PROGRESS","source":"@site/../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md","sourceDirName":"project-management/kanban/epics/epic-02","slug":"/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S01:T24 — RW BUILD increment enforcement and release-tag immutability (BR-097)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097"},"next":{"title":"Task 001 – Add CHECK Phase (Step 12: Post-Commit Verification & Reflection)","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-02-pdca-integration-into-release-workflow/T01-add-check-phase-step-12"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Story 001 – RW Agent Execution & Docs';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Goal",
  "id": "goal",
  "level": 2
}, {
  "value": "Task Checklist",
  "id": "task-checklist",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies",
  "id": "dependencies",
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
    em: "em",
    h1: "h1",
    h2: "h2",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "story-001--rw-agent-execution--docs",
        children: "Story 001 – RW Agent Execution & Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " [TBD]", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Completed:"
      }), " N/A (story reopened for ongoing RW validation work)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.2.1.24+3 — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T24"
      }), " / BR-097 task_touch collision guards)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.24+3\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E2S01"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make RW agent execution documentation fully portable, clearly distinguishing dev-kit behaviour from external examples. This story ensures that the Release Workflow documentation is template-ready and can be easily adopted by other projects."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make RW agent execution documentation fully portable, clearly distinguishing dev-kit behaviour from external examples. Ensure that the Release Workflow accurately reflects verification requirements for fixes and other changes."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-checklist",
      children: "Task Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T01", " – Audit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "release-workflow-agent-execution.md"
            }), " for project-specific assumptions"]
          }), " ✅ COMPLETE (v0.2.1.1+3)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T01-audit-report",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T01-audit-report"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T02", " – Tag Confidentia/fynd.deals examples and add dev-kit examples"]
          }), " ✅ COMPLETE (v0.2.1.1+4)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T02-tag-confidentiafynddeals-examples-and-add-dev-kit-examples-c",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T02-tag-confidentiafynddeals-examples-and-add-dev-kit-examples-c"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T03", " – Align ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " RW trigger section with dev-kit policy"]
          }), " ✅ COMPLETE (v0.2.1.1+5)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T03-align-cursorrules-rw-trigger-section-with-dev-kit-policy-com",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T03-align-cursorrules-rw-trigger-section-with-dev-kit-policy-com"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T04", " – Update RW changelog step to require verification before marking fixes as \"fixed\""]
          }), " ✅ COMPLETE (v0.2.1.1+2)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T04-update-rw-changelog-step-to-require-verification-before-mark",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T04-update-rw-changelog-step-to-require-verification-before-mark"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T05", " – Harden RW branch safety checks to stop execution on wrong branch"]
          }), " ✅ COMPLETE (v0.2.1.5+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T05-harden-rw-branch-safety-checks-to-stop-execution-on-wrong-br",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T05-harden-rw-branch-safety-checks-to-stop-execution-on-wrong-br"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T06", " – Fix changelog validator ordering bug"]
          }), " ✅ COMPLETE (v0.2.1.6+4 – Validator now supports both Keep a Changelog and Canonical formats with auto-detection)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T06-validate-version-bump-story-detection-br001",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T06-validate-version-bump-story-detection-br001"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T07", " – Add support for update/maintenance branch patterns in branch validation"]
          }), " ✅ COMPLETE (v0.2.1.7+1)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T07-add-support-for-updatemaintenance-branch-patterns-in-branch",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "T07-add-support-for-updatemaintenance-branch-patterns-in-branch"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T08", " – Add Step 9 - IDE problem checking to Release Workflow"]
          }), " ✅ COMPLETE (v0.2.1.8+1 – FR-024 implemented: Step 9 added for IDE/linter problem checking)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T09", " – BR-060: RW allow ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " task releases (Step 1c)"]
          }), " - ✅ COMPLETE (closeout pass 2026-04-07; forensic ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.6.6.60+1"
          }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E06:S06", ":T60"]
          }), " at release; canonical ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T09"]
          }), ") — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases",
            children: "BR-060"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T10", " – UXR-006: Allow ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " branch as accepted RW validator context (solo workflow)"]
          }), " - TODO — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-006-dev-branch-and-rw-validator-relaxation",
            children: "UXR-006"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T11", " – BR-062: RW Step 7 must not leave completed tasks on in-progress kboard"]
          }), " - ✅ COMPLETE (v0.2.1.11+2 – scope expanded to full mode + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "kanban_init"
          }), "; active MoSCOW COMPLETE-row pruning + regression tests) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard",
            children: "BR-062"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T12", " – BR-061: RW explicit task-id should not require manual pre-alignment of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            })]
          }), " - ✅ COMPLETE (v0.2.1.12+2 – explicit-request reconciliation + guardrail-preserving tests/docs released) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T12-rw-explicit-task-id-version-alignment-br061",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment",
            children: "BR-061"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T13", " – BR-063: RW -k must prevent task attribution drift vs version anchor"]
          }), " - ✅ COMPLETE (v0.2.1.13+2 – filing, forensic cleanup, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-k"
          }), " guard + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--art"
          }), " + tests/docs) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T13-rw-k-forensic-task-attribution-alignment-br063",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor",
            children: "BR-063"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T14", " – FR-048: RW Trigger Extensions for Multiple Use Cases (traceability task wiring)"]
          }), " - ✅ COMPLETE (v0.2.1.14+1) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T14-rw-trigger-extensions-multiple-use-cases-fr048",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-048-rw-trigger-extensions-for-multiple-use-cases",
            children: "FR-048"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T15", " – FR-049: Canonical RW Step List - Single Source of Truth (traceability task wiring)"]
          }), " - ✅ COMPLETE (v0.2.1.15+1) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T15-canonical-rw-step-list-single-source-of-truth-fr049",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth",
            children: "FR-049"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T16", " – BR-064: RW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), " branch should not enforce epic lock"]
          }), " - ✅ COMPLETE (v0.2.1.16+1) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T16-rw-dev-branch-neutral-context-no-epic-lock-br064",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock",
            children: "BR-064"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T17", " – FR-077: IPW-built task status transition and kboard synchronization"]
          }), " - ✅ COMPLETE (v0.2.1.17+3 – ownership matrix aligned across IPW/RW/UKW, deterministic requested-task drift checks, recurrence regression tests) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync",
            children: "FR-077"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T18", " – RW Step 8 stage-completeness guardrails (BR-070)"]
          }), " - ✅ COMPLETE (v0.2.1.18+1 — post-commit validator, tests, docs) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit",
            children: "BR-070"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T19", " – RW trigger routing execution regression (BR-071)"]
          }), " - ✅ COMPLETE (v0.2.1.19+1 — fix: CLAUDE.md + .claude/commands/rw.md; root cause: no Claude Code instruction file; BR-071 RESOLVED) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T19-rw-trigger-routing-execution-regression-br071",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session",
            children: "BR-071"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T20", " – SemVer task-touch collision retrospective fix (BR-073)"]
          }), " - ✅ COMPLETE (v0.2.1.20+1 — registry patch, BR doc, task doc, kanban updates) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix",
            children: "BR-073"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T21", " – RW release commits test artifacts, deletes prior-build changelog, emits version typo (BR-074)"]
          }), " - ✅ COMPLETE (v0.2.1.21+1 — ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".gitignore"
          }), " exclusions, restored +1 changelog, patched +2 typo, Step 3 immutability guards, archive link validator, dual-source parity updated) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures",
            children: "BR-074"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T22", " – RW perpetual-task BUILD must persist in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            }), " (BR-075)"]
          }), " - ✅ COMPLETE (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.2.1.22+1"
          }), " — perpetual BUILD validator; version-bump skill path) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py",
            children: "BR-075"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075",
            children: "IPP"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T23", " – Tool-agnostic workflow step tracking + persisted run logs"]
          }), " - ✅ COMPLETE (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.2.1.23+1"
          }), ")"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs",
              children: "T23-tool-agnostic-workflow-step-tracking-and-runlogs.md"
            }), " | ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs",
              children: "IPP"
            }), " | ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log",
              children: "ADR-011"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["E02:S01", ":T24", " – RW BUILD increment enforcement and release-tag immutability (BR-097)"]
          }), " - ✅ COMPLETE (", (0,jsx_runtime.jsx)(_components.strong, {
            children: "v0.2.1.24+3"
          }), " — task_touch registry finalize, release contract validator, strategy-aware collision recovery, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--art"
          }), " cross-task BUILD) — ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097",
            children: "Task doc"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags",
            children: "BR-097"
          }), " | ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability",
            children: "IPP"
          })]
        }), "\n"]
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
        }), " ", "RW documentation is fully portable and template-ready ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Examples are clearly tagged as dev-kit vs external ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Changelog step requires verification before marking fixes as \"Fixed\" ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Unverified fixes are logged as \"Attempted fix\" until verified ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Verification methods (test suite, manual testing) are documented ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validation checks enforce verification requirements ✅"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinates With:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 3: Numbering & Versioning Framework (for versioning integration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4: Kanban Framework (for Kanban integration)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Last updated: 2026-04-02 — Story reopened; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S01", ":T09"]
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060",
          children: "BR-060"
        }), ". Prior: 2025-12-09 (v0.2.1.7+1 – Task 7 completed)."]
      })
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