import mongoose from 'mongoose';

var phieutiepnhanSchema = new mongoose.Schema({
    ChiTietSuaChuaDV:[{
        DichVu:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "DichVu"
        }
    }],
    ChiTietSuaChuaPT:[{
        PhuTung:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "PhuTung"
        },
        SoLuong: Number
    }],
    MoTa: String,
    NgayTaoPhieu: String,
    TrangThai: Boolean,
    KhachHang: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "KhachHang"
    },
    XeSuaChua: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Xe"
    },
    NhanVien: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NhanVien"
    }
},{
    versionKey: false
})

const PhieuTiepNhan = mongoose.model("PhieuTiepNhan", phieutiepnhanSchema)

export default PhieuTiepNhan