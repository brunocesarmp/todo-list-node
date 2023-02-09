const express = require("express");
const app = express();

const indexRoute = require("./routers/index")
const todoRoute = require("./routers/todo")

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use("/", indexRoute);
app.use("/todos", todoRoute);

module.exports = app;