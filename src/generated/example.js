Sure! Here is a clean, production-ready `index.js` file for your described scenario, assuming your project's structure is as follows:

```
your-repo/
├── src/
│   └── index.js
├── package.json
...
```

### **src/index.js**

```js
const express = require('express');

const app = express();

app.get('/home', (req, res) => {
  res.send('welcome to home');
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

**Notes:**

- Ensure you have installed `express` by running:  
  ```
  npm install express
  ```
- To run your server:
  ```
  node src/index.js
  ```

This code creates an Express server, defines the `/home` route, and starts the server on port 4001.