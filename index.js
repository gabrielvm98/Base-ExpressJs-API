const express = require('express')
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route.js")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://admin:7B6laoP62wcUuZUO@backenddb-cluster0.em7xc.mongodb.net/Node-Base-API?retryWrites=true&w=majority&appName=BackendDB-Cluster0')
.then(() => {
    console.log('DB Connected');
    app.listen(3000, () => {
        console.log('Serever running on port 3000')
    })
});


app.use("/api/product", productRoute);

app.get('/', function (req, res) {
  res.send('Hello World 2')
})