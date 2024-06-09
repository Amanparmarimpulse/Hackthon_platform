const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const DeveloperModel = require("./models/developer_profiledata");
const admin = require('firebase-admin');
const serviceAccount = require('./firebasekey/serviceAccountKey.json');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;
const HOST = 'http://localhost';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// mongodb://localhost:27017/profile  

//mongodb+srv://amanparmar0715:maketeaminhackthon123@cluster0.t4eso1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://Devika_Verma:devikahackconnect12@cluster0.t4eso1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongoose.connect("mongodb+srv://amanparmar0715:maketeaminhackthon123@cluster0.t4eso1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.post('/developer', (req, res) => {
     DeveloperModel.create(req.body)
     .then(developerProfile => res.json(developerProfile))
     .catch(err => res.json(err));
});

app.post('/checkUser', async (req, res) => {
  const { email } = req.body;
  try {
      const userRecord = await admin.auth().getUserByEmail(email);
      res.status(200).send({ exists: true });
  } catch (error) {
      if (error.code === 'auth/user-not-found') {
          res.status(404).send({ exists: false });
      } else {
          res.status(500).send({ error: error.message });
      }
  }
});

app.get('/developers', (req, res) => {
    DeveloperModel.find()
      .then(developerProfiles => res.json(developerProfiles))
      .catch(err => res.json(err));
  });

app.listen(PORT, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});
