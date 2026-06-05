"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["56213"], {
42631(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_mixed_br_fr_scope_sop_md_024_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-mixed-br-fr-scope-sop-md-024.json
var site_docs_architecture_standards_and_adrs_mixed_br_fr_scope_sop_md_024_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/mixed-br-fr-scope-sop","title":"Standard Operating Procedure: Handling Mixed BR/FR Scope","description":"Version: 1.0","source":"@site/../docs/architecture/standards-and-adrs/mixed-br-fr-scope-sop.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/mixed-br-fr-scope-sop","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/mixed-br-fr-scope-sop","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/mixed-br-fr-scope-sop.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-16T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Maintenance Workflow Processes","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/maintenance-workflow-processes"},"next":{"title":"Package Hash Verification Specification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/package-hash-verification-spec"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/mixed-br-fr-scope-sop.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-16T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Standard Operating Procedure: Handling Mixed BR/FR Scope';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Definitions",
  "id": "definitions",
  "level": 2
}, {
  "value": "Bug Report (BR)",
  "id": "bug-report-br",
  "level": 3
}, {
  "value": "Feature Request (FR)",
  "id": "feature-request-fr",
  "level": 3
}, {
  "value": "When to Split Mixed-Scope Documents",
  "id": "when-to-split-mixed-scope-documents",
  "level": 2
}, {
  "value": "Split When:",
  "id": "split-when",
  "level": 3
}, {
  "value": "Keep Combined When:",
  "id": "keep-combined-when",
  "level": 3
}, {
  "value": "SoP Procedure: Handling Mixed-Scope Documents",
  "id": "sop-procedure-handling-mixed-scope-documents",
  "level": 2
}, {
  "value": "Step 1: Initial Classification &amp; Triage",
  "id": "step-1-initial-classification--triage",
  "level": 3
}, {
  "value": "Step 2: Split into Separate Documents",
  "id": "step-2-split-into-separate-documents",
  "level": 3
}, {
  "value": "Step 3: Update Original Document (if exists)",
  "id": "step-3-update-original-document-if-exists",
  "level": 3
}, {
  "value": "Step 4: Independent Prioritization",
  "id": "step-4-independent-prioritization",
  "level": 3
}, {
  "value": "Step 5: Documentation &amp; Communication",
  "id": "step-5-documentation--communication",
  "level": 3
}, {
  "value": "Why Split Mixed-Scope Documents?",
  "id": "why-split-mixed-scope-documents",
  "level": 2
}, {
  "value": "Benefits:",
  "id": "benefits",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: BR-033 and FR-034",
  "id": "example-1-br-033-and-fr-034",
  "level": 3
}, {
  "value": "Example 2: BR-006 and FR-007",
  "id": "example-2-br-006-and-fr-007",
  "level": 3
}, {
  "value": "Decision Tree",
  "id": "decision-tree",
  "level": 2
}, {
  "value": "Roles &amp; Responsibilities",
  "id": "roles--responsibilities",
  "level": 2
}, {
  "value": "Triage Owner",
  "id": "triage-owner",
  "level": 3
}, {
  "value": "QA/Engineering",
  "id": "qaengineering",
  "level": 3
}, {
  "value": "Product/UX",
  "id": "productux",
  "level": 3
}, {
  "value": "Project Manager",
  "id": "project-manager",
  "level": 3
}, {
  "value": "Review &amp; Maintenance",
  "id": "review--maintenance",
  "level": 2
}, {
  "value": "Periodic Review",
  "id": "periodic-review",
  "level": 3
}, {
  "value": "SoP Updates",
  "id": "sop-updates",
  "level": 3
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Notes",
  "id": "notes",
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
        id: "standard-operating-procedure-handling-mixed-brfr-scope",
        children: "Standard Operating Procedure: Handling Mixed BR/FR Scope"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Version:"
      }), " 1.0", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-01-16", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework:"
      }), " Kanban Framework", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FR_BR_INTAKE_GUIDE.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BR_TEMPLATE.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FR_TEMPLATE.md"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This SoP defines the standard procedure for handling documents or tickets that contain both Bug Report (BR) and Feature Request (FR) scope. It ensures clear separation of concerns, proper prioritization, and maintainable traceability."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Principle:"
      }), " When a document contains both bug and feature request content, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "split them into separate documents"
      }), " and link them for traceability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "definitions",
      children: "Definitions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bug-report-br",
      children: "Bug Report (BR)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bug"
      }), " is when software doesn't behave as intended, documented, or previously working. It represents:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Unexpected behavior or malfunction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deviation from specification or requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Regression from previously working state"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Violation of expected behavior"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does it contradict a specification?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Was it working previously?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is there an expectation that isn't being met?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feature-request-fr",
      children: "Feature Request (FR)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "feature request"
      }), " is a proposal for new functionality or a change to existing behavior. It represents:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Desired new capability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improvement or enhancement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Change to intended behavior (not a defect)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functionality that was never intended or supported"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Criteria:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is it about adding new functionality?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is it about changing existing behavior in a way that wasn't previously defined?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Was it a conscious design decision?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-split-mixed-scope-documents",
      children: "When to Split Mixed-Scope Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "split-when",
      children: "Split When:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document contains ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "both"
        }), " bug description ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "and"
        }), " feature/enhancement suggestions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document describes a bug ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "plus"
        }), " recommendations for improvements"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document mixes \"what's broken\" with \"what should be added\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document has unclear scope that spans both bug fix and new functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keep-combined-when",
      children: "Keep Combined When:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document is clearly ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only"
        }), " a bug (even if fix requires new functionality)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Document is clearly ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only"
        }), " a feature request (even if it addresses a perceived gap)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Enhancement is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "directly required"
        }), " to fix the bug (then it's part of the bug fix)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sop-procedure-handling-mixed-scope-documents",
      children: "SoP Procedure: Handling Mixed-Scope Documents"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-initial-classification--triage",
      children: "Step 1: Initial Classification & Triage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Review the document and classify each component:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Identify Bug Components:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Unexpected behavior"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deviation from specification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Regression"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Steps to reproduce"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Expected vs actual behavior"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Identify Feature Request Components:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "New functionality requests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Enhancement suggestions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Improvement recommendations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Desired behavior changes"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Decision Point:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "only bugs"
            }), " → Keep as BR"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "only features"
            }), " → Keep as FR"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "both present"
            }), " → Proceed to Step 2 (Split)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-split-into-separate-documents",
      children: "Step 2: Split into Separate Documents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Create separate BR and FR documents:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Bug Report (BR):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus on the bug/issue description"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include: steps to reproduce, expected vs actual behavior, impact"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove feature request content"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference the related FR in \"Related Work\" section"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create Feature Request (FR):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus on the enhancement/improvement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Include: use cases, value proposition, acceptance criteria"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Remove bug description content"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reference the related BR in \"Related Work\" section"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintain Traceability:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link BR → FR in \"Related Work\" section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Link FR → BR in \"Related Work\" section"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use clear language: \"This FR addresses enhancements identified during BR-XXX triage\""
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-update-original-document-if-exists",
      children: "Step 3: Update Original Document (if exists)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " If splitting from an existing document:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Original:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If original was BR → Keep BR content, remove FR content, add link to new FR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If original was FR → Keep FR content, remove BR content, add link to new BR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Add note: \"Split per SoP: BR content → BR-XXX, FR content → FR-XXX\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Archive or Update Status:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mark original as \"SPLIT\" or \"SUPERSEDED\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Or update original to focus on one scope (BR or FR) and reference the split document"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-independent-prioritization",
      children: "Step 4: Independent Prioritization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Prioritize BR and FR separately:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bug Report Prioritization:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Criteria: Severity, user impact, workaround availability, technical debt, risk"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Process: Triage → Assignment → Fix → Verification"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ownership: QA/Engineering"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Feature Request Prioritization:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Criteria: Value, ROI, alignment with roadmap, effort, strategic importance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Process: Backlog grooming → Specification → Planning → Implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ownership: Product/UX"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Independent Tracks:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bugs may be reprioritized dynamically (urgent fixes)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Features follow formal backlog grooming process"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Don't let feature content delay urgent bug fixes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-5-documentation--communication",
      children: "Step 5: Documentation & Communication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Action:"
      }), " Ensure clear documentation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Related Work Sections:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BR document: Link to related FR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "FR document: Link to related BR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use format: \"Related FR: FR-XXX - [Title]\" or \"Related BR: BR-XXX - [Title]\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Maintain Context:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Explain relationship: \"This FR was identified during triage of BR-XXX\""
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Or: \"This BR revealed the need for enhancement documented in FR-XXX\""
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update Intake Status:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mark both documents as \"ACCEPTED\" if appropriate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Or mark appropriately based on prioritization"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-split-mixed-scope-documents",
      children: "Why Split Mixed-Scope Documents?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "benefits",
      children: "Benefits:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clarity & Traceability:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Easier to track bug fixes vs roadmap features"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear ownership and responsibility"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Better reporting and metrics"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prioritization Efficiency:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bugs often have higher urgency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mixed tickets can delay urgent bug fixes"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Features require different evaluation criteria"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Specialization of Roles:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "QA/Engineering handles bugs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Product/UX handles features"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear separation aligns responsibilities"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reporting & Metrics:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Accurate bug fix rates"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Clear backlog size tracking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Better user satisfaction metrics"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prevents Feature Creep:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bug fixes stay focused on fixing bugs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Features are evaluated on their own merit"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Avoids scope expansion during bug fixes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-br-033-and-fr-034",
      children: "Example 1: BR-033 and FR-034"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Original Situation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document contained: Epic ordering bug + missing priorities bug + granular control enhancements"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Split Result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BR-033:"
          }), " ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-033-ukw-board-disorganization",
            children: "UKW Board Disorganization"
          }), " (original mixed-scope document was titled \"UKW Disorganization and Priority Assignment\")"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus: Epic ordering bug (Issue 1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus: Missing priority assignment bug (Issue 2)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Related: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags",
              children: "FR-034"
            }), " (enhancements for Issue 3)"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-034:"
          }), " ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags",
            children: "UKW Granular Control and Use Case Flags"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Focus: Use case flags (", (0,jsx_runtime.jsx)(_components.code, {
              children: "-u"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus: Syntax parser for flexible task targeting"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus: Modular workflow execution"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Related: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-033-ukw-board-disorganization",
              children: "BR-033"
            }), " (identified during bug triage)"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-br-006-and-fr-007",
      children: "Example 2: BR-006 and FR-007"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Original Situation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document identified migration support gap (bug) and proposed migration utilities (feature)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Split Result:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "BR-006:"
          }), " Missing Migration Support for Pre-Existing Kanban Structures"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus: Migration gap issue"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related: FR-007"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "FR-007:"
          }), " Migration Utilities and Installation Modes"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Focus: Migration tooling and utilities"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related: BR-006"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-tree",
      children: "Decision Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Document Submitted\n    ↓\nDoes it contain BOTH bug AND feature content?\n    ├─ NO → Classify as BR or FR, proceed normally\n    └─ YES → Split into separate documents\n            ↓\n        Create BR document (bug content)\n        Create FR document (feature content)\n            ↓\n        Link BR → FR in \"Related Work\"\n        Link FR → BR in \"Related Work\"\n            ↓\n        Prioritize BR independently (bug criteria)\n        Prioritize FR independently (feature criteria)\n            ↓\n        Assign BR to QA/Engineering\n        Assign FR to Product/UX\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "roles--responsibilities",
      children: "Roles & Responsibilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "triage-owner",
      children: "Triage Owner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Responsibility:"
        }), " Initial classification and split decision"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Review document, identify mixed scope, execute split procedure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "qaengineering",
      children: "QA/Engineering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Responsibility:"
        }), " Bug Report ownership"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Fix bugs, verify fixes, update BR status"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "productux",
      children: "Product/UX"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Responsibility:"
        }), " Feature Request ownership"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Specify features, prioritize in backlog, plan implementation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-manager",
      children: "Project Manager"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Responsibility:"
        }), " Ensure proper linking and traceability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Action:"
        }), " Verify related work sections, maintain documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "review--maintenance",
      children: "Review & Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "periodic-review",
      children: "Periodic Review"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review older mixed tickets to ensure proper classification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Some FRs may retroactively reveal bugs (or vice versa)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update links if relationships change"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sop-updates",
      children: "SoP Updates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review definitions if product/spec changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update decision criteria based on team feedback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document exceptions and learnings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR/BR Intake Guide:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "BR Template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/BR_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR Template:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/FR_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " BR-033 and FR-034 (UKW disorganization and granular control)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BR-033:"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/BR-033-ukw-board-disorganization",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/project-management/kanban/fr-br/BR-033-ukw-board-disorganization.md"
              })
            }), " (original mixed-scope document was titled \"UKW Disorganization and Priority Assignment\")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "FR-034:"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "docs/project-management/kanban/fr-br/FR-034-ukw-granular-control-and-use-case-flags.md"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Example:"
        }), " BR-006 and FR-007 (Migration support and utilities)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Best Practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Based on guidance from software development best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aligns with Agile/Scrum separation of bug fixes and features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports clear ownership and accountability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enables accurate metrics and reporting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Framework Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works with existing FR/BR intake workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintains Kanban traceability requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports bidirectional linking principle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compatible with versioning and release workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.em, {
        children: ["This SoP is part of the Kanban Framework. See ", (0,jsx_runtime.jsx)(_components.code, {
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