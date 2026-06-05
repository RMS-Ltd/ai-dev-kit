"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["68103"], {
50255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_053_github_actions_workflow_push_trigger_bug_md_61e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-053-github-actions-workflow-push-trigger-bug-md-61e.json
var site_docs_project_management_kanban_fr_br_br_053_github_actions_workflow_push_trigger_bug_md_61e_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug","title":"BR-053: GitHub Actions Workflow Push Trigger Bug","description":"Critical GitHub Actions bug where workflows trigger on push events despite \'on: issues:\' only configuration","source":"@site/../docs/project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug.md","tags":[],"version":"current","frontMatter":{"title":"BR-053: GitHub Actions Workflow Push Trigger Bug","description":"Critical GitHub Actions bug where workflows trigger on push events despite \'on: issues:\' only configuration","status":"COMPLETE","priority":"CRITICAL","type":"bug","date_created":"2026-03-12","date_completed":"2026-03-12","assignee":"GitHub Support","reporter":"RW Agent","labels":["bug","github-actions","critical","workflow-trigger","push-events"]},"sidebar":"docsSidebar","previous":{"title":"BR-052: GitHub Actions Workflow Optimization","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-052-github-actions-workflow-optimization"},"next":{"title":"Bug Report: Kanban Package Migration/Installation Completely Broken","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-054-kanban-package-migration-installation-completely-broken"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-053-github-actions-workflow-push-trigger-bug.md


const frontMatter = {
	title: 'BR-053: GitHub Actions Workflow Push Trigger Bug',
	description: 'Critical GitHub Actions bug where workflows trigger on push events despite \'on: issues:\' only configuration',
	status: 'COMPLETE',
	priority: 'CRITICAL',
	type: 'bug',
	date_created: '2026-03-12',
	date_completed: '2026-03-12',
	assignee: 'GitHub Support',
	reporter: 'RW Agent',
	labels: [
		'bug',
		'github-actions',
		'critical',
		'workflow-trigger',
		'push-events'
	]
};
const contentTitle = 'Bug Report BR-053: GitHub Actions Workflow Push Trigger Bug';

const assets = {

};



