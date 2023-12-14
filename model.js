const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const itemSchema = new Schema (
    {
        title: {
            type: String,
            required: true,
        },

        roll: {
            type: String,
            required: true,
        },

    }
);


const Item = model('item', itemSchema);

module.exports = Item;