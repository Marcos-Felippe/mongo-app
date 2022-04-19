require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.URI;
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to server");
    } finally {
        return client.db("testsdb");
    }
}

async function disc(conn) {
    try {
        await conn.close();
    } finally {
        return console.log("Disconnected successfully to server");
    }
}

module.exports = { run, disc }