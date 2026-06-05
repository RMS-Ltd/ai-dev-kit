"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["20709"], {
96871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_090_docusaurus_faster_missing_dependabot_310_lockfile_drift_md_baa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-090-docusaurus-faster-missing-dependabot-310-lockfile-drift-md-baa.json
var site_docs_project_management_kanban_fr_br_br_090_docusaurus_faster_missing_dependabot_310_lockfile_drift_md_baa_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift","title":"Bug Report BR-090: Docusaurus 3.10 build fails — missing @docusaurus/faster and package.json / lockfile drift","description":"Bug ID: BR-090","source":"@site/../docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-089: RW Install Mode C — Missing main_changelog Scaffold","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-089-rw-install-mode-c-missing-main-changelog-scaffold"},"next":{"title":"Bug Report BR-091: Workflow validators hardcode legacy workflow mgt path — CI pytest gate fails","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-090: Docusaurus 3.10 build fails — missing @docusaurus/faster and package.json / lockfile drift';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Description",
  "id": "problem-description",
  "level": 2
}, {
  "value": "Observed behavior (GitHub Actions, <code>main</code>, 2026-06-04)",
  "id": "observed-behavior-github-actions-main-2026-06-04",
  "level": 3
}, {
  "value": "Root cause",
  "id": "root-cause",
  "level": 3
}, {
  "value": "Impact",
  "id": "impact",
  "level": 3
}, {
  "value": "Expected behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Proposed fix (maintainer decision)",
  "id": "proposed-fix-maintainer-decision",
  "level": 2
}, {
  "value": "Acceptance criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Steps to reproduce",
  "id": "steps-to-reproduce",
  "level": 2
}, {
  "value": "Related work",
  "id": "related-work",
  "level": 2
}, {
  "value": "Intake decision",
  "id": "intake-decision",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-090-docusaurus-310-build-fails--missing-docusaurusfaster-and-packagejson--lockfile-drift",
        children: ["Bug Report BR-090: Docusaurus 3.10 build fails — missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/faster"
        }), " and package.json / lockfile drift"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-090", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Docusaurus site build"
        })
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Docusaurus deploy to GitHub Pages"
        })
      }), " fail on every qualifying push to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), "; ~97+ failed build jobs since May 2026.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " FIXED — Wave 2 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.5.9.13+3"
      }), "; Actions ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "26992867601"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " workflow_dispatch) + ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "26992999149"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " PR #26 merge: build + deploy green)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 (post-merge CI verification)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.5.9.13+3", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090",
        children: ["E05:S09", ":T13"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
        children: "FR-069"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting",
        children: "FR-070"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build",
        children: "BR-068"
      }), " (prior build class; distinct from this regression)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dependabot merged Docusaurus ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.10.1"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/package-lock.json"
      }), "), while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/package.json"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " still pins ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.9.2"
      }), ". With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "future.v4: true"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/docusaurus.config.js"
      }), ", Docusaurus 3.10 requires ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/faster"
        })
      }), ", which is not installed — CI ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        })
      }), " exits immediately with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ERR_MODULE_NOT_FOUND"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "observed-behavior-github-actions-main-2026-06-04",
      children: ["Observed behavior (GitHub Actions, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), ", 2026-06-04)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Workflow ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Docusaurus site build"
        })
      }), " fails at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Production build"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "To enable Docusaurus Faster options, your site must add the @docusaurus/faster package\nCannot find package '@docusaurus/faster' imported from .../node_modules/@docusaurus/bundler/lib/importFaster.js\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Representative run: merge ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dev"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Merge branch 'dev' into main"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Factor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Detail"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Config"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "portal/docusaurus.config.js"
            }), " sets ", (0,jsx_runtime.jsx)(_components.code, {
              children: "future: { v4: true }"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lockfile (", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/core"
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.10.1"
            }), " (Dependabot)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "package.json"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "dev"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Still pins ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.9.2"
            }), " — drift vs lockfile on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing dep"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@docusaurus/faster"
            }), " not in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/package.json"
            }), " dependencies"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Docusaurus site build"
          })
        }), " — chronic failure (~97 runs since May 2026)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Docusaurus deploy to GitHub Pages"
          })
        }), " — same build step fails first (~91 runs)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub Actions metrics: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "~84% job failure rate"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "~303 wasted minutes"
        }), " (maintainer report, 2026-06-05)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Docs site cannot be republished from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " until resolved."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cd portal && npm ci && npm run build"
        }), " succeeds on CI and locally after dependency alignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "portal/package.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/package-lock.json"
        }), ", and Docusaurus config are consistent across branches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Docusaurus site build"
          })
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Docusaurus deploy"
          })
        }), " workflows pass on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " for portal/docs changes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-fix-maintainer-decision",
      children: "Proposed fix (maintainer decision)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Preferred approach:"
      }), " Add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/faster"
        })
      }), " as a portal dependency and ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["align ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " with the 3.10.1 lockfile"]
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " (pin ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@docusaurus/core"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@docusaurus/preset-classic"
      }), ", and type packages to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3.10.1"
      }), "). Run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm ci"
      }), " and verify green build."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternative (not preferred):"
      }), " Remove ", (0,jsx_runtime.jsx)(_components.code, {
        children: "future.v4: true"
      }), " until the faster path is intentionally adopted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance criteria"
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
            children: "@docusaurus/faster"
          })
        }), " added to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/package.json"
        }), " (version compatible with Docusaurus 3.10.x) — Wave 1 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.5.9.13+1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/package.json"
          })
        }), " Docusaurus packages aligned with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/package-lock.json"
          })
        }), " (3.10.1) — Wave 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "cd portal && npm ci && npm run build"
          })
        }), " exits ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0"
        }), " locally — Wave 2 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "v0.5.9.13+2"
        }), " (BR-068 Strategy A link remediation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docusaurus-build.yml"
          })
        }), " green on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          })
        }), " (build + deploy) — Actions ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "26992999149"
        }), " (PR #26 merge)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Contributor note in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/README.md"
        }), " if faster / v4 future flag has new install requirements — Wave 1."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check out ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " (or branch with Dependabot Docusaurus 3.10 lockfile)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cd portal && npm ci && npm run build"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe immediate failure: missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@docusaurus/faster"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-work",
      children: "Related work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T05-docusaurus-ci-fr-069",
          children: ["E05:S09", ":T05"]
        }), " — original CI build gate (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T06-docusaurus-deployment-fr-070",
          children: ["E05:S09", ":T06"]
        }), " — deploy workflow (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "COMPLETE"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste",
          children: "BR-093"
        }), " — duplicate CI job waste (separate fix set)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "intake-decision",
      children: "Intake decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake status:"
      }), " ACCEPTED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Intake date:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assigned to:"
      }), " Epic 5, Story 9, Task 13 — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090",
        children: "T13"
      })]
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