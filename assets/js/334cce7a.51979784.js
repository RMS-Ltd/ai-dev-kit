"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["25667"], {
67407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_13_workflow_management_package_implementation_review_t_05_create_gap_log_and_risk_assessment_md_334_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-13-workflow-management-package-implementation-review-t-05-create-gap-log-and-risk-assessment-md-334.json
var site_docs_project_management_kanban_epics_epic_02_story_13_workflow_management_package_implementation_review_t_05_create_gap_log_and_risk_assessment_md_334_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment","title":"T05 – Create Gap Log and Risk Assessment","description":"Task IDS13:T05","source":"@site/../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md","sourceDirName":"project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review","slug":"/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T04:50:02.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 2, Story 13, Task 4: Review integrations and dependency alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T04-review-integrations-and-dependency-alignment"},"next":{"title":"E02:S13:T06 – Define RC Sign-Off Criteria and Remediation Tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T04:50:02.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'T05 – Create Gap Log and Risk Assessment';

const assets = {

};



const toc = [{
  "value": "Specification and Validation",
  "id": "specification-and-validation",
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
  "value": "Approach",
  "id": "approach",
  "level": 2
}, {
  "value": "Gap Log",
  "id": "gap-log",
  "level": 2
}, {
  "value": "Gap 1 – Flat Workflow YAML Duplicates Nested SoT",
  "id": "gap-1--flat-workflow-yaml-duplicates-nested-sot",
  "level": 3
}, {
  "value": "Gap 2 – Kanban Update Path Fragmentation",
  "id": "gap-2--kanban-update-path-fragmentation",
  "level": 3
}, {
  "value": "Gap 3 – CI Pytest Gate (Mitigated)",
  "id": "gap-3--ci-pytest-gate-mitigated",
  "level": 3
}, {
  "value": "Gap 4 – Duplicate <code>load_rw_config</code> Implementations",
  "id": "gap-4--duplicate-load_rw_config-implementations",
  "level": 3
}, {
  "value": "Gap 5 – README <code>check_changelog_size</code> Wrong Path",
  "id": "gap-5--readme-check_changelog_size-wrong-path",
  "level": 3
}, {
  "value": "Gap 6 – T01 Baseline Staleness",
  "id": "gap-6--t01-baseline-staleness",
  "level": 3
}, {
  "value": "Gap 7 – Legacy <code>confidentia</code> KB Examples",
  "id": "gap-7--legacy-confidentia-kb-examples",
  "level": 3
}, {
  "value": "Gap 8 – Co-located Tests Outside <code>pytest.ini</code> Testpaths",
  "id": "gap-8--co-located-tests-outside-pytestini-testpaths",
  "level": 3
}, {
  "value": "Gap 9 – <code>validate_release_readiness.py</code> Layout Inconsistency",
  "id": "gap-9--validate_release_readinesspy-layout-inconsistency",
  "level": 3
}, {
  "value": "Gap 10 – Registry <code>common_components</code> Directories Absent",
  "id": "gap-10--registry-common_components-directories-absent",
  "level": 3
}, {
  "value": "Gap 11 – README Kanban Step 4 vs Step 7 Drift",
  "id": "gap-11--readme-kanban-step-4-vs-step-7-drift",
  "level": 3
}, {
  "value": "Gap 12 – README vwmp Path Alias Drift",
  "id": "gap-12--readme-vwmp-path-alias-drift",
  "level": 3
}, {
  "value": "Gap 13 – Empty <code>scripts/install/</code> Directory",
  "id": "gap-13--empty-scriptsinstall-directory",
  "level": 3
}, {
  "value": "Gap 14 – Packaging Script Audit Needed",
  "id": "gap-14--packaging-script-audit-needed",
  "level": 3
}, {
  "value": "Gap 15 – CMW and Journal Test Coverage Gaps",
  "id": "gap-15--cmw-and-journal-test-coverage-gaps",
  "level": 3
}, {
  "value": "Gap 16 – Intake Step Model vs T01 Baseline",
  "id": "gap-16--intake-step-model-vs-t01-baseline",
  "level": 3
}, {
  "value": "Summary of Direct Workflow Management Package Gaps",
  "id": "summary-of-direct-workflow-management-package-gaps",
  "level": 3
}, {
  "value": "Risk Assessment",
  "id": "risk-assessment",
  "level": 2
}, {
  "value": "Overall RC Risk Posture (Workflow Management Package)",
  "id": "overall-rc-risk-posture-workflow-management-package",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "t05--create-gap-log-and-risk-assessment",
        children: "T05 – Create Gap Log and Risk Assessment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E02:S13", ":T05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (v0.2.13.5+1 — gap log and risk assessment complete)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.13.5+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E02S13T05"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "specification-and-validation",
      children: "Specification and Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This deliverable conforms to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap Log and Risk Assessment Schema"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spec:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/gap-log-schema",
          children: "docs/architecture/standards-and-adrs/gap-log-schema.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_gap_log.py --path <this-file> --strict"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPP:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment",
          children: "IPP-E02S13T05-gap-log-risk-assessment.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consolidate all findings from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T01–T04"
      }), " and ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
          children: ["E07:S07", ":T01"]
        }), " §5–§7"]
      }), " into a single ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "gap log and risk assessment"
      }), " for the Workflow Management framework package (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enumerating structural, behavioral, integration, documentation, test, and operational gaps discovered during the implementation review."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Classifying each gap by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "severity"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "likelihood"
        }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RC impact"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Distinguishing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management package implementation gaps"
        }), " from any external/adopter-environment issues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Documenting overall ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "conditional RC posture"
        }), " for T06 sign-off criteria."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Out of scope:"
      }), " Remediation implementation; RC sign-off checklist (T06); package code or README fixes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
          children: "T01 – Expectations baseline"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
          children: "T02 – Component inventory map"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
          children: "T03 – Behavioral validation report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report",
          children: "T04 – Integration alignment report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
          children: ["E07:S07", ":T01", " – Workflow machinery code review report §5–§7"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
          children: "FR-050 – Workflows directory reorganization"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment",
          children: "IPP-E02S13T05"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "gap log and risk assessment"
      }), " (this document) listing all identified gaps with required schema fields and an overall RC risk posture summary."]
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
        }), " ", "All relevant findings from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T01–T04"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "E07"
        }), " distilled into a single gap log"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Each gap classified with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "severity"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "likelihood"
        }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RC impact"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Package vs external gaps explicitly separated in Summary section"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Overall RC risk posture documented (conditional pass; no BLOCKER gaps)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_gap_log.py --strict"
        }), " passes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP bidirectionally linked"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Forensic release via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E02:S13:T05 --art"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "approach",
      children: "Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synthesize inputs"
        }), " from T01–T04 companion reports and E07 severity backlog."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deduplicate"
        }), " overlapping E07 H/M/L, T03 D*, T04 I*, and inventory rows into canonical gap IDs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classify"
        }), " each gap with severity, likelihood, RC impact, ownership, and tracking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Summarize"
        }), " direct package gaps and overall RC risk posture."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate"
        }), " against ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_gap_log.py --strict"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wire"
        }), " T06 input and story checklist; release via RW."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gap-log",
      children: "Gap Log"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-1--flat-workflow-yaml-duplicates-nested-sot",
      children: "Gap 1 – Flat Workflow YAML Duplicates Nested SoT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-STRUCT-001"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Structural"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Six non-deprecated flat workflow YAML files at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/*.yaml"
        }), " duplicate nested workflow SoT directories, creating adopter confusion about which file is authoritative. RW flat stub is deprecated; intake, UKW, CMW, and other flat copies remain active duplicates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 H2; T03 D10; T02 inventory summary; ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
          children: "FR-050"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " HIGH"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " HIGH (adopters may edit wrong YAML)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING (remediation scheduled; doc-aligned adopters use nested dirs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
          children: "FR-050"
        }), "; ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization",
          children: ["E02:S13", ":T09"]
        }), " (filed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-2--kanban-update-path-fragmentation",
      children: "Gap 2 – Kanban Update Path Fragmentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-INTG-001"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " RW Step 7 agent guidance, UKW Step 6, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " share overlapping row-transform logic (", (0,jsx_runtime.jsx)(_components.code, {
          children: "apply_canonical_row_transform_pipeline"
        }), " and related paths) with risk of divergent behavior across release and sync workflows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 H3; T03 D11; T04 I11; E07 §6 priority 3"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " HIGH"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " MEDIUM (drift on partial updates)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING (contracts align; cohesion remediation deferred)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
          children: ["E02:S13", ":T10"]
        }), " (filed); E07 E1/E5 consolidation proposals"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-3--ci-pytest-gate-mitigated",
      children: "Gap 3 – CI Pytest Gate (Mitigated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-CI-001"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Operational"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " E07 H1 originally flagged absence of CI pytest for the workflow script corpus. T03 D12 confirms ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/workflow-scripts-pytest.yml"
        }), " now runs isolated validation pytest. Residual risk: co-located tests outside root ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest.ini"
        }), " testpaths (see Gap 8)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 H1; T03 D12; ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/workflow-scripts-pytest.yml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package + repo CI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " LOW (mitigated by dedicated CI workflow)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " MITIGATED (CI workflow present; coverage expansion optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " E07:S07", ":T02", " optional; Gap 8 for residual test-path documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-4--duplicate-load_rw_config-implementations",
      children: ["Gap 4 – Duplicate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "load_rw_config"
      }), " Implementations"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-INTG-002"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " 22+ independent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "load_rw_config"
        }), " implementations across changelog, kanban, validation, and root scripts increase path-resolution bugs and adopter integration drift. No shared ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw_config_loader"
        }), " module exists."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 M1; T03 D9; T04 I10; E07 E1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " HIGH (reproducible duplication)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " E02:S13", ":T06", "; E07 E1 shared module proposal"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-5--readme-check_changelog_size-wrong-path",
      children: ["Gap 5 – README ", (0,jsx_runtime.jsx)(_components.code, {
        children: "check_changelog_size"
      }), " Wrong Path"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-DOC-001"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Behavioral / Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Package README lists ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/check_changelog_size.py"
        }), " which does not exist. Actual path is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/changelog/check_changelog_size.py"
        }), ". T01 baseline repeats the wrong path."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 M2; T03 D6; T02 inventory summary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " HIGH (adopters follow README)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " E07 E3; doc fix backlog → T06"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-6--t01-baseline-staleness",
      children: "Gap 6 – T01 Baseline Staleness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-DOC-002"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Process / Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " T01 expectations baseline lags live package: UKW listed as 8 steps (live: 9 + Step 2.5); validator count understated (4 in T01 vs 25+ in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validation/"
        }), "); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_registry.py"
        }), " superseded by task-touch tooling; perpetual-task ID examples stale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 M3; T03 D4/D13; T02 inventory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package (review artefacts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING (T02/T03/T04 supersede for RC evidence)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " E07 §6 priority 5; optional T01 refresh in T06"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-7--legacy-confidentia-kb-examples",
      children: ["Gap 7 – Legacy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "confidentia"
      }), " KB Examples"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-DOC-003"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " 15+ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "confidentia"
        }), " project references remain in vwmp KB guides and versioning-policy examples instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{project}"
        }), " / rw-config placeholders, reducing adopter UX clarity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 M4; T02 inventory; E07 E6"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " E07 E6 KB sweep; E05 or T06 doc backlog"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-8--co-located-tests-outside-pytestini-testpaths",
      children: ["Gap 8 – Co-located Tests Outside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pytest.ini"
      }), " Testpaths"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-TEST-001"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Operational"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " 36+ co-located ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/**/test_*.py"
        }), " modules are not in root ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest.ini"
        }), " testpaths. Isolated runner (", (0,jsx_runtime.jsx)(_components.code, {
          children: "run_isolated_pytest.sh"
        }), ") and CI workflow mitigate but adoption path is underdocumented."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 M5; T03 D12 context"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " E07 E4; document in T06 remediation list"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-9--validate_release_readinesspy-layout-inconsistency",
      children: ["Gap 9 – ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_release_readiness.py"
      }), " Layout Inconsistency"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-STRUCT-002"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Structural"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_release_readiness.py"
        }), " lives at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/"
        }), " root while peer validators sit under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/"
        }), ". Relationship to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_step7_*"
        }), " completeness checks is underdocumented (E07 E8)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 M6; T02 inventory; E07 E8"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " T06 optional; E07 E8 consolidation doc"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-10--registry-common_components-directories-absent",
      children: ["Gap 10 – Registry ", (0,jsx_runtime.jsx)(_components.code, {
        children: "common_components"
      }), " Directories Absent"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-STRUCT-003"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Structural"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-registry.yaml"
        }), " cites ", (0,jsx_runtime.jsx)(_components.code, {
          children: "common/templates/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "common/schemas/"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "common/utilities/"
        }), " but those directories are absent from the package tree, causing registry drift for adopters reading the registry as inventory SoT."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " T02 inventory; T04 I12"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " T06 registry/doc fix backlog"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-11--readme-kanban-step-4-vs-step-7-drift",
      children: "Gap 11 – README Kanban Step 4 vs Step 7 Drift"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-DOC-004"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Package README cites Kanban updates at RW ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), "; live agent spec and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " place scoped kanban reconciliation at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 7"
        }), " (FR-092). Adopters following README alone may mis-order RW operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " T04 I4; integration-alignment-report §Summary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " README fix backlog → T06"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-12--readme-vwmp-path-alias-drift",
      children: "Gap 12 – README vwmp Path Alias Drift"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-DOC-005"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " README references ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/documentation/Developer_Docs/vwmp/"
        }), " but actual package path is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KB/Documentation/Developer_Docs/vwmp/"
        }), ", breaking links for copy-only adopters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " T02 inventory summary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " README fix backlog → T06"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-13--empty-scriptsinstall-directory",
      children: ["Gap 13 – Empty ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/install/"
      }), " Directory"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-STRUCT-004"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Structural"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/install/"
        }), " exists with zero files — placeholder directory with no documented purpose or planned content."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 L1; T02 inventory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " INFORMATIONAL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " Remove or populate in T06 optional backlog"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-14--packaging-script-audit-needed",
      children: "Gap 14 – Packaging Script Audit Needed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-OPS-001"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Operational"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " Six root-level ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build_*"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "upload_*"
        }), " packaging scripts with overlapping names; unclear in README whether adopter-facing or maintainer-only (E07 E7)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 L2; E07 E7; T02 inventory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " INFORMATIONAL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " E07:S07", ":T04", " optional; T06 backlog"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-15--cmw-and-journal-test-coverage-gaps",
      children: "Gap 15 – CMW and Journal Test Coverage Gaps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-TEST-002"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Operational"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/changelog/"
        }), " has no co-located tests (CMW is deterministic); journal module (8 prod files) has zero co-located tests in isolated pytest config (E07 L3/L4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " E07 L3/L4"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " INFORMATIONAL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " Optional coverage tasks in T06"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gap-16--intake-step-model-vs-t01-baseline",
      children: "Gap 16 – Intake Step Model vs T01 Baseline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ID:"
        }), " GAP-WFMGT-DOC-006"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Category:"
        }), " Behavioral / Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Description:"
        }), " T01 lists 7-step intake model; nested intake YAML defines 8 steps (adds repository assignment as step 2). Script chain (", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake_*.py"
        }), ") is present and functional; discrepancy is documentation alignment only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source:"
        }), " T03 D8; T01 §Expected workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ownership:"
        }), " Workflow Management package"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Likelihood:"
        }), " MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RC Impact:"
        }), " NON-BLOCKING"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking:"
        }), " T01/README alignment → T06"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summary-of-direct-workflow-management-package-gaps",
      children: "Summary of Direct Workflow Management Package Gaps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["From ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T01–T04"
      }), " and ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S07", ":T01"]
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RC-blocking"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Critical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T01 (Expectations):"
      }), " Baseline is directionally correct but stale on UKW step count, validator inventory, and script paths (Gap 6)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T02 (Component inventory):"
      }), " All major components mapped; structural gaps include flat YAML (Gap 1), registry drift (Gap 10), empty install dir (Gap 13)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T03 (Behavioral validation):"
      }), " RW doc/live parity ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " post-T08; cohesion gaps H2/H3 and doc drift items consolidated above."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "T04 (Integration alignment):"
      }), " Soft-dependency contracts ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALIGNED"
      }), "; cohesion gaps M1/H3 and README drift consolidated above."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "E07 (Code review):"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "0 Critical, 3 High → 2 High + 1 mitigated (CI), 6 Medium, 4 Low"
      }), " after deduplication and H1 mitigation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Package vs external:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All 16 gaps are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Management package implementation or documentation gaps"
      }), ". No gaps are attributed to external frameworks (Kanban, Versioning) or adopter-only environment configuration. UKW/RW behavior issues cited in other epics are out of scope for this package RC review."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion:"
      }), " No ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "direct Workflow Management package gaps block RC sign-off"
      }), ". Two ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "High"
      }), " cohesion gaps (flat YAML, kanban path fragmentation) and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " documentation/cohesion backlog must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scheduled in T06"
      }), " remediation tasks. Aligns with E07 §7 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "conditional RC"
      }), " recommendation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "risk-assessment",
      children: "Risk Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overall-rc-risk-posture-workflow-management-package",
      children: "Overall RC Risk Posture (Workflow Management Package)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Structural Risk:"
          }), " MEDIUM"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Flat YAML duplication and registry ", (0,jsx_runtime.jsx)(_components.code, {
              children: "common_components"
            }), " drift increase adopter structural confusion; mitigated by nested SoT and T08 doc parity."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Behavioral Risk:"
          }), " LOW"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW gates, validators, and doc/live parity pass (T03). Remaining issues are cohesion and documentation drift, not broken Step 1/9 behavior."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Integration Risk:"
          }), " MEDIUM"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Soft-dependency contracts align (T04). Kanban path fragmentation (Gap 2) and config loader duplication (Gap 4) increase integration maintenance cost."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Operational Risk:"
          }), " LOW (mitigated)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CI pytest workflow addresses E07 H1; residual test-path documentation gap (Gap 8) is non-blocking."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "RC Impact Conclusion:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["There are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no RC-blocking gaps"
        }), " for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Management framework package"
        }), " implementation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conditional pass:"
        }), " RC may proceed for doc-aligned adopters when remediation backlog for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap 1"
        }), " (flat YAML / FR-050) and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap 2"
        }), " (kanban transform consolidation) is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "accepted and scheduled"
        }), " in ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks",
          children: ["E02:S13", ":T06"]
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All 16 gaps are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NON-BLOCKING"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "INFORMATIONAL"
        }), "; none require package code changes before RC sign-off criteria definition."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity rollup:"
      }), " 0 Critical · 2 High · 10 Medium · 4 Low"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["For this task (E02:S13", ":T05", "):"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          className: "contains-task-list",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "Run ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_gap_log.py --strict"
            }), " and fix any schema violations"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "Wire IPP and story checklist; mark AC satisfied"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "Release via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S13:T05 --art"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["For follow-on (E02:S13", ":T06", "):"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          className: "contains-task-list",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "Define RC sign-off criteria from this gap log → ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks",
              children: "T06"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "File remediation tasks for Gap 1 → ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T09-fr050-workflows-directory-reorganization",
              children: "T09"
            }), " + ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
              children: "FR-050"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "File remediation task for Gap 2 → ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation",
              children: "T10"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "Schedule doc-fix backlog (Gaps 5, 7, 11, 12, 16) → T06 remediation R4"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Gap 4 (shared config loader) → T06 remediation R3 (proposed host)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline",
          children: "T01 expectations baseline"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map",
          children: "T02 component inventory"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report",
          children: "T03 behavior validation report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report",
          children: "T04 integration alignment report"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report",
          children: ["E07:S07", ":T01", " code review report"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks",
          children: "T06 RC sign-off task"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment",
          children: "IPP-E02S13T05"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/gap-log-schema",
          children: "gap-log-schema.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
          children: "FR-050"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-107-comprehensive-workflow-machinery-code-review",
          children: "FR-107"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-anchor",
      children: "Version Anchor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forensic Marker Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "✅ COMPLETE (vRC.E.S.T+B)"
      })]
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