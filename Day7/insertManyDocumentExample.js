const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri,{ useUnifiedTopology: true } );

async function run() {
    try{
            var client = await mongoClient.connect();
            var dbName = client.db("NodeJS_Training");
            var collName = dbName.collection("emp");

            const insertDoc = [{ "empId": 202, "empName": "tara" },{"empId":203,"empName":"zara"}];
            //insert many example
            var result = await collName.insertMany(insertDoc);
            console.log(result);

            //Delete example
            var deleteResult = await collName.deleteOne({"empId" : 107});
            console.log(deleteResult);
        
            //console.log("Response of insertMany: Inserted Id:", result.insertedId);

    }
    catch(error)
    {
        console.log("Error", error)
    }

}

run();