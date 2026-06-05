"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["94744"], {
15496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_release_quick_reference_md_31b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-release-quick-reference-md-31b.json
var site_docs_maintenance_release_quick_reference_md_31b_namespaceObject = JSON.parse('{"id":"maintenance/release-quick-reference","title":"Release Quick Reference","description":"Purpose: One-page command summaries for common release scenarios","source":"@site/../docs/maintenance/release-quick-reference.md","sourceDirName":"maintenance","slug":"/maintenance/release-quick-reference","permalink":"/ai-dev-kit/docs/maintenance/release-quick-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/release-quick-reference.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Release Integration Guides","permalink":"/ai-dev-kit/docs/maintenance/release-integration-guides"},"next":{"title":"Release Runbook","permalink":"/ai-dev-kit/docs/maintenance/release-runbook"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/release-quick-reference.md


const frontMatter = {};
const contentTitle = 'Release Quick Reference';

const assets = {

};



const toc = [{
  "value": "🚨 Critical Reminder",
  "id": "-critical-reminder",
  "level": 2
}, {
  "value": "Registry Mode Quick Reference",
  "id": "registry-mode-quick-reference",
  "level": 2
}, {
  "value": "Pre-Release Checklist",
  "id": "pre-release-checklist",
  "level": 3
}, {
  "value": "Execute Release",
  "id": "execute-release",
  "level": 3
}, {
  "value": "Post-Release Verification",
  "id": "post-release-verification",
  "level": 3
}, {
  "value": "Task-Touch Mode Quick Reference",
  "id": "task-touch-mode-quick-reference",
  "level": 2
}, {
  "value": "Pre-Release Checklist",
  "id": "pre-release-checklist-1",
  "level": 3
}, {
  "value": "Execute Release",
  "id": "execute-release-1",
  "level": 3
}, {
  "value": "Post-Release Verification",
  "id": "post-release-verification-1",
  "level": 3
}, {
  "value": "Emergency Commands",
  "id": "emergency-commands",
  "level": 2
}, {
  "value": "Check Release Status",
  "id": "check-release-status",
  "level": 3
}, {
  "value": "Debug Mode",
  "id": "debug-mode",
  "level": 3
}, {
  "value": "Configuration Check",
  "id": "configuration-check",
  "level": 3
}, {
  "value": "Common Troubleshooting",
  "id": "common-troubleshooting",
  "level": 2
}, {
  "value": "Branch Issues",
  "id": "branch-issues",
  "level": 3
}, {
  "value": "Tag Conflicts",
  "id": "tag-conflicts",
  "level": 3
}, {
  "value": "Permission Issues",
  "id": "permission-issues",
  "level": 3
}, {
  "value": "Configuration Switching",
  "id": "configuration-switching",
  "level": 2
}, {
  "value": "Switch to Task-Touch Mode",
  "id": "switch-to-task-touch-mode",
  "level": 3
}, {
  "value": "Switch to Registry Mode",
  "id": "switch-to-registry-mode",
  "level": 3
}, {
  "value": "Version Formats",
  "id": "version-formats",
  "level": 2
}, {
  "value": "Registry Mode",
  "id": "registry-mode",
  "level": 3
}, {
  "value": "Task-Touch Mode",
  "id": "task-touch-mode",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "release-quick-reference",
        children: "Release Quick Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " One-page command summaries for common release scenarios", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-critical-reminder",
      children: "🚨 Critical Reminder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NEVER use manual git commit/push commands!"
      }), " Always use Release Workflow (RW) automation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registry-mode-quick-reference",
      children: "Registry Mode Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-release-checklist",
      children: "Pre-Release Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check branch\ngit branch --show-current\n\n# Validate branch safety\npython3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict\n\n# Check configuration\ngrep \"semver_mapping_strategy:\" rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "execute-release",
      children: "Execute Release"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Start Release Workflow\nRW\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "post-release-verification",
      children: "Post-Release Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify tag\ngit tag -l | grep \"v0.5.1.48+1\"\ngit show v0.5.1.48+1 --stat\n\n# Check GitHub release\ngh release view v0.5.1.48+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-touch-mode-quick-reference",
      children: "Task-Touch Mode Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-release-checklist-1",
      children: "Pre-Release Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check branch\ngit branch --show-current\n\n# Validate branch safety\npython3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict\n\n# Check configuration\ngrep \"semver_mapping_strategy:\" rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "execute-release-1",
      children: "Execute Release"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Start Release Workflow\nRW\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "post-release-verification-1",
      children: "Post-Release Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify SemVer tag\ngit tag -l | grep \"v0.5.39+1\"\ngit show v0.5.39+1 --stat\n\n# Check GitHub release\ngh release view v0.5.39+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "emergency-commands",
      children: "Emergency Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "check-release-status",
      children: "Check Release Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git status\ngit log --oneline -5\ngit tag -l | tail -5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debug-mode",
      children: "Debug Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "export RW_DEBUG=true\nRW\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-check",
      children: "Configuration Check"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python3 -c \"import yaml; print('Config OK' if yaml.safe_load(open('rw-config.yaml')) else 'Config ERROR')\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-troubleshooting",
      children: "Common Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "branch-issues",
      children: "Branch Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Switch to correct epic branch\ngit checkout epic/{n}\n\n# Clean up dirty state\ngit add -A\ngit commit -m \"WIP: Clean up before release\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tag-conflicts",
      children: "Tag Conflicts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Delete conflicting tag\ngit tag -d v0.5.1.48+1\ngit push origin :refs/tags/v0.5.1.48+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "permission-issues",
      children: "Permission Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check GitHub auth\ngh auth status\n\n# Set token\nexport GITHUB_TOKEN=your_token_here\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-switching",
      children: "Configuration Switching"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "switch-to-task-touch-mode",
      children: "Switch to Task-Touch Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cp rw-config.yaml rw-config.yaml.backup\nsed -i.bak 's/semver_mapping_strategy: registry/semver_mapping_strategy: task_touch/' rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "switch-to-registry-mode",
      children: "Switch to Registry Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cp rw-config.yaml rw-config.yaml.backup\nsed -i.bak 's/semver_mapping_strategy: task_touch/semver_mapping_strategy: registry/' rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version-formats",
      children: "Version Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-mode",
      children: "Registry Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.1.48+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+BUILD"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-mode",
      children: "Task-Touch Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag Format:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.39+1"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAJOR.MINOR.PATCH+BUILD"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remember:"
      }), " Always respect the \"no manual commit/push\" policy!"]
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