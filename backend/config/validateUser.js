const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  console.log("@auth")
  const authHeader = req.headers['authorization']

  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.status(401).send({
    errorMsg: "Unable to find token"
  })

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.status(403).send({
      errorMsg: "Unable to varify token",
      error: err
    })

    req.user = user
    console.log("@auth - verified")
    next()
  })
}

module.exports = authenticateToken;