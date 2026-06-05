"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["57087"], {
13622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_docusaurus_corpus_triage_fr_067_md_c3f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-docusaurus-corpus-triage-fr-067-md-c3f.json
var site_docs_maintenance_docusaurus_corpus_triage_fr_067_md_c3f_namespaceObject = JSON.parse('{"id":"maintenance/docusaurus-corpus-triage-fr-067","title":"Docusaurus corpus triage (FR-067 / E5:S09:T03)","description":"FR: FR-067","source":"@site/../docs/maintenance/docusaurus-corpus-triage-fr-067.md","sourceDirName":"maintenance","slug":"/maintenance/docusaurus-corpus-triage-fr-067","permalink":"/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/docusaurus-corpus-triage-fr-067.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-30T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Docusaurus CI dedup verification evidence — E05:S09:T14 Wave 2","permalink":"/ai-dev-kit/docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2"},"next":{"title":"FR-099 Phase 3 — Public RMS-Ltd/ai-dev-kit bootstrap","permalink":"/ai-dev-kit/docs/maintenance/fr099-phase3-public-repo-bootstrap"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/docusaurus-corpus-triage-fr-067.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-30T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Docusaurus corpus triage (FR-067 / E5:S09)';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Failure classes addressed",
  "id": "failure-classes-addressed",
  "level": 2
}, {
  "value": "Excludes (unchanged vs FR-066)",
  "id": "excludes-unchanged-vs-fr-066",
  "level": 2
}, {
  "value": "Scale / stats (approximate)",
  "id": "scale--stats-approximate",
  "level": 2
}, {
  "value": "Deferred outcomes (explicit owners)",
  "id": "deferred-outcomes-explicit-owners",
  "level": 2
}, {
  "value": "Verification",
  "id": "verification",
  "level": 2
}, {
  "value": "Wave 3 spot-check evidence (BR-068 / <strong>E5:S09</strong> — TD2–TD3)",
  "id": "wave-3-spot-check-evidence-br-068--e5s09--td2td3",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    del: "del",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
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
        id: "docusaurus-corpus-triage-fr-067--e5s09",
        children: ["Docusaurus corpus triage (FR-067 / E5:S09", ":T03", ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
        children: "FR-067"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T03-docusaurus-build-triage-fr-067",
        children: ["E5:S09", ":T03"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Triage to achieve ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " exit 0"]
      }), " for the FR-066 publish scope (", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "../docs/"
      }), " with changelog-archive excludes)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "failure-classes-addressed",
      children: "Failure classes addressed"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDX JSX / expressions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Escaped or rephrased ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<N"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{placeholder}"
            }), " patterns; PIR templates use HTML entities; automated ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts/escape_mdx_placeholders.py"
            }), " for common tokens outside fenced code"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MDX in templates / docs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Curly-brace placeholders (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{epic\\}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\{PROJECT_NAME\\}"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{Name}"
            }), ", etc.) escaped or rewritten so MDX does not treat them as expressions"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assets / embeds"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/knowledge/guides/building-persistent-knowledge",
              children: "building-persistent-knowledge.md"
            }), ": YouTube iframe → markdown link; missing PNGs → prose figure notes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Broken markdown links"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Policy (post–T08):"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenLinks: 'throw'"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenMarkdownLinks: 'throw'"
            }), " — corpus link repairs with ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E5:S09", ":T08"]
            }), "; regressions fail ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Relative links ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "outside"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " plugin root (", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../../INSTALL_*"
            }), ", traversals into ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Policy (Wave 1 — BR-068 / ", (0,jsx_runtime.jsxs)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068",
                children: ["E5:S09", ":T11"]
              }), "):"]
            }), " use ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["canonical GitHub ", (0,jsx_runtime.jsx)(_components.code, {
                children: "blob"
              }), " URLs"]
            }), " or optional in-", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " stubs — see ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-e5s09t11",
              children: "portal README — BR-068 monorepo links"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/implementation-cycles/IPW-E5S09T11-docusaurus-monorepo-markdown-links-br068",
                children: "IPW-E5S9T11"
              })
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wave 2"
            }), " corpus edits shipped ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.11+3"
              })
            }), " (strict ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "npm run build"
              })
            }), " green)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Broken anchors (", (0,jsx_runtime.jsx)(_components.code, {
              children: "#fragment"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Policy (post–T10):"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenAnchors: 'throw'"
            }), " — corpus anchor/heading alignment with ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E5:S09", ":T10"]
            }), " (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-067 FU-3"
            }), " done at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.10+2"
              })
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Out-of-plugin relative links (Wave 2 — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-090"
            }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E5:S09", ":T13"]
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "2026-06-05 triage:"
            }), " After Wave 1 faster dep fix, failures were MDX ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenMarkdownLinks"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onBrokenAnchors"
            }), " — targets included ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../.claude/commands/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../.cursorrules"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../.cursor/skills/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../packages/frameworks/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../scripts/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../src/*"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "../../tests/*"
            }), ", repo-root configs, deleted ", (0,jsx_runtime.jsx)(_components.code, {
              children: "book-proj/"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "epic-24/"
            }), " stubs, and stale task anchors. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Repair:"
            }), " BR-068 Strategy A (", (0,jsx_runtime.jsx)(_components.code, {
              children: "github.com/RMS-Ltd/ai-dev-kit/blob/main/…"
            }), "); in-corpus path depth fixes; anchor hash removal where Docusaurus slug mismatch; heading slug alignment for workflow-flaws WF-* IDs. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Primary offenders:"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet",
              children: "workflow-initiation-cheatsheet.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-agent-index",
              children: "project-agent-index.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/developer-tools/ide-whitelist-guide",
              children: "ide-whitelist-guide.md"
            }), ", kanban task/FR docs, IPP publish scope. Target release: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.13+2"
              })
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Out-of-plugin relative links (Wave 5 — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-068"
            }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["E5:S09", ":T11"]
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "2026-06-05:"
            }), " Canonical ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T11-docusaurus-monorepo-markdown-link-resolution-br068",
              children: "IPP-E05S09T11"
            }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tests/test_portal_br068_monorepo_links.py"
              })
            }), " — resolves each ", (0,jsx_runtime.jsx)(_components.code, {
              children: "[text](relative)"
            }), " under FR-066 publish scope and fails when the target leaves ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stragglers repaired:"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-workflow-structure",
              children: "ultimate-canonical-workflow-structure.md"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow-registry.yaml"
            }), "), ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks",
              children: "migration-plan-embedded-to-discrete-tasks.md"
            }), " (kanban scripts table), ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification",
              children: "IPP-E02S13T10"
            }), ". Target release: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.11+6"
              })
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "excludes-unchanged-vs-fr-066",
      children: "Excludes (unchanged vs FR-066)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-and-release-notes/changelog-archive/**"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge/changelog-and-release-notes/changelog-archive/**"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Listed in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
        children: "portal/README.md (repository root)"
      }), " under ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Excluded"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scale--stats-approximate",
      children: "Scale / stats (approximate)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Files touched:"
        }), " wide sweep across ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/**/*.md"
        }), " (MDX-safe placeholders, story-011 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<sup>"
        }), " fix, ICW numerics, runbook tags, RW-AGENT placeholders, task-template-generator wording, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/escape_mdx_placeholders.py"
        }), " (re-runnable for new docs; skips ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive"
        }), " tree)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/docusaurus.config.js"
        }), " — link + anchor check mode ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "throw"
          })
        }), "; see portal README"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deferred-outcomes-explicit-owners",
      children: "Deferred outcomes (explicit owners)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " rely on conversation memory. Later work is on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR / task"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Owner"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.del, {
              children: ["Switch link check from ", (0,jsx_runtime.jsxs)(_components.strong, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "warn"
                }), " → ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "throw"
                })]
              }), " after corpus link repair"]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Done — E5:S09", ":T08"]
            }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.8+2"
              })
            }), ". Ongoing hygiene: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow",
                children: "FR-058"
              })
            }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FU-1"
            }), " closed on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
                children: "FR-067"
              })
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Populate ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub Releases"
            }), " for SemVer tags"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsxs)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails",
                children: ["E2:S16", ":T03"]
              })
            }), " (RW Step 12.5); ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance",
                children: "FR-041"
              })
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FU-2"
            }), " on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
                children: "FR-067"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.del, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Strict broken anchors"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "onBrokenAnchors"
              }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "throw"
                })
              }), ")"]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Done — E5:S09", ":T10"]
            }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "v0.5.9.10+2"
              })
            }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-067 FU-3"
            }), " closed on ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
                children: "FR-067"
              })
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cd portal && npm run build"
        }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " (Node 20+; CI representative)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optional: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PORTAL_BUILD_STRICT=1 pytest -m portal_build"
        }), " for gate"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "wave-3-spot-check-evidence-br-068--e5s09--td2td3",
      children: ["Wave 3 spot-check evidence (BR-068 / ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E5:S09", ":T11"]
      }), " — TD2–TD3)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Recorded ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-04-19"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.9.11+4"
        })
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "--art"
        })
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TD2 (failure-class smoke):"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL"
          })
        }), " / repo-root — sample ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/documentation/user-docs/install-receipt-reference.md"
          })
        }), " (GitHub ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "blob"
          })
        }), " INSTALL); ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/**"
          })
        }), " — sample ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/implementation-cycles/IPW-E6S7T103-release-workflow-maintenance-perpetual.md"
          })
        }), " (validator scripts + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          })
        }), " as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "blob"
          })
        }), "); ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ADR-003"
          })
        }), " sample cross-links into ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "project-management"
          })
        }), " / ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL"
          })
        }), " per Strategy A."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TD3 (internal regression):"
        }), " No ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "warn"
          })
        }), " downgrade of FR-067 strict hooks; fixes were corpus targets + MDX-safe prose only."]
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