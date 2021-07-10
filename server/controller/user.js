const { User } = require('../models')
const { compare } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')

class Controller {
    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(data => {
                if (!email || !password) throw ({ msg: "password or email cannot be empty!", code: 400 })
                if (!data) throw ({ msg: "invalid email or password!", code: 400 })
                let checkPass = compare(password, data.password)
                if (!checkPass) throw ({ msg: "invalid email or password!", code: 400 })
                let param = {
                    id: data.id,
                    name: data.name,
                    isAdmin: data.isAdmin
                }
                let token = generateToken(param)
                res.status(200).json({ token, param })
            })
            .catch(err => {
                next(err)
            })
    }

    static register(req, res, next) {
        User.create(req.body)
            .then(data => {
                res.status(201).json({ id: data.id, email: data.email })
            })
            .catch(err => {
                next(err)
                console.log(err);
            })
    }

    static read(req,res,next) {
        User.findAll({
            order : [['id', 'ASC']]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err);
            next(err)
        })
    }
}

module.exports = Controller