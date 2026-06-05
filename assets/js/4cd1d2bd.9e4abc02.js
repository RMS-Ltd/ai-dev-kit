"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["7942"], {
81034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_book_project_install_error_codes_book_integration_md_4cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-book-project-install-error-codes-book-integration-md-4cd.json
var site_docs_book_project_install_error_codes_book_integration_md_4cd_namespaceObject = JSON.parse('{"id":"book-project/install-error-codes-book-integration","title":"Install error codes (ADK-*) — Book integration guide","description":"Audience: Maintainers and agents working in RMS-Ltd/ai-dev-kit-book","source":"@site/../docs/book-project/install-error-codes-book-integration.md","sourceDirName":"book-project","slug":"/book-project/install-error-codes-book-integration","permalink":"/ai-dev-kit/docs/book-project/install-error-codes-book-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/book-project/install-error-codes-book-integration.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T12:30:00.000Z","expires_at":null,"housekeeping_policy":"keep"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/book-project/install-error-codes-book-integration.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T12:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Install error codes (ADK-*) — Book integration guide';

const assets = {

};



const toc = [{
  "value": "1. Purpose",
  "id": "1-purpose",
  "level": 2
}, {
  "value": "2. Executive summary",
  "id": "2-executive-summary",
  "level": 2
}, {
  "value": "3. Why the book needs this",
  "id": "3-why-the-book-needs-this",
  "level": 2
}, {
  "value": "3.1 Stateless reader problem",
  "id": "31-stateless-reader-problem",
  "level": 3
}, {
  "value": "3.2 Book dry-run evidence",
  "id": "32-book-dry-run-evidence",
  "level": 3
}, {
  "value": "4. What shipped in public ADK",
  "id": "4-what-shipped-in-public-adk",
  "level": 2
}, {
  "value": "4.1 Canonical sources (do not duplicate in book — link or sync)",
  "id": "41-canonical-sources-do-not-duplicate-in-book--link-or-sync",
  "level": 3
}, {
  "value": "4.2 Installers that emit codes (v1)",
  "id": "42-installers-that-emit-codes-v1",
  "level": 3
}, {
  "value": "4.3 Console banner format",
  "id": "43-console-banner-format",
  "level": 3
}, {
  "value": "5. Code taxonomy (reader-friendly)",
  "id": "5-code-taxonomy-reader-friendly",
  "level": 2
}, {
  "value": "6. Complete v1 catalog (registry 1.0.0)",
  "id": "6-complete-v1-catalog-registry-100",
  "level": 2
}, {
  "value": "7. Process flow (for one diagram in the book)",
  "id": "7-process-flow-for-one-diagram-in-the-book",
  "level": 2
}, {
  "value": "8. Manuscript placement recommendations",
  "id": "8-manuscript-placement-recommendations",
  "level": 2
}, {
  "value": "8.1 Setup spine (e.g. ExpenseTracker T03)",
  "id": "81-setup-spine-eg-expensetracker-t03",
  "level": 3
}, {
  "value": "8.2 Troubleshooting chapter",
  "id": "82-troubleshooting-chapter",
  "level": 3
}, {
  "value": "8.3 Appendix (recommended title)",
  "id": "83-appendix-recommended-title",
  "level": 3
}, {
  "value": "8.4 BYOP parallel track",
  "id": "84-byop-parallel-track",
  "level": 3
}, {
  "value": "8.5 Head First tone — sample callout (editable)",
  "id": "85-head-first-tone--sample-callout-editable",
  "level": 3
}, {
  "value": "9. Reader feedback and GitHub issues",
  "id": "9-reader-feedback-and-github-issues",
  "level": 2
}, {
  "value": "9.1 What to ask readers to paste",
  "id": "91-what-to-ask-readers-to-paste",
  "level": 3
}, {
  "value": "9.2 Public issue templates",
  "id": "92-public-issue-templates",
  "level": 3
}, {
  "value": "10. Maintainer sync playbook (book repo)",
  "id": "10-maintainer-sync-playbook-book-repo",
  "level": 2
}, {
  "value": "11. Verification checklist (FR-108 AC6 — book)",
  "id": "11-verification-checklist-fr-108-ac6--book",
  "level": 2
}, {
  "value": "12. Out of scope (v1 — do not promise in book yet)",
  "id": "12-out-of-scope-v1--do-not-promise-in-book-yet",
  "level": 2
}, {
  "value": "13. Cross-repo references",
  "id": "13-cross-repo-references",
  "level": 2
}, {
  "value": "14. Suggested Epic 24 tasks (private repo)",
  "id": "14-suggested-epic-24-tasks-private-repo",
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
        id: "install-error-codes-adk---book-integration-guide",
        children: "Install error codes (ADK-*) — Book integration guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Audience:"
      }), " Maintainers and agents working in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit-book",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit-book"
        })
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Public ADK delivery:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.20+1"
      }), " (SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.4.879+1"
      }), " and later) · ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E06:S09", ":T20"]
      }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-108"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Registry version:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.0.0"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related public docs:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy",
        children: "ADR-016"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission",
        children: "FR-108"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version",
        children: "UXR-016"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-purpose",
      children: "1. Purpose"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maintainer handoff"
      }), " for weaving the FR-108 install error code system into the Head First AI Dev Kit manuscript and setup exercises. It is written for the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "private book repo"
      }), "; it does not contain manuscript prose, but it supplies:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reader-facing concepts and copy patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A complete v1 code catalog (book appendix–ready)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Placement recommendations for setup spine, troubleshooting, and alpha feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A sync playbook when the public ADK registry changes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Design goal (from FR-108):"
      }), " A book reader or alpha tester can paste ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one stable token"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I03.E12"
      }), ") plus ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one SemVer line"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "AI Dev Kit v0.4.879+1"
      }), ") into an issue or maintainer channel ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "without"
      }), " exposing repo-specific paths or requiring the book to know their directory layout."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-executive-summary",
      children: "2. Executive summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Before (pre–v0.6.9.20)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After (FR-108 v1)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Install failures described in long prose or coarse exit codes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Install failures emit ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ERROR [ADK-…]"
              })
            }), " banners from a versioned registry"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Book troubleshooting tied to repo layout (“check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/epics/Epic-6/…"
            }), "”)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Book can link ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "#adk-i03-e21"
              })
            }), " and give remediation ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "without"
            }), " knowing the reader’s tree"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Feedback relied on pasted logs alone"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Feedback templates ask for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "SemVer + ADK code"
            }), " (pairs with UXR-016)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Two-token rule for readers:"
      }), " Always report ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "both"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer banner"
        }), " — e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AI Dev Kit v0.4.879+1"
        }), " (UXR-016)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error code line"
        }), " — e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ERROR [ADK-I03.E04] RW installer dependencies missing"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-why-the-book-needs-this",
      children: "3. Why the book needs this"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-stateless-reader-problem",
      children: "3.1 Stateless reader problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The book cannot assume:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which epic/story naming convention the reader chose (lowercase ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-6"
        }), " vs padded ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-06"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whether they run greenfield from ExpenseTracker template or BYOP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Their Python venv layout or submodule path"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Error codes are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "layout-neutral"
      }), ". The registry holds symptom, likely cause, and remediation steps keyed by code, not by filesystem path."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-book-dry-run-evidence",
      children: "3.2 Book dry-run evidence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Public ADK BRs from book setup exercises map cleanly to seed codes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Book / alpha context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Public BR"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW install missing PyYAML"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I03.E04"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-082-rw-install-missing-pyyaml-preflight",
              children: "BR-082"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mode C, no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            }), " scaffold"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I03.E12"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold",
              children: "BR-088"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fresh kanban pattern mismatch (lowercase epics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I03.E21"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout",
              children: "BR-083"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff",
              children: "BR-086"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban contamination on “fresh” path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I02.E08"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-037-kanban-install-consumer-board-contamination",
              children: "BR-037"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greenfield orchestrator: RW step failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I01.S01"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(wrapper — look for child ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I03.*"
            }), " above)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greenfield orchestrator: Kanban step failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I01.S02"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["(wrapper — look for child ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I02.*"
            }), " above)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use these as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exercise debrief"
      }), " scenarios: “If you see ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I03.E21"
      }), ", flip to Appendix …”"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-what-shipped-in-public-adk",
      children: "4. What shipped in public ADK"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-canonical-sources-do-not-duplicate-in-book--link-or-sync",
      children: "4.1 Canonical sources (do not duplicate in book — link or sync)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Artifact"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Path in public ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ai-dev-kit"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Machine-readable registry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/config/install-error-codes.yaml"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Taxonomy ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Emitter library"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/adk_install_errors.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doc generator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts/generate_install_error_docs.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adopter troubleshooting appendix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md"
            }), " § Install error codes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Install entry point callout"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), " § Install error codes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub issue fields"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".github/ISSUE_TEMPLATE/bug_report.yml"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "feedback.yml"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "adk_error_code"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-installers-that-emit-codes-v1",
      children: "4.2 Installers that emit codes (v1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Script"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role in greenfield"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I01"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_greenfield_path.py"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Orchestrator; wraps RW + Kanban subprocess failures as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S01"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S02"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I02"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_kanban_framework.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban framework copy + fresh/migration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I03"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_release_workflow.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW config, validators, mode C fresh kanban"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I04"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_github_issue_signoff.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-install GitHub contract sign-off"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CLI ", (0,jsx_runtime.jsx)(_components.code, {
        children: "adk install"
      }), " adds JSONL events with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "adk_error_code"
      }), " on failure; standalone Python installers print ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "stderr banners"
      }), " in v1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-console-banner-format",
      children: "4.3 Console banner format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "ERROR [ADK-I03.E04] RW installer dependencies missing\n  → pip install 'pyyaml>=6.0'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["First line: fixed shape ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ERROR [{code}] {summary from registry}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optional second line: first remediation step from registry"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Additional detail may appear above/below from the installer; the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "code line is the anchor"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SemVer banner (UXR-016) appears at session start, e.g.:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "AI Dev Kit v0.4.879+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-code-taxonomy-reader-friendly",
      children: "5. Code taxonomy (reader-friendly)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-{DOMAIN}{PROCESS}.{SUB}[:QUALIFIER]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Part"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "v1 meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DOMAIN"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lifecycle area"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "I"
            }), " = install/setup (", (0,jsx_runtime.jsx)(_components.code, {
              children: "V"
            }), " validate, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "R"
            }), " runtime — reserved)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PROCESS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Which installer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "01"
            }), " greenfield, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "02"
            }), " kanban, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "03"
            }), " RW, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "04"
            }), " sign-off"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SUB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure class"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "E04"
            }), " missing deps, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E12"
            }), " version file, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E21"
            }), " pattern mismatch, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "S01"
            }), " orchestrator RW step"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "QUALIFIER"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-fatal modifier"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ":W01"
            }), " warning (e.g. partial success with exit 0)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stability promise (book can cite this):"
      }), " Codes are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "API"
      }), ". A given code keeps the same meaning within a registry minor version. If semantics change, a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new"
      }), " sub-code is added; old codes may be marked deprecated in YAML."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Anchor convention for book links:"
      }), " lowercase, dots and colons → hyphens:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ADK-I03.E12"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#adk-i03-e12"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ADK-I03.E90:W01"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#adk-i03-e90-w01"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-complete-v1-catalog-registry-100",
      children: "6. Complete v1 catalog (registry 1.0.0)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use this table as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "book appendix seed"
      }), ". Regenerate from public ADK when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "registry_version"
      }), " bumps."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Summary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "First remediation step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Book exercise hook"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I01.S01"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greenfield RW install step failed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review output above for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I03.*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup spine after RW subprocess"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I01.S02"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greenfield Kanban install step failed"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Review output above for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I02.*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setup spine after Kanban subprocess"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I02.E01"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban framework install failed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capture full console transcript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic Kanban install failure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I02.E08"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kanban path contamination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use clean target or remediation tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“Fresh” install on dirty tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I03.E04"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW dependencies missing (PyYAML)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pip install 'pyyaml>=6.0'"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Common"
            }), " — venv not activated"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I03.E12"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            }), " missing / scaffold skipped"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Re-run installer; accept scaffold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mode C greenfield"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I03.E21"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rw-config pattern mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Align epic/story patterns with disk layout"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Common"
            }), " — lowercase epic folders"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I03.E90"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW install PARTIAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complete numbered follow-ups at end of output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“Install succeeded but…”"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["ADK-I03.E90", ":W01"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PARTIAL (warning, exit 0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address follow-ups before first RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as E90; non-blocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ADK-I04.E01"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub sign-off not READY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run sign-off script; fix NOT READY items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-install checklist chapter"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Full symptom text and all remediation bullets:"
      }), " run in public ADK checkout:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/workflow-mgt/scripts/generate_install_error_docs.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Or read the generated section in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide#install-error-codes-adk",
        children: "framework-dependency-troubleshooting-guide.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-process-flow-for-one-diagram-in-the-book",
      children: "7. Process flow (for one diagram in the book)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n  A[Reader runs greenfield install] --> B{I01 orchestrator}\n  B --> C[I03 RW install]\n  B --> D[I02 Kanban install]\n  C -->|fail| E[\"ADK-I03.E** or I01.S01\"]\n  D -->|fail| F[\"ADK-I02.E** or I01.S02\"]\n  C -->|partial| G[\"ADK-I03.E90 / :W01\"]\n  B --> H[I04 sign-off]\n  H -->|fail| I[ADK-I04.E01]\n  E --> J[Reader copies SemVer + ADK line]\n  F --> J\n  G --> J\n  I --> J\n  J --> K[Appendix lookup or GitHub issue]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-manuscript-placement-recommendations",
      children: "8. Manuscript placement recommendations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-setup-spine-eg-expensetracker-t03",
      children: "8.1 Setup spine (e.g. ExpenseTracker T03)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Moment"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Book element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Suggested treatment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Before first install command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callout box"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["“Watch for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "AI Dev Kit v…"
            }), " at the top — that’s your release ID.”"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After failed install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“Don’t panic” sidebar"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["“Find the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ERROR [ADK-…]"
            }), " line. That’s your lookup key.”"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After partial install"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Note"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I03.E90"
            }), " means follow the numbered list at the bottom of the output"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "End of setup chapter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checklist"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SemVer banner seen ✓ · Sign-off passed or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I04.E01"
            }), " resolved ✓"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-troubleshooting-chapter",
      children: "8.2 Troubleshooting chapter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary pattern:"
        }), " Code → symptom → steps (mirror registry order, not filesystem order)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avoid:"
        }), " Long path-based diagnosis in body text; move paths to “maintainer deep dive” or public doc links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Include:"
        }), " Two-token reporting worked example (screenshot or monospace block)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-appendix-recommended-title",
      children: "8.3 Appendix (recommended title)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "“Install error codes (ADK-*)”"
      }), " — paste generated markdown from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "generate_install_error_docs.py"
      }), " or sync table from §6 above."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pin a footnote: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Registry version 1.0.0 — AI Dev Kit v0.4.879+1 and later."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-byop-parallel-track",
      children: "8.4 BYOP parallel track"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same codes apply. BYOP readers may hit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ADK-I03.E21"
      }), " more often (custom kanban layout). Emphasize pattern alignment over template paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-head-first-tone--sample-callout-editable",
      children: "8.5 Head First tone — sample callout (editable)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Your install just yelled ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ERROR [ADK-I03.E04]"
          })]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["That’s not gibberish — it’s a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stable name"
        }), " for “PyYAML isn’t in this Python.” Note the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AI Dev Kit v…"
          })
        }), " line at the top too. Together they tell support exactly which release and which failure class you hit, without uploading your whole repo tree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-reader-feedback-and-github-issues",
      children: "9. Reader feedback and GitHub issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-what-to-ask-readers-to-paste",
      children: "9.1 What to ask readers to paste"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "AI Dev Kit v0.4.879+1\nERROR [ADK-I03.E21] RW install kanban path or pattern mismatch\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Optional: output of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "adk logs prepare-feedback-payload"
      }), " (contract ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.1.0"
      }), " includes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.primary_adk_error_codes"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-public-issue-templates",
      children: "9.2 Public issue templates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Readers filing against ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "RMS-Ltd/ai-dev-kit"
        })
      }), " will see:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AI Dev Kit SemVer"
        }), " (from UXR-016 fields)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Install error code (ADK-*)"
        }), " — placeholder ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ADK-I03.E04"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Book alpha channel should mirror the same two fields."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-maintainer-sync-playbook-book-repo",
      children: "10. Maintainer sync playbook (book repo)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When public ADK adds or changes codes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check delivery version"
        }), " — FR-108 landed at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.6.9.20+1"
        }), " / SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.4.879+1"
        }), " minimum."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
            children: "registry_version"
          })]
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install-error-codes.yaml"
        }), " (currently ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1.0.0"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regenerate appendix fragment:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd vendor/ai-dev-kit   # or submodule path\npython packages/frameworks/workflow-mgt/scripts/generate_install_error_docs.py \\\n  --output /path/to/book/docs/.../appendix-install-error-codes.md\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update book footnote"
        }), " with new registry version and minimum ADK SemVer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scan setup spine"
        }), " for new common codes (grep public CHANGELOG for FR-108 / install)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Run book dry-run"
        }), " on ExpenseTracker + one BYOP path; confirm banners appear."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Do not"
      }), " hand-edit code meanings in the book appendix — sync from YAML SoT."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-verification-checklist-fr-108-ac6--book",
      children: "11. Verification checklist (FR-108 AC6 — book)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use during alpha / technical review:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Setup chapter mentions ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SemVer banner + ADK code"
        }), " reporting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Appendix lists all codes in registry ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1.0.0"
        }), " (or documents minimum ADK version if subset)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "At least one exercise debrief references a real code (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ADK-I03.E21"
        }), " for lowercase epic layout)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Troubleshooting chapter does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " require readers to know maintainer kanban path conventions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Alpha feedback form collects both tokens"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Book pins a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "minimum public ADK tag"
        }), " that includes FR-108 (≥ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.4.879+1"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-out-of-scope-v1--do-not-promise-in-book-yet",
      children: "12. Out of scope (v1 — do not promise in book yet)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Deferred"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-R*"
            }), " runtime / RW execution errors"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install/setup only in v1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "adk doctor --explain ADK-I03.E12"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planned; offline registry lookup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "i18n / localized remediation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "English registry only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic child-code parsing on greenfield wrapper"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reader must scroll for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I03.*"
            }), " under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "I01.S01"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Every possible install failure has a unique code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "v1 is seed catalog (~10 codes); prose may still appear for edge cases"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-cross-repo-references",
      children: "13. Cross-repo references"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Public ADK link"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Repository split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off",
              children: "ADR-006"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent handoff (general)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/book-project/agent-handoff-context",
              children: "agent-handoff-context.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Install entry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
              children: "INSTALL_IN_YOUR_PROJECT.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full troubleshooting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/framework-dependency-troubleshooting-guide",
              children: "framework-dependency-troubleshooting-guide.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLI JSON / feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/documentation/user-docs/cli-configuration-guide",
              children: "cli-configuration-guide.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation task"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108",
              children: "T20"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Planning package"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E06S09T20-install-setup-error-code-registry-fr108",
              children: "IPP-E6S9T20"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-suggested-epic-24-tasks-private-repo",
      children: "14. Suggested Epic 24 tasks (private repo)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "suggested"
      }), " book-repo kanban items — file in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit-book"
      }), " only:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task idea"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deliverable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Appendix sync"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Generated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "appendix-install-error-codes.md"
            }), " from public generator"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Setup spine T03 edit"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callouts + debrief for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ADK-I03.E04"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E21"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E12"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Troubleshooting refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replace path-heavy diagnosis with code-first flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Alpha feedback form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SemVer + ADK code fields aligned with public templates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Figure / screenshot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotated terminal showing both tokens"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maintainer:"
      }), " Ruari Mears", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active — pending book manuscript integration and alpha verification"]
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