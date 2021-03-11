const express = require("express");
const app = express();
const compression = require("compression");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const { sendEmail } = require("./ses.js");
const email = `lucatomarelli1@gmail.com`;
const axios = require("axios");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(compression());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/contact", (req, res) => {
    console.log("from client: ", req.body);
    sendEmail(
        email,
        req.body.oggetto,
        `Nome: ${req.body.fullName}
    Email: ${req.body.email}
    Messaggio: ${req.body.text}`
    )
        .then(() => res.send({ success: true }))
        .catch((err) => {
            console.log(err);
            res.send({ success: false });
        });
});

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
