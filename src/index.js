const express = require('express');
const { appendFile } = require('fs');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./Routes/index'));

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));



server.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})

// app.listen(3000, () => {
//     console.log('server on port 3000');
// })