"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["65524"], {
53446(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_implementation_cycles_ipp_e_05_s_09_t_14_docusaurus_ci_workflow_deduplication_md_7bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-implementation-cycles-ipp-e-05-s-09-t-14-docusaurus-ci-workflow-deduplication-md-7bb.json
var site_docs_implementation_cycles_ipp_e_05_s_09_t_14_docusaurus_ci_workflow_deduplication_md_7bb_namespaceObject = JSON.parse('{"id":"implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication","title":"E05:S09:T14 — Planning: Spec, Tests, Implementation Plan (IPW)","description":"Host TaskS09:T14)","source":"@site/../docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md","sourceDirName":"implementation-cycles","slug":"/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-05T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"E05:S09:T13 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment"},"next":{"title":"E06:S07:T107 — Planning: Spec, Tests, Implementation Plan (IPW)","permalink":"/ai-dev-kit/docs/implementation-cycles/IPP-E06S07T107-ide-command-whitelist-optimization"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-05T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'E05:S09 — Planning: Spec, Tests, Implementation Plan (IPW)';

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
  "value": "2.5 ADR necessity decision (mandatory — IPW Phase 5.0)",
  "id": "25-adr-necessity-decision-mandatory--ipw-phase-50",
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
  "value": "4.3 Documentation implementation steps",
  "id": "43-documentation-implementation-steps",
  "level": 3
}, {
  "value": "5. Documentation deliverables",
  "id": "5-documentation-deliverables",
  "level": 2
}, {
  "value": "5.1 Existing documents to update",
  "id": "51-existing-documents-to-update",
  "level": 3
}, {
  "value": "5.2 New documents to create",
  "id": "52-new-documents-to-create",
  "level": 3
}, {
  "value": "5.3 Documentation gaps and explicit non-changes",
  "id": "53-documentation-gaps-and-explicit-non-changes",
  "level": 3
}, {
  "value": "6. Documentation housing",
  "id": "6-documentation-housing",
  "level": 2
}, {
  "value": "7. Success / verification criteria",
  "id": "7-success--verification-criteria",
  "level": 2
}, {
  "value": "7.1 Wave 1 (shipped — v0.5.9.14+2)",
  "id": "71-wave-1-shipped--v059142",
  "level": 3
}, {
  "value": "7.2 Wave 2 (verification closure)",
  "id": "72-wave-2-verification-closure",
  "level": 3
}, {
  "value": "8. Rolling backlog / wave ledger",
  "id": "8-rolling-backlog--wave-ledger",
  "level": 2
}, {
  "value": "8.1 Shipped waves",
  "id": "81-shipped-waves",
  "level": 3
}, {
  "value": "8.2 Wave 2 verification checklist",
  "id": "82-wave-2-verification-checklist",
  "level": 3
}, {
  "value": "8.3 Wave 2 ADR decision (verification-only)",
  "id": "83-wave-2-adr-decision-verification-only",
  "level": 3
}, {
  "value": "8.4 Deferred follow-on",
  "id": "84-deferred-follow-on",
  "level": 3
}, {
  "value": "8.5 Wave 2 implementation steps (executor)",
  "id": "85-wave-2-implementation-steps-executor",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Appendix A — ADR-017 draft (implementation deliverable)",
  "id": "appendix-a--adr-017-draft-implementation-deliverable",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    del: "del",
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
        id: "e05s09--planning-spec-tests-implementation-plan-ipw",
        children: ["E05:S09", ":T14", " — Planning: Spec, Tests, Implementation Plan (IPW)"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Host Task:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "T14-docusaurus-ci-workflow-deduplication-br093.md"
        })
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["(E05:S09", ":T14", ")"]
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Planning for:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste",
        children: "BR-093"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (Wave 1 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.5.9.14+2"
      }), "; Wave 2 verification closure — 2026-06-05)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW revision:"
        }), " Wave 2 closes BR-093 on structural + Actions evidence without requiring green Docusaurus corpus build (MDX failures are out of scope)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IPW (Implementation Planning Workflow):"
        }), " Consolidated IPP per FR-042 / FR-083. Bidirectional wiring to host task ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "References"
        }), " is mandatory before implementation."]
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
            children: ["At most ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "one"
            }), " production ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            }), " per commit on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/**"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**"
            }), ", or workflow paths change"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T14 AC1; BR-093"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Deploy to GitHub Pages ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must not run"
            }), " when the build job fails"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T14 AC2; BR-093"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["PR ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Docusaurus site build"
              })
            }), " gate unchanged — path-filtered ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pull_request"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/**"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T14 AC3; FR-069"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Workflow topology documented in YAML comments and/or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T14 AC4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual redeploy via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow_dispatch"
            }), " preserved (FR-070 rollback / ops path)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-070 NF02; portal README"
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
            children: ["Preserve Node 20, npm cache, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "defaults.run.working-directory: portal"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-069 S4–S6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No PAT in source; deploy uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "GITHUB_TOKEN"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "contents: write"
            }), " scoped to deploy job only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-070 NF01"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable pytest contract updated — not manual-only verification"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Project IC pattern; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_fr069_ci.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_fr070_deployment.py"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Preserve workflow display name ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Docusaurus site build"
            }), " (branch protection / Dependabot references)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-069 S3; portal README"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Verification gate:"
            }), " Prove single-workflow topology on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " with deploy skipped when build fails"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Evidence pack:"
            }), " Record pytest output, Actions run IDs, job conclusions"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FBU closure:"
            }), " BR-093 → FIXED; V-band prune; ledger ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-completed.md"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 2"
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
        }), " GitHub Pages provider, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "peaceiris/actions-gh-pages"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "publish_dir: ./portal/build"
        }), ", path filters unchanged; FR-069 PR merge gate behavior preserved."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "In scope:"
        }), " Merge deploy into ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docusaurus-build.yml"
          })
        }), "; retire duplicate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " push on ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docusaurus-deploy.yml"
          })
        }), "; pytest + README + ADR."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Out of scope:"
        }), " Fixing underlying build breakage (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift",
          children: "BR-090"
        }), " / E05:S09", ":T13", "); portal MDX / broken markdown links (blocks green build, not BR-093 structural ACs); changing path filters; hosting provider change; Docusaurus version upgrades."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Soft dependency:"
      }), " E05:S09", ":T13", " fixes chronic build failures; T14 is structurally independent but post-merge green-run verification is easier after T13."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-specification",
      children: "2. Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-goal",
      children: "2.1 Goal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Eliminate duplicate CI build work on every qualifying ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " push by consolidating build and deploy into a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single workflow"
      }), " with two jobs connected by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "needs:"
      }), " and artifact handoff. PRs continue to run only the build job; deploy consumes the build artifact from the same workflow run so FR-070’s stale-publish guard is preserved without a second ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm ci"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-specification-mapping-from-ascertained-requirements",
      children: "2.2 Specification mapping from ascertained requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delivery"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build"
            }), " job performs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm ci"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deploy"
            }), " job downloads artifact — no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            }), " in deploy"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deploy"
            }), " job ", (0,jsx_runtime.jsx)(_components.code, {
              children: "needs: build"
            }), " — GitHub skips deploy when build fails"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deploy"
            }), " job ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if:"
            }), " excludes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pull_request"
            }), " events; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "on.pull_request.paths"
            }), " unchanged"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["YAML comment block + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            }), " CI / Production hosting sections"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RF5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "workflow_dispatch"
            }), " on merged workflow runs build then deploy"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RNF1–RNF4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preserved in build job; permissions moved to deploy job only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-constraints",
      children: "2.3 Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Keep primary workflow file path ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/docusaurus-build.yml"
        }), " (minimize branch-protection churn)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build job uploads ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/build"
        }), " via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "actions/upload-artifact@v4"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy job downloads artifact via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "actions/download-artifact@v4"
        }), " before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "peaceiris/actions-gh-pages@v4"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy job ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if:"
        }), " guard: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(github.event_name == 'push' && github.ref == 'refs/heads/main') || github.event_name == 'workflow_dispatch'"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Delete or fully deprecate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus-deploy.yml"
        }), " push trigger to prevent double workflow invocation on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-status-transition-intent-mandatory-for-ipw-derived-implementation-tasks",
      children: "2.4 Status transition intent (mandatory for IPW-derived implementation tasks)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current task status:"
        }), " TODO"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to IN PROGRESS:"
        }), " First non-planning implementation change lands (Step 1 of §4)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition trigger to COMPLETE:"
        }), " All T14 acceptance criteria satisfied with pytest green + post-merge Actions smoke evidence; forensic marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "✅ COMPLETE (v{version})"
        }), " on RW release."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Atomic propagation requirement:"
        }), " Task doc status and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), " row update in same RW Step 7 change set."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner:"
        }), " Implementation execution (not this IPW planning session)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-adr-necessity-decision-mandatory--ipw-phase-50",
      children: "2.5 ADR necessity decision (mandatory — IPW Phase 5.0)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Criteria: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ipw-adr-necessity-checklist.md"
        })
      }), " (FR-100)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Trigger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Y/N"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evidence"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternatives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-093 lists three viable topologies; task selects Option 2 (single workflow, two jobs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revert restores two-file layout in one PR"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blast radius"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Confined to ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/"
            }), ", tests, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precedent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical Docusaurus CI topology for this repo going forward"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Replaces FR-070 S7 same-job build with cross-job artifact handoff while preserving freshness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Governance contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not alter RW, IPW, UKW, or validator gates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supersedes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Narrows FR-070 deploy implementation detail; hosting choice unchanged"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "REQUIRED"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["§5 includes ADR ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CREATE"
      }), " at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ADR-017-docusaurus-ci-build-deploy-topology.md"
        })
      }), "."]
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
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single build topology"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Parsed YAML: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deploy"
            }), " job has ", (0,jsx_runtime.jsx)(_components.code, {
              children: "needs: build"
            }), "; deploy steps omit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fail-fast gate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deploy"
            }), " job declares ", (0,jsx_runtime.jsx)(_components.code, {
              children: "needs: build"
            }), " (GitHub skips on upstream failure)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PR gate preserved"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "on.pull_request.paths"
            }), " includes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/**"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/**"
            }), "; deploy ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), " excludes PR-only runs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Artifact handoff"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Build job uploads ", (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/build"
            }), "; deploy downloads before ", (0,jsx_runtime.jsx)(_components.code, {
              children: "peaceiris"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1; FR-070 freshness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-069 regression"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_fr069_ci.py"
            }), " passes; extend for upload-artifact step if added to build job"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF3; RNF1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FR-070 deploy contract"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "test_portal_fr070_deployment.py"
            }), " S3/S7 for cross-job artifact topology"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF2; RF5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "README topology"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            }), " references merged workflow; documents one-build / deploy-skipped-on-failure"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual smoke (post-merge)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " → Actions: one npm build; deploy runs only on green"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br093_ci_deduplication.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_br093_ci_deduplication.py"
        })
      }), " (new) + updates to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_fr070_deployment.py",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "tests/test_portal_fr070_deployment.py"
        })
      }), "."]
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
                children: "E05:S09:T14"
              }), " status ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TODO → IN PROGRESS"
              })]
            }), " in task doc. Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), " date."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task doc ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Status"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Write ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology",
              children: "ADR-017"
            }), " — Option 2 choice, artifact contract, PR vs main job matrix, FR-070 S7 supersession note"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ADR file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Extend ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docusaurus-build.yml"
              })
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "upload-artifact"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "build"
            }), "; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deploy"
            }), " job with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "needs"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "download-artifact"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "peaceiris"
            }), "; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow_dispatch"
            }), "; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "permissions: contents: write"
            }), " on deploy job only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merged workflow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Remove duplicate push trigger — delete ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docusaurus-deploy.yml"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No double-trigger on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "portal/README.md"
              })
            }), " CI + Production hosting sections"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Add/update pytest modules (T1–T7)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Green ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pytest tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py tests/test_portal_br093_ci_deduplication.py"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Update ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste",
              children: "BR-093"
            }), " status when verified"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR closure prep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Release via ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E05:S09:T14"
              })
            }), " (version bump, changelog, Step 7 four-surface kanban)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.14+1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "N"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["[MANDATORY] Reconcile task ", (0,jsx_runtime.jsx)(_components.code, {
                children: "E05:S09:T14"
              }), " status"]
            }), " to actual implementation state: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "COMPLETE"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "✅ COMPLETE (v{version})"
            }), " if all ACs satisfied; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IN PROGRESS"
            }), " if ongoing; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), " + reason if blocked. Update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Last updated"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task doc + kboard row"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-files-to-create-or-modify",
      children: "4.1 Files to create or modify"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/workflows/docusaurus-build.yml"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["DELETE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/workflows/docusaurus-deploy.yml"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CREATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "portal/README.md"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CREATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_br093_ci_deduplication.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tests/test_portal_br093_ci_deduplication.py"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_fr070_deployment.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tests/test_portal_fr070_deployment.py"
          })
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE (minimal): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/tests/test_portal_fr069_ci.py",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "tests/test_portal_fr069_ci.py"
          })
        }), " if artifact step added to build job"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UPDATE (RW Step 7): task doc, story checklist, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kboard.md"
        }), ", BR-093"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dependency-order",
      children: "4.2 Dependency order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-017 (records decision before YAML change)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Workflow YAML merge (build + deploy jobs)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Delete ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus-deploy.yml"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pytest updates (contract follows YAML)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/README.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW E05:S09", ":T14", " (release + kanban Step 7)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-documentation-implementation-steps",
      children: "4.3 Documentation implementation steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-017 before workflow edit (establishes canonical topology)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["YAML comments in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus-build.yml"
        }), " cross-link ADR-017."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "portal/README.md"
        }), " after workflow lands (accurate topology description)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-documentation-deliverables",
      children: "5. Documentation deliverables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-existing-documents-to-update",
      children: "5.1 Existing documents to update"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Scope of change"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to (RF/T/impl step)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/docusaurus-build.yml"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Merge deploy job + artifact upload/download; add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "workflow_dispatch"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1–RF2; Step 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".github/workflows/docusaurus-deploy.yml"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE file — remove duplicate push trigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF1; Step 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CI + Production hosting topology; single workflow; manual dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RF4; Step 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_fr070_deployment.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-job deploy assertions (S3/S7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T6; Step 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host task T14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status transitions; IPP links; completion marker on RW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Steps 1, N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban/fr-br/BR-093-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status update on verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 7"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-new-documents-to-create",
      children: "5.2 New documents to create"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Proposed path (draft)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tied to (RF/T/impl step)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E5S9T14-docusaurus-ci-workflow-deduplication.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This IPP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topology decision (§2.5 REQUIRED)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br093_ci_deduplication.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable BR-093 contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T1–T4; Step 6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-documentation-gaps-and-explicit-non-changes",
      children: "5.3 Documentation gaps and explicit non-changes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Gap / topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution (CREATE row above, or NONE + reason)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI topology ADR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CREATE D-C2 (ADR-017) — §2.5 outcome REQUIRED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-069 / FR-070 doc updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — behavior preserved; ADR-017 supersedes FR-070 S7 same-job build detail only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Workflow KB developer guide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NONE — portal README + ADR-017 sufficient for this task scope"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-documentation-housing",
      children: "6. Documentation housing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Doc ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Canonical path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Publication status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Publication N/A reason (if N/A)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lifecycle"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inbound links to add"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/implementation-cycles/IPP-E5S9T14-docusaurus-ci-workflow-deduplication.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Planning artifact; not Docusaurus user doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T14 Input/References"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PUBLISHED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T14 References; IPP §2.5; FR-069/FR-070 cross-links"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-C3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tests/test_portal_br093_ci_deduplication.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executable spec, not published doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPP §3; BR-093"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D-U3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "portal/README.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NOT_APPLICABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repo-local maintainer doc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "evergreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already linked from docs pillar"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Housing rules:"
      }), " One authoritative doc per topic; ADR-017 is the topology SoT; IPP lives under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-success--verification-criteria",
      children: "7. Success / verification criteria"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-wave-1-shipped--v059142",
      children: "7.1 Wave 1 (shipped — v0.5.9.14+2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "IPP written with all §1–§7 sections; bidirectional task ↔ IPP links"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "ADR-017 created with Option 2 decision and FR-070 S7 supersession note"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py tests/test_portal_br093_ci_deduplication.py"
        }), " green locally"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/README.md"
        }), " documents merged workflow topology"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "RW E05:S09", ":T14", " Wave 1 completes four-surface Step 7 reconciliation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "All §5 Wave 1 UPDATE/CREATE items implemented"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-wave-2-verification-closure",
      children: "7.2 Wave 2 (verification closure)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V1–V5 verification completed — ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2",
          children: "evidence"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Actions run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "26989204716"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), ": single workflow; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deploy"
        }), " job ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skipped"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build"
        }), " fails"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "BR-093 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "FIXED"
        }), "; V-band row pruned; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intake-completed.md"
        }), " ledger entry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "V6 (green deploy smoke) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deferred"
        }), " — portal MDX follow-on (E05:S09", ":T13", " / separate intake)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-rolling-backlog--wave-ledger",
      children: "8. Rolling backlog / wave ledger"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-shipped-waves",
      children: "8.1 Shipped waves"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Build"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Summary"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.14+1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IPW recovery (docs-only)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.14+2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["ADR-017; merged ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docusaurus-build.yml"
            }), "; deleted ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docusaurus-deploy.yml"
            }), "; pytest T1–T7 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "0ebf2cf"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.14+3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wave 2 FBU closure + BUILD collision remediation; tagged-BUILD validator guard"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-wave-2-verification-checklist",
      children: "8.2 Wave 2 verification checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "pytest tests/test_portal_br093_ci_deduplication.py tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py -q\ngh run view 26989204716 --json jobs,conclusion,workflowName\ntest ! -f .github/workflows/docusaurus-deploy.yml\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Record outputs in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2",
        children: "docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-wave-2-adr-decision-verification-only",
      children: "8.3 Wave 2 ADR decision (verification-only)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome: EXEMPT"
      }), " — ADR-017 already records topology; Wave 2 is evidence + FBU closure only. T1–T7 all ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "N"
      }), " per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
        children: "ipw-adr-necessity-checklist.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-deferred-follow-on",
      children: "8.4 Deferred follow-on"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resolution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Green ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "V6 deferred; track under BR-090 / residual MDX (not BR-093)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Duplicate workflow regression"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "test_br093_no_duplicate_deploy_workflow"
            }), " guards retired ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docusaurus-deploy.yml"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-wave-2-implementation-steps-executor",
      children: "8.5 Wave 2 implementation steps (executor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Task already ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), " — verification wave only (no ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TODO → IN PROGRESS"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create evidence doc; run V1–V5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BR-093 → FIXED; T14 task doc link evidence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kanban: prune V-band row; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "intake-completed.md"
            }), "; structure-prune manifest"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "RW E05:S09:T14 --art"
              })
            }), " (BUILD ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "+3"
            }), " remediation — ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--doc-policy-zero"
            }), " when ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v0.5.9.14+2"
            }), " tag exists)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Confirm task remains ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "COMPLETE"
            }), "; BR/kboard terminal"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093",
          children: "T14 — Docusaurus CI workflow deduplication (BR-093)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste",
          children: "BR-093 — Docusaurus CI duplicate build + deploy job waste"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate",
          children: "FR-069 — Docusaurus CI build gate"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting",
          children: "FR-070 — Docusaurus deployment and hosting"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist",
          children: "ipw-adr-necessity-checklist.md"
        }), " (FR-100)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/workflows/docusaurus-build.yml"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2",
          children: "Wave 2 evidence"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.del, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: ".github/workflows/docusaurus-deploy.yml"
          })
        }), " — deleted Wave 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appendix-a--adr-017-draft-implementation-deliverable",
      children: "Appendix A — ADR-017 draft (implementation deliverable)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following content is the prescribed body for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ADR-017"
      }), " to be written at implementation Step 2."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Title:"
      }), " ADR-017: Docusaurus CI build/deploy topology (single workflow, artifact handoff)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted (on implementation)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " BR-093 — two independent workflows each run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm ci"
      }), " + ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm run build"
      }), " on every qualifying ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " push, doubling CI minutes and failure noise."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision:"
      }), " Adopt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Option 2"
      }), " from BR-093 — extend ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/docusaurus-build.yml"
      }), " with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "build"
          }), " job"]
        }), " — unchanged FR-069 contract; adds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "actions/upload-artifact"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "portal/build"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "deploy"
          }), " job"]
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs: build"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if:"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " push or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_dispatch"
        }), "; downloads artifact; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "peaceiris/actions-gh-pages"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-pages"
        }), "; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm run build"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/docusaurus-deploy.yml"
        }), " to remove duplicate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push"
        }), " trigger."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Supersedes:"
      }), " FR-070 executable spec ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S7"
      }), " (“publish step after build in the same job”) — freshness is preserved because deploy consumes the artifact from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same workflow run"
      }), ", not a prior commit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["One production build per ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " commit (portal/docs paths)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy automatically skipped when build fails (", (0,jsx_runtime.jsx)(_components.code, {
          children: "needs:"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PR gate unchanged (deploy job ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " excludes pull requests)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_portal_fr070_deployment.py"
        }), " S3/S7 assertions must be updated for cross-job topology."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alternatives rejected:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 1 (reusable workflow + workflow_run):"
        }), " Extra workflow file and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow_run"
        }), " latency; more moving parts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Option 3 (workflow_run gate only):"
        }), " Keeps two workflow files; harder to reason about dispatch and permissions."]
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