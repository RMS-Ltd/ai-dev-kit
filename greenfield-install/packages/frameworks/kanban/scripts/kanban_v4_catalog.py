"""
Kanban v4.0 packaged catalog — three-tier Core / Ancillary / Domain.

Ratified: docs/knowledge/analysis/kanban-v2/13-v4-three-tier-catalogue.md
"""

from __future__ import annotations

import re
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from kanban_v35_catalog import assert_v35_fingerprint

V4_CATALOG_VERSION = "4.0.0"

# Small-tier fresh install (default greenfield) — Core E01–E08 only
V4_FRESH_EPICS: List[int] = list(range(1, 9))

# Ambitious tier adds E11–E18
V4_AMBITIOUS_EPICS: List[int] = V4_FRESH_EPICS + list(range(11, 19))

Tier = str  # core | ancillary | domain | reserved


@dataclass(frozen=True)
class StoryRecord:
    epic_num: int
    story_num: int
    title: str
    story_slug: str
    story_class: str = "generic"  # bootstrap | perpetual | intake | generic | domain | reserved
    has_packaged_tasks: bool = False
    placeholder_tokens: Tuple[str, ...] = ("{PROJECT_NAME}",)


@dataclass(frozen=True)
class EpicRecord:
    epic_num: int
    display_title: str
    catalog_slug: str
    short_tag: str
    tier: Tier
    concerns: Tuple[str, ...]
    excludes: Tuple[str, ...]
    stories: Tuple[StoryRecord, ...]
    adoption_order: Optional[int] = None
    reserved: bool = False


def _s(
    epic: int,
    num: int,
    title: str,
    slug: str,
    *,
    story_class: str = "generic",
    tasks: bool = False,
    placeholders: Tuple[str, ...] = ("{PROJECT_NAME}",),
) -> StoryRecord:
    return StoryRecord(
        epic_num=epic,
        story_num=num,
        title=title,
        story_slug=slug,
        story_class=story_class,
        has_packaged_tasks=tasks,
        placeholder_tokens=placeholders,
    )


def _e(
    num: int,
    title: str,
    slug: str,
    tag: str,
    tier: Tier,
    concerns: Tuple[str, ...],
    excludes: Tuple[str, ...],
    stories: Tuple[StoryRecord, ...],
    adoption_order: Optional[int] = None,
    reserved: bool = False,
) -> EpicRecord:
    return EpicRecord(
        epic_num=num,
        display_title=title,
        catalog_slug=slug,
        short_tag=tag,
        tier=tier,
        concerns=concerns,
        excludes=excludes,
        stories=stories,
        adoption_order=adoption_order,
        reserved=reserved,
    )


