import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>${bandName}🦍</h1> <style>body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}</style>`);
  console.log(req.body);
});
