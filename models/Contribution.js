const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contributionSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    material: {
        type: String,
        enum: ['PAPER', 'PET', 'GLASS']
    },
    weight: Number
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Contribution', contributionSchema)
