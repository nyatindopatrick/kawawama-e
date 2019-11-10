// const express = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logger("dev"));

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use("/", require("./routes"));

app.listen(port, () => console.log(`Server running on ${port}`));
