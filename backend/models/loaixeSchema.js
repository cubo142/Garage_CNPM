import mongoose from 'mongoose';

var loaixeSchema = new mongoose.Schema({
    TenLoaiXe: String,
    SoCho: String,
    TrongTai: String,
},{
    versionKey: false
})

const LoaiXe = mongoose.model("LoaiXe", loaixeSchema)

export default LoaiXe