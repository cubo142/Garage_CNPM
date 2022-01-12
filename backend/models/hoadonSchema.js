import mongoose from 'mongoose';

var hoadonSchema = new mongoose.Schema({
    PhieuTiepNhan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PhieuTiepNhan"
    },
    NgayLap: String,
    TongTien: Number
},{
    versionKey: false
})

const HoaDon = mongoose.model("HoaDon", hoadonSchema)

export default HoaDon