"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["5420"], {
85802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_061_semver_task_touch_counter_increments_too_often_md_bd2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-061-semver-task-touch-counter-increments-too-often-md-bd2.json
var site_docs_project_management_kanban_fr_br_br_061_semver_task_touch_counter_increments_too_often_md_bd2_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often","title":"Bug Report BR-061 — Task-touch SemVer PATCH bumps on every converter run","description":"Status: FIXED ✅","source":"@site/../docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-02T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-061 — RW explicit E:S:T still fails Step 1 when version.py epic ≠ branch epic","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment"},"next":{"title":"Bug Report BR-062 - RW Step 7 leaves completed tasks on in-progress kboard","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-02T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-061 — Task-touch SemVer PATCH bumps on every converter run';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Current Fault (hypothesis tied to code)",
  "id": "current-fault-hypothesis-tied-to-code",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Reproduction (conceptual)",
  "id": "reproduction-conceptual",
  "level": 2
}, {
  "value": "Root Cause Hypothesis",
  "id": "root-cause-hypothesis",
  "level": 2
}, {
  "value": "Proposed Resolution (investigation → fix)",
  "id": "proposed-resolution-investigation--fix",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}, {
  "value": "Recurrence context (2026-04-13)",
  "id": "recurrence-context-2026-04-13",
  "level": 2
}, {
  "value": "Collision invariants (reconfirmed)",
  "id": "collision-invariants-reconfirmed",
  "level": 3
}, {
  "value": "Resolution note",
  "id": "resolution-note",
  "level": 2
}, {
  "value": "Regression hardening outcome (2026-04-13)",
  "id": "regression-hardening-outcome-2026-04-13",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-061--task-touch-semver-patch-bumps-on-every-converter-run",
        children: "Bug Report BR-061 — Task-touch SemVer PATCH bumps on every converter run"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " FIXED ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-02", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 — wave 3 closure ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.3.2.12+5"
      }), " (counter ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "903"
      }), ", read-only path stable). See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/semver-verification-evidence-E03S02T12-wave3",
        children: "evidence"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.3.2.12+5\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-061", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode",
        children: ["E03:S02", ":T12"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope note:"
      }), " This tracks ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["versioning / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " / RW usage"]
      }), ", not FR/BR intake mechanics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver_mapping_strategy: task_touch"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ", the outward ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SemVer PATCH"
      }), " (backed by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_touch_counter"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver-registry.yaml"
      }), ") appears to advance ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "far too often"
      }), ". Maintainers see ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rapid PATCH inflation"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repeated SemVer strings"
      }), " competing with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git tags"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin"
      }), ", and fragile workarounds (extra internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+BUILD"
      }), " bumps until an unused ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v\\{semver\\}"
      }), " exists)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The failure mode smells like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“the converter mutates registry state every time it runs”"
      }), ", not ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“once per completed release.”"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "current-fault-hypothesis-tied-to-code",
      children: "Current Fault (hypothesis tied to code)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/version/semver_converter.py"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "convert_internal_to_semver_task_touch"
        })
      }), " sets PATCH by calling ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "increment_task_touch_counter(rc)"
        })
      }), ", which ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["loads the registry, increments ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), ", and saves"]
      }), " — i.e. a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "persistent side effect on every conversion"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The module docstring for that path says PATCH increments ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "once per RW release"
      }), ", but the implementation couples ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“compute SemVer for this internal version”"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "“increase the global counter”"
      }), " on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "every"
      }), " call to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "convert_version_string(..., task_touch)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Therefore ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any"
      }), " extra invocation burns a PATCH level, for example:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Running ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py <internal>"
        }), " more than once for the same release (README step + tag step + agent check + CI)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preview or validation code paths that call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convert_version_string"
        }), " without meaning “this release is finalized.”"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Retries after a failed push (same internal version → new PATCH → new tag name → mismatch with docs from the first attempt)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idempotency (per release):"
        }), " For a given ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "intended release"
        }), " (internal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " that is committed as the version of record), deriving SemVer should yield the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same"
        }), " SemVer until the release boundary changes — or increments should be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explicitly"
        }), " tied to a single RW “finalize” step, not to every read/convert."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registry mutations"
        }), " should not occur from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "read-only"
        }), " “what is SemVer for X?” calls."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Alignment with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Git tags:"
        }), " PUSH of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v\\{semver\\}"
        }), " should not routinely fail because PATCH leaped ahead due to duplicate converter runs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operator confusion:"
        }), " SemVer drifts ahead of intuitive “one bump per release.”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag collisions / ambiguity:"
        }), " Multiple SemVer tags or failed pushes when names already exist on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "origin"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Erosion of trust"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), " as a stable mapping for automation and GitHub Releases."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction-conceptual",
      children: "Reproduction (conceptual)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mapping_strategy: task_touch"
        }), " and note current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python semver_converter.py 0.6.6.57+1"
        }), " (same internal version) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "twice"
        }), " without changing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch_counter"
        }), " increased ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "twice"
        }), "; PATCH in output advances each time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(Exact numbers depend on repo state; the structural bug is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "side effect on convert"
      }), ".)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause-hypothesis",
      children: "Root Cause Hypothesis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Primary:"
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "convert_version_string"
        }), " / task-touch path incorrectly uses “increment counter” as part of pure conversion"]
      }), " instead of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "release-finalization"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "idempotent map (internal → semver)"
      }), " operation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Secondary:"
      }), " Call sites (RW agent steps, README, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_github_release.py"
      }), ", tests) may invoke the converter ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multiple times per release"
      }), ", amplifying the bug."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution-investigation--fix",
      children: "Proposed Resolution (investigation → fix)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Confirm"
        }), " frequency of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convert_version_string(..., task_touch)"
        }), " calls in a single RW and in CI."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design"
        }), " one of:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Idempotent mapping:"
            }), " PATCH derived from stable inputs (e.g. counter advances only when internal ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(RC,EPIC,STORY,TASK)"
            }), " or full internal version ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "first"
            }), " appears in registry history), ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Explicit increment:"
            }), " Only bump ", (0,jsx_runtime.jsx)(_components.code, {
              children: "task_touch_counter"
            }), " from a dedicated RW step after version file is final (single call site), with all other paths ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "read-only"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add tests"
        }), " that running conversion ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "N times"
        }), " for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same"
        }), " release does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " advance PATCH ", (0,jsx_runtime.jsx)(_components.code, {
          children: "N"
        }), " times."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document"
        }), " task_touch semantics in versioning policy / RW guide: when registry mutates vs when it only reads."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convert_internal_to_semver_task_touch"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "increment_task_touch_counter"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "semver-registry.yaml"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mapping_strategy: task_touch"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping",
          children: "FR-045"
        }), " (ADR-002 mapping intent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode",
          children: "FR-046"
        }), " (RW SemVer tag behaviour)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recurrence-context-2026-04-13",
      children: "Recurrence context (2026-04-13)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Although the original converter mutation bug was fixed, a new collision pattern was observed in live RW runs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "distinct internal releases can still converge on already-existing SemVer tags at RW tag/release boundaries;"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 11 currently tolerates existing SemVer tags in some paths instead of hard-failing with collision diagnostics;"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Step 12.5 may then update an existing GitHub release for that reused SemVer tag."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This reopens BR-061 as a regression-hardening effort focused on injective SemVer mapping + boundary enforcement."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "collision-invariants-reconfirmed",
      children: "Collision invariants (reconfirmed)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Finalized internal release key (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), ") is mapped once and remains idempotent on replay."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SemVer release tag core (", (0,jsx_runtime.jsx)(_components.code, {
          children: "vMAJOR.MINOR.PATCH"
        }), ") must not be reused by a different internal release lineage at RW boundary."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW must hard-fail with deterministic diagnostics when SemVer ownership is ambiguous or already occupied by a different lineage."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolution-note",
      children: "Resolution note"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implemented in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E03:S02:T12"
      }), " and released as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.3.2.12+2"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "task-touch conversion is read-only by default;"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "state mutation moved to explicit finalize semantics;"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mapping-history idempotency prevents repeated conversion calls from burning PATCH values;"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "regression tests cover read-only non-mutation, finalize idempotency, and FR-046 collision scenarios."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "regression-hardening-outcome-2026-04-13",
      children: "Regression hardening outcome (2026-04-13)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Attempted fix implemented and released as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.3.2.12+3"
      }), " (SemVer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.733+3"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["finalize now enforces injective ownership (", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver -> internal_version"
        }), ") and rejects collisions deterministically;"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW Step 11 boundary now hard-fails when SemVer primary tag exists without matching internal-tag lineage;"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Step 12.5 release creation now rejects explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--semver-tag"
        }), " overrides that disagree with canonical mapping for the internal version."]
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