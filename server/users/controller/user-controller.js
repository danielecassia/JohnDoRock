const router = require('express').Router();
const UserService = require('../service/UserService');
const {
  jwtMiddleware,
  notLoogedIn,
  loginMiddleware,
  checkRole,
} = require('../../middlewares/auth-middlewares');

router.post('/', async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      senha: req.body.senha,
      data_nasc: req.body.data_nasc,
      cargo: 'aluno',
    };

    await UserService.createUser(user);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.get('/', jwtMiddleware, async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.get('/user/:id', jwtMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserService.getUserById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put('/user/:id', jwtMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;
    await UserService.updateUser(userId, req.user.id, req.user.cargo, req.body);
    res.status(204).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/user/:id', jwtMiddleware, checkRole('admin'), async (req, res) => {
  try {
    const userId = req.params.id;
    await UserService.deleteUser(userId, req.user.id);

    res.status(204).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/login', notLoogedIn, loginMiddleware);

router.get('/logout', jwtMiddleware, (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

router.get('/me', jwtMiddleware, async (req, res) => {
  const user = await UserService.getCurrentUser(req.user.id);

  res.status(200).json(user);
});

module.exports = router;
