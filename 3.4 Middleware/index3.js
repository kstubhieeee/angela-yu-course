import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Enter method: ", req.method);
  console.log("Enter URL", req.url);
  next();
}

app.use(logger);

app.get("/about", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
