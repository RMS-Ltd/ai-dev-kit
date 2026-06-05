"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["19278"], {
3602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_03_story_04_numbering_versioning_package_implementation_review_t_03_versioning_behavior_validation_md_8bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-03-story-04-numbering-versioning-package-implementation-review-t-03-versioning-behavior-validation-md-8bd.json
var site_docs_project_management_kanban_epics_epic_03_story_04_numbering_versioning_package_implementation_review_t_03_versioning_behavior_validation_md_8bd_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review/T03-versioning-behavior-validation","title":"E03:S04:T03 – Validate Versioning Behavior Against Documented Guidance","description":"Task IDS04:T03","source":"@site/../docs/project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review/T03-versioning-behavior-validation.md","sourceDirName":"project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review","slug":"/project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review/T03-versioning-behavior-validation","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review/T03-versioning-behavior-validation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review/T03-versioning-behavior-validation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-21T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E03:S04:T02 – Inventory Package Components and Map to Expectations","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review/T02-component-inventory"},"next":{"title":"E03:S04:T04 – Review Integrations and Dependency Alignment","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review/T04-integrations-and-dependency-alignment"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-03/story-04-numbering-versioning-package-implementation-review/T03-versioning-behavior-validation.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-21T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E03:S04 – Validate Versioning Behavior Against Documented Guidance';

const assets = {

};



