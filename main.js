const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('static'));
app.set('view engine', 'ejs');


if (!fs.existsSync('tournaments.json')) {
    fs.writeFileSync('tournaments.json', JSON.stringify([]));
}

const tournaments = JSON.parse(fs.readFileSync('tournaments.json'));

app.get('/', (req, res) => {
    res.render('index', {tournaments: tournaments});
});


app.get('/new_tournament', (req, res) => {
    tournaments.push({name: (tournaments.length + 1).toString(), id: new Date().getTime().toString()});
    fs.writeFileSync('tournaments.json', JSON.stringify(tournaments));
    res.redirect('/');
});


app.get('/tournament/:id', (req, res) => {
    res.status(200).send(req.params.id);
});


app.get('*', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(8080);