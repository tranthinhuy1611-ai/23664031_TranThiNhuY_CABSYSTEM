const http = require("http");
const routeHandler = require("./routes");

const PORT = process.env.PORT || 3000;

function buildResponse(res) {
  res.status = (code = 200) => {
    res.statusCode = code;
    return res;
  };

  res.json = (payload) => {
    const statusCode = res.statusCode || 200;
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(payload, null, 2));
    return res;
  };

  res.send = (payload) => {
    const statusCode = res.statusCode || 200;
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(
      typeof payload === "string" ? payload : JSON.stringify(payload, null, 2),
    );
    return res;
  };

  return res;
}

const server = http.createServer((req, res) => {
  const response = buildResponse(res);
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      req.body = body ? JSON.parse(body) : {};
    } catch (e) {
      req.body = {};
    }

    routeHandler(req, response);
  });
});

server.listen(PORT, () => {
  console.log(`CAB System Demo MVC running at http://localhost:${PORT}`);
});
