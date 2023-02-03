const fs = require("fs");
const { readFile } = require("fs");// destructuring; var readFile=require("fs").readFile

const { MongoClient } = require("mongodb");// destructuring

const uri = "mongodb://127.0.0.1:27017/";// connection string

const mongoClient = new MongoClient(uri,{ useUnifiedTopology: true } );
mongoClient.connect()
    .then((client) => {
        // switch over to the db : dxcDb
        var dbName = client.db("NodeJS_Training");
        // select the collection
        var collName = dbName.collection("emp");

        const insertDoc = { "empId": 201, "empName": "sara" };
        collName.insertOne(insertDoc)
            .then((res) => {
                //console.log("Response of insertOne", res);
                console.log("Response of insertOne: Inserted Id:", res.insertedId);
                //console.log("Response of insertOne: Inserted Count:", res.insertedCount);
                
            })
            .catch((err) => {
                console.log("Error doing the insertOne operation", err);
                
            })


    })
    .catch((err) => {
        console.log("Error connecting to mongodb", err)
    })

    //using async and await
const fs = require("fs");
const { readFile } = require("fs");// destructuring; var readFile=require("fs").readFile

const { MongoClient } = require("mongodb");// destructuring

const uri = "mongodb://127.0.0.1:27017/";// connection string

const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });


async function run() {

    try {
        var client = await mongoClient.connect()

        // switch over to the db : dxcDb
        var dbName = client.db("dxcDb");
        // select the collection
        var collName = dbName.collection("emp");
        const insertDoc = { "empId": 202, "empName": "tara" };
        var res = await collName.insertOne(insertDoc);// promise is resolved then only res will be populated
        //console.log("Response of insertOne", res);
        console.log("Response of insertOne: Inserted Id:", res.insertedId);
        console.log("Response of insertOne: Inserted Count:", res.insertedCount);
    }
    catch (err) {
        console.log("Error", err)
    }

}
run();


