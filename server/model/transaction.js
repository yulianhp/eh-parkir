var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var parkir = new Schema({
checkIn : { type: Date, default: Date.now },
checkOut : Date,
licensePlate : String,
photo : String,
charge : Number,
})

var Transaction = mongoose.model('Transaction', parkir);

module.exports=Transaction;