"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["39860"], {
9510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_task_template_system_hybrid_adr_md_03a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-task-template-system-hybrid-adr-md-03a.json
var site_docs_architecture_standards_and_adrs_task_template_system_hybrid_adr_md_03a_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/task-template-system-hybrid-adr","title":"ADR: Hybrid Task Template System (Concrete Templates + Procedural Generation)","description":"Status","source":"@site/../docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/task-template-system-hybrid-adr","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-system-hybrid-adr","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2025-12-22T09:05:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Task Template Generator Design","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-template-generator-design"},"next":{"title":"Task-Touch SemVer Mapping Examples","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/task-touch-mapping-examples"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2025-12-22T09:05:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR: Hybrid Task Template System (Concrete Templates + Procedural Generation)';

const assets = {

};



const toc = [{
  "value": "Status",
  "id": "status",
  "level": 2
}, {
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Rationale",
  "id": "rationale",
  "level": 2
}, {
  "value": "Why not fully manual?",
  "id": "why-not-fully-manual",
  "level": 3
}, {
  "value": "Why not fully procedural from day one?",
  "id": "why-not-fully-procedural-from-day-one",
  "level": 3
}, {
  "value": "Why hybrid?",
  "id": "why-hybrid",
  "level": 3
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Positive",
  "id": "positive",
  "level": 3
}, {
  "value": "Negative / Risks",
  "id": "negative--risks",
  "level": 3
}, {
  "value": "Implementation Sketch",
  "id": "implementation-sketch",
  "level": 2
}, {
  "value": "Scope",
  "id": "scope",
  "level": 3
}, {
  "value": "Key Work Items",
  "id": "key-work-items",
  "level": 3
}, {
  "value": "Alternatives Considered",
  "id": "alternatives-considered",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "adr-hybrid-task-template-system-concrete-templates--procedural-generation",
        children: "ADR: Hybrid Task Template System (Concrete Templates + Procedural Generation)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " Accepted"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Date:"
        }), " 2025-12-22"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implemented:"
        }), " v0.4.15.5+1 (E04:S15", ":T05", ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ai-dev-kit Kanban framework provides a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "canonical Epics/Stories/Tasks (E/S/T) structure"
      }), " via:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Concrete epic and story templates under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/kanban/templates/epics/"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".../stories/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For tasks, the current approach (E4:S06", ":T04", " – Create task template files for each typical task) has:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "~196 concrete task templates"
        }), " created out of ~300+ expected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disk footprint:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/templates/tasks"
            }), ": ~796KB uncompressed"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compressed (tar.gz): ~96KB"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time investment so far:"
        }), " on the order of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dozens of hours"
        }), " to author high-quality, contextual templates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remaining work:"
        }), " ~100+ templates to reach full coverage"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Benefits of concrete task templates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rich, human-authored guidance (scope, inputs, deliverables, acceptance criteria, approach)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consistent structure based on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TASK_TEMPLATE.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immediate usability for adopting projects (copy/contextualize)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Concerns:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time cost:"
        }), " Manual authoring of hundreds of templates is expensive (already high sunk cost, more work remaining)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance cost:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Structural changes (e.g., adding a required section) would require editing every template."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Content changes (e.g., standardizing acceptance criteria patterns) are tedious to roll out."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distribution footprint:"
        }), " While current disk usage is modest, distributing fully expanded templates to all consumers is unnecessary if they can be generated."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We also have a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single canonical structure document"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
      }), ") that already encodes:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All canonical epics and stories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All typical tasks (IDs and short descriptions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This suggests a strong opportunity for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "procedural generation"
      }), " of task templates at client side, using the structure document plus a small amount of generation logic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We will adopt a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hybrid task template system"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complete the existing concrete task templates"
          }), " to a high-quality, stable standard."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Finish E4:S06", ":T04", " so that all canonical tasks have first-class, human-authored templates."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Treat this concrete set as the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "reference implementation and validation corpus"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Introduce a procedural task template generator"
          }), " for future evolution and distribution."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Implement a generator that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Reads ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
                }), " (and any successor structure docs)."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "TASK_TEMPLATE.md"
                }), " as the structural template."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Emits per-task ", (0,jsx_runtime.jsx)(_components.code, {
                  children: ".md"
                }), " files following the canonical paths under ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "templates/tasks/Epic-\\{n\\}/Story-{m}/T{xx}-*.md"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Make the generator suitable for:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Client-side generation"
                }), " in adopting projects."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "Framework maintenance"
                }), " (regenerating the reference templates if/when structure changes)."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use the concrete templates as the “golden set” for validation and feedback."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Procedurally generated templates will be ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "diffed and validated"
            }), " against the existing concrete templates for:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Structural correctness (sections, headings, frontmatter)"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Placeholder usage"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Consistency of task IDs and naming"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Feedback from using the concrete templates in real work (FR/BRs, PIRs, UKW) will be folded into:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "The canonical structure document"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "The generator’s patterns and defaults"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Long-term source of truth:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Canonical structure and semantics"
            }), " live in the structure document(s) and generator code."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The concrete templates remain:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "shipping reference set"
                }), " for the Kanban framework package."]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "A regression/validation corpus for the generator."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rationale",
      children: "Rationale"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-not-fully-manual",
      children: "Why not fully manual?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Manual approach:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pros:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Maximum human nuance and curation per template."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "No tooling needed."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Cons:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "High up-front time cost (~60+ hours total for 300+ templates)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "High maintenance cost for cross-cutting changes."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Hard to keep all templates in sync with evolving canonical patterns."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given the size and complexity of the canonical E/S/T set, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "manual-only"
      }), " is not sustainable for long-term evolution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-not-fully-procedural-from-day-one",
      children: "Why not fully procedural from day one?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Procedural-only approach:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pros:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Very small footprint (structure + generator)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Cheap to regenerate after changes."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Cons:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Harder to guarantee high-quality, nuanced content without a strong reference set."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Easy to end up with generic, low-value templates if not carefully curated."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We already have ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "significant investment in high-quality concrete templates"
      }), ". Using them purely as generated output would throw away the value of that work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-hybrid",
      children: "Why hybrid?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The hybrid strategy provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Short term:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A complete, high-quality template set for all canonical tasks."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Immediate value for adopters."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium/long term:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["A generator that:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Encodes patterns learned from the concrete templates."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Can regenerate or extend the set cheaply."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A single, canonical structure document as the semantic SoT."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This balances:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quality:"
        }), " Preserve and leverage human-authored templates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibility:"
        }), " Regenerate and evolve cheaply."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traceability:"
        }), " Clear mapping from structure → generator → templates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reduced maintenance cost:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Structural changes can be implemented in the structure doc and generator, then regenerated across all tasks."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cross-cutting improvements (e.g., updated acceptance-criteria patterns) can be propagated automatically."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Smaller distribution footprint (for clients):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Clients can choose:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Use the pre-generated templates (as today), or"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Run the generator on their side from a small structure + script."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Better alignment with canonical structure:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The generator enforces consistency between the structure document and the template files."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Feedback loop:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Real-world usage feedback on concrete templates directly informs improvements in:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Structure document"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Generator heuristics"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative--risks",
      children: "Negative / Risks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Generator correctness risk:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bugs in the generator could create malformed or inconsistent templates."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mitigation: validate against the existing concrete “golden” templates; add tests."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dual maintenance during transition:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For some period, we will maintain:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Concrete templates."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Generator code."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Structure document."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mitigation: define a clear ownership and migration plan; once the generator is validated, treat generated output as canonical for new changes."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity overhead:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adds a tool and some cognitive load for contributors."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mitigation: keep the generator small, well-documented, and close to the templates."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-sketch",
      children: "Implementation Sketch"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scope",
      children: "Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This ADR is implemented via:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New Feature Request:"
        }), " Procedural task template generation for the Kanban framework (FR-029)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "New Kanban Story:"
        }), " Under Epic 4 (Kanban Framework), covering:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Generator implementation."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validation against existing concrete templates."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration into the Kanban framework docs and distribution story."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-work-items",
      children: "Key Work Items"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Complete remaining concrete templates (E4:S06", ":T04", ")."]
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Finish ~100+ missing task templates using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TASK_TEMPLATE.md"
            }), " and the structure doc."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure consistent naming and folder structure."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Design and implement the generator."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Likely location: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "packages/frameworks/kanban/scripts/generate_task_templates.py"
            }), " (or similar)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Inputs:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "TASK_TEMPLATE.md"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Outputs:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Task template files under ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "templates/tasks/Epic-\\{n\\}/Story-{m}/T{xx}-*.md"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation and tests."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Diff generated templates against existing concrete templates (by path and structure)."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Add basic tests to:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Ensure all canonical tasks from the structure doc have a generated template."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Ensure task IDs, titles, and file paths are consistent."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Documentation."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Update Kanban framework README and relevant docs to:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Explain the hybrid strategy."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Show how to run the generator (for framework maintainers and clients)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Clarify canonical SoT (structure + generator) vs reference templates."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alternatives-considered",
      children: "Alternatives Considered"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Keep only concrete templates (no generator)."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rejected due to long-term maintenance and evolution cost."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Procedural-only templates (remove concrete templates)."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rejected for now; we want to preserve and learn from high-quality human-authored content."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "On-demand generation only in clients (no reference templates in repo)."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rejected for now; the ai-dev-kit repo should keep a canonical reference implementation that tools and docs can point to."
          }), "\n"]
        }), "\n"]
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