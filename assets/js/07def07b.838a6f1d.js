"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["99533"], {
98704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_2_s_06_t_01_package_uninstall_reimplementation_md_07d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-2-s-06-t-01-package-uninstall-reimplementation-md-07d.json
var site_docs_implementation_cycles_ipp_e_2_s_06_t_01_package_uninstall_reimplementation_md_07d_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation","title":"E2:S06:T01 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS06:T01)","source":"@site/../docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-15T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E02:S01:T23 — Planning: Tool-agnostic workflow step tracking + persisted run logs (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs"},"next":{"title":"E02:S08:T08 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E2S08T08-forensic-logging-rollback-fr059"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E2S06T01-package-uninstall-reimplementation.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-15T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E2:S06 — Planning: Spec, Tests, Implementation Plan (IPW)';

const assets = {

};



const toc = [{
  "value": "1. Requirements (Ascertained Baseline)",
  "id": "1-requirements-ascertained-baseline",
  "level": 2
}, {
  "value": "1.1 Functional requirements (ascertained)",
  "id": "11-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.2 Non-functional requirements (ascertained)",
  "id": "12-non-functional-requirements-ascertained",
  "level": 3
}, {
  "value": "1.3 Invariants and boundaries",
  "id": "13-invariants-and-boundaries",
  "level": 3
}, {
  "value": "2. Specification",
  "id": "2-specification",
  "level": 2
}, {
  "value": "2.1 Goal",
  "id": "21-goal",
  "level": 3
}, {
  "value": "2.2 Specification mapping from ascertained requirements",
  "id": "22-specification-mapping-from-ascertained-requirements",
  "level": 3
}, {
  "value": "2.3 Constraints",
  "id": "23-constraints",
  "level": 3
}, {
  "value": "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)",
  "id": "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
  "level": 3
}, {
  "value": "3. Test design",
  "id": "3-test-design",
  "level": 2
}, {
  "value": "4. Implementation plan",
  "id": "4-implementation-plan",
  "level": 2
}, {
  "value": "4.1 Files to create or modify",
  "id": "41-files-to-create-or-modify",
  "level": 3
}, {
  "value": "4.2 Dependency order",
  "id": "42-dependency-order",
  "level": 3
}, {
  "value": "5. Success / verification criteria",
  "id": "5-success--verification-criteria",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "e2s06--planning-spec-tests-implementation-plan-ipw",
        children: ["E2:S06", ":T01", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery.md",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "story-06-package-uninstall-and-recovery.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E2:S06", ":T01", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md",
        children: "FR-008"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Approved"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Use this template when running ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["IPW E:S", ":T"]
        }), ". The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Host Task"
        }), " link and bidirectional wiring to the task doc ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "References"
        }), " are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mandatory"
        }), " before the plan is complete (see project ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-042"
        }), " — ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Implementation Planning Workflow"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-requirements-ascertained-baseline",
      children: "1. Requirements (Ascertained Baseline)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-functional-requirements-ascertained",
      children: "1.1 Functional requirements (ascertained)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source (FR/BR/Task)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Uninstall command (", (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit uninstall <package>"
            }), ") removes package files"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 AC-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Uninstall command removes package configuration entries from ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".ai-dev-kit.yaml"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 AC-2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninstall command removes package dependencies (Git submodules, npm packages, pip packages)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 AC-3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninstall command creates backup before removal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 AC-4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Uninstall command validates no reverse-dependencies before removal, with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--force"
            }), " override"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 AC-5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Recovery mode (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--recover"
            }), ") detects and cleans up failed/partial installations"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 FR-3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rollback mode (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rollback"
            }), ") restores from latest timestamped backup or removes entirely"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 FR-4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backend-specific uninstall works for all supported backends (git-submodule, git-subtree, npm, pip)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 FR-5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cleanup utilities remove all traces including ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".gitmodules"
            }), " entries and migration backups"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 FR-2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-non-functional-requirements-ascertained",
      children: "1.2 Non-functional requirements (ascertained)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source (FR/BR/Task)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Safety: interactive confirmation before removing files (bypassable with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--force"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 NFR-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety: backup created before removal, stored in timestamped directory under project root"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 NFR-2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safety: dependency validation warns user and allows override"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 NFR-3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usability: clear progress indicators and summary report"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 NFR-4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability: on backend failure, continue with manual cleanup and report issues rather than abort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 NFR-5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CLI consistency: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            }), " are synonyms (alias) — FR-008 specifies ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 Description"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-invariants-and-boundaries",
      children: "1.3 Invariants and boundaries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Invariants:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A framework must be registered in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".ai-dev-kit.yaml"
            }), " before it can be uninstalled via CLI."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Backup creation is mandatory before any destructive operation unless ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--dry-run"
            }), " is set."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            }), " command must use the same backend that was used for installation."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Fix CLI ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            }), " command bugs."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall"
            }), " alias to CLI."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement dependency validation (currently stubbed)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add backup creation to CLI remove flow (currently missing)."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add automated tests for CLI remove command, backend ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove()"
            }), " methods, and standalone ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall_package.py"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify standalone script end-to-end."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Check FR-008 AC-1..AC-5 boxes and update kanban board."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Rewriting ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall_package.py"
            }), " from scratch (it exists and is functional; we verify and patch gaps only)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "AC-6..AC-10 (recovery/rollback/docs) — these belong to T02 and T03."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "New backend types beyond the four already supported."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deliver a fully working, tested, and documented CLI uninstall path (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit uninstall"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit remove"
      }), ") that satisfies FR-008 AC-1 through AC-5. Close the gap between the story document's premature ", (0,jsx_runtime.jsx)(_components.code, {
        children: "COMPLETE"
      }), " status and the actual broken/incomplete implementation state, ensuring the kanban board, story doc, and FR-008 checkboxes are consistent and accurate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The specification formalizes the requirements baseline by mapping each AC to concrete code changes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-1 (remove files)"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RemoveCommand._handle_removal()"
        }), " must call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backend.remove()"
        }), " with correct backend instance, then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shutil.rmtree()"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "unlink()"
        }), " for filesystem cleanup."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-2 (remove config)"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Config.remove_framework()"
        }), " must be called and persisted with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config.save()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-3 (remove dependencies)"
        }), " → Backend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove()"
        }), " methods (git-submodule deinit/rm, npm uninstall, pip uninstall) must be correctly invoked via instantiated backend class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-4 (create backup)"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_create_backup()"
        }), " must be inserted into the remove flow before any destructive step; must copy framework files and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " to a timestamped directory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AC-5 (validate dependencies)"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_check_dependencies()"
        }), " must inspect ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".ai-dev-kit.yaml"
        }), " frameworks section for packages listing the target as a dependency; warn and require confirmation unless ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--force"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alias (RF6 / RNF6)"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/main.py"
        }), " command registry must map ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"uninstall\""
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RemoveCommand"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must reuse existing backend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove()"
        }), " implementations (", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/backends/git_submodule.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git_subtree.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package_manager.py"
        }), ") — do not rewrite."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must match existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install.py"
        }), " backend selection pattern: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "select_backend()"
        }), " returns string name; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "get_backend()"
        }), " returns class; instantiate with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backend_class()"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Must conform to existing test patterns (", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unittest.mock"
        }), ", temp fixtures from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/conftest.py"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must not break existing CLI commands or backend behavior."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
      children: "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " TODO (per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " — story doc incorrectly claims COMPLETE)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " First non-planning implementation change lands (fixing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove.py"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " Acceptance evidence is recorded — tests pass, FR-008 AC-1..AC-5 checkboxes checked, kboard updated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and kboard row status must update in the same change set/session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution step (not planning-only IPW creation)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-test-design",
      children: "3. Test design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior / layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected check"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backend remove contracts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Each backend ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove(framework, path, keep_files)"
            }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            }), " and calls expected subprocess commands (git deinit/rm, npm uninstall, pip uninstall)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backend selection fix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RemoveCommand"
            }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "select_backend(preferred=...)"
            }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "preferred_backend"
            }), ") and instantiates via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "get_backend(name)()"
            }), " before calling ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".remove()"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dry-run mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit remove --dry-run <fw>"
            }), " prints preview, returns 0, does not modify filesystem or config."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Force mode bypasses confirmation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--force"
            }), ", command prints warning and returns 1 (current behavior is acceptable). With ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--force"
            }), ", proceeds through removal."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recovery mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--recover"
            }), " detects incomplete installation (< 5 files or missing path with config entry), cleans up config and files, returns 0."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup creation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Removal flow creates timestamped backup directory containing framework files and ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".ai-dev-kit.yaml"
            }), " copy."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config cleanup"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["After removal, ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".ai-dev-kit.yaml"
            }), " no longer contains the framework entry."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency validation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_check_dependencies()"
            }), " returns non-empty list when another framework declares the target as a dependency; warns and prompts unless ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--force"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninstall alias"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit uninstall <fw>"
            }), " routes to same ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RemoveCommand"
            }), " class and behaves identically to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standalone script end-to-end"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "python3 uninstall_package.py <pkg> --dry-run"
            }), " runs without error and produces valid report dict."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standalone script backup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standalone script creates timestamped backup directory when not in dry-run mode."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standalone script verification"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_verify_cleanup()"
            }), " correctly reports ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clean=True"
            }), " when paths and config entries are removed."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-plan",
      children: "4. Implementation plan"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Transition task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S06:T01"
              }), " status ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "story-06-package-uninstall-and-recovery.md"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), ". Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), " date."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc and board ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Status"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cli/commands/remove.py"
            }), " backend selection bug. Change ", (0,jsx_runtime.jsx)(_components.code, {
              children: "select_backend(preferred_backend=..., project_root=..., default_backend_from_config=...)"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "select_backend(preferred=backend_name, project_root=project_root, auto_detect=True)"
            }), ". Then instantiate backend: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "backend_class = get_backend(selected_backend_name); backend = backend_class(); success = backend.remove(...)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "remove.py"
            }), " compiles and matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "install.py"
            }), " pattern"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add backup creation to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove.py"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_handle_removal()"
            }), ". Before calling ", (0,jsx_runtime.jsx)(_components.code, {
              children: "backend.remove()"
            }), ", create a timestamped backup directory under project root, copy framework files and ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".ai-dev-kit.yaml"
            }), " into it. Reuse backup logic from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall_package.py"
            }), " where possible."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removal flow creates recoverable backup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_check_dependencies()"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove.py"
            }), ". Scan ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".ai-dev-kit.yaml"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "frameworks"
            }), " entries for any ", (0,jsx_runtime.jsx)(_components.code, {
              children: "depends_on"
            }), " list containing the target framework name. If found and not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--force"
            }), ", warn and require confirmation."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency validation no longer stubbed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall"
            }), " alias to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cli/main.py"
            }), ". Register ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"uninstall\": RemoveCommand"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_COMMANDS"
            }), " dict."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit uninstall <fw>"
            }), " works"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/cli/test_remove_command.py"
            }), " covering T2–T9 (dry-run, force, recovery, backend selection, config cleanup, backup, alias). Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MagicMock"
            }), " for backends and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "temp_project_dir"
            }), " fixture."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test file with passing tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add backend ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remove()"
            }), " tests to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_backends.py"
            }), " covering T1 (git-submodule deinit/rm, npm uninstall, pip uninstall). Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "patch('subprocess.run')"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existing test file expanded with remove tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_uninstall_package.py"
            }), " covering T10–T12 (standalone script dry-run, backup, verification). Mock filesystem and subprocess."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test file with passing tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "9"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Verify standalone ", (0,jsx_runtime.jsx)(_components.code, {
              children: "uninstall_package.py"
            }), " runs end-to-end in a temp project directory with a dummy framework. Confirm ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--dry-run"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--force"
            }), ", and normal uninstall paths all behave correctly."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual verification notes recorded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check FR-008 AC-1..AC-5 checkboxes in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FR-008-package-uninstall-capabilities.md"
            }), " and update NFR-1..NFR-3 checkboxes as satisfied."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-008 reflects verified completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "11"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "story-06-package-uninstall-and-recovery.md"
            }), ": ensure T01 status accurately reflects implementation state, link to plan doc under Input and References."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional wiring complete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "12"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), ": move E2:S06", ":T01", " to appropriate column (In Progress if ongoing, Done if complete) with updated timestamp."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Board state accurate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Reconcile task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E2:S06:T01"
              }), " status"]
            }), " to actual implementation state: if all acceptance criteria are satisfied with evidence (tests pass, checkboxes checked) → transition to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " and add forensic marker ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), "; if implementation is ongoing → confirm status remains ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), "; if blocked → transition to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), " with documented reason. Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc status reflects actual state"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modify:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/commands/remove.py"
        }), " — fix backend selection, add backup, implement dependency check"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modify:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/main.py"
        }), " — add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"uninstall\""
        }), " alias"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modify:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_backends.py"
        }), " — add backend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove()"
        }), " unit tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/cli/test_remove_command.py"
        }), " — CLI remove command tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_uninstall_package.py"
        }), " — standalone script tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modify:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md"
        }), " — check AC-1..AC-5, NFR-1..NFR-3 boxes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modify:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery.md"
        }), " — update T01 status, add plan links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modify:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/kboard.md"
        }), " — update T01 row status"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove.py"
        }), " bugs (Step 2) must happen before adding tests (Steps 6–8), because tests exercise the fixed behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "uninstall"
        }), " alias (Step 5) can happen in parallel with Steps 3–4."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All code changes (Steps 2–5) must complete before manual verification (Step 9)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verification and checkbox updates (Steps 10–12) must happen after tests pass and code is validated."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status transitions (Steps 1 and N) bookend the implementation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-success--verification-criteria",
      children: "5. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python -m pytest tests/cli/test_remove_command.py -v"
        }), " passes (all T2–T9 tests green)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python -m pytest tests/test_backends.py -v"
        }), " passes with new remove tests (T1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python -m pytest tests/test_uninstall_package.py -v"
        }), " passes (T10–T12)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit remove --dry-run workflow-mgmt"
        }), " runs without ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TypeError"
        }), " and shows preview."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ai-dev-kit uninstall --dry-run workflow-mgmt"
        }), " behaves identically to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remove"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-008 AC-1..AC-5 checkboxes are checked (", (0,jsx_runtime.jsx)(_components.code, {
          children: "[x]"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "FR-008 NFR-1..NFR-3 checkboxes are checked (", (0,jsx_runtime.jsx)(_components.code, {
          children: "[x]"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " E2:S06", ":T01", " row status is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COMPLETE"
        }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IN PROGRESS"
        }), " if blocked)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Bidirectional links exist: plan doc → task doc, task doc → plan doc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Host Task:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-06-package-uninstall-and-recovery.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-008:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-008-package-uninstall-capabilities.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI main:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/main.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI remove (fixed):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/commands/remove.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI install (correct pattern):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/commands/install.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend selector:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/backends/selector.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend registry:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cli/backends/registry.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standalone script:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/scripts/uninstall_package.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test fixtures:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/conftest.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Existing backend tests:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_backends.py"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plan doc template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW canonical guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md"
        })]
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