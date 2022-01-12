import asyncHandler from "express-async-handler";
import LoaiXe from "../models/loaixeSchema.js";

const getLoaiXeList = asyncHandler(async (req, res) => {
    const loaixes = await LoaiXe.find({});
    res.json(loaixes);
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
export { getLoaiXeList };
