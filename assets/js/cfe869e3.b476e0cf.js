"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["85617"], {
26410(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_072_uniform_repository_abstract_space_kanban_rules_md_cfe_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-072-uniform-repository-abstract-space-kanban-rules-md-cfe.json
var site_docs_project_management_kanban_fr_br_fr_072_uniform_repository_abstract_space_kanban_rules_md_cfe_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules","title":"Feature Request: Uniform Repository vs Abstract-Space Kanban Rules (Cross-Epic)","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-31T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: Docusaurus Site Search","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-071-docusaurus-site-search"},"next":{"title":"Feature Request: FBU Board — Open ∧ Taskless Intake Execution Plan (Kanban Task)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-073-fr-br-uxr-board-open-taskless-intake-execution-plan"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-31T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Uniform Repository vs Abstract-Space Kanban Rules (Cross-Epic)';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Evaluation — Candidate Approaches",
  "id": "evaluation--candidate-approaches",
  "level": 2
}, {
  "value": "Approach A — <strong>Epic 7 conforms to Epic 5 (strict S00 abstract, repo in S01)</strong>",
  "id": "approach-a--epic-7-conforms-to-epic-5-strict-s00-abstract-repo-in-s01",
  "level": 3
}, {
  "value": "Approach B — <strong>Epic 7 keeps UXR repo at S00; redefine global rule</strong>",
  "id": "approach-b--epic-7-keeps-uxr-repo-at-s00-redefine-global-rule",
  "level": 3
}, {
  "value": "Approach C — <strong>Introduce dedicated high-number repository story (e.g. E7+ UXR repo); hollow out E7</strong>",
  "id": "approach-c--introduce-dedicated-high-number-repository-story-eg-e7-uxr-repo-hollow-out-e7",
  "level": 3
}, {
  "value": "Approach D — <strong>Global policy: repository story is always S01; Epic 7 enters multi-phase migration</strong>",
  "id": "approach-d--global-policy-repository-story-is-always-s01-epic-7-enters-multi-phase-migration",
  "level": 3
}, {
  "value": "Decision Required",
  "id": "decision-required",
  "level": 2
}, {
  "value": "Decision Memo (Approach D Selected)",
  "id": "decision-memo-approach-d-selected",
  "level": 2
}, {
  "value": "Why Approach D",
  "id": "why-approach-d",
  "level": 3
}, {
  "value": "Migration phases",
  "id": "migration-phases",
  "level": 3
}, {
  "value": "Documentation &amp; Policy Update Scope (after decision)",
  "id": "documentation--policy-update-scope-after-decision",
  "level": 2
}, {
  "value": "Requirements",
  "id": "requirements",
  "level": 2
}, {
  "value": "Functional",
  "id": "functional",
  "level": 3
}, {
  "value": "Non-functional",
  "id": "non-functional",
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
  "value": "Intake Decision",
  "id": "intake-decision",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
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
        id: "feature-request-uniform-repository-vs-abstract-space-kanban-rules-cross-epic",
        children: "Feature Request: Uniform Repository vs Abstract-Space Kanban Rules (Cross-Epic)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-072", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-03-31", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (2026-06-01 — ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E04:S19", ":T08"]
      }), " D2–D4 + ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d",
        children: "ADR-014"
      }), "; pending maintainer verification)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep",
        children: ["E04:S19", ":T08"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Historical registry:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T72-uniform-repository-abstract-space-kanban-rules",
        children: ["E05:S01", ":T72"]
      }), " (historical-only)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Canonical policy:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d",
        children: "ADR-014"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related BR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks",
        children: "BR-076"
      }), " — E7", ":S00", " must not host concrete tasks (", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E04:S19", ":T10"]
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 5"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 7"
      }), " today use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story 0"
      }), " differently: ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E5", ":S00"]
      }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "epic-level abstract space only (no tasks)"
      }), " while ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR"
      }), " repository work lives in ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E5", ":S01"]
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 7"
      }), " uses ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E7", ":S00"]
      }), " as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "perpetual UXR repository story"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "concrete tasks"
      }), " (e.g. ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S00", ":T01"]
      }), ", ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S00", ":T05"]
      }), "). That clashes with the stricter E5 model and with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "intent"
      }), " described in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-021-fr-br-uxr-repository-stories",
        children: "FR-021"
      }), " (UXR anchors under ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E07:S01", ":T01"]
      }), "), which ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "does not match"
      }), " the current ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E7", ":S01"]
      }), " (“Codebase Maintenance Tasks”) allocation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This FR requests a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single, documented rule model"
      }), " for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "S00"
        }), " means (abstract-only vs repository container)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Where ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR / BR / UXR"
        }), " repository anchors live per epic."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "adopters"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "validators"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_branch_context"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump"
        }), ", intake, UKW) interpret coordinates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcomes:"
      }), " evaluate approaches → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decide"
      }), " the uniform model → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "update all policy and documentation"
      }), " (including templates, ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), ", framework Kanban governance, versioning policy cross-links, and affected epic/story/task docs)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ID note:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-072"
      }), " is used here because ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-064"
      }), " is already ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges",
          children: ["retire ", (0,jsx_runtime.jsx)(_components.code, {
            children: "shields"
          }), " branch / private repo badges"]
        })
      }), " (", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E05:S01", ":T69"]
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic collision:"
        }), " The phrase ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Story 0”"
        }), " implies “abstract space” in Epic 5 but “repository with tasks” in Epic 7."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability drift:"
        }), " New intake and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementing Task"
        }), " wiring follow ", (0,jsx_runtime.jsx)(_components.em, {
          children: "existing"
        }), " files; without a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "canonical rule"
        }), ", agents and humans re-derive conflicting interpretations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-021 gap:"
        }), " FR-021 already points UXR registry at ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S01"]
        }), "; the live tree uses ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00"]
        }), " for UXR registry rows. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reconcile"
        }), " via an explicit decision, not ad hoc edits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evaluation--candidate-approaches",
      children: "Evaluation — Candidate Approaches"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "approach-a--epic-7-conforms-to-epic-5-strict-s00-abstract-repo-in-s01",
      children: ["Approach A — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 7 conforms to Epic 5 (strict S00 abstract, repo in S01)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idea:"
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00"]
        }), " becomes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "abstract-only"
        }), " (like ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E5", ":S00"]
        }), "). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR"
        }), " repository tasks move to ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S01"]
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "replacing or displacing"
        }), " current ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S01"]
        }), " (“Codebase Maintenance Tasks”)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Maximum ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "symbolic"
        }), " uniformity with E5/E6 BR pattern; matches FR-021 text."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 7 S01"
        }), " already hosts a large, versioned story with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "T01–T09+"
        }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Renumbering"
        }), " the rest of Epic 7 (current S01→S02, S02→S3, …) is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "high churn"
        }), " (coordinates, changelogs, historical versions, tooling)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fit:"
        }), " Best only if the program accepts a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one-time Epic 7 story renumbering migration"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "approach-b--epic-7-keeps-uxr-repo-at-s00-redefine-global-rule",
      children: ["Approach B — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 7 keeps UXR repo at S00; redefine global rule"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idea:"
        }), " Globally document: ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["“S00 may be either epic abstract-only ", (0,jsx_runtime.jsx)(_components.em, {
            children: "or"
          }), " repository story depending on epic history; Epic 7 UXR repo is intentionally S00.”"]
        }), " Epic 5 remains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "S00 abstract / S01 repo"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "No"
        }), " mass Kanban coordinate migration for Epic 7."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Not"
        }), " one visual rule for “S00”; adopters must read ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "per-epic"
        }), " appendix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fit:"
        }), " Pragmatic ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "short term"
        }), "; weak ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "uniformity"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "approach-c--introduce-dedicated-high-number-repository-story-eg-e7-uxr-repo-hollow-out-e7",
      children: ["Approach C — ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Introduce dedicated high-number repository story (e.g. E7", ":S10", "+ UXR repo); hollow out E7", ":S00"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idea:"
        }), " Create ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new"
        }), " story ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":Snn"]
        }), " “UXR Repo (PERPETUAL)”, migrate ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7:S00", ":Txx"]
        }), " tasks and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-00-uxr-repo"
        }), " → new folder/story; leave ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S00"]
        }), " as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "abstract-only"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.7.0.0+0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Aligns ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "semantics"
        }), " with E5 (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "S00"
        }), " abstract) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "without"
        }), " stealing existing ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "S01"
        }), " codebase-maintenance identity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " New story number; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "version coordinate migration"
        }), " for UXR registry (", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.7.0.n"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.7.N.n"
        }), "); board and doc churn, but ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bounded"
        }), " compared to renumbering all Epic 7."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "approach-d--global-policy-repository-story-is-always-s01-epic-7-enters-multi-phase-migration",
      children: ["Approach D — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Global policy: repository story is always S01; Epic 7 enters multi-phase migration"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idea:"
        }), " Treat ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Approach A"
        }), " as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "north star"
        }), "; phase: (1) freeze new E7", ":S00", " tasks, (2) open ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "new"
        }), " UXR repo story ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7", ":S01b"]
        }), " or renumber per master plan, (3) deprecate old IDs with redirect tables in docs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pros:"
        }), " Clear ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "end state"
        }), "; phased risk reduction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cons:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Long"
        }), " transition; requires ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "migration runbook"
        }), " and RW attribution rules during overlap."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deliverable for \"evaluation\" phase:"
      }), " A short ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decision memo"
      }), " (in task doc or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/architecture/standards-and-adrs/"
      }), ") comparing A–D against ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cost"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adopter impact"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tooling impact"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "alignment with FR-021"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-required",
      children: "Decision Required"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one"
      }), " primary model (or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "D"
      }), " phased to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "C"
      }), ") and record:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Canonical definition of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "S00"
        }), " across epics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR / BR / UXR"
        }), " repository story numbers per epic (table)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Whether ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-021"
        }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "amended"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "superseded"
        }), " by a new ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ADR"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kanban governance"
        }), " section."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-memo-approach-d-selected",
      children: "Decision Memo (Approach D Selected)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Adopt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach D"
      }), " as canonical:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "End state (north star):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S00"
        }), " is abstract-space only across FR/BR/UXR repository epics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration path:"
        }), " phased transition from dedicated repository stories to semantic host-story placement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake rule at cutover:"
        }), " no new FR/BR/UXR intake may create net-new tasks in dedicated repository stories; new intake tasks must be placed in the most appropriate delivery story."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Historical preservation:"
        }), " existing repository-story task IDs remain valid historical anchors and MUST remain linkable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-021 reconciliation:"
        }), " treat FR-021 as historically implemented but superseded for new intake behavior by this FR and associated governance updates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-approach-d",
      children: "Why Approach D"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoids high-risk all-at-once renumbering while still converging on a uniform model."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preserves forensic history and existing links."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aligns with KG-R6 semantic placement and practical intake operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keeps validator/workflow behavior predictable during transition."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration-phases",
      children: "Migration phases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Policy/Process state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Repository story behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish canonical model + transition guardrails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write for historical completion only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic intake cutover (new FR/BR/UXR -> delivery story)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frozen for new intake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closure/deprecation labeling in story docs/boards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical registry only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator/workflow docs aligned to mixed historical+new model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redirect table maintained"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "documentation--policy-update-scope-after-decision",
      children: "Documentation & Policy Update Scope (after decision)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Must touch (non-exhaustive; refine during implementation):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Architecture / ADRs"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-versioning-policy.md"
            }), ", new or updated ADR for repository vs abstract space"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kanban governance"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-governance-policy.md"
            }), ", templates (", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK_TEMPLATE"
            }), ", story templates), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Epic-*"
            }), " headers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Epic 5–7 story docs"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "story-00-*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "story-01-*"
            }), ", Epic 7 UXR repo vs S01 maintenance — align to chosen model"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-021"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update to match ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "live IDs"
            }), " or mark ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "superseded"
            }), " with pointer to ADR"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow agent docs"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW / UKW / intake docs referencing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E7:S00"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E7:S01"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cursor rules"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " fragments that assume repository story numbering"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Validators"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), " story discovery for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "S00"
            }), " (e.g. explicit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--story-file"
            }), " guidance or smarter Epic 7 routing)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional",
      children: "Functional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-072", ":R01"]
        }), " — Published ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single rule model"
        }), " for abstract space vs repository stories (diagram + table by epic)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-072", ":R02"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision memo"
        }), " archived with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "chosen approach"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rejected"
        }), " options + rationale."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-072", ":R03"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "All"
        }), " affected policy and Kanban docs updated; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no"
        }), " contradictory “S00” definitions remain in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "evergreen"
        }), " docs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-072", ":R04"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-021"
        }), " reconciled (updated or explicitly superseded)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-072", ":R05"]
        }), " — If coordinates change: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "migration notes"
        }), " (old E/S/T → new) for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RW"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "version history"
        }), " traceability."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional",
      children: "Non-functional"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-072", ":NF01"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Adopter guidance:"
        }), " how ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "consumer epics"
        }), " should allocate S00/S01 when adopting FR/BR/UXR repos."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-072", ":NF02"]
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tooling:"
        }), " validators / intake scripts ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "documented"
        }), " against the chosen model (code changes optional in this FR but gaps must be listed)."]
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
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " A reader can answer “", (0,jsx_runtime.jsx)(_components.strong, {
          children: "What is S00?"
        }), "” in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "one"
        }), " place without Epic 5 vs Epic 7 contradiction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UXR"
        }), " traceability IDs in the Kanban tree match the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "published"
        }), " rule (either migrated coordinates or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explicit"
        }), " exception with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no"
        }), " silent drift)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UKW / RW / intake"
        }), " references updated so agents do not file ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E7:S00", ":Txx"]
        }), " against a rule that forbids tasks on S00 (unless ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "B"
        }), " is chosen and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explicitly"
        }), " named)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-021-fr-br-uxr-repository-stories",
          children: "FR-021 – FR/BR/UXR Repository Stories"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must reconcile"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs",
          children: "FR-018 – Abstract space / zero-numbered EST"
        }), " — align terminology."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-020-version-validator-abstract-space-awareness",
          children: "FR-020 – Version validator abstract space awareness"
        }), " — validator behavior vs S00."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 7: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-00-uxr-repo",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-00-uxr-repo.md"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epic-07.md"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " FILED — released ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.5.1.72+0"
      }), " (SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.683+0"
      }), "); implementation of FR requirements remains open."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned To:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic / Story:"
        }), " Epic 5, Story 1 (FR Repo)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task:"
        }), " E05:S01", ":T72"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version (abstract):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.5.1.72+0"
        }), " (doc-init released; further work uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+1"
        }), "…)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban Links:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "epic-05.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Story: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-01-fr-repo.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T72-uniform-repository-abstract-space-kanban-rules",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "T72"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Issue:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "TBD"
        }), " (optional follow-up)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["This FR is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "meta-governance"
        }), ": implementation may span ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "multiple epics"
        }), "; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S01", ":T72"]
        }), " remains the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR anchor"
        }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "implementation tasks"
        }), " may be filed under Epic 4 / 7 / 9 per the chosen approach."]
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