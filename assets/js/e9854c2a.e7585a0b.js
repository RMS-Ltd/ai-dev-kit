"use strict";
(self["webpackChunkportal"] = self["webpackChunkportal"] || []).push([["68457"], {
27547(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_architecture_standards_and_adrs_semver_implementation_followup_spec_md_e98_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-architecture-standards-and-adrs-semver-implementation-followup-spec-md-e98.json
var site_docs_architecture_standards_and_adrs_semver_implementation_followup_spec_md_e98_namespaceObject = JSON.parse('{"id":"architecture/standards-and-adrs/semver-implementation-followup-spec","title":"SemVer Mapping & Tagging Implementation Follow-Up (Spec)","description":"Status: Draft","source":"@site/../docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md","sourceDirName":"architecture/standards-and-adrs","slug":"/architecture/standards-and-adrs/semver-implementation-followup-spec","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-implementation-followup-spec","draft":false,"unlisted":false,"editUrl":"https://github.com/RMS-Ltd/ai-dev-kit/tree/main/docs/../docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md","tags":[],"version":"current","frontMatter":{"lifecycle":"evergreen","ttl_days":null,"created_at":"2026-02-19T00:00:00.000Z","expires_at":null,"housekeeping_policy":"keep"},"sidebar":"docsSidebar","previous":{"title":"Release Workflow PDCA Integration Plan","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/rw-pdca-integration-plan"},"next":{"title":"SemVer Mapping Implementation Impact Analysis","permalink":"/ai-dev-kit/docs/architecture/standards-and-adrs/semver-mapping-implementation-impact"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ../docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md


const frontMatter = {
	lifecycle: 'evergreen',
	ttl_days: null,
	created_at: new Date('2026-02-19T00:00:00.000Z'),
	expires_at: null,
	housekeeping_policy: 'keep'
};
const contentTitle = 'SemVer Mapping & Tagging Implementation Follow-Up (Spec)';

const assets = {

};



const toc = [{
  "value": "1. Goals",
  "id": "1-goals",
  "level": 2
}, {
  "value": "2. Configuration Surface (<code>rw-config.yaml</code>)",
  "id": "2-configuration-surface-rw-configyaml",
  "level": 2
}, {
  "value": "3. <code>semver_converter.py</code> Enhancements",
  "id": "3-semver_converterpy-enhancements",
  "level": 2
}, {
  "value": "3.1 Inputs and Outputs",
  "id": "31-inputs-and-outputs",
  "level": 3
}, {
  "value": "3.2 Mapping Logic",
  "id": "32-mapping-logic",
  "level": 3
}, {
  "value": "3.3 Metadata Suffix",
  "id": "33-metadata-suffix",
  "level": 3
}, {
  "value": "4. RW Tagging Behaviour (Step 11) and README Update (Step 5)",
  "id": "4-rw-tagging-behaviour-step-11-and-readme-update-step-5",
  "level": 2
}, {
  "value": "4.1 Step 5 – README",
  "id": "41-step-5--readme",
  "level": 3
}, {
  "value": "4.2 Step 11 – Create Git Tag",
  "id": "42-step-11--create-git-tag",
  "level": 3
}, {
  "value": "5. GitHub Release Script (<code>create_github_release.py</code>)",
  "id": "5-github-release-script-create_github_releasepy",
  "level": 2
}, {
  "value": "6. PVW Integration",
  "id": "6-pvw-integration",
  "level": 2
}, {
  "value": "7. Validation Enhancements",
  "id": "7-validation-enhancements",
  "level": 2
}, {
  "value": "8. Migration &amp; Backwards Compatibility",
  "id": "8-migration--backwards-compatibility",
  "level": 2
}, {
  "value": "9. Next Steps",
  "id": "9-next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "semver-mapping--tagging-implementation-follow-up-spec",
        children: "SemVer Mapping & Tagging Implementation Follow-Up (Spec)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Draft", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scope:"
      }), " Implement configuration-driven SemVer mapping modes, optional metadata, and RW/PVW behaviour consistent with updated policies.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Related:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "packages/frameworks/numbering-versioning/versioning-policy.md"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "versioning-strategy.md"
      }), ", dev-kit versioning policy, RW & PVW agent execution guides."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-goals",
      children: "1. Goals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config-driven SemVer mapping:"
        }), " Allow projects to select a SemVer mapping mode (registry-based vs global PATCH) via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rw-config.yaml"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional metadata in tags:"
        }), " Support an optional ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>"
        }), " suffix on SemVer tags for machine-parseable traceability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RW alignment:"
        }), " Ensure RW uses SemVer as the external-facing version (README, tags, GitHub releases) while preserving the internal version as the forensic coordinate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PVW alignment:"
        }), " Ensure PVW treats SemVer as the external-facing package version, using the same mapping mode as RW."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "2-configuration-surface-rw-configyaml",
      children: ["2. Configuration Surface (", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add (or document) the following optional fields in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rw-config.yaml"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mode"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"registry_epic_story\""
        }), " (default) | ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"global_patch\""
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "registry_epic_story (Mode A):"
            }), " Use existing registry-based mapping (Hybrid Approach)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "global_patch (Mode B):"
            }), " Map ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MAJOR = RC"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MINOR = EPIC"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PATCH = global build counter"
            }), " per RC."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "semver_metadata"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"none\""
        }), " (default) | ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"full\""
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "none:"
            }), " Generate clean SemVer (", (0,jsx_runtime.jsx)(_components.code, {
              children: "MAJOR.MINOR.PATCH+BUILD"
            }), ") without metadata in the tag name."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "full:"
            }), " Append metadata suffix ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>"
            }), " to the SemVer tag."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These values should be:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read once at the start of RW (and reused by PVW where relevant)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exposed via a small internal configuration helper so other scripts (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), ") can consume them."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "3-semver_converterpy-enhancements",
      children: ["3. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "semver_converter.py"
      }), " Enhancements"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-inputs-and-outputs",
      children: "3.1 Inputs and Outputs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Current behaviour:"
        }), " Accepts an internal version string and emits a SemVer string using the registry-based mapping."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target behaviour:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Accept internal version (", (0,jsx_runtime.jsx)(_components.code, {
              children: "RC.EPIC.STORY.TASK+BUILD"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_mode"
            }), " from config (or accept an explicit argument for testing)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Apply mapping based on selected mode."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Return:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "semver_core"
                }), ": ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "MAJOR.MINOR.PATCH+BUILD"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "metadata_suffix"
                }), " (optional): ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>"
                }), " if ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "semver_metadata=full"
                }), ", else empty."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-mapping-logic",
      children: "3.2 Mapping Logic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Mode A – ", (0,jsx_runtime.jsx)(_components.code, {
              children: "registry_epic_story"
            }), " (existing Hybrid Approach)"]
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Preserve current behaviour (use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver-registry.yaml"
            }), " to map epic/story to MINOR/PATCH)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["No change in semantics; implementation just refactors into a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mode"
            }), " branch."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Mode B – ", (0,jsx_runtime.jsx)(_components.code, {
              children: "global_patch"
            })]
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MAJOR = RC"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MINOR = EPIC"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PATCH"
            }), " = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "monotonic global build counter"
            }), " per RC.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Implementation detail: the global counter can be tracked in a small registry file (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "semver-global-patch-registry.yaml"
                }), ") keyed by RC."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["On each new release:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Increment the counter and assign it to PATCH."
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Record mapping from internal version to ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "(MAJOR, MINOR, PATCH)"
                    }), " for traceability."]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-metadata-suffix",
      children: "3.3 Metadata Suffix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_metadata = full"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Compute suffix: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Do ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "not"
            }), " include this suffix when returning the “SemVer core” for README or package manifests; it is for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "tag names"
            }), " and tooling."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-rw-tagging-behaviour-step-11-and-readme-update-step-5",
      children: "4. RW Tagging Behaviour (Step 11) and README Update (Step 5)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-step-5--readme",
      children: "4.1 Step 5 – README"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " to compute:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "semver_core"
            }), " for display in README."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Internal version remains in the version file and detailed changelog."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update README patterns so:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The visible “Version” section uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v{semver_core}"
            }), " as the primary value."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Internal version is referenced only in supporting text or links, not as the main version."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-step-11--create-git-tag",
      children: "4.2 Step 11 – Create Git Tag"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each release, create:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Internal tag:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v\\{internal_version\\}"
            }), " (unchanged behaviour)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SemVer tag:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Base: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "v{semver_core}"
                }), "."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "semver_metadata=full"
                }), ": append metadata to the tag name: ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "v{semver_core}+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Both tags point to the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "same commit"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Commit messages continue to reference the internal version and SemVer as needed."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "5-github-release-script-create_github_releasepy",
      children: ["5. GitHub Release Script (", (0,jsx_runtime.jsx)(_components.code, {
        children: "create_github_release.py"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expect SemVer tag input in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "core form"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v{semver_core}"
        }), " (no metadata)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Internal version is passed separately (as today)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If metadata tags are used:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "They should not be treated as the primary release tag in GitHub."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The script may optionally include metadata in the release body for traceability."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-pvw-integration",
      children: "6. PVW Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PVW must:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Use the same ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_mode"
            }), " as RW (read from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Treat SemVer as the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "external-facing package version"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementation notes:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["When PVW decides a MAJOR/MINOR/PATCH bump for a package:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "It should apply the bump to the package’s SemVer (respecting mapping mode)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "It should record rationale and the corresponding internal versions (if relevant) in the package changelog."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-validation-enhancements",
      children: "7. Validation Enhancements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Optionally extend existing validators or add new ones to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Tag/metadata consistency validator:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Input: tag name (SemVer + optional metadata) and internal version."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Check:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "When metadata is present, it matches the internal version’s components."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "SemVer core is well-formed and consistent with mapping mode."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Config consistency validator:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Ensure ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_mode"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "semver_metadata"
            }), " values are valid and supported."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These validators can be wired into RW Step 9 (Run Validators) as non-breaking checks initially (warnings) and tightened over time."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-migration--backwards-compatibility",
      children: "8. Migration & Backwards Compatibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Existing projects using the registry-based mapping (Hybrid Approach) remain on ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mode A"
        }), " by default."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Introducing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mode"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_metadata"
        }), " should:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Default to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "registry_epic_story"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "none"
            }), " to avoid breaking current behaviour."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Only change behaviour when explicitly set in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rw-config.yaml"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metadata is strictly additive; omitting it preserves current tag formats."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-next-steps",
      children: "9. Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement configuration loading for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_mode"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_metadata"
        }), " in RW."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Refactor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "semver_converter.py"
        }), " to support mode selection and metadata reporting."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update RW Step 5 and Step 11 implementations to use the enhanced converter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optionally add validators for SemVer/metadata consistency."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pilot the new behaviour in ai-dev-kit itself, then document adoption steps for other projects."
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