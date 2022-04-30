const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//-----------------------------------//
// ========database info ====== =//
// DB_NAME= warehouseManagement
//DB_PASS= kbIeHpmEh5u50Ia6
//BDGRL1ZGjH2l5P8t
//-----------------------------------//
const uri = "mongodb+srv://DB_NAME:DB_PASS@cluster0.wntwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
            await client.connect();
            const itemCollection = client.db('dbWarehouse').collection('item');
    }
    finally{}
}



app.get('/' , (req, res) => {
    res.send('warehouse-management-server')
})
 
app.listen(port,()=>{
    console.log('assignment-11-warehouse-management-server :', port);
})
