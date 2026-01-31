Certainly! Here’s a clean, production-ready Node.js API using Express to serve a `/home` route that returns a JSON response.

**Dependencies:**  
- `express`

#### Install express if you haven’t:
```bash
npm install express
```

---

### `server.js`

```javascript
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the /home route
app.get('/home', (req, res) => {
  res.status(200).json({ message: 'welcome to home' });
});

// Fallback for undefined routes (optional best practice)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

**Usage:**

- Start your server:
  ```bash
  node server.js
  ```
- Make a GET request to `http://localhost:3000/home`
- You will receive:
  ```json
  {
    "message": "welcome to home"
  }
  ```

Let me know if you need the code structured differently or want advanced features (e.g., async handling, logging, etc.)!