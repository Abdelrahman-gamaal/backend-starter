# Backend Starter

A reusable Node.js and Express backend starter template built with a feature-based architecture.

## Features

- Node.js with ES Modules
- Express.js
- Environment variables using dotenv
- Centralized error handling
- Custom `AppError` class
- 404 Not Found middleware
- Health check endpoint
- Git ignore configuration

## Requirements

- Node.js
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/Abdelrahman-gamaal/backend-starter.git
cd backend-starter
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Configure the variables in `.env` before running the application.

## Run the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## Health Check

```http
GET /health
```

## License

Not specified yet.
