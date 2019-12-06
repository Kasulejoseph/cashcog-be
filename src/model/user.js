import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String

    }
})



const User = mongoose.model('Users', userSchema)

export default User