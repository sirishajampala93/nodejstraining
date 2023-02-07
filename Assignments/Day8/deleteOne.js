const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
    try {
        var client = await mongoClient.connect()

        var dbName = client.db("NodeJS_Training");
        var collName = dbName.collection("employees");

        //Delete the employee Sean details from the database
        // searchObj={empName:"Sean"};
        // collName.deleteOne(searchObj)
        // .then(data=>{ 
        //     console.log("Data ",data);
        //     mongoClient.close();
        // })
        // .catch(err=>{
        //     console.log("Error in DeleteOne",err)
        //     mongoClient.close();
        // })

        // Delete the first employee details from the collection

        
        collName.deleteOne({})
        .then(data=>{ 
            console.log("Data ",data);
            mongoClient.close();
        })
        .catch(err=>{
            console.log("Error in DeleteOne",err)
            mongoClient.close();
        })

       
    }
    catch (err) {
        
        console.log("Error", err)
    }
        

}
run();