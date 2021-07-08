const router = require('express').Router();

const UserService = require('../service/UserService');

router.put('/user/:id', async (req, res) => {
  try {
    await UserService.updateUser(req.params.id, req.body);
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

router.delete('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await UserService.deleteUser(userId);
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
