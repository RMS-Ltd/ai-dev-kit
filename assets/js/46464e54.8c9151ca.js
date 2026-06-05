"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["49794"], {
27136(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_13_workflow_management_package_implementation_review_t_06_define_rc_sign_off_criteria_and_remediation_tasks_md_464_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-13-workflow-management-package-implementation-review-t-06-define-rc-sign-off-criteria-and-remediation-tasks-md-464.json
var site_docs_project_management_kanban_epics_epic_02_story_13_workflow_management_package_implementation_review_t_06_define_rc_sign_off_criteria_and_remediation_tasks_md_464_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks","title":"E02:S13:T06 – Define RC Sign-Off Criteria and Remediation Tasks","description":"Task IDS13:T06","source":"@site/../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md","sourceDirName":"project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review","slug":"/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T04:50:02.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"T05 – Create Gap Log and Risk Assessment","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment"},"next":{"title":"E02:S13:T07 – RW Uses SemVer Tag When task_touch Enabled","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T07-rw-semver-tag-when-task-touch-enabled"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T04:50:02.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S13 – Define RC Sign-Off Criteria and Remediation Tasks';

const assets = {

};



const toc = [{
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Input",
  "id": "input",
  "level": 2
}, {
  "value": "Deliverable",
  "id": "deliverable",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "RC Sign-Off Criteria",
  "id": "rc-sign-off-criteria",
  "level": 2
}, {
  "value": "Criterion 1: Component Inventory",
  "id": "criterion-1-component-inventory",
  "level": 3
}, {
  "value": "Criterion 2: Behavioral Compliance",
  "id": "criterion-2-behavioral-compliance",
  "level": 3
}, {
  "value": "Criterion 3: Integration Alignment",
  "id": "criterion-3-integration-alignment",
  "level": 3
}, {
  "value": "Criterion 4: Code Review Gate",
  "id": "criterion-4-code-review-gate",
  "level": 3
}, {
  "value": "Criterion 5: Gap Log and Risk Posture",
  "id": "criterion-5-gap-log-and-risk-posture",
  "level": 3
}, {
  "value": "Criterion 6: HIGH Gaps Filed in Kanban",
  "id": "criterion-6-high-gaps-filed-in-kanban",
  "level": 3
}, {
  "value": "RC Sign-Off Checklist",
  "id": "rc-sign-off-checklist",
  "level": 2
}, {
  "value": "Pre-Sign-Off Validation",
  "id": "pre-sign-off-validation",
  "level": 3
}, {
  "value": "Sign-Off Decision",
  "id": "sign-off-decision",
  "level": 3
}, {
  "value": "Remediation Task Pattern",
  "id": "remediation-task-pattern",
  "level": 2
}, {
  "value": "Remediation Backlog",
  "id": "remediation-backlog",
  "level": 2
}, {
  "value": "R1 — Flat YAML / Nested SoT (HIGH) — <strong>FILED</strong>",
  "id": "r1--flat-yaml--nested-sot-high--filed",
  "level": 3
}, {
  "value": "R2 — Kanban Transform Consolidation (HIGH) — <strong>FILED</strong>",
  "id": "r2--kanban-transform-consolidation-high--filed",
  "level": 3
}, {
  "value": "R3 — Shared <code>rw_config_loader</code> (MEDIUM) — Proposed",
  "id": "r3--shared-rw_config_loader-medium--proposed",
  "level": 3
}, {
  "value": "R4 — README/KB Doc Sweep (MEDIUM) — Proposed",
  "id": "r4--readmekb-doc-sweep-medium--proposed",
  "level": 3
}, {
  "value": "R5 — T01 Baseline Refresh (MEDIUM) — Proposed",
  "id": "r5--t01-baseline-refresh-medium--proposed",
  "level": 3
}, {
  "value": "R6 — Test Runner Documentation (MEDIUM) — Proposed",
  "id": "r6--test-runner-documentation-medium--proposed",
  "level": 3
}, {
  "value": "R7 — Registry + Validator Layout (MEDIUM/LOW) — Proposed",
  "id": "r7--registry--validator-layout-mediumlow--proposed",
  "level": 3
}, {
  "value": "R8 — Low / Informational Cleanup (LOW) — Proposed",
  "id": "r8--low--informational-cleanup-low--proposed",
  "level": 3
}, {
  "value": "Gap-to-Package Coverage Matrix",
  "id": "gap-to-package-coverage-matrix",
  "level": 3
}, {
  "value": "Minimum Bar for RC Approval",
  "id": "minimum-bar-for-rc-approval",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Version Anchor",
  "id": "version-anchor",
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
        id: "e02s13--define-rc-sign-off-criteria-and-remediation-tasks",
        children: ["E02:S13", ":T06", " – Define RC Sign-Off Criteria and Remediation Tasks"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E02:S13", ":T06", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.2.13.6+1 — RC criteria + remediation; DEFER posture)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.13.6+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E02S13T06"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Candidate (RC) sign-off criteria"
      }), " and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "remediation backlog"
      }), " for the Workflow Management framework package (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/"
      }), "), synthesizing T01–T05 and E07:S07", ":T01", "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RC sign-off posture:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DEFER"
      }), " — RC sign-off is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "withheld"
      }), " until HIGH gaps are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "filed in kanban"
      }), " (Criterion C6). C1–C5 pass; implementation of remediation remains separate (FR-083)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "In scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Six RC sign-off criteria with pass/fail evidence"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RC sign-off checklist and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DEFER"
        }), " decision"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Remediation backlog for all 16 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GAP-WFMGT-*"
        }), " entries"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remediation task pattern (E04-style)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File"
        }), " kanban tasks for HIGH gaps (R1, R2)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete FR-050 intake wiring"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remediation code/doc implementation (separate IPP per task)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MEDIUM/LOW gap task filing (proposed hosts only)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
          children: ["E02:S13", ":T01", " expectations baseline"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
          children: ["E02:S13", ":T02", " component inventory"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
          children: ["E02:S13", ":T03", " behavioral validation"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report",
          children: ["E02:S13", ":T04", " integration alignment"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment",
          children: ["E02:S13", ":T05", " gap log and risk assessment"]
        }), " — 16 gaps; 0 RC-blocking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
          children: ["E07:S07", ":T01", " RC gate summary"]
        }), " §7"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T06-rc-sign-off-remediation",
          children: "IPP-E02S13T06-rc-sign-off-remediation.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RC sign-off criteria and checklist (this document)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remediation backlog (8 work packages, 16 gaps)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Filed HIGH-gap tasks: ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization",
          children: ["E02:S13", ":T09"]
        }), ", ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
          children: ["E02:S13", ":T10"]
        })]
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
        }), " ", "RC sign-off criteria (C1–C6) defined with pass/fail + evidence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "RC sign-off checklist with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DEFER"
        }), " decision documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Remediation backlog covers all 16 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GAP-WFMGT-*"
        }), " IDs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "HIGH gaps have ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "filed"
        }), " task/FR docs with bidirectional links (T09, T10)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-050 intake completed with implementing task wired"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Remediation task pattern documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Minimum bar for RC approval stated explicitly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP bidirectionally linked"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rc-sign-off-criteria",
      children: "RC Sign-Off Criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "criterion-1-component-inventory",
      children: "Criterion 1: Component Inventory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " Major workflows, scripts, KB guides, validators, and config artefacts inventoried and mapped to expectations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
              children: "T02 component inventory"
            }), " — 100% major components mapped"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "criterion-2-behavioral-compliance",
      children: "Criterion 2: Behavioral Compliance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " RW gates, validators, and doc/live parity align with agent execution guides."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
              children: "T03 behavior validation"
            }), " + ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation",
              children: "T08 sync"
            }), " — RW doc/live parity PASS"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "criterion-3-integration-alignment",
      children: "Criterion 3: Integration Alignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " Soft dependencies (Kanban, Versioning) contracts aligned; no hard-dependency violations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report",
              children: "T04 integration alignment"
            }), " — contracts ALIGNED"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "criterion-4-code-review-gate",
      children: "Criterion 4: Code Review Gate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " E07 machinery code review published; 0 Critical findings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
              children: ["E07:S07", ":T01", " report"]
            }), " — 0 Critical; H1 CI mitigated (T03 D12)"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "criterion-5-gap-log-and-risk-posture",
      children: "Criterion 5: Gap Log and Risk Posture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " Schema-conformant gap log; 0 RC-blocking gaps for the package."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment",
              children: "T05 gap log"
            }), " — 16 gaps, 0 BLOCKER; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_gap_log.py --strict"
            }), " passes"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "criterion-6-high-gaps-filed-in-kanban",
      children: "Criterion 6: HIGH Gaps Filed in Kanban"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirement:"
      }), " Each HIGH gap has a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "filed"
      }), " FR/task with bidirectional links (not proposed-only)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gap ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Filed host"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-STRUCT-001"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
              children: "FR-050"
            }), " → ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization",
              children: ["E02:S13", ":T09"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            }), " (filed 2026-06-05)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-INTG-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
              children: ["E02:S13", ":T10"]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            }), " (filed 2026-06-05)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PASS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both HIGH gaps filed with bidirectional links"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rc-sign-off-checklist",
      children: "RC Sign-Off Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-sign-off-validation",
      children: "Pre-Sign-Off Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C1 Component inventory:"
        }), " PASS (T02)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C2 Behavioral compliance:"
        }), " PASS (T03 + T08)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C3 Integration alignment:"
        }), " PASS (T04)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C4 Code review gate:"
        }), " PASS (E07; 0 Critical)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C5 Gap log posture:"
        }), " PASS (T05; 0 blockers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C6 HIGH gaps filed:"
        }), " PASS (T09, T10; FR-050 intake)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sign-off-decision",
      children: "Sign-Off Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall status:"
      }), " C1–C6 criteria ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "met"
      }), " for criteria definition and HIGH-gap filing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RC sign-off recommendation:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DEFER"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C1–C5 demonstrate the package has ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no RC-blocking gaps"
        }), " (0 Critical, 0 BLOCKER)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Per project policy (user-selected DEFER posture), RC sign-off recommendation remains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DEFER"
        }), " until:", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["HIGH-gap remediation tasks progress beyond ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "TODO"
            }), " (implementation + verification), and"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A follow-on RC review upgrades the recommendation to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "APPROVE"
            }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "CONDITIONAL APPROVE"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["T06 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "completes"
        }), " criteria definition and backlog filing; it does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " grant RC sign-off."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Path to APPROVE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization",
          children: ["E02:S13", ":T09"]
        }), " (FR-050) via IPP + RW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
          children: ["E02:S13", ":T10"]
        }), " via IPP + RW"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-run RC checklist; upgrade sign-off when remediation evidence exists"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remediation-task-pattern",
      children: "Remediation Task Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Non-blocking gaps must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "externalized"
      }), " into Kanban (E04:S16", ":T06", " pattern):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose host:"
        }), " Epic 2 for package issues; Epic 7 for cross-cutting machinery; FR for structural features."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File task or complete FR intake"
        }), " with bidirectional links in the same session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Record metadata:"
        }), " gap ID, severity, RC impact, priority band (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Must fix before GA"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Should fix"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Post-RC"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wire to T05:"
        }), " Update gap ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Tracking"
        }), " field to filed task/FR ID."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation:"
        }), " Separate IPP per code-change task (FR-083)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remediation-backlog",
      children: "Remediation Backlog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "r1--flat-yaml--nested-sot-high--filed",
      children: ["R1 — Flat YAML / Nested SoT (HIGH) — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FILED"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-STRUCT-001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH — Must fix before GA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Host"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
              children: "FR-050"
            }), " → ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization",
              children: ["E02:S13", ":T09"]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON-BLOCKING (filed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "r2--kanban-transform-consolidation-high--filed",
      children: ["R2 — Kanban Transform Consolidation (HIGH) — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FILED"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-INTG-001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH — Must fix before GA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Host"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
              children: ["E02:S13", ":T10"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON-BLOCKING (filed)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "r3--shared-rw_config_loader-medium--proposed",
      children: ["R3 — Shared ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw_config_loader"
      }), " (MEDIUM) — Proposed"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-INTG-002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM — Should fix when feasible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proposed host"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E07 E1 proposal; new E02 or E07 task on intake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON-BLOCKING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "r4--readmekb-doc-sweep-medium--proposed",
      children: "R4 — README/KB Doc Sweep (MEDIUM) — Proposed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-DOC-001, DOC-003, DOC-004, DOC-005, DOC-006"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM — Should fix when feasible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proposed host"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E02:S16", ":T05", " markdown maintenance or E02", ":S05", " doc wave"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON-BLOCKING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "r5--t01-baseline-refresh-medium--proposed",
      children: "R5 — T01 Baseline Refresh (MEDIUM) — Proposed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-DOC-002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM — Optional maintenance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proposed host"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E02", ":S13", " optional refresh task"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON-BLOCKING (T02/T03/T04 supersede for RC evidence)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "r6--test-runner-documentation-medium--proposed",
      children: "R6 — Test Runner Documentation (MEDIUM) — Proposed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-TEST-001"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proposed host"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E07 E4; document ", (0,jsx_runtime.jsx)(_components.code, {
              children: "run_isolated_pytest.sh"
            }), " in package README"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON-BLOCKING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "r7--registry--validator-layout-mediumlow--proposed",
      children: "R7 — Registry + Validator Layout (MEDIUM/LOW) — Proposed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-STRUCT-002, GAP-WFMGT-STRUCT-003"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM/LOW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proposed host"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E02 backlog; E07 E8 for validator relationship doc"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NON-BLOCKING"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "r8--low--informational-cleanup-low--proposed",
      children: "R8 — Low / Informational Cleanup (LOW) — Proposed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gaps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-STRUCT-004, GAP-WFMGT-OPS-001, GAP-WFMGT-TEST-002"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LOW — Post-RC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proposed host"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["E07:S07", ":T04", " optional; packaging audit"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RC impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INFORMATIONAL"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-to-package-coverage-matrix",
      children: "Gap-to-Package Coverage Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gap ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "R Package"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Filed?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-STRUCT-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (T09)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-INTG-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (T10)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-CI-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mitigated (no task)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-INTG-002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-DOC-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-DOC-002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-DOC-003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-TEST-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-STRUCT-002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-STRUCT-003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-DOC-004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-DOC-005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-STRUCT-004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-OPS-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-TEST-002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAP-WFMGT-DOC-006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proposed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minimum-bar-for-rc-approval",
      children: "Minimum Bar for RC Approval"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RC sign-off may be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recommended"
      }), " (upgrade from DEFER) when ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all"
      }), " of the following hold:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C1–C5 remain PASS (inventory, behavior, integration, code review, gap log)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C6 filed tasks (T09, T10) reach ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " with verification evidence."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No new RC-blocking gaps introduced during remediation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MEDIUM backlog may remain open for post-RC scheduling."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T06-rc-sign-off-remediation",
          children: "IPP-E02S13T06"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment",
          children: "T05 gap log"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
          children: ["E07:S07", ":T01", " report"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
          children: "FR-050"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization",
          children: ["E02:S13", ":T09"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
          children: ["E02:S13", ":T10"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/gap-log-schema",
          children: "gap-log-schema.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-anchor",
      children: "Version Anchor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "✅ COMPLETE (v0.2.13.6+1)"
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