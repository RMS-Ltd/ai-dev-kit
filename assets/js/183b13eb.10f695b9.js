"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["78831"], {
58080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_074_rw_release_commits_test_artifacts_and_changelog_integrity_failures_md_183_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures-md-183.json
var site_docs_project_management_kanban_fr_br_br_074_rw_release_commits_test_artifacts_and_changelog_integrity_failures_md_183_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures","title":"Bug Report BR-074: RW release commit includes test artifacts, deletes prior-build changelog, and emits version-typo in detailed changelog","description":"Status: RESOLVED ✅","source":"@site/../docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-17T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-073: SemVer task-touch collision — two internal versions mapped to identical SemVer","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-073-semver-task-touch-collision-retrospective-fix"},"next":{"title":"Bug Report BR-075: RW perpetual-task releases may not persist BUILD increment in version.py","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-17T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-074: RW release commit includes test artifacts, deletes prior-build changelog, and emits version-typo in detailed changelog';

const assets = {

};



const toc = [{
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 2
}, {
  "value": "Issue 1: Test / Simulation Artifacts Committed to Version Control",
  "id": "issue-1-test--simulation-artifacts-committed-to-version-control",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior",
  "level": 3
}, {
  "value": "Root Cause",
  "id": "root-cause",
  "level": 3
}, {
  "value": "Issue 2: Prior-Build Changelog Deleted, Breaking Archive Link",
  "id": "issue-2-prior-build-changelog-deleted-breaking-archive-link",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior-1",
  "level": 3
}, {
  "value": "Root Cause",
  "id": "root-cause-1",
  "level": 3
}, {
  "value": "Issue 3: Detailed Changelog Version Typo",
  "id": "issue-3-detailed-changelog-version-typo",
  "level": 2
}, {
  "value": "Observed Behavior",
  "id": "observed-behavior-2",
  "level": 3
}, {
  "value": "Root Cause",
  "id": "root-cause-2",
  "level": 3
}, {
  "value": "Impact",
  "id": "impact",
  "level": 2
}, {
  "value": "Expected Behavior",
  "id": "expected-behavior",
  "level": 2
}, {
  "value": "Actual Behavior",
  "id": "actual-behavior",
  "level": 2
}, {
  "value": "Steps to Reproduce",
  "id": "steps-to-reproduce",
  "level": 2
}, {
  "value": "Environment",
  "id": "environment",
  "level": 2
}, {
  "value": "Acceptance Criteria (Fix Requirements)",
  "id": "acceptance-criteria-fix-requirements",
  "level": 2
}, {
  "value": "Fix Attempt History",
  "id": "fix-attempt-history",
  "level": 2
}, {
  "value": "Fix Attempt 1: E02:S01 implementation (2026-05-17)",
  "id": "fix-attempt-1-e02s01-implementation-2026-05-17",
  "level": 3
}, {
  "value": "Dependencies",
  "id": "dependencies",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
        id: "bug-report-br-074-rw-release-commit-includes-test-artifacts-deletes-prior-build-changelog-and-emits-version-typo-in-detailed-changelog",
        children: "Bug Report BR-074: RW release commit includes test artifacts, deletes prior-build changelog, and emits version-typo in detailed changelog"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED ✅\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " HIGH\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-05-17\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-05-17\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.2.1.21+1\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      }), " BR-074"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074",
        children: ["E02:S01", ":T21"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Release Workflow (RW) for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.6.6.63+2"
      }), " (E06:S06", ":T63", " — RW Recovery Journal implementation) produced multiple integrity failures across artifact management, changelog archival, and release documentation. These are deterministic issues that will recur on every same-task follow-up release (BUILD > 1) unless the root causes are addressed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "issue-1-test--simulation-artifacts-committed-to-version-control",
      children: "Issue 1: Test / Simulation Artifacts Committed to Version Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "22e3e574c"
      }), " (Release v0.6.6.63+2) includes three files under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/"
      }), " that are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "test/simulation artifacts"
      }), ", not operator documentation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-19d02eb7-b146-4153-893e-ec27c6d957a0-2026-05-17T15-34-57Z.json"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-19d02eb7-b146-4153-893e-ec27c6d957a0-recovery.json"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-19d02eb7-b146-4153-893e-ec27c6d957a0-recovery.md"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The JSON journal shows ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"status\": \"failed\""
      }), " at Step 3 with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "version_after: null"
      }), ". This is the output of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test_rw_integration.py::_simulate_failed_run()"
      }), ", not a real RW execution. Including a \"failed\" run artifact in a successful release commit is confusing and pollutes the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/"
      }), " operator-facing documentation tree."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause",
      children: "Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/"
      }), " has no ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".gitignore"
      }), " exclusion for runtime ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-*"
      }), " artifact files. The integration test writes to the production journal directory (", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/journal/"
      }), " defaults to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/"
      }), ") and the RW Step 8 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git add -A"
      }), " stages everything."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "issue-2-prior-build-changelog-deleted-breaking-archive-link",
      children: "Issue 2: Prior-Build Changelog Deleted, Breaking Archive Link"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior-1",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG_v0.6.6.63+1.md"
      }), " — created in commit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "27bbcd297"
      }), " (2026-04-21, RW --art adoption release for E06:S06", ":T63", ") — was ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deleted"
      }), " in commit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "22e3e574c"
      }), ". The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG_ARCHIVE.md"
      }), " still references it:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-markdown",
        children: "## [0.6.6.63+1] - 21-04-26\n...\n[Detailed changelog](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63%2B1.md)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This link is now ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "broken"
      }), " (404 equivalent in the repository)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause-1",
      children: "Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RW Step 3 (", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_changelog.py"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_detailed_changelog.py"
      }), ") appears to treat same-task BUILD increments as overwrite candidates rather than preserving prior BUILD changelogs. The archival policy (", (0,jsx_runtime.jsx)(_components.code, {
        children: "changelog_archival.mode: latest_only"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ") applies to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "main"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CHANGELOG.md"
      }), " (keep only latest entry at top), not to the per-build detailed changelogs in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "changelog-archive/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "issue-3-detailed-changelog-version-typo",
      children: "Issue 3: Detailed Changelog Version Typo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observed-behavior-2",
      children: "Observed Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+2.md"
      }), " line 4 states:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "**Internal Version:** 0.6.6.63+1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is incorrect. The release is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+2"
      }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "root-cause-2",
      children: "Root Cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Likely a copy-paste or template variable error in the detailed changelog generation script. The script may be reading the version file ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "before"
      }), " bumping, or using a stale variable during BUILD > 1 releases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact",
      children: "Impact"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository hygiene"
        }), ": Test artifacts with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"status\": \"failed\""
        }), " are permanently in version control, misleading operators who browse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Broken archival links"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_ARCHIVE.md"
        }), " references a non-existent file, degrading trust in the changelog audit trail."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version confusion"
        }), ": The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+2"
        }), " detailed changelog advertises itself as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+1"
        }), ", creating ambiguity for future forensic analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recurrence risk"
        }), ": All three issues will repeat on every same-task BUILD > 1 release until the underlying scripts are hardened."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Runtime journal artifacts (", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-*.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-*-recovery.*"
        }), ") are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "never"
        }), " committed to version control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v{version}.md"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/"
        }), " is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "immutable"
        }), " once created; subsequent BUILDs create new files rather than deleting old ones."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Internal Version"
        }), " line in detailed changelogs matches the actual release version."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_ARCHIVE.md"
        }), " links resolve to existing files."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actual-behavior",
      children: "Actual Behavior"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test artifacts from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test_rw_integration.py"
        }), " were committed in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "22e3e574c"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.6.6.63+1.md"
        }), " was deleted, leaving a dangling link in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_ARCHIVE.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.6.6.63+2.md"
        }), " declares ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Internal Version: 0.6.6.63+1"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " has no rule for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to Reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pytest tests/journal/test_rw_integration.py"
        }), " (writes artifacts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RW E06:S06:T63 --art"
        }), " (or any same-task BUILD > 1 release)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git add -A"
        }), " stages test artifacts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe that prior BUILD's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v*.md"
        }), " is deleted rather than preserved."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe that the new detailed changelog's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Internal Version"
        }), " may reflect the prior BUILD."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment",
      children: "Environment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "22e3e574c"
        }), " (Release v0.6.6.63+2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prior commit:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "27bbcd297"
        }), " (Release v0.6.6.63+1)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Affected files:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/journals/rw-*"
            }), " (test artifacts)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+1.md"
            }), " (deleted)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63+2.md"
            }), " (version typo)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md"
            }), " (broken link)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".gitignore"
            }), " (missing rule)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria-fix-requirements",
      children: "Acceptance Criteria (Fix Requirements)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC1:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " updated to exclude ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*-recovery.json"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*-recovery.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC2:"
        }), " Test artifact files from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "22e3e574c"
        }), " are removed from version control (git-rm) without deleting the operator docs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "README.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JOURNAL_SCHEMA.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RECOVERY_PROCEDURE.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ROLLBACK_CONTRACT.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC3:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.6.6.63+1.md"
        }), " is restored from commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "27bbcd297"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "changelog-archive/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC4:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.6.6.63+2.md"
        }), " is corrected to read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Internal Version: 0.6.6.63+2"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC5:"
        }), " RW Step 3 / changelog generation script is hardened so that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prior BUILD changelogs are never deleted."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Internal Version"
            }), " field uses the post-bump version, not the pre-bump version."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AC6:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_ARCHIVE.md"
        }), " link integrity is validated (no dangling links) as part of RW Step 9 or UKW validation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Verification Method:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Test suite execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Manual inspection of commit contents"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Link validation script"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fix-attempt-history",
      children: "Fix Attempt History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "fix-attempt-1-e02s01-implementation-2026-05-17",
      children: ["Fix Attempt 1: E02:S01", ":T21", " implementation (2026-05-17)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " In progress."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actions taken:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " exclusions for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*-recovery.json"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/rw-*-recovery.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git rm"
        }), "-d three committed test artifact files from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Restored ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.6.6.63+1.md"
        }), " from commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "27bbcd297"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Patched ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v0.6.6.63+2.md"
        }), " line 4: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Internal Version: 0.6.6.63+1"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.6.6.63+2"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Added ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/journals/README.md"
        }), " subsection warning operators not to commit runtime ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-*"
        }), " artifacts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Created ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_archive_links.py"
        }), " — parses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_ARCHIVE.md"
        }), " for relative markdown links, validates resolution with dual-resolution logic (archive-parent relative, then project-root relative), reports dangling links with line numbers. Non-blocking by default; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--strict"
        }), " for blocking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hardened RW Step 3 in ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".claude/commands/rw.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".cursorrules"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cursorrules-rw-trigger-section.md"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "release-workflow-agent-execution.md"
        }), " with two explicit guards: (a) never overwrite/delete existing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CHANGELOG_v{version}.md"
        }), "; (b) use post-bump version for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Internal Version"
        }), " header."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hardened RW Step 9/10 validator lists across all four governance docs to include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "validate_changelog_archive_links.py"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Updated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-trigger-dual-source-parity.md"
        }), " checklist and delta log for BR-074 parity pass."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Remaining work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RW release commit for E02:S01", ":T21", " to persist all changes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dependencies",
      children: "Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Future same-task BUILD > 1 releases (risk of recurring artifact pollution and changelog deletion)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Blocked By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "None"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-06-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038",
          children: ["E06:S06", ":T63"]
        }), " — The release that exposed these issues."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues",
          children: "BR-038"
        }), " — Parent BR where recovery journal scope was defined."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw",
          children: "FR-042"
        }), " — IPW process that planned T63."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This BR bundles three distinct surface symptoms that share a common theme: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RW BUILD > 1 releases lack hardening around artifact boundaries and changelog immutability"
      }), ". The fix may be delivered as a single task or split into sub-tasks depending on implementation complexity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The test artifact in question (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-19d02eb7..."
      }), ") is from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tests/journal/test_rw_integration.py::_simulate_failed_run()"
      }), ", which calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RWJournal(task_id=\"E06:S06:T63\")"
      }), " and writes to the default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JOURNAL_DIR"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/journals/"
      }), "). The test should either:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use a temporary directory for journal output, or"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The directory should be gitignored."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both mitigations (test isolation + gitignore) are recommended for defense in depth."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "22e3e574c"
        }), " — Release v0.6.6.63+2 (contains test artifacts, deletes +1 changelog)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Commit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "27bbcd297"
        }), " — Release v0.6.6.63+1 (contains the deleted changelog)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md",
          children: "CHANGELOG_ARCHIVE.md"
        }), " — Contains broken link to +1 changelog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/project-management/kanban/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.6.6.63%2B2.md",
          children: "CHANGELOG_v0.6.6.63+2.md"
        }), " — Contains version typo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tests/journal/test_rw_integration.py"
        }), " — Source of committed test artifacts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ".gitignore"
        }), " — Missing journal artifact exclusion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This bug report is part of the AI Dev Kit Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/"
        }), " for complete framework documentation."]
      })
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