V4_EPICS: Tuple[EpicRecord, ...] = (
    _e(
        1,
        "Repository Infrastructure & Maintenance",
        "repository-infrastructure-and-maintenance",
        "REPO",
        "core",
        ("repo_hygiene", "versioning_substrate", "test_harness"),
        ("product_delivery_e24",),
        (
            _s(1, 1, "Perpetual Operations", "perpetual-operations", story_class="perpetual", tasks=True),
            _s(1, 2, "Versioning & Release Numbering", "versioning-and-release-numbering", story_class="bootstrap", tasks=True),
            _s(1, 3, "Test Harness & Gates", "test-harness-and-gates", story_class="bootstrap", tasks=True),
        ),
        adoption_order=1,
    ),
    _e(
        2,
        "Workflow Management",
        "workflow-management",
        "WORKFLOW",
        "core",
        ("workflow_dev", "bootstrap_gate"),
        ("product_features_e24",),
        (
            _s(2, 1, "Workflow Definitions & Patterns", "workflow-definitions-and-patterns", story_class="bootstrap"),
            _s(
                2,
                2,
                "Repository Bootstrap",
                "repository-bootstrap",
                story_class="bootstrap",
                tasks=True,
                placeholders=("{PROJECT_NAME}", "{REPO_ROOT}"),
            ),
        ),
        adoption_order=2,
    ),
    _e(
        3,
        "Kanban Framework",
        "kanban-framework",
        "KANBAN",
        "core",
        ("board_governance", "intake_fr_br_uxr"),
        ("standalone_fr_epic",),
        (
            _s(3, 1, "Board Setup & Governance", "board-setup-and-governance", placeholders=("{PROJECT_NAME}", "{KANBAN_ROOT}")),
            _s(3, 2, "FR Implementation", "fr-implementation", story_class="intake"),
            _s(3, 3, "BR Implementation", "br-implementation", story_class="intake"),
            _s(3, 4, "UXR Implementation", "uxr-implementation", story_class="intake"),
        ),
        adoption_order=3,
    ),
    _e(
        4,
        "Project Architecture",
        "project-architecture",
        "ARCH",
        "core",
        ("adr", "system_design"),
        ("code_refactors_e08",),
        (_s(4, 1, "ADR Scaffold & Architecture Layout", "adr-scaffold-and-architecture-layout", story_class="bootstrap", tasks=True),),
        adoption_order=4,
    ),
    _e(
        5,
        "Documentation",
        "documentation",
        "DOCS",
        "core",
        ("doc_scaffold", "maintainer_kb"),
        ("duplicate_documentation_ancillary",),
        (
            _s(5, 1, "Documentation Scaffold", "documentation-scaffold", story_class="bootstrap", tasks=True),
            _s(5, 2, "Maintainer Knowledge Base", "maintainer-knowledge-base", placeholders=("{PROJECT_NAME}", "{REPO_ROOT}")),
        ),
        adoption_order=5,
    ),
    _e(
        6,
        "Process Automation & CI/CD",
        "process-automation-and-cicd",
        "CICD",
        "core",
        ("repo_ci", "pipeline"),
        ("prod_ops_e18",),
        (_s(6, 1, "CI/CD Pipeline Scaffold", "ci-cd-pipeline-scaffold", story_class="bootstrap", tasks=True, placeholders=("{PROJECT_NAME}", "{REPO_ROOT}")),),
        adoption_order=6,
    ),
    _e(
        7,
        "Security",
        "security",
        "SEC",
        "core",
        ("repo_security_baseline", "dependency_scan"),
        ("product_auth_e14", "product_compliance_e15"),
        (_s(7, 1, "Security Baseline", "security-baseline", story_class="bootstrap", tasks=True),),
        adoption_order=7,
    ),
    _e(
        8,
        "Code Quality",
        "code-quality",
        "CODEQ",
        "core",
        ("static_analysis", "linters", "refactor"),
        ("external_vendor_e17",),
        (
            _s(8, 1, "Code Quality Scaffold", "code-quality-scaffold", story_class="bootstrap", tasks=True),
            _s(8, 2, "Review & Upkeep", "review-and-upkeep", story_class="bootstrap", tasks=True),
        ),
        adoption_order=8,
    ),
    _e(
        9,
        "Reserved — core expansion",
        "reserved-core-09",
        "RSVD-C",
        "reserved",
        ("reserved",),
        (),
        (_s(9, 1, "Reserved slot", "reserved-slot", story_class="reserved"),),
        reserved=True,
    ),
    _e(
        10,
        "Reserved — core expansion",
        "reserved-core-10",
        "RSVD-C",
        "reserved",
        ("reserved",),
        (),
        (_s(10, 1, "Reserved slot", "reserved-slot", story_class="reserved"),),
        reserved=True,
    ),
    _e(
        11,
        "Data Management & Database",
        "data-management-and-database",
        "DATA",
        "ancillary",
        ("product_data", "schema", "migrations"),
        ("repo_infra_e01",),
        (
            _s(11, 1, "Schema & modelling", "schema-and-modelling"),
            _s(11, 2, "Data access layer", "data-access-layer"),
            _s(11, 3, "Migrations & seeding", "migrations-and-seeding"),
        ),
        adoption_order=1,
    ),
    _e(
        12,
        "API & Backend Services",
        "api-and-backend-services",
        "API",
        "ancillary",
        ("api_design", "service_impl"),
        (),
        (
            _s(12, 1, "API design", "api-design"),
            _s(12, 2, "Service implementation", "service-implementation"),
            _s(12, 3, "API docs & contracts", "api-docs-and-contracts"),
        ),
        adoption_order=2,
    ),
    _e(
        13,
        "Frontend & User Interface",
        "frontend-and-user-interface",
        "UI",
        "ancillary",
        ("web_ui", "components"),
        ("native_mobile_e20",),
        (
            _s(13, 1, "UI framework", "ui-framework"),
            _s(13, 2, "Core components", "core-components"),
            _s(13, 3, "Feature UI", "feature-ui"),
        ),
        adoption_order=3,
    ),
    _e(
        14,
        "User Management & Authentication",
        "user-management-and-authentication",
        "AUTH",
        "ancillary",
        ("authentication", "authorization", "profiles"),
        ("repo_security_e07",),
        (
            _s(14, 1, "Authentication", "authentication"),
            _s(14, 2, "Authorization", "authorization"),
            _s(14, 3, "Profiles & sessions", "profiles-and-sessions"),
            _s(14, 4, "Roles & permissions (RBAC)", "roles-and-permissions-rbac"),
        ),
        adoption_order=4,
    ),
    _e(
        15,
        "Compliance & Privacy",
        "compliance-and-privacy",
        "COMPLY",
        "ancillary",
        ("product_compliance", "privacy", "gdpr_class"),
        ("repo_security_e07",),
        (
            _s(15, 1, "Governance & records", "governance-and-records", placeholders=("{PROJECT_NAME}", "{REGULATORY_REGIME}")),
            _s(
                15,
                2,
                "Product privacy controls",
                "product-privacy-controls",
                placeholders=("{PROJECT_NAME}", "{REGULATORY_REGIME}"),
            ),
            _s(15, 3, "Processor DPAs & evidence", "processor-dpas-and-evidence", placeholders=("{PROJECT_NAME}", "{REGULATORY_REGIME}")),
        ),
        adoption_order=5,
    ),
    _e(
        16,
        "Performance & Product Analytics",
        "performance-and-product-analytics",
        "PERFAN",
        "ancillary",
        ("performance_engineering", "product_analytics"),
        ("prod_sre_e18",),
        (
            _s(16, 1, "Performance engineering", "performance-engineering"),
            _s(16, 2, "Product analytics & telemetry", "product-analytics-and-telemetry"),
        ),
        adoption_order=6,
    ),
    _e(
        17,
        "External Vendor Services",
        "external-vendor-services",
        "VENDOR",
        "ancillary",
        ("external_api", "webhook", "payment_provider"),
        ("pypi_npm_e08", "dev_tooling"),
        (
            _s(17, 1, "Vendor API integration", "vendor-api-integration"),
            _s(17, 2, "Webhooks", "webhooks"),
            _s(17, 3, "Payments", "payments"),
            _s(17, 4, "External system sync", "external-system-sync"),
        ),
        adoption_order=7,
    ),
    _e(
        18,
        "Production Operations",
        "production-operations",
        "PRODOPS",
        "ancillary",
        ("deployment_topology", "prod_observability", "incidents"),
        ("repo_ci_e06", "local_venv"),
        (
            _s(18, 1, "Deployment topology", "deployment-topology", placeholders=("{PROJECT_NAME}", "{HOSTING_PLATFORM}")),
            _s(18, 2, "Prod observability", "prod-observability"),
            _s(18, 3, "Incident runbooks", "incident-runbooks"),
        ),
        adoption_order=8,
    ),
    _e(
        19,
        "Internationalisation & Localisation",
        "internationalisation-and-localisation",
        "I18N",
        "ancillary",
        ("i18n", "translation", "locale"),
        (),
        (
            _s(19, 1, "i18n infrastructure", "i18n-infrastructure", placeholders=("{PROJECT_NAME}", "{PRIMARY_LOCALE}")),
            _s(19, 2, "Translation", "translation", placeholders=("{PRIMARY_LOCALE}",)),
            _s(19, 3, "Cultural adaptation", "cultural-adaptation"),
        ),
        adoption_order=9,
    ),
    _e(
        20,
        "Mobile Application",
        "mobile-application",
        "MOBILE",
        "ancillary",
        ("native_mobile", "app_stores"),
        ("web_ui_e13",),
        (
            _s(20, 1, "App foundation", "app-foundation"),
            _s(20, 2, "Mobile UI", "mobile-ui"),
            _s(20, 3, "Store deployment", "store-deployment"),
        ),
        adoption_order=10,
    ),
    _e(
        21,
        "Reserved expansion",
        "reserved-epic-21",
        "RSVD",
        "reserved",
        ("reserved",),
        (),
        (_s(21, 1, "Reserved slot", "reserved-slot", story_class="reserved"),),
        reserved=True,
    ),
    _e(
        22,
        "Reserved expansion",
        "reserved-epic-22",
        "RSVD",
        "reserved",
        ("reserved",),
        (),
        (_s(22, 1, "Reserved slot", "reserved-slot", story_class="reserved"),),
        reserved=True,
    ),
    _e(
        23,
        "Reserved expansion",
        "reserved-epic-23",
        "RSVD",
        "reserved",
        ("reserved",),
        (),
        (_s(23, 1, "Reserved slot", "reserved-slot", story_class="reserved"),),
        reserved=True,
    ),
    _e(
        24,
        "{DOMAIN_NAME} Delivery",
        "{domain-slug}-delivery",
        "DOMAIN",
        "domain",
        ("product_delivery",),
        ("core_scaffold", "ancillary_capability"),
        (
            _s(
                24,
                1,
                "First delivery tranche",
                "first-delivery-tranche",
                story_class="domain",
                placeholders=("{PROJECT_NAME}", "{DOMAIN_NAME}"),
            ),
        ),
        reserved=False,
    ),
)

