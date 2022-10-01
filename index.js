const express = require("express");
const {port} = require("./config");
const connection = require("./database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({
        name: "nodejs-railway",
        version: "1.0.0",
        author: "Not Found"
    })
})

app.get("/posts", (req, res) => {
    connection.query("SELECT * FROM posts", (error, posts) => {
        if(error) {
            return res.json({
                success: false,
                message: "A wild Error has appeared"
            });
        } else {
            return res.json({
                success: true,
                posts
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
})