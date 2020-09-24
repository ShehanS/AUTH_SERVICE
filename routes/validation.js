
const Joi = require('@hapi/joi');

const createUserValidation = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  
});

const loginUserValidation = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  
});

  module.exports.createUserValidation = createUserValidation;
  module.exports.loginUserValidation = loginUserValidation;