const jwt = require('jsonwebtoken');

const token = jwt.sign({userId:123}, "secretKey", {expiresIn: '1h'});


try {
    const verified = jwt.verify(token, seceretKey);
    console.log("Verify User"+verified);
}catch (err){
    console.error("invalid Token " + err.message);
}

function checkAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).send('Access denied. Admins only.');
    }
    next();
}

module.exports = {token, checkAdmin};

const bcrypt = require('bcrypt');
const hashed = bcrypt.hashSync('myPassword', 10);

console.log(hashed);