import mongoose from 'mongoose';

var khachhangSchema = new mongoose.Schema({
    XeKhachHang: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Xe"
    }],
    TenKH: String,
    DiaChi: String,
    SDT: String
}, {
    versionKey: false
})

const KhachHang = mongoose.model("KhachHang", khachhangSchema)

export default KhachHang