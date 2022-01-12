import mongoose from 'mongoose';

var bophanSchema = new mongoose.Schema({
    TenBoPhan: String
},{
    versionKey: false
})

const BoPhan = mongoose.model("BoPhan", bophanSchema)

export default BoPhan