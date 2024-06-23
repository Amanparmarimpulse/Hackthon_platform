const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const DeveloperModel = require("./models/developer_profiledata");

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// Initialize Firebase Admin SDK
// Initialize Firebase Admin SDK


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

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
  console.log(`Server is running on port ${PORT}`);
});
