const cloneFolder = '../Day3';
const fs = require('fs');

fs.readdir(cloneFolder, (err, files) => {
 
    if(err == null)
    {
        for(var i =0; i<files.length ; i++)
        {
            console.log (files[i]);
        }

    }
    else{
        console.log("Error is :"+err);

    }

});