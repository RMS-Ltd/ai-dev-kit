"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["56425"], {
66346(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_knowledge_articles_cursor_scaling_long_running_autonomous_coding_agents_md_00f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-knowledge-articles-cursor-scaling-long-running-autonomous-coding-agents-md-00f.json
var site_docs_knowledge_articles_cursor_scaling_long_running_autonomous_coding_agents_md_00f_namespaceObject = JSON.parse('{"id":"knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents","title":"Scaling long-running autonomous coding","description":"Jan 14, 2026 by Wilson Lin in research","source":"@site/../docs/knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents.md","sourceDirName":"knowledge/articles","slug":"/knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents","permalink":"/ai-dev-kit/docs/knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-01-14T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Articles","permalink":"/ai-dev-kit/docs/knowledge/articles/"},"next":{"title":"Building Better Templates: How We Solved the 300-Template Problem with a Hybrid Approach","permalink":"/ai-dev-kit/docs/knowledge/articles/hybrid-task-template-system-building-better-templates"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/knowledge/articles/cursor-scaling-long-running-autonomous-coding-agents.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-01-14T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Scaling long-running autonomous coding';

const assets = {

};



const toc = [{
  "value": "Table of Contents",
  "id": "table-of-contents",
  "level": 2
}, {
  "value": "The limits of a single agent",
  "id": "the-limits-of-a-single-agent",
  "level": 2
}, {
  "value": "Learning to coordinate",
  "id": "learning-to-coordinate",
  "level": 2
}, {
  "value": "Planners and workers",
  "id": "planners-and-workers",
  "level": 2
}, {
  "value": "Running for weeks",
  "id": "running-for-weeks",
  "level": 2
}, {
  "value": "What we&#39;ve learned",
  "id": "what-weve-learned",
  "level": 2
}, {
  "value": "What&#39;s next",
  "id": "whats-next",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "scaling-long-running-autonomous-coding",
        children: "Scaling long-running autonomous coding"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Jan 14, 2026"
      }), " by Wilson Lin in research", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://cursor.com/blog/scaling-agents",
        children: "cursor.com/blog/scaling-agents"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#the-limits-of-a-single-agent",
          children: "The limits of a single agent"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#learning-to-coordinate",
          children: "Learning to coordinate"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#planners-and-workers",
          children: "Planners and workers"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#running-for-weeks",
          children: "Running for weeks"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#what-weve-learned",
          children: "What we've learned"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#whats-next",
          children: "What's next"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We've been experimenting with running coding agents autonomously for weeks."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our goal is to understand how far we can push the frontier of agentic coding for projects that typically take human teams months to complete."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This post describes what we've learned from running hundreds of concurrent agents on a single project, coordinating their work, and watching them write over a million lines of code and trillions of tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-limits-of-a-single-agent",
      children: "The limits of a single agent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Today's agents work well for focused tasks, but are slow for complex projects. The natural next step is to run multiple agents in parallel, but figuring out how to coordinate them is challenging."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our first instinct was that planning ahead would be too rigid. The path through a large project is ambiguous, and the right division of work isn't obvious at the start. We began with dynamic coordination, where agents decide what to do based on what others are currently doing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-to-coordinate",
      children: "Learning to coordinate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our initial approach gave agents equal status and let them self-coordinate through a shared file. Each agent would check what others were doing, claim a task, and update its status. To prevent two agents from grabbing the same task, we used a locking mechanism."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This failed in interesting ways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agents would hold locks for too long, or forget to release them entirely. Even when locking worked correctly, it became a bottleneck. Twenty agents would slow down to the effective throughput of two or three, with most time spent waiting."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The system was brittle: agents could fail while holding locks, try to acquire locks they already held, or update the coordination file without acquiring the lock at all."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We tried replacing locks with optimistic concurrency control. Agents could read state freely, but writes would fail if the state had changed since they last read it. This was simpler and more robust, but there were still deeper problems."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With no hierarchy, agents became risk-averse. They avoided difficult tasks and made small, safe changes instead. No agent took responsibility for hard problems or end-to-end implementation. This lead to work churning for long periods of time without progress."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "planners-and-workers",
      children: "Planners and workers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Our next approach was to separate roles. Instead of a flat structure where every agent does everything, we created a pipeline with distinct responsibilities."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Planners"
      }), " continuously explore the codebase and create tasks. They can spawn sub-planners for specific areas, making planning itself parallel and recursive."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Workers"
      }), " pick up tasks and focus entirely on completing them. They don't coordinate with other workers or worry about the big picture. They just grind on their assigned task until it's done, then push their changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "At the end of each cycle, a judge agent determined whether to continue, then the next iteration would start fresh. This solved most of our coordination problems and let us scale to very large projects without any single agent getting tunnel vision."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "running-for-weeks",
      children: "Running for weeks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To test this system, we pointed it at an ambitious goal: building a web browser from scratch. The agents ran for close to a week, writing over 1 million lines of code across 1,000 files. You can explore the source code on GitHub."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Despite the codebase size, new agents can still understand it and make meaningful progress. Hundreds of workers run concurrently, pushing to the same branch with minimal conflicts."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "While it might seem like a simple screenshot, building a browser from scratch is extremely difficult."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Another experiment was doing an in-place migration of Solid to React in the Cursor codebase. It took over 3 weeks with +266K/-193K edits. As we've started to test the changes, we do believe it's possible to merge this change."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Pull request showing Solid to React migration"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Another experiment was to improve an upcoming product. A long-running agent made video rendering 25x faster with an efficient Rust version. It also added support to zoom and pan smoothly with natural spring transitions and motion blurs, following the cursor. This code was merged and will be in production soon."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We have a few other interesting examples still running:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Java LSP:"
        }), " 7.4K commits, 550K LoC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Windows 7 emulator:"
        }), " 14.6K commits, 1.2M LoC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Excel:"
        }), " 12K commits, 1.6M LoC"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-weve-learned",
      children: "What we've learned"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We've deployed billions of tokens across these agents toward a single goal. The system isn't perfectly efficient, but it's far more effective than we expected."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model choice matters"
      }), " for extremely long-running tasks. We found that GPT-5.2 models are much better at extended autonomous work: following instructions, keeping focus, avoiding drift, and implementing things precisely and completely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Opus 4.5 tends to stop earlier and take shortcuts when convenient, yielding back control quickly. We also found that different models excel at different roles. GPT-5.2 is a better planner than GPT-5.1-codex, even though the latter is trained specifically for coding. We now use the model best suited for each role rather than one universal model."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Many of our improvements came from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "removing complexity rather than adding it"
      }), ". We initially built an integrator role for quality control and conflict resolution, but found it created more bottlenecks than it solved. Workers were already capable of handling conflicts themselves."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The best system is often simpler than you'd expect."
      }), " We initially tried to model systems from distributed computing and organizational design. However, not all of them work for agents."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The right amount of structure is somewhere in the middle. Too little structure and agents conflict, duplicate work, and drift. Too much structure creates fragility."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A surprising amount of the system's behavior comes down to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "how we prompt the agents"
      }), ". Getting them to coordinate well, avoid pathological behaviors, and maintain focus over long periods required extensive experimentation. The harness and models matter, but the prompts matter more."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-next",
      children: "What's next"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multi-agent coordination remains a hard problem. Our current system works, but we're nowhere near optimal. Planners should wake up when their tasks complete to plan the next step. Agents occasionally run for far too long. We still need periodic fresh starts to combat drift and tunnel vision."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["But the core question, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "can we scale autonomous coding by throwing more agents at a problem"
      }), ", has a more optimistic answer than we expected. Hundreds of agents can work together on a single codebase for weeks, making real progress on ambitious projects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The techniques we're developing here will eventually inform Cursor's agent capabilities. If you're interested in working on the hardest problems in AI-assisted software development, we'd love to hear from you at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:hiring@cursor.com",
        children: "hiring@cursor.com"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Filed under:"
      }), " research", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " Wilson Lin"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related Documentation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-031-multi-agent-coordination-feasibility-investigation",
          children: "FR-031: Multi-Agent Coordination Feasibility Investigation"
        }), " - Feature request investigating incorporation of these ideas"]
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