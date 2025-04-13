// Import necessary modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Set up middleware to serve static files (like CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
// Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About page route
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Projects page route
app.get('/projects/:id', (req, res) => {
  // Here you would retrieve the project with the specified ID from your database
  // and render a page to display details about that project
  const projectId = req.params.id;
  // For now, let's just send a simple response
  res.send(`Project details for ID: ${projectId}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