V4_EPIC_BY_NUM: Dict[int, EpicRecord] = {e.epic_num: e for e in V4_EPICS}

V4_STORY_FILES: Dict[Tuple[int, int], str] = {}
for epic in V4_EPICS:
    for story in epic.stories:
        V4_STORY_FILES[(story.epic_num, story.story_num)] = f"story-{story.story_num:02d}-{story.story_slug}.md"

V4_FRESH_STORIES: List[Tuple[int, int]] = [
    (s.epic_num, s.story_num) for e in V4_EPICS if e.epic_num in V4_FRESH_EPICS for s in e.stories
]

V4_FRESH_TASK_STORIES: List[Tuple[int, int]] = [
    (s.epic_num, s.story_num)
    for e in V4_EPICS
    if e.epic_num in V4_FRESH_EPICS
    for s in e.stories
    if s.has_packaged_tasks
]

V4_TEMPLATE_ROOT = Path(__file__).resolve().parent.parent / "templates" / "v4"


def epic_template_dir(epic: EpicRecord) -> Path:
    tier_dir = epic.tier if epic.tier != "domain" else "domain"
    if epic.tier == "reserved" and epic.epic_num >= 21:
        tier_dir = "ancillary"
    elif epic.tier == "reserved" and epic.epic_num <= 10:
        tier_dir = "core"
    slug = epic.catalog_slug if "{domain-slug}" not in epic.catalog_slug else "domain-delivery"
    return V4_TEMPLATE_ROOT / "tiers" / tier_dir / f"epic-{epic.epic_num:02d}-{slug}"


