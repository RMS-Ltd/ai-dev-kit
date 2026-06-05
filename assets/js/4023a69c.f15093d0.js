"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["536"], {
36762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_064_shields_branch_private_repo_badges_md_402_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-064-shields-branch-private-repo-badges-md-402.json
var site_docs_project_management_kanban_fr_br_fr_064_shields_branch_private_repo_badges_md_402_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges","title":"Feature Request: Retire shields branch — badge strategy for a private repo","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-03-30T12:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: CMW — Require Epic 5 (Documentation) Execution Context","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-063-cmw-epic-5-execution-context"},"next":{"title":"Feature Request: Docusaurus Site Identity and Base Configuration","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-065-docusaurus-site-identity-and-config"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-064-shields-branch-private-repo-badges.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-03-30T12:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Retire shields branch — badge strategy for a private repo';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Goals",
  "id": "goals",
  "level": 2
}, {
  "value": "Proposed implementation plan (high level)",
  "id": "proposed-implementation-plan-high-level",
  "level": 2
}, {
  "value": "Functional requirements",
  "id": "functional-requirements",
  "level": 2
}, {
  "value": "Non-functional requirements",
  "id": "non-functional-requirements",
  "level": 2
}, {
  "value": "Acceptance criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}, {
  "value": "References",
  "id": "references",
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
        id: "feature-request-retire-shields-branch--badge-strategy-for-a-private-repo",
        children: ["Feature Request: Retire ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " branch — badge strategy for a private repo"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ID:"
      }), " FR-064", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-03-30", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " User (via maintainer agent)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " MEDIUM", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE (2026-03-30 — E05:S01", ":T69", " / v0.5.1.69+1)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository Pattern:"
      }), " FR-064 = E05:S01", ":T69", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T69-shields-branch-private-repo-fr-064",
        children: ["E05:S01", ":T69", " – Shields branch retirement (private repo)"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "AI Dev Kit is a private GitHub repository."
      }), " The remote ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        })
      }), " branch carries an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unrelated Git history"
      }), " whose sole file is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "shields.json"
        })
      }), ", maintained by automated commits (e.g. “Updating tag \"version\"\") for external badge tooling. That branch ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["does not merge into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })]
      }), ", duplicates no product value, and creates confusion. This FR captures work to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implement a sustainable badge / metadata approach compatible with a private repo"
      }), " so the ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " branch can be deleted"]
      }), " from origin."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "origin/shields"
          })
        }), " has ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no merge base"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " — it is not feature work; it is a parallel line of hundreds of tiny JSON commits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Private repo constraints:"
        }), " Many Shields.io dynamic endpoints assume ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "public"
        }), " GitHub data (release count, stars, workflow status). Those often ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fail or leak “private” semantics"
        }), " when the repo is private, so teams fall back to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "static"
        }), " badges or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "internal"
        }), " dashboards."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operational debt:"
        }), " Keeping a long-lived orphan branch for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields.json"
        }), " is a hygiene and security-discussion smell (who authorizes the bot, what is BYOB/yarr.is, is the branch documented anywhere?)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "End state:"
        }), " We want ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no dependency"
        }), " on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " for README or automation, and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "permission to delete"
        }), " the branch after migration."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goals",
      children: "Goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document current state"
        }), " — What consumes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields.json"
        }), " today (if anything besides the historical bot)? What does root ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "README"
        }), " use? (Today: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "static"
        }), " Shields.io image URLs for license/status/Python — see README header comment.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define target state"
        }), " — Badges and version visibility on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " without the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " branch:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Prefer ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "static"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "img.shields.io/badge/..."
            }), " labels maintained alongside ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RW"
            }), "-updated README version text, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Documented ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "private-repo-safe"
            }), " alternatives (e.g. org-internal badge endpoint, GitHub-only viewers, “no network badge” policy)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Decommission ", (0,jsx_runtime.jsx)(_components.code, {
            children: "shields"
          })]
        }), " — Disable or redirect automation that pushes to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), "; archive any required JSON ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          })]
        }), " only if a tool still needs it (otherwise remove)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete remote branch"
        }), " — After validation, delete ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "origin/shields"
          })
        }), " (and local ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " if present) with a short runbook note in maintainer docs or Epic 6 tooling notes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-implementation-plan-high-level",
      children: "Proposed implementation plan (high level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1. Inventory"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Confirm no CI, README, or third-party integration ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "requires"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shields"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shields.json"
            }), "; grep org + docs."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2. README / docs"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ensure ", (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            }), " badge block explicitly documents ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "private repo"
            }), " choice (static badges; link to this FR)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3. Replacement"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["If any consumer needed ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shields.json"
            }), ", generate equivalent under ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " (one file, versioned, optional) ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            }), " replace with static badges only."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4. Automation off"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Turn off BYOB / external job pushing to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "shields"
            }), " (org setting, PAT revoke, or branch protection)."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5. Delete branch"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git push origin --delete shields"
            }), " after maintainer ACK; record in changelog or Epic 6 maintenance note if required."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functional-requirements",
      children: "Functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-064-F1:"
        }), " No documented install or RW step may ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "require"
        }), " the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " branch."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-064-F2:"
        }), " README (or agreed doc surface) shows ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "license / status / version"
        }), " without relying on dynamic GitHub repo stats that break for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "private"
        }), " repos."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-064-F3:"
        }), " Automation pushing orphan commits to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stopped"
        }), " before branch deletion."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-064-F4:"
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "origin/shields"
          }), " deleted"]
        }), " (or explicitly archived per org policy) with evidence linked from the implementing task."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "non-functional-requirements",
      children: "Non-functional requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-064-NF1:"
        }), " No secrets in badge URLs or static JSON committed to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-064-NF2:"
        }), " Deletion is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reversible only via GitHub reflog"
        }), " — document that for safety."]
      }), "\n"]
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
        }), " ", "Inventory complete; gaps documented in the task file."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Target badge/metadata approach agreed and reflected on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          })
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "External automation to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "disabled"
        }), " or documented as removed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "shields"
          }), " branch removed"]
        }), " from remote (and locals cleaned up)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Task ", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S01", ":T69"]
        }), " closed with Version Anchor via normal RW."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E05:S01", ":T68"]
        }), " — consumer path / README hygiene (packaging narrative)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-062"
        }), " — GitHub releases (public artifact story; orthogonal to private ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "source"
        }), " repo badges)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Discussion context: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "origin/shields"
        }), " tip contains only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shields.json"
        }), " (badge meta: version label, license, status, tests/coverage placeholders); commit history dominated by “Updating tag \"version\"\"."]
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