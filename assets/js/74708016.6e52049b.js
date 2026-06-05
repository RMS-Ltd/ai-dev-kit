"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["16883"], {
91683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_054_kanban_package_migration_installation_completely_broken_md_747_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-054-kanban-package-migration-installation-completely-broken-md-747.json
var site_docs_project_management_kanban_fr_br_br_054_kanban_package_migration_installation_completely_broken_md_747_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-054-kanban-package-migration-installation-completely-broken","title":"Bug Report: Kanban Package Migration/Installation Completely Broken","description":"Type: Bug Report (BR)","source":"@site/../docs/project-management/kanban/fr-br/BR-054-kanban-package-migration-installation-completely-broken.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-054-kanban-package-migration-installation-completely-broken","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-054-kanban-package-migration-installation-completely-broken","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-054-kanban-package-migration-installation-completely-broken.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-10T10:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"BR-053: GitHub Actions Workflow Push Trigger Bug","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug"},"next":{"title":"Bug Report: Missing Implementation Cycle Workflow (ICW)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-055-missing-implementation-cycle-workflow-icw"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-054-kanban-package-migration-installation-completely-broken.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-10T10:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report: Kanban Package Migration/Installation Completely Broken';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Description",
  "id": "description",
  "level": 2
}, {
  "value": "What is the Bug?",
  "id": "what-is-the-bug",
  "level": 3
}, {
  "value": "What Should Happen vs. What Actually Happens?",
  "id": "what-should-happen-vs-what-actually-happens",
  "level": 3
}, {
  "value": "Environment",
  "id": "environment",
  "level": 2
}, {
  "value": "Root Cause Analysis",
  "id": "root-cause-analysis",
  "level": 2
}, {
  "value": "Primary Issues",
  "id": "primary-issues",
  "level": 3
}, {
  "value": "Resolution",
  "id": "resolution",
  "level": 2
}, {
  "value": "Fixed via E4 (Kanban Package Installation Evaluation)",
  "id": "fixed-via-e4-kanban-package-installation-evaluation",
  "level": 3
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Verification",
  "id": "verification",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "bug-report-kanban-package-migrationinstallation-completely-broken",
        children: "Bug Report: Kanban Package Migration/Installation Completely Broken"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type:"
      }), " Bug Report (BR)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted:"
      }), " 2026-01-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Submitted By:"
      }), " earlution (project maintainer)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED ✅ (v0.4.17.6+1 via E4", ":S17", ")", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " #17"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Kanban package installation and migration process is fundamentally broken and will fail for most users. The package needs significant rework before it can be considered functional for production use."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-the-bug",
      children: "What is the Bug?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Kanban package installation process suffers from multiple critical issues that prevent successful installation and migration:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migration Path Failures:"
        }), " Migration modes fail for most project structures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path Inflexibility:"
        }), " Only supports one assumed project structure pattern"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Missing Validation:"
        }), " No pre-flight checks before attempting migration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poor Error Handling:"
        }), " Inadequate error handling and user guidance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Gaps:"
        }), " Insufficient documentation for troubleshooting"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-should-happen-vs-what-actually-happens",
      children: "What Should Happen vs. What Actually Happens?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation works for multiple project structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration paths are reliable and well-tested"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-flight validation prevents failed migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear error messages and recovery guidance"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive documentation covers all scenarios"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation fails for most users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Migration only works for specific project structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No validation leads to failed migrations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Poor error handling leaves users stuck"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation gaps prevent troubleshooting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment",
      children: "Environment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Version:"
        }), " v2.1.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Installation Method:"
        }), " Git submodule"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Structure:"
        }), " knowledge/fynd_deals/Kanban/Epic-*/ (root level epics)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Python Version:"
        }), " 3.x"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OS:"
        }), " macOS"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause-analysis",
      children: "Root Cause Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "primary-issues",
      children: "Primary Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Hard-coded Path Assumptions:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Assumes specific directory structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No flexibility for different project layouts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fails when structure doesn't match expectations"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Missing Validation Framework:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No pre-flight checks before migration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No validation of source/target compatibility"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No rollback capability for failed migrations"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Inadequate Testing Coverage:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Limited testing across different scenarios"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No edge case coverage"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No real-world project validation"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Poor Error Handling:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generic error messages"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No recovery guidance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "No debugging information"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolution",
      children: "Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "fixed-via-e4-kanban-package-installation-evaluation",
      children: ["Fixed via E4", ":S17", " (Kanban Package Installation Evaluation)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Story Completion:"
      }), " E4", ":S17", " completed with comprehensive evaluation and fixes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Improvements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comprehensive Testing:"
        }), " Added test suite covering all migration modes and edge cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path Flexibility:"
        }), " Support for multiple project structures implemented"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Framework:"
        }), " Pre-flight checks added before migration attempts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Feedback Loop:"
        }), " Documentation gaps identified and addressed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling:"
        }), " Enhanced error handling and recovery guidance"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tasks Completed:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ E04:S17", ":T01", " - Enumerate supported installation paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ E04:S17", ":T02", " - Validate fresh install steps for each path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ E04:S17", ":T03", " - Validate migration/update paths"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ E04:S17", ":T04", " - Verify post-install configuration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ E04:S17", ":T05", " - Document failure modes and rollback guidance"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ E04:S17", ":T06", " - Capture documentation gaps and improvements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Current Status:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package is production-ready"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All critical issues resolved"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive validation in place"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhanced documentation and error handling"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Before Fix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation failed for most users"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package marked as beta/experimental"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Poor user experience and adoption"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After Fix:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Installation works reliably for all supported structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Package production-ready"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enhanced user experience and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation Evidence:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["E4", ":S17", " completion with all tasks validated"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive testing across multiple scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User feedback incorporated into improvements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Documentation gaps identified and resolved"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Assurance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All acceptance criteria met"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre-flight validation working"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error handling and recovery guidance in place"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Production readiness confirmed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution Status:"
      }), " ✅ COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quality Assurance:"
      }), " ✅ PASSED", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Production Ready:"
      }), " ✅ YES"]
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