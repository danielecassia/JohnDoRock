const router = require('express').Router();
const UserService = require('../service/UserService');

const {
  jwtMiddleware,
  notLoogedIn,
  loginMiddleware,
  checkRole,
} = require('../../middlewares/auth-middlewares');
const objectFilter = require('../../middlewares/object-filter');
const userValidate = require('../../middlewares/user-validator');

router.post('/',
  objectFilter('body', ['name', 'email', 'data_nasc', 'senha', 'cargo', 'instrumento']),
  userValidate('createUser'),
  async (req, res, next) => {
    try {
      const user = {
        name: req.body.name,
        email: req.body.email,
        senha: req.body.senha,
        data_nasc: req.body.data_nasc,
        cargo: req.body.cargo,
        instrumento: req.body.instrumento,
      };

      await UserService.createUser(user);
      res.status(201).end();
    } catch (error) {
      next(error);
    }
  });

router.get('/', jwtMiddleware, async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/user/:id', jwtMiddleware, async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await UserService.getUserById(userId);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.get('/ultimosalunos', jwtMiddleware, async (req, res, next) => {
  try {
    const users = await UserService.getUltimosAlunos();
    res.status(200).json(users);
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

router.get('/profAluno/:id', jwtMiddleware, async (req, res, next) => {
  try {
    const profId = req.params.id;
    // console.log(profId);
    const users = await UserService.getAlunosProfessor(profId);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.put('/user/:id', jwtMiddleware,
  objectFilter('body', ['name', 'instrumento', 'data_nasc']),
  // userValidate('updateUser'),
  async (req, res, next) => {
    try {
      const userId = req.params.id;
      await UserService.updateUser(userId, req.user.id, req.user.cargo, req.body);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

router.put('/addprofessor/:id', jwtMiddleware,
  objectFilter('body', ['professor']),
  // userValidate('updateUser'),
  async (req, res, next) => {
    try {
      const userId = req.params.id;
      console.log(userId);
      await UserService.updateAluno(userId, req.body);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

router.delete('/user/:id', jwtMiddleware, checkRole('admin'), async (req, res, next) => {
  try {
    const userId = req.params.id;
    await UserService.deleteUser(userId, req.user.id);

    res.status(204).end();
  } catch (error) {
    next(error);
    // console.log('erro ta aqui');
  }
});

router.post('/login', notLoogedIn, userValidate('login'), loginMiddleware);

router.get('/logout', jwtMiddleware, async (req, res, next) => {
  try {
    res.clearCookie('jwt');
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.get('/me', jwtMiddleware, async (req, res, next) => {
  try {
    const user = await UserService.getCurrentUser(req.user.id);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
