const express = require("express");
const path = require("path");

const messageRoute = require("./messageRoute");

const app = express();


app.use(express.json());




const pathHTML = path.join(__dirname, '../front/files');

app.use(express.static(pathHTML));

app.use('/img', express.static(path.join(__dirname, '../front/img')));
app.use('/scripts', express.static(path.join(__dirname, '../front/scripts')));

app.use('/api/messages', messageRoute);


app.listen(3000, () => {
    console.log('hi, im wasa and im innn http://localhost:3000');
});

