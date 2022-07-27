import express from "express";
const app = express();
app.set("port", process.env.PORT || 8000);

app.get("/", function (req, res) {
  res.send("Express on Heroku!");
});

app.listen(app.get("port"), () => {
  console.log(`Express を ${app.get("port")} ポートで起動します`);
});
