
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to CharmersPay API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
