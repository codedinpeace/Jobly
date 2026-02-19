const express = require('express')
const { register, login, logout, edit, check } = require('../controllers/auth.controllers')
const router = express.Router()

router.get("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/edit/:id", edit)
router.get("/check", check)

module.exports = router
