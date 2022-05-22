const {MongoClient} = require('mongodb');

//connection url
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dName = "moviesdb";

async function main(){
    await client.connect();
    console.log('connected to mongodb');
    const db = client.db(dName);

    const collection = db.collection("movies");

    // const insertResult = await collection.insertMany([{ a: 1}, { a: 2}, { a: 3}]);
    // console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
    console.log('Inserted documents =>', findResult);

    return 'done';
}

main().then(console.log).catch(console.error).finally(() => client.close());