import mongoose from 'mongoose';

var xeSchema = new mongoose.Schema({
    MaLoaiXe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LoaiXe"
    },
    BienSo: String
},{
    versionKey: false
})

const Xe = mongoose.model("Xe", xeSchema)

export default Xe