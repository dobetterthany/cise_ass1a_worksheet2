const express = require("express");
const articles = require("C:/Users/kkj96/CISE_React/cise_ass1a_worksheet2/backend/dummydata/articles.js");
const server = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000

server.get('/api/articles', (req,res) => {
    res.json(articles);
    console.log("lala")
})

server.get('/api/articles/:id', (req,res) => {
    console.log("test");
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
})

server.listen(5000, console.log('server is working and listening PORT ${PORT}'));