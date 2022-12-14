var jwt = require('jsonwebtoken');

const GenerateToken = (id) =>
{
    return jwt.sign({id} , process.env.TOKEN_SCERETE_KEY , {expiresIn : '15d'})
}

module.exports = GenerateToken