Certainly! Here’s a production-ready example of a simple Express.js server in Node.js that exposes a **/home** endpoint and responds with `"welcome to home"`.

```javascript
// app.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// /home API endpoint
app.get('/home', (req, res) => {
  res.status(200).json({ message: 'welcome to home' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

**Instructions to run:**
1. Save the code as `app.js`.
2. Install dependencies:  
   ```sh
   npm install express
   ```
3. Run the server:  
   ```sh
   node app.js
   ```
4. Make a GET request to [http://localhost:3000/home](http://localhost:3000/home).

**Sample Response:**
```json
{
  "message": "welcome to home"
}
```
Let me know if you need this expanded for a specific framework, router structure, or with validation/middleware!