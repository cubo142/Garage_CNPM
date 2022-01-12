import mongoose from 'mongoose';

var baocaodoanhthuSchema = new mongoose.Schema({
    DanhSachHoaDon:[{
        HoaDon:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "HoaDon"
        }
    }],
    NgayTaoPhieu: String,
    DoanhThu: Number
},{
    versionKey: false
})

const BaoCaoDoanhThu = mongoose.model("BaoCaoDoanhThu", baocaodoanhthuSchema)

export default BaoCaoDoanhThu