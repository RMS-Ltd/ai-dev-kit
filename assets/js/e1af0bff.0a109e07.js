"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["89211"], {
74964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_adr_openclaw_process_sentinel_skill_md_e1a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-adr-openclaw-process-sentinel-skill-md-e1a.json
var site_docs_architecture_standards_and_adrs_adr_openclaw_process_sentinel_skill_md_e1a_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill","title":"ADR: OpenClaw process sentinel skill (agent orphan detection)","description":"Status: Proposed","source":"@site/../docs/architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill.md","tags":[],"version":"current","frontMatter":{"lifecycle":"timeboxed","ttl_days":365,"created_at":"2026-05-26T18:30:00.000Z","expires_at":null,"housekeeping_policy":"archive"},"sidebar":"docsSidebar","previous":{"title":"ADR-020: Kanban row-transform entrypoint contract + rw_config_loader unification","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification"},"next":{"title":"FR-046 Implementation Guide: RW Uses SemVer Tag When Task-Touch Enabled","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/FR-046-implementation-guide"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/ADR-openclaw-process-sentinel-skill.md


const frontMatter = {
	lifecycle: 'timeboxed',
	ttl_days: 365,
	created_at: new Date('2026-05-26T18:30:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'archive'
};
const contentTitle = 'ADR: OpenClaw process sentinel skill (agent orphan detection)';

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
  "value": "Skill identity (OpenClaw workspace)",
  "id": "skill-identity-openclaw-workspace",
  "level": 2
}, {
  "value": "Agent instructions (SOUL / skill preamble)",
  "id": "agent-instructions-soul--skill-preamble",
  "level": 3
}, {
  "value": "Detection pipeline",
  "id": "detection-pipeline",
  "level": 2
}, {
  "value": "Phase 1 — Candidate enumeration",
  "id": "phase-1--candidate-enumeration",
  "level": 3
}, {
  "value": "Phase 2 — Enrichment (per candidate PID)",
  "id": "phase-2--enrichment-per-candidate-pid",
  "level": 3
}, {
  "value": "Phase 3 — Heuristic scoring",
  "id": "phase-3--heuristic-scoring",
  "level": 3
}, {
  "value": "Remediation policy tiers",
  "id": "remediation-policy-tiers",
  "level": 2
}, {
  "value": "Alert templates",
  "id": "alert-templates",
  "level": 2
}, {
  "value": "Telegram / multi-channel (probable-leak)",
  "id": "telegram--multi-channel-probable-leak",
  "level": 3
}, {
  "value": "WebChat / Canvas companion",
  "id": "webchat--canvas-companion",
  "level": 3
}, {
  "value": "Cron integration (OpenClaw)",
  "id": "cron-integration-openclaw",
  "level": 2
}, {
  "value": "Workspace layout (when implemented in OpenClaw)",
  "id": "workspace-layout-when-implemented-in-openclaw",
  "level": 2
}, {
  "value": "<code>scan.sh</code> output contract (JSON)",
  "id": "scansh-output-contract-json",
  "level": 3
}, {
  "value": "Incident replay (acceptance scenario)",
  "id": "incident-replay-acceptance-scenario",
  "level": 2
}, {
  "value": "Relationship to host dev workflows",
  "id": "relationship-to-host-dev-workflows",
  "level": 2
}, {
  "value": "Consequences",
  "id": "consequences",
  "level": 2
}, {
  "value": "Positive",
  "id": "positive",
  "level": 3
}, {
  "value": "Negative / limits",
  "id": "negative--limits",
  "level": 3
}, {
  "value": "Out of scope (v1)",
  "id": "out-of-scope-v1",
  "level": 3
}, {
  "value": "Implementation checklist (OpenClaw play session)",
  "id": "implementation-checklist-openclaw-play-session",
  "level": 2
}, {
  "value": "References",
  "id": "references",
  "level": 2
}, {
  "value": "Revision history",
  "id": "revision-history",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
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
        id: "adr-openclaw-process-sentinel-skill-agent-orphan-detection",
        children: "ADR: OpenClaw process sentinel skill (agent orphan detection)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Proposed", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2026-05-26", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Decision owner:"
      }), " Maintainer", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Disposition:"
      }), " Transient sketch — intended for relocation into OpenClaw workspace or external notes; not host-project runtime policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Triggering incident:"
      }), " Orphaned Xcode Python 3.9 (PID 96535) ran at ~95% CPU for ~6 days (~42h cumulative CPU time) after an academic-paper build heredoc; parent shell gone (PPID 1); CWD in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.Trash/docs.repo-backup-20260522/academic"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Agentic development workflows (Cursor agents, OpenClaw shell tools, inline heredoc scripts, CI scripts) routinely spawn short-lived child processes. When the parent terminal or agent session exits without reaping children, orphans reparent to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "launchd"
      }), " (PPID 1) and may spin indefinitely. Activity Monitor shows a generic ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python"
      }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "node"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bash"
      }), ") with no script name — diagnosis requires manual ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ps"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lsof"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sample"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generic personal assistants do not monitor host process health. OpenClaw is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "local-first"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "always-on"
      }), ", supports ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cron"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shell tools"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multi-channel alerts"
      }), " — a natural home for a lightweight ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "process sentinel"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This ADR records the intended design for an OpenClaw ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "workspace skill"
      }), ". No ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SKILL.md"
      }), " is created here; this document is the sole artifact until filed elsewhere."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision",
      children: "Decision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Adopt a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Process Sentinel"
      }), " OpenClaw skill that:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Runs on a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cron schedule"
        }), " (default: every 15 minutes)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detects ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "sustained high-CPU"
        }), " processes matching ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "orphan / agent-leak heuristics"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enriches"
        }), " findings with cwd, elapsed time, open files, and optional 1s stack sample."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classifies"
        }), " severity and recommended action."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alerts"
        }), " via configured channel(s) with human-readable summary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remediates"
        }), " only per explicit policy tier (default: alert-only; never auto-kill without opt-in)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skill-identity-openclaw-workspace",
      children: "Skill identity (OpenClaw workspace)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skill name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "process-sentinel"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Display name"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process Sentinel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cron (", (0,jsx_runtime.jsx)(_components.code, {
              children: "process-sentinel-scan"
            }), ") + on-demand (", (0,jsx_runtime.jsx)(_components.code, {
              children: "/sentinel"
            }), ", “check runaway processes”)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Runtime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Host shell (macOS primary; Linux optional later)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dependencies"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ps"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lsof"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sample"
            }), " (macOS), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "awk"
            }), "; no Python required for scanner"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "agent-instructions-soul--skill-preamble",
      children: "Agent instructions (SOUL / skill preamble)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When invoked, the agent MUST:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the deterministic scan script first; do not improvise detection logic in prose."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Never ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kill"
        }), " without presenting enrichment output and receiving explicit user confirmation (unless ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto_remediate: aggressive"
        }), " is enabled — see Policy tiers)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefer ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "explain → confirm → act"
        }), " over silent remediation."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log every alert and action to the workspace audit file."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detection-pipeline",
      children: "Detection pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-1--candidate-enumeration",
      children: "Phase 1 — Candidate enumeration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Pseudocode contract (implement as scripts/process-sentinel-scan.sh)\nps -eo pid,ppid,pcpu,etime,comm -r \\\n  | awk '$3 >= CPU_THRESHOLD { print }'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defaults:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rationale"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CPU_THRESHOLD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore idle-ish background work"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "SUSTAINED_MINUTES"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Require persistence across ≥2 cron ticks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MIN_ELAPSED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore fresh builds still warming up"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sustained CPU:"
      }), " store ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(pid → first_seen_high_cpu)"
      }), " in workspace state file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.openclaw/workspace/process-sentinel/state.json"
      }), ". Alert only when threshold exceeded continuously for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SUSTAINED_MINUTES"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-2--enrichment-per-candidate-pid",
      children: "Phase 2 — Enrichment (per candidate PID)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Collect:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command / source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full command"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ps -p $PID -o command="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary + args (often bare for heredocs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ps -p $PPID -o comm="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orphan vs live parent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lsof -p $PID | grep cwd"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trash / temp / agent workspace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ps -p $PID -o time="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cumulative burn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elapsed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ps -p $PID -o etime="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wall-clock age"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open stdin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lsof -p $PID | grep -E '^\\S+\\s+\\d+.*\\s0r'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heredoc / deleted temp file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sample (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sample $PID 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirm tight eval loop vs I/O wait"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "phase-3--heuristic-scoring",
      children: "Phase 3 — Heuristic scoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each candidate receives a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "leak score"
      }), " (0–100). Alert at ≥ 60; auto-kill candidate at ≥ 85 only with aggressive policy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PPID == 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orphaned (reparented to launchd)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%CPU >= 80"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+20"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "etime >= 24h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+15"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["CWD matches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "~/.Trash"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/private/tmp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+20"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "comm"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{Python, python3, node, bash, zsh}"
            }), " generic name"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+10"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["No controlling TTY (", (0,jsx_runtime.jsx)(_components.code, {
              children: "lsof"
            }), " lacks ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tty"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+10"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU time / elapsed ratio > 0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mostly compute, not idle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CWD under known agent project + high CPU + PPID 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cursor/OpenClaw collateral"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Parent is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Cursor"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Code Helper"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "openclaw"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "node"
            }), " (gateway)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May be intentional; downgrade to warn"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Process name includes ", (0,jsx_runtime.jsx)(_components.code, {
              children: "language-server"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pyright"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ruff"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "−40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exclude LSP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Classification labels:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Score"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Label"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "85–100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "critical-leak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert + offer one-tap kill"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "60–84"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "probable-leak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alert only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "40–59"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "watch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log; digest in daily summary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "< 40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ignore"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No alert"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "remediation-policy-tiers",
      children: "Remediation policy tiers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure in workspace JSON (", (0,jsx_runtime.jsx)(_components.code, {
        children: "process-sentinel.config.json"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"auto_remediate\": \"alert-only\",\n  \"cpu_threshold\": 50,\n  \"sustained_minutes\": 30,\n  \"channels\": [\"telegram\", \"webchat\"],\n  \"exclude_comm\": [\"kernel_task\", \"WindowServer\"],\n  \"exclude_path_prefixes\": [\"/System/\", \"/Library/Audio\"]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "auto_remediate"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behaviour"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "0 — alert-only"
            }), " (default)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "alert-only"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notify; user confirms kill"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 — soft kill"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "soft-kill"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kill $PID"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "critical-leak"
            }), " after 2nd consecutive scan"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2 — aggressive"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "aggressive"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "kill -9"
            }), " on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "critical-leak"
            }), " ≥ 90 score; use only on dedicated dev machine"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Never"
      }), " auto-kill processes whose parent is an active user shell (PPID ≠ 1 and parent has TTY)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alert-templates",
      children: "Alert templates"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "telegram--multi-channel-probable-leak",
      children: "Telegram / multi-channel (probable-leak)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "🦞 Process Sentinel — probable leak\n\nPID:     96535\nProcess: Python (Xcode 3.9)\nCPU:     97.8% sustained 6 days\nCPU time: 42h 32m\nCWD:     ~/.Trash/docs.repo-backup-20260522/academic\nPPID:    1 (orphan)\nScore:   92 — critical-leak\n\nLikely cause: orphaned inline Python heredoc from shell build script.\n\nReply KILL 96535 to terminate, or IGNORE to suppress 24h.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "webchat--canvas-companion",
      children: "WebChat / Canvas companion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Render a small table: PID, CPU%, elapsed, cwd, score, [Kill] [Ignore] [Details] buttons via Live Canvas when available."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cron-integration-openclaw",
      children: "Cron integration (OpenClaw)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# Illustrative cron entry — exact OpenClaw cron schema per installed version\nid: process-sentinel-scan\nschedule: \"*/15 * * * *\"\nagent: default\nmessage: |\n  Run process-sentinel skill: execute scan script, diff against state,\n  send alerts for new/changed candidates scoring >= 60.\n  Do not kill unless config auto_remediate != alert-only.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Daily digest"
      }), " (optional, 09:00 local): top 5 CPU processes, new orphans in last 24h, suppressed PIDs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "workspace-layout-when-implemented-in-openclaw",
      children: "Workspace layout (when implemented in OpenClaw)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.openclaw/workspace/process-sentinel/\n├── process-sentinel.config.json    # policy tier + thresholds\n├── state.json                      # pid → first_seen, last_score, alert_count\n├── suppress.json                   # user IGNORE ttl entries\n├── audit.log                       # append-only actions\n└── scripts/\n    ├── scan.sh                     # Phase 1–3; emits JSON to stdout\n    ├── enrich.sh                   # single-PID enrichment\n    └── remediate.sh                # kill with guardrails\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "scansh-output-contract-json",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "scan.sh"
      }), " output contract (JSON)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"scan_at\": \"2026-05-26T17:57:00Z\",\n  \"candidates\": [\n    {\n      \"pid\": 96535,\n      \"ppid\": 1,\n      \"comm\": \"Python\",\n      \"pcpu\": 97.8,\n      \"etime\": \"5-23:24:32\",\n      \"cpu_time\": \"42:32:50\",\n      \"cwd\": \"/Users/rms/.Trash/docs.repo-backup-20260522/academic\",\n      \"score\": 92,\n      \"label\": \"critical-leak\",\n      \"recommended_action\": \"kill-with-confirmation\"\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agent parses JSON; no free-form detection in LLM turn."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "incident-replay-acceptance-scenario",
      children: "Incident replay (acceptance scenario)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given the 2026-05-26 orphan Python incident, a correct sentinel run would:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First cron after 30m sustained high CPU:"
        }), " score ≥ 85, alert sent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Enrichment"
        }), " cites Trash cwd + PPID 1 + bare Python binary."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User replies"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KILL 96535"
        }), " → agent runs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kill 96535"
        }), ", verifies exit, logs audit entry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No second alert"
        }), " for same PID after termination."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "relationship-to-host-dev-workflows",
      children: "Relationship to host dev workflows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDE / agent sessions spawning shells"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Risk source"
            }), " — sentinel is external host hygiene"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project release or validation scripts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unchanged; do not embed sentinel in project CI by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "This ADR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Transient"
            }), " wherever filed initially; relocate to OpenClaw workspace when implemented"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "consequences",
      children: "Consequences"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "positive",
      children: "Positive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catches agent orphan leaks within minutes–hours, not days."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deterministic scan reduces LLM token burn (agent interprets JSON, not raw ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ps"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reusable pattern for any always-on local assistant with shell + cron."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "negative--limits",
      children: "Negative / limits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Heuristics false-positive on intentional long builds (mitigate via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MIN_ELAPSED"
        }), ", parent downgrade)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["macOS ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sample"
        }), " unavailable on Linux — degrade gracefully without stack hint."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot see script source for stdin-fed heredocs after temp file deletion (cwd + timing still diagnostic)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Another always-on daemon uses baseline CPU/RAM (minimal if cron + shell only)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-scope-v1",
      children: "Out of scope (v1)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cgroup / container-aware monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Windows/WSL support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with Activity Monitor GUI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic post-mortem linking to IDE session IDs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "implementation-checklist-openclaw-play-session",
      children: "Implementation checklist (OpenClaw play session)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "openclaw onboard"
        }), " — baseline gateway + one alert channel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Create workspace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "process-sentinel/"
        }), " layout above"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scan.sh"
        }), " + JSON contract; test against synthetic ", (0,jsx_runtime.jsx)(_components.code, {
          children: "yes > /dev/null"
        }), " orphan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Register cron ", (0,jsx_runtime.jsx)(_components.code, {
          children: "process-sentinel-scan"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Wire skill preamble into workspace agent instructions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dry-run with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto_remediate: alert-only"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Document ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KILL"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IGNORE"
        }), " reply grammar in channel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Relocate this ADR to OpenClaw workspace or personal notes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenClaw: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/openclaw/openclaw",
          children: "github.com/openclaw/openclaw"
        }), " — cron, skills, multi-channel inbox"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["OpenClaw docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.openclaw.ai/tools/skills",
          children: "docs.openclaw.ai/tools/skills"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggering diagnosis session: 2026-05-26 — orphan PID 96535, Xcode Python 3.9, academic paper assemble heredoc"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-history",
      children: "Revision history"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial proposed sketch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2026-05-26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Renumbered to project-agnostic title (no ADR index)"
          })]
        })]
      })]
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