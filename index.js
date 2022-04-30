const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
 
app.get('/' , (req, res) => {
    res.send('warehouse-management-server')
})
 
app.listen(port,()=>{
    console.log('assignment-11-warehouse-management-server :', port);
})
