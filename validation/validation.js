const Joi = require('joi')

const signUpValidation = (data) => {
    // const roles = ["admin", "technician", "user"];

    const Schema = Joi.object({
        firstName : Joi.string().required().min(4),
        lastName : Joi.string().required().min(4),
        email : Joi.string().required().min(6).email(),
        password : Joi.string().required().min(6),
        role : Joi.string()      
    //     role: Joi.any().valid(...roles)
    })
    return Schema.validate(data)
};

const signInValidation = (data) => {
    const Schema = Joi.object({
        email : Joi.string().required().email().min(6),
        password : Joi.string().required().min(6)
    })
    return Schema.validate(data)
}

module.exports = {signUpValidation, signInValidation}