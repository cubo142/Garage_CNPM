import mongoose from 'mongoose';

var phutungSchema = new mongoose.Schema({
    LoaiXe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LoaiXe"
    },
    TenPT: String,
    GiaPT: Number,
    TinhTrang: Boolean
},{
    versionKey: false
})

const PhuTung = mongoose.model("PhuTung", phutungSchema)

export default PhuTung