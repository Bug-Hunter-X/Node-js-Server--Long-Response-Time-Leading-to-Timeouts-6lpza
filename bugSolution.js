const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long running task (e.g. database query)
  const timeoutId = setTimeout(() => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Request timed out');
  }, 10000); // Timeout after 10 seconds

  setTimeout(() => {
    clearTimeout(timeoutId);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});