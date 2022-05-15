const UserRepository = require('../../repositories/userRepository')
const userRepository = new UserRepository()

module.exports = class CreateUserUseCase {
  async execute (username, email, password, confirmPassword) {
    if (!username || !email || !password || !confirmPassword) {
      return { status: 400, message: 'there are missing params!' }
    }
    if (password !== confirmPassword) {
      return { status: 400, message: 'password does not match!' }
    }
    const user = await userRepository.findByEmail(email)
    if (user) {
      return { status: 400, message: 'user already exists!' }
    }
    userRepository.create(username, email, password)
    return { status: 201, message: 'created!' }
  }
}
