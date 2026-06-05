"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["23226"], {
94831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_project_management_kanban_fr_br_br_087_framework_install_directory_slug_mismatch_md_646_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-project-management-kanban-fr-br-br-087-framework-install-directory-slug-mismatch-md-646.json
var site_docs_project_management_kanban_fr_br_br_087_framework_install_directory_slug_mismatch_md_646_namespaceObject = JSON.parse('{"id":"project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch","title":"Bug Report BR-087: Framework packages install with legacy directory names (spaces, &)","description":"Bug ID: BR-087","source":"@site/../docs/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch.md","sourceDirName":"project-management/kanban/fr-br","slug":"/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-06-04T18:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Bug Report BR-086: RW Mode C — Lowercase Fresh Kanban Patterns, Forward-Looking Story 03d, Sign-Off Mismatch","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-086-rw-install-lowercase-fresh-kanban-patterns-signoff"},"next":{"title":"Bug Report BR-088: RW Mode C Does Not Scaffold version_file Path (No src/ Directory)","permalink":"/ai-dev-kit/docs/project-management/kanban/fr-br/BR-088-rw-install-mode-c-missing-version-file-scaffold"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-06-04T18:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'Bug Report BR-087: Framework packages install with legacy directory names (spaces, &)';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Root cause",
  "id": "root-cause",
  "level": 2
}, {
  "value": "Steps to reproduce",
  "id": "steps-to-reproduce",
  "level": 2
}, {
  "value": "Expected",
  "id": "expected",
  "level": 2
}, {
  "value": "Actual",
  "id": "actual",
  "level": 2
}, {
  "value": "Fix (attempted 2026-06-04)",
  "id": "fix-attempted-2026-06-04",
  "level": 2
}, {
  "value": "Acceptance criteria",
  "id": "acceptance-criteria",
  "level": 2
}, {
  "value": "Adopter verification (2026-06-05)",
  "id": "adopter-verification-2026-06-05",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
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
      children: (0,jsx_runtime.jsxs)(_components.h1, {
        id: "bug-report-br-087-framework-packages-install-with-legacy-directory-names-spaces-",
        children: ["Bug Report BR-087: Framework packages install with legacy directory names (spaces, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), ")"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug ID:"
      }), " BR-087", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priority:"
      }), " HIGH", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Severity:"
      }), " MEDIUM (shell/CI friction; wrong paths in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " / docs)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " RESOLVED (adopter re-verify ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2026-06-04"
      }), " @ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.885+2"
      }), " — hyphen slugs on disk)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementing Task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure",
        children: ["E06:S09", ":T18"]
      }), " (TODO — wave 2 closure)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prior task:"
      }), " ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087",
        children: ["E06:S09", ":T17"]
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "v0.6.9.17+1"
      }), " — scripts only; verification failed)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Issue:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/RMS-Ltd/ai-dev-kit/issues/21",
        children: "#21"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UXR:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version",
        children: "UXR-016"
      }), " (addendum — install UX does not surface legacy framework paths)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Created:"
      }), " 2026-06-04", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated:"
      }), " 2026-06-05", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Source:"
      }), " Expenses Tracker adopter update — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      }), " still shows ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow mgt"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "numbering & versioning"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tooling & automation"
      }), " after pulling latest AI Dev Kit; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reconfirmed"
      }), " 2026-06-05 after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main"
      }), " ≥ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.6.9.17+1"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.4.874+4"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consumer projects expect ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hyphenated install slugs"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow-mgt"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "numbering-versioning"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tooling-automation"
      }), ") per ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/architecture/standards-and-adrs/package-management-design",
        children: "package-management-design.md"
      }), ". After updating AI Dev Kit, adopters still see ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maintainer source tree names"
      }), " (spaces and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ") under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      }), ", breaking copy-paste commands, quoting in shells, and alignment with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "install_package_from_release.py"
      }), " verification paths."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "root-cause",
      children: "Root cause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release tarballs"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build_package.py"
        }), " archived files under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "framework_dir.name"
        }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt/"
        }), ") while release assets and installer CLI use slugs (", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgt-v2.1.3.tar.gz"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Extract step"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_package_from_release.py"
        }), " extracted archives as-is and verified ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_dir/workflow-mgt"
        }), ", which did not exist when the archive root was ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow mgt/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Submodule / vendor copy"
        }), " — Copying ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vendor/ai-dev-kit/packages/frameworks/*"
        }), " preserves maintainer directory names; no relocation step ran."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-reproduce",
      children: "Steps to reproduce"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In a consumer repo (e.g. Expenses Tracker), update AI Dev Kit (submodule or release install)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["List ", (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/frameworks/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Observe directories with spaces and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " instead of hyphenated slugs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected",
      children: "Expected"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/\n├── workflow-mgt/\n├── numbering-versioning/\n├── tooling-automation/\n├── kanban/\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actual",
      children: "Actual"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/\n├── workflow mgt/\n├── numbering-versioning/\n├── tooling-automation/\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fix-attempted-2026-06-04",
      children: "Fix (attempted 2026-06-04)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Change"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "framework_install_slug.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical slug mapping + relocate helper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "build_package.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Archive root uses install slug, not source dir name"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "install_package_from_release.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rename legacy archive root → slug on extract"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "relocate_legacy_framework_dirs.py"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-shot migration for submodule/vendor trees"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Adopter migration (existing trees):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "python \"packages/frameworks/workflow-mgt/scripts/relocate_legacy_framework_dirs.py\" \\\n  --frameworks-root packages/frameworks\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then update ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts_path"
      }), " and any docs to use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/workflow-mgt/scripts/..."
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note:"
      }), " Maintainer repo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ai-dev-kit"
      }), " source tree may keep legacy names until a separate rename epic; release assets and consumer installs target slug names."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "acceptance-criteria",
      children: "Acceptance criteria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "New release archives place framework files under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\{slug\\}/"
        }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "workflow-mgt/README.md"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_package_from_release.py"
        }), " leaves framework under ", (0,jsx_runtime.jsx)(_components.code, {
          children: "install_dir/\\{slug\\}/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "Regression tests for slug normalization, archive layout, and extract rename."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Expenses Tracker (or other adopter) confirms clean install / migration without space paths. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Failed 2026-06-05"
        }), " — legacy names still present post-update (see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version#addendum--framework-directories-still-use-legacy-names-2026-06-05",
          children: "UXR-016 addendum"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Rebuilt GitHub release assets published with slug roots (maintainer release step)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adopter-verification-2026-06-05",
      children: "Adopter verification (2026-06-05)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FAIL"
      }), " — Installed AI Dev Kit still has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      }), " directories with spaces and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "workflow mgt/"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "numbering-versioning/"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Submodule/vendor copy path may not run slug relocation on update."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Release assets or install entry point used by adopter may predate slug archive roots."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install UX (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version",
          children: "UXR-016"
        }), ") does not warn when layout remains legacy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Next steps:"
      }), " ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["E06:S09", ":T18"]
      }), " — install/update automation, republish tarballs, maintainer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/"
      }), " source rename, adopter re-verify. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure",
        children: "T18"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure",
          children: ["E06:S09", ":T18"]
        }), " — Active implementing task (wave 2)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087",
          children: ["E06:S09", ":T17"]
        }), " — Wave 1 (scripts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/UXR-016-install-setup-interactive-feedback-external-semver-version",
          children: "UXR-016"
        }), " — Install feedback addendum (path layout visibility)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/project-management/kanban/fr-br/FR-062-github-release-installation-experience",
          children: "FR-062"
        }), " — GitHub release install path"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-dev-kit/docs/architecture/standards-and-adrs/package-management-design",
          children: "package-management-design.md"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{framework-name}/"
        }), " convention"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md",
          children: "INSTALL_IN_YOUR_PROJECT.md"
        }), " — submodule copy path (still documents legacy paths until doc sweep)"]
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