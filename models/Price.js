const mongoose = require('mongoose')
const Schema = mongoose.Schema

const priceSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    owned: Boolean
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Price', priceSchema)
