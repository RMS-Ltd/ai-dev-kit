"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["3078"], {
31411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_maintenance_release_runbook_md_d77_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-maintenance-release-runbook-md-d77.json
var site_docs_maintenance_release_runbook_md_d77_namespaceObject = JSON.parse('{"id":"maintenance/release-runbook","title":"Release Runbook","description":"Version: 1.0.0","source":"@site/../docs/maintenance/release-runbook.md","sourceDirName":"maintenance","slug":"/maintenance/release-runbook","permalink":"/ai-dev-kit/docs/maintenance/release-runbook","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/maintenance/release-runbook.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Release Quick Reference","permalink":"/ai-dev-kit/docs/maintenance/release-quick-reference"},"next":{"title":"SemVer registry collision repair (2026-06-04)","permalink":"/ai-dev-kit/docs/maintenance/semver-registry-collision-repair-2026-06-04"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/maintenance/release-runbook.md


const frontMatter = {};
const contentTitle = 'Release Runbook';

const assets = {

};



const toc = [{
  "value": "🚨 Critical Policy: &quot;No Manual Commit/Push&quot;",
  "id": "-critical-policy-no-manual-commitpush",
  "level": 2
}, {
  "value": "📋 Pre-Release Checklist",
  "id": "-pre-release-checklist",
  "level": 2
}, {
  "value": "Step 1: Branch Safety Validation",
  "id": "step-1-branch-safety-validation",
  "level": 3
}, {
  "value": "Step 2: Configuration Verification",
  "id": "step-2-configuration-verification",
  "level": 3
}, {
  "value": "Step 3: Dependencies Check",
  "id": "step-3-dependencies-check",
  "level": 3
}, {
  "value": "Step 4: Environment Validation",
  "id": "step-4-environment-validation",
  "level": 3
}, {
  "value": "� UCW – Update Changelog Workflow (Manual Stewardship)",
  "id": "-ucw--update-changelog-workflow-manual-stewardship",
  "level": 2
}, {
  "value": "When to Run UCW",
  "id": "when-to-run-ucw",
  "level": 3
}, {
  "value": "UCW Checklist (Manual)",
  "id": "ucw-checklist-manual",
  "level": 3
}, {
  "value": "CI Hook (<code>ucw-verification</code>)",
  "id": "ci-hook-ucw-verification",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 3
}, {
  "value": "�🚀 Release Execution Commands",
  "id": "-release-execution-commands",
  "level": 2
}, {
  "value": "Registry Mode Commands",
  "id": "registry-mode-commands",
  "level": 3
}, {
  "value": "Step 1: Start Release Workflow",
  "id": "step-1-start-release-workflow",
  "level": 4
}, {
  "value": "Step 2: Monitor Progress",
  "id": "step-2-monitor-progress",
  "level": 4
}, {
  "value": "Task-Touch Mode Commands",
  "id": "task-touch-mode-commands",
  "level": 3
}, {
  "value": "Step 1: Start Release Workflow",
  "id": "step-1-start-release-workflow-1",
  "level": 4
}, {
  "value": "Step 2: Monitor Progress",
  "id": "step-2-monitor-progress-1",
  "level": 4
}, {
  "value": "🏷️ Tagging Strategy Guide",
  "id": "️-tagging-strategy-guide",
  "level": 2
}, {
  "value": "Registry Mode Configuration",
  "id": "registry-mode-configuration",
  "level": 3
}, {
  "value": "Setup",
  "id": "setup",
  "level": 4
}, {
  "value": "Tag Creation Process",
  "id": "tag-creation-process",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification",
  "level": 4
}, {
  "value": "Task-Touch Mode Configuration",
  "id": "task-touch-mode-configuration",
  "level": 3
}, {
  "value": "Setup",
  "id": "setup-1",
  "level": 4
}, {
  "value": "Tag Creation Process",
  "id": "tag-creation-process-1",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification-1",
  "level": 4
}, {
  "value": "Configuration Switching Procedures",
  "id": "configuration-switching-procedures",
  "level": 3
}, {
  "value": "Switch from Registry to Task-Touch",
  "id": "switch-from-registry-to-task-touch",
  "level": 4
}, {
  "value": "Switch from Task-Touch to Registry",
  "id": "switch-from-task-touch-to-registry",
  "level": 4
}, {
  "value": "✅ Post-Release Verification",
  "id": "-post-release-verification",
  "level": 2
}, {
  "value": "Step 1: Tag Creation Verification",
  "id": "step-1-tag-creation-verification",
  "level": 3
}, {
  "value": "Registry Mode Verification",
  "id": "registry-mode-verification",
  "level": 4
}, {
  "value": "Task-Touch Mode Verification",
  "id": "task-touch-mode-verification",
  "level": 4
}, {
  "value": "Step 2: GitHub Release Validation",
  "id": "step-2-github-release-validation",
  "level": 3
}, {
  "value": "Check GitHub Release",
  "id": "check-github-release",
  "level": 4
}, {
  "value": "Step 3: Package Publishing Confirmation",
  "id": "step-3-package-publishing-confirmation",
  "level": 3
}, {
  "value": "Check Package Publishing (if applicable)",
  "id": "check-package-publishing-if-applicable",
  "level": 4
}, {
  "value": "Step 4: Documentation Updates Verification",
  "id": "step-4-documentation-updates-verification",
  "level": 3
}, {
  "value": "Verify README Update",
  "id": "verify-readme-update",
  "level": 4
}, {
  "value": "Verify Changelog Update",
  "id": "verify-changelog-update",
  "level": 4
}, {
  "value": "🔧 Troubleshooting Guide",
  "id": "-troubleshooting-guide",
  "level": 2
}, {
  "value": "Common Issues and Solutions",
  "id": "common-issues-and-solutions",
  "level": 3
}, {
  "value": "Issue 1: Branch Safety Validation Failure",
  "id": "issue-1-branch-safety-validation-failure",
  "level": 4
}, {
  "value": "Issue 2: SemVer Strategy Not Detected",
  "id": "issue-2-semver-strategy-not-detected",
  "level": 4
}, {
  "value": "Issue 3: Tag Collision",
  "id": "issue-3-tag-collision",
  "level": 4
}, {
  "value": "Issue 4: Permission Problems",
  "id": "issue-4-permission-problems",
  "level": 4
}, {
  "value": "Issue 5: Network/CI Issues",
  "id": "issue-5-networkci-issues",
  "level": 4
}, {
  "value": "Advanced Troubleshooting",
  "id": "advanced-troubleshooting",
  "level": 3
}, {
  "value": "Debug Mode Release",
  "id": "debug-mode-release",
  "level": 4
}, {
  "value": "Manual Rollback",
  "id": "manual-rollback",
  "level": 4
}, {
  "value": "📋 Quick Reference Cards",
  "id": "-quick-reference-cards",
  "level": 2
}, {
  "value": "Registry Mode Quick Reference",
  "id": "registry-mode-quick-reference",
  "level": 3
}, {
  "value": "Task-Touch Mode Quick Reference",
  "id": "task-touch-mode-quick-reference",
  "level": 3
}, {
  "value": "Emergency Commands",
  "id": "emergency-commands",
  "level": 3
}, {
  "value": "📝 Appendix",
  "id": "-appendix",
  "level": 2
}, {
  "value": "Configuration Examples",
  "id": "configuration-examples",
  "level": 3
}, {
  "value": "Registry Mode Configuration",
  "id": "registry-mode-configuration-1",
  "level": 4
}, {
  "value": "Task-Touch Mode Configuration",
  "id": "task-touch-mode-configuration-1",
  "level": 4
}, {
  "value": "Integration Examples",
  "id": "integration-examples",
  "level": 3
}, {
  "value": "GitHub Actions Integration",
  "id": "github-actions-integration",
  "level": 4
}, {
  "value": "Version Schema Reference",
  "id": "version-schema-reference",
  "level": 3
}, {
  "value": "Internal Version Format",
  "id": "internal-version-format",
  "level": 4
}, {
  "value": "SemVer Format (Task-Touch Mode)",
  "id": "semver-format-task-touch-mode",
  "level": 4
}, {
  "value": "📞 Support and Escalation",
  "id": "-support-and-escalation",
  "level": 2
}, {
  "value": "Getting Help",
  "id": "getting-help",
  "level": 3
}, {
  "value": "Documentation Updates",
  "id": "documentation-updates",
  "level": 3
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
        id: "release-runbook",
        children: "Release Runbook"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Comprehensive guide for executing releases with exact commands and procedures", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " ai-dev-kit project releases supporting both registry and task-touch SemVer modes"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-critical-policy-no-manual-commitpush",
      children: "🚨 Critical Policy: \"No Manual Commit/Push\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "MANDATORY:"
      }), " This runbook respects the \"no manual commit/push\" policy. All git operations must use the Release Workflow (RW) automation rather than manual git commands."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER"
        }), " use manual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git commit"
        }), " commands"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "NEVER"
        }), " use manual ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git push"
        }), " commands"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALWAYS"
        }), " use Release Workflow (RW) automation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ALWAYS"
        }), " follow the documented command sequences"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pre-release-checklist",
      children: "📋 Pre-Release Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-branch-safety-validation",
      children: "Step 1: Branch Safety Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Ensure you're on the correct branch before starting release"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check current branch\ngit branch --show-current\n\n# Verify branch alignment (should be epic/{n} format)\ngit status\n\n# Run branch safety validator (MANDATORY)\npython3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "✅ Branch context validation PASSED\nCurrent branch: epic/{n}\nEpic alignment: CORRECT\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exit code must be 0 (PASS)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If non-zero, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STOP"
        }), " and fix branch issues before proceeding"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-configuration-verification",
      children: "Step 2: Configuration Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Verify rw-config.yaml and SemVer strategy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if rw-config.yaml exists\nls -la rw-config.yaml\n\n# Verify SemVer mapping strategy\ngrep \"semver_mapping_strategy:\" rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Outputs:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Registry Mode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "semver_mapping_strategy: registry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task-Touch Mode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "semver_mapping_strategy: task_touch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config file must exist and be readable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer strategy must be explicitly set"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If missing, create config with appropriate strategy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-dependencies-check",
      children: "Step 3: Dependencies Check"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Verify required tools and permissions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check Python environment\npython3 --version\n\n# Check validation scripts\nls -la \"packages/frameworks/workflow-mgt/scripts/validation/\"\n\n# Test SemVer converter\npython3 -c \"from packages.frameworks.workflow_mgt.scripts.version.semver_converter import convert_version_string; print('SemVer converter OK')\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Python 3.x.x\nSemVer converter OK\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.11+ must be available"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validation scripts must be present"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SemVer converter must be importable"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-environment-validation",
      children: "Step 4: Environment Validation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Verify release prerequisites"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check git remotes\ngit remote -v\n\n# Verify git status (should be clean)\ngit status --porcelain\n\n# Check for uncommitted changes\ngit diff --stat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "origin  https://github.com/RMS-Ltd/ai-dev-kit.git (fetch)\norigin  https://github.com/RMS-Ltd/ai-dev-kit.git (push)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git remote must be properly configured"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Working directory must be clean (no uncommitted changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network access must be available for git operations"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ucw--update-changelog-workflow-manual-stewardship",
      children: "� UCW – Update Changelog Workflow (Manual Stewardship)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " UCW keeps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), " limited to the most recent 20 releases via a manual, checklist-driven process documented in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/implementation-cycles/ICW-E7S1T6-specification.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-run-ucw",
      children: "When to Run UCW"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After RW Step 3 (Detailed Changelog) and before Step 8 (Validators)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whenever changelog edits risk exceeding retention or violating ordering."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ucw-checklist-manual",
      children: "UCW Checklist (Manual)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prepare:"
        }), " Copy current ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), ", archive files, and UCW checklist template (", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/logs/ucw/UCW-<date>.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review:"
        }), " Verify ordering, duplicates, date format, and identify entries beyond the retention threshold (default 20)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trim & Archive:"
        }), " Manually edit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG.md"
        }), ", keeping top 20 entries. Move older entries to archive files with backlinks, capturing diffs/screenshots."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validate:"
        }), " Run read-only validators (ordering checker, markdownlint) and capture outputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Record:"
        }), " Complete UCW checklist (operator, reviewer, versions moved), store under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/maintenance/logs/ucw/"
        }), ", and reference it in the RW log."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "ci-hook-ucw-verification",
      children: ["CI Hook (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ucw-verification"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read-only job that checks for:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Latest UCW checklist file matching the run date."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Evidence attachments (diff hash, validator output)."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Confirmation that ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            }), " lists ≤ 20 entries."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fails RW Step 8 if evidence is missing. Hook ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "never"
        }), " edits changelog files."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Spec/Test/Plan: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/implementation-cycles/ICW-E7S1T6-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Task: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T06-update-changelog-workflow.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FR: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/fr-br/FR-057-update-changelog-workflow.md"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-release-execution-commands",
      children: "�🚀 Release Execution Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-mode-commands",
      children: "Registry Mode Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-start-release-workflow",
      children: "Step 1: Start Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Trigger Release Workflow (RW)\nRW\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "🚀 Release Workflow (RW) triggered\n📋 Starting 17-step release process\n✅ Step 1: Branch Safety Check - MANDATORY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-monitor-progress",
      children: "Step 2: Monitor Progress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Release Workflow will automatically execute all 17 steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Branch Safety Check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Bump Version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Create Detailed Changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Update Main Changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Update README"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Update BR/FR Docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Auto-update Kanban Docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Stage Files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ IDE Problem Check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Run Validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Commit Changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Create Git Tag (v{internal_version})"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Push to Remote"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Post-Commit Verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Act on Results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Check for PIR Trigger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Housekeeping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Final Tag:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.1.48+1"
      }), " (internal version format)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-mode-commands",
      children: "Task-Touch Mode Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-1-start-release-workflow-1",
      children: "Step 1: Start Release Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Trigger Release Workflow (RW)\nRW\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "🚀 Release Workflow (RW) triggered\n📋 Starting 17-step release process\n🔍 SemVer strategy: task_touch detected\n✅ Step 1: Branch Safety Check - MANDATORY\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-2-monitor-progress-1",
      children: "Step 2: Monitor Progress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Release Workflow will automatically execute all 17 steps with task-touch SemVer tagging:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Branch Safety Check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Bump Version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Create Detailed Changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Update Main Changelog"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Update README"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Update BR/FR Docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Auto-update Kanban Docs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Stage Files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ IDE Problem Check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Run Validators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Commit Changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Create Git Tag (v{semver_version} + optional internal tag)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Push to Remote"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Post-Commit Verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Act on Results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Check for PIR Trigger"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Housekeeping"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Final Tags:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primary:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.39+1"
        }), " (SemVer format)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional Internal:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.1.48+1"
        }), " (if create_internal_tag enabled)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-tagging-strategy-guide",
      children: "🏷️ Tagging Strategy Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-mode-configuration",
      children: "Registry Mode Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "setup",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml\nsemver_mapping_strategy: registry\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tag-creation-process",
      children: "Tag Creation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Registry mode creates internal version tags\n# Format: v{RC.EPIC.STORY.TASK+BUILD}\n# Example: v0.5.1.48+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify tag creation\ngit tag -l | grep \"v0.5.1.48+1\"\n\n# Show tag details\ngit show v0.5.1.48+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tag v0.5.1.48+1\nRelease v0.5.1.48+1: Release summary\n\nEpic: 5 | Story: 1 | Task: 48\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-mode-configuration",
      children: "Task-Touch Mode Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "setup-1",
      children: "Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml\nsemver_mapping_strategy: task_touch\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "tag-creation-process-1",
      children: "Tag Creation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Task-touch mode creates SemVer tags\n# Format: v{MAJOR.MINOR.PATCH+BUILD}\n# Example: v0.5.39+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verification-1",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify SemVer tag creation\ngit tag -l | grep \"v0.5.39+1\"\n\n# Show tag details\ngit show v0.5.39+1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "tag v0.5.39+1\nRelease v0.5.39+1 (Internal: v0.5.1.48+1)\n\nEpic: 5 | Story: 1 | Task: 48\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-switching-procedures",
      children: "Configuration Switching Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "switch-from-registry-to-task-touch",
      children: "Switch from Registry to Task-Touch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Backup current config\ncp rw-config.yaml rw-config.yaml.backup\n\n# 2. Update strategy\nsed -i.bak 's/semver_mapping_strategy: registry/semver_mapping_strategy: task_touch/' rw-config.yaml\n\n# 3. Verify change\ngrep \"semver_mapping_strategy:\" rw-config.yaml\n\n# 4. Test SemVer conversion\npython3 -c \"\nfrom packages.frameworks.workflow_mgt.scripts.version.semver_converter import convert_version_string\nprint('Test conversion:', convert_version_string('0.5.1.48+1', 'task_touch'))\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "switch-from-task-touch-to-registry",
      children: "Switch from Task-Touch to Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Backup current config\ncp rw-config.yaml rw-config.yaml.backup\n\n# 2. Update strategy\nsed -i.bak 's/semver_mapping_strategy: task_touch/semver_mapping_strategy: registry/' rw-config.yaml\n\n# 3. Verify change\ngrep \"semver_mapping_strategy:\" rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-post-release-verification",
      children: "✅ Post-Release Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-tag-creation-verification",
      children: "Step 1: Tag Creation Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "registry-mode-verification",
      children: "Registry Mode Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify tag exists\ngit tag -l | grep \"v0.5.1.48+1\"\n\n# Verify tag points to correct commit\ngit log --oneline -1\ngit show v0.5.1.48+1 --stat\n\n# Verify tag message\ngit tag -l --format='%(refname:short) - %(subject)' | grep \"v0.5.1.48+1\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.1.48+1 - Release v0.5.1.48+1: Release summary\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "task-touch-mode-verification",
      children: "Task-Touch Mode Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Verify SemVer tag exists\ngit tag -l | grep \"v0.5.39+1\"\n\n# Verify tag points to correct commit\ngit log --oneline -1\ngit show v0.5.39+1 --stat\n\n# Verify tag message includes internal version\ngit tag -l --format='%(refname:short) - %(subject)' | grep \"v0.5.39+1\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.39+1 - Release v0.5.39+1 (Internal: v0.5.1.48+1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-github-release-validation",
      children: "Step 2: GitHub Release Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "check-github-release",
      children: "Check GitHub Release"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# List GitHub releases (requires gh CLI)\ngh release list --limit 5\n\n# Check specific release details\ngh release view v0.5.39+1  # Task-touch mode\n# or\ngh release view v0.5.1.48+1  # Registry mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.5.39+1\nRelease v0.5.39+1 (Internal: v0.5.1.48+1)\nPublished: 2026-03-10T12:00:00Z\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-package-publishing-confirmation",
      children: "Step 3: Package Publishing Confirmation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "check-package-publishing-if-applicable",
      children: "Check Package Publishing (if applicable)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if packages were built and uploaded\nls -la packages/frameworks/dist/packages/\n\n# Verify GitHub release assets\ngh release view v0.5.39+1 --json assets\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-documentation-updates-verification",
      children: "Step 4: Documentation Updates Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verify-readme-update",
      children: "Verify README Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check version in README\ngrep \"Version:\" README.md\ngrep \"v0.5.39+1\" README.md  # Task-touch mode\n# or\ngrep \"v0.5.1.48+1\" README.md  # Registry mode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verify-changelog-update",
      children: "Verify Changelog Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check main changelog\nhead -10 CHANGELOG.md\n\n# Check detailed changelog\nls -la docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.1.48+1.md\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-troubleshooting-guide",
      children: "🔧 Troubleshooting Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-issues-and-solutions",
      children: "Common Issues and Solutions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-1-branch-safety-validation-failure",
      children: "Issue 1: Branch Safety Validation Failure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Branch context validation FAILED"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wrong branch (not epic/{n})"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Branch doesn't match version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git state is dirty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check current branch\ngit branch --show-current\n\n# Switch to correct epic branch\ngit checkout epic/{n}\n\n# Clean up dirty state\ngit add -A\ngit commit -m \"WIP: Clean up before release\"\n\n# Re-run validation\npython3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-2-semver-strategy-not-detected",
      children: "Issue 2: SemVer Strategy Not Detected"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SemVer strategy not found in configuration"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing rw-config.yaml"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Invalid semver_mapping_strategy value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configuration file syntax error"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check if config exists\nls -la rw-config.yaml\n\n# Create config if missing\ncat > rw-config.yaml << EOF\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nsemver_mapping_strategy: registry  # or task_touch\nEOF\n\n# Validate config syntax\npython3 -c \"import yaml; yaml.safe_load(open('rw-config.yaml'))\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-3-tag-collision",
      children: "Issue 3: Tag Collision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tag already exists"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag already created for this version"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Previous release attempt failed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check existing tags\ngit tag -l | grep \"v0.5.1.48+1\"\n\n# Delete conflicting tag (if necessary)\ngit tag -d v0.5.1.48+1\ngit push origin :refs/tags/v0.5.1.48+1\n\n# Increment version and retry\n# (This should be handled automatically by RW)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-4-permission-problems",
      children: "Issue 4: Permission Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Permission denied"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Authentication failed"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing GitHub token"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insufficient repository permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network connectivity issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check GitHub authentication\ngh auth status\n\n# Set up GitHub token (if needed)\nexport GITHUB_TOKEN=your_token_here\n\n# Test git push permissions\ngit push origin --dry-run\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "issue-5-networkci-issues",
      children: "Issue 5: Network/CI Issues"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Network access denied"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Connection failed"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Firewall blocking git operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub API rate limiting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network connectivity problems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solutions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test network connectivity\nping github.com\n\n# Check git remote configuration\ngit remote -v\n\n# Try manual push (for debugging)\ngit push origin --dry-run\n\n# Use SSH instead of HTTPS (if needed)\ngit remote set-url origin git@github.com:RMS-Ltd/ai-dev-kit.git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-troubleshooting",
      children: "Advanced Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "debug-mode-release",
      children: "Debug Mode Release"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Enable verbose logging\nexport RW_DEBUG=true\n\n# Run release with debug output\nRW\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "manual-rollback",
      children: "Manual Rollback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Reset to previous commit (emergency only)\ngit reset --hard HEAD~1\n\n# Delete problematic tag\ngit tag -d v0.5.1.48+1\ngit push origin :refs/tags/v0.5.1.48+1\n\n# Restore from backup\ngit reflog\ngit reset --hard HEAD@{1}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-reference-cards",
      children: "📋 Quick Reference Cards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-mode-quick-reference",
      children: "Registry Mode Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Pre-Release Checks\ngit branch --show-current\npython3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict\ngrep \"semver_mapping_strategy:\" rw-config.yaml\n\n# 2. Execute Release\nRW\n\n# 3. Verify\ngit tag -l | grep \"v0.5.1.48+1\"\ngit show v0.5.1.48+1 --stat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-mode-quick-reference",
      children: "Task-Touch Mode Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Pre-Release Checks  \ngit branch --show-current\npython3 \"packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py\" --strict\ngrep \"semver_mapping_strategy:\" rw-config.yaml\n\n# 2. Execute Release\nRW\n\n# 3. Verify\ngit tag -l | grep \"v0.5.39+1\"\ngit show v0.5.39+1 --stat\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "emergency-commands",
      children: "Emergency Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check release status\ngit status\ngit log --oneline -5\n\n# Verify tags\ngit tag -l | tail -5\n\n# Check remotes\ngit remote -v\n\n# Validate configuration\npython3 -c \"import yaml; print('Config OK' if yaml.safe_load(open('rw-config.yaml')) else 'Config ERROR')\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-appendix",
      children: "📝 Appendix"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration-examples",
      children: "Configuration Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "registry-mode-configuration-1",
      children: "Registry Mode Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: registry\nuse_kanban: true\nkanban_root: docs/project-management/kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "task-touch-mode-configuration-1",
      children: "Task-Touch Mode Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# rw-config.yaml\nversion_file: src/fynd_deals/version.py\nmain_changelog: CHANGELOG.md\nchangelog_dir: docs/changelog-and-release-notes/changelog-archive\nscripts_path: packages/frameworks/workflow-mgt/scripts\nreadme_file: README.md\nsemver_mapping_strategy: task_touch\nuse_kanban: true\nkanban_root: docs/project-management/kanban\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-examples",
      children: "Integration Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "github-actions-integration",
      children: "GitHub Actions Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/release.yml\nname: Release\non:\n  workflow_dispatch:\n    inputs:\n      mode:\n        description: 'Release mode'\n        required: true\n        default: 'registry'\n        type: choice\n        options:\n        - registry\n        - task_touch\n\njobs:\n  release:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Configure SemVer Strategy\n        run: |\n          sed -i \"s/semver_mapping_strategy: .*/semver_mapping_strategy: ${{ github.event.inputs.mode }}/\" rw-config.yaml\n      - name: Execute Release\n        run: |\n          echo \"RW\" | python3 -c \"\nimport sys\nsys.path.insert(0, 'packages/frameworks/workflow-mgt/scripts')\nfrom workflow_orchestrator import WorkflowOrchestrator\nwo = WorkflowOrchestrator()\nwo.execute_workflow('release-workflow.yaml')\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-schema-reference",
      children: "Version Schema Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "internal-version-format",
      children: "Internal Version Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD\nExample: 0.5.1.48+1\n- RC: Release Candidate (0 = development)\n- EPIC: Epic number (5)\n- STORY: Story number (1)  \n- TASK: Task number (48)\n- BUILD: Build number (1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "semver-format-task-touch-mode",
      children: "SemVer Format (Task-Touch Mode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAJOR.MINOR.PATCH+BUILD\nExample: 0.5.39+1\n- MAJOR: RC (0 = development)\n- MINOR: Epic number (5)\n- PATCH: Task-touch counter (39)\n- BUILD: Build number (1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-support-and-escalation",
      children: "📞 Support and Escalation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getting-help",
      children: "Getting Help"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check this runbook first"
        }), " - most issues are covered here"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Review release logs"
        }), " - check RW output for specific error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consult team"
        }), " - escalate to release team if issues persist"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "documentation-updates",
      children: "Documentation Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runbook updates"
        }), " should be made when procedures change"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New troubleshooting steps"
        }), " should be added when issues are discovered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration examples"
        }), " should be updated when new options are added"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Runbook Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-03-10", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review:"
      }), " 2026-04-10"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remember:"
      }), " Always respect the \"no manual commit/push\" policy - use Release Workflow automation for all git operations!"]
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