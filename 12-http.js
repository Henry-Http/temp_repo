const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page!");
  }
  if (req.url === "/about") {
    res.end("A little about us!");
  }
  if (req.url != "/" && req.url != "/about") {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page</p>
    <a href="/">back home</a>`);
  }
});
server.listen(5000);
