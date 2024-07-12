import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  //   console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";
  if (day === 6 || day === 0) {
    type = "a weekend";
    adv = "its time to have some fun";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
