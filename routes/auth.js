const router = require('express').Router();
const User = require('../model/user');
const { createUserValidation, loginUserValidation } = require('./validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', async(req, res) => {
    const {error} = createUserValidation.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email alrady exists');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user : user._id});
    }catch(err){
        res.status(400).send(err);

    }
});

router.post('/login', async(req, res) =>{
    const {error} = loginUserValidation.validate(req.body);
    
    if (error) return res.status(400).json({error: error.details[0].message});

    const user = await User.findOne({email : req.body.email});
    if (!user) return res.status(400).json({error: 'user not found'});

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword)  return res.status(400).json({error: 'password is wrong'});

    const token = jwt.sign({user_id: user._id, user: user.name}, process.env.TOKEN_SECRET, {expiresIn: '180s'});
    res.header('auth-token', token).json({auth_token: token});


});

module.exports = router;