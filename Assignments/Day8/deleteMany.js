const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
    try {
        var client = await mongoClient.connect()

        var dbName = client.db("NodeJS_Training");
        var collName = dbName.collection("employees");

         //Delete the employees with name Sara
        searchObj={empID : {$gte : 7}};
        collName.deleteMany(searchObj)
        .then(data=>{ 
            console.log("Data ",data);
            mongoClient.close();
        })
        .catch(err=>{
            console.log("Error in DeleteMany",err)
            mongoClient.close();
        })
    }
    catch (err) {
        
        console.log("Error", err)
    }     

}
run();

