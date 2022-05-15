const userModel = require('../models/userModel')

module.exports = class UserRepository {
  async findByEmail (email) {
    const user = await userModel.findOne({ email })
    return user
  }

  async findById (id) {
    const user = await userModel.findOne({ id })
    return user
  }

  async findAll () {
    return await userModel.find()
  }

  create (username, email, password) {
    userModel.create({ username, email, password }, (error, user) => {
      if (error) {
        throw new Error(error)
      }
      return user
    })
  }

  async remove (_id) {
    return await userModel.findOneAndRemove({ _id })
  }
}
