import express from "express";
const app = express();
app.use(express.json);

app.get("/", (req, res) => {
  return res.render("Hello World");
});

app.post("/api/data", (req, res) => {
  return res.send(200);
});

app.listen(3000, () => {
  console.log("Application listening at port 3000");
});
