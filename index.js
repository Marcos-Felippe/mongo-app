const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const routes = require('./src/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3300, () => {
    console.log('Sever is running in port 3300');
});