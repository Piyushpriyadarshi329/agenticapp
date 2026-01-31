```javascript
// src/index.js

const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.send('welcome to home');
});

const PORT = process.env.PORT || 4001;

const server = app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server is running on port ${PORT}`);
});

const gracefulShutdown = () => {
  server.close(() => {
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
```