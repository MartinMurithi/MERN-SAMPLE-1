const express = require("express")
const router = express.Router()

// import the controller
const { getTest } = require("../controllers/test")

// route for the api
router.get("/api/v1", getTest)

module.exports = { router }