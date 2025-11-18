import mongoose from "mongoose";

const AlertSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

export const Alert = mongoose.model('alert', AlertSchema);
