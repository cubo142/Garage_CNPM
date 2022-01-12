import mongoose from 'mongoose';

var dichvuSchema = new mongoose.Schema({
    TenDV: String,
    GiaDV: Number,
    TinhTrang: Boolean
},{
    versionKey: false
})

const DichVu = mongoose.model("DichVu", dichvuSchema)

export default DichVu