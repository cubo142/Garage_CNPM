import asyncHandler from "express-async-handler";
import Xe from "../models/xeSchema.js";

const getXeList = asyncHandler(async (req, res) => {
    const xes = await Xe.find({})
        .populate("LoaiXe")
    res.json(xes);
});

const getXe = asyncHandler(async (req, res) => {
    const xe = await Xe.findById(req.params.Id)
        .populate("LoaiXe")
    res.json(xe);
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
export { getXeList, getXe };
