import mongoose from 'mongoose';

var khachhangSchema = new mongoose.Schema({
    XeKhachHang:[{
        Xe:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Xe"
        },
        SoLuong: Number
    }],
    TenKH: String,
    DiaChi: String,
    SDT: String
},{
    versionKey: false
})

const KhachHang = mongoose.model("KhachHang", khachhangSchema)

export default KhachHang