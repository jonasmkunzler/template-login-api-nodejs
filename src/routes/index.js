const router = require('express').Router()

// Controller
const UserController = require('../controllers/userController')

// Middlewares
const { ipMiddleware } = require('../middleware/ipValidation')
const validate = require("../middleware/handleValidations");
const {
userCreateValidation,
loginValidation,
userUpdateValidation,
} = require("../middleware/userValidations");
const authGuard = require("../middleware/authGuard");


// Routes
router.get("/", ipMiddleware, UserController.index)
router.post("/register", ipMiddleware, userCreateValidation(), validate, UserController.register);
router.get("/profile", authGuard, UserController.getCurrentUser);
router.post("/login", ipMiddleware, loginValidation(), validate, UserController.login);
router.put(
"/",
ipMiddleware,
authGuard,
userUpdateValidation(),
validate,
UserController.update
);
router.get("/:id", UserController.getUserById)


router.use((req, res) => {
    res.send('Página não encontrada')
})

module.exports = router
