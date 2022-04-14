const { Schema, model } = require('mongoose');

// Do we need? 
const bcrypt = require('bcrypt');


const cardSchema = new Schema(
    {
        uid: {
            type: Number,
            required: true,
            unique: true,
            index: true
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

// Model
const Cards = model("Card", cardSchema);
module.exports = Cards;