"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["97542"], {
52582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_policy_comparison_starborn_vs_ai_dev_kit_proposal_md_87e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-policy-comparison-starborn-vs-ai-dev-kit-proposal-md-87e.json
var site_docs_architecture_standards_and_adrs_policy_comparison_starborn_vs_ai_dev_kit_proposal_md_87e_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal","title":"Policy Comparison: Starborn Legacy vs AI Dev Kit — Proposal for Updates","description":"Status: Proposal","source":"@site/../docs/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-23T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Package Versioning Criteria (Guidance)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-versioning-criteria"},"next":{"title":"Policy Salience Schema Specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/policy-salience-schema"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/policy-comparison-starborn-vs-ai-dev-kit-proposal.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-23T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Policy Comparison: Starborn Legacy vs AI Dev Kit — Proposal for Updates';

const assets = {

};



const toc = [{
  "value": "1. Summary of Gaps and Recommendations",
  "id": "1-summary-of-gaps-and-recommendations",
  "level": 2
}, {
  "value": "2. Implementation Cycle (Spec + TDD) — Detail",
  "id": "2-implementation-cycle-spec--tdd--detail",
  "level": 2
}, {
  "value": "3. Changelog Language — Detail",
  "id": "3-changelog-language--detail",
  "level": 2
}, {
  "value": "4. Git Commit/Push Restrictions",
  "id": "4-git-commitpush-restrictions",
  "level": 2
}, {
  "value": "5. Perpetual Task — Update Task Document",
  "id": "5-perpetual-task--update-task-document",
  "level": 2
}, {
  "value": "6. Optional: IDE Pre-Commit Step (Step 7.5)",
  "id": "6-optional-ide-pre-commit-step-step-75",
  "level": 2
}, {
  "value": "7. Versioning and Doc-Init",
  "id": "7-versioning-and-doc-init",
  "level": 2
}, {
  "value": "8. Files to Touch (Implementation)",
  "id": "8-files-to-touch-implementation",
  "level": 2
}, {
  "value": "9. References",
  "id": "9-references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
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
        id: "policy-comparison-starborn-legacy-vs-ai-dev-kit--proposal-for-updates",
        children: "Policy Comparison: Starborn Legacy vs AI Dev Kit — Proposal for Updates"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Proposal", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Compare interrelated policies from Starborn Legacy with ai-dev-kit and propose updates.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Focus:"
      }), " Implementation cycle (spec + TDD), changelog language, git restrictions, perpetual tasks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-summary-of-gaps-and-recommendations",
      children: "1. Summary of Gaps and Recommendations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Starborn"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "AI Dev Kit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recommendation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Git commit/push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit top-of-file prohibition (FORBIDDEN/ALLOWED, when to use RW)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short \"Git Workflow Restrictions\" section"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional: add brief top-of-file reminder; keep existing section."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Changelog language"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In .cursorrules: no \"Fixed\" until user verified; \"Attempted fix\" required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In RW agent guide only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Add"
            }), " short changelog-language reminder to .cursorrules so agents see it."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation cycle (TDD)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mandatory 5-step cycle in .cursorrules + IMPLEMENTATION_CYCLE_SOP.md + Kanban refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in .cursorrules; TDD mentioned in tasks/docs only"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Add"
            }), " adoptable Implementation Cycle section to .cursorrules; add framework SoP for adopters."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IDE pre-commit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7.5: fix IDE-flagged errors/warnings before commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No equivalent step in .cursorrules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional: add \"Check IDE-flagged problems before commit\" as recommended practice or optional step."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Perpetual tasks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task document MUST be updated with context (what changed, why, version) each run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perpetual task range and behaviour documented; no \"update task doc\" requirement"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Add"
            }), " perpetual-task update requirement to Kanban Governance Policy."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BUILD=0 / COMPLETE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BUILD=0: task stays in MoSCOW; BUILD≥1: move to COMPLETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 7 describes story/epic update; BUILD=0 behaviour in versioning policy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already aligned; no change needed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-implementation-cycle-spec--tdd--detail",
      children: "2. Implementation Cycle (Spec + TDD) — Detail"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Starborn defines a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mandatory"
      }), " implementation cycle in three places:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: ".cursorrules"
        }), " — \"MANDATORY IMPLEMENTATION CYCLE - TDD COMPLIANCE\" with 5 steps and a pre-implementation checklist."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "KANBAN_GOVERNANCE.md"
        }), " — \"Implementation Cycle (MANDATORY)\" under Task-Level Requirements; references SoP and .cursorrules."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "docs/IMPLEMENTATION_CYCLE_SOP.md"
        }), " — Full SoP: Requirement doc → Task creation → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification & Test Creation (BLOCKING)"
        }), " → Implementation (Red-Green-Refactor) → RW."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocking rule:"
      }), " Step 3 (Specification & Test Creation) is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BLOCKING"
      }), ". Implementation cannot proceed without failing tests (Red phase) in place."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Proposal for ai-dev-kit:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: ".cursorrules:"
        }), " Add a new section \"Implementation Cycle (Adoptable Pattern)\" that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Describes the same 5 steps (Requirement doc → Task creation → Spec & tests (blocking) → Implementation → RW)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "States that Step 3 (Spec & Test Creation) is blocking when the pattern is adopted."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["References framework SoP for projects that adopt it (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/docs/.../implementation-cycle-sop.md"
            }), " or equivalent)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Frames it as the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "recommended/adoptable"
            }), " pattern for projects using this framework (not necessarily mandatory for the framework repo itself, but required for adopters who choose it)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework package:"
        }), " Add an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation-cycle-sop.md"
        }), " (or equivalent) under workflow mgt (or shared docs) so installing projects get the same SoP. Content can be framework-agnostic (e.g. \"test file\" not \"test_file_test.dart\")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kanban Governance Policy:"
        }), " Add a short \"Implementation Cycle (optional/adoptable)\" subsection that references the SoP and .cursorrules, and states that projects may require this cycle for all task implementations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-changelog-language--detail",
      children: "3. Changelog Language — Detail"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starborn .cursorrules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FORBIDDEN:"
        }), " \"Fixed\", \"Resolved\", \"Completed\" until user has verified."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REQUIRED:"
        }), " \"Attempted fix\", \"Attempted resolution\", \"Change implemented\" until verified."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Section names: \"### Attempted Fixes\" for unverified; \"### Fixed\" only after verification."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI Dev Kit already has this in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "release-workflow-agent-execution.md"
      }), " (validation, commit message rules, etc.) but not in .cursorrules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proposal:"
      }), " Add a short \"Changelog language — no false claims\" block to .cursorrules (e.g. under or near Release Workflow) so agents see it without opening the long RW doc. Point to the RW agent guide for full validation rules."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-git-commitpush-restrictions",
      children: "4. Git Commit/Push Restrictions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starborn: Very prominent \"ABSOLUTE PROHIBITION\" at top of .cursorrules with FORBIDDEN/ALLOWED lists and \"when to use RW\"."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI Dev Kit: \"Git Workflow Restrictions\" section with strict rules and prohibited operations; no top-of-file callout."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proposal:"
      }), " Optionally add a brief top-of-file reminder (e.g. \"Commit/push only via RW\") and keep the existing Git Workflow Restrictions section as the canonical list. Low priority if we want to avoid .cursorrules churn."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-perpetual-task--update-task-document",
      children: "5. Perpetual Task — Update Task Document"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starborn KANBAN_GOVERNANCE.md:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When using a perpetual task, the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "task document itself MUST be updated"
        }), " with: what was changed, why, and the version of the release. This ensures forensic traceability for each run."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proposal:"
      }), " In ai-dev-kit's Kanban Governance Policy, in the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Perpetual Task"
      }), " subsection, add a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required"
      }), " bullet: for each run of a perpetual task, add a brief record in the task document (or designated subsection) describing what changed, why, and the release version. Reference forensic traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-optional-ide-pre-commit-step-step-75",
      children: "6. Optional: IDE Pre-Commit Step (Step 7.5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starborn: Step 7.5 — \"Check for and Address IDE-Flagged Problems\" before commit (fix errors, warnings, info-level)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proposal:"
      }), " Mention as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recommended practice"
      }), " in .cursorrules (e.g. \"Before triggering RW, address IDE-flagged errors/warnings where possible\") rather than adding a new numbered RW step, to avoid renumbering and workflow drift. Alternatively, add as optional \"Step 9.5\" in the RW description if we want it as a formal step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-versioning-and-doc-init",
      children: "7. Versioning and Doc-Init"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Starborn VERSIONING_POLICY includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Doc-init build (+0) for new E/S/T docs; abstract space; task document requirements; S00 repository stories."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI Dev Kit already has doc-init, abstract space, and task document requirements in versioning policy and RW agent guide. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "No change proposed"
      }), " for versioning schema or doc-init."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-files-to-touch-implementation",
      children: "8. Files to Touch (Implementation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: ".cursorrules"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add \"Changelog language — no false claims\" reminder (concise)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add \"Implementation Cycle (Adoptable Pattern)\" section with 5 steps, blocking Step 3, and reference to framework SoP."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optionally: brief git reminder at top; optional IDE pre-commit sentence."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "In Perpetual Task section: add requirement to update task document with context (what changed, why, version) for each run."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "New file (framework):"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework-agnostic Implementation Cycle SoP (language-agnostic test file names, \"Run tests\" not \"flutter test\") so adopters can use it as-is or adapt."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kanban Governance Policy"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add short subsection or bullet on \"Implementation Cycle (adoptable)\" referencing .cursorrules and the new SoP."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-references",
      children: "9. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Starborn: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/VERSIONING_POLICY.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/KANBAN_GOVERNANCE.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/release-workflow-agent-execution.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/IMPLEMENTATION_CYCLE_SOP.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AI Dev Kit: ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/.../release-workflow-agent-execution.md"
        }), "."]
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