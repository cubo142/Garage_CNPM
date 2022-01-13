import asyncHandler from "express-async-handler";
import LoaiXe from "../models/loaixeSchema.js";

const getLoaiXeList = asyncHandler(async (req, res) => {
    const loaixes = await LoaiXe.find({})
        .populate("LoaiXe")
    res.json(loaixes);
});

const getLoaiXe = asyncHandler(async (req, res) => {
    const loaixe = await LoaiXe.findById(req.params.Id)
        .populate("LoaiXe")
    res.json(loaixe);
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
export { getLoaiXeList, getLoaiXe };
