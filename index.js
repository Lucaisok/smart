const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.use(compression());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
