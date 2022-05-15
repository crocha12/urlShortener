const CreateUserUseCase = require('../useCases/createUserUseCase')
const RemoveUserUseCase = require('../useCases/removeUserUseCase')
const FindAllUserUseCase = require('../useCases/findAllUserUseCase')

const createUserUseCase = new CreateUserUseCase()
const removeUserUseCase = new RemoveUserUseCase()
const findAllUserUseCase = new FindAllUserUseCase()

module.exports = class UserController {
  async create (req, res) {
    const { username, email, password, confirmPassword } = req.body
    let result
    try {
      result = await createUserUseCase.execute(username, email, password, confirmPassword)
    } catch (err) {
      return res.status(500).json(err)
    }
    const { status, message, data } = result
    return res.status(status).json({ message, data })
  }

  async remove (req, res) {
    const { id } = req.params
    let result
    try {
      result = await removeUserUseCase.execute(id)
    } catch (err) {
      return res.status(500).json(err)
    }
    const { status, message, data } = result
    return res.status(status).json({ message, data })
  }

  async all (req, res) {
    const result = await findAllUserUseCase.execute()
    const { status, message, data } = result
    return res.status(status).json({ message, data })
  }
}
