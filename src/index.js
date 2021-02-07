const express = require('express');
const { appendFile } = require('fs');
const app = express();
const path = require('path');


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./Routes/index'));

app.use(express.static(path.join(__dirname, 'public')));




app.listen(3000, () => {
    console.log('server on port 3000');
})