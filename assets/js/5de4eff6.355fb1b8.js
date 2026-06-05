"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["15439"], {
39769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_106_packaged_workflows_sync_with_live_repo_implementation_md_5de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-106-packaged-workflows-sync-with-live-repo-implementation-md-5de.json
var site_docs_project_management_kanban_fr_br_fr_106_packaged_workflows_sync_with_live_repo_implementation_md_5de_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation","title":"Feature Request: Packaged Workflows Sync With Live Repo Implementation","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"proposed","ttl_days":null,"created_at":"2026-06-03T20:15:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: Dependabot and Dependency Security Automation","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-105-dependabot-dependency-security-automation"},"next":{"title":"Feature Request: Comprehensive Workflow Machinery Code Review","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-107-comprehensive-workflow-machinery-code-review"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-106-packaged-workflows-sync-with-live-repo-implementation.md


const frontMatter = {
	lifecycle: 'proposed',
	ttl_days: null,
	created_at: new Date('2026-06-03T20:15:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Packaged Workflows Sync With Live Repo Implementation';

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
  "value": "Scope",
  "id": "scope",
  "level": 2
}, {
  "value": "In scope",
  "id": "in-scope",
  "level": 3
}, {
  "value": "Out of scope",
  "id": "out-of-scope",
  "level": 3
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 2
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies / Ordering",
  "id": "dependencies--ordering",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
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
        id: "feature-request-packaged-workflows-sync-with-live-repo-implementation",
        children: "Feature Request: Packaged Workflows Sync With Live Repo Implementation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-106", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-06-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (via agent — E02", ":S13", " packaged-workflow drift review)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH (Should Have — MoSCOW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.13.8+2"
      }), " — operator sign-off 2026-06-05; RW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.16.4+30"
      }), " / E02:S16", ":T04", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation",
        children: ["E02:S13", ":T08"]
      }), " — ✅ COMPLETE (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.13.8+2"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IPP:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T08-sync-packaged-workflows-live-spec",
        children: "IPP-E2S13T8"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kanban init:"
      }), " v0.2.13.8+1 (RW -k --art, 2026-06-03)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reconcile ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "packaged workflow artefacts"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/"
      }), " (YAML definitions, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow-registry.yaml"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "canonical-rw-steps.yaml"
      }), ", portable ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " excerpts, Claude command files) with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "live agent execution specification"
      }), " used in ai-dev-kit (root ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KB/.../vwmp/*-agent-execution.md"
      }), ", validators). Adopters copy the package; drift causes incorrect RW/UKW behavior, stale validator lists, and inconsistent step numbering."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Live workflow behavior evolves in repo-root agent specs and vwmp guides, while packaged YAML and adopter-facing excerpts lag behind."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Known drift (2026-06-03 audit):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Step 9 validators"
        }), " — Root ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_board_stamp_diff.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_kanban_state_icons.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_release_readiness.py"
        }), ", and related FR-097 / FR-092 gates; portable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        }), " list fewer validators."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "canonical-rw-steps.yaml"
          })
        }), " — Last refreshed 2026-03-09; step ordering predates current RW semantics (BR/FR update step, scoped Step 7 kanban, sub-steps 9.5 / 9.6 / 12.5)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate RW YAML"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/release-workflow.yaml"
        }), " (v2.1.0) diverges from registry SoT ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflows/release-workflow/release-workflow.yaml"
        }), " (v2.3.0); legacy default paths (", (0,jsx_runtime.jsx)(_components.code, {
          children: "confidentia/version.py"
        }), ", old kanban paths)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "workflow-registry.yaml"
          })
        }), " — Step counts disagree with YAML and vwmp guides (e.g. UKW, PKG-VERSION)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual-source parity gap"
        }), " — ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity",
          children: ["E05:S01", ":T66"]
        }), " closed RW guardrails (1b/1c/1d) but post-pass FR-097 additions were not ported to the portable excerpt."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact:"
      }), " Framework adopters who install/copy only the package receive outdated workflow definitions relative to ai-dev-kit maintainers' live spec, undermining RC readiness for the Workflow Management package (", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review",
        children: ["E02", ":S13"]
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "in-scope",
      children: "In scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Extend RW dual-source parity (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "rw-trigger-dual-source-parity.md"
          })
        }), ") to Step 9 FR-097 / FR-092 validators and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Refresh ", (0,jsx_runtime.jsx)(_components.code, {
          children: "canonical-rw-steps.yaml"
        }), " and align ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_canonical_steps.py"
        }), " expectations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consolidate authoritative ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        }), "; remove or deprecate stale flat copy; fix validator lists and placeholder paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Correct ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-registry.yaml"
        }), " metadata (minimum: RW, UKW, PKG-VERSION)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-ukw-trigger-section.md"
        }), " against root ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " UKW block."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document sync evidence (validator runs, delta log entry)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-scope",
      children: "Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Full E02:S13", ":T02", "–T06 RC review sequence (T08 implements sync; T05 may consume gap notes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
          children: "FR-050"
        }), " directory reorganization (pending intake) unless trivial dedup required for acceptance."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runtime validator behavior changes unless required to reflect corrected packaged docs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":R01"]
        }), " — Portable RW excerpt Step 9 validator list matches root ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (including FR-097 / FR-092 release-readiness validators)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":R02"]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), " Step 9 matches the same validator set and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " propagation rules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":R03"]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "canonical-rw-steps.yaml"
        }), " reflects live RW step order, names, and execution paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":R04"]
        }), " — Single authoritative packaged ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow.yaml"
        }), " aligned with live RW; no conflicting flat copy without deprecation notice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":R05"]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-registry.yaml"
        }), " step counts and descriptions match updated YAML for RW, UKW, and PKG-VERSION at minimum."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":R06"]
        }), " — UKW portable excerpt verified aligned with root ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " (or documented intentional deltas)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":R07"]
        }), " — Parity checklist and delta log updated in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-trigger-dual-source-parity.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":NF01"]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate-workflow-docs.py"
        }), " continues to pass (0 errors) after README touch-ups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":NF02"]
        }), " — Sync report captured in task doc or linked note (surfaces touched, before/after summary)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["FR-106", ":NF03"]
        }), " — Ongoing maintenance routed to ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
          children: ["E02:S16", ":T03"]
        }), " after delivery."]
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
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " All FR-106", ":R01", "–R07 delivered (mirror ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation",
          children: ["E02:S13", ":T08"]
        }), " AC1–AC7)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Bidirectional links: FR-106 ↔ E02:S13", ":T08", "; task cites FR-106 as source requirement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_canonical_steps.py"
        }), " reports zero warnings OR remaining warnings documented as intentional with follow-up ticket."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " FR-106 status updated to IMPLEMENTED on verified delivery via RW release attributing E02:S13", ":T08", "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies--ordering",
      children: "Dependencies / Ordering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E02:S13", ":T01"]
        }), " — expectations baseline (complete)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-056"
        }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S01", ":T56"]
        }), " — packaged README standardization (complete); T08 builds on doc quality, not replaces it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S01", ":T66"]
        }), " — RW dual-source guardrail parity (complete); T08 extends scope to Step 9 and YAML/registry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-049"
        }), " — canonical step list file exists but needs refresh as part of T08."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-050"
        }), " — optional follow-on for directory reorg."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-083 / IPW gate"
        }), " — implementation requires linked IPP and explicit user authorization before code/doc sync execution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T08-sync-packaged-workflows-with-live-repo-implementation",
          children: ["E02:S13", ":T08"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review",
          children: "story-013"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-056-standardize-packaged-workflow-documentation-and-instructions",
          children: "FR-056"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-049-canonical-rw-step-list-single-source-of-truth",
          children: "FR-049"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-050-workflows-directory-structure-reorganization",
          children: "FR-050"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T66-cursorrules-vs-packaged-rw-trigger-parity",
          children: ["E05:S01", ":T66"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
          children: ["E02:S16", ":T03"]
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