import asyncHandler from "express-async-handler";
import Xe from "../models/xeSchema.js";

const getXeList = asyncHandler(async (req, res) => {
    const xes = await Xe.find({});
    res.json(xes);
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
export { getXeList };
