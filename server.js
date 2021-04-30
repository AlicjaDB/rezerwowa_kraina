const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = process.env.PORT ||5000;


const MongoClient = require("mongodb").MongoClient;

const connectionString =`mongodb+srv://alicjadb:alicjadb@cluster0.hcija.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

MongoClient.connect(connectionString,{useUnifiedTopology:true})
    .then(client => {
        console.log("Połaczono z bazą danych");
        const db =client.db("nowabazadanych");
        const nazwakolekcji = db.collection('nazwakolekcji');

        server.set("view engine", "ejs");
        server.get("/", function (req, res){
            // res.send("Hello World");
            const cursor = db.collection('nazwakolekcji')
            .find().toArray()
            .then(result => {
            console.log(result)
            res.render("index.ejs",{
            danezBazy: result
            });
        })
            .catch(error => console.error(error));
        })

        server.post("/someuserdata", function(req, res){
            res.send("Tu tez coś będzie")
            console.log(req.body)
            nazwakolekcji.insertOne(req.body)
            .then(result => console.log(result))
            .catch(error => console.error(error))
        })
        server.listen(port, (err) => {
        if(err) {return console.log(`Błąd ${err}`)}
        console.log(`Strona działa na porcie ${port}`)
        })
    })
        .catch(error => console.error(error))

    server.use(bodyParser.urlencoded({extended: true}));
    server.use(bodyParser.json());

    server.use(express.static(__dirname + '/public'));

    