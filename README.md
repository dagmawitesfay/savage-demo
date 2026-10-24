# 21 Savage Fan Message Board

A small Node.js + Express app that stores fan messages in MongoDB and lets users add, upvote, downvote, and delete posts from a simple EJS front end.

## Features

- Display a list of saved messages on the home page
- Add a new message with a name and text
- Increase or decrease a message's thumbs-up/down count
- Delete a message from the database
- Uses Express for routing and MongoDB for persistence

## Tech Stack

- Node.js
- Express
- EJS templates
- MongoDB Node.js driver
- JavaScript front-end logic for client-side actions

## Prerequisites

- Node.js installed
- MongoDB instance or Atlas cluster available
- A valid MongoDB connection string

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the MongoDB connection details in `server.js`:
   - `url`
   - `dbName` (currently set to `demo`)

## Running the app

Start the server with:

```bash
npm start
```

Or run it in development mode with auto-reload:

```bash
npm run savage
```

Then open:

```text
http://localhost:3000
```

## Notes

The app listens on port `3000` and connects to MongoDB when the server starts. The messages are stored in the `messages` collection under the configured database.

