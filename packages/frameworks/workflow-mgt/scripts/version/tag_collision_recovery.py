"""BR-097 recovery hints for RW tag push collisions (task_touch vs registry)."""

from __future__ import annotations


def format_tag_collision_recovery(
    tag: str,
    *,
    strategy: str,
    is_primary: bool,
    internal_version: str,
) -> str:
    """
    Human-facing recovery text when remote and local release tags diverge.

    task_touch primary tags (vX.Y.Z) omit BUILD — BUILD+1 alone does not retag SemVer core.
    """
    if strategy == "task_touch" and is_primary:
        return (
            f"BR-097 task_touch: remote SemVer core tag {tag} points to a different commit. "
            "Do NOT force-push release tags. Recovery: "
            f"(1) finalize semver-registry for {internal_version} "
            "(python packages/frameworks/workflow-mgt/scripts/version/finalize_rw_semver_registry.py "
            f'--internal-version "{internal_version}") and ensure semver-registry.yaml is in the release commit; '
            "(2) if this internal version is already shipped, run resolve_rw_build.py and re-RW with "
            "`RW E:S:T --art` — BUILD+1 allocates a NEW SemVer PATCH (new vX.Y.Z primary tag); "
            "(3) if remote tag is stale/orphaned on another branch, ops remediation is required."
        )
    return (
        f"BR-097: remote tag {tag} exists at a different commit — "
        f"run resolve_rw_build.py and re-RW for {internal_version} (BUILD+1); "
        "never force-push release tags."
    )
