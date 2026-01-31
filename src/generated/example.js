Certainly! Below is a clean, production-ready Node.js server using Express that listens on port `4001`. The code includes basic middleware and error handling.

**index.js**
```js
const express = require('express');

// Create Express app
const app = express();

// Middleware (Parsing JSON)
app.use(express.json());

// Basic health check route
app.get('/', (req, res) => {
  res.json({ message: 'Server running on port 4001' });
});

// Error handler middleware (for production)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

**How to run:**
1. Make sure you have `express` installed:
    ```bash
    npm install express
    ```
2. Run the server:
    ```bash
    node index.js
    ```

Your server will be accessible at http://localhost:4001/ and should respond with:
```json
{ "message": "Server running on port 4001" }
```