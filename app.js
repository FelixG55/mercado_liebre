const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.listen(port, () => console.log(`Respondiendo en el puerto ${port}`));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})
app.get('/login.html', (req,res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.get('/register.html', (req,res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})