const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view-engine', 'hbs');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
console.log(__dirname);
app.get('/', (req, res, next) => {
    res.render('Circles.hbs');
});
app.listen(PORT, ()=> {
    console.log(`App is running on PORT ${PORT}`)
});