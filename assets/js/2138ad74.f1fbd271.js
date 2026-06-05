"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["3592"], {
17119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_01_rw_agent_execution_and_docs_t_01_audit_report_md_213_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-01-rw-agent-execution-and-docs-t-01-audit-report-md-213.json
var site_docs_project_management_kanban_epics_epic_02_story_01_rw_agent_execution_and_docs_t_01_audit_report_md_213_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T01-audit-report","title":"Audit Report: Project-Specific Assumptions in release-workflow-agent-execution.md","description":"Task IDS01:T01","source":"@site/../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T01-audit-report.md","sourceDirName":"project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs","slug":"/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T01-audit-report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T01-audit-report","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T01-audit-report.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 2: Workflow Management Framework","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/"},"next":{"title":"Epic 2, Story 1, Task 2: Tag Confidentia/fynd.deals examples and add dev-kit examples ✅ COMPLETE","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T02-tag-confidentiafynddeals-examples-and-add-dev-kit-examples-c"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T01-audit-report.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Audit Report: Project-Specific Assumptions in release-workflow-agent-execution.md';

const assets = {

};



const toc = [{
  "value": "📋 Executive Summary",
  "id": "-executive-summary",
  "level": 2
}, {
  "value": "🔍 Detailed Findings",
  "id": "-detailed-findings",
  "level": 2
}, {
  "value": "1. Hardcoded File Paths",
  "id": "1-hardcoded-file-paths",
  "level": 3
}, {
  "value": "1.1 Version File Path",
  "id": "11-version-file-path",
  "level": 4
}, {
  "value": "1.2 Changelog Directory Path",
  "id": "12-changelog-directory-path",
  "level": 4
}, {
  "value": "1.3 Epic Document Pattern",
  "id": "13-epic-document-pattern",
  "level": 4
}, {
  "value": "1.4 Kanban Board Path",
  "id": "14-kanban-board-path",
  "level": 4
}, {
  "value": "1.5 Story Document Pattern",
  "id": "15-story-document-pattern",
  "level": 4
}, {
  "value": "1.6 Validation Script Paths",
  "id": "16-validation-script-paths",
  "level": 4
}, {
  "value": "1.7 Main Changelog Path",
  "id": "17-main-changelog-path",
  "level": 4
}, {
  "value": "2. Handler Names",
  "id": "2-handler-names",
  "level": 3
}, {
  "value": "2.1 Kanban Update Handler",
  "id": "21-kanban-update-handler",
  "level": 4
}, {
  "value": "2.2 Validators Handler",
  "id": "22-validators-handler",
  "level": 4
}, {
  "value": "3. Project References",
  "id": "3-project-references",
  "level": 3
}, {
  "value": "3.1 Related Epic Reference",
  "id": "31-related-epic-reference",
  "level": 4
}, {
  "value": "3.2 Version Examples",
  "id": "32-version-examples",
  "level": 4
}, {
  "value": "3.3 Branch Examples",
  "id": "33-branch-examples",
  "level": 4
}, {
  "value": "4. Version/Branch Examples",
  "id": "4-versionbranch-examples",
  "level": 3
}, {
  "value": "4.1 Epic Number Examples",
  "id": "41-epic-number-examples",
  "level": 4
}, {
  "value": "4.2 Story Number Examples",
  "id": "42-story-number-examples",
  "level": 4
}, {
  "value": "4.3 Task Number Examples",
  "id": "43-task-number-examples",
  "level": 4
}, {
  "value": "📊 Summary by Category",
  "id": "-summary-by-category",
  "level": 2
}, {
  "value": "🎯 Recommendations",
  "id": "-recommendations",
  "level": 2
}, {
  "value": "High Priority (Must Fix for Template-Ready)",
  "id": "high-priority-must-fix-for-template-ready",
  "level": 3
}, {
  "value": "Medium Priority (Should Fix for Clarity)",
  "id": "medium-priority-should-fix-for-clarity",
  "level": 3
}, {
  "value": "Low Priority (Nice to Have)",
  "id": "low-priority-nice-to-have",
  "level": 3
}, {
  "value": "📝 Template Placeholder List",
  "id": "-template-placeholder-list",
  "level": 2
}, {
  "value": "✅ Next Steps",
  "id": "-next-steps",
  "level": 2
}, {
  "value": "📄 Files Referenced",
  "id": "-files-referenced",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "audit-report-project-specific-assumptions-in-release-workflow-agent-executionmd",
        children: ["Audit Report: Project-Specific Assumptions in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E02:S01", ":T01", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E02:S01", ":T01", " – Audit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "release-workflow-agent-execution.md"
      }), " for project-specific assumptions", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "File Audited:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-executive-summary",
      children: "📋 Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This audit identified ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "15 project-specific assumptions"
      }), " in the Release Workflow agent execution documentation that need to be abstracted or clearly tagged to make the documentation template-ready for use in other projects."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardcoded File Paths:"
        }), " 7 instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handler Names:"
        }), " 2 instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project References:"
        }), " 3 instances"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version/Branch Examples:"
        }), " 3 instances"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH - These assumptions prevent the documentation from being used as a portable template."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailed-findings",
      children: "🔍 Detailed Findings"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-hardcoded-file-paths",
      children: "1. Hardcoded File Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-version-file-path",
      children: "1.1 Version File Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 2 (Bump Version), lines 252, 259, 271", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/confidentia/version.py"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Hardcoded project-specific path", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Replace with template placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{version_file_path}"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/{project_name}/version.py"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - This is a critical path that varies by project"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-changelog-directory-path",
      children: "1.2 Changelog Directory Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 3 (Create Detailed Changelog), line 295", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/changelog-archive"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Project-specific directory structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Replace with template placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{changelog_archive_dir}"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MEDIUM - Directory structure varies by project"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "13-epic-document-pattern",
      children: "1.3 Epic Document Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 6 (Auto-update Kanban Docs), lines 459, 469", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/epics/overview/Epic \\{epic\\}/Epic-\\{epic\\}.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Project-specific Kanban structure (uses \"overview\" subdirectory)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Replace with template placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{epic_doc_pattern}"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\{kanban_path\\}/epics/Epic-\\{epic\\}.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Kanban structure varies significantly by project"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "14-kanban-board-path",
      children: "1.4 Kanban Board Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 6 (Auto-update Kanban Docs), line 460", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/epics/overview/_index.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Project-specific Kanban structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Replace with template placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{kanban_board_path}"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Kanban structure varies by project"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "15-story-document-pattern",
      children: "1.5 Story Document Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 6 (Auto-update Kanban Docs), line 470", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/Epic 4/story-03-*.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Project-specific Kanban structure and hardcoded epic/story numbers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Replace with template placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{story_doc_pattern}"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\{kanban_path\\}/epics/Epic-\\{epic\\}/stories/Story-\\{story\\}-*.md"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Story structure varies by project"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "16-validation-script-paths",
      children: "1.6 Validation Script Paths"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 8 (Run Validators), lines 548-549, 568-569", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_branch_context.py"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/validation/validate_changelog_format.py"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Project-specific script paths", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Replace with template placeholders ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{validation_scripts_path}/validate_branch_context.py"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{validation_scripts_path}/validate_changelog_format.py"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MEDIUM - Script locations vary by project"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "17-main-changelog-path",
      children: "1.7 Main Changelog Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 4 (Update Main Changelog), line 295 (implicit)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), " (root)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Assumes root-level changelog", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use template placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{main_changelog_path}"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " LOW - Most projects use root-level, but should be configurable"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-handler-names",
      children: "2. Handler Names"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-kanban-update-handler",
      children: "2.1 Kanban Update Handler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 6 (Auto-update Kanban Docs), line 456", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "confidentia.kanban_update"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Project-specific handler namespace", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Replace with generic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban.update"
      }), " or template placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\{project\\}.kanban_update"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Handler names are project-specific"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-validators-handler",
      children: "2.2 Validators Handler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Step 8 (Run Validators), line 544", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "confidentia.run_validators"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Project-specific handler namespace", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Replace with generic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "validation.run_validators"
      }), " or template placeholder ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\{project\\}.run_validators"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " HIGH - Handler names are project-specific"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-project-references",
      children: "3. Project References"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-related-epic-reference",
      children: "3.1 Related Epic Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Document header, line 5", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic 4 - User Workflows & Use Case Modeling, Release Workflow"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " References specific epic from source project", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Remove or tag as example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[Example: Epic 4 - User Workflows & Use Case Modeling, Release Workflow]"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " LOW - Informational only, but should be tagged"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "32-version-examples",
      children: "3.2 Version Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Throughout document (multiple locations)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.4.3.2+9"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.4.3.2+8"
      }), ", etc.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Uses specific version numbers as examples", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use generic pattern ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0.\\{epic\\}.\\{story\\}.\\{task\\}+\\{build\\}"
      }), " or clearly tag as example", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MEDIUM - Examples should be clearly marked"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "33-branch-examples",
      children: "3.3 Branch Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Throughout document (multiple locations)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/4"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/5"
      }), ", etc.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Uses specific branch names as examples", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use generic pattern ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/\\{n\\}"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/\\{n\\}-\\{slug\\}"
      }), " and clearly tag as example", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MEDIUM - Examples should be clearly marked"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-versionbranch-examples",
      children: "4. Version/Branch Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-epic-number-examples",
      children: "4.1 Epic Number Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Throughout document (multiple locations)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " References to \"Epic 4\", \"Epic 5\", etc.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Uses specific epic numbers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use generic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic \\{n\\}"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic {epic_number}"
      }), " pattern", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MEDIUM - Examples should be generic"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-story-number-examples",
      children: "4.2 Story Number Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Throughout document (multiple locations)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " References to \"Story 3\", etc.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Uses specific story numbers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use generic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Story \\{n\\}"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Story {story_number}"
      }), " pattern", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MEDIUM - Examples should be generic"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "43-task-number-examples",
      children: "4.3 Task Number Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Throughout document (multiple locations)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current:"
      }), " References to specific task numbers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Issue:"
      }), " Uses specific task numbers", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use generic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Task \\{n\\}"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Task {task_number}"
      }), " pattern", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " MEDIUM - Examples should be generic"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-summary-by-category",
      children: "📊 Summary by Category"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priority"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Impact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardcoded File Paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks portability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handler Names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HIGH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blocks portability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project References"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing but not blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version/Branch Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Should be clearly tagged"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Issues:"
      }), " 15"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-recommendations",
      children: "🎯 Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-priority-must-fix-for-template-ready",
      children: "High Priority (Must Fix for Template-Ready)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Replace all hardcoded file paths with template placeholders:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{version_file_path}"
            }), " for version file"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{changelog_archive_dir}"
            }), " for changelog directory"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{epic_doc_pattern}"
            }), " for epic document pattern"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{kanban_board_path}"
            }), " for kanban board"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{story_doc_pattern}"
            }), " for story document pattern"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "{validation_scripts_path}"
            }), " for validation scripts"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Replace project-specific handler names:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "confidentia.kanban_update"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{project\\}.kanban_update"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban.update"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "confidentia.run_validators"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{project\\}.run_validators"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validation.run_validators"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add configuration section"
          }), " at the beginning of the document listing all template placeholders and their meanings"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medium-priority-should-fix-for-clarity",
      children: "Medium Priority (Should Fix for Clarity)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tag all examples clearly:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[Example: ...]"
            }), " tags to all specific version numbers, branch names, epic/story/task numbers"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Or replace with generic patterns like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0.\\{epic\\}.\\{story\\}.\\{task\\}+\\{build\\}"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add \"Customization Guide\" section"
          }), " explaining how to replace template placeholders with project-specific values"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "low-priority-nice-to-have",
      children: "Low Priority (Nice to Have)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remove or tag project-specific references"
        }), " in document header"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add \"Project-Specific vs Framework\" section"
        }), " explaining what can be customized vs what must remain"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-template-placeholder-list",
      children: "📝 Template Placeholder List"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recommended template placeholders to use:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version_file_path: \"src/{project_name}/version.py\"\nchangelog_archive_dir: \"docs/changelog-and-release-notes/changelog-archive\"\nmain_changelog_path: \"CHANGELOG.md\"\nepic_doc_pattern: \"{kanban_path}/epics/Epic-{epic}.md\"\nkanban_board_path: \"{kanban_path}/kboard.md\"\nstory_doc_pattern: \"{kanban_path}/epics/Epic-{epic}/stories/Story-{story}-*.md\"\nvalidation_scripts_path: \"scripts/validation\"\nproject_handler_namespace: \"{project}\"  # e.g., \"confidentia\", \"ai-dev-kit\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-next-steps",
      children: "✅ Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T002:"
        }), " Tag Confidentia/fynd.deals examples and add dev-kit examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T003:"
        }), " Align ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " RW trigger section with dev-kit policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Future:"
        }), " Update documentation to use template placeholders (separate task or part of T002)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-files-referenced",
      children: "📄 Files Referenced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " (audited file)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Related: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md"
        }), " (may have similar issues)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Audit Report"
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