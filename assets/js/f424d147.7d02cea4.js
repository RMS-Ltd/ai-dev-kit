"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["82134"], {
5305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_086_rw_install_lowercase_fresh_kanban_patterns_signoff_md_f42_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-086-rw-install-lowercase-fresh-kanban-patterns-signoff-md-f42.json
var site_docs_project_management_kanban_fr_br_br_086_rw_install_lowercase_fresh_kanban_patterns_signoff_md_f42_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff","title":"Bug Report BR-086: RW Mode C — Lowercase Fresh Kanban Patterns, Forward-Looking Story 03d, Sign-Off Mismatch","description":"Bug ID: BR-086","source":"@site/../docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-04T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-085: RW Mode C — Story Pattern Prompt Infinite Loop After Fresh Kanban","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban"},"next":{"title":"Bug Report BR-087: Framework packages install with legacy directory names (spaces, &)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-04T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-086: RW Mode C — Lowercase Fresh Kanban Patterns, Forward-Looking Story 03d, Sign-Off Mismatch';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "On disk after fresh kanban (current installer)",
  "id": "on-disk-after-fresh-kanban-current-installer",
  "level": 2
}, {
  "value": "Observed (2026-06-04 book dry-run)",
  "id": "observed-2026-06-04-book-dry-run",
  "level": 2
}, {
  "value": "Problems",
  "id": "problems",
  "level": 2
}, {
  "value": "Expected",
  "id": "expected",
  "level": 2
}, {
  "value": "Workaround (book packet T03 Step 4.1)",
  "id": "workaround-book-packet-t03-step-41",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Follow-up to #15 / #16 (2026-06-04)",
  "id": "follow-up-to-15--16-2026-06-04",
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
    pre: "pre",
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
        id: "bug-report-br-086-rw-mode-c--lowercase-fresh-kanban-patterns-forward-looking-story-03d-sign-off-mismatch",
        children: "Bug Report BR-086: RW Mode C — Lowercase Fresh Kanban Patterns, Forward-Looking Story 03d, Sign-Off Mismatch"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-086", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (wrong persisted ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " on lowercase fresh kanban; sign-off false negatives)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/17",
        children: "#17"
      }), " closed 2026-06-04; adopter replay verified)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/17",
        children: "#17"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/15",
        children: "#15"
      }), " / ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout",
        children: "BR-083"
      }), " (capital-case path ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RESOLVED"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+2"
      }), "; lowercase regression) · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/16",
        children: "#16"
      }), " / ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern",
        children: "BR-084"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern"
      }), " emitted; story/task padding still wrong) · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban",
        children: "BR-085"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming",
        children: "UXR-017"
      }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E04:S19", ":T11"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T16-rw-install-lowercase-fresh-kanban-patterns-br086",
        children: ["E06:S09", ":T16"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T16-br086-lowercase-fresh-kanban-patterns",
        children: "IPP-E6S9T16"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-04 (v0.6.9.16+3 — RESOLVED; #17 closed; UKW ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-c"
      }), " archived)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.6.9.16+3", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " ai-dev-kit-book setup-spine T03 dry-run (reader ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expenses-tracker"
      }), "); ADK submodule ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })
      }), "; kanban ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_kanban_framework.py --mode fresh"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_release_workflow.py --mode c"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lowercase"
      }), " fresh kanban (", (0,jsx_runtime.jsx)(_components.code, {
        children: "epics/epic-1/epic-1.md"
      }), ", unpadded epic segments), RW mode C pre-fills padded ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{epic:02d}"
      }), " defaults, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "blocks"
      }), " forward-looking ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-{story:03d}-*.md"
      }), ", then persists mismatched ", (0,jsx_runtime.jsx)(_components.code, {
        children: "02d"
      }), " story/task patterns (capital ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), ", erroneous ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*/"
      }), " glob). Install sign-off marks ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-083 NOT READY"
      }), " when the only epic pattern that matches on-disk files uses unpadded ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\{epic\\}"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Attempted fix (E06:S09", ":T16", ", 2026-06-04):"]
      }), " Installer detects lowercase unpadded epic dirs by filesystem name; pre-fills book-aligned epic/story/task patterns; accepts forward-looking ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story:03d"
      }), " on epic-only trees; BR-083 sign-off uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*_contains_any"
      }), " alternates. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-084 sign-off (2026-06-04):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern_contains_any"
      }), " accepts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "t{task"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T{task"
      }), " — fixes book T03 false ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I04.E01"
      }), " when only capital-", (0,jsx_runtime.jsx)(_components.code, {
        children: "T"
      }), " substring check failed. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RESOLVED"
      }), " — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/17",
        children: "#17"
      }), " closed after adopter replay (2026-06-04)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "on-disk-after-fresh-kanban-current-installer",
      children: "On disk after fresh kanban (current installer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "docs/project-management/kanban/\n  kboard.md\n  epics/epic-1/epic-1.md\n  …\n  epics/epic-18/epic-18.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(No ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-*.md"
      }), " files yet — epics only.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-2026-06-04-book-dry-run",
      children: "Observed (2026-06-04 book dry-run)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behaviour"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Epic prompt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["User ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/epic-\\{epic\\}/epic-\\{epic\\}.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "12 matches"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Story prompt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["User ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/epic-\\{epic\\}/story-{story:03d}-*.md"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "❌ Cannot persist zero-match pattern"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enter on default"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Accepts ", (0,jsx_runtime.jsx)(_components.code, {
              children: "story-{story:02d}-*.md"
            }), " (“no matching files yet”)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generated YAML"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mixed unpadded epic + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "02d"
            }), " story/task; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "T{task:02d}"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*/"
            }), " glob"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "epic_doc_pattern: epics/epic-{epic}/epic-{epic}.md\nstory_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*.md\ntask_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*/T{task:02d}-*.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sign-off:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[NOT READY] BR-083"
      }), " (expects ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-{epic:02d}"
      }), "); ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[READY] BR-084"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "task_doc_pattern"
      }), " present)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problems",
      children: "Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forward-looking story pattern blocked"
        }), " — Book/adopter convention ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-{story:03d}-*.md"
        }), " refused when only epic files exist; Enter silently saves different ", (0,jsx_runtime.jsx)(_components.code, {
          children: "02d"
        }), " pattern."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic padding mismatch"
        }), " — On-disk ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-1"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-18"
        }), "; installer defaults/sign-off expect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{epic:02d}"
        }), "; matching pattern uses unpadded ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{epic\\}"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Task pattern wrong for lowercase adopters"
        }), " — Persisted ", (0,jsx_runtime.jsx)(_components.code, {
          children: "…-*/T{task:02d}-*.md"
        }), " vs book target ", (0,jsx_runtime.jsx)(_components.code, {
          children: "…/story-{story:03d}/t{task:02d}-*.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: ":02d"
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: ":03d"
          }), " unexplained"]
        }), " at prompt — drives manual T03 Step 4.1 edits."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After fresh ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lowercase"
      }), " kanban + RW mode C:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pre-fill epic pattern that ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "matches"
        }), " existing files (", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-\\{epic\\}/epic-\\{epic\\}.md"
        }), " when glob confirms)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Allow persisting ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "intended"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story_doc_pattern"
        }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{story:03d}"
        }), ") with no story files yet — or Enter writes the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "same"
        }), " pattern docs recommend."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "task_doc_pattern"
        }), ": lowercase ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t{task:02d}"
        }), ", path layout aligned with book T03 Step 4.1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "github-issue-install-signoff-contract.yaml"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-083"
        }), " checks accept unpadded on-disk ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-N"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "or"
        }), " document single padding policy (UXR-017 / ADR-015)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Installer hints explain ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{story:03d}"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{story:02d}"
        }), " (or one canonical policy)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workaround-book-packet-t03-step-41",
      children: "Workaround (book packet T03 Step 4.1)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "epic_doc_pattern: epics/epic-{epic}/epic-{epic}.md\nstory_doc_pattern: epics/epic-{epic}/story-{story:03d}-*.md\ntask_doc_pattern: epics/epic-{epic}/story-{story:03d}/t{task:02d}-*.md\n"
      })
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
        }), " ", "Fresh lowercase kanban → RW mode C → epic pattern matches without manual edit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "User can persist ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-{story:03d}-*.md"
        }), " (or documented equivalent) before any story file exists"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Generated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_doc_pattern"
        }), " uses lowercase task prefix and matches documented adopter layout"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Sign-off / BR-083 does not fail when epic pattern matches on-disk unpadded ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-N"
        }), " names"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Installer output explains ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{story:03d}"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{story:02d}"
        }), " (or one canonical padding policy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "GitHub #17 closed after adopter replay on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "follow-up-to-15--16-2026-06-04",
      children: "Follow-up to #15 / #16 (2026-06-04)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GitHub ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "#15"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "#16"
      }), " remain ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "closed"
      }), " after ExpensesTracker ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "capital-case"
      }), " verification (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.14+2"
      }), "). Book dry-run on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lowercase"
      }), " fresh install shows residual gaps — tracked here, not by reopening #15/#16."]
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