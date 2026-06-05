"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["84705"], {
82679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_16_kanban_package_implementation_review_t_03_validate_kanban_behavior_md_800_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-16-kanban-package-implementation-review-t-03-validate-kanban-behavior-md-800.json
var site_docs_project_management_kanban_epics_epic_04_story_16_kanban_package_implementation_review_t_03_validate_kanban_behavior_md_800_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior","title":"T03 – Validate Kanban Behavior Against Documented Guidance","description":"Task IDS16:T03","source":"@site/../docs/project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior.md","sourceDirName":"project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review","slug":"/project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-19T17:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 4, Story 16, Task 2: Inventory package components and map to expectations","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T02-inventory-package-components-and-map-to-expectations"},"next":{"title":"T04 – Review Integrations and Dependency Alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T04-review-integrations-and-dependency-alignment"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-19T17:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'T03 – Validate Kanban Behavior Against Documented Guidance';

const assets = {

};



const toc = [{
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
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}, {
  "value": "Validation Report",
  "id": "validation-report",
  "level": 2
}, {
  "value": "1. Governance Rules Validation",
  "id": "1-governance-rules-validation",
  "level": 3
}, {
  "value": "KG-R1: All substantive work MUST be task-driven ✅ <strong>COMPLIANT</strong>",
  "id": "kg-r1-all-substantive-work-must-be-task-driven--compliant",
  "level": 4
}, {
  "value": "KG-R2: Every FR/BR MUST result in at least one Kanban Task ✅ <strong>COMPLIANT</strong>",
  "id": "kg-r2-every-frbr-must-result-in-at-least-one-kanban-task--compliant",
  "level": 4
}, {
  "value": "KG-R3: Tasks must live under Stories, Stories under Epics ✅ <strong>COMPLIANT</strong>",
  "id": "kg-r3-tasks-must-live-under-stories-stories-under-epics--compliant",
  "level": 4
}, {
  "value": "KG-R4: FR/BR → Task → Story → Epic flow ✅ <strong>COMPLIANT</strong>",
  "id": "kg-r4-frbr--task--story--epic-flow--compliant",
  "level": 4
}, {
  "value": "KG-R5: Version numbers align with Kanban structure ✅ <strong>COMPLIANT</strong>",
  "id": "kg-r5-version-numbers-align-with-kanban-structure--compliant",
  "level": 4
}, {
  "value": "2. Document Structure Validation",
  "id": "2-document-structure-validation",
  "level": 3
}, {
  "value": "3-Tier Structure (Epic → Story → Task) ✅ <strong>COMPLIANT</strong>",
  "id": "3-tier-structure-epic--story--task--compliant",
  "level": 4
}, {
  "value": "Discrete Task Documents ✅ <strong>COMPLIANT</strong>",
  "id": "discrete-task-documents--compliant",
  "level": 4
}, {
  "value": "3. Version Alignment Validation",
  "id": "3-version-alignment-validation",
  "level": 3
}, {
  "value": "Version Markers in Story Checklists ✅ <strong>COMPLIANT</strong>",
  "id": "version-markers-in-story-checklists--compliant",
  "level": 4
}, {
  "value": "RW Integration Updates Kanban Docs ✅ <strong>COMPLIANT</strong>",
  "id": "rw-integration-updates-kanban-docs--compliant",
  "level": 4
}, {
  "value": "4. FR/BR Intake Flow Validation",
  "id": "4-frbr-intake-flow-validation",
  "level": 3
}, {
  "value": "FR/BR → Task Mapping ✅ <strong>COMPLIANT</strong>",
  "id": "frbr--task-mapping--compliant",
  "level": 4
}, {
  "value": "Repository Story Pattern (S01) ✅ <strong>COMPLIANT</strong>",
  "id": "repository-story-pattern-s01--compliant",
  "level": 4
}, {
  "value": "5. Board Structure Validation",
  "id": "5-board-structure-validation",
  "level": 3
}, {
  "value": "MoSCOW Prioritized Task View ✅ <strong>COMPLIANT</strong>",
  "id": "moscow-prioritized-task-view--compliant",
  "level": 4
}, {
  "value": "Story Checklist Format ✅ <strong>COMPLIANT</strong>",
  "id": "story-checklist-format--compliant",
  "level": 4
}, {
  "value": "Board → Story → Task Hierarchy ✅ <strong>COMPLIANT</strong>",
  "id": "board--story--task-hierarchy--compliant",
  "level": 4
}, {
  "value": "6. Integration Validation",
  "id": "6-integration-validation",
  "level": 3
}, {
  "value": "Versioning Integration Points ✅ <strong>COMPLIANT</strong>",
  "id": "versioning-integration-points--compliant",
  "level": 4
}, {
  "value": "Workflow Management Integration Points ✅ <strong>COMPLIANT</strong>",
  "id": "workflow-management-integration-points--compliant",
  "level": 4
}, {
  "value": "Standalone Capability ✅ <strong>COMPLIANT</strong>",
  "id": "standalone-capability--compliant",
  "level": 4
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Overall Compliance: ✅ <strong>FULLY COMPLIANT</strong>",
  "id": "overall-compliance--fully-compliant",
  "level": 3
}, {
  "value": "Discrepancies Identified: <strong>NONE</strong>",
  "id": "discrepancies-identified-none",
  "level": 3
}, {
  "value": "Gaps Identified: <strong>NONE</strong>",
  "id": "gaps-identified-none",
  "level": 3
}, {
  "value": "RC Readiness Assessment",
  "id": "rc-readiness-assessment",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "t03--validate-kanban-behavior-against-documented-guidance",
        children: "T03 – Validate Kanban Behavior Against Documented Guidance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E04:S16", ":T03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Medium", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-01-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-01-19 (v0.4.16.3+1 – Validation complete: All 17 validation points fully compliant)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.16.3+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E04S16T03"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validate that the Kanban framework package's actual behavior matches the documented guidance in governance policies, README, and integration guides. Identify any discrepancies, gaps, or violations of documented rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Governance Policy:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Package README:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/README.md"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integration Guides:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/integration/numbering-versioning-integration.md"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/integration/workflow-management-integration.md"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Templates:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/kanban/templates/"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Actual Implementation:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/project-management/kanban/"
          }), " (dev-kit's Kanban implementation)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Expectations Baseline:"
          }), " From E04:S16", ":T01"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Behavior validation report documenting:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation of governance rules (KG-R1 through KG-R5+)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document structure compliance (3-tier structure, discrete task docs)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version alignment validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR/BR intake flow validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board structure and MoSCOW prioritization validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration point validation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discrepancies and gaps identified"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compliance assessment"
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
        }), " ", "All governance rules (KG-R1 through KG-R5+) validated against actual behavior ✅ COMPLETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Document structure requirements validated (3-tier, discrete task docs) ✅ COMPLETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Version alignment requirements validated ✅ COMPLETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR/BR intake flow validated ✅ COMPLETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Board structure and MoSCOW prioritization validated ✅ COMPLETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Integration points validated ✅ COMPLETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Discrepancies documented with severity levels ✅ COMPLETE (No discrepancies found)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Compliance gaps identified and categorized ✅ COMPLETE (No gaps found)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "approach",
      children: "Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Governance Rules Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate KG-R1: All substantive work is task-driven"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate KG-R2: Every FR/BR results in at least one task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate KG-R3: Tasks live under Stories, Stories under Epics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate KG-R4: FR/BR → Task → Story → Epic flow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate KG-R5: Version numbers align with Kanban structure"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Document Structure Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify 3-tier structure (Epic → Story → Task) is mandatory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify discrete task docs requirement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify template compliance"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Version Alignment Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify version markers in Story Checklists"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify version alignment with Kanban structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify RW integration updates Kanban docs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "FR/BR Intake Flow Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify FR/BR → Task mapping"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify repository story pattern (S01)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify task creation workflow"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Board Structure Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify MoSCOW prioritized task view"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify Story Checklist format"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify board → Story → Task hierarchy"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integration Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify versioning integration points"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify workflow management integration points"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify standalone capability"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Depends On:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E04:S16", ":T01", " (Expectations baseline) ✅ COMPLETE"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E04:S16", ":T02", " (Component inventory) ✅ COMPLETE"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E04:S16", ":T04", " (Integration review)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E04:S16", ":T05", " (Gap log creation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parallel Development Candidacy:"
      }), " Safe (validation work, read-only analysis)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This validation compares documented guidance against actual implementation behavior in the dev-kit's Kanban system. Focus on identifying discrepancies and gaps that could impact RC readiness."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation-report",
      children: "Validation Report"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-01-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validator:"
      }), " AI Agent (Auto)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Comprehensive validation of Kanban framework behavior against documented guidance"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-governance-rules-validation",
      children: "1. Governance Rules Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "kg-r1-all-substantive-work-must-be-task-driven--compliant",
      children: ["KG-R1: All substantive work MUST be task-driven ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ All recent work (E04:S16", ":T01", ", T02, T03) has corresponding task documents"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ BR-035 → T35 mapping exists (bidirectional wiring verified)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story documents contain task checklists with version markers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No substantive work found without task mapping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task documents exist for all completed work in Story 016"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version markers present: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.16.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.16.2+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.16.3+0"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story checklist shows task completion with version anchors"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "kg-r2-every-frbr-must-result-in-at-least-one-kanban-task--compliant",
      children: ["KG-R2: Every FR/BR MUST result in at least one Kanban Task ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ BR-035 has corresponding task E06:S01", ":T35"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Bidirectional wiring verified: BR links to task, task links to BR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Repository story pattern (S01) correctly implemented for FR/BR repos"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "BR-035-rw-housekeeping-step-not-working.md"
          }), " contains:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban Links section with task reference"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status: FIXED"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "T35-rw-housekeeping-step-not-working.md"
          }), " contains:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input section referencing BR-035"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related section with BR link"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "kg-r3-tasks-must-live-under-stories-stories-under-epics--compliant",
      children: ["KG-R3: Tasks must live under Stories, Stories under Epics ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ All tasks found under Story documents (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-16-kanban-package-implementation-review/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ All stories found under Epic directories (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-04/"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Directory structure enforces hierarchy: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-X/Story-XXX/Task-XXX.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task T03 location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-04/story-16-kanban-package-implementation-review.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic location: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-04/epic-04.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "kg-r4-frbr--task--story--epic-flow--compliant",
      children: ["KG-R4: FR/BR → Task → Story → Epic flow ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ BR-035 → E06:S01", ":T35", " → story-01-br-repo → epic-06 flow verified"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Repository story pattern (S01) correctly used for BR repository"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task creation workflow follows documented decision flow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-035 → T35: Direct mapping exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T35 → Story: Task document references parent story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story → Epic: Story document references Epic 6"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Repository pattern: E6", ":S01", " (BR Repo) correctly identified as perpetual repository story"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "kg-r5-version-numbers-align-with-kanban-structure--compliant",
      children: ["KG-R5: Version numbers align with Kanban structure ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version markers present in Story Checklists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.16.1+1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.16.2+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version format matches ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " schema"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version components align with Epic/Story/Task numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 016 version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.16.2+1"
        }), " (RC=0, Epic=4, Story=16, Task=2, Build=1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task T01 version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.16.1+1"
        }), " (matches Story 16, Task 1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task T02 version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.16.2+1"
        }), " (matches Story 16, Task 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version markers in Story Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.4.16.1+1)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-document-structure-validation",
      children: "2. Document Structure Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "3-tier-structure-epic--story--task--compliant",
      children: ["3-Tier Structure (Epic → Story → Task) ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All documents follow 3-tier hierarchy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Directory structure enforces hierarchy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No tasks found outside Story directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No stories found outside Epic directories"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-04/epic-04.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 16: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-04/story-16-kanban-package-implementation-review.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task T03: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-04/story-16-kanban-package-implementation-review/T03-validate-kanban-behavior.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "discrete-task-documents--compliant",
      children: ["Discrete Task Documents ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All tasks have separate document files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task documents follow template structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task documents contain required fields (Scope, Input, Deliverable, Acceptance Criteria)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task T03 has dedicated file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T03-validate-kanban-behavior.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task document contains all required sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task document follows template format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-version-alignment-validation",
      children: "3. Version Alignment Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "version-markers-in-story-checklists--compliant",
      children: ["Version Markers in Story Checklists ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story Checklist contains version markers for completed tasks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (vRC.E.S.T+B)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version markers match task document versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story 016 Checklist: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.4.16.1+1)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.4.16.2+1)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version format consistent across all stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Markers appear in chronological order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "rw-integration-updates-kanban-docs--compliant",
      children: ["RW Integration Updates Kanban Docs ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ RW Step 7 (Auto-update Kanban Docs) configured in workflow YAML"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " script exists and is referenced"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Integration point documented in governance policy (KG-IP2)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        }), " Step 7: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban_update"
        }), " handler configured"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Script path: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration documented: \"auto-update story/epic docs with version markers and task status\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-frbr-intake-flow-validation",
      children: "4. FR/BR Intake Flow Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "frbr--task-mapping--compliant",
      children: ["FR/BR → Task Mapping ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ BR-035 correctly mapped to E06:S01", ":T35"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Bidirectional wiring implemented (BR → Task, Task → BR)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Intake workflow exists (E4", ":S02", ") and is COMPLETE"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-035 contains Kanban Links section with task reference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task T35 contains Input section with BR reference"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Intake workflow story (E4", ":S02", ") marked COMPLETE"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "repository-story-pattern-s01--compliant",
      children: ["Repository Story Pattern (S01) ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Repository stories correctly use S01 pattern (not S00)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ E5", ":S01", " (FR Repo), E6", ":S01", " (BR Repo), E7", ":S01", " (UXR Repo) identified"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Repository stories marked as PERPETUAL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ S00 is Epic-level abstract space only (no tasks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 5: Story 1 (FR Repo) - S01 pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 6: Story 1 (BR Repo) - S01 pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Governance policy documents S01 as repository story pattern"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["S00 migration to S01 completed (E09:S01", ":T08", ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-board-structure-validation",
      children: "5. Board Structure Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "moscow-prioritized-task-view--compliant",
      children: ["MoSCOW Prioritized Task View ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Board contains MoSCOW sections (M/S/C/O/W)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Tasks organized by priority"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task entries include required fields (Task ID, description, links)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Perpetual tasks correctly placed in \"Ongoing (O)\" section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board sections: Must Have (M), Should Have (S), Could Have (C), Ongoing (O), Won't Have (W)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task T03 appears in \"Should Have (S)\" section"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perpetual tasks (T101, T102) in \"Ongoing (O)\" section"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**E04:S16:T03** – Validate Kanban behavior..."
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "story-checklist-format--compliant",
      children: ["Story Checklist Format ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story Checklist present in board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Format: One line per story with status indicator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version markers included for completed stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Links to story documents present"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board contains \"Epics\" section with Story Checklists"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "- [x] **E4:S16 – Kanban Package Implementation Review** - IN PROGRESS (v0.4.16.2+1)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version markers: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.4.16.1+1)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story links: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[story-16-kanban-package-implementation-review.md](...)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "board--story--task-hierarchy--compliant",
      children: ["Board → Story → Task Hierarchy ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Board links to Story documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story documents link to Task documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hierarchy clearly established in board structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board contains links to all Story documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story documents contain Task Checklists with links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task documents reference parent Story"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-integration-validation",
      children: "6. Integration Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "versioning-integration-points--compliant",
      children: ["Versioning Integration Points ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Integration guide exists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "integration/numbering-versioning-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version markers use versioning schema format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story Checklist serves as version SoT"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guide documented in package"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vRC.E.S.T+B"
        }), " matches versioning schema"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story Checklist contains version markers as forensic traceability"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "workflow-management-integration-points--compliant",
      children: ["Workflow Management Integration Points ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Integration guide exists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "integration/workflow-management-integration.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ RW Step 7 configured for Kanban updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ UKW workflow exists and is documented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guide documented in package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW workflow YAML includes Kanban update step"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UKW workflow YAML exists and is configured"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "standalone-capability--compliant",
      children: ["Standalone Capability ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ README states package can run standalone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Hard dependencies: Git, Markdown only"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Soft dependencies: Versioning, Workflow Management (optional)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README: \"This package can be used completely independently\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Independence score: 9/10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hard dependencies: Git, Markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Soft dependencies: Numbering & Versioning, Workflow Management"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Compliance:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "overall-compliance--fully-compliant",
      children: ["Overall Compliance: ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Governance Rules:"
        }), " 5/5 rules fully compliant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Structure:"
        }), " 2/2 requirements fully compliant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Alignment:"
        }), " 2/2 requirements fully compliant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR/BR Intake Flow:"
        }), " 2/2 requirements fully compliant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board Structure:"
        }), " 3/3 requirements fully compliant"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Points:"
        }), " 3/3 requirements fully compliant"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total:"
      }), " 17/17 validation points ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FULLY COMPLIANT"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "discrepancies-identified-none",
      children: ["Discrepancies Identified: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NONE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No discrepancies, gaps, or violations found. The Kanban framework package's actual behavior matches documented guidance across all validated areas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gaps-identified-none",
      children: ["Gaps Identified: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NONE"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No compliance gaps identified. All documented requirements are met in actual implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rc-readiness-assessment",
      children: "RC Readiness Assessment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "READY FOR RC SIGN-OFF"
      }), " (pending completion of remaining review tasks)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Kanban framework package demonstrates full compliance with documented guidance. No remediation tasks required for behavioral validation."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T03 Complete:"
        }), " Behavioral validation complete"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T04 Next:"
        }), " Review integrations and dependency alignment (may identify integration-specific gaps)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T05 Next:"
        }), " Create gap log and risk assessment (consolidate findings from T01-T04)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T06 Next:"
        }), " Define RC sign-off criteria and remediation tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Completed:"
      }), " 2026-01-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validator:"
      }), " AI Agent (Auto)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE"]
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