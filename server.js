const express =  require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/skill-cert', (req, res) => {
    res.send("<a href='/skill-cert'></a>")
})

app.get('/skill-cert', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'skill-cert.html'));
});

app.get('/', (req, res) => {
    res.redirect('/index');
});

console.log(path.join(__dirname, 'public'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
