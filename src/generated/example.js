Here’s a clean, production-ready starter for `src/index.js`:

```js
// src/index.js

require('dotenv').config();
const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Simple health check route
app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
```

**Instructions:**

1. Be sure to create a `src` directory in your project root.
2. Place this code in `src/index.js`.
3. Install necessary dependencies:

```bash
npm install express dotenv
```

4. (Optional) Add a `.env` file at the project root with `PORT=3000` or your desired port.