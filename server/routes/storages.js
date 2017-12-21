'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../helpers/images'),
      visionController = require('../controllers/visionController')
      
/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' })
})
router.post('/upload',
  images.multer.single('image'),
  images.sendUploadToGCS, visionController.getOCR
  )

module.exports = router

// (req, res) => {
//   res.send({
//     status: 200,
//     message: 'Your file is successfully uploaded',
//     link: req.file.cloudStoragePublicUrl
//   })
// }