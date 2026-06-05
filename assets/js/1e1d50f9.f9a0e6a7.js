"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["37099"], {
12864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_075_rw_perpetual_task_build_not_reflected_in_version_py_md_1e1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-075-rw-perpetual-task-build-not-reflected-in-version-py-md-1e1.json
var site_docs_project_management_kanban_fr_br_br_075_rw_perpetual_task_build_not_reflected_in_version_py_md_1e1_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py","title":"Bug Report BR-075: RW perpetual-task releases may not persist BUILD increment in version.py","description":"Status: RESOLVED","source":"@site/../docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-074: RW release commit includes test artifacts, deletes prior-build changelog, and emits version-typo in detailed changelog","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures"},"next":{"title":"Bug Report BR-076: E7:S00 must not host concrete tasks (S00 abstract-only)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-075: RW perpetual-task releases may not persist BUILD increment in version.py';

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
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 2
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Reproduction (suspected)",
  "id": "reproduction-suspected",
  "level": 2
}, {
  "value": "Proposed Resolution",
  "id": "proposed-resolution",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
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
    h1: "h1",
    h2: "h2",
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
        id: "bug-report-br-075-rw-perpetual-task-releases-may-not-persist-build-increment-in-versionpy",
        children: ["Bug Report BR-075: RW perpetual-task releases may not persist BUILD increment in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " LOW", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " LOW — forensic drift risk between board/changelog version markers and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version.py"
      }), " during perpetual-task RW (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k"
      }), ", UKW/CMW follow-up).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-26 (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.2.1.22+1"
      }), " — intake RW ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-k"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--art"
      }), ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.22+1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-075"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075",
        children: ["E02:S01", ":T22"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When Release Workflow (RW) targets a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "perpetual maintenance"
      }), " task (for example ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E02:S16", ":T04"]
      }), " UKW/kanban lane, ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E02:S16", ":T03"]
      }), " workflow maintenance, ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E06:S06", ":T101"]
      }), " UKW wiring in other projects), operators expect each release to advance ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        })
      }), " in the configured ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        })
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/ai_dev_kit/version.py"
      }), " in this repo) while keeping ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "E/S/T"
      }), " anchored on the perpetual task."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Observed failure mode (2026-05-26, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW -k E02:S16:T04 --art"
      }), "): kanban surfaces and release narrative advanced to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.2.16.4+12"
        })
      }), " while ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " appeared unchanged"]
      }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "+11"
        })
      }), " during the run—suggesting Step 7 / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban_init"
      }), " board updates ran ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "without"
      }), " a reliable Step 2 version-file write. The eventual commit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "b56f521e0"
        })
      }), " did include ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD = 12"
        })
      }), ", so this may be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ordering/visibility"
      }), " as well as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "skip"
      }), " risk; both undermine trust in perpetual-task RW."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Related hazard: agent guidance still references legacy ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        })
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursor/skills/version-bump/SKILL.md"
      }), ", increasing wrong-file edits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For every RW (including ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        })
      }), ") against a perpetual task:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2 (Bump Version)"
        }), " MUST run ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before any other release-scope file modifications"
        }), " and MUST set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD := prior_build + 1"
        }), " (same E/S/T) in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "VERSION_STRING"
          }), " / trailing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "# Current:"
          }), " comment"]
        }), " MUST match the bumped tuple."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Step 7 / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " MUST read the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "post-Step-2"
        }), " version from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), ", not invent a target version in isolation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Step 9 validators MUST ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fail closed"
        }), " if staged ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " BUILD is unchanged vs pre-RW baseline for a same-task perpetual release (unless explicit doc-only zero-build policy applies per BR-067)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["User invoked perpetual kanban RW: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k E02:S16:T04 --art"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Board metadata and changelogs referenced ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "v0.2.16.4+12"
          })
        }), " while ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "version.py"
          }), " still showed ", (0,jsx_runtime.jsx)(_components.code, {
            children: "VERSION_BUILD = 11"
          })]
        }), " at inspection time during the session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perpetual tasks are ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["never ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[x] … COMPLETE"
          })]
        }), " on Story checklists; RW relies on ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "version_task"
          }), " hint"]
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "--art"
          })
        }), " (see ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "find_completed_task"
        }), "). That path does not currently ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "require"
        }), " a persisted BUILD increment in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " before kanban scripts run."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensic drift:"
        }), " tags, changelogs, and boards can claim build ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "N+1"
        }), " while ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " still reads ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "N"
        }), " until a late manual fix."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator blind spot:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " may pass after an agent writes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), ", but nothing blocks ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kanban_init-first"
        }), " agent ordering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Perpetual-task confusion:"
        }), " high BUILD numbers on T04/T101/T102 are normal; drift is harder to spot manually."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction-suspected",
      children: "Reproduction (suspected)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start from perpetual anchor with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version.py"
        }), " at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.16.4+11"
        }), " (E02:S16", ":T04", ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k E02:S16:T04 --art"
        }), " with an agent that prioritizes Step 7 / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py --mode kanban_init"
        }), " early."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inspect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before commit"
        }), " — BUILD may still be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "11"
        }), " while ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " already show ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "+12"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional: follow ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursor/skills/version-bump/SKILL.md"
        }), " literally → wrong ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/fynd_deals/version.py"
        }), " path."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-resolution",
      children: "Proposed Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator:"
        }), " extend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_version_bump.py"
        }), " (or add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_perpetual_rw_version_file.py"
        }), ") to compare pre-RW vs staged ", (0,jsx_runtime.jsx)(_components.code, {
          children: "VERSION_BUILD"
        }), " for perpetual tasks; exit non-zero if unchanged on same-task release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["RW docs / ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), ":"]
        }), " explicit ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2-before-Step-7"
        }), " invariant for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW -k"
        }), " on perpetual tasks; forbid board version bumps ahead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update_kanban_docs.py"
        }), " kanban_init MUST load version from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " only (never accept agent-supplied version string that exceeds file)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Skill fix:"
        }), " point ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version-bump"
        }), " skill at ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "version_file"
        }), " (not hardcoded fynd_deals path)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regression test:"
        }), " perpetual T04 fixture — simulate kanban_init before version bump → validator fails."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor",
          children: "BR-063"
        }), " — task anchor vs requested id (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero",
          children: "BR-067"
        }), " — doc-only BUILD policy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment",
          children: "BR-061"
        }), " — explicit task / version alignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perpetual UKW task: ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual",
          children: ["E02:S16", ":T04"]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        }), " — Step 2 UKW/CMW attribution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2026-05-26 session:"
        }), " final release ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "v0.2.16.4+12"
          })
        }), " commit did update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "src/ai_dev_kit/version.py"
        }), "; this BR tracks the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "process gap"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "intermediate drift"
        }), ", not necessarily a missed final commit."]
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