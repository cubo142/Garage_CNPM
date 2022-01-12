import mongoose from 'mongoose';

var nhanvienSchema = new mongoose.Schema({
    BoPhan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BoPhan"
    },
    TenNV: String,
    DiaChi: String,
    SDT: String
},{
    versionKey: false
})

const NhanVien = mongoose.model("NhanVien", nhanvienSchema)

export default NhanVien