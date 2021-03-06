const JwtStrategy = require('passport-jwt').Strategy 
const ExtractJwt = require('passport-jwt').ExtractJwt
const User  = require('../models/user')


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'

module.exports = (passport) => {
	passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
		User.findById(jwt_payload.id)
			.then(user => {
				if (user) {
					return done(null, user)
				} else {
					return done(null, false)
				}
			})
			.catch(err => {
				return done(err, false)
			})
	}))
}
