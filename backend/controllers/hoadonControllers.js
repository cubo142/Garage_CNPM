import asyncHandler from "express-async-handler";
import HoaDon from "../models/hoadonSchema.js";

const getHoaDonList = asyncHandler(async (req, res) => {
    const hoadons = await HoaDon.find({})
    .populate({
        path:"PhieuTiepNhan"
    })
    res.json(hoadons);
});

const getHoaDon = asyncHandler(async (req, res) => {
    const hoadon = await HoaDon.findById(req.params.Id)
    .populate({
        path:"PhieuTiepNhan"
    })
    res.json(hoadon);
});

// const authUser = asyncHandler(async (req, res) => {
//     const user=await User.findOne({
//         TenTK:req.query.email,
//         MK:req.query.password
//     })
//     res.json(user)
// });
export { getHoaDonList, getHoaDon };
