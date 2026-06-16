"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["4765"], {
8395(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_guides_workflow_initiation_cheatsheet_md_292_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-guides-workflow-initiation-cheatsheet-md-292.json
var site_docs_guides_workflow_initiation_cheatsheet_md_292_namespaceObject = JSON.parse('{"id":"guides/workflow-initiation-cheatsheet","title":"Workflow initiation cheatsheet","description":"Last verified against: 2026-06-10 (.cursorrules, .claude/commands/rw.md, ukw.md, ipw.md, idw.md, mwf.md; MWF delivery recipe; IDW --rw chain; FR-124; FR-085 UKW --rp / ADR-009; FR-102 UKW -c / ADR-010; BR-067 RW -d --dpz; UXR-022; UXR-024 local-default RW)","source":"@site/../docs/guides/workflow-initiation-cheatsheet.md","sourceDirName":"guides","slug":"/guides/workflow-initiation-cheatsheet","permalink":"/ai-dev-kit/docs/guides/workflow-initiation-cheatsheet","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/guides/workflow-initiation-cheatsheet.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":"null","created_at":"2026-05-30T20:00:00Z","expires_at":"null","housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Getting Started","permalink":"/ai-dev-kit/docs/guides/getting-started/"},"next":{"title":"Documentation portal index","permalink":"/ai-dev-kit/docs/documentation/docusaurus-portal-index"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// CONCATENATED MODULE: ../docs/guides/workflow-initiation-cheatsheet.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: 'null',
	created_at: '2026-05-30T20:00:00Z',
	expires_at: 'null',
	housekeeping_policy: 'keep'
};
const contentTitle = 'Workflow initiation cheatsheet';

const assets = {

};



const toc = [{
  "value": "1. Quick decision tree",
  "id": "1-quick-decision-tree",
  "level": 2
}, {
  "value": "2. Release Workflow (RW)",
  "id": "2-release-workflow-rw",
  "level": 2
}, {
  "value": "3. Update Kanban Workflow (UKW)",
  "id": "3-update-kanban-workflow-ukw",
  "level": 2
}, {
  "value": "4. Implementation Planning Workflow (IPW) / ICW",
  "id": "4-implementation-planning-workflow-ipw--icw",
  "level": 2
}, {
  "value": "4b. Implementation Delivery Workflow (IDW)",
  "id": "4b-implementation-delivery-workflow-idw",
  "level": 2
}, {
  "value": "4c. Meta-Workflow (MWF)",
  "id": "4c-meta-workflow-mwf",
  "level": 2
}, {
  "value": "5. Changelog Management Workflow (CMW)",
  "id": "5-changelog-management-workflow-cmw",
  "level": 2
}, {
  "value": "6. Package Version Workflow (PVW)",
  "id": "6-package-version-workflow-pvw",
  "level": 2
}, {
  "value": "7. Common sequences",
  "id": "7-common-sequences",
  "level": 2
}, {
  "value": "8. Canonical deep links",
  "id": "8-canonical-deep-links",
  "level": 2
}, {
  "value": "Related workflows (not detailed here)",
  "id": "related-workflows-not-detailed-here",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "workflow-initiation-cheatsheet",
        children: "Workflow initiation cheatsheet"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last verified against:"
      }), " 2026-06-10 (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".claude/commands/rw.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ukw.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ipw.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idw.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mwf.md"
      }), "; MWF ", (0,jsx_runtime.jsx)(_components.code, {
        children: "delivery"
      }), " recipe; IDW ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--rw"
      }), " chain; FR-124; FR-085 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UKW --rp"
      }), " / ADR-009; FR-102 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UKW -c"
      }), " / ADR-010; BR-067 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW -d --dpz"
      }), "; UXR-022; UXR-024 local-default RW)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent source of truth:"
        }), " If this cheatsheet and ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), " (source)"]
        }), " or ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/.claude/commands",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: ".claude/commands/"
          }), " (source)"]
        }), " diverge, ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: ".cursorrules"
          }), " wins"]
        }), " for agent behavior. This page is a human quick-reference for ", (0,jsx_runtime.jsx)(_components.em, {
          children: "which command to type"
        }), " — not full execution steps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md",
        children: ["E02:S16", ":T15"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-015-workflow-initiation-cheatsheet.md",
        children: "UXR-015"
      }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md",
        children: ["E02:S16", ":T19"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-022-rw-doc-policy-zero-short-flag-dpz.md",
        children: "UXR-022"
      }), " · ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T21-rw-local-release-default-no-push-uxr024.md",
        children: ["E02:S16", ":T21"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md",
        children: "UXR-024"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-quick-decision-tree",
      children: "1. Quick decision tree"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "I want to…"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Release completed work"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S16:T15"
            }), " (full), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d E02:S16:T15"
            }), " (docs-only), or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k E02:S16:T15"
            }), " (kanban-init)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plan before implementing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPW E02:S16:T15"
            }), " (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "plan mode first"
            }), ") or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw E02:S16:T15"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement from IPP"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IDW E02:S16:T15"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/idw E02:S16:T15"
            }), " (implementation mode; linked IPP required)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full pipeline (plan → implement → release)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MWF E02:S16:T15 delivery"
            }), " — orchestrates IPW → IDW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            }), " (continuous; sub-agent legs)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implement + release (chain)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IDW E02:S16:T15 --rw"
            }), " — local-complete RW after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW COMPLETE"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sync all kanban docs (global)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), " then ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clear completed rows from active boards (archive to completed ledgers)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c"
            }), " then ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fix suspected kanban drift (specific)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -ad <targets>"
            }), " then ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            }), " — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "planned"
            }), " (not yet in ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maintain changelog size/order"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CMW"
            }), " then ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bump package versions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PVW"
            }), " (or automatic at RW Step 2.5)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce Cursor terminal approval friction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/developer-tools/ide-whitelist-guide",
              children: "IDE whitelist guide"
            }), " (pattern catalog + validator; ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md",
              children: ["E06:S07", ":T107"]
            }), ")"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples use padded E/S/T"
      }), " (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-014-two-digit-est-identifier-default-formatting.md",
        children: "UXR-014"
      }), "): ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S16:T15"
      }), ", compact ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02S16T15"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-release-workflow-rw",
      children: "2. Release Workflow (RW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S16:T15"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/rw E02:S16:T15"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Local-complete release"
            }), " (version, changelog, kanban, commit, tag) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no push"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md",
              children: "UXR-024"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S16:T15 --push"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full release ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "with"
            }), " Step 12 push + Step 12.5 GitHub Release"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d E02:S16:T15"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Docs-only release"
            }), " (documentation path; not kanban drift repair). On an ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "existing"
            }), " E:S", ":T", " use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--art"
            }), " and optionally ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--dpz"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "--doc-policy-zero"
            }), " alias; BUILD +0 policy; see ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md",
              children: "BR-067"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -k E02:S16:T15"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kanban-init release (local-default; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--push"
            }), " for immediate remote)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "… --art"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Adopt requested E:S", ":T", " as canonical version anchor"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "… --dpz"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["BUILD +0 only when ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "you"
            }), " typed it, HEAD BUILD is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "untagged"
            }), ", and BUILD=0 doc-init path (alias: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--doc-policy-zero"
            }), "; ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md",
              children: "BR-067"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "… --push"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Opt-in Step 12 + 12.5 (remote push + GitHub Release) — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "you must type it"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "… --confirmed-override"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 1d intent override (after explicit user confirmation)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Same-task follow-on release (BR-097):"
      }), " Default is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BUILD +1"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "RW E02:S16:T15 --art"
      }), "). Never reuse a tagged BUILD; never ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git tag -f"
      }), " on release tags — bump BUILD and re-RW instead."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CQG ≠ CI ship gate:"
      }), " Local CodeQL (CQG at IDW Phase 6b) and GitHub CodeQL workflows do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " replace ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tests"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Docusaurus"
      }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Greenfield install"
      }), ". RW Step ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9.7"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "validate_actions_ci_parity.py"
      }), ") is the release ship gate for workflow checks (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-104-codeql-cqg-green-does-not-imply-actions-ci-green.md",
        children: "BR-104"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Operator batch push (after local RW runs):"
      }), " Run local parity ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "and"
      }), " remote no-red-ship check on the commit(s) you are about to publish, then push branch once and each pending release tag explicitly — never ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git push origin {branch} --tags"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/validation/validate_actions_ci_parity.py\" --strict --all\npython \"packages/frameworks/workflow-mgt/scripts/validation/validate_github_actions_remote.py\" --strict --branch \"$(git branch --show-current)\"\ngit push origin \"$(git branch --show-current)\"\ngit push origin refs/tags/v{internal_version}   # repeat per local RW not yet pushed\n# task-touch mode: also git push origin refs/tags/v{semver_core}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Or per release: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "python packages/frameworks/workflow-mgt/scripts/version/push_rw_release.py --branch \"{branch}\" --internal-version \"{internal_version}\""
      }), ". Sync remote tags first: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git fetch origin --tags --force"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Step 12 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--push"
        }), " only):"]
      }), " Same rules — never ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--tags"
      }), "; use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push_rw_release.py"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refs/tags/v{release}"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prerequisites"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool/bash access; on correct epic branch; task token in message"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking gates (before edits)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 1 branch safety → 1b task token → 1c task complete → 1d task intent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking gates (before commit)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Step ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "9.7"
            }), " Actions CI parity (", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_actions_ci_parity.py --strict"
            }), "; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--allow-path-skip"
            }), " only for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d"
            }), " docs-only)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handoff"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Commits + local tags via RW; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "never push by default"
            }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "push"
            }), " only after Step 9.7 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--strict --all"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "and"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_github_actions_remote.py --strict"
            }), " pass"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Completion"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RW COMPLETE (local)"
            }), " default · ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW COMPLETE (pushed)"
            }), " when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--push"
            }), " used"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocked session"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry."
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deep dive:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/rw.md",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), " (source)"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md",
        children: "Release Workflow agent execution guide"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-update-kanban-workflow-ukw",
      children: "3. Update Kanban Workflow (UKW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ukw"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Comprehensive"
            }), " — bookkeeping + priorities + gap discovery (Step 2.5); Step 6 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Part B.1"
            }), " enumerates all open story-checklist tasks onto MoSCOW (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md",
              children: "BR-059"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -u"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bookkeeping only (no MoSCOW reprioritization; no Step 2.5)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -p"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update MoSCOW priorities only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -a E02:S16:T15"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assign priorities to target(s) only — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " drift repair"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -u -p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -u -a <target>"
            }), ", etc."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined sub-workflows per flag matrix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -ad <targets>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Address Drift"
            }), " — targeted project-state kanban reconciliation — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "planned"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep reprioritization"
            }), " (standalone) — intent/dependency/blocker/impact analysis on kboard + fbuboard; emits rationale (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md",
              children: "ADR-009"
            }), "). ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not"
            }), " combinable with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-u"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -c"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Archive completed"
            }), " (standalone) — upsert ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".adk/kanban-completed.db"
            }), " via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "append_kanban_completed.py"
            }), ", refresh ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban-completed.pdf"
            }), ", append ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/intake-completed.md",
              children: "intake-completed.md"
            }), ", then remove terminal MoSCOW rows (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md",
              children: "ADR-010"
            }), ", ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-134-kanban-completed-sqlite-ledger-pdf-report.md",
              children: "FR-134"
            }), "). ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Not"
            }), " combinable with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-u"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Flag disambiguation (easy to confuse):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Workflow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Docs-only ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "release"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--dpz"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "D"
            }), "oc-", (0,jsx_runtime.jsx)(_components.strong, {
              children: "p"
            }), "olicy-", (0,jsx_runtime.jsx)(_components.strong, {
              children: "z"
            }), "ero — explicit BUILD +0 override (alias: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--doc-policy-zero"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Opt-in Step 12 + 12.5 (remote push + GitHub Release); default RW is local-only (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md",
              children: "UXR-024"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UKW"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assign ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "priorities"
            }), " to targets"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-ad"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "UKW"
            }), " (planned)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Address"
            }), " kanban ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "d"
            }), "rift vs project state"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--rp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UKW"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "RePrioritise"
            }), " — standalone deep MoSCOW reorder (not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d"
            }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -a"
            }), "; distinct from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -p"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UKW"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Archive completed"
            }), " — move terminal rows to completed ledgers (not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW -d"
            }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -a"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IDW"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chain ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "local-complete RW"
            }), " after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW COMPLETE"
            }), " (lowercase; not an RW flag)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--push"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--art"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MWF"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forward to IDW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            }), " leg when using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MWF E:S:T delivery"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-a"
        }), " target syntax:"]
      }), " single task ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S16:T15"
      }), "; multiple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S16:T13,E02:S16:T14"
      }), "; range ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S16:T13-E02:S16:T15"
      }), "; story ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02:S16"
      }), "; epic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E02"
      }), "; all unprioritized ", (0,jsx_runtime.jsx)(_components.code, {
        children: "all"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prerequisites"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool/bash access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handoff"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UKW stages kanban files; you run ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW"
              })
            }), " to commit (attributes perpetual UKW task)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocked session"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "UKW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry."
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deep dive:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ukw.md",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ukw.md"
        }), " (source)"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md",
        children: "Update Kanban Workflow agent execution guide"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-implementation-planning-workflow-ipw--icw",
      children: "4. Implementation Planning Workflow (IPW) / ICW"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPW E02:S16:T15"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/ipw E02:S16:T15"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation planning for host task (Claude Code)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW E02:S16:T15 --skip-tests"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip test-design section (doc-only tasks; justification required in IPP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ICW E02:S16:T15"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor legacy alias — same planning contract as IPW"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prerequisites"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Plan mode required"
            }), " (Cursor ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/plan"
            }), " or Claude plan session); tool access"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handoff"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Produces ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E…S…T…-*.md"
            }), " (or ICW trio); link from task; then ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IDW E02:S16:T15"
              })
            }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "implement"
            }), ") — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "IPW does not chain to IDW/RW by default"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Planning package"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md",
              children: "IPP-E2S16T15-workflow-initiation-cheatsheet.md"
            }), " (example)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocked (plan mode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW BLOCKED: plan mode required. Type /plan to enter plan mode, then invoke /ipw again from within the plan session."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocked (tools)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IPW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry."
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deep dive:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ipw.md",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/ipw.md"
        }), " (source)"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md",
        children: "FR-042"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4b-implementation-delivery-workflow-idw",
      children: "4b. Implementation Delivery Workflow (IDW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IDW E02:S16:T15"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/idw E02:S16:T15"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute linked IPP for host task (tests, code, docs, status reconciliation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW E02:S16:T15 --rw"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["IDW then ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "local-complete"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            }), " for same task"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW E02:S16:T15 --rw --push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IDW then RW with Step 12 push + 12.5 GitHub Release"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW E02:S16:T15 --rw --art"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["IDW then RW with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--art"
            }), " version adoption"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prerequisites"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation mode"
            }), " (not plan mode); tool access; linked IPP/ICW on task; branch safety gate"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Invoking ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IDW E:S:T"
              })
            }), " satisfies FR-083 implementation gate (no separate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "implement"
            }), " required)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocking gate (Phase 6b)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CQG"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_code_quality_gate.py --strict"
            }), ") when Python in scope; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--skip"
            }), " for docs-only (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md",
              children: "ADR-022"
            }), " v0.0.2)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handoff"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "IDW COMPLETE"
              })
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S16:T15"
            }), " when not using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            }), "; or automatic RW when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocked (plan mode)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW BLOCKED: plan mode is active. Exit plan mode, then invoke /idw again."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocked (tools)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry."
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Flags:"
      }), " lowercase long form (", (0,jsx_runtime.jsx)(_components.code, {
        children: "--rw"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--push"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--art"
      }), "). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--push"
      }), " requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--rw"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deep dive:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/idw.md",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/idw.md"
        }), " (source)"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/implementation-delivery-workflow-agent-execution.md",
        children: "implementation-delivery-workflow-agent-execution.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4c-meta-workflow-mwf",
      children: "4c. Meta-Workflow (MWF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MWF E02:S03:T09 delivery"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/mwf E02:S03:T09 delivery"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Full pipeline: IPW (if no IPP) → IDW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            }), " (continuous; sub-agent legs per BR-102)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MWF E02:S03:T09 ipw,idw,rw"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Alias for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "delivery"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MWF E02:S03:T09 delivery --art"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forward ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--art"
            }), " to IDW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            }), " leg"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MWF E02:S03:T09 delivery --push"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forward ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--push"
            }), " to IDW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            }), " leg"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prerequisites"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Tool access; parseable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "E:S:T"
            }), " and recipe"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Orchestration"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["MWF delegates legs via sub-agent or inline command guide — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "no"
            }), " operator mode-switch handoff (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-102-mwf-chain-paused-instead-of-subagent-leg-delegation.md",
              children: "BR-102"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resume"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["When IPP already linked on task, skip IPW; run IDW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            }), " only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["vs IDW ", (0,jsx_runtime.jsx)(_components.code, {
                children: "--rw"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MWF"
            }), " = multi-leg (IPW→IDW→RW); ", (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["IDW ", (0,jsx_runtime.jsx)(_components.code, {
                children: "--rw"
              })]
            }), " = two-leg (impl→RW)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Blocked (tools)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MWF BLOCKED: tool execution is unavailable in this session. Switch to a session with tool access and retry."
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deep dive:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/mwf.md",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/mwf.md"
        }), " (source)"]
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/workflow-encapsulation-contract.md",
        children: "workflow-encapsulation-contract.md"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/meta-workflow-agent-execution.md",
        children: "meta-workflow-agent-execution.md"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md",
        children: "FR-124"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-changelog-management-workflow-cmw",
      children: "5. Changelog Management Workflow (CMW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CMW"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual changelog archive, ordering, and hygiene"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(automatic)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["RW Step 9.5 when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "check_changelog_size.py"
            }), " threshold exceeded (non-blocking)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prerequisites"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool access for manual runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handoff"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "CMW"
              }), " then ", (0,jsx_runtime.jsx)(_components.code, {
                children: "RW"
              })]
            }), " — attributes perpetual CMW task"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep dive"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " CMW section · ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/FR-057-update-changelog-workflow.md",
              children: "FR-057"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-package-version-workflow-pvw",
      children: "6. Package Version Workflow (PVW)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Invocation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PVW"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual package version bumps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(automatic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RW Step 2.5 after project version bump"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {})]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Prerequisites"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tool access for manual runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handoff"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Feeds into RW changelog (Step 3); usually part of full ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW"
              })
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep dive"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".cursorrules"
            }), " PVW section"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-common-sequences",
      children: "7. Common sequences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Sequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MWF E02:S16:T15 delivery"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Preferred"
            }), " full pipeline (IPW → IDW → RW); no manual mode-switch between legs"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPW E02:S16:T15"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW E02:S16:T15"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW E02:S16:T15"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New work with planning gate (manual three-step)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "IPW E02:S16:T15"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IDW E02:S16:T15 --rw"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plan, implement, local release (manual; IDW chains RW)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MWF E02:S16:T15 delivery"
            }), " (IPP exists)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resume: IDW ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--rw"
            }), " only (skips IPW leg)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global kanban sync then commit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "CMW"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changelog maintenance then commit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW -ad kboard,fbuboard"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Targeted drift repair (", (0,jsx_runtime.jsx)(_components.strong, {
              children: "planned"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "UKW --rp"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RW"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Periodic priority realignment then commit (perpetual UKW task attribution)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "UKW → RW / CMW → RW context:"
      }), " RW Step 2 detects prior workflow and attributes BUILD to the wired perpetual task (UKW or CMW)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-canonical-deep-links",
      children: "8. Canonical deep links"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Resource"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Agent trigger spec (SoT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursorrules",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: ".cursorrules"
              }), " (source)"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RW slash command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/rw.md",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: ".claude/commands/rw.md"
              }), " (source)"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UKW slash command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ukw.md",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: ".claude/commands/ukw.md"
              }), " (source)"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IPW slash command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/ipw.md",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: ".claude/commands/ipw.md"
              }), " (source)"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDW slash command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/idw.md",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: ".claude/commands/idw.md"
              }), " (source)"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MWF slash command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.claude/commands/mwf.md",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: ".claude/commands/mwf.md"
              }), " (source)"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Claude routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/CLAUDE.md",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "CLAUDE.md"
              }), " (source)"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/rw-config.yaml",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "rw-config.yaml"
              }), " (source)"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guides index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/guides/",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/guides/README.md"
              })
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-workflows-not-detailed-here",
      children: "Related workflows (not detailed here)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intake"
        }), " — FR/BR/UXR → task in same session (", (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "FR_BR_INTAKE_GUIDE.md"
          }), " (source)"]
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md",
          children: "intake-process skill (source)"
        }), "); never primary tasks on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "S00"
          })
        }), " (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md",
          children: "BR-076"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ICW"
        }), " — legacy Cursor planning trigger (prefer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global implementation gate"
        }), " — IPW/IPP required; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IDW E:S:T"
          })
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implement"
        }), " to execute (", (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/AGENTS.md",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "AGENTS.md"
          }), " (source)"]
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ")"]
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
8453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(6540);
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