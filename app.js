'use strict'
const express = require ('express')

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express()
app.get('/', (req,res) => {
    res.send('<h2 style="color: purple">Hello World!<h2>');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);