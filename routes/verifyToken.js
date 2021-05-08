const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.status(400).json({error: 'access denied'});
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err){
        console.log(err);
        res.status(400).json({error: err.message});
    }
}