"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["60025"], {
1318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_uxr_001_migration_user_experience_research_md_ba3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-uxr-001-migration-user-experience-research-md-ba3.json
var site_docs_project_management_kanban_fr_br_uxr_001_migration_user_experience_research_md_ba3_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/UXR-001-migration-user-experience-research","title":"User Experience Research: Migration from Pre-Existing Kanban Structures","description":"Type: User Experience Research (UXR)","source":"@site/../docs/project-management/kanban/fr-br/UXR-001-migration-user-experience-research.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/UXR-001-migration-user-experience-research","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-001-migration-user-experience-research","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/UXR-001-migration-user-experience-research.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-01-27T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Guide: Re-opening Bug Reports and Tasks","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE"},"next":{"title":"User Experience Research: Comprehensive UAT of Migration Utilities - Real-World Migration Validation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-002-comprehensive-uat-migration-utilities"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/UXR-001-migration-user-experience-research.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-01-27T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'User Experience Research: Migration from Pre-Existing Kanban Structures';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Research Objective",
  "id": "research-objective",
  "level": 2
}, {
  "value": "Methodology",
  "id": "methodology",
  "level": 2
}, {
  "value": "Key Findings",
  "id": "key-findings",
  "level": 2
}, {
  "value": "Finding 1: Framework Assumes Fresh Install Only",
  "id": "finding-1-framework-assumes-fresh-install-only",
  "level": 3
}, {
  "value": "Finding 2: No Detection of Existing Structures",
  "id": "finding-2-no-detection-of-existing-structures",
  "level": 3
}, {
  "value": "Finding 3: No Migration Path Available",
  "id": "finding-3-no-migration-path-available",
  "level": 3
}, {
  "value": "Finding 4: Framework Examples Confused with Project Epics",
  "id": "finding-4-framework-examples-confused-with-project-epics",
  "level": 3
}, {
  "value": "Finding 5: Installation Process Doesn&#39;t Match Real-World Scenarios",
  "id": "finding-5-installation-process-doesnt-match-real-world-scenarios",
  "level": 3
}, {
  "value": "User Pain Points",
  "id": "user-pain-points",
  "level": 2
}, {
  "value": "Pain Point 1: Risk of Data Loss",
  "id": "pain-point-1-risk-of-data-loss",
  "level": 3
}, {
  "value": "Pain Point 2: Manual Migration Required",
  "id": "pain-point-2-manual-migration-required",
  "level": 3
}, {
  "value": "Pain Point 3: No Clear Migration Path",
  "id": "pain-point-3-no-clear-migration-path",
  "level": 3
}, {
  "value": "Pain Point 4: Confusion About Project vs Framework Epics",
  "id": "pain-point-4-confusion-about-project-vs-framework-epics",
  "level": 3
}, {
  "value": "Pain Point 5: Installation Process Doesn&#39;t Match Expectations",
  "id": "pain-point-5-installation-process-doesnt-match-expectations",
  "level": 3
}, {
  "value": "Recommendations",
  "id": "recommendations",
  "level": 2
}, {
  "value": "Recommendation 1: Add Detection Utilities (HIGH PRIORITY)",
  "id": "recommendation-1-add-detection-utilities-high-priority",
  "level": 3
}, {
  "value": "Recommendation 2: Add Analysis Utilities (HIGH PRIORITY)",
  "id": "recommendation-2-add-analysis-utilities-high-priority",
  "level": 3
}, {
  "value": "Recommendation 3: Add Migration Utilities (HIGH PRIORITY)",
  "id": "recommendation-3-add-migration-utilities-high-priority",
  "level": 3
}, {
  "value": "Recommendation 4: Add Installation Modes (HIGH PRIORITY)",
  "id": "recommendation-4-add-installation-modes-high-priority",
  "level": 3
}, {
  "value": "Recommendation 5: Separate Project Epics from Framework Examples (MEDIUM PRIORITY)",
  "id": "recommendation-5-separate-project-epics-from-framework-examples-medium-priority",
  "level": 3
}, {
  "value": "Recommendation 6: Update Documentation (MEDIUM PRIORITY)",
  "id": "recommendation-6-update-documentation-medium-priority",
  "level": 3
}, {
  "value": "Affected Areas",
  "id": "affected-areas",
  "level": 2
}, {
  "value": "Supporting Evidence",
  "id": "supporting-evidence",
  "level": 2
}, {
  "value": "Migration Scenarios Identified",
  "id": "migration-scenarios-identified",
  "level": 2
}, {
  "value": "Scenario 1: Simple Kanban Migration",
  "id": "scenario-1-simple-kanban-migration",
  "level": 3
}, {
  "value": "Scenario 2: Sprint-Based Migration",
  "id": "scenario-2-sprint-based-migration",
  "level": 3
}, {
  "value": "Scenario 3: Issue Tracker Migration",
  "id": "scenario-3-issue-tracker-migration",
  "level": 3
}, {
  "value": "Scenario 4: Mixed Structure Migration",
  "id": "scenario-4-mixed-structure-migration",
  "level": 3
}, {
  "value": "Scenario 5: Framework Update Migration",
  "id": "scenario-5-framework-update-migration",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
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
        id: "user-experience-research-migration-from-pre-existing-kanban-structures",
        children: "User Experience Research: Migration from Pre-Existing Kanban Structures"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " User Experience Research (UXR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2025-01-27", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " AI Agent (Cursor) acting as user/client for dev-toolkit", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ACCEPTED"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-05-migration-uxr-research",
        children: ["E07:S05", ":T01"]
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo/T01-uxr-001-repository-anchor",
        children: ["E07:S00", ":T01"]
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/4",
        children: "#4"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo/T01-uxr-001-repository-anchor",
        children: ["E07:S00", ":T01"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation (synthesis):"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-05-migration-uxr-research",
        children: ["E07:S05", ":T01"]
      }), " — see Story 5 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "T01"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Research findings from migrating dev-toolkit's pre-existing Kanban structure to ai-dev-kit Kanban framework reveal critical user experience gaps in framework installation process, migration workflows, and handling of existing work items."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-objective",
      children: "Research Objective"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Question:"
      }), " What are the user experience challenges when migrating from pre-existing Kanban (or Sprint/Agile) structures to the ai-dev-kit Kanban framework?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary Questions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What existing Kanban structures are common?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the pain points in migration?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What user workflows are needed for migration?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How should migration utilities be designed?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What installation modes are needed?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "methodology",
      children: "Methodology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Research Method:"
      }), " User Acceptance Testing (UAT) - Real-world migration scenario", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Participants:"
      }), " AI Agent (Cursor) acting as user/client for dev-toolkit project", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " Single session (2025-01-27)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools/Platforms:"
      }), " Cursor IDE, Git, GitHub CLI"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Research Details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scenario:"
        }), " Migrating dev-toolkit's pre-existing Kanban structure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing Structure:"
        }), " Epic 1 with 2 complete stories (Tool Management)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Action:"
        }), " Requested Kanban structure setup using updated framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observation:"
        }), " Framework cannot handle pre-existing structures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation:"
        }), " Comprehensive gap analysis and migration documentation created"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Research Context:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real project with real work items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Actual migration attempt (not simulated)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete documentation of process and gaps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UAT findings documented as bug reports and feature requests"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-findings",
      children: "Key Findings"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-1-framework-assumes-fresh-install-only",
      children: "Finding 1: Framework Assumes Fresh Install Only"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " Framework installation process assumes no existing Kanban structure exists.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation steps in README assume clean slate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No detection utilities for existing structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No migration utilities available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No installation mode selection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Projects with existing Kanban cannot safely adopt framework."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-2-no-detection-of-existing-structures",
      children: "Finding 2: No Detection of Existing Structures"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " Framework cannot detect existing Kanban structures before installation.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No utilities to scan for existing epics/stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No analysis of existing work items"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No identification of conflicts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation proceeds blindly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Risk of overwriting existing work if installed naively."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-3-no-migration-path-available",
      children: "Finding 3: No Migration Path Available"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " Framework provides no utilities to migrate existing work items.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No epic migration utilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No story migration utilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No task migration utilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No preservation of forensic markers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Manual migration required (error-prone, time-consuming)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-4-framework-examples-confused-with-project-epics",
      children: "Finding 4: Framework Examples Confused with Project Epics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " Framework examples (Epic 2-9) mixed with project epics (Epic 1).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2-9 are ai-dev-kit framework epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 1 is dev-toolkit project epic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No clear separation between project and framework epics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Confusion about what belongs to project vs framework"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Users cannot distinguish project work from framework examples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-5-installation-process-doesnt-match-real-world-scenarios",
      children: "Finding 5: Installation Process Doesn't Match Real-World Scenarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finding:"
      }), " Framework installation designed for ideal scenario (fresh install) only.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real projects have existing structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple migration scenarios needed (Kanban, Sprint, Issues)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework doesn't address common use cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adoption barriers for real-world projects"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Framework appears incomplete for real-world use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "user-pain-points",
      children: "User Pain Points"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pain-point-1-risk-of-data-loss",
      children: "Pain Point 1: Risk of Data Loss"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pain:"
      }), " Installing framework over existing structure risks overwriting work.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Users hesitate to adopt framework, fear losing work.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " High (affects all projects with existing Kanban)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pain-point-2-manual-migration-required",
      children: "Pain Point 2: Manual Migration Required"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pain:"
      }), " No automated migration utilities, must migrate manually.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Time-consuming, error-prone, requires deep framework knowledge.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " High (affects all migration scenarios)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pain-point-3-no-clear-migration-path",
      children: "Pain Point 3: No Clear Migration Path"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pain:"
      }), " Framework doesn't provide guidance on how to migrate existing work.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Users don't know where to start, migration feels risky.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " High (affects all projects with existing structures)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pain-point-4-confusion-about-project-vs-framework-epics",
      children: "Pain Point 4: Confusion About Project vs Framework Epics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pain:"
      }), " Framework examples mixed with project epics, unclear what's what.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Users confused about project structure, don't know what to preserve.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " Medium (affects projects with framework examples)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pain-point-5-installation-process-doesnt-match-expectations",
      children: "Pain Point 5: Installation Process Doesn't Match Expectations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pain:"
      }), " Framework installation assumes fresh install, but real projects have existing structures.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Framework feels incomplete, adoption barriers.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Frequency:"
      }), " High (affects most real-world projects)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommendations",
      children: "Recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-1-add-detection-utilities-high-priority",
      children: "Recommendation 1: Add Detection Utilities (HIGH PRIORITY)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "detect_existing_structure.py"
      }), " utility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Framework must detect existing structures before installation", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Prevents data loss, enables safe installation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scan for epic directories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect epic documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify story documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate detection report"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-2-add-analysis-utilities-high-priority",
      children: "Recommendation 2: Add Analysis Utilities (HIGH PRIORITY)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "analyze_structure.py"
      }), " utility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Framework must understand existing structure before migration", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Enables informed migration decisions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map existing epics to canonical format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map existing stories to canonical format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Map existing tasks to canonical format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify conflicts and gaps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-3-add-migration-utilities-high-priority",
      children: "Recommendation 3: Add Migration Utilities (HIGH PRIORITY)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "migrate_structure.py"
      }), " utility", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Framework must migrate existing work to canonical structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Enables safe migration without data loss"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup existing structure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate epics to canonical format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate stories to canonical format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migrate tasks to canonical format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserve forensic markers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-4-add-installation-modes-high-priority",
      children: "Recommendation 4: Add Installation Modes (HIGH PRIORITY)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Support multiple installation modes", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Different scenarios need different installation approaches", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Framework becomes adoptable by projects with existing structures"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fresh Install mode (current behavior)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration Install mode (detect and migrate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update Install mode (update existing framework)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hybrid Install mode (preserve project epics, install framework epics)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-5-separate-project-epics-from-framework-examples-medium-priority",
      children: "Recommendation 5: Separate Project Epics from Framework Examples (MEDIUM PRIORITY)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Clear separation and identification", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Users confused about what belongs to project vs framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Clearer project structure, easier maintenance"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mark framework examples clearly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separate project epics from framework examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide guidance on what to preserve"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommendation-6-update-documentation-medium-priority",
      children: "Recommendation 6: Update Documentation (MEDIUM PRIORITY)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Update installation guide with migration scenarios", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale:"
      }), " Users need guidance on migration process", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Easier adoption, clearer expectations"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document migration scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide migration examples"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update installation guide"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority Order:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detection Utilities (enables all other recommendations)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analysis Utilities (enables informed migration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration Utilities (enables safe migration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation Modes (enables different scenarios)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Separation of Project vs Framework (improves clarity)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation Updates (improves usability)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "affected-areas",
      children: "Affected Areas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected Components:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Installation Process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Migration Utilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Detection Mechanisms"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "UI Components"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "User Flows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Features"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Specific Areas:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework installation process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban structure setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic/Story/Task creation workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Framework adoption process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "supporting-evidence",
      children: "Supporting Evidence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Research Artifacts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gap Analysis: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migration Plan: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/MIGRATION_PLAN.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Migration Approach: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/MIGRATION_APPROACH.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task Migration Map: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/TASK_MIGRATION_MAP.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BR-006: Missing Migration Support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-007: Migration Utilities and Installation Modes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quotes or Examples:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"I want you to setup our Kanban structure, using the [updated] Kanban pack from ai-dev-kit\" - User request"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"this STILL isnt working. But that is good, as it means the structure isnt perfect.\" - User feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"I wonder if the issue is that we have an extant Kanban struct, that does not align with the kanban struct from ai-dev-kit.\" - User insight"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-scenarios-identified",
      children: "Migration Scenarios Identified"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-1-simple-kanban-migration",
      children: "Scenario 1: Simple Kanban Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing:"
      }), " Basic Kanban board with epics/stories", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge:"
      }), " Map to E/S/T structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      }), " Epic/Story mapping utilities"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-2-sprint-based-migration",
      children: "Scenario 2: Sprint-Based Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing:"
      }), " Sprint-based agile system", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge:"
      }), " Convert sprints to epics/stories", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      }), " Sprint-to-Epic conversion utilities"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-3-issue-tracker-migration",
      children: "Scenario 3: Issue Tracker Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing:"
      }), " GitHub Issues, Jira, etc.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge:"
      }), " Convert issues to E/S/T structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      }), " Issue-to-Task conversion utilities"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-4-mixed-structure-migration",
      children: "Scenario 4: Mixed Structure Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing:"
      }), " Mix of Kanban, Sprints, Issues", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge:"
      }), " Unified migration to E/S/T", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      }), " Multi-source migration utilities"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenario-5-framework-update-migration",
      children: "Scenario 5: Framework Update Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Existing:"
      }), " Older framework version", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge:"
      }), " Update to new structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      }), " Version-to-version migration utilities"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Immediate Actions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File BR-006: Missing Migration Support (problem statement)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File FR-007: Migration Utilities and Installation Modes (solution)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File UXR-001: This document (research findings)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Future Research:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate migration utilities with multiple projects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test migration scenarios (Kanban, Sprint, Issues)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gather user feedback on migration process"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Refine migration utilities based on feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2025-12-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake By:"
      }), " AI Agent (Cursor)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Flow Results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Story Match Found: Epic 7, Story 1 → Task 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "New Story Created: [Epic X, Story Y] → Task 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "New Epic Created: [Epic X, Story 1, Task 1]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 7 (UXR repo + maintenance epic)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00"]
        }), " (UXR repository story)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S00", ":T01"]
        }), " (UXR-001 registry task)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.7.0.1+1"
        }), " (task filed 2026-03-31)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epic-07.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-00-uxr-repo.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo/T01-uxr-001-repository-anchor",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T01-uxr-001-repository-anchor.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Synthesis (historical): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-05-migration-uxr-research",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-05-migration-uxr-research.md"
          })
        }), " (", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S05", ":T01"]
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-006:"
        }), " Missing Migration Support for Pre-Existing Kanban Structures - See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BR-006-missing-migration-support-pre-existing-kanban.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-007:"
        }), " Migration Utilities and Installation Modes - See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FR-007-migration-utilities-and-installation-modes.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework README:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/README.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gap Analysis:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/INSTALLATION_GAP_ANALYSIS.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Documentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_backup-pre-migration/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Issue:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/4",
          children: "#4"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Template Usage:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This UXR follows the Kanban Framework UXR template"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world migration scenario documented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive findings and recommendations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear priority order for recommendations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This user experience research is part of the Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/"
        }), " for complete framework documentation."]
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