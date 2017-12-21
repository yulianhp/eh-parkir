var express = require('express');
var router = express.Router();
const Control = require('../controllers/transaction')

/* GET users listing. */
router.get('/',Control.findAll)
router.get('/:id',Control.findPlate)
router.post('/',Control.add)
router.put('/:id',Control.update)


module.exports = router;
