# HTML Hello - 4Geeks Academy Starter Template

## Project Overview

A simple HTML/CSS/JavaScript starter template for beginners from 4Geeks Academy. It uses a Python Flask server to serve static HTML files.

## Architecture

- **Backend**: Python Flask (`server.py`) — serves static files
- **Port**: 5000 (0.0.0.0)
- **Language**: Python 3.12 with Flask

## Running the Project

The Flask development server runs via the "Start application" workflow:
```bash
python3 server.py
```

## Project Structure

- `server.py` — Flask server that serves static HTML files
- `index.html` — Main entry point (create this to display a webpage)
- `learn.json` — Project metadata

## How It Works

1. If `app.py` exists, it runs it and returns the output as HTML
2. If `index.html` exists, it serves that
3. Otherwise shows a 404 page

## Deployment

Configured for autoscale deployment using Gunicorn:
```
gunicorn --bind=0.0.0.0:5000 --reuse-port server:app
```
