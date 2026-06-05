"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["78238"], {
98706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_release_configuration_examples_md_294_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-release-configuration-examples-md-294.json
var site_docs_maintenance_release_configuration_examples_md_294_namespaceObject = JSON.parse('{"id":"maintenance/release-configuration-examples","title":"Release Configuration Examples","description":"Purpose: Sample rw-config.yaml files for different release scenarios","source":"@site/../docs/maintenance/release-configuration-examples.md","sourceDirName":"maintenance","slug":"/maintenance/release-configuration-examples","permalink":"/ai-dev-kit/docs/maintenance/release-configuration-examples","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/release-configuration-examples.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Release Checklist Templates","permalink":"/ai-dev-kit/docs/maintenance/release-checklist-templates"},"next":{"title":"Release Integration Guides","permalink":"/ai-dev-kit/docs/maintenance/release-integration-guides"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/release-configuration-examples.md


const frontMatter = {};
const contentTitle = 'Release Configuration Examples';

const assets = {

};



const toc = [{
  "value": "🚨 Critical Policy Reminder",
  "id": "-critical-policy-reminder",
  "level": 2
}, {
  "value": "Registry Mode Configuration",
  "id": "registry-mode-configuration",
  "level": 2
}, {
  "value": "Basic Registry Mode Setup",
  "id": "basic-registry-mode-setup",
  "level": 3
}, {
  "value": "Registry Mode with Custom Paths",
  "id": "registry-mode-with-custom-paths",
  "level": 3
}, {
  "value": "Registry Mode without Kanban",
  "id": "registry-mode-without-kanban",
  "level": 3
}, {
  "value": "Task-Touch Mode Configuration",
  "id": "task-touch-mode-configuration",
  "level": 2
}, {
  "value": "Basic Task-Touch Mode Setup",
  "id": "basic-task-touch-mode-setup",
  "level": 3
}, {
  "value": "Task-Touch Mode with Internal Tags",
  "id": "task-touch-mode-with-internal-tags",
  "level": 3
}, {
  "value": "Task-Touch Mode with Custom Paths",
  "id": "task-touch-mode-with-custom-paths",
  "level": 3
}, {
  "value": "Advanced Configuration Examples",
  "id": "advanced-configuration-examples",
  "level": 2
}, {
  "value": "Development Environment Configuration",
  "id": "development-environment-configuration",
  "level": 3
}, {
  "value": "Production Environment Configuration",
  "id": "production-environment-configuration",
  "level": 3
}, {
  "value": "Minimal Configuration",
  "id": "minimal-configuration",
  "level": 3
}, {
  "value": "Configuration Field Reference",
  "id": "configuration-field-reference",
  "level": 2
}, {
  "value": "Required Fields",
  "id": "required-fields",
  "level": 3
}, {
  "value": "Optional Fields",
  "id": "optional-fields",
  "level": 3
}, {
  "value": "Configuration Validation",
  "id": "configuration-validation",
  "level": 2
}, {
  "value": "Basic Validation Script",
  "id": "basic-validation-script",
  "level": 3
}, {
  "value": "Advanced Validation Script",
  "id": "advanced-validation-script",
  "level": 3
}, {
  "value": "Configuration Migration",
  "id": "configuration-migration",
  "level": 2
}, {
  "value": "Switch from Registry to Task-Touch",
  "id": "switch-from-registry-to-task-touch",
  "level": 3
}, {
  "value": "Switch from Task-Touch to Registry",
  "id": "switch-from-task-touch-to-registry",
  "level": 3
}, {
  "value": "Testing Configuration",
  "id": "testing-configuration",
  "level": 2
}, {
  "value": "Test Registry Mode",
  "id": "test-registry-mode",
  "level": 3
}, {
  "value": "Test Task-Touch Mode",
  "id": "test-task-touch-mode",
  "level": 3
}, {
  "value": "Troubleshooting Configuration Issues",
  "id": "troubleshooting-configuration-issues",
  "level": 2
}, {
  "value": "Common Issues and Solutions",
  "id": "common-issues-and-solutions",
  "level": 3
}, {
  "value": "Issue: Missing Configuration File",
  "id": "issue-missing-configuration-file",
  "level": 4
}, {
  "value": "Issue: Invalid YAML Syntax",
  "id": "issue-invalid-yaml-syntax",
  "level": 4
}, {
  "value": "Issue: Invalid SemVer Strategy",
  "id": "issue-invalid-semver-strategy",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "release-configuration-examples",
        children: "Release Configuration Examples"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Sample rw-config.yaml files for different release scenarios", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-critical-policy-reminder",
      children: "🚨 Critical Policy Reminder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NEVER use manual git commit/push commands!"
      }), " Always use Release Workflow (RW) automation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registry-mode-configuration",
      children: "Registry Mode Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-registry-mode-setup",
      children: "Basic Registry Mode Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Registry Mode\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: registry\nuse_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: \"epics/Epic-{epic}/Epic-{epic}.md\"\nstory_doc_pattern: \"epics/Epic-{epic}/Story-{story}-*.md\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-mode-with-custom-paths",
      children: "Registry Mode with Custom Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Registry Mode (Custom Paths)\nversion_file: src/myproject/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-archive\nscripts_path: scripts/validation\nreadme_file: README.md\nsemver_mapping_strategy: registry\nuse_kanban: true\nkanban_root: docs/kanban\nepic_doc_pattern: \"epics/Epic-{epic}/Epic-{epic}.md\"\nstory_doc_pattern: \"epics/Epic-{epic}/Story-{story}-*.md\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-mode-without-kanban",
      children: "Registry Mode without Kanban"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Registry Mode (No Kanban)\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: registry\nuse_kanban: false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "task-touch-mode-configuration",
      children: "Task-Touch Mode Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-task-touch-mode-setup",
      children: "Basic Task-Touch Mode Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Task-Touch Mode\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: task_touch\nuse_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: \"epics/Epic-{epic}/Epic-{epic}.md\"\nstory_doc_pattern: \"epics/Epic-{epic}/Story-{story}-*.md\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-mode-with-internal-tags",
      children: "Task-Touch Mode with Internal Tags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Task-Touch Mode (with Internal Tags)\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: task_touch\nuse_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: \"epics/Epic-{epic}/Epic-{epic}.md\"\nstory_doc_pattern: \"epics/Epic-{epic}/Story-{story}-*.md\"\n\n# Additional settings for task-touch mode\ncreate_internal_tag: true  # Also create internal version tag for traceability\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-mode-with-custom-paths",
      children: "Task-Touch Mode with Custom Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Task-Touch Mode (Custom Paths)\nversion_file: src/myproject/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-archive\nscripts_path: scripts/validation\nreadme_file: README.md\nsemver_mapping_strategy: task_touch\nuse_kanban: true\nkanban_root: docs/kanban\nepic_doc_pattern: \"epics/Epic-{epic}/Epic-{epic}.md\"\nstory_doc_pattern: \"epics/Epic-{epic}/Story-{story}-*.md\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "advanced-configuration-examples",
      children: "Advanced Configuration Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "development-environment-configuration",
      children: "Development Environment Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Development Environment\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: registry  # Use registry for development\nuse_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: \"epics/Epic-{epic}/Epic-{epic}.md\"\nstory_doc_pattern: \"epics/Epic-{epic}/Story-{story}-*.md\"\n\n# Development-specific settings\ndebug_mode: true\nskip_github_release: true  # Skip GitHub release in development\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "production-environment-configuration",
      children: "Production Environment Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Production Environment\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: task_touch  # Use task-touch for production\nuse_kanban: true\nkanban_root: docs/project-management/kanban\nepic_doc_pattern: \"epics/Epic-{epic}/Epic-{epic}.md\"\nstory_doc_pattern: \"epics/Epic-{epic}/Story-{story}-*.md\"\n\n# Production-specific settings\ncreate_internal_tag: true  # Maintain traceability\nrequire_github_release: true  # Require GitHub release\nskip_validation: false  # Run all validations in production\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minimal-configuration",
      children: "Minimal Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml - Minimal Setup\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: registry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-field-reference",
      children: "Configuration Field Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-fields",
      children: "Required Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "version_file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path to version file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "src/fynd_deals/version.py"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "main_changelog"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path to main changelog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "changelog_dir"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Directory for changelog archives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scripts_path"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path to validation scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/workflow-mgt/scripts"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "readme_file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path to README file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "README.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_mapping_strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SemVer mapping strategy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "registry"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "task_touch"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optional-fields",
      children: "Optional Fields"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "use_kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable Kanban integration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kanban_root"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root directory for Kanban docs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/project-management/kanban"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "docs/kanban"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epic_doc_pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern for Epic documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-\\{epic\\}/Epic-\\{epic\\}.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-\\{epic\\}.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "story_doc_pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern for Story documents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "epics/Epic-\\{epic\\}/Story-\\{story\\}-*.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stories/Story-\\{story\\}.md"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "create_internal_tag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create internal tags in task-touch mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "debug_mode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable debug output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "skip_github_release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip GitHub release creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "require_github_release"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require successful GitHub release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "skip_validation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip validation steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-validation",
      children: "Configuration Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-validation-script",
      children: "Basic Validation Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# validate-config.sh - Basic configuration validation\n\nCONFIG_FILE=\"rw-config.yaml\"\n\necho \"🔍 Validating $CONFIG_FILE...\"\n\n# Check if file exists\nif [ ! -f \"$CONFIG_FILE\" ]; then\n    echo \"❌ Configuration file not found: $CONFIG_FILE\"\n    exit 1\nfi\n\n# Check YAML syntax\nif ! python3 -c \"import yaml; yaml.safe_load(open('$CONFIG_FILE'))\" 2>/dev/null; then\n    echo \"❌ Invalid YAML syntax in $CONFIG_FILE\"\n    exit 1\nfi\n\n# Check required fields\nREQUIRED_FIELDS=(\"version_file\" \"main_changelog\" \"changelog_dir\" \"scripts_path\" \"readme_file\" \"semver_mapping_strategy\")\n\nfor field in \"${REQUIRED_FIELDS[@]}\"; do\n    if ! grep -q \"^$field:\" \"$CONFIG_FILE\"; then\n        echo \"❌ Missing required field: $field\"\n        exit 1\n    fi\ndone\n\n# Check SemVer strategy\nSTRATEGY=$(grep \"semver_mapping_strategy:\" \"$CONFIG_FILE\" | cut -d: -f2 | tr -d ' ')\nif [ \"$STRATEGY\" != \"registry\" ] && [ \"$STRATEGY\" != \"task_touch\" ]; then\n    echo \"❌ Invalid semver_mapping_strategy: $STRATEGY (must be 'registry' or 'task_touch')\"\n    exit 1\nfi\n\necho \"✅ Configuration validation passed\"\necho \"📋 Strategy: $STRATEGY\"\necho \"📁 Version file: $(grep version_file: \"$CONFIG_FILE\" | cut -d: -f2 | tr -d ' ')\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-validation-script",
      children: "Advanced Validation Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "#!/usr/bin/env python3\n# validate-config-advanced.py - Advanced configuration validation\n\nimport yaml\nimport os\nfrom pathlib import Path\n\ndef validate_config(config_path=\"rw-config.yaml\"):\n    \"\"\"Validate rw-config.yaml with advanced checks\"\"\"\n    \n    print(f\"🔍 Advanced validation of {config_path}...\")\n    \n    # Load configuration\n    try:\n        with open(config_path, 'r') as f:\n            config = yaml.safe_load(f)\n    except FileNotFoundError:\n        print(f\"❌ Configuration file not found: {config_path}\")\n        return False\n    except yaml.YAMLError as e:\n        print(f\"❌ YAML syntax error: {e}\")\n        return False\n    \n    # Validate required fields\n    required_fields = [\n        'version_file', 'main_changelog', 'changelog_dir', \n        'scripts_path', 'readme_file', 'semver_mapping_strategy'\n    ]\n    \n    for field in required_fields:\n        if field not in config:\n            print(f\"❌ Missing required field: {field}\")\n            return False\n    \n    # Validate SemVer strategy\n    strategy = config['semver_mapping_strategy']\n    if strategy not in ['registry', 'task_touch']:\n        print(f\"❌ Invalid semver_mapping_strategy: {strategy}\")\n        return False\n    \n    # Validate file paths\n    paths_to_check = [\n        config['version_file'],\n        config['main_changelog'],\n        config['readme_file']\n    ]\n    \n    for path in paths_to_check:\n        if not Path(path).exists():\n            print(f\"⚠️  Warning: File does not exist: {path}\")\n    \n    # Validate directory paths\n    dirs_to_check = [\n        config['changelog_dir'],\n        config['scripts_path']\n    ]\n    \n    for path in dirs_to_check:\n        if not Path(path).exists():\n            print(f\"⚠️  Warning: Directory does not exist: {path}\")\n    \n    # Validate Kanban configuration if enabled\n    if config.get('use_kanban', False):\n        kanban_root = config.get('kanban_root')\n        if kanban_root and not Path(kanban_root).exists():\n            print(f\"⚠️  Warning: Kanban root directory does not exist: {kanban_root}\")\n    \n    # Print configuration summary\n    print(f\"✅ Configuration validation passed\")\n    print(f\"📋 Strategy: {strategy}\")\n    print(f\"📁 Version file: {config['version_file']}\")\n    print(f\"📝 Main changelog: {config['main_changelog']}\")\n    print(f\"📂 Changelog dir: {config['changelog_dir']}\")\n    print(f\"🔧 Scripts path: {config['scripts_path']}\")\n    print(f\"📖 README: {config['readme_file']}\")\n    print(f\"🎯 Kanban enabled: {config.get('use_kanban', False)}\")\n    \n    return True\n\nif __name__ == \"__main__\":\n    validate_config()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-migration",
      children: "Configuration Migration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "switch-from-registry-to-task-touch",
      children: "Switch from Registry to Task-Touch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# migrate-to-task-touch.sh - Migrate configuration to task-touch mode\n\nCONFIG_FILE=\"rw-config.yaml\"\n\necho \"🔄 Migrating to task-touch mode...\"\n\n# Backup current configuration\ncp \"$CONFIG_FILE\" \"$CONFIG_FILE.backup.$(date +%Y%m%d-%H%M%S)\"\n\n# Update SemVer strategy\nsed -i.bak 's/semver_mapping_strategy: registry/semver_mapping_strategy: task_touch/' \"$CONFIG_FILE\"\n\n# Add task-touch specific settings if not present\nif ! grep -q \"create_internal_tag:\" \"$CONFIG_FILE\"; then\n    echo \"create_internal_tag: true  # Also create internal version tag for traceability\" >> \"$CONFIG_FILE\"\nfi\n\necho \"✅ Migration complete\"\necho \"📋 Configuration updated to task-touch mode\"\necho \"💾 Backup saved: $CONFIG_FILE.backup.$(date +%Y%m%d-%H%M%S)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "switch-from-task-touch-to-registry",
      children: "Switch from Task-Touch to Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# migrate-to-registry.sh - Migrate configuration to registry mode\n\nCONFIG_FILE=\"rw-config.yaml\"\n\necho \"🔄 Migrating to registry mode...\"\n\n# Backup current configuration\ncp \"$CONFIG_FILE\" \"$CONFIG_FILE.backup.$(date +%Y%m%d-%H%M%S)\"\n\n# Update SemVer strategy\nsed -i.bak 's/semver_mapping_strategy: task_touch/semver_mapping_strategy: registry/' \"$CONFIG_FILE\"\n\n# Remove task-touch specific settings\nsed -i.bak '/create_internal_tag:/d' \"$CONFIG_FILE\"\n\necho \"✅ Migration complete\"\necho \"📋 Configuration updated to registry mode\"\necho \"💾 Backup saved: $CONFIG_FILE.backup.$(date +%Y%m%d-%H%M%S)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testing-configuration",
      children: "Testing Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-registry-mode",
      children: "Test Registry Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# test-registry-mode.sh - Test registry mode configuration\n\necho \"🧪 Testing registry mode configuration...\"\n\n# Set up test configuration\ncat > test-rw-config.yaml << EOF\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: registry\nEOF\n\n# Test SemVer conversion\npython3 -c \"\nimport sys\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts/version')\nfrom semver_converter import convert_version_string\nresult = convert_version_string('0.5.1.48+1', 'registry')\nprint(f'Registry mode conversion: 0.5.1.48+1 → {result}')\n\"\n\n# Clean up\nrm test-rw-config.yaml\n\necho \"✅ Registry mode test complete\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-task-touch-mode",
      children: "Test Task-Touch Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# test-task-touch-mode.sh - Test task-touch mode configuration\n\necho \"🧪 Testing task-touch mode configuration...\"\n\n# Set up test configuration\ncat > test-rw-config.yaml << EOF\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: task_touch\nEOF\n\n# Test SemVer conversion\npython3 -c \"\nimport sys\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts/version')\nfrom semver_converter import convert_version_string\nresult = convert_version_string('0.5.1.48+1', 'task_touch')\nprint(f'Task-touch mode conversion: 0.5.1.48+1 → {result}')\n\"\n\n# Clean up\nrm test-rw-config.yaml\n\necho \"✅ Task-touch mode test complete\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-configuration-issues",
      children: "Troubleshooting Configuration Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-issues-and-solutions",
      children: "Common Issues and Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-missing-configuration-file",
      children: "Issue: Missing Configuration File"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Solution: Create default configuration\ncat > rw-config.yaml << EOF\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: registry\nEOF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-invalid-yaml-syntax",
      children: "Issue: Invalid YAML Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Solution: Validate and fix YAML\npython3 -c \"\nimport yaml\ntry:\n    with open('rw-config.yaml', 'r') as f:\n        yaml.safe_load(f)\n    print('✅ YAML syntax is valid')\nexcept yaml.YAMLError as e:\n    print(f'❌ YAML syntax error: {e}')\n    print('💡 Check for indentation, colons, and quotes')\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-invalid-semver-strategy",
      children: "Issue: Invalid SemVer Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Solution: Check and fix strategy\nSTRATEGY=$(grep \"semver_mapping_strategy:\" rw-config.yaml | cut -d: -f2 | tr -d ' ')\necho \"Current strategy: $STRATEGY\"\n\nif [ \"$STRATEGY\" != \"registry\" ] && [ \"$STRATEGY\" != \"task_touch\" ]; then\n    echo \"❌ Invalid strategy. Fixing to registry...\"\n    sed -i.bak \"s/semver_mapping_strategy: .*/semver_mapping_strategy: registry/\" rw-config.yaml\nfi\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remember:"
      }), " Always test configuration changes in a development environment before applying to production!"]
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