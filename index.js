const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.json({
        name: "nodejs-railway",
        version: "1.0.0",
        author: "Not Found"
    })
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
})