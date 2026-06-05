"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["19100"], {
41350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_uxr_011_kanban_naming_hygiene_and_directory_systematic_cleanup_md_44e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-uxr-011-kanban-naming-hygiene-and-directory-systematic-cleanup-md-44e.json
var site_docs_project_management_kanban_fr_br_uxr_011_kanban_naming_hygiene_and_directory_systematic_cleanup_md_44e_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup","title":"User Experience Research: Kanban Naming Hygiene and Directory Systematic Cleanup","description":"Type: User Experience Research (UXR)","source":"@site/../docs/project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"User Experience Research: kboard IPP column after FBU and task links","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links"},"next":{"title":"User Experience Research: Kanban and FBU state icons for MoSCOW rows","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/UXR-011-kanban-naming-hygiene-and-directory-systematic-cleanup.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'User Experience Research: Kanban Naming Hygiene and Directory Systematic Cleanup';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Research Question",
  "id": "research-question",
  "level": 2
}, {
  "value": "Findings (Audit Conducted 2026-05-17)",
  "id": "findings-audit-conducted-2026-05-17",
  "level": 2
}, {
  "value": "Finding 1: Mixed Task Naming (Txxx vs Txx)",
  "id": "finding-1-mixed-task-naming-txxx-vs-txx",
  "level": 3
}, {
  "value": "Finding 2: Duplicate Story Files (Same Epic + Same Number, Different Names)",
  "id": "finding-2-duplicate-story-files-same-epic--same-number-different-names",
  "level": 3
}, {
  "value": "Finding 3: Duplicate Task Files (Identical Content, Different Names)",
  "id": "finding-3-duplicate-task-files-identical-content-different-names",
  "level": 3
}, {
  "value": "Finding 4: Orphaned Directories",
  "id": "finding-4-orphaned-directories",
  "level": 3
}, {
  "value": "Finding 5: Missing Zero-Padding",
  "id": "finding-5-missing-zero-padding",
  "level": 3
}, {
  "value": "Finding 6: Cross-Epic Story Name Collisions",
  "id": "finding-6-cross-epic-story-name-collisions",
  "level": 3
}, {
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "Proposed Remediation (Analysis)",
  "id": "proposed-remediation-analysis",
  "level": 2
}, {
  "value": "Phase A: Task Naming Standardization",
  "id": "phase-a-task-naming-standardization",
  "level": 3
}, {
  "value": "Phase B: Duplicate Story Reconciliation",
  "id": "phase-b-duplicate-story-reconciliation",
  "level": 3
}, {
  "value": "Phase C: Duplicate Task Removal",
  "id": "phase-c-duplicate-task-removal",
  "level": 3
}, {
  "value": "Phase D: Orphaned Directory Cleanup",
  "id": "phase-d-orphaned-directory-cleanup",
  "level": 3
}, {
  "value": "Phase E: Zero-Padding Fix",
  "id": "phase-e-zero-padding-fix",
  "level": 3
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
        id: "user-experience-research-kanban-naming-hygiene-and-directory-systematic-cleanup",
        children: "User Experience Research: Kanban Naming Hygiene and Directory Systematic Cleanup"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " User Experience Research (UXR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-05-17", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " AI Agent (ai-dev-kit)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " UXR-011", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-18\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution:"
      }), " v0.9.5.4+2 — All findings remediated; regression validator green; 105 file changes committed", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-09/story-05-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011",
        children: ["E09:S05", ":T04"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A comprehensive audit of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/project-management/kanban/"
      }), " reveals systematic naming inconsistencies and structural hygiene issues across the kanban directory tree. These issues — stale 3-digit task names (Txxx) mixed with 2-digit (Txx), duplicate story files under the same epic, orphaned directories, and cross-epic story name collisions — undermine the canonical E/S/T model and complicate automated tooling, cross-referencing, and board reconciliation. This UXR defines the cleanup scope, severity, and remediation criteria."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-question",
      children: "Research Question"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What is the full inventory of naming and structural hygiene defects in the kanban directory, what is their root cause, and what systematic remediation is required to bring the directory into compliance with the current canonical naming policy?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "findings-audit-conducted-2026-05-17",
      children: "Findings (Audit Conducted 2026-05-17)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-1-mixed-task-naming-txxx-vs-txx",
      children: "Finding 1: Mixed Task Naming (Txxx vs Txx)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Txx (2-digit, current standard):"
        }), " 185 files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Txxx (3-digit, deprecated):"
        }), " 51 files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total task files:"
        }), " 236"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deprecated ratio:"
        }), " ~22%"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Txxx → Txx migration (E02:S02", ":T07", ", E02:S02", ":T08", ") was filed 2025-12-03 but remains TODO. New work continues using both conventions, producing a mixed-state tree where tooling must parse both patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Affected locations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-01/story-002 (T001–T004)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-01/story-003 (T001–T006)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-01/story-006 (T01)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-02/story-002 (T001–T008)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-04/story-006 (T001)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-04/story-008 (T08)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-05/story-01-fr-repo (T01, T06, T33, T35, T42, T48, T56)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-05/story-08-knowledge-base (T001)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-06/story-00-br-repo (T001)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-06/story-01-br-repo (T001)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-06/story-06-adk-implementation-analysis-and-package-management (T001–T006, T008, T009, T010, T013, T017, T018, T024, T033, T115)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-06/story-09-ai-dev-kit-installation-and-adopter-integration (T001)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-07/story-01-codebase-maintenance-tasks (T001, T002, T003, T005, T06)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "epic-08/story-01-code-generators (T001)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-2-duplicate-story-files-same-epic--same-number-different-names",
      children: "Finding 2: Duplicate Story Files (Same Epic + Same Number, Different Names)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "epic-05:"
      }), " Stories 001–007 each have 2 files:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-001: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-documentation-maintenance-framework.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-fr-repo.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-002: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-02-documentation-maintenance-framework.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-02-documentation-quality-assurance.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-003: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-03-documentation-automation.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-03-documentation-quality-assurance.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-004: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-04-documentation-automation.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-04-framework-documentation-management.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-005: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-05-framework-documentation-management.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-05-legacy-repository-incorporation.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-006: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-06-legacy-repository-incorporation.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-06-policy-documentation-structure.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-007: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-07-persistent-knowledge-base-investigation.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-07-policy-documentation-structure.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "epic-06:"
      }), " Stories 001–006 each have 2 files:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-001: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-br-repo.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-02-versioning-cookbook-and-examples.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-002: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-09-ai-dev-kit-installation-and-adopter-integration.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-02-framework-version-management.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-003: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-07-adk-implementation-analysis-and-package-management.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-03-framework-update-and-migration.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-004: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-04-bug-reports.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-04-framework-health-monitoring.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-005: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-05-bug-reports.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-05-feature-requests.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["story-006: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-06-adk-implementation-analysis-and-package-management.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-06-feature-requests.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "epic-07:"
      }), " Stories 001–003 each have 2 files."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "epic-09:"
      }), " Stories 001–004 each have 2 files (book content stories vs RC-readiness stories)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Root cause:"
      }), " Historical merges, epic reorganization, and the coexistence of \"registry\" stories (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fr-repo"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "br-repo"
      }), ") with functional stories under the same epic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-3-duplicate-task-files-identical-content-different-names",
      children: "Finding 3: Duplicate Task Files (Identical Content, Different Names)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "epic-02/story-002:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T07-implement-task-naming-change.md"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T07-implement-task-naming-change.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T08-update-kanban-docs-to-txx-standard.md"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T08-update-kanban-docs-to-txx-standard.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Plus ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T08-update-kanban-docs-to-txx-standard.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These duplicates were likely created during the Txxx→Txx migration attempt and never reconciled."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-4-orphaned-directories",
      children: "Finding 4: Orphaned Directories"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "epic-05/story-002/"
      }), " — directory exists with files inside but no ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-002.md"
      }), " at the epic root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-5-missing-zero-padding",
      children: "Finding 5: Missing Zero-Padding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "epic-07/story-04-readme-template-based-on-best-readme-template.md"
      }), " — violates the Story-NNN convention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-6-cross-epic-story-name-collisions",
      children: "Finding 6: Cross-Epic Story Name Collisions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "epic-09 and epic-24 both have book-content stories with identical names (001–004). This is semantically acceptable (different epics) but complicates global search and linking."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inventory:"
        }), " Final, authoritative list of all naming/structural defects across the kanban tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remediation plan:"
        }), " Task-level plan for renaming files, merging duplicates, deleting orphaned directories, and updating all internal references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tooling impact:"
        }), " Identify all scripts/validators that parse task/story filenames and ensure they handle both old and new conventions during transition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Governance alignment:"
        }), " Update kanban governance policy to prevent recurrence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backfill verification:"
        }), " After remediation, validate that all internal links resolve and board docs reference correct filenames."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-remediation-analysis",
      children: "Proposed Remediation (Analysis)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-a-task-naming-standardization",
      children: "Phase A: Task Naming Standardization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rename all Txxx files to Txx (zero-pad single digits: T1 → T01)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all internal markdown links referencing the old filenames."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update story checklists to reference new filenames."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update board rows (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ") to reference new task IDs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-b-duplicate-story-reconciliation",
      children: "Phase B: Duplicate Story Reconciliation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each epic with duplicate story numbers, determine which file is canonical."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merge content where appropriate; archive/delete the duplicate."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Renumber non-canonical stories to avoid gaps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all epic story checklists and cross-references."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-c-duplicate-task-removal",
      children: "Phase C: Duplicate Task Removal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For epic-02/story-002: delete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T007"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T008"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T08-deliverable"
        }), " variants, keeping only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T07"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T08"
        }), " (or vice versa, depending on canonical choice)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update story checklist to reference the surviving filenames."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-d-orphaned-directory-cleanup",
      children: "Phase D: Orphaned Directory Cleanup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Investigate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-05/story-002/"
        }), " — determine if it represents a real story or merge artifact."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-002.md"
        }), " or remove directory as appropriate."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-e-zero-padding-fix",
      children: "Phase E: Zero-Padding Fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rename ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-07/story-04-*"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-07/story-04-*"
        }), "."]
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
        }), " ", "Inventory spreadsheet/list of all affected files with before/after names."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All Txxx files renamed to Txx; zero Txxx files remain in kanban tree."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All duplicate story files per epic reconciled (single file per story number)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All duplicate task files removed (single file per task number per story)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All orphaned directories resolved."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-004"
        }), " in epic-07 renamed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-004"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All internal markdown links validated (0 dangling links post-cleanup)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All board docs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ") updated with correct references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Kanban governance policy updated with explicit naming convention and prohibition on duplicate story numbers within an epic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Regression test: automated scan confirms 0 Txxx files, 0 duplicate story numbers per epic, 0 orphaned directories."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automated tooling that depends on predictable filenames (validators, UKW scripts, RW scripts)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Canonical E/S/T review under epic-09."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None (can start immediately)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Coordinates With:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "epic-05:"
        }), " Requires epic-owner input to determine canonical story files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "epic-06:"
        }), " Requires epic-owner input to determine canonical story files."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "epic-07:"
        }), " Requires epic-owner input for story-004 and duplicate stories."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "epic-09:"
        }), " Canonical E/S/T review (E9", ":S05", ") — this UXR feeds into that work."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-09/story-05-canonical-est-review-and-refinement/T04-kanban-naming-hygiene-and-directory-systematic-cleanup-uxr011",
          children: ["E09:S05", ":T04"]
        }), " — Implementing task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-02-pdca-integration-into-release-workflow/T07-implement-task-naming-change",
          children: ["E02:S02", ":T07"]
        }), " — Original task naming change (TODO)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-02-pdca-integration-into-release-workflow/T08-update-kanban-docs-to-txx-standard",
          children: ["E02:S02", ":T08"]
        }), " — Original kanban docs standardization (TODO)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/governance/kanban/kanban-governance-policy",
          children: "kanban-governance-policy"
        }), " — Naming policy source of truth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-09/",
          children: "epic-09"
        }), " — Release Candidate Readiness epic (canonical for E/S/T review)"]
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