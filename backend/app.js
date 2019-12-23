const express = require('express');

const app = express();

// app.get('/', function(req, res){
//     res.send('hello express');
// })

var path = require('path');
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, `../html`, `homepage.html`));
})


const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Server is running at http://localhost:${PORT}`);
})
