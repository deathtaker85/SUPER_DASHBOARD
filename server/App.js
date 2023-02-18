const ObjectId = require('mongodb').ObjectID;
const express = require("express");
const api = express();
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb+srv://Randry_claude:KoronysMaster1886@cluster0.ijk4ncf.mongodb.net/test';
const connect = MongoClient.connect(MONGO_URL);

api.use(cors())
api.listen(2000,()=>console.log("server lancé"))

// initialisation des premieres api

api.get("/capteurs", (req, res) => {
    connect.then((client) => {
        console.log("connexion établie au cluster")
        collection_capteur = client.db("Dashboard_arduino").collection("Capteurs")
        collection_capteur.find().toArray((err, result) => {
            if (err) console.log(err);
            res.json(result)
            console.log("vous pouvez acceder aux donnnés via le lien http://127.0.0.1:1886/capteurs");
        })
    })
})



// insertion de donne donc create

api.get("/workspace/Create/:project_name/:type_carte_arduino/:code_arduino/:date_de_creation/:description",(req,res)=>{
    connect.then((client)=>{
        collection = client.db("Dashboard_arduino").collection("arduino_projects")
        collection.insertOne({
            "project_name":req.params.project_name,
            "type_carte_arduino":req.params.type_carte_arduino,
            "code_arduino":req.params.code_arduino,
            "date_de_creation":req.params.date_de_creation,
            "Description":req.params.description
        },(err,result)=>{
            if(err) throw err 
            console.log("commande entrée avec succès")
        })
    })
})

// lecture de données Read
api.get("/workspace/read",(req,res)=>{
    connect.then((client)=>{
        collection = client.db("Dashboard_arduino").collection("arduino_projects")
        collection.find().toArray((err,result)=>{
            res.json(result)
        })
    })
})

// la modification de donne donc le update 
api.get("/workspace/update/:project_name/:type_carte_arduino/:code_arduino/:date_de_creation/:description",(req,res)=>{
    connect.then((client)=>{
        collection = client.db("Dashboard_arduino").collection("arduino_projects")
        collection.updateOne({"project_name":req.params.project_name},
        {$set : {"type_carte_arduino":req.params.type_carte_arduino,
        "code_arduino":req.params.code_arduino,
        "date_de_creation":req.params.date_de_creation,
        "Description":req.params.description}})
    })
})


// la suppression de donne donc le delete










// CETTE ZONE EST DEDIE AU CONTROL DES API EXTERNES








//******************************************************** */

// ici on va gerer les api qui permettent de faire de la messagerie

// 
api.get("/Messagerie/read",(req,res)=>{
    connect.then((client)=>{
        collection = client.db("Dashboard_arduino").collection("MESSAGERIE")
        collection.find().toArray((err,result)=>{
            res.json(result)
        })
    })
})