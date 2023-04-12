const express = require("express");
const exphbs = require("express-handlebars");
const { render } = require("express/lib/response");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/:page?", (req, res) => {
  const pages = ["about", "portfolio", "contact"];

  if (pages.includes(req.params.page)) {
    res.render(req.params.page);
  } else {
    res.render("index");
  }
});

/* app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.get("/contact", (req, res) => {
  res.render("contact");
}); */

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
