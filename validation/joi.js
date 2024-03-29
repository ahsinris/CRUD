const joi = require('joi')

class Validation {
    async createUser(req, res, next) {
        try {
            const schema = joi.object({
                userName: joi.string().required(),
                emailId: joi.string().email().required(),
                password: joi.string().required()

            })
            await schema.validateAsync(req.body)
            next()
        }
        catch (e) {
            return res.status(400).json({
                status: 400,
                message: "validation error"+e
            })
        }
    }
}

module.exports=new Validation()