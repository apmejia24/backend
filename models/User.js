const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
    name: String,
    email: String,
    photoURL:  {
        type: String,
        default: 'http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png'
    },
    points: {
        type: Number,
        default: 0
    },
    contribution: {
        type: Schema.Types.ObjectId,
        ref: 'Contribution'
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = mongoose.model('User', userSchema)
