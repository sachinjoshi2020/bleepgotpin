import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'firstname must be at least three charactars long']
    },
    lastname: {
      type: String
    }
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Email must be at least five charactars long ']
  },

  password: {
    type: String,
    required: true,
    select: false
  }
})

userSchema.methods.genAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.PRIVATEJWTSECRET)
  return token
}

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user', userSchema)

export default userModel
