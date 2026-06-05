"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["87891"], {
30301(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_epics_epic_02_story_01_rw_agent_execution_and_docs_t_24_rw_build_increment_enforcement_and_tag_immutability_br_097_md_3c8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-epics-epic-02-story-01-rw-agent-execution-and-docs-t-24-rw-build-increment-enforcement-and-tag-immutability-br-097-md-3c8.json
var site_docs_project_management_kanban_epics_epic_02_story_01_rw_agent_execution_and_docs_t_24_rw_build_increment_enforcement_and_tag_immutability_br_097_md_3c8_namespaceObject = JSON.parse('{"id":"project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097","title":"E02:S01:T24 — RW BUILD increment enforcement and release-tag immutability (BR-097)","description":"Task IDS01:T24","source":"@site/../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md","sourceDirName":"project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs","slug":"/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic 2, Story 1, Task 23: Tool-agnostic workflow step tracking + persisted run logs","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs"},"next":{"title":"Story 001 – RW Agent Execution & Docs","permalink":"/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E02:S01 — RW BUILD increment enforcement and release-tag immutability (BR-097)';

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
  "value": "Prior work inventory — why each failed",
  "id": "prior-work-inventory--why-each-failed",
  "level": 2
}, {
  "value": "A. SemVer registry / task-touch (different collision class)",
  "id": "a-semver-registry--task-touch-different-collision-class",
  "level": 3
}, {
  "value": "B. BUILD policy and validators (wrong scope or too late)",
  "id": "b-build-policy-and-validators-wrong-scope-or-too-late",
  "level": 3
}, {
  "value": "C. Changelog / tag boundary (symptoms, bypassable)",
  "id": "c-changelog--tag-boundary-symptoms-bypassable",
  "level": 3
}, {
  "value": "D. Planning layer (prescribed bad RW)",
  "id": "d-planning-layer-prescribed-bad-rw",
  "level": 3
}, {
  "value": "Deliverable",
  "id": "deliverable",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Out of scope",
  "id": "out-of-scope",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e02s01--rw-build-increment-enforcement-and-release-tag-immutability-br-097",
        children: ["E02:S01", ":T24", " — RW BUILD increment enforcement and release-tag immutability (BR-097)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task ID:"
      }), " E02:S01", ":T24", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✅ COMPLETE (v0.2.1.24+3)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Effort:"
      }), " Medium", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (RW ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.1.24+3"
      }), " — task_touch registry finalize + release contract + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--art"
      }), " cross-task BUILD)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Anchor:"
      }), " v0.2.1.24+3", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " E02S01T24"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Publication Status: NOT_APPLICABLE"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stop RW agents from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reusing tagged BUILD numbers"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "force-moving release tags"
      }), " when a follow-on release is needed. Prior guardrails (BR-067, BR-075, task-touch, changelog immutability) addressed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adjacent"
      }), " collision classes or symptoms but ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "did not prevent"
      }), " the agent decision chain that caused ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093",
        children: ["E05:S09", ":T14"]
      }), " forensic damage (2026-06-05)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal:"
      }), " Prevent at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 decision time"
      }), ", not Step 9 recovery."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags",
          children: "BR-097"
        }), " — problem statement, prior-work failure analysis, acceptance criteria"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability",
          children: "IPP-E2S1T24"
        }), " — IPW implementation plan (Sections 1–7)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.9.14%2B3.md",
          children: "CHANGELOG_v0.5.9.14+3"
        }), " — partial ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_tagged_build_collision"
        }), " (Step 9 only)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " · ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), " · ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " · ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/validation/validate_version_bump.py"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/RECOVERY_PROCEDURE.md"
        }), " · ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/ROLLBACK_CONTRACT.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prior-work-inventory--why-each-failed",
      children: "Prior work inventory — why each failed"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-semver-registry--task-touch-different-collision-class",
      children: "A. SemVer registry / task-touch (different collision class)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping",
              children: "FR-045"
            }), " · ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
              children: "FR-046"
            }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode",
              children: ["E03:S02", ":T12"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Injective SemVer per internal release (PATCH collisions)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fixes ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "mapping"
            }), " when different internal keys collided on same SemVer. Does not stop agents from publishing ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "two commits"
            }), " under ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "one internal BUILD"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
              children: "BR-061"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counter/finalize discipline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation hygiene; not RW Step 2 agent behaviour."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix",
              children: "BR-073"
            }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073",
              children: ["E02:S01", ":T20"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry data repair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Retrospective; no forward agent contract."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07",
              children: "semver-tag-collision-incident-2026-03-07"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Document registry-mode root cause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predates forensic BUILD-reuse class."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-build-policy-and-validators-wrong-scope-or-too-late",
      children: "B. BUILD policy and validators (wrong scope or too late)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero",
              children: "BR-067"
            }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
              children: ["E02:S16", ":T03"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allow BUILD +0 for doc-init / explicit policy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Agents misread as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "“docs-only wave → don’t bump.”"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "policy_zero_ok"
            }), " only applies when ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BUILD=0"
            }), " in validator; BUILD≥1 path unaffected but agents still pass flag. Precedent in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_v0.2.16.3+3"
            }), " was prose-only until +3 guard."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py",
              children: "BR-075"
            }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075",
              children: ["E02:S01", ":T22"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perpetual same-task BUILD must increment"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "validate_perpetual_build_increment"
              }), " skips non-perpetual tasks."]
            }), " E05:S09", ":T14", " is a normal delivery task."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation",
              children: "BR-010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block incorrect BUILD=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opposite failure mode (BUILD=0 vs BUILD=1)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "validate_tagged_build_collision"
            }), " (+3)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block tagged BUILD reuse"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Runs at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Step 9"
            }), " — after expensive agent edits. Does not block ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git tag -f"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-changelog--tag-boundary-symptoms-bypassable",
      children: "C. Changelog / tag boundary (symptoms, bypassable)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures",
              children: "BR-074"
            }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074",
              children: ["E02:S01", ":T21"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable per-BUILD archive changelogs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed delete/typo; agent still chose wrong BUILD first."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_converter.create_rw_tags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail on SemVer collision at tag create"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Agent used ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["manual ", (0,jsx_runtime.jsx)(_components.code, {
                children: "git tag -f"
              })]
            }), " to bypass."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning policy force-tag note"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Align tag to commit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Encourages ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "overwrite"
            }), " instead of ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "new BUILD"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "d-planning-layer-prescribed-bad-rw",
      children: "D. Planning layer (prescribed bad RW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gap"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
              children: "FR-094"
            }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094",
              children: ["E02:S16", ":T09"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP quality / state transitions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication",
              children: "IPP-E5S9T14"
            }), " §8.5 prescribed ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW … --doc-policy-zero"
            }), " for Wave 2 — baked in the failure."]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deliverable",
      children: "Deliverable"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent FORBIDDEN contract"
        }), " — RW/IPW/AGENTS: BUILD+1 default; no tag ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-f"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), " only if user-triggered and untagged."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "resolve_rw_build.py"
          })
        }), " (or integrate into Step 2) — deterministic next BUILD before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " write."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag immutability validator"
        }), " — RW Step 11/12 blocks force-tag recovery paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW template update"
        }), " — verification/FBU waves: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E:S:T --art"
        }), " only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recovery doc"
        }), " — single path: bump BUILD, re-RW; never force-tag."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tests + doc parity"
        }), " — regression suite; dual-source RW trigger parity checklist."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "push_rw_release.py"
          })
        }), " (v0.2.1.24+2) — Step 12 pushes release-scoped tags only; ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "git push --tags"
          }), " forbidden"]
        }), " (stale local SemVer tag false failures)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "task_touch collision guards"
        }), " (v0.2.1.24+3) — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finalize_rw_semver_registry.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_task_touch_release_contract.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tag_collision_recovery.py"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resolve_rw_build.py"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), " cross-task tagged follow-on."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mirror ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags#acceptance-criteria",
        children: "BR-097 AC1–AC7"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "out-of-scope",
      children: "Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rewriting historical tags (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.9.14+2"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0ebf2cf"
        }), ") — separate operator decision."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Registry/task-touch mapping changes (E03:S02", ":T12", " complete)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perpetual-task ordering (BR-075 closed)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability",
          children: "IPP-E2S1T24"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-019-rw-build-increment-and-tag-immutability",
          children: "ADR-019"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags",
          children: "BR-097"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093",
          children: ["E05:S09", ":T14"]
        }), " — trigger incident"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs",
          children: "Story 001 – RW Agent Execution & Docs"
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