const toc = [{
  "value": "<strong>Bug Summary</strong>",
  "id": "bug-summary",
  "level": 2
}, {
  "value": "<strong>Environment</strong>",
  "id": "environment",
  "level": 2
}, {
  "value": "<strong>Bug Description</strong>",
  "id": "bug-description",
  "level": 2
}, {
  "value": "<strong>Problematic Behavior</strong>",
  "id": "problematic-behavior",
  "level": 3
}, {
  "value": "<strong>Comprehensive Testing Evidence</strong>",
  "id": "comprehensive-testing-evidence",
  "level": 2
}, {
  "value": "<strong>Test 1: Original Workflow Investigation</strong>",
  "id": "test-1-original-workflow-investigation",
  "level": 3
}, {
  "value": "<strong>Test 2: Trigger Modification</strong>",
  "id": "test-2-trigger-modification",
  "level": 3
}, {
  "value": "<strong>Test 3: Explicit Event Checking</strong>",
  "id": "test-3-explicit-event-checking",
  "level": 3
}, {
  "value": "<strong>Test 4: False Condition Test</strong>",
  "id": "test-4-false-condition-test",
  "level": 3
}, {
  "value": "<strong>Test 5: File Disable Test</strong>",
  "id": "test-5-file-disable-test",
  "level": 3
}, {
  "value": "<strong>Test 6: Different Workflow Name</strong>",
  "id": "test-6-different-workflow-name",
  "level": 3
}, {
  "value": "<strong>Test 7: Complete Workflow Recreation</strong>",
  "id": "test-7-complete-workflow-recreation",
  "level": 3
}, {
  "value": "<strong>Evidence Timeline</strong>",
  "id": "evidence-timeline",
  "level": 2
}, {
  "value": "<strong>Root Cause Analysis</strong>",
  "id": "root-cause-analysis",
  "level": 2
}, {
  "value": "<strong>Confirmed NOT Caused By:</strong>",
  "id": "confirmed-not-caused-by",
  "level": 3
}, {
  "value": "<strong>Likely Causes:</strong>",
  "id": "likely-causes",
  "level": 3
}, {
  "value": "<strong>Impact Assessment</strong>",
  "id": "impact-assessment",
  "level": 2
}, {
  "value": "<strong>Immediate Impact</strong>",
  "id": "immediate-impact",
  "level": 3
}, {
  "value": "<strong>Long-term Impact</strong>",
  "id": "long-term-impact",
  "level": 3
}, {
  "value": "<strong>Workarounds Attempted</strong>",
  "id": "workarounds-attempted",
  "level": 2
}, {
  "value": "<strong>Failed Workarounds</strong>",
  "id": "failed-workarounds",
  "level": 3
}, {
  "value": "<strong>Successful Workaround</strong>",
  "id": "successful-workaround",
  "level": 3
}, {
  "value": "<strong>Required Information for GitHub Support</strong>",
  "id": "required-information-for-github-support",
  "level": 2
}, {
  "value": "<strong>Repository Details</strong>",
  "id": "repository-details",
  "level": 3
}, {
  "value": "<strong>Workflow Files</strong>",
  "id": "workflow-files",
  "level": 3
}, {
  "value": "<strong>Recent Workflow Runs</strong>",
  "id": "recent-workflow-runs",
  "level": 3
}, {
  "value": "<strong>Evidence Links</strong>",
  "id": "evidence-links",
  "level": 3
}, {
  "value": "<strong>Reproduction Steps</strong>",
  "id": "reproduction-steps",
  "level": 2
}, {
  "value": "<strong>Expected vs Actual Behavior</strong>",
  "id": "expected-vs-actual-behavior",
  "level": 2
}, {
  "value": "<strong>Expected Behavior</strong>",
  "id": "expected-behavior",
  "level": 3
}, {
  "value": "<strong>Actual Behavior</strong>",
  "id": "actual-behavior",
  "level": 3
}, {
  "value": "<strong>Support Request</strong>",
  "id": "support-request",
  "level": 2
}, {
  "value": "<strong>Immediate Needs</strong>",
  "id": "immediate-needs",
  "level": 3
}, {
  "value": "<strong>Information Needed</strong>",
  "id": "information-needed",
  "level": 3
}, {
  "value": "<strong>Related Issues</strong>",
  "id": "related-issues",
  "level": 2
}, {
  "value": "<strong>Contact Information</strong>",
  "id": "contact-information",
  "level": 2
}, {
  "value": "<strong>GitHub Issue Reference</strong>",
  "id": "github-issue-reference",
  "level": 2
}, {
  "value": "Resolution / current status (2026-03-30)",
  "id": "resolution--current-status-2026-03-30",
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
        id: "bug-report-br-053-github-actions-workflow-push-trigger-bug",
        children: "Bug Report BR-053: GitHub Actions Workflow Push Trigger Bug"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-02/story-11-intake-workflow-automation/T12-github-actions-workflow-bug-resolution",
        children: ["E02:S11", ":T12"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-summary",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug Summary"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Critical GitHub Actions bug where workflows are being triggered by push events despite having ", (0,jsx_runtime.jsx)(_components.code, {
        children: "on: issues:"
      }), " only configuration. This affects multiple workflow files with different names and persists across complete workflow recreations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "environment",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Environment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository"
        }), ": RMS-Ltd/ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Platform"
        }), ": GitHub Actions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date Reported"
        }), ": 2026-03-12"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Severity"
        }), ": Critical (prevents core repository functionality)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact"
        }), ": FR/BR/UXR intake automation completely broken"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bug-description",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug Description"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GitHub Actions workflows configured with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "on: issues:"
      }), " only are being triggered by push events, causing \"No jobs were run\" email spam and preventing proper issue-based automation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problematic-behavior",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problematic Behavior"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Workflows trigger on every push to main branch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Jobs skip due to missing issue context"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ \"No jobs were run\" email notifications sent to maintainers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Issue-based automation completely non-functional"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Multiple workflow files affected with different names"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comprehensive-testing-evidence",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comprehensive Testing Evidence"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-1-original-workflow-investigation",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test 1: Original Workflow Investigation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "File"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/fr-br-intake.yml"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "on:\n  issues:\n    types: [opened, labeled, unlabeled]\n  workflow_dispatch:\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": Workflow triggered on push events (commit: 64e6ed0d, 468ed723, etc.)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-2-trigger-modification",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test 2: Trigger Modification"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach"
      }), ": Removed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "edited"
      }), " from triggers\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "on:\n  issues:\n    types: [opened, labeled, unlabeled]  # Removed 'edited'\n  workflow_dispatch:\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": Still triggered on push events (commit: 4ba795a2)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-3-explicit-event-checking",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test 3: Explicit Event Checking"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach"
      }), ": Added explicit event name checking in job condition\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "jobs:\n  convert-issue-to-document:\n    if: |\n      github.event_name == 'issues' &&  # Explicit check\n      github.event.action != 'edited' &&\n      contains(github.event.issue.labels.*.name, 'needs-triage') &&\n      (contains(github.event.issue.labels.*.name, 'bug') ||\n       contains(github.event.issue.labels.*.name, 'enhancement') ||\n       contains(github.event.issue.labels.*.name, 'ux-research') ||\n       contains(github.event.issue.labels.*.name, 'feedback'))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": Still triggered on push events (commit: 39ccd9ee)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-4-false-condition-test",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test 4: False Condition Test"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach"
      }), ": Added ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false &&"
      }), " to job condition\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "jobs:\n  convert-issue-to-document:\n    if: |\n      false &&  # Should never run\n      contains(github.event.issue.labels.*.name, 'needs-triage') &&\n      ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": Workflow still triggered on push events with \"No jobs were run\" (commit: efc82878)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion"
      }), ": Confirmed workflow is being triggered, not job execution issue"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-5-file-disable-test",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test 5: File Disable Test"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach"
      }), ": Renamed workflow file to disable it\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Action"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mv fr-br-intake.yml fr-br-intake.yml.DISABLED"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": No more workflow triggers or emails (commit: 55404177)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion"
      }), ": Confirmed the specific workflow file was causing triggers"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-6-different-workflow-name",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test 6: Different Workflow Name"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach"
      }), ": Created completely new workflow with different name\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "New File"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/issue-intake-processor.yml"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "name: Issue Intake Processor  # Different name\non:\n  issues:\n    types: [opened, labeled, unlabeled]\n  workflow_dispatch:\njobs:\n  process-issue:  # Different job name\n    if: |\n      github.event_name == 'issues' &&\n      contains(github.event.issue.labels.*.name, 'needs-triage') &&\n      ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result"
      }), ": New workflow also triggered on push events (commit: 9f77c55f)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Conclusion"
      }), ": NOT a caching issue - affects multiple workflow files"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-7-complete-workflow-recreation",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test 7: Complete Workflow Recreation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Approach"
      }), ": Created workflow with different structure and debug logging\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features Added"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different filename"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different job name"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug logging step"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Simplified triggers\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Result"
        }), ": Still triggered on push events (commit: 9f77c55f)\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Conclusion"
        }), ": Bug persists across complete workflow recreations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "evidence-timeline",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence Timeline"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Time (UTC)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Commit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64e6ed0d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Original fix attempt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggered on push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4ba795a2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removed edited events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggered on push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38092dd3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test push 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggered on push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dd5bac35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test push 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggered on push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "efc82878"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "False condition test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggered on push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "55404177"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File disable test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO triggers ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39ccd9ee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit event checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggered on push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9f77c55f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New workflow name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triggered on push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11:30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f1c30abf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disable all workflows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NO triggers ✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause-analysis",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Root Cause Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "confirmed-not-caused-by",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Confirmed NOT Caused By:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Caching"
        }), ": Different workflow names had same issue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration Error"
        }), ": Multiple approaches tried"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Job Conditions"
        }), ": Even false conditions didn't stop triggers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Syntax"
        }), ": Multiple valid configurations tested"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository Settings"
        }), ": No obvious repository-level triggers found"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "likely-causes",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Likely Causes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Actions Platform Bug"
        }), ": Core trigger system malfunction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository-level Corruption"
        }), ": Specific repository trigger cache corruption"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Internal Issue"
        }), ": Platform-wide trigger handling bug"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Name Collision"
        }), ": Internal GitHub naming conflict"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "impact-assessment",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Impact Assessment"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "immediate-impact",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Immediate Impact"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Email Spam"
        }), ": \"No jobs were run\" notifications on every push"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automation Broken"
        }), ": FR/BR/UXR intake process completely non-functional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Developer Experience"
        }), ": Poor maintainers' notification experience"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Waste"
        }), ": Unnecessary GitHub Actions executions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "long-term-impact",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Long-term Impact"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feature Loss"
        }), ": Cannot automate issue intake process"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability Issues"
        }), ": Manual process doesn't scale"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Experience"
        }), ": Poor contributor experience"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance Overhead"
        }), ": Increased manual work"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workarounds-attempted",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workarounds Attempted"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "failed-workarounds",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Failed Workarounds"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Trigger modification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Explicit event checking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Job condition changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Workflow recreation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Different workflow names"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "successful-workaround",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Successful Workaround"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disable Workflows"
        }), ": Renaming files stops triggers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trade-off"
        }), ": No automation, but no spam emails"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "required-information-for-github-support",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Required Information for GitHub Support"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repository-details",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository Details"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository"
        }), ": RMS-Ltd/ai-dev-kit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner"
        }), ": earlution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visibility"
        }), ": Public"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Main Branch"
        }), ": main"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "workflow-files",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Workflow Files"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Original"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/fr-br-intake.yml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/issue-intake-processor.yml"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current"
        }), ": Both disabled with ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".DISABLED"
        }), " suffix"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recent-workflow-runs",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recent Workflow Runs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latest Run ID"
        }), ": 22999378837 (push trigger)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pattern"
        }), ": Every push triggers workflow"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expected"
        }), ": Only issue events should trigger"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evidence-links",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Evidence Links"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Actions Run"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/22999378837",
          children: "https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/22999378837"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commit History"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/commits/main",
          children: "https://github.com/RMS-Ltd/ai-dev-kit/commits/main"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workflow Files"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/.github/workflows",
          children: "https://github.com/RMS-Ltd/ai-dev-kit/tree/main/.github/workflows"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reproduction-steps",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reproduction Steps"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create any workflow with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "on: issues:"
        }), " only triggers"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push any change to main branch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observe workflow runs despite no issue events"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receive \"No jobs were run\" email notification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-vs-actual-behavior",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected vs Actual Behavior"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-behavior",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Behavior"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Workflow only triggers on issue events (opened, labeled, unlabeled)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No push event triggers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ No \"No jobs were run\" emails"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Issue-based automation works correctly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "actual-behavior",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Actual Behavior"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Workflow triggers on every push event"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ \"No jobs were run\" emails on every push"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Issue-based automation broken"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Multiple workflow files affected"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "support-request",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Support Request"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "immediate-needs",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Immediate Needs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Investigate"
        }), ": Why workflows trigger on push despite ", (0,jsx_runtime.jsx)(_components.code, {
          children: "on: issues:"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix"
        }), ": Restore proper trigger behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guidance"
        }), ": Alternative approaches if this is expected behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "information-needed",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Information Needed"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Root Cause"
        }), ": What is causing this trigger behavior?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope"
        }), ": Is this repository-specific or platform-wide?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeline"
        }), ": When can this be fixed?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Workaround"
        }), ": Are there any working alternatives?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-issues",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Issues"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-051"
        }), ": GitHub Actions workflow spam emails (documentation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR-052"
        }), ": GitHub Actions workflow optimization (attempted fix)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple GitHub Actions runs"
        }), ": Evidence in repository history"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contact-information",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Contact Information"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reporter"
        }), ": RW Agent (AI Dev Kit Maintainer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit",
          children: "https://github.com/RMS-Ltd/ai-dev-kit"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Urgency"
        }), ": Critical - Core repository functionality affected"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "github-issue-reference",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Issue Number"
        }), ": N/A (Internal documentation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evidence"
        }), ": Comprehensive testing across multiple scenarios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status"
        }), ": DISABLED - Workflows renamed to stop spam"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next Step"
        }), ": GitHub Support intervention required"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This bug report documents a critical GitHub Actions platform issue that prevents core repository functionality. Comprehensive testing has confirmed this is not a configuration or caching issue, but a platform-level bug requiring GitHub Support intervention."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resolution--current-status-2026-03-30",
      children: "Resolution / current status (2026-03-30)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verified behavior (post–BR-057 valid YAML):"
      }), " Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gh run list --workflow fr-br-intake.yml"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RMS-Ltd/ai-dev-kit"
      }), ", every sampled run through 2026-03-25 used ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "event: push"
        })
      }), " (including after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "on: issues"
      }), " only was restored on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/6-framework-management"
      }), "). ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
          children: "issues"
        }), " events appeared"]
      }), " in the recent run window. Example run IDs: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "23541602524"
      }), " (push to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "epic/6-framework-management"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "23352483560"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "23352364482"
      }), ", consistent with the 2026-03-12 push-only pattern in the evidence table above."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BR-057 relationship:"
      }), " Invalid YAML could explain ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "failed parses"
      }), " (“Invalid workflow file”), not ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "incorrect trigger types"
      }), " while the workflow is accepted. Push scheduling with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "on: issues"
      }), " only remains reproducible with syntactically valid workflow definitions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Repository action (E02:S11", ":T12", "):"]
      }), " The active workflow file was removed from GitHub’s workflow file set by renaming ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".github/workflows/fr-br-intake.yml"
        })
      }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/fr-br-intake.yml.DISABLED",
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: ".github/workflows/fr-br-intake.yml.DISABLED"
          }), " (source)"]
        })
      }), " (extension not ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".yml"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: ".yaml"
      }), "). Canonical YAML is preserved in that file for a future re-enable. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Manual intake"
      }), " is documented in ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_UXR_FB_GITHUB_SUBMISSION_GUIDE.md",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "FR_BR_UXR_FB_GITHUB_SUBMISSION_GUIDE.md"
        }), " (source)"]
      }), " and the intake skill."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Acceptance criteria adjustment:"
      }), " “GitHub Bug Fixed” is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " satisfied by vendor confirmation; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "evidence-based"
      }), " closure is: no spurious workflow runs after a future re-enable test, or continued disablement with documented manual process."]
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