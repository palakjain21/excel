const http = require("http");

const data = {
  name: "John",
  age: 30,
  occupation: "developer",
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "plain/text",
};
const server = http.createServer((req, res) => {
  res.writeHead(200, headers);
  res.write(JSON.stringify(data));
  res.end();
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