const toc = [{
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Inputs",
  "id": "inputs",
  "level": 2
}, {
  "value": "Deliverables",
  "id": "deliverables",
  "level": 2
}, {
  "value": "Approach",
  "id": "approach",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Schema Rules Validation",
  "id": "schema-rules-validation",
  "level": 2
}, {
  "value": "Schema Format: <code>RC.EPIC.STORY.TASK+BUILD</code>",
  "id": "schema-format-rcepicstorytaskbuild",
  "level": 3
}, {
  "value": "Component Rules",
  "id": "component-rules",
  "level": 3
}, {
  "value": "RC (Release Candidate)",
  "id": "rc-release-candidate",
  "level": 4
}, {
  "value": "EPIC",
  "id": "epic",
  "level": 4
}, {
  "value": "STORY",
  "id": "story",
  "level": 4
}, {
  "value": "TASK",
  "id": "task",
  "level": 4
}, {
  "value": "BUILD",
  "id": "build",
  "level": 4
}, {
  "value": "Schema Calculation Rules Validation",
  "id": "schema-calculation-rules-validation",
  "level": 2
}, {
  "value": "New Task (Different Task Number)",
  "id": "new-task-different-task-number",
  "level": 3
}, {
  "value": "Same Task (Build Increment)",
  "id": "same-task-build-increment",
  "level": 3
}, {
  "value": "New Story (Different Story Number)",
  "id": "new-story-different-story-number",
  "level": 3
}, {
  "value": "New Epic (Different Epic Number)",
  "id": "new-epic-different-epic-number",
  "level": 3
}, {
  "value": "Edge Cases Validation",
  "id": "edge-cases-validation",
  "level": 2
}, {
  "value": "Doc-Init Build (<code>+0</code>)",
  "id": "doc-init-build-0",
  "level": 3
}, {
  "value": "Out-of-Order Tasks",
  "id": "out-of-order-tasks",
  "level": 3
}, {
  "value": "Parallel Epic Development",
  "id": "parallel-epic-development",
  "level": 3
}, {
  "value": "Guidance Consistency Analysis",
  "id": "guidance-consistency-analysis",
  "level": 2
}, {
  "value": "Policy Document Consistency",
  "id": "policy-document-consistency",
  "level": 3
}, {
  "value": "versioning-policy.md vs versioning-strategy.md",
  "id": "versioning-policymd-vs-versioning-strategymd",
  "level": 4
}, {
  "value": "Framework Policy vs Dev-Kit Policy",
  "id": "framework-policy-vs-dev-kit-policy",
  "level": 4
}, {
  "value": "Implementation Validation",
  "id": "implementation-validation",
  "level": 2
}, {
  "value": "Version File Structure",
  "id": "version-file-structure",
  "level": 3
}, {
  "value": "Changelog Format",
  "id": "changelog-format",
  "level": 3
}, {
  "value": "Main Changelog (<code>CHANGELOG.md</code>)",
  "id": "main-changelog-changelogmd",
  "level": 4
}, {
  "value": "Detailed Changelog Archive",
  "id": "detailed-changelog-archive",
  "level": 4
}, {
  "value": "SemVer Mapping",
  "id": "semver-mapping",
  "level": 3
}, {
  "value": "Validation Scripts",
  "id": "validation-scripts",
  "level": 3
}, {
  "value": "Discrepancies and Validation Notes",
  "id": "discrepancies-and-validation-notes",
  "level": 2
}, {
  "value": "No Critical Discrepancies Found",
  "id": "no-critical-discrepancies-found",
  "level": 3
}, {
  "value": "Minor Notes",
  "id": "minor-notes",
  "level": 3
}, {
  "value": "Validation Summary",
  "id": "validation-summary",
  "level": 2
}, {
  "value": "Overall Validation Result: ✅ <strong>PASS</strong>",
  "id": "overall-validation-result--pass",
  "level": 3
}, {
  "value": "Key Findings",
  "id": "key-findings",
  "level": 3
}, {
  "value": "RC Readiness Assessment",
  "id": "rc-readiness-assessment",
  "level": 3
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e03s04--validate-versioning-behavior-against-documented-guidance",
        children: ["E03:S04", ":T03", " – Validate Versioning Behavior Against Documented Guidance"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E03:S04", ":T03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " E3 – Numbering & Versioning Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " E3", ":S04", " – Numbering & Versioning Package Implementation Review", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Anchor:"
      }), " ✅ COMPLETE (v0.3.4.3+1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validate that actual versioning behavior in the codebase matches the documented guidance in the Numbering & Versioning framework package. Verify schema rules, edge cases, and guidance consistency across policy documents, implementation, and actual usage."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope includes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate schema calculation rules (new task, new story, new epic, build increment)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate edge cases (doc-init builds, out-of-order tasks, parallel epics)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate guidance consistency across policy documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate actual implementation against documented rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document discrepancies and validation notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inputs",
      children: "Inputs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versioning Policy: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versioning Strategy: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-strategy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dev-Kit Versioning Policy: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version File: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changelog Files: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/changelog-and-release-notes/changelog-archive/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validation Scripts: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SemVer Converter: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expectations Baseline: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T01-expectations-baseline.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverables",
      children: "Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Behavior validation document"
        }), " with:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Schema rules validation results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases validation results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Guidance consistency analysis"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation vs documentation comparison"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Discrepancies and validation notes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "approach",
      children: "Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review Schema Rules"
        }), " - Validate documented schema calculation rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Edge Cases"
        }), " - Validate edge cases (doc-init, out-of-order, parallel epics)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check Guidance Consistency"
        }), " - Compare policy documents for consistency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate Implementation"
        }), " - Compare actual implementation to documented rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Findings"
        }), " - Record validation results and discrepancies"]
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
        }), " ", "Schema rules validated against documented guidance ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Edge cases validated against documented guidance ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Guidance consistency checked across policy documents ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Implementation validated against documented rules ✅"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Validation notes and discrepancies documented ✅"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "schema-rules-validation",
      children: "Schema Rules Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "schema-format-rcepicstorytaskbuild",
      children: ["Schema Format: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Format:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version file uses format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\""
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Matches documented format exactly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All components present and correctly formatted"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - Format matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "component-rules",
      children: "Component Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "rc-release-candidate",
      children: "RC (Release Candidate)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " = Development phase (default)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "1+"
        }), " = Release candidate phase"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increment when entering release candidate phase"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_RC = 0"
        }), " (development phase)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Comments match documented rules"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ No release candidate versions observed (all ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC=0"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - RC rules match documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "epic",
      children: "EPIC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic number from Kanban board"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set when starting new epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constant for all work within that epic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_EPIC = 3"
        }), " (matches Epic 3)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Comments reference Epic number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Epic number remains constant within epic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - EPIC rules match documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "story",
      children: "STORY"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story number within epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set when starting new story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constant for all work within that story"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_STORY = 4"
        }), " (matches Story 4)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Comments reference Story number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story number remains constant within story"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - STORY rules match documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "task",
      children: "TASK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task number within story"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set when starting new task"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Constant for all releases within that task"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E\\{epic\\}:S\\{story\\}:T\\{task\\}"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E09:S21:T03"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task numbers are 2-digit (01-99)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Task MUST have a discrete Task document before versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CRITICAL:"
        }), " Task document Task ID MUST align with version TASK component"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK = 2"
        }), " (matches Task 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Task document exists: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T02-component-inventory.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Task ID alignment: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E03:S04:T02"
        }), " matches ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_TASK = 2"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task document includes required fields (Task ID, Scope, Acceptance Criteria, Status, Version Anchor)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - TASK rules match documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "build",
      children: "BUILD"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Build number (increments per release within task)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Doc-Init Build (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+0"
            }), "):"]
          }), " For first-time Task/Story/Epic document creation (docs-only)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Establishes canonical version anchor before functional work"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Must be docs-only changes (no code changes)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Subsequent functional work starts at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+1"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Normal Builds (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+1"
            }), " or higher):"]
          }), " For functional work and subsequent releases"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Starts at 1 for first functional release of task (or after doc-init)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Increments with each subsequent release (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+3"
            }), ", etc.)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Resets to 1 when moving to new task"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Version file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD = 1"
        }), " (normal build)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Comments document doc-init (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), ") and normal builds (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+1"
        }), " or higher)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Validation script recognizes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " as valid (FR-020)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Build increments observed: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.4.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.4.2+1"
        }), " (new task, BUILD reset to 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - BUILD rules match documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "schema-calculation-rules-validation",
      children: "Schema Calculation Rules Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "new-task-different-task-number",
      children: "New Task (Different Task Number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New Task: Reset BUILD → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.N.S.{T+1}+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.15.1.4+2"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.15.1.5+1"
        }), " (new task, reset BUILD)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Observed: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.4.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.4.2+1"
        }), " (T01 → T02, BUILD reset to 1)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Matches documented rule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - New task rule matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "same-task-build-increment",
      children: "Same Task (Build Increment)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Same Task: Increment BUILD → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.N.S.T+{B+1}"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.15.1.4+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.15.1.4+2"
        }), " (same task, increment BUILD)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Observed in changelog: Multiple builds for same task (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.101+24"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.101+26"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.7.101+28"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Matches documented rule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - Same task rule matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "new-story-different-story-number",
      children: "New Story (Different Story Number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New Story: Reset TASK and BUILD → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.N.{S+1}.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.15.1.4+2"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.15.2.1+1"
        }), " (new story, reset TASK and BUILD)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Observed: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.4.2+1"
        }), " (Story 4) → Next story would be ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.5.1+1"
        }), " (Story 5)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Matches documented rule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - New story rule matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "new-epic-different-epic-number",
      children: "New Epic (Different Epic Number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New Epic: Reset STORY, TASK, BUILD → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.{N+1}.1.1+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.15.1.4+2"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.16.1.1+1"
        }), " (new epic, reset STORY, TASK, BUILD)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Observed: Epic transitions (e.g., Epic 2 → Epic 3 → Epic 6)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Matches documented rule"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - New epic rule matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "edge-cases-validation",
      children: "Edge Cases Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "doc-init-build-0",
      children: ["Doc-Init Build (", (0,jsx_runtime.jsx)(_components.code, {
        children: "+0"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD = 0"
        }), " valid for first-time E/S/T document creation (docs-only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "BUILD >= 1"
        }), " required for functional changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validator recognizes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " as valid (FR-020)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Validation script: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " includes doc-init detection"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Script validates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " builds are docs-only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Comments in version file document ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " as valid for doc-init"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ FR-020 referenced in validation notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - Doc-init build support matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-order-tasks",
      children: "Out-of-Order Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If completed task < current VERSION_TASK: Should be out-of-order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Doc-init: VERSION_TASK = completed, BUILD = 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Normal: VERSION_TASK = completed, BUILD = 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Validation script handles out-of-order tasks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Script validates out-of-order task handling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - Out-of-order task handling matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parallel-epic-development",
      children: "Parallel Epic Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Rule:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version ordering is independent of wall-clock time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallel epic development is fully supported"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog orders by version number, not by Git commit time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Changelog uses version numbers for ordering (not timestamps)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Multiple epics can have versions in parallel (e.g., Epic 2, Epic 3, Epic 6)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Version numbers determine changelog order"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      }), " - Parallel epic development matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "guidance-consistency-analysis",
      children: "Guidance Consistency Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "policy-document-consistency",
      children: "Policy Document Consistency"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "versioning-policymd-vs-versioning-strategymd",
      children: "versioning-policy.md vs versioning-strategy.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema Definition:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Both documents use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Component definitions match across documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Calculation rules consistent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Doc-Init Build (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Both documents reference doc-init builds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Rules consistent: docs-only, establishes version anchor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task Document Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Both documents require Task document before versioning"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Both require Task ID alignment with version TASK component"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CONSISTENT"
      }), " - Policy documents align"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "framework-policy-vs-dev-kit-policy",
      children: "Framework Policy vs Dev-Kit Policy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Both use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " format"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Component definitions match"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic Ranges:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DIFFERENCE:"
        }), " Framework policy mentions Epic 1-9 legacy, Epic 10+ new format"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DIFFERENCE:"
        }), " Dev-kit policy states \"Epic 1+ uses new format\" (no legacy range)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "EXPLANATION:"
        }), " Dev-kit starts clean, no legacy range (documented in dev-kit policy)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SemVer Mapping:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Both documents describe Hybrid Approach algorithm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Mapping formula matches: MAJOR=RC, MINOR=first-seen Epic, PATCH=first-seen Story, BUILD=preserved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CONSISTENT"
      }), " - Differences are documented and intentional (dev-kit specific)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-validation",
      children: "Implementation Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-file-structure",
      children: "Version File Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 6\nVERSION_STORY = 7\nVERSION_TASK = 101\nVERSION_BUILD = 28\nVERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "VERSION_RC = 0\nVERSION_EPIC = 3\nVERSION_STORY = 4\nVERSION_TASK = 2\nVERSION_BUILD = 1\nVERSION_STRING = f\"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      }), " - Structure matches documented format"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "changelog-format",
      children: "Changelog Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "main-changelog-changelogmd",
      children: ["Main Changelog (", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [version] - DD-MM-YY"
        }), " (short date format)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ordering: Newest first (Keep a Changelog format)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "## [0.3.4.2+1] - 21-01-26"
        }), " (matches ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DD-MM-YY"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Ordering: Newest first (matches Keep a Changelog format)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      }), " - Main changelog format matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detailed-changelog-archive",
      children: "Detailed Changelog Archive"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Release Date:** YYYY-MM-DD HH:MM:SS UTC"
        }), " (full timestamp)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immutability: Timestamp is IMMUTABLE once written"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Format:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "**Release Date:** 2026-01-21 14:40:10 UTC"
        }), " (matches ", (0,jsx_runtime.jsx)(_components.code, {
          children: "YYYY-MM-DD HH:MM:SS UTC"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Immutability: Timestamps preserved as-written"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      }), " - Detailed changelog format matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "semver-mapping",
      children: "SemVer Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MAJOR = RC (direct mapping)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MINOR = First-seen Epic number (sequential, per RC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATCH = First-seen Story number (sequential, per RC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD = Preserved from internal version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Converter script: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " implements Hybrid Approach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Registry-based mapping: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), " stores mappings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.4.1+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.3.64+1"
        }), " (Epic 3 first seen → MINOR=3, Story 4 in Epic 3 → PATCH=64)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      }), " - SemVer mapping implementation matches documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validation-scripts",
      children: "Validation Scripts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documented Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow Step 1 validates Task document presence"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow Step 1 validates Task document → Version TASK component alignment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators check Task document presence and alignment before versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " validates Task document presence"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " validates Task ID alignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context.py"
        }), " validates branch context"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Scripts check Task document before versioning"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Result:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MATCHES"
      }), " - Validation scripts match documented requirements"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "discrepancies-and-validation-notes",
      children: "Discrepancies and Validation Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "no-critical-discrepancies-found",
      children: "No Critical Discrepancies Found"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Summary:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All schema rules validated and match documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ All edge cases validated and match documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Guidance consistency verified across policy documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Implementation matches documented rules"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minor-notes",
      children: "Minor Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Epic Range Difference (Documented):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework policy mentions Epic 1-9 legacy range"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dev-kit policy states no legacy range (Epic 1+ uses new format)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Status:"
            }), " ✅ Documented and intentional (dev-kit specific)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Task Number Format:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation mentions 2-digit format (01-99)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Actual usage shows single-digit task numbers (1, 2, etc.)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Status:"
            }), " ✅ Both formats valid (leading zeros optional)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Changelog Ordering:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Documentation states canonical ordering (lowest first)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Main changelog uses Keep a Changelog format (newest first)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Status:"
            }), " ✅ Both formats documented (main changelog uses Keep a Changelog, detailed uses canonical)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation-summary",
      children: "Validation Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "overall-validation-result--pass",
      children: ["Overall Validation Result: ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PASS"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Schema Rules:"
      }), " ✅ All validated and match documentation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      }), " ✅ All validated and match documentation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Guidance Consistency:"
      }), " ✅ Policy documents consistent", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " ✅ Matches documented rules"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-findings",
      children: "Key Findings"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema Format:"
        }), " ✅ Matches documentation exactly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Component Rules:"
        }), " ✅ All components follow documented rules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calculation Rules:"
        }), " ✅ New task/story/epic rules match documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge Cases:"
        }), " ✅ Doc-init, out-of-order, parallel epics all supported"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog Format:"
        }), " ✅ Both main and detailed formats match documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer Mapping:"
        }), " ✅ Implementation matches Hybrid Approach algorithm"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Scripts:"
        }), " ✅ Scripts enforce documented requirements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rc-readiness-assessment",
      children: "RC Readiness Assessment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Versioning Behavior:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "READY"
      }), " - All validation checks passed, no critical discrepancies found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-21 (v0.3.4.3+1 – Versioning behavior validation complete)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.3.4.3+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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