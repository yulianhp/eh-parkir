var express = require('express');
var router = express.Router();
const Control = require('../controller/transaction')

/* GET users listing. */
router.get('/',Control.findAll)
router.post('/plate',Control.findPlate)
router.post('/',Control.add)
router.put('/:id',Control.update)


module.exports = router;
