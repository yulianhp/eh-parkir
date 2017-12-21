const router = require('express').Router()
const visionController = require('../controllers/visionController')

router.get('/', visionController.getOCR)

module.exports = router