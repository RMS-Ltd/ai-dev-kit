"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["50771"], {
37605(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_doc_init_migration_guide_md_dec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-doc-init-migration-guide-md-dec.json
var site_docs_architecture_standards_and_adrs_doc_init_migration_guide_md_dec_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/doc-init-migration-guide","title":"Doc-Init (+0) Migration Guide for Existing Projects","description":"Status: Draft","source":"@site/../docs/architecture/standards-and-adrs/doc-init-migration-guide.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/doc-init-migration-guide","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/doc-init-migration-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/doc-init-migration-guide.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-12T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"dev-kit-versioning-policy","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/dev-kit-versioning-policy"},"next":{"title":"Document Lifecycle Metadata Specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/doc-init-migration-guide.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-12T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Doc-Init (+0) Migration Guide for Existing Projects';

const assets = {

};



const toc = [{
  "value": "1. Overview",
  "id": "1-overview",
  "level": 2
}, {
  "value": "2. Preconditions",
  "id": "2-preconditions",
  "level": 2
}, {
  "value": "3. Migration Strategy (High-Level)",
  "id": "3-migration-strategy-high-level",
  "level": 2
}, {
  "value": "4. Concrete Migration Steps",
  "id": "4-concrete-migration-steps",
  "level": 2
}, {
  "value": "Step 1: Verify Prerequisites",
  "id": "step-1-verify-prerequisites",
  "level": 3
}, {
  "value": "Step 2: Configure RW for Doc-Init",
  "id": "step-2-configure-rw-for-doc-init",
  "level": 3
}, {
  "value": "Step 3: Start Using Doc-Init for New E/S/T",
  "id": "step-3-start-using-doc-init-for-new-est",
  "level": 3
}, {
  "value": "Step 4: Do <em>Not</em> Re-anchor Existing Work",
  "id": "step-4-do-not-re-anchor-existing-work",
  "level": 3
}, {
  "value": "5. Testing Checklist (Doc-Init)",
  "id": "5-testing-checklist-doc-init",
  "level": 2
}, {
  "value": "A. New E/S/T Doc-init Scenarios",
  "id": "a-new-est-doc-init-scenarios",
  "level": 3
}, {
  "value": "B. Docs-Only Enforcement",
  "id": "b-docs-only-enforcement",
  "level": 3
}, {
  "value": "C. Functional Builds After Doc-Init",
  "id": "c-functional-builds-after-doc-init",
  "level": 3
}, {
  "value": "D. Edge Cases",
  "id": "d-edge-cases",
  "level": 3
}, {
  "value": "6. Changelog &amp; Policy Alignment",
  "id": "6-changelog--policy-alignment",
  "level": 2
}, {
  "value": "7. Migration Anti-Patterns",
  "id": "7-migration-anti-patterns",
  "level": 2
}, {
  "value": "8. References",
  "id": "8-references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
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
        id: "doc-init-0-migration-guide-for-existing-projects",
        children: "Doc-Init (+0) Migration Guide for Existing Projects"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 0.1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2025-12-12", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Epic:"
      }), " Epic 2 - Workflow Management", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Story:"
      }), " E2", ":S10", " - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " FR-017, FR-018, FR-020, E2", ":S09", ", E4", ":S11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-overview",
      children: "1. Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This guide describes how to migrate an existing project to use ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["doc-init builds (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), ")"]
      }), " for new Epic/Story/Task (E/S/T) documentation while maintaining compatibility with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RC.EPIC.STORY.TASK+BUILD"
      }), " versioning scheme."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Doc-init builds establish a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forensic version anchor"
      }), " for E/S/T documentation in an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abstract space"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "+0"
      }), ") before any functional work begins."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-preconditions",
      children: "2. Preconditions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before enabling doc-init in an existing project:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Kanban Granularity (FR-016 / E4", ":S11", " / E2", ":S09", ")"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Discrete Task documents exist (separate file or delimited section)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Release Workflow (RW) Step 1/2 can locate Task docs reliably"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Versioning Policy Updates (E2:S10", ":T04", ")"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Project adopts the updated dev-kit versioning policy:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "+0"
                }), " for doc-init builds"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "+1"
                }), " or higher for functional work"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["RW & Validator Updates (E2:S10", ":T01", "/T02/T05/T06)"]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW Step 2 supports doc-init path"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Validators understand doc-init + abstract space (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+0"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RW docs include doc-init logic and examples"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-migration-strategy-high-level",
      children: "3. Migration Strategy (High-Level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Adopt Versioning Policy Changes"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Align your project’s versioning with dev-kit policy (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Ensure BUILD semantics match:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "+0"
                }), " → doc-init (docs-only, first-time E/S/T doc)"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "+1"
                }), "+ → functional work"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Enable Doc-Init Path in RW"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use updated RW Step 2 behavior:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["New E/S/T doc + docs-only changes → ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+0"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Subsequent functional changes → ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+1"
                }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+2"
                }), ", ..."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Introduce Doc-Init for New E/S/T Docs Only"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " retroactively re-anchor existing E/S/T docs"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use doc-init for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "new"
            }), " Epics/Stories/Tasks going forward"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Changelog Practices"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Document doc-init releases clearly in main + detailed changelog"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "📋 Doc Init:"
            }), " entries in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-concrete-migration-steps",
      children: "4. Concrete Migration Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-verify-prerequisites",
      children: "Step 1: Verify Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "E/S/T docs follow discrete Task doc pattern (FR-016)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "E2", ":S09", " integration work is adopted (Task doc presence in RW)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dev-kit versioning policy docs are in effect for your project"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW scripts updated to include:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Doc-init detection (Step 2)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Doc-init validation (", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_version_bump.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "validate_branch_context.py"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-configure-rw-for-doc-init",
      children: "Step 2: Configure RW for Doc-Init"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "RW Step 2 (Bump Version):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Ensure agent follows updated Step 2 procedure (E2:S10", ":T01", ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Doc-init detection logic:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "New E/S/T doc file or new delimited Task section"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "No prior version for that E/S/T"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Docs-only changes in diff"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validators:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["BUILD=0 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be docs-only"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["BUILD=0 → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "must"
            }), " be first-time E/S/T doc"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BUILD>=1 → functional work; doc-init checks do not apply"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-start-using-doc-init-for-new-est",
      children: "Step 3: Start Using Doc-Init for New E/S/T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "new"
      }), " work going forward:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create new E/S/T documentation via Kanban templates"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run RW for that Task:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["RW Step 2 should emit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+0"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validators must pass docs-only checks"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document the release as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Doc Init"
        }), " in changelog."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["New Story ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E2:S11:T00"
        }), " doc created → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.11.0+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["First functional change for that Story → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0.2.11.0+1"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "step-4-do-not-re-anchor-existing-work",
      children: ["Step 4: Do ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Not"
      }), " Re-anchor Existing Work"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For existing E/S/T docs already in use:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not"
        }), " attempt to backfill doc-init builds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Continue using normal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+1"
        }), "+ functional increments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Doc-init is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "forward-looking"
        }), " and used only for new E/S/T anchors"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-testing-checklist-doc-init",
      children: "5. Testing Checklist (Doc-Init)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use this checklist when validating your doc-init migration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-new-est-doc-init-scenarios",
      children: "A. New E/S/T Doc-init Scenarios"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "New Epic doc → RW run → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.0.0+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "New Story doc under existing Epic → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.0+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "New Task doc under existing Story → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RC.EPIC.STORY.TASK+0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW validators pass when only docs are changed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "b-docs-only-enforcement",
      children: "B. Docs-Only Enforcement"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Add non-doc change (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".py"
        }), " file) during ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " run"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Run RW → validator ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "must fail"
        }), " with clear message listing offending files"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-functional-builds-after-doc-init",
      children: "C. Functional Builds After Doc-Init"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Make first functional change linked to doc-init Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "RW emits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+1"
        }), " for that Task"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validators do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " treat this as doc-init; normal rules apply"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "d-edge-cases",
      children: "D. Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Multiple new E/S/T docs in single RW run", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "At least: new Story + new Task"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate behavior and audit changelog entries"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Doc-init outside canonical RW context (if applicable)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validate that tooling either blocks or clearly warns"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-changelog--policy-alignment",
      children: "6. Changelog & Policy Alignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When migrating:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Changelogs"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "📋 Doc Init: E\\{epic\\}:S\\{story\\}:T\\{task\\} - [Description]"
            }), " for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+0"
            }), " entries in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG.md"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In detailed changelog archive (", (0,jsx_runtime.jsx)(_components.code, {
              children: "CHANGELOG_vX.Y.Z.T+0.md"
            }), "), include:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "**Build Type:** Doc-Init (+0)"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "**Type:** 📋 Doc Init"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Policy Documents"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Ensure the following docs are consistent with doc-init behavior:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Dev-kit versioning policy"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Framework versioning policy"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "RW Agent Execution Guide"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Kanban governance policy"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Documentation maintenance / lifecycle policies"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-migration-anti-patterns",
      children: "7. Migration Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Avoid these:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Backfilling fake doc-init releases for old tasks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Mixing doc-init (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), ") and functional changes in the same RW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+0"
        }), " for anything other than first-time E/S/T doc creation"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Skipping Task docs (FR-016 still applies)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-references",
      children: "8. References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["E2", ":S10", " Story:"]
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/project-management/kanban/epics/epic-02/story-10-doc-init-build-zero-for-new-est.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-017:"
        }), " Doc-Init Build (+0) for New E/S/T"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-018:"
        }), " Abstract Space for Zero-Numbered E/S/T Docs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-020:"
        }), " Version Validator Abstract Space Awareness"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy (Dev-Kit):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Versioning Policy (Framework):"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/versioning-policy.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW Agent Execution Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Changelog Implementation Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/numbering-versioning/IMPLEMENTATION_GUIDE.md"
        })]
      }), "\n"]
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