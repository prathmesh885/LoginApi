const express = require ("express");
require("../src/db/conn")
const MensRanking = require("../src/models/mens")
const res = require("express/lib/response");
const router = require ("./routers/men")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router)

app.listen(port,()=>{
    console.log(`connection is live ${port}`);
})




