"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["54357"], {
35304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_framework_auto_update_mechanisms_md_9a1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-framework-auto-update-mechanisms-md-9a1.json
var site_docs_architecture_standards_and_adrs_framework_auto_update_mechanisms_md_9a1_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/framework-auto-update-mechanisms","title":"Framework Auto-Update Mechanisms","description":"Status: Active","source":"@site/../docs/architecture/standards-and-adrs/framework-auto-update-mechanisms.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/framework-auto-update-mechanisms","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-auto-update-mechanisms","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/framework-auto-update-mechanisms.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-03T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Epic/Story path migration guide (lowercase segments)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/epic-story-path-migration-guide"},"next":{"title":"Framework Backward Compatibility Policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/framework-backward-compatibility-policy"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/framework-auto-update-mechanisms.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-03T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Framework Auto-Update Mechanisms';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. Auto-Update Overview",
  "id": "1-auto-update-overview",
  "level": 2
}, {
  "value": "1.1 Update Policy Types",
  "id": "11-update-policy-types",
  "level": 3
}, {
  "value": "1.2 Update Policy Configuration",
  "id": "12-update-policy-configuration",
  "level": 3
}, {
  "value": "2. Git Submodule Auto-Update",
  "id": "2-git-submodule-auto-update",
  "level": 2
}, {
  "value": "2.1 Automated Update Script",
  "id": "21-automated-update-script",
  "level": 3
}, {
  "value": "2.2 Scheduled Update Script",
  "id": "22-scheduled-update-script",
  "level": 3
}, {
  "value": "2.3 Update Notification",
  "id": "23-update-notification",
  "level": 3
}, {
  "value": "3. Git Subtree Auto-Update",
  "id": "3-git-subtree-auto-update",
  "level": 2
}, {
  "value": "3.1 Automated Update Script",
  "id": "31-automated-update-script",
  "level": 3
}, {
  "value": "3.2 Scheduled Update",
  "id": "32-scheduled-update",
  "level": 3
}, {
  "value": "4. CLI Tool Auto-Update",
  "id": "4-cli-tool-auto-update",
  "level": 2
}, {
  "value": "4.1 CLI Tool Update Commands",
  "id": "41-cli-tool-update-commands",
  "level": 3
}, {
  "value": "4.2 CLI Tool Update Script",
  "id": "42-cli-tool-update-script",
  "level": 3
}, {
  "value": "4.3 CLI Tool Scheduled Updates",
  "id": "43-cli-tool-scheduled-updates",
  "level": 3
}, {
  "value": "5. Package Manager Auto-Update",
  "id": "5-package-manager-auto-update",
  "level": 2
}, {
  "value": "5.1 npm Auto-Update",
  "id": "51-npm-auto-update",
  "level": 3
}, {
  "value": "5.2 pip Auto-Update",
  "id": "52-pip-auto-update",
  "level": 3
}, {
  "value": "6. Version Pinning and Update Policies",
  "id": "6-version-pinning-and-update-policies",
  "level": 2
}, {
  "value": "6.1 Version Pinning",
  "id": "61-version-pinning",
  "level": 3
}, {
  "value": "6.2 Update Policies",
  "id": "62-update-policies",
  "level": 3
}, {
  "value": "6.3 Update Policy Examples",
  "id": "63-update-policy-examples",
  "level": 3
}, {
  "value": "7. Automated Update Testing",
  "id": "7-automated-update-testing",
  "level": 2
}, {
  "value": "7.1 Pre-Update Testing",
  "id": "71-pre-update-testing",
  "level": 3
}, {
  "value": "7.2 Post-Update Testing",
  "id": "72-post-update-testing",
  "level": 3
}, {
  "value": "7.3 Automated Testing Workflow",
  "id": "73-automated-testing-workflow",
  "level": 3
}, {
  "value": "8. Update Notification Systems",
  "id": "8-update-notification-systems",
  "level": 2
}, {
  "value": "8.1 Notification Methods",
  "id": "81-notification-methods",
  "level": 3
}, {
  "value": "8.2 Notification Configuration",
  "id": "82-notification-configuration",
  "level": 3
}, {
  "value": "9. Update Rollback Procedures",
  "id": "9-update-rollback-procedures",
  "level": 2
}, {
  "value": "9.1 Automatic Rollback",
  "id": "91-automatic-rollback",
  "level": 3
}, {
  "value": "9.2 Rollback Triggers",
  "id": "92-rollback-triggers",
  "level": 3
}, {
  "value": "10. Best Practices",
  "id": "10-best-practices",
  "level": 2
}, {
  "value": "10.1 Update Policy Best Practices",
  "id": "101-update-policy-best-practices",
  "level": 3
}, {
  "value": "10.2 Update Scheduling Best Practices",
  "id": "102-update-scheduling-best-practices",
  "level": 3
}, {
  "value": "10.3 Update Testing Best Practices",
  "id": "103-update-testing-best-practices",
  "level": 3
}, {
  "value": "11. Related Documentation",
  "id": "11-related-documentation",
  "level": 2
}, {
  "value": "11.1 Core Documents",
  "id": "111-core-documents",
  "level": 3
}, {
  "value": "11.2 Supporting Documents",
  "id": "112-supporting-documents",
  "level": 3
}, {
  "value": "12. Summary",
  "id": "12-summary",
  "level": 2
}, {
  "value": "12.1 Key Principles",
  "id": "121-key-principles",
  "level": 3
}, {
  "value": "12.2 Auto-Update Workflow",
  "id": "122-auto-update-workflow",
  "level": 3
}, {
  "value": "12.3 Update Methods",
  "id": "123-update-methods",
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
        id: "framework-auto-update-mechanisms",
        children: "Framework Auto-Update Mechanisms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Active", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 6 - Framework Management and Maintenance", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " Story 2 - Framework Update and Migration", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Task:"
      }), " E6:S02", ":T05", " - Create auto-update mechanisms", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Framework Update Procedures, Framework Migration Guide, Framework Dependency Architecture"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document defines the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "auto-update mechanisms"
      }), " for AI Dev Kit frameworks. The mechanisms support automatic and semi-automatic updates for Git submodules, Git subtrees, CLI tool, and package managers, with configurable update policies, version pinning, and automated testing workflows."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policies:"
        }), " Configurable automatic, semi-automatic, and manual update policies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Backends:"
        }), " Support for Git submodules, subtrees, CLI tool, and package managers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Pinning:"
        }), " Flexible version pinning and update control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Testing:"
        }), " Automated update testing workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety First:"
        }), " Backup, validation, and rollback procedures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-auto-update-overview",
      children: "1. Auto-Update Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-update-policy-types",
      children: "1.1 Update Policy Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggered automatically based on update policy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATCH versions (bug fixes, backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semi-automatic for MINOR versions (with notification)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No user intervention required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Semi-Automatic Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update detection and notification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User approval required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MINOR versions (new features, backward compatible)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-initiated update execution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User-initiated updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MAJOR versions (breaking changes, require migration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full user control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-update-policy-configuration",
      children: "1.2 Update Policy Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nupdate_policy:\n  patch: auto      # Automatic PATCH updates\n  minor: notify    # Notify for MINOR updates\n  major: manual    # Manual MAJOR updates\n\nauto_check:\n  enabled: true\n  interval: daily  # daily, weekly, monthly\n  time: \"02:00\"    # UTC time for scheduled checks\n\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    pin: false     # Allow updates\n    auto_update: true  # Enable auto-updates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "auto"
        }), ": Automatic updates without user intervention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "notify"
        }), ": Notify user of available updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "manual"
        }), ": Require manual user approval"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-git-submodule-auto-update",
      children: "2. Git Submodule Auto-Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-automated-update-script",
      children: "2.1 Automated Update Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/auto-update-frameworks.sh\nset -e\n\nFRAMEWORK=$1\nUPDATE_TYPE=${2:-patch}  # patch, minor, major\n\nif [ -z \"$FRAMEWORK\" ]; then\n    echo \"Usage: $0 <framework> [update_type]\"\n    echo \"Example: $0 workflow-mgmt patch\"\n    exit 1\nfi\n\n# Navigate to submodule\ncd .ai-dev-kit\n\n# Fetch latest changes\ngit fetch origin\n\n# Get current version\nCURRENT_VERSION=$(git describe --tags --abbrev=0 2>/dev/null || echo \"unknown\")\n\n# Get available versions\nAVAILABLE_VERSIONS=$(git tag | grep \"${FRAMEWORK}-v\" | sort -V)\n\n# Determine target version based on update type\nif [ \"$UPDATE_TYPE\" = \"patch\" ]; then\n    # Get latest patch version for current minor\n    TARGET_VERSION=$(echo \"$AVAILABLE_VERSIONS\" | grep \"^${FRAMEWORK}-v${CURRENT_VERSION%.*}\" | tail -1)\nelif [ \"$UPDATE_TYPE\" = \"minor\" ]; then\n    # Get latest minor version for current major\n    TARGET_VERSION=$(echo \"$AVAILABLE_VERSIONS\" | grep \"^${FRAMEWORK}-v${CURRENT_VERSION%%.*}\" | tail -1)\nelse\n    # Get latest version\n    TARGET_VERSION=$(echo \"$AVAILABLE_VERSIONS\" | tail -1)\nfi\n\nif [ -z \"$TARGET_VERSION\" ] || [ \"$TARGET_VERSION\" = \"$CURRENT_VERSION\" ]; then\n    echo \"No updates available for $FRAMEWORK\"\n    exit 0\nfi\n\n# Checkout target version\ngit checkout \"$TARGET_VERSION\"\n\n# Return to project root\ncd ..\n\n# Copy updated framework\nFRAMEWORK_DIR=$(echo \"$FRAMEWORK\" | sed 's/-mgmt/-mgt/' | sed 's/-/_/g')\ncp -r \".ai-dev-kit/packages/frameworks/${FRAMEWORK_DIR}/\" \"./frameworks/${FRAMEWORK}/\"\n\n# Commit update\ngit add frameworks/\ngit commit -m \"Auto-update ${FRAMEWORK} framework to ${TARGET_VERSION}\"\n\necho \"✓ Updated ${FRAMEWORK} to ${TARGET_VERSION}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-scheduled-update-script",
      children: "2.2 Scheduled Update Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cron Job Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add to crontab (crontab -e)\n# Daily update check at 2 AM UTC\n0 2 * * * /path/to/project/scripts/auto-update-frameworks.sh workflow-mgmt patch >> /var/log/framework-updates.log 2>&1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduled Update Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/scheduled-update-check.sh\nset -e\n\nCONFIG_FILE=\".ai-dev-kit.yaml\"\n\n# Load update policy from config\nif [ -f \"$CONFIG_FILE\" ]; then\n    PATCH_POLICY=$(yq eval '.update_policy.patch' \"$CONFIG_FILE\" 2>/dev/null || echo \"notify\")\n    MINOR_POLICY=$(yq eval '.update_policy.minor' \"$CONFIG_FILE\" 2>/dev/null || echo \"notify\")\n    MAJOR_POLICY=$(yq eval '.update_policy.major' \"$CONFIG_FILE\" 2>/dev/null || echo \"manual\")\nelse\n    PATCH_POLICY=\"notify\"\n    MINOR_POLICY=\"notify\"\n    MAJOR_POLICY=\"manual\"\nfi\n\n# Check for updates\ncd .ai-dev-kit\ngit fetch origin\n\n# Check each framework\nfor framework in workflow-mgmt kanban numbering-versioning; do\n    # Check for updates\n    CURRENT=$(git describe --tags --abbrev=0 2>/dev/null || echo \"unknown\")\n    LATEST=$(git tag | grep \"${framework}-v\" | sort -V | tail -1)\n    \n    if [ \"$CURRENT\" != \"$LATEST\" ]; then\n        # Determine update type\n        UPDATE_TYPE=$(determine_update_type \"$CURRENT\" \"$LATEST\")\n        \n        # Apply update policy\n        case \"$UPDATE_TYPE\" in\n            patch)\n                if [ \"$PATCH_POLICY\" = \"auto\" ]; then\n                    /path/to/scripts/auto-update-frameworks.sh \"$framework\" patch\n                elif [ \"$PATCH_POLICY\" = \"notify\" ]; then\n                    notify_update_available \"$framework\" \"$CURRENT\" \"$LATEST\" \"$UPDATE_TYPE\"\n                fi\n                ;;\n            minor)\n                if [ \"$MINOR_POLICY\" = \"auto\" ]; then\n                    /path/to/scripts/auto-update-frameworks.sh \"$framework\" minor\n                elif [ \"$MINOR_POLICY\" = \"notify\" ]; then\n                    notify_update_available \"$framework\" \"$CURRENT\" \"$LATEST\" \"$UPDATE_TYPE\"\n                fi\n                ;;\n            major)\n                if [ \"$MAJOR_POLICY\" = \"auto\" ]; then\n                    /path/to/scripts/auto-update-frameworks.sh \"$framework\" major\n                elif [ \"$MAJOR_POLICY\" = \"notify\" ]; then\n                    notify_update_available \"$framework\" \"$CURRENT\" \"$LATEST\" \"$UPDATE_TYPE\"\n                fi\n                ;;\n        esac\n    fi\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-update-notification",
      children: "2.3 Update Notification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Notification Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/notify-update-available.sh\nFRAMEWORK=$1\nCURRENT=$2\nLATEST=$3\nUPDATE_TYPE=$4\n\n# Send notification (email, Slack, etc.)\necho \"Framework update available: $FRAMEWORK\"\necho \"Current: $CURRENT\"\necho \"Latest: $LATEST\"\necho \"Type: $UPDATE_TYPE\"\n\n# Example: Send email\n# mail -s \"Framework Update Available: $FRAMEWORK\" user@example.com << EOF\n# Framework: $FRAMEWORK\n# Current Version: $CURRENT\n# Latest Version: $LATEST\n# Update Type: $UPDATE_TYPE\n# \n# To update, run:\n# ./scripts/auto-update-frameworks.sh $FRAMEWORK $UPDATE_TYPE\n# EOF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-git-subtree-auto-update",
      children: "3. Git Subtree Auto-Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-automated-update-script",
      children: "3.1 Automated Update Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/auto-update-subtree.sh\nset -e\n\nFRAMEWORK=$1\nVERSION=$2\n\nif [ -z \"$FRAMEWORK\" ] || [ -z \"$VERSION\" ]; then\n    echo \"Usage: $0 <framework> <version>\"\n    echo \"Example: $0 workflow-mgmt v2.1.0\"\n    exit 1\nfi\n\n# Pull latest version\ngit subtree pull --prefix=frameworks/$FRAMEWORK \\\n    https://github.com/RMS-Ltd/ai-dev-kit.git \\\n    ${FRAMEWORK}-${VERSION} \\\n    --squash\n\n# Commit update\ngit commit -m \"Auto-update ${FRAMEWORK} framework to ${VERSION}\"\n\necho \"✓ Updated ${FRAMEWORK} to ${VERSION}\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-scheduled-update",
      children: "3.2 Scheduled Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduled Update Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/scheduled-subtree-update.sh\nset -e\n\n# Check for updates\ngit fetch https://github.com/RMS-Ltd/ai-dev-kit.git\n\n# Check each framework\nfor framework in workflow-mgmt kanban numbering-versioning; do\n    CURRENT=$(git log -1 --pretty=format:\"%s\" -- frameworks/$framework | grep -oP \"${framework}-v\\K[0-9.]+\" || echo \"unknown\")\n    LATEST=$(git ls-remote --tags https://github.com/RMS-Ltd/ai-dev-kit.git | grep \"${framework}-v\" | sort -V | tail -1 | sed 's/.*refs\\/tags\\///')\n    \n    if [ \"$CURRENT\" != \"$LATEST\" ]; then\n        # Apply update policy\n        UPDATE_TYPE=$(determine_update_type \"$CURRENT\" \"$LATEST\")\n        \n        if should_auto_update \"$UPDATE_TYPE\"; then\n            ./scripts/auto-update-subtree.sh \"$framework\" \"$LATEST\"\n        else\n            notify_update_available \"$framework\" \"$CURRENT\" \"$LATEST\" \"$UPDATE_TYPE\"\n        fi\n    fi\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-cli-tool-auto-update",
      children: "4. CLI Tool Auto-Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-cli-tool-update-commands",
      children: "4.1 CLI Tool Update Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Update specific framework\nai-dev-kit update workflow-mgmt\n\n# Update all frameworks\nai-dev-kit update --all\n\n# Update with policy\nai-dev-kit update workflow-mgmt --policy auto\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduled Update Check:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check for updates\nai-dev-kit check\n\n# Configure automatic checking\nai-dev-kit config set auto_check true\nai-dev-kit config set check_interval daily\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-cli-tool-update-script",
      children: "4.2 CLI Tool Update Script"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/cli-auto-update.sh\nset -e\n\n# Load update policy from config\nCONFIG_FILE=\".ai-dev-kit.yaml\"\nPATCH_POLICY=$(yq eval '.update_policy.patch' \"$CONFIG_FILE\" 2>/dev/null || echo \"notify\")\nMINOR_POLICY=$(yq eval '.update_policy.minor' \"$CONFIG_FILE\" 2>/dev/null || echo \"notify\")\nMAJOR_POLICY=$(yq eval '.update_policy.major' \"$CONFIG_FILE\" 2>/dev/null || echo \"manual\")\n\n# Check for updates\nUPDATES=$(ai-dev-kit check --json)\n\n# Process each update\necho \"$UPDATES\" | jq -r '.frameworks[] | select(.update_available == true) | \"\\(.name) \\(.current) \\(.latest) \\(.update_type)\"' | while read -r name current latest type; do\n    # Apply update policy\n    case \"$type\" in\n        patch)\n            if [ \"$PATCH_POLICY\" = \"auto\" ]; then\n                ai-dev-kit update \"$name\"\n            elif [ \"$PATCH_POLICY\" = \"notify\" ]; then\n                notify_update_available \"$name\" \"$current\" \"$latest\" \"$type\"\n            fi\n            ;;\n        minor)\n            if [ \"$MINOR_POLICY\" = \"auto\" ]; then\n                ai-dev-kit update \"$name\"\n            elif [ \"$MINOR_POLICY\" = \"notify\" ]; then\n                notify_update_available \"$name\" \"$current\" \"$latest\" \"$type\"\n            fi\n            ;;\n        major)\n            if [ \"$MAJOR_POLICY\" = \"auto\" ]; then\n                ai-dev-kit update \"$name\"\n            elif [ \"$MAJOR_POLICY\" = \"notify\" ]; then\n                notify_update_available \"$name\" \"$current\" \"$latest\" \"$type\"\n            fi\n            ;;\n    esac\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-cli-tool-scheduled-updates",
      children: "4.3 CLI Tool Scheduled Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cron Job Setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add to crontab (crontab -e)\n# Daily update check at 2 AM UTC\n0 2 * * * /path/to/project/scripts/cli-auto-update.sh >> /var/log/framework-updates.log 2>&1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-package-manager-auto-update",
      children: "5. Package Manager Auto-Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-npm-auto-update",
      children: "5.1 npm Auto-Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/npm-auto-update.sh\nset -e\n\n# Update to latest compatible version\nnpm update @ai-dev-kit/workflow-mgmt\n\n# Or update to specific version\nnpm install @ai-dev-kit/workflow-mgmt@latest\n\n# Update all frameworks\nnpm update\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduled Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add to package.json\n{\n  \"scripts\": {\n    \"update-frameworks\": \"npm update @ai-dev-kit/workflow-mgmt @ai-dev-kit/kanban\"\n  }\n}\n\n# Run scheduled update\nnpm run update-frameworks\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-pip-auto-update",
      children: "5.2 pip Auto-Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Update Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/pip-auto-update.sh\nset -e\n\n# Update to latest version\npip install --upgrade ai-dev-kit-workflow-mgmt\n\n# Update all frameworks\npip install --upgrade -r requirements.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduled Update:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add to requirements.txt\nai-dev-kit-workflow-mgmt>=2.0.0\nai-dev-kit-kanban>=1.0.0\n\n# Update all\npip install --upgrade -r requirements.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-version-pinning-and-update-policies",
      children: "6. Version Pinning and Update Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-version-pinning",
      children: "6.1 Version Pinning"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pin to Specific Version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    pin: true     # Prevent automatic updates\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pin Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pin: true"
        }), " - Prevent all automatic updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pin: false"
        }), " - Allow automatic updates (default)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pin: patch"
        }), " - Allow PATCH updates only"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "pin: minor"
        }), " - Allow PATCH and MINOR updates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-update-policies",
      children: "6.2 Update Policies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nupdate_policy:\n  patch: auto      # Automatic PATCH updates\n  minor: notify    # Notify for MINOR updates\n  major: manual    # Manual MAJOR updates\n\nframeworks:\n  workflow-mgmt:\n    version: \"2.0.0\"\n    pin: false\n    auto_update: true\n    update_policy:\n      patch: auto\n      minor: notify\n      major: manual\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Policy Options:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "auto"
        }), ": Automatic updates without user intervention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "notify"
        }), ": Notify user of available updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "manual"
        }), ": Require manual user approval"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-update-policy-examples",
      children: "6.3 Update Policy Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Development Environment:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "update_policy:\n  patch: auto      # Auto-update bug fixes\n  minor: auto      # Auto-update new features\n  major: notify     # Notify for breaking changes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Production Environment:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "update_policy:\n  patch: notify    # Notify for bug fixes\n  minor: notify    # Notify for new features\n  major: manual     # Manual approval for breaking changes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Staging Environment:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "update_policy:\n  patch: auto      # Auto-update bug fixes\n  minor: notify    # Notify for new features\n  major: notify     # Notify for breaking changes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-automated-update-testing",
      children: "7. Automated Update Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-pre-update-testing",
      children: "7.1 Pre-Update Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/test-before-update.sh\nset -e\n\nFRAMEWORK=$1\nVERSION=$2\n\necho \"Testing before update: $FRAMEWORK to $VERSION\"\n\n# Run current tests\nnpm test\n\n# Check for breaking changes\nai-dev-kit changelog \"$FRAMEWORK\" --from current --to \"$VERSION\" --breaking\n\n# Validate compatibility\nai-dev-kit check --compatibility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-post-update-testing",
      children: "7.2 Post-Update Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/test-after-update.sh\nset -e\n\nFRAMEWORK=$1\nVERSION=$2\n\necho \"Testing after update: $FRAMEWORK to $VERSION\"\n\n# Run tests\nnpm test\n\n# Validate functionality\nai-dev-kit check\n\n# Check for issues\nai-dev-kit status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-automated-testing-workflow",
      children: "7.3 Automated Testing Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CI/CD Integration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .github/workflows/auto-update-test.yml\nname: Auto-Update Test\non:\n  schedule:\n    - cron: '0 2 * * *'  # Daily at 2 AM UTC\n  workflow_dispatch:\n\njobs:\n  test-update:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Check for updates\n        run: ai-dev-kit check\n      - name: Test updates\n        run: |\n          for framework in workflow-mgmt kanban; do\n            ai-dev-kit update $framework --dry-run\n            ./scripts/test-before-update.sh $framework latest\n          done\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-update-notification-systems",
      children: "8. Update Notification Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-notification-methods",
      children: "8.1 Notification Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Email Notifications:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Send email notification\nmail -s \"Framework Update Available\" user@example.com << EOF\nFramework: workflow-mgmt\nCurrent: 2.0.0\nLatest: 2.1.0\nUpdate Type: MINOR\n\nTo update, run:\nai-dev-kit update workflow-mgmt\nEOF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Slack Notifications:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Send Slack notification\ncurl -X POST -H 'Content-type: application/json' \\\n  --data '{\"text\":\"Framework update available: workflow-mgmt (2.0.0 → 2.1.0)\"}' \\\n  https://hooks.slack.com/services/YOUR/WEBHOOK/URL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issues:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create GitHub issue for update\ngh issue create \\\n  --title \"Framework Update Available: workflow-mgmt\" \\\n  --body \"Update from 2.0.0 to 2.1.0 (MINOR update)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-notification-configuration",
      children: "8.2 Notification Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nnotifications:\n  enabled: true\n  methods:\n    - email\n    - slack\n  email:\n    to: user@example.com\n  slack:\n    webhook_url: https://hooks.slack.com/services/YOUR/WEBHOOK/URL\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-update-rollback-procedures",
      children: "9. Update Rollback Procedures"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-automatic-rollback",
      children: "9.1 Automatic Rollback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Script:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\n# scripts/auto-rollback.sh\nset -e\n\nFRAMEWORK=$1\nPREVIOUS_VERSION=$2\n\necho \"Rolling back $FRAMEWORK to $PREVIOUS_VERSION\"\n\n# Restore previous version\nai-dev-kit update \"$FRAMEWORK@$PREVIOUS_VERSION\"\n\n# Or restore from backup\nif [ -d \".backup/frameworks/$FRAMEWORK\" ]; then\n    cp -r \".backup/frameworks/$FRAMEWORK\" \"./frameworks/$FRAMEWORK\"\nfi\n\n# Test rollback\nnpm test\n\necho \"✓ Rolled back $FRAMEWORK to $PREVIOUS_VERSION\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-rollback-triggers",
      children: "9.2 Rollback Triggers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatic Rollback Conditions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update causes test failures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update breaks functionality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update causes integration errors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update fails validation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rollback Configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# .ai-dev-kit.yaml\nauto_rollback:\n  enabled: true\n  triggers:\n    - test_failure\n    - validation_error\n    - integration_error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-best-practices",
      children: "10. Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-update-policy-best-practices",
      children: "10.1 Update Policy Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Development:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable automatic PATCH and MINOR updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify for MAJOR updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test updates in development first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Staging:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable automatic PATCH updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify for MINOR and MAJOR updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate updates in staging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Production:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Notify for all updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manual approval for all updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test thoroughly before production deployment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-update-scheduling-best-practices",
      children: "10.2 Update Scheduling Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scheduling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule updates during low-activity periods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use daily checks for development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use weekly checks for production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor update logs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid updates during critical periods"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule updates during maintenance windows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Coordinate updates across teams"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-update-testing-best-practices",
      children: "10.3 Update Testing Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always test updates before applying"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run comprehensive test suites"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test integration points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Validation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify version updates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check for breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate compatibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor for issues"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-related-documentation",
      children: "11. Related Documentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-core-documents",
      children: "11.1 Core Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Update Procedures:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-update-procedures.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update workflows and methods"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Manual update procedures"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Migration Guide:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-migration-guide.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration procedures"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Migration tools"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Dependency Architecture:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "framework-dependency-architecture.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dependency installation methods"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Backend selection"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-supporting-documents",
      children: "11.2 Supporting Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Framework Dependency Update Guide:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/documentation/user-docs/framework-dependency-update-guide.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "User-facing update guide"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CLI Tool Reference:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "docs/documentation/user-docs/framework-dependency-cli-reference.md"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CLI tool commands"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update command reference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-summary",
      children: "12. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-key-principles",
      children: "12.1 Key Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Policies:"
        }), " Configurable automatic, semi-automatic, and manual update policies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Backends:"
        }), " Support for Git submodules, subtrees, CLI tool, and package managers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Pinning:"
        }), " Flexible version pinning and update control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Testing:"
        }), " Automated update testing workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety First:"
        }), " Backup, validation, and rollback procedures"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-auto-update-workflow",
      children: "12.2 Auto-Update Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Update Detection → Policy Check → Update Execution → Testing → Validation → Completion (or Rollback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-update-methods",
      children: "12.3 Update Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Submodules:"
        }), " Automated update scripts and scheduled checks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Subtrees:"
        }), " Automated pull and merge procedures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI Tool:"
        }), " Unified interface for all update operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Package Managers:"
        }), " Standard npm/pip update workflows"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-03", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Task:"
      }), " E6:S02", ":T05", " - Create auto-update mechanisms"]
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