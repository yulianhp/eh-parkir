require('dotenv').config()
const vision = require('@google-cloud/vision');

class visionController{
	static getOCR(req, res){
	const client = new vision.ImageAnnotatorClient({
	  projectId: process.env.VISION_PROJECT,
  	  keyFilename: process.env.VISIONKEY_PATH,
	});
	const fileName = req.file.cloudStoragePublicUrl;
	client
	  .textDetection(fileName)
	  .then(results => {
	    const detections = results[0].textAnnotations;
			// console.log(detections[0].description);
	    // detections.forEach(text => console.log(text));
			res.status(200).json({
				message: 'Berhasil cooy',
				data: detections[0].description
			})
	  })
	  .catch(err => {
	    console.error('ERROR:', err);
	  });
	}
}

module.exports = visionController;