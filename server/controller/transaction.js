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
            licensePlate : req.body.licensePlate,
            photo : req.body.photo,
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
        Model.findByIdAndUpdate(id,{$set: {checkOut:req.body.checkOut,charge:req.body.charge}},(err,data)=>{
            if(err){
                res.json({message:err})
            } else{
                res.json({message:`parking data in id: ${id}`,data:data})
            }
        })
    }

    static findPlate(req,res){
        let number = req.body.licensePlate
        Model.findOne({licensePlate:number,checkOut:null},(err,data)=>{
            if (err) {
                res.json({message:err})
            } else{
                res.json({message:`we found the plate that you're looking for`,data:data})
            }
        })
    }
}
module.exports = Transaction;
