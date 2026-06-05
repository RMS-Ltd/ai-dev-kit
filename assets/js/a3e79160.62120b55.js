"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["55560"], {
50668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_005_ollama_model_ecosystem_md_a3e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-005-ollama-model-ecosystem-md-a3e.json
var site_docs_architecture_standards_and_adrs_adr_005_ollama_model_ecosystem_md_a3e_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-005-ollama-model-ecosystem","title":"ADR-005: Ollama Model Ecosystem for Multi-Domain AI Workloads","description":"Status: Accepted","source":"@site/../docs/architecture/standards-and-adrs/ADR-005-ollama-model-ecosystem.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-005-ollama-model-ecosystem","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-005-ollama-model-ecosystem","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-005-ollama-model-ecosystem.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-05-18T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"ADR-004: Mandatory IPP State Transition Steps","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract"},"next":{"title":"ADR-006: Book project private repository spin-off (preferred migration)","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-006-book-project-private-repository-spin-off"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-005-ollama-model-ecosystem.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-05-18T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'ADR-005: Ollama Model Ecosystem for Multi-Domain AI Workloads';

const assets = {

};



const toc = [{
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Decision",
  "id": "decision",
  "level": 2
}, {
  "value": "Cloud Tier (Ollama Pro — 3 Agents)",
  "id": "cloud-tier-ollama-pro--3-agents",
  "level": 3
}, {
  "value": "Local Tier (M1 Pro 16 GB)",
  "id": "local-tier-m1-pro-16-gb",
  "level": 3
}, {
  "value": "Interim Scholar Models (When DeepSeek is Unavailable)",
  "id": "interim-scholar-models-when-deepseek-is-unavailable",
  "level": 3
}, {
  "value": "Local DeepSeek Hosting Guide",
  "id": "local-deepseek-hosting-guide",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "Step 1: Pull the Model",
  "id": "step-1-pull-the-model",
  "level": 3
}, {
  "value": "Step 2: Verify Installation",
  "id": "step-2-verify-installation",
  "level": 3
}, {
  "value": "Step 3: Optimizing for M1 Pro 16 GB",
  "id": "step-3-optimizing-for-m1-pro-16-gb",
  "level": 3
}, {
  "value": "Step 4: Integration with Claude Code Orchestrator",
  "id": "step-4-integration-with-claude-code-orchestrator",
  "level": 3
}, {
  "value": "Available Local DeepSeek Variants",
  "id": "available-local-deepseek-variants",
  "level": 3
}, {
  "value": "Orchestrator Layer",
  "id": "orchestrator-layer",
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
  "value": "Negative / follow-up",
  "id": "negative--follow-up",
  "level": 3
}, {
  "value": "Subscription Stack &amp; Economics",
  "id": "subscription-stack--economics",
  "level": 3
}, {
  "value": "Migration / Onboarding",
  "id": "migration--onboarding",
  "level": 3
}, {
  "value": "Status",
  "id": "status",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        id: "adr-005-ollama-model-ecosystem-for-multi-domain-ai-workloads",
        children: "ADR-005: Ollama Model Ecosystem for Multi-Domain AI Workloads"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Accepted\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-18\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deciders:"
      }), " User (Ruari Mears)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " Cloud-agent orchestration, local on-device inference strategy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The user operates a multi-domain workload spanning software engineering, academic research, podcast production, and book authorship. Available compute:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud:"
        }), " Ollama Pro (3 simultaneous cloud agents)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local:"
        }), " Apple M1 Pro (16 GB unified RAM, ARM architecture with Apple Silicon ML acceleration)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The problem is not model availability (Ollama hosts dozens), but model ", (0,jsx_runtime.jsx)(_components.em, {
        children: "selection"
      }), " and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "assignment"
      }), " — matching each workload to the model whose architecture, context window, and specialization yield the highest utility per token and per second."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three constraints drive the decision:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory ceiling."
        }), " 16 GB unified RAM on M1 Pro implies a practical limit of ~7B–14B dense models at full context, or MoE/quantized models up to ~33B parameters with sparse activation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy boundary."
        }), " Draft academic papers, unpublished book chapters, and early podcast scripts should not leave the device until the author chooses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel throughput."
        }), " Three cloud slots allow concurrent, non-blocking generation (e.g., drafting Chapter 3 while refactoring a module and researching citations)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dual-tier, role-based ecosystem"
      }), ": three dedicated cloud agents, each bound to a single model for a primary role, plus a curated set of local models for offline, low-latency, or privacy-sensitive work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cloud-tier-ollama-pro--3-agents",
      children: "Cloud Tier (Ollama Pro — 3 Agents)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Slot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Projects"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kimi-k2.6"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "The Engineer"
            }), " — long-horizon coding, proactive autonomous execution, swarm-based task orchestration"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vibe-coding framework, Head-First code examples, software architecture"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:122b"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gemma4:31b"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "The Creator"
            }), " — multimodal, general utility, creative writing, brainstorming"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Podcast scripts, non-fiction prose, mixed-media tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-r1:32b"
            }), " (local)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "The Scholar"
            }), " — deep reasoning, research synthesis, citation chains"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Political science paper, book argumentation, long-document review"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale per slot:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "kimi-k2.6"
        }), " is the current state-of-the-art for agentic coding and proactive execution. Its specialization in “coding-driven design” and autonomous tool use matches the agentic-development workflows this project itself produces."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "qwen3.5:122b"
        }), " is the strongest generalist in the Ollama Pro catalog; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gemma4:31b"
        }), " is the fallback if multimodal (image/audio) understanding is required for podcast or book visual assets."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "deepseek-r1:32b"
        }), " (local) offers deep reasoning and chain-of-thought synthesis. DeepSeek models are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not available on Ollama Pro cloud"
        }), " — they must be run locally. The 32B quantized variant fits the 16 GB M1 Pro ceiling while outperforming similarly-sized dense models on structured reasoning tasks."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "local-tier-m1-pro-16-gb",
      children: "Local Tier (M1 Pro 16 GB)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameters"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-r1:32b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32B (Q4_K_M quantized)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "The Scholar"
            }), " — deep reasoning, research synthesis, citation chains. Best local choice for long-document analysis"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "laguna-xs.2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33B total (3B active MoE)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Local coding companion"
            }), " — fast, agentic, memory-efficient. Ideal for “vibe coding” sessions without cloud latency"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "granite4.1"
            }), " (8B)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8B"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Structured tasks"
            }), " — JSON output, RAG, tool use, multilingual. Data pipelines, config generation, automation scripts"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5"
            }), " (7B–14B)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7B–14B"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "General local fallback"
            }), " — quick drafting, summarization, lightweight reasoning when cloud slots are busy"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lfm2.5-thinking"
            }), " (1.2B)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.2B"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Ambient intelligence"
            }), " — ultra-fast tagging, categorization, lightweight on-device decisions"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rationale per model:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "deepseek-r1:32b"
        }), " is a distilled reasoning model optimized for chain-of-thought tasks. At 32B parameters with Q4_K_M quantization it occupies ~20 GB on disk but loads ~19 GB into RAM on Apple Silicon — feasible on a 16 GB M1 Pro with some system memory pressure. It is the best local substitute for cloud deep-reasoning models."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "laguna-xs.2"
        }), " uses a Mixture-of-Experts architecture (33B parameters, 3B active). It delivers quality comparable to much larger dense models while fitting comfortably in 16 GB RAM. The Ollama catalog explicitly positions it for “agentic coding and long-horizon work on a local machine.”"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "granite4.1"
        }), " is IBM’s enterprise-focused family. The 8B variant is explicitly designed for “structured JSON output, tool use, and retrieval-augmented generation” — ideal for automation and data tasks where format fidelity matters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "qwen3.5"
        }), " small variants are the best local generalists. The 14B variant runs at reduced context (8K–16K) on this hardware; the 7B variant runs at full context with headroom."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "lfm2.5-thinking"
        }), " is a hybrid 1.2B model. Its speed makes it suitable for background tasks: auto-tagging, sentiment scoring, routing decisions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interim-scholar-models-when-deepseek-is-unavailable",
      children: "Interim Scholar Models (When DeepSeek is Unavailable)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deepseek-r1:32b"
      }), " is unavailable — whether due to local RAM pressure, model download issues, or API outage — the academic paper and podcast series workloads require temporary fallback assignments for the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scholar"
      }), " role."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Interim"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fallback"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Academic paper: deep reasoning & argument synthesis"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:122b"
            }), " (Cloud Slot 2)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kimi-k2.6"
            }), " (Cloud Slot 1)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporarily reassign a cloud slot. Qwen has the strongest generalist reasoning; Kimi is acceptable if Qwen is busy."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Academic paper: citation chains & bibliography"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "granite4.1:8b"
            }), " (Local)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:14b"
            }), " (Local)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Granite excels at structured JSON/tool output — ideal for formatted citations and reference metadata."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Academic paper: long-document review"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:122b"
            }), " (Cloud)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:14b"
            }), " (Local, reduced context)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Qwen 122B handles the longest context; local 14B works for documents < 16K tokens."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Podcast: episode research synthesis"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:122b"
            }), " (Cloud Slot 2)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:14b"
            }), " (Local)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Creator slot already handles podcast scripting; promote it to research when DeepSeek is down."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Podcast: guest background & fact-checking"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "granite4.1:8b"
            }), " (Local)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lfm2.5-thinking"
            }), " (Local)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Granite for structured data extraction; LFM for ultra-fast lightweight verification."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operational guidance:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud reassignment:"
        }), " Slots are not physically locked. If DeepSeek is unavailable, temporarily route Scholar tasks to Slot 2 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "qwen3.5:122b"
        }), "). The Creator and Scholar roles overlap significantly on creative-academic work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local RAM pressure:"
        }), " If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deepseek-r1:32b"
        }), " fails to load or causes excessive swap, immediately fall back to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qwen3.5:14b"
        }), ". It loads with > 4 GB of headroom on M1 Pro 16 GB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API bridge:"
        }), " If local models are unavailable but internet access exists, the DeepSeek API (", (0,jsx_runtime.jsx)(_components.code, {
          children: "deepseek-reasoner"
        }), ") remains the best cloud-scale Scholar. This is outside Ollama Pro but costs ~$2–5/mo at moderate volume."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "local-deepseek-hosting-guide",
      children: "Local DeepSeek Hosting Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ollama installed and running locally (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ollama --version"
        }), " ≥ 0.5.0 recommended)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "~20 GB free disk space for the 32B model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "16 GB unified RAM (M1 Pro) — 32B is the practical ceiling; larger variants will swap heavily"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-pull-the-model",
      children: "Step 1: Pull the Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Default tag (usually Q4_0 — fastest, slightly lower quality)\nollama pull deepseek-r1:32b\n\n# Higher quality quantization (recommended for research tasks)\nollama pull deepseek-r1:32b-qwen-distill-q4_k_m\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Ollama Pro cloud does ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " host DeepSeek. These commands pull to your local machine only."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-verify-installation",
      children: "Step 2: Verify Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check the model is available locally\nollama list | grep deepseek\n\n# Quick smoke test\nollama run deepseek-r1:32b “Summarize the concept of epistemic humility in 3 sentences.”\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-optimizing-for-m1-pro-16-gb",
      children: "Step 3: Optimizing for M1 Pro 16 GB"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The 32B model will use nearly all available RAM. To avoid system swap:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run with reduced context window (default is often 128K; reduce to 32K or 16K)\nollama run deepseek-r1:32b --ctx-size 32768\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or create a custom Modelfile:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "FROM deepseek-r1:32b\nPARAMETER num_ctx 32768\nSYSTEM You are a research assistant. Think step-by-step and cite sources explicitly.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then build and run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ollama create deepseek-scholar -f ./Modelfile\nollama run deepseek-scholar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-integration-with-claude-code-orchestrator",
      children: "Step 4: Integration with Claude Code Orchestrator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since Claude Code cannot natively use Ollama models, bridge them via:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parallel terminal sessions"
        }), " — run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ollama run deepseek-r1:32b"
        }), " in one pane, Claude Code in another. Copy research outputs from DeepSeek into Claude Code context as needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scripted piping"
        }), " — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ollama generate"
        }), " in shell scripts that feed DeepSeek output into Claude Code prompts:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "RESEARCH=$(ollama run deepseek-r1:32b “Analyze: $DOCUMENT”)\nclaude “Incorporate this research into the codebase: $RESEARCH”\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "available-local-deepseek-variants",
      children: "Available Local DeepSeek Variants"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-r1:1.5b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.1 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ultra-fast testing, mobile/low-RAM"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-r1:7b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~4.7 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick reasoning, moderate quality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-r1:14b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~9.0 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced quality/speed for 16 GB systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-r1:32b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~19 GB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommended"
            }), " — best reasoning quality that fits 16 GB RAM"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-r1:70b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~43 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires 32+ GB RAM — not feasible on M1 Pro 16 GB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud alternative:"
        }), " If local 32B quality is insufficient, use the DeepSeek API directly via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "api.deepseek.com"
        }), " or OpenRouter. This requires a separate API key and is outside the Ollama ecosystem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "orchestrator-layer",
      children: "Orchestrator Layer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Claude Code"
      }), " (the environment in which this ADR was authored) is treated as the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "orchestrator"
      }), ", not a peer agent. It handles:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Repository-wide refactoring and multi-file edits"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project scaffolding and workflow automation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex cross-tool operations (git, testing, deployment)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Ollama ecosystem fills three gaps the orchestrator does not:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy-sensitive drafting"
        }), " → local models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "High-volume parallel generation"
        }), " → 3 cloud agents working simultaneously"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specialized deep reasoning"
        }), " (citation chains, legal/ethical analysis) → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deepseek-r1:32b"
        }), " (local)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role clarity."
        }), " Each model has a single, well-defined responsibility. This reduces prompt-engineering variance and makes it easy to route tasks (“send this to the Engineer, that to the Scholar”)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Privacy by default."
        }), " Drafts and early iterations never leave the device unless the user explicitly promotes them to a cloud agent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Throughput."
        }), " Three concurrent cloud agents eliminate head-of-line blocking — e.g., a podcast script and a code refactor can proceed in parallel."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory safety."
        }), " The local tier respects the 16 GB ceiling; MoE models provide outsized capability without outsized RAM consumption."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative--follow-up",
      children: "Negative / follow-up"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model churn."
        }), " The Ollama catalog updates frequently. This ADR should be reviewed monthly, or after any major model release (e.g., Qwen4, DeepSeek-V5) that could displace a slot assignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-window discipline."
        }), " Even ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deepseek-r1:32b"
        }), " at reduced context can tempt dumping entire corpora. Users must still chunk and structure prompts to avoid attention dilution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slot contention."
        }), " If two “Engineer” tasks arrive simultaneously, one must wait or fall back to local ", (0,jsx_runtime.jsx)(_components.code, {
          children: "laguna-xs.2"
        }), ". The 3-slot limit is hard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warm-up latency."
        }), " Cloud models may cold-start. For interactive sessions, local models provide predictable first-token latency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subscription-stack--economics",
      children: "Subscription Stack & Economics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The user currently maintains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ollama Pro"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cursor Pro"
      }), ". The question is whether to replace Cursor Pro with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DeepSeek Pro"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Subscription"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monthly Cost (approx.)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it provides"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overlap with ecosystem"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ollama Pro"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 cloud inference slots; local model hosting; curated cloud catalog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud Tier (Slot 1–2), Local Tier hosting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cursor Pro"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claude/GPT inside IDE; Composer (multi-file agent); tab completion; 500 fast requests/mo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Redundant with Claude Code orchestrator"
            }), " for multi-file editing; unique value is IDE-native UX and autocomplete"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DeepSeek Pro"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$2–5 (pay-as-you-go)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API access to DeepSeek-V3 and DeepSeek-R1 at very low token cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fills the \"Scholar\" role at scale without local RAM limits; no IDE lock-in"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why the swap is worth considering:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Redundancy."
        }), " Claude Code (free CLI, API-key billed) already handles repository-wide refactoring, scaffolding, and multi-file edits — the core value of Cursor Composer. Paying for Cursor Pro essentially rents the same capability through a different shell."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Capacity."
        }), " The user reports burning through Cursor's 500 fast requests quickly. DeepSeek Pro is pay-as-you-go with per-token pricing significantly below Anthropic/Claude API rates. For heavy reasoning workloads, it is cheaper to run 10× the volume through DeepSeek API than to stay inside Cursor's limits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Role fit."
        }), " Cursor Pro forces all work through Cursor's IDE and its limited model roster. DeepSeek Pro gives unconstrained API access, so the \"Scholar\" can be called from scripts, aider, Continue.dev, or direct ", (0,jsx_runtime.jsx)(_components.code, {
          children: "curl"
        }), " — matching the headless, tool-chain philosophy of this dev kit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What you lose."
        }), " Tab completion and IDE-native chat disappear if Cursor is cancelled. Replacements:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tab completion:"
            }), " Codeium (free tier), GitHub Copilot, or local ", (0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "granite4.1"
            }), " via Continue.dev."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "IDE chat:"
            }), " Continue.dev (VS Code / JetBrains) supports Claude, DeepSeek, and Ollama in one sidebar."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommended stack if the swap happens:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Claude Code (CLI)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API usage only (~$5–15/mo typical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Engineer (cloud)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ollama Pro Slot 1 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "kimi-k2.6"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Included in Ollama Pro"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Creator (cloud)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ollama Pro Slot 2 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:122b"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Included in Ollama Pro"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scholar (cloud scale)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DeepSeek API (", (0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-chat"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-reasoner"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~$2–5/mo at moderate volume"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scholar (local)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "deepseek-r1:32b"
            }), " via Ollama"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free (local compute)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tab completion"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Codeium or local ", (0,jsx_runtime.jsx)(_components.code, {
              children: "qwen3.5:7b"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision:"
        }), " This ADR does not mandate the swap, but flags it as a high-ROI option. If Cursor fast-request burnout continues, cancelling Cursor Pro and routing the budget to DeepSeek Pro + Continue.dev removes a redundant subscription and adds unconstrained Scholar capacity."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "migration--onboarding",
      children: "Migration / Onboarding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Pull the local tier\nollama pull deepseek-r1:32b\nollama pull laguna-xs.2\nollama pull granite4.1:8b\nollama pull qwen3.5:14b\nollama pull lfm2.5-thinking\n\n# Quick smoke tests\nollama run deepseek-r1:32b \"Explain the prisoner's dilemma in game theory.\"\nollama run laguna-xs.2 \"Write a Python function that recursively flattens a nested list.\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cloud models are pulled on-demand via Ollama Pro; no local action required."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "status",
      children: "Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ Decided"
      }), " — Ecosystem design accepted and documented."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "⏳ Rollout"
      }), " — Local model pulls and cloud slot assignments are manual; optional automation (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "justfile"
      }), " or shell script) is a future convenience, not a requirement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://ollama.com/search",
          children: "Ollama Search / Model Catalog"
        }), " — canonical source of model capabilities and parameter counts"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "[FR-089] — Future feature request: automated model-pull script for new dev-kit installations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption",
          children: "ADR-003: Greenfield vs Brownfield Adoption"
        }), " — brownfield adopters may choose a subset of this ecosystem"]
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