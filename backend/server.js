const express = require("express")
const mysql = require("mysql")
const cors = require("cors")


const app = express()
app.use(cors())



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "PolTest"
})


app.get('/', (req, res)=>{
    return res.json("Test")
})

app.get('/Test', (req, res)=>{
    const sql = "SELECT * FROM Testy"
    db.query(sql, (err, data) =>{
        if(err) return res.json("Błąd")
        else return res.json(data) 
    })
})

app.listen(8080, ()=>{
    console.log("Serwer Działa")
})