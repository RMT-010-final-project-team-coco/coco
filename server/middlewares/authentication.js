const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")

async function authenticate(req, res, next) {
  try {
    if(!req.headers.access_token){
      throw {
        name: "JsonWebTokenError",
        message: "Invalid access token"
      }
    }
    let decoded = verifyToken(req.headers.access_token)

    req.user = {
      id: decoded.id,
      username: decoded.username,
      email: decoded.email
    }

		let checkedUser = await User.findOne({
			where: {
        id: req.user.id,
				username: req.user.username
			}
		})

    if(checkedUser) {
      next()

    } else {
      throw {
        name: "JsonWebTokenError",
        message: "Invalid access token"
      }
    }

  }
  catch(err) {
    next(err)
  }
}

module.exports = authenticate