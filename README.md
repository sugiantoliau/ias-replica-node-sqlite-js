# replica-node-sqlite-js

## Description

A lightweight full-stack web application that dynamically renders user profiles based on URL query parameters. Built with a pure Vanilla JavaScript frontend that communicates with a Node.js REST API powered by a SQLite database. No heavy frameworks—just clean, modern web standards.

## Clone the Repository

Clone this repository to your local machine.

```bash
git clone <repository-url>
```

## Install Node.js

Make sure Node.js is installed. Then update npm by running one of the following commands:

```bash
npm install -g npm@latest
```

or

```bash
npm install -g npm@10.5.0
```

## Install Dependencies

Install all required dependencies:

```bash
npm install
```

Or install them individually:

```bash
npm install cors
npm install express
npm install sqlite3
```

## Start the Development Server

Start the development server:

```bash
npm run dev
```

Then open your browser and visit:

```text
http://localhost:8081
```

---

## Run in Production

Before deploying to production, replace the localhost API endpoint with your production domain.

Update the API URL in the following file:

```text
frontend-admin/shared/js/script.js

frontend-replica/shared/js/script.js
```

For example:

```javascript
// Development
const API_URL = "http://localhost:8081";

// Production
const API_URL = "https://your-domain.com";
```

## Optional Dependencies

If you plan to use MySQL, JWT authentication, or additional JSON features, install the following packages:

```bash
npm install jsonwebtoken
npm install lru-cache
npm install body-parser
npm install mysql@latest
npm install mysql2
npm install mssql
```

## Optional Generate the Folder Structure

If you want to view the project's overall folder structure, you can generate a text file by running:

```bash
tree /f /a > structure_folder.txt
```