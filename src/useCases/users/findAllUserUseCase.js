const UserRepository = require('../../repositories/userRepository')
const userRepository = new UserRepository()

module.exports = class FindAllUserUseCase {
  async execute (id) {
    const data = await userRepository.findAll()
    return { status: 200, message: 'success!', data }
  }
}
