import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    uuid: {
        type: String,
        unique: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String

    }
})
userSchema.virtual('expenses', {
    ref: 'Expenses',
    localField: 'uuid',
    foreignField: 'uuid'
})

userSchema.methods.toJSON = function () {
    const userObj = this.toObject()
    delete userObj.__v
    delete userObj._id
    return userObj
}

const User = mongoose.model('Users', userSchema)

export default User