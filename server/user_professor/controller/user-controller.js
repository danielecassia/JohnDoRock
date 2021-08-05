const router = require('express').Router();
const ProfessorService = require('../service/UserService');

const {
  jwtMiddleware,
  notLoogedIn,
  loginMiddleware,
  checkRole,
} = require('../../middlewares/auth-middlewares');
const objectFilter = require('../../middlewares/object-filter');
const userValidate = require('../../middlewares/user-validator');

router.post('/professor',
  objectFilter('body', ['name', 'email', 'data_nasc', 'senha']),
  userValidate('createUser'),
  async (req, res, next) => {
    try {
      const user = {

      };

      await ProfessorService.createUser(user);

      res.status(201).end();
    } catch (error) {
      next(error);
    }
  });

  router.get('/professores', jwtMiddleware, async (req, res, next) => {
    try {
      const users = await UserService.getProfessores();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
