"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["86796"], {
88875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_093_docusaurus_ci_duplicate_build_deploy_job_waste_md_d94_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-093-docusaurus-ci-duplicate-build-deploy-job-waste-md-d94.json
var site_docs_project_management_kanban_fr_br_br_093_docusaurus_ci_duplicate_build_deploy_job_waste_md_d94_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste","title":"Bug Report BR-093: Docusaurus CI runs duplicate build + deploy jobs — doubles wasted minutes on same failure","description":"Bug ID: BR-093","source":"@site/../docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-092: Tests CI workflow missing requests — pytest collection error","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency"},"next":{"title":"Bug Report BR-094: CodeQL parse failure — git_tag_handler.py indentation syntax error","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-094-codeql-git-tag-handler-syntax-error"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-093: Docusaurus CI runs duplicate build + deploy jobs — doubles wasted minutes on same failure';

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
  "value": "Observed behavior",
  "id": "observed-behavior",
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
  "value": "Proposed fix options",
  "id": "proposed-fix-options",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "bug-report-br-093-docusaurus-ci-runs-duplicate-build--deploy-jobs--doubles-wasted-minutes-on-same-failure",
        children: "Bug Report BR-093: Docusaurus CI runs duplicate build + deploy jobs — doubles wasted minutes on same failure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-093", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM — Every qualifying push to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })
      }), " triggers ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two"
      }), " independent workflows that each run ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        })
      }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        })
      }), "; when build is broken, both fail (~91 deploy + ~97 build failures since May 2026).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " FIXED ✅", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-05\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-06-05 — Wave 2 verification closure ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.5.9.14+2"
      }), " (structural + Actions evidence). See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2",
        children: "evidence"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.5.9.14+2", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093",
        children: ["E05:S09", ":T14"]
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication",
        children: "IPP-E5S9T14"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology",
        children: "ADR-017"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization",
        children: "BR-052"
      }), " (general GHA optimization) · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift",
        children: "BR-090"
      }), " (underlying build failure — fix separately first) · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
        children: "FR-069"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting",
        children: "FR-070"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/docusaurus-build.yml"
        })
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/docusaurus-deploy.yml"
        })
      }), " use the same path filters on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " and each performs a full ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        })
      }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        })
      }), ". On build failure (e.g. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift",
        children: "BR-090"
      }), "), GitHub Actions burns ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two jobs"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "~2× wall time"
      }), " for the same error — a major contributor to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "~303 wasted minutes"
      }), " at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "~84% failure rate"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-description",
      children: "Problem Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior",
      children: "Observed behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On push to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })
      }), " touching ", (0,jsx_runtime.jsx)(_components.code, {
        children: "portal/**"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/**"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Docusaurus site build"
          })
        }), " — checkout → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fail"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Docusaurus deploy to GitHub Pages"
          })
        }), " — checkout → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " → deploy step never reached → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fail"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Both workflows triggered by the same commit (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Merge branch 'dev' into main"
      }), ", 2026-06-04)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Independent workflows with overlapping triggers and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "duplicated build steps"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_run"
        }), " dependency, reusable workflow artifact, or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs:"
        }), " gate tying deploy to a successful build job."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy workflow intentionally builds in-job (FR-070 / S7 — avoid stale publish) but duplicates work already done by the build gate."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "~2× CI minutes"
        }), " per failed portal/docs push to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duplicate failure notifications and noisy Actions metrics."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Even after ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift",
          children: "BR-090"
        }), " is fixed, structural duplication wastes minutes on every green run too."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One"
        }), " production build per commit on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " (or deploy consumes build artifact from build workflow)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy runs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only"
        }), " when build succeeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PR ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pull_request"
          })
        }), " path still runs build gate without deploy (unchanged intent of FR-069 vs FR-070)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-fix-options",
      children: "Proposed fix options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reusable workflow"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus-build.yml"
        }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/build"
        }), " artifact; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus-deploy.yml"
        }), " triggered via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_run"
        }), " after successful build on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), ", downloads artifact, deploys only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single workflow, two jobs"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build"
        }), " job + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deploy"
        }), " job with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs: build"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " pushes; PRs run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build"
        }), " only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "workflow_run gate"
        }), " — deploy workflow ", (0,jsx_runtime.jsx)(_components.code, {
          children: "on: workflow_run"
        }), " of successful ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Docusaurus site build"
          })
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " (minimal YAML churn)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Maintainer preference: optimize for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fail-fast"
      }), " (one build) and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FR-070"
      }), " stale-publish guard."]
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
        }), " ", "Push to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          })
        }), " (portal/docs paths) runs ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "at most one"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), " before deploy — single workflow; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus-deploy.yml"
        }), " retired."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Deploy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "does not run"
        }), " when build fails — Actions run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "26989204716"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deploy"
        }), " job ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skipped"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build"
        }), " fails."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "PR ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Docusaurus site build"
          })
        }), " gate unchanged — pytest T3; deploy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " excludes PR-only runs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Document workflow topology in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/README.md"
        }), " and ADR-017 / YAML comments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Push to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          })
        }), " a change under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open GitHub Actions — observe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "two"
        }), " workflows start for the same SHA."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When build is broken, both fail after independent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), "."]
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
      }), " Epic 5, Story 9, Task 14 — ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093",
        children: "T14"
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