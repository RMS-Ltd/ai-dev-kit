# E06:S09:T23 / ADR-021 — lean adopter tree OCI image (build context: this directory).
# docker build -f Dockerfile .   (from greenfield-install/)
# docker build -f greenfield-install/Dockerfile greenfield-install   (from repo root)
FROM alpine:3.20
COPY . /opt/adk/
LABEL org.opencontainers.image.source="https://github.com/RMS-Ltd/ai-dev-kit"
LABEL org.opencontainers.image.title="ai-dev-kit-greenfield"
LABEL org.opencontainers.image.description="Lean greenfield-install/ adopter bundle (FR-110)"
