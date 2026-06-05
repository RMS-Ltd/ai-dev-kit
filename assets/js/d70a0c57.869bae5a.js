"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["66023"], {
108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_epic_story_path_migration_guide_md_d70_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-epic-story-path-migration-guide-md-d70.json
var site_docs_architecture_standards_and_adrs_epic_story_path_migration_guide_md_d70_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/epic-story-path-migration-guide","title":"Epic/Story path migration guide (lowercase segments)","description":"Date: 2026-06-04","source":"@site/../docs/architecture/standards-and-adrs/epic-story-path-migration-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/epic-story-path-migration-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/epic-story-path-migration-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/epic-story-path-migration-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-04T14:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Standard Operating Procedure: Environment Variables","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/environment-variables-sop"},"next":{"title":"Framework Auto-Update Mechanisms","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-auto-update-mechanisms"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/epic-story-path-migration-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-04T14:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Epic/Story path migration guide (lowercase segments)';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "rw-config.yaml",
  "id": "rw-configyaml",
  "level": 2
}, {
  "value": "Adopter migration steps",
  "id": "adopter-migration-steps",
  "level": 2
}, {
  "value": "Case-insensitive macOS (two-step rename)",
  "id": "case-insensitive-macos-two-step-rename",
  "level": 3
}, {
  "value": "Expenses Tracker verification checklist",
  "id": "expenses-tracker-verification-checklist",
  "level": 2
}, {
  "value": "Tooling read-tolerance window",
  "id": "tooling-read-tolerance-window",
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
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "epicstory-path-migration-guide-lowercase-segments",
        children: "Epic/Story path migration guide (lowercase segments)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-06-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Change:"
      }), " Kanban epic/story ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directories and filenames"
      }), " use lowercase ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic-\\{n\\}"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "story-{nnn}-"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Epic-\\{n\\}"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Story-{nnn}-"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention",
        children: "ADR-015"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/policies/kanban-governance-policy.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Path segments only — not document titles or inline ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E04:S19:T11"
      }), " notation (see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/task-naming-migration-guide",
        children: "task-naming-migration-guide.md"
      }), " and UXR-014)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Write-default example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "docs/project-management/kanban/epics/epic-04/epic-04.md\ndocs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake.md\ndocs/project-management/kanban/epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T11-*.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rw-configyaml",
      children: "rw-config.yaml"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After migration, set (relative to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban_root"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "epic_doc_pattern: epics/epic-{epic:02d}/epic-{epic:02d}.md\nstory_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*.md\ntask_doc_pattern: epics/epic-{epic:02d}/story-{story:02d}-*/T{task:02d}-*.md\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(", (0,jsx_runtime.jsx)(_components.code, {
        children: "format()"
      }), " uses integer epic/story/task; segments > 99 render with three digits naturally.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adopter-migration-steps",
      children: "Adopter migration steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Backup"
          }), " the kanban tree."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run (from repo root, dry-run first):"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python packages/frameworks/kanban/scripts/rename_kanban_epic_story_paths.py \\\n  --kanban-root docs/project-management/kanban --dry-run\npython packages/frameworks/kanban/scripts/rename_kanban_epic_story_paths.py \\\n  --kanban-root docs/project-management/kanban\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Normalize segment padding (2-digit epic/story/task when ≤ 99):"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python packages/frameworks/kanban/scripts/migrate_kanban_segment_padding.py \\\n  --root docs/project-management/kanban --dry-run\npython packages/frameworks/kanban/scripts/migrate_kanban_segment_padding.py \\\n  --root docs/project-management/kanban\npython packages/frameworks/kanban/scripts/migrate_kanban_segment_padding.py \\\n  --root docs --content-only\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3b. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework template pack"
      }), " (maintainers; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/kanban/templates/"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python packages/frameworks/kanban/scripts/case_rename_epic_story.py \\\n  packages/frameworks/kanban/templates\npython packages/frameworks/kanban/scripts/migrate_kanban_segment_padding.py \\\n  --root packages/frameworks/kanban/templates --template-pack\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " patterns (above)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Grep for broken links: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Story-"
        }), ", unpadded ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epic-4/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-019/"
        }), " under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/"
        }), " and fix remaining references."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_naming.py --strict"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-insensitive-macos-two-step-rename",
      children: "Case-insensitive macOS (two-step rename)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git mv epic-04 epic-04"
      }), " fails silently:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git mv epic-04 epic-04-tmp\ngit mv epic-04-tmp epic-04\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Apply the same pattern for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Story-*"
      }), " directories and files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expenses-tracker-verification-checklist",
      children: "Expenses Tracker verification checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After ADK kanban fresh install or migration on Expenses Tracker:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "epics/epic-*/epic-*.md"
        }), " exists (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Epic-*"
        }), " dirs unless legacy tolerance period)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Story files use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-{nnn}-"
        }), " prefix"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " uses lowercase patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_rw_task_intent.py"
        }), " resolves task doc paths"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Record evidence (path listing or screenshot) in the implementing task doc."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tooling-read-tolerance-window",
      children: "Tooling read-tolerance window"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Until migration completes, framework scripts accept both casings via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kanban_paths.resolve_epic_dir()"
      }), " and dual glob patterns. New installs from updated framework versions emit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lowercase only"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-015-kanban-epic-story-path-lowercase-convention",
          children: "ADR-015"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-017-kanban-epic-story-path-lowercase-naming",
          children: "UXR-017"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/scripts/kanban_paths.py"
        })
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