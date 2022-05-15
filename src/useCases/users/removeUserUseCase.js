const UserRepository = require('../../repositories/userRepository')
const userRepository = new UserRepository()

module.exports = class RemoveUserUseCase {
  async execute (id) {
    if (!id) {
      return { status: 400, message: 'there are missing params!' }
    }
    const user = await userRepository.remove(id)
    if (!user) {
      return { status: 404, message: 'User not found!' }
    }
    return { status: 200, message: 'success!' }
  }
}
