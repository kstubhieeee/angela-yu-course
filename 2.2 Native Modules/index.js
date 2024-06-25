const fs = require("fs");
fs.writeFile("message1.txt", "Hello Kaustubh", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("./message1.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
