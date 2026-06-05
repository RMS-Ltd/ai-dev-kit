"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["23205"], {
85373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_uxr_005_kanban_board_formatting_and_governance_md_1dc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-uxr-005-kanban-board-formatting-and-governance-md-1dc.json
var site_docs_project_management_kanban_fr_br_uxr_005_kanban_board_formatting_and_governance_md_1dc_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance","title":"User Experience Research: Kanban Board Formatting & Governance","description":"Type: User Experience Research (UXR)","source":"@site/../docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-16T13:58:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"User Experience Research: Kanban Package Installation UAT","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-004-kanban-package-installation-uat"},"next":{"title":"User Experience Research: Single dev Branch + RW Validator Relaxation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-006-dev-branch-and-rw-validator-relaxation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/UXR-005-kanban-board-formatting-and-governance.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-16T13:58:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'User Experience Research: Kanban Board Formatting & Governance';

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
  "value": "Finding 1: Dense MoSCOW Lists Hurt Scan-Ability (Severity: High)",
  "id": "finding-1-dense-moscow-lists-hurt-scan-ability-severity-high",
  "level": 3
}, {
  "value": "Finding 2: Inconsistent Template Guidance (Severity: High)",
  "id": "finding-2-inconsistent-template-guidance-severity-high",
  "level": 3
}, {
  "value": "Finding 3: Ownership Gap for Kanban Templates (Severity: Critical)",
  "id": "finding-3-ownership-gap-for-kanban-templates-severity-critical",
  "level": 3
}, {
  "value": "Recommendations",
  "id": "recommendations",
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
  "value": "Intake Decision",
  "id": "intake-decision",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
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
        id: "user-experience-research-kanban-board-formatting--governance",
        children: "User Experience Research: Kanban Board Formatting & Governance"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " User Experience Research (UXR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-03-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (request) documented by Cascade", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (implementation ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S01", ":T09"]
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.7.1.9+5"
      }), " — pending maintainer verification)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: "TBD"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance",
        children: ["E07:S01", ":T09"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical registry anchor (do not use for RW):"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo/T05-uxr-005-repository-anchor",
        children: ["E07:S00", ":T05"]
      }), " — detasked ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks",
        children: "BR-076"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Readers reported poor readability on Kanban boards because multi-line task entries were written back-to-back with no blank spacing between bullet items. The same formatting debt exists across Kanban documentation, creating cognitive overload and making it easy to miss tasks. This UXR formalizes the requirement to insert a blank line between multi-line MoSCOW entries across every Kanban board/doc and assigns UXR ownership of Kanban template/document maintenance so the rule is consistently enforced."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-objective",
      children: "Research Objective"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary Question:"
      }), " How can we improve Kanban document readability and ensure lasting ownership for formatting rules?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary Questions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which Kanban documents exhibit the spacing issue most severely?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What rule should govern multi-line list spacing without disrupting single-line lists?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Which workflow should own future Kanban template/document updates to prevent regression?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "methodology",
      children: "Methodology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Research Method:"
      }), " Heuristic review of Kanban documentation (MoSCOW sections across ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kboard.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban-board-guide.md"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_index.md"
      }), ").", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Participants:"
      }), " Documentation + UXR review pairing.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration:"
      }), " Single analytical pass during Kanban board formatting update (2026-03-16).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Artifacts Reviewed:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kanban-board-guide.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/_index.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-findings",
      children: "Key Findings"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-1-dense-moscow-lists-hurt-scan-ability-severity-high",
      children: "Finding 1: Dense MoSCOW Lists Hurt Scan-Ability (Severity: High)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-line bullets render as solid blocks, forcing users to re-read lines to separate tasks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Impacts both Kanban tasks and FR/BR/UXR prioritization boards."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-2-inconsistent-template-guidance-severity-high",
      children: "Finding 2: Inconsistent Template Guidance (Severity: High)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No canonical template or rule explaining when blank lines are required, so fixes are ad-hoc."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board-guide.md"
        }), " and other governance docs never mention formatting ownership."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-3-ownership-gap-for-kanban-templates-severity-critical",
      children: "Finding 3: Ownership Gap for Kanban Templates (Severity: Critical)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No workflow (UKW, Intake, Documentation) explicitly owns template/doc maintenance for Kanban materials."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Leads to regression risk after one-off fixes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommendations",
      children: "Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Formatting Rule Enforcement (Immediate):"
        }), " Insert a blank line between each multi-line MoSCOW bullet across all Kanban/FR/BR/UXR boards. Single-line bullets remain contiguous."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template Updates:"
        }), " Update Kanban templates/guide documents to describe the rule, including examples and linting guidance."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR Ownership:"
        }), " Assign the UXR workflow responsibility for Kanban template/document maintenance, ensuring future formatting or terminology adjustments go through UXR review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator Enhancement (Follow-up):"
        }), " Extend documentation consistency scripts to flag multi-line bullets without spacing."]
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
        }), " ", "AC-1: Every multi-line MoSCOW bullet in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-board-guide.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kanban-structure.md"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_index.md"
        }), " has a blank line separating it from adjacent entries (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_kanban_moscow_spacing.py --strict"
        }), " PASS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-2: Kanban templates and guide explicitly document the spacing rule with an example (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/kanban-board-guide",
          children: "kanban-board-guide.md"
        }), " § Formatting Governance)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-3: Documentation states that UXR owns Kanban template/document updates and governance changes (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/",
          children: "README.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md",
          children: "kanban-governance-policy.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "AC-4: Related validators/tests reference the rule (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_kanban_moscow_spacing.py"
        }), ", pytest, Release Readiness Gate 10)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updates to documentation validator (", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/documentation/validate-documentation-consistency.py"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordination with Documentation Agent to reflect new ownership statements across board files."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None (analysis complete; implementation ready)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " readability fix task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Documentation Agent responsibilities in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/AGENTS.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2026-03-31 (registry task filed; implementation was already ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S01", ":T09"]
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
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
        }), " ", "Story Match Found: ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00"]
        }), " (UXR repository) + ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S01"]
        }), " (implementation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic: Epic 7"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story (registry): ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00"]
        }), " — ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S00", ":T05"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story (implementation): ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S01"]
        }), " — ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E07:S01", ":T09"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Version: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.7.0.5+1"
        }), " (registry filed); implementation versions follow ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S01"]
        }), " RW"]
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
        children: ["Story (registry): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-00-uxr-repo.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task (registry): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo/T05-uxr-005-repository-anchor",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T05-uxr-005-repository-anchor.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task (implementation): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "E07S01T09-kanban-template-governance.md"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This UXR represents the user’s explicit request (Mar 16, 2026) to expand UXR scope and enforce Kanban readability. Implementation should be coordinated with documentation linting so future RW/UKW work respects the spacing rule automatically."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kanban-board-guide.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/README.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/documentation/validate-documentation-consistency.py"
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