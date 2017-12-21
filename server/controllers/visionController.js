const vision = require('@google-cloud/vision');

class visionController{
	static getOCR(req, res){
	const client = new vision.ImageAnnotatorClient({
	  projectId: 'ecommerce-northern',
  	  keyFilename: './visionkey.json',
	});
	const fileName = './plat6.jpg';
	client
	  .textDetection(fileName)
	  .then(results => {
	  	console.log('hasil')
	    const detections = results[0].textAnnotations;
	    console.log('Text:');
	    detections.forEach(text => console.log(text));
	  })
	  .catch(err => {
	    console.error('ERROR:', err);
	  });
	}
}

module.exports = visionController;