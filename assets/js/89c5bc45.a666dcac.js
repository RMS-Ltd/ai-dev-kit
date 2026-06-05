"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["23015"], {
22790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_book_project_agent_handoff_context_md_89c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-book-project-agent-handoff-context-md-89c.json
var site_docs_book_project_agent_handoff_context_md_89c_namespaceObject = JSON.parse('{"id":"book-project/agent-handoff-context","title":"AI Dev Kit & Book Project — Agent Handoff Context","description":"Created: 2026-05-28","source":"@site/../docs/book-project/agent-handoff-context.md","sourceDirName":"book-project","slug":"/book-project/agent-handoff-context","permalink":"/ai-dev-kit/docs/book-project/agent-handoff-context","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/book-project/agent-handoff-context.md","tags":[],"version":"current","frontMatter":{}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/book-project/agent-handoff-context.md


const frontMatter = {};
const contentTitle = 'AI Dev Kit & Book Project — Agent Handoff Context';

const assets = {

};



const toc = [{
  "value": "Repository Architecture (Two-Repo Split)",
  "id": "repository-architecture-two-repo-split",
  "level": 2
}, {
  "value": "Part 1: AI Dev Kit — Production Readiness Assessment",
  "id": "part-1-ai-dev-kit--production-readiness-assessment",
  "level": 2
}, {
  "value": "Current State (as of v0.4.813+2 / internal v0.1.4.7+2)",
  "id": "current-state-as-of-v048132--internal-v01472",
  "level": 3
}, {
  "value": "Framework Maturity",
  "id": "framework-maturity",
  "level": 3
}, {
  "value": "Production-Ready Features",
  "id": "production-ready-features",
  "level": 3
}, {
  "value": "What&#39;s NOT Production-Ready",
  "id": "whats-not-production-ready",
  "level": 3
}, {
  "value": "Development Philosophy",
  "id": "development-philosophy",
  "level": 3
}, {
  "value": "Kanban State",
  "id": "kanban-state",
  "level": 3
}, {
  "value": "Part 2: Book Project — Detailed Status",
  "id": "part-2-book-project--detailed-status",
  "level": 2
}, {
  "value": "Project Overview",
  "id": "project-overview",
  "level": 3
}, {
  "value": "Repository History",
  "id": "repository-history",
  "level": 3
}, {
  "value": "Book Content Structure (Private Repo)",
  "id": "book-content-structure-private-repo",
  "level": 3
}, {
  "value": "Publishing Strategy",
  "id": "publishing-strategy",
  "level": 3
}, {
  "value": "Current Book Development Status",
  "id": "current-book-development-status",
  "level": 3
}, {
  "value": "Open Questions (Maintainer-Only)",
  "id": "open-questions-maintainer-only",
  "level": 3
}, {
  "value": "Part 3: Agent Guidelines for Book-Related Work",
  "id": "part-3-agent-guidelines-for-book-related-work",
  "level": 2
}, {
  "value": "When Working on Book Publishing (Private Repo)",
  "id": "when-working-on-book-publishing-private-repo",
  "level": 3
}, {
  "value": "When Working on Public AI Dev Kit",
  "id": "when-working-on-public-ai-dev-kit",
  "level": 3
}, {
  "value": "Cross-Repo Coordination",
  "id": "cross-repo-coordination",
  "level": 3
}, {
  "value": "Part 4: Versioning &amp; Release Coordination",
  "id": "part-4-versioning--release-coordination",
  "level": 2
}, {
  "value": "Public AI Dev Kit Releases",
  "id": "public-ai-dev-kit-releases",
  "level": 3
}, {
  "value": "Private Book Repo Versioning",
  "id": "private-book-repo-versioning",
  "level": 3
}, {
  "value": "Part 5: Key Documents Reference",
  "id": "part-5-key-documents-reference",
  "level": 2
}, {
  "value": "Public AI Dev Kit (RMS-Ltd/ai-dev-kit)",
  "id": "public-ai-dev-kit-rms-ltdai-dev-kit",
  "level": 3
}, {
  "value": "Private Book Repo (RMS-Ltd/ai-dev-kit-book)",
  "id": "private-book-repo-rms-ltdai-dev-kit-book",
  "level": 3
}, {
  "value": "Part 6: Contact &amp; Access",
  "id": "part-6-contact--access",
  "level": 2
}, {
  "value": "Repository Access",
  "id": "repository-access",
  "level": 3
}, {
  "value": "Issue Tracking",
  "id": "issue-tracking",
  "level": 3
}, {
  "value": "Summary for Agents",
  "id": "summary-for-agents",
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
        id: "ai-dev-kit--book-project--agent-handoff-context",
        children: "AI Dev Kit & Book Project — Agent Handoff Context"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-05-28", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Provide context for agents working on book publishing matters who need to understand the relationship between the public AI Dev Kit and the private book project."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "repository-architecture-two-repo-split",
      children: "Repository Architecture (Two-Repo Split)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-05-26"
      }), ", the project operates as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two separate repositories"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Repository"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AI Dev Kit (Public)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RMS-Ltd/ai-dev-kit"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework packages, workflow tooling, adoption docs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Book Project (Private)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit-book",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RMS-Ltd/ai-dev-kit-book"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manuscript, Epic 24, Head First / O'Reilly publishing work"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Governing ADR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
        children: "ADR-006 — Book Project Private Repository Spin-Off"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Point:"
      }), " The public AI Dev Kit contains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no manuscript content"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no Head First branding"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no Epic 24"
      }), " on its default branch. All book-related IP was extracted to the private repository."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-1-ai-dev-kit--production-readiness-assessment",
      children: "Part 1: AI Dev Kit — Production Readiness Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "current-state-as-of-v048132--internal-v01472",
      children: "Current State (as of v0.4.813+2 / internal v0.1.4.7+2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Overall Status:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Production-ready for framework adoption"
      }), ", but positioned as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "active development"
      }), " (RC 0)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "framework-maturity",
      children: "Framework Maturity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Framework"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Workflow Management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v2.3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 workflows in registry; RW/UKW/IPW battle-tested"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v2.2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic/Story/Task structure, FR/BR intake"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Numbering & Versioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v2.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dual-version (internal + SemVer), registry-based mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Document Lifecycle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v1.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTL-based housekeeping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debug Path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v1.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging utilities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "production-ready-features",
      children: "Production-Ready Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Release Workflow (RW)"
          }), " — Fully automated 13-step release process"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Branch context validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Task intent validation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Changelog generation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban marker updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dual tagging (internal + SemVer)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Used for every release since v0.1.4.7+2"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Kanban Workflow (UKW)"
          }), " — Board synchronization"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bookkeeping updates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Priority management"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kanban hygiene"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validators"
          }), " — Pre-commit and pre-release validation"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py --strict"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_task_complete.py"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_rw_task_intent.py"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_semver_monotonic.py"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Installation Framework"
          }), " — Greenfield/brownfield adoption"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Submodule-based installation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Framework copy + installer scripts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Post-template setup guides"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "whats-not-production-ready",
      children: "What's NOT Production-Ready"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Tooling"
        }), " — Minimal CLI presence; most workflows invoked via slash commands or scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Distribution"
        }), " — Not published to PyPI/npm; installed via git submodule or copy-paste"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD"
        }), " — Limited automated CI; relies on agent-driven workflow execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public Documentation Site"
        }), " — GitHub Pages exists but may not be fully synced"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "development-philosophy",
      children: "Development Philosophy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent-first design:"
        }), " Workflows designed for AI agent execution (Cursor, Claude Code)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config-driven:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " as single source of truth"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Forensic traceability:"
        }), " Every release tied to Kanban coordinates (E:S", ":T", ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual-versioning:"
        }), " Internal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        }), " + external SemVer"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kanban-state",
      children: "Kanban State"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Active Epics (public repo):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 1: AI Dev Kit Core"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 2: Workflow Management Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 3: Numbering & Versioning Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 4: Kanban Framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 5: (various enhancements)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 6: (various enhancements)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 24 (Book):"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Removed from public Kanban"
      }), " — exists only in private repo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-2-book-project--detailed-status",
      children: "Part 2: Book Project — Detailed Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-overview",
      children: "Project Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Working Title:"
      }), " \"Head First AI Dev Kit: The Vibe-Coder's Complete Guide\"", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Format:"
      }), " Head First series (O'Reilly Media)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private development"
      }), " — manuscript unpublished"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repository-history",
      children: "Repository History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Milestone"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory + ADR-006 approval"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Privatized + renamed to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hf-ai-dev-kit"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book extraction genesis commit (v0.1.4.3+1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Public ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            }), " reborn from genesis"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Phase 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rewire + verify complete (v0.1.4.7+2)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-099 Status:"
      }), " ✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IMPLEMENTED"
      }), " — All phases complete."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "book-content-structure-private-repo",
      children: "Book Content Structure (Private Repo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Manuscript Location:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/book-proj/"
      }), " (private only)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Known Assets (from inventory):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["8 manuscript/proposal files in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/book-proj/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 24 Kanban: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-24/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Active branch: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic/24-book-related-work"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 24 Structure (private Kanban):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 001:"
        }), " Book content development"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 002:"
        }), " (TBD)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story 003:"
        }), " Book publishing support"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "publishing-strategy",
      children: "Publishing Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Target Publisher:"
      }), " O'Reilly Media (Head First series)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision Point:"
      }), " Conditional rename of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "private"
      }), " repo to match book title upon acceptance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Decisions (from memory):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Title: \"Head First AI Dev Kit: The Vibe-Coder's Complete Guide\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Format: Head First (visual, conversational, example-driven)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tutorial Project: ExpenseTracker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BYOP (Build Your Own Project) parallel track"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chapter 0 onboarding flow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "current-book-development-status",
      children: "Current Book Development Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What We Know:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manuscript work is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "active but unpublished"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Epic 24 tasks exist in private Kanban"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Book repo consumes public AI Dev Kit as a dependency"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No public manuscript drafts or publishing strategy documents are visible in public repo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What Agents Should Know:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not reference specific manuscript content"
        }), " — it's private IP"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not expose Epic 24 details"
        }), " in public AI Dev Kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Book repo uses public ADK frameworks"
        }), " for examples and structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "open-questions-maintainer-only",
      children: "Open Questions (Maintainer-Only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog archive policy:"
        }), " Truncate public archive at genesis vs. import summary doc only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cutover communication:"
        }), " Duration and user communication channel for future migrations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O'Reilly submission timeline:"
        }), " Not publicly documented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-3-agent-guidelines-for-book-related-work",
      children: "Part 3: Agent Guidelines for Book-Related Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-working-on-book-publishing-private-repo",
      children: "When Working on Book Publishing (Private Repo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use the private repository:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reference public ADK as dependency:"
        }), " Book examples should install from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintain IP boundary:"
        }), " Do not copy manuscript content to public repo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Epic 24 stays private:"
        }), " Kanban tasks for book content belong in private repo only"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-working-on-public-ai-dev-kit",
      children: "When Working on Public AI Dev Kit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Head First branding:"
        }), " Public repo remains neutral \"AI Dev Kit\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Epic 24 references:"
        }), " Remove any E24 task rows from public ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No manuscript paths:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/book-proj/"
        }), " must not exist on public tree"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework-first focus:"
        }), " Public docs focus on framework adoption, not book narrative"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-repo-coordination",
      children: "Cross-Repo Coordination"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Private repo depends on public:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Private book repo installs public ADK as dependency\ngit submodule add https://github.com/RMS-Ltd/ai-dev-kit.git .ai-dev-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public repo has no knowledge of private:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No remotes pointing to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No CI jobs that access private repo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No badges or links that require private repo access"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-4-versioning--release-coordination",
      children: "Part 4: Versioning & Release Coordination"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "public-ai-dev-kit-releases",
      children: "Public AI Dev Kit Releases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Release:"
      }), " v0.4.813+2 (SemVer) / v0.1.4.7+2 (internal)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Date:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Governing Task:"
      }), " E2:S16", ":T03", " (RW Maintenance) or task-specific"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Release Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "RW E:S:T:XX"
        }), " triggers full release cycle"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators run (branch context, task intent, task complete)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changelog generated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kanban markers updated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dual tags created (internal + SemVer)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push to remote"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "private-book-repo-versioning",
      children: "Private Book Repo Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Pattern:"
      }), " Book repo may use its own versioning or align with public ADK for framework dependencies."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Dependency:"
      }), " When book examples reference ADK frameworks, they should pin to a specific public release (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.813+2"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-5-key-documents-reference",
      children: "Part 5: Key Documents Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "public-ai-dev-kit-rms-ltdai-dev-kit",
      children: "Public AI Dev Kit (RMS-Ltd/ai-dev-kit)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/README.md",
              children: "README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework overview, quick start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
              children: "INSTALL_IN_YOUR_PROJECT.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Installation guide"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CLAUDE.md",
              children: "CLAUDE.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claude Code project instructions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
              children: "ADR-006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repository split decision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/ai-dev-kit-vision-and-purpose",
              children: "Vision & Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project vision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy",
              children: "Versioning Policy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Version schema docs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "private-book-repo-rms-ltdai-dev-kit-book",
      children: "Private Book Repo (RMS-Ltd/ai-dev-kit-book)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Document"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/book-project/install-error-codes-book-integration",
              children: "install-error-codes-book-integration.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.em, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "FR-108 / ADK-"
              }), " error codes"]
            }), "* — appendix sync, setup spine, reader reporting (v0.6.9.20+)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/book-proj/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manuscript drafts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/epic-24/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Book Kanban"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
              children: "ADR-006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same ADR (retained in history)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-099-spin-off-book-epic-to-private-repository",
              children: "FR-099"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Migration FR (retained in history)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-6-contact--access",
      children: "Part 6: Contact & Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repository-access",
      children: "Repository Access"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Repo"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Public"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit",
              children: "https://github.com/RMS-Ltd/ai-dev-kit"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RMS-Ltd/ai-dev-kit-book"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private (maintainer only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit-book",
              children: "https://github.com/RMS-Ltd/ai-dev-kit-book"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-tracking",
      children: "Issue Tracking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Public AI Dev Kit:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/issues",
          children: "https://github.com/RMS-Ltd/ai-dev-kit/issues"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private Book Project:"
        }), " Internal to private repo"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary-for-agents",
      children: "Summary for Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If the user is discussing book publishing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["They are working in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "private repo"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manuscript content is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not in this public repo"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Book project ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "consumes public ADK"
        }), " as a dependency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Epic 24 and Head First branding are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "private-only"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "If the user is discussing framework development:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["They are working in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "public repo"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Frameworks are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "production-ready"
        }), " for adoption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Workflows (RW, UKW, IPW) are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "battle-tested"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No book content should be introduced"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "If unsure:"
      }), " Ask the user which repository context they're working in."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-05-28", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintainer:"
      }), " Ruari Mears", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active — FR-099 complete, book development ongoing in private"]
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