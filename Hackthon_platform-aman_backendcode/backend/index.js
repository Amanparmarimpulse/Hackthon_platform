const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const DeveloperModel = require("./models/developer_profiledata");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;
const HOST = 'http://localhost';


// mongodb://localhost:27017/profile  

//mongodb+srv://amanparmar0715:maketeaminhackthon123@cluster0.t4eso1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://Devika_Verma:devikahackconnect12@cluster0.t4eso1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://amanparmar0715:maketeaminhackthon123@cluster0.t4eso1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.post('/developer', (req, res) => {
     DeveloperModel.create(req.body)
     .then(developerProfile => res.json(developerProfile))
     .catch(err => res.json(err));
});


app.get('/developers', (req, res) => {
    DeveloperModel.find()
      .then(developerProfiles => res.json(developerProfiles))
      .catch(err => res.json(err));
  });

app.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});
