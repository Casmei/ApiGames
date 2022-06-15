const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const router = require("./routes")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', router)

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});

