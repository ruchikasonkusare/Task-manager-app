const express = require("express");
const router = express.Router();

// const { register, login } = require("../controllers/authController");

// router.post("/register", register);
// router.post("/login", login);


const { register, login } = require("../controllers/authController");
const { body } = require("express-validator");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Login successful
 */

// REGISTER
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be 6+ chars")
  ],
  register
);

// LOGIN
router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").notEmpty()
  ],
  login
);



module.exports = router;

