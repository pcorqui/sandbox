const express = require("express")

const router = express.Router();


router.get("/usuarios", (req, res) => {
    res.json([
        {
            name: "techt"
        },
        {
            name: "perro"
        },
        {
            name: "gato"
        }
    ]);
});

//exportamos el modulo
module.exports = router;