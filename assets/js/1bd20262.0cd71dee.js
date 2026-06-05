"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["25143"], {
32614(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_repository_story_migration_plan_md_1bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-repository-story-migration-plan-md-1bd.json
var site_docs_architecture_standards_and_adrs_repository_story_migration_plan_md_1bd_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/repository-story-migration-plan","title":"Repository Story Migration Plan","description":"Status: IN PROGRESS","source":"@site/../docs/architecture/standards-and-adrs/repository-story-migration-plan.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/repository-story-migration-plan","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/repository-story-migration-plan","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/repository-story-migration-plan.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-16T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Solution Design: Repository Story Abstract Space Resolution","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/repository-story-abstract-space-solution-design"},"next":{"title":"Repository Story Abstract Space Resolution - Migration Progress","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/repository-story-migration-progress"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/repository-story-migration-plan.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-16T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Repository Story Migration Plan';

const assets = {

};



const toc = [{
  "value": "Executive Summary",
  "id": "executive-summary",
  "level": 2
}, {
  "value": "Migration Strategy",
  "id": "migration-strategy",
  "level": 2
}, {
  "value": "Phase 1: Story Renumbering (Free S01)",
  "id": "phase-1-story-renumbering-free-s01",
  "level": 3
}, {
  "value": "Phase 2: Create Repository Stories (S01)",
  "id": "phase-2-create-repository-stories-s01",
  "level": 3
}, {
  "value": "Phase 3: Migrate Repository Tasks",
  "id": "phase-3-migrate-repository-tasks",
  "level": 3
}, {
  "value": "Phase 4: Migrate Perpetual Tasks",
  "id": "phase-4-migrate-perpetual-tasks",
  "level": 3
}, {
  "value": "Phase 5: Update Abstract Spaces",
  "id": "phase-5-update-abstract-spaces",
  "level": 3
}, {
  "value": "Detailed Migration Steps",
  "id": "detailed-migration-steps",
  "level": 2
}, {
  "value": "Step 1: Renumber Epic 5 Stories (S01-S07 → S02-S08)",
  "id": "step-1-renumber-epic-5-stories-s01-s07--s02-s08",
  "level": 3
}, {
  "value": "Step 2: Renumber Epic 6 Stories (S01-S07 → S02-S08)",
  "id": "step-2-renumber-epic-6-stories-s01-s07--s02-s08",
  "level": 3
}, {
  "value": "Step 3: Create E5 (FR Repo)",
  "id": "step-3-create-e5-fr-repo",
  "level": 3
}, {
  "value": "Step 4: Migrate E5 Tasks to E5",
  "id": "step-4-migrate-e5-tasks-to-e5",
  "level": 3
}, {
  "value": "Step 5: Update S00 to Abstract Space Only",
  "id": "step-5-update-s00-to-abstract-space-only",
  "level": 3
}, {
  "value": "Step 6: Migrate Perpetual Tasks (T08, T12 → T101, T102)",
  "id": "step-6-migrate-perpetual-tasks-t08-t12--t101-t102",
  "level": 3
}, {
  "value": "Risk Assessment",
  "id": "risk-assessment",
  "level": 2
}, {
  "value": "Validation Checklist",
  "id": "validation-checklist",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "repository-story-migration-plan",
        children: "Repository Story Migration Plan"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " IN PROGRESS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last updated:"
      }), " 2026-01-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Work:"
      }), " E9:S01", ":T08", " (Repository Story Abstract Space Contradiction)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " v0.9.1.8+1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "executive-summary",
      children: "Executive Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This document provides the detailed migration plan for implementing the repository story abstract space resolution. The migration involves:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Renumbering existing stories"
        }), " to free S01 for repository stories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Creating new repository stories"
        }), " (S01) for FR/BR/UXR repositories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migrating repository tasks"
        }), " from S00 to S01"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Migrating perpetual tasks"
        }), " from T08/T12 to T101/T102"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Updating all references"
        }), " and version numbers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "migration-strategy",
      children: "Migration Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1-story-renumbering-free-s01",
      children: "Phase 1: Story Renumbering (Free S01)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 5:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current: S01-S07 (Documentation Maintenance Framework, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Renumber to: S02-S08"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S01 becomes available for FR Repo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 6:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Current: S01-S07 (Framework Version Management, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Renumber to: S02-S08"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S01 becomes available for BR Repo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic 7:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if S01 is taken"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If taken, renumber similarly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2-create-repository-stories-s01",
      children: "Phase 2: Create Repository Stories (S01)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create E5", ":S01", " (FR Repo) story document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create E6", ":S01", " (BR Repo) story document"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create E7", ":S01", " (UXR Repo) story document (if needed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3-migrate-repository-tasks",
      children: "Phase 3: Migrate Repository Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E5", ":S00", " → E5:S01:"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T31 → T31 (FR-031)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T34 → T34 (FR-034)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T35 → T35 (FR-035)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.0.31+0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.1.31+0"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E6", ":S00", " → E6:S01:"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T33 → T33 (BR-033)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.0.33+0"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.1.33+0"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-4-migrate-perpetual-tasks",
      children: "Phase 4: Migrate Perpetual Tasks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E6:S06:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T08 (UKW) → T101 (UKW)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T12 (CMW) → T102 (CMW)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Versions: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.6.8+21"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.6.6.101+21"
        }), ", etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-5-update-abstract-spaces",
      children: "Phase 5: Update Abstract Spaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S00 becomes Epic-level abstract space only (no tasks)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["S01 gets story-level abstract space (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.X.1.0+0"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detailed-migration-steps",
      children: "Detailed Migration Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-renumber-epic-5-stories-s01-s07--s02-s08",
      children: "Step 1: Renumber Epic 5 Stories (S01-S07 → S02-S08)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Files to Update:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "epic-05.md"
        }), " (Story checklist)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-*.md"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-02-*.md"
        }), " (rename files)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "story-02-*.md"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-03-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "... (continue for all stories)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All task documents in each story directory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All references in FR/BR documents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All changelog entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All version numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version Updates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.1.X+Y"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.2.X+Y"
        }), " (S01 → S02)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.2.X+Y"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.3.X+Y"
        }), " (S02 → S03)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "... (continue for all stories)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-renumber-epic-6-stories-s01-s07--s02-s08",
      children: "Step 2: Renumber Epic 6 Stories (S01-S07 → S02-S08)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Similar process to Epic 5"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "step-3-create-e5-fr-repo",
      children: ["Step 3: Create E5", ":S01", " (FR Repo)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Create new story document:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-fr-repo.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Based on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-00-fr-repo.md"
        }), " but updated for S01"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Abstract space: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.1.0+0"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "step-4-migrate-e5-tasks-to-e5",
      children: ["Step 4: Migrate E5", ":S00", " Tasks to E5", ":S01"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "For each task (T31, T34, T35):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Move task file: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-00-fr-repo/T31-*.md"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "story-01-fr-repo/T31-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task document (Task ID, version references)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update FR document (task ID, version)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog entries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all cross-references"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-update-s00-to-abstract-space-only",
      children: "Step 5: Update S00 to Abstract Space Only"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E5:S00:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remove all task references"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update to abstract space only (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.5.0.0+0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update description to clarify it's Epic-level abstract space"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-6-migrate-perpetual-tasks-t08-t12--t101-t102",
      children: "Step 6: Migrate Perpetual Tasks (T08, T12 → T101, T102)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "E6:S06:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rename task files: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T08-*.md"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T101-*.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update task documents (Task ID, version references)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update story checklist"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update all references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update changelog entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "risk-assessment",
      children: "Risk Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "High Risk:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Story renumbering affects many files and references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Version number updates must be comprehensive"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cross-references must be updated accurately"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mitigation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work systematically, one epic at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update references in batches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate after each phase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use grep to find all references"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validation-checklist",
      children: "Validation Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All stories renumbered correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All task documents updated with new IDs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All version numbers updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All FR/BR documents updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All changelog entries updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All cross-references updated"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "S00 is abstract space only (no tasks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "S01 is repository story (with tasks)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Perpetual tasks in T101+ range"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Versioning system supports 3-digit tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "All validators pass"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This migration plan is part of Epic 9: Release Candidate Readiness, Story 1: RC Readiness Gap Analysis. See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-09/story-01-rc-readiness-gap-analysis",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "story-01-rc-readiness-gap-analysis.md"
          })
        }), " for story context."]
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