"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55804"], {
57484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_task_touch_mapping_examples_md_231_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-task-touch-mapping-examples-md-231.json
var site_docs_architecture_standards_and_adrs_task_touch_mapping_examples_md_231_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/task-touch-mapping-examples","title":"Task-Touch SemVer Mapping Examples","description":"This document provides worked examples of the Task-Touch Derived Mapping (ADR-002) implementation.","source":"@site/../docs/architecture/standards-and-adrs/task-touch-mapping-examples.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/task-touch-mapping-examples","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-touch-mapping-examples","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/task-touch-mapping-examples.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"ADR: Hybrid Task Template System (Concrete Templates + Procedural Generation)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-system-hybrid-adr"},"next":{"title":"Ultimate Canonical Cursorrules Structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/task-touch-mapping-examples.md


const frontMatter = {};
const contentTitle = 'Task-Touch SemVer Mapping Examples';

const assets = {

};



const toc = [{
  "value": "Quick Start",
  "id": "quick-start",
  "level": 2
}, {
  "value": "1. Configure Task-Touch Mapping",
  "id": "1-configure-task-touch-mapping",
  "level": 3
}, {
  "value": "2. Test the Conversion",
  "id": "2-test-the-conversion",
  "level": 3
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Example 1: Collision Resolution",
  "id": "example-1-collision-resolution",
  "level": 3
}, {
  "value": "Example 2: Monotonic Sequences",
  "id": "example-2-monotonic-sequences",
  "level": 3
}, {
  "value": "Example 3: Perpetual Tasks",
  "id": "example-3-perpetual-tasks",
  "level": 3
}, {
  "value": "Migration Example",
  "id": "migration-example",
  "level": 2
}, {
  "value": "Migrating an Existing Project",
  "id": "migrating-an-existing-project",
  "level": 3
}, {
  "value": "Configuration Examples",
  "id": "configuration-examples",
  "level": 2
}, {
  "value": "Default Configuration (Registry Mode)",
  "id": "default-configuration-registry-mode",
  "level": 3
}, {
  "value": "Task-Touch Configuration",
  "id": "task-touch-configuration",
  "level": 3
}, {
  "value": "Mixed Environment (Testing)",
  "id": "mixed-environment-testing",
  "level": 3
}, {
  "value": "Registry Structure Examples",
  "id": "registry-structure-examples",
  "level": 2
}, {
  "value": "Before Migration (Registry Only)",
  "id": "before-migration-registry-only",
  "level": 3
}, {
  "value": "After Migration (Task-Touch Added)",
  "id": "after-migration-task-touch-added",
  "level": 3
}, {
  "value": "API Usage Examples",
  "id": "api-usage-examples",
  "level": 2
}, {
  "value": "Direct Function Calls",
  "id": "direct-function-calls",
  "level": 3
}, {
  "value": "Command Line Usage",
  "id": "command-line-usage",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Issue: Counter Reset After Migration",
  "id": "issue-counter-reset-after-migration",
  "level": 3
}, {
  "value": "Issue: Different SemVer Than Expected",
  "id": "issue-different-semver-than-expected",
  "level": 3
}, {
  "value": "Issue: Collisions Still Occur",
  "id": "issue-collisions-still-occur",
  "level": 3
}, {
  "value": "Performance Considerations",
  "id": "performance-considerations",
  "level": 2
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Comparison Summary",
  "id": "comparison-summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "task-touch-semver-mapping-examples",
        children: "Task-Touch SemVer Mapping Examples"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides worked examples of the Task-Touch Derived Mapping (ADR-002) implementation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-start",
      children: "Quick Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-configure-task-touch-mapping",
      children: "1. Configure Task-Touch Mapping"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# SemVer mapping strategy: \"registry\" (default) or \"task_touch\"\nsemver_mapping_strategy: task_touch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-test-the-conversion",
      children: "2. Test the Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test with current version\npython packages/frameworks/workflow\\ mgt/scripts/version/semver_converter.py 0.6.7.101+5\n\n# Output: 0.9.1+5  (MAJOR=0, MINOR=9 epics, PATCH=1st touch, BUILD=5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-collision-resolution",
      children: "Example 1: Collision Resolution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Registry mode causes collisions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Registry mode (default)\nsemver_mapping_strategy: registry\n\n# These all collide:\n0.6.7.101+5 → 0.6.52+5\n0.6.7.102+5 → 0.6.52+5  ← Collision!\n0.6.7.103+5 → 0.6.52+5  ← Collision!\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Task-touch mode eliminates collisions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Task-touch mode\nsemver_mapping_strategy: task_touch\n\n# Same versions now produce unique SemVer:\n0.6.7.101+5 → 0.9.1+5\n0.6.7.102+5 → 0.9.2+5  ← No collision\n0.6.7.103+5 → 0.9.3+5  ← No collision\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-monotonic-sequences",
      children: "Example 2: Monotonic Sequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A typical development sequence across different epics:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Internal versions (chronological):\n0.3.2.12+1  → 0.9.1+1   # E3:S02:T12, 1st task touch\n0.6.7.103+6 → 0.9.2+6   # E2:S16:T03, 2nd task touch  \n0.2.13.7+1  → 0.9.3+1   # E2:S13:T07, 3rd task touch\n0.6.7.18+1  → 0.9.4+1   # E6:S07:T18, 4th task touch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key observations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MAJOR stays constant (RC=0)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MINOR stays constant (9 epics signed off)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATCH always increases (task-touch counter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BUILD preserved from internal version"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-perpetual-tasks",
      children: "Example 3: Perpetual Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Perpetual tasks (T101+) also get unique SemVer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Perpetual task sequence:\n0.6.7.101+24 → 0.9.5+24   # CMW T101, 5th touch\n0.6.7.102+25 → 0.9.6+25   # CMW T102, 6th touch\n0.6.7.103+26 → 0.9.7+26   # RW T103, 7th touch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-example",
      children: "Migration Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migrating-an-existing-project",
      children: "Migrating an Existing Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Analyze current state (dry run)\npython packages/frameworks/workflow\\ mgt/scripts/version/migrate_to_task_touch.py\n\n# Output:\n# 🔄 Starting migration to Task-Touch SemVer Mapping...\n# 📊 Analyzing git tag history...\n# Found 564 internal version tags\n# Epics per RC: {0: 9}\n# Task touches per RC: {0: 564}\n# 🔍 DRY RUN - No changes will be made\n\n# 2. Validate no collisions\npython packages/frameworks/workflow\\ mgt/scripts/version/migrate_to_task_touch.py --validate\n\n# Output:\n# 🔍 Validating migration (checking for collisions)...\n# ✅ No collisions found in 564 tags\n\n# 3. Apply migration\npython packages/frameworks/workflow\\ mgt/scripts/version/migrate_to_task_touch.py --apply\n\n# 4. Update configuration\n# Edit rw-config.yaml to set semver_mapping_strategy: task_touch\n\n# 5. Test the new mapping\npython packages/frameworks/workflow\\ mgt/scripts/version/semver_converter.py 0.6.7.101+5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration-examples",
      children: "Configuration Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "default-configuration-registry-mode",
      children: "Default Configuration (Registry Mode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml\nversioning_schema: RC.EPIC.STORY.TASK+BUILD\nsemver_mapping_strategy: registry  # Default\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-configuration",
      children: "Task-Touch Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml\nversioning_schema: RC.EPIC.STORY.TASK+BUILD\nsemver_mapping_strategy: task_touch  # New ADR-002 mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mixed-environment-testing",
      children: "Mixed Environment (Testing)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml\nversioning_schema: RC.EPIC.STORY.TASK+BUILD\nsemver_mapping_strategy: registry  # Keep default for now\n\n# Test task-touch mode explicitly:\npython semver_converter.py 0.6.7.101+5 --strategy task_touch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "registry-structure-examples",
      children: "Registry Structure Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "before-migration-registry-only",
      children: "Before Migration (Registry Only)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# semver-registry.yaml\nrc_0:\n  epic_to_minor:\n    1: 1\n    2: 2\n    3: 3\n    6: 6\n    9: 9\n  story_to_patch:\n    (1,1): 1\n    (2,13): 63\n    (3,2): 19\n    (6,7): 52\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "after-migration-task-touch-added",
      children: "After Migration (Task-Touch Added)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# semver-registry.yaml\nrc_0:\n  epic_to_minor:          # Preserved for backward compatibility\n    1: 1\n    2: 2\n    3: 3\n    6: 6\n    9: 9\n  story_to_patch:        # Preserved for backward compatibility\n    (1,1): 1\n    (2,13): 63\n    (3,2): 19\n    (6,7): 52\n  task_touch_mode:       # New ADR-002 section\n    epic_count: 9         # 9 epics signed off\n    task_touch_counter: 564  # Current counter value\n    mapping_history: []   # Optional audit trail\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-usage-examples",
      children: "API Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "direct-function-calls",
      children: "Direct Function Calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from semver_converter import (\n    convert_version_string,\n    convert_internal_to_semver_task_touch,\n    get_epic_count,\n    set_epic_count\n)\n\n# Strategy-aware conversion\nsemver = convert_version_string(\"0.6.7.101+5\")  # Uses config\nsemver_tt = convert_version_string(\"0.6.7.101+5\", strategy=\"task_touch\")\n\n# Direct task-touch conversion\nmajor, minor, patch, build = convert_internal_to_semver_task_touch(0, 6, 7, 101, 5)\n\n# Counter management\nepic_count = get_epic_count(0)  # Get current epic count\nset_epic_count(0, 10)           # Set epic count (for new RC)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "command-line-usage",
      children: "Command Line Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Use configured strategy\npython semver_converter.py 0.6.7.101+5\n\n# Override strategy for testing\npython semver_converter.py 0.6.7.101+5 --strategy task_touch\npython semver_converter.py 0.6.7.101+5 --strategy registry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-counter-reset-after-migration",
      children: "Issue: Counter Reset After Migration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Task-touch counter starts from 0 instead of continuing from history."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Ensure migration was applied with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--apply"
      }), " flag:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python migrate_to_task_touch.py --apply\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-different-semver-than-expected",
      children: "Issue: Different SemVer Than Expected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Conversion produces different MINOR/PATCH than expected."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Check epic count and counter values:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from semver_converter import get_epic_count, get_task_touch_counter\nprint(f\"Epic count: {get_epic_count(0)}\")\nprint(f\"Task counter: {get_task_touch_counter(0)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-collisions-still-occur",
      children: "Issue: Collisions Still Occur"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom:"
      }), " Task-touch mode still produces collisions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Validate migration and check for concurrent access:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python migrate_to_task_touch.py --validate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "performance-considerations",
      children: "Performance Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conversion Speed:"
        }), " < 1ms per conversion (negligible impact)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Registry Size:"
        }), " Adds ~100 bytes per RC for task-touch metadata"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Operations:"
        }), " Migration analyzes all tags once (~5 seconds for 500 tags)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory Usage:"
        }), " Minimal additional memory footprint"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test Before Deploying:"
        }), " Always validate with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--validate"
        }), " flag"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backup Registry:"
        }), " Migration automatically backs up existing registry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gradual Rollout:"
        }), " Keep registry mode as default during transition"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Choice:"
        }), " Record mapping strategy choice in project documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitor Collisions:"
        }), " Periodically validate if using task-touch mode"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison-summary",
      children: "Comparison Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Registry Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Task-Touch Mode"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible (same epic/story)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monotonic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Within epic/story only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SemVer Meaning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Epic/Story based"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task-touch based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Migration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Package Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sometimes problematic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always compatible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traceability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (loses TASK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perfect (1:1)"
          })]
        })]
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