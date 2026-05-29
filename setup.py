"""
Setup configuration for ai-dev-kit CLI tool.
"""

from setuptools import setup, find_packages
from pathlib import Path

# Read version from cli/__init__.py
def get_version():
    """Get version from cli/__init__.py."""
    init_file = Path(__file__).parent / "cli" / "__init__.py"
    if init_file.exists():
        with open(init_file, "r", encoding="utf-8") as f:
            for line in f:
                if line.startswith("__version__"):
                    return line.split("=")[1].strip().strip('"').strip("'")
    return "0.1.0"

# Read README for long description
readme_file = Path(__file__).parent / "README.md"
long_description = readme_file.read_text(encoding="utf-8") if readme_file.exists() else ""

setup(
    name="ai-dev-kit",
    version=get_version(),
    description="Unified CLI tool for managing AI Dev Kit framework dependencies and workflows",
    long_description=long_description,
    long_description_content_type="text/markdown",
    author="AI Dev Kit Team",
    author_email="",
    url="https://github.com/earlution/ai-dev-kit",
    project_urls={
        "Documentation": "https://github.com/earlution/ai-dev-kit/tree/main/docs/documentation",
        "Workflow Documentation": "https://github.com/earlution/ai-dev-kit/tree/main/packages/frameworks/workflow%20mgt/workflows",
        "Source": "https://github.com/earlution/ai-dev-kit",
        "Tracker": "https://github.com/earlution/ai-dev-kit/issues",
    },
    packages=find_packages(exclude=["tests", "tests.*"]),
    python_requires=">=3.8",
    install_requires=[
        "pyyaml>=6.0",
    ],
    extras_require={
        "dev": [
            "pytest>=7.0",
            "pytest-cov>=4.0",
            "pytest-mock>=3.10",
            "black>=23.0",
            "flake8>=6.0",
            "mypy>=1.0",
        ],
    },
    entry_points={
        "console_scripts": [
            "ai-dev-kit=cli.main:main",
        ],
    },
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Software Development :: Version Control :: Git",
        "Topic :: System :: Systems Administration",
    ],
    keywords="cli, framework, dependency-management, git, workflow, documentation, automation",
    include_package_data=True,
    zip_safe=False,
)

