"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["70588"], {
41590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_fr_057_update_changelog_workflow_md_f12_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-fr-057-update-changelog-workflow-md-f12.json
var site_docs_project_management_kanban_fr_br_fr_057_update_changelog_workflow_md_f12_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/FR-057-update-changelog-workflow","title":"Feature Request: Update Changelog Workflow (UCW)","description":"Type: Feature Request (FR)","source":"@site/../docs/project-management/kanban/fr-br/FR-057-update-changelog-workflow.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/FR-057-update-changelog-workflow","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-057-update-changelog-workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/FR-057-update-changelog-workflow.md","tags":[],"version":"current","frontMatter":{"lifecycle":"proposed","ttl_days":null,"created_at":"2026-03-15T14:45:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Feature Request: Standardize Packaged Workflow Documentation and Instructions","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-056-standardize-packaged-workflow-documentation-and-instructions"},"next":{"title":"Feature Request: Markdown Maintenance Workflow (MMW)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/FR-058-markdown-maintenance-workflow"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/FR-057-update-changelog-workflow.md


const frontMatter = {
	lifecycle: 'proposed',
	ttl_days: null,
	created_at: new Date('2026-03-15T14:45:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Feature Request: Update Changelog Workflow (UCW)';

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
  "value": "Goals / Responsibilities",
  "id": "goals--responsibilities",
  "level": 2
}, {
  "value": "Proposed Scope",
  "id": "proposed-scope",
  "level": 2
}, {
  "value": "Acceptance Criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Dependencies &amp; References",
  "id": "dependencies--references",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
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
        id: "feature-request-update-changelog-workflow-ucw",
        children: "Feature Request: Update Changelog Workflow (UCW)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Feature Request (FR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-03-15", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " AI Assistant (per user directive)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IMPLEMENTED (v0.7.1.7+4 — E07:S01", ":T06", " / CMW; board hygiene 2026-05-29)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T06-update-changelog-workflow",
        children: ["E07:S01", ":T06"]
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.7.1.7+4"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define and implement a deterministic ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Changelog Workflow (UCW)"
      }), " that keeps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), " lean (latest N entries) while automatically archiving older releases, enforcing canonical ordering, and integrating with Release Workflow (RW) validation. UCW replaces the missing/misplaced workflow that historically handled changelog curation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " still contains historical sections out of order, repeatedly blocking RW validators."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prior UCW artifacts are missing; responsibilities defaulted to manual cleanup, which is error-prone and slow."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Without UCW, the \"latest-only\" policy can’t be enforced consistently, causing validator failures and inconsistent release comms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archival files exist but there is no automated agent preserving the contract (main changelog ≤ N entries, archives hold history)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goals--responsibilities",
      children: "Goals / Responsibilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "UCW must:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enforce Latest-Only Main Changelog"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Keep configurable N recent releases (default 20) in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Replace trimmed sections with archive pointers referencing detailed files."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Automated Archival"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Move trimmed entries to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Maintain metadata (version, date, epic/story/task) and ensure links remain valid."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ordering + Format Validation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Guarantee canonical RC.EPIC.STORY.TASK+BUILD ordering (newest first in main file before trimming, proper lexical ordering inside archive)."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Ensure date format compliance (", (0,jsx_runtime.jsx)(_components.code, {
              children: "DD-MM-YY"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Detect duplicate versions or missing archive files."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Release Workflow Integration"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Provide RW hook/command (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UCW"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "python ... ucw.py"
            }), ") that runs after changelog edits but before validators."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Emit machine-readable summary for RW log (versions archived, entries retained)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Manual & Scheduled Entry Points"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["CLI entry for ad-hoc runs (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UCW --dry-run"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optional scheduled mode (cron) to keep archives tidy even outside RW runs."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reporting & Safety"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Output summary: retention count, archived files, warnings."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dry-run diff preview to prevent accidental data loss."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Abort if archive write fails or if versions would be orphaned."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "proposed-scope",
      children: "Proposed Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/workflows/update-changelog-workflow/"
        }), " with README, workflow YAML, config."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement Python entry script (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/update_changelog_docs.py"
        }), ") handling retention + archival."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wire UCW into RW optional step (similar to CMW)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document SOP in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/release-runbook.md"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " policy section."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide regression tests covering retention thresholds, ordering enforcement, archive integrity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance Criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Running UCW on current tree trims ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), " to last N releases, moves remainder to archive, and validator passes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["UCW command supports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--retention"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--dry-run"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--auto"
        }), " flags."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Archive entries get automatic backlinks to main changelog (and vice versa)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW docs describe when to run UCW; RW automated path can invoke UCW when changelog exceeds retention."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tests cover: ordering enforcement, retention boundaries, duplicate detection, missing archive references, dry-run preview, and failure modes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README documents responsibilities so future agents don’t misattribute UCW vs UKW."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies--references",
      children: "Dependencies & References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-025"
        }), " (Changelog Management & Archival Workflow) — UCW is the concrete implementation fulfilling this FR requirement."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-026"
        }), " (Perpetual task for changelog maintenance) — UCW operationalizes the perpetual task."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release Workflow"
        }), " — UCW integrates post-Step 3 (detailed changelog) and pre-validation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Agent policy"
        }), " — Ensure archive file ownership aligns with doc agent responsibilities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Approve FR and assign to Documentation/RW agent collaboration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement UCW workflow + scripts."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW runbooks and validators to rely on UCW output."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backfill missing archival runs once tooling is ready."
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