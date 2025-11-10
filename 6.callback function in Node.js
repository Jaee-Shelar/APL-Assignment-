// Import the built-in HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send the response to browser
  res.write('<h1>Hello</h1>');
  
  // End the response
  res.end();
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});



//