def fresh_epic_list() -> List[int]:
    return list(V4_FRESH_EPICS)


def catalog_epics_for_tier(install_tier: str = "small") -> List[int]:
    if install_tier == "tiny":
        return [1, 2, 3]
    if install_tier == "ambitious":
        return list(V4_AMBITIOUS_EPICS)
    return list(V4_FRESH_EPICS)


_V4_EPIC_SECTIONS = (
    "## Purpose",
    "## Scope",
    "## Excludes / wrong homes",
    "## Overview",
    "## Stories",
    "## Dependencies",
    "## References",
)

_V4_STORY_SECTIONS = (
    "## Overview",
    "## Goals",
    "## Acceptance criteria",
    "## Out of scope",
    "## Dependencies",
    "## References",
)

_V4_ALLOWED_PLACEHOLDERS = frozenset(
    {
        "PROJECT_NAME",
        "REPO_ROOT",
        "KANBAN_ROOT",
        "DOMAIN_NAME",
        "domain-slug",
        "PRIMARY_LOCALE",
        "HOSTING_PLATFORM",
        "REGULATORY_REGIME",
    }
)

_V4_PLACEHOLDER_RE = re.compile(r"\{([A-Za-z0-9_-]+)\}")


def _v4_unknown_placeholders(text: str) -> List[str]:
    bad: List[str] = []
    for m in _V4_PLACEHOLDER_RE.finditer(text):
        token = m.group(1)
        if token not in _V4_ALLOWED_PLACEHOLDERS and not token.startswith("YYYY"):
            bad.append(token)
    return bad


