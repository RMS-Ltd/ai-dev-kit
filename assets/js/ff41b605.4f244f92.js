"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["29844"], {
17678(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_ultimate_canonical_cursorrules_structure_md_ff4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-ultimate-canonical-cursorrules-structure-md-ff4.json
var site_docs_architecture_standards_and_adrs_ultimate_canonical_cursorrules_structure_md_ff4_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure","title":"Ultimate Canonical Cursorrules Structure","description":"Purpose: Definitive specification for the canonical .cursorrules structure","source":"@site/../docs/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-18T01:45:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Task-Touch SemVer Mapping Examples","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-touch-mapping-examples"},"next":{"title":"Ultimate Canonical Kanban Structure","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ultimate-canonical-kanban-structure"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ultimate-canonical-cursorrules-structure.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-18T01:45:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Ultimate Canonical Cursorrules Structure';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "1. File Structure Specification",
  "id": "1-file-structure-specification",
  "level": 2
}, {
  "value": "1.1 File Naming",
  "id": "11-file-naming",
  "level": 3
}, {
  "value": "2. Section Organization Specification",
  "id": "2-section-organization-specification",
  "level": 2
}, {
  "value": "2.1 Workflow-First Organization",
  "id": "21-workflow-first-organization",
  "level": 3
}, {
  "value": "3. Release Workflow (RW) Trigger Section Specification",
  "id": "3-release-workflow-rw-trigger-section-specification",
  "level": 2
}, {
  "value": "3.1 Comprehensive 12-Step RW Trigger",
  "id": "31-comprehensive-12-step-rw-trigger",
  "level": 3
}, {
  "value": "3.2 Config-Driven Approach",
  "id": "32-config-driven-approach",
  "level": 3
}, {
  "value": "4. Package Version Workflow (PVW) Trigger Section Specification",
  "id": "4-package-version-workflow-pvw-trigger-section-specification",
  "level": 2
}, {
  "value": "4.1 PVW Trigger (Optional)",
  "id": "41-pvw-trigger-optional",
  "level": 3
}, {
  "value": "5. Document Lifecycle Management Section Specification",
  "id": "5-document-lifecycle-management-section-specification",
  "level": 2
}, {
  "value": "5.1 Document Lifecycle Management (Recommended)",
  "id": "51-document-lifecycle-management-recommended",
  "level": 3
}, {
  "value": "6. Git Workflow Restrictions Section Specification",
  "id": "6-git-workflow-restrictions-section-specification",
  "level": 2
}, {
  "value": "6.1 Git Workflow Restrictions (Recommended)",
  "id": "61-git-workflow-restrictions-recommended",
  "level": 3
}, {
  "value": "7. Project-Specific Rules Section Specification",
  "id": "7-project-specific-rules-section-specification",
  "level": 2
}, {
  "value": "7.1 Project-Specific Rules",
  "id": "71-project-specific-rules",
  "level": 3
}, {
  "value": "8. Version Schema Definition Specification",
  "id": "8-version-schema-definition-specification",
  "level": 2
}, {
  "value": "8.1 Version Schema",
  "id": "81-version-schema",
  "level": 3
}, {
  "value": "9. Branch Mapping Specification",
  "id": "9-branch-mapping-specification",
  "level": 2
}, {
  "value": "9.1 Branch Mapping Rules",
  "id": "91-branch-mapping-rules",
  "level": 3
}, {
  "value": "10. Complete Structure Example",
  "id": "10-complete-structure-example",
  "level": 2
}, {
  "value": "11. Validation Rules",
  "id": "11-validation-rules",
  "level": 2
}, {
  "value": "11.1 File Structure Validation",
  "id": "111-file-structure-validation",
  "level": 3
}, {
  "value": "11.2 RW Trigger Validation",
  "id": "112-rw-trigger-validation",
  "level": 3
}, {
  "value": "11.3 Configuration Validation",
  "id": "113-configuration-validation",
  "level": 3
}, {
  "value": "12. Implementation",
  "id": "12-implementation",
  "level": 2
}, {
  "value": "12.1 Installation",
  "id": "121-installation",
  "level": 3
}, {
  "value": "12.2 Configuration",
  "id": "122-configuration",
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
        id: "ultimate-canonical-cursorrules-structure",
        children: "Ultimate Canonical Cursorrules Structure"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Purpose:"
      }), " Definitive specification for the canonical ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " structure", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part of:"
      }), " E6:S06", ":T06", " – Cross-project meta-analysis and canonical framework design", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Supersedes:"
      }), " All previous cursorrules structure specifications"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Based on:"
      }), " Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This document ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["defines the ultimate canonical ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " structure"]
      }), " for ADK framework implementations. This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "definitive specification"
      }), " that all projects should adopt."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Ultimate Canonical Cursorrules Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{project-root}/\n├── .cursorrules                    # Cursor rules (canonical)\n├── rw-config.yaml                  # Workflow config (canonical)\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Specifications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organization:"
        }), " Workflow-first (RW trigger, PVW trigger, lifecycle, git restrictions, project-specific)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Trigger:"
        }), " Comprehensive 12-step Release Workflow trigger"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration:"
        }), " Config-driven approach (load ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progress Tracking:"
        }), " Cursor TODO tracking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-file-structure-specification",
      children: "1. File Structure Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-file-naming",
      children: "1.1 File Naming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " (dot-prefixed, lowercase)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Location:"
      }), " Project root directory"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Structure:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{project-root}/\n├── .cursorrules                    # Cursor rules (canonical)\n├── rw-config.yaml                  # Workflow config (canonical)\n├── README.md\n└── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-section-organization-specification",
      children: "2. Section Organization Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-workflow-first-organization",
      children: "2.1 Workflow-First Organization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL ORDER:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Trigger Section"
        }), " (Release Workflow trigger)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PVW Trigger Section"
        }), " (Package Version Workflow trigger, optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Document Lifecycle Management Section"
        }), " (optional but recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Git Workflow Restrictions Section"
        }), " (optional but recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project-Specific Rules Section"
        }), " (custom rules)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-release-workflow-rw-trigger-section-specification",
      children: "3. Release Workflow (RW) Trigger Section Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-comprehensive-12-step-rw-trigger",
      children: "3.1 Comprehensive 12-Step RW Trigger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Release Workflow (RW) Trigger\n\nWhen the user types \"RW\" or \"Release Workflow\", execute the following 12-step Release Workflow:\n\n### Step 1: Branch Safety Check (MANDATORY BLOCKING)\n\n🚨 **CRITICAL:** This step is MANDATORY and BLOCKING. The workflow MUST abort if this validation fails.\n\nExecute: `python packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py --strict`\n\n**Validation:**\n- Current branch matches expected epic number\n- Version matches branch context\n- Task document exists (if applicable)\n\n**Failure Handling:**\n- Workflow aborts if validation fails\n- User must fix branch context before proceeding\n- Clear error messages provided\n\n### Step 2: Bump Version\n\nLoad config from `rw-config.yaml`:\n- `version_file`: Path to version file (e.g., `src/{project}/version.py`)\n- Increment `VERSION_BUILD`\n- Update version comment\n\n### Step 3: Create Detailed Changelog\n\nLoad config from `rw-config.yaml`:\n- `changelog_dir`: Path to changelog archive directory\n- Generate detailed changelog: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.N.NNN.T+B.md`\n- Include DO/CHECK/ACT phases\n- Document all changes\n\n### Step 4: Update Main Changelog\n\nLoad config from `rw-config.yaml`:\n- `main_changelog`: Path to main changelog (e.g., `CHANGELOG.md`)\n- Add summary entry following Keep a Changelog format\n- Link to detailed changelog\n\n### Step 5: Update README\n\nLoad config from `rw-config.yaml`:\n- `readme_file`: Path to README file (e.g., `README.md`)\n- Update version badge: `![Version](https://img.shields.io/badge/version-v0.N.NNN.T%2BB-blue.svg)`\n\n### Step 6: Update BR/FR Docs\n\nIf BR/FR documents are linked to this task, update them with fix attempts.\n\n### Step 7: Auto-update Kanban Docs\n\nLoad config from `rw-config.yaml`:\n- `kanban_root`: Path to Kanban root (e.g., `docs/project-management/kanban`)\n- `epic_doc_pattern`: Epic document pattern (e.g., `epics/Epic-{epic}/Epic-{epic}.md`)\n- `story_doc_pattern`: Story document pattern (e.g., `epics/Epic-{epic}/Story-{story}-*.md`)\n- Update Epic document with version marker\n- Update Story document with version marker\n\n### Step 8: Stage Files\n\nExecute: `git add -A`\n\nStage all modified files:\n- Version file\n- Changelogs\n- README\n- Kanban docs\n\n### Step 9: Run Validators\n\nExecute validators:\n1. `python packages/frameworks/workflow-mgt/scripts/validation/validate_branch_context.py --strict`\n2. `python packages/frameworks/workflow-mgt/scripts/validation/validate_changelog_format.py`\n\n**Failure Handling:**\n- Workflow aborts if validation fails\n- User must fix issues before proceeding\n- Clear error messages provided\n\n### Step 10: Commit Changes\n\nExecute: `git commit -m \"Release v0.N.NNN.T+B: {description}\"`\n\n**Commit Message Format:**\n- Versioned commit message\n- Descriptive summary of changes\n\n### Step 11: Create Git Tag\n\nExecute: `git tag -a \"v0.N.NNN.T+B\" -m \"Release v0.N.NNN.T+B: {description}\"`\n\n**Tag Format:**\n- Annotated tag with version\n- Tag message matches commit message\n\n### Step 12: Push to Remote\n\nExecute: `git push origin {branch} --tags`\n\n**Push Format:**\n- Push branch and tags\n- Use `--force-with-lease` if amending commits\n\n### Progress Tracking\n\nUse Cursor TODOs to track workflow progress:\n- [ ] Step 1: Branch Safety Check - pending\n- [ ] Step 2: Bump Version - pending\n- [ ] Step 3: Create Detailed Changelog - pending\n- ... (update status as steps complete)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-config-driven-approach",
      children: "3.2 Config-Driven Approach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL:"
      }), " Load ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " for workflow configuration"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Config Loading:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "Load config from `rw-config.yaml` in project root:\n- `version_file`: Path to version file\n- `main_changelog`: Path to main changelog\n- `changelog_dir`: Path to changelog archive directory\n- `scripts_path`: Path to workflow scripts\n- `readme_file`: Path to README file\n- `use_kanban`: Whether to update Kanban docs\n- `kanban_root`: Path to Kanban root\n- `epic_doc_pattern`: Epic document pattern\n- `story_doc_pattern`: Story document pattern\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-package-version-workflow-pvw-trigger-section-specification",
      children: "4. Package Version Workflow (PVW) Trigger Section Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-pvw-trigger-optional",
      children: "4.1 PVW Trigger (Optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Package Version Workflow (PVW) Trigger\n\nWhen the user types \"PVW\" or \"Package Version Workflow\", execute the Package Version Workflow:\n\n{PVW workflow steps}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-document-lifecycle-management-section-specification",
      children: "5. Document Lifecycle Management Section Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-document-lifecycle-management-recommended",
      children: "5.1 Document Lifecycle Management (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Document Lifecycle Management\n\nDocuments in `docs/` directory must have lifecycle metadata in frontmatter:\n\n**Required Fields:**\n- `lifecycle`: `evergreen` | `timeboxed` | `transient`\n- `created_at`: ISO 8601 datetime\n\n**Optional Fields:**\n- `ttl_days`: Time to live in days (integer or null)\n- `expires_at`: Expiration datetime (ISO 8601 or null)\n- `housekeeping_policy`: `keep` | `archive` | `delete`\n\n**Lifecycle Values:**\n- `evergreen`: Permanent documentation (no expiration)\n- `timeboxed`: Time-limited documentation (expires after `ttl_days`)\n- `transient`: Temporary documentation (short-lived)\n\n**Housekeeping Policy:**\n- `keep`: Keep document permanently\n- `archive`: Archive document when expired\n- `delete`: Delete document when expired\n\n**Automated Management:**\n- Check document expiration based on `ttl_days` or `expires_at`\n- Apply housekeeping policy when document expires\n- Archive or delete expired documents based on policy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-git-workflow-restrictions-section-specification",
      children: "6. Git Workflow Restrictions Section Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-git-workflow-restrictions-recommended",
      children: "6.1 Git Workflow Restrictions (Recommended)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Git Workflow Restrictions\n\n**Strict Rules:**\n- Commits MUST be made via Release Workflow (RW) only\n- Pushes MUST be made via Release Workflow (RW) only\n- Branch isolation MUST be enforced\n- Pre-commit validation MUST pass\n\n**Prohibited Operations:**\n- Manual `git commit` (use RW instead)\n- Manual `git push` (use RW instead)\n- Commits to wrong branch (validated by branch safety check)\n- Pushes without validation (validated by RW)\n\n**Enforcement:**\n- Branch safety check validates branch context\n- Workflow validators ensure compliance\n- Clear error messages for violations\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-project-specific-rules-section-specification",
      children: "7. Project-Specific Rules Section Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-project-specific-rules",
      children: "7.1 Project-Specific Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Project-Specific Rules\n\n{Project-specific rules and guidelines}\n\n### Custom Workflows\n\n{Custom workflow definitions}\n\n### Domain-Specific Rules\n\n{Domain-specific rules}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-version-schema-definition-specification",
      children: "8. Version Schema Definition Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-version-schema",
      children: "8.1 Version Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Version Schema\n\n**ADK Version Schema:** `RC.EPIC.STORY.TASK+BUILD`\n\n- `RC`: Release Candidate (0 = development, 1+ = release candidate)\n- `EPIC`: Epic number (1-23 canonical, 24+ project-specific)\n- `STORY`: Story number within epic (3-digit padding)\n- `TASK`: Task number within story (2-digit padding)\n- `BUILD`: Build number (increments per release within task)\n\n**Examples:**\n- `0.6.6.6+1` = Development, Epic 6, Story 6, Task 6, Build 1\n- `1.1.1.1+1` = Release Candidate 1, Epic 1, Story 1, Task 1, Build 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-branch-mapping-specification",
      children: "9. Branch Mapping Specification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-branch-mapping-rules",
      children: "9.1 Branch Mapping Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL FORMAT:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## Branch Mapping\n\n**Branch Naming:** `epic/{N}-{description}`\n\n- `{N}`: Epic number (1-23 canonical, 24+ project-specific)\n- `{description}`: Epic description (lowercase, hyphenated)\n\n**Examples:**\n- `epic/6-framework-management`\n- `epic/1-project-core`\n- `epic/24-project-specific`\n\n**Validation:**\n- Branch name must match epic number in version\n- Branch context validation ensures consistency\n- Workflow aborts if branch mismatch detected\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-complete-structure-example",
      children: "10. Complete Structure Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL STRUCTURE:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "# {Project Name} Cursor Rules\n\n## Release Workflow (RW) Trigger\n\n{Comprehensive 12-step RW trigger as specified above}\n\n## Package Version Workflow (PVW) Trigger\n\n{PVW trigger - optional}\n\n## Document Lifecycle Management\n\n{Document lifecycle management rules as specified above}\n\n## Git Workflow Restrictions\n\n{Git workflow restriction rules as specified above}\n\n## Version Schema\n\n{Version schema definition as specified above}\n\n## Branch Mapping\n\n{Branch mapping rules as specified above}\n\n## Project-Specific Rules\n\n{Project-specific rules}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-validation-rules",
      children: "11. Validation Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-file-structure-validation",
      children: "11.1 File Structure Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file exists in project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File format is markdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Section organization follows canonical format"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-rw-trigger-validation",
      children: "11.2 RW Trigger Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RW trigger section exists"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive 12-step RW trigger defined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config-driven approach used"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress tracking implemented"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-configuration-validation",
      children: "11.3 Configuration Validation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " exists in project root (if config-driven)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Config structure is valid"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required config fields present"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-implementation",
      children: "12. Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-installation",
      children: "12.1 Installation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL METHOD:"
      }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".cursorrules"
      }), " file following this specification"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Installation Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), " file in project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add comprehensive 12-step RW trigger section"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add config-driven approach (load ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add document lifecycle management section (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add git workflow restrictions section (optional)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add project-specific rules section"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-configuration",
      children: "12.2 Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CANONICAL METHOD:"
      }), " Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " in project root"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), " in project root"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure required fields (version_file, main_changelog, changelog_dir, scripts_path)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure optional fields (readme_file, use_kanban, kanban_root, etc.)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-18", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " COMPLETE"]
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