const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const DeveloperModel = require("./models/developer_profiledata");
const admin = require('firebase-admin');
const serviceAccount = require('./firebasekey/serviceAccountKey.json');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

mongoose.connect(`${process.env.MONGO_URL}`);

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
