"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["57273"], {
59560(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_097_rw_agent_reuses_tagged_build_and_force_moves_release_tags_md_b1c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags-md-b1c.json
var site_docs_project_management_kanban_fr_br_br_097_rw_agent_reuses_tagged_build_and_force_moves_release_tags_md_b1c_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags","title":"Bug Report BR-097: RW agents reuse tagged BUILD and force-move release tags instead of incrementing","description":"Code: BR-097","source":"@site/../docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T21:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-096: CodeQL alert — incomplete URL substring sanitization in portal identity test","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-096-codeql-incomplete-url-substring-sanitization"},"next":{"title":"Feature Request: README Template Based on Best-README-Template","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-002-update-been-there-readme"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T21:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-097: RW agents reuse tagged BUILD and force-move release tags instead of incrementing';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Observed Behavior (2026-06-05, E05:S09)",
  "id": "observed-behavior-2026-06-05-e05s09",
  "level": 2
}, {
  "value": "Prior remediation attempts (why they failed)",
  "id": "prior-remediation-attempts-why-they-failed",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
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
        id: "bug-report-br-097-rw-agents-reuse-tagged-build-and-force-move-release-tags-instead-of-incrementing",
        children: "Bug Report BR-097: RW agents reuse tagged BUILD and force-move release tags instead of incrementing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-097", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH — forensic corruption (version ↔ commit ↔ tag ↔ changelog divergence), wasted agent tokens, operator trust erosion. Guardrails that catch late do not prevent the failure mode.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.24+3 (implemented — E02:S01", ":T24", "; +3 task_touch collision guards)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097",
        children: ["E02:S01", ":T24"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trigger incident:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093",
        children: ["E05:S09", ":T14"]
      }), " Wave 2 — agent ran ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E05:S09:T14 --art --doc-policy-zero"
      }), " on already-tagged ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.9.14+2"
      }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git tag -f"
      }), " when push failed. Corrective release: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.5.9.14+3"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "e31dd42"
      }), "). Partial guard shipped in +3 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_tagged_build_collision"
      }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "agent contract and Step 2 determinism remain open"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Release Workflow agents repeatedly treat ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“docs-only / task already COMPLETE / verification wave”"
      }), " as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“do not increment BUILD”"
      }), ", reusing an internal version that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "already has release tags"
      }), ", then ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "force-moving tags"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "git tag -f"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git push -f"
      }), ") when tag push fails — instead of publishing a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new BUILD"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "HEAD_BUILD + 1"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This violates the forensic contract: ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["one ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " ↔ one commit ↔ one changelog archive ↔ one tag set"]
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Catching the mistake at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 9"
      }), " (after changelogs, kanban, and large doc trees are edited) wastes time and LLM tokens. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prevention at decision time"
      }), " is required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Same E:S", ":T", ", new release"]
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD = HEAD_BUILD + 1"
        }), " (default; no agent discretion)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--doc-policy-zero"
          })
        }), " only when ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "user typed it"
        }), " in the RW trigger ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "and"
        }), " no git tag exists for that BUILD."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag push collision"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RW ABORTED"
        }), "; operator bumps BUILD and re-runs — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "never"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -f"
        }), " / force-push release tags."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), " never prescribes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), " for post-ship verification / FBU closure waves."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), " uses a deterministic resolver script before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " is written."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "observed-behavior-2026-06-05-e05s09",
      children: ["Observed Behavior (2026-06-05, E05:S09", ":T14", ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Commit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Claimed version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0ebf2cf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.14+2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 1 functional (ADR-017 CI dedup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a3ee689"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.14+2"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "again"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 2 FBU closure (wrong)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "e31dd42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.14+3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Corrective release + partial validator guard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agent bypassed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver_converter.create_rw_tags"
      }), " collision raise with manual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git tag -f"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prior-remediation-attempts-why-they-failed",
      children: "Prior remediation attempts (why they failed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Work"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Collision class addressed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why it failed for this behaviour"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping",
              children: "FR-045"
            }), " / ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
              children: "FR-046"
            }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode",
              children: ["E03:S02", ":T12"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-touch SemVer mapping"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Registry PATCH"
            }), " collisions (same SemVer for different internal keys)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Does not govern ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "internal BUILD reuse"
            }), " or agent tag force-move. Different failure class."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often",
              children: "BR-061"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counter/finalize hygiene"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SemVer counter drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed mapping/finalize semantics; not agent Step 2 BUILD decision."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix",
              children: "BR-073"
            }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073",
              children: ["E02:S01", ":T20"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry retrospective patch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Historical duplicate SemVer rows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-time data fix; no RW agent behaviour change."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07",
              children: "semver-tag-collision-incident-2026-03-07"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incident log + task-touch adoption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Registry mode mapping"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Documented ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PATCH"
            }), " collision root cause; predates forensic BUILD reuse class."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero",
              children: "BR-067"
            }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
              children: ["E02:S16", ":T03"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--doc-policy-zero"
            }), " for doc-init +0"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opposite problem (wanted +0, got +1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Gave agents a flag misread as ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "“docs-only → don’t bump BUILD.”"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "policy_zero_ok"
            }), " wired only for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BUILD=0"
            }), "; BUILD≥1 ignores flag but agents still pass it. Precedent ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.16.3%2B3.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHANGELOG_v0.2.16.3+3.md"
              })
            }), " was case-by-case prose, not enforced until +3."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py",
              children: "BR-075"
            }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075",
              children: ["E02:S01", ":T22"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Perpetual BUILD increment in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version.py"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perpetual task BUILD drift"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "validate_perpetual_build_increment"
              }), " only runs for perpetual tasks."]
            }), " Normal delivery tasks (e.g. E05:S09", ":T14", ") had no hard same-task increment enforcement."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-010-rw-doc-init-detection-bug-story-task-docs-batch-creation",
              children: "BR-010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doc-init detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incorrect BUILD=0 when task doc exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opposite failure mode; does not block BUILD reuse when BUILD≥1."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures",
              children: "BR-074"
            }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074",
              children: ["E02:S01", ":T21"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changelog archive immutability"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Overwritten ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_v*.md"
            }), " on BUILD>1"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fixed archive delete/typo symptoms; did not fix ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BUILD increment decision"
            }), " or tag immutability."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_converter.create_rw_tags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 11 collision raise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SemVer tag exists at boundary"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Agent ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "bypassed"
            }), " with manual ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git tag -f"
            }), ". No RW prohibition on force-tag recovery."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.9.14%2B3.md",
              children: ["E05:S09", ":T14", " +3"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_tagged_build_collision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tagged BUILD reuse at Step 9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Too late"
            }), " (post kanban/changelog edits). Does not block ", (0,jsx_runtime.jsx)(_components.code, {
              children: "git tag -f"
            }), ". Does not fix IPW/agent contract."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate",
              children: "FR-094"
            }), " / ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094",
              children: ["E02:S16", ":T09"]
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW state transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP quality"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No rule forbidding ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--doc-policy-zero"
            }), " in verification-wave RW steps; IPP prescribed bad command."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Versioning policy force-tag guidance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dev-kit-versioning-policy.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tag/commit alignment"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Suggests force-pushing tags to “correct” commit — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "reinforces overwrite"
            }), " instead of new BUILD."]
          })]
        })]
      })]
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
          children: "AC1 — Agent FORBIDDEN contract"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AGENTS.md"
        }), ": no BUILD reuse when tag exists; no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -f"
        }), " on release tags; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), " only if user typed it. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " v0.2.1.24+1 — §C.2 FORBIDDEN blocks; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "P-RW-BUILD"
        }), " in AGENTS.md."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2 — Step 2 deterministic resolver"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "resolve_rw_build.py"
        }), " or equivalent): same E:S", ":T", " + tagged HEAD BUILD → next BUILD = HEAD+1 before any file edits. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resolve_rw_build.py"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_resolve_rw_build.py"
        }), " T1–T3."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3 — IPW template"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PLAN_DOC_TEMPLATE.md"
        }), "): verification/FBU waves prescribe ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E:S:T --art"
        }), " only; never ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), " post-ship. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " ipw.md RW prescription rules; PLAN_DOC_TEMPLATE §4 note."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4 — Tag immutability gate"
        }), " in RW Step 11/12: block session that used ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git tag -f"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-f"
        }), " push on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v*"
        }), " release tags. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_release_tag_immutability.py"
        }), " Step 9; Step 11 FORBIDDEN in rw.md."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5 — Recovery procedure"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/RECOVERY_PROCEDURE.md"
        }), "): tag collision → bump BUILD, re-RW; never force-tag. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " RECOVERY_PROCEDURE §4.3; dev-kit-versioning-policy §1:1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6 — Regression tests"
        }), " for resolver + tag-immutability validator + agent doc parity check. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " 10 pytest cases green; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-trigger-dual-source-parity.md"
        }), " BR-097 checklist row."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC7 — De-emphasize or narrow"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--doc-policy-zero"
        }), " in RW agent docs to doc-init (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " / BUILD=0) contexts. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " cheatsheet row; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " BUILD≥1 rejection; resolver BUILD≥1 block."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC8 — task_touch SemVer collision class"
        }), " (v0.2.1.24+3 follow-on): registry finalize before SemVer writes; Step 9 release contract; strategy-aware recovery (not BUILD-only for SemVer primary tag). ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "finalize_rw_semver_registry.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_task_touch_release_contract.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tag_collision_recovery.py"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "resolve_rw_build.py"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "art_tagged_follow_on"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero",
          children: "BR-067"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py",
          children: "BR-075"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures",
          children: "BR-074"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.9.14%2B3.md",
          children: ["E05:S09", ":T14", " +3 changelog"]
        }), " — partial guard + forensic remediation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
          children: "workflow-initiation-cheatsheet.md"
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