const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

<<<<<<< HEAD
router.post("/signup", userController.createUser, (req, res) => {
  res.status(200).send(res.locals.user);
});

module.exports = router;
=======
router.post('/signup', userController.createUser, (req, res) => {
    res.status(200).json(res.locals.user);
})

router.post('/login', userController.verifyUser, (req, res) => {
    res.status(200).json(res.locals.user);
})
module.exports = router;
>>>>>>> dev
