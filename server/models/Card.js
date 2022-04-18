// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');


// Schema
const Schema = mongoose.Schema;
const cardSchema = new Schema(
    {
        uid: {
            type: Number,
            required: true,
            unique: true
        },
        pair_id: {
            type: Number,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        },
        stat: {
            type: String,
        },
        topic: {
            type: String,
            required: true
        }
    },
    // add virtuals
    {
        toJSON: {
            virtuals: true
        }
    }
);

// model
const Cards = mongoose.model("Card", cardSchema);

module.exports = Cards;