def validate_v4_templates(*, strict: bool = False) -> List[str]:
    """Validate v4 epic/story template files under V4_TEMPLATE_ROOT."""
    _ = strict  # reserved for future strict-mode rules
    errors: List[str] = []
    if not V4_TEMPLATE_ROOT.is_dir():
        return ["v4 template root missing: " + str(V4_TEMPLATE_ROOT)]

    for epic in V4_EPICS:
        epic_dir = epic_template_dir(epic)
        epic_path = epic_dir / f"epic-{epic.epic_num:02d}.md"
        if not epic_path.is_file():
            errors.append(f"Missing epic template: {epic_path.relative_to(V4_TEMPLATE_ROOT)}")
            continue
        epic_text = epic_path.read_text(encoding="utf-8")
        for sec in _V4_EPIC_SECTIONS:
            if sec not in epic_text:
                errors.append(f"{epic_path.name}: missing section {sec}")
        if "{PROJECT_NAME}" not in epic_text:
            errors.append(f"{epic_path.name}: missing {{PROJECT_NAME}} in narrative")
        for bad in _v4_unknown_placeholders(epic_text):
            errors.append(f"{epic_path.name}: unknown placeholder {{{bad}}}")

        for story in epic.stories:
            sp = epic_dir / "stories" / f"story-{story.story_num:02d}-{story.story_slug}.md"
            if not sp.is_file():
                errors.append(f"Missing story template: {sp.relative_to(V4_TEMPLATE_ROOT)}")
                continue
            st = sp.read_text(encoding="utf-8")
            for sec in _V4_STORY_SECTIONS:
                if sec not in st:
                    errors.append(f"{sp.name}: missing section {sec}")
            if "{PROJECT_NAME}" not in st:
                errors.append(f"{sp.name}: missing {{PROJECT_NAME}} in Overview")
            for bad in _v4_unknown_placeholders(st):
                errors.append(f"{sp.name}: unknown placeholder {{{bad}}}")

    return errors


def assert_v4_fingerprint(kanban_path: Path, *, templates_only: bool = False) -> Tuple[bool, List[str]]:
    """Return (ok, errors) for v4 catalog fingerprint."""
    errors: List[str] = []
    if not templates_only:
        ok_v35, v35_errors = assert_v35_fingerprint(kanban_path)
        if not ok_v35:
            errors.extend(v35_errors)

    errors.extend(validate_v4_templates(strict=True))

    return (len(errors) == 0, errors)
