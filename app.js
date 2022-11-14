const express = require('express');
const controllersApi = require("./routes/controllers")

const app = express();
const port = 3000;

controllersApi(app);


app.get('/', (req,res) =>{
    res.send('hola perro');
})

app.listen(port, ()=>{
    console.log(`aplicacion corriendo en el puerto ${port}`);
})