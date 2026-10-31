# Docker Practice App

A lightweight multi-container web app for practicing Docker and CI/CD.

## Architecture

- **Frontend**: Nginx on port `80` (`frontend/`)
- **Backend**: Express API on port `5000` (`backend/`)
- **Orchestration**: Docker Compose (`docker-compose.yml`)
- **CI/CD**: GitHub Actions workflow (`.github/workflows/ci.yml`)

---

## Quick Start

### 1. Run with Docker Compose

```bash
docker compose up --build -d
```

- **Frontend**: [http://localhost](http://localhost)
- **Backend API**: [http://localhost:5000/api/info](http://localhost:5000/api/info)

### 2. View Logs & Stop

```bash
# View logs
docker compose logs -f

# Stop containers
docker compose down
```

---

## Project Structure

```text
docker_practice/
├── .github/workflows/ci.yml   # CI pipeline
├── backend/                   # Node.js/Express API (port 5000)
├── frontend/                  # Nginx static site (port 80)
└── docker-compose.yml         # Container stack orchestration
```
