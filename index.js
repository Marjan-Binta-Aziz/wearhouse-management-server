const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();


//middlewire
app.use(cors());
//for get body
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.wntwp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
            await client.connect();
            const itemCollection = client.db('dbWarehouse').collection('item');
            app.get('/inventory', async(req, res) =>{
                const query = {};
                const cursor = itemCollection.find(query);
                const items = await cursor.toArray();
                res.send(items);
            })
    }
    finally{}
}
run().catch(console.dir);


app.get('/' , (req, res) => {
    res.send('warehouse-management-server')
})

app.listen(port,()=>{
    console.log('assignment-11-warehouse-management-server :', port);
})
