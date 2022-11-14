const { query } = require("express");
const express = require("express")
const saldodb = require("../libs/postgress")

const router = express.Router();

router.get("/addSaldo",(req,res)=>{
    res.json({
        mensaje: "saldo agregado"
    });
})

router.get("/minusSaldo",async (req,res)=>{

    const saldo = await getSaldo();
    res.json([saldo]);
})

async function getSaldo(){
    const client = await saldodb();
    const rta = await client.query('SELECT * FROM TASKS');
    return rta.rows;
}

//exportamos el modulo
module.exports = router;