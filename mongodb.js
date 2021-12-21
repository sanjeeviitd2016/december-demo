const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost/27017';
const client = new MongoClient(url);

const database = 'School';

async function dbConnection() {

    const result = await client.connect();
    const db = result.db(database);
    return db.collection('student');
    // const response= await collection.find().toArray();

    // console.log(response);
}

module.exports= dbConnection;