"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["87084"], {
21746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_068_docusaurus_monorepo_markdown_links_break_strict_production_build_md_1b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-068-docusaurus-monorepo-markdown-links-break-strict-production-build-md-1b0.json
var site_docs_project_management_kanban_fr_br_br_068_docusaurus_monorepo_markdown_links_break_strict_production_build_md_1b0_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build","title":"Bug Report BR-068: Docusaurus strict MDX cannot resolve monorepo markdown links — production build fails","description":"Status: COMPLETE","source":"@site/../docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-04-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-067: RW first doc-only release defaults to BUILD+1 instead of BUILD+0 (doc-init policy)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero"},"next":{"title":"Bug Report BR-069: kboard row-footer timestamp overwrite and task-ID multiplication regression","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-04-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-068: Docusaurus strict MDX cannot resolve monorepo markdown links — production build fails';

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
  "value": "Scope / Affected Areas",
  "id": "scope--affected-areas",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Resolution",
  "id": "resolution",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}, {
  "value": "Intake Decision",
  "id": "intake-decision",
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
        id: "bug-report-br-068-docusaurus-strict-mdx-cannot-resolve-monorepo-markdown-links--production-build-fails",
        children: "Bug Report BR-068: Docusaurus strict MDX cannot resolve monorepo markdown links — production build fails"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH — ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "portal/"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        })]
      }), " fails under strict link/MDX rules; browsable docs site cannot be regenerated reliably while the corpus uses cross-root relative links common in GitHub-native authoring.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-04-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-04-19", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.5.9.11+5", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-068"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T11-docusaurus-monorepo-markdown-link-resolution-br068",
        children: ["E05:S09", ":T11"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The documentation portal (", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/"
      }), ") uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@docusaurus/preset-classic"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "path: '../docs'"
        })
      }), " (repository ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " only). With ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "onBrokenLinks: 'throw'"
        })
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "onBrokenMarkdownLinks: 'throw'"
        })
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "onBrokenAnchors: 'throw'"
        })
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MDX compilation fails"
      }), " when a Markdown file under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/"
      }), " contains a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relative link"
      }), " to a path ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "outside"
      }), " that plugin root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The repository’s authoring model predates this boundary: Kanban, FR/BR, ADRs, and user-docs routinely link to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repository root"
        }), " (not under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), "), via patterns such as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md"
          })
        }), " from nested ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " paths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework packages"
        }), ", e.g. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "packages/frameworks/workflow-mgt/docs/..."
          })
        }), ", via relative traversals from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " that leave the docs-plugin corpus."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), " (see ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Observed behavior"
      }), ") exits with errors such as ", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["“Markdown link with URL ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md"
        }), " … couldn't be resolved … within the current plugin”"]
      }), " — for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "many"
      }), " files, not a single typo."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Strict FR-067 / T08 / T10 “throw” behavior is working as configured; the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "defect"
      }), " is that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "the combined policy (strict gates + monorepo link graph) is incompatible"
      }), ", so the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "published site pipeline is effectively broken"
      }), " until links are normalized, stubbed, or explicitly exempted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm run build"
          })
        }), " in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/"
          })
        }), " completes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "green"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " with the same Markdown corpus intended for publication (or an explicitly documented subset via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exclude:"
        }), " / split site)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Authors have a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "single, documented pattern"
        }), " for linking to:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["repo-root install entry (", (0,jsx_runtime.jsx)(_components.code, {
              children: "INSTALL_IN_YOUR_PROJECT.md"
            }), "),"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["framework packages under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/"
            }), ","]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["and other out-of-", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), " artifacts,\nwithout breaking MDX resolution."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CI (if present) matches local build strictness so ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "main / publish branch"
        }), " cannot drift into a broken publish state."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cd portal && npm run build"
            })
          }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "failure"
          }), " (non-zero exit)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Representative MDX errors (paraphrased from compiler output):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Unresolved ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md"
              })
            }), " from e.g. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/documentation/user-docs/*.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-003-*.md"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/FR-080-*.md"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Unresolved ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "../../../../packages/frameworks/..."
              })
            }), " from Kanban / FR documents."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Additional unresolved intra-repo paths where relative navigation leaves ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "GitHub-native browsing"
          }), " of the same files often ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "works"
          }), " (different base path); ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Docusaurus"
          }), " does not accept those relative targets inside the docs plugin."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scope--affected-areas",
      children: "Scope / Affected Areas"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/docusaurus.config.js",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/docusaurus.config.js"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Docs path, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exclude"
            }), ", strict hooks"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/sidebars.js",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/sidebars.js"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autogenerated sections only — no fix without link/corpus strategy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Repository ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**/*.md"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Many relative links to root / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Root ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "INSTALL_IN_YOUR_PROJECT.md"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Canonical adopter entry ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "outside"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/"
            })]
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
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "npm run build"
          })
        }), " succeeds with policy-aligned link strategy (documented in portal README or maintenance doc)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Linking policy"
        }), " for out-of-", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " targets (INSTALL, framework paths) is recorded — e.g. stubs under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/guides/"
        }), ", approved absolute GitHub URLs, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pathname://"
        }), ", symlink, or controlled ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exclude"
        }), " — with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no silent regression"
        }), " of FR-067 strict intent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Spot-check:"
        }), " pages that previously failed MDX (INSTALL pointer from user-docs; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/"
        }), " links from fr-br) render or link per policy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional:"
        }), " CI workflow runs portal build on relevant paths — satisfied by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/docusaurus-build.yml"
            })
          })
        }), " (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-069"
        }), " / ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S09", ":T05"]
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolution",
      children: "Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Delivered:"
      }), " 2026-04-19 — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.9.11+5"
        })
      }), " (", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["RW E05:S09", ":T11", " --art"]
      }), ", Wave 4 traceability)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strategy A"
        }), " corpus normalization (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW §1.5"
        }), ") + Waves ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2–3"
        }), " verification (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TD1–TD3"
        }), ") restored strict ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/"
          })
        }), " production build (", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "throw"
          })
        }), " links/anchors unchanged vs FR-067 intent)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contributor policy:"
        }), " ", (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md#br-068-monorepo-links-outside-the-docs-plugin-E05S09T11",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "portal/README.md"
          }), " — BR-068"]
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/docusaurus-corpus-triage-fr-067",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docusaurus-corpus-triage-fr-067.md"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-067-docusaurus-production-build-corpus-triage",
          children: "FR-067"
        }), " — production corpus triage; enabled strict checks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal",
          children: "Story 009 – Docusaurus Documentation Portal"
        }), " — T08 / T10 strict links & anchors (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), " historically; this BR is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "post-completion regression class"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts",
          children: "BR-066"
        }), " — planning artifacts filing (related portal surface)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting",
          children: "FR-070"
        }), " — GitHub Pages deployment depends on green build."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Status:"
      }), " ACCEPTED (filed from maintainer decision: BR tracks Docusaurus/build defect vs monorepo link graph)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake Date:"
      }), " 2026-04-19"]
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