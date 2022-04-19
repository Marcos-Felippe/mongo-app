const conn = require('../db/connection');
const diconn = require('../db/connection');
const data = require('../db/comands');


module.exports = {
    async index(req, res) { 
        try{
            const db = await conn.run();
            const find = await data.findAllAnimals(db);
            await diconn.disc(conn);
    
            const message = "Are you sure that you want to delete ";
    
            res.render('pages/index', {
                animals: find,
                text: message,
                title: 'Animals List'
            });
        } catch(err){
            return res.status(400).send({error: 'Error get animals'})
        }
    },
    async create(req, res) {
        try{
            const db = await conn.run();
            const newAnimal = {name: req.body.name, type: req.body.type};
            await data.addAnimal(db, newAnimal);
            await diconn.disc(conn);
    
            res.redirect('/');
        } catch(err){
            return res.status(400).send({error: 'Error create new animal'})
        }
    },
    async update(req, res) {
        try{
            const db = await conn.run();
            const {name, type} = req.body;
            const newAnimal = {name, type};
            await data.updateAnimal(db, req.params.id, newAnimal);
            await diconn.disc(conn);
    
            res.redirect('/');
        } catch(err){
            return res.status(400).send({error: 'Error update animal'})
        }
    },
    async delete(req, res, next) {
        try{
            const db = await conn.run();
            await data.deleteAnimal(db, req.params.id);
            await diconn.disc(conn);
    
            res.redirect('/');
        } catch(err){
            return res.status(400).send({error: 'Error delete animal'})
        }
    }
}