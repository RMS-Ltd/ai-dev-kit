"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["47170"], {
89217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_04_story_01_dev_kit_kanban_implementation_t_01_gap_analysis_report_md_484_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-04-story-01-dev-kit-kanban-implementation-t-01-gap-analysis-report-md-484.json
var site_docs_project_management_kanban_epics_epic_04_story_01_dev_kit_kanban_implementation_t_01_gap_analysis_report_md_484_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-04/story-01-dev-kit-kanban-implementation/T01-gap-analysis-report","title":"E04:S01:T01 – Gap Analysis Report: Dev-Kit Kanban Policies and Templates vs. Framework","description":"Status: IN PROGRESS","source":"@site/../docs/project-management/kanban/epics/epic-04/story-01-dev-kit-kanban-implementation/T01-gap-analysis-report.md","sourceDirName":"project-management/kanban/epics/epic-04/story-01-dev-kit-kanban-implementation","slug":"/project-management/kanban/epics/epic-04/story-01-dev-kit-kanban-implementation/T01-gap-analysis-report","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-01-dev-kit-kanban-implementation/T01-gap-analysis-report","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-04/story-01-dev-kit-kanban-implementation/T01-gap-analysis-report.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-04T12:01:50.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 4: Kanban Framework","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/"},"next":{"title":"Task 2 Findings: fynd.deals Epic 15 Kanban Patterns","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-01-dev-kit-kanban-implementation/T02-fynd-deals-epic15-kanban-findings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-04/story-01-dev-kit-kanban-implementation/T01-gap-analysis-report.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-04T12:01:50.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E04:S01 – Gap Analysis Report: Dev-Kit Kanban Policies and Templates vs. Framework';

const assets = {

};



