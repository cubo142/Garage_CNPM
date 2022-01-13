import asyncHandler from "express-async-handler";
import KhachHang from "../models/khachhangSchema.js";

const getKhachHangList = asyncHandler(async (req, res) => {
    const khachhangs = await KhachHang.find({})
        .populate({
            path: "XeKhachHang"
        })
    res.json(khachhangs);
});

const getKhachHang = asyncHandler(async (req, res) => {
    const khachhang = await KhachHang.findById(req.params.Id)
        .populate({
            path: "XeKhachHang"
        })
    res.json(khachhang);
});
// const getUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.Id);
//     res.json(user);
// });

// const authUser = asyncHandler(async (req, res) => {
//     const user=await User.findOne({
//         TenTK:req.query.email,
//         MK:req.query.password
//     })
//     res.json(user)
// });
export { getKhachHangList, getKhachHang };
