const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('static'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {tournaments: [{name: "Something", id: '1'}, {name: "Something 2", id: '2'}, {name: "Something 3", id: '3'}]});
});


app.get('/new_tournament', (req, res) => {
    res.render('new_tournament');
});


app.get('/tournament/:id', (req, res) => {
    
});


app.get('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(8080);