const toc = [{
  "value": "Summary of Gap Analysis",
  "id": "summary-of-gap-analysis",
  "level": 2
}, {
  "value": "1. Kanban Governance Policy Comparison",
  "id": "1-kanban-governance-policy-comparison",
  "level": 2
}, {
  "value": "Framework Policy (<code>packages/frameworks/kanban/policies/kanban-governance-policy.md</code>)",
  "id": "framework-policy-packagesframeworkskanbanpolicieskanban-governance-policymd",
  "level": 3
}, {
  "value": "Dev-Kit Policy (<code>docs/project-management/rituals/policy/kanban-governance-policy.md</code>)",
  "id": "dev-kit-policy-docsproject-managementritualspolicykanban-governance-policymd",
  "level": 3
}, {
  "value": "2. Epic Template Comparison",
  "id": "2-epic-template-comparison",
  "level": 2
}, {
  "value": "Framework Template (<code>packages/frameworks/kanban/templates/EPIC_TEMPLATE.md</code>)",
  "id": "framework-template-packagesframeworkskanbantemplatesepic_templatemd",
  "level": 3
}, {
  "value": "Dev-Kit Epic Usage (Example: <code>docs/project-management/kanban/epics/epic-03/epic-03.md</code>)",
  "id": "dev-kit-epic-usage-example-docsproject-managementkanbanepicsepic-03epic-03md",
  "level": 3
}, {
  "value": "3. Story Template Comparison",
  "id": "3-story-template-comparison",
  "level": 2
}, {
  "value": "Framework Template (<code>packages/frameworks/kanban/templates/STORY_TEMPLATE.md</code>)",
  "id": "framework-template-packagesframeworkskanbantemplatesstory_templatemd",
  "level": 3
}, {
  "value": "Dev-Kit Story Usage (Example: <code>docs/project-management/kanban/story-01-dev-kit-alignment-with-versioning-framework.md</code>)",
  "id": "dev-kit-story-usage-example-docsproject-managementkanbanstory-01-dev-kit-alignment-with-versioning-frameworkmd",
  "level": 3
}, {
  "value": "4. Critical Gaps Identified",
  "id": "4-critical-gaps-identified",
  "level": 2
}, {
  "value": "Gap 1: Atomic RW Behaviour ❌ <strong>CRITICAL</strong>",
  "id": "gap-1-atomic-rw-behaviour--critical",
  "level": 3
}, {
  "value": "Gap 2: &quot;ALL Sections&quot; Update Requirement ❌ <strong>CRITICAL</strong>",
  "id": "gap-2-all-sections-update-requirement--critical",
  "level": 3
}, {
  "value": "Gap 3: Accessibility Constraints ❌ <strong>CRITICAL</strong>",
  "id": "gap-3-accessibility-constraints--critical",
  "level": 3
}, {
  "value": "Gap 4: Forensic Marker Format Standardization ⚠️ <strong>HIGH PRIORITY</strong>",
  "id": "gap-4-forensic-marker-format-standardization-️-high-priority",
  "level": 3
}, {
  "value": "Gap 5: Consistency Requirements ⚠️ <strong>HIGH PRIORITY</strong>",
  "id": "gap-5-consistency-requirements-️-high-priority",
  "level": 3
}, {
  "value": "Gap 6: Review Schedules ❌ <strong>MEDIUM PRIORITY</strong>",
  "id": "gap-6-review-schedules--medium-priority",
  "level": 3
}, {
  "value": "Gap 7: Escalation Procedures ❌ <strong>MEDIUM PRIORITY</strong>",
  "id": "gap-7-escalation-procedures--medium-priority",
  "level": 3
}, {
  "value": "5. Template Gaps",
  "id": "5-template-gaps",
  "level": 2
}, {
  "value": "Epic Template Gaps",
  "id": "epic-template-gaps",
  "level": 3
}, {
  "value": "Story Template Gaps",
  "id": "story-template-gaps",
  "level": 3
}, {
  "value": "6. Dev-Kit Policy Gaps",
  "id": "6-dev-kit-policy-gaps",
  "level": 2
}, {
  "value": "Missing Framework Principles",
  "id": "missing-framework-principles",
  "level": 3
}, {
  "value": "7. Alignment Strengths",
  "id": "7-alignment-strengths",
  "level": 2
}, {
  "value": "✅ What&#39;s Aligned",
  "id": "-whats-aligned",
  "level": 3
}, {
  "value": "8. Conclusion and Recommendations",
  "id": "8-conclusion-and-recommendations",
  "level": 2
}, {
  "value": "High Priority Recommendations",
  "id": "high-priority-recommendations",
  "level": 3
}, {
  "value": "Medium Priority Recommendations",
  "id": "medium-priority-recommendations",
  "level": 3
}, {
  "value": "9. Next Steps for T002",
  "id": "9-next-steps-for-t002",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e04s01--gap-analysis-report-dev-kit-kanban-policies-and-templates-vs-framework",
        children: ["E04:S01", ":T01", " – Gap Analysis Report: Dev-Kit Kanban Policies and Templates vs. Framework"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Owner:"
      }), " RMS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2025-12-02 (v0.4.1.1+1 – initial gap analysis document)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.4.1.1+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E04S01T01"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-of-gap-analysis",
      children: "Summary of Gap Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document compares the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), "'s local Kanban policy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
      }), ") and templates with the canonical framework policies (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
      }), " and templates)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kanban-governance-policy-comparison",
      children: "1. Kanban Governance Policy Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "framework-policy-packagesframeworkskanbanpolicieskanban-governance-policymd",
      children: ["Framework Policy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPREHENSIVE"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-11-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Project-agnostic, portable"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Purpose and portability notes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ The Harmonious Cycle (Task → Version → RW → Kanban Update)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ FR/BR → Task → Story → Epic flow (canonical rule)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Board Structure (5 columns)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Work Items (Epics, Stories, Tasks)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Versioning (RC.EPIC.STORY.TASK+BUILD schema)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task-Level Requirements (CRITICAL section)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Release Workflow (10-step process)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Documentation requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Rules (traceability, SoT, gate conditions, numbering, WIP)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Templates & References"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Change History"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Portability Notes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing/Incomplete Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic RW behaviour"
        }), " - Not explicitly documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"ALL sections\" update requirement"
        }), " - Not explicitly documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Accessibility constraints"
        }), " - Not explicitly documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensic marker format requirements"
        }), " - Mentioned but not standardized"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Review schedules"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Escalation procedures"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency requirements"
        }), " - Mentioned but not detailed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dev-kit-policy-docsproject-managementritualspolicykanban-governance-policymd",
      children: ["Dev-Kit Policy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/rituals/policy/kanban-governance-policy.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PARTIAL"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Dev-kit specific"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Purpose (dev-kit specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Board Structure (dev-kit specific, simplified)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Work Items (Epics, Stories, Tasks - dev-kit specific)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Board Usage Rules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Relationship to Framework Package"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Versioning (references dev-kit versioning policy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Next Steps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing Sections:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "The Harmonious Cycle"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR/BR → Task → Story → Epic flow"
        }), " - Mentioned but not detailed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Task-Level Requirements"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation requirements"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Rules"
        }), " - Simplified, missing traceability, gate conditions, numbering discipline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Templates & References"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic RW behaviour"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "\"ALL sections\" update requirement"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Accessibility constraints"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensic marker format"
        }), " - Not standardized"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Review schedules"
        }), " - Not documented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Escalation procedures"
        }), " - Not documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " Dev-kit policy is a simplified adaptation but missing critical governance principles from the framework."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-epic-template-comparison",
      children: "2. Epic Template Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "framework-template-packagesframeworkskanbantemplatesepic_templatemd",
      children: ["Framework Template (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/templates/EPIC_TEMPLATE.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPREHENSIVE"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Header metadata (Status, Priority, Effort, Created, Last updated, Branch, Version Schema)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story Checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Overview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Goals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Stories (detailed sections)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Risks & Mitigations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ References"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Maintenance Cadence"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing/Incomplete:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit \"ALL sections\" update requirement"
        }), " - Not documented in template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensic marker format"
        }), " - Not explicitly documented in template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency check reminders"
        }), " - Not included"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dev-kit-epic-usage-example-docsproject-managementkanbanepicsepic-03epic-03md",
      children: ["Dev-Kit Epic Usage (Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/epics/epic-03/epic-03.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALIGNED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Header metadata (matches template)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Story Checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Overview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Goals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Stories (detailed sections)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ References"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Risks & Mitigations"
        }), " - Not consistently used"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Cadence"
        }), " - Not used (not a maintenance epic)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit \"ALL sections\" update requirement"
        }), " - Not documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " Dev-kit epics follow the template structure but don't consistently include all optional sections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-story-template-comparison",
      children: "3. Story Template Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "framework-template-packagesframeworkskanbantemplatesstory_templatemd",
      children: ["Framework Template (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/templates/STORY_TEMPLATE.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "COMPREHENSIVE"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Header metadata (Status, Priority, Last updated, Effort, Started, Completed, Version, Code)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task Checklist (with forensic marker format example)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Overview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Goals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Tasks (detailed sections with Input, Deliverable, Dependencies, Blocker, Parallel Development Candidacy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Acceptance Criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Completion Summary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ References"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Next Actions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing/Incomplete:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit \"ALL sections\" update requirement"
        }), " - Not documented in template"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensic marker format standardization"
        }), " - Example shown but not enforced"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistency check reminders"
        }), " - Not included"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dev-kit-story-usage-example-docsproject-managementkanbanstory-01-dev-kit-alignment-with-versioning-frameworkmd",
      children: ["Dev-Kit Story Usage (Example: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/story-01-dev-kit-alignment-with-versioning-framework.md"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ALIGNED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Header metadata (matches template)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Task Checklist (with forensic markers)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Overview"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Goal"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Tasks (detailed sections)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Acceptance Criteria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ References"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Completion Summary"
        }), " - Not consistently used"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Actions"
        }), " - Not consistently used"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Explicit \"ALL sections\" update requirement"
        }), " - Not documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " Dev-kit stories follow the template structure but don't consistently include all optional sections."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-critical-gaps-identified",
      children: "4. Critical Gaps Identified"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-1-atomic-rw-behaviour--critical",
      children: ["Gap 1: Atomic RW Behaviour ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      }), " - Neither policy explicitly documents that RW must complete all steps or stop with explicit BLOCKED message."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " High - Without this, agents may partially update Kanban docs, creating inconsistencies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add section to framework policy documenting:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW must complete all 11 steps or stop with explicit BLOCKED state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No partial updates allowed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear actionable messages required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-2-all-sections-update-requirement--critical",
      children: ["Gap 2: \"ALL Sections\" Update Requirement ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      }), " - Neither policy explicitly documents that Epic docs must update header, Story Checklist, AND detailed story sections."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " High - Without this, RW may update only header, leaving checklist and detailed sections out of sync."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add section to framework policy documenting:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic docs must update ALL sections: header, checklist, detailed story sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story docs must update ALL sections: header, task checklist, detailed task sections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systematic process for finding and updating all references"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-3-accessibility-constraints--critical",
      children: ["Gap 3: Accessibility Constraints ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      }), " - Neither policy explicitly documents accessibility constraints (no partial updates, no silent failures, clear actionable messages)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " High - Without this, RW may fail silently or provide unclear error messages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add section to framework policy documenting:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No partial updates allowed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No silent failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear actionable messages required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explicit BLOCKED state with reason and next steps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-4-forensic-marker-format-standardization-️-high-priority",
      children: ["Gap 4: Forensic Marker Format Standardization ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HIGH PRIORITY"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Policy:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PARTIALLY DOCUMENTED"
      }), " (examples shown but not standardized)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "INCOMPLETE"
      }), " - Format is shown in examples but not explicitly standardized."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Templates show: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (vX.Y.Z.T+B)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dev-kit uses: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v0.3.1.6+1)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Medium - Without standardization, different projects may use different formats."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add explicit section to framework policy documenting:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (vRC.E.S.T+B)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required components: Status icon, status text, version marker"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version marker format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vRC.E.S.T+B"
        }), " (matches version schema)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-5-consistency-requirements-️-high-priority",
      children: ["Gap 5: Consistency Requirements ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HIGH PRIORITY"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Policy:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MENTIONED"
      }), " (in Rules section)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "INCOMPLETE"
      }), " - Mentioned but not detailed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Medium - Without detailed consistency requirements, Kanban Board ↔ Epic ↔ Story may drift out of sync."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add explicit section to framework policy documenting:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban Board ↔ Epic ↔ Story must all align"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version markers must match across all documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status must match across all documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation requirements for consistency checks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-6-review-schedules--medium-priority",
      children: ["Gap 6: Review Schedules ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MEDIUM PRIORITY"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      }), " - No review schedules documented."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Low - Without review schedules, Kanban docs may become stale."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add section to framework policy documenting:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly reviews (active epics/stories)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monthly reviews (all epics/stories)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Quarterly reviews (epic health, dependencies)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "As-needed reviews (blockers, escalations)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "gap-7-escalation-procedures--medium-priority",
      children: ["Gap 7: Escalation Procedures ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MEDIUM PRIORITY"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Policy:"
      }), " ❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT DOCUMENTED"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gap:"
      }), " ⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MISSING"
      }), " - No escalation procedures documented."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Low - Without escalation procedures, blockers may persist."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add section to framework policy documenting:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 1: Story owner escalation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 2: Epic owner escalation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 3: Project leadership escalation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Escalation triggers (blockers >X days, dependencies unresolved, etc.)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-template-gaps",
      children: "5. Template Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "epic-template-gaps",
      children: "Epic Template Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Explicit \"ALL sections\" update requirement note"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Forensic marker format standardization note"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Consistency check reminders"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add notes to template:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"When updating this Epic doc via RW, ensure ALL sections are updated: header, Story Checklist, and detailed Story sections.\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\"Use forensic marker format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (vRC.E.S.T+B)"
        }), "\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Validate consistency: header, checklist, and detailed sections must all match.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "story-template-gaps",
      children: "Story Template Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Explicit \"ALL sections\" update requirement note"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Forensic marker format standardization note"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Consistency check reminders"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Add notes to template:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"When updating this Story doc via RW, ensure ALL sections are updated: header, Task Checklist, and detailed Task sections.\""
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\"Use forensic marker format: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (vRC.E.S.T+B)"
        }), "\""]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Validate consistency: header, checklist, and detailed sections must all match.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-dev-kit-policy-gaps",
      children: "6. Dev-Kit Policy Gaps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "missing-framework-principles",
      children: "Missing Framework Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dev-Kit Policy Missing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ The Harmonious Cycle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ FR/BR → Task → Story → Epic flow (detailed)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Task-Level Requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Release Workflow documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Documentation requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Rules (traceability, gate conditions, numbering discipline)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Templates & References"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Dev-kit policy should:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reference framework policy as SoT"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document dev-kit-specific adaptations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Link to framework for detailed explanations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-alignment-strengths",
      children: "7. Alignment Strengths"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-whats-aligned",
      children: "✅ What's Aligned"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Schema:"
        }), " Both use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work Item Structure:"
        }), " Both use Epic → Story → Task hierarchy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template Structure:"
        }), " Dev-kit epics/stories follow framework templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR/BR → Task Flow:"
        }), " Both document that FRs/BRs become Tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Board Structure:"
        }), " Both use consolidated Kanban directory structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-conclusion-and-recommendations",
      children: "8. Conclusion and Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-priority-recommendations",
      children: "High Priority Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Atomic RW Behaviour Section"
          }), " to framework policy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW must complete all 11 steps or stop with explicit BLOCKED state"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No partial updates allowed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear actionable messages required"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add \"ALL Sections\" Update Requirement"
          }), " to framework policy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Epic docs must update header, Story Checklist, AND detailed story sections"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Story docs must update header, Task Checklist, AND detailed task sections"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Systematic process for finding and updating all references"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Accessibility Constraints Section"
          }), " to framework policy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No partial updates allowed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No silent failures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear actionable messages required"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Explicit BLOCKED state with reason and next steps"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Standardize Forensic Marker Format"
          }), " in framework policy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Canonical format: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (vRC.E.S.T+B)"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Required components documented"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version marker format matches version schema"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Consistency Requirements Section"
          }), " to framework policy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban Board ↔ Epic ↔ Story must all align"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Version markers must match across all documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Status must match across all documents"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validation requirements for consistency checks"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "medium-priority-recommendations",
      children: "Medium Priority Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Review Schedules Section"
          }), " to framework policy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Weekly, monthly, quarterly review cadences"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "As-needed review triggers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Add Escalation Procedures Section"
          }), " to framework policy:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Level 1-3 escalation paths"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Escalation triggers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enhance Templates"
          }), " with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "\"ALL sections\" update requirement notes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Forensic marker format standardization notes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Consistency check reminders"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Enhance Dev-Kit Policy"
          }), " to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference framework policy as SoT"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document dev-kit-specific adaptations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link to framework for detailed explanations"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-next-steps-for-t002",
      children: "9. Next Steps for T002"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The next task (E04:S01", ":T02", ") should:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review fynd.deals Epic 15 Kanban documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extract reusable patterns (especially atomic RW behaviour, \"ALL sections\" rule, accessibility constraints)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document findings and recommendations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare for T003 (Update dev-kit Kanban governance policy as canonical SoT)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Task:"
      }), " E04:S01", ":T02", " – Ingest findings from fynd.deals Epic 15 Kanban work"]
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