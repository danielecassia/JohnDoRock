const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../users/model/User');
const AuthorizationError = require('../errors/AuthorizationError');

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'senha',
      session: false,
    },
    async (email, senha, done) => {
      try {
        const user = await User.findOne({
          where: {email: email},
        });

        if (!user) {
          throw new AuthorizationError('Email e/ou senha incorretos');
        }
        const matchingPassword = await bcrypt.compare(senha, user.senha);
        if (!matchingPassword) {
          throw new AuthorizationError('Email e/ou senha incorretos');
        }

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }

  return token;
};

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: cookieExtractor,
    },
    async (jwtPayload, done) => {
      try {
        return done(null, jwtPayload.user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);
