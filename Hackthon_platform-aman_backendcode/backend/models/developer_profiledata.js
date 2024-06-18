const mongoose = require('mongoose');

// Define Mongoose schema
const developerProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Making email field unique
    },
    skills: {
        type: [String],
        required: true
    }
});

// Create Mongoose model
const DeveloperProfile = mongoose.model('DeveloperProfile', developerProfileSchema);

module.exports = DeveloperProfile;
