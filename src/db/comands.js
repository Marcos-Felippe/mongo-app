const ObjectId = require("mongodb").ObjectId;

async function findAllAnimals(conn) {
    try {
        const data = await conn.collection('animals').find().toArray();
        return data;
    } catch(err) {
        console.log('Erro: ' + err);
        return false;
    }
}

async function addAnimal(conn, doc) {
    try {
        await conn.collection('animals').insertOne(doc);
        console.log("Incerted successfully to server");
    } catch(err) {
        console.log('Erro: ' + err);
    }
}

async function updateAnimal(conn, id, doc) {
    try {
        await conn.collection('animals').updateOne({ _id: new ObjectId(id) }, {$set: doc});
    } catch (err) {
        console.log('Erro: ' + err);
    }
}

async function deleteAnimal(conn, id) {
    try {
        await conn.collection('animals').deleteOne({ _id: new ObjectId(id) });
    } catch (err) {
        console.log('Erro: ' + err);
    }
}

module.exports = { findAllAnimals, addAnimal, updateAnimal, deleteAnimal }