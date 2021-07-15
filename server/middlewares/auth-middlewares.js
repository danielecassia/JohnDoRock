const passport = require('passport');
const jwt = require('jsonwebtoken');

function loginMiddleware(req, res, next) {
  passport.authenticate(
    'login',
    (err, user, info) => {
      try {
        if (err) {
          return next(err);
        }

        req.login(
          user,
          { session: false },
          (error) => {
            if (error) next(error);

            const body = {
              id: user.id,
              cargo: user.cargo,
            };

            const token = jwt.sign({ user: body }, process.env.SECRET_KEY,
              { expiresIn: process.env.JWT_EXPIRATION });

            res.cookie('jwt', token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
            });

            res.status(204).end();
          },
        );
      } catch (error) {
        next(error);
      }
    },
  )(req, res, next);
}

function jwtMiddleware(req, res, next) {
  passport.authenticate('jwt', { session: false },
    (err, user, info) => {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(401).send('Você precisa estar logado para realizar a ação!');
      }

      req.user = user;

      next();
    })(req, res, next);
}

function checkRole(cargo) {
  return (req, res, next) => {
    if (req.user) {
      if (req.user.cargo === cargo) {
        next();
      } else {
        res.status(401).send('Você não tem permissão para realizar essa ação!');
      }
    }
  };
}

function notLoogedIn(req, res, next) {
  const token = req.cookies['jwt'];
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (!(err instanceof jwt.TokenExpiredError)) {
        res.status(400).send('Você já está logado!');
      }
    });
  }
  next();
}

module.exports = {
  loginMiddleware,
  notLoogedIn,
  jwtMiddleware,
  checkRole,
};
