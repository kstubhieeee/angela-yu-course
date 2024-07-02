import express from "express";
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

app.get("/", (req, res) => {
  res.send("yooooooooo");
});

app.get("/info", (req, res) => {
  res.send("<h1>Kaustubh is a okayish programmer</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Kaustubh Bane</h1><br><h3>9321572497</h3>");
});
