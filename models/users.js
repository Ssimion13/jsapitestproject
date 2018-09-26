const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: Number,
        index: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    ip: {
        type: String,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    created_at: {
        type: String,
    },
    updated_at: {
        type: String,
    }
  }, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model("user", userSchema)

