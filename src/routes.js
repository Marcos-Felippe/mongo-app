const express = require('express');
const routes = express.Router();

const AnimalController = require('./controllers/animalController')


routes.get('/', AnimalController.index);

routes.get('/form', (req, res) => {
    res.render('pages/form', { title: 'Add New Animal' })
});

routes.post('/form', AnimalController.create);

routes.get('/update/:id', (req, res) => {
    res.render('pages/update', { title: 'Add New Animal', id: req.params.id });
});

routes.post('/update/:id', AnimalController.update);

routes.get('/delete/:id', AnimalController.delete);

routes.get('/about', function(req, res) {
    res.render('pages/about');
});


module.exports = routes;