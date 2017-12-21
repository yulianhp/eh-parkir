const Model = require('../model/transaction')

class Transaction{
    static findAll(req,res){
        Model.find({},(err,data)=>{
            if(err){
                res.json({message:err})
            } else{
                res.json({message:`all parking data`,data:data})
            }
        })
    }

    static add(req,res){
        let input = {
            checkIn : req.body.checkIn,
            checkOut : req.body.checkOut,
            licensePlate : req.body.licensePlate,
            photo : req.body.photo,
            charge : req.body.charge
        }
        Model.create(input,(err,data)=>{
            if(err){
                res.json({message:err})
            } else{
                res.json({message:`parking data added`,data:data})
            }
        })
    }

    static update(req,res){
        let id = req.params.id
        Model.findByIdAndUpdate(id,{$set: {checkOut:new Date()}},(err,data)=>{
            if(err){
                res.json({message:err})
            } else{
                res.json({message:`parking data in id: ${id}`,data:data})
            }
        })
    }

    static findPlate(req,res){
        let id = req.params.id
        Model.findById(id,(err,data)=>{
            if (err) {
                res.json({message:err})
            } else{
                res.json({message:`we found the plate that you're looking for`,data:data})
            }
        })
    }
}
module.exports = Transaction;
