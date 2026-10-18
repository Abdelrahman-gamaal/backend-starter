# Backend Starter

A Node.js backend starter built with Express.js, Sequelize, and MySQL. The project follows a modular structure with separate configuration, middleware, routes, and utility files.

## Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- mysql2
- dotenv
- Joi
- Nodemon

## Project Structure

```text
.
├── .env.example
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── src/
    ├── app.js
    ├── config/
    │   ├── connectDatabase.js
    │   ├── database.js
    │   └── env.js
    ├── middleware/
    │   ├── error.middleware.js
    │   └── notFound.middleware.js
    ├── modules/
    │   └── health/
    │       └── health.routes.js
    └── utils/
        └── AppError.js
```

## Getting Started

### Requirements

- Node.js
- MySQL

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Configure the following variables in `.env`:

| Variable      | Description                  |
| ------------- | ---------------------------- |
| `SERVER_PORT` | Port used by the HTTP server |
| `DB_HOST`     | MySQL server hostname        |
| `DB_PORT`     | MySQL server port            |
| `DB_NAME`     | Database name                |
| `DB_USER`     | MySQL username               |
| `DB_PASSWORD` | MySQL password               |
| `JWT_SECRET`  | Secret used for signing JWTs |
| `NODE_ENV`    | Application environment      |

Example configuration:

```env
SERVER_PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

JWT_SECRET=replace_with_a_secure_secret
NODE_ENV=development
```

Replace the example values with your actual local configuration.

**Security:** Never commit `.env` or expose database credentials or JWT secrets. Keep `.env.example` free of real secrets.

### 3. Run in Development Mode

```bash
npm run dev
```

### 4. Run in Production Mode

```bash
npm start
```

## Architecture

### Application Startup

- `server.js`: Coordinates application startup and starts the HTTP server after the database connection succeeds.
- `src/app.js`: Configures the Express application, middleware, and routes.
- `src/config/database.js`: Creates and configures the Sequelize instance.
- `src/config/connectDatabase.js`: Establishes and verifies the database connection.
- `src/config/env.js`: Centralizes environment configuration.

### Middleware

- `error.middleware.js`: Handles application errors.
- `notFound.middleware.js`: Handles requests to undefined routes.

### Modules

- `health/health.routes.js`: Defines the health module's routes.

### Utilities

- `AppError.js`: Provides a reusable application error class.

## Database Startup Behavior

The application verifies the database connection before starting the HTTP server.

- If the database connection succeeds, the HTTP server starts listening on the configured port.
- If the initial database connection fails, the HTTP server does not start.

## Available Scripts

| Command       | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `npm start`   | Starts the application using Node.js                            |
| `npm run dev` | Starts the application using Nodemon                            |
| `npm test`    | Placeholder test script; automated tests are not configured yet |

## License

This project is licensed under the ISC License.
