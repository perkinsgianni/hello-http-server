// import http module in node
const http = require('http');

// create server object that can send headers and body response
const server = http.createServer((req, res) => {
    // respond with status code of 200 (code for OK) as header
    res.writeHead(200);
    // log each GET (browser url) request path
    console.log(`Received GET request for: ${req.url}`);
    // respond requests with text as body
    res.end("Hello World");
  });
  
  // add listener so server can handle incoming connections (port, hostname, backlog, callback function)
  server.listen(8080, 'localhost', () => {
      // log connections
      console.log('Server is listening on localhost:8080')
  });