"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["69321"], {
98513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_006_book_project_private_repository_spin_off_md_e9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-006-book-project-private-repository-spin-off-md-e9d.json
var site_docs_architecture_standards_and_adrs_adr_006_book_project_private_repository_spin_off_md_e9d_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off","title":"ADR-006: Book project private repository spin-off (preferred migration)","description":"Status: Accepted — Phases 1–4 complete (2026-05-26)","source":"@site/../docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-26T16:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-005: Ollama Model Ecosystem for Multi-Domain AI Workloads","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-005-ollama-model-ecosystem"},"next":{"title":"ADR-007: Book workspace governance document topology","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-007-book-governance-document-topology"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-26T16:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-006: Book project private repository spin-off (preferred migration)';

const assets = {

};



const toc = [{
  "value": "Amendment (2026-05-29): Private repo naming",
  "id": "amendment-2026-05-29-private-repo-naming",
  "level": 3
}, {
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Repository roles after cutover",
  "id": "repository-roles-after-cutover",
  "level": 3
}, {
  "value": "Cutover commit rule (Option B)",
  "id": "cutover-commit-rule-option-b",
  "level": 3
}, {
  "value": "GitHub choreography (preferred sequence)",
  "id": "github-choreography-preferred-sequence",
  "level": 3
}, {
  "value": "Public history shape",
  "id": "public-history-shape",
  "level": 3
}, {
  "value": "Book repo dependency on public ADK",
  "id": "book-repo-dependency-on-public-adk",
  "level": 3
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Positive",
  "id": "positive",
  "level": 3
}, {
  "value": "Negative / costs",
  "id": "negative--costs",
  "level": 3
}, {
  "value": "Rollback",
  "id": "rollback",
  "level": 3
}, {
  "value": "Execution phases (maps to FR-099 → E1:S04–T07)",
  "id": "execution-phases-maps-to-fr-099--e1s04t07",
  "level": 2
}, {
  "value": "Migration progress",
  "id": "migration-progress",
  "level": 2
}, {
  "value": "Open questions (maintainer)",
  "id": "open-questions-maintainer",
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
        id: "adr-006-book-project-private-repository-spin-off-preferred-migration",
        children: "ADR-006: Book project private repository spin-off (preferred migration)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phases 1–4 complete"
      }), " (2026-05-26)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision owner:"
      }), " Maintainer", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private repository (live):"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit-book",
        children: "RMS-Ltd/ai-dev-kit-book"
      }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "private"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing work:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
        children: "FR-099"
      }), " · ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E1:S04", ":T03", "–T07"]
      }), " (one task per phase; see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming",
        children: "Story 004"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Supersedes:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming",
        children: ["E1:S04", ":T02"]
      }), " (conditional public rename of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head-first-ai-dev-kit"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amendment-2026-05-29-private-repo-naming",
      children: "Amendment (2026-05-29): Private repo naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Interim Phase 1 name ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/hf-ai-dev-kit"
        })
      }), " (Head First–scoped) is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "retired"
      }), ". The private book repository is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        })
      }), " — series-agnostic (O'Reilly, Head First, or other lines are publishing context only, not repo identity). Public canonical remains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After GitHub rename, update local ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin"
      }), ":", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "git remote set-url origin https://github.com/RMS-Ltd/ai-dev-kit-book.git"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before FR-099 cutover, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        })
      }), " (public) co-hosted:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open framework packages"
        }), " (workflow management, Kanban, versioning) intended for public distribution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unpublished book IP"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/book-proj/"
        }), ", Epic 24 Kanban, Head First / O'Reilly publishing context)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This coupling exposes manuscript drafts to anyone who clones the public repo and blurs the product boundary for adopters. Prior task ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E1:S04", ":T02"]
      }), " assumed book and toolkit would share one repository and contemplated renaming the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "public"
      }), " repo to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "head-first-ai-dev-kit"
      }), " on O'Reilly acceptance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintainer direction (2026-05-26): achieve ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "clear separation"
      }), ". Public ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Dev Kit"
      }), " must remain a neutral framework product with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no Head First branding obligation"
      }), ". Book work, Epic 24, and O'Reilly context belong in a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "private"
      }), " repository with full history preserved there."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option C — private archive + fresh public genesis"
      }), " (not in-place deletion with retained public history, not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git filter-repo"
      }), " on the long-lived public remote unless cutover fails)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repository-roles-after-cutover",
      children: "Repository roles after cutover"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Repository"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Book + full history"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Private"
            }), " ✅"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit-book",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RMS-Ltd/ai-dev-kit-book"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manuscript, Epic 24, Head First / O'Reilly context, complete git archaeology"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Frameworks"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Public"
            }), " ✅"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RMS-Ltd/ai-dev-kit"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neutral ADK reference; frameworks, RW/UKW/IPW, adopter install paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Public ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "does not"
      }), " rename to Head First. ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E1:S04", ":T02", " is superseded"]
      }), " by this ADR and FR-099."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cutover-commit-rule-option-b",
      children: "Cutover commit rule (Option B)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " use “first commit after last book path touch” alone as the public genesis point—framework and book commits are interleaved."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "last book-path touch commit"
        }), " (commits modifying ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/book-proj/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-24/"
        }), ", or other inventory-classified book paths)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Land a dedicated ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "book extraction commit"
        }), " on the private line that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Removes all book paths and Epic 24 from the tree destined for public ADK."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Strips Head First / book narrative from public-facing docs (vision, README, kanban guides) — public-safe stub only."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Cleans ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kboard.md"
            }), " / structure docs of E24 rows on the public-bound branch."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public genesis commit"
        }), " = the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "book extraction commit"
        }), " (or its immediate child on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " after verification)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github-choreography-preferred-sequence",
      children: "GitHub choreography (preferred sequence)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Before 2026-05-26: RMS-Ltd/ai-dev-kit (public, book + frameworks)\n    ↓\n✅ Phase 1 (2026-05-26): Made private; interim rename → `hf-ai-dev-kit`\n    ↓\n4. Complete book extraction commit on private book line (then `hf-ai-dev-kit`)\n    ↓\n5. Create NEW public RMS-Ltd/ai-dev-kit from genesis commit\n   (orphan root OR branch starting at genesis SHA — no pre-genesis objects on public remote)\n    ↓\n6. Rewire remotes, badges, INSTALL_IN_YOUR_PROJECT, CI, submodule URLs\n    ↓\n7. Private `ai-dev-kit-book` continues book + Epic 24 work; consumes public ADK as dependency\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "public-history-shape",
      children: "Public history shape"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Preferred:"
      }), " new public repo whose history ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "begins at genesis commit"
      }), " (orphan initial commit or first push = extraction tree). Narrative: “public ADK era starts here.”"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative:"
      }), " new public repo whose default branch starts at genesis SHA without pushing earlier commits to the new remote (same effect, different tooling)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre-genesis commits remain ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only"
      }), " on the private book repository (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit-book"
      }), "; full history from pre-cutover ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " / interim ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hf-ai-dev-kit"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "book-repo-dependency-on-public-adk",
      children: "Book repo dependency on public ADK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Private book repo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "consumes"
      }), " public ADK via established patterns (submodule, installer, or docs-only reference)—it does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " become the long-term SoT for framework packages."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Epic 24 task IDs (", (0,jsx_runtime.jsx)(_components.code, {
        children: "E24:*"
      }), ") may continue in the private repo Kanban."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong IP boundary without rewriting entire public git history in place."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Public ADK stays ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ai-dev-kit"
          })
        }), " — no Head First rename, no manuscript paths on default branch."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full forensic history preserved privately."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Supersedes obsolete E1:S04", ":T02", " public-rename plan cleanly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative--costs",
      children: "Negative / costs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Temporary privatization"
        }), " blocks new public clones during cutover window."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New public repo"
        }), " may reset GitHub stars/forks/issues (plan for communication)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two remotes forever:"
        }), " private book work vs public framework releases."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinated pass required: install docs, CI badges, hardcoded GitHub URLs, changelog archive policy for public repo (post-genesis only or curated import)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Anyone who cloned ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "before"
        }), " privatization may retain local history with book content (usually acceptable; document if needed)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rollback",
      children: "Rollback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before public genesis push: abort by re-publicizing the private line under its then-current name. After public genesis: rollback is forward-fix only (do not force-push public ADK to restore book paths)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "execution-phases-maps-to-fr-099--e1s04t07",
      children: ["Execution phases (maps to FR-099 → E1:S04", ":T03", "–T07)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory & ADR approval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validated asset matrix; maintainer signs this ADR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privatize + rename"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T04"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Private ✅ 2026-05-26 (interim ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hf-ai-dev-kit"
            }), "; live name ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit-book"
            }), " since 2026-05-29)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book extraction commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T05"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Genesis tree book-free ✅ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.1.4.3+1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public rebirth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T06"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["New public ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            }), " from genesis ✅ 2026-05-26"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewire & verify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "T07"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URLs, install smoke test, no epic-24 contamination"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-progress",
      children: "Migration progress"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E1:S04", ":T03"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E1:S04", ":T04"]
            }), " — ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit-book",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RMS-Ltd/ai-dev-kit-book"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E1:S04", ":T05"]
            }), " — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.1.4.3+1"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E1:S04", ":T06"]
            }), " — public bootstrap (orphan + replay from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f21bac102"
            }), "); canonical home ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://github.com/RMS-Ltd/ai-dev-kit",
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "RMS-Ltd/ai-dev-kit"
                })
              })
            }), " bootstrapped 2026-05-28 (interim ", (0,jsx_runtime.jsx)(_components.code, {
              children: "earlution/ai-dev-kit"
            }), " bootstrap superseded)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complete"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E1:S04", ":T07"]
            }), " — rewire + verify (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/maintenance/fr099-phase4-rewire-and-verify",
              children: "runbook"
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Local clone hygiene:"
      }), " Update ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin"
      }), " if still pointing at pre-rename URL:\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "git remote set-url origin https://github.com/RMS-Ltd/ai-dev-kit-book.git"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-questions-maintainer",
      children: "Open questions (maintainer)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Confirm private repo name: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RMS-Ltd/ai-dev-kit-book"
          })
        }), " (live, private — supersedes interim ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hf-ai-dev-kit"
        }), ", 2026-05-29)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Orphan root vs genesis-SHA branch for public repo bootstrap — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "orphan root + cherry-pick replay"
        }), " from genesis SHA ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f21bac102"
        }), " (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/fr099-phase3-public-repo-bootstrap",
          children: "runbook"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Changelog archive: truncate public archive at genesis vs import summary doc only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Cutover window duration and user communication channel."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
          children: "FR-099 — Spin off book epic to private repository"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T06-fr099-phase3-public-ai-dev-kit-rebirth",
          children: ["E1:S04", ":T06", " — Phase 3 public rebirth"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T07-fr099-phase4-rewire-and-verify",
          children: ["E1:S04", ":T07", " — Phase 4 rewire"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming",
          children: "FR-099 phase tasks T03–T07"
        }), " (umbrella ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming/T03-spin-off-book-epic-private-repo-fr099",
          children: "redirect"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-01/story-04-repository-branding-and-renaming",
          children: ["E1:S04", ":T02", " — superseded"]
        }), " (public Head First rename)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges",
          children: "FR-064"
        }), " — prior private-repo hygiene pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-080-greenfield-installation-process",
          children: "FR-080"
        }), " — consumer Kanban must not include Epic 24"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003"
        }), " — public ADK remains reference implementation for adopters"]
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