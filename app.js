// const express = require("express");
import express from 'express';
import bodyParser from "body-parser";
import logger from 'morgan';
import expressLayouts from "express-ejs-layouts";
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
