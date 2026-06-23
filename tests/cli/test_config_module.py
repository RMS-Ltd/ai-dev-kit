from pathlib import Path

from cli.config import Config


def test_config_defaults_when_file_missing(tmp_path: Path):
    config = Config(tmp_path / ".ai-dev-kit.yaml")
    assert config.get("default_backend") == "git-submodule"
    assert config.get_frameworks() == {}


def test_config_set_get_and_dot_notation(tmp_path: Path):
    config = Config(tmp_path / ".ai-dev-kit.yaml")
    config.set("frameworks.kanban.version", "1.2.3")
    assert config.get("frameworks.kanban.version") == "1.2.3"


def test_config_add_and_remove_framework(tmp_path: Path):
    config = Config(tmp_path / ".ai-dev-kit.yaml")
    config.add_framework("kanban", "1.0.0", "git-submodule", "frameworks/kanban")
    assert "kanban" in config.get_frameworks()
    assert config.remove_framework("kanban") is True
    assert config.remove_framework("kanban") is False


def test_config_save_and_reload(tmp_path: Path):
    path = tmp_path / ".ai-dev-kit.yaml"
    config = Config(path)
    config.set("default_backend", "pip")
    config.add_framework("workflow-mgt", "2.0.0", "pip", "frameworks/workflow-mgt")
    config.save()

    reloaded = Config(path)
    assert reloaded.get("default_backend") == "pip"
    assert "workflow-mgt" in reloaded.get_frameworks()


def test_config_validate_flags_bad_backend(tmp_path: Path):
    path = tmp_path / ".ai-dev-kit.yaml"
    path.write_text('version: "1.0.0"\ndefault_backend: "bad"\nframeworks: {}\n')
    config = Config(path)
    errors = config.validate()
    assert any("Invalid default_backend" in e for e in errors)
