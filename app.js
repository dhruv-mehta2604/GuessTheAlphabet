const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

var helper = require('./helper');

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));

global.loner = 0;
global.ltwor = 0;
global.lthreer = 0;

app.get('/level1', (req, res) => {
    res.render('level1', { helper: helper })
});

app.get('/level2', (req, res) => {
    res.render('level2', { helper: helper })
});

app.get('/level3', (req, res) => {
    res.render('level3', { helper: helper })
});

app.get('/', (req, res) => {
    res.render('home')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})