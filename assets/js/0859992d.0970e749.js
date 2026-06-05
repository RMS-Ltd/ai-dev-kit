"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["94202"], {
37353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_fr_046_implementation_guide_md_085_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-fr-046-implementation-guide-md-085.json
var site_docs_architecture_standards_and_adrs_fr_046_implementation_guide_md_085_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/FR-046-implementation-guide","title":"FR-046 Implementation Guide: RW Uses SemVer Tag When Task-Touch Enabled","description":"This guide documents the implementation of FR-046, which updates Release Workflow (RW) tagging behavior to support ADR-002 task-touch derived mapping.","source":"@site/../docs/architecture/standards-and-adrs/FR-046-implementation-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/FR-046-implementation-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/FR-046-implementation-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/FR-046-implementation-guide.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"ADR: OpenClaw process sentinel skill (agent orphan detection)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill"},"next":{"title":"Cursor Sandbox Network Access: Issue, Environment, and Solution","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/FR-046-implementation-guide.md


const frontMatter = {};
const contentTitle = 'FR-046 Implementation Guide: RW Uses SemVer Tag When Task-Touch Enabled';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 2
}, {
  "value": "Dual-Version Mode (FR-046 policy)",
  "id": "dual-version-mode-fr-046-policy",
  "level": 3
}, {
  "value": "Task-Touch Without Dual Mode",
  "id": "task-touch-without-dual-mode",
  "level": 3
}, {
  "value": "Default Behavior (Non-Dual / Registry Mode)",
  "id": "default-behavior-non-dual--registry-mode",
  "level": 3
}, {
  "value": "Tagging Behavior",
  "id": "tagging-behavior",
  "level": 2
}, {
  "value": "Registry Mode (Default)",
  "id": "registry-mode-default",
  "level": 3
}, {
  "value": "Task-Touch Mode",
  "id": "task-touch-mode",
  "level": 3
}, {
  "value": "RW Step 11 Behavior",
  "id": "rw-step-11-behavior",
  "level": 2
}, {
  "value": "Before (Always Internal Tags)",
  "id": "before-always-internal-tags",
  "level": 3
}, {
  "value": "After (Strategy-Aware Tagging)",
  "id": "after-strategy-aware-tagging",
  "level": 3
}, {
  "value": "GitHub Release Integration",
  "id": "github-release-integration",
  "level": 2
}, {
  "value": "Auto-Detection Mode",
  "id": "auto-detection-mode",
  "level": 3
}, {
  "value": "Explicit Tag Mode",
  "id": "explicit-tag-mode",
  "level": 3
}, {
  "value": "API Functions",
  "id": "api-functions",
  "level": 2
}, {
  "value": "Core Tagging Functions",
  "id": "core-tagging-functions",
  "level": 3
}, {
  "value": "GitHub Release Functions",
  "id": "github-release-functions",
  "level": 3
}, {
  "value": "Migration Guide",
  "id": "migration-guide",
  "level": 2
}, {
  "value": "For New Projects",
  "id": "for-new-projects",
  "level": 3
}, {
  "value": "For Existing Projects",
  "id": "for-existing-projects",
  "level": 3
}, {
  "value": "Collision Prevention",
  "id": "collision-prevention",
  "level": 2
}, {
  "value": "Problem Solved",
  "id": "problem-solved",
  "level": 3
}, {
  "value": "Benefits",
  "id": "benefits",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Issue: Wrong Tag Created",
  "id": "issue-wrong-tag-created",
  "level": 3
}, {
  "value": "Issue: Tag Already Exists",
  "id": "issue-tag-already-exists",
  "level": 3
}, {
  "value": "Issue: GitHub Release Uses Wrong Tag",
  "id": "issue-github-release-uses-wrong-tag",
  "level": 3
}, {
  "value": "Testing",
  "id": "testing",
  "level": 2
}, {
  "value": "Unit Tests",
  "id": "unit-tests",
  "level": 3
}, {
  "value": "Integration Tests",
  "id": "integration-tests",
  "level": 3
}, {
  "value": "Backward Compatibility",
  "id": "backward-compatibility",
  "level": 2
}, {
  "value": "Performance Impact",
  "id": "performance-impact",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "Future Enhancements",
  "id": "future-enhancements",
  "level": 2
}, {
  "value": "Potential Improvements",
  "id": "potential-improvements",
  "level": 3
}, {
  "value": "Related Work",
  "id": "related-work",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "fr-046-implementation-guide-rw-uses-semver-tag-when-task-touch-enabled",
        children: "FR-046 Implementation Guide: RW Uses SemVer Tag When Task-Touch Enabled"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide documents the implementation of FR-046, which updates Release Workflow (RW) tagging behavior to support ADR-002 task-touch derived mapping."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FR-046 enables RW to create SemVer tags (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.9.5"
      }), ") as the primary external tag when ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual-version mode"
      }), " is active. In dual mode, ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mapping_strategy: task_touch"
        }), " is mandatory"]
      }), " — validators hard-fail if dual is paired with registry or any non-task-touch strategy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Non-dual repositories (SemVer-only, Kanban-only, legacy) may continue using registry or other configured strategies unchanged."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dual-version-mode-fr-046-policy",
      children: "Dual-Version Mode (FR-046 policy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projects using internal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " plus external SemVer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "must"
      }), " configure both:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "versioning_mode: dual\nsemver_mapping_strategy: task_touch\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "validate_branch_context.py"
      }), " enforces this invariant before RW mutates release files (FR-046", ":R01", ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-without-dual-mode",
      children: "Task-Touch Without Dual Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Single-track or SemVer-only projects may opt into task-touch when not in dual mode:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "semver_mapping_strategy: task_touch\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "default-behavior-non-dual--registry-mode",
      children: "Default Behavior (Non-Dual / Registry Mode)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "versioning_mode"
      }), " is not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dual"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver_mapping_strategy"
      }), " is omitted, registry mode applies:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Default for non-dual projects — no change required\nsemver_mapping_strategy: registry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tagging-behavior",
      children: "Tagging Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registry-mode-default",
      children: "Registry Mode (Default)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Internal version: 0.6.7.18+2\nPrimary tag: v0.6.7.18+2\nInternal tag: None\nTag message: \"Release 0.6.7.18+2\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "task-touch-mode",
      children: "Task-Touch Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Internal version: 0.6.7.18+2\nPrimary tag: v0.9.5\nInternal tag: v0.6.7.18+2 (optional, for traceability)\nTag message: \"Release 0.9.5 (Internal: 0.6.7.18+2)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rw-step-11-behavior",
      children: "RW Step 11 Behavior"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "before-always-internal-tags",
      children: "Before (Always Internal Tags)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Step 11 always created internal version tags\ngit tag -a v0.6.7.18+2 -m \"Release 0.6.7.18+2\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "after-strategy-aware-tagging",
      children: "After (Strategy-Aware Tagging)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Registry mode (unchanged)\ngit tag -a v0.6.7.18+2 -m \"Release 0.6.7.18+2\"\n\n# Task-touch mode\ngit tag -a v0.9.5 -m \"Release 0.9.5 (Internal: 0.6.7.18+2)\"\ngit tag -a v0.6.7.18+2 -m \"Internal version for v0.9.5\"  # Optional\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "github-release-integration",
      children: "GitHub Release Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "auto-detection-mode",
      children: "Auto-Detection Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The GitHub release script now supports automatic tag detection:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Auto-detect based on strategy\npython create_github_release.py \\\n  --internal-version \"0.6.7.18+2\" \\\n  --summary \"Implement FR-046\" \\\n  --epic \"E2\" --story \"S13\" --task \"T07\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "explicit-tag-mode",
      children: "Explicit Tag Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Explicit tag (backward compatible)\npython create_github_release.py \\\n  --semver-tag \"v0.9.5\" \\\n  --internal-version \"0.6.7.18+2\" \\\n  --summary \"Implement FR-046\" \\\n  --epic \"E2\" --story \"S13\" --task \"T07\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api-functions",
      children: "API Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-tagging-functions",
      children: "Core Tagging Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from semver_converter import get_rw_tag_info, create_rw_tags\n\n# Get tagging information\ntag_info = get_rw_tag_info(\"0.6.7.18+2\")\nprint(tag_info['primary_tag'])  # v0.6.7.18+2 or v0.9.5\n\n# Create tags (safe - handles existing tags)\nresult = create_rw_tags(\"0.6.7.18+2\", create_internal_tag=True)\nprint(result['created_tags'])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "github-release-functions",
      children: "GitHub Release Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from create_github_release import create_or_update_release_auto\n\n# Auto-detect tag and create/update release\nrelease = create_or_update_release_auto(\n    github_token=\"token\",\n    repo=\"owner/repo\",\n    internal_version=\"0.6.7.18+2\",\n    summary=\"Release summary\",\n    epic=\"E2\", story=\"S13\", task=\"T07\",\n    verbose=True\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-guide",
      children: "Migration Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-new-projects",
      children: "For New Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure task-touch mode in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW will automatically create SemVer tags"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub releases will use SemVer tags"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "for-existing-projects",
      children: "For Existing Projects"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Analyze current tags"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git tag -l | head -10\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Test task-touch mode"
          }), " (dry run):"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Temporarily change config\nsed -i.bak 's/registry/task_touch/' rw-config.yaml\n\n# Test tagging\npython -c \"from semver_converter import get_rw_tag_info; print(get_rw_tag_info('0.6.7.18+2'))\"\n\n# Restore config\nmv rw-config.yaml.bak rw-config.yaml\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Switch to task-touch mode"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# Update configuration\nsed -i 's/registry/task_touch/' rw-config.yaml\ngit add rw-config.yaml\ngit commit -m \"Enable task-touch SemVer mapping\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify next RW run"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run RW and check created tags"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Verify GitHub release uses SemVer tag"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "collision-prevention",
      children: "Collision Prevention"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-solved",
      children: "Problem Solved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before (Registry Mode):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "0.6.7.101+5 → v0.6.52+5\n0.6.7.102+5 → v0.6.52+5  ← Collision!\n0.6.7.103+5 → v0.6.52+5  ← Collision!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After (Task-Touch Mode):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "0.6.7.101+5 → v0.9.1\n0.6.7.102+5 → v0.9.2  ← No collision\n0.6.7.103+5 → v0.9.3  ← No collision\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benefits",
      children: "Benefits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero Collisions"
        }), ": Each internal version maps to unique SemVer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Alignment"
        }), ": Git tags match package versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automation Friendly"
        }), ": CI/CD can rely on consistent tag patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability"
        }), ": Internal versions preserved in tags and releases"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-wrong-tag-created",
      children: "Issue: Wrong Tag Created"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom"
      }), ": RW creates internal tag instead of SemVer tag"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": Check configuration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "grep semver_mapping_strategy rw-config.yaml\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-tag-already-exists",
      children: "Issue: Tag Already Exists"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git tag"
      }), " fails with \"already exists\" error"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": This is expected - the function handles existing tags gracefully"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "issue-github-release-uses-wrong-tag",
      children: "Issue: GitHub Release Uses Wrong Tag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Symptom"
      }), ": GitHub release uses internal version instead of SemVer"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution"
      }), ": Use auto-detection mode:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python create_github_release.py --internal-version \"0.6.7.18+2\" ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "testing",
      children: "Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unit-tests",
      children: "Unit Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run FR-046 specific tests\npython packages/frameworks/workflow\\ mgt/scripts/version/test_fr046_rw_tagging.py\n\n# Run comprehensive tests\npython packages/frameworks/workflow\\ mgt/scripts/version/test_fr046_comprehensive.py\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-tests",
      children: "Integration Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Test configuration detection\npython -c \"from semver_converter import get_semver_mapping_strategy; print(get_semver_mapping_strategy())\"\n\n# Test tag creation (dry run)\npython -c \"from semver_converter import get_rw_tag_info; print(get_rw_tag_info('0.6.7.18+2'))\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "backward-compatibility",
      children: "Backward Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-dual projects unchanged"
        }), ": Registry mode remains default when not in dual mode"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dual adopters"
        }), ": Must use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "task_touch"
        }), "; dual + registry is rejected by validators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gradual adoption"
        }), ": Opt into dual + task_touch when ready for internal+external versioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rollback"
        }), ": Leave dual mode (or switch strategy) only when not using dual-version policy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "performance-impact",
      children: "Performance Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag creation"
        }), ": < 1 second additional overhead"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration loading"
        }), ": Negligible impact"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub releases"
        }), ": No performance change"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage"
        }), ": Optional internal tags add minimal storage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No new permissions required"
        }), ": Uses existing git/GitHub access"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration validation"
        }), ": Dual mode with non-task-touch strategy fails fast (no silent fallback)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag safety"
        }), ": Existing tag checks prevent accidental overwrites"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "future-enhancements",
      children: "Future Enhancements"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "potential-improvements",
      children: "Potential Improvements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatic migration"
        }), ": Utility to convert existing tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tag cleanup"
        }), ": Tool to remove redundant internal tags"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enhanced validation"
        }), ": Pre-RW checks for tag alignment"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dashboard integration"
        }), ": Visual tag strategy management"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "related-work",
      children: "Related Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FR-045: ADR-002 Task-Touch Derived Mapping (dependency)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ADR-002: Task-Touch SemVer specification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release Workflow automation enhancements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementation Status"
      }), ": ✅ Complete\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test Coverage"
      }), ": ✅ Comprehensive\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Documentation"
      }), ": ✅ Complete\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Backward Compatibility"
      }), ": ✅ Maintained"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ready for production deployment!"
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