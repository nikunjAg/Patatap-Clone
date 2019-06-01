const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.static(__dirname + '/'));
console.log(__dirname);
app.get('/', (req, res, next) => {
    res.render('./Circles.html');
});
app.listen(PORT, ()=> {
    console.log(`App is running on PORT ${PORT}`)
});