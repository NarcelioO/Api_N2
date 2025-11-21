import mongoose from "mongoose";
const {Schema} = mongoose

const ProcedureSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    instruction:{
        type:String,
        required:true
    }
})

const DeviceProcedureSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    device:{
        type:String,
        required:true
    },
    procedures:{
        type:[ProcedureSchema],
        default:[]
    }
})

module.exports = mongoose.model("DeviceProcedure", DeviceProcedureSchema)