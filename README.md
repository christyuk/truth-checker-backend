# Truth Checker Backend

Backend API for the Truth Checker full-stack application.

## Live API
https://truth-checker-backend.onrender.com

## Health Check
GET /health

## Auth
POST /api/auth/login

Demo Credentials:
Username: test
Password: test123

## Truth Check API
POST /api/truth/check

Sample Request:
{
  "text": "The earth is round"
}

## Tech Stack
- Node.js
- Express
- JWT Authentication
- REST API
- Render Deployment

## Notes
Backend is hosted on Render free tier and may take ~30 seconds to wake up on